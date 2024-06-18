"use strict";
var t = a(735250);
a(470079);
var i = a(120356),
  r = a.n(i),
  l = a(442837),
  n = a(481060),
  o = a(434404),
  d = a(999382),
  c = a(219369),
  E = a(981631),
  R = a(689938),
  S = a(353964);
s.Z = e => {
  var s;
  let {
    guild: a,
    headerId: i
  } = e, m = (0, l.e7)([d.Z], () => "description" in d.Z.getErrors()), x = m ? R.Z.Messages.SERVER_DISCOVERY_BLOCKED_WORD_LEARN_MORE.format({
    onLearnMoreClick: () => {
      (0, c.lW)({
        articleId: E.BhN.SERVER_DISCOVERY_GUIDELINES,
        guildId: a.id,
        modalStep: c.tK.DESCRIPTION
      })
    }
  }) : null;
  return (0, t.jsxs)("div", {
    className: S.container,
    children: [(0, t.jsxs)("div", {
      className: S.content,
      children: [(0, t.jsx)("div", {
        className: r()(S.stepImage, S.pencilImage)
      }), (0, t.jsx)(n.Heading, {
        variant: "heading-xl/semibold",
        className: S.header,
        id: i,
        children: R.Z.Messages.SERVER_DISCOVERY_DESCRIPTION_PAGE_HEADER
      }), (0, t.jsx)(n.Text, {
        color: "none",
        variant: "text-md/normal",
        className: S.headerCaption,
        children: R.Z.Messages.SERVER_DISCOVERY_DESCRIPTION_PAGE_SUBHEADING
      })]
    }), (0, t.jsxs)(n.FormSection, {
      className: S.form,
      children: [(0, t.jsx)(n.FormTitle, {
        required: !0,
        children: R.Z.Messages.FORM_LABEL_SERVER_DESCRIPTION
      }), (0, t.jsx)(n.FormText, {
        type: n.FormTextTypes.DESCRIPTION,
        className: S.description,
        children: R.Z.Messages.SERVER_DISCOVERY_SERVER_DESCRIPTION_INPUT_SUBLABEL
      }), (0, t.jsx)(n.TextArea, {
        autoFocus: !0,
        value: null !== (s = a.description) && void 0 !== s ? s : "",
        placeholder: R.Z.Messages.SERVER_DESCIPTION_EMPTY,
        onChange: e => {
          o.Z.updateGuild({
            description: e
          })
        },
        maxLength: 120,
        className: S.textArea,
        error: x
      })]
    })]
  })
}