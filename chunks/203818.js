"use strict";
n.r(t);
var i, s = n("442837"),
  l = n("570140");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let r = {};

function d(e) {
  let {
    guildId: t,
    expand: n
  } = e;
  n ? r[t] = !0 : delete r[t]
}
class o extends(i = s.default.PersistedStore) {
  initialize(e) {
    r = null != e ? e : {}
  }
  isVoiceCategoryExpanded(e) {
    var t;
    return null !== (t = null != e && r[e]) && void 0 !== t && t
  }
  isVoiceCategoryCollapsed(e) {
    return !this.isVoiceCategoryExpanded(e)
  }
  getState() {
    return r
  }
}
a(o, "displayName", "ChannelListVoiceCategoryStore"), a(o, "persistKey", "ChannelListVoiceCategoryStore"), t.default = new o(l.default, {
  VOICE_CATEGORY_COLLAPSE: d,
  VOICE_CATEGORY_EXPAND: d
})