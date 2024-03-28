"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("524437"),
  i = n("566840"),
  r = n("434479"),
  o = n("158010"),
  u = n("527379"),
  d = n("689938");

function c(e) {
  let {
    guild: t,
    selected: n
  } = e, c = a.useCallback(() => {
    (0, u.goToMemberSafetyDashboard)(t.id)
  }, [t.id]), f = (0, i.useChannelListUpsellLocationTrackerRef)(t.id, s.DismissibleContent.MEMBERS_LAUNCH_UPSELL);
  return (0, l.jsx)("div", {
    ref: f,
    children: (0, l.jsx)(r.default, {
      renderIcon: e => (0, l.jsx)(o.default, {
        className: e
      }),
      text: d.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE,
      selected: n,
      onClick: c
    })
  })
}