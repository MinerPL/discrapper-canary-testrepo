"use strict";
n.r(t), n.d(t, {
  CollectiblesShopButton: function() {
    return x
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("924826"),
  o = n("442837"),
  u = n("780384"),
  d = n("481060"),
  c = n("596454"),
  f = n("515753"),
  E = n("410030"),
  h = n("607070"),
  _ = n("100527"),
  C = n("906732"),
  m = n("821982"),
  S = n("377171"),
  I = n("633302"),
  p = n("126900"),
  T = n("26290"),
  g = n("153066"),
  A = n("335131"),
  N = n("141594"),
  v = n("302800"),
  O = n("981631"),
  R = n("689938"),
  L = n("592761");
let P = e => {
    let {
      color: t
    } = e;
    return (0, a.jsx)(T.TextBadge, {
      className: L.newBadge,
      color: null != t ? t : S.default.STATUS_DANGER_BACKGROUND,
      text: R.default.Messages.NEW
    })
  },
  M = e => {
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
      text: R.default.Messages.COLLECTIBLES_SHOP,
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
    } = e, s = (0, o.useStateFromStores)([h.default], () => h.default.useReducedMotion), l = null != n ? (0, m.default)(n, d.AvatarSizes.SIZE_80, !s) : void 0;
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
    } = e, [o, c] = s.useState(0), [f, h] = s.useState(!1), _ = (0, E.default)(), C = r.entrypointDecorationAssets, m = s.useCallback(e => {
      c(e => (e + 1) % r.assetIds.length), h(!0), null == e || e()
    }, [r.assetIds]), S = s.useCallback(e => {
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
      children: e => (0, a.jsxs)(M, {
        className: null != r.entryPointClassName ? (0, g.getClass)(L, r.entryPointClassName) : void 0,
        selected: t,
        locationState: n,
        ...e,
        onMouseEnter: () => m(e.onMouseEnter),
        onMouseLeave: () => S(e.onMouseLeave),
        onButtonClick: l,
        children: [null != C && (0, a.jsx)("img", {
          src: (0, u.isThemeDark)(_) ? C.srcDark : C.srcLight,
          className: i()(L.marketingButtonImage, {
            [L.marketingButtonImageHovered]: f
          }),
          alt: "",
          "aria-hidden": !0
        }), (0, a.jsx)(P, {
          color: r.badgeColor
        })]
      })
    })
  },
  b = e => {
    let {
      selected: t,
      locationState: n,
      onButtonClick: l,
      displayOptions: i
    } = e, r = s.useMemo(() => {
      var e;
      let t = null != i.emojiName ? null === (e = I.default.getByName(i.emojiName)) || void 0 === e ? void 0 : e.surrogates : null;
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
      children: e => (0, a.jsx)(M, {
        selected: t,
        locationState: n,
        ...e,
        onButtonClick: l,
        children: (0, a.jsx)(P, {
          color: i.badgeColor
        })
      })
    })
  },
  x = e => {
    let {
      selected: t,
      locationState: n
    } = e, {
      collectiblesShopTabNewBadgeDisplayOptions: s,
      dismissCollectiblesShopTabNewBadge: l
    } = (0, N.default)();
    if (null != s) switch (s.type) {
      case v.CollectiblesMarketingVariant.TOOLTIP:
        return (0, a.jsx)(b, {
          selected: t,
          locationState: n,
          onButtonClick: l,
          displayOptions: s
        });
      case v.CollectiblesMarketingVariant.COACHTIP:
        return (0, a.jsx)(D, {
          selected: t,
          locationState: n,
          onButtonClick: l,
          displayOptions: s
        })
    }
    return (0, a.jsx)(M, {
      selected: t,
      locationState: n
    })
  }