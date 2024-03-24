"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("222007"), n("794252");
var r = n("37983"),
  i = n("884691"),
  s = n("414456"),
  l = n.n(s),
  a = n("506838"),
  o = n("171210"),
  u = n("65597"),
  c = n("77078"),
  d = n("54239"),
  f = n("853987"),
  h = n("426497"),
  E = n("491232"),
  v = n("743826"),
  m = n("216422"),
  C = n("468759"),
  p = n("600785"),
  S = n("956089"),
  g = n("719923"),
  _ = n("845962"),
  I = n("831308"),
  T = n("49111"),
  N = n("782340"),
  A = n("971864"),
  x = n("513002");
let P = () => 80,
  R = e => {
    let {
      children: t,
      className: n,
      isSelected: i = !1,
      ...s
    } = e;
    return (0, r.jsx)(c.Clickable, {
      className: l(A.effectGridItem, n, {
        [A.selected]: i
      }),
      ...s,
      onClick: s.onSelect,
      children: t
    })
  },
  M = e => {
    var t;
    let {
      user: n,
      profileEffect: s,
      innerRef: l,
      section: a,
      isSelected: c,
      ...d
    } = e, v = (0, u.useStateFromStores)([_.default], () => _.default.getProfileEffectById(s.id)), C = (0, u.useStateFromStores)([f.default], () => {
      let e = f.default.getProduct(s.skuId);
      return (0, E.isPremiumCollectiblesProduct)(e)
    }), T = (0, u.useStateFromStores)([h.default], () => h.default.isItemViewed(s)), P = i.useRef(null), {
      accessibilityLabel: M,
      thumbnailPreviewSrc: L,
      title: y
    } = null !== (t = null == v ? void 0 : v.config) && void 0 !== t ? t : {}, b = g.default.canUseCollectibles(n), w = a === I.Section.PREMIUM_PURCHASE && !b, [j, O] = i.useState(c);
    return i.useEffect(() => {
      c && O(!0)
    }, [c]), (0, r.jsxs)(R, {
      className: w && !c ? A.decorationGridItemChurned : void 0,
      innerRef: null != l ? l : P,
      isSelected: c,
      ...d,
      children: [(0, r.jsx)("img", {
        src: x,
        alt: M,
        className: A.presetEffectBackground
      }), (0, r.jsx)("img", {
        className: A.presetEffectImg,
        src: L,
        alt: y
      }), (() => {
        let e = a === I.Section.PURCHASE || a === I.Section.PREMIUM_PURCHASE && b;
        if (e) return null;
        let t = !T && !c && !j;
        return t ? (0, r.jsx)(S.PremiumBadge, {
          className: A.newBadge,
          text: (0, r.jsxs)("div", {
            className: A.newBadgeText,
            children: [(0, r.jsx)(p.default, {
              width: 12,
              height: 12
            }), N.default.Messages.NEW]
          })
        }) : (0, r.jsx)(S.IconBadge, {
          icon: C ? () => (0, r.jsx)(m.default, {
            width: 14,
            height: 14
          }) : () => (0, r.jsx)(p.default, {
            width: 12,
            height: 12
          }),
          color: o.default.BACKGROUND_ACCENT,
          className: A.lockBadge
        })
      })()]
    })
  };
var L = e => {
  let {
    user: t,
    guild: n,
    pendingProfileEffect: i,
    selectedProfileEffectRef: s,
    onSelect: l,
    onClose: o
  } = e, u = () => {
    o(), (0, d.pushLayer)(T.Layers.COLLECTIBLES_SHOP)
  }, f = (0, I.default)(), h = null != i;
  return (0, r.jsx)("section", {
    children: (0, r.jsx)(c.MasonryList, {
      fade: !0,
      itemGutter: 12,
      sectionGutter: 16,
      paddingVertical: 0,
      paddingHorizontal: 12,
      className: A.list,
      columns: 3,
      sections: f.map(e => {
        let {
          items: t
        } = e;
        return t.length
      }),
      renderItem: (e, o, d, E) => {
        let {
          section: m,
          items: p
        } = f[e];
        return (0, a.match)(p[o]).with(I.NONE_ITEM, () => (0, r.jsxs)(R, {
          style: {
            ...d
          },
          isSelected: !h,
          onSelect: () => l(null),
          children: [(0, r.jsx)(C.default, {
            className: A.notAllowedIcon
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: null != n ? N.default.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : N.default.Messages.NONE
          })]
        }, E)).with(I.SHOP_ITEM, () => (0, r.jsxs)(R, {
          style: d,
          onSelect: u,
          children: [(0, r.jsx)(v.default, {
            className: A.shopIcon
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: N.default.Messages.COLLECTIBLES_SHOP
          })]
        }, E)).otherwise(e => {
          let n = i === e.id;
          return (0, r.jsx)(M, {
            user: t,
            style: {
              ...d
            },
            section: m,
            profileEffect: e,
            innerRef: n ? s : void 0,
            isSelected: n,
            onSelect: () => l(e.id)
          }, E)
        })
      },
      renderSection: e => {
        let {
          header: t
        } = f[e];
        return (0, r.jsx)("div", {
          style: {
            height: "".concat(16, "px")
          },
          children: (0, r.jsx)(c.FormTitle, {
            children: t
          })
        })
      },
      getSectionHeight: () => 16,
      getItemKey: (e, t) => {
        var n, r;
        return null !== (r = null === (n = f[e].items[t]) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : null
      },
      getItemHeight: P,
      removeEdgeItemGutters: !0
    })
  })
}