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

单独发布官网时，可以把这个目录作为 GitHub 仓库根目录。

1. 创建一个空的 GitHub 官网仓库。
2. 将这个目录的内容推送到仓库的 `main` 分支。
3. 在 GitHub 中打开 `Settings -> Pages`。
4. 将 `Source` 设置为 `GitHub Actions`。
5. 推送到 `main`，或手动运行“部署静态官网到 GitHub Pages”工作流。

如果是根域名 Pages 或自定义域名，不需要额外的构建前缀配置。

如果使用项目型 Pages 地址，例如 `https://ACCOUNT.github.io/REPO/`，请添加仓库变量：

- Name: `SITE_BASE_PATH`
- Value: `/REPO`
- Name: `SITE_URL`
- Value: `https://ACCOUNT.github.io/REPO`

如果要用 `wildaes.com`，请在 GitHub Pages 中配置自定义域名，并把 DNS 指向 GitHub Pages。
