"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var s = a("735250");
a("470079");
var n = a("332664"),
  l = a("814249"),
  r = a("531578"),
  i = a("689938"),
  c = a("528268");
let o = [{
  className: c.emojiThumbsUp,
  rating: r.FeedbackRating.GOOD,
  classNameSelected: c.selected
}, {
  className: c.emojiThumbsDown,
  rating: r.FeedbackRating.BAD,
  classNameSelected: c.selected
}];

function u(e) {
  let {
    transitionState: t,
    startRating: a,
    onClose: r,
    onSubmit: u
  } = e;
  return (0, s.jsx)(n.default, {
    header: i.default.Messages.SUMMARIES_FEEDBACK_HEADER,
    body: i.default.Messages.SUMMARIES_FEEDBACK_BODY,
    problemTitle: i.default.Messages.SUMMARIES_FEEDBACK_PROBLEM_TITLE,
    onSubmit: u,
    onClose: r,
    ratingConfigs: o,
    transitionState: t,
    problems: (0, l.getSummaryFeedbackReasons)(),
    ratingsSelectorClassName: c.ratingsSelector,
    feedbackProblems: [l.SummaryFeedbackReasons.OTHER],
    otherKey: l.SummaryFeedbackReasons.OTHER,
    startRating: a,
    hideDontShowCheckbox: !0
  })
}