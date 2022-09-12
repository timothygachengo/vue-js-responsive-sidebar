import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sidebar from "../Sidebar.vue";

const SidebarWithRouter = {
  extends: Sidebar,
  setup() {
    return {
      isMenuOpen: true,
      route: {
        path: "/",
      },
    };
  },
};

describe("Test the sidebar", () => {
  it("should show the sidebar", () => {
    const sidebarWrapper = mount(SidebarWithRouter, {
      global: {
        stubs: ["router-link", "router-view"],
      },
    });
    expect(sidebarWrapper.text()).toContain("Menu");
  });
});
