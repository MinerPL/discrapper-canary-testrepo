n.d(t, {
    Z: function () {
        return T;
    },
    c: function () {
        return Z;
    }
});
var l = n(735250),
    s = n(470079),
    i = n(120356),
    r = n.n(i),
    a = n(848246),
    o = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(436774),
    f = n(933843),
    h = n(1163),
    m = n(846401),
    x = n(48125),
    _ = n(639119),
    g = n(197115),
    p = n(74538),
    C = n(981631),
    S = n(474936),
    E = n(689938),
    j = n(742769);
function v(e) {
    let { location: t, ...n } = e,
        i = (0, _.N)(),
        a = null != i,
        o = x.Z.useExperiment(
            { location: 'StreamSettingsUpsellBanner.NitroButton' },
            {
                autoTrackExposure: a,
                disable: !a
            }
        ).enabled,
        d = s.useCallback(() => {
            if (o) {
                var e;
                return null !== (e = (0, p.fr)(i)) && void 0 !== e ? e : E.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA;
            }
            return E.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA;
        }, [o, i]);
    return (0, l.jsx)(g.Z, {
        className: r()(j.enhancedCTA, j.ctaGradientBackground),
        iconClassName: j.premiumIcon,
        subscriptionTier: S.Si.TIER_2,
        buttonText: d(),
        size: c.Button.Sizes.TINY,
        premiumModalAnalyticsLocation: t,
        ...n
    });
}
function I() {
    let e = (0, m.Z)();
    return (0, l.jsxs)('div', {
        className: j.extendedDemoContainer,
        children: [
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        className: j.extendedDemoContainer,
                        children: [
                            (0, l.jsx)(c.Text, {
                                variant: 'text-xs/bold',
                                color: 'status-warning',
                                className: j.extendedDemoDurationText,
                                children: e.toUpperCase()
                            }),
                            (0, l.jsx)(c.Text, {
                                variant: 'text-xs/bold',
                                children: E.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_UPSELL_TITLE.toUpperCase()
                            })
                        ]
                    }),
                    (0, l.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        children: E.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_UPSELL_BODY
                    })
                ]
            }),
            (0, l.jsx)('div', {
                className: j.extendedDemoButton,
                children: (0, l.jsx)(v, { size: c.Button.Sizes.SMALL })
            })
        ]
    });
}
function Z() {
    let e = (0, o.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, l.jsxs)('div', {
        className: r()(j.reverseTrialEducationBannerContainer, { [j.reducedMotion]: e }),
        children: [
            (0, l.jsx)(c.LottieAnimation, {
                className: r()(j.unlockAnimation, { [j.reducedMotion]: e }),
                loop: !1,
                shouldAnimate: !e,
                pauseAtFrame: e ? 149 : void 0,
                importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
            }),
            (0, l.jsx)(c.Text, {
                variant: 'text-xs/medium',
                className: j.reverseTrialEducationText,
                children: E.Z.Messages.PREMIUM_REVERSE_TRIAL_SCREEN_SHARE_QUALITY_EDUCATION.format()
            })
        ]
    });
}
function T(e) {
    let { message: t, onClose: n, openStreamUpsellModal: s, glow: i = !1 } = e,
        o = {
            section: C.jXE.STREAM_SETTINGS,
            object: C.qAy.PREMIUM_UPSELL_BANNER,
            objectType: C.Qqv.BUY
        },
        d = (0, f.So)(a.q.STREAM_HIGH_QUALITY),
        m = h.Z.useExperiment({ location: 'StreamSettingsUpsellBanner' }, { autoTrackExposure: !1 }).extendedDemoDuration;
    return (0, l.jsx)('div', {
        className: r()(j.upsellBanner, j.enhancedBanner, { [j.gradientGlow]: i }),
        children:
            d && m
                ? (0, l.jsx)(I, {})
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)('div', {
                              className: j.iconTextContainer,
                              children: [
                                  (0, l.jsx)(c.NitroWheelIcon, {
                                      size: 'md',
                                      color: u.JX.PREMIUM_TIER_2
                                  }),
                                  (0, l.jsx)(c.Text, {
                                      variant: 'text-sm/medium',
                                      className: r()(j.upsellText, j.enhancedUpsellText),
                                      children:
                                          null != t
                                              ? t
                                              : d
                                                ? (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          E.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_UPSELL_BODY,
                                                          ' ',
                                                          E.Z.Messages.LEARN_MORE_CLICK.format({
                                                              onClick: () =>
                                                                  s({
                                                                      analyticsLocation: o,
                                                                      onClose: n
                                                                  })
                                                          })
                                                      ]
                                                  })
                                                : E.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_LEARN_MORE_V3.format({
                                                      onClick: () =>
                                                          s({
                                                              analyticsLocation: o,
                                                              onClose: n
                                                          })
                                                  })
                                  })
                              ]
                          }),
                          (0, l.jsx)('div', {
                              className: j.enhancedCTAs,
                              children: (0, l.jsx)(v, { location: o })
                          })
                      ]
                  })
    });
}
