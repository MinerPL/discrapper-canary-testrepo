n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var l = n(735250),
    s = n(470079),
    i = n(120356),
    r = n.n(i),
    a = n(512722),
    o = n.n(a),
    c = n(848246),
    d = n(442837),
    u = n(481060),
    f = n(410575),
    h = n(2052),
    m = n(924557),
    x = n(600164),
    _ = n(436774),
    g = n(933843),
    p = n(1163),
    C = n(594174),
    S = n(78839),
    j = n(74538),
    v = n(451467),
    E = n(122186),
    I = n(37113),
    Z = n(981631),
    T = n(474936),
    N = n(689938),
    M = n(458623),
    R = n(782765),
    A = n(224499);
function O(e) {
    let { analyticsLocation: t, onClose: s } = e;
    (0, u.openModalLazy)(async () => {
        let { default: e } = await n.e('28479').then(n.bind(n, 78865));
        return (n) =>
            (0, l.jsx)(e, {
                ...n,
                onCloseParent: s,
                analyticsSource: t
            });
    });
}
function L() {
    return (0, l.jsxs)('div', {
        className: R.toolTipTextContainer,
        children: [
            (0, l.jsx)(u.NitroWheelIcon, {
                size: 'md',
                color: _.JX.PREMIUM_TIER_2,
                className: r()(R.premiumIcon)
            }),
            (0, l.jsx)(u.Text, {
                className: R.upsellText,
                variant: 'text-sm/medium',
                children: N.Z.Messages.UNLOCK_WITH_NITRO
            })
        ]
    });
}
function w(e) {
    let t,
        n,
        { type: s, selected: i, needsPremium: a, needsDemo: o, analyticsLocation: c, onClick: d, onClose: f, setIsHovering: h } = e,
        { value: m, label: x } = s;
    return (
        a
            ? ((t = (0, l.jsx)(u.TooltipContainer, {
                  tooltipClassName: R.tooltip,
                  spacing: 6,
                  'aria-label': N.Z.Messages.UNLOCK_WITH_NITRO,
                  text: (0, l.jsx)(L, {}),
                  children: (0, l.jsx)('div', {
                      className: R.textContainer,
                      onMouseEnter: () => h(!0),
                      onMouseLeave: () => h(!1),
                      children: (0, l.jsx)(u.Text, {
                          variant: 'text-xs/bold',
                          className: r()(R.selectorNitroText, R.enhancedSelectorNitroText),
                          children: x
                      })
                  })
              })),
              (n = () =>
                  O({
                      analyticsLocation: c,
                      onClose: f
                  })))
            : ((t = (0, l.jsx)('div', {
                  className: R.textContainer,
                  children: (0, l.jsx)(u.Text, {
                      variant: 'text-xs/normal',
                      className: r()(R.selectorText, { [R.enhancedSelectorNitroText]: o }),
                      children: x
                  })
              })),
              (n = () => d(m))),
        {
            content: t,
            className: r()(R.selectorButton, {
                [R.selectorButtonSelected]: i,
                [R.perksDemo]: o,
                [R.premiumUpsell]: a
            }),
            onClick: n
        }
    );
}
function b(e) {
    let { onClose: t, selectedPreset: n, selectedResolution: i, selectedFPS: r, onResolutionChange: a, onFPSChange: _, onPresetChange: L, targetGuildPremiumTier: b, captureDeviceSelected: D } = e,
        P = (0, d.e7)([C.default], () => {
            let e = C.default.getCurrentUser();
            return o()(null != e, 'StreamSettings: user cannot be undefined'), e;
        }),
        y = j.ZP.canStreamQuality(j.U2.MID, P),
        { location: G } = (0, h.O)(),
        B = (0, m.Zq)({ autoTrackExposure: !1 }),
        k = (0, j.I5)(P, T.p9.TIER_1);
    p.Z.useExperiment(
        { location: 'Go Live Modal' },
        {
            autoTrackExposure: !0,
            disable: k
        }
    );
    let U = (0, d.e7)([S.ZP], () => S.ZP.inReverseTrial()),
        V = (0, g.So)(c.q.STREAM_HIGH_QUALITY),
        H = (!y && !B) || V,
        [W, F] = s.useState(!1),
        z = D ? I.z8 : I.WC,
        Y = {
            ...G,
            section: Z.jXE.STREAM_SETTINGS
        },
        K = (0, l.jsx)(u.ButtonGroup, {
            buttons: z.map((e) =>
                w({
                    type: e,
                    selected: e.value === i,
                    needsPremium: !(0, v.Z)(n, e.value, r, P, b),
                    needsDemo: (V || U) && e.value !== I.LY.RESOLUTION_720,
                    analyticsLocation: Y,
                    onClick: () => a(e.value),
                    onClose: t,
                    setIsHovering: F
                })
            )
        }),
        Q = (0, l.jsx)(u.ButtonGroup, {
            buttons: I.k0.map((e) =>
                w({
                    type: e,
                    selected: e.value === r,
                    needsPremium: !(0, v.Z)(n, i, e.value, P, b),
                    needsDemo: V && e.value === I.ws.FPS_60,
                    analyticsLocation: Y,
                    onClick: () => _(e.value),
                    onClose: t,
                    setIsHovering: F
                })
            )
        }),
        X = [
            {
                value: I.tI.PRESET_VIDEO,
                label: N.Z.Messages.STREAM_PRESET_VIDEO
            },
            ...(D
                ? []
                : [
                      {
                          value: I.tI.PRESET_DOCUMENTS,
                          label: N.Z.Messages.STREAM_PRESET_DOCUMENTS
                      }
                  ]),
            {
                value: I.tI.PRESET_CUSTOM,
                label: N.Z.Messages.STREAM_PRESET_CUSTOM
            }
        ],
        q =
            n === I.tI.PRESET_DOCUMENTS
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(x.Z, {
                              children: (0, l.jsx)(u.FormItem, {
                                  title: N.Z.Messages.STREAM_RESOLUTION,
                                  titleClassName: M.formItemTitleSlim,
                                  className: R.documentModeGroup,
                                  children: (0, l.jsx)(u.Text, {
                                      variant: 'text-xs/normal',
                                      children: N.Z.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({ fps: r })
                                  })
                              })
                          }),
                          H
                              ? (0, l.jsx)(E.Z, {
                                    message: N.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
                                    onClose: t,
                                    openStreamUpsellModal: O
                                })
                              : null,
                          U && (0, l.jsx)(E.c, {})
                      ]
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)(x.Z, {
                              children: [
                                  (0, l.jsx)(u.FormItem, {
                                      title: N.Z.Messages.STREAM_RESOLUTION,
                                      className: R.settingsGroup,
                                      titleClassName: M.formItemTitleSlim,
                                      children: K
                                  }),
                                  (0, l.jsx)(u.FormItem, {
                                      title: N.Z.Messages.SCREENSHARE_FRAME_RATE,
                                      className: R.settingsGroup,
                                      titleClassName: M.formItemTitleSlim,
                                      children: Q
                                  })
                              ]
                          }),
                          H
                              ? (0, l.jsx)(E.Z, {
                                    onClose: t,
                                    openStreamUpsellModal: O,
                                    glow: W
                                })
                              : null,
                          U && (0, l.jsx)(E.c, {})
                      ]
                  });
    return (0, l.jsx)(f.Z, {
        ...Y,
        children: (0, l.jsx)(u.FormItem, {
            title: N.Z.Messages.STREAM_QUALITY,
            titleClassName: M.formItemTitle,
            className: M.modalContent,
            children: (0, l.jsxs)('div', {
                className: R.qualitySettingsContainer,
                children: [
                    (0, l.jsx)(u.SingleSelect, {
                        value: n,
                        className: A.marginTop8,
                        options: X,
                        onChange: (e) => L(e)
                    }),
                    q
                ]
            })
        })
    });
}
