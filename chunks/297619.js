"use strict";
i.r(t);
var a = i("735250");
i("470079");
var l = i("803997"),
  n = i.n(l),
  s = i("481060"),
  r = i("814550"),
  o = i("246364"),
  d = i("700833"),
  c = i("689938"),
  u = i("482249");
t.default = function(e) {
  let {
    addFormField: t,
    guild: i
  } = e;
  return (0, a.jsxs)("div", {
    className: n()(u.spacingContainer, u.leftRailIconContainer, u.backgroundContainer),
    children: [(0, a.jsx)("div", {
      className: u.iconContainer,
      children: (0, a.jsx)(r.default, {
        width: 18,
        height: 20,
        className: u.icon
      })
    }), (0, a.jsxs)(s.FormSection, {
      children: [(0, a.jsx)(s.FormTitle, {
        tag: "h3",
        className: u.leftRailIconContainerTitle,
        children: c.default.Messages.MEMBER_VERIFICATION_GET_STARTED_TITLE
      }), (0, a.jsx)(s.FormText, {
        className: u.leftRailIconContainerDescription,
        type: s.FormText.Types.DESCRIPTION,
        children: c.default.Messages.MEMBER_VERIFICATION_GET_STARTED_DESCRIPTION
      }), (0, a.jsx)(s.Button, {
        onClick: () => (0, d.openEmptyFormFieldModal)(o.VerificationFormFieldTypes.TERMS, t, i),
        children: c.default.Messages.MEMBER_VERIFICATION_GET_STARTED_BUTTON
      })]
    })]
  })
}