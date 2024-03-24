"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("37983");
s("884691");
var l = s("454686"),
  n = s("839670"),
  i = s("279843"),
  r = s("447820"),
  o = s("154639"),
  d = s("309175");

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