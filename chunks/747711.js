n(47120);
var i = n(735250);
n(470079);
var a = n(442837), l = n(680295), s = n(158776), r = n(735336), o = n(184325), c = n(131640), u = n(228168), d = n(651448);
t.Z = e => {
    let {
            user: t,
            displayProfile: n,
            channel: h,
            animateAssets: p,
            forceShowPremiumBadge: m
        } = e, _ = t.isNonUserBot(), [f, E] = (0, a.Wu)([s.Z], () => [
            _ ? null : s.Z.getStatus(t.id),
            s.Z.isMobileOnline(t.id)
        ]), C = null == n ? void 0 : n.profileEffectId;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(r.Z, {
                user: t,
                displayProfile: n,
                profileType: u.y0.PANEL,
                showPremiumBadgeUpsell: !0,
                isHovering: m,
                animateOnHover: !p
            }),
            (0, i.jsx)(c.tZ, {
                user: t,
                displayProfile: n,
                status: f,
                isMobile: E,
                channelId: h.id,
                disableUserProfileLink: !0,
                hasBanner: (null == n ? void 0 : n.banner) != null,
                profileType: u.y0.PANEL,
                animateOnHover: !p
            }),
            (0, i.jsx)('div', {
                className: d.badgelistGroup,
                children: (0, i.jsx)(o.Z, {
                    className: d.badgeList,
                    user: t,
                    size: o.V.SIZE_22
                })
            }),
            null != C && (0, i.jsx)(l.Z, {
                profileEffectId: C,
                maxLoops: 0,
                resetOnHover: !0,
                isHovering: m,
                urlQueryString: 'dm-view',
                noBorderRadius: !0
            })
        ]
    });
};
