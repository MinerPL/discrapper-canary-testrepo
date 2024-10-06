r.d(t, {
    R: function () {
        return p;
    }
});
var n = r(735250);
r(470079);
var a = r(120356),
    s = r.n(a),
    o = r(979554),
    i = r(481060),
    l = r(1585),
    c = r(125988),
    d = r(998502),
    u = r(689938),
    f = r(446563);
let g = d.ZP.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar,
    p = (e) => {
        let { item: t, user: r, isHighlighted: a = !1, isPurchased: d = !1, avatarSize: p = i.AvatarSizes.SIZE_152, avatarPlaceholderSrc: v } = e,
            C = (0, l.y9)(p),
            {
                avatarDecorationSrc: m,
                eventHandlers: E,
                avatarPlaceholderSrc: h
            } = (0, c.Z)({
                user: r,
                avatarDecorationOverride: (null == t ? void 0 : t.type) === o.Z.AVATAR_DECORATION ? t : void 0,
                size: C,
                onlyAnimateOnHover: !a
            });
        return (0, n.jsx)(g, {
            ...E,
            avatarDecoration: m,
            src: a ? (null == r ? void 0 : r.getAvatarURL(void 0, 152, !0)) : null != v ? v : h,
            imageClassName: a ? f.fadeInAvatarImg : void 0,
            className: s()(f.avatar, { [f.avatarPurchased]: d }),
            size: p,
            'aria-label': u.Z.Messages.USER_SETTINGS_AVATAR
        });
    };
