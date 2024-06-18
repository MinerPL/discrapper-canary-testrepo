"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(954955),
  o = n.n(s),
  a = n(143927),
  l = n(442837),
  u = n(477690),
  _ = n(481060),
  d = n(2052),
  c = n(100527),
  E = n(906732),
  I = n(806966),
  T = n(28546),
  h = n(98528),
  S = n(98278),
  f = n(639119),
  N = n(695346),
  A = n(594174),
  m = n(626135),
  O = n(624138),
  R = n(191177),
  C = n(285651),
  p = n(217590),
  g = n(453070),
  L = n(926491),
  v = n(373228),
  D = n(462109),
  M = n(422195),
  P = n(657795),
  y = n(489762),
  U = n(31543),
  b = n(814042),
  G = n(15350),
  w = n(611480),
  k = n(981631),
  B = n(802011);
let x = (0, O.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
  V = (0, O.Mg)(u.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
  Z = (0, O.Mg)(u.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
  H = (0, O.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
  F = (0, O.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
  Y = (0, O.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
  j = (0, O.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
  W = (0, O.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
  K = Y + 2 * W,
  z = j + 2 * W,
  q = o()(p.Iw, 200),
  X = o()(p.m1, 200),
  Q = r.forwardRef(function(e, t) {
    var s;
    let {
      containerWidth: o,
      channel: u,
      onSelectSticker: O,
      closePopout: Y
    } = e, {
      location: j
    } = (0, d.O)(), {
      analyticsLocations: W
    } = (0, E.ZP)(c.Z.STICKER_PICKER), Q = (null === (s = (0, f.N)()) || void 0 === s ? void 0 : s.subscription_trial) != null, J = r.useRef(null), $ = r.useRef(null), ee = r.useRef(null), et = (0, R.Q)(e => e.showPremiumUpsell), [en, ei] = (0, T.Iu)(e => [e.searchQuery, e.isSearchSuggestion], a.Z), er = r.useRef("");
    r.useImperativeHandle(t, () => ({
      onPickerOpen: eP
    }));
    let es = (0, g.Sd)(u),
      eo = 0 === es.filter(e => e.type !== v.Ih.EMPTY_GUILD_UPSELL).length,
      ea = (0, h.ep)({
        gridWrapperRef: J,
        containerWidth: o,
        showingEmptyState: eo,
        listPaddingLeft: V,
        listScrollbarWidth: 8
      }),
      el = N._O.useSetting(),
      eu = r.useMemo(() => new Set(el), [el]),
      e_ = (0, l.e7)([A.default], () => A.default.getCurrentUser()),
      ed = r.useMemo(() => (0, G.S)(en, e_, u), [en, e_, u]),
      ec = (0, g.RJ)(),
      eE = (0, g.LZ)(),
      eI = (0, l.cj)([L.Z], () => L.Z.getAllGuildStickers()),
      {
        sendable: eT = [],
        sendableWithPremium: eh = []
      } = null != ed ? ed : {},
      eS = eT.length + eh.length,
      ef = r.useCallback(e => {
        "" === en ? (0, p.On)(e) : (0, p.Yk)(e, en, eS), O(e.sticker, v.V0.STICKER_PICKER)
      }, [O, en, eS]),
      eN = null != ea && ea > x,
      {
        rowCount: eA,
        rowCountBySection: em,
        stickersGrid: eO,
        gutterWidth: eR,
        columnCounts: eC
      } = (0, g.el)({
        filteredStickers: ed,
        stickersCategories: es,
        collapsedStickersCategories: eu,
        listWidth: ea,
        listPaddingRight: Z,
        stickerNodeMargin: eN ? H : F,
        stickerNodeWidth: eN ? K : z
      }),
      ep = r.useCallback((e, t) => {
        let {
          location: r
        } = t;
        switch (e.type) {
          case v.al.CREATE_STICKER:
            m.default.track(k.rMx.OPEN_MODAL, {
              type: k.jXE.CREATE_STICKER_MODAL,
              location: j
            }), (0, _.openModalLazy)(async () => {
              let {
                default: t
              } = await Promise.all([n.e("49237"), n.e("99387"), n.e("93626"), n.e("84482")]).then(n.bind(n, 136735));
              return n => (0, i.jsx)(t, {
                guildId: e.guild_id,
                ...n
              })
            });
            break;
          case v.al.STICKER:
            null != e.sticker && (0, C.kl)(e.sticker, e_, u) && ef(e)
        }
      }, [j, e_, u, ef]),
      {
        getItemProps: eg,
        getRowProps: eL,
        gridContainerProps: ev,
        handleGridContainerKeyDown: eD,
        isUsingKeyboardNavigation: eM
      } = (0, D.t)({
        columnCounts: eC,
        stickersListRef: $,
        stickersGrid: eO,
        onGridItemSelect: ep,
        store: I.ZN,
        setInspectedStickerPosition: I.ZN.setInspectedExpressionPosition,
        gridNavigatorId: w.Vr
      });
    r.useEffect(() => I.ZN.resetStoreState, []);
    let eP = () => {
      let e = u.getGuildId(),
        t = [];
      if (null !== e) {
        var n;
        t = null !== (n = L.Z.getStickersByGuildId(e)) && void 0 !== n ? n : []
      }
      let i = 0;
      null != eI && [...eI.values()].forEach(e => {
        i += e.length
      }), (0, p.ev)({
        containerWidth: o,
        favoriteStickers: ec,
        frequentlyUsedStickers: eE,
        guildStickers: t,
        stickersTotal: i
      })
    };
    r.useEffect(() => {
      "" === er.current && "" !== en && (0, p.n8)(), er.current = en
    }, [en]), r.useEffect(() => {
      0 === eS ? q(en) : X(en, eS, ei)
    }, [en, eS, ei]), r.useLayoutEffect(() => {
      var e;
      null === (e = ee.current) || void 0 === e || e.focus()
    }, []);
    let ey = r.useCallback(() => {
      Y(), m.default.track(k.rMx.PREMIUM_PROMOTION_OPENED, {
        location_section: k.jXE.STICKER_PICKER_UPSELL
      }), (0, S.z)()
    }, [Y]);
    return (0, i.jsxs)(E.Gt, {
      value: W,
      children: [!(Q && eo) && (0, i.jsx)("div", {
        className: B.header,
        children: (0, i.jsx)(U.Z, {
          ref: ee,
          onKeyDown: eD,
          stickersListRef: $,
          channel: u
        })
      }), eo ? (0, i.jsx)(P.Z, {
        className: B.emptyState,
        onClose: Y
      }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          ref: J,
          className: B.listWrapper,
          id: w.Vr,
          ...ev,
          children: null != ea ? (0, i.jsx)(y.Z, {
            ref: $,
            collapsedStickersCategories: eu,
            filteredStickers: ed,
            getStickerItemProps: eg,
            getStickerRowProps: eL,
            gridWidth: ea,
            gutterWidth: eR,
            isUsingKeyboardNavigation: eM,
            onSelectSticker: ef,
            rowCount: eA,
            rowCountBySection: em,
            stickersCategories: es,
            stickersGrid: eO,
            channel: u
          }) : null
        }), (0, i.jsx)(M.Z, {
          stickersListRef: $,
          channel: u
        })]
      }), et && (0, i.jsx)(b.C, {
        onLearnMore: ey
      })]
    })
  });
t.Z = r.forwardRef((e, t) => ((0, g.fP)(), (0, i.jsx)("div", {
  className: B.wrapper,
  id: w.nZ,
  "aria-labelledby": w.ED,
  role: "tabpanel",
  children: e.isLoading ? (0, i.jsx)(_.Spinner, {
    className: B.loadingIndicator
  }) : (0, i.jsx)(Q, {
    ...e,
    ref: t
  })
})))