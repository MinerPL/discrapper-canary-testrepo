n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(110255),
    r = n(64247),
    l = n(981631),
    o = n(689938);
function c(e) {
    let { channel: t } = e;
    return (0, i.jsx)(a.Popout, {
        align: 'right',
        animation: a.Popout.Animation.NONE,
        position: 'bottom',
        renderPopout: (e) =>
            t.isThread()
                ? (0, i.jsx)(r.Z, {
                      ...e,
                      channel: t,
                      navId: 'recents-thread-notifications',
                      label: o.Z.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL
                  })
                : (0, i.jsx)(s.Z, {
                      ...e,
                      channel: t,
                      navId: 'recents-notifications',
                      label: o.Z.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
                      location: { section: l.jXE.INBOX },
                      includeGuildMute: !0
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(a.CircleIconButton, {
                tooltip: o.Z.Messages.NOTIFICATION_SETTINGS,
                color: a.CircleIconButtonColors.TERTIARY,
                icon: (0, i.jsx)(a.BellIcon, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                onClick: t
            });
        }
    });
}
