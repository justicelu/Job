<template>
  <div name="ojbk">
    <el-dialog
      title="招聘详情"
      :visible.sync="showDetail"
      width="80%"
      :before-close="handleClose"
      ><div class="infoShowBox">
        <el-row :gutter="20">
          <el-col :span="16">
            <el-alert
              title="招聘标题"
              :description="info.title"
              type="info"
              :closable="false"
            >
            </el-alert
          ></el-col>
          <el-col :span="8">
            <el-alert
              title="公司名称"
              :description="info.companyName"
              type="info"
              :closable="false"
            >
            </el-alert
          ></el-col>
        </el-row>

        <el-alert
          title="公司简介"
          :description="info.companyDec"
          type="info"
          :closable="false"
        >
        </el-alert>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-alert
              title="宣讲时间"
              :description="info.recruitDate"
              type="info"
              :closable="false"
            >
            </el-alert
          ></el-col>
          <el-col :span="12">
            <el-alert
              title="宣讲地点"
              :description="info.addr"
              type="info"
              :closable="false"
            >
            </el-alert
          ></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-alert
              title="联系人"
              :description="info.contractPerson"
              type="info"
              :closable="false"
            >
            </el-alert
          ></el-col>
          <el-col :span="10">
            <el-alert
              title="投递邮箱"
              :description="info.email"
              type="info"
              :closable="false"
            >
            </el-alert
          ></el-col>
          <el-col :span="8">
            <el-alert
              title="联系电话"
              :description="info.mobile"
              type="info"
              :closable="false"
            >
            </el-alert
          ></el-col>
        </el-row>
      </div>
      <el-alert
        title="招聘岗位"
        type="success"
        :closable="false"
        style="margin-bottom: 20px"
      >
      </el-alert>
      <el-table :data="list" style="width: 100%">
        <el-table-column prop="recruitPos" label="招聘岗位" width="180">
        </el-table-column>
        <el-table-column prop="demandPos" label="需求专业" width="180">
        </el-table-column>
        <el-table-column prop="address" label="工作地点"> </el-table-column>
        <el-table-column prop="person" label="需求人数"> </el-table-column>
        <el-table-column prop="addAt" label="发布时间"> </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
        <el-button type="primary" @click="handleClose">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ojbk",
  props: {
    showDetail: {
      type: Boolean,
      required: true,
      defaule: false,
    },
    info: {
      type: Object,
      required: true,
    },
    list: {
      type: Array,
      required: true,
      default: [],
    },
  },
  components: {},
  data() {
    return {
      jobList: [
        {
          recruitPos: "招聘岗位",
          demandPos: "需求专业",
          address: "工作地点",
          person: "需求人数",
          addAt: "发布时间",
        },
      ],
      dialogVisible: false,
    };
  },
  created() {},
  methods: {
    handleClose() {
      this.$emit("closeDetail");
    },
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped >
/* :nth-child() 是对于当前元素的兄弟元素进行匹配选择 */
.infoShowBox > :nth-child(n) {
  margin-bottom: 20px;
}
</style>
