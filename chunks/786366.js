s.d(n, {
    Z: function () {
        return I;
    }
}),
    s(789020);
var t = s(735250);
s(470079);
var i = s(597312),
    o = s(442837),
    l = s(481060),
    r = s(860719),
    a = s(621853),
    c = s(689938),
    d = s(687298);
function u(e) {
    let { icon: n, title: s, description: i } = e;
    return (0, t.jsxs)('div', {
        className: d.row,
        children: [
            (0, t.jsx)('div', {
                className: d.rowIcon,
                children: (0, t.jsx)(n, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor'
                })
            }),
            (0, t.jsxs)('div', {
                className: d.rowText,
                children: [
                    (0, t.jsx)(l.Heading, {
                        variant: 'text-xs/semibold',
                        children: s
                    }),
                    (0, t.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        children: i
                    })
                ]
            })
        ]
    });
}
function I(e) {
    let { user: n } = e,
        s = (0, o.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application;
        }),
        { hasMessageContent: I, hasGuildPresences: _, hasGuildMembers: E } = (0, r.w)({ flags: null == s ? void 0 : s.flags });
    return (0, t.jsxs)(i.zJ, {
        fade: !0,
        className: d.scroller,
        children: [
            I &&
                (0, t.jsx)(u, {
                    icon: l.ChatIcon,
                    title: c.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
                    description: c.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
                }),
            _ &&
                (0, t.jsx)(u, {
                    icon: l.GameControllerIcon,
                    title: c.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
                    description: c.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
                }),
            E &&
                (0, t.jsx)(u, {
                    icon: l.GroupIcon,
                    title: c.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
                    description: c.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
                }),
            (0, t.jsx)(l.Text, {
                variant: 'text-xs/normal',
                children: c.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({ helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975' })
            })
        ]
    });
}
