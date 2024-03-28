"use strict";
a.r(s);
var t = a("735250");
a("470079");
var l = a("803997"),
  i = a.n(l),
  r = a("442837"),
  d = a("481060"),
  n = a("434404"),
  o = a("999382"),
  c = a("219369"),
  E = a("981631"),
  u = a("689938"),
  S = a("190500");
s.default = e => {
  var s;
  let {
    guild: a,
    headerId: l
  } = e, R = (0, r.useStateFromStores)([o.default], () => "description" in o.default.getErrors()), m = R ? u.default.Messages.SERVER_DISCOVERY_BLOCKED_WORD_LEARN_MORE.format({
    onLearnMoreClick: () => {
      (0, c.navigateToAndTrackHelpCenterClick)({
        articleId: E.HelpdeskArticles.SERVER_DISCOVERY_GUIDELINES,
        guildId: a.id,
        modalStep: c.DiscoverySetupModalSteps.DESCRIPTION
      })
    }
  }) : null;
  return (0, t.jsxs)("div", {
    className: S.container,
    children: [(0, t.jsxs)("div", {
      className: S.content,
      children: [(0, t.jsx)("div", {
        className: i()(S.stepImage, S.pencilImage)
      }), (0, t.jsx)(d.Heading, {
        variant: "heading-xl/semibold",
        className: S.header,
        id: l,
        children: u.default.Messages.SERVER_DISCOVERY_DESCRIPTION_PAGE_HEADER
      }), (0, t.jsx)(d.Text, {
        color: "none",
        variant: "text-md/normal",
        className: S.headerCaption,
        children: u.default.Messages.SERVER_DISCOVERY_DESCRIPTION_PAGE_SUBHEADING
      })]
    }), (0, t.jsxs)(d.FormSection, {
      className: S.form,
      children: [(0, t.jsx)(d.FormTitle, {
        required: !0,
        children: u.default.Messages.FORM_LABEL_SERVER_DESCRIPTION
      }), (0, t.jsx)(d.FormText, {
        type: d.FormTextTypes.DESCRIPTION,
        className: S.description,
        children: u.default.Messages.SERVER_DISCOVERY_SERVER_DESCRIPTION_INPUT_SUBLABEL
      }), (0, t.jsx)(d.TextArea, {
        autoFocus: !0,
        value: null !== (s = a.description) && void 0 !== s ? s : "",
        placeholder: u.default.Messages.SERVER_DESCIPTION_EMPTY,
        onChange: e => {
          n.default.updateGuild({
            description: e
          })
        },
        maxLength: 120,
        className: S.textArea,
        error: m
      })]
    })]
  })
}