import fs from "fs";
import path from "path";

// 递归获取指定目录下的所有指定后缀名文件列表
export const walk = function (baseDir, subDir = "", collapsible, collapsed) {
  let results = [];

  const list = fs.readdirSync(path.join(baseDir, subDir));
  list.forEach((file) => {
    const filePath = path.join(baseDir, subDir, file);
    if (fs.statSync(filePath).isDirectory()) {
      results = results.concat(walk(baseDir, path.join(subDir, file)));
    } else if (path.extname(file) === ".md") {
      results.push(filePath);
    }
  });

  const baseDirName = baseDir.replace("./", ""); // 获取 baseDir 的名称部分

  const items = results
    .map((item) => {
      const relativePath = path.relative(baseDir, item).replace(/\\/g, "/");
      return {
        text: path.basename(item, ".md"),
        link: `/${baseDirName}/${relativePath.slice(0, -3)}`, // 包含手动指定的 baseDir 名称部分
      };
    })
    .sort((a, b) => {
      const index1 = Number(a.text.split(".")[0]);
      const index2 = Number(b.text.split(".")[0]);
      return index1 - index2;
    });

  return {
    text: subDir || "默认值",
    collapsible: collapsible,
    collapsed: collapsed,
    items: items,
  };
};
