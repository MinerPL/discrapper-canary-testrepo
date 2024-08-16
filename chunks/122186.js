t.d(n, {
    Z: function () {
        return I;
    }
});
var l = t(735250);
t(470079);
var s = t(120356),
    a = t.n(s),
    r = t(848246),
    i = t(481060),
    o = t(436774),
    c = t(1163),
    u = t(846401),
    d = t(197115),
    m = t(74538),
    E = t(981631),
    _ = t(474936),
    S = t(689938),
    g = t(304095);
function h(e) {
    let { location: n, ...t } = e;
    return (0, l.jsx)(d.Z, {
        className: a()(g.enhancedCTA, g.ctaGradientBackground),
        iconClassName: g.premiumIcon,
        subscriptionTier: _.Si.TIER_2,
        buttonText: S.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
        size: i.Button.Sizes.TINY,
        premiumModalAnalyticsLocation: n,
        ...t
    });
}
function C() {
    let e = (0, u.Z)();
    return (0, l.jsxs)('div', {
        className: g.extendedDemoContainer,
        children: [
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        className: g.extendedDemoContainer,
                        children: [
                            (0, l.jsx)(i.Text, {
                                variant: 'text-xs/bold',
                                color: 'status-warning',
                                className: g.extendedDemoDurationText,
                                children: e.toUpperCase()
                            }),
                            (0, l.jsx)(i.Text, {
                                variant: 'text-xs/bold',
                                children: S.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_UPSELL_TITLE.toUpperCase()
                            })
                        ]
                    }),
                    (0, l.jsx)(i.Text, {
                        variant: 'text-sm/medium',
                        children: S.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_UPSELL_BODY
                    })
                ]
            }),
            (0, l.jsx)('div', {
                className: g.extendedDemoButton,
                children: (0, l.jsx)(h, { size: i.Button.Sizes.SMALL })
            })
        ]
    });
}
function I(e) {
    let { message: n, onClose: t, openStreamUpsellModal: s, glow: u = !1 } = e,
        d = {
            section: E.jXE.STREAM_SETTINGS,
            object: E.qAy.PREMIUM_UPSELL_BANNER,
            objectType: E.Qqv.BUY
        },
        _ = (0, m.So)(r.q.STREAM_HIGH_QUALITY),
        I = c.Z.useExperiment({ location: 'StreamSettingsUpsellBanner' }, { autoTrackExposure: !1 }).extendedDemoDuration;
    return (0, l.jsx)('div', {
        className: a()(g.upsellBanner, g.enhancedBanner, { [g.gradientGlow]: u }),
        children:
            _ && I
                ? (0, l.jsx)(C, {})
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)('div', {
                              className: g.iconTextContainer,
                              children: [
                                  (0, l.jsx)(i.NitroWheelIcon, {
                                      size: 'md',
                                      color: o.JX.PREMIUM_TIER_2
                                  }),
                                  (0, l.jsx)(i.Text, {
                                      variant: 'text-sm/medium',
                                      className: a()(g.upsellText, g.enhancedUpsellText),
                                      children:
                                          null != n
                                              ? n
                                              : _
                                                ? (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          S.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_UPSELL_BODY,
                                                          ' ',
                                                          S.Z.Messages.LEARN_MORE_CLICK.format({
                                                              onClick: () =>
                                                                  s({
                                                                      analyticsLocation: d,
                                                                      onClose: t
                                                                  })
                                                          })
                                                      ]
                                                  })
                                                : S.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_LEARN_MORE_V3.format({
                                                      onClick: () =>
                                                          s({
                                                              analyticsLocation: d,
                                                              onClose: t
                                                          })
                                                  })
                                  })
                              ]
                          }),
                          (0, l.jsx)('div', {
                              className: g.enhancedCTAs,
                              children: (0, l.jsx)(h, {})
                          })
                      ]
                  })
    });
}
