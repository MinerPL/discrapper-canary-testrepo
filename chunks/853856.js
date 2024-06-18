"use strict";
var i, r, s, o, a = n(442837),
  l = n(524437),
  u = n(570140),
  _ = n(581883),
  d = n(131704),
  c = n(981631);
let E = {},
  I = !1;

function T() {
  var e, t, n;
  I = null !== (n = null === (e = _.Z.settings.favorites) || void 0 === e ? void 0 : e.muted) && void 0 !== n && n, E = {};
  let i = null === (t = _.Z.settings.favorites) || void 0 === t ? void 0 : t.favoriteChannels;
  if (null == i) return !1;
  for (let e in i) {
    let t = i[e];
    E[e] = {
      id: e,
      nickname: "" !== t.nickname ? t.nickname : null,
      type: t.type,
      order: t.position,
      parentId: "0" !== t.parentId ? t.parentId : null
    }
  }
}
class h extends(o = a.ZP.Store) {
  initialize() {
    this.waitFor(_.Z), T(), this.syncWith([_.Z], T)
  }
  getFavoriteChannels() {
    return E
  }
  get favoriteServerMuted() {
    return I
  }
  isFavorite(e) {
    return null != e && null != E[e]
  }
  getFavorite(e) {
    if (null != e) return E[e]
  }
  getCategoryRecord(e) {
    if (e in E && E[e].type === l.Dd.CATEGORY) {
      var t, n;
      return t = E[e], (0, d.kt)({
        id: t.id,
        name: null !== (n = t.nickname) && void 0 !== n ? n : "",
        type: c.d4z.GUILD_CATEGORY,
        position: t.order,
        guild_id: c.I_8
      })
    }
    return null
  }
  getNickname(e) {
    var t;
    let n = this.getFavorite(e);
    return null !== (t = null == n ? void 0 : n.nickname) && void 0 !== t ? t : void 0
  }
}
s = "FavoriteStore", (r = "displayName") in(i = h) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new h(u.Z, {})