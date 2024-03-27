"use strict";
s.r(t), s.d(t, {
  getSafetyAlertsSettingOrDefault: function() {
    return r
  },
  getInappropriateConversationTakeoverForChannel: function() {
    return o
  },
  shouldShowTakeoverForWarnings: function() {
    return i
  }
});
var n = s("374363"),
  a = s("764828"),
  l = s("217736");

function r() {
  var e, t, s;
  let a = null === (s = null === (t = n.default.settings.privacy) || void 0 === t ? void 0 : null === (e = t.inappropriateConversationWarnings) || void 0 === e ? void 0 : e.value) || void 0 === s || s,
    r = (0, l.getUserIsTeen)("safety_warnings_setting");
  return r && a
}

function o(e) {
  let t = function(e) {
      let t = a.default.getChannelSafetyWarnings(e);
      return t.filter(e => e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1)
    }(e),
    s = t.filter(e => null != e.dismiss_timestamp);
  if (s.length > 0) return null;
  let n = t.filter(e => null == e.dismiss_timestamp);
  return 1 === n.length ? n[0] : null
}

function i(e) {
  let t = e.filter(e => e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
  return t.length > 0 && t.every(e => null == e.dismiss_timestamp)
}