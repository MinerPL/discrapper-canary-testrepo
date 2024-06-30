n.d(t, {
    d: function () {
        return v;
    }
});
var a = n(735250);
n(470079);
var r = n(120356), o = n.n(r), l = n(780384), i = n(481060), s = n(410030), c = n(876917), d = n(328456), u = n(616066), f = n(937341), p = n(63243), g = n(244488);
let v = e => {
    let {
            product: t,
            isPurchased: n,
            isHighlighted: r,
            user: v,
            forCollectedModal: C,
            profileEffectClassName: E
        } = e, {
            firstProfileEffect: h,
            firstAvatarDecoration: b
        } = (0, d.R)(t), m = (0, s.ZP)(), T = (0, l.ap)(m);
    return (0, a.jsxs)('div', {
        className: f.container,
        children: [
            null != h ? (0, a.jsx)('div', {
                className: o()(f.profileEffectShopPreview, E),
                children: (0, a.jsx)(c.Z, {
                    isHovering: r,
                    profileEffectId: h.id,
                    isPurchased: n,
                    forCollectedModal: C,
                    removeSetHeight: !0
                })
            }) : null,
            null != b ? (0, a.jsx)('div', {
                className: f.avatarDecorationPreview,
                children: (0, a.jsx)(u.R, {
                    item: b,
                    user: v,
                    avatarSize: i.AvatarSizes.SIZE_120,
                    isPurchased: n,
                    isHighlighted: r,
                    avatarPlaceholderSrc: T ? g : p
                })
            }) : null
        ]
    });
};
