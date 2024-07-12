var r, i, a, o, s = n(442837),
  l = n(524437),
  u = n(570140),
  c = n(581883),
  d = n(131704),
  _ = n(981631);
let E = {},
  f = !1;

function h() {
  var e, t, n;
  f = null !== (n = null === (e = c.Z.settings.favorites) || void 0 === e ? void 0 : e.muted) && void 0 !== n && n, E = {};
  let r = null === (t = c.Z.settings.favorites) || void 0 === t ? void 0 : t.favoriteChannels;
  if (null == r)
return !1;
  for (let e in r) {
let t = r[e];
E[e] = {
  id: e,
  nickname: '' !== t.nickname ? t.nickname : null,
  type: t.type,
  order: t.position,
  parentId: '0' !== t.parentId ? t.parentId : null
};
  }
}
class p extends(o = s.ZP.Store) {
  initialize() {
this.waitFor(c.Z), h(), this.syncWith([c.Z], h);
  }
  getFavoriteChannels() {
return E;
  }
  get favoriteServerMuted() {
return f;
  }
  isFavorite(e) {
return null != e && null != E[e];
  }
  getFavorite(e) {
if (null != e)
  return E[e];
  }
  getCategoryRecord(e) {
if (e in E && E[e].type === l.Dd.CATEGORY) {
  var t, n;
  return t = E[e], (0, d.kt)({
    id: t.id,
    name: null !== (n = t.nickname) && void 0 !== n ? n : '',
    type: _.d4z.GUILD_CATEGORY,
    position: t.order,
    guild_id: _.I_8
  });
}
return null;
  }
  getNickname(e) {
var t;
let n = this.getFavorite(e);
return null !== (t = null == n ? void 0 : n.nickname) && void 0 !== t ? t : void 0;
  }
}
a = 'FavoriteStore', (i = 'displayName') in(r = p) ? Object.defineProperty(r, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = a, t.Z = new p(u.Z, {});