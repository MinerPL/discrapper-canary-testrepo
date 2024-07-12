n(47120);
var s = n(735250),
  r = n(470079),
  i = n(120356),
  a = n.n(i),
  l = n(442837),
  o = n(481060),
  c = n(144114),
  u = n(742458),
  d = n(541692),
  h = n(952802),
  _ = n(388905),
  E = n(815660),
  g = n(689938),
  p = n(483085),
  f = n(549856);
t.Z = () => {
  let [e, t] = r.useState(''), [i, I] = r.useState(''), [m, N] = r.useState(!1), [T, x] = r.useState(!1), [A, C] = r.useState(null), [S, O] = r.useState(null), v = (0, l.e7)([d.Z], () => d.Z.getCountryCode()), Z = v.code.split(' ')[0], R = async () => {
try {
  await c.Z.resendCode(e);
} catch (e) {
  O(e.body.message);
}
  }, b = async () => {
N(!0);
try {
  let {
    token: t
  } = await c.Z.verifyPhone(Z + e, i);
  C(null), O(null), x(!0), c.Z.validatePhoneForSupport(t);
} catch (e) {
  e.body.message ? (C(null), O(e.body.message)) : (C(e.body.phone), O(e.body.code));
} finally {
  N(!1);
}
  }, D = (0, s.jsxs)(_.ZP, {
children: [
  (0, s.jsx)(_.Ee, {
    src: n(292824)
  }),
  (0, s.jsxs)(_.Dx, {
    className: a()(f.marginTop20, p.flex, p.justifyCenter, p.alignCenter),
    children: [
      g.Z.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED,
      (0, s.jsx)(o.CircleCheckIcon, {
        size: 'md',
        color: 'currentColor',
        className: f.marginLeft8
      })
    ]
  })
]
  });
  return T ? D : (0, s.jsxs)(_.ZP, {
children: [
  (0, s.jsx)(_.Dx, {
    children: g.Z.Messages.ENTER_CODE
  }),
  (0, s.jsx)(_.DK, {
    className: f.marginTop8,
    children: g.Z.Messages.VERIFY_PHONE_FOR_SUPPORT
  }),
  (0, s.jsxs)(_.gO, {
    className: f.marginTop20,
    children: [
      (0, s.jsx)(h.Z, {
        label: g.Z.Messages.FORM_LABEL_PHONE_NUMBER,
        alpha2: v.alpha2,
        countryCode: Z,
        value: e,
        autoComplete: 'off',
        spellCheck: 'false',
        onChange: t,
        forceMode: u.Nz.PHONE,
        error: A
      }),
      (0, s.jsx)(_.II, {
        className: f.marginTop20,
        label: g.Z.Messages.CONFIRMATION_CODE,
        value: i,
        onChange: I,
        maxLength: E.z,
        error: S
      }),
      (0, s.jsx)(_.zx, {
        size: _.zx.Sizes.SMALL,
        look: _.zx.Looks.LINK,
        onClick: R,
        children: g.Z.Messages.RESEND_CODE
      }),
      (0, s.jsx)(_.zx, {
        className: f.marginTop20,
        onClick: b,
        submitting: m,
        children: g.Z.Messages.DONE
      })
    ]
  })
]
  });
};