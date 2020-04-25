<template>
  <v-card>
    <v-card-text>
      <table style="width:100%">
        <tr>
          <td>Name</td>
          <td>{{form_value.name}}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{{form_value.email}}</td>
        </tr>
        <tr>
          <td>Phone No</td>
          <td>{{form_value.ph_no}}</td>
        </tr>
        <tr>
          <td>Date of Birth</td>
          <td>{{moment(form_value.dob).format('DD-MMM-YY hh:mm A')}}</td>
        </tr>
        <tr>
          <td>Message</td>
          <td>{{form_value.msg}}</td>
        </tr>
        <tr>
          <td>URL</td>
          <td>{{form_value.url}}</td>
        </tr>
      </table>
    </v-card-text>
    <v-card-actions>
      <v-btn color="#018abe" dark class="btn" @click="saveForm()">
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'previewForm',
  props: ['form_value'],
  data(){
    return{
      dialog: true,
    }
  },
  methods: {
    saveForm(){
      this.axios.post('form-group/', this.form_value)
        .then(response => {
          if (response) {
            this.dialog = false;
            this.$emit('dialog_val', this.dialog);
            this.$notify({
              type: 'success',
              title: 'Success',
              message: "Details are saved",
            });
          }
        })
    }
  }
}
</script>

<style scoped>
  .btn{
    margin-left: 450px;
  }
</style>
