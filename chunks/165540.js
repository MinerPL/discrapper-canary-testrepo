var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(704215),
    c = n(749280),
    d = n(481060),
    u = n(367907),
    h = n(499254),
    p = n(424602),
    m = n(541099),
    f = n(827498),
    g = n(569211),
    C = n(663924),
    x = n(998698),
    v = n(873387),
    _ = n(404295),
    I = n(605236),
    E = n(819640),
    b = n(291407),
    N = n(61356),
    Z = n(981631),
    T = n(314734),
    S = n(921944),
    j = n(388032),
    A = n(786899),
    y = n(795361);
let P = l.forwardRef(function (e, t) {
    let { type: n, animateRef: a } = e,
        p = (0, s.e7)([m.Z], () => m.Z.shouldShowPopup() && m.Z.activeViewType() === n),
        { Component: g, events: C, play: x } = (0, c.w)();
    l.useImperativeHandle(
        a,
        () => ({
            animate: () => {
                C.onMouseEnter();
            }
        }),
        [C]
    );
    let v = l.useCallback(() => {
        (0, u.yw)(Z.rMx.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED), p ? h.yT(f.ti.DISMISSED) : ((0, I.EW)(o.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: S.L.TAKE_ACTION }), h.__(f._b.TEXT, n)), x();
    }, [p, n, x]);
    return (0, i.jsx)('div', {
        className: r()(A.buttonContainer, T.t4),
        ref: t,
        children: (0, i.jsx)(d.Button, {
            look: d.Button.Looks.BLANK,
            size: d.Button.Sizes.NONE,
            tabIndex: 0,
            className: r()(A.button, { [A.buttonActive]: p }),
            onClick: v,
            'aria-label': j.intl.string(j.t.erHFxM),
            focusProps: {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: -4,
                    right: -4
                }
            },
            innerClassName: A.buttonContents,
            ...C,
            children: (0, i.jsx)(g, { color: 'currentColor' })
        })
    });
});
function M(e) {
    let { showAppLauncherPopup: t, children: n } = e,
        l = (0, s.e7)([E.Z], () => E.Z.hasLayers()),
        {
            enabled: a,
            shouldShow: o,
            applicationDetails: c,
            showsTooltip: u
        } = (0, g.Z)({
            obstructedFromView: l,
            disabled: t
        });
    if (!a) return (0, i.jsx)(i.Fragment, { children: n });
    let h =
        o && (null == c ? void 0 : c.iconURL) != null
            ? (0, i.jsxs)('div', {
                  className: A.channelAppLauncherButtonPopoutIconContainer,
                  children: [
                      (0, i.jsx)('img', {
                          className: r()(A.buttonContainer, A.button, A.channelAppLauncherButtonPopoutIcon),
                          alt: j.intl.string(j.t.X4IxWF),
                          src: null == c ? void 0 : c.iconURL,
                          'aria-hidden': !0,
                          draggable: !1
                      }),
                      (0, i.jsx)('div', {
                          className: A.channelAppLauncherButtonPopoutIconShimmerContainer,
                          children: (0, i.jsx)('img', {
                              className: r()(A.channelAppLauncherButtonPopoutIconShimmer),
                              alt: j.intl.string(j.t.X4IxWF),
                              src: y,
                              'aria-hidden': !0,
                              draggable: !1
                          })
                      })
                  ]
              })
            : null;
    return u
        ? (0, i.jsx)(d.Tooltip, {
              text: j.intl.string(j.t.JDj6Xl),
              shouldShow: o,
              forceOpen: o,
              children: () =>
                  (0, i.jsxs)(i.Fragment, {
                      children: [h, n]
                  })
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [h, n]
          });
}
t.Z = l.memo(function (e) {
    let { channel: t, type: n, animateRef: a, entryPointCommandButtonRef: r } = e,
        o = l.useRef(null),
        c = (0, v.g)(t),
        { activeCommand: d } = (0, s.cj)([x.Z], () => {
            var e;
            return { activeCommand: (null === (e = n.commands) || void 0 === e ? void 0 : e.enabled) ? x.Z.getActiveCommand(t.id) : null };
        }),
        u = p.T.useExperiment({ location: 'chat_input' }, { autoTrackExposure: !0 }).enabled,
        h = (0, N.Z)({ type: n }),
        f = (0, _.h9)(t.id, 'ChannelAppLauncher'),
        g = (0, s.e7)([m.Z], () => m.Z.appDMChannelsWithFailedLoads().has(t.id));
    return u && null == d && c
        ? (0, i.jsxs)('div', {
              className: A.channelAppLauncher,
              children: [
                  (0, i.jsx)(b.Z, {
                      channel: t,
                      animationContainerClassName: A.entrypointAnimation,
                      glowClassName: A.animationGlow,
                      trinketsClassName: A.animationTrinkets,
                      children: (0, i.jsx)(M, {
                          showAppLauncherPopup: h,
                          children: (0, i.jsx)(P, {
                              type: n,
                              ref: o,
                              animateRef: a
                          })
                      })
                  }),
                  h
                      ? (0, i.jsx)(C.Z, {
                            positionTargetRef: f && !g ? r : o,
                            channel: t
                        })
                      : null
              ]
          })
        : null;
});
