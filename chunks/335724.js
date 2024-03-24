"use strict";
i.r(t), i.d(t, {
  default: function() {
    return f
  }
});
var n = i("37983");
i("884691");
var a = i("414456"),
  l = i.n(a),
  s = i("77078"),
  r = i("213523"),
  o = i("567054"),
  d = i("546470"),
  u = i("782340"),
  c = i("935090"),
  f = function(e) {
    let {
      addFormField: t,
      guild: i
    } = e;
    return (0, n.jsxs)("div", {
      className: l(c.spacingContainer, c.leftRailIconContainer, c.backgroundContainer),
      children: [(0, n.jsx)("div", {
        className: c.iconContainer,
        children: (0, n.jsx)(r.default, {
          width: 18,
          height: 20,
          className: c.icon
        })
      }), (0, n.jsxs)(s.FormSection, {
        children: [(0, n.jsx)(s.FormTitle, {
          tag: "h3",
          className: c.leftRailIconContainerTitle,
          children: u.default.Messages.MEMBER_VERIFICATION_GET_STARTED_TITLE
        }), (0, n.jsx)(s.FormText, {
          className: c.leftRailIconContainerDescription,
          type: s.FormText.Types.DESCRIPTION,
          children: u.default.Messages.MEMBER_VERIFICATION_GET_STARTED_DESCRIPTION
        }), (0, n.jsx)(s.Button, {
          onClick: () => (0, d.openEmptyFormFieldModal)(o.VerificationFormFieldTypes.TERMS, t, i),
          children: u.default.Messages.MEMBER_VERIFICATION_GET_STARTED_BUTTON
        })]
      })]
    })
  }