"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(477690),
  l = n(481060),
  u = n(2052),
  _ = n(880949),
  d = n(806966),
  c = n(28546),
  E = n(254494),
  I = n(430824),
  T = n(497309),
  h = n(898140),
  S = n(68736),
  f = n(626135),
  N = n(624138),
  A = n(453070),
  m = n(926491),
  O = n(373228),
  R = n(378233),
  C = n(419922),
  p = n(981631),
  g = n(957825),
  L = n(689938),
  v = n(499035);
let D = (0, N.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
  M = (0, N.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
  P = (0, N.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
  y = (0, N.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
  U = (0, N.Mg)(a.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
  b = (0, N.Mg)(a.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
  G = [D, D, D, D],
  w = (M + P) * 2 + D,
  k = U + 2 * b,
  B = e => {
    let {
      activeIndex: t,
      stickerPickerCategories: n,
      categoryListRef: s,
      firstStandardStickerCategoryOffsetTop: a,
      setShouldRenderShortcut: d
    } = e, E = (0, u.O)(), S = (0, c.Iu)(e => "" !== e.searchQuery), N = r.useCallback((e, s, a) => {
      var u, d;
      let c;
      let N = (null === (u = n[0]) || void 0 === u ? void 0 : u.type) === O.Ih.FAVORITE,
        A = N ? 1 : 0,
        D = (null === (d = n[A]) || void 0 === d ? void 0 : d.type) === O.Ih.RECENT,
        P = n.length > 0,
        U = n.length;
      if (0 === s && N) return (0, i.jsx)("div", {
        role: "listitem",
        "aria-setsize": U,
        "aria-posinset": s,
        children: (0, i.jsx)(l.Clickable, {
          "aria-label": L.Z.Messages.CATEGORY_FAVORITE,
          className: o()(v.stickerCategory, v.stickerCategoryGeneric, {
            [v.stickerCategoryGenericDisabled]: P && !N,
            [v.stickerCategoryGenericSelected]: !S && N && 0 === t
          }),
          onClick: a,
          children: (0, i.jsx)(h.Z, {
            className: v.stickerCategoryGenericIcon,
            height: y,
            width: y
          })
        })
      }, "favorites");
      if (s === A && D) return (0, i.jsx)("div", {
        role: "listitem",
        "aria-setsize": U,
        "aria-posinset": s,
        children: (0, i.jsx)(l.Clickable, {
          "aria-label": L.Z.Messages.STICKER_PICKER_CATEGORIES_RECENT,
          className: o()(v.stickerCategory, v.stickerCategoryGeneric, {
            [v.stickerCategoryGenericDisabled]: P && !D,
            [v.stickerCategoryGenericSelected]: !S && D && t === A
          }),
          onClick: a,
          children: (0, i.jsx)(T.Z, {
            className: v.stickerCategoryGenericIcon,
            height: y,
            width: y
          })
        })
      }, "recent");
      let b = t === s,
        G = n[s],
        w = n[s + 1],
        k = null != w && G.type === O.Ih.GUILD && w.type !== O.Ih.GUILD,
        B = G.type === O.Ih.PACK,
        x = "",
        V = null;
      if (G.type === O.Ih.GUILD || G.type === O.Ih.EMPTY_GUILD_UPSELL) {
        let e = I.Z.getGuild(G.id);
        null != e && (c = e.id, x = e.name, V = (0, i.jsx)(_.Z, {
          guild: e,
          isSelected: b
        }))
      } else if (B) {
        let e = m.Z.getStickerPack(G.id);
        null != e && (x = e.name, V = (0, i.jsx)(C.ZP, {
          disableAnimation: !b || S,
          size: M,
          sticker: (0, R.Zt)(e)
        }))
      }
      return (0, i.jsxs)(r.Fragment, {
        children: [(0, i.jsx)(l.Tooltip, {
          position: "right",
          text: x,
          tooltipContentClassName: v.__invalid_tooltip,
          children: e => (0, i.jsx)("div", {
            role: "listitem",
            "aria-setsize": U,
            "aria-posinset": s,
            children: (0, i.jsx)(l.Clickable, {
              ...e,
              "aria-label": x,
              className: o()(v.stickerCategory, {
                [v.firstPartyCategory]: B,
                [v.firstPartyCategorySelected]: !S && b && B
              }),
              onClick: () => {
                G.type === O.Ih.PACK && f.default.track(p.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                  location: null == E ? void 0 : E.location,
                  tab: g.X1.STICKER,
                  sticker_pack_id: G.id,
                  guild_id: c
                }), a()
              },
              children: V
            })
          })
        }), k ? (0, i.jsx)("hr", {
          className: v.guildCategorySeparator
        }, "separator") : null]
      }, G.id)
    }, [t, E, S, n]), A = r.useCallback((e, t) => t ? w : 0, []), D = r.useCallback((e, t) => {
      let i = n[t],
        r = n[t + 1];
      return M + (null != r && i.type === O.Ih.GUILD && r.type !== O.Ih.GUILD ? k : P)
    }, [n]);
    return {
      getScrollOffsetForIndex: A,
      renderCategoryListItem: N,
      rowHeight: D,
      onScroll: r.useCallback(e => {
        var t;
        let n = null === (t = s.current) || void 0 === t ? void 0 : t.getListDimensions();
        if (null == n) return;
        let i = e + n.height;
        d(i - U < a)
      }, [a])
    }
  };
t.Z = e => {
  let {
    stickersListRef: t,
    channel: n
  } = e, s = r.useRef(null), [a, u] = r.useState(!0), _ = d.ZN.useStore(e => e.activeCategoryIndex), c = (0, A.Sd)(n), {
    firstStandardStickerCategoryIndex: I,
    firstStandardStickerCategoryOffsetTop: T,
    guildCategoryCount: h,
    hasFirstPartyStickerPacks: f
  } = r.useMemo(() => {
    var e, t;
    let n = c.filter(e => e.type === O.Ih.GUILD).length,
      i = (null === (e = c[0]) || void 0 === e ? void 0 : e.type) === O.Ih.RECENT,
      r = n + (i ? 1 : 0) + ((null === (t = c[0]) || void 0 === t ? void 0 : t.type) === O.Ih.FAVORITE ? 1 : 0),
      s = r * (M + P) - P + k;
    return {
      firstStandardStickerCategoryIndex: r + 1,
      firstStandardStickerCategoryOffsetTop: s,
      guildCategoryCount: n,
      hasFirstPartyStickerPacks: null != c.find(e => e.type === O.Ih.PACK)
    }
  }, [c]);
  r.useLayoutEffect(() => {
    u(h >= 7)
  }, [h]);
  let {
    renderCategoryListItem: N,
    rowHeight: m,
    onScroll: R
  } = B({
    activeIndex: _,
    stickerPickerCategories: c,
    categoryListRef: s,
    firstStandardStickerCategoryOffsetTop: T,
    setShouldRenderShortcut: u
  }), C = r.useCallback(e => {
    var t;
    e(I), null === (t = s.current) || void 0 === t || t.scrollTo(T)
  }, [I, T]);
  return (0, i.jsx)(E.Z, {
    className: v.categoryList,
    categoryListRef: s,
    expressionsListRef: t,
    store: d.ZN,
    listPadding: G,
    onScroll: R,
    renderCategoryListItem: N,
    rowCount: c.length,
    categories: c,
    categoryHeight: m,
    children: e => f && a && (0, i.jsx)(l.Clickable, {
      className: o()(v.standardStickerShortcut, {
        [v.invisibleShortcut]: !a
      }),
      onClick: () => C(e),
      children: (0, i.jsx)(S.Z, {
        height: 24,
        width: 24
      })
    })
  })
}