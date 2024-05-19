"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("392711"),
  l = n.n(o),
  u = n("924826"),
  d = n("442837"),
  _ = n("477690"),
  c = n("481060"),
  E = n("2052"),
  I = n("607070"),
  T = n("806966"),
  f = n("254494"),
  S = n("593618"),
  h = n("451478"),
  A = n("642113"),
  m = n("626135"),
  N = n("624138"),
  p = n("540780"),
  O = n("543241"),
  C = n("883661"),
  R = n("880949"),
  g = n("784222"),
  L = n("149203"),
  v = n("981631"),
  D = n("957825"),
  M = n("689938"),
  y = n("271171");
let P = (0, N.cssValueToNumber)(_.default.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
  U = (0, N.cssValueToNumber)(_.default.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
  b = (0, N.cssValueToNumber)(_.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
  G = (0, N.cssValueToNumber)(_.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
  w = (0, N.cssValueToNumber)(_.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
  k = (0, N.cssValueToNumber)(y.__invalid_unicodeCategoryShortcutHeight),
  B = (0, N.cssValueToNumber)(_.default.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
  V = (0, N.cssValueToNumber)(_.default.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
  x = b + U + 2 * w,
  F = P + U,
  H = F + (B + 2 * V),
  Y = b + G + 2 * w;

function j(e) {
  let {
    activeIndex: t,
    categoryIndex: n,
    analyticsContext: a,
    categories: o,
    category: l,
    handleCategorySelect: d,
    isWindowFocused: _,
    useReducedMotion: E
  } = e, I = (0, u.useListItem)("expression-guild-".concat(n)), T = l.type === L.EmojiCategoryTypes.GUILD ? null : l.id, f = t === n, h = l.type === L.EmojiCategoryTypes.GUILD ? l.guild : null, {
    enabled: A
  } = p.default.useExperiment({
    location: "Emoji Picker Category List"
  }, {
    autoTrackExposure: l.isNitroLocked
  }), N = A && l.isNitroLocked, g = (0, i.jsxs)(c.Clickable, {
    ...I,
    "aria-label": (0, O.getAriaIdForEmojiCategory)(l, h),
    className: s()({
      [y.categoryItemGuildCategory]: null != h,
      [y.categoryItemDefaultCategory]: null == h,
      [y.categoryItemDefaultCategorySelected]: null == h && f,
      [y.categoryItemRecentEmoji]: l.type === L.EmojiCategoryTypes.RECENT
    }),
    onClick: () => {
      null != h && m.default.track(v.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, {
        location: null == a ? void 0 : a.location,
        tab: D.ExpressionPickerViewType.EMOJI,
        guild_id: h.id
      }), d(n)
    },
    children: [null != h ? (0, i.jsx)(R.default, {
      guild: h,
      isSelected: f,
      shouldAnimate: !E && _,
      isLocked: N
    }) : null, null == h && null != T ? (0, i.jsx)(C.default, {
      categoryId: T,
      className: y.categoryIcon,
      height: b,
      width: b
    }) : null]
  }), M = o[n + 1], P = null != M && l.type === L.EmojiCategoryTypes.GUILD && M.type !== L.EmojiCategoryTypes.GUILD;
  return null != h ? (0, i.jsxs)(r.Fragment, {
    children: [(0, i.jsx)(S.default, {
      guild: h,
      includeActivity: !1,
      children: (0, i.jsx)("div", {
        children: g
      })
    }), P ? (0, i.jsx)("hr", {
      className: y.guildCategorySeparator
    }, "separator") : null]
  }) : g
}
t.default = e => {
  let {
    className: t,
    emojiListRef: n,
    sectionDescriptors: a,
    intention: o,
    channel: u
  } = e, _ = T.EmojiPickerStore.useStore(e => e.activeCategoryIndex), S = (0, g.useCategorySelectHandler)({
    sectionDescriptors: a,
    emojiListRef: n
  }), m = (0, E.useAnalyticsContext)(), N = (0, O.useEmojiCategories)(o, u), p = r.useRef(null), C = (0, d.useStateFromStores)([h.default], () => h.default.isFocused()), R = (0, d.useStateFromStores)([I.default], () => I.default.useReducedMotion, []), v = r.useMemo(() => l().memoize((e, t) => {
    let n = N[t];
    if (null != n) return (0, i.jsx)(j, {
      activeIndex: _,
      analyticsContext: m,
      categories: N,
      category: n,
      categoryIndex: t,
      handleCategorySelect: S,
      isWindowFocused: C,
      useReducedMotion: R
    }, t)
  }), [_, m, N, S, C, R]), D = r.useMemo(() => [8, 8, 0, 8], []), P = r.useCallback((e, t) => {
    let n = N[t];
    if (n.type === L.EmojiCategoryTypes.RECENT) return x;
    if (n.type === L.EmojiCategoryTypes.GUILD) {
      let e = N[t + 1];
      return null != e && e.type !== L.EmojiCategoryTypes.GUILD ? H : F
    }
    return Y
  }, [N]), {
    nonUnicodeCategoryCount: w,
    firstUnicodeCategoryIndex: W,
    firstUnicodeCategoryOffsetTop: K,
    rowCountBySection: z
  } = r.useMemo(() => {
    let e = 0,
      t = 0,
      n = 0,
      i = 0;
    N.forEach(r => {
      r.type === L.EmojiCategoryTypes.GUILD ? (t += 1, n += 1) : r.type === L.EmojiCategoryTypes.UNICODE ? i += 1 : (e += 1, t += 1)
    });
    let r = x + t * F + H;
    return {
      nonUnicodeCategoryCount: t,
      firstUnicodeCategoryIndex: t,
      firstUnicodeCategoryOffsetTop: r,
      rowCountBySection: [e, n, i]
    }
  }, [N]), [Z, X] = r.useState(!0);
  r.useLayoutEffect(() => {
    X(w >= 7)
  }, [w]);
  let Q = r.useCallback(e => {
      var t;
      let n = null === (t = p.current) || void 0 === t ? void 0 : t.getListDimensions();
      if (null != n) e + n.height - B >= K ? X(!1) : X(!0)
    }, [K]),
    q = r.useCallback(e => {
      var t;
      e(W), null === (t = p.current) || void 0 === t || t.scrollTo(K)
    }, [K, W]),
    J = r.useCallback((e, t) => {
      let n = N[e];
      if (null == n) return 0;
      let i = Z ? k : 0;
      if (n.type === L.EmojiCategoryTypes.RECENT) return t ? 0 : G;
      if (n.type === L.EmojiCategoryTypes.GUILD) {
        let n = N[e + 1];
        return null != n && n.type !== L.EmojiCategoryTypes.GUILD ? t ? B + -2 * V + U + i : U : t ? i : U
      }
      return t ? U + i : 2 * U
    }, [N, Z]),
    $ = r.useMemo(() => function(e, t) {
      return (0, i.jsx)(r.Fragment, {
        children: t
      }, e)
    }, []),
    ee = Z ? "shortcut" : "hiddenshortcut";
  return (0, i.jsx)(f.default, {
    categoryListRef: p,
    expressionsListRef: n,
    className: t,
    store: T.EmojiPickerStore,
    categories: N,
    listPadding: D,
    onScroll: Q,
    renderCategoryListItem: v,
    renderSection: $,
    rowCount: N.length,
    categoryHeight: P,
    getScrollOffsetForIndex: J,
    rowCountBySection: z,
    children: e => w >= 7 && (0, i.jsx)(c.Clickable, {
      "aria-hidden": !Z,
      "aria-label": M.default.Messages.EMOJI_PICKER_SCROLL_TO_UNICODE_A11Y_LABEL,
      className: s()(y.unicodeShortcut, {
        [y.unicodeShortcutInvisible]: !Z
      }),
      tabIndex: Z ? 0 : -1,
      onClick: () => q(e),
      children: (0, i.jsx)(A.default, {
        height: b,
        width: b
      })
    }, ee)
  })
}