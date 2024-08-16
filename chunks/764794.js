n(47120);
var r = n(735250),
    i = n(470079),
    a = n(981729),
    s = n(780384),
    o = n(351773),
    l = n(410030),
    u = n(100527),
    c = n(906732),
    d = n(790368),
    _ = n(704440),
    E = n(632583),
    f = n(626135),
    h = n(443603),
    p = n(981631),
    m = n(474936),
    I = n(689938),
    T = n(305489);
t.Z = i.memo(function (e) {
    let { disabled: t, referralsRemaining: n, channel: g, isResending: S } = e,
        { enabled: A } = d.Z.useExperiment({ location: 'ec41f5_1' }, { autoTrackExposure: !0 }),
        N = A ? I.Z.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP.format() : S ? I.Z.Messages.SHARE_NITRO_RESEND_TOOLTIP : I.Z.Messages.SHARE_NITRO_TOOLTIP,
        v = A ? I.Z.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP_UNFORMATTED : null,
        [O, R] = i.useState(!1),
        [C, y] = i.useState(!1),
        D = (0, o.Z)(null, () => y(!1)),
        { analyticsLocations: L } = (0, c.ZP)(u.Z.REFERRAL_TRIALS_COMPOSER_BUTTON),
        b = g.isDM() && void 0 !== g.recipients ? g.recipients[0] : null,
        M = (0, l.ZP)();
    return t
        ? null
        : (0, r.jsxs)('div', {
              ref: D,
              className: T.buttonContainer,
              children: [
                  (0, r.jsx)(_.Z, {
                      shouldShowPopout: C,
                      referralsRemaining: n,
                      channel: g,
                      onClose: () => y(!1),
                      isResending: S
                  }),
                  (0, r.jsx)(a.u, {
                      text: N,
                      shouldShow: !C,
                      'aria-label': null != v ? v : N,
                      children: (e) =>
                          (0, r.jsx)('div', {
                              onMouseEnter: () => {
                                  !C &&
                                      !O &&
                                      (R(!0),
                                      f.default.track(p.rMx.SHARE_NITRO_FLOW_STEPS, {
                                          location_stack: L,
                                          step: m.fz.BADGE_TOOLTIP_VIEWED,
                                          other_user_id: Number(b)
                                      }));
                              },
                              onMouseLeave: () => {
                                  R(!1);
                              },
                              children: (0, r.jsx)(h.Z, {
                                  ...e,
                                  innerClassName: T.button,
                                  isActive: C,
                                  'aria-label': null != v ? v : N,
                                  'aria-haspopup': 'dialog',
                                  onClick: () => {
                                      y((e) => !e),
                                          f.default.track(p.rMx.SHARE_NITRO_FLOW_STEPS, {
                                              location_stack: L,
                                              step: m.fz.BADGE_CLICKED,
                                              other_user_id: Number(b)
                                          });
                                  },
                                  children: (0, r.jsx)(E.Z, {
                                      referralsRemaining: n,
                                      hovered: O,
                                      isResending: S,
                                      shouldShowBirthdayUX: A,
                                      isLightTheme: (0, s.ap)(M)
                                  })
                              })
                          })
                  })
              ]
          });
});
