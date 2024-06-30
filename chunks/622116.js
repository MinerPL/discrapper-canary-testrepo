n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(735250);
n(470079);
var a = n(442837), s = n(481060), l = n(475179), r = n(287734), o = n(933557), c = n(124072), d = n(703656), u = n(131704), _ = n(592125), E = n(430824), m = n(699516), I = n(594174), T = n(934415), h = n(900849), N = n(981631);
function f(e) {
    let {
            channel: t,
            onClick: n,
            beforeTransition: f,
            className: p,
            openChatWithoutConnecting: C
        } = e, g = (0, a.e7)([
            I.default,
            m.Z
        ], () => null == t ? '' : (0, o.F6)(t, I.default, m.Z), [t]);
    return (0, i.jsx)(s.Tooltip, {
        text: g,
        position: 'top',
        children: e => {
            let {
                onMouseEnter: a,
                onMouseLeave: o
            } = e;
            return (0, i.jsx)(c.Z, {
                role: 'link',
                className: p,
                onClick: e => {
                    e.stopPropagation(), null != n ? n() : (null != f && f(), (0, s.closeAllModals)(), !function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (null == e || null == t)
                            return;
                        let i = E.Z.getGuild(e);
                        if ((null == i ? void 0 : i.joinedAt) == null) {
                            h.Ub(e, {}, { channelId: t });
                            return;
                        }
                        let a = _.Z.getChannel(t);
                        if (null != a && (0, u.bw)(a.type)) {
                            if (n) {
                                l.Z.updateChatOpen(a.id, !0), (0, d.uL)(N.Z5c.CHANNEL(e, t));
                                return;
                            }
                            r.default.selectVoiceChannel(a.id);
                            return;
                        }
                        (0, d.uL)(N.Z5c.CHANNEL(e, t));
                    }(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, C));
                },
                onMouseEnter: a,
                onMouseLeave: o,
                iconType: (0, T.wl)(t),
                children: g
            });
        }
    });
}
