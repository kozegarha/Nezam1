<template>
  <q-card class="min-width" style="height: 400px" dir="rtl">
    <div class="row">
      <div class="row">
        <div class="text-bold">
          ویرایش شماره موبایل
          <q-btn flat v-close-popup round dense icon="close" />
          <q-input standout class="q-my-xs" v-model="phonenumber" />
          <p>برای ثبت این شماره باید آن را تایید کنید.</p>
        </div>
      </div>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const phonenumber = ref();
</script>
