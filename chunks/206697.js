n.d(t, {
    w: function () {
        return C;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(657707),
    l = n(793030),
    r = n(481060),
    o = n(100527),
    c = n(436774),
    d = n(197115),
    u = n(74538),
    _ = n(175006),
    E = n(981631),
    I = n(474936),
    m = n(689938),
    T = n(169458),
    N = n(492764),
    h = n(235810);
function C() {
    return (0, _.Z)()
        ? (0, i.jsx)('div', {
              className: T.emptyContainer,
              children: (0, i.jsxs)('div', {
                  className: T.emptyInner,
                  children: [
                      (0, i.jsx)('img', {
                          src: N,
                          className: T.image,
                          alt: ''
                      }),
                      (0, i.jsx)(r.Heading, {
                          className: T.header,
                          variant: 'heading-xl/semibold',
                          color: 'text-normal',
                          children: m.Z.Messages.FOR_LATER_EMPTY_ALL_TITLE
                      }),
                      (0, i.jsx)(l.xv, {
                          variant: 'text-md/medium',
                          color: 'text-muted',
                          children: m.Z.Messages.FOR_LATER_EMPTY_ALL_BODY_WEB
                      })
                  ]
              })
          })
        : (0, i.jsxs)('div', {
              className: T.emptyContainer,
              children: [
                  (0, i.jsxs)('div', {
                      className: T.emptyInner,
                      children: [
                          (0, i.jsx)('img', {
                              src: h,
                              className: T.image,
                              alt: ''
                          }),
                          (0, i.jsx)(r.Heading, {
                              className: T.header,
                              variant: 'heading-xl/semibold',
                              color: 'text-normal',
                              children: m.Z.Messages.FOR_LATER_UPSELL_MODAL_TITLE
                          }),
                          (0, i.jsx)(l.xv, {
                              variant: 'text-md/medium',
                              color: 'text-muted',
                              children: m.Z.Messages.FOR_LATER_UPSELL_MODAL_BODY
                          })
                      ]
                  }),
                  (0, i.jsx)(p, {})
              ]
          });
}
function p() {
    let e = (0, u.Px)(I.p9.TIER_2),
        t = a.useCallback(
            () =>
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await n.e('34906').then(n.bind(n, 639565));
                    return (t) =>
                        (0, i.jsx)(e, {
                            source: o.Z.FOR_LATER_POPOUT,
                            ...t
                        });
                }),
            []
        ),
        _ = m.Z.Messages.FOR_LATER_PREMIUM_UPSELL.format({
            nitroTierName: e,
            onClick: t
        });
    return (0, i.jsxs)('div', {
        className: T.upsellContainer,
        children: [
            (0, i.jsx)(s.SrA, {
                size: 'md',
                color: c.JX.PREMIUM_TIER_2
            }),
            (0, i.jsx)(l.xv, {
                variant: 'text-xs/medium',
                color: 'header-primary',
                className: T.upsellText,
                children: _
            }),
            (0, i.jsx)(d.Z, {
                className: T.upsellButton,
                size: r.ButtonSizes.TINY,
                shinyButtonClassName: T.upsellButton,
                subscriptionTier: I.Si.TIER_2,
                premiumModalAnalyticsLocation: { section: E.jXE.FOR_LATER_POPOUT_UPSELL }
            })
        ]
    });
}
