n.d(t, {
  Z: function() {
return N;
  }
}), n(47120);
var a = n(735250),
  s = n(470079),
  o = n(512722),
  r = n.n(o),
  l = n(442837),
  i = n(692547),
  c = n(481060),
  d = n(771308),
  u = n(13430),
  _ = n(594174),
  p = n(63063),
  f = n(981631),
  m = n(723359),
  h = n(689938),
  E = n(21800);

function N(e) {
  let {
onComplete: t,
onClose: n
  } = e, [o, N] = s.useState(null), [T, x] = s.useState(null), [A, v] = s.useState(!1), b = (0, l.e7)([_.default], () => _.default.getCurrentUser()), C = s.createRef();
  async function I(e) {
e.preventDefault(), r()(null != o, 'Cannot submit null birthday.'), v(!0);
try {
  await d.Av(o, m.L0.NEW_USER_FLOW), t();
} catch (e) {
  if (null != e.body && null != e.body.date_of_birth)
    d.wE(m.L0.NEW_USER_FLOW), d.hp(m.L0.NEW_USER_FLOW), n();
  else {
    var a;
    (null == e ? void 0 : null === (a = e.body) || void 0 === a ? void 0 : a.username) != null ? x(h.Z.Messages.USER_SETTINGS_UPDATE_FAILURE) : x(null == e ? void 0 : e.body.message);
  }
}
v(!1);
  }
  s.useEffect(() => {
null != b && null != b.nsfwAllowed && t();
  }, [
b,
t
  ]);
  let g = s.useCallback(e => {
  N(e);
}, [N]),
M = s.useCallback(() => {
  var e;
  null === (e = C.current) || void 0 === e || e.focus();
}, [C]);
  return null == b ? null : (0, a.jsxs)('form', {
className: E.content,
onSubmit: I,
children: [
  (0, a.jsx)(c.ClydeIcon, {
    size: 'custom',
    width: 56,
    height: 40,
    className: E.logo,
    color: i.Z.unsafe_rawColors.BRAND_500.css
  }),
  (0, a.jsx)(c.Heading, {
    className: E.title,
    variant: 'heading-xl/semibold',
    children: h.Z.Messages.NUF_JOIN_SERVER_TITLE_2
  }),
  (0, a.jsx)(c.Text, {
    color: 'text-normal',
    className: E.description,
    variant: 'text-md/normal',
    children: h.Z.Messages.NUF_AGE_GATE_BODY.format({
      helpURL: p.Z.getArticleURL(f.BhN.AGE_GATE)
    })
  }),
  (0, a.jsx)(c.ThemeContextProvider, {
    theme: f.BRd.LIGHT,
    children: (0, a.jsx)(u.Z, {
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
  (0, a.jsx)('div', {
    className: E.footer,
    children: (0, a.jsx)('div', {
      className: E.buttonWrapper,
      children: (0, a.jsx)(c.Button, {
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