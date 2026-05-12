# WildAes 官网

WildAes 与 Pyria Wallpaper 的静态公司官网。

## 本地预览

```bash
npm install
npm run build
python3 -m http.server 4173 --directory out
```

打开 `http://127.0.0.1:4173/`。

## GitHub Pages

本仓库同时保留 Next.js 源码和已经导出的静态页面。

1. 在 GitHub 中打开 `Settings -> Pages`。
2. 将 `Source` 设置为 `Deploy from a branch`。
3. 将分支设置为 `main`，目录设置为 `/docs`。
4. 保存后等待 GitHub Pages 部署完成。

当前静态页面已按项目型 Pages 地址构建：

- `https://edisonlee878-cyber.github.io/WildAes/`

如需重新生成 `docs/`：

```bash
NEXT_PUBLIC_SITE_BASE_PATH=/WildAes SITE_URL=https://edisonlee878-cyber.github.io/WildAes npm run build
rm -rf docs
cp -R out docs
```

如果要用 `wildaes.com`，请在 GitHub Pages 中配置自定义域名，并把 DNS 指向 GitHub Pages。
