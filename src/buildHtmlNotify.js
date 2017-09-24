export default function buildHtmlNotify(e) {
  const { build, repository } = e;
  if (build !== null) {
    const {status, commit, pusher} = build;
    const url = `${repository.html_url}/commits/${commit}`;
    const message = `[info][title]${pusher.login}がWebSiteをビルドしました。[/title]status: ${status}
変更内容: ${url}
url: https://osh-web.github.io[/info]`
    return message;
  }
  return null;
}
