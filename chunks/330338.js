"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var i, o, l, u = n("446674"),
  a = n("913144"),
  s = n("42203"),
  d = n("476108"),
  r = n("305961"),
  E = n("18494"),
  c = n("287850"),
  _ = n("49111");
let A = (null !== (l = null === (o = window) || void 0 === o ? void 0 : null === (i = o.location) || void 0 === i ? void 0 : i.pathname) && void 0 !== l ? l : "").startsWith(_.Routes.ACTIVITIES) ? _.Routes.ACTIVITIES : null;

function C(e) {
  let {
    link: t
  } = e;
  if (A === t) return !1;
  A = t
}
class T extends u.default.Store {
  initialize() {
    this.waitFor(d.default, c.default, E.default, r.default, s.default)
  }
  getHomeLink() {
    return null != A ? A : d.default.fallbackRoute
  }
}
T.displayName = "AppViewStore";
var I = new T(a.default, {
  OVERLAY_INITIALIZE: function() {
    let e = c.default.getPrivateChannelIds(),
      t = E.default.getChannelId(_.ME);
    (null != t || null != e[0]) && (A = _.Routes.CHANNEL(_.ME, null != t ? t : e[0]))
  },
  APP_VIEW_SET_HOME_LINK: C,
  APPLICATION_STORE_LOCATION_CHANGE: function(e) {
    let {
      location: t
    } = e;
    C({
      link: t.pathname,
      type: "APP_VIEW_SET_HOME_LINK"
    })
  },
  APPLICATION_STORE_RESET_NAVIGATION: function() {
    if (null == A || !A.startsWith(_.Routes.APPLICATION_STORE)) return !1;
    A = _.Routes.APPLICATION_STORE
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t && null != n) {
      let e = _.Routes.CHANNEL(_.ME, n);
      if (e !== A) return A = e, !0
    }
    return !1
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    null == t.guild_id && null != t.id && null != A && A === _.Routes.CHANNEL(_.ME, t.id) && (A = null)
  }
})