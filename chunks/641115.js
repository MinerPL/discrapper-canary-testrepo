t.d(n, {
    Z: function () {
        return P;
    }
}),
    t(47120);
var l = t(735250),
    s = t(470079),
    a = t(120356),
    r = t.n(a),
    i = t(512722),
    o = t.n(i),
    c = t(848246),
    u = t(442837),
    d = t(481060),
    m = t(410575),
    E = t(2052),
    _ = t(924557),
    S = t(600164),
    g = t(436774),
    h = t(933843),
    C = t(1163),
    I = t(594174),
    N = t(74538),
    x = t(451467),
    Z = t(122186),
    f = t(37113),
    R = t(981631),
    A = t(474936),
    T = t(689938),
    v = t(458623),
    L = t(782765),
    M = t(224499);
function p(e) {
    let { analyticsLocation: n, onClose: s } = e;
    (0, d.openModalLazy)(async () => {
        let { default: e } = await t.e('28479').then(t.bind(t, 78865));
        return (t) =>
            (0, l.jsx)(e, {
                ...t,
                onCloseParent: s,
                analyticsSource: n
            });
    });
}
function O() {
    return (0, l.jsxs)('div', {
        className: L.toolTipTextContainer,
        children: [
            (0, l.jsx)(d.NitroWheelIcon, {
                size: 'md',
                color: g.JX.PREMIUM_TIER_2,
                className: r()(L.premiumIcon)
            }),
            (0, l.jsx)(d.Text, {
                className: L.upsellText,
                variant: 'text-sm/medium',
                children: T.Z.Messages.UNLOCK_WITH_NITRO
            })
        ]
    });
}
function j(e) {
    let n,
        t,
        { type: s, selected: a, needsPremium: i, needsDemo: o, analyticsLocation: c, onClick: u, onClose: m, setIsHovering: E } = e,
        { value: _, label: S } = s;
    return (
        i
            ? ((n = (0, l.jsx)(d.TooltipContainer, {
                  tooltipClassName: L.tooltip,
                  spacing: 6,
                  'aria-label': T.Z.Messages.UNLOCK_WITH_NITRO,
                  text: (0, l.jsx)(O, {}),
                  children: (0, l.jsx)('div', {
                      className: L.textContainer,
                      onMouseEnter: () => E(!0),
                      onMouseLeave: () => E(!1),
                      children: (0, l.jsx)(d.Text, {
                          variant: 'text-xs/bold',
                          className: r()(L.selectorNitroText, L.enhancedSelectorNitroText),
                          children: S
                      })
                  })
              })),
              (t = () =>
                  p({
                      analyticsLocation: c,
                      onClose: m
                  })))
            : ((n = (0, l.jsx)('div', {
                  className: L.textContainer,
                  children: (0, l.jsx)(d.Text, {
                      variant: 'text-xs/normal',
                      className: r()(L.selectorText, { [L.enhancedSelectorNitroText]: o }),
                      children: S
                  })
              })),
              (t = () => u(_))),
        {
            content: n,
            className: r()(L.selectorButton, {
                [L.selectorButtonSelected]: a,
                [L.perksDemo]: o,
                [L.premiumUpsell]: i
            }),
            onClick: t
        }
    );
}
function P(e) {
    let { onClose: n, selectedPreset: t, selectedResolution: a, selectedFPS: r, onResolutionChange: i, onFPSChange: g, onPresetChange: O, targetGuildPremiumTier: P, captureDeviceSelected: D } = e,
        G = (0, u.e7)([I.default], () => {
            let e = I.default.getCurrentUser();
            return o()(null != e, 'StreamSettings: user cannot be undefined'), e;
        }),
        U = N.ZP.canStreamQuality(N.U2.MID, G),
        { location: b } = (0, E.O)(),
        w = (0, _.Zq)({ autoTrackExposure: !1 }),
        k = (0, N.I5)(G, A.p9.TIER_1);
    C.Z.useExperiment(
        { location: 'Go Live Modal' },
        {
            autoTrackExposure: !0,
            disable: k
        }
    );
    let B = (0, h.So)(c.q.STREAM_HIGH_QUALITY),
        V = (!U && !w) || B,
        [y, H] = s.useState(!1),
        W = D ? f.z8 : f.WC,
        F = {
            ...b,
            section: R.jXE.STREAM_SETTINGS
        },
        z = (0, l.jsx)(d.ButtonGroup, {
            buttons: W.map((e) =>
                j({
                    type: e,
                    selected: e.value === a,
                    needsPremium: !(0, x.Z)(t, e.value, r, G, P),
                    needsDemo: B && e.value !== f.LY.RESOLUTION_720,
                    analyticsLocation: F,
                    onClick: () => i(e.value),
                    onClose: n,
                    setIsHovering: H
                })
            )
        }),
        K = (0, l.jsx)(d.ButtonGroup, {
            buttons: f.k0.map((e) =>
                j({
                    type: e,
                    selected: e.value === r,
                    needsPremium: !(0, x.Z)(t, a, e.value, G, P),
                    needsDemo: B && e.value === f.ws.FPS_60,
                    analyticsLocation: F,
                    onClick: () => g(e.value),
                    onClose: n,
                    setIsHovering: H
                })
            )
        }),
        Y = [
            {
                value: f.tI.PRESET_VIDEO,
                label: T.Z.Messages.STREAM_PRESET_VIDEO
            },
            ...(D
                ? []
                : [
                      {
                          value: f.tI.PRESET_DOCUMENTS,
                          label: T.Z.Messages.STREAM_PRESET_DOCUMENTS
                      }
                  ]),
            {
                value: f.tI.PRESET_CUSTOM,
                label: T.Z.Messages.STREAM_PRESET_CUSTOM
            }
        ],
        Q =
            t === f.tI.PRESET_DOCUMENTS
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(S.Z, {
                              children: (0, l.jsx)(d.FormItem, {
                                  title: T.Z.Messages.STREAM_RESOLUTION,
                                  titleClassName: v.formItemTitleSlim,
                                  className: L.documentModeGroup,
                                  children: (0, l.jsx)(d.Text, {
                                      variant: 'text-xs/normal',
                                      children: T.Z.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({ fps: r })
                                  })
                              })
                          }),
                          V
                              ? (0, l.jsx)(Z.Z, {
                                    message: T.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
                                    onClose: n,
                                    openStreamUpsellModal: p
                                })
                              : null
                      ]
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)(S.Z, {
                              children: [
                                  (0, l.jsx)(d.FormItem, {
                                      title: T.Z.Messages.STREAM_RESOLUTION,
                                      className: L.settingsGroup,
                                      titleClassName: v.formItemTitleSlim,
                                      children: z
                                  }),
                                  (0, l.jsx)(d.FormItem, {
                                      title: T.Z.Messages.SCREENSHARE_FRAME_RATE,
                                      className: L.settingsGroup,
                                      titleClassName: v.formItemTitleSlim,
                                      children: K
                                  })
                              ]
                          }),
                          V
                              ? (0, l.jsx)(Z.Z, {
                                    onClose: n,
                                    openStreamUpsellModal: p,
                                    glow: y
                                })
                              : null
                      ]
                  });
    return (0, l.jsx)(m.Z, {
        ...F,
        children: (0, l.jsx)(d.FormItem, {
            title: T.Z.Messages.STREAM_QUALITY,
            titleClassName: v.formItemTitle,
            className: v.modalContent,
            children: (0, l.jsxs)('div', {
                className: L.qualitySettingsContainer,
                children: [
                    (0, l.jsx)(d.SingleSelect, {
                        value: t,
                        className: M.marginTop8,
                        options: Y,
                        onChange: (e) => O(e)
                    }),
                    Q
                ]
            })
        })
    });
}
