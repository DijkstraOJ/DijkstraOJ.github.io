# 问径官网

问径的单页静态宣传网站。使用原生 HTML、CSS 和少量 JavaScript，无需安装依赖或执行构建。

## 预览

直接打开 `index.html`，或在本目录运行：

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

然后访问 `http://127.0.0.1:8080`。

## 页面内容

品牌介绍、学习理念、千阶计划、编程工作台视觉示意、学习与教学场景、常见问题。
导航与按钮均指向页面内部。页面不依赖学习平台 API，没有登录、题库或代码提交功能。
展示代码为原创公开示例，路线和界面均标注为示意。

## 文件

- `index.html`：页面结构、中文文案和搜索引擎元信息。
- `styles.css`：桌面、平板、手机布局和视觉样式。
- `script.js`：移动导航、渐入效果和页脚年份。
- `assets/brand-mark.svg`：沿用问径项目的品牌图形。
- `assets/social-cover.svg`：品牌分享封面。
- `.nojekyll`：供 GitHub Pages 直接服务静态文件。
- `CNAME`：GitHub Pages 的自定义域名 `dijkstra.cn`。

## 发布

网站使用 GitHub Pages，从 `main` 分支的根目录 `/` 发布，主地址为 `https://dijkstra.cn/`。

### 自定义域名

1. 提交并推送根目录的 `CNAME` 文件及页面修改，在仓库 [Settings → Pages](https://github.com/DijkstraOJ/DijkstraOJ.github.io/settings/pages) 确认 Custom domain 为 `dijkstra.cn`。先完成 GitHub 端绑定，再修改 DNS 解析。
2. 在域名 DNS 控制台添加以下记录，TTL 使用平台默认值：

   | 主机记录 | 类型 | 记录值 |
   | --- | --- | --- |
   | `@` | `A` | `185.199.108.153` |
   | `@` | `A` | `185.199.109.153` |
   | `@` | `A` | `185.199.110.153` |
   | `@` | `A` | `185.199.111.153` |
   | `www` | `CNAME` | `dijkstraoj.github.io` |

   检查并替换 `@`、`www` 下与上述配置冲突的旧网站解析记录。保留邮件和其他子域名的记录。
3. 等待 GitHub Pages 的 DNS 检查通过及 HTTPS 证书签发，再启用 Enforce HTTPS。`www.dijkstra.cn` 会自动跳转到主域名。
4. 访问 `https://dijkstra.cn/`，确认页面和静态资源正常加载。

DNS 记录与配置顺序见 [GitHub Pages 官方说明](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)。

文案及展示图应与问径平台实际发布内容保持一致。如需兼容社交平台抓取分享图，可将 `social-cover.svg` 导出为 PNG，再同步修改 `og:image`。
