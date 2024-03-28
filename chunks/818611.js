"use strict";
a.r(t), a("627341");
var s = a("735250"),
  r = a("470079"),
  l = a("803997"),
  i = a.n(l),
  n = a("278074"),
  o = a("831209"),
  u = a("399606"),
  c = a("481060"),
  d = a("727637"),
  f = a("597688"),
  h = a("884697"),
  m = a("295177"),
  g = a("126900"),
  p = a("466111"),
  C = a("783014"),
  v = a("242411"),
  S = a("26290"),
  E = a("74538"),
  A = a("864106"),
  x = a("439959"),
  I = a("125988"),
  _ = a("689938"),
  P = a("566253");
let b = () => 80,
  T = e => {
    let {
      children: t,
      className: a,
      onSelect: r,
      isSelected: l = !1,
      ...n
    } = e;
    return (0, s.jsx)(c.Clickable, {
      className: i()(P.decorationGridItem, l ? P.selected : void 0, a),
      ...n,
      onClick: r,
      children: t
    })
  },
  N = e => {
    let {
      user: t,
      avatarDecoration: a,
      innerRef: l,
      section: i,
      isSelected: n = !1,
      ...c
    } = e, g = (0, u.useStateFromStores)([f.default], () => {
      let e = f.default.getProduct(a.skuId);
      return (0, h.isPremiumCollectiblesProduct)(e)
    }), C = (0, m.default)(a, n), A = E.default.canUseCollectibles(t), b = i === x.Section.PREMIUM_PURCHASE && !A, N = r.useRef(null), R = (0, d.default)(null != l ? l : N), {
      avatarDecorationSrc: w
    } = (0, I.default)({
      user: t,
      avatarDecorationOverride: a,
      size: 80,
      animateOnHover: !R
    });
    return (0, s.jsxs)(T, {
      className: b ? P.decorationGridItemChurned : void 0,
      innerRef: null != l ? l : N,
      isSelected: n,
      ...c,
      children: [(0, s.jsx)("img", {
        className: P.presetDecorationImg,
        src: w,
        alt: a.label
      }), i === x.Section.PURCHASE || i === x.Section.PREMIUM_PURCHASE && A ? null : C ? (0, s.jsx)(S.PremiumBadge, {
        className: P.newBadge,
        text: (0, s.jsxs)("div", {
          className: P.newBadgeText,
          children: [(0, s.jsx)(v.default, {
            width: 12,
            height: 12
          }), _.default.Messages.NEW]
        })
      }) : (0, s.jsx)(S.IconBadge, {
        icon: g ? () => (0, s.jsx)(p.default, {
          width: 14,
          height: 14
        }) : () => (0, s.jsx)(v.default, {
          width: 12,
          height: 12
        }),
        color: o.default.BACKGROUND_ACCENT,
        className: P.iconBadge
      })]
    })
  };
t.default = e => {
  let {
    user: t,
    guild: a,
    pendingAvatarDecoration: r,
    selectedAvatarDecorationRef: l,
    onSelect: i,
    onOpenShop: o
  } = e, u = (0, x.default)();
  return (0, s.jsx)(c.MasonryList, {
    fade: !0,
    className: P.list,
    columns: 3,
    sections: u.map(e => {
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
    renderItem: (e, d, f, h) => {
      let {
        section: m,
        items: p
      } = u[e];
      return (0, n.match)(p[d]).with(x.NONE_ITEM, () => (0, s.jsxs)(T, {
        style: {
          ...f
        },
        isSelected: null === r,
        onSelect: () => i(null),
        children: [(0, s.jsx)(C.default, {
          className: P.notAllowedIcon
        }), (0, s.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: (0, A.hasGlobalDefaultAvatarDecoration)(t, a) ? _.default.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION : _.default.Messages.NONE
        })]
      }, h)).with(x.SHOP_ITEM, () => (0, s.jsxs)(T, {
        style: f,
        onSelect: o,
        children: [(0, s.jsx)(g.default, {
          className: P.shopIcon
        }), (0, s.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: _.default.Messages.COLLECTIBLES_SHOP
        })]
      }, h)).otherwise(e => {
        let a = (null == r ? void 0 : r.id) === e.id;
        return (0, s.jsx)(N, {
          style: {
            ...f
          },
          user: t,
          avatarDecoration: e,
          section: m,
          innerRef: a ? l : void 0,
          isSelected: a,
          onSelect: () => i(e)
        }, h)
      })
    },
    renderSection: e => {
      let {
        header: t
      } = u[e];
      return (0, s.jsx)("div", {
        className: P.headings,
        children: (0, s.jsx)(c.HeadingLevel, {
          forceLevel: 5,
          children: (0, s.jsx)(c.Heading, {
            variant: "eyebrow",
            color: "header-secondary",
            children: t
          })
        })
      })
    },
    getSectionHeight: e => u[e].height,
    getItemKey: (e, t) => u[e].items[t].id,
    getItemHeight: b
  })
}