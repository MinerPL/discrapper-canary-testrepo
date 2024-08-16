var s = n(735250);
n(470079);
var a = n(442837),
    i = n(481060),
    r = n(100527),
    l = n(906732),
    o = n(623624),
    c = n(372444),
    d = n(852679),
    u = n(926491),
    _ = n(145499),
    I = n(424218),
    E = n(267642),
    T = n(63063),
    m = n(999382),
    N = n(981631),
    S = n(611480),
    h = n(689938),
    g = n(815750);
let C = {
        page: N.ZY5.GUILD_SETTINGS,
        section: N.jXE.GUILD_SETTINGS_STICKERS,
        object: N.qAy.BOOSTING_BANNER
    },
    x = (e) => {
        let { guild: t } = e,
            { analyticsLocations: n } = (0, l.ZP)(),
            a = (0, E.vn)(t.id)[N.Eu4.TIER_1] - t.premiumSubscriberCount;
        return (0, s.jsxs)('div', {
            className: g.upsellContainer,
            children: [
                (0, s.jsx)(i.Heading, {
                    className: g.upsellHeader,
                    variant: 'heading-xl/semibold',
                    children: h.Z.Messages.GUILD_SETTINGS_STICKERS_UPSELL_TITLE
                }),
                (0, s.jsx)(i.Text, {
                    className: g.upsellDescription,
                    variant: 'text-md/normal',
                    children: h.Z.Messages.GUILD_SETTINGS_STICKERS_UPSELL_DESCRIPTION_FREE_SLOTS
                }),
                (0, s.jsxs)('div', {
                    className: g.upsellButtons,
                    children: [
                        (0, s.jsx)(i.Button, {
                            className: g.upsellButtonPrimary,
                            innerClassName: g.upsellButton,
                            color: i.Button.Colors.WHITE,
                            onClick: () =>
                                (0, d.Z)({
                                    analyticsLocations: n,
                                    analyticsLocation: C,
                                    guildId: t.id,
                                    totalNumberOfSlotsToAssign: a
                                }),
                            children: h.Z.Messages.GUILD_SETTINGS_STICKERS_BOOST_SERVER
                        }),
                        (0, s.jsx)(i.Button, {
                            innerClassName: g.upsellButton,
                            color: i.Button.Colors.WHITE,
                            onClick: () =>
                                (0, o.f)({
                                    guildId: t.id,
                                    location: { section: N.jXE.GUILD_SETTINGS_STICKERS }
                                }),
                            children: h.Z.Messages.LEARN_MORE
                        })
                    ]
                })
            ]
        });
    },
    p = () =>
        (0, s.jsxs)(i.FormSection, {
            title: h.Z.Messages.GUILD_SETTINGS_STICKERS_UPLOAD_AUTO_RESIZE_HEADING,
            children: [
                (0, s.jsx)(i.FormText, {
                    type: i.FormTextTypes.DESCRIPTION,
                    children: h.Z.Messages.GUILD_SETTINGS_STICKERS_UPLOAD_AUTO_RESIZE_INSTRUCTIONS.format({ fileSize: (0, I.IC)(S.Ht, { useKibibytes: !0 }) })
                }),
                (0, s.jsx)(i.FormText, {
                    type: i.FormTextTypes.DESCRIPTION,
                    children: h.Z.Messages.GUILD_SETTINGS_STICKERS_UPLOAD_AUTO_RESIZE_HELP.format({ articleUrl: T.Z.getArticleURL(N.BhN.STICKERS_UPLOAD) })
                })
            ]
        }),
    R = (e) => {
        let t,
            n,
            a,
            { guild: i, guildStickers: r } = e,
            l = i.premiumTier,
            o = (0, E.Qi)(r, l),
            d = (0, E.FZ)(l, i.id),
            u = (0, E.A3)(l),
            _ = r.length;
        return null == d || l === N.Eu4.TIER_3 || o > 0
            ? (0, s.jsx)(s.Fragment, {})
            : (_ > u
                  ? ((t = h.Z.Messages.GUILD_SETTINGS_STICKERS_UPSELL_BANNER_TOO_MANY_STICKERS_HEADER.format({ level: d })), (n = h.Z.Messages.GUILD_SETTINGS_STICKERS_UPSELL_BANNER_TOO_MANY_STICKERS_TEXT.format({ level: d })), (a = N.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = h.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_BANNER_HEADER),
                    (n = h.Z.Messages.GUILD_SETTINGS_STICKERS_UPSELL_BANNER_TEXT.format({
                        level: d,
                        numAdditional: (0, E.ig)(d)
                    })),
                    (a = N.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, s.jsx)(c.Z, {
                  header: t,
                  text: n,
                  guild: i,
                  analyticsLocation: {
                      page: N.ZY5.GUILD_SETTINGS,
                      section: N.jXE.GUILD_SETTINGS_STICKERS,
                      object: a,
                      objectType: (0, E.ge)(d)
                  }
              }));
    };
t.Z = () => {
    let e = (0, a.e7)([m.Z], () => m.Z.getGuild()),
        t = (0, a.e7)(
            [u.Z],
            () => {
                var t;
                return null != e && null !== (t = u.Z.getStickersByGuildId(e.id)) && void 0 !== t ? t : [];
            },
            [e]
        ),
        { analyticsLocations: n } = (0, l.ZP)(r.Z.STICKERS);
    if (null == e) return null;
    let o = e.premiumTier !== N.Eu4.NONE || t.length > 0;
    return (0, s.jsx)(l.Gt, {
        value: n,
        children: (0, s.jsxs)(i.FormSection, {
            title: h.Z.Messages.GUILD_SETTINGS_STICKERS,
            tag: i.FormTitleTags.H1,
            children: [
                o
                    ? (0, s.jsxs)('div', {
                          children: [
                              (0, s.jsx)(R, {
                                  guild: e,
                                  guildStickers: t
                              }),
                              (0, s.jsx)(p, {})
                          ]
                      })
                    : (0, s.jsx)(x, { guild: e }),
                (0, s.jsx)(i.FormDivider, { className: g.divider }),
                (0, s.jsx)(_.Z, { guild: e })
            ]
        })
    });
};
