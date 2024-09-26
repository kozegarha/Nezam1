<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated class="bg-purple-7 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <q-icon size="40px"><img src="icon.jpg" /></q-icon>
          </q-avatar>
          نظام مهندسی قزوین
        </q-toolbar-title>
        نظام مهندسی قزوین
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="rightDrawerOpen = !rightDrawerOpen"
        />
      </q-toolbar>
    </q-header>
    <!--  بعدا اصلاح میکنیم که منو ها در سمت راست قرار بگیرد-->
    <q-drawer show-if-above v-model="rightDrawerOpen" side="right">
      <!-- drawer content -->
      <q-list>
        <q-item to="/dashboard/Form">
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
      <q-page class="row no-wrap">
        <div class="col">
          <div class="full-height">
            <q-scroll-area class="col q-pr-sm full-height" visible>
              <router-view :key="$route.fullPath" />
            </q-scroll-area>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const rightDrawerOpen = ref(true);
</script>
