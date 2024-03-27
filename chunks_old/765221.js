"use strict";
r.r(t), r.d(t, {
  default: function() {
    return y
  }
}), r("222007"), r("794252");
var a = r("37983"),
  n = r("884691"),
  s = r("414456"),
  u = r.n(s),
  i = r("506838"),
  l = r("171210"),
  o = r("65597"),
  c = r("77078"),
  d = r("252744"),
  f = r("853987"),
  m = r("426497"),
  S = r("491232"),
  p = r("743826"),
  E = r("216422"),
  h = r("468759"),
  _ = r("600785"),
  C = r("956089"),
  I = r("719923"),
  g = r("234251"),
  T = r("714270"),
  v = r("688318"),
  A = r("782340"),
  P = r("585872");
let N = () => 80,
  L = e => {
    let {
      children: t,
      className: r,
      onSelect: n,
      isSelected: s = !1,
      ...i
    } = e;
    return (0, a.jsx)(c.Clickable, {
      className: u(P.decorationGridItem, s ? P.selected : void 0, r),
      ...i,
      onClick: n,
      children: t
    })
  },
  R = e => {
    let {
      user: t,
      avatarDecoration: r,
      innerRef: s,
      section: u,
      isSelected: i = !1,
      ...c
    } = e, p = (0, o.useStateFromStores)([f.default], () => {
      let e = f.default.getProduct(r.skuId);
      return (0, S.isPremiumCollectiblesProduct)(e)
    }), h = (0, o.useStateFromStores)([m.default], () => m.default.isItemViewed(r)), g = I.default.canUseCollectibles(t), N = u === T.Section.PREMIUM_PURCHASE && !g, [R, y] = n.useState(i);
    n.useEffect(() => {
      i && y(!0)
    }, [i]);
    let b = n.useRef(null),
      x = (0, d.default)(null != s ? s : b),
      {
        avatarDecorationSrc: M
      } = (0, v.default)({
        user: t,
        avatarDecorationOverride: r,
        size: 80,
        animateOnHover: !x
      });
    return (0, a.jsxs)(L, {
      className: N ? P.decorationGridItemChurned : void 0,
      innerRef: null != s ? s : b,
      isSelected: i,
      ...c,
      children: [(0, a.jsx)("img", {
        className: P.presetDecorationImg,
        src: M,
        alt: r.label
      }), (() => {
        let e = u === T.Section.PURCHASE || u === T.Section.PREMIUM_PURCHASE && g;
        if (e) return null;
        let t = !h && !i && !R;
        return t ? (0, a.jsx)(C.PremiumBadge, {
          className: P.newBadge,
          text: (0, a.jsxs)("div", {
            className: P.newBadgeText,
            children: [(0, a.jsx)(_.default, {
              width: 12,
              height: 12
            }), A.default.Messages.NEW]
          })
        }) : (0, a.jsx)(C.IconBadge, {
          icon: p ? () => (0, a.jsx)(E.default, {
            width: 14,
            height: 14
          }) : () => (0, a.jsx)(_.default, {
            width: 12,
            height: 12
          }),
          color: l.default.BACKGROUND_ACCENT,
          className: P.iconBadge
        })
      })()]
    })
  };
var y = e => {
  let {
    user: t,
    guild: r,
    pendingAvatarDecoration: n,
    selectedAvatarDecorationRef: s,
    onSelect: u,
    onOpenShop: l
  } = e, o = (0, T.default)();
  return (0, a.jsx)(c.MasonryList, {
    fade: !0,
    className: P.list,
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
    renderItem: (e, d, f, m) => {
      let {
        section: S,
        items: E
      } = o[e];
      return (0, i.match)(E[d]).with(T.NONE_ITEM, () => (0, a.jsxs)(L, {
        style: {
          ...f
        },
        isSelected: null === n,
        onSelect: () => u(null),
        children: [(0, a.jsx)(h.default, {
          className: P.notAllowedIcon
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: (0, g.hasGlobalDefaultAvatarDecoration)(t, r) ? A.default.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION : A.default.Messages.NONE
        })]
      }, m)).with(T.SHOP_ITEM, () => (0, a.jsxs)(L, {
        style: f,
        onSelect: l,
        children: [(0, a.jsx)(p.default, {
          className: P.shopIcon
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: A.default.Messages.COLLECTIBLES_SHOP
        })]
      }, m)).otherwise(e => {
        let r = (null == n ? void 0 : n.id) === e.id;
        return (0, a.jsx)(R, {
          style: {
            ...f
          },
          user: t,
          avatarDecoration: e,
          section: S,
          innerRef: r ? s : void 0,
          isSelected: r,
          onSelect: () => u(e)
        }, m)
      })
    },
    renderSection: e => {
      let {
        header: t
      } = o[e];
      return (0, a.jsx)("div", {
        className: P.headings,
        children: (0, a.jsx)(c.HeadingLevel, {
          forceLevel: 5,
          children: (0, a.jsx)(c.Heading, {
            variant: "eyebrow",
            color: "header-secondary",
            children: t
          })
        })
      })
    },
    getSectionHeight: e => o[e].height,
    getItemKey: (e, t) => o[e].items[t].id,
    getItemHeight: N
  })
}