<template>
  <div name="ojbk">
    <el-dialog
      title="正在新增招聘信息"
      :visible.sync="showAddInfo"
      width="70%"
      :before-close="handleClose"
    >
      <el-form ref="addform" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="招聘标题" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="公司名称" prop="companyName">
          <el-input v-model="form.companyName"></el-input>
        </el-form-item>
        <el-form-item label="公司简介" prop="companyDec">
          <el-input type="textarea" v-model="form.companyDec"></el-input>
        </el-form-item>
        <el-form-item label="宣讲时间" prop="recruitDate">
          <el-date-picker
            v-model="form.recruitDate"
            type="datetime"
            placeholder="选择日期时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="宣讲地点" prop="addr">
          <el-input v-model="form.addr"></el-input>
        </el-form-item>
        <el-form-item label="投递邮箱" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="联系人" prop="contractPerson">
          <el-input v-model="form.contractPerson"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="mobile">
          <el-input v-model="form.mobile"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { postAction } from "@/api/api";
export default {
  name: "ojbk",
  props: {
    showAddInfo: {
      type: Boolean,
      required: true,
      defaule: false,
    },
  },
  components: {},
  data() {
    return {
      form: {
        title: "",
        companyName: "",
        companyDec: "",
        recruitDate: "",
        addr: "",
        email: "",
        contractPerson: "",
        mobile: "",
      },
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
    submit() {
      this.$refs.addform.validate(async (valid) => {
        if (valid) {
          this.form.recruitDate = this.getYMDHMS(this.form.recruitDate);
          let res = await postAction("/recruitinfo/add", this.form);
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
      this.$emit("closeAddInfo");
    },
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped >
.el-form-item * {
  float: left;
}
</style>
