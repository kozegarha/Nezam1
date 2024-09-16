<template>
  <div class="q-mr-xs" dir="rtl" style="font-size: 15px">
    <div dir="auto" class="row" style="width: 800px">
      <q-card class="q-mb-md" style="width: 800px" flat bordered>
        <q-banner inline-actions class="$q.dark.isActive text-orange">
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
            <q-icon class="self-end q-ml-md">
              <img src="icons/edit-text.png" alt="" />
            </q-icon>
          </div>
        </div>
      </q-card>
    </div>

    <div class="row">
      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">کدملی</p>
            <p class="">4311636636</p>
          </div>
          <div class="col-6">
            <q-icon class="self-end q-ml-md">
              <img src="icons/edit-text.png" alt="" />
            </q-icon>
          </div>
        </div>
      </q-card>
    </div>

    <div class="row">
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
            <q-icon class="self-end q-ml-md">
              <img src="icons/edit-text.png" alt="" />
            </q-icon>
          </div>
        </div>
      </q-card>
    </div>
    <div class="row">
      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">ایمیل</p>
            <p>kozegargha315@gmail.com</p>
          </div>
          <div class="col-6">
            <q-icon class="self-end q-ml-md">
              <img src="icons/edit-text.png" alt="" />
            </q-icon>
          </div>
        </div>
      </q-card>
    </div>
    <div class="row">
      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">رمزعبور</p>
            <p>۰۰۰۰۰۰۰</p>
          </div>
          <div class="col-6">
            <q-icon class="self-end q-ml-md">
              <img src="icons/edit-text.png" alt="" />
            </q-icon>
          </div>
        </div>
      </q-card>
    </div>
    <div class="row">
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
            <q-icon class="self-end q-ml-md">
              <img src="icons/edit-text.png" alt="" />
            </q-icon>
          </div>
        </div>
      </q-card>
    </div>

    <div class="row">
      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">تاریخ تولد</p>
            <p>1381/04/07</p>
          </div>
          <div class="col-6">
            <q-icon class="self-end q-ml-md">
              <img src="icons/edit-text.png" alt="" />
            </q-icon>
          </div>
        </div>
      </q-card>
    </div>
    <div class="row">
      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">شغل</p>
            <p>توسعه نرم افزار و برنامه نویسی</p>
          </div>
          <div class="col-6">
            <q-icon class="self-end q-ml-md">
              <img src="icons/edit-text.png" alt="" />
            </q-icon>
          </div>
        </div>
      </q-card>
    </div>
    <div class="row">
      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">کد اقتصادی</p>
          </div>
          <div class="col-6">
            <q-icon class="self-end q-ml-md">
              <img src="icons/plus.png" alt="" />
            </q-icon>
          </div>
        </div>
      </q-card>
    </div>
    <div class="row">
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
    <div class="q-mt-md" style="full-height" dir="rtl">
      <q-card flat bordered
        ><div class="q-mr-md">اطلاعات حقوقی</div>
        <q-separator color="red" inset style="width: 70px" class="q-mr-md" />
        <q-banner dense flat class="text-grey-6">
          این گزینه برای کسانی است که نیاز به خرید سازمانی (با فاکتور رسمی و
          گواهی ارزش‌افزوده) دارند.
          <div dir="rtl">
            <q-btn flat color="blue" label="ثبت اطلاعات حقوقی " />
          </div>
        </q-banner>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
