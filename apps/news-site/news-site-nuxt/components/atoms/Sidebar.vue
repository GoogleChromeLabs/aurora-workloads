<script setup>
import { inject } from "vue";
import styles from "news-site-css/dist/sidebar.module.css";

const { onClose } = defineProps({
    onClose: Function
});

const { content, sitemap } = inject("data");

const keys = Object.keys(content);
const navItems = keys.reduce(
    (result, key) => {
        result.push(key);
        return result;
    },
    []
);
</script>

<template>
  <div
    id="sitemap"
    :class="[styles.sidebar, styles.open]"
  >
    <button
      id="close-sitemap-link"
      :class="styles['sidebar-close-button']"
      title="Close Button"
      @click="onClose"
    >
      <div
        :class="[styles['sidebar-close-button-icon'], 'animated-icon', 'close-icon', 'hover']"
        title="Close Icon"
      >
        <span class="animated-icon-inner">
          <span />
          <span />
        </span>
      </div>
    </button>
    <header :class="styles['sidebar-header']">
      <h2>{{ sitemap.header }}</h2>
    </header>
    <section :class="styles['sidebar-body']">
      <details
        v-for="key in navItems"
        :id="`sidebar-${content[key].name}-details`"
        :key="`sidebar-${content[key].name}-details`"
        :class="styles['sidebar-group']"
      >
        <summary>{{ content[key].name }}</summary>
        <ul :class="styles['sidebar-list']">
          <li
            v-for="section in content[key].sections"
            :key="`sidebar-section${section.id}`"
            :class="styles['sidebar-list-item']"
          >
            <NuxtLink
              :to="`${content[key].url}#${section.id}`"
              @click="onClose"
            >
              {{ section.name }}
            </NuxtLink>
          </li>
        </ul>
      </details>
    </section>
  </div>
</template>
