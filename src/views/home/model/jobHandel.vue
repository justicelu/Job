<template>
  <div name="ojbk">
    <el-dialog
      title="招聘岗位设置"
      :visible.sync="showJobHandle"
      width="80%"
      :before-close="handleClose"
      @open="getJobList"
    >
      <div class="leftSet">
        <el-button type="primary" size="small" plain @click="addJob"
          >新增</el-button
        >
      </div>

      <el-row>
        <el-table
          :data="tableData"
          border
          style="width: 100%; margin-top: 10px"
          v-loading="loading"
        >
          <el-table-column prop="recruitPos" label="招聘岗位" width="180">
          </el-table-column>
          <el-table-column prop="demandPos" label="需求专业" width="180">
          </el-table-column>
          <el-table-column prop="address" label="工作地点"> </el-table-column>
          <el-table-column prop="person" label="需求人数"> </el-table-column>
          <el-table-column prop="addAt" label="发布时间"> </el-table-column>
          <el-table-column fixed="right" label="操作" width="145">
            <template slot-scope="scope">
              <el-button
                type="warning"
                plain
                size="small"
                @click="doeditJob(scope.row)"
                >编辑</el-button
              >
              <el-button
                type="danger"
                plain
                size="small"
                @click="deleteJob(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog :title="doTitle + '招聘岗位'" :visible.sync="showAdd" width="80%"
      ><el-form
        :model="form"
        :rules="rules"
        ref="addJob"
        label-width="100px"
        class="demo-ruleForm"
        @close="closeAdd"
      >
        <el-form-item label="招聘岗位" prop="recruitPos">
          <el-input v-model="form.recruitPos"></el-input>
        </el-form-item>
        <el-form-item label="需求专业" prop="demandPos">
          <el-input v-model="form.demandPos"></el-input>
        </el-form-item>
        <el-form-item label="工作地点" prop="address">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="需求人数" prop="person">
          <el-input v-model="form.person"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleOk">确 定</el-button>
      </span></el-dialog
    >
  </div>
</template>

<script>
import { getAction, postAction, deleteAction, httpAction } from "@/api/api";
export default {
  name: "ojbk",
  props: {
    id: {
      type: String,
      required: true,
    },
    showJobHandle: {
      type: Boolean,
      required: true,
      defaule: false,
    },
  },
  components: {},
  data() {
    return {
      doTitle: "",
      // pops obj
      rules: {
        recruitPos: [
          { required: true, message: "该项是必填项", trigger: "blur" },
        ],
        demandPos: [
          { required: true, message: "该项是必填项", trigger: "blur" },
        ],
        address: [{ required: true, message: "该项是必填项", trigger: "blur" }],
        person: [{ required: true, message: "该项是必填项", trigger: "blur" }],
      },
      // form obj
      form: {
        recruitPos: "",
        demandPos: "",
        address: "",
        person: "",
      },
      // add
      showAdd: false,
      // default
      loading: false,
      tableData: [],
    };
  },
  created() {},
  methods: {
    doeditJob(val) {
      this.doTitle = "编辑";
      this.form = val;
      this.showAdd = true;
    },
    handleOk() {
      this.$refs.addJob.validate(async (valid) => {
        if (valid) {
          let url = "",
            method = "";
          if (this.doTitle === "新增") {
            this.form.id = this.id;
            url = "/recruittitle/add";
            method = "POST";
          } else {
            this.form.titleid = this.id;
            url = "/recruittitle/update";
            method = "PUT";
          }
          console.log("岗位信息对象为: ", this.form);
          let res = await httpAction(method, url, {}, this.form);
          console.log(res);
          if (res.code == 201) {
            this.$message.success(this.doTitle + "成功");
            this.getJobList();
          } else {
            this.$message.error(this.doTitle + "失败");
          }
          this.closeAdd();
        } else {
          this.$message.error("请填写必填项");
        }
      });
    },
    closeAdd() {
      this.doTitle = "";
      this.showAdd = false;
      this.form = {};
    },
    async getJobList() {
      let res = await getAction(`/recruittitle/get/${this.id}`);
      console.log(res);
      this.tableData = res.data;
    },
    addJob() {
      this.doTitle = "新增";
      this.showAdd = true;
    },
    handleClose() {
      this.doTitle = "";
      this.$emit("closeJob");
    },
    async deleteJob(val) {
      let res = await deleteAction(`/recruittitle/delete/${val.id}`);
      this.getJobList();
    },
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped >
.leftSet {
  text-align: justify;
  text-align-last: justify;
}
</style>
