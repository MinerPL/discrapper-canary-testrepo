n.d(t, {
    Z: function () {
        return C;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(310752),
    l = n(174609),
    u = n(703656),
    c = n(210887),
    d = n(594174),
    _ = n(626135),
    E = n(424218),
    f = n(63063),
    h = n(380684),
    p = n(74538),
    I = n(684259),
    m = n(104494),
    T = n(639119),
    S = n(631771),
    g = n(790527),
    A = n(474936),
    N = n(981631),
    O = n(731994),
    R = n(689938),
    v = n(128893);
function C(e) {
    let { onClose: t, ...n } = e,
        C = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        L = (0, a.e7)([c.Z], () => c.Z.theme),
        y = null == C ? void 0 : C.premiumType,
        D = (0, T.N)(),
        b = (0, m.Ng)(),
        M = null != D || null != b,
        { enabled: P } = S.MP.useExperiment(
            { location: 'File Upload Roadblock' },
            {
                autoTrackExposure: !M,
                disable: M
            }
        ),
        U = (0, h.XS)(),
        w = P || U,
        x = L === N.BRd.LIGHT ? 'light' : 'dark',
        G = w
            ? (0, r.jsx)('img', {
                  className: v.updatedArt,
                  alt: 'File Upload Nitro Perk',
                  src: 'https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_'.concat(x, '_v2.png')
              })
            : (0, r.jsx)(o.Z, { icons: O.J6 }),
        k = i.useMemo(() => {
            let e = p.ZP.getUserMaxFileSize(C);
            return (0, E.BU)(e / 1024, { useKibibytes: !0 });
        }, [C]),
        B = i.useMemo(() => {
            let e = R.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({ maxSize: k });
            switch (y) {
                case A.p9.TIER_0:
                    e = R.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({ maxSize: k });
                    break;
                case A.p9.TIER_1:
                    e = R.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({ maxSize: k });
            }
            return e;
        }, [y, k]),
        F = (0, E.BU)(A.Uq / 1024, { useKibibytes: !0 }),
        V = U ? R.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE_V2 : R.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
        H = w
            ? U
                ? (0, I.T)({
                      user: C,
                      onClick: () => {
                          window.open(f.Z.getArticleURL(N.BhN.NITRO_FAQ), '_blank');
                      }
                  })
                : R.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_TIER_2
            : R.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_3.format({ premiumMaxSize: F }),
        Z = w
            ? (0, r.jsx)('div', {
                  className: v.body,
                  children: (0, r.jsx)(s.Text, {
                      variant: 'text-sm/medium',
                      children: H
                  })
              })
            : (0, r.jsxs)('div', {
                  className: v.body,
                  children: [
                      (0, r.jsx)('span', { children: B }),
                      (0, r.jsx)(s.Text, {
                          variant: 'text-md/medium',
                          children: H
                      })
                  ]
              });
    return (0, r.jsx)(g.Z, {
        artElement: G,
        artContainerClassName: w ? v.updatedArtContainer : v.artContainer,
        enableArtBoxShadow: !1,
        type: A.cd.UPLOAD_ERROR_UPSELL,
        title: V,
        body: Z,
        context: R.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({ maxSize: k }),
        glowUp: H,
        analyticsLocation: { section: N.jXE.FILE_UPLOAD_POPOUT },
        onClose: t,
        subscriptionTier: A.Si.TIER_2,
        secondaryCTA: w ? R.Z.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA : void 0,
        onSecondaryClick: w
            ? function () {
                  (0, l.Z)(),
                      t(),
                      _.default.track(N.rMx.PREMIUM_PROMOTION_OPENED, {
                          location_section: N.jXE.FILE_UPLOAD_UPSELL_MODAL,
                          location_object: N.qAy.NAVIGATION_LINK
                      }),
                      (0, u.uL)(N.Z5c.APPLICATION_STORE);
              }
            : void 0,
        showEnhancedUpsell: w,
        ...n
    });
}
