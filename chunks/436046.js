n.d(t, {
  Z: function() {
return N;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  o = n(512722),
  r = n.n(o),
  l = n(442837),
  i = n(692547),
  c = n(481060),
  d = n(771308),
  u = n(13430),
  _ = n(594174),
  f = n(63063),
  p = n(981631),
  m = n(723359),
  h = n(689938),
  E = n(178819);

function N(e) {
  let {
onComplete: t,
onClose: n
  } = e, [o, N] = a.useState(null), [T, x] = a.useState(null), [A, v] = a.useState(!1), b = (0, l.e7)([_.default], () => _.default.getCurrentUser()), C = a.createRef();
  async function I(e) {
e.preventDefault(), r()(null != o, 'Cannot submit null birthday.'), v(!0);
try {
  await d.Av(o, m.L0.NEW_USER_FLOW), t();
} catch (e) {
  if (null != e.body && null != e.body.date_of_birth)
    d.wE(m.L0.NEW_USER_FLOW), d.hp(m.L0.NEW_USER_FLOW), n();
  else {
    var s;
    (null == e ? void 0 : null === (s = e.body) || void 0 === s ? void 0 : s.username) != null ? x(h.Z.Messages.USER_SETTINGS_UPDATE_FAILURE) : x(null == e ? void 0 : e.body.message);
  }
}
v(!1);
  }
  a.useEffect(() => {
null != b && null != b.nsfwAllowed && t();
  }, [
b,
t
  ]);
  let g = a.useCallback(e => {
  N(e);
}, [N]),
M = a.useCallback(() => {
  var e;
  null === (e = C.current) || void 0 === e || e.focus();
}, [C]);
  return null == b ? null : (0, s.jsxs)('form', {
className: E.content,
onSubmit: I,
children: [
  (0, s.jsx)(c.ClydeIcon, {
    size: 'custom',
    width: 56,
    height: 40,
    className: E.logo,
    color: i.Z.unsafe_rawColors.BRAND_500.css
  }),
  (0, s.jsx)(c.Heading, {
    className: E.title,
    variant: 'heading-xl/semibold',
    children: h.Z.Messages.NUF_JOIN_SERVER_TITLE_2
  }),
  (0, s.jsx)(c.Text, {
    color: 'text-normal',
    className: E.description,
    variant: 'text-md/normal',
    children: h.Z.Messages.NUF_AGE_GATE_BODY.format({
      helpURL: f.Z.getArticleURL(p.BhN.AGE_GATE)
    })
  }),
  (0, s.jsx)(c.ThemeContextProvider, {
    theme: p.BRd.LIGHT,
    children: (0, s.jsx)(u.Z, {
      required: !0,
      autoFocus: !0,
      wrapperClassName: E.formItem,
      label: h.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,
      name: 'birthday',
      onChange: g,
      onPopulated: M,
      error: T,
      value: o
    })
  }),
  (0, s.jsx)('div', {
    className: E.footer,
    children: (0, s.jsx)('div', {
      className: E.buttonWrapper,
      children: (0, s.jsx)(c.Button, {
        buttonRef: C,
        type: 'submit',
        size: c.Button.Sizes.LARGE,
        submitting: A,
        disabled: null == o,
        fullWidth: !0,
        children: h.Z.Messages.NEXT
      })
    })
  })
]
  });
}