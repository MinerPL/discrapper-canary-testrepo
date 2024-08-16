n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(481060),
    s = n(287734),
    o = n(585483),
    l = n(871499),
    u = n(981631),
    c = n(689938);
function d(e) {
    let { channel: t, centerButton: n = !1, ...d } = e,
        _ = n ? l.d : l.Z,
        E = t.isManaged() || !t.isPrivate() ? c.Z.Messages.CONNECT : c.Z.Messages.JOIN_CALL,
        f = i.useCallback(() => s.default.selectVoiceChannel(t.id), [t.id]);
    return (
        i.useEffect(
            () => (
                o.S.subscribe(u.CkL.CALL_ACCEPT, f),
                () => {
                    o.S.unsubscribe(u.CkL.CALL_ACCEPT, f);
                }
            ),
            [f]
        ),
        (0, r.jsx)(_, {
            ...d,
            iconComponent: a.PhoneCallIcon,
            label: E,
            onClick: f
        })
    );
}
