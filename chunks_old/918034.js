"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationItem: function() {
    return o
  }
});
var i = n("37983");
n("884691");
var a = n("77078"),
  r = n("764828"),
  s = n("559922"),
  l = n("476294"),
  u = n("782340");

function o(e) {
  let t = (0, l.useInappropriateConversationsTiers)(e);
  if (null === t) return null;
  let {
    isTier1: n,
    isTier2: o
  } = t;
  return (0, i.jsxs)(i.Fragment, {
    children: [!n && (0, i.jsx)(a.MenuItem, {
      id: "mark-as-tier-1-inappro",
      label: u.default.Messages.INAPPROPRIATE_CONVERSATION_MARK_AS_TIER_1,
      action: () => (0, s.markAsInappropriateConversation)(e.id, r.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1)
    }), !o && (0, i.jsx)(a.MenuItem, {
      id: "mark-as-tier-2-inappro",
      label: u.default.Messages.INAPPROPRIATE_CONVERSATION_MARK_AS_TIER_2,
      action: () => (0, s.markAsInappropriateConversation)(e.id, r.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2)
    })]
  })
}