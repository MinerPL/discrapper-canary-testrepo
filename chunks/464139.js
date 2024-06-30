n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), l = n(442837), r = n(481060), o = n(739566), c = n(430824), d = n(467679), u = n(778947), _ = n(702346), E = n(787374), m = n(674563), I = n(689938), T = n(923255);
function h(e) {
    var t;
    let {
            message: n,
            compact: a,
            usernameHook: h,
            channel: N
        } = e, f = (0, l.e7)([c.Z], () => c.Z.getGuild(N.guild_id)), p = (0, o.ZP)(n), C = h(p), {
            avatarSrc: g,
            eventHandlers: {
                onMouseEnter: S,
                onMouseLeave: A
            }
        } = (0, E.m)(!0);
    return (0, i.jsx)('div', {
        onMouseEnter: S,
        onMouseLeave: A,
        children: (0, i.jsx)(_.Z, {
            className: s()(T.mainContainer, { [T.compact]: a }),
            iconNode: a ? null : (0, i.jsx)(E.S, { src: g }),
            iconContainerClassName: T.iconContainer,
            compact: a,
            children: (0, i.jsxs)('div', {
                className: s()(T.content, { [T.compact]: a }),
                children: [
                    (0, i.jsx)(u.nD, {
                        message: n,
                        messageClassname: T.spanCorrection,
                        className: s()(T.usernameContainer, T.spanCorrection, { [T.compact]: a }),
                        username: (0, i.jsxs)('div', {
                            className: T.spanCorrection,
                            children: [
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: T.username,
                                    children: I.Z.Messages.GUILD_AUTOMOD_USERNAME
                                }),
                                (0, i.jsx)(d.Z, {
                                    type: m.Hb.SYSTEM_DM,
                                    className: T.systemTag
                                })
                            ]
                        }),
                        compact: a,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: s()(T.__invalid_messageContent, { [T.compact]: a }),
                        children: I.Z.Messages.GUILD_RAID_REPORT_SYSTEM_MESSAGE.format({
                            username: p.nick,
                            usernameHook: C,
                            guildName: null !== (t = null == f ? void 0 : f.name) && void 0 !== t ? t : ''
                        })
                    })
                ]
            })
        })
    });
}
