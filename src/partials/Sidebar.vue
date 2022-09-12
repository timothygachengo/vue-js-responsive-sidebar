<template>
  <div v-cloak :class="`sidebar ${isMenuOpen && 'is-expanded'}`">
    <div class="logo">
      <img
        src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/344/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-shadow-tal-revivo.png"
        alt="Logo"
      />
    </div>

    <div class="menu-toggle-container">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons"> keyboard_double_arrow_right </span>
      </button>
    </div>

    <div class="menu">
      <router-link to="/" class="menu-link">
        <span class="material-icons">home</span>
        <span class="menu-text">Home</span>
      </router-link>

      <router-link to="/about" class="menu-link">
        <span class="material-icons"> description </span>
        <div class="menu-text">About</div>
      </router-link>
    </div>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

const isMenuOpen = ref(false);

export default defineComponent({
  name: "Sidebar",
  setup() {
    const ToggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      isMenuOpen,
      ToggleMenu,
    };
  },
});
</script>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: calc(2rem + 32px);
  background: var(--dark);
  color: var(--light);
  padding: 1rem;
  overflow: hidden;
  transition: 0.4s all ease-in-out;

  .menu-toggle-container {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    margin-left: 1rem;
    position: relative;
    top: 0;
    transition: 0.4s all ease-in-out;

    .menu-toggle {
      transition: 0.4s all ease-in-out;
      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-container {
      top: -3rem;

      .menu-toggle {
        transform: rotate(180deg);

        button {
          .material-icons {
            margin-right: 1rem;
            width: 24px;
            height: 24px;
          }
        }
      }
    }

    .menu {
      .menu-link {
        .menu-text {
          margin-left: 10px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
  }

  .svg-icons {
    fill: var(--light);
    width: 24px;
    height: 24px;
  }
}

.logo {
  margin-bottom: 1rem;

  img {
    width: 2rem;
  }
}

.menu {
  margin: 0 -1rem;

  .menu-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    padding: 0.5rem 1rem;
    margin: 10px 0;

    .material-icons {
      font-size: 2rem;
      color: var(--light);
      transition: 0.2s ease-in-out;
    }

    .menu-text {
      color: var(--light);
      transition: 0.2s ease-in-out;
      margin-left: calc(2rem + 32px);
      font-size: 20px;
    }

    &:hover {
      background-color: var(--dark-alt);

      .material-icons,
      .text {
        color: var(--primary);
      }
    }
  }
}
</style>
