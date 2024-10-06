var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(442837),
    o = n(704215),
    c = n(749280),
    u = n(481060),
    d = n(367907),
    h = n(499254),
    p = n(424602),
    m = n(541099),
    _ = n(827498),
    f = n(569211),
    E = n(663924),
    g = n(998698),
    C = n(873387),
    I = n(605236),
    T = n(819640),
    x = n(291407),
    S = n(981631),
    v = n(314734),
    N = n(921944),
    A = n(689938),
    Z = n(786899),
    M = n(795361);
let b = s.forwardRef(function (e, t) {
    let { type: n, animateRef: a } = e,
        p = (0, r.e7)([m.Z], () => m.Z.shouldShowPopup() && m.Z.activeViewType() === n),
        { Component: f, events: E, play: g } = (0, c.w)();
    s.useImperativeHandle(
        a,
        () => ({
            animate: () => {
                E.onMouseEnter();
            }
        }),
        [E]
    );
    let C = s.useCallback(() => {
        (0, d.yw)(S.rMx.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED), p ? h.yT(_.ti.DISMISSED) : ((0, I.EW)(o.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: N.L.TAKE_ACTION }), h.__(_._b.TEXT, n)), g();
    }, [p, n, g]);
    return (0, i.jsx)('div', {
        className: l()(Z.buttonContainer, v.t4),
        ref: t,
        children: (0, i.jsx)(u.Button, {
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.NONE,
            tabIndex: 0,
            className: l()(Z.button, { [Z.buttonActive]: p }),
            onClick: C,
            'aria-label': A.Z.Messages.APP_LAUNCHER_ENTRYPOINT_BUTTON_ARIA_LABEL,
            focusProps: {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: -4,
                    right: -4
                }
            },
            innerClassName: Z.buttonContents,
            ...E,
            children: (0, i.jsx)(f, { color: 'currentColor' })
        })
    });
});
function R(e) {
    let { showAppLauncherPopup: t, children: n } = e,
        s = (0, r.e7)([T.Z], () => T.Z.hasLayers()),
        {
            enabled: a,
            shouldShow: o,
            applicationDetails: c,
            showsTooltip: d
        } = (0, f.Z)({
            obstructedFromView: s,
            disabled: t
        });
    if (!a) return (0, i.jsx)(i.Fragment, { children: n });
    let h =
        o && (null == c ? void 0 : c.iconURL) != null
            ? (0, i.jsxs)('div', {
                  className: Z.channelAppLauncherButtonPopoutIconContainer,
                  children: [
                      (0, i.jsx)('img', {
                          className: l()(Z.buttonContainer, Z.button, Z.channelAppLauncherButtonPopoutIcon),
                          alt: A.Z.Messages.IMAGE,
                          src: null == c ? void 0 : c.iconURL,
                          'aria-hidden': !0,
                          draggable: !1
                      }),
                      (0, i.jsx)('div', {
                          className: Z.channelAppLauncherButtonPopoutIconShimmerContainer,
                          children: (0, i.jsx)('img', {
                              className: l()(Z.channelAppLauncherButtonPopoutIconShimmer),
                              alt: A.Z.Messages.IMAGE,
                              src: M,
                              'aria-hidden': !0,
                              draggable: !1
                          })
                      })
                  ]
              })
            : null;
    return d
        ? (0, i.jsx)(u.Tooltip, {
              text: A.Z.Messages.APP_LAUNCHER_APP_ADDED,
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
t.Z = s.memo(function (e) {
    let { channel: t, type: n, animateRef: a } = e,
        l = s.useRef(null),
        o = (0, C.g)(t),
        { activeCommand: c } = (0, r.cj)([g.Z], () => {
            var e;
            return { activeCommand: (null === (e = n.commands) || void 0 === e ? void 0 : e.enabled) ? g.Z.getActiveCommand(t.id) : null };
        }),
        u = p.T.useExperiment({ location: 'chat_input' }, { autoTrackExposure: !0 }).enabled,
        d = (0, r.e7)(
            [m.Z],
            () => {
                let e = m.Z.activeViewType();
                return null != e && e === n && m.Z.shouldShowPopup();
            },
            [n]
        );
    return u && null == c && o
        ? (0, i.jsxs)('div', {
              className: Z.channelAppLauncher,
              children: [
                  (0, i.jsx)(x.Z, {
                      channel: t,
                      animationContainerClassName: Z.entrypointAnimation,
                      glowClassName: Z.animationGlow,
                      trinketsClassName: Z.animationTrinkets,
                      children: (0, i.jsx)(R, {
                          showAppLauncherPopup: d,
                          children: (0, i.jsx)(b, {
                              type: n,
                              ref: l,
                              animateRef: a
                          })
                      })
                  }),
                  d
                      ? (0, i.jsx)(E.Z, {
                            positionTargetRef: l,
                            channel: t
                        })
                      : null
              ]
          })
        : null;
});
