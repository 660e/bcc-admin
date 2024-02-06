<script lang="ts" name="create-dialog" setup>
import { onMounted, reactive, ref } from 'vue';
import { FormRules } from 'element-plus';
import { SelectOption } from '@/modules/forms';
import { getMenuList } from '@/api/modules/system';
import { buildTree } from '@/utils';

const visible = ref(false);

const formRef = ref();
const model = ref({
  parentId: ''
});
const rules = reactive<FormRules>({});

const parentIdOptions = ref<SelectOption[]>();

const open = async () => {
  const response: any = await getMenuList();
  parentIdOptions.value = buildTree(
    response.data.map((e: any) => {
      return {
        label: e.menuName,
        value: e.menuId,
        id: e.menuId,
        pid: e.parentId
      };
    })
  );
  visible.value = true;
};

defineExpose({ open });

onMounted(() => open());
</script>

<template>
  <el-dialog v-model="visible">
    <el-form :model="model" :rules="rules" ref="formRef">
      <el-form-item label="上级菜单" prop="parentId">
        <el-tree-select v-model="model.parentId" :data="parentIdOptions" placeholder="选择上级菜单" check-strictly clearable />
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
