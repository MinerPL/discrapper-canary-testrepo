n(627341);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(278074), l = n(721987), u = n(138655), c = n(793397), d = n(652853), _ = n(228168), E = n(277354);
let f = (e, t) => {
        let n = (0, s.EQ)(e).with(_.y0.MODAL, () => E.userProfileModalOuter).with(_.y0.PANEL, () => E.userPanelOuter).with(_.y0.CARD, () => E.userCardOuter).with(_.y0.BITE_SIZE, () => E.biteSizeOuter).with(_.y0.FULL_SIZE, () => E.fullSizeOuter).otherwise(() => E.userPopoutOuter), r = t ? E.userProfileOuterThemed : E.userProfileOuterUnthemed;
        return o()(n, r);
    }, h = (e, t, n) => {
        let r = (0, s.EQ)(e).with(_.y0.MODAL, _.y0.FULL_SIZE, () => E.userProfileModalInner).with(_.y0.PANEL, () => E.userPanelInner).with(_.y0.CARD, () => E.userCardInner).otherwise(() => E.userPopoutInner), i = (0, s.EQ)(e).with(_.y0.PANEL, () => E.userPanelInnerThemed).with(_.y0.BITE_SIZE, () => E.biteSizeInnerThemed).with(_.y0.FULL_SIZE, () => E.fullSizeInnerThemed).otherwise(() => (0, c.zW)({
                premiumUserWithBanner: E.userProfileInnerThemedWithBanner,
                premiumUserWithoutBanner: E.userProfileInnerThemedPremiumWithoutBanner,
                default: E.userProfileInnerThemedNonPremium
            })({
                isPremium: t,
                hasBanner: n
            }));
        return o()(r, i);
    }, p = i.forwardRef(function (e, t) {
        let {
                user: n,
                displayProfile: i,
                profileType: a,
                className: s,
                pendingThemeColors: c,
                pendingProfileEffectId: _,
                themeOverride: p,
                children: m,
                forceShowPremium: I = !1,
                showOutOfBoundaryComponents: T = !1
            } = e, {
                theme: g,
                primaryColor: S,
                secondaryColor: A
            } = (0, l.Z)({
                user: n,
                displayProfile: i,
                pendingThemeColors: c,
                isPreview: I
            }), {
                profileThemeStyle: N,
                profileThemeClassName: v
            } = (0, u.Z)({
                theme: null != p ? p : g,
                primaryColor: S,
                secondaryColor: A
            }), O = (null == i ? void 0 : i.canEditThemes) || I, R = null !== _ && ((null == i ? void 0 : i.banner) != null || void 0 !== _);
        return (0, r.jsx)('div', {
            className: o()(f(a, O), T ? E.showOutOfBoundaryComponents : void 0, v, s),
            style: N,
            ref: t,
            children: (0, r.jsx)('div', {
                className: h(a, O, R),
                children: (0, r.jsx)(d.X, {
                    profileType: a,
                    theme: null != p ? p : g,
                    primaryColor: S,
                    secondaryColor: A,
                    children: m
                })
            })
        });
    }), m = e => (0, s.EQ)(e).with(_.y0.POPOUT, _.y0.SETTINGS, () => E.userPopoutOverlayBackground).with(_.y0.MODAL, () => E.userProfileModalOverlayBackground).with(_.y0.BITE_SIZE, () => E.biteSizeOverlayBackground).with(_.y0.FULL_SIZE, () => E.fullSizeOverlayBackground).otherwise(() => E.overlayBackground);
t.Z = Object.assign(p, {
    Overlay: function (e) {
        let {
                children: t,
                className: n
            } = e, {profileType: i} = (0, d.z)();
        return (0, r.jsx)('div', {
            className: o()(m(i), n),
            children: t
        });
    }
});
