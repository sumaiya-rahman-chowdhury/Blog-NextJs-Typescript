import { title } from "process";
import { Metadata } from "next";

export function getMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
  };
}
