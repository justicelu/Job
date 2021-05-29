<template>
  <div name="ojbk">
    <el-dialog
      title="提示"
      :visible.sync="showDetail"
      width="30%"
      :before-close="handleClose"
    >
      <span>{{ info }}</span>
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
  },
  components: {},
  data() {
    return {
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
</style>
