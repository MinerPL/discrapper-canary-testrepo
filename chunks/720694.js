"use strict";
n.r(t), n.d(t, {
  CollectiblesShopButton: function() {
    return M
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("974667"),
  i = n("446674"),
  r = n("77078"),
  o = n("430568"),
  u = n("570687"),
  d = n("206230"),
  c = n("812204"),
  f = n("685665"),
  E = n("897263"),
  h = n("20606"),
  _ = n("867805"),
  C = n("743826"),
  S = n("956089"),
  I = n("21526"),
  m = n("833514"),
  p = n("819852"),
  T = n("49111"),
  g = n("782340"),
  A = n("100172");
let N = e => {
    let {
      color: t
    } = e;
    return (0, a.jsx)(S.TextBadge, {
      className: A.newBadge,
      color: null != t ? t : h.default.STATUS_DANGER_BACKGROUND,
      text: g.default.Messages.NEW
    })
  },
  R = e => {
    let {
      selected: t,
      locationState: n,
      onMouseEnter: s,
      onButtonClick: i,
      children: r,
      ...o
    } = e, d = (0, l.useListItem)("shop"), E = c.default.HOME_PAGE_SHOP_TAB, {
      analyticsLocations: h
    } = (0, f.default)(E);
    return (0, a.jsx)(u.LinkButton, {
      selected: t,
      route: T.Routes.COLLECTIBLES_SHOP,
      icon: C.default,
      text: g.default.Messages.COLLECTIBLES_SHOP,
      locationState: n,
      ...d,
      ...o,
      onMouseEnter: s,
      onClick: () => {
        (0, I.openCollectiblesShop)({
          openInLayer: !1,
          analyticsSource: E,
          analyticsLocations: h
        }), null == i || i()
      },
      children: r
    })
  },
  O = s.memo(function(e) {
    let {
      displayOptions: t,
      assetId: n
    } = e, s = (0, i.useStateFromStores)([d.default], () => d.default.useReducedMotion), l = null != n ? (0, E.default)(n, r.AvatarSizes.SIZE_80, !s) : void 0;
    return (0, a.jsxs)("div", {
      className: A.shopMarketingTooltipContent,
      children: [(0, a.jsx)("div", {
        className: A.avatarContainer,
        children: (0, a.jsx)(r.Avatar, {
          className: A.avatar,
          src: t.imageSrc,
          avatarDecoration: l,
          size: r.AvatarSizes.SIZE_80,
          "aria-hidden": !0
        })
      }), (0, a.jsxs)("div", {
        className: A.shopMarketingTooltipText,
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-sm/bold",
          children: t.title()
        }), null != t.body && (0, a.jsx)(r.Text, {
          variant: "text-xs/normal",
          className: A.marketingBadgeTooltipContent,
          children: t.body()
        })]
      })]
    })
  }),
  v = e => {
    let {
      selected: t,
      locationState: n,
      onButtonClick: l,
      displayOptions: i
    } = e, [o, u] = s.useState(0), d = () => {
      u((o + 1) % i.assetIds.length)
    };
    return (0, a.jsx)(r.Tooltip, {
      text: (0, a.jsx)(O, {
        displayOptions: i,
        assetId: i.assetIds[o]
      }),
      tooltipClassName: A.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      allowOverflow: !0,
      hideOnClick: !1,
      "aria-label": i.title(),
      children: e => (0, a.jsx)(R, {
        selected: t,
        locationState: n,
        ...e,
        onMouseEnter: () => {
          var t;
          d(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
        },
        onButtonClick: l,
        children: (0, a.jsx)(N, {
          color: i.badgeColor
        })
      })
    })
  },
  L = e => {
    let {
      selected: t,
      locationState: n,
      onButtonClick: l,
      displayOptions: i
    } = e, u = s.useMemo(() => {
      var e;
      let t = null != i.emojiName ? null === (e = _.default.getByName(i.emojiName)) || void 0 === e ? void 0 : e.surrogates : null;
      return (0, a.jsxs)(r.Text, {
        variant: "text-sm/medium",
        className: A.marketingBadgeTooltipContent,
        children: [null != t && (0, a.jsx)(o.default, {
          emojiName: t
        }), i.title()]
      })
    }, [i]);
    return (0, a.jsx)(r.Tooltip, {
      text: u,
      tooltipClassName: A.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      hideOnClick: !1,
      "aria-label": i.title(),
      children: e => (0, a.jsx)(R, {
        selected: t,
        locationState: n,
        ...e,
        onButtonClick: l,
        children: (0, a.jsx)(N, {
          color: i.badgeColor
        })
      })
    })
  },
  M = e => {
    let {
      selected: t,
      locationState: n
    } = e, {
      collectiblesShopTabNewBadgeDisplayOptions: s,
      dismissCollectiblesShopTabNewBadge: l
    } = (0, m.default)();
    if (null != s) switch (s.type) {
      case p.CollectiblesMarketingVariant.TOOLTIP:
        return (0, a.jsx)(L, {
          selected: t,
          locationState: n,
          onButtonClick: l,
          displayOptions: s
        });
      case p.CollectiblesMarketingVariant.COACHTIP:
        return (0, a.jsx)(v, {
          selected: t,
          locationState: n,
          onButtonClick: l,
          displayOptions: s
        })
    }
    return (0, a.jsx)(R, {
      selected: t,
      locationState: n
    })
  }