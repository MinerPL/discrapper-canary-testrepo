n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), l = n(297821), r = n(481060), o = n(839963), c = n(139256), d = n(689938), u = n(849160);
function _(e) {
    let {
        didSelfVote: t,
        label: n,
        percentage: a
    } = e;
    return (0, i.jsxs)('div', {
        className: u.votesData,
        children: [
            t && (0, i.jsx)(l.T, { children: d.Z.Messages.POLL_ANSWER_VOTED_ARIA }),
            (0, i.jsxs)(r.Text, {
                variant: 'text-md/semibold',
                color: 'none',
                children: [
                    a,
                    '%'
                ]
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-xs/semibold',
                color: 'none',
                children: n
            })
        ]
    });
}
function E(e) {
    let {
            answer: t,
            isExpired: n,
            myAvatarUrl: a,
            canShowVoteCounts: l
        } = e, r = !0 === t.isSelected, o = !0 === t.didSelfVote, d = !0 === t.isVictor;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.$w, {
                attachmentClassName: s()(u.attachment, { [u.attachmentWithResults]: l }),
                emojiClassName: u.emoji,
                media: t.pollMedia,
                fallback: (0, i.jsx)('div', { className: s()(u.attachment, u.mediaMissing) })
            }),
            r && (0, i.jsx)(c.ZY, {
                size: 40,
                isVictor: d,
                isExpired: n,
                className: u.selectedIcon
            }),
            l && (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(_, {
                        didSelfVote: o,
                        percentage: t.votesPercentage,
                        label: t.votes,
                        myAvatarUrl: o ? a : void 0
                    }),
                    (!n && o || d) && (0, i.jsx)(c.ZY, {
                        size: 18,
                        isVictor: d,
                        isExpired: n,
                        className: u.pollAnswerIcon
                    })
                ]
            })
        ]
    });
}
function m(e) {
    let {
        isExpired: t,
        myAvatarUrl: n,
        answersInteraction: a,
        canShowVoteCounts: l,
        ...r
    } = e;
    return (0, i.jsx)(c.$e, {
        className: u.answersContainer,
        answerClassName: s()(u.answer, { [u.currentlyVoting]: a !== o.Y7.LIST }),
        myAvatarUrl: n,
        answersInteraction: a,
        renderAnswerContent: e => (0, i.jsx)(E, {
            answer: e,
            isExpired: t,
            myAvatarUrl: n,
            answersInteraction: a,
            canShowVoteCounts: l
        }),
        ...r
    });
}
