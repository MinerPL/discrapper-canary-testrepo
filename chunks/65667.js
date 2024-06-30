n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), l = n(481060), r = n(739566), o = n(467679), c = n(778947), d = n(702346), u = n(787374), _ = n(981631), E = n(674563), m = n(689938), I = n(923255);
function T(e) {
    let {
            message: t,
            compact: n,
            usernameHook: a
        } = e, T = (0, r.ZP)(t), h = a(T), {
            avatarSrc: N,
            eventHandlers: {
                onMouseEnter: f,
                onMouseLeave: p
            }
        } = (0, u.m)(!0), C = '' !== t.content ? new Date(t.content).toLocaleString(m.Z.getLocale(), {
            hour: 'numeric',
            minute: '2-digit',
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        }) : '';
    return (0, i.jsx)('div', {
        onMouseEnter: f,
        onMouseLeave: p,
        children: (0, i.jsx)(d.Z, {
            className: s()(I.mainContainer, { [I.compact]: n }),
            iconNode: n ? null : (0, i.jsx)(u.S, { src: N }),
            iconContainerClassName: I.iconContainer,
            compact: n,
            children: (0, i.jsxs)('div', {
                className: s()(I.content, { [I.compact]: n }),
                children: [
                    (0, i.jsx)(c.nD, {
                        message: t,
                        messageClassname: I.spanCorrection,
                        className: s()(I.usernameContainer, I.spanCorrection, { [I.compact]: n }),
                        username: (0, i.jsxs)('div', {
                            className: I.spanCorrection,
                            children: [
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: I.username,
                                    children: m.Z.Messages.GUILD_AUTOMOD_USERNAME
                                }),
                                (0, i.jsx)(o.Z, {
                                    type: E.Hb.SYSTEM_DM,
                                    className: I.systemTag
                                })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: s()(I.__invalid_messageContent, { [I.compact]: n }),
                        children: t.type === _.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED ? m.Z.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_SYSTEM_MESSAGE_SHORT.format({
                            username: T.nick,
                            usernameHook: h,
                            time: C
                        }) : m.Z.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_SYSTEM_MESSAGE.format({
                            username: T.nick,
                            usernameHook: h
                        })
                    })
                ]
            })
        })
    });
}
