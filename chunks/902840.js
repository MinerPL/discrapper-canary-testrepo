"use strict";
n.d(t, {
  Jc: function() {
    return l
  },
  Lp: function() {
    return a
  },
  tW: function() {
    return o
  },
  ts: function() {
    return u
  }
}), n(399606);
var i = n(430824),
  r = n(981631),
  s = n(176505);

function o(e) {
  return a(e, !0, !1)
}

function a(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  return !(null == e || ! function(e) {
    var t;
    if (null == e) return !1;
    let n = i.Z.getGuild(null !== (t = null == e ? void 0 : e.guild_id) && void 0 !== t ? t : ""),
      s = null != n && n.rulesChannelId === e.id;
    return r.TPd.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !s
  }(e) || !1 === t && e.hasFlag(s.zZ.SUMMARIES_DISABLED)) && l(i.Z.getGuild(e.guild_id), n)
}

function l(e) {
  var t;
  let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  if (null == e) return !1;
  return !!((null == (t = e.id) || t !== r.ME && t !== r.I_8) && e.hasFeature(r.oNc.SUMMARIES_ENABLED_GA)) && (!n || e.hasFeature(r.oNc.SUMMARIES_ENABLED_BY_USER))
}

function u(e) {
  arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return a(e, t)
}