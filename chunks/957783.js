"use strict";
a(47120);
var t = a(735250),
  i = a(470079),
  r = a(120356),
  l = a.n(r),
  n = a(481060),
  o = a(219369),
  d = a(981631),
  c = a(689938),
  E = a(353964);
s.Z = e => {
  let {
    headerId: s,
    guild: a,
    onAgreedChange: r
  } = e, [R, S] = i.useState(!1), [m, x] = i.useState(!1), [_, u] = i.useState(!1);
  i.useEffect(() => {
    R && m && _ ? r(!0) : r(!1)
  }, [R, m, _, r]);
  let h = c.Z.Messages.SERVER_DISCOVERY_RULES_COMPLY_GUIDELINES.format({
    onCommunityGuidelinesClick: () => (0, o.lW)({
      articleId: d.BhN.PUBLIC_GUILD_GUILDLINES,
      guildId: a.id,
      modalStep: o.tK.AGREE_TO_RULES
    }),
    onDiscoveryGuidelinesClick: () => (0, o.lW)({
      articleId: d.BhN.SERVER_DISCOVERY_GUIDELINES,
      guildId: a.id,
      modalStep: o.tK.AGREE_TO_RULES
    })
  });
  return (0, t.jsxs)("div", {
    className: E.container,
    children: [(0, t.jsxs)("div", {
      className: E.content,
      children: [(0, t.jsx)("div", {
        className: l()(E.stepImage, E.checkImage)
      }), (0, t.jsx)(n.Heading, {
        variant: "heading-xl/semibold",
        className: E.header,
        id: s,
        children: c.Z.Messages.SERVER_DISCOVERY_AGREE_TO_RULES
      }), (0, t.jsx)(n.Text, {
        color: "none",
        variant: "text-md/normal",
        className: E.headerCaption,
        children: c.Z.Messages.SERVER_DISCOVERY_RULES_PAGE_SUBHEADING
      })]
    }), (0, t.jsxs)("div", {
      className: E.form,
      children: [(0, t.jsx)(n.FormTitle, {
        required: !0,
        children: c.Z.Messages.SERVER_DISCOVERY_RULES_FORM_LABEL
      }), (0, t.jsx)("div", {
        className: E.checkboxWrapper,
        children: (0, t.jsxs)(n.Checkbox, {
          type: n.Checkbox.Types.ROW,
          value: R,
          align: n.Checkbox.Aligns.TOP,
          onChange: () => S(!R),
          children: [(0, t.jsx)(n.Text, {
            variant: "text-md/semibold",
            className: E.checkboxTitle,
            children: c.Z.Messages.SERVER_DISCOVERY_RULES_HEALTHY_ENV_HEADING
          }), (0, t.jsx)(n.Text, {
            variant: "text-sm/normal",
            children: c.Z.Messages.SERVER_DISCOVERY_RULES_HEALTHY_ENV_DESCRIPTION
          })]
        })
      }), (0, t.jsx)("div", {
        className: E.checkboxWrapper,
        children: (0, t.jsxs)(n.Checkbox, {
          type: n.Checkbox.Types.ROW,
          align: n.Checkbox.Aligns.TOP,
          value: m,
          onChange: () => x(!m),
          children: [(0, t.jsx)(n.Text, {
            variant: "text-md/semibold",
            className: E.checkboxTitle,
            children: c.Z.Messages.SERVER_DISCOVERY_RULES_SEXUAL_CONTENT_HEADING
          }), (0, t.jsx)(n.Text, {
            variant: "text-sm/normal",
            children: c.Z.Messages.SERVER_DISCOVERY_RULES_SEXUAL_CONTENT_DESCRIPTION
          })]
        })
      }), (0, t.jsx)("div", {
        className: E.checkboxWrapper,
        children: (0, t.jsxs)(n.Checkbox, {
          type: n.Checkbox.Types.ROW,
          align: n.Checkbox.Aligns.TOP,
          value: _,
          onChange: () => u(!_),
          children: [(0, t.jsx)(n.Text, {
            variant: "text-md/semibold",
            className: E.checkboxTitle,
            children: h
          }), (0, t.jsx)(n.Text, {
            variant: "text-sm/normal",
            children: c.Z.Messages.SERVER_DISCOVERY_RULES_COMPLY_GUIDELINES_DESCRIPTION
          })]
        })
      })]
    })]
  })
}