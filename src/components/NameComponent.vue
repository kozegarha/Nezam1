<template>
  <q-card class="q-mt-md" flat bordered>
    <q-card-section class="row">
      <div class="col-md-6 self-center">
        <!-- تیتر -->
        <span class="text-bold">ثبت اطلاعات شناسایی</span>
        <q-separator color="grey-6" inset />
        <span color="grey">
          لطفا اطلاعات شناسایی خود را وارد کنید. نام و نام خانوادگی شما باید با
          اطلاعاتی که وارد می‌کنید همخوانی داشته باشند.
        </span>

        <div class="row q-gutter-md">
          <!-- نام -->
          <div class="col-12 col-md-6">
            <q-input
              standout
              class="q-my-xs"
              v-model="firstname"
              label="نام*"
            />
          </div>

          <!-- نام خانوادگی -->
          <div class="col-12 col-md-6">
            <q-input
              standout
              class="q-my-xs"
              v-model="lastname"
              label="نام خانوادگی*"
            />
          </div>

          <!-- کد ملی و اتباع خارجی -->
          <div class="col-12">
            <q-checkbox
              v-model="right"
              label="اتباع خارجی هستم و کدملی ندارم"
            />
          </div>

          <div class="col-12">
            <q-input
              standout
              class="q-my-xs"
              v-model="password"
              label="کد ملی*"
            />
          </div>

          <!-- تاریخ تولد -->
          <div class="col-12">
            <div class="row q-gutter-md">
              <!-- روز -->
              <div class="col-4">
                <q-select
                  outlined
                  v-model="birthDay"
                  :options="dayOptions"
                  label="روز"
                />
              </div>
              <!-- ماه -->
              <div class="col-4">
                <q-select
                  outlined
                  v-model="birthMonth"
                  :options="monthOptions"
                  label="ماه"
                  dense
                  emit-value
                  map-options
                />
              </div>
              <!-- سال -->
              <div class="col-4">
                <q-select
                  outlined
                  v-model="birthYear"
                  :options="yearOptions"
                  label="سال"
                  dense
                  emit-value
                  map-options
                />
              </div>
            </div>
          </div>
        </div>

        <!-- دکمه بررسی اطلاعات -->
        <div dir="ltr" class="q-mt-md">
          <q-btn color="primary" label="بررسی اطلاعات" />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const firstname = ref('');
const lastname = ref('');
const right = ref(false);
const password = ref('');
const birthDay = ref(null);
const birthMonth = ref(null);
const birthYear = ref(null);

const dayOptions = Array.from({ length: 31 }, (_, i) => i + 1);
const monthOptions = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند',
];
const yearOptions = Array.from({ length: 100 }, (_, i) => 1300 + i);
</script>

