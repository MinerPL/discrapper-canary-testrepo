t.d(n, {
  Z: function() {
return x;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  r = t(120356),
  s = t.n(r),
  l = t(481060),
  o = t(541716),
  c = t(752305),
  u = t(893718),
  d = t(993413),
  _ = t(131704),
  p = t(474936),
  m = t(981631),
  I = t(689938),
  f = t(651949);
let E = (0, _.kt)({
  id: '1',
  type: m.d4z.DM
});

function x(e) {
  let {
sectionTitle: n,
errors: t,
onTextChange: r,
pendingText: _,
placeholder: m,
currentText: x,
className: N,
innerClassName: S,
disabled: T = !1,
disableThemedBackground: h = !1
  } = e, [b, g] = a.useState(null != _ ? _ : x), [P, v] = a.useState((0, c.JM)(b)), A = a.useRef(!1);
  return a.useEffect(() => {
A.current = !0;
  }, []), a.useEffect(() => {
if (void 0 === _) {
  let e = (0, c.JM)(x);
  g(x), v(e);
}
  }, [
_,
x
  ]), (0, i.jsx)('div', {
className: s()(f.body, N),
children: (0, i.jsxs)(d.Z, {
  title: n,
  errors: t,
  disabled: T,
  children: [
    (0, i.jsx)(u.Z, {
      innerClassName: s()(f.textArea, S),
      editorClassName: f.editorTextArea,
      maxCharacterCount: p.$n,
      onChange: function(e, n, t) {
        n !== b && (g(n), v(t), r(n));
      },
      placeholder: m,
      channel: E,
      textValue: b,
      richValue: P,
      type: o.I.CUSTOM_GIFT,
      onBlur: () => {
        A.current = !1;
      },
      onFocus: () => {
        A.current = !0;
      },
      focused: A.current,
      onSubmit: function() {
        return new Promise(e => {
          e({
            shouldClear: !1,
            shouldRefocus: !0
          });
        });
      },
      disableThemedBackground: h
    }),
    (0, i.jsx)(l.HiddenVisually, {
      children: I.Z.Messages.MAXIMUM_LENGTH.format({
        maxLength: p.$n
      })
    })
  ]
})
  });
}