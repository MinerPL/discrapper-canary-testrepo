n.d(t, {
  Z: function() {
return E;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(442837),
  o = n(481060),
  c = n(393238),
  d = n(607070),
  u = n(596390),
  _ = n(736954);
let I = a.forwardRef(function(e, t) {
  var n, i;
  let {
value: l,
isSelected: c,
isEditing: d,
forceShowErrorTooltip: u = !1,
error: I
  } = e, [E, T, m] = a.useMemo(() => {
if (null == I)
  return [];
let {
  erroringCharacterOffset: e = 0,
  erroringCharacterLength: t = l.length
} = null != I ? I : {}, n = l.slice(0, e), s = l.slice(e, e + t);
return [
  n,
  s,
  l.slice(e + t)
];
  }, [
l,
I
  ]);
  return null == I ? (0, s.jsx)('div', {
className: r()(_.chipletValue, {
  [_.isEditing]: d,
  [_.isSelected]: c
}),
ref: t,
children: l
  }) : (null !== (n = null == E ? void 0 : E.length) && void 0 !== n ? n : 0) + (null !== (i = null == T ? void 0 : T.length) && void 0 !== i ? i : 0) > 70 ? (0, s.jsx)(o.Tooltip, {
'aria-label': I.message,
text: () => (0, s.jsxs)('div', {
  'aria-label': I.message,
  children: [
    I.message,
    ' ',
    (0, s.jsx)('span', {
      className: _.errorOverflowValue,
      children: T
    })
  ]
}),
tooltipClassName: _.errorTooltip,
color: o.Tooltip.Colors.RED,
position: 'left',
forceOpen: u || void 0,
children: e => (0, s.jsxs)('div', {
  ref: t,
  className: r()(_.chipletValue, {
    [_.isEditing]: d,
    [_.isError]: null != I && !d,
    [_.isOverflowing]: null != I && !d
  }),
  ...e,
  children: [
    (0, s.jsx)('span', {
      children: E
    }),
    (0, s.jsx)('span', {
      className: _.errorValue,
      children: T
    }),
    (0, s.jsx)('span', {
      children: m
    })
  ]
})
  }) : (0, s.jsxs)('div', {
ref: t,
className: r()(_.chipletValue, {
  [_.isEditing]: d,
  [_.isError]: null != I && !d
}),
children: [
  (0, s.jsx)('span', {
    children: E
  }),
  (0, s.jsx)(o.Tooltip, {
    text: I.message,
    color: o.Tooltip.Colors.RED,
    position: 'top',
    forceOpen: u || void 0,
    children: e => (0, s.jsx)('span', {
      ...e,
      className: _.errorValue,
      children: T
    })
  }),
  (0, s.jsx)('span', {
    children: m
  })
]
  });
});

function E(e) {
  let {
value: t,
onChange: n,
onBlur: i,
onFocus: E,
onRemove: T,
isSelected: m,
isSelecting: N,
error: S,
forceShowErrorTooltip: h
  } = e, g = a.useRef(null), C = a.useRef(null), [x, p] = a.useState(!1), {
ref: R,
width: f = 0
  } = (0, c.Z)(x), {
ref: L,
width: O = 0
  } = (0, c.Z)(x), A = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), [M, D] = a.useState(h), v = a.useRef(null), j = f > O ? f : O;
  a.useEffect(() => {
h ? (D(!0), v.current = setTimeout(() => {
  D(!1), v.current = null;
}, u.I5)) : D(!1);
  }, [h]), a.useEffect(() => () => {
clearTimeout(v.current);
  }, []);
  let Z = a.useCallback(e => {
  n(e.target.value);
}, [n]),
b = a.useCallback(function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  if (t.trim().length <= 0 && T(), null != g.current && null != R.current && null != C.current) {
    var n;
    g.current.scrollTo(0, 0), g.current.setSelectionRange(0, 0), g.current.scrollLeft = 0, R.current.scrollLeft = 0, (null === (n = C.current) || void 0 === n ? void 0 : n.ref) != null && (C.current.ref.scrollLeft = 0);
  }
  p(!1), i(e);
}, [
  t,
  R,
  i,
  T
]),
U = a.useCallback(e => {
  let n = t.trim().length <= 0;
  u.ye.has(e.key) ? (e.preventDefault(), e.stopPropagation(), b(!0)) : 'Backspace' === e.key && n && (e.preventDefault(), e.stopPropagation(), b(!0));
}, [
  b,
  t
]),
G = a.useCallback(e => {
  let t = e.metaKey || e.ctrlKey;
  E(t), t ? e.preventDefault() : p(!0), e.stopPropagation();
}, [E]),
P = a.useCallback(e => {
  T();
}, [T]);
  return (0, s.jsx)('div', {
className: _.chipletFlexContainer,
children: (0, s.jsxs)('div', {
  ref: L,
  className: r()(_.chipletContainer, {
    [_.isEditing]: x,
    [_.smallBlink]: !x && !A,
    [_.isSelected]: m,
    [_.isSelecting]: N,
    [_.isError]: null != S && !x
  }),
  children: [
    (0, s.jsxs)(o.Clickable, {
      tag: 'div',
      onBlur: () => b(!1),
      onClick: G,
      ignoreKeyPress: !0,
      onMouseEnter: () => D(!0),
      onMouseLeave: () => D(!1),
      className: r()(_.chipletContainerInner, {
        [_.isSelecting]: N,
        [_.isEditing]: x
      }),
      ref: C,
      children: [
        (0, s.jsx)('input', {
          className: r()(_.chipletInput, {
            [_.isEditing]: x,
            [_.isSelecting]: N
          }),
          ref: g,
          onChange: Z,
          onKeyDownCapture: U,
          value: t,
          style: {
            width: j > 0 ? j : 'calc('.concat(t.length, 'ch + 10px)')
          }
        }),
        (0, s.jsx)(I, {
          ref: R,
          value: t,
          isEditing: x,
          isSelected: m,
          error: S,
          forceShowErrorTooltip: M || x
        })
      ]
    }),
    !x && (0, s.jsx)(o.Clickable, {
      className: _.closeIconContainer,
      onClick: P,
      children: (0, s.jsx)(o.CloseSmallIcon, {
        size: 'xxs',
        color: 'currentColor',
        className: _.closeIcon
      })
    })
  ]
})
  });
}