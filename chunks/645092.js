n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), l = n(481060), r = n(739566), o = n(467679), c = n(778947), d = n(702346), u = n(787374), _ = n(674563), E = n(689938), m = n(923255);
function I(e) {
    let {
            message: t,
            compact: n,
            usernameHook: a
        } = e, I = (0, r.ZP)(t), T = a(I), {
            avatarSrc: h,
            eventHandlers: {
                onMouseEnter: N,
                onMouseLeave: f
            }
        } = (0, u.m)(!0);
    return (0, i.jsx)('div', {
        onMouseEnter: N,
        onMouseLeave: f,
        children: (0, i.jsx)(d.Z, {
            className: s()(m.mainContainer, { [m.compact]: n }),
            iconNode: n ? null : (0, i.jsx)(u.S, { src: h }),
            iconContainerClassName: m.iconContainer,
            compact: n,
            children: (0, i.jsxs)('div', {
                className: s()(m.content, { [m.compact]: n }),
                children: [
                    (0, i.jsx)(c.nD, {
                        message: t,
                        messageClassname: m.spanCorrection,
                        className: s()(m.usernameContainer, m.spanCorrection, { [m.compact]: n }),
                        username: (0, i.jsxs)('div', {
                            className: m.spanCorrection,
                            children: [
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: m.username,
                                    children: E.Z.Messages.GUILD_AUTOMOD_USERNAME
                                }),
                                (0, i.jsx)(o.Z, {
                                    type: _.Hb.SYSTEM_DM,
                                    className: m.systemTag
                                })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: s()(m.__invalid_messageContent, { [m.compact]: n }),
                        children: E.Z.Messages.GUILD_REPORT_FALSE_ALARM_SYSTEM_MESSAGE_SHORT.format({
                            username: I.nick,
                            usernameHook: T
                        })
                    })
                ]
            })
        })
    });
}
