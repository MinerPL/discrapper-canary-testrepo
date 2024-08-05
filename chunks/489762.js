n(47120);
var r = n(735250),
  i = n(470079),
  a = n(143927),
  s = n(442837),
  o = n(477690),
  l = n(481060),
  u = n(788911),
  c = n(2052),
  d = n(100527),
  _ = n(906732),
  E = n(880949),
  f = n(806966),
  h = n(28546),
  p = n(691251),
  m = n(98528),
  I = n(551058),
  T = n(695346),
  g = n(430824),
  S = n(594174),
  A = n(695464),
  N = n(626135),
  v = n(624138),
  O = n(191177),
  R = n(285651),
  C = n(926491),
  y = n(373228),
  D = n(378233),
  L = n(419922),
  b = n(1450),
  M = n(491173),
  P = n(515005),
  U = n(652136),
  w = n(981631),
  x = n(957825),
  G = n(689938),
  k = n(806140),
  B = n(239840);
let F = (0, v.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
  V = (0, v.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
  H = (0, v.Mg)(o.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
  Z = (0, v.Mg)(o.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
  Y = (0, v.Mg)(o.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
  j = (0, v.Mg)(o.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
  W = (0, v.Mg)(o.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
  K = (0, v.Mg)(o.Z.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
  z = (0, v.Mg)(o.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
  q = (0, v.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
  Q = (0, v.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
  X = (0, v.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
  $ = (0, v.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
  J = q + 2 * X + $,
  ee = Q + 2 * X + $,
  et = [
H,
Y,
j,
W
  ],
  en = [
Z,
Y,
j,
W
  ],
  er = (0, v.Mg)(o.Z.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
  ei = [
'laugh',
'wave',
'yes',
'dance',
'sad',
'no',
'hi',
'bye',
'cry',
'ok'
  ],
  ea = e => {
let {
  onSuggestionClick: t
} = e;
return (0, r.jsx)('div', {
  className: k.searchSuggestions,
  children: ei.map(e => (0, r.jsx)(l.Clickable, {
    className: k.searchSuggestion,
    onClick: () => t(e),
    children: (0, r.jsx)(l.Text, {
      variant: 'text-sm/normal',
      color: 'text-normal',
      children: e
    })
  }, e))
});
  },
  es = e => {
let {
  onSelectSticker: t,
  channel: n,
  currentUser: r
} = e, a = (0, c.O)(), {
  analyticsLocations: s
} = (0, _.ZP)(), o = (0, h.Iu)(e => e.searchQuery), l = i.useCallback(e => {
  let {
    visibleRowIndex: t,
    columnIndex: n,
    gridSectionIndex: r
  } = e;
  f.ZN.setActiveCategoryIndex(r), f.ZN.setInspectedExpressionPosition(n, t, p.u.MOUSE_EVENT), e.type === y.al.STICKER && f.ZN.setSearchPlaceholder(e.sticker.name);
}, []);
return {
  handleStickerInspect: l,
  handleSelect: i.useCallback(e => {
    if (e.type !== y.al.STICKER)
      return;
    let {
      packId: i,
      sticker: l,
      type: u
    } = e, c = {
      ...a.location,
      object: '' === o ? w.qAy.STICKER_PICKER_VIEW_ALL : w.qAy.STICKER_SEARCH_VIEW_ALL
    };
    if (null != l && !(0, R.kl)(l, r, n)) {
      let e = C.Z.getStickerPack(i);
      null != e && (N.default.track(w.rMx.STICKER_PACK_VIEW_ALL, {
        sticker_id: l.id,
        sticker_pack_id: i,
        location: c,
        location_stack: s
      }), (0, U.Z)({
        stickerPack: e,
        analyticsLocations: s
      }));
      let t = (0, D.J8)(l),
        a = (0, R.cO)(l, r, n);
      a === R.eb.SENDABLE_WITH_PREMIUM && (0, O.f)(!0), t && R.eb.SENDABLE_WITH_BOOSTED_GUILD;
      return;
    }
    u === y.al.STICKER && null != l && t(e);
  }, [
    a.location,
    o,
    r,
    n,
    s,
    t
  ])
};
  },
  eo = e => {
let {
  collapsedStickersCategories: t,
  gridWidth: n,
  onSelectSticker: a,
  getStickerItemProps: o,
  getStickerRowProps: u,
  gutterWidth: d,
  inspectedStickerPosition: _,
  isScrolling: f,
  isUsingKeyboardNavigation: h,
  stickersGrid: p,
  stickersCategories: m,
  filteredStickers: A,
  ownedStickerPacks: v,
  channel: O
} = e, R = (0, c.O)(), M = (0, s.e7)([S.default], () => S.default.getCurrentUser()), {
  handleStickerInspect: U,
  handleSelect: B
} = es({
  onSelectSticker: a,
  channel: O,
  currentUser: M
}), [H, Z] = i.useState(!1), Y = i.useCallback(e => {
  T._O.updateSetting(Array.from(e));
}, []), j = i.useCallback(e => {
  let t = p[e];
  return null != t ? (0, r.jsx)(P.Z, {
    getStickerItemProps: o,
    getStickerRowProps: u,
    gutterWidth: d,
    inspectedStickerPosition: _,
    isScrolling: f,
    isUsingKeyboardNavigation: h,
    onInspect: U,
    onSelect: B,
    rowIndex: e,
    stickerClassName: k.sticker,
    stickerDescriptors: t,
    stickerSize: n > F ? q : Q,
    preferAnimation: n <= V,
    ownedStickerPacks: v,
    isDisplayingIndividualStickers: !0,
    channel: O,
    currentUser: M
  }, e) : null;
}, [
  p,
  o,
  u,
  d,
  _,
  f,
  h,
  U,
  B,
  n,
  v,
  O,
  M
]), W = i.useCallback((e, t) => (0, r.jsx)('div', {
  children: t
}, e), []), X = i.useCallback(function(e) {
  let {
    isStickerPack: n = !0
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = new Set(t), i = t.has(e);
  i ? r.delete(e) : r.add(e), N.default.track(w.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
    location: null == R ? void 0 : R.location,
    tab: x.X1.STICKER,
    collapsed: !i,
    sticker_pack_id: n ? e : null
  }), Y(r);
}, [
  R,
  t,
  Y
]), $ = i.useCallback(e => {
  let n = m[e];
  if (null != A) {
    let {
      sendable: t,
      sendableWithPremium: n
    } = A;
    if (0 === e && t.length > 0)
      return null;
    let i = t.length > 0 && n.length > 0;
    return (0, r.jsxs)(r.Fragment, {
      children: [
        i ? (0, r.jsx)('div', {
          className: k.divider,
          children: (0, r.jsx)(l.FormDivider, {})
        }) : null,
        (0, r.jsx)(I.Z, {
          className: k.packHeader,
          'aria-label': G.Z.Messages.STICKERS_YOU_MIGHT_LIKE_A11Y,
          children: G.Z.Messages.STICKERS_YOU_MIGHT_LIKE
        }, 'stickers-you-might-like-header')
      ]
    });
  }
  switch (n.type) {
    case y.Ih.FAVORITE:
      return (0, r.jsx)(I.Z, {
        className: k.packHeader,
        'aria-label': G.Z.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
          categoryName: n.name
        }),
        icon: (0, r.jsx)(l.StarIcon, {
          size: 'xs',
          color: 'currentColor'
        }),
        isCollapsed: t.has(n.id),
        onClick: () => X(n.id, {
          isStickerPack: !1
        }),
        children: n.name
      }, 'header-'.concat(n.id));
    case y.Ih.RECENT:
      return (0, r.jsx)(I.Z, {
        className: k.packHeader,
        'aria-label': G.Z.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
          categoryName: n.name
        }),
        icon: (0, r.jsx)(l.ClockIcon, {
          size: 'xs',
          color: 'currentColor'
        }),
        isCollapsed: t.has(n.id),
        onClick: () => X(n.id, {
          isStickerPack: !1
        }),
        children: n.name
      }, 'header-'.concat(n.id));
    case y.Ih.GUILD:
    case y.Ih.EMPTY_GUILD_UPSELL: {
      let e = g.Z.getGuild(n.id);
      if (null == e)
        return null;
      return (0, r.jsx)(I.Z, {
        className: k.packHeader,
        'aria-label': G.Z.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
          categoryName: e.name
        }),
        icon: (0, r.jsx)(E.Z, {
          guild: e,
          height: 16,
          width: 16
        }),
        isCollapsed: t.has(e.id),
        onClick: () => X(e.id),
        children: e.name
      }, 'h'.concat(e.id));
    }
    case y.Ih.PACK: {
      let e = C.Z.getStickerPack(n.id);
      if (null == e)
        return null;
      return (0, r.jsx)(I.Z, {
        className: k.packHeader,
        'aria-label': G.Z.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
          categoryName: e.name
        }),
        icon: (0, r.jsx)(L.ZP, {
          disableAnimation: !0,
          size: 12,
          sticker: (0, D.Zt)(e)
        }),
        isCollapsed: t.has(e.id),
        onClick: () => X(e.id),
        children: e.name
      }, 'h'.concat(e.id));
    }
  }
}, [
  t,
  m,
  X,
  A
]), J = i.useCallback(e => {
  if (null != A) {
    let {
      sendable: t,
      sendableWithPremium: n
    } = A;
    return 0 === e && t.length > 0 ? 0 : z + (t.length > 0 && n.length > 0 ? K : 0);
  }
  return z;
}, [A]), ee = i.useCallback(e => {
  let n = m[e],
    i = t.has(n.id);
  return n.type !== y.Ih.EMPTY_GUILD_UPSELL || null != A || i ? null : (0, r.jsx)(b.Z, {
    className: k.emptyGuildUpsell,
    guildId: n.id,
    channel: O,
    shouldTrackUpsellViewed: !H,
    setTrackedUpsellViewed: Z
  }, 'sticker-picker-empty-guild-inline-upsell-'.concat(n.id));
}, [
  m,
  t,
  A,
  O,
  H
]);
return {
  renderRow: j,
  renderSection: W,
  renderSectionHeader: $,
  sectionHeaderHeight: J,
  renderSectionFooter: ee,
  sectionFooterHeight: i.useCallback(e => {
    let n = m[e],
      r = t.has(n.id);
    return n.type !== y.Ih.EMPTY_GUILD_UPSELL || r ? 0 : er;
  }, [
    m,
    t
  ])
};
  },
  el = i.forwardRef(function(e, t) {
let {
  collapsedStickersCategories: n,
  gridWidth: o,
  filteredStickers: l,
  getStickerItemProps: c,
  getStickerRowProps: E,
  gutterWidth: p,
  isUsingKeyboardNavigation: I,
  onSelectSticker: T,
  rowCount: g,
  rowCountBySection: S,
  stickersCategories: N,
  stickersGrid: v,
  channel: O
} = e, R = i.useRef(!1), y = i.useRef(null), [D, L] = f.ZN.useStore(e => [
  e.activeCategoryIndex,
  e.inspectedExpressionPosition
], a.Z), {
  analyticsLocations: b
} = (0, _.ZP)(d.Z.STICKER_PICKER), P = (0, h.Iu)(e => e.searchQuery), U = (0, s.e7)([C.Z], () => C.Z.getPremiumPacks()), {
  renderRow: w,
  renderSection: x,
  renderSectionFooter: V,
  sectionFooterHeight: H,
  renderSectionHeader: Z,
  sectionHeaderHeight: Y
} = eo({
  collapsedStickersCategories: n,
  gridWidth: o,
  stickersCategories: N,
  stickersGrid: v,
  isScrolling: R,
  isUsingKeyboardNavigation: I,
  onSelectSticker: T,
  getStickerItemProps: c,
  getStickerRowProps: E,
  gutterWidth: p,
  inspectedStickerPosition: L,
  filteredStickers: l,
  ownedStickerPacks: i.useMemo(() => new Set(U.map(e => e.id)), [U]),
  channel: O
}), j = (0, m.Qs)({
  activeCategoryIndex: D,
  isScrolling: R,
  listRef: y,
  onActiveCategoryIndexChange: f.ZN.setActiveCategoryIndex,
  scrollOffset: 20,
  searchQuery: P
});
return (0, m.Xs)({
  searchQuery: P,
  activeCategoryIndex: D,
  listRef: y
}), i.useImperativeHandle(t, () => ({
  scrollTo: function() {
    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return null === (e = y.current) || void 0 === e ? void 0 : e.scrollTo(...n);
  },
  getRowDescriptors: () => {
    var e, t;
    return null !== (t = null === (e = y.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : [];
  },
  getSectionDescriptors: () => {
    var e, t;
    return null !== (t = null === (e = y.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : [];
  },
  scrollToSectionTop: function() {
    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return null === (e = y.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n);
  },
  scrollRowIntoView: function() {
    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return null === (e = y.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n);
  },
  getScrollerNode: function() {
    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return null === (e = y.current) || void 0 === e ? void 0 : e.getScrollerNode(...n);
  },
  scrollIntoViewNode: function() {
    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return null === (e = y.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n);
  },
  getListDimensions: function() {
    for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return null !== (t = null === (e = y.current) || void 0 === e ? void 0 : e.getListDimensions(...r)) && void 0 !== t ? t : {
      height: -1,
      totalHeight: -1
    };
  }
}), []), (0, r.jsx)(_.Gt, {
  value: b,
  children: (0, r.jsxs)('div', {
    className: k.wrapper,
    children: [
      null != l && 0 === l.sendable.length && 0 === l.sendableWithPremium.length ? (0, r.jsx)(u.Z, {
        message: G.Z.Messages.NO_STICKER_SEARCH_RESULTS_WITH_SUGGESTIONS,
        className: k.__invalid_noSearchResultsContainer,
        noResultsImageURL: B,
        suggestions: (0, r.jsx)(ea, {
          onSuggestionClick: e => (0, h.ql)(e, !0)
        })
      }) : (0, r.jsx)(A.Z, {
        role: 'none presentation',
        listPadding: null != l ? en : et,
        onScroll: j,
        renderRow: w,
        renderSection: null == l ? x : void 0,
        renderSectionHeader: Z,
        renderSectionFooter: V,
        rowCount: g,
        rowCountBySection: S,
        rowHeight: o > F ? J : ee,
        sectionHeaderHeight: Y,
        sectionFooterHeight: H,
        stickyHeaders: !0,
        ref: y
      }),
      (0, r.jsx)(M.Z, {
        stickersGrid: v
      })
    ]
  })
});
  });
t.Z = el;