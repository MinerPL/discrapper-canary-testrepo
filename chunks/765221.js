"use strict";
r.r(t), r.d(t, {
  default: function() {
    return M
  }
}), r("222007"), r("794252");
var n = r("37983"),
  a = r("884691"),
  i = r("414456"),
  s = r.n(i),
  u = r("506838"),
  o = r("171210"),
  l = r("65597"),
  c = r("77078"),
  d = r("252744"),
  f = r("853987"),
  E = r("426497"),
  _ = r("491232"),
  A = r("743826"),
  p = r("216422"),
  I = r("468759"),
  m = r("600785"),
  C = r("956089"),
  T = r("719923"),
  S = r("643070"),
  g = r("688318"),
  N = r("782340"),
  R = r("654353");
let h = () => 80,
  O = e => {
    let {
      children: t,
      className: r,
      onSelect: a,
      isSelected: i = !1,
      ...u
    } = e;
    return (0, n.jsx)(c.Clickable, {
      className: s(R.decorationGridItem, i ? R.selected : void 0, r),
      ...u,
      onClick: a,
      children: t
    })
  },
  v = e => {
    let {
      user: t,
      avatarDecoration: r,
      innerRef: i,
      section: s,
      isSelected: u = !1,
      ...c
    } = e, A = (0, l.default)([f.default], () => {
      let e = f.default.getProduct(r.skuId);
      return (0, _.isPremiumCollectiblesProduct)(e)
    }), I = (0, l.default)([E.default], () => E.default.isItemViewed(r)), h = T.default.canUseCollectibles(t), v = s === S.Section.PREMIUM_PURCHASE && !h, [M, x] = a.useState(u);
    a.useEffect(() => {
      u && x(!0)
    }, [u]);
    let D = a.useRef(null),
      b = (0, d.default)(null != i ? i : D),
      {
        avatarDecorationSrc: P
      } = (0, g.default)({
        user: t,
        avatarDecorationOverride: r,
        size: 80,
        animateOnHover: !b
      });
    return (0, n.jsxs)(O, {
      className: v ? R.decorationGridItemChurned : void 0,
      innerRef: null != i ? i : D,
      isSelected: u,
      ...c,
      children: [(0, n.jsx)("img", {
        className: R.presetDecorationImg,
        src: P,
        alt: r.label
      }), (() => {
        let e = s === S.Section.PURCHASE || s === S.Section.PREMIUM_PURCHASE && h;
        if (e) return null;
        let t = !I && !u && !M;
        return t ? (0, n.jsx)(C.PremiumBadge, {
          className: R.newBadge,
          text: (0, n.jsxs)("div", {
            className: R.newBadgeText,
            children: [(0, n.jsx)(m.default, {
              width: 12,
              height: 12
            }), N.default.Messages.NEW]
          })
        }) : (0, n.jsx)(C.IconBadge, {
          icon: A ? () => (0, n.jsx)(p.default, {
            width: 14,
            height: 14
          }) : () => (0, n.jsx)(m.default, {
            width: 12,
            height: 12
          }),
          color: o.default.BACKGROUND_ACCENT,
          className: R.iconBadge
        })
      })()]
    })
  };
var M = e => {
  let {
    user: t,
    pendingAvatarDecoration: r,
    selectedAvatarDecorationRef: a,
    onSelect: i,
    onOpenShop: s
  } = e, o = (0, S.default)();
  return (0, n.jsx)(c.MasonryList, {
    fade: !0,
    className: R.list,
    columns: 3,
    sections: o.map(e => {
      let {
        items: t
      } = e;
      return t.length
    }),
    sectionGutter: 16,
    itemGutter: 12,
    paddingHorizontal: 12,
    paddingVertical: 0,
    removeEdgeItemGutters: !0,
    renderItem: (e, l, d, f) => {
      let {
        section: E,
        items: _
      } = o[e];
      return (0, u.match)(_[l]).with(S.NONE_ITEM, () => (0, n.jsxs)(O, {
        style: {
          ...d
        },
        isSelected: null === r,
        onSelect: () => i(null),
        children: [(0, n.jsx)(I.default, {
          className: R.notAllowedIcon
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: N.default.Messages.NONE
        })]
      }, f)).with(S.SHOP_ITEM, () => (0, n.jsxs)(O, {
        style: d,
        onSelect: s,
        children: [(0, n.jsx)(A.default, {
          className: R.shopIcon
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: N.default.Messages.COLLECTIBLES_SHOP
        })]
      }, f)).otherwise(e => {
        let s = (null == r ? void 0 : r.id) === e.id;
        return (0, n.jsx)(v, {
          style: {
            ...d
          },
          user: t,
          avatarDecoration: e,
          section: E,
          innerRef: s ? a : void 0,
          isSelected: s,
          onSelect: () => i(e)
        }, f)
      })
    },
    renderSection: e => {
      let {
        header: t
      } = o[e];
      return (0, n.jsx)("div", {
        className: R.headings,
        children: (0, n.jsx)(c.HeadingLevel, {
          forceLevel: 5,
          children: (0, n.jsx)(c.Heading, {
            variant: "eyebrow",
            color: "header-secondary",
            children: t
          })
        })
      })
    },
    getSectionHeight: e => o[e].height,
    getItemKey: (e, t) => o[e].items[t].id,
    getItemHeight: h
  })
}