# GitHub Pagesでの公開

1. `docs/.vitepress/config.js`に以下の設定を追加します。
   ```javascript
   module.exports = {
     base: '/<repository-name>/',
   }
   ```

2. ビルドコマンドを実行します。
   ```bash
   npx vitepress build docs
   ```
   これにより、`.vitepress/dist`ディレクトリにサイトの静的ファイルが生成されます。

3. 生成された静的ファイルをGitHubにプッシュします。
   - GitHubで新しいリポジトリを作成します。
   - ローカルリポジトリをGitHubリポジトリにリンクします。
   - ビルドされた静的ファイルを`gh-pages`ブランチにプッシュします。
     ```bash
     git subtree push --prefix .vitepress/dist origin gh-pages
     ```

4. GitHubリポジトリの設定から、GitHub Pagesのソースを`gh-pages`ブランチに設定します。

これで、GitHub Pagesを通じてVitePressサイトが公開されます。
