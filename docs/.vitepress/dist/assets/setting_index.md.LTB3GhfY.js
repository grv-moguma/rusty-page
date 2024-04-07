import{_ as s,c as i,o as e,V as a}from"./chunks/framework.-4abrUGY.js";const u=JSON.parse('{"title":"VitePressの導入から起動、GitHub Pagesでの公開方法","description":"","frontmatter":{},"headers":[],"relativePath":"setting/index.md","filePath":"setting/index.md"}'),t={name:"setting/index.md"},p=a(`<h1 id="vitepressの導入から起動、github-pagesでの公開方法" tabindex="-1">VitePressの導入から起動、GitHub Pagesでの公開方法 <a class="header-anchor" href="#vitepressの導入から起動、github-pagesでの公開方法" aria-label="Permalink to &quot;VitePressの導入から起動、GitHub Pagesでの公開方法&quot;">​</a></h1><h2 id="vitepressの導入" tabindex="-1">VitePressの導入 <a class="header-anchor" href="#vitepressの導入" aria-label="Permalink to &quot;VitePressの導入&quot;">​</a></h2><ol><li><p>新しいプロジェクトディレクトリを作成します。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-site</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-site</span></span></code></pre></div></li><li><p>npmを使用してVitePressをインストールします。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div></li><li><p>ディレクトリ構造を確認します。<code>docs</code>フォルダが作成され、その中に<code>index.md</code>があります。</p></li><li><p>開発サーバーを起動します。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span></code></pre></div><p>これで、<code>localhost:3001</code>でサイトが表示されます。</p></li></ol>`,3),n=[p];function l(h,d,o,r,c,k){return e(),i("div",null,n)}const F=s(t,[["render",l]]);export{u as __pageData,F as default};
