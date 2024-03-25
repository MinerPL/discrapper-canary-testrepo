"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007"), n("843762");
var i = n("6587"),
  o = n("677315"),
  l = n("290886"),
  u = n("288518"),
  a = n("486503"),
  s = n("393027"),
  d = n("845579"),
  r = n("686470"),
  E = n("791823"),
  c = n("287850"),
  _ = n("449008"),
  A = n("722525"),
  C = n("49111"),
  T = n("724210");
let S = () => {
  let e = u.default.getMessageRequestsCount() > 0 || a.default.getSpamChannelsCount() > 0;
  return [C.Routes.FRIENDS, r.default.hasLibraryApplication() && !d.DisableGamesTab.getSetting() ? C.Routes.APPLICATION_LIBRARY : null, C.Routes.APPLICATION_STORE, e ? C.Routes.MESSAGE_REQUESTS : null, C.Routes.COLLECTIBLES_SHOP, d.FamilyCenterEnabled.getSetting() ? C.Routes.FAMILY_CENTER : null].filter(_.isNotNullish)
};

function I(e, t) {
  (0, A.transitionToChannel)(e, t)
}

function f() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
    t = s.default.getState().guildId;
  null == t ? ! function(e) {
    var t;
    let {
      channelId: n,
      path: i,
      basePath: o
    } = s.default.getState(), l = c.default.getPrivateChannelIds(), u = __OVERLAY__ ? l : [...S(), ...l];
    let a = null == n ? (t = null != i ? i : o, S().findIndex(e => t.startsWith(e))) : null != n ? u.indexOf(n) : 0,
      d = a + e;
    d >= u.length ? d = 0 : d < 0 && (d = u.length - 1);
    let r = u[d];
    S().includes(r) ? ! function(e) {
      let t = E.default.getCurrentRoute();
      e === C.Routes.APPLICATION_STORE && null != t ? (0, A.transitionToPage)(t) : (0, A.transitionToPage)(e)
    }(r) : I(C.ME, r)
  }(e) : ! function(e, t) {
    var n, u;
    let a = s.default.getState().channelId,
      d = (0, i.default)(t).map(e => e.id);
    ((0, o.canSeeGuildHome)(t) || (0, l.canSeeOnboardingHome)(t)) && d.unshift(T.StaticChannelRoute.GUILD_HOME);
    let r = null != a ? d.indexOf(a) : -1;
    let E = (n = r + e, u = d.length, n < 0 ? u - 1 : n >= u ? 0 : n);
    I(t, d[E])
  }(e, t)
}