<template>
  <q-card class="q-mt-md" flat bordered>
    <q-card-section class="row">
      <div class="col-md-6 self-center">
        <q-avatar size="126px">
          <img src="/profile.jpg" />
        </q-avatar>
      </div>
      <div class="col-md-6" dir="rtl">
        <div class="row">
          <p class="text-grey">نام:</p>
          <p class="q-mr-xs">عارفه</p>
        </div>
        <div class="row">
          <p class="text-grey">نام خانوادگی:</p>
          <p class="q-mr-xs">کوزه گرها</p>
        </div>
        <div class="row">
          <p class="text-grey">موبایل:</p>
          <p class="q-mr-xs">09907077264</p>
        </div>
      </div>
      <router-view />
    </q-card-section>
  </q-card>
</template>
<style>
</style>
