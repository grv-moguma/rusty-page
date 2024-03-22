# VitePressの導入から起動、GitHub Pagesでの公開方法

## VitePressの導入

1. 新しいプロジェクトディレクトリを作成します。
   ```bash
   mkdir vitepress-site
   cd vitepress-site
   ```

2. npmを使用してVitePressをインストールします。
   ```bash
   npm init vitepress
   ```

3. ディレクトリ構造を確認します。`docs`フォルダが作成され、その中に`index.md`があります。

4. 開発サーバーを起動します。
   ```bash
   npx vitepress dev docs
   ```
   これで、`localhost:3001`でサイトが表示されます。
