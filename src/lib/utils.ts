import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDuration(duration: string): string {
  return duration;
}

export function getProjectStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    live: "Live",
    "in-progress": "In Progress",
    industry: "Industry Project",
    archived: "Archived",
  };
  return labels[status] || status;
}

export function getProjectStatusColor(status: string): string {
  const colors: Record<string, string> = {
    live: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    "in-progress": "text-amber-400 bg-amber-400/10 border-amber-400/20",
    industry: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    archived: "text-neutral-400 bg-neutral-400/10 border-neutral-400/20",
  };
  return colors[status] || colors.archived;
}

export function getFeaturedProjects(
  projects: typeof import("./portfolio-data").portfolioData.projects
) {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => a.priority - b.priority);
}

export function getAllProjects(
  projects: typeof import("./portfolio-data").portfolioData.projects
) {
  return projects.sort((a, b) => a.priority - b.priority);
}