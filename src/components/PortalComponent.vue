<template>
  <div class="q-mr-xs" dir="rtl" style="font-size: 15px">
    <div dir="auto" style="full-width">
      <q-card class="q-mb-md" flat bordered>
        <q-banner inline-actions class="text-orange">
          <template v-slot:avatar>
            <q-icon>
              <img class="self-center" src="icons/icon1.png" alt="" />
            </q-icon>
          </template>
          با تایید هویت می‌توانید‌ امنیت حساب کاربری‌تان را افزایش دهید و از
          امکان «خرید اعتباری» نیز استفاده کنید
          <template v-slot:action>
            <q-btn flat color="blue" label="تایید هویت" />
          </template>
        </q-banner>
      </q-card>
    </div>

    <div class="row">
      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">نام و نام خانوادگی</p>
            <p class="">عارفه کوزه گرها</p>
          </div>
          <div class="col-6">
            <q-icon
              class="cursor-pointer"
              name="edit"
              size="xs"
              @click="openDialog"
            />
          </div>
        </div>
      </q-card>
      <q-dialog v-model="showDialog">
        <NameComponent></NameComponent>
      </q-dialog>
      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">کدملی</p>
            <p class="">4311636636</p>
          </div>
          <div class="col-6">
            <q-icon
              class="cursor-pointer"
              name="edit"
              size="md"
              @click="openDialog"
            />
          </div>
        </div>
      </q-card>
      <q-dialog v-model="showDialog"><NameComponent></NameComponent> </q-dialog>
      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">
              موبایل
              <q-chip color="green" text-color="white" size="10px">
                تایید شده
              </q-chip>
            </p>
            <p class="">09907077264</p>
          </div>
          <div class="col-6">
            <q-icon
              class="cursor-pointer"
              name="edit"
              size="md"
              @click="openDialog"
            />
            <q-dialog v-model="showDialog" persistent
              ><MobileComponent></MobileComponent>
            </q-dialog>
          </div>
        </div>
      </q-card>

      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">ایمیل</p>
            <p>kozegargha315@gmail.com</p>
          </div>
          <div class="col-6">
            <q-btn flat color="blue">
              <q-icon class="q-ml-md">
                <img src="icons/edit-text.png" sizes="10px" /> </q-icon
            ></q-btn>
          </div>
        </div>
      </q-card>

      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">رمزعبور</p>
            <p>۰۰۰۰۰۰۰</p>
          </div>
          <div class="col-6">
            <q-btn flat color="blue">
              <q-icon class="q-ml-md">
                <img src="icons/edit-text.png" sizes="10px" /> </q-icon
            ></q-btn>
          </div>
        </div>
      </q-card>

      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">
              روش بازگرداندن پول من
              <q-chip color="green" text-color="white" size="10px">
                تایید شده
              </q-chip>
            </p>
            <p>ﺷﻤﺎره ﺷﺒﺎ - IR۲۷۰۵۶۰۶۱۱۸۲۸۰۰۵۲۱۸۰۲۷۷۰۱</p>
          </div>
          <div class="col-6">
            <q-btn flat color="blue">
              <q-icon class="q-ml-md">
                <img src="icons/edit-text.png" sizes="10px" /> </q-icon
            ></q-btn>
          </div>
        </div>
      </q-card>

      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">تاریخ تولد</p>
            <p>1381/04/07</p>
          </div>
          <div class="col-6">
            <q-btn flat color="blue">
              <q-icon class="q-ml-md">
                <img src="icons/edit-text.png" sizes="10px" /> </q-icon
            ></q-btn>
          </div>
        </div>
      </q-card>

      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">شغل</p>
            <p>توسعه نرم افزار و برنامه نویسی</p>
          </div>
          <div class="col-6">
            <q-btn flat color="blue">
              <q-icon class="q-ml-md">
                <img src="icons/edit-text.png" sizes="10px" /> </q-icon
            ></q-btn>
          </div>
        </div>
      </q-card>

      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">کد اقتصادی</p>
          </div>
          <div class="col-6">
            <q-btn flat color="blue">
              <q-icon class="q-ml-md">
                <img src="icons/plus.png" sizes="10px" /> </q-icon
            ></q-btn>
          </div>
        </div>
      </q-card>

      09d708c2-88ce-4c54-af80-d0f862486f0a
            <q-card class="col-6" flat bordered dense
        ><div class="d-flex justify-between q-mr-md">
          <div class="row justify-between">
            <p class="text-grey"></p>
            <q-icon class="self-end q-ml-md"> </q-icon>
          </div>
          <div></div>
        </div>
      </q-card>
    </div>
    <div class="q-mt-md" style="full-width" dir="rtl">
      <q-card flat bordered
        ><div class="q-mr-md">اطلاعات حقوقی</div>
        <q-separator color="red" inset style="width" class="q-mr-md" />
        <q-banner dense flat class="text-grey-6">
          این گزینه برای کسانی است که نیاز به خرید سازمانی (با فاکتور رسمی و
          گواهی ارزش‌افزوده) دارند.
          <template v-slot:action>
            <q-btn flat color="blue" label="ثبت اطلاعات حقوقی " />
          </template>
        </q-banner>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// import NameComponent from 'src/components/NameComponent.vue';
import MobileComponent from 'src/components/MobileComponent.vue';
// import FormComponent from './FormComponent.vue';
import NameComponent from 'src/components/NameComponent.vue';

const showDialog = ref(true);
const openDialog = () => {
  showDialog.value = false;
};
</script>
