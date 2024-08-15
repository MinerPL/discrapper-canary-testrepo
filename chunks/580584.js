s.r(t), s.d(t, {
  default: function() {
return d;
  }
});
var n = s(735250);
s(470079);
var a = s(332664),
  o = s(814249),
  l = s(531578),
  i = s(689938),
  r = s(995335);
let c = [{
className: r.emojiThumbsUp,
rating: l.aZ.GOOD,
classNameSelected: r.selected
  },
  {
className: r.emojiThumbsDown,
rating: l.aZ.BAD,
classNameSelected: r.selected
  }
];

function d(e) {
  let {
transitionState: t,
startRating: s,
onClose: l,
onSubmit: d
  } = e;
  return (0, n.jsx)(a.Z, {
header: i.Z.Messages.SUMMARIES_FEEDBACK_HEADER,
body: i.Z.Messages.SUMMARIES_FEEDBACK_BODY,
problemTitle: i.Z.Messages.SUMMARIES_FEEDBACK_PROBLEM_TITLE,
onSubmit: d,
onClose: l,
ratingConfigs: c,
transitionState: t,
problems: (0, o.iq)(),
ratingsSelectorClassName: r.ratingsSelector,
feedbackProblems: [o.R7.OTHER],
otherKey: o.R7.OTHER,
startRating: s,
hideDontShowCheckbox: !0
  });
}