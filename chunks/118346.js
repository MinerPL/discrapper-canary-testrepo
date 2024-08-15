n.d(s, {
  B: function() {
return I;
  },
  b: function() {
return c;
  }
}), n(47120);
var t = n(735250),
  l = n(470079),
  i = n(481060),
  a = n(893776),
  r = n(489813),
  o = n(689938),
  d = n(994735);

function u() {
  let [e, s] = l.useState(!1), [n, r] = l.useState(!1), [u, c] = l.useState(!1);
  l.useEffect(() => {
let e;
return n && (e = setTimeout(() => {
  r(!1);
}, 2000)), () => {
  null != e && clearTimeout(e);
};
  }, [n]);
  let I = async () => {
if (!e) {
  s(!0);
  try {
    await a.Z.verifyResend(), r(!0), c(!0);
  } catch (e) {} finally {
    s(!1);
  }
}
  };
  return n ? (0, t.jsx)(i.Text, {
className: d.verifyConfirmText,
variant: 'text-sm/normal',
color: 'text-positive',
children: o.Z.Messages.MEMBER_VERIFICATION_EMAIL_VERIFICATION_EMAIL_SENT
  }) : (0, t.jsx)(i.Button, {
size: i.Button.Sizes.SMALL,
submitting: e,
onClick: I,
children: u ? o.Z.Messages.RESEND_EMAIL_SHORT : o.Z.Messages.VERIFY
  });
}

function c() {
  return (0, t.jsx)(r.PU, {
icon: i.EnvelopeIcon,
text: o.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_LABEL,
footnote: o.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
meetsRequirement: !1,
children: (0, t.jsx)(i.Tooltip, {
  text: o.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_FIELD_SETTINGS_TOOLTIP,
  children: e => (0, t.jsx)(i.Button, {
    ...e,
    size: i.Button.Sizes.SMALL,
    disabled: !0,
    children: o.Z.Messages.VERIFY
  })
})
  });
}

function I(e) {
  let {
isUserVerified: s
  } = e, n = s ? o.Z.Messages.MEMBER_VERIFICATION_EMAIL_VERIFIED : o.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_LABEL;
  return (0, t.jsx)(r.PU, {
icon: i.EnvelopeIcon,
text: n,
footnote: o.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
meetsRequirement: s,
children: (0, t.jsx)(u, {})
  });
}