"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(873546),
  _ = n(374470),
  d = n(442837),
  c = n(952265),
  E = n(481060),
  I = n(153867),
  T = n(410575),
  h = n(347469),
  S = n(40851),
  f = n(367907),
  N = n(907040),
  A = n(455708),
  m = n(315744),
  O = n(603074),
  R = n(453070),
  C = n(926491),
  p = n(457040),
  g = n(740492),
  L = n(153850),
  v = n(585483),
  D = n(5967),
  M = n(28546),
  P = n(957825),
  y = n(981631),
  U = n(149203),
  b = n(185923),
  G = n(611480),
  w = n(689938),
  k = n(712337);
let B = P.Om + U.Su.MEDIUM,
  x = r.memo(function(e) {
    let {
      isActive: t,
      className: n,
      viewType: r,
      autoFocus: s = !1,
      "aria-controls": a,
      ...l
    } = e;
    return (0, i.jsx)(E.Button, {
      role: "tab",
      autoFocus: s,
      "aria-controls": t ? a : void 0,
      ...l,
      onClick: () => {
        f.ZP.trackWithMetadata(y.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
          tab: r,
          badged: !1
        }), (0, M.hr)(r)
      },
      "aria-current": t ? "page" : void 0,
      className: o()(n, k.navButton, k.navItem, {
        [k.navButtonActive]: t
      }),
      look: E.Button.Looks.BLANK,
      size: E.Button.Sizes.NONE
    })
  }),
  V = e => {
    let {
      positionContainerRef: t,
      drawerRef: n,
      orientation: i
    } = e, s = (0, d.e7)([g.ZP], () => g.ZP.expressionPickerWidth), [o, a] = r.useState(window.innerWidth), [u, _] = r.useState(null != s ? s : P._j.MIN), c = r.useMemo(() => {
      switch (u) {
        case P._j.MIN:
          return P.Om;
        case P._j.MAX:
          return null;
        default:
          return u
      }
    }, [u]), E = r.useCallback(e => {
      let t = e >= o ? P._j.MAX : e <= P.Om ? P._j.MIN : e;
      null == t && null != n.current && (n.current.style.width = ""), I.ZP.updatedUnsyncedSettings({
        expressionPickerWidth: t
      }), _(t)
    }, [n, o]), T = (0, h.Z)({
      initialElementDimension: c,
      maxDimension: o,
      minDimension: P.Om,
      resizableDomNodeRef: n,
      onElementResize: E,
      orientation: i
    });
    return r.useEffect(() => {
      let e = l().debounce(() => {
        null != t.current && a(t.current.offsetWidth)
      }, 500);
      return window.addEventListener("resize", e), () => {
        window.removeEventListener("resize", e)
      }
    }, [t]), r.useLayoutEffect(() => {
      null != t.current && a(t.current.offsetWidth)
    }, [t]), {
      drawerWidth: c,
      handleDrawerResizeHandleMouseDown: r.useCallback(e => {
        e.stopPropagation(), null != t.current && a(t.current.offsetWidth), T(e)
      }, [t, T])
    }
  };
