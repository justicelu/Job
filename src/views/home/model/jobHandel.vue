<template>
  <div name="ojbk">
    <el-dialog
      title="招聘岗位设置"
      :visible.sync="showJobHandle"
      width="80%"
      :before-close="handleClose"
    >
      <el-button
        type="primary"
        plain
        size="small"
        @click="addJob"
        style="float: left; margin-bottom: 15px"
        >新增</el-button
      >
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
  </div>
</template>

<script>
export default {
  name: "ojbk",
  props: {
    showJobHandle: {
      type: Boolean,
      required: true,
      defaule: false,
    },
  },
  components: {},
  data() {
    return {
      tableData: [{}],
    };
  },
  created() {},
  methods: {
    addJob() {},
    handleClose() {
      this.$emit("closeJob");
    },
    doeditJob(val) {},
    deleteJob(val) {},
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped >
</style>
