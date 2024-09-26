<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-purple-7 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <q-icon size="40px"><img src="icon.jpg" /></q-icon>
          </q-avatar>
          نظام مهندسی قزوین
        </q-toolbar-title>
        نظام مهندسی قزوین
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" elevated>
      <!-- drawer content -->
      <q-list bordered>
        <q-item to="/dashboard/form">
          <q-item-section>داشبورد</q-item-section>
        </q-item>
        <q-item to="/dashboard/portal">
          <q-item-section>پروفایل</q-item-section>
        </q-item>
        <q-item to="/">
          <q-item-section>خروج</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
