t.d(n, {
    Z: function () {
        return C;
    }
});
var r = t(735250), i = t(470079), o = t(120356), l = t.n(o), u = t(442837), s = t(518738), a = t(786761), c = t(3148), d = t(753206), _ = t(594174), f = t(5192), E = t(792125), I = t(981631), g = t(689938), p = t(580219);
function C(e) {
    var n;
    let {
            guildId: t,
            role: o,
            theme: C,
            content: T = g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
            className: S
        } = e, m = (0, u.e7)([_.default], () => _.default.getCurrentUser()), h = f.ZP.useName(t, null, m), N = (0, s.Kz)(o), A = i.useMemo(() => (0, a.e5)({
            ...(0, c.ZP)({
                channelId: '0',
                content: T,
                tts: void 0,
                type: void 0,
                messageReference: void 0,
                allowedMentions: void 0,
                author: m
            }),
            state: I.yb.SENT,
            id: '0'
        }), [
            m,
            T
        ]), v = {
            nick: h,
            colorString: null !== (n = o.colorString) && void 0 !== n ? n : void 0
        };
    return (0, r.jsx)('div', {
        className: l()((0, E.Q)(C), p.container, S),
        children: (0, r.jsx)(d.Z, {
            hideTimestamp: !0,
            author: v,
            roleIcon: N,
            message: A,
            isGroupStart: !0,
            disableInteraction: !0
        })
    });
}
