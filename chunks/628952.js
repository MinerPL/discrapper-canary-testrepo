n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(979554),
    o = n(442837),
    s = n(481060),
    c = n(1585),
    d = n(125988),
    u = n(987209),
    m = n(921813),
    h = n(731896),
    f = n(484459),
    p = n(594174),
    g = n(937615),
    _ = n(583434),
    C = n(388032),
    E = n(696307),
    I = n(223223);
let x = (e) => {
        let { avatarDecoration: t } = e,
            n = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
            { avatarDecorationSrc: r } = (0, d.Z)({
                user: n,
                avatarDecorationOverride: t,
                size: (0, c.y9)(s.AvatarSizes.SIZE_40)
            });
        return (0, i.jsx)('img', {
            src: r,
            alt: t.label,
            className: E.avatarDecoration
        });
    },
    v = (e) => {
        var t;
        let { profileEffect: n } = e,
            r = (0, h.V)(n.id),
            { accessibilityLabel: l, thumbnailPreviewSrc: a, title: o } = null !== (t = null == r ? void 0 : r.config) && void 0 !== t ? t : {};
        return (0, i.jsxs)('div', {
            className: E.profileEffectContainer,
            children: [
                (0, i.jsx)('img', {
                    src: I,
                    alt: l,
                    className: E.profileEffectBackground
                }),
                (0, i.jsx)('img', {
                    className: E.profileEffect,
                    src: a,
                    alt: o
                })
            ]
        });
    };
t.Z = (e) => {
    let { skuId: t, skuPricePreview: n, isSelected: r, onSelect: c, shouldDisplayHeader: d = !1, className: h } = e,
        { product: I } = (0, _.T)(t),
        { giftRecipient: N, giftRecipientError: T } = (0, u.wD)(),
        S = (0, o.e7)([p.default], () => p.default.getCurrentUser());
    if (null == I || null == n) return null;
    let [b] = I.items,
        A = null != N && N.id !== (null == S ? void 0 : S.id);
    return (0, i.jsxs)('div', {
        className: h,
        children: [
            d &&
                (0, i.jsxs)('div', {
                    className: E.previewTitleContainer,
                    children: [
                        (0, i.jsx)(s.FormTitle, {
                            className: E.previewTitle,
                            children: C.intl.string(C.t.PpoJzs)
                        }),
                        A &&
                            (0, i.jsx)(
                                s.Popout,
                                {
                                    preload: () => (0, f.Z)(N.id, N.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, i.jsx)(m.Z, {
                                            ...e,
                                            user: N,
                                            pendingAvatar: N.getAvatarURL(null, (0, s.getAvatarSize)(s.AvatarSizes.SIZE_80)),
                                            pendingAvatarDecoration: b.type === a.Z.AVATAR_DECORATION ? b : null,
                                            pendingProfileEffectId: b.type === a.Z.PROFILE_EFFECT ? b.id : null,
                                            canUsePremiumCustomization: !0,
                                            disabledInputs: !0
                                        }),
                                    align: 'center',
                                    position: 'right',
                                    children: (e) =>
                                        (0, i.jsx)(s.Clickable, {
                                            ...e,
                                            className: E.previewLink,
                                            children: (0, i.jsx)(s.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'text-link',
                                                children: C.intl.string(C.t['2GnJQE'])
                                            })
                                        })
                                },
                                N.id
                            )
                    ]
                }),
            (0, i.jsxs)(s.Clickable, {
                tag: 'div',
                onClick: () => {
                    null != t && null != c && c(t);
                },
                className: l()(E.previewContainer, {
                    [E.previewContainerSelected]: r && null == T,
                    [E.previewContainerError]: null != T
                }),
                children: [
                    (0, i.jsxs)('div', {
                        className: E.giftInfoContainer,
                        children: [
                            b.type === a.Z.AVATAR_DECORATION && (0, i.jsx)(x, { avatarDecoration: b }),
                            b.type === a.Z.PROFILE_EFFECT && (0, i.jsx)(v, { profileEffect: b }),
                            (0, i.jsxs)('div', {
                                className: E.previewTextContainer,
                                children: [
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-md/semibold',
                                        children: I.name
                                    }),
                                    (0, i.jsx)(s.Heading, {
                                        variant: 'heading-sm/medium',
                                        color: 'header-secondary',
                                        children: b.type === a.Z.AVATAR_DECORATION ? C.intl.string(C.t['7v0T9P']) : b.type === a.Z.PROFILE_EFFECT ? C.intl.string(C.t.wR5wOj) : null
                                    })
                                ]
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-md/semibold',
                                children: (0, g.T4)(n.amount, n.currency)
                            })
                        ]
                    }),
                    r &&
                        null != T &&
                        (0, i.jsx)('div', {
                            className: E.recipientError,
                            children: (0, i.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                color: 'status-danger-background',
                                children: T
                            })
                        })
                ]
            })
        ]
    });
};
