"use strict";
n(627341);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(278074),
  l = n(831209),
  u = n(399606),
  _ = n(481060),
  d = n(727637),
  c = n(597688),
  E = n(884697),
  I = n(126900),
  T = n(466111),
  h = n(783014),
  S = n(242411),
  f = n(74538),
  N = n(864106),
  A = n(439959),
  m = n(125988),
  O = n(689938),
  R = n(166253);
let C = () => 80,
  p = e => {
    let {
      children: t,
      className: n,
      onSelect: r,
      isSelected: s = !1,
      ...a
    } = e;
    return (0, i.jsx)(_.Clickable, {
      className: o()(R.decorationGridItem, s ? R.selected : void 0, n),
      ...a,
      onClick: r,
      children: t
    })
  },
  g = e => {
    let {
      user: t,
      avatarDecoration: n,
      innerRef: s,
      section: o,
      isSelected: a = !1,
      ...I
    } = e, h = (0, u.e7)([c.Z], () => {
      let e = c.Z.getProduct(n.skuId);
      return (0, E.G1)(e)
    }), N = (0, E.Yq)(n.skuId), C = f.ZP.canUseCollectibles(t), g = o === A.$0.PREMIUM_PURCHASE && !C, L = r.useRef(null), v = (0, d.Z)(null != s ? s : L), {
      avatarDecorationSrc: D
    } = (0, m.Z)({
      user: t,
      avatarDecorationOverride: n,
      size: 80,
      animateOnHover: !v
    });
    return (0, i.jsxs)(p, {
      className: g ? R.decorationGridItemChurned : void 0,
      innerRef: null != s ? s : L,
      isSelected: a,
      ...I,
      children: [(0, i.jsx)("img", {
        className: R.presetDecorationImg,
        src: D,
        alt: n.label
      }), o === A.$0.PURCHASE || o === A.$0.PREMIUM_PURCHASE && C ? null : N ? (0, i.jsx)(_.PremiumBadge, {
        className: R.newBadge,
        text: (0, i.jsxs)("div", {
          className: R.newBadgeText,
          children: [(0, i.jsx)(S.Z, {
            width: 12,
            height: 12
          }), O.Z.Messages.NEW]
        })
      }) : (0, i.jsx)(_.IconBadge, {
        icon: h ? () => (0, i.jsx)(T.Z, {
          width: 14,
          height: 14
        }) : () => (0, i.jsx)(S.Z, {
          width: 12,
          height: 12
        }),
        color: l.Z.BACKGROUND_ACCENT,
        className: R.iconBadge
      })]
    })
  };
t.Z = e => {
  let {
    user: t,
    guild: n,
    pendingAvatarDecoration: s,
    selectedAvatarDecorationRef: o,
    onSelect: l,
    onOpenShop: u
  } = e, d = (0, A.ZP)(), c = r.useCallback(() => {
    u(void 0)
  }, [u]);
  return (0, i.jsx)(_.MasonryList, {
    fade: !0,
    className: R.list,
    columns: 3,
    sections: d.map(e => {
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
    renderItem: (e, r, u, E) => {
      let {
        section: T,
        items: S
      } = d[e];
      return (0, a.EQ)(S[r]).with(A.Tm, () => (0, i.jsxs)(p, {
        style: {
          ...u
        },
        isSelected: null === s,
        onSelect: () => l(null),
        children: [(0, i.jsx)(h.Z, {
          className: R.notAllowedIcon
        }), (0, i.jsx)(_.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: (0, N.ad)(t, n) ? O.Z.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION : O.Z.Messages.NONE
        })]
      }, E)).with(A.oT, () => (0, i.jsxs)(p, {
        style: u,
        onSelect: c,
        children: [(0, i.jsx)(I.Z, {
          className: R.shopIcon
        }), (0, i.jsx)(_.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: O.Z.Messages.COLLECTIBLES_SHOP
        })]
      }, E)).otherwise(e => {
        let n = (null == s ? void 0 : s.id) === e.id;
        return (0, i.jsx)(g, {
          style: {
            ...u
          },
          user: t,
          avatarDecoration: e,
          section: T,
          innerRef: n ? o : void 0,
          isSelected: n,
          onSelect: () => l(e)
        }, E)
      })
    },
    renderSection: (e, t) => {
      let {
        header: n
      } = d[e];
      return (0, i.jsx)("div", {
        className: R.headings,
        style: {
          ...t,
          position: "absolute"
        },
        children: (0, i.jsx)(_.HeadingLevel, {
          forceLevel: 5,
          children: (0, i.jsx)(_.Heading, {
            variant: "eyebrow",
            color: "header-secondary",
            children: n
          })
        })
      })
    },
    getSectionHeight: e => d[e].height,
    getItemKey: (e, t) => d[e].items[t].id,
    getItemHeight: C
  })
}