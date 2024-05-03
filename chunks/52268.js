"use strict";
l.r(t), l("627341");
var s = l("735250"),
  a = l("470079"),
  n = l("120356"),
  r = l.n(n),
  i = l("278074"),
  u = l("831209"),
  o = l("399606"),
  c = l("481060"),
  d = l("37234"),
  f = l("597688"),
  m = l("884697"),
  h = l("126900"),
  E = l("466111"),
  p = l("783014"),
  g = l("242411"),
  C = l("26290"),
  I = l("74538"),
  P = l("731896"),
  v = l("528439"),
  S = l("981631"),
  _ = l("689938"),
  x = l("464065"),
  A = l("223223");
let N = () => 80,
  R = e => {
    let {
      children: t,
      className: l,
      isSelected: a = !1,
      ...n
    } = e;
    return (0, s.jsx)(c.Clickable, {
      className: r()(x.effectGridItem, l, {
        [x.selected]: a
      }),
      ...n,
      onClick: n.onSelect,
      children: t
    })
  },
  T = e => {
    var t;
    let {
      user: l,
      profileEffect: n,
      innerRef: r,
      section: i,
      isSelected: c,
      ...d
    } = e, h = (0, P.useProfileEffectPreset)(n.id), p = (0, o.useStateFromStores)([f.default], () => {
      let e = f.default.getProduct(n.skuId);
      return (0, m.isPremiumCollectiblesProduct)(e)
    }), S = (0, m.isProductNew)(n.skuId), N = a.useRef(null), {
      accessibilityLabel: T,
      thumbnailPreviewSrc: M,
      title: j
    } = null !== (t = null == h ? void 0 : h.config) && void 0 !== t ? t : {}, O = I.default.canUseCollectibles(l), U = i === v.Section.PREMIUM_PURCHASE && !O;
    return (0, s.jsxs)(R, {
      className: U && !c ? x.decorationGridItemChurned : void 0,
      innerRef: null != r ? r : N,
      isSelected: c,
      ...d,
      children: [(0, s.jsx)("img", {
        src: A,
        alt: T,
        className: x.presetEffectBackground
      }), (0, s.jsx)("img", {
        className: x.presetEffectImg,
        src: M,
        alt: j
      }), i === v.Section.PURCHASE || i === v.Section.PREMIUM_PURCHASE && O ? null : S ? (0, s.jsx)(C.PremiumBadge, {
        className: x.newBadge,
        text: (0, s.jsxs)("div", {
          className: x.newBadgeText,
          children: [(0, s.jsx)(g.default, {
            width: 12,
            height: 12
          }), _.default.Messages.NEW]
        })
      }) : (0, s.jsx)(C.IconBadge, {
        icon: p ? () => (0, s.jsx)(E.default, {
          width: 14,
          height: 14
        }) : () => (0, s.jsx)(g.default, {
          width: 12,
          height: 12
        }),
        color: u.default.BACKGROUND_ACCENT,
        className: x.lockBadge
      })]
    })
  };
t.default = e => {
  let {
    user: t,
    guild: l,
    pendingProfileEffect: a,
    selectedProfileEffectRef: n,
    onSelect: r,
    onClose: u
  } = e, o = () => {
    u(), (0, d.pushLayer)(S.Layers.COLLECTIBLES_SHOP)
  }, f = (0, v.default)(), m = null != a;
  return (0, s.jsx)("section", {
    children: (0, s.jsx)(c.MasonryList, {
      fade: !0,
      itemGutter: 12,
      sectionGutter: 16,
      paddingVertical: 0,
      paddingHorizontal: 12,
      className: x.list,
      columns: 3,
      sections: f.map(e => {
        let {
          items: t
        } = e;
        return t.length
      }),
      renderItem: (e, u, d, E) => {
        let {
          section: g,
          items: C
        } = f[e];
        return (0, i.match)(C[u]).with(v.NONE_ITEM, () => (0, s.jsxs)(R, {
          style: {
            ...d
          },
          isSelected: !m,
          onSelect: () => r(null),
          children: [(0, s.jsx)(p.default, {
            className: x.notAllowedIcon
          }), (0, s.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: null != l ? _.default.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : _.default.Messages.NONE
          })]
        }, E)).with(v.SHOP_ITEM, () => (0, s.jsxs)(R, {
          style: d,
          onSelect: o,
          children: [(0, s.jsx)(h.default, {
            className: x.shopIcon
          }), (0, s.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: _.default.Messages.COLLECTIBLES_SHOP
          })]
        }, E)).otherwise(e => {
          let l = a === e.id;
          return (0, s.jsx)(T, {
            user: t,
            style: {
              ...d
            },
            section: g,
            profileEffect: e,
            innerRef: l ? n : void 0,
            isSelected: l,
            onSelect: () => r(e.id)
          }, E)
        })
      },
      renderSection: e => {
        let {
          header: t
        } = f[e];
        return (0, s.jsx)("div", {
          style: {
            height: "".concat(16, "px")
          },
          children: (0, s.jsx)(c.FormTitle, {
            children: t
          })
        })
      },
      getSectionHeight: () => 16,
      getItemKey: (e, t) => {
        var l, s;
        return null !== (s = null === (l = f[e].items[t]) || void 0 === l ? void 0 : l.id) && void 0 !== s ? s : null
      },
      getItemHeight: N,
      removeEdgeItemGutters: !0
    })
  })
}