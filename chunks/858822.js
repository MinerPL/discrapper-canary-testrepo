n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250);
n(470079);
var a = n(913527), s = n.n(a), l = n(442837), r = n(481060), o = n(92114), c = n(776568), d = n(777861), u = n(9156), _ = n(621600), E = n(689938);
function m(e, t) {
    let n = null == e ? void 0 : e.id, {
            muted: a,
            muteConfig: m
        } = (0, l.cj)([u.ZP], () => ({
            muted: null != n ? u.ZP.isMuted(n) : void 0,
            muteConfig: null != n ? u.ZP.getMuteConfig(n) : void 0
        }), [n]), I = (0, d.U)(m);
    return null == n ? null : a ? (0, i.jsx)(r.MenuItem, {
        id: 'unmute-guild',
        label: E.Z.Messages.UNMUTE_SERVER,
        subtext: I,
        action: () => o.Z.updateGuildNotificationSettings(n, { muted: !1 }, _.ZB.Unmuted)
    }) : (0, i.jsx)(r.MenuItem, {
        id: 'mute-guild',
        label: E.Z.Messages.MUTE_SERVER,
        action: () => o.Z.updateGuildNotificationSettings(n, { muted: !0 }, _.ZB.Muted),
        children: (0, c.k)().map(e => {
            let {
                value: a,
                label: l
            } = e;
            return (0, i.jsx)(r.MenuItem, {
                id: ''.concat(a),
                label: l,
                action: () => function (e) {
                    if (null == n)
                        return;
                    let i = e > 0 ? s()().add(e, 'second').toISOString() : null;
                    o.Z.updateGuildNotificationSettings(n, {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: i
                        }
                    }, _.ZB.Muted, t);
                }(a)
            }, a);
        })
    });
}
