r.d(t, {
    Z: function () {
        return O;
    },
    n: function () {
        return L;
    }
});
var a = r(735250),
    n = r(470079),
    s = r(120356),
    i = r.n(s),
    o = r(180650),
    l = r(399606),
    c = r(481060),
    d = r(906732),
    u = r(963249),
    f = r(594174),
    p = r(754347),
    m = r(74538),
    C = r(884697),
    _ = r(624377),
    g = r(141011),
    h = r(813083),
    b = r(67938),
    E = r(372654),
    I = r(215023),
    x = r(474936),
    T = r(689938),
    v = r(462972),
    S = r(275001);
let L = (0, C.IC)(96),
    N = (e) => {
        let { category: t } = e,
            { analyticsLocations: r } = (0, d.ZP)(),
            s = n.useRef(null),
            i = (0, l.e7)([f.default], () => f.default.getCurrentUser());
        return m.ZP.canUseCollectibles(i)
            ? (0, a.jsx)(a.Fragment, { children: t.summary })
            : (0, a.jsx)(a.Fragment, {
                  children: T.Z.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
                      getPremium: (e) =>
                          (0, a.jsx)(c.Clickable, {
                              innerRef: s,
                              className: v.getPremiumHook,
                              onClick: () => {
                                  (0, u.Z)({
                                      subscriptionTier: x.Si.TIER_2,
                                      analyticsLocations: r,
                                      returnRef: s
                                  });
                              },
                              tag: 'span',
                              children: (0, a.jsx)(c.Text, {
                                  variant: 'text-md/normal',
                                  color: 'always-white',
                                  tag: 'span',
                                  children: e
                              })
                          })
                  })
              });
    };
function O(e) {
    var t, r, n, s;
    let { category: l, className: d, hideLimitedTimeBadge: u = !1 } = e,
        { backgroundColors: f } = (0, _.Z)(l.styles),
        m = !!(null === (t = I.Ve[l.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText);
    return l.skuId === o.T.TIDE
        ? (0, a.jsx)(b.G, { category: l })
        : (0, a.jsxs)(g.Z, {
              asset: l.banner,
              className: i()(v.shopBanner, d),
              style:
                  null != f
                      ? {
                            background: ''.concat((0, E.nH)(f), ' border-box border-box'),
                            outlineColor: f.border.toHslString()
                        }
                      : void 0,
              children: [
                  l.skuId === o.T.BAND &&
                      (0, a.jsx)('img', {
                          src: S,
                          alt: '',
                          className: v.animationAsset
                      }),
                  (null === (r = I.Ve[l.skuId]) || void 0 === r ? void 0 : r.addAttributionLogo)
                      ? (0, a.jsxs)('div', {
                            className: v.discordLogo,
                            children: [
                                (0, a.jsx)(c.ClydeIcon, {
                                    size: 'custom',
                                    width: 28,
                                    height: 28,
                                    color: 'currentColor',
                                    className: v.discordIcon
                                }),
                                (0, a.jsx)(p.Z, { className: v.discordWordmark })
                            ]
                        })
                      : (0, a.jsx)(c.Spacer, { size: 28 }),
                  (null === (n = I.Ve[l.skuId]) || void 0 === n ? void 0 : n.addLogo)
                      ? (0, a.jsx)('img', {
                            className: v.categoryLogo,
                            src: (0, C.uV)(l.logo, { size: L }),
                            alt: l.name,
                            style: { maxWidth: null === (s = I.Ve[l.skuId]) || void 0 === s ? void 0 : s.logoMaxWidth }
                        })
                      : (0, a.jsx)(c.Spacer, { size: 96 }),
                  (0, a.jsx)(c.Text, {
                      className: i()(v.summary, { [v.blackSummary]: m }),
                      variant: 'text-md/normal',
                      children: l.skuId === o.T.DISXCORE ? (0, a.jsx)(N, { category: l }) : l.summary
                  }),
                  !u &&
                      (0, a.jsx)(h.Z, {
                          category: l,
                          className: v.limitedTimeBadge,
                          display: 'banner'
                      })
              ]
          });
}
