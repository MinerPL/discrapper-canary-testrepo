"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("222007"), n("794252");
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  s = n.n(l),
  o = n("506838"),
  u = n("171210"),
  a = n("65597"),
  c = n("77078"),
  d = n("54239"),
  f = n("853987"),
  h = n("426497"),
  v = n("491232"),
  m = n("743826"),
  E = n("216422"),
  C = n("468759"),
  g = n("600785"),
  p = n("956089"),
  S = n("719923"),
  _ = n("845962"),
  I = n("501768"),
  P = n("831308"),
  A = n("49111"),
  T = n("782340"),
  N = n("971864"),
  x = n("513002");
let M = () => 80,
  R = e => {
    let {
      children: t,
      className: n,
      isSelected: r = !1,
      ...l
    } = e;
    return (0, i.jsx)(c.Clickable, {
      className: s(N.effectGridItem, n, {
        [N.selected]: r
      }),
      ...l,
      onClick: l.onSelect,
      children: t
    })
  },
  b = e => {
    var t;
    let {
      user: n,
      profileEffect: l,
      innerRef: s,
      section: o,
      isSelected: c,
      ...d
    } = e, m = (0, a.useStateFromStores)([_.default], () => _.default.getProfileEffectById(l.id)), C = null != m;
    r.useEffect(() => {
      !C && (0, I.getOrFetchProfileEffects)(!0)
    }, [C]);
    let A = (0, a.useStateFromStores)([f.default], () => {
        let e = f.default.getProduct(l.skuId);
        return (0, v.isPremiumCollectiblesProduct)(e)
      }),
      M = (0, a.useStateFromStores)([h.default], () => h.default.isItemViewed(l)),
      b = r.useRef(null),
      {
        accessibilityLabel: y,
        thumbnailPreviewSrc: L,
        title: w
      } = null !== (t = null == m ? void 0 : m.config) && void 0 !== t ? t : {},
      j = S.default.canUseCollectibles(n),
      O = o === P.Section.PREMIUM_PURCHASE && !j,
      [F, V] = r.useState(c);
    return r.useEffect(() => {
      c && V(!0)
    }, [c]), (0, i.jsxs)(R, {
      className: O && !c ? N.decorationGridItemChurned : void 0,
      innerRef: null != s ? s : b,
      isSelected: c,
      ...d,
      children: [(0, i.jsx)("img", {
        src: x,
        alt: y,
        className: N.presetEffectBackground
      }), (0, i.jsx)("img", {
        className: N.presetEffectImg,
        src: L,
        alt: w
      }), (() => {
        let e = o === P.Section.PURCHASE || o === P.Section.PREMIUM_PURCHASE && j;
        if (e) return null;
        let t = !M && !c && !F;
        return t ? (0, i.jsx)(p.PremiumBadge, {
          className: N.newBadge,
          text: (0, i.jsxs)("div", {
            className: N.newBadgeText,
            children: [(0, i.jsx)(g.default, {
              width: 12,
              height: 12
            }), T.default.Messages.NEW]
          })
        }) : (0, i.jsx)(p.IconBadge, {
          icon: A ? () => (0, i.jsx)(E.default, {
            width: 14,
            height: 14
          }) : () => (0, i.jsx)(g.default, {
            width: 12,
            height: 12
          }),
          color: u.default.BACKGROUND_ACCENT,
          className: N.lockBadge
        })
      })()]
    })
  };
var y = e => {
  let {
    user: t,
    guild: n,
    pendingProfileEffect: r,
    selectedProfileEffectRef: l,
    onSelect: s,
    onClose: u
  } = e, a = () => {
    u(), (0, d.pushLayer)(A.Layers.COLLECTIBLES_SHOP)
  }, f = (0, P.default)(), h = null != r;
  return (0, i.jsx)("section", {
    children: (0, i.jsx)(c.MasonryList, {
      fade: !0,
      itemGutter: 12,
      sectionGutter: 16,
      paddingVertical: 0,
      paddingHorizontal: 12,
      className: N.list,
      columns: 3,
      sections: f.map(e => {
        let {
          items: t
        } = e;
        return t.length
      }),
      renderItem: (e, u, d, v) => {
        let {
          section: E,
          items: g
        } = f[e];
        return (0, o.match)(g[u]).with(P.NONE_ITEM, () => (0, i.jsxs)(R, {
          style: {
            ...d
          },
          isSelected: !h,
          onSelect: () => s(null),
          children: [(0, i.jsx)(C.default, {
            className: N.notAllowedIcon
          }), (0, i.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: null != n ? T.default.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : T.default.Messages.NONE
          })]
        }, v)).with(P.SHOP_ITEM, () => (0, i.jsxs)(R, {
          style: d,
          onSelect: a,
          children: [(0, i.jsx)(m.default, {
            className: N.shopIcon
          }), (0, i.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: T.default.Messages.COLLECTIBLES_SHOP
          })]
        }, v)).otherwise(e => {
          let n = r === e.id;
          return (0, i.jsx)(b, {
            user: t,
            style: {
              ...d
            },
            section: E,
            profileEffect: e,
            innerRef: n ? l : void 0,
            isSelected: n,
            onSelect: () => s(e.id)
          }, v)
        })
      },
      renderSection: e => {
        let {
          header: t
        } = f[e];
        return (0, i.jsx)("div", {
          style: {
            height: "".concat(16, "px")
          },
          children: (0, i.jsx)(c.FormTitle, {
            children: t
          })
        })
      },
      getSectionHeight: () => 16,
      getItemKey: (e, t) => {
        var n, i;
        return null !== (i = null === (n = f[e].items[t]) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : null
      },
      getItemHeight: M,
      removeEdgeItemGutters: !0
    })
  })
}