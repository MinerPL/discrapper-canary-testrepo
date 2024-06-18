"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(91192),
  _ = n(442837),
  d = n(477690),
  c = n(481060),
  E = n(2052),
  I = n(607070),
  T = n(806966),
  h = n(254494),
  S = n(593618),
  f = n(451478),
  N = n(642113),
  A = n(626135),
  m = n(624138),
  O = n(543241),
  R = n(883661),
  C = n(880949),
  p = n(784222),
  g = n(149203),
  L = n(981631),
  v = n(957825),
  D = n(689938),
  M = n(271171);
let P = (0, m.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
  y = (0, m.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
  U = (0, m.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
  b = (0, m.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
  G = (0, m.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
  w = (0, m.Mg)(M.__invalid_unicodeCategoryShortcutHeight),
  k = (0, m.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
  B = (0, m.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
  x = U + y + 2 * G,
  V = P + y,
  Z = V + (k + 2 * B),
  H = U + b + 2 * G;

function F(e) {
  let {
    activeIndex: t,
    categoryIndex: n,
    analyticsContext: s,
    categories: a,
    category: l,
    handleCategorySelect: _,
    isWindowFocused: d,
    useReducedMotion: E
  } = e, I = (0, u.JA)("expression-guild-".concat(n)), T = l.type === g.En.GUILD ? null : l.id, h = t === n, f = l.type === g.En.GUILD ? l.guild : null, N = (0, i.jsxs)(c.Clickable, {
    ...I,
    "aria-label": (0, O.Nf)(l, f),
    className: o()({
      [M.categoryItemGuildCategory]: null != f,
      [M.categoryItemDefaultCategory]: null == f,
      [M.categoryItemDefaultCategorySelected]: null == f && h,
      [M.categoryItemRecentEmoji]: l.type === g.En.RECENT
    }),
    onClick: () => {
      null != f && A.default.track(L.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
        location: null == s ? void 0 : s.location,
        tab: v.X1.EMOJI,
        guild_id: f.id
      }), _(n)
    },
    children: [null != f ? (0, i.jsx)(C.Z, {
      guild: f,
      isSelected: h,
      shouldAnimate: !E && d,
      isLocked: l.isNitroLocked
    }) : null, null == f && null != T ? (0, i.jsx)(R.Z, {
      categoryId: T,
      className: M.categoryIcon,
      height: U,
      width: U
    }) : null]
  }), m = a[n + 1], p = null != m && l.type === g.En.GUILD && m.type !== g.En.GUILD;
  return null != f ? (0, i.jsxs)(r.Fragment, {
    children: [(0, i.jsx)(S.Z, {
      guild: f,
      includeActivity: !1,
      children: (0, i.jsx)("div", {
        children: N
      })
    }), p ? (0, i.jsx)("hr", {
      className: M.guildCategorySeparator
    }, "separator") : null]
  }) : N
}
t.Z = e => {
  let {
    className: t,
    emojiListRef: n,
    sectionDescriptors: s,
    intention: a,
    channel: u
  } = e, d = T.kJ.useStore(e => e.activeCategoryIndex), S = (0, p.Ni)({
    sectionDescriptors: s,
    emojiListRef: n
  }), A = (0, E.O)(), m = (0, O.kI)(a, u), R = r.useRef(null), C = (0, _.e7)([f.Z], () => f.Z.isFocused()), L = (0, _.e7)([I.Z], () => I.Z.useReducedMotion, []), v = r.useMemo(() => l().memoize((e, t) => {
    let n = m[t];
    if (null != n) return (0, i.jsx)(F, {
      activeIndex: d,
      analyticsContext: A,
      categories: m,
      category: n,
      categoryIndex: t,
      handleCategorySelect: S,
      isWindowFocused: C,
      useReducedMotion: L
    }, t)
  }), [d, A, m, S, C, L]), P = r.useMemo(() => [8, 8, 0, 8], []), G = r.useCallback((e, t) => {
    let n = m[t];
    if (n.type === g.En.RECENT) return x;
    if (n.type === g.En.GUILD) {
      let e = m[t + 1];
      return null != e && e.type !== g.En.GUILD ? Z : V
    }
    return H
  }, [m]), {
    nonUnicodeCategoryCount: Y,
    firstUnicodeCategoryIndex: j,
    firstUnicodeCategoryOffsetTop: W,
    rowCountBySection: K
  } = r.useMemo(() => {
    let e = 0,
      t = 0,
      n = 0,
      i = 0;
    m.forEach(r => {
      r.type === g.En.GUILD ? (t += 1, n += 1) : r.type === g.En.UNICODE ? i += 1 : (e += 1, t += 1)
    });
    let r = x + t * V + Z;
    return {
      nonUnicodeCategoryCount: t,
      firstUnicodeCategoryIndex: t,
      firstUnicodeCategoryOffsetTop: r,
      rowCountBySection: [e, n, i]
    }
  }, [m]), [z, q] = r.useState(!0);
  r.useLayoutEffect(() => {
    q(Y >= 7)
  }, [Y]);
  let X = r.useCallback(e => {
      var t;
      let n = null === (t = R.current) || void 0 === t ? void 0 : t.getListDimensions();
      if (null != n) e + n.height - k >= W ? q(!1) : q(!0)
    }, [W]),
    Q = r.useCallback(e => {
      var t;
      e(j), null === (t = R.current) || void 0 === t || t.scrollTo(W)
    }, [W, j]),
    J = r.useCallback((e, t) => {
      let n = m[e];
      if (null == n) return 0;
      let i = z ? w : 0;
      if (n.type === g.En.RECENT) return t ? 0 : b;
      if (n.type === g.En.GUILD) {
        let n = m[e + 1];
        return null != n && n.type !== g.En.GUILD ? t ? k + -2 * B + y + i : y : t ? i : y
      }
      return t ? y + i : 2 * y
    }, [m, z]),
    $ = r.useMemo(() => function(e, t) {
      return (0, i.jsx)(r.Fragment, {
        children: t
      }, e)
    }, []),
    ee = z ? "shortcut" : "hiddenshortcut";
  return (0, i.jsx)(h.Z, {
    categoryListRef: R,
    expressionsListRef: n,
    className: t,
    store: T.kJ,
    categories: m,
    listPadding: P,
    onScroll: X,
    renderCategoryListItem: v,
    renderSection: $,
    rowCount: m.length,
    categoryHeight: G,
    getScrollOffsetForIndex: J,
    rowCountBySection: K,
    children: e => Y >= 7 && (0, i.jsx)(c.Clickable, {
      "aria-hidden": !z,
      "aria-label": D.Z.Messages.EMOJI_PICKER_SCROLL_TO_UNICODE_A11Y_LABEL,
      className: o()(M.unicodeShortcut, {
        [M.unicodeShortcutInvisible]: !z
      }),
      tabIndex: z ? 0 : -1,
      onClick: () => Q(e),
      children: (0, i.jsx)(N.Z, {
        height: U,
        width: U
      })
    }, ee)
  })
}