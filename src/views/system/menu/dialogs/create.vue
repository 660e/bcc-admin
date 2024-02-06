<script lang="ts" name="create-dialog" setup>
import { onMounted, reactive, ref } from 'vue';
import { FormRules } from 'element-plus';
import { SelectOption } from '@/modules/forms';
import { getMenuList } from '@/api/modules/system';
import { buildTree } from '@/utils';

import IconSelect from '@/components/icon-select/index.vue';

const visible = ref(false);

const formRef = ref();
const model = ref({
  parentId: '',
  menuType: 'M',
  icon: '',
  menuName: '',
  orderNum: 0,
  isFrame: '1',
  path: '',
  component: '',
  perms: '',
  query: '',
  isCache: '1',
  visible: '0',
  status: '0'
});
const rules = reactive<FormRules>({});

const parentIdOptions = ref<SelectOption[]>();

const open = async () => {
  const response: any = await getMenuList();
  parentIdOptions.value = buildTree(
    response.data.map((e: any) => {
      return { label: e.menuName, value: e.menuId, id: e.menuId, pid: e.parentId };
    })
  );
  visible.value = true;
};
const closed = () => {
  console.log('closed');
};
const confirm = () => {
  console.log(model.value);
  visible.value = false;
};

defineExpose({ open });

onMounted(() => open());
</script>

<template>
  <el-dialog v-model="visible" title="" width="700">
    <el-form :model="model" :rules="rules" @closed="closed" label-width="100" ref="formRef" class="px-5 pt-5">
      <el-form-item label="上级菜单" prop="parentId">
        <el-tree-select v-model="model.parentId" :data="parentIdOptions" check-strictly clearable />
      </el-form-item>
      <el-form-item label="菜单类型" prop="menuType">
        <el-radio-group v-model="model.menuType">
          <el-radio label="M">目录</el-radio>
          <el-radio label="C">菜单</el-radio>
          <el-radio label="F">按钮</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="model.menuType === 'M' || model.menuType === 'C'" label="菜单图标" prop="icon">
        <icon-select v-model:icon-value="model.icon" />
      </el-form-item>
      <div class="grid grid-cols-2 gap-x-5">
        <el-form-item label="菜单名称" prop="menuName">
          <el-input v-model="model.menuName" />
        </el-form-item>
        <el-form-item label="显示排序" prop="orderNum">
          <el-input-number v-model="model.orderNum" :min="0" controls-position="right" class="w-full" />
        </el-form-item>
        <el-form-item v-if="model.menuType === 'M' || model.menuType === 'C'" prop="isFrame">
          <template #label>
            <div class="flex items-center space-x-1">
              <span>是否外链</span>
              <el-tooltip content="选择是外链则路由地址需要以`http(s)://`开头" placement="top">
                <el-icon><QuestionFilled /></el-icon>
              </el-tooltip>
            </div>
          </template>
          <el-radio-group v-model="model.isFrame">
            <el-radio label="0">是</el-radio>
            <el-radio label="1">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-if="model.menuType === 'M' || model.menuType === 'C'" prop="path">
          <template #label>
            <div class="flex items-center space-x-1">
              <span>路由地址</span>
              <el-tooltip content="访问的路由地址，如：`user`，如外网地址需内链访问则以`http(s)://`开头" placement="top">
                <el-icon><QuestionFilled /></el-icon>
              </el-tooltip>
            </div>
          </template>
          <el-input v-model="model.path" />
        </el-form-item>
        <el-form-item v-if="model.menuType === 'C'" prop="component">
          <template #label>
            <div class="flex items-center space-x-1">
              <span>组件路径</span>
              <el-tooltip content="访问的组件路径，如：`system/user/index`，默认在`views`目录下" placement="top">
                <el-icon><QuestionFilled /></el-icon>
              </el-tooltip>
            </div>
          </template>
          <el-input v-model="model.component" />
        </el-form-item>
        <el-form-item v-if="model.menuType === 'F' || model.menuType === 'C'" prop="perms">
          <template #label>
            <div class="flex items-center space-x-1">
              <span>权限字符</span>
              <el-tooltip content="控制器中定义的权限字符，如：@PreAuthorize(`@ss.hasPermi('system:user:list')`)" placement="top">
                <el-icon><QuestionFilled /></el-icon>
              </el-tooltip>
            </div>
          </template>
          <el-input v-model="model.perms" />
        </el-form-item>
        <el-form-item v-if="model.menuType === 'C'" prop="query">
          <template #label>
            <div class="flex items-center space-x-1">
              <span>路由参数</span>
              <el-tooltip content="访问路由的默认传递参数" placement="top">
                <el-icon><QuestionFilled /></el-icon>
              </el-tooltip>
            </div>
          </template>
          <el-input v-model="model.query" />
        </el-form-item>
        <el-form-item v-if="model.menuType === 'C'" prop="isCache">
          <template #label>
            <div class="flex items-center space-x-1">
              <span>是否缓存</span>
              <el-tooltip content="选择是则会被`keep-alive`缓存，需要匹配组件的`name`和地址保持一致" placement="top">
                <el-icon><QuestionFilled /></el-icon>
              </el-tooltip>
            </div>
          </template>
          <el-radio-group v-model="model.isCache">
            <el-radio label="0">缓存</el-radio>
            <el-radio label="1">不缓存</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-if="model.menuType === 'M' || model.menuType === 'C'" prop="visible">
          <template #label>
            <div class="flex items-center space-x-1">
              <span>显示状态</span>
              <el-tooltip content="选择隐藏则路由将不会出现在侧边栏，但仍然可以访问" placement="top">
                <el-icon><QuestionFilled /></el-icon>
              </el-tooltip>
            </div>
          </template>
          <el-radio-group v-model="model.visible">
            <el-radio label="0">显示</el-radio>
            <el-radio label="1">隐藏</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="status">
          <template #label>
            <div class="flex items-center space-x-1">
              <span>菜单状态</span>
              <el-tooltip content="选择停用则路由将不会出现在侧边栏，也不能被访问" placement="top">
                <el-icon><QuestionFilled /></el-icon>
              </el-tooltip>
            </div>
          </template>
          <el-radio-group v-model="model.status">
            <el-radio label="0">正常</el-radio>
            <el-radio label="1">停用</el-radio>
          </el-radio-group>
        </el-form-item>
      </div>
    </el-form>

    <template #footer>
      <div class="flex justify-end">
        <el-button @click="visible = false">取消</el-button>
        <el-button @click="confirm" type="primary">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>
