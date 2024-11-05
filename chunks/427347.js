n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var r = n(704215),
    a = n(481060),
    l = n(230711),
    s = n(100527),
    o = n(906732),
    c = n(605236),
    d = n(314910),
    u = n(197344),
    h = n(226625),
    m = n(981631),
    p = n(921944),
    g = n(388032),
    f = n(338634);
function _() {
    let e = u.Z.useIsEligible(),
        t = (0, c.wE)(r.z.HOLIDAY_COACHMARK_HALLOWEEN_2024),
        { analyticsLocations: n } = (0, o.ZP)(s.Z.HOLIDAY_COACHMARK),
        _ = (e) => {
            (0, c.EW)(r.z.HOLIDAY_COACHMARK_HALLOWEEN_2024, { dismissAction: e });
        },
        E = () => {
            l.Z.open(m.oAB.NOTIFICATIONS, null, { analyticsLocations: n }), _(p.L.SECONDARY);
        };
    return e && !t
        ? (0, i.jsx)(d.ZP, {
              children: (0, i.jsxs)('div', {
                  className: f.wrapper,
                  children: [
                      (0, i.jsxs)('div', {
                          className: f.backgroundWrapper,
                          children: [
                              (0, i.jsx)(h.Z, {
                                  className: f.backgroundImage,
                                  pageMultiplier: 5
                              }),
                              (0, i.jsx)('div', { className: f.backgroundOverlay })
                          ]
                      }),
                      (0, i.jsx)('div', { className: f.heroImage }),
                      (0, i.jsxs)('div', {
                          className: f.content,
                          children: [
                              (0, i.jsxs)('div', {
                                  children: [
                                      (0, i.jsx)(a.Heading, {
                                          variant: 'heading-md/bold',
                                          color: void 0,
                                          className: f.specialText,
                                          children: g.intl.string(g.t.zUhr3N)
                                      }),
                                      (0, i.jsx)(a.Text, {
                                          variant: 'text-xs/normal',
                                          color: 'always-white',
                                          children: g.intl.format(g.t.Xw2XUV, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      a.Clickable,
                                                      {
                                                          tag: 'span',
                                                          className: f.specialTextLink,
                                                          onClick: E,
                                                          children: e
                                                      },
                                                      t
                                                  )
                                          })
                                      })
                                  ]
                              }),
                              (0, i.jsx)(a.Clickable, {
                                  className: f.closeClickable,
                                  onClick: () => _(p.L.USER_DISMISS),
                                  children: (0, i.jsx)(a.XSmallIcon, {
                                      color: 'currentColor',
                                      size: 'xs'
                                  })
                              })
                          ]
                      })
                  ]
              })
          })
        : null;
}
