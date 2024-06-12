<script setup>
    import { useAuthForm } from './index.js'

    const { form, rules, onSubmit, errorMsg } = useAuthForm()
</script>
<template lang="">
    <v-sheet class="mx-auto pt-10" width="400">
        <v-form 
            @submit.prevent="onSubmit"
        >
            <v-text-field
                v-model="form.login"
                :rules="rules.login"
                label="Login"
            ></v-text-field>

            <v-text-field
                type="password"
                v-model="form.password"
                :rules="rules.password"
                label="Password"
            ></v-text-field>
     
            <v-alert
                v-if="errorMsg"
                :text="errorMsg"
                type="error"
            ></v-alert>

            <v-btn 
                class="mt-2" 
                type="submit"
                color="black"
                block
            >
                    Sign in
            </v-btn>
        </v-form>
  </v-sheet>
</template>
