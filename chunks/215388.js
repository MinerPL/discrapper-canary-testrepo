t.d(A, {
  Z: function() {
return f;
  }
}), t(47120);
var a = t(735250),
  n = t(470079),
  r = t(120356),
  s = t.n(r),
  o = t(772848),
  l = t(481060),
  i = t(752305),
  d = t(893718),
  c = t(131704),
  u = t(703558),
  C = t(981631),
  g = t(689938),
  T = t(703582),
  p = t(791170);
let h = (0, o.Z)(),
  m = (0, c.kt)({
id: '1',
type: C.d4z.DM
  });

function I() {
  return new Promise(e => {
e({
  shouldClear: !1,
  shouldRefocus: !0
});
  });
}

function U(e) {
  var A;
  let {
hasError: t,
maxLength: n,
text: r
  } = e;
  return (0, a.jsxs)('div', {
className: s()(p.maxLength, {
  [p.errorOverflow]: t
}),
'aria-hidden': 'true',
children: [
  null !== (A = null == r ? void 0 : r.length) && void 0 !== A ? A : 0,
  ' ',
  null != n && '/ '.concat(n)
]
  });
}

function f(e) {
  var A;
  let {
'aria-labelledby': t,
className: r,
id: o,
autoFocus: c,
maxLength: C,
onChange: p,
onSubmit: f,
showCharacterCount: v = !1,
placeholder: q,
required: E,
value: N,
enableThemedBackground: D = !1,
parentModalKey: O
  } = e, R = (0, l.useFormContext)(), [x, L] = n.useState(() => (0, i.JM)(N)), b = n.useRef(!0 === c), P = null != t ? t : null == R ? void 0 : R.titleId, V = null !== (A = null == R ? void 0 : R.errorId) && void 0 !== A ? A : h, _ = n.useMemo(() => ({
analyticsName: 'simple',
autocomplete: {
  alwaysUseLayer: !0,
  small: !0
},
disableAutoFocus: !0 !== c,
drafts: {
  type: u.d.ChannelMessage
},
emojis: {
  button: !0
},
permissions: {
  requireSendMessages: !1
},
submit: {
  useDisabledStylesOnSubmit: !0,
  disableEnterToSubmit: !0
}
  }), [c]);
  return (0, a.jsxs)(d.Z, {
'aria-describedby': V,
'aria-labelledby': P,
innerClassName: s()(r, T.textArea),
id: o,
maxCharacterCount: C,
onChange: function(e, A, t) {
  p(A), L(t);
},
placeholder: q,
required: E,
channel: m,
textValue: N,
richValue: x,
type: _,
onBlur: () => {
  b.current = !1;
},
onFocus: () => {
  b.current = !0;
},
focused: b.current,
onSubmit: null != f ? f : I,
disableThemedBackground: !D,
parentModalKey: O,
emojiPickerCloseOnModalOuterClick: !0,
children: [
  !0 === v && (0, a.jsx)(U, {
    hasError: null != R.error || null != C && N.length > C,
    text: N,
    maxLength: C
  }),
  null != C && (0, a.jsx)(l.HiddenVisually, {
    id: h,
    children: g.Z.Messages.MAXIMUM_LENGTH.format({
      maxLength: C
    })
  })
]
  });
}