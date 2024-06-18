"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(100527),
  o = n(726521),
  a = n(87620),
  l = n(981631),
  u = n(689938);

function _(e) {
  let {
    user: t,
    guildId: n,
    color: _,
    onAction: d,
    location: c = s.Z.CONTEXT_MENU
  } = e;
  return !(0, a.oV)(c) || t.isNonUserBot() ? null : (0, i.jsx)(r.MenuItem, {
    id: "report-user",
    color: _,
    label: u.Z.Messages.REPORTS_USER_BUTTON_TITLE,
    action: () => (0, o.pX)(t, n === l.ME ? void 0 : n, d)
  })
}