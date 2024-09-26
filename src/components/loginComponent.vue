<template>
  <q-form @submit="onConfirmSubmit" class="q-gutter-y-lg">
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
        <p class="row justify-center text-grey-5">
          please login to your account
        </p>
      </div>
    </div>

    <q-input
      standout
      class="q-my-xs"
      v-model="form.Email"
      label="Email address"
    />
    <q-input
      standout
      class="q-my-xs"
      v-model="form.Password"
      label="Password "
    />

    <a href="#" style="font-size: 12px" dir="ltr">forgot Password?</a>

    <q-btn
      standout
      class="full-width"
      label="Login"
      glossy
      color="purple"
      @click="onclick"
    />
    <div class="row items-center">
      <div class="col-5">
        <q-separator color="black" inset class="full-width" />
      </div>
      <div class="col-2 text-center">login</div>
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
          ><q-icon size="sm"> <img src="facebook.svg" /> </q-icon
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
          <q-icon size="sm"> <img src="google.png" /> </q-icon>
        </q-btn>
      </div>
      <div class="row justify-center">
        <a href="Register" class="self-center" style="font-size: 12px">
          sign up</a
        >
        <div class="row justify-center">?Do not have an account</div>
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
import { useRouter } from 'vue-router';
const router = useRouter();
const onclick = () => {
  if (form.value.Email == 'test' && form.value.Password == '123456') {
    router.push('dashboard');
  }
};

const form = ref({
  Email: '',
  Password: '',
});
const showSubmitDialog = ref(false);
const showResetDialog = ref(false);

const onConfirmSubmit = () => {
  showSubmitDialog.value = true;
};

const resetForm = () => {
  showResetDialog.value = false;
  form.value = {
    Email: '',
    Password: '',
  };
  console.log('Form reset.');
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
