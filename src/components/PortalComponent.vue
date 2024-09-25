<template>
  <div class="q-mr-xs" dir="rtl" style="font-size: 15px">
    <div dir="auto" style="full-width">
      <q-card class="q-mb-md" flat bordered>
        <q-banner inline-actions class="text-orange" dir="rtl">
          <template v-slot:avatar>
            <q-icon name="info" size="md" color="primary" />
            <!-- <q-icon>
              <img class="self-center" src="/icons/icon1.png" alt="" />
            </q-icon> -->
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
            <p class="">
              {{ profileData.firstName }} {{ profileData.lastName }}
            </p>
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

      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">کدملی</p>
            <p class="">{{ profileData.nationalCode }}</p>
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
      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">
              موبایل
              <q-chip
                color="green"
                text-color="white"
                size="10px"
                v-if="profileData.mobileStatus"
              >
                تایید شده
              </q-chip>
            </p>
            <p class="">{{ profileData.mobile }}</p>
          </div>
          <div class="col-6">
            <q-icon
              class="cursor-pointer"
              name="edit"
              size="md"
              @click="openDialog"
            />
            <!-- <q-dialog v-model="showDialog" persistent
              ><MobileComponent></MobileComponent>
            </q-dialog>-->
          </div>
        </div>
      </q-card>

      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">ایمیل</p>
            <p>{{ profileData.email }}</p>
          </div>
          <div class="col-6">
            <q-btn
              flat
              round
              class="cursor-pointer"
              icon="border_color"
              size="md"
              @click="openDialog"
              color="blue"
            />
          </div>
        </div>
      </q-card>

      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">رمزعبور</p>
            <p>{{ profileData.password }}</p>
          </div>
          <div class="col-6">
            <q-btn
              flat
              round
              class="cursor-pointer"
              icon="border_color"
              size="md"
              @click="openDialog"
              color="blue"
            />
          </div>
        </div>
      </q-card>

      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">
              روش بازگرداندن پول من
              <q-chip
                color="green"
                text-color="white"
                size="10px"
                v-if="profileData.ibanStatus"
              >
                تایید شده
              </q-chip>
            </p>
            <p>ﺷﻤﺎره ﺷﺒﺎ - {{ profileData.iban }}</p>
          </div>
          <div class="col-6">
            <q-btn
              flat
              round
              class="cursor-pointer"
              icon="border_color"
              size="md"
              @click="openDialog"
              color="blue"
            />
          </div>
        </div>
      </q-card>

      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">تاریخ تولد</p>
            <p>{{ profileData.birthday }}</p>
          </div>
          <div class="col-6">
            <q-btn
              flat
              round
              class="cursor-pointer"
              icon="border_color"
              size="md"
              @click="openDialog"
              color="blue"
            />
          </div>
        </div>
      </q-card>

      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">شغل</p>
            <p>{{ profileData.job }}</p>
          </div>
          <div class="col-6">
            <q-btn
              flat
              round
              class="cursor-pointer"
              icon="border_color"
              size="md"
              @click="openDialog"
              color="blue"
            />
          </div>
        </div>
      </q-card>

      <q-card class="col-6" flat bordered dense>
        <div class="row items-center q-mr-md col-6">
          <div class="col-6">
            <p class="text-grey">کد اقتصادی</p>
            <div>{{ profileData.eghtesadiCode }}</div>
          </div>
          <div class="col-6">
            <q-btn
              flat
              round
              class="cursor-pointer"
              icon="border_color"
              size="md"
              @click="openDialog"
              color="blue"
            />
          </div>
        </div>
      </q-card>

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

    <q-dialog v-model="showDialog" persistent
      ><FilComponent :model-value="profileData"></FilComponent>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FilComponent from 'src/components/FilComponent.vue';
// import MobileComponent from 'src/components/MobileComponent.vue';
interface FormDataType {
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
}
const showDialog = ref(false);
const profileData = ref<FormDataType>({
  firstName: 'عارفه',
  lastName: 'کوزه گرها',
  nationalCode: '4311636636',
  mobile: '09907077264',
  mobileStatus: true,
  email: 'kozegargha315@gmail.com',
  password: '*******',
  iban: 'IR۲۷۰۵۶۰۶۱۱۸۲۸۰۰۵۲۱۸۰۲۷۷۰۱',
  ibanStatus: true,
  birthday: '1381/04/07',
  eghtesadiCode: '-',
  job: 'توسعه نرم افزار و برنامه نویسی',
});
const openDialog = () => {
  showDialog.value = true;
};
</script>
