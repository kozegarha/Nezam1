<template>
  <q-card class="min-width" style="height: 400px" dir="rtl">
    <q-card-section>
      <span class="text-bold">ثبت اطلاعات شناسایی</span>
      <q-separator color="grey-6" inset />
      <span color="grey"
        >لطفا اطلاعات شناسایی خود را وارد کنید. نام و نام خانوادگی شما باید با
        اطلاعاتی که وارد می‌کنید همخوانی داشته باشند.</span
      >
      <div class="row">
        <div class="row">
          <div class="col-6">نام*</div>
          <q-input standout class="q-my-xs" v-model="firstname" />
        </div>

        <div>
          <div class="row">
            <div class="col-6">نام و نام خانوادگی*</div>

            <q-input standout class="q-my-xs" v-model="lastname" />
          </div>
        </div>

        <div class="col-12">
          <q-checkbox
            right-label
            v-model="right"
            label="اتباع خارجی هستم و کدملی ندارم"
          />
        </div>
        <div class="col-12">
          <div class="col-6">کد ملی *</div>
          <q-input standout class="q-my-xs" v-model="password" />
        </div>
        <div class="row">
          <div class="col-6 q-mb-xs">تاریخ تولد</div>

          <div class="row">
            <div class="col-4">
              <div>روز</div>
              <div>
                <q-select outlined v-model="model" :options="options" />
              </div>
            </div>
            <div class="col-4">
              <div>ماه</div>
              <div>
                <q-select
                  outlined
                  v-model="mod"
                  :options="option2"
                  label="Outlined"
                />
              </div>
            </div>
            <div class="col-4">
              <div>سال</div>
              <div>
                <q-select
                  outlined
                  v-model="model1"
                  :option="option3"
                  label="Outlined"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div dir="ltr">
        <q-btn color="primary" label="بررسی اطلاعات" />
      </div>
      <router-view
    /></q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const firstname = '';
const lastname = '';
const right = 'flase';
const password = '';
const model = ref();
const options = ref();
const loadData1 = () => {
  for (let a = 1; a < options.value.length; a++) {
    console.log(a + 1);
  }
};
loadData1();
const mod = ref();
const option2 = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'ابان',
  'اذر',
  'دی',
  'بهمن',
  'اسفند',
];

// const dialog1 = ref(false);
const model1 = ref();
const option3 = ref();
const loadData = () => {
  for (let a = 1336, b = +1; b < option3.value.length; a + 1) {
    console.log(a + b);
  }
};
loadData();
</script>
