# GitHub Pagesでの公開

* `docs/.vitepress/config.mts`に以下の設定を追加します
```javascript
 export default defineConfig({
     base: '/<repository-name>/',
   })
```


* ビルドを行い静的ファイルを作成します。
   `npm run docs:build`
   これにより、`.vitepress/dist`ディレクトリにサイトの静的ファイルが生成されます。

* 生成された静的ファイルをGitHubにプッシュします。
   - GitHubで新しいリポジトリを作成します。
     1. GitHubにログインします。
     2. 右上のプラスアイコンをクリックし、「New repository」を選択します。
     3. リポジトリ名を入力し、他の設定は必要に応じて調整します。公開リポジトリにする場合は「Public」を選択します。
     4. 「Create repository」ボタンをクリックしてリポジトリを作成します。

   - ローカルリポジトリをGitHubリポジトリにリンクします。

      ローカルで作業しているディレクトリ（プロジェクトフォルダ）で、以下のコマンドを実行してGitHubリポジトリとリンクします。your-repository-urlは、GitHubで作成したリポジトリのURLに置き換えてください。

   - ビルドされた静的ファイルを`gh-pages`ブランチにプッシュします。
```bash
     git subtree push --prefix docs/.vitepress/dist origin gh-pages
```

* GitHubリポジトリの設定から、GitHub Pagesのソースを`gh-pages`ブランチに設定します。
   1. リポジトリの上部メニューで「Settings」をクリックします。
   2. 左側のメニューから「Pages」を選択します。
   3. 「Source」セクションで、Deploy from a branchに設定し、Branchセクションでソースを`gh-pages`ブランチに設定します。

これで、GitHub Pagesを通じてVitePressサイトが公開されます。
