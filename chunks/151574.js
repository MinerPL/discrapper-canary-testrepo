n(47120);
var r, i, a = n(735250),
  s = n(470079),
  o = n(120356),
  l = n.n(o),
  u = n(91192),
  c = n(924826),
  d = n(536895),
  _ = n(468194),
  E = n(477690),
  f = n(481060),
  h = n(100527),
  p = n(906732),
  m = n(570220),
  I = n(686546),
  T = n(28546),
  g = n(285651),
  S = n(926491),
  A = n(373228),
  N = n(378233),
  v = n(419922),
  O = n(490095),
  R = n(652136),
  C = n(695346),
  y = n(626135),
  D = n(280930),
  L = n(606301),
  b = n(981631),
  M = n(689938),
  P = n(701481);
let U = (0, _.Mg)(E.Z.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING),
  w = (0, _.Mg)(E.Z.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE),
  x = 2 * w + (0, _.Mg)(E.Z.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN) + 2 * U,
  G = () => Promise.resolve();

function k(e) {
  let {
isFocused: t,
isHidden: n,
sendability: r,
listIndex: i,
sticker: s,
onMouseOver: o,
onSelectSticker: c
  } = e, {
tabIndex: d,
..._
  } = (0, u.JA)(''.concat(i));
  return (0, a.jsxs)(f.Clickable, {
..._,
tabIndex: n ? -1 : d,
className: l()(P.suggestedExpression, {
  [P.suggestedExpressionFocused]: t
}),
focusProps: {
  enabled: !1
},
onClick: () => c(s, r),
onMouseOver: o,
children: [
  (0, a.jsx)(I.ZP, {
    mask: I.ZP.Masks.STICKER_ROUNDED_RECT,
    width: w + 4,
    height: w + 4,
    className: P.mask,
    children: (0, a.jsx)('div', {
      className: P.maskBackground
    })
  }),
  (0, a.jsx)(v.ZP, {
    maskAsset: !0,
    size: w,
    sticker: s,
    className: P.__invalid_sticker
  }),
  r !== g.eb.SENDABLE && (0, a.jsx)(O.Z, {
    size: 14
  })
]
  });
}
(i = r || (r = {}))[i.STICKER = 0] = 'STICKER';
t.Z = s.memo(function(e) {
  var t;
  let {
editorRef: n,
channel: r,
isEditorFocused: i,
onSelectSticker: o,
stickerIconVisible: _ = !1,
submitButtonVisible: E = !1
  } = e, I = s.useContext(m.ZP), [v, O] = s.useState(null), [U, w] = s.useState(!1), [B, F] = s.useState(null), V = (0, T.Iu)(e => null != e.activeView), H = s.useRef(null), [Z, Y] = s.useState(''), [j, W] = s.useState(''), [K, z] = s.useState(!1), [q, Q] = s.useState(!1), X = (0, D.Z)(Z, U, r), {
analyticsLocations: $
  } = (0, p.ZP)(h.Z.EXPRESSION_SUGGESTIONS), {
handleTextChange: J,
debouncedSetTextInputValue: ee
  } = (0, D.m)({
setTextInputValue: Y,
setHasDismissed: w,
setHasSelection: Q,
setFocusedSuggestionType: O
  });
  s.useEffect(() => {
let e = e => {
    z(e);
  },
  t = e => {
    let t = '' !== e && null != e;
    if (Q(t), t) {
      var r;
      O(null), null === (r = n.current) || void 0 === r || r.focus();
    }
  };
return I.addListener('text-changed', J), I.addListener('autocomplete-visibility-change', e), I.addListener('selection-changed', t), () => {
  I.removeListener('text-changed', J), I.removeListener('autocomplete-visibility-change', e), I.removeListener('selection-changed', t);
};
  }, [
J,
n,
I
  ]), s.useLayoutEffect(() => {
null == v && F(null);
  }, [v]);
  let [et, en] = s.useState(!1);
  s.useLayoutEffect(() => {
requestAnimationFrame(() => {
  let e = H.current;
  en(i || (null == e ? void 0 : e.contains(null == e ? void 0 : e.ownerDocument.activeElement)) === !0);
});
  }, [i]);
  let er = X.length > 0,
ei = et && !V && !K && !U && !q && er,
{
  stickersNavigator: ea
} = function(e) {
  let {
    editorRef: t,
    hasStickerResults: n,
    shouldRenderSuggestions: r,
    focusedSuggestionType: i,
    setFocusedStickerListItem: a,
    setFocusedSuggestionType: o,
    setHasDismissed: l,
    setTextInputValue: u
  } = e, _ = s.useCallback((e, t) => {
    a(t);
  }, [a]), E = (0, c.ZP)({
    id: 'expression-suggestions-stickers',
    isEnabled: !0,
    scrollToStart: G,
    scrollToEnd: G,
    orientation: d.hy.HORIZONTAL,
    setFocus: _,
    useVirtualFocus: !0
  });
  return s.useEffect(() => {
    let e = e => {
      var a, s;
      if (r && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
        switch (e.key) {
          case 'ArrowUp':
            e.preventDefault(), null == i && n && (E.focusFirstVisibleItem(), o(0));
            break;
          case 'ArrowDown':
            o(null), null === (a = t.current) || void 0 === a || a.focus();
            break;
          case 'Escape':
            o(null), l(!0), u(''), null === (s = t.current) || void 0 === s || s.focus();
        }
        0 === i && E.containerProps.onKeyDown(e);
      }
    };
    return window.addEventListener('keydown', e, {
      capture: !0
    }), () => window.removeEventListener('keydown', e, {
      capture: !0
    });
  }, [
    E,
    r,
    i,
    o,
    n,
    t,
    l,
    a,
    u
  ]), {
    stickersNavigator: E
  };
}({
  editorRef: n,
  hasStickerResults: er,
  shouldRenderSuggestions: ei,
  focusedSuggestionType: v,
  setFocusedSuggestionType: O,
  setHasDismissed: w,
  setFocusedStickerListItem: F,
  setTextInputValue: Y
}),
es = (e, t) => {
  if (ei) {
    if (y.default.track(b.rMx.AUTO_SUGGEST_EXPRESSION_SELECTED, {
        sticker_id: e.id,
        suggestion_trigger: j
      }), t === g.eb.SENDABLE)
      w(!0), o(e, A.V0.EXPRESSION_SUGGESTIONS), ee.cancel(), Y('');
    else if ((0, N.jl)(e)) {
      let t = S.Z.getStickerPack(e.pack_id);
      null != t && (0, R.Z)({
        stickerPack: t,
        analyticsLocations: $
      });
    }
    I.emit('sticker-suggestions-hidden');
  }
},
eo = s.useRef([]),
el = s.useRef(!1);
  s.useEffect(() => {
ei && (eo.current = X), ei !== el.current && (I.emit(ei ? 'sticker-suggestions-shown' : 'sticker-suggestions-hidden'), ei && ((0, L.Tk)(Z), W(Z))), el.current = ei;
  }, [
I,
ei,
X,
Z
  ]);
  let eu = !ei,
ec = ei ? X : eo.current;
  return (0, a.jsx)(p.Gt, {
value: $,
children: (0, a.jsxs)(f.Clickable, {
  tabIndex: eu ? -1 : 0,
  'aria-hidden': eu,
  className: l()(P.container, {
    [P.hidden]: eu,
    [P.submitButtonOffset]: E,
    [P.stickerIconOffset]: _
  }),
  innerRef: H,
  style: {
    minWidth: x
  },
  onClick: () => {
    var e;
    return null === (e = n.current) || void 0 === e ? void 0 : e.focus();
  },
  children: [
    (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)(u.bG, {
          navigator: ea,
          children: (0, a.jsx)(u.SJ, {
            children: e => {
              let {
                ref: t,
                tabIndex: n,
                ...r
              } = e;
              return (0, a.jsx)('div', {
                className: P.stickerResults,
                ref: e => {
                  t.current = e;
                },
                onMouseLeave: () => {
                  null == v && F(null);
                },
                tabIndex: eu ? -1 : n,
                ...r,
                children: ec.map((e, t) => {
                  let {
                    sticker: n,
                    sendability: r
                  } = e;
                  return (0, a.jsx)(k, {
                    isFocused: B === ''.concat(t),
                    isHidden: eu,
                    sendability: r,
                    listIndex: t,
                    onMouseOver: () => {
                      ea.setFocus(''.concat(t)), F(''.concat(t));
                    },
                    onSelectSticker: es,
                    sticker: n
                  }, n.id);
                })
              });
            }
          })
        }),
        (0, a.jsxs)('div', {
          className: P.bottomInformationTextContainer,
          children: [
            (0, a.jsx)('div', {
              className: P.textDivider
            }),
            (0, a.jsxs)('div', {
              className: P.bottomInformationLayout,
              children: [
                (0, a.jsx)(f.Text, {
                  className: P.descriptionText,
                  style: {
                    maxWidth: x
                  },
                  variant: 'text-sm/normal',
                  children: null != B ? M.Z.Messages.EXPRESSION_SUGGESTIONS_STICKER_NAME.format({
                    stickerName: null === (t = X[+B]) || void 0 === t ? void 0 : t.sticker.name
                  }) : M.Z.Messages.EXPRESSION_SUGGESTIONS_STICKER_SHORT_NAV_PROMPT.format({
                    upHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
                      shortcut: 'up',
                      className: P.keybind
                    }, t)
                  })
                }),
                (0, a.jsx)(f.Clickable, {
                  onClick: () => {
                    y.default.track(b.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                      enabled: !1,
                      location: {
                        section: b.jXE.EXPRESSION_PICKER
                      }
                    }), C.up.updateSetting(!1);
                  },
                  children: (0, a.jsx)(f.Tooltip, {
                    text: M.Z.Messages.EXPRESSION_SUGGESTIONS_STICKER_DISABLE,
                    children: e => (0, a.jsx)(f.XSmallIcon, {
                      size: 'md',
                      color: 'currentColor',
                      ...e,
                      className: P.closeIcon
                    })
                  })
                })
              ]
            })
          ]
        })
      ]
    }),
    (0, a.jsx)('div', {
      className: P.containerBackground
    })
  ]
})
  });
});