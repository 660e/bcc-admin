<template>
  <el-dialog v-model="visible" :title="forms.dictCode ? '编辑' : '新增'" @closed="closed" width="500">
    <el-form :model="forms" :rules="rules" label-width="100" ref="formsRef" class="px-5 pt-5">
      <el-form-item label="字典类型">
        <el-input v-model="forms.dictType" disabled />
      </el-form-item>
      <el-form-item label="数据标签" prop="dictLabel">
        <el-input v-model="forms.dictLabel" />
      </el-form-item>
      <el-form-item label="数据键值" prop="dictValue">
        <el-input v-model="forms.dictValue" />
      </el-form-item>
      <el-form-item label="样式属性" prop="cssClass">
        <el-input v-model="forms.cssClass" />
      </el-form-item>
      <el-form-item label="显示排序" prop="dictSort">
        <el-input-number v-model="forms.dictSort" :min="0" />
      </el-form-item>
      <el-form-item label="回显样式" prop="listClass">
        <el-select v-model="forms.listClass"></el-select>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-radio-group v-model="forms.status">
          <el-radio label="0">正常</el-radio>
          <el-radio label="1">停用</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input v-model="forms.remark" type="textarea" />
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="flex justify-end">
        <el-button @click="visible = false">取消</el-button>
        <el-button @click="confirm" type="primary">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { nextTick, reactive, ref } from 'vue';
import { ElMessage, FormInstance, FormRules } from 'element-plus';
import { createDictData, editDictData } from '@/api/modules/system';

const $emit = defineEmits(['confirm']);

const visible = ref(false);

const formsRef = ref<FormInstance>();
const forms = ref({
  dictCode: undefined,
  dictType: '',
  dictLabel: '',
  dictValue: '',
  cssClass: '',
  dictSort: '',
  listClass: '',
  status: '0',
  remark: ''
});
const rules = reactive<FormRules>({
  dictLabel: [{ required: true, message: '请填写数据标签', trigger: 'blur' }],
  dictValue: [{ required: true, message: '请填写数据键值', trigger: 'blur' }],
  dictSort: [{ required: true, message: '请填写数据顺序', trigger: 'blur' }]
});

const open = async (row: any) => {
  visible.value = true;
  await nextTick();
  if (row.dictCode) forms.value = JSON.parse(JSON.stringify(row));
};
const closed = () => {
  formsRef.value?.resetFields();
};
const confirm = () => {
  formsRef.value?.validate(async valid => {
    if (valid) {
      const { msg } = forms.value.dictCode ? await editDictData(forms.value) : await createDictData(forms.value);
      $emit('confirm');
      ElMessage.success(msg);
      visible.value = false;
    }
  });
};

defineExpose({ open });
</script>
