n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(392711),
  l = n.n(o),
  u = n(873546),
  c = n(374470),
  d = n(442837),
  _ = n(952265),
  E = n(481060),
  f = n(153867),
  h = n(410575),
  p = n(347469),
  m = n(40851),
  I = n(367907),
  T = n(907040),
  g = n(455708),
  S = n(314910),
  A = n(315744),
  N = n(603074),
  v = n(453070),
  O = n(926491),
  R = n(457040),
  C = n(740492),
  y = n(585483),
  D = n(5967),
  L = n(28546),
  b = n(957825),
  M = n(981631),
  P = n(149203),
  U = n(185923),
  w = n(611480),
  x = n(689938),
  G = n(118282);
let k = b.Om + P.Su.MEDIUM,
  B = i.memo(function(e) {
let {
  isActive: t,
  className: n,
  viewType: i,
  autoFocus: a = !1,
  'aria-controls': o,
  ...l
} = e;
return (0, r.jsx)(E.Button, {
  role: 'tab',
  autoFocus: a,
  'aria-controls': t ? o : void 0,
  ...l,
  onClick: () => {
    I.ZP.trackWithMetadata(M.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
      tab: i,
      badged: !1
    }), (0, L.hr)(i);
  },
  'aria-current': t ? 'page' : void 0,
  className: s()(n, G.navButton, G.navItem, {
    [G.navButtonActive]: t
  }),
  look: E.Button.Looks.BLANK,
  size: E.Button.Sizes.NONE
});
  }),
  F = e => {
let {
  positionContainerRef: t,
  drawerRef: n,
  orientation: r
} = e, a = (0, d.e7)([C.ZP], () => C.ZP.expressionPickerWidth), [s, o] = i.useState(window.innerWidth), [u, c] = i.useState(null != a ? a : b._j.MIN), _ = i.useMemo(() => {
  switch (u) {
    case b._j.MIN:
      return b.Om;
    case b._j.MAX:
      return null;
    default:
      return u;
  }
}, [u]), E = i.useCallback(e => {
  let t = e >= s ? b._j.MAX : e <= b.Om ? b._j.MIN : e;
  null == t && null != n.current && (n.current.style.width = ''), f.ZP.updatedUnsyncedSettings({
    expressionPickerWidth: t
  }), c(t);
}, [
  n,
  s
]), h = (0, p.Z)({
  initialElementDimension: _,
  maxDimension: s,
  minDimension: b.Om,
  resizableDomNodeRef: n,
  onElementResize: E,
  orientation: r
});
return i.useEffect(() => {
  let e = l().debounce(() => {
    null != t.current && o(t.current.offsetWidth);
  }, 500);
  return window.addEventListener('resize', e), () => {
    window.removeEventListener('resize', e);
  };
}, [t]), i.useLayoutEffect(() => {
  null != t.current && o(t.current.offsetWidth);
}, [t]), {
  drawerWidth: _,
  handleDrawerResizeHandleMouseDown: i.useCallback(e => {
    e.stopPropagation(), null != t.current && o(t.current.offsetWidth), h(e);
  }, [
    t,
    h
  ])
};
  };
