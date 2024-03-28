"use strict";
n.r(t), n("733860");
var a, l = n("31775"),
  s = n.n(l),
  i = n("442837"),
  r = n("570140");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = {
  channelVisits: new(s())({
    max: 1e3
  }),
  bannerRenders: []
};

function d(e, t) {
  return e + t
}
class c extends(a = i.default.PersistedStore) {
  initialize(e) {
    null != e && (Array.isArray(e.bannerRenders) && (u.bannerRenders = e.bannerRenders), null != e.channelVisitsDump && u.channelVisits.load(e.channelVisitsDump))
  }
  getState() {
    return {
      bannerRenders: u.bannerRenders,
      channelVisitsDump: u.channelVisits.dump()
    }
  }
  getNumberOfRenders() {
    var e, t;
    return null !== (t = null === (e = u.bannerRenders) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0
  }
  getNumberOfRendersSince(e) {
    var t;
    return (null !== (t = u.bannerRenders) && void 0 !== t ? t : []).filter(t => t >= Date.now() - 1e3 * e).length
  }
  getNumberOfChannelVisitsSince(e, t, n) {
    var a;
    return (null !== (a = u.channelVisits.get(e + t)) && void 0 !== a ? a : []).filter(e => e >= Date.now() - 1e3 * n).length
  }
}
o(c, "displayName", "UnreadSettingNoticeStore"), o(c, "persistKey", "UnreadSettingNoticeStore"), t.default = new c(r.default, {
  UNREAD_SETTING_NOTICE_RENDERED: function() {
    u.bannerRenders.length > 100 && u.bannerRenders.pop(), u.bannerRenders.unshift(Date.now())
  },
  UNREAD_SETTING_NOTICE_CHANNEL_VISIT: function(e) {
    var t;
    let {
      guildId: n,
      channelId: a
    } = e, l = n + a, s = null !== (t = u.channelVisits.get(l)) && void 0 !== t ? t : [];
    s.length > 100 && s.pop(), s.unshift(Date.now()), u.channelVisits.set(l, s)
  }
})