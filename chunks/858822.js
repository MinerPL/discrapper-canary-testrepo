t.d(r, {
    Z: function () {
        return g;
    }
});
var a = t(735250);
t(470079);
var n = t(913527),
    i = t.n(n),
    o = t(442837),
    l = t(481060),
    c = t(92114),
    s = t(776568),
    d = t(777861),
    u = t(9156),
    h = t(621600),
    m = t(689938);
function g(e, r) {
    let t = null == e ? void 0 : e.id,
        { muted: n, muteConfig: g } = (0, o.cj)(
            [u.ZP],
            () => ({
                muted: null != t ? u.ZP.isMuted(t) : void 0,
                muteConfig: null != t ? u.ZP.getMuteConfig(t) : void 0
            }),
            [t]
        ),
        p = (0, d.U)(g);
    return null == t
        ? null
        : n
          ? (0, a.jsx)(l.MenuItem, {
                id: 'unmute-guild',
                label: m.Z.Messages.UNMUTE_SERVER,
                subtext: p,
                action: () => c.Z.updateGuildNotificationSettings(t, { muted: !1 }, h.ZB.Unmuted)
            })
          : (0, a.jsx)(l.MenuItem, {
                id: 'mute-guild',
                label: m.Z.Messages.MUTE_SERVER,
                action: () => c.Z.updateGuildNotificationSettings(t, { muted: !0 }, h.ZB.Muted),
                children: (0, s.k)().map((e) => {
                    let { value: n, label: o } = e;
                    return (0, a.jsx)(
                        l.MenuItem,
                        {
                            id: ''.concat(n),
                            label: o,
                            action: () =>
                                (function (e) {
                                    if (null == t) return;
                                    let a = e > 0 ? i()().add(e, 'second').toISOString() : null;
                                    c.Z.updateGuildNotificationSettings(
                                        t,
                                        {
                                            muted: !0,
                                            mute_config: {
                                                selected_time_window: e,
                                                end_time: a
                                            }
                                        },
                                        h.ZB.Muted,
                                        r
                                    );
                                })(n)
                        },
                        n
                    );
                })
            });
}
