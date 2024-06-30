n.d(t, {
    D: function () {
        return N;
    },
    Z: function () {
        return f;
    }
}), n(47120);
var i = n(735250), a = n(470079), s = n(920906), l = n(442837), r = n(686777), o = n(113434), c = n(569984), d = n(497505), u = n(602667), _ = n(87894), E = n(372113), m = n(206044), I = n(266843), T = n(46140), h = n(441468);
function N(e) {
    let {
            questId: t,
            ...n
        } = e, a = (0, l.e7)([c.Z], () => c.Z.getQuest(t));
    if (null == a)
        return null;
    {
        let e = {
            quest: a,
            ...n
        };
        return (0, i.jsx)(f, { ...e });
    }
}
function f(e) {
    let {
            quest: t,
            location: n,
            initiallyExpanded: l,
            contentPosition: c
        } = e, [N, f] = a.useState(!1), p = a.useCallback(() => f(!0), []), C = a.useCallback(() => f(!1), []), g = (0, o.tP)(t), {
            containerRef: S,
            size: A,
            height: x
        } = (0, I.h)([t]), O = (0, r.q)({ location: T.dr.QUESTS_CARD }), {
            expansionSpring: R,
            isAnimating: M,
            isExpanded: v,
            toggleExpanded: L
        } = (0, I.O)({
            initiallyExpanded: !O || l || (0, _.iM)({
                location: n,
                quest: t
            })
        }), Z = null != x ? x : _.U0;
    return (0, i.jsx)(u.A, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: c,
        trackGuildAndChannelMetadata: n === d.jn.QUESTS_EMBED,
        children: e => (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)(s.animated.div, {
                style: {
                    maxHeight: n === d.jn.QUESTS_EMBED ? void 0 : R.to({
                        range: [
                            0,
                            1
                        ],
                        output: [
                            _.DJ,
                            Z
                        ]
                    })
                },
                ref: t => {
                    e.current = t, S.current = t;
                },
                className: h.questsCard,
                onFocus: p,
                onMouseEnter: p,
                onBlur: C,
                onMouseLeave: C,
                children: [
                    (0, i.jsx)(m.Z, {
                        isFocused: N,
                        isQuestExpired: g,
                        location: n,
                        quest: t,
                        size: A,
                        expansionSpring: R,
                        isAnimating: M,
                        isExpanded: v,
                        isInConcurrentQuestExperiment: O,
                        contentPosition: c,
                        toggleExpanded: L
                    }),
                    (0, i.jsx)(E.Z, {
                        quest: t,
                        isQuestExpired: g,
                        location: n,
                        size: A,
                        isFocused: N,
                        isExpanded: v,
                        isAnimating: M,
                        contentPosition: c
                    })
                ]
            })
        })
    });
}
