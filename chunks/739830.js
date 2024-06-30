n.d(t, {
    Z: function () {
        return m;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(481060), s = n(502568), r = n(585483), o = n(723170), c = n(64247), u = n(124368), d = n(981631), h = n(689938), p = n(502890);
function m(e) {
    let {channel: t} = e, n = (0, o.B)(t), [m, _] = a.useState(!1), f = (0, l.useRedesignIconContext)().enabled;
    a.useEffect(() => {
        let e = () => _(!0);
        return r.S.subscribe(d.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e), () => {
            r.S.unsubscribe(d.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
        };
    }, []);
    let E = h.Z.Messages.NOTIFICATION_SETTINGS;
    return (0, i.jsx)(l.Popout, {
        shouldShow: m,
        animation: l.Popout.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => _(!1),
        renderPopout: e => (0, i.jsx)(c.Z, {
            ...e,
            channel: t,
            navId: 'thread-context',
            label: h.Z.Messages.THREAD_ACTIONS_MENU_LABEL
        }),
        children: (e, t) => {
            let {isShown: a} = t;
            return (0, i.jsx)(s.ZP.Icon, {
                ...e,
                onClick: () => _(e => !e),
                tooltip: a ? null : E,
                icon: n === u.iN.NO_MESSAGES ? l.BellSlashIcon : l.BellIcon,
                foreground: n !== u.iN.NO_MESSAGES || f ? null : p.strikethrough,
                'aria-label': E,
                selected: a
            });
        }
    });
}
