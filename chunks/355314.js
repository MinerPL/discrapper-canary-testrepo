n.d(t, {
    Z: function () {
        return v;
    }
});
var r = n(735250), i = n(470079), a = n(442837), o = n(481060), s = n(310752), l = n(174609), u = n(703656), c = n(210887), d = n(594174), _ = n(626135), E = n(424218), f = n(74538), h = n(104494), p = n(639119), m = n(631771), I = n(790527), T = n(474936), g = n(981631), S = n(731994), A = n(689938), N = n(165160);
function v(e) {
    let {
            onClose: t,
            ...n
        } = e, v = (0, a.e7)([d.default], () => d.default.getCurrentUser()), O = (0, a.e7)([c.Z], () => c.Z.theme), R = (0, p.N)(), C = (0, h.Ng)(), y = null != R || null != C, {enabled: D} = m.MP.useExperiment({ location: 'File Upload Roadblock' }, {
            autoTrackExposure: !y,
            disable: y
        }), L = O === g.BRd.LIGHT ? 'light' : 'dark', b = D ? (0, r.jsx)('img', {
            className: N.updatedArt,
            alt: 'File Upload Nitro Perk',
            src: 'https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_'.concat(L, '.png')
        }) : (0, r.jsx)(s.Z, { icons: S.J6 }), M = i.useMemo(() => {
            let e = f.ZP.getUserMaxFileSize(v), t = (0, E.BU)(e / 1024, { useKibibytes: !0 }), n = A.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({ maxSize: t });
            switch (null == v ? void 0 : v.premiumType) {
            case T.p9.TIER_0:
                n = A.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({ maxSize: t });
                break;
            case T.p9.TIER_1:
                n = A.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({ maxSize: t });
            }
            return n;
        }, [v]), P = D ? A.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_TIER_2 : A.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE, U = D ? (0, r.jsx)('div', {
            className: N.body,
            children: (0, r.jsx)(o.Text, {
                variant: 'text-sm/medium',
                children: P
            })
        }) : (0, r.jsxs)('div', {
            className: N.body,
            children: [
                (0, r.jsx)('span', { children: M }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-md/medium',
                    children: P
                })
            ]
        });
    return (0, r.jsx)(I.Z, {
        artElement: b,
        artContainerClassName: D ? N.updatedArtContainer : N.artContainer,
        enableArtBoxShadow: !1,
        type: T.cd.UPLOAD_ERROR_UPSELL,
        title: A.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
        body: U,
        context: A.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({ maxSize: A.Z.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD }),
        glowUp: P,
        analyticsLocation: { section: g.jXE.FILE_UPLOAD_POPOUT },
        onClose: t,
        subscriptionTier: T.Si.TIER_2,
        secondaryCTA: D ? A.Z.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA : void 0,
        onSecondaryClick: D ? function () {
            (0, l.Z)(), t(), _.default.track(g.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: g.jXE.FILE_UPLOAD_UPSELL_MODAL,
                location_object: g.qAy.NAVIGATION_LINK
            }), (0, u.uL)(g.Z5c.APPLICATION_STORE);
        } : void 0,
        showEnhancedUpsell: D,
        ...n
    });
}
