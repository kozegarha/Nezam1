<template>
  <div class="row">
    <q-card class="col-6" flat bordered dense>
      <div class="row items-center q-mr-md col-6">
        <div class="col-6">
          <p class="text-grey">نام و نام خانوادگی</p>
          <p class="">عارفه کوزه گرها</p>
        </div>
        <div class="col-6">
          <q-icon class="cursor-pointer" name="edit" size="md" />

          <q-dialog persistent><FileComponent></FileComponent> </q-dialog>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
// const phonenumber = ref();
</script>
