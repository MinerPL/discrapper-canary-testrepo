n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(47120);
var i,
    s,
    r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    c = n(512722),
    d = n.n(c),
    u = n(442837),
    m = n(622535),
    h = n(481060),
    g = n(570140),
    p = n(232567),
    x = n(809206),
    S = n(497321),
    T = n(634894),
    C = n(100527),
    _ = n(906732),
    E = n(475977),
    f = n(957730),
    I = n(31590),
    N = n(53691),
    A = n(267717),
    b = n(296810),
    v = n(921813),
    j = n(935147),
    O = n(246946),
    R = n(25990),
    P = n(594174),
    D = n(626135),
    y = n(74538),
    B = n(695346),
    L = n(265159),
    Z = n(532495),
    F = n(981631),
    M = n(388032),
    k = n(111265);
function w() {
    let e = (0, u.e7)([P.default], () => {
        let e = P.default.getCurrentUser();
        return d()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
    });
    l.useEffect(() => {
        (0, p.In)(e.id);
    }, [e.id]);
    let t = (0, u.e7)([O.Z], () => O.Z.hidePersonalInformation),
        { pendingBio: n, ...i } = (0, u.cj)([R.Z], () => R.Z.getAllPending()),
        s = (0, u.e7)([R.Z], () => R.Z.showNotice()),
        a = B.dN.useSetting() && null != n ? f.ZP.parse(void 0, n).content : n,
        c = y.ZP.canUsePremiumProfileCustomization(e),
        { analyticsLocations: w } = (0, _.ZP)(C.Z.PROFILE);
    l.useEffect(() => () => g.Z.wait(x.W3), []);
    let U = 'UserSettingsProfileCustomization';
    (0, T.j)({
        location: U + ' auto on',
        autoTrackExposure: !0
    }),
        (0, T.j)({
            location: U + ' auto off',
            autoTrackExposure: !1
        });
    let {
            enabled: V,
            showSegmentedControl: G,
            showFloatingUpsell: Y
        } = I.Z.useExperiment(
            { location: 'UserSettingsProfileCustomization' },
            {
                autoTrackExposure: !c,
                disable: c
            }
        ),
        [H, z] = l.useState(0),
        [W, K] = l.useState(!1),
        q = l.useMemo(
            () =>
                G
                    ? [
                          {
                              name: M.intl.string(M.t['q/MslJ']),
                              value: 0
                          },
                          {
                              name: M.intl.string(M.t['5SObwM']),
                              value: 1
                          }
                      ]
                    : [],
            [G]
        ),
        Q = !V || Y || (G && 0 === H),
        X = !c && (!V || Y || (G && 1 === H)),
        J = l.useRef(null),
        $ = l.useCallback((e) => {
            1 === e && D.default.track(F.rMx.TRY_IT_OUT_PRESET_CLICKED, { cta_variant: 'segmented_control' }), z(e);
        }, []);
    return t
        ? (0, r.jsx)(S.Z, {})
        : (0, r.jsxs)(_.Gt, {
              value: w,
              children: [
                  (0, r.jsx)(E.Z, {}),
                  G &&
                      !c &&
                      (0, r.jsx)(h.SegmentedControl, {
                          className: o()({
                              [k.segmentedControlNonNitro]: 0 === H,
                              [k.segmentedControlTryItOut]: 1 === H
                          }),
                          options: q,
                          value: H,
                          onChange: (e) => $(e.value),
                          look: 'pill'
                      }),
                  Q &&
                      (0, r.jsx)(b.Z, {
                          profilePreview: (0, r.jsx)(v.Z, {
                              user: e,
                              canUsePremiumCustomization: c,
                              onUpsellClick: L.Z,
                              pendingBio: a,
                              ...i
                          }),
                          children: (0, r.jsx)(Z.Z, {})
                      }),
                  (0, r.jsx)(m.$, {
                      onChange: (e) => K(e),
                      threshold: 0.25,
                      active: Y,
                      children: (0, r.jsx)('div', {
                          ref: J,
                          children: (0, r.jsx)(j.Z, {
                              user: e,
                              shouldShow: X,
                              isVisible: W
                          })
                      })
                  }),
                  Y &&
                      !s &&
                      (0, r.jsx)(N.p, {
                          className: k.floatingNitroUpsell,
                          showUpsell: Y && !W,
                          text: M.intl.format(M.t.TmfgIy, { onClick: () => (0, A.openPremiumTryItOutProfileUpsell)() }),
                          textVariant: 'heading-md/medium',
                          button: (0, r.jsxs)(h.ShinyButton, {
                              className: k.floatingNitroButton,
                              innerClassName: k.floatingNitroButtonInner,
                              onClick: () => {
                                  var e;
                                  D.default.track(F.rMx.TRY_IT_OUT_PRESET_CLICKED, { cta_variant: 'floating_action_button' }), null == J || null === (e = J.current) || void 0 === e || e.scrollIntoView({ behavior: 'smooth' });
                              },
                              color: h.Button.Colors.GREEN,
                              size: h.ButtonSizes.MEDIUM,
                              children: [
                                  (0, r.jsx)(h.NitroWheelIcon, {
                                      size: 'sm',
                                      color: 'currentColor'
                                  }),
                                  (0, r.jsx)(h.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'currentColor',
                                      children: M.intl.string(M.t.uw9zIy)
                                  })
                              ]
                          })
                      })
              ]
          });
}
((s = i || (i = {}))[(s.NON_NITRO = 0)] = 'NON_NITRO'), (s[(s.TRY_IT_OUT = 1)] = 'TRY_IT_OUT');
