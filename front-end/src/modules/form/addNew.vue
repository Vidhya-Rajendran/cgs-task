<template>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Form 1</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">Form 2</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Preview</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <first-form  @next_step="e1 = 2" @values="setData($event)"  ></first-form>
        </v-stepper-content>
        <v-stepper-content step="2">
          <second-form @next_step="e1 = 3" @val="setData1($event)" :form_val="form1">
          </second-form>
        </v-stepper-content>
        <v-stepper-content step="3" >
          <preview-form @next_step="" :form_value="form_new" @dialog_val="setDialog($event)">
          </preview-form>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

</template>

<script>
import firstForm from './firstForm.vue'
import secondForm from './secondForm.vue'
import previewForm from './previewForm.vue'
import formIndex from './formTable'

export default {
  name: 'addNew',
  data () {
    return {
      e1: 1,
      form1:{},
      form_new: '',
    }
  },
  methods:{
    setData(val){
      this.form1 = val;
    },
    setData1(val){
      this.form_new = val;
    },
    setDialog(val){
      this.$emit('dialog_value', false)
    }
  },
  components: {
    formIndex,
    firstForm,
    secondForm,
    previewForm
  }
}
</script>

<style scoped>

</style>
