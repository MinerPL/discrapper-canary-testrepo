l.d(n, {
  Z: function() {
return _;
  }
});
var t = l(735250),
  r = l(470079),
  i = l(481060),
  a = l(906732),
  s = l(702557),
  u = l(171368),
  d = l(314897),
  o = l(246946),
  c = l(626135),
  Z = l(981631),
  E = l(228168),
  M = l(689938);

function _(e) {
  let {
user: n,
guildId: l,
context: _
  } = e, {
id: f
  } = n, {
loading: g,
note: m
  } = (0, s.Z)(f), I = !g && null != m && m.length > 0, R = _ === Z.IlC.POPOUT, N = r.useContext(c.AnalyticsContext), {
analyticsLocations: A
  } = (0, a.ZP)();
  return f === d.default.getId() || o.Z.hidePersonalInformation || R ? null : (0, t.jsx)(i.MenuItem, {
id: 'note',
label: g ? M.Z.Messages.LOADING_NOTE : I ? M.Z.Messages.EDIT_NOTE : M.Z.Messages.ADD_NOTE,
action: () => {
  (0, u.openUserProfileModal)({
    userId: n.id,
    section: E.oh.USER_INFO,
    subsection: E.Tb.NOTE,
    guildId: l,
    sourceAnalyticsLocations: A,
    analyticsLocation: N.location
  });
}
  });
}