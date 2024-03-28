"use strict";
n.r(t);
var i, o, l, u, a, s, d, r = n("442837"),
  E = n("570140"),
  c = n("592125"),
  _ = n("896797"),
  A = n("430824"),
  C = n("944486"),
  T = n("55589"),
  I = n("981631");
let S = (null !== (s = null === (a = window) || void 0 === a ? void 0 : null === (u = a.location) || void 0 === u ? void 0 : u.pathname) && void 0 !== s ? s : "").startsWith(I.Routes.ACTIVITIES) ? I.Routes.ACTIVITIES : null;

function f(e) {
  let {
    link: t
  } = e;
  if (S === t) return !1;
  S = t
}
class N extends(d = r.default.Store) {
  initialize() {
    this.waitFor(_.default, T.default, C.default, A.default, c.default)
  }
  getHomeLink() {
    return null != S ? S : _.default.fallbackRoute
  }
}
l = "AppViewStore", (o = "displayName") in(i = N) ? Object.defineProperty(i, o, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[o] = l, t.default = new N(E.default, {
  OVERLAY_INITIALIZE: function() {
    let e = T.default.getPrivateChannelIds(),
      t = C.default.getChannelId(I.ME);
    (null != t || null != e[0]) && (S = I.Routes.CHANNEL(I.ME, null != t ? t : e[0]))
  },
  APP_VIEW_SET_HOME_LINK: f,
  APPLICATION_STORE_LOCATION_CHANGE: function(e) {
    let {
      location: t
    } = e;
    f({
      link: t.pathname,
      type: "APP_VIEW_SET_HOME_LINK"
    })
  },
  APPLICATION_STORE_RESET_NAVIGATION: function() {
    if (null == S || !S.startsWith(I.Routes.APPLICATION_STORE)) return !1;
    S = I.Routes.APPLICATION_STORE
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t && null != n) {
      let e = I.Routes.CHANNEL(I.ME, n);
      if (e !== S) return S = e, !0
    }
    return !1
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    null == t.guild_id && null != t.id && null != S && S === I.Routes.CHANNEL(I.ME, t.id) && (S = null)
  }
})