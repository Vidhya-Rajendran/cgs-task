<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-layout row wrap>
          <v-flex xs10>
            <h2 style="color: #018abe;">Basic Details</h2>
          </v-flex>
          <v-flex xs2>
            <v-card-actions style="padding: 0px !important;">
              <v-btn color="#018abe" @click="dialog=true"  dark >Add New</v-btn>
              <v-dialog v-if="dialog===true" v-model="dialog" width="600px">
                <v-card class="headline">
                  <add-new @dialog_value="setDialog($event)"></add-new>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-card-title>
      <v-card-text>
        <data-tables-server
          :data="tableData.results"
          :table-props="table_props"
          :total="tableData.count"
          :current-page="page"
          :page-size="limit"
          @query-change="getTableData"
          :pagination-props="{ background: true, pageSizes: [10, 20, 25, 50, 100] }">
          <el-table-column
            label="Name"
            prop="name">
          </el-table-column>
          <el-table-column
            label="Email"
            prop="email">
          </el-table-column>
          <el-table-column
            label="Phone Number"
            prop="ph_no">
          </el-table-column>
          <el-table-column
            label="DOB" prop="dob">
            <template slot-scope="scope">
                <span>
                    {{moment(scope.row.dob).format('DD-MMM-YY hh:mm A')}}
                </span>
            </template>
          </el-table-column>
          <el-table-column
            label="Msg"
            prop="msg">
          </el-table-column>
          <el-table-column
            label="URL"
            prop="url">
          </el-table-column>
        </data-tables-server>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>

import AddNew from "./addNew";
export default {
  name: 'formTable',
  components: {AddNew},
  data () {
    return {
      tableData: [],
      dialog: false,
      page: 1,
      path: './modules/form/addNew.vue',
      limit: 20,
      table_props: {
        border: false,
        style: 'width: 100%; cursor: pointer !important;',
        headerCellStyle: { 'background-color': 'rgb(230, 232, 234)', color: '#47476b' }
      }
    }
  },
  methods: {
     getTableData(queryInfo) {
       this.page = queryInfo !== undefined ? queryInfo.page :  1;
       this.limit = queryInfo !== undefined ? queryInfo.pageSize : 10;
       let paginationQuery = `&page=${this.page}&limit=${this.limit}`;

       this.axios.get(`form-group/?${paginationQuery}`)
        .then((response) => {
          if (response) {
            this.tableData = response.data
          }
        }).catch(error => error)
    },
    setDialog(val){
       this.dialog = false;
      this.getTableData();
    }
  }
}
</script>

<style scoped>

</style>
