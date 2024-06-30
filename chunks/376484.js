n.d(t, {
    Z: function () {
        return m;
    }
}), n(47120);
var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), l = n(481060), r = n(454585), o = n(529815), c = n(702346), d = n(553385), u = n(981631), _ = n(689938), E = n(362136);
function m(e) {
    let {
            message: t,
            channel: a,
            compact: r
        } = e, o = null != t.embeds && t.embeds.length > 0;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(c.Z, {
                className: s()(E.mainContainer, { [E.compact]: r }),
                icon: n(570111),
                compact: r,
                children: (0, i.jsx)('div', {
                    className: s()(E.__invalid_content, { [E.compact]: r }),
                    children: (0, i.jsx)('div', {
                        className: s()(E.__invalid_messageContent, { [E.compact]: r }),
                        children: t.content
                    })
                })
            }),
            (0, i.jsx)('div', {
                className: s()(E.__invalid_embedContent, { [E.compact]: r }),
                children: (0, i.jsx)(I, { message: t })
            }),
            (0, i.jsx)('div', {
                className: E.actions,
                children: (0, i.jsx)(l.Button, {
                    color: l.Button.Colors.PRIMARY,
                    onClick: () => {
                        o ? (0, d.z$)(t) : (0, d.XP)(a.guild_id, a.id, t.id);
                    },
                    children: _.Z.Messages.SYSTEM_MESSAGE_GET_GAMING_STATS
                })
            })
        ]
    });
}
function I(e) {
    var t;
    let {message: n} = e, [a] = null !== (t = n.embeds) && void 0 !== t ? t : [];
    return null == a ? null : (0, i.jsx)(o.ZP, {
        className: E.embed,
        embed: a,
        renderTitle: (e, t) => r.Z.parseEmbedTitle(t, !0, { channelId: n.channel_id }),
        renderDescription: (e, t, i) => r.Z.parse(t, !0, { channelId: n.channel_id }),
        autoPlayGif: !1,
        renderImageComponent: u.VqG,
        renderVideoComponent: u.VqG,
        renderLinkComponent: u.VqG,
        renderForwardComponent: u.VqG
    });
}
