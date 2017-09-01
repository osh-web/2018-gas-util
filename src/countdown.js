// @flow
export default (target: Date): string => {
  const today = new Date();
  const diff = target.getTime() - today.getTime();
  const day = parseInt(diff / 1000 / 60 / 60 / 24);
  return `[info]オープンセミナー2018@広島まであと${day}日[/info]`
}