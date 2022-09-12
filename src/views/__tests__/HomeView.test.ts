import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import HomeView from "../HomeView.vue";

describe("Test the home view", () => {
  it("should show the home view", () => {
    const homeViewWrapper = mount(HomeView);
    expect(homeViewWrapper.text()).toContain("Home");
  });
});
