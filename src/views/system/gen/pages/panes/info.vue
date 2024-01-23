<script lang="ts" name="info-pane" setup>
import { reactive } from 'vue';
import type { FormRules } from 'element-plus';

interface Forms {
  name: string;
  description: string;
  substance: string;
  template: string;
  path: string;

  remark: string;
}

const forms = reactive<Forms>({
  name: '',
  description: '',
  substance: '',
  template: '',
  path: '',

  remark: ''
});
const rules = reactive<FormRules<Forms>>({
  name: [{ required: true, message: '请填写表名称', trigger: 'blur' }],
  description: [{ required: true, message: '请填写表描述', trigger: 'blur' }],
  substance: [{ required: true, message: '请填写实体类名称', trigger: 'blur' }],
  path: [{ required: true, message: '请填写生成包路径', trigger: 'blur' }]
});
</script>

<template>
  <el-tab-pane v-bind="$attrs">
    <div class="flex justify-center pt-5">
      <el-form :model="forms" :rules="rules" label-width="120px" class="w-1/2 bg-red-50">
        <el-form-item label="表名称" prop="name">
          <el-input v-model="forms.name" />
        </el-form-item>
        <el-form-item label="表描述" prop="description">
          <el-input v-model="forms.description" />
        </el-form-item>
        <el-form-item label="实体类名称" prop="substance">
          <el-input v-model="forms.substance" />
        </el-form-item>
        <el-form-item label="生成模板">
          <el-select v-model="forms.template"></el-select>
        </el-form-item>
        <el-form-item prop="path">
          <template #label>
            <div class="flex items-center space-x-1">
              <span>生成包路径</span>
              <el-tooltip effect="dark" content="生成在哪个java包下，例如 com.ruoyi.system" placement="top">
                <el-icon><QuestionFilled /></el-icon>
              </el-tooltip>
            </div>
          </template>
          <el-input v-model="forms.path" />
        </el-form-item>

        <el-form-item label="备注">
          <el-input v-model="forms.remark" type="textarea" />
        </el-form-item>
      </el-form>
    </div>
  </el-tab-pane>
</template>
