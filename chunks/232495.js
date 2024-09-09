n.d(t, {
    k: function () {
        return h;
    }
}),
    n(757143);
var i = n(735250);
n(470079);
var a = n(442837),
    s = n(481060),
    l = n(430824),
    r = n(914010),
    o = n(689938),
    c = n(569234);
let u = () =>
        (0, i.jsx)(i.Fragment, {
            children: o.Z.Messages.TIP_INSTANT_INVITE_BODY3.format({
                shareIcon: o.Z.Messages.INSTANT_INVITE,
                shareIconHook: () => (0, i.jsx)(s.GroupPlusIcon, { className: c.icon }, 'icon')
            })
        }),
    d = () => {
        let e = (0, a.e7)([l.Z, r.Z], () => l.Z.getGuild(r.Z.getGuildId()), []),
            t = null == e ? void 0 : e.name;
        return (0, i.jsx)(i.Fragment, { children: o.Z.Messages.TIP_WRITING_MESSAGES_BODY3.format({ serverName: t }) });
    },
    h = (e) => {
        var t, n;
        let a = {
                VOICE_CONVERSATIONS: {
                    title: (0, i.jsx)('div', {
                        className: c.voiceChannelsTitle,
                        children: o.Z.Messages.NUF_VOICE_CHANNELS_TITLE
                    }),
                    body: o.Z.Messages.NUF_VOICE_CHANNELS_DESCRIPTION
                },
                WRITING_MESSAGES: {
                    title: (0, i.jsx)('div', {
                        className: c.writingMessagesTitle,
                        children: o.Z.Messages.TIP_WRITING_MESSAGES_TITLE3
                    }),
                    body: (0, i.jsx)(d, {})
                },
                ORGANIZE_BY_TOPIC: {
                    title: (0, i.jsx)('div', {
                        className: c.channelsTitle,
                        children: o.Z.Messages.NUF_CHANNELS_TITLE
                    }),
                    body: o.Z.Messages.NUF_CHANNELS_DESCRIPTION
                },
                WHOS_ONLINE: {
                    title: o.Z.Messages.TIP_WHOS_ONLINE_TITLE3,
                    body: o.Z.Messages.TIP_WHOS_ONLINE_BODY3.format()
                },
                INSTANT_INVITE: {
                    title: o.Z.Messages.TIP_INSTANT_INVITE_TITLE3,
                    body: (0, i.jsx)(u, {})
                },
                SERVER_SETTINGS: {
                    title: o.Z.Messages.TIP_SERVER_SETTINGS_TITLE3,
                    body: o.Z.Messages.TIP_SERVER_SETTINGS_BODY3.format()
                },
                DIRECT_MESSAGES: {
                    title: o.Z.Messages.TIP_DIRECT_MESSAGES_TITLE3,
                    body: o.Z.Messages.TIP_DIRECT_MESSAGES_BODY3.format()
                },
                CREATE_MORE_SERVERS: {
                    title: o.Z.Messages.TIP_CREATE_MORE_SERVERS_TITLE3,
                    body: o.Z.Messages.TIP_CREATE_MORE_SERVERS_BODY3.format()
                },
                CREATE_FIRST_SERVER: {
                    title: o.Z.Messages.TIP_CREATE_FIRST_SERVER_TITLE3,
                    body: o.Z.Messages.TIP_CREATE_FIRST_SERVER_BODY3.format()
                },
                FRIENDS_LIST: {
                    title: o.Z.Messages.TIP_FRIENDS_LIST_TITLE3,
                    body: o.Z.Messages.TIP_FRIENDS_LIST_BODY3.format()
                }
            },
            s = null !== (t = a[e.replace(/-/g, '_').toUpperCase()]) && void 0 !== t ? t : {};
        return {
            title: s.title,
            body: s.body,
            isLongText: null !== (n = s.isLongText) && void 0 !== n && n
        };
    };
