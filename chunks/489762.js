"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(143927),
  o = n(442837),
  a = n(477690),
  l = n(481060),
  u = n(788911),
  _ = n(2052),
  d = n(100527),
  c = n(906732),
  E = n(880949),
  I = n(806966),
  T = n(28546),
  h = n(691251),
  S = n(98528),
  f = n(551058),
  N = n(695346),
  A = n(430824),
  m = n(594174),
  O = n(695464),
  R = n(497309),
  C = n(898140),
  p = n(626135),
  g = n(624138),
  L = n(191177),
  v = n(285651),
  D = n(926491),
  M = n(373228),
  P = n(378233),
  y = n(419922),
  U = n(1450),
  b = n(491173),
  G = n(515005),
  w = n(652136),
  k = n(981631),
  B = n(957825),
  x = n(689938),
  V = n(102554),
  Z = n(239840);
let H = (0, g.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
  F = (0, g.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
  Y = (0, g.Mg)(a.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
  j = (0, g.Mg)(a.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
  W = (0, g.Mg)(a.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
  K = (0, g.Mg)(a.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
  z = (0, g.Mg)(a.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
  q = (0, g.Mg)(a.Z.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
  X = (0, g.Mg)(a.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
  Q = (0, g.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
  J = (0, g.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
  $ = (0, g.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
  ee = (0, g.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
  et = Q + 2 * $ + ee,
  en = J + 2 * $ + ee,
  ei = [Y, W, K, z],
  er = [j, W, K, z],
  es = (0, g.Mg)(a.Z.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
  eo = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
  ea = e => {
    let {
      onSuggestionClick: t
    } = e;
    return (0, i.jsx)("div", {
      className: V.searchSuggestions,
      children: eo.map(e => (0, i.jsx)(l.Clickable, {
        className: V.searchSuggestion,
        onClick: () => t(e),
        children: (0, i.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          children: e
        })
      }, e))
    })
  },
  el = e => {
    let {
      onSelectSticker: t,
      channel: n,
      currentUser: i
    } = e, s = (0, _.O)(), {
      analyticsLocations: o
    } = (0, c.ZP)(), a = (0, T.Iu)(e => e.searchQuery), l = r.useCallback(e => {
      let {
        visibleRowIndex: t,
        columnIndex: n,
        gridSectionIndex: i
      } = e;
      I.ZN.setActiveCategoryIndex(i), I.ZN.setInspectedExpressionPosition(n, t, h.u.MOUSE_EVENT), e.type === M.al.STICKER && I.ZN.setSearchPlaceholder(e.sticker.name)
    }, []);
    return {
      handleStickerInspect: l,
      handleSelect: r.useCallback(e => {
        if (e.type !== M.al.STICKER) return;
        let {
          packId: r,
          sticker: l,
          type: u
        } = e, _ = {
          ...s.location,
          object: "" === a ? k.qAy.STICKER_PICKER_VIEW_ALL : k.qAy.STICKER_SEARCH_VIEW_ALL
        };
        if (null != l && !(0, v.kl)(l, i, n)) {
          let e = D.Z.getStickerPack(r);
          null != e && (p.default.track(k.rMx.STICKER_PACK_VIEW_ALL, {
            sticker_id: l.id,
            sticker_pack_id: r,
            location: _,
            location_stack: o
          }), (0, w.Z)({
            stickerPack: e,
            analyticsLocations: o
          }));
          let t = (0, P.J8)(l),
            s = (0, v.cO)(l, i, n);
          s === v.eb.SENDABLE_WITH_PREMIUM && (0, L.f)(!0), t && v.eb.SENDABLE_WITH_BOOSTED_GUILD;
          return
        }
        u === M.al.STICKER && null != l && t(e)
      }, [s.location, a, i, n, o, t])
    }
  },
  eu = e => {
    let {
      collapsedStickersCategories: t,
      gridWidth: n,
      onSelectSticker: s,
      getStickerItemProps: a,
      getStickerRowProps: u,
      gutterWidth: d,
      inspectedStickerPosition: c,
      isScrolling: I,
      isUsingKeyboardNavigation: T,
      stickersGrid: h,
      stickersCategories: S,
      filteredStickers: O,
      ownedStickerPacks: g,
      channel: L
    } = e, v = (0, _.O)(), b = (0, o.e7)([m.default], () => m.default.getCurrentUser()), {
      handleStickerInspect: w,
      handleSelect: Z
    } = el({
      onSelectSticker: s,
      channel: L,
      currentUser: b
    }), [Y, j] = r.useState(!1), W = r.useCallback(e => {
      N._O.updateSetting(Array.from(e))
    }, []), K = r.useCallback(e => {
      let t = h[e];
      return null != t ? (0, i.jsx)(G.Z, {
        getStickerItemProps: a,
        getStickerRowProps: u,
        gutterWidth: d,
        inspectedStickerPosition: c,
        isScrolling: I,
        isUsingKeyboardNavigation: T,
        onInspect: w,
        onSelect: Z,
        rowIndex: e,
        stickerClassName: V.sticker,
        stickerDescriptors: t,
        stickerSize: n > H ? Q : J,
        preferAnimation: n <= F,
        ownedStickerPacks: g,
        isDisplayingIndividualStickers: !0,
        channel: L,
        currentUser: b
      }, e) : null
    }, [h, a, u, d, c, I, T, w, Z, n, g, L, b]), z = r.useCallback((e, t) => (0, i.jsx)("div", {
      children: t
    }, e), []), $ = r.useCallback(function(e) {
      let {
        isStickerPack: n = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = new Set(t), r = t.has(e);
      r ? i.delete(e) : i.add(e), p.default.track(k.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
        location: null == v ? void 0 : v.location,
        tab: B.X1.STICKER,
        collapsed: !r,
        sticker_pack_id: n ? e : null
      }), W(i)
    }, [v, t, W]), ee = r.useCallback(e => {
      let n = S[e];
      if (null != O) {
        let {
          sendable: t,
          sendableWithPremium: n
        } = O;
        if (0 === e && t.length > 0) return null;
        let r = t.length > 0 && n.length > 0;
        return (0, i.jsxs)(i.Fragment, {
          children: [r ? (0, i.jsx)("div", {
            className: V.divider,
            children: (0, i.jsx)(l.FormDivider, {})
          }) : null, (0, i.jsx)(f.Z, {
            className: V.packHeader,
            "aria-label": x.Z.Messages.STICKERS_YOU_MIGHT_LIKE_A11Y,
            children: x.Z.Messages.STICKERS_YOU_MIGHT_LIKE
          }, "stickers-you-might-like-header")]
        })
      }
      switch (n.type) {
        case M.Ih.FAVORITE:
          return (0, i.jsx)(f.Z, {
            className: V.packHeader,
            "aria-label": x.Z.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
              categoryName: n.name
            }),
            icon: (0, i.jsx)(C.Z, {
              height: 16,
              width: 16
            }),
            isCollapsed: t.has(n.id),
            onClick: () => $(n.id, {
              isStickerPack: !1
            }),
            children: n.name
          }, "header-".concat(n.id));
        case M.Ih.RECENT:
          return (0, i.jsx)(f.Z, {
            className: V.packHeader,
            "aria-label": x.Z.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
              categoryName: n.name
            }),
            icon: (0, i.jsx)(R.Z, {}),
            isCollapsed: t.has(n.id),
            onClick: () => $(n.id, {
              isStickerPack: !1
            }),
            children: n.name
          }, "header-".concat(n.id));
        case M.Ih.GUILD:
        case M.Ih.EMPTY_GUILD_UPSELL: {
          let e = A.Z.getGuild(n.id);
          if (null == e) return null;
          return (0, i.jsx)(f.Z, {
            className: V.packHeader,
            "aria-label": x.Z.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
              categoryName: e.name
            }),
            icon: (0, i.jsx)(E.Z, {
              guild: e,
              height: 16,
              width: 16
            }),
            isCollapsed: t.has(e.id),
            onClick: () => $(e.id),
            children: e.name
          }, "h".concat(e.id))
        }
        case M.Ih.PACK: {
          let e = D.Z.getStickerPack(n.id);
          if (null == e) return null;
          return (0, i.jsx)(f.Z, {
            className: V.packHeader,
            "aria-label": x.Z.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
              categoryName: e.name
            }),
            icon: (0, i.jsx)(y.ZP, {
              disableAnimation: !0,
              size: 12,
              sticker: (0, P.Zt)(e)
            }),
            isCollapsed: t.has(e.id),
            onClick: () => $(e.id),
            children: e.name
          }, "h".concat(e.id))
        }
      }
    }, [t, S, $, O]), et = r.useCallback(e => {
      if (null != O) {
        let {
          sendable: t,
          sendableWithPremium: n
        } = O;
        return 0 === e && t.length > 0 ? 0 : X + (t.length > 0 && n.length > 0 ? q : 0)
      }
      return X
    }, [O]), en = r.useCallback(e => {
      let n = S[e],
        r = t.has(n.id);
      return n.type !== M.Ih.EMPTY_GUILD_UPSELL || null != O || r ? null : (0, i.jsx)(U.Z, {
        className: V.emptyGuildUpsell,
        guildId: n.id,
        channel: L,
        shouldTrackUpsellViewed: !Y,
        setTrackedUpsellViewed: j
      }, "sticker-picker-empty-guild-inline-upsell-".concat(n.id))
    }, [S, t, O, L, Y]);
    return {
      renderRow: K,
      renderSection: z,
      renderSectionHeader: ee,
      sectionHeaderHeight: et,
      renderSectionFooter: en,
      sectionFooterHeight: r.useCallback(e => {
        let n = S[e],
          i = t.has(n.id);
        return n.type !== M.Ih.EMPTY_GUILD_UPSELL || i ? 0 : es
      }, [S, t])
    }
  },
  e_ = r.forwardRef(function(e, t) {
    let {
      collapsedStickersCategories: n,
      gridWidth: a,
      filteredStickers: l,
      getStickerItemProps: _,
      getStickerRowProps: E,
      gutterWidth: h,
      isUsingKeyboardNavigation: f,
      onSelectSticker: N,
      rowCount: A,
      rowCountBySection: m,
      stickersCategories: R,
      stickersGrid: C,
      channel: p
    } = e, g = r.useRef(!1), L = r.useRef(null), [v, M] = I.ZN.useStore(e => [e.activeCategoryIndex, e.inspectedExpressionPosition], s.Z), {
      analyticsLocations: P
    } = (0, c.ZP)(d.Z.STICKER_PICKER), y = (0, T.Iu)(e => e.searchQuery), U = (0, o.e7)([D.Z], () => D.Z.getPremiumPacks()), {
      renderRow: G,
      renderSection: w,
      renderSectionFooter: k,
      sectionFooterHeight: B,
      renderSectionHeader: F,
      sectionHeaderHeight: Y
    } = eu({
      collapsedStickersCategories: n,
      gridWidth: a,
      stickersCategories: R,
      stickersGrid: C,
      isScrolling: g,
      isUsingKeyboardNavigation: f,
      onSelectSticker: N,
      getStickerItemProps: _,
      getStickerRowProps: E,
      gutterWidth: h,
      inspectedStickerPosition: M,
      filteredStickers: l,
      ownedStickerPacks: r.useMemo(() => new Set(U.map(e => e.id)), [U]),
      channel: p
    }), j = (0, S.Qs)({
      activeCategoryIndex: v,
      isScrolling: g,
      listRef: L,
      onActiveCategoryIndexChange: I.ZN.setActiveCategoryIndex,
      scrollOffset: 20,
      searchQuery: y
    });
    return (0, S.Xs)({
      searchQuery: y,
      activeCategoryIndex: v,
      listRef: L
    }), r.useImperativeHandle(t, () => ({
      scrollTo: function() {
        for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        return null === (e = L.current) || void 0 === e ? void 0 : e.scrollTo(...n)
      },
      getRowDescriptors: () => {
        var e, t;
        return null !== (t = null === (e = L.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : []
      },
      getSectionDescriptors: () => {
        var e, t;
        return null !== (t = null === (e = L.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : []
      },
      scrollToSectionTop: function() {
        for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        return null === (e = L.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n)
      },
      scrollRowIntoView: function() {
        for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        return null === (e = L.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n)
      },
      getScrollerNode: function() {
        for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        return null === (e = L.current) || void 0 === e ? void 0 : e.getScrollerNode(...n)
      },
      scrollIntoViewNode: function() {
        for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        return null === (e = L.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n)
      },
      getListDimensions: function() {
        for (var e, t, n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
        return null !== (t = null === (e = L.current) || void 0 === e ? void 0 : e.getListDimensions(...i)) && void 0 !== t ? t : {
          height: -1,
          totalHeight: -1
        }
      }
    }), []), (0, i.jsx)(c.Gt, {
      value: P,
      children: (0, i.jsxs)("div", {
        className: V.wrapper,
        children: [null != l && 0 === l.sendable.length && 0 === l.sendableWithPremium.length ? (0, i.jsx)(u.Z, {
          message: x.Z.Messages.NO_STICKER_SEARCH_RESULTS_WITH_SUGGESTIONS,
          className: V.__invalid_noSearchResultsContainer,
          noResultsImageURL: Z,
          suggestions: (0, i.jsx)(ea, {
            onSuggestionClick: e => (0, T.ql)(e, !0)
          })
        }) : (0, i.jsx)(O.Z, {
          role: "none presentation",
          listPadding: null != l ? er : ei,
          onScroll: j,
          renderRow: G,
          renderSection: null == l ? w : void 0,
          renderSectionHeader: F,
          renderSectionFooter: k,
          rowCount: A,
          rowCountBySection: m,
          rowHeight: a > H ? et : en,
          sectionHeaderHeight: Y,
          sectionFooterHeight: B,
          stickyHeaders: !0,
          ref: L
        }), (0, i.jsx)(b.Z, {
          stickersGrid: C
        })]
      })
    })
  });
t.Z = e_