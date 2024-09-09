t.d(n, {
    Z: function () {
        return d;
    }
});
var a = t(735250),
    i = t(470079),
    l = t(481060),
    s = t(528011),
    o = t(666657),
    u = t(533244),
    r = t(689938);
function d(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { shouldShowIncidentActions: d, isUnderLockdown: c, incidentData: E } = (0, s.mI)(e.id),
        I = i.useCallback(() => {
            let n = {
                source: o.Zu.CONTEXT_MENU,
                alertType: (0, u.T1)(E)
            };
            (0, l.openModalLazy)(async () => {
                let { default: i } = await t.e('61536').then(t.bind(t, 664452));
                return (t) =>
                    (0, a.jsx)(i, {
                        ...t,
                        guildId: e.id,
                        analyticsData: n
                    });
            });
        }, [e.id, E]);
    return e.isCommunity() && d
        ? (0, a.jsx)(l.MenuItem, {
              id: 'server-lockdown',
              label: c ? r.Z.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_UNLOCK : r.Z.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_LOCK,
              icon: n ? (c ? l.LockUnlockedIcon : l.LockIcon) : void 0,
              action: I,
              color: 'danger'
          })
        : null;
}
