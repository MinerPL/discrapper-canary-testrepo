"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("735250");
s("470079");
var l = s("236413"),
  n = s("961926"),
  i = s("314224"),
  r = s("849715"),
  o = s("591026"),
  d = s("813922");

function u(e) {
  let {
    rule: t,
    isLoading: s,
    onChangeRule: u
  } = e;
  return null == t ? null : (0, l.isRuleKeywordFilter)(t) ? (0, a.jsx)(i.default, {
    rule: t,
    isLoading: s,
    onChangeRule: u
  }) : (0, l.isRuleMLSpamFilter)(t) ? (0, a.jsx)(r.default, {
    rule: t,
    isLoading: s,
    onChangeRule: u
  }) : (0, l.isRuleDefaultKeywordListFilter)(t) ? (0, a.jsx)(n.default, {
    rule: t,
    isLoading: s,
    onChangeRule: u
  }) : (0, l.isRuleMentionSpamFilter)(t) ? (0, a.jsx)(o.default, {
    rule: t,
    isLoading: s,
    onChangeRule: u
  }) : (0, l.isRuleUserProfileFilter)(t) ? (0, a.jsx)(d.default, {
    rule: t,
    isLoading: s,
    onChangeRule: u
  }) : null
}