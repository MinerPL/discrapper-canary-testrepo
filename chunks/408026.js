n(47120);
var i = n(570140),
  a = n(224706),
  s = n(710845),
  r = n(77498);
let l = {};

function o(e) {
  let {
name: t,
hash: n,
missingData: i
  } = e;
  for (let e of (r.Z.markGameReported(t), i)) {
if ('icon' === e) {
  let e = l[t];
  null != e && a.Z.uploadIcon(t, n, e);
  return;
}
new s.Z('GameStoreIconManager').log('Could not find missing data key: '.concat(e));
  }
}

function c(e) {
  let {
gameName: t,
icon: n
  } = e;
  l[t] = n;
}
t.Z = {
  initialize() {
i.Z.subscribe('UNVERIFIED_GAME_UPDATE', o), i.Z.subscribe('GAME_ICON_UPDATE', c);
  }
};