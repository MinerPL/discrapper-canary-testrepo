"use strict";
a.r(s), a("47120");
var t = a("735250"),
  l = a("470079"),
  i = a("803997"),
  r = a.n(i),
  d = a("481060"),
  n = a("219369"),
  o = a("981631"),
  c = a("689938"),
  E = a("190500");
s.default = e => {
  let {
    headerId: s,
    guild: a,
    onAgreedChange: i
  } = e, [u, S] = l.useState(!1), [R, m] = l.useState(!1), [_, x] = l.useState(!1);
  l.useEffect(() => {
    u && R && _ ? i(!0) : i(!1)
  }, [u, R, _, i]);
  let C = c.default.Messages.SERVER_DISCOVERY_RULES_COMPLY_GUIDELINES.format({
    onCommunityGuidelinesClick: () => (0, n.navigateToAndTrackHelpCenterClick)({
      articleId: o.HelpdeskArticles.PUBLIC_GUILD_GUILDLINES,
      guildId: a.id,
      modalStep: n.DiscoverySetupModalSteps.AGREE_TO_RULES
    }),
    onDiscoveryGuidelinesClick: () => (0, n.navigateToAndTrackHelpCenterClick)({
      articleId: o.HelpdeskArticles.SERVER_DISCOVERY_GUIDELINES,
      guildId: a.id,
      modalStep: n.DiscoverySetupModalSteps.AGREE_TO_RULES
    })
  });
  return (0, t.jsxs)("div", {
    className: E.container,
    children: [(0, t.jsxs)("div", {
      className: E.content,
      children: [(0, t.jsx)("div", {
        className: r()(E.stepImage, E.checkImage)
      }), (0, t.jsx)(d.Heading, {
        variant: "heading-xl/semibold",
        className: E.header,
        id: s,
        children: c.default.Messages.SERVER_DISCOVERY_AGREE_TO_RULES
      }), (0, t.jsx)(d.Text, {
        color: "none",
        variant: "text-md/normal",
        className: E.headerCaption,
        children: c.default.Messages.SERVER_DISCOVERY_RULES_PAGE_SUBHEADING
      })]
    }), (0, t.jsxs)("div", {
      className: E.form,
      children: [(0, t.jsx)(d.FormTitle, {
        required: !0,
        children: c.default.Messages.SERVER_DISCOVERY_RULES_FORM_LABEL
      }), (0, t.jsx)("div", {
        className: E.checkboxWrapper,
        children: (0, t.jsxs)(d.Checkbox, {
          type: d.Checkbox.Types.ROW,
          value: u,
          align: d.Checkbox.Aligns.TOP,
          onChange: () => S(!u),
          children: [(0, t.jsx)(d.Text, {
            variant: "text-md/semibold",
            className: E.checkboxTitle,
            children: c.default.Messages.SERVER_DISCOVERY_RULES_HEALTHY_ENV_HEADING
          }), (0, t.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: c.default.Messages.SERVER_DISCOVERY_RULES_HEALTHY_ENV_DESCRIPTION
          })]
        })
      }), (0, t.jsx)("div", {
        className: E.checkboxWrapper,
        children: (0, t.jsxs)(d.Checkbox, {
          type: d.Checkbox.Types.ROW,
          align: d.Checkbox.Aligns.TOP,
          value: R,
          onChange: () => m(!R),
          children: [(0, t.jsx)(d.Text, {
            variant: "text-md/semibold",
            className: E.checkboxTitle,
            children: c.default.Messages.SERVER_DISCOVERY_RULES_SEXUAL_CONTENT_HEADING
          }), (0, t.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: c.default.Messages.SERVER_DISCOVERY_RULES_SEXUAL_CONTENT_DESCRIPTION
          })]
        })
      }), (0, t.jsx)("div", {
        className: E.checkboxWrapper,
        children: (0, t.jsxs)(d.Checkbox, {
          type: d.Checkbox.Types.ROW,
          align: d.Checkbox.Aligns.TOP,
          value: _,
          onChange: () => x(!_),
          children: [(0, t.jsx)(d.Text, {
            variant: "text-md/semibold",
            className: E.checkboxTitle,
            children: C
          }), (0, t.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: c.default.Messages.SERVER_DISCOVERY_RULES_COMPLY_GUIDELINES_DESCRIPTION
          })]
        })
      })]
    })]
  })
}