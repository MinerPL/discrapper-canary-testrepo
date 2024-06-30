n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(735250), a = n(470079), s = n(287734), l = n(475468), r = n(358555), o = n(944486), c = n(914010), d = n(197409), u = n(626135), _ = n(981631), E = n(689938), m = n(637091);
function I(e) {
    var t;
    let {
            guild: n,
            channel: I,
            messageData: T
        } = e, h = c.Z.getGuildId(), N = o.Z.getChannelId(h), f = a.useCallback(() => {
            var e;
            u.default.track(_.rMx.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: null === (e = T.author) || void 0 === e ? void 0 : e.id,
                link_guild_id: n.id,
                link_channel_id: I.id,
                link_channel_type: I.type,
                guild_id: h,
                channel_id: N
            }), (0, l.K)(n.id, I.id), s.default.selectVoiceChannel(I.id);
        }, [
            null === (t = T.author) || void 0 === t ? void 0 : t.id,
            n.id,
            I.id,
            I.type,
            h,
            N
        ]), p = (0, i.jsx)(d.Z.Channel, { channel: I });
    return (0, i.jsx)(d.Z, {
        children: (0, i.jsxs)(d.Z.Body, {
            children: [
                (0, i.jsxs)('div', {
                    className: m.headerLine,
                    children: [
                        (0, i.jsx)(d.Z.Icon, { guild: n }),
                        (0, i.jsx)(d.Z.Info, {
                            title: p,
                            onClick: f,
                            children: (0, i.jsxs)('span', {
                                className: m.infoTitle,
                                children: [
                                    E.Z.Messages.INVITE_BUTTON_BODY_IN_GUILD.format({ guildName: n.name }),
                                    (0, i.jsx)('span', {
                                        className: m.infoBadge,
                                        children: (0, i.jsx)(r.Z, {
                                            guild: n,
                                            isBannerVisible: !1
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.Z.Button, {
                    onClick: f,
                    color: d.Z.Button.Colors.GREEN,
                    children: I.isGuildStageVoice() ? E.Z.Messages.STAGE_CHANNEL_JOIN : E.Z.Messages.JOIN_VOICE
                })
            ]
        })
    });
}
