"use strict";
n(47120);
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(91192),
  _ = n(924826),
  d = n(536895),
  c = n(468194),
  E = n(477690),
  I = n(481060),
  T = n(100527),
  h = n(906732),
  S = n(570220),
  f = n(28546),
  N = n(285651),
  A = n(926491),
  m = n(373228),
  O = n(378233),
  R = n(419922),
  C = n(490095),
  p = n(652136),
  g = n(695346),
  L = n(465670),
  v = n(806519),
  D = n(626135),
  M = n(280930),
  P = n(606301),
  y = n(981631),
  U = n(689938),
  b = n(586197);
let G = (0, c.Mg)(E.Z.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING),
  w = (0, c.Mg)(E.Z.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE),
  k = 2 * w + (0, c.Mg)(E.Z.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN) + 2 * G,
  B = () => Promise.resolve();

function x(e) {
  let {
    isFocused: t,
    isHidden: n,
    sendability: i,
    listIndex: r,
    sticker: o,
    onMouseOver: a,
    onSelectSticker: _
  } = e, {
    tabIndex: d,
    ...c
  } = (0, u.JA)("".concat(r));
  return (0, s.jsxs)(I.Clickable, {
    ...c,
    tabIndex: n ? -1 : d,
    className: l()(b.suggestedExpression, {
      [b.suggestedExpressionFocused]: t
    }),
    focusProps: {
      enabled: !1
    },
    onClick: () => _(o, i),
    onMouseOver: a,
    children: [(0, s.jsx)(v.ZP, {
      mask: v.ZP.Masks.STICKER_ROUNDED_RECT,
      width: w + 4,
      height: w + 4,
      className: b.mask,
      children: (0, s.jsx)("div", {
        className: b.maskBackground
      })
    }), (0, s.jsx)(R.ZP, {
      maskAsset: !0,
      size: w,
      sticker: o,
      className: b.__invalid_sticker
    }), i !== N.eb.SENDABLE && (0, s.jsx)(C.Z, {
      size: 14
    })]
  })
}(r = i || (i = {}))[r.STICKER = 0] = "STICKER";
t.Z = o.memo(function(e) {
  var t;
  let {
    editorRef: n,
    channel: i,
    isEditorFocused: r,
    onSelectSticker: a,
    stickerIconVisible: c = !1,
    submitButtonVisible: E = !1
  } = e, R = o.useContext(S.ZP), [C, v] = o.useState(null), [G, w] = o.useState(!1), [V, Z] = o.useState(null), H = (0, f.Iu)(e => null != e.activeView), F = o.useRef(null), [Y, j] = o.useState(""), [W, K] = o.useState(""), [z, q] = o.useState(!1), [X, Q] = o.useState(!1), J = (0, M.Z)(Y, G, i), {
    analyticsLocations: $
  } = (0, h.ZP)(T.Z.EXPRESSION_SUGGESTIONS), {
    handleTextChange: ee,
    debouncedSetTextInputValue: et
  } = (0, M.m)({
    setTextInputValue: j,
    setHasDismissed: w,
    setHasSelection: Q,
    setFocusedSuggestionType: v
  });
  o.useEffect(() => {
    let e = e => {
        q(e)
      },
      t = e => {
        let t = "" !== e && null != e;
        if (Q(t), t) {
          var i;
          v(null), null === (i = n.current) || void 0 === i || i.focus()
        }
      };
    return R.addListener("text-changed", ee), R.addListener("autocomplete-visibility-change", e), R.addListener("selection-changed", t), () => {
      R.removeListener("text-changed", ee), R.removeListener("autocomplete-visibility-change", e), R.removeListener("selection-changed", t)
    }
  }, [ee, n, R]), o.useLayoutEffect(() => {
    null == C && Z(null)
  }, [C]);
  let [en, ei] = o.useState(!1);
  o.useLayoutEffect(() => {
    requestAnimationFrame(() => {
      let e = F.current;
      ei(r || (null == e ? void 0 : e.contains(null == e ? void 0 : e.ownerDocument.activeElement)) === !0)
    })
  }, [r]);
  let er = J.length > 0,
    es = en && !H && !z && !G && !X && er,
    {
      stickersNavigator: eo
    } = function(e) {
      let {
        editorRef: t,
        hasStickerResults: n,
        shouldRenderSuggestions: i,
        focusedSuggestionType: r,
        setFocusedStickerListItem: s,
        setFocusedSuggestionType: a,
        setHasDismissed: l,
        setTextInputValue: u
      } = e, c = o.useCallback((e, t) => {
        s(t)
      }, [s]), E = (0, _.ZP)({
        id: "expression-suggestions-stickers",
        isEnabled: !0,
        scrollToStart: B,
        scrollToEnd: B,
        orientation: d.hy.HORIZONTAL,
        setFocus: c,
        useVirtualFocus: !0
      });
      return o.useEffect(() => {
        let e = e => {
          var s, o;
          if (i && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
            switch (e.key) {
              case "ArrowUp":
                e.preventDefault(), null == r && n && (E.focusFirstVisibleItem(), a(0));
                break;
              case "ArrowDown":
                a(null), null === (s = t.current) || void 0 === s || s.focus();
                break;
              case "Escape":
                a(null), l(!0), u(""), null === (o = t.current) || void 0 === o || o.focus()
            }
            0 === r && E.containerProps.onKeyDown(e)
          }
        };
        return window.addEventListener("keydown", e, {
          capture: !0
        }), () => window.removeEventListener("keydown", e, {
          capture: !0
        })
      }, [E, i, r, a, n, t, l, s, u]), {
        stickersNavigator: E
      }
    }({
      editorRef: n,
      hasStickerResults: er,
      shouldRenderSuggestions: es,
      focusedSuggestionType: C,
      setFocusedSuggestionType: v,
      setHasDismissed: w,
      setFocusedStickerListItem: Z,
      setTextInputValue: j
    }),
    ea = (e, t) => {
      if (es) {
        if (D.default.track(y.rMx.AUTO_SUGGEST_EXPRESSION_SELECTED, {
            sticker_id: e.id,
            suggestion_trigger: W
          }), t === N.eb.SENDABLE) w(!0), a(e, m.V0.EXPRESSION_SUGGESTIONS), et.cancel(), j("");
        else if ((0, O.jl)(e)) {
          let t = A.Z.getStickerPack(e.pack_id);
          null != t && (0, p.Z)({
            stickerPack: t,
            analyticsLocations: $
          })
        }
        R.emit("sticker-suggestions-hidden")
      }
    },
    el = o.useRef([]),
    eu = o.useRef(!1);
  o.useEffect(() => {
    es && (el.current = J), es !== eu.current && (R.emit(es ? "sticker-suggestions-shown" : "sticker-suggestions-hidden"), es && ((0, P.Tk)(Y), K(Y))), eu.current = es
  }, [R, es, J, Y]);
  let e_ = !es,
    ed = es ? J : el.current;
  return (0, s.jsx)(h.Gt, {
    value: $,
    children: (0, s.jsxs)(I.Clickable, {
      tabIndex: e_ ? -1 : 0,
      "aria-hidden": e_,
      className: l()(b.container, {
        [b.hidden]: e_,
        [b.submitButtonOffset]: E,
        [b.stickerIconOffset]: c
      }),
      innerRef: F,
      style: {
        minWidth: k
      },
      onClick: () => {
        var e;
        return null === (e = n.current) || void 0 === e ? void 0 : e.focus()
      },
      children: [(0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(u.bG, {
          navigator: eo,
          children: (0, s.jsx)(u.SJ, {
            children: e => {
              let {
                ref: t,
                tabIndex: n,
                ...i
              } = e;
              return (0, s.jsx)("div", {
                className: b.stickerResults,
                ref: e => {
                  t.current = e
                },
                onMouseLeave: () => {
                  null == C && Z(null)
                },
                tabIndex: e_ ? -1 : n,
                ...i,
                children: ed.map((e, t) => {
                  let {
                    sticker: n,
                    sendability: i
                  } = e;
                  return (0, s.jsx)(x, {
                    isFocused: V === "".concat(t),
                    isHidden: e_,
                    sendability: i,
                    listIndex: t,
                    onMouseOver: () => {
                      eo.setFocus("".concat(t)), Z("".concat(t))
                    },
                    onSelectSticker: ea,
                    sticker: n
                  }, n.id)
                })
              })
            }
          })
        }), (0, s.jsxs)("div", {
          className: b.bottomInformationTextContainer,
          children: [(0, s.jsx)("div", {
            className: b.textDivider
          }), (0, s.jsxs)("div", {
            className: b.bottomInformationLayout,
            children: [(0, s.jsx)(I.Text, {
              className: b.descriptionText,
              style: {
                maxWidth: k
              },
              variant: "text-sm/normal",
              children: null != V ? U.Z.Messages.EXPRESSION_SUGGESTIONS_STICKER_NAME.format({
                stickerName: null === (t = J[+V]) || void 0 === t ? void 0 : t.sticker.name
              }) : U.Z.Messages.EXPRESSION_SUGGESTIONS_STICKER_SHORT_NAV_PROMPT.format({
                upHook: (e, t) => (0, s.jsx)(I.KeyCombo, {
                  shortcut: "up",
                  className: b.keybind
                }, t)
              })
            }), (0, s.jsx)(I.Clickable, {
              onClick: () => {
                D.default.track(y.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                  enabled: !1,
                  location: {
                    section: y.jXE.EXPRESSION_PICKER
                  }
                }), g.up.updateSetting(!1)
              },
              children: (0, s.jsx)(I.Tooltip, {
                text: U.Z.Messages.EXPRESSION_SUGGESTIONS_STICKER_DISABLE,
                children: e => (0, s.jsx)(L.Z, {
                  ...e,
                  className: b.closeIcon
                })
              })
            })]
          })]
        })]
      }), (0, s.jsx)("div", {
        className: b.containerBackground
      })]
    })
  })
})