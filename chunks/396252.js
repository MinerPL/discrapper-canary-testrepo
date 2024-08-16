n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    r = n(442837),
    l = n(481060),
    o = n(385499),
    c = n(430824),
    u = n(739566),
    d = n(464891),
    _ = n(83561),
    E = n(834129),
    I = n(674563),
    m = n(689938),
    T = n(549766);
function h(e) {
    var t;
    let { message: n, compact: a, usernameHook: h, channel: N } = e,
        f = (0, r.e7)([c.Z], () => c.Z.getGuild(N.guild_id)),
        C = (0, u.ZP)(n),
        p = h(C),
        {
            avatarSrc: g,
            eventHandlers: { onMouseEnter: S, onMouseLeave: A }
        } = (0, _.m)(!0);
    return (0, i.jsx)('div', {
        onMouseEnter: S,
        onMouseLeave: A,
        children: (0, i.jsx)(E.Z, {
            className: s()(T.mainContainer, { [T.compact]: a }),
            iconNode: a ? null : (0, i.jsx)(_.S, { src: g }),
            iconContainerClassName: T.iconContainer,
            compact: a,
            children: (0, i.jsxs)('div', {
                className: s()(T.content, { [T.compact]: a }),
                children: [
                    (0, i.jsx)(d.nD, {
                        message: n,
                        messageClassname: T.spanCorrection,
                        className: s()(T.usernameContainer, T.spanCorrection, { [T.compact]: a }),
                        username: (0, i.jsxs)('div', {
                            className: T.spanCorrection,
                            children: [
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: T.username,
                                    children: m.Z.Messages.GUILD_AUTOMOD_USERNAME
                                }),
                                (0, i.jsx)(o.Z, {
                                    type: I.Hb.SYSTEM_DM,
                                    className: T.systemTag
                                })
                            ]
                        }),
                        compact: a,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: s()(T.__invalid_messageContent, { [T.compact]: a }),
                        children: m.Z.Messages.GUILD_RAID_REPORT_SYSTEM_MESSAGE.format({
                            username: C.nick,
                            usernameHook: p,
                            guildName: null !== (t = null == f ? void 0 : f.name) && void 0 !== t ? t : ''
                        })
                    })
                ]
            })
        })
    });
}
