a(47120);
var t = a(735250),
  n = a(470079),
  l = a(120356),
  i = a.n(l),
  r = a(481060),
  o = a(231239),
  c = a(881052),
  d = a(313201),
  N = a(888592),
  u = a(981631),
  _ = a(689938),
  m = a(208691);
let E = (0, d.hQ)();
s.Z = e => {
  let {
email: s,
setStep: a,
onBack: l,
school: d,
setSchool: I
  } = e, [x, h] = n.useState(null), [C, T] = n.useState(!1), g = async () => {
h(null), T(!0);
try {
  await o.Z.signup(s, d), a(N.tF.EMAIL_WAITLIST);
} catch (e) {
  h(new c.Hx(e));
} finally {
  T(!1);
}
  }, O = async e => {
null != d && '' !== d && e.charCode === u.yXg.ENTER && await g();
  };
  return (0, t.jsxs)('div', {
className: m.container,
children: [
  (0, t.jsx)('div', {
    className: m.__invalid_topImage
  }),
  (0, t.jsx)(r.Heading, {
    className: i()(m.centerText, m.header),
    variant: 'heading-xl/semibold',
    children: _.Z.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_HEADER
  }),
  (0, t.jsx)('div', {
    className: m.descriptionWidth,
    children: (0, t.jsx)(r.Text, {
      className: m.centerText,
      variant: 'text-sm/normal',
      color: 'header-secondary',
      children: _.Z.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_DESCRIPTION
    })
  }),
  (0, t.jsxs)(r.FormItem, {
    className: m.formItem,
    children: [
      (0, t.jsx)(r.FormTitle, {
        id: E,
        children: _.Z.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_INPUT_HEADER
      }),
      (0, t.jsx)(r.TextInput, {
        onKeyPress: O,
        placeholder: _.Z.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_INPUT_PLACEHOLDER,
        onChange: e => {
          I(e);
        },
        error: null == x ? void 0 : x.getAnyErrorMessage(),
        'aria-labelledby': E
      })
    ]
  }),
  (0, t.jsxs)('div', {
    className: m.footer,
    children: [
      (0, t.jsx)(r.Button, {
        className: m.backButton,
        onClick: l,
        look: r.Button.Looks.LINK,
        size: r.Button.Sizes.NONE,
        color: r.Button.Colors.PRIMARY,
        children: _.Z.Messages.BACK
      }),
      (0, t.jsx)(r.Button, {
        onClick: g,
        size: r.Button.Sizes.MEDIUM,
        color: r.Button.Colors.BRAND,
        className: m.__invalid_submitButton,
        submitting: C,
        children: _.Z.Messages.JOIN_WAITLIST
      })
    ]
  })
]
  });
};