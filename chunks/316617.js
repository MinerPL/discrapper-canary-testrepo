var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(39154),
    l = n(739566),
    u = n(492593),
    c = n(930282),
    d = n(464891),
    _ = n(267128),
    E = n(25015),
    f = n(592125),
    h = n(217702),
    p = n(689938),
    m = n(644830);
t.Z = (e) => {
    let { message: t } = e,
        n = (0, l.ZP)(t),
        I = (0, a.e7)([f.Z], () => f.Z.getChannel(t.channel_id)),
        T = i.useMemo(() => (0, o.Z)(t), [t]),
        { content: g } = (0, E.Z)(T, { hideSimpleEmbedContent: !1 }),
        S = i.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, _.f)(t, g, !1, '', {
                leadingIconClass: m.attachmentIcon,
                trailingIconClass: m.attachmentIcon,
                iconSize: h.WW
            });
            return (0, r.jsxs)('div', {
                className: m.contentContainer,
                children: [
                    e,
                    (0, r.jsx)(c.ZP, {
                        message: t,
                        content: g
                    }),
                    n
                ]
            });
        }, [t, g]);
    return null == I
        ? null
        : (0, r.jsxs)('div', {
              className: m.container,
              children: [
                  (0, r.jsx)(s.Heading, {
                      className: m.header,
                      variant: 'heading-sm/semibold',
                      children: p.Z.Messages.MOBILE_REPORTS_MESSAGE_PREVIEW_TITLE
                  }),
                  (0, r.jsx)(s.Scroller, {
                      className: m.messagePreviewContainer,
                      children: (0, r.jsx)(u.Z, {
                          childrenMessageContent: S(),
                          childrenHeader: (0, r.jsx)(d.ZP, {
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
