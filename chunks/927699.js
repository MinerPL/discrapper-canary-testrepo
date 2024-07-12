s.d(n, {
  Z: function() {
return T;
  }
}), s(47120);
var l = s(735250),
  t = s(470079),
  i = s(120356),
  r = s.n(i),
  a = s(481060),
  c = s(541716),
  o = s(752305),
  u = s(893718),
  d = s(993413),
  _ = s(131704),
  m = s(474936),
  E = s(981631),
  I = s(689938),
  p = s(183165);
let N = (0, _.kt)({
  id: '1',
  type: E.d4z.DM
});

function T(e) {
  let {
sectionTitle: n,
errors: s,
onTextChange: i,
pendingText: _,
placeholder: E,
currentText: T,
className: x,
innerClassName: S,
disabled: h = !1,
disableThemedBackground: P = !1
  } = e, [f, A] = t.useState(null != _ ? _ : T), [v, M] = t.useState((0, o.JM)(f)), g = t.useRef(!1);
  return t.useEffect(() => {
g.current = !0;
  }, []), t.useEffect(() => {
if (void 0 === _) {
  let e = (0, o.JM)(T);
  A(T), M(e);
}
  }, [
_,
T
  ]), (0, l.jsx)('div', {
className: r()(p.body, x),
children: (0, l.jsxs)(d.Z, {
  title: n,
  errors: s,
  disabled: h,
  children: [
    (0, l.jsx)(u.Z, {
      innerClassName: r()(p.textArea, S),
      editorClassName: p.editorTextArea,
      maxCharacterCount: m.$n,
      onChange: function(e, n, s) {
        n !== f && (A(n), M(s), i(n));
      },
      placeholder: E,
      channel: N,
      textValue: f,
      richValue: v,
      type: c.I.CUSTOM_GIFT,
      onBlur: () => {
        g.current = !1;
      },
      onFocus: () => {
        g.current = !0;
      },
      focused: g.current,
      onSubmit: function() {
        return new Promise(e => {
          e({
            shouldClear: !1,
            shouldRefocus: !0
          });
        });
      },
      disableThemedBackground: P
    }),
    (0, l.jsx)(a.HiddenVisually, {
      children: I.Z.Messages.MAXIMUM_LENGTH.format({
        maxLength: m.$n
      })
    })
  ]
})
  });
}