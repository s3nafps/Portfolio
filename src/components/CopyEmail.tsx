"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

const email = "mohamed.senator@icloud.com";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button className="contact-link contact-copy" type="button" onClick={copyEmail}>
      {copied ? <Check aria-hidden="true" size={18} /> : <Copy aria-hidden="true" size={18} />}
      {copied ? "Email copied" : "Copy email"}
    </button>
  );
}
