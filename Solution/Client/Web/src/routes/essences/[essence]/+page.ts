import type { NavigationEvent } from "@sveltejs/kit";

export const load = ({ params }: NavigationEvent) => {
  return {
    essence: params.essence
  };
};