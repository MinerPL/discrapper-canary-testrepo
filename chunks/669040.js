"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(920906),
  _ = n(873546),
  d = n(442837),
  c = n(946188),
  E = n(477690),
  I = n(481060),
  T = n(788911),
  h = n(2052),
  S = n(607070),
  f = n(906732),
  N = n(806966),
  A = n(28546),
  m = n(691251),
  O = n(98528),
  R = n(551058),
  C = n(536442),
  p = n(75145),
  g = n(197115),
  L = n(695346),
  v = n(594174),
  D = n(695464),
  M = n(242411),
  P = n(626135),
  y = n(111361),
  U = n(624138),
  b = n(543241),
  G = n(883661),
  w = n(880949),
  k = n(784222),
  B = n(172800),
  x = n(149203),
  V = n(981631),
  Z = n(957825),
  H = n(474936),
  F = n(689938),
  Y = n(995292);
let j = (0, U.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
  W = (0, U.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
  K = (0, U.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
  z = (0, U.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
  q = (0, U.Mg)(E.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
  X = (0, U.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
  Q = (0, U.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
  J = e => e + 2 * Q,
  $ = e => {
    let {
      collapsedSections: t,
      diversitySurrogate: n,
      emojiGrid: s,
      emojiSize: a,
      onEmojiSelect: u,
      searchQuery: _,
      sectionDescriptors: E,
      setCollapsedSections: I,
      getEmojiItemProps: T,
      getEmojiRowProps: S,
      isScrolling: f,
      isUsingKeyboardNavigation: A,
      allowAnimatedEmoji: O,
      channelGuildId: g,
      messageId: L,
      isBurstReaction: v,
      listHeaderClassName: D,
      activeSectionIndex: M,
      upsellGlowOpacity: y
    } = e, U = (0, h.O)(), H = r.useRef(V.xAR), F = r.useMemo(() => "" !== n ? c.Z.convert.toCodePoint(n) : "", [n]), Q = r.useCallback(e => {
      let t = E[e],
        n = E[e + 1];
      return e >= E.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked
    }, [E]), J = r.useCallback(e => {
      if (e >= E.length - 1) return !1;
      let t = E[e],
        n = E[e + 1];
      return !t.isNitroLocked && n.isNitroLocked
    }, [E]), $ = r.useCallback(function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        i = new Set(t),
        r = t.has(e);
      r ? i.delete(e) : i.add(e), null != n && P.default.track(V.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
        location: U.location,
        tab: Z.X1.EMOJI,
        collapsed: !r,
        guild_id: n.id
      }), I(i)
    }, [U, t, I]), ee = r.useCallback(e => {
      let {
        columnIndex: t,
        visibleRowIndex: n
      } = e, i = e.type === k.ld.EMOJI ? e.emoji.allNamesString : e.name;
      H.current !== V.xAR && window.cancelAnimationFrame(H.current), H.current = window.requestAnimationFrame(() => {
        N.kJ.setInspectedExpressionPosition(t, n, m.u.MOUSE_EVENT), N.kJ.setSearchPlaceholder(i), H.current = V.xAR
      })
    }, []), et = (0, d.e7)([C.qc], () => C.qc.hasHotspot(C.v6.FAVORITE_EMOJI_TOOLTIP), []), en = r.useMemo(() => l().memoize((e, t) => {
      let n = s[e],
        r = E[t.sectionIndex];
      return (0, i.jsx)(B.Z, {
        emojiDescriptors: n,
        emojiSize: a,
        surrogateCodePoint: F,
        onInspect: ee,
        onSelect: u,
        getEmojiItemProps: T,
        getEmojiRowProps: S,
        isScrolling: f,
        isUsingKeyboardNavigation: A,
        rowIndex: e,
        allowAnimatedEmoji: O,
        showEmojiFavoriteTooltip: et,
        channelGuildId: g,
        category: r.sectionId,
        selectedItemClassName: Y.__invalid_selectedItem,
        messageId: L,
        isBurstReaction: v,
        inNitroLockedSection: r.isNitroLocked
      }, e)
    }), [s, E, a, F, ee, u, T, S, f, A, O, et, g, L, v]);
    r.useEffect(() => () => {
      var e, t;
      return null === (t = en.cache) || void 0 === t ? void 0 : null === (e = t.clear) || void 0 === e ? void 0 : e.call(t)
    }, [en]);
    let ei = r.useMemo(() => l().memoize(e => {
        let n = E[e];
        if (null == n) return;
        let {
          guild: r,
          categoryId: s,
          type: a,
          sectionId: l
        } = n;
        if (a === x.En.SEARCH_RESULTS) return;
        let u = a === x.En.GUILD ? null != r ? (0, i.jsx)(w.Z, {
            guild: r,
            height: 16,
            width: 16
          }) : null : null != s ? (0, i.jsx)(G.Z, {
            categoryId: s,
            height: 16,
            width: 16
          }) : null,
          _ = null == r ? void 0 : r.toString();
        null != s && (_ = (0, b.Y1)(s, null == r ? void 0 : r.toString()));
        let d = M === e,
          c = n.isNitroLocked,
          I = c && !d,
          T = c && d;
        return (0, i.jsx)(R.Z, {
          className: o()(Y.header, D, {
            [Y.inactiveNitroHeader]: I,
            [Y.activeNitroHeader]: T
          }),
          icon: u,
          isCollapsed: t.has(l),
          onClick: () => $(l, r),
          children: _
        }, l)
      }), [E, t, $, D, M]),
      er = r.useCallback((e, n) => {
        let r = E[e],
          s = J(e),
          a = Q(e);
        return (0, i.jsx)("div", {
          className: o()(Y.categorySection, {
            [Y.categorySectionLast]: e === E.length - 1,
            [Y.categorySectionCollapsed]: t.has(r.sectionId),
            [Y.categorySectionNitroLocked]: r.isNitroLocked,
            [Y.categorySectionNitroDivider]: s || a
          }),
          children: n
        }, e)
      }, [t, E, J, Q]),
      es = r.useCallback(e => J(e) ? (0, i.jsx)(p.Z, {
        glowOpacity: y
      }) : Q(e) ? (0, i.jsx)("div", {
        className: Y.nitroBottomDivider
      }) : null, [y, J, Q]),
      eo = r.useCallback(e => J(e) ? 41 : Q(e) ? 33 : 0, [J, Q]),
      ea = r.useCallback(e => {
        var n;
        return e === E.length - 1 || t.has(null === (n = E[e]) || void 0 === n ? void 0 : n.sectionId) || J(e) || Q(e) ? 0 : X
      }, [t, E, J, Q]),
      el = r.useMemo(() => ["" !== _ ? z : j, W, K, 0], [_]);
    return {
      listPadding: el,
      renderRow: en,
      renderSection: er,
      renderSectionHeader: ei,
      renderSectionFooter: es,
      sectionMarginBottom: ea,
      sectionHeaderHeight: r.useCallback(e => E[e].type === x.En.SEARCH_RESULTS ? 0 : q, [E]),
      sectionFooterHeight: eo
    }
  },
  ee = r.memo(function(e) {
    let {
      diversitySurrogate: t,
      emojiGrid: n,
      emojiListRef: s,
      emojiSize: o,
      onEmojiSelect: a,
      sectionDescriptors: l,
      rowCountBySection: c,
      collapsedSections: E,
      setCollapsedSections: m,
      getEmojiItemProps: R,
      getEmojiRowProps: C,
      rowCount: p,
      isUsingKeyboardNavigation: U,
      channelGuildId: b,
      messageId: G,
      isBurstReaction: w,
      listHeaderClassName: k
    } = e, B = r.useRef(!1), x = N.kJ.useStore(e => e.activeCategoryIndex), Z = (0, A.Iu)(e => e.searchQuery), j = L.Yk.useSetting(), W = (0, d.e7)([v.default], () => v.default.getCurrentUser()), K = (0, y.I5)(W), {
      location: z
    } = (0, h.O)(), {
      analyticsLocations: q
    } = (0, f.ZP)(), [X, Q] = r.useState(0), [ee, et] = r.useState(!1), [en, ei] = r.useState(0), er = (0, d.e7)([S.Z], () => S.Z.useReducedMotion), es = (0, u.useSpring)({
      transform: ee ? "translateY(0%)" : "translateY(120%)",
      opacity: ee ? 1 : 0,
      config: {
        tension: 120,
        friction: 14
      },
      immediate: er
    }), {
      listPadding: eo,
      renderRow: ea,
      renderSection: el,
      renderSectionHeader: eu,
      renderSectionFooter: e_,
      sectionMarginBottom: ed,
      sectionHeaderHeight: ec,
      sectionFooterHeight: eE
    } = $({
      collapsedSections: E,
      diversitySurrogate: t,
      emojiGrid: n,
      emojiSize: o,
      onEmojiSelect: a,
      searchQuery: Z,
      sectionDescriptors: l,
      setCollapsedSections: m,
      getEmojiItemProps: R,
      getEmojiRowProps: C,
      isScrolling: B,
      isUsingKeyboardNavigation: U,
      allowAnimatedEmoji: j,
      channelGuildId: b,
      messageId: G,
      isBurstReaction: w,
      listHeaderClassName: k,
      activeSectionIndex: X,
      upsellGlowOpacity: en
    }), eI = (0, O.Uf)({
      listRef: s,
      searchQuery: Z,
      setShowUpsell: et,
      setUpsellGlowOpacity: ei,
      emojiSectionDescriptors: l
    }), eT = (0, O.Qs)({
      activeCategoryIndex: x,
      isScrolling: B,
      listRef: s,
      onActiveCategoryIndexChange: e => {
        Q(e), "" === Z && N.kJ.setActiveCategoryIndex(e)
      },
      scrollOffset: 0,
      searchQuery: Z,
      disableForSearch: !1
    });
    (0, O.Xs)({
      searchQuery: Z,
      activeCategoryIndex: x,
      listRef: s
    });
    let eh = r.useCallback(e => {
        eI(e), eT(e)
      }, [eI, eT]),
      eS = l.length > 0;
    return r.useEffect(() => {
      ee && P.default.track(V.rMx.PREMIUM_UPSELL_VIEWED, {
        type: H.cd.EMOJI_PICKER_FLOATING_UPSELL,
        location: z,
        location_stack: q
      })
    }, [z, q, ee]), r.useEffect(() => {
      "" !== Z && (ei(0), et(!1))
    }, [Z]), (0, i.jsxs)("div", {
      className: Y.listWrapper,
      children: [eS ? (0, i.jsx)(D.Z, {
        role: "none presentation",
        className: Y.list,
        listPadding: eo,
        onScroll: eh,
        renderRow: ea,
        renderSection: el,
        renderSectionHeader: eu,
        renderSectionFooter: e_,
        rowCount: p,
        rowCountBySection: c,
        rowHeight: J(o),
        sectionHeaderHeight: ec,
        sectionMarginBottom: ed,
        sectionFooterHeight: eE,
        stickyHeaders: !0,
        ref: s
      }) : (0, i.jsx)(T.Z, {
        message: F.Z.Messages.NO_EMOJI_SEARCH_RESULTS,
        className: Y.noSearchResultsContainer
      }), K || _.tq ? null : (0, i.jsxs)(u.animated.div, {
        style: {
          ...es,
          opacity: es.opacity
        },
        className: Y.upsellContainer,
        children: [(0, i.jsx)(M.Z, {
          width: 16,
          height: 16,
          className: Y.upsellLock
        }), (0, i.jsx)(I.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          className: Y.upsellText,
          children: F.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE
        }), (0, i.jsx)(g.Z, {
          className: Y.upsellButton,
          size: I.ButtonSizes.TINY,
          shinyButtonClassName: Y.upsellButton,
          subscriptionTier: H.Si.TIER_2,
          buttonText: F.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
          premiumModalAnalyticsLocation: {
            section: V.jXE.EMOJI_PICKER_FLOATING_UPSELL
          },
          tabIndex: ee ? 0 : -1
        })]
      })]
    })
  });
t.Z = ee