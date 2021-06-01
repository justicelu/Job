<template>
  <div name="tablelist">
    <el-button
      type="primary"
      icon="el-icon-circle-plus-outline"
      style="float: left; margin-bottom: 20px"
      @click="addInfo"
      >新增</el-button
    >
    <el-table
      :data="tableData"
      border
      style="width: 100%; margin-top: 10px"
      v-loading="loading"
    >
      <el-table-column fixed prop="title" label="招聘标题" width="150">
      </el-table-column>
      <el-table-column prop="companyName" label="公司名称" width="120">
      </el-table-column>
      <el-table-column prop="recruitDate" label="宣讲时间" width="200">
      </el-table-column>
      <el-table-column prop="addr" label="宣讲地点" width="150">
      </el-table-column>
      <el-table-column prop="email" label="投递邮箱" width="150">
      </el-table-column>
      <el-table-column prop="contractPerson" label="联系人" width="90">
      </el-table-column>
      <el-table-column prop="mobile" label="联系电话" width="130">
      </el-table-column>
      <!-- <el-table-column prop="zip" label="发布时间" width="120">
      </el-table-column> -->
      <el-table-column fixed="right" label="操作" width="275">
        <template slot-scope="scope">
          <el-button
            @click="doshowJobSet(scope.row)"
            type="primary"
            plain
            size="small"
            >岗位</el-button
          >
          <el-button
            @click="doshowDetail(scope.row)"
            type="primary"
            plain
            size="small"
            >详情</el-button
          >
          <el-button
            type="warning"
            plain
            size="small"
            @click="doeditInfo(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="danger"
            plain
            size="small"
            @click="deleteInfo(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="6" :offset="16">
        <el-pagination
          small
          layout="prev, pager, next"
          :total="total"
          @current-change="currentChange"
        >
        </el-pagination></el-col
    ></el-row>
    <Detail
      :showDetail="showDetail"
      :info="detailInfo"
      @closeDetail="closeDetail"
    ></Detail>
    <Edit
      :showEditInfo="showEditInfo"
      :info="editInfo"
      @closeEdit="closeEdit"
    ></Edit>
    <AddInfo :showAddInfo="showAddInfo" @closeAddInfo="closeAddInfo"></AddInfo>
    <do-job :showJobHandle="showJobHandle" @closeJob="closeJob"></do-job>
  </div>
</template>

<script>
import { getAction, postAction, deleteAction } from "@/api/api";
import Detail from "./model/detail";
import AddInfo from "./model/addInfo";
import Edit from "./model/editInfo";
import doJob from "./model/jobHandel";

export default {
  name: "tablelist",
  props: {},
  components: { Detail, AddInfo, Edit, doJob },
  data() {
    return {
      showJobHandle: false,
      // for edit
      showEditInfo: false,
      editInfo: {},
      // for addInfo
      showAddInfo: false,
      // for detail
      detailInfo: {},
      showDetail: false,
      total: 0,
      tableData: [],
      loading: false,
      currentPage: 1,
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    closeJob() {
      this.showJobHandle = false;
    },
    // for handle job
    doshowJobSet(val) {
      let id = val.id;
      this.showJobHandle = true;
    },
    // for edit
    doeditInfo(val) {
      this.editInfo = val;
      this.editInfo.recruitDate = new Date(this.editInfo.recruitDate);
      this.showEditInfo = true;
    },
    closeEdit() {
      this.showEditInfo = false;
    },
    // for add
    addInfo() {
      this.showAddInfo = true;
    },
    closeAddInfo() {
      this.showAddInfo = false;
      this.getInfo(this.currentPage);
    },
    // for detail
    closeDetail() {
      this.detailInfo = {};
      this.showDetail = false;
    },
    doshowDetail(info) {
      this.detailInfo = info;
      this.showDetail = true;
    },

    // for this
    async deleteInfo(val) {
      let res = await deleteAction(`/recruitinfo/delete/${val.id}`);
      console.log(res);
      this.getInfo(this.currentPage);
    },
    currentChange(val) {
      // alert(val);
      console.log(val);
      this.currentPage = val;
      this.getInfo(val);
    },
    handleClick(val) {
      console.log(val);
    },
    getInfo1() {
      this.tableData = [
        {
          title: "title",
          companyName: "companyName",
          companyDec: "companyDec",
          recruitDate: "recruitDate",
          addr: "addr",
          email: "email",
          contractPerson: "contractPerson",
          mobile: "mobile",
        },
      ];
      this.total = 100;
    },
    async getInfo(num) {
      this.loading = true;
      let obj = {
        currentPage: 1,
        pageSize: 10,
      };
      if (num) {
        obj.currentPage = num;
      }
      let res = await getAction("/recruitinfo/get", obj);
      this.tableData = res.data;
      this.total = res.total;
      setTimeout(() => {
        this.loading = false;
      }, 300);
    },
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped >
</style>
