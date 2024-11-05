n.d(t, {
    Z: function () {
        return B;
    }
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(512722),
    o = n.n(a),
    c = n(848246),
    d = n(442837),
    u = n(481060),
    f = n(410575),
    h = n(2052),
    m = n(924557),
    x = n(600164),
    g = n(436774),
    p = n(933843),
    v = n(140465),
    j = n(1163),
    C = n(592125),
    S = n(944486),
    _ = n(594174),
    Z = n(74538),
    I = n(451467),
    T = n(122186),
    N = n(37113),
    w = n(981631),
    b = n(474936),
    y = n(388032),
    R = n(410894),
    E = n(13458),
    M = n(113207);
function k(e) {
    let { analyticsLocation: t, onClose: i } = e;
    (0, u.openModalLazy)(async () => {
        let { default: e } = await n.e('28479').then(n.bind(n, 78865));
        return (n) =>
            (0, l.jsx)(e, {
                ...n,
                onCloseParent: i,
                analyticsSource: t
            });
    });
}
function A() {
    return (0, l.jsxs)('div', {
        className: E.toolTipTextContainer,
        children: [
            (0, l.jsx)(u.NitroWheelIcon, {
                size: 'md',
                color: g.JX.PREMIUM_TIER_2,
                className: s()(E.premiumIcon)
            }),
            (0, l.jsx)(u.Text, {
                className: E.upsellText,
                variant: 'text-sm/medium',
                children: y.intl.string(y.t.sEAnVF)
            })
        ]
    });
}
function P(e) {
    let t,
        n,
        { type: i, selected: r, needsPremium: a, needsDemo: o, analyticsLocation: c, onClick: d, onClose: f, setIsHovering: h } = e,
        { value: m, label: x } = i;
    return (
        a
            ? ((t = (0, l.jsx)(u.TooltipContainer, {
                  tooltipClassName: E.tooltip,
                  spacing: 6,
                  'aria-label': y.intl.string(y.t.sEAnVF),
                  text: (0, l.jsx)(A, {}),
                  children: (0, l.jsx)('div', {
                      className: E.textContainer,
                      onMouseEnter: () => h(!0),
                      onMouseLeave: () => h(!1),
                      children: (0, l.jsx)(u.Text, {
                          variant: 'text-xs/bold',
                          className: s()(E.selectorNitroText, E.enhancedSelectorNitroText),
                          children: x
                      })
                  })
              })),
              (n = () =>
                  k({
                      analyticsLocation: c,
                      onClose: f
                  })))
            : ((t = (0, l.jsx)('div', {
                  className: E.textContainer,
                  children: (0, l.jsx)(u.Text, {
                      variant: 'text-xs/normal',
                      className: s()(E.selectorText, { [E.enhancedSelectorNitroText]: o }),
                      children: x
                  })
              })),
              (n = () => d(m))),
        {
            content: t,
            className: s()(E.selectorButton, {
                [E.selectorButtonSelected]: r,
                [E.perksDemo]: o,
                [E.premiumUpsell]: a
            }),
            onClick: n
        }
    );
}
function B(e) {
    let { onClose: t, selectedPreset: n, selectedResolution: r, selectedFPS: s, onResolutionChange: a, onFPSChange: g, onPresetChange: A, targetGuildPremiumTier: B, captureDeviceSelected: L } = e,
        G = (0, d.e7)([_.default], () => {
            let e = _.default.getCurrentUser();
            return o()(null != e, 'StreamSettings: user cannot be undefined'), e;
        }),
        D = (0, d.e7)([S.Z, C.Z], () => C.Z.getChannel(S.Z.getVoiceChannelId())),
        O = Z.ZP.canStreamQuality(Z.U2.MID, G),
        { location: U } = (0, h.O)(),
        F = (0, m.Zq)({ autoTrackExposure: !1 }),
        W = (0, Z.I5)(G, b.p9.TIER_1);
    j.Z.useExperiment(
        { location: 'Go Live Modal' },
        {
            autoTrackExposure: !0,
            disable: W
        }
    );
    let H = (0, v.x8)('StreamSettings'),
        V = (0, p.So)(c.q.STREAM_HIGH_QUALITY),
        z = (!O && !F) || V,
        [K, Y] = i.useState(!1),
        X = L ? N.z8 : N.WC,
        J = {
            ...U,
            section: w.jXE.STREAM_SETTINGS
        },
        q = (0, l.jsx)(u.ButtonGroup, {
            buttons: X.map((e) =>
                P({
                    type: e,
                    selected: e.value === r,
                    needsPremium: !(0, I.Z)(n, e.value, s, G, B, D),
                    needsDemo: (V || H) && e.value !== N.LY.RESOLUTION_720,
                    analyticsLocation: J,
                    onClick: () => a(e.value),
                    onClose: t,
                    setIsHovering: Y
                })
            )
        }),
        Q = (0, l.jsx)(u.ButtonGroup, {
            buttons: N.k0.map((e) =>
                P({
                    type: e,
                    selected: e.value === s,
                    needsPremium: !(0, I.Z)(n, r, e.value, G, B, D),
                    needsDemo: (V || H) && e.value === N.ws.FPS_60,
                    analyticsLocation: J,
                    onClick: () => g(e.value),
                    onClose: t,
                    setIsHovering: Y
                })
            )
        }),
        $ = [
            {
                value: N.tI.PRESET_VIDEO,
                label: y.intl.string(y.t.HcwHc3)
            },
            ...(L
                ? []
                : [
                      {
                          value: N.tI.PRESET_DOCUMENTS,
                          label: y.intl.string(y.t['/RfohI'])
                      }
                  ]),
            {
                value: N.tI.PRESET_CUSTOM,
                label: y.intl.string(y.t['+eOtrK'])
            }
        ],
        ee =
            n === N.tI.PRESET_DOCUMENTS
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(x.Z, {
                              children: (0, l.jsx)(u.FormItem, {
                                  title: y.intl.string(y.t.rHyPXl),
                                  titleClassName: R.formItemTitleSlim,
                                  className: E.documentModeGroup,
                                  children: (0, l.jsx)(u.Text, {
                                      variant: 'text-xs/normal',
                                      children: y.intl.format(y.t['U+hmam'], { fps: s })
                                  })
                              })
                          }),
                          z
                              ? (0, l.jsx)(T.Z, {
                                    message: y.intl.string(y.t.deDogI),
                                    onClose: t,
                                    openStreamUpsellModal: k
                                })
                              : null,
                          H && (0, l.jsx)(T.c, {})
                      ]
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)(x.Z, {
                              children: [
                                  (0, l.jsx)(u.FormItem, {
                                      title: y.intl.string(y.t.rHyPXl),
                                      className: E.settingsGroup,
                                      titleClassName: R.formItemTitleSlim,
                                      children: q
                                  }),
                                  (0, l.jsx)(u.FormItem, {
                                      title: y.intl.string(y.t.SkkeIi),
                                      className: E.settingsGroup,
                                      titleClassName: R.formItemTitleSlim,
                                      children: Q
                                  })
                              ]
                          }),
                          z
                              ? (0, l.jsx)(T.Z, {
                                    onClose: t,
                                    openStreamUpsellModal: k,
                                    glow: K
                                })
                              : null,
                          H && (0, l.jsx)(T.c, {})
                      ]
                  });
    return (0, l.jsx)(f.Z, {
        ...J,
        children: (0, l.jsx)(u.FormItem, {
            title: y.intl.string(y.t.ax4FnZ),
            titleClassName: R.formItemTitle,
            className: R.modalContent,
            children: (0, l.jsxs)('div', {
                className: E.qualitySettingsContainer,
                children: [
                    (0, l.jsx)(u.SingleSelect, {
                        value: n,
                        className: M.marginTop8,
                        options: $,
                        onChange: (e) => A(e)
                    }),
                    ee
                ]
            })
        })
    });
}
