n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(735250);
n(470079);
var s = n(399606), i = n(481060), o = n(607070), a = n(357352), l = n(623488), c = n(695346), d = n(937615), C = n(506071), u = n(724598), _ = n(629481), x = n(981631), f = n(689938), I = n(421305);
function p() {
    let e = c.QK.useSetting(), t = (0, C.n)(), n = (0, s.e7)([o.Z], () => o.Z.useReducedMotion), i = t && e && !n ? (0, a.b)('server_products/storefront/question-mark.gif') : (0, a.b)('server_products/storefront/question-mark.png');
    return (0, r.jsxs)('div', {
        className: I.previewListingCard,
        children: [
            (0, r.jsx)(l.Z, {
                role: void 0,
                ctaComponent: null,
                imageUrl: (0, a.b)('server_products/storefront/preview-thumbnail.png'),
                name: f.Z.Messages.GUILD_STORE_PREVIEW_CARD_TITLE,
                description: f.Z.Messages.GUILD_STORE_PREVIEW_CARD_DESCRIPTION,
                formattedPrice: (0, d.T4)(0, x.pKx.USD, {
                    localeMatcher: 'best fit',
                    style: 'currency',
                    maximumSignificantDigits: 1
                }),
                shouldShowFullDescriptionButton: !1,
                productType: f.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE,
                onTapCard: () => null,
                hideRoleTag: !0,
                lineClamp: 3,
                thumbnailHeight: 197,
                cardWidth: 332,
                descriptionTextVariant: 'text-xs/normal'
            }),
            (0, r.jsx)('img', {
                className: I.questionMark,
                alt: '',
                src: i
            })
        ]
    });
}
function h() {
    return (0, r.jsxs)('div', {
        className: I.learnMoreTipContainer,
        children: [
            (0, r.jsx)(i.CircleInformationIcon, {
                size: 'md',
                color: 'currentColor',
                className: I.infoCircle
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: f.Z.Messages.GUILD_STORE_PREVIEW_LEARN_MORE.format({ learnMoreLink: _.P4 })
            })
        ]
    });
}
function m(e) {
    let {guildId: t} = e;
    return (0, r.jsxs)('div', {
        className: I.previewContentContainer,
        children: [
            (0, r.jsxs)('div', {
                className: I.previewContent,
                children: [
                    (0, r.jsx)(p, {}),
                    (0, r.jsx)(u.Z, {
                        guildId: t,
                        showCTA: !0
                    })
                ]
            }),
            (0, r.jsx)(h, {})
        ]
    });
}
