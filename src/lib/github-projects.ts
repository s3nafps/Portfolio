import {
  FALLBACK_PROJECTS,
  FEATURED_PROJECTS,
  type GithubRepo,
  type PortfolioProject,
} from "./portfolio-data";

const GITHUB_REPOS_URL =
  "https://api.github.com/users/s3nafps/repos?per_page=100&sort=updated";

function isValidHomepage(homepage: string | null): homepage is string {
  if (!homepage) return false;

  try {
    const url = new URL(homepage);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function describeRepo(repo: GithubRepo): string {
  const featured = FEATURED_PROJECTS[repo.name];
  if (featured) return featured.description;

  return (
    repo.description ||
    `Public ${repo.language || "software"} repository from Mohamed Senator's GitHub workspace.`
  );
}

function toPortfolioProject(repo: GithubRepo): PortfolioProject {
  const featured = FEATURED_PROJECTS[repo.name];

  if (featured) {
    return {
      ...featured,
      repo: repo.html_url,
      language: repo.language || featured.language,
      topics: repo.topics?.length ? repo.topics : featured.topics,
      homepage:
        featured.homepage ||
        (isValidHomepage(repo.homepage) ? repo.homepage : undefined),
      stars: repo.stargazers_count,
      updatedAt: repo.updated_at,
      archived: repo.archived,
      fork: repo.fork,
      status: repo.archived ? "archived" : featured.status,
    };
  }

  return {
    name: repo.name,
    repo: repo.html_url,
    description: describeRepo(repo),
    language: repo.language || "Repository",
    topics: repo.topics || [],
    homepage: isValidHomepage(repo.homepage) ? repo.homepage : undefined,
    stars: repo.stargazers_count,
    updatedAt: repo.updated_at,
    archived: repo.archived,
    fork: repo.fork,
    status: repo.archived ? "archived" : "active",
    visual: "generic",
    featured: false,
    problem:
      "This repository extends the public engineering workspace with a focused implementation or experiment.",
    built:
      repo.description ||
      "A public project that demonstrates practical implementation, automation, or application-building work.",
    architecture:
      "Architecture details are available in the repository source and documentation.",
    security:
      "Presented from public repository metadata only; no private infrastructure details are exposed.",
    technologies: [repo.language || "Code", ...(repo.topics || []).slice(0, 4)],
  };
}

function sortProjects(projects: PortfolioProject[]) {
  return [...projects].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    if (a.archived !== b.archived) return a.archived ? 1 : -1;

    return (
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
  });
}

export async function getGithubProjects(): Promise<{
  projects: PortfolioProject[];
  source: "github" | "fallback";
}> {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "User-Agent": "mohamed-senator-portfolio",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(GITHUB_REPOS_URL, {
      headers,
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`);
    }

    const repos = (await response.json()) as GithubRepo[];
    const meaningfulRepos = repos.filter((repo) => {
      if (!repo.fork) return true;
      return Boolean(FEATURED_PROJECTS[repo.name]);
    });

    const fromGithub = meaningfulRepos.map(toPortfolioProject);
    const missingFeatured = FALLBACK_PROJECTS.filter(
      (fallback) =>
        !fromGithub.some(
          (project) => project.name.toLowerCase() === fallback.name.toLowerCase(),
        ),
    );

    return {
      projects: sortProjects([...fromGithub, ...missingFeatured]),
      source: "github",
    };
  } catch {
    return {
      projects: sortProjects(FALLBACK_PROJECTS),
      source: "fallback",
    };
  }
}
