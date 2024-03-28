"use strict";
s.r(t), s.d(t, {
  PhoneRequirementFormField: function() {
    return c
  },
  PreviewPhoneRequirementFormField: function() {
    return o
  }
});
var l = s("735250");
s("470079");
var n = s("481060"),
  i = s("144114"),
  a = s("736921"),
  r = s("489813"),
  u = s("815660"),
  d = s("689938");

function o() {
  return (0, l.jsx)(l.Fragment, {
    children: (0, l.jsx)(r.RequirementWithActionRenderer, {
      icon: a.default,
      text: d.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_LABEL,
      footnote: d.default.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
      meetsRequirement: !1,
      children: (0, l.jsx)(n.Tooltip, {
        text: d.default.Messages.MEMBER_VERIFICATION_VERIFICATION_FIELD_SETTINGS_TOOLTIP,
        children: e => (0, l.jsx)(n.Button, {
          ...e,
          size: n.Button.Sizes.SMALL,
          disabled: !0,
          children: d.default.Messages.VERIFY
        })
      })
    })
  })
}

function c(e) {
  let {
    isUserVerified: t
  } = e, o = t ? d.default.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED : d.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_LABEL;
  return (0, l.jsx)(l.Fragment, {
    children: (0, l.jsx)(r.RequirementWithActionRenderer, {
      icon: a.default,
      text: o,
      footnote: d.default.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
      meetsRequirement: t,
      children: (0, l.jsx)(n.Button, {
        size: n.Button.Sizes.SMALL,
        onClick: () => {
          (0, n.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([s.e("49237"), s.e("99387"), s.e("76540"), s.e("33273")]).then(s.bind(s, "607018"));
            return t => (0, l.jsx)(e, {
              reason: i.ChangePhoneReason.GUILD_PHONE_REQUIRED,
              ...t
            })
          }, {
            modalKey: u.PHONE_VERIFICATION_MODAL_KEY
          })
        },
        children: d.default.Messages.VERIFY
      })
    })
  })
}