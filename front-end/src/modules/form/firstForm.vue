<template>
  <v-container>
    <div>
      <form>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field
              v-model="form1.name"
              label="Name"
              type="text"
              v-validate="'required'"
              name="name"
            ></v-text-field>
          </v-flex>
          <span style="color: red">{{ errors.first('name') }}</span>
          <v-flex xs12>
            <v-text-field
              v-model="form1.email"
              name="email"
              label="Email"
              v-validate="'required|email'"
            ></v-text-field>
          </v-flex>
          <span style="color: red">{{ errors.first('email') }}</span>
          <v-flex xs12>
            <v-text-field
              v-model.number ="form1.ph_no"
              label="Phone Number"
              name="Phone Number"
              v-validate="'required'"
            ></v-text-field>
          </v-flex>
          <span style="color: red">{{ errors.first('Phone Number') }}</span>
        </v-layout>
      </form>
    </div>
    <v-btn class="btn" dark color="#018abe" @click="next()" :disabled="errors.items.length !== 0"> Next</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'firstForm',
  data () {
    return {
      form1: {
        name: null,
        email: null,
        ph_no: null
      }
    }
  },
  methods: {
    next () {
      this.$validator.validateAll().then(isValid => {
        if (isValid) {
          this.$emit('next_step');
          this.$emit('values', this.form1);
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
