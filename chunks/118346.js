n.d(s, {
  B: function() {
return I;
  },
  b: function() {
return c;
  }
}), n(47120);
var l = n(735250),
  t = n(470079),
  i = n(481060),
  r = n(893776),
  a = n(489813),
  o = n(689938),
  d = n(902681);

function u() {
  let [e, s] = t.useState(!1), [n, a] = t.useState(!1), [u, c] = t.useState(!1);
  t.useEffect(() => {
let e;
return n && (e = setTimeout(() => {
  a(!1);
}, 2000)), () => {
  null != e && clearTimeout(e);
};
  }, [n]);
  let I = async () => {
if (!e) {
  s(!0);
  try {
    await r.Z.verifyResend(), a(!0), c(!0);
  } catch (e) {} finally {
    s(!1);
  }
}
  };
  return n ? (0, l.jsx)(i.Text, {
className: d.verifyConfirmText,
variant: 'text-sm/normal',
color: 'text-positive',
children: o.Z.Messages.MEMBER_VERIFICATION_EMAIL_VERIFICATION_EMAIL_SENT
  }) : (0, l.jsx)(i.Button, {
size: i.Button.Sizes.SMALL,
submitting: e,
onClick: I,
children: u ? o.Z.Messages.RESEND_EMAIL_SHORT : o.Z.Messages.VERIFY
  });
}

function c() {
  return (0, l.jsx)(a.PU, {
icon: i.EnvelopeIcon,
text: o.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_LABEL,
footnote: o.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
meetsRequirement: !1,
children: (0, l.jsx)(i.Tooltip, {
  text: o.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_FIELD_SETTINGS_TOOLTIP,
  children: e => (0, l.jsx)(i.Button, {
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
  return (0, l.jsx)(a.PU, {
icon: i.EnvelopeIcon,
text: n,
footnote: o.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
meetsRequirement: s,
children: (0, l.jsx)(u, {})
  });
}