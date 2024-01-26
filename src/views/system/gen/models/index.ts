export interface InfoType {
  tableName: string;
  tableComment: string;
  tplCategory: string;
  className: string;
  packageName: string;
  moduleName: string;
  businessName: string;
  functionName: string;

  treeCode: string;
  treeParentCode: string;
  treeName: string;

  subTableName: string;
  subTableFkName: string;

  remark: string;

  functionAuthor: string;
  tplWebType: string;
  genType: string;
}

export interface DataType {
  info: InfoType;
  rows: InfoType[];
}

export interface SelectOption {
  label: string;
  value: string;
}