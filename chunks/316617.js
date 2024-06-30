var r = n(735250), i = n(470079), a = n(442837), o = n(481060), s = n(39154), l = n(739566), u = n(25015), c = n(592125), d = n(998951), _ = n(113039), E = n(778947), f = n(512665), h = n(768760), p = n(689938), m = n(309480);
t.Z = e => {
    let {message: t} = e, n = (0, l.ZP)(t), I = (0, a.e7)([c.Z], () => c.Z.getChannel(t.channel_id)), T = i.useMemo(() => (0, s.Z)(t), [t]), {content: g} = (0, u.Z)(T, { hideSimpleEmbedContent: !1 }), S = i.useCallback(() => {
            let {
                    leadingIcon: e,
                    trailingIcon: n
                } = (0, f.f)(t, g, !1, '', {
                    leadingIconClass: m.attachmentIcon,
                    trailingIconClass: m.attachmentIcon,
                    iconSize: h.WW
                }), i = null == g || '' === g || Array.isArray(g) && 0 === g.length;
            return (0, r.jsxs)('div', {
                className: m.contentContainer,
                children: [
                    e,
                    i ? n : (0, r.jsx)(_.ZP, {
                        message: t,
                        content: g
                    })
                ]
            });
        }, [
            t,
            g
        ]);
    return null == I ? null : (0, r.jsxs)('div', {
        className: m.container,
        children: [
            (0, r.jsx)(o.Heading, {
                className: m.header,
                variant: 'heading-sm/semibold',
                children: p.Z.Messages.MOBILE_REPORTS_MESSAGE_PREVIEW_TITLE
            }),
            (0, r.jsx)(o.Scroller, {
                className: m.messagePreviewContainer,
                children: (0, r.jsx)(d.Z, {
                    childrenMessageContent: S(),
                    childrenHeader: (0, r.jsx)(E.ZP, {
                        message: t,
                        channel: I,
                        author: n,
                        guildId: I.guild_id
                    }),
                    disableInteraction: !0
                })
            })
        ]
    });
};
