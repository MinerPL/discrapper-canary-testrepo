n.d(t, {
    E: function () {
        return r;
    },
    _: function () {
        return l;
    }
}), n(627341);
var i = n(278074), a = n(263568), s = n(148163);
function l(e, t) {
    let n = (0, i.EQ)(t).with(a.C.IMAGE_ONLY_ANSWERS, () => s.normalStylesImageOnlyAnswers).otherwise(() => s.normalStylesDefault);
    return {
        styles: {
            loserSelected: n,
            normal: n,
            notVoted: n,
            selected: n,
            voted: s.votedStyles,
            victorSelected: s.victorStyles,
            victorNotSelected: s.victorStyles,
            normalVote: n
        }
    };
}
function r(e, t) {
    return e.getAvatarURL(t, 20, !1);
}
