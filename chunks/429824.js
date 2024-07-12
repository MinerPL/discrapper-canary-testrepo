t.d(n, {
  Z: function() {
return u;
  }
});
var a = t(735250),
  l = t(470079),
  i = t(481060),
  s = t(528011),
  o = t(666657),
  r = t(533244),
  d = t(689938);

function u(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
{
  shouldShowIncidentActions: u,
  isUnderLockdown: c,
  incidentData: E
} = (0, s.mI)(e.id),
I = l.useCallback(() => {
  let n = {
    source: o.Zu.CONTEXT_MENU,
    alertType: (0, r.T1)(E)
  };
  (0, i.openModalLazy)(async () => {
    let {
      default: l
    } = await t.e('61536').then(t.bind(t, 664452));
    return t => (0, a.jsx)(l, {
      ...t,
      guildId: e.id,
      analyticsData: n
    });
  });
}, [
  e.id,
  E
]);
  return e.isCommunity() && u ? (0, a.jsx)(i.MenuItem, {
id: 'server-lockdown',
label: c ? d.Z.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_UNLOCK : d.Z.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_LOCK,
icon: n ? c ? i.LockUnlockedIcon : i.LockIcon : void 0,
action: I,
color: 'danger'
  }) : null;
}