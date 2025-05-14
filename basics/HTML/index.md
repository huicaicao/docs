# HTML5 完整教程

## 1. HTML基础知识

### 1.1 HTML简介
> **HTML**（*Hyper Text Markup Language*）是用于创建网页的标准标记语言。

#### HTML特点：
- 🌐 使用标记标签描述网页
- 📝 文档包含 HTML 标签及文本内容
- 🔄 文档后缀可以是 .html 或 .htm
- 🎯 通过标签对网页内容进行标记

### 1.2 浏览器内核
> **浏览器内核**是浏览器的核心，负责解析网页标记语言并渲染页面。

| 浏览器 | 内核 | 说明 |
|:-------|:-----|:-----|
| IE | Trident | IE、360安全、搜狗、百度等 |
| Firefox | Gecko | 火狐浏览器内核 |
| Safari | WebKit | 苹果浏览器内核 |
| Chrome/Opera | Blink | 由WebKit分支演化而来 |

## 2. HTML文档结构

### 2.1 基本结构
```html
<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>网页标题</title>
    </head>
    <body>
        网页内容
    </body>
</html>
```

### 2.2 文档声明
> `<!DOCTYPE>` 声明必须是 HTML 文档的第一行，位于 `<html>` 标签之前。

### 2.3 字符集和编码
```html
<meta charset="UTF-8">
```
- UTF-8：支持中文编码，推荐使用
- GB2312：简体中文编码
- GBK：包含繁体字符

### 2.4 HTML标签

#### 常用标签
1. **基础标签**
   ```html
   <h1>一级标题</h1>  <!-- h1~h6 -->
   <p>段落标签</p>
   <br />  <!-- 换行 -->
   <hr />  <!-- 水平线 -->
   ```

2. **文本格式化标签**
   | 标签 | 显示效果 | 语义 |
   |:-----|:---------|:-----|
   | `<strong>` | **加粗** | 强调 |
   | `<em>` | *斜体* | 强调 |
   | `<del>` | ~~删除线~~ | 删除 |
   | `<ins>` | <u>下划线</u> | 插入 |

3. **图像标签**
   ```html
   <img src="url" alt="替换文本" title="提示文本" width="宽" height="高" />
   ```
   
   #### 图像标签属性
   | 属性 | 说明 |
   |:-----|:-----|
   | src | 图片路径（必需） |
   | alt | 图片显示不出来时的替代文本 |
   | title | 鼠标悬停时显示的文本 |
   | width | 图片宽度 |
   | height | 图片高度 |
   | border | 图片边框粗细 |

4. **超链接标签**
   ```html
   <a href="url" target="_blank">链接文本</a>
   ```
   
   #### 链接属性
   | 属性 | 值 | 说明 |
   |:-----|:---|:-----|
   | href | URL | 链接目标地址 |
   | target | _blank | 新窗口打开 |
   | target | _self | 当前窗口打开（默认） |
   | target | _parent | 父框架打开 |
   | target | _top | 顶层窗口打开 |

   #### 链接分类
   1. **外部链接**
      ```html
      <a href="http://www.example.com">外部网站</a>
      ```
   
   2. **内部链接**
      ```html
      <a href="about.html">关于我们</a>
      ```
   
   3. **空链接**
      ```html
      <a href="#">空链接</a>
      ```
   
   4. **下载链接**
      ```html
      <a href="文件.zip">下载文件</a>
      ```
   
   5. **锚点链接**
      ```html
      <!-- 创建锚点 -->
      <h3 id="top">顶部</h3>
      <!-- 跳转到锚点 -->
      <a href="#top">回到顶部</a>
      ```

### 2.5 表格标签
```html
<table border="1">
    <thead>
        <tr>
            <th>表头1</th>
            <th>表头2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>数据1</td>
            <td>数据2</td>
        </tr>
    </tbody>
</table>
```

#### 表格属性
| 属性 | 说明 |
|:-----|:-----|
| border | 边框宽度 |
| cellpadding | 单元格内边距 |
| cellspacing | 单元格间距 |
| width | 表格宽度 |
| height | 表格高度 |
| align | 对齐方式 |

#### 表格结构标签
| 标签 | 说明 |
|:-----|:-----|
| `<table>` | 表格 |
| `<thead>` | 表格头部 |
| `<tbody>` | 表格主体 |
| `<tfoot>` | 表格底部 |
| `<tr>` | 行 |
| `<th>` | 表头单元格 |
| `<td>` | 标准单元格 |

#### 表格合并
```html
<!-- 跨列合并 -->
<td colspan="2">合并单元格</td>

<!-- 跨行合并 -->
<td rowspan="2">合并单元格</td>
```

### 2.6 列表标签

#### 无序列表
```html
<ul type="disc">
    <li>列表项1</li>
    <li>列表项2</li>
</ul>
```
- type可选值：disc(默认实心圆)、circle(空心圆)、square(实心方块)

#### 有序列表
```html
<ol type="1" start="3">
    <li>列表项1</li>
    <li>列表项2</li>
</ol>
```
- type可选值：1(默认数字)、A(大写字母)、a(小写字母)、I(大写罗马)、i(小写罗马)
- start：起始序号

#### 自定义列表
```html
<dl>
    <dt>名词1</dt>
    <dd>解释1</dd>
    <dt>名词2</dt>
    <dd>解释2</dd>
</dl>
```

### 2.7 表单标签

#### 表单域
```html
<form action="url" method="post" name="myform">
    <!-- 表单控件 -->
</form>
```

#### 表单属性
| 属性 | 说明 |
|:-----|:-----|
| action | 提交地址 |
| method | 提交方式(get/post) |
| name | 表单名称 |
| enctype | 编码方式 |
| target | 打开方式 |

#### 表单控件
1. **输入框**
   ```html
   <!-- 文本框 -->
   <input type="text" name="username" value="默认值" placeholder="提示文本">
   
   <!-- 密码框 -->
   <input type="password" name="pwd">
   
   <!-- 单选按钮 -->
   <input type="radio" name="gender" value="male" checked> 男
   <input type="radio" name="gender" value="female"> 女
   
   <!-- 复选框 -->
   <input type="checkbox" name="hobby" value="reading" checked> 阅读
   <input type="checkbox" name="hobby" value="sports"> 运动
   
   <!-- 文件上传 -->
   <input type="file" name="file">
   
   <!-- 隐藏域 -->
   <input type="hidden" name="id" value="123">
   ```

2. **下拉列表**
   ```html
   <select name="city" multiple size="3">
       <option value="">请选择</option>
       <option value="bj" selected>北京</option>
       <option value="sh">上海</option>
   </select>
   ```

3. **文本域**
   ```html
   <textarea name="comment" cols="30" rows="10" placeholder="请输入内容"></textarea>
   ```

4. **按钮**
   ```html
   <!-- 提交按钮 -->
   <input type="submit" value="提交">
   
   <!-- 重置按钮 -->
   <input type="reset" value="重置">
   
   <!-- 普通按钮 -->
   <input type="button" value="点击">
   
   <!-- 图片按钮 -->
   <input type="image" src="button.jpg">
   ```

5. **标签**
   ```html
   <label for="username">用户名：</label>
   <input type="text" id="username">
   ```

### 2.8 布局标签

#### 基础布局标签
1. **div标签**
   ```html
   <div>块级容器</div>
   ```
   - 块级元素，独占一行
   - 可以包含任何元素
   - 主要用于页面布局和分区

2. **span标签**
   ```html
   <span>行内容器</span>
   ```
   - 行内元素，不会换行
   - 通常用于文本修饰
   - 可以和其他行内元素并排

#### HTML5语义化布局标签
```html
<header>
    <nav>导航栏</nav>
</header>
<main>
    <article>
        <section>区块内容</section>
    </article>
    <aside>侧边栏</aside>
</main>
<footer>页脚</footer>
```

| 标签 | 说明 | 特点 |
|:-----|:-----|:-----|
| `<header>` | 页头 | 可以包含导航、标题等 |
| `<nav>` | 导航 | 主要导航链接区域 |
| `<main>` | 主要内容 | 每个页面只能有一个 |
| `<article>` | 文章 | 独立的内容区域 |
| `<section>` | 区块 | 相关内容的分组 |
| `<aside>` | 侧边栏 | 辅助信息区域 |
| `<footer>` | 页脚 | 底部信息、版权等 |

## 3. HTML5新特性

### 3.1 语义化标签
- `<header>` - 页眉
- `<nav>` - 导航
- `<main>` - 主要内容
- `<article>` - 文章
- `<section>` - 区块
- `<aside>` - 侧边栏
- `<footer>` - 页脚

### 3.2 多媒体标签

#### 视频标签
```html
<video src="movie.mp4" 
       controls 
       width="800" 
       height="600" 
       autoplay 
       muted 
       loop 
       poster="封面.jpg">
    您的浏览器不支持video标签
</video>
```

#### 视频属性
| 属性 | 值 | 说明 |
|:-----|:---|:-----|
| src | URL | 视频地址 |
| controls | controls | 显示播放控件 |
| autoplay | autoplay | 自动播放 |
| muted | muted | 静音播放 |
| loop | loop | 循环播放 |
| poster | URL | 封面图片 |
| preload | auto/none | 是否预加载 |

#### 音频标签
```html
<audio src="music.mp3" 
       controls 
       autoplay 
       loop>
    您的浏览器不支持audio标签
</audio>
```

#### 音频属性
| 属性 | 值 | 说明 |
|:-----|:---|:-----|
| src | URL | 音频地址 |
| controls | controls | 显示播放控件 |
| autoplay | autoplay | 自动播放 |
| loop | loop | 循环播放 |

### 3.3 表单新增类型
```html
<!-- 邮箱 -->
<input type="email" placeholder="请输入邮箱">

<!-- 网址 -->
<input type="url" placeholder="请输入网址">

<!-- 日期 -->
<input type="date">
<input type="time">
<input type="datetime-local">
<input type="month">
<input type="week">

<!-- 数字 -->
<input type="number" min="0" max="100" step="10">

<!-- 滑块 -->
<input type="range" min="0" max="100">

<!-- 搜索 -->
<input type="search" placeholder="搜索...">

<!-- 颜色 -->
<input type="color">

<!-- 电话 -->
<input type="tel" pattern="[0-9]{11}">
```

### 3.4 表单新增属性
| 属性 | 说明 |
|:-----|:-----|
| required | 必填项 |
| placeholder | 提示文本 |
| autofocus | 自动获取焦点 |
| autocomplete | 自动完成 |
| multiple | 多选 |
| pattern | 正则验证 |
| form | 表单域 |

## 4. 开发规范

### 4.1 代码规范
- 标签名小写
- 属性名小写
- 属性值双引号
- 标签必须闭合
- 标签嵌套规范
- 注释规范清晰

### 4.2 SEO优化
- 合理使用标题标签
- 图片添加 alt 属性
- 使用语义化标签
- 提供 meta 描述
- 使用规范的URL结构

### 4.3 性能优化
- 压缩图片资源
- 合理使用缓存
- 减少HTTP请求
- 使用CDN加速
- 代码压缩合并

### 4.4 移动端适配
- 使用viewport设置
- 使用响应式设计
- 采用弹性布局
- 优化触摸体验
- 考虑网络环境

---

> 📌 **学习建议：**
> - 多练习，多动手
> - 养成规范编码习惯
> - 掌握常用标签用法
> - 理解语义化概念
> - 注重细节和兼容性
> - 关注新特性发展
> - 重视用户体验
> - 保持代码整洁