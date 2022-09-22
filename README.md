### `npm start`
### `npm run build`

### 坑1 
/*使用typescript开发react时候引入 *.module.less有所不同*/
配置了typescript-plugin-css-modules 以及 vscode 类名自动提示

### 坑2
declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

### 坑3 配置别名@指向src目录
1.修改craco.config.js 文件
2.创建 path.tsconfig.json 文件 
3.配置tsconfig.json 文件

### 坑4 利用反向注入获取function的返回值类型
一般用于获取store的所有state类型

### 坑5 规范 useSelector中的类型
const loginState = useSelector(state => state.login) //对象的类型为 "unknown"。
改为
const loginState = useSelector<RootState, loginType>(state => state.login)

### 坑6 像window setTimeout 这种容易出现 eslint 处理 is not defined 的错误
"globals": {
    "document": true,
    "localStorage": true,
    "window": true,
    "setTimeout": true,
    "console": true,
  }
### 坑7 修改默认滚动条 自定义效果更佳
考虑到原生滚动条的效果不佳 会有阴影 体验不是很好 所以采用自定义效果
::-webkit-scrollbar
::-webkit-scrollbar-thumb

### 坑8 设置时间选择器需要结合moment.js来处理
form.setFieldsValue({ ...record, updated_at: moment(record.updated_at) })

### 坑9 当我使用setFileldsValue时 Switch组建通过checked控制的状态而不是value 这时我们可以通过valuePropName这个属性绑定到Form.Item上来解决

### 坑10 Partial可选 Required必选 Pick与Omit也是正好相反，一个是选择其中属性，另一个是剔除其中属性。

### 坑11 select下拉框带搜索功能时 注意optionFilterProp这个属性
showSearch: true,
optionFilterProp: "children"

### 坑12 preserveSelectedRowKeys控制Table选择是否保留上页面已选内容

### Descriptions 不会自动换行
.ant-descriptions-item{
    word-break: break-all;
    white-space: pre-wrap;
}
### scp 本地文件 root@180.76.xxx.x:/usr/share 发声本地文件到服务器/usr/share目录下

### 移动端H5 防止Ios出现横向滚动条     
  overflow: hidden;
  overflow-y: auto;

### 获取原生button的Ts类型 type ButtonProps = React.ButtonHTMLAttributes<HTMLElement>
### 获取原生a标签的Ts类型 type AProps = React.AnchorHTMLAttributes<HTMLElement>

### Partial Ts类型 表示可选类型类似于？
### Omit Ts类型 表示从中剔除某个类型

### 主要区别是 React.useMemo 将调用 fn 函数并返回其结果，而 React.useCallback 将返回 fn 函数而不调用它

### QueryFilter

### DragSortTable

### 阻止合成事件与最外层 document 上的事件间的冒泡，用e.nativeEvent.stopImmediatePropagation()

### React Sortable HOC