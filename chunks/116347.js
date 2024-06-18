"use strict";
n.d(t, {
  dg: function() {
    return o
  },
  tX: function() {
    return l
  },
  uu: function() {
    return a
  }
});
var i = n(581883),
  r = n(359119),
  s = n(473092);

function o() {
  var e, t, n;
  let r = null === (n = null === (t = i.Z.settings.privacy) || void 0 === t ? void 0 : null === (e = t.inappropriateConversationWarnings) || void 0 === e ? void 0 : e.value) || void 0 === n || n;
  return (0, s.Lm)("safety_warnings_setting") && r
}

function a(e) {
  var t;
  let n = (t = e, r.ZP.getChannelSafetyWarnings(t).filter(e => e.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_1));
  if (n.filter(e => null != e.dismiss_timestamp).length > 0) return null;
  let i = n.filter(e => null == e.dismiss_timestamp);
  return 1 === i.length ? i[0] : null
}

function l(e) {
  let t = e.filter(e => e.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_1);
  return t.length > 0 && t.every(e => null == e.dismiss_timestamp)
}