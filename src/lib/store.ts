"use client";

import { create } from "zustand";
import { suggestions, workflows } from "@/data/mock-data";
import { Workflow } from "@/types";

type AppState = {
  workflows: Workflow[];
  suggestions: typeof suggestions;
  createWorkflow: (workflow: Workflow) => void;
};

export const useAppStore = create<AppState>((set) => ({
  workflows,
  suggestions,
  createWorkflow: (workflow) =>
    set((state) => ({
      workflows: [workflow, ...state.workflows],
    })),
}));
