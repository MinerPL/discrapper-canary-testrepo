"use strict";
n.r(t), n.d(t, {
  CollectiblesShopButton: function() {
    return b
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("974667"),
  o = n("446674"),
  u = n("819855"),
  d = n("77078"),
  c = n("430568"),
  f = n("570687"),
  E = n("841098"),
  h = n("206230"),
  _ = n("812204"),
  C = n("685665"),
  S = n("897263"),
  I = n("20606"),
  m = n("867805"),
  p = n("743826"),
  T = n("956089"),
  g = n("474293"),
  A = n("21526"),
  N = n("833514"),
  R = n("819852"),
  O = n("49111"),
  v = n("782340"),
  L = n("100172");
let M = e => {
    let {
      color: t
    } = e;
    return (0, a.jsx)(T.TextBadge, {
      className: L.newBadge,
      color: null != t ? t : I.default.STATUS_DANGER_BACKGROUND,
      text: v.default.Messages.NEW
    })
  },
  P = e => {
    let {
      selected: t,
      locationState: n,
      onMouseEnter: s,
      onMouseLeave: l,
      onButtonClick: i,
      children: o,
      ...u
    } = e, d = (0, r.useListItem)("shop"), c = _.default.HOME_PAGE_SHOP_TAB, {
      analyticsLocations: E
    } = (0, C.default)(c);
    return (0, a.jsx)(f.LinkButton, {
      selected: t,
      route: O.Routes.COLLECTIBLES_SHOP,
      icon: p.default,
      text: v.default.Messages.COLLECTIBLES_SHOP,
      locationState: n,
      ...d,
      ...u,
      onMouseEnter: s,
      onMouseLeave: l,
      onClick: () => {
        (0, A.openCollectiblesShop)({
          openInLayer: !1,
          analyticsSource: c,
          analyticsLocations: E
        }), null == i || i()
      },
      children: o
    })
  },
  y = s.memo(function(e) {
    let {
      displayOptions: t,
      assetId: n
    } = e, s = (0, o.useStateFromStores)([h.default], () => h.default.useReducedMotion), l = null != n ? (0, S.default)(n, d.AvatarSizes.SIZE_80, !s) : void 0;
    return (0, a.jsxs)("div", {
      className: L.shopMarketingTooltipContent,
      children: [(0, a.jsx)("div", {
        className: L.avatarContainer,
        children: (0, a.jsx)(d.Avatar, {
          className: L.avatar,
          src: t.imageSrc,
          avatarDecoration: l,
          size: d.AvatarSizes.SIZE_80,
          "aria-hidden": !0
        })
      }), (0, a.jsxs)("div", {
        className: L.shopMarketingTooltipText,
        children: [(0, a.jsx)(d.Heading, {
          variant: "heading-sm/bold",
          children: t.title()
        }), null != t.body && (0, a.jsx)(d.Text, {
          variant: "text-xs/normal",
          className: L.marketingBadgeTooltipContent,
          children: t.body()
        })]
      })]
    })
  }),
  D = e => {
    let {
      selected: t,
      locationState: n,
      onButtonClick: l,
      displayOptions: r
    } = e, [o, c] = s.useState(0), [f, h] = s.useState(!1), _ = (0, E.default)(), C = r.entrypointDecorationAssets, S = s.useCallback(e => {
      c(e => (e + 1) % r.assetIds.length), h(!0), null == e || e()
    }, [r.assetIds]), I = s.useCallback(e => {
      h(!1), null == e || e()
    }, []);
    return (0, a.jsx)(d.Tooltip, {
      text: (0, a.jsx)(y, {
        displayOptions: r,
        assetId: r.assetIds[o]
      }),
      tooltipClassName: L.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      allowOverflow: !0,
      hideOnClick: !1,
      "aria-label": r.title(),
      children: e => (0, a.jsxs)(P, {
        className: null != r.entryPointClassName ? (0, g.getClass)(L, r.entryPointClassName) : void 0,
        selected: t,
        locationState: n,
        ...e,
        onMouseEnter: () => S(e.onMouseEnter),
        onMouseLeave: () => I(e.onMouseLeave),
        onButtonClick: l,
        children: [null != C && (0, a.jsx)("img", {
          src: (0, u.isThemeDark)(_) ? C.srcDark : C.srcLight,
          className: i(L.marketingButtonImage, {
            [L.marketingButtonImageHovered]: f
          }),
          alt: "",
          "aria-hidden": !0
        }), (0, a.jsx)(M, {
          color: r.badgeColor
        })]
      })
    })
  },
  x = e => {
    let {
      selected: t,
      locationState: n,
      onButtonClick: l,
      displayOptions: i
    } = e, r = s.useMemo(() => {
      var e;
      let t = null != i.emojiName ? null === (e = m.default.getByName(i.emojiName)) || void 0 === e ? void 0 : e.surrogates : null;
      return (0, a.jsxs)(d.Text, {
        variant: "text-sm/medium",
        className: L.marketingBadgeTooltipContent,
        children: [null != t && (0, a.jsx)(c.default, {
          emojiName: t
        }), i.title()]
      })
    }, [i]);
    return (0, a.jsx)(d.Tooltip, {
      text: r,
      tooltipClassName: L.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      hideOnClick: !1,
      "aria-label": i.title(),
      children: e => (0, a.jsx)(P, {
        selected: t,
        locationState: n,
        ...e,
        onButtonClick: l,
        children: (0, a.jsx)(M, {
          color: i.badgeColor
        })
      })
    })
  },
  b = e => {
    let {
      selected: t,
      locationState: n
    } = e, {
      collectiblesShopTabNewBadgeDisplayOptions: s,
      dismissCollectiblesShopTabNewBadge: l
    } = (0, N.default)();
    if (null != s) switch (s.type) {
      case R.CollectiblesMarketingVariant.TOOLTIP:
        return (0, a.jsx)(x, {
          selected: t,
          locationState: n,
          onButtonClick: l,
          displayOptions: s
        });
      case R.CollectiblesMarketingVariant.COACHTIP:
        return (0, a.jsx)(D, {
          selected: t,
          locationState: n,
          onButtonClick: l,
          displayOptions: s
        })
    }
    return (0, a.jsx)(P, {
      selected: t,
      locationState: n
    })
  }