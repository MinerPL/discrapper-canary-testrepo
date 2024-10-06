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
    A = t(634894),
    C = t(100527),
    m = t(906732),
    g = t(475977),
    h = t(957730),
    O = t(31590),
    p = t(53691),
    R = t(267717),
    x = t(296810),
    M = t(921813),
    f = t(935147),
    D = t(246946),
    L = t(25990),
    P = t(594174),
    b = t(74538),
    Z = t(695346),
    v = t(265159),
    j = t(532495),
    B = t(689938),
    U = t(111265);
function G() {
    let e = (0, _.e7)([P.default], () => {
        let e = P.default.getCurrentUser();
        return d()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
    });
    r.useEffect(() => {
        (0, S.In)(e.id);
    }, [e.id]);
    let s = (0, _.e7)([D.Z], () => D.Z.hidePersonalInformation),
        { pendingBio: t, ...n } = (0, _.cj)([L.Z], () => L.Z.getAllPending()),
        a = (0, _.e7)([L.Z], () => L.Z.showNotice()),
        o = Z.dN.useSetting() && null != t ? h.ZP.parse(void 0, t).content : t,
        c = b.ZP.canUsePremiumProfileCustomization(e),
        { analyticsLocations: G } = (0, m.ZP)(C.Z.PROFILE);
    r.useEffect(() => () => T.Z.wait(I.W3), []);
    let F = 'UserSettingsProfileCustomization';
    (0, A.j)({
        location: F + ' auto on',
        autoTrackExposure: !0
    }),
        (0, A.j)({
            location: F + ' auto off',
            autoTrackExposure: !1
        });
    let {
            enabled: y,
            showSegmentedControl: V,
            showFloatingUpsell: Y
        } = O.Z.useExperiment(
            { location: 'UserSettingsProfileCustomization' },
            {
                autoTrackExposure: !c,
                disable: c
            }
        ),
        [k, w] = r.useState(0),
        [H, W] = r.useState(!1),
        K = r.useMemo(
            () =>
                V
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
            [V]
        ),
        z = !y || Y || (V && 0 === k),
        Q = !c && (!y || Y || (V && 1 === k)),
        X = r.useRef(null);
    return s
        ? (0, i.jsx)(N.Z, {})
        : (0, i.jsxs)(m.Gt, {
              value: G,
              children: [
                  (0, i.jsx)(g.Z, {}),
                  V &&
                      !c &&
                      (0, i.jsx)(E.SegmentedControl, {
                          className: l()({
                              [U.segmentedControlNonNitro]: 0 === k,
                              [U.segmentedControlTryItOut]: 1 === k
                          }),
                          options: K,
                          value: k,
                          onChange: (e) => w(e.value),
                          look: 'pill'
                      }),
                  z &&
                      (0, i.jsx)(x.Z, {
                          profilePreview: (0, i.jsx)(M.Z, {
                              user: e,
                              canUsePremiumCustomization: c,
                              onUpsellClick: v.Z,
                              pendingBio: o,
                              ...n
                          }),
                          children: (0, i.jsx)(j.Z, {})
                      }),
                  Q &&
                      (0, i.jsx)(u.$, {
                          onChange: (e) => W(e),
                          threshold: 0.25,
                          active: Y,
                          children: (0, i.jsx)('div', {
                              ref: X,
                              children: (0, i.jsx)(f.Z, { user: e })
                          })
                      }),
                  Y &&
                      !a &&
                      (0, i.jsx)(p.p, {
                          className: U.floatingNitroUpsell,
                          showUpsell: Y && !H,
                          text: B.Z.Messages.PREMIUM_UPSELL_PROFILE_TRY_IT_OUT_UPSELL.format({ onClick: R.openPremiumTryItOutProfileUpsell }),
                          textVariant: 'heading-md/medium',
                          button: (0, i.jsxs)(E.ShinyButton, {
                              className: U.floatingNitroButton,
                              innerClassName: U.floatingNitroButtonInner,
                              onClick: () => {
                                  var e;
                                  return null == X ? void 0 : null === (e = X.current) || void 0 === e ? void 0 : e.scrollIntoView({ behavior: 'smooth' });
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