t.Z = i.memo(function(e) {
  var t, n, a;
  let {
positionTargetRef: o,
hideGifFavorites: l,
includeCreateEmojiButton: f,
onSelectGIF: C,
onSelectEmoji: V,
onSelectSticker: H,
onSelectSound: Z,
channel: Y,
type: j,
position: W,
align: K,
positionLayerClassName: z,
closeOnModalOuterClick: q = !1,
parentModalKey: Q
  } = e, X = i.useRef(null), $ = i.useRef(!1), J = i.useRef(), ee = i.useRef(null), {
drawerWidth: et,
handleDrawerResizeHandleMouseDown: en
  } = F({
positionContainerRef: X,
drawerRef: ee,
orientation: 'left' === K ? p.y.HORIZONTAL_RIGHT : p.y.HORIZONTAL_LEFT
  }), er = (0, L.Iu)(e => e.activeView), ei = (0, v.fQ)(Y), {
renderWindow: ea,
windowDispatch: es
  } = i.useContext(m.ZP), eo = (0, d.e7)([O.Z], () => !O.Z.hasLoadedStickerPacks), el = (0, A.P)('expression_picker'), eu = null != Q, ec = (0, _.Jw)(null != Q ? Q : ''), ed = i.useCallback(e => {
var t;
if (!eu && (0, _.$s)() || eu && !(ec && q))
  return;
let {
  target: n
} = e;
if ((0, c.k)(n) && null != n.closest('.' + b.CT))
  return;
for (;
  (0, c.k)(n);) {
  if (n === ee.current || 'true' === n.getAttribute('data-menu-item') || 'true' === n.getAttribute('data-premium-tutorial-expression-picker-tooltip') || 'true' === n.getAttribute('data-premium-tutorial-persistent-coachmark-emoji-step'))
    return;
  n = n.parentNode;
}
(0, L._Q)();
let r = null === (t = (0, D.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
(null == r || 'BODY' === r.tagName) && y.S.dispatchToLastSubscribed(M.CkL.TEXTAREA_FOCUS);
  }, [
q,
ec,
eu
  ]), e_ = i.useCallback(() => {
(0, L._Q)();
  }, []);
  i.useLayoutEffect(() => {
let e = () => {
  er === b.X1.GIF && (0, L._Q)();
};
return ea.addEventListener('mousedown', ed), ea.addEventListener('contextmenu', ed), es.subscribe(M.CkL.POPOUT_CLOSE, e_), y.S.subscribe(M.CkL.CLOSE_GIF_PICKER, e), () => {
  ea.removeEventListener('mousedown', ed), ea.removeEventListener('contextmenu', ed), es.unsubscribe(M.CkL.POPOUT_CLOSE, e_), y.S.unsubscribe(M.CkL.CLOSE_GIF_PICKER, e);
};
  }, [
er,
e_,
ed,
ea,
es
  ]), (0, E.useFocusLock)(X), i.useEffect(() => {
(0, L.ql)('');
  }, []), i.useEffect(() => {
(!eu && (0, _.$s)() || eu && !ec) && (0, L._Q)();
  }, [
ec,
eu
  ]), i.useEffect(() => {
if (null != ee.current && !$.current) {
  var e, t, n, r;
  er === b.X1.EMOJI ? (null == J ? void 0 : null === (e = J.current) || void 0 === e ? void 0 : e.onPickerOpen) != null && (null == J || null === (t = J.current) || void 0 === t || t.onPickerOpen(), $.current = !0) : er === b.X1.STICKER ? (null == J ? void 0 : null === (n = J.current) || void 0 === n ? void 0 : n.onPickerOpen) != null && !eo && (null == J || null === (r = J.current) || void 0 === r || r.onPickerOpen(), $.current = !0) : (I.ZP.trackWithMetadata(M.rMx.EXPRESSION_PICKER_OPENED, {
    width: ee.current.offsetWidth,
    tab: er,
    badged: !1
  }), $.current = !0);
}
  });
  let eE = (null === (t = j.gifs) || void 0 === t ? void 0 : t.allowSending) && !u.tq && null != C,
ef = (null === (n = j.stickers) || void 0 === n ? void 0 : n.allowSending) && null != H,
eh = !(null === (a = j.expressionPicker) || void 0 === a ? void 0 : a.onlyEmojis) && (eE || ef),
ep = 'left' === K ? 'right' : 'left',
em = null != z ? z : 'left' === K ? G.positionLayerDefaultAlignLeft : G.positionLayerDefaultAlignRight;
  return (0, r.jsx)(h.Z, {
section: M.jXE.EXPRESSION_PICKER,
children: (0, r.jsx)(S.W5, {
  className: s()(G.positionLayer, em),
  targetRef: o,
  position: W,
  align: K,
  spacing: 8,
  autoInvert: !0,
  children: e => {
    let {
      isPositioned: t
    } = e;
    return (0, r.jsx)('section', {
      className: s()(G.positionContainer, {
        [G.positionContainerOnlyEmoji]: !eh
      }),
      ref: X,
      role: 'dialog',
      'aria-label': x.Z.Messages.EXPRESSION_PICKER,
      children: t ? (0, r.jsxs)('div', {
        className: G.drawerSizingWrapper,
        style: {
          width: null == et ? void 0 : et,
          [K]: 0
        },
        ref: ee,
        children: [
          (0, r.jsx)('div', {
            className: G.resizeHandle,
            onMouseDown: en,
            style: {
              [ep]: -2
            }
          }),
          (0, r.jsxs)('div', {
            className: G.contentWrapper,
            children: [
              eh ? (0, r.jsx)('nav', {
                className: G.nav,
                children: (0, r.jsxs)('div', {
                  className: G.navList,
                  role: 'tablist',
                  'aria-label': x.Z.Messages.EXPRESSION_PICKER_CATEGORIES_A11Y_LABEL,
                  children: [
                    eE ? (0, r.jsx)(B, {
                      id: P._3,
                      'aria-controls': P.vO,
                      'aria-selected': er === b.X1.GIF,
                      isActive: er === b.X1.GIF,
                      viewType: b.X1.GIF,
                      children: x.Z.Messages.EXPRESSION_PICKER_GIF
                    }) : null,
                    ef ? (0, r.jsx)(B, {
                      id: w.ED,
                      'aria-controls': w.nZ,
                      'aria-selected': er === b.X1.STICKER,
                      isActive: er === b.X1.STICKER,
                      autoFocus: !ei,
                      viewType: b.X1.STICKER,
                      children: (0, r.jsx)('div', {
                        className: G.stickersNavItem,
                        children: x.Z.Messages.EXPRESSION_PICKER_STICKER
                      })
                    }) : null,
                    (0, r.jsx)(B, {
                      id: P.td,
                      'aria-controls': P.cZ,
                      'aria-selected': er === b.X1.EMOJI,
                      isActive: er === b.X1.EMOJI,
                      viewType: b.X1.EMOJI,
                      children: x.Z.Messages.EXPRESSION_PICKER_EMOJI
                    }),
                    el && null != Z && (0, r.jsx)(B, {
                      id: P.Hr,
                      'aria-controls': P.gV,
                      'aria-selected': er === b.X1.SOUNDBOARD,
                      isActive: er === b.X1.SOUNDBOARD,
                      viewType: b.X1.SOUNDBOARD,
                      children: 'Sounds'
                    })
                  ]
                })
              }) : null,
              er === b.X1.STICKER && ef ? (0, r.jsx)(R.Z, {
                isLoading: eo,
                channel: Y,
                containerWidth: et,
                onSelectSticker: H,
                closePopout: e_,
                ref: e => {
                  J.current = e;
                }
              }) : null,
              er === b.X1.GIF && eE ? (0, r.jsx)(g.Z, {
                onSelectGIF: C,
                hideFavorites: l,
                persistSearch: !0
              }) : null,
              er === b.X1.EMOJI ? (0, r.jsx)(T.Z, {
                hasTabWrapper: !0,
                containerContext: eh ? T.v.TABS_EXPRESSION_PICKER : T.v.NO_TABS_EXPRESSION_PICKER,
                persistSearch: !0,
                channel: Y,
                containerWidth: et,
                includeCreateEmojiButton: f,
                emojiSize: null != et && et < k ? P.Su.MEDIUM : P.Su.LARGE,
                pickerIntention: U.Hz.CHAT,
                closePopout: e_,
                onSelectEmoji: V,
                ref: e => {
                  J.current = e;
                }
              }) : null,
              er === b.X1.SOUNDBOARD ? (0, r.jsx)('div', {
                className: G.soundboardContainer,
                children: (0, r.jsx)(N.Z, {
                  guildId: Y.guild_id,
                  channel: Y,
                  containerWidth: et,
                  onClose: e_,
                  onSelect: Z,
                  analyticsSource: 'expression-picker',
                  autoWidth: !0
                })
              }) : null
            ]
          })
        ]
      }) : null
    });
  }
})
  });
});