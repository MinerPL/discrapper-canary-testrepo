n.d(t, {
    h: function () {
        return p;
    },
    x: function () {
        return g;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    r = n(442837),
    l = n(481060),
    o = n(596454),
    c = n(131388),
    u = n(409813),
    d = n(430824),
    _ = n(73346),
    E = n(817460),
    I = n(584825),
    m = n(570533),
    T = n(629262),
    h = n(575460),
    N = n(293810),
    f = n(689938),
    C = n(28387);
let p = (e) => {
        let { onClose: t, listing: n, step: a, guildId: r } = e,
            o = (0, I.YB)(r),
            d = (0, c.Z)(N.Xy),
            E = (() => {
                var e;
                if (d) return null;
                let t = (null == o ? void 0 : null === (e = o.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null ? (0, _._W)(o.cover_image_asset.application_id, o.cover_image_asset, 440) : void 0;
                return null == t && a !== u.h8.CONFIRM
                    ? null
                    : null == t
                      ? (0, i.jsx)('div', { className: C.headerImageEmpty })
                      : (0, i.jsx)('img', {
                            src: t,
                            alt: '',
                            className: C.headerImage
                        });
            })();
        return (0, i.jsxs)('div', {
            className: s()(C.headerContainer, { [C.headerEmpty]: d || null == E }),
            children: [
                E,
                (() => {
                    if (a !== u.h8.CONFIRM) return null;
                    let e = null == n.image_asset ? void 0 : (0, _._W)(n.application_id, n.image_asset, 80);
                    return (0, i.jsx)('div', {
                        className: C.tierImageContainer,
                        children: (0, i.jsx)('img', {
                            src: e,
                            alt: '',
                            className: C.tierImage
                        })
                    });
                })(),
                (0, i.jsx)(l.Clickable, {
                    className: C.closeContainer,
                    onClick: () => t(!1),
                    'aria-label': f.Z.Messages.CLOSE,
                    children: (0, i.jsx)(l.XSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: C.closeIcon
                    })
                })
            ]
        });
    },
    g = (e) => {
        let { onClose: t, listing: n, guildId: a } = e,
            s = (0, r.e7)([d.Z], () => d.Z.getGuild(a), [a]),
            c = (0, m.Z)(a).filter((e) => e.roles.includes(n.role_id)),
            u = n.role_benefits.benefits.filter(E.rC).slice(0, null === c.length ? 4 : 3),
            _ = (0, T.Z)(u).slice(0, null === c.length ? 4 : 3);
        return (0, i.jsxs)('div', {
            className: C.confirmationContainer,
            children: [
                (0, i.jsx)(l.Heading, {
                    className: C.confirmationHeader,
                    variant: 'heading-xl/semibold',
                    color: 'header-secondary',
                    children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE.format({ serverName: null == s ? void 0 : s.toString() })
                }),
                (0, i.jsx)(l.Text, {
                    className: C.confirmationSubtitle,
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({ tier: n.name })
                }),
                _.length > 0 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: C.confirmationSectionLabel,
                                children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CHANNEL_PREVIEW
                            }),
                            (0, i.jsx)('div', {
                                className: C.confirmationBenefits,
                                children: _.map((e) =>
                                    (0, i.jsx)(
                                        h.Z,
                                        {
                                            benefit: e,
                                            guildId: a,
                                            onClick: () => t(!0)
                                        },
                                        (0, E.ab)(e)
                                    )
                                )
                            })
                        ]
                    }),
                (() => {
                    var e;
                    if (0 === c.length) return null;
                    let t = c[0];
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                className: C.confirmationSectionLabel,
                                children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_PREVIEW_TITLE
                            }),
                            (0, i.jsxs)('div', {
                                className: C.emojiBenefitsRow,
                                children: [
                                    (0, i.jsx)(o.Z, {
                                        emojiId: t.id,
                                        emojiName: t.name,
                                        animated: null !== (e = t.animated) && void 0 !== e && e,
                                        className: C.emojiImage
                                    }),
                                    (0, i.jsxs)('div', {
                                        children: [
                                            (0, i.jsx)(l.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                className: C.emojiName,
                                                children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_TEXT
                                            }),
                                            (0, i.jsx)(l.Text, {
                                                color: 'interactive-normal',
                                                variant: 'text-sm/normal',
                                                children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_DESCRIPTION.format({ count: c.length })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    });
                })(),
                (0, i.jsx)(l.Button, {
                    className: C.confirmationButton,
                    onClick: () => t(!0),
                    children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                })
            ]
        });
    };
