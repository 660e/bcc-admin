<script lang="ts" name="info-pane" setup>
import { reactive } from 'vue';
import type { FormRules } from 'element-plus';

interface Forms {
  name: string;
  description: string;
  substance: string;
  template: string;
  path: string;
  module: string;
  business: string;
  feature: string;
  remark: string;
}

const forms = reactive<Forms>({
  name: '',
  description: '',
  substance: '',
  template: '',
  path: '',
  module: '',
  business: '',
  feature: '',
  remark: ''
});

const rules = reactive<FormRules<Forms>>({
  name: [{ required: true, message: '请填写表名称', trigger: 'blur' }],
  description: [{ required: true, message: '请填写表描述', trigger: 'blur' }],
  substance: [{ required: true, message: '请填写实体类名称', trigger: 'blur' }],
  path: [{ required: true, message: '请填写生成包路径', trigger: 'blur' }],
  module: [{ required: true, message: '请填写生成模块名', trigger: 'blur' }],
  business: [{ required: true, message: '请填写生成业务名', trigger: 'blur' }],
  feature: [{ required: true, message: '请填写生成功能名', trigger: 'blur' }]
});
</script>

<template>
  <el-tab-pane v-bind="$attrs">
    <el-form :model="forms" :rules="rules" label-width="130px">
      <div class="grid grid-cols-2 grid-rows-4 grid-flow-col pt-5">
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
              <el-tooltip effect="dark" content="生成在哪个java包下，例如：com.bcc.system" placement="top">
                <el-icon><QuestionFilled /></el-icon>
              </el-tooltip>
            </div>
          </template>
          <el-input v-model="forms.path" />
        </el-form-item>
        <el-form-item prop="module">
          <template #label>
            <div class="flex items-center space-x-1">
              <span>生成模块名</span>
              <el-tooltip effect="dark" content="可理解为子系统名，例如：system" placement="top">
                <el-icon><QuestionFilled /></el-icon>
              </el-tooltip>
            </div>
          </template>
          <el-input v-model="forms.module" />
        </el-form-item>
        <el-form-item prop="business">
          <template #label>
            <div class="flex items-center space-x-1">
              <span>生成业务名</span>
              <el-tooltip effect="dark" content="可理解为功能英文名，例如：user" placement="top">
                <el-icon><QuestionFilled /></el-icon>
              </el-tooltip>
            </div>
          </template>
          <el-input v-model="forms.business" />
        </el-form-item>
        <el-form-item prop="feature">
          <template #label>
            <div class="flex items-center space-x-1">
              <span>生成功能名</span>
              <el-tooltip effect="dark" content="用作类描述，例如：用户" placement="top">
                <el-icon><QuestionFilled /></el-icon>
              </el-tooltip>
            </div>
          </template>
          <el-input v-model="forms.feature" />
        </el-form-item>
      </div>
      <el-form-item label="备注">
        <el-input v-model="forms.remark" :rows="5" type="textarea" />
      </el-form-item>
    </el-form>
  </el-tab-pane>
</template>
