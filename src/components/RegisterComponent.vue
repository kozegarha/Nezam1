<template>
  <q-form @submit="onSubmit" class="q-gutter-y-lg" style="width: 400px">
    <div>
      <div class="row justify-center">
        <div class="self-center q-ml-xs text-bold" style="font-size: 20px">
          E spurt
        </div>

        <div>
          <q-icon size="40px"><img src="icon.jpg" /></q-icon>
        </div>
      </div>

      <div>
        <h4 class="row justify-center q-mb-sm text-bold">welcome Back</h4>
        <p class="row justify-center text-grey-5">please sign up</p>
      </div>
    </div>
    <q-input
      standout
      class="q-my-xs"
      v-model="form.firstname"
      label="firstname"
    />
    <q-input
      standout
      class="q-my-xs"
      v-model="form.lastname"
      label="lastname"
    />
    <q-input
      standout
      class="q-my-xs"
      v-model="form.fathername"
      label="fathername"
    />
    <q-input standout class="q-my-xs" v-model="form.mobile" label="mobile" />
    <q-btn standout class="full-width" label="sign up" glossy color="purple" />
    <div class="row items-center">
      <div class="col-5">
        <q-separator color="black" inset class="full-width" />
      </div>
      <div class="col-2 text-center">sign up</div>
      <div class="col-5">
        <q-separator color="black" inset class="full-width" />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-6 col-xs-12 q-my-xs">
        <q-btn
          standout
          label="facebook"
          class="full-width"
          outline
          color="grey-7"
          ><q-icon size="20px"> <img src="facebook.svg" /> </q-icon
        ></q-btn>
      </div>
      <div class="col-sm-12 col-md-6 q-pr-sm q-my-xs col-xs-12">
        <q-btn
          label="google"
          standout
          class="full-width"
          outline
          color="grey-7"
        >
          <q-icon size="20px"> <img src="google.png" /> </q-icon>
        </q-btn>
      </div>
      <div class="row justify-center">
        <a href="./" class="self-center" style="font-size: 10px">login</a>
        <div class="row justify-center">?Do you have an account</div>
      </div>
    </div>
  </q-form>

  <q-dialog v-model="showSubmitDialog" persistent>
    <q-card>
      <q-card-section class="text-h6"> آیا مطمئن هستید؟ </q-card-section>
      <q-card-section>
        <q-btn label="بله" color="green" @click="triggerTwice" />
        <q-btn label="خیر" flat color="red" @click="showSubmitDialog = false" />
      </q-card-section>
    </q-card>
  </q-dialog>

  <q-dialog v-model="showResetDialog" persistent>
    <q-card>
      <q-card-section class="text-h6">
        آیا مطمئن هستید که می‌خواهید همه فیلدها را پاک کنید؟
      </q-card-section>
      <q-card-section>
        <q-btn label="بله" color="green" @click="resetForm" />
        <q-btn label="خیر" flat color="red" @click="showResetDialog = false" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script lang="ts" setup>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

interface FormDataType {
  firstname: string;
  lastname: string;
  fathername: string;
  mobile: string;
}
const FormDataTypeDefault = {
  firstname: '',
  lastname: '',
  fathername: '',
  mobile: '',
};
const form = ref<FormDataType>(FormDataTypeDefault);
const showSubmitDialog = ref(false);
const showResetDialog = ref(false);

const confirmSubmit = () => {
  showSubmitDialog.value = true;
};

const resetForm = () => {
  showResetDialog.value = false;
  form.value = FormDataTypeDefault;
  console.log('Form reset.');
};

const onSubmit = () => {
  confirmSubmit();
};
const $q = useQuasar();
const triggerTwice = () => {
  showSubmitDialog.value = false;
  $q.notify({
    message: 'با موفقیت ثبت شد',
    color: 'green',
    badgeColor: 'yellow',
    badgeTextColor: 'dark',
    badgeClass: 'shadow-3 glossy my-badge-class',
  });
};
</script>
