n.r(t), n.d(t, {
    default: function () {
        return d;
    }
});
var s = n(735250);
n(470079);
var a = n(332664), o = n(814249), l = n(531578), i = n(689938), r = n(549480);
let c = [
    {
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
        startRating: n,
        onClose: l,
        onSubmit: d
    } = e;
    return (0, s.jsx)(a.Z, {
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
        startRating: n,
        hideDontShowCheckbox: !0
    });
}
