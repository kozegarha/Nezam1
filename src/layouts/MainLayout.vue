<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <div class="row">
        <div class="col-md-6">
          <router-view />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>
<style>
.custom-rounded-image {
  border-radius: 15px;
  object-fit: cover;
}
</style>
