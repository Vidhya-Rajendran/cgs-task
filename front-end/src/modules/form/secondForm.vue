<template>
  <v-container>
    <div>
      <form>
        <v-layout row wrap>
          <v-flex xs12>
            <div class="block">
              <el-date-picker
                v-model="form2.dob"
                type="date"
                placeholder="Date of Birth">
              </el-date-picker>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-textarea
              v-model="form2.msg"
              label="Message"
              type="text"
              name="msg"
              v-validate="'required|min:1'"
            ></v-textarea>
          </v-flex>
          <span style="color: red">{{ errors.first('msg') }}</span>
          <v-flex xs12>
            <v-text-field
              v-model="form2.url"
              label="Website url"
              name="url"
              type="text"
              v-validate="'required|url'"
            ></v-text-field>
          </v-flex>
          <span style="color: red">{{ errors.first('url') }}</span>
        </v-layout>
      </form>
    </div>
    <v-btn color="#018abe" dark class="btn" @click="next()" :disabled="errors.items.length !== 0"> Submit</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'secondForm',
  props: ['form_val'],
  data () {
    return {
      details: [],
      form2: {
        dob: null,
        msg: null,
        url: null
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    next () {
      this.$emit('next_step');
      let form= Object.assign({}, this.form_val, this.form2);
      this.$emit('val', form);
    },
    getData () {
      this.axios.get('form-group/')
        .then(response => {
          if (response) {
            this.details = response.data
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
