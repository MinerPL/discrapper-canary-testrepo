n.d(t, {
  dg: function() {
return s;
  },
  tX: function() {
return l;
  },
  uu: function() {
return o;
  }
});
var r = n(581883),
  i = n(359119),
  a = n(473092);

function s() {
  var e, t, n;
  let i = null === (n = null === (t = r.Z.settings.privacy) || void 0 === t ? void 0 : null === (e = t.inappropriateConversationWarnings) || void 0 === e ? void 0 : e.value) || void 0 === n || n;
  return (0, a.Lm)('safety_warnings_setting') && i;
}

function o(e) {
  var t;
  let n = (t = e, i.ZP.getChannelSafetyWarnings(t).filter(e => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1));
  if (n.filter(e => null != e.dismiss_timestamp).length > 0)
return null;
  let r = n.filter(e => null == e.dismiss_timestamp);
  return 1 === r.length ? r[0] : null;
}

function l(e) {
  let t = e.filter(e => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1);
  return t.length > 0 && t.every(e => null == e.dismiss_timestamp);
}