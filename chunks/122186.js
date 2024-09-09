n.d(t, {
    Z: function () {
        return v;
    },
    c: function () {
        return j;
    }
});
var l = n(735250);
n(470079);
var s = n(120356),
    i = n.n(s),
    r = n(848246),
    a = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(436774),
    u = n(933843),
    f = n(1163),
    h = n(846401),
    m = n(197115),
    x = n(981631),
    _ = n(474936),
    g = n(689938),
    p = n(304095);
function C(e) {
    let { location: t, ...n } = e;
    return (0, l.jsx)(m.Z, {
        className: i()(p.enhancedCTA, p.ctaGradientBackground),
        iconClassName: p.premiumIcon,
        subscriptionTier: _.Si.TIER_2,
        buttonText: g.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
        size: o.Button.Sizes.TINY,
        premiumModalAnalyticsLocation: t,
        ...n
    });
}
function S() {
    let e = (0, h.Z)();
    return (0, l.jsxs)('div', {
        className: p.extendedDemoContainer,
        children: [
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        className: p.extendedDemoContainer,
                        children: [
                            (0, l.jsx)(o.Text, {
                                variant: 'text-xs/bold',
                                color: 'status-warning',
                                className: p.extendedDemoDurationText,
                                children: e.toUpperCase()
                            }),
                            (0, l.jsx)(o.Text, {
                                variant: 'text-xs/bold',
                                children: g.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_UPSELL_TITLE.toUpperCase()
                            })
                        ]
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        children: g.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_UPSELL_BODY
                    })
                ]
            }),
            (0, l.jsx)('div', {
                className: p.extendedDemoButton,
                children: (0, l.jsx)(C, { size: o.Button.Sizes.SMALL })
            })
        ]
    });
}
function j() {
    let e = (0, a.e7)([c.Z], () => c.Z.useReducedMotion);
    return (0, l.jsxs)('div', {
        className: i()(p.reverseTrialEducationBannerContainer, { [p.reducedMotion]: e }),
        children: [
            (0, l.jsx)(o.LottieAnimation, {
                className: i()(p.unlockAnimation, { [p.reducedMotion]: e }),
                loop: !1,
                shouldAnimate: !e,
                pauseAtFrame: e ? 149 : void 0,
                importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
            }),
            (0, l.jsx)(o.Text, {
                variant: 'text-xs/medium',
                className: p.reverseTrialEducationText,
                children: g.Z.Messages.PREMIUM_REVERSE_TRIAL_SCREEN_SHARE_QUALITY_EDUCATION.format()
            })
        ]
    });
}
function v(e) {
    let { message: t, onClose: n, openStreamUpsellModal: s, glow: a = !1 } = e,
        c = {
            section: x.jXE.STREAM_SETTINGS,
            object: x.qAy.PREMIUM_UPSELL_BANNER,
            objectType: x.Qqv.BUY
        },
        h = (0, u.So)(r.q.STREAM_HIGH_QUALITY),
        m = f.Z.useExperiment({ location: 'StreamSettingsUpsellBanner' }, { autoTrackExposure: !1 }).extendedDemoDuration;
    return (0, l.jsx)('div', {
        className: i()(p.upsellBanner, p.enhancedBanner, { [p.gradientGlow]: a }),
        children:
            h && m
                ? (0, l.jsx)(S, {})
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)('div', {
                              className: p.iconTextContainer,
                              children: [
                                  (0, l.jsx)(o.NitroWheelIcon, {
                                      size: 'md',
                                      color: d.JX.PREMIUM_TIER_2
                                  }),
                                  (0, l.jsx)(o.Text, {
                                      variant: 'text-sm/medium',
                                      className: i()(p.upsellText, p.enhancedUpsellText),
                                      children:
                                          null != t
                                              ? t
                                              : h
                                                ? (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          g.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_UPSELL_BODY,
                                                          ' ',
                                                          g.Z.Messages.LEARN_MORE_CLICK.format({
                                                              onClick: () =>
                                                                  s({
                                                                      analyticsLocation: c,
                                                                      onClose: n
                                                                  })
                                                          })
                                                      ]
                                                  })
                                                : g.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_LEARN_MORE_V3.format({
                                                      onClick: () =>
                                                          s({
                                                              analyticsLocation: c,
                                                              onClose: n
                                                          })
                                                  })
                                  })
                              ]
                          }),
                          (0, l.jsx)('div', {
                              className: p.enhancedCTAs,
                              children: (0, l.jsx)(C, {})
                          })
                      ]
                  })
    });
}
