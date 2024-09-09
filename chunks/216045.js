t.d(s, {
    Z: function () {
        return G;
    }
}),
    t(47120);
var n,
    a,
    i = t(735250),
    r = t(470079),
    o = t(120356),
    l = t.n(o),
    c = t(512722),
    d = t.n(c),
    _ = t(442837),
    u = t(622535),
    E = t(481060),
    T = t(570140),
    S = t(232567),
    I = t(809206),
    N = t(497321),
    m = t(634894),
    C = t(100527),
    A = t(906732),
    g = t(475977),
    h = t(957730),
    O = t(31590),
    p = t(53691),
    R = t(267717),
    x = t(296810),
    f = t(921813),
    M = t(935147),
    D = t(246946),
    P = t(25990),
    L = t(594174),
    b = t(74538),
    Z = t(695346),
    v = t(265159),
    j = t(532495),
    B = t(689938),
    U = t(663921);
function G() {
    let e = (0, _.e7)([L.default], () => {
        let e = L.default.getCurrentUser();
        return d()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
    });
    r.useEffect(() => {
        (0, S.In)(e.id);
    }, [e.id]);
    let s = (0, _.e7)([D.Z], () => D.Z.hidePersonalInformation),
        { pendingBio: t, ...n } = (0, _.cj)([P.Z], () => P.Z.getAllPending()),
        a = Z.dN.useSetting() && null != t ? h.ZP.parse(void 0, t).content : t,
        o = b.ZP.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, A.ZP)(C.Z.PROFILE);
    r.useEffect(() => () => T.Z.wait(I.W3), []);
    let G = 'UserSettingsProfileCustomization';
    (0, m.j)({
        location: G + ' auto on',
        autoTrackExposure: !0
    }),
        (0, m.j)({
            location: G + ' auto off',
            autoTrackExposure: !1
        });
    let {
            enabled: F,
            showSegmentedControl: y,
            showFloatingUpsell: V
        } = O.Z.useExperiment(
            { location: 'UserSettingsProfileCustomization' },
            {
                autoTrackExposure: !o,
                disable: o
            }
        ),
        [Y, w] = r.useState(0),
        [k, H] = r.useState(!1),
        W = r.useMemo(
            () =>
                y
                    ? [
                          {
                              name: B.Z.Messages.PREMIUM_UPSELL_PROFILE_SEGMENTED_CONTROL_NON_NITRO,
                              value: 0
                          },
                          {
                              name: B.Z.Messages.PREMIUM_UPSELL_PROFILE_SEGMENTED_CONTROL_NITRO,
                              value: 1
                          }
                      ]
                    : [],
            [y]
        ),
        K = !F || V || (y && 0 === Y),
        z = !F || (!o && (V || (y && 1 === Y))),
        Q = r.useRef(null);
    return s
        ? (0, i.jsx)(N.Z, {})
        : (0, i.jsxs)(A.Gt, {
              value: c,
              children: [
                  (0, i.jsx)(g.Z, {}),
                  y &&
                      !o &&
                      (0, i.jsx)(E.SegmentedControl, {
                          className: l()({
                              [U.segmentedControlNonNitro]: 0 === Y,
                              [U.segmentedControlTryItOut]: 1 === Y
                          }),
                          options: W,
                          value: Y,
                          onChange: (e) => w(e.value),
                          look: 'pill'
                      }),
                  K &&
                      (0, i.jsx)(x.Z, {
                          profilePreview: (0, i.jsx)(f.Z, {
                              user: e,
                              canUsePremiumCustomization: o,
                              onUpsellClick: v.Z,
                              pendingBio: a,
                              ...n
                          }),
                          children: (0, i.jsx)(j.Z, {})
                      }),
                  z &&
                      (0, i.jsx)(u.$, {
                          onChange: (e) => H(e),
                          threshold: 0.25,
                          active: V,
                          children: (0, i.jsx)('div', {
                              ref: Q,
                              children: (0, i.jsx)(M.Z, { user: e })
                          })
                      }),
                  V &&
                      (0, i.jsx)(p.p, {
                          className: U.floatingNitroUpsell,
                          showUpsell: V && !k,
                          text: B.Z.Messages.PREMIUM_UPSELL_PROFILE_TRY_IT_OUT_UPSELL.format({ onClick: R.openPremiumTryItOutProfileUpsell }),
                          textVariant: 'heading-md/medium',
                          button: (0, i.jsxs)(E.ShinyButton, {
                              className: U.floatingNitroButton,
                              innerClassName: U.floatingNitroButtonInner,
                              onClick: () => {
                                  var e;
                                  return null == Q ? void 0 : null === (e = Q.current) || void 0 === e ? void 0 : e.scrollIntoView({ behavior: 'smooth' });
                              },
                              color: E.Button.Colors.GREEN,
                              size: E.ButtonSizes.MEDIUM,
                              children: [
                                  (0, i.jsx)(E.NitroWheelIcon, {
                                      size: 'sm',
                                      color: 'currentColor'
                                  }),
                                  (0, i.jsx)(E.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'currentColor',
                                      children: B.Z.Messages.TRY_IT_OUT
                                  })
                              ]
                          })
                      })
              ]
          });
}
((a = n || (n = {}))[(a.NON_NITRO = 0)] = 'NON_NITRO'), (a[(a.TRY_IT_OUT = 1)] = 'TRY_IT_OUT');
