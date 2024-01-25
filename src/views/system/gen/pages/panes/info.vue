<script lang="ts" name="info-pane" setup>
import { reactive } from 'vue';
import type { FormRules } from 'element-plus';

interface Forms {
  [key: string]: string;
}

const forms = reactive<Forms>({
  tableName: '',
  tableComment: '',
  tplCategory: 'crud',
  className: '',
  packageName: '',
  moduleName: '',
  businessName: '',
  functionName: '',
  remark: '',

  treeCode: '',
  treeParentCode: '',
  treeName: '',

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
  functionName: [{ required: true, message: '请填写生成功能名', trigger: 'blur' }],

  treeCode: [{ required: true, message: '请填写树编码字段', trigger: 'change' }],
  treeParentCode: [{ required: true, message: '请填写树父编码字段', trigger: 'change' }],
  treeName: [{ required: true, message: '请填写树名称字段', trigger: 'change' }],

  subTableName: [{ required: true, message: '请填写关联子表的表名', trigger: 'change' }],
  subTableFkName: [{ required: true, message: '请填写子表关联的外键名', trigger: 'change' }]
});
</script>

<template>
  <el-tab-pane v-bind="$attrs">
    <el-form :model="forms" :rules="rules" label-width="170px">
      <div class="grid grid-cols-2 pt-5">
        <el-form-item label="表名称" prop="tableName">
          <el-input v-model="forms.tableName" />
        </el-form-item>
        <el-form-item label="表描述" prop="tableComment">
          <el-input v-model="forms.tableComment" />
        </el-form-item>
        <el-form-item label="生成模板">
          <el-select v-model="forms.tplCategory">
            <el-option label="单表（增删改查）" value="crud" />
            <el-option label="树表（增删改查）" value="tree" />
            <el-option label="主子表（增删改查）" value="sub" />
          </el-select>
        </el-form-item>
        <el-form-item label="实体类名称" prop="className">
          <el-input v-model="forms.className" />
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

        <!-- 生成模板：树表 -->
        <template v-if="forms.tplCategory === 'tree'">
          <el-form-item prop="treeCode">
            <template #label>
              <div class="flex items-center space-x-1">
                <span>树编码字段</span>
                <el-tooltip effect="dark" content="树显示的编码字段名，如：dept_id" placement="top">
                  <el-icon><QuestionFilled /></el-icon>
                </el-tooltip>
              </div>
            </template>
            <el-select v-model="forms.treeCode"></el-select>
          </el-form-item>
          <el-form-item prop="treeParentCode">
            <template #label>
              <div class="flex items-center space-x-1">
                <span>树父编码字段</span>
                <el-tooltip effect="dark" content="树显示的父编码字段名，如：parent_Id" placement="top">
                  <el-icon><QuestionFilled /></el-icon>
                </el-tooltip>
              </div>
            </template>
            <el-select v-model="forms.treeParentCode"></el-select>
          </el-form-item>
          <el-form-item prop="treeName">
            <template #label>
              <div class="flex items-center space-x-1">
                <span>树名称字段</span>
                <el-tooltip effect="dark" content="树节点的显示名称字段名，如：dept_name" placement="top">
                  <el-icon><QuestionFilled /></el-icon>
                </el-tooltip>
              </div>
            </template>
            <el-select v-model="forms.treeName"></el-select>
          </el-form-item>
        </template>

        <!-- 生成模板：主子表 -->
        <template v-if="forms.tplCategory === 'sub'">
          <el-form-item prop="subTableName">
            <template #label>
              <div class="flex items-center space-x-1">
                <span>关联子表的表名</span>
                <el-tooltip effect="dark" content="关联子表的表名，如：sys_user" placement="top">
                  <el-icon><QuestionFilled /></el-icon>
                </el-tooltip>
              </div>
            </template>
            <el-select v-model="forms.subTableName"></el-select>
          </el-form-item>
          <el-form-item prop="subTableFkName">
            <template #label>
              <div class="flex items-center space-x-1">
                <span>子表关联的外键名</span>
                <el-tooltip effect="dark" content="子表关联的外键名，如：user_id" placement="top">
                  <el-icon><QuestionFilled /></el-icon>
                </el-tooltip>
              </div>
            </template>
            <el-select v-model="forms.subTableFkName"></el-select>
          </el-form-item>
        </template>
      </div>

      <el-form-item label="备注">
        <el-input v-model="forms.remark" :rows="5" type="textarea" />
      </el-form-item>
    </el-form>
  </el-tab-pane>
</template>
