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
          <q-input
            standout
            class="q-my-xs"
            :model-value="modelValue.firstName"
          />
        </div>

        <div>
          <div class="row">
            <div class="col-6">نام و نام خانوادگی*</div>

            <q-input
              standout
              class="q-my-xs"
              :model-value="modelValue.lastName"
            />
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
          <q-input
            standout
            class="q-my-xs"
            :model-value="modelValue.password"
          />
        </div>
        <div class="row">
          <div class="col-6 q-mb-xs">تاریخ تولد</div>

          <div class="row">
            <div class="col-4">
              <div>روز</div>
              <div class="col">
                <q-select
                  outlined
                  v-model="day"
                  :options="optionsDays"
                  dense
                  style="min-width: 100px"
                />
              </div>
            </div>
            <div class="col-4">
              <div>ماه</div>
              <div class="col">
                <q-select
                  outlined
                  v-model="mounth"
                  :options="optionsMounth"
                  dense
                  style="min-width: 100px"
                />
              </div>
            </div>
            <div class="col-4">
              <div>سال</div>
              <div class="col">
                <q-select
                  outlined
                  v-model="years"
                  :options="optionsYears"
                  dense
                  style="min-width: 100px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div dir="ltr">
        <q-btn color="primary" label="بررسی اطلاعات" />
      </div>
      <!-- <router-view
    /> -->
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
interface MyProps {
  modelValue: {
    firstName: string;
    lastName: string;
    nationalCode: string;
    mobile: string;
    mobileStatus: boolean;
    email: string;
    password: string;
    iban: string;
    ibanStatus: boolean;
    birthday: string;
    eghtesadiCode: string;
    job: string;
  };
}

const right = 'flase';
const day = ref();
const optionsDays = ref<number[]>([]);
const optionsMounth = [
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
const optionsYears = ref<number[]>([]);

const mounth = ref();
const years = ref();
defineProps<MyProps>();
const setDate = () => {
  for (let a = 1; a <= 31; a++) {
    optionsDays.value.push(a);
  }
  for (let i = 1403; i >= 1360; i--) {
    optionsYears.value.push(i);
  }
};
setDate();
</script>