t.Z = r.memo(function(e) {
  var t, n, s;
  let {
    positionTargetRef: a,
    hideGifFavorites: l,
    includeCreateEmojiButton: I,
    onSelectGIF: g,
    onSelectEmoji: Z,
    onSelectSticker: H,
    onSelectSound: F,
    channel: Y,
    type: j,
    position: W,
    align: K,
    positionLayerClassName: z,
    closeOnModalOuterClick: q = !1,
    parentModalKey: X
  } = e, Q = r.useRef(null), J = r.useRef(!1), $ = r.useRef(), ee = r.useRef(null), {
    drawerWidth: et,
    handleDrawerResizeHandleMouseDown: en
  } = V({
    positionContainerRef: Q,
    drawerRef: ee,
    orientation: "left" === K ? h.y.HORIZONTAL_RIGHT : h.y.HORIZONTAL_LEFT
  }), ei = (0, M.Iu)(e => e.activeView), er = (0, R.fQ)(Y), {
    renderWindow: es,
    windowDispatch: eo
  } = r.useContext(S.ZP), ea = (0, d.e7)([C.Z], () => !C.Z.hasLoadedStickerPacks), el = (0, m.P)("expression_picker"), eu = null != X, e_ = (0, c.Jw)(null != X ? X : ""), ed = r.useCallback(e => {
    var t;
    if (!eu && (0, c.$s)() || eu && !(e_ && q)) return;
    let {
      target: n
    } = e;
    if ((0, _.k)(n) && null != n.closest("." + P.CT)) return;
    for (;
      (0, _.k)(n);) {
      if (n === ee.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
      n = n.parentNode
    }(0, M._Q)();
    let i = null === (t = (0, D.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
    (null == i || "BODY" === i.tagName) && v.S.dispatchToLastSubscribed(y.CkL.TEXTAREA_FOCUS)
  }, [q, e_, eu]), ec = r.useCallback(() => {
    (0, M._Q)()
  }, []);
  r.useLayoutEffect(() => {
    let e = () => {
      ei === P.X1.GIF && (0, M._Q)()
    };
    return es.addEventListener("mousedown", ed), es.addEventListener("contextmenu", ed), eo.subscribe(y.CkL.POPOUT_CLOSE, ec), v.S.subscribe(y.CkL.CLOSE_GIF_PICKER, e), () => {
      es.removeEventListener("mousedown", ed), es.removeEventListener("contextmenu", ed), eo.unsubscribe(y.CkL.POPOUT_CLOSE, ec), v.S.unsubscribe(y.CkL.CLOSE_GIF_PICKER, e)
    }
  }, [ei, ec, ed, es, eo]), (0, E.useFocusLock)(Q), r.useEffect(() => {
    (0, M.ql)("")
  }, []), r.useEffect(() => {
    (!eu && (0, c.$s)() || eu && !e_) && (0, M._Q)()
  }, [e_, eu]), r.useEffect(() => {
    if (null != ee.current && !J.current) {
      var e, t, n, i;
      ei === P.X1.EMOJI ? (null == $ ? void 0 : null === (e = $.current) || void 0 === e ? void 0 : e.onPickerOpen) != null && (null == $ || null === (t = $.current) || void 0 === t || t.onPickerOpen(), J.current = !0) : ei === P.X1.STICKER ? (null == $ ? void 0 : null === (n = $.current) || void 0 === n ? void 0 : n.onPickerOpen) != null && !ea && (null == $ || null === (i = $.current) || void 0 === i || i.onPickerOpen(), J.current = !0) : (f.ZP.trackWithMetadata(y.rMx.EXPRESSION_PICKER_OPENED, {
        width: ee.current.offsetWidth,
        tab: ei,
        badged: !1
      }), J.current = !0)
    }
  });
  let eE = (null === (t = j.gifs) || void 0 === t ? void 0 : t.allowSending) && !u.tq && null != g,
    eI = (null === (n = j.stickers) || void 0 === n ? void 0 : n.allowSending) && null != H,
    eT = !(null === (s = j.expressionPicker) || void 0 === s ? void 0 : s.onlyEmojis) && (eE || eI),
    eh = "left" === K ? "right" : "left",
    eS = null != z ? z : "left" === K ? k.positionLayerDefaultAlignLeft : k.positionLayerDefaultAlignRight;
  return (0, i.jsx)(T.Z, {
    section: y.jXE.EXPRESSION_PICKER,
    children: (0, i.jsx)(L.W5, {
      className: o()(k.positionLayer, eS),
      targetRef: a,
      position: W,
      align: K,
      spacing: 8,
      autoInvert: !0,
      children: e => {
        let {
          isPositioned: t
        } = e;
        return (0, i.jsx)("section", {
          className: o()(k.positionContainer, {
            [k.positionContainerOnlyEmoji]: !eT
          }),
          ref: Q,
          role: "dialog",
          "aria-label": w.Z.Messages.EXPRESSION_PICKER,
          children: t ? (0, i.jsxs)("div", {
            className: k.drawerSizingWrapper,
            style: {
              width: null == et ? void 0 : et,
              [K]: 0
            },
            ref: ee,
            children: [(0, i.jsx)("div", {
              className: k.resizeHandle,
              onMouseDown: en,
              style: {
                [eh]: -2
              }
            }), (0, i.jsxs)("div", {
              className: k.contentWrapper,
              children: [eT ? (0, i.jsx)("nav", {
                className: k.nav,
                children: (0, i.jsxs)("div", {
                  className: k.navList,
                  role: "tablist",
                  "aria-label": w.Z.Messages.EXPRESSION_PICKER_CATEGORIES_A11Y_LABEL,
                  children: [eE ? (0, i.jsx)(x, {
                    id: U._3,
                    "aria-controls": U.vO,
                    "aria-selected": ei === P.X1.GIF,
                    isActive: ei === P.X1.GIF,
                    viewType: P.X1.GIF,
                    children: w.Z.Messages.EXPRESSION_PICKER_GIF
                  }) : null, eI ? (0, i.jsx)(x, {
                    id: G.ED,
                    "aria-controls": G.nZ,
                    "aria-selected": ei === P.X1.STICKER,
                    isActive: ei === P.X1.STICKER,
                    autoFocus: !er,
                    viewType: P.X1.STICKER,
                    children: (0, i.jsx)("div", {
                      className: k.stickersNavItem,
                      children: w.Z.Messages.EXPRESSION_PICKER_STICKER
                    })
                  }) : null, (0, i.jsx)(x, {
                    id: U.td,
                    "aria-controls": U.cZ,
                    "aria-selected": ei === P.X1.EMOJI,
                    isActive: ei === P.X1.EMOJI,
                    viewType: P.X1.EMOJI,
                    children: w.Z.Messages.EXPRESSION_PICKER_EMOJI
                  }), el && null != F && (0, i.jsx)(x, {
                    id: U.Hr,
                    "aria-controls": U.gV,
                    "aria-selected": ei === P.X1.SOUNDBOARD,
                    isActive: ei === P.X1.SOUNDBOARD,
                    viewType: P.X1.SOUNDBOARD,
                    children: "Sounds"
                  })]
                })
              }) : null, ei === P.X1.STICKER && eI ? (0, i.jsx)(p.Z, {
                isLoading: ea,
                channel: Y,
                containerWidth: et,
                onSelectSticker: H,
                closePopout: ec,
                ref: e => {
                  $.current = e
                }
              }) : null, ei === P.X1.GIF && eE ? (0, i.jsx)(A.Z, {
                onSelectGIF: g,
                hideFavorites: l,
                persistSearch: !0
              }) : null, ei === P.X1.EMOJI ? (0, i.jsx)(N.Z, {
                hasTabWrapper: !0,
                persistSearch: !0,
                channel: Y,
                containerWidth: et,
                includeCreateEmojiButton: I,
                emojiSize: null != et && et < B ? U.Su.MEDIUM : U.Su.LARGE,
                pickerIntention: b.Hz.CHAT,
                closePopout: ec,
                onSelectEmoji: Z,
                ref: e => {
                  $.current = e
                }
              }) : null, ei === P.X1.SOUNDBOARD ? (0, i.jsx)("div", {
                className: k.soundboardContainer,
                children: (0, i.jsx)(O.Z, {
                  guildId: Y.guild_id,
                  channel: Y,
                  containerWidth: et,
                  onClose: ec,
                  onSelect: F,
                  analyticsSource: "expression-picker",
                  autoWidth: !0
                })
              }) : null]
            })]
          }) : null
        })
      }
    })
  })
})