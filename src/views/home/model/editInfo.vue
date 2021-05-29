<template>
  <div name="ojbk">
    <el-dialog
      title="提示"
      :visible.sync="showEditInfo"
      width="70%"
      :before-close="handleClose"
    >
      <el-form ref="editform" :model="info" label-width="80px" :rules="rules">
        <el-form-item label="招聘标题" prop="title">
          <el-input v-model="info.title"></el-input>
        </el-form-item>
        <el-form-item label="公司名称" prop="companyName">
          <el-input v-model="info.companyName"></el-input>
        </el-form-item>
        <el-form-item label="公司简介" prop="companyDec">
          <el-input type="textarea" v-model="info.companyDec"></el-input>
        </el-form-item>
        <el-form-item label="宣讲时间" prop="recruitDate">
          <el-date-picker
            v-model="info.recruitDate"
            type="datetime"
            placeholder="选择日期时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="宣讲地点" prop="addr">
          <el-input v-model="info.addr"></el-input>
        </el-form-item>
        <el-form-item label="投递邮箱" prop="email">
          <el-input v-model="info.email"></el-input>
        </el-form-item>
        <el-form-item label="联系人" prop="contractPerson">
          <el-input v-model="info.contractPerson"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="mobile">
          <el-input v-model="info.mobile"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="editSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { putAction } from "@/api/api";
export default {
  name: "ojbk",
  props: {
    showEditInfo: {
      type: Boolean,
      required: true,
      defaule: false,
    },
    info: {
      type: Object,
      required: true,
    },
  },
  components: {},
  data() {
    return {
      rules: {
        title: [{ required: true, message: "该项是必填项", trigger: "blur" }],
        companyName: [
          { required: true, message: "该项是必填项", trigger: "blur" },
        ],
        companyDec: [
          { required: true, message: "该项是必填项", trigger: "blur" },
        ],
        addr: [{ required: true, message: "该项是必填项", trigger: "blur" }],
        email: [{ required: true, message: "该项是必填项", trigger: "blur" }],
        contractPerson: [
          { required: true, message: "该项是必填项", trigger: "blur" },
        ],
        mobile: [{ required: true, message: "该项是必填项", trigger: "blur" }],
        recruitDate: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {},
  methods: {
    getYMDHMS(date) {
      let Y = date.getFullYear();
      let x = date.getMonth() + 1;
      let M = x < 10 ? "0" + x : x;
      let D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      let YMD = Y + "-" + M + "-" + D;
      let h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      let m =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      let s =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      let HMS = h + ":" + m + ":" + s;
      return YMD + " " + HMS;
    },
    editSubmit() {
      this.$refs.editform.validate(async (valid) => {
        if (valid) {
          // this.form.recruitDate = this.getYMDHMS(this.form.recruitDate);
          let res = await putAction("/recrutiinfo/update", this.form);
          console.log(res);
          if (res.code == 201) {
            this.$message.success("添加成功");
          } else {
            this.$message.error("添加失败");
          }
          this.$emit("closeAddInfo");
        } else {
          this.$message.error("请填写必填项");
        }
      });
    },
    handleClose() {
      this.$emit("closeEdit");
    },
  },
  watch: {
    info(newval, oldval) {
      this.form = newval;
    },
  },
};
</script>

<style scoped >
.el-form-item * {
  float: left;
}
</style>
