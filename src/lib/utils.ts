// src/lib/utils.ts
// Shared utility functions

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge Tailwind classes cleanly
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Generate a random invoice number e.g. "INV-0042"
export function generateInvoiceNumber(count: number): string {
  return `INV-${String(count).padStart(4, "0")}`;
}

// Format GHS from pesewas
export function formatGhs(pesewas: number): string {
  return new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
    minimumFractionDigits: 2,
  }).format(pesewas / 100);
}

// Truncate long strings
export function truncate(str: string, length: number): string {
  return str.length > length ? `${str.slice(0, length)}...` : str;
}

// Get initials from a name e.g. "Kofi Mensah" → "KM"
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// Format bytes to human readable e.g. 1048576 → "1 MB"
export function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

// Check if a file is a video by MIME type
export function isVideoMime(mimeType: string): boolean {
  return mimeType.startsWith("video/");
}

// Check if a file is an image by MIME type
export function isImageMime(mimeType: string): boolean {
  return mimeType.startsWith("image/");
}

// Get file type enum from MIME type
export function getFileType(mimeType: string): "VIDEO" | "IMAGE" | "PDF" | "ZIP" | "OTHER" {
  if (isVideoMime(mimeType)) return "VIDEO";
  if (isImageMime(mimeType)) return "IMAGE";
  if (mimeType === "application/pdf") return "PDF";
  if (mimeType === "application/zip" || mimeType === "application/x-zip-compressed") return "ZIP";
  return "OTHER";
}

// App URL helper
export function getAppUrl(path = ""): string {
  return `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}${path}`;
}
