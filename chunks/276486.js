n.d(s, {
  l: function() {
return d;
  },
  v: function() {
return u;
  }
});
var l = n(735250);
n(470079);
var t = n(481060),
  i = n(144114),
  r = n(489813),
  a = n(815660),
  o = n(689938);

function d() {
  return (0, l.jsx)(l.Fragment, {
children: (0, l.jsx)(r.PU, {
  icon: t.MobilePhoneIcon,
  text: o.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_LABEL,
  footnote: o.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
  meetsRequirement: !1,
  children: (0, l.jsx)(t.Tooltip, {
    text: o.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_FIELD_SETTINGS_TOOLTIP,
    children: e => (0, l.jsx)(t.Button, {
      ...e,
      size: t.Button.Sizes.SMALL,
      disabled: !0,
      children: o.Z.Messages.VERIFY
    })
  })
})
  });
}

function u(e) {
  let {
isUserVerified: s
  } = e, d = s ? o.Z.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED : o.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_LABEL;
  return (0, l.jsx)(l.Fragment, {
children: (0, l.jsx)(r.PU, {
  icon: t.MobilePhoneIcon,
  text: d,
  footnote: o.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
  meetsRequirement: s,
  children: (0, l.jsx)(t.Button, {
    size: t.Button.Sizes.SMALL,
    onClick: () => {
      (0, t.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([
          n.e('76540'),
          n.e('74072')
        ]).then(n.bind(n, 607018));
        return s => (0, l.jsx)(e, {
          reason: i.L.GUILD_PHONE_REQUIRED,
          ...s
        });
      }, {
        modalKey: a.M
      });
    },
    children: o.Z.Messages.VERIFY
  })
})
  });
}