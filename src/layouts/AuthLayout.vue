<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <div class="row">
        <div class="col-md-6">
          <router-view />
        </div>
        <div class="col-6 mobile-hide" src="">
          <img
            class="q-ma-xl custom-rounded-image"
            src="./login.jpg"
            title="hello welcome"
          />
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
