import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import AboutView from "../AboutView.vue";

describe("Test the about view", () => {
  it("should show the about view", () => {
    const aboutViewWrapper = mount(AboutView);
    expect(aboutViewWrapper.text()).toContain("About");
  });
});
