n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(906732),
    s = n(541716),
    o = n(752305),
    l = n(893718),
    u = n(131704),
    c = n(5192),
    d = n(785717),
    _ = n(698305),
    E = n(981631),
    f = n(689938),
    h = n(687610);
let p = (0, u.kt)({
    id: '1',
    type: E.d4z.DM
});
function I(e) {
    let { user: t, guildId: n, channelId: u, onClose: E } = e,
        { newestAnalyticsLocation: I } = (0, a.ZP)(),
        { trackUserProfileAction: m } = (0, d.KZ)(),
        [T, S] = i.useState(''),
        [g, A] = i.useState((0, o.JM)(T)),
        N = i.useRef(!1);
    return (0, r.jsx)(l.Z, {
        innerClassName: h.inner,
        editorClassName: h.editor,
        type: s.I.USER_PROFILE,
        placeholder: f.Z.Messages.QUICK_DM_USER.format({ name: c.ZP.getName(n, u, t) }),
        channel: p,
        textValue: T,
        richValue: g,
        onChange: (e, t, n) => {
            if (t !== T) S(t), A(n);
        },
        focused: N.current,
        onFocus: () => {
            N.current = !0;
        },
        onBlur: () => {
            N.current = !1;
        },
        onSubmit: async (e) => {
            let { value: n } = e;
            try {
                return (
                    m({ action: 'SEND_DIRECT_MESSAGE' }),
                    await (0, _.Z)({
                        userId: t.id,
                        content: n.trim(),
                        location: I
                    }),
                    null == E || E(),
                    {
                        shouldClear: !0,
                        shouldRefocus: !1
                    }
                );
            } catch {
                return {
                    shouldClear: !1,
                    shouldRefocus: !1
                };
            }
        }
    });
}
