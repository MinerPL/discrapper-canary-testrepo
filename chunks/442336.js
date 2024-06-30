n.d(t, {
    Z: function () {
        return f;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(442837), s = n(481060), r = n(92114), o = n(9156), c = n(502568), u = n(585483), d = n(621600), h = n(110255), p = n(981631), m = n(689938), _ = n(777794);
function f(e) {
    let {channel: t} = e, n = (0, s.useRedesignIconContext)().enabled, [f, E] = (0, l.Wu)([o.ZP], () => [
            o.ZP.isChannelMuted(t.getGuildId(), t.id),
            o.ZP.resolvedMessageNotifications(t)
        ], [t]), [C, g] = a.useState(!1);
    a.useEffect(() => {
        let e = () => g(!0);
        return u.S.subscribe(p.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e), () => {
            u.S.unsubscribe(p.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
        };
    }, []);
    let I = e => {
            e.shiftKey ? r.Z.updateChannelOverrideSettings(t.guild_id, t.id, { muted: !f }, d.UE.muted(!f)) : g(e => !e);
        }, x = m.Z.Messages.NOTIFICATION_SETTINGS;
    return (0, i.jsx)(s.Popout, {
        shouldShow: C,
        animation: s.Popout.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => g(!1),
        renderPopout: e => (0, i.jsx)(h.Z, {
            ...e,
            channel: t,
            navId: 'channel-context',
            label: m.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL
        }),
        children: (e, t) => {
            let {isShown: a} = t;
            return (0, i.jsx)(c.ZP.Icon, {
                ...e,
                onClick: I,
                tooltip: a ? null : x,
                icon: f || E !== p.bL.ALL_MESSAGES ? s.BellSlashIcon : s.BellIcon,
                foreground: f && !n ? _.strikethrough : null,
                'aria-label': x,
                selected: a
            });
        }
    });
}
