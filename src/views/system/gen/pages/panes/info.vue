<script lang="ts" name="info-pane" setup>
import { reactive } from 'vue';
import type { FormRules } from 'element-plus';

interface Forms {
  tableName: string;
  tableComment: string;
  className: string;
  tplCategory: string;
  packageName: string;
  moduleName: string;
  businessName: string;
  functionName: string;
  remark: string;

  functionAuthor: string;
  tplWebType: string;
  genType: string;
}

const forms = reactive<Forms>({
  tableName: '',
  tableComment: '',
  className: '',
  tplCategory: 'crud',
  packageName: '',
  moduleName: '',
  businessName: '',
  functionName: '',
  remark: '',

  functionAuthor: 'admin',
  tplWebType: 'element-plus',
  genType: '0'
});

const rules = reactive<FormRules<Forms>>({
  tableName: [{ required: true, message: '请填写表名称', trigger: 'blur' }],
  tableComment: [{ required: true, message: '请填写表描述', trigger: 'blur' }],
  className: [{ required: true, message: '请填写实体类名称', trigger: 'blur' }],
  packageName: [{ required: true, message: '请填写生成包路径', trigger: 'blur' }],
  moduleName: [{ required: true, message: '请填写生成模块名', trigger: 'blur' }],
  businessName: [{ required: true, message: '请填写生成业务名', trigger: 'blur' }],
  functionName: [{ required: true, message: '请填写生成功能名', trigger: 'blur' }]
});
</script>

<template>
  <el-tab-pane v-bind="$attrs">
    <el-form :model="forms" :rules="rules" label-width="130px">
      <div class="grid grid-cols-2 grid-rows-4 grid-flow-col pt-5">
        <el-form-item label="表名称" prop="tableName">
          <el-input v-model="forms.tableName" />
        </el-form-item>
        <el-form-item label="表描述" prop="tableComment">
          <el-input v-model="forms.tableComment" />
        </el-form-item>
        <el-form-item label="实体类名称" prop="className">
          <el-input v-model="forms.className" />
        </el-form-item>
        <el-form-item label="生成模板">
          <el-select v-model="forms.tplCategory">
            <el-option label="单表（增删改查）" value="crud" />
            <el-option label="树表（增删改查）" value="tree" />
            <el-option label="主子表（增删改查）" value="sub" />
          </el-select>
        </el-form-item>
        <el-form-item prop="packageName">
          <template #label>
            <div class="flex items-center space-x-1">
              <span>生成包路径</span>
              <el-tooltip effect="dark" content="生成在哪个java包下，例如：com.bcc.system" placement="top">
                <el-icon><QuestionFilled /></el-icon>
              </el-tooltip>
            </div>
          </template>
          <el-input v-model="forms.packageName" />
        </el-form-item>
        <el-form-item prop="moduleName">
          <template #label>
            <div class="flex items-center space-x-1">
              <span>生成模块名</span>
              <el-tooltip effect="dark" content="可理解为子系统名，例如：system" placement="top">
                <el-icon><QuestionFilled /></el-icon>
              </el-tooltip>
            </div>
          </template>
          <el-input v-model="forms.moduleName" />
        </el-form-item>
        <el-form-item prop="businessName">
          <template #label>
            <div class="flex items-center space-x-1">
              <span>生成业务名</span>
              <el-tooltip effect="dark" content="可理解为功能英文名，例如：user" placement="top">
                <el-icon><QuestionFilled /></el-icon>
              </el-tooltip>
            </div>
          </template>
          <el-input v-model="forms.businessName" />
        </el-form-item>
        <el-form-item prop="functionName">
          <template #label>
            <div class="flex items-center space-x-1">
              <span>生成功能名</span>
              <el-tooltip effect="dark" content="用作类描述，例如：用户" placement="top">
                <el-icon><QuestionFilled /></el-icon>
              </el-tooltip>
            </div>
          </template>
          <el-input v-model="forms.functionName" />
        </el-form-item>
      </div>
      <el-form-item label="备注">
        <el-input v-model="forms.remark" :rows="5" type="textarea" />
      </el-form-item>
    </el-form>
  </el-tab-pane>
</template>
