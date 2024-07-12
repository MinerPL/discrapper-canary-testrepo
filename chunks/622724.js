n.d(t, {
  Z: function() {
return _;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  o = n(100527),
  s = n(726521),
  l = n(87620),
  u = n(314897),
  c = n(981631),
  d = n(689938);

function _(e) {
  let {
user: t,
guildId: n,
color: _,
onAction: E,
location: f = o.Z.CONTEXT_MENU
  } = e, h = (0, l.oV)(f), p = (0, i.e7)([u.default], () => u.default.getId() === t.id);
  return !h || p || t.isNonUserBot() ? null : (0, r.jsx)(a.MenuItem, {
id: 'report-user',
color: _,
label: d.Z.Messages.REPORTS_USER_BUTTON_TITLE,
action: () => (0, s.pX)(t, n === c.ME ? void 0 : n, E)
  });
}