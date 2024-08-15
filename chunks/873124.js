s.d(t, {
  Z: function() {
return a;
  }
}), s(47120), s(773603);
var n = s(735250),
  l = s(470079),
  i = s(481060),
  r = s(507453),
  o = s(689938);

function a(e) {
  let {
mfaChallenge: t,
finish: s,
setSlide: a,
onClose: d,
isSlideReady: u
  } = e, [c, h] = l.useState(!1), [f, m] = l.useState(null), [S, _] = l.useState(''), g = l.useRef(null);
  return l.useEffect(() => {
if (u) {
  var e;
  null === (e = g.current) || void 0 === e || e.focus();
}
  }, [u]), (0, n.jsxs)('form', {
onSubmit: e => {
  e.preventDefault(), h(!0), s({
    mfaType: 'password',
    data: S
  }).catch(e => {
    var t, s;
    m(null !== (s = e.message) && void 0 !== s ? s : null === (t = e.body) || void 0 === t ? void 0 : t.message);
  }).finally(() => {
    h(!1);
  });
},
children: [
  (0, n.jsx)(r.Z.SlideHeader, {
    onClose: d
  }),
  (0, n.jsx)(r.Z.SlideContent, {
    children: (0, n.jsxs)(i.FormItem, {
      title: o.Z.Messages.FORM_LABEL_PASSWORD,
      children: [
        (0, n.jsx)(i.TextInput, {
          inputRef: g,
          onChange: _,
          value: S,
          type: 'password',
          autoComplete: 'password',
          spellCheck: 'false',
          disabled: c
        }),
        (0, n.jsx)(r.Z.SlideError, {
          error: f
        })
      ]
    })
  }),
  (0, n.jsx)(r.Z.SlideFooter, {
    mfaChallenge: t,
    setSlide: a,
    showConfirm: !0,
    disabled: 0 === S.length,
    submitting: c
  })
]
  });
}