"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("816782"),
  i = n("318661"),
  r = n("57048"),
  o = n("87728"),
  u = n("433355"),
  d = n("284199"),
  c = n("502568"),
  f = n("981631"),
  h = n("689938");

function m(e) {
  let {
    channel: t,
    showCallOrActivityPanel: n
  } = e, m = (0, l.useStateFromStores)([u.default], () => u.default.getSection(t.id, null == t ? void 0 : t.isDM())), p = (0, i.default)(t.getRecipientId()), E = (0, o.default)(), C = m === f.ChannelSections.PROFILE && !E;
  return (0, a.jsx)(c.Icon, {
    disabled: E || n,
    tooltip: E || n ? h.default.Messages.SHOW_USER_PROFILE_UNAVAILABLE : C ? h.default.Messages.HIDE_USER_PROFILE : h.default.Messages.SHOW_USER_PROFILE,
    icon: d.default,
    onClick: () => {
      (0, r.trackProfilePanelToggled)(p, !C), s.default.toggleProfilePanelSection()
    },
    selected: C && !E && !n
  })
}