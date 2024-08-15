e.d(t, {
  Z: function() {
return f;
  }
});
var u = e(735250);
e(470079);
var i = e(442837),
  r = e(481060),
  l = e(666657),
  o = e(533244),
  a = e(487419),
  c = e(430824),
  d = e(981631),
  s = e(689938);

function f(n, t) {
  let f = t === d.IlC.POPOUT,
_ = (0, i.e7)([c.Z], () => c.Z.getGuild(n), [n]),
I = (0, i.e7)([a.Z], () => null != _ ? a.Z.getGuildIncident(_.id) : null);
  return f ? null : (0, u.jsx)(r.MenuItem, {
id: 'nav-security-actions',
label: s.Z.Messages.GUILD_ANTIRAID_NAGBAR_ACTION,
action: () => {
  let t = {
    source: l.Zu.MESSAGE,
    alertType: (0, o.T1)(I)
  };
  (0, r.openModalLazy)(async () => {
    let {
      default: i
    } = await e.e('61536').then(e.bind(e, 664452));
    return e => (0, u.jsx)(i, {
      ...e,
      guildId: n,
      analyticsData: t
    });
  });
}
  });
}