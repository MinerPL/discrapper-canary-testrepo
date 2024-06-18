"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(729285),
  u = n(150954),
  _ = n(63063),
  d = n(981631),
  c = n(689938),
  E = n(333110);
let I = [{
  getQuestion: () => c.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_1,
  getAnswer: () => c.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_1
}, {
  getQuestion: () => c.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_2,
  getAnswer: () => c.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_2.format({
    helpCenterUrl: _.Z.getArticleURL(d.BhN.GUILD_BOOSTING_FAQ)
  })
}, {
  getQuestion: () => c.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_3,
  getAnswer: () => c.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_3
}, {
  getQuestion: () => c.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_4,
  getAnswer: () => c.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_4
}];
t.Z = function(e) {
  let {
    className: t
  } = e, [n, s] = r.useState(null);
  return (0, i.jsxs)("div", {
    className: o()(E.wrapper, t),
    children: [(0, i.jsx)(a.Heading, {
      className: E.heading,
      variant: "heading-xxl/bold",
      children: c.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_HEADING
    }), (0, i.jsx)("ul", {
      className: E.list,
      children: I.map((e, t) => {
        let r = n === t;
        return (0, i.jsxs)("div", {
          className: E.listItem,
          children: [(0, i.jsxs)(a.Clickable, {
            className: o()(E.questionWrapper, {
              [E.questionWrapperExpanded]: r
            }),
            onClick: () => s(e => e === t ? null : t),
            tag: "li",
            children: [(0, i.jsx)(a.Text, {
              className: E.question,
              variant: "text-lg/normal",
              children: e.getQuestion()
            }), r ? (0, i.jsx)(u.Z, {
              className: E.questionIcon
            }) : (0, i.jsx)(l.Z, {
              className: E.questionIcon
            })]
          }), r && (0, i.jsx)(a.Text, {
            className: E.answer,
            color: "text-normal",
            variant: "text-md/normal",
            children: e.getAnswer()
          })]
        }, t)
      })
    })]
  })
}