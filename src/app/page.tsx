import PortfolioClient from "@/components/PortfolioClient";
import { getGithubProjects } from "@/lib/github-projects";

export const revalidate = 3600;

export default async function Home() {
  const { projects, source } = await getGithubProjects();

  return <PortfolioClient projects={projects} projectSource={source} />;
}
