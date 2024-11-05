var r = n(200651),
    a = n(192379),
    s = n(481060),
    i = n(727637),
    l = n(906732),
    o = n(241553),
    c = n(333867),
    d = n(884697),
    u = n(474936),
    m = n(231338),
    f = n(388032),
    p = n(65297);
let h = {
    dark: [
        {
            box: '#FFF19E',
            ribbon: '#FF484B'
        },
        {
            box: '#17B5E2',
            ribbon: '#FFFFFF'
        },
        {
            box: '#FFE1A6',
            ribbon: '#C29CFF'
        },
        {
            box: '#60DA81',
            ribbon: '#FFF597'
        },
        {
            box: '#E4578A',
            ribbon: '#BEC4FF'
        },
        {
            box: '#AFE0FC',
            ribbon: '#FF9356'
        },
        {
            box: '#DB6D6D',
            ribbon: '#67DA9C'
        }
    ],
    light: [
        {
            box: '#FFF19E',
            ribbon: '#FF484B'
        },
        {
            box: '#025D90',
            ribbon: '#70FFF8'
        },
        {
            box: '#C29CFF',
            ribbon: '#255FA3'
        },
        {
            box: '#6AC082',
            ribbon: '#DED052'
        },
        {
            box: '#AC448B',
            ribbon: '#4845B8'
        },
        {
            box: '#175B82',
            ribbon: '#F9D249'
        },
        {
            box: '#B54141',
            ribbon: '#026530'
        }
    ]
};
t.Z = (e) => {
    let { product: t, returnRef: n, onSuccess: g, tooltipDelay: C, isGiftEasterEggEnabled: b, disableCustomColor: x = !1 } = e,
        { analyticsLocations: v } = (0, l.ZP)(),
        _ = a.useRef(null),
        k = (0, i.Z)(_),
        j = x ? m.BR.DARK : m.BR.LIGHT;
    return (0, d.x6)(t)
        ? null
        : (0, r.jsx)(s.Tooltip, {
              text: f.intl.string(f.t['JCFN//']),
              delay: C,
              children: (e) =>
                  (0, r.jsx)(s.Button, {
                      ...e,
                      buttonRef: _,
                      className: p.giftButton,
                      color: x ? s.ButtonColors.BRAND : s.ButtonColors.CUSTOM,
                      look: s.Button.Looks.FILLED,
                      size: s.ButtonSizes.ICON,
                      innerClassName: p.giftButtonInner,
                      'aria-label': f.intl.string(f.t.PEjaCw),
                      onClick: (e) => {
                          e.stopPropagation(),
                              (0, c.Z)({
                                  skuId: t.skuId,
                                  isGift: !0,
                                  giftingOrigin: u.Wt.SHOP_PAGE,
                                  analyticsLocations: v,
                                  returnRef: n,
                                  onClose:
                                      null != g
                                          ? (e) => {
                                                e && g();
                                            }
                                          : void 0
                              });
                      },
                      children: b
                          ? (0, r.jsx)(o.e, {
                                hovered: k,
                                isContentDismissed: !0,
                                themeOverride: j,
                                boxColors: h
                            })
                          : (0, r.jsx)(s.GiftIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                  })
          });
};
