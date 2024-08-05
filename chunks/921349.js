n.d(t, {
  V: function() {
return b;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(423802),
  l = n(372817),
  u = n(924826),
  c = n(91192),
  d = n(260866),
  _ = n(693789),
  E = n(1561),
  f = n(84735),
  h = n(15127),
  p = n(766646),
  m = n(742746),
  I = n(235874),
  T = n(922770),
  g = n(993365),
  S = n(481060),
  A = n(393238),
  N = n(434650),
  v = n(98650),
  O = n(863840),
  R = n(748585),
  C = n(689938),
  y = n(299119);
let D = {
  keys: ['label']
};

function L(e) {
  return e.label;
}
let b = i.forwardRef(function(e, t) {
  let {
options: n,
value: a,
onChange: l,
clearable: d = !1,
multi: _ = !1,
closeOnSelect: p = !0,
onOpen: m,
onClose: T,
placeholder: g = C.Z.Messages.SELECT,
wrapperClassName: v,
className: b,
isDisabled: P = !1,
maxVisibleItems: x = 7,
look: G = R.q.FILLED,
autoFocus: F = !1,
popoutPosition: V = 'bottom',
filter: H = !0,
debounceTime: Z,
renderOptionLabel: Y = L,
onSearchChange: j,
renderOptionPrefix: W = () => null,
renderOptionSuffix: K = () => null,
'aria-describedby': z,
'aria-invalid': q,
'aria-labelledby': Q,
'aria-required': X,
inputClassNames: $,
centerCaret: J = !1,
onBlur: ee,
matchSorterOptions: et,
clearQueryOnSelect: en = !1,
hidePills: er,
renderCustomPill: ei,
customPillContainerClassName: ea,
...es
  } = e, {
ref: eo,
width: el
  } = (0, A.Z)(), {
titleId: eu,
errorId: ec,
error: ed
  } = (0, h.Gc)(), {
ref: e_,
width: eE
  } = (0, A.Z)(), ef = i.useRef(null), [eh, ep] = i.useState(null), [em, eI] = i.useState(!1), [eT, eg] = i.useState(null), [eS, eA] = i.useState(!1), eN = i.useRef(null), ev = i.useRef(null), {
options: eO,
loading: eR,
onQueryChange: eC
  } = function(e) {
let {
  active: t,
  loadableOptions: n,
  debounceTime: r
} = e, a = 'function' == typeof n, [s, o] = i.useState({
  options: a ? [] : n,
  query: '',
  debouncedQuery: '',
  loading: !1
}), {
  options: l,
  loading: u,
  query: c,
  debouncedQuery: d
} = s, _ = i.useCallback(e => o(t => ({
  ...t,
  loading: a,
  query: e,
  debouncedQuery: e
})), [a]);
return i.useEffect(() => {
  t && _('');
}, [
  t,
  _
]), i.useEffect(() => {
  let e;
  return a ? (o(e => ({
    ...e,
    loading: !0,
    debouncedQuery: null
  })), e = setTimeout(() => {
    _(c);
  }, null != r ? r : 500)) : _(c), () => {
    clearTimeout(e);
  };
}, [
  a,
  c,
  r,
  _
]), i.useEffect(() => {
  let e = !1;
  return t && null !== d && ('function' == typeof n ? n(d) : Promise.resolve(n)).then(t => {
    !e && o(e => ({
      ...e,
      options: t,
      loading: !1
    }));
  }), () => {
    e = !0;
  };
}, [
  t,
  n,
  d
]), {
  options: l,
  loading: u,
  onQueryChange: i.useCallback(e => {
    o(t => ({
      ...t,
      query: e
    }));
  }, [])
};
  }({
active: em,
loadableOptions: n,
debounceTime: Z
  }), ey = i.useMemo(() => {
var e, t;
return e = eO, null == (t = a) ? [] : (Array.isArray(t) ? t : [t]).map(t => 'object' == typeof t && (null == t || 'value' in t) ? t : e.find(e => e.value === t)).filter(Boolean);
  }, [
eO,
a
  ]), eD = i.useMemo(() => ey.map(e => e.value), [ey]), eL = ey[ey.length - 1], eb = (0, O.Z)(eL), eM = i.useId(), eP = i.useId(), eU = i.useId(), ew = i.useCallback(e => {
em !== e && !P && (eI(e), e ? null == m || m() : null == T || T());
  }, [
P,
T,
m,
em
  ]), ex = i.useCallback(e => {
em && !e && ew(!1);
  }, [
ew,
em
  ]), eG = (0, N.O)(ex);
  i.useImperativeHandle(t, () => ({
close() {
  ew(!1);
}
  }));
  let ek = i.useCallback((e, t) => {
  let n = document.querySelector(e),
    r = eN.current;
  ep(t), null != r && null != n && r.scrollIntoViewNode({
    node: n
  });
}, []),
eB = i.useCallback(() => new Promise(e => {
  let t = eN.current;
  if (null == t)
    return e();
  t.scrollToTop({
    callback: () => requestAnimationFrame(() => e())
  });
}), []),
eF = i.useCallback(() => new Promise(e => {
  let t = eN.current;
  if (null == t)
    return e();
  t.scrollToBottom({
    callback: () => requestAnimationFrame(() => e())
  });
}), []),
eV = (0, u.ZP)({
  id: eP,
  defaultFocused: null != eL ? String(eL.value) : void 0,
  scrollToStart: eB,
  scrollToEnd: eF,
  isEnabled: em,
  wrap: !0,
  useVirtualFocus: !0,
  setFocus: ek,
  disableClickOnSpace: !0
}),
eH = (0, O.Z)(eV),
eZ = (0, O.Z)(eO);
  i.useEffect(() => {
let e = eZ.current,
  t = eb.current;
em && null != t && !eR && requestAnimationFrame(() => {
  let n = eN.current,
    r = e.indexOf(t);
  null == n || n.scrollToIndex({
    section: 0,
    row: r
  });
});
  }, [
em,
eR
  ]), i.useEffect(() => {
let e = eH.current;
if (em && !eR) {
  var t;
  let n = ef.current;
  if (null != n) {
    n.focus();
    let {
      value: e
    } = n;
    n.value = ' ', n.value = e;
  }
  ep(null !== (t = e.focusedItemId()) && void 0 !== t ? t : null);
} else {
  let t = eb.current,
    n = null != t ? String(t.value) : null;
  e.setFocus(n), ep(null);
}
  }, [
em,
eR
  ]), i.useLayoutEffect(() => {
!em && (_ ? eg('') : null != eL && eg(eL.label));
  }, [
_,
eL,
em
  ]), i.useLayoutEffect(() => {
_ && eg('');
  }, [
_,
ey.length
  ]);
  let eY = i.useCallback(function(e) {
let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
if (null == e) {
  l(_ ? [] : void 0);
  return;
}
let r = 'function' == typeof n,
  i = r ? eO.find(t => t.value === e) : e;
if (_) {
  let n = null != a ? a : [];
  if (n.some(t => (r ? t.value : t) === e) ? l(n.filter(t => (r ? t.value : t) !== e)) : l([
      ...n,
      i
    ]), t) {
    var s;
    null === (s = ef.current) || void 0 === s || s.focus();
  }
} else
  l(i);
ep(null), (!_ || p) && ew(!1), eA(!1), en && eg('');
  }, [
n,
eO,
_,
p,
en,
l,
a,
ew
  ]);
  i.useLayoutEffect(() => {
if (F) {
  var e;
  null === (e = ef.current) || void 0 === e || e.focus();
}
  }, [F]);
  let ej = i.useCallback(() => {
  eg(''), eY(null), ew(!0);
}, [
  eY,
  ew
]),
eW = i.useCallback(e => {
  switch (e.key) {
    case 'Escape':
      em && (e.stopPropagation(), ew(!1));
      break;
    case 'ArrowDown':
    case 'ArrowUp':
      ew(!0);
  }
}, [
  ew,
  em
]),
eK = eO;
  eS && null != eT && !1 !== H && (eK = 'function' == typeof H ? H(eO, eT) : (0, o.Lu)(eO, eT, null != et ? et : D)), i.useEffect(() => {
let e = eN.current;
null == e || e.scrollToTop();
  }, [eT]), i.useEffect(() => {
!eR && eS && null !== eT && requestAnimationFrame(() => eV.focusFirstVisibleItem());
  }, [
eR,
eS,
eT
  ]);
  let ez = _ ? B : k,
eq = i.useRef(null),
{
  focusPreviousItem: eQ,
  focusNextItem: eX
} = U(eq, ef, ey);
  return (0, r.jsxs)(c.bG, {
navigator: eV,
children: [
  (0, r.jsx)(I.y, {
    spacing: 0,
    animation: I.y.Animation.NONE,
    shouldShow: em,
    onRequestClose: () => ew(!1),
    layerContext: es.popoutLayerContext,
    renderPopout: e => {
      let {
        closePopout: t,
        position: n,
        updatePosition: i
      } = e;
      return (0, r.jsx)(M, {
        loading: eR,
        multi: !!_,
        listRef: eN,
        listId: eM,
        maxVisibleItems: x,
        width: eE,
        selectedValues: eD,
        closePopout: t,
        onSelect: eY,
        closeOnSelect: p,
        options: eK,
        activeDescendant: eh,
        renderOptionLabel: Y,
        updatePosition: i,
        popoutPosition: n,
        renderOptionPrefix: W,
        renderOptionSuffix: K
      });
    },
    position: V,
    children: (e, t) => {
      let {
        'aria-expanded': n,
        'aria-controls': i
      } = e, {
        isShown: a,
        position: o
      } = t, l = a ? S.ChevronSmallUpIcon : S.ChevronSmallDownIcon, {
        ref: u,
        onKeyDown: c
      } = eV.containerProps;
      return (0, r.jsxs)('div', {
        ref: ev,
        className: s()(v, y.wrapper),
        style: {
          '--icons-width': ''.concat(el, 'px')
        },
        onBlur: e => {
          var t, n, r;
          if (!((null === (t = ev.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) || (null === (r = eN.current) || void 0 === r ? void 0 : null === (n = r.getScrollerNode()) || void 0 === n ? void 0 : n.contains(e.relatedTarget))))
            !_ && null != eL && eg(eL.label), eA(!1), ew(!1), null == ee || ee(e);
        },
        children: [
          (0, r.jsx)(f.t, {
            ringTarget: e_,
            focusTarget: ef,
            offset: 4,
            children: (0, r.jsx)('div', {
              onClick: P ? void 0 : e => {
                e.stopPropagation(), e.preventDefault(), eg(''), ew(!0);
              },
              onMouseDown: e => {
                e.preventDefault();
              },
              ref: e => {
                e_.current = e, eG.current = e;
              },
              className: s()(y.select, y.searchable, b, {
                [y.open]: a,
                [y.lookFilled]: G === R.q.FILLED,
                [y.disabled]: P,
                [y.multi]: _,
                [y.selectPositionTop]: 'top' === o
              }),
              children: (0, r.jsx)('div', {
                className: s()(y.value, {
                  [y.multi]: _
                }),
                children: (0, r.jsx)(ez, {
                  query: eT,
                  selectedOptions: ey,
                  loading: eR,
                  renderOptionPrefix: W,
                  renderOptionSuffix: K,
                  isDisabled: P,
                  isEditing: eS,
                  inputRef: ef,
                  'aria-describedby': null != z ? z : ec,
                  'aria-required': X,
                  'aria-invalid': null != q ? q : null != ed,
                  'aria-labelledby': null != Q ? Q : eu,
                  'aria-expanded': n,
                  setInputRef: e => {
                    u.current = e, ef.current = e;
                  },
                  onFocus: () => {
                    var e, t;
                    null === (e = ef.current) || void 0 === e || e.setSelectionRange(0, null !== (t = null == eT ? void 0 : eT.length) && void 0 !== t ? t : 0);
                  },
                  onChange: e => {
                    eC(e), null == j || j(e), eg(e), ew(!0), eA(!0);
                  },
                  onKeyDown: e => {
                    var t;
                    null === (t = es.onKeyDown) || void 0 === t || t.call(es, e), c(e), eW(e);
                  },
                  activeDescendant: eh,
                  placeholder: g,
                  inputId: eU,
                  listboxId: eM,
                  navigatorId: eP,
                  selectValue: function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    eY(e, t);
                  },
                  inputClassNames: $,
                  hidePills: er
                })
              })
            })
          }),
          (0, r.jsxs)('div', {
            className: s()(y.icons, {
              [y.multi]: _,
              [y.iconsContainer]: !J
            }),
            ref: eo,
            children: [
              d && (null != eT && '' !== eT || ey.length > 0) ? (0, r.jsx)(E.P, {
                'aria-label': C.Z.Messages.CLEAR,
                'aria-controls': eU,
                onClick: ej,
                children: (0, r.jsx)(S.CloseSmallIcon, {
                  size: 'xs',
                  color: 'currentColor',
                  className: y.clear
                })
              }) : null,
              (0, r.jsx)(E.P, {
                className: s()({
                  [y.iconsCenter]: J
                }),
                'aria-label': em ? C.Z.Messages.CLOSE : C.Z.Messages.OPEN,
                'aria-controls': eU,
                onClick: () => {
                  ew(!em);
                },
                children: (0, r.jsx)(l, {
                  className: y.dropdownIcon
                })
              })
            ]
          })
        ]
      });
    }
  }),
  ey.length > 0 && null != ei && (0, r.jsx)('div', {
    children: (0, r.jsx)(w, {
      listRef: eq,
      selectedOptions: ey,
      selectValue: function(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        eY(e, t);
      },
      focusNextItem: eX,
      focusPreviousItem: eQ,
      renderCustomPill: ei,
      customPillContainerClassName: ea
    })
  })
]
  });
});

function M(e) {
  let {
onSelect: t,
closePopout: n,
selectedValues: a,
options: o,
width: l,
maxVisibleItems: u,
activeDescendant: d,
listRef: _,
listId: E,
renderOptionLabel: f,
updatePosition: h,
loading: p = !1,
multi: I,
popoutPosition: S,
closeOnSelect: A,
renderOptionPrefix: N = () => null,
renderOptionSuffix: O = () => null
  } = e, R = i.useRef(null), D = i.useCallback(e => {
t(e), A && n();
  }, [
A,
n,
t
  ]);
  return ((0, v.Z)(h), p) ? (0, r.jsx)('div', {
'aria-busy': !0,
className: s()(y.popout, y.loading, {
  [y.popoutPositionTop]: 'top' === S
}),
style: {
  width: l
},
children: (0, r.jsx)(T.$, {
  itemClassName: y.loadingSpinner,
  type: T.R.PULSING_ELLIPSIS
})
  }) : 0 === o.length ? (0, r.jsx)('div', {
className: s()(y.popout, y.noResults, {
  [y.popoutPositionTop]: 'top' === S
}),
style: {
  width: l
},
children: (0, r.jsx)(g.x, {
  color: 'text-muted',
  variant: 'text-md/normal',
  children: C.Z.Messages.NO_RESULTS_FOUND
})
  }) : (0, r.jsx)(c.SJ, {
children: e => {
  let {
    ref: t,
    onKeyDown: n,
    ...i
  } = e;
  return (0, r.jsx)(m._2, {
    className: s()(y.popout, y.searchableSelect, {
      [y.noScrollbar]: o.length <= u,
      [y.popoutPositionTop]: 'top' === S
    }),
    style: {
      width: l,
      maxHeight: 44 * u
    },
    ref: e => {
      var n;
      _.current = e;
      let r = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
      R.current = r, t.current = r;
    },
    ...i,
    role: void 0,
    innerRole: 'listbox',
    innerAriaMultiselectable: I,
    innerId: E,
    rowHeight: 44,
    sections: [o.length],
    sectionHeight: 0,
    renderRow: e => {
      var t;
      let {
        row: n
      } = e, i = o[n], s = f(i);
      return (0, r.jsx)(x, {
        multi: I,
        'aria-posinset': n,
        'aria-setsize': o.length,
        isSelected: a.includes(i.value),
        isFocused: d === String(i.value),
        value: i.value,
        label: s,
        onSelect: D,
        prefix: N(i, {
          inPill: !1,
          inDropdown: !0
        }),
        suffix: O(i, {
          inPill: !1,
          inDropdown: !0
        })
      }, null !== (t = i.key) && void 0 !== t ? t : n);
    },
    renderSection: () => null
  });
}
  });
}

function P(e, t) {
  if (null == e || null == t)
return !1;
  let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
  return (e.compareDocumentPosition(t) & n) === n;
}

function U(e, t, n) {
  let r = i.useMemo(() => (0, l.E)({
  getFocusableElements() {
    let t = e.current;
    return null != t ? Array.from(t.querySelectorAll('[data-option-pill-value]')) : [];
  },
  getActiveElement() {
    var t, n;
    return null == e ? void 0 : null === (n = e.current) || void 0 === n ? void 0 : null === (t = n.ownerDocument) || void 0 === t ? void 0 : t.activeElement;
  }
}), [n]),
a = i.useCallback(t => {
  var n, r;
  return t === (null === (r = e.current) || void 0 === r ? void 0 : null === (n = r.ownerDocument) || void 0 === n ? void 0 : n.activeElement);
}, [e]),
s = i.useCallback(async function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    n = await r.getPreviousFocusableElement({
      wrap: !e
    });
  if (e && ((null == n || a(n)) && (n = await r.getNextFocusableElement()), null == n || a(n))) {
    var i;
    return null === (i = t.current) || void 0 === i ? void 0 : i.focus();
  }
  return null == n ? void 0 : n.focus();
}, [
  r,
  a,
  t
]),
o = i.useCallback(async function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    n = await r.getNextFocusableElement({
      wrap: !e
    });
  if (e && ((null == n || a(n)) && (n = await r.getPreviousFocusableElement()), null == n || a(n))) {
    var i;
    return null === (i = t.current) || void 0 === i ? void 0 : i.focus();
  }
  return null == n ? void 0 : n.focus();
}, [
  r,
  a,
  t
]);
  return {
focusPreviousItem: s,
focusNextItem: o,
focusLastItem: i.useCallback(async () => {
  let e = await r.getLastFocusableElement();
  return null == e ? void 0 : e.focus();
}, [r])
  };
}

function w(e) {
  let {
selectedOptions: t,
selectValue: n,
listRef: a,
focusPreviousItem: s,
focusNextItem: o,
renderOptionSuffix: l,
renderOptionPrefix: u,
renderCustomPill: c,
customPillContainerClassName: d
  } = e, _ = null != c, E = i.useCallback(e => {
if (null != a.current)
  switch (e.key) {
    case 'ArrowRight':
      return e.stopPropagation(), e.preventDefault(), o();
    case 'ArrowLeft':
      return e.stopPropagation(), e.preventDefault(), s();
  }
  }, [
a,
s,
o
  ]), [f, h] = i.useState(null);
  return (0, r.jsx)('ul', {
className: _ ? d : y.optionPillContainer,
ref: a,
onKeyDown: E,
onFocus: e => {
  let t = e.target;
  null != a.current && P(a.current, t) && h(t.getAttribute('data-option-pill-value'));
},
onBlur: e => {
  let t = e.relatedTarget;
  !P(a.current, t) && h(null);
},
children: t.map((e, t) => {
  var i;
  return (0, r.jsx)('li', {
    className: _ ? void 0 : y.optionPillItem,
    children: (0, r.jsx)(V, {
      isCustomPill: _,
      option: e,
      focused: null == f ? 0 === t : f === String(e.value),
      onClick: () => n(e.value),
      renderOptionPrefix: u,
      renderOptionSuffix: l,
      onKeyDown: async t => {
        'Backspace' === t.key ? (await s(!0), n(e.value, !1)) : 'Delete' === t.key && (await o(!0), n(e.value, !1));
      },
      children: _ ? c(e) : (0, r.jsx)('div', {
        className: y.content,
        children: e.label
      })
    })
  }, null !== (i = e.key) && void 0 !== i ? i : ''.concat(e.label, '-').concat(e.value));
})
  });
}

function x(e) {
  let {
value: t,
label: n,
prefix: i,
suffix: a,
onSelect: o,
isSelected: l,
isFocused: u,
multi: d,
..._
  } = e, f = (0, c.JA)(String(t));
  return (0, r.jsxs)(E.P, {
tag: 'li',
style: {
  height: 44
},
focusProps: {
  enabled: !1
},
className: s()(y.option, {
  [y.focused]: u,
  [y.multi]: d
}),
onClick: () => o(t),
...f,
..._,
'aria-selected': l,
id: f['data-list-item-id'],
role: 'option',
children: [
  (0, r.jsxs)('div', {
    className: y.content,
    children: [
      n,
      '\xA0'
    ]
  }),
  null != i && (0, r.jsx)('div', {
    className: y.prefix,
    children: i
  }),
  ' ',
  null != a && (0, r.jsx)('div', {
    className: y.suffix,
    children: a
  }),
  ' ',
  (0, r.jsx)(G, {
    isSelected: l,
    multi: d
  })
]
  });
}

function G(e) {
  let {
isSelected: t,
multi: n
  } = e;
  return n ? (0, r.jsx)('div', {
className: s()(y.multiSelectCheckbox, {
  [y.checked]: t,
  [y.unchecked]: !t
}),
children: t && (0, r.jsx)(S.CheckmarkLargeIcon, {
  size: 'md',
  color: 'currentColor',
  colorClass: y.multiSelectCheck
})
  }) : t ? (0, r.jsx)(S.CircleCheckIcon, {
size: 'custom',
color: 'currentColor',
'aria-hidden': !0,
secondaryColor: 'white',
className: y.selectedIcon,
width: 20,
height: 20
  }) : null;
}

function k(e) {
  let {
selectedOptions: t,
renderOptionPrefix: n,
renderOptionSuffix: i,
...a
  } = e, s = t[0], o = null == n ? void 0 : n(null != s ? s : null, {
inPill: !1,
inDropdown: !1
  }), l = null == i ? void 0 : i(null != s ? s : null, {
inPill: !1,
inDropdown: !1
  });
  return (0, r.jsxs)(r.Fragment, {
children: [
  null != o ? (0, r.jsx)('div', {
    'aria-hidden': !0,
    children: o
  }) : null,
  (0, r.jsx)(F, {
    selectedOptions: t,
    ...a
  }),
  null != l ? (0, r.jsx)('div', {
    'aria-hidden': !0,
    children: l
  }) : null
]
  });
}

function B(e) {
  let {
query: t,
placeholder: n,
selectedOptions: a,
selectValue: o,
onKeyDown: l,
isEditing: u,
isDisabled: c,
inputRef: d,
renderOptionPrefix: _,
renderOptionSuffix: E,
inputClassNames: f,
hidePills: h,
...p
  } = e, m = Math.max(n.length, (null != t ? t : '').length), I = i.useRef(null), {
focusPreviousItem: T,
focusNextItem: g,
focusLastItem: S
  } = U(I, d, a);
  return (0, r.jsxs)(r.Fragment, {
children: [
  a.length > 0 && !h && (0, r.jsx)(w, {
    listRef: I,
    selectedOptions: a,
    renderOptionPrefix: _,
    renderOptionSuffix: E,
    selectValue: o,
    focusNextItem: g,
    focusPreviousItem: T
  }),
  (0, r.jsx)(F, {
    style: {
      minWidth: ''.concat(m, 'ch')
    },
    className: s()(y.multi, f),
    query: t,
    placeholder: n,
    selectValue: o,
    selectedOptions: a,
    isEditing: u,
    isDisabled: c,
    inputRef: d,
    onKeyDown: e => {
      [
        'ArrowLeft',
        'Backspace'
      ].includes(e.key) && ('' === t || null == t) && a.length > 0 ? S() : l(e);
    },
    ...p
  })
]
  });
}

function F(e) {
  let {
query: t,
inputId: n,
'aria-describedby': i,
'aria-invalid': a,
'aria-required': o,
'aria-labelledby': l,
'aria-expanded': u,
isDisabled: c,
listboxId: _,
activeDescendant: E,
navigatorId: f,
onChange: h,
onFocus: p,
setInputRef: m,
isEditing: I,
onKeyDown: T,
placeholder: g,
loading: S,
style: A,
className: N
  } = e;
  return (0, r.jsx)('input', {
role: 'combobox',
id: n,
'aria-haspopup': 'listbox',
'aria-invalid': a,
'aria-labelledby': l,
'aria-autocomplete': 'list',
'aria-expanded': u,
'aria-describedby': i,
'aria-disabled': c,
'aria-controls': _,
'aria-required': o,
'aria-busy': S,
style: null != A ? A : {},
'aria-activedescendant': null != E ? (0, d.jb)(f, E) : '',
disabled: c,
value: null != t ? t : '',
onChange: e => {
  h(e.target.value);
},
onFocus: p,
className: s()(y.searchInput, N, {
  [y.editing]: I,
  [y.disabled]: c
}),
onKeyDown: T,
placeholder: '' !== (null != t ? t : '').trim() ? void 0 : g,
ref: m
  });
}

function V(e) {
  let {
option: t,
focused: n,
onClick: i,
onKeyDown: a,
renderOptionPrefix: s,
renderOptionSuffix: o,
children: l,
isCustomPill: u
  } = e, c = !u && (null == s ? void 0 : s(t, {
inPill: !0,
inDropdown: !1
  })), d = !u && (null == o ? void 0 : o(t, {
inPill: !0,
inDropdown: !1
  }));
  return (0, r.jsx)(f.t, {
offset: 3,
children: (0, r.jsxs)(_.zx, {
  look: _.zx.Looks.BLANK,
  tabIndex: n ? 0 : -1,
  'data-option-pill-value': t.value,
  className: y.optionPillBtn,
  innerClassName: u ? null : y.optionPill,
  onClick: () => null == i ? void 0 : i(t.value),
  onKeyDown: a,
  children: [
    l,
    null != c && (0, r.jsx)('div', {
      className: y.prefix,
      children: c
    }),
    ' ',
    null != d && (0, r.jsx)('div', {
      className: y.suffix,
      children: d
    }),
    (0, r.jsx)(p.n, {
      children: C.Z.Messages.REMOVE
    }),
    !u && (0, r.jsx)(S.CloseSmallIcon, {
      size: 'custom',
      color: 'currentColor',
      className: y.deleteOptionIcon,
      width: 14,
      height: 14
    })
  ]
})
  });
}