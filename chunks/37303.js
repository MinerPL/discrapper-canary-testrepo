n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(180081);
n(442837);
var r = n(686777),
    l = n(113434);
n(569984);
var o = n(497505),
    c = n(602667),
    u = n(87894),
    d = n(372113),
    _ = n(206044),
    E = n(266843),
    I = n(46140),
    m = n(861495);
function T(e) {
    let { quest: t, location: n, initiallyExpanded: T, contentPosition: h } = e,
        [N, C] = s.useState(!1),
        f = s.useCallback(() => C(!0), []),
        p = s.useCallback(() => C(!1), []),
        g = (0, l.tP)(t),
        { containerRef: S, size: A, height: R } = (0, E.h)(),
        O = (0, r.q)({ location: I.dr.QUESTS_CARD }),
        {
            expansionSpring: x,
            isAnimating: M,
            isExpanded: v,
            toggleExpanded: L
        } = (0, E.O)({
            initiallyExpanded:
                !O ||
                T ||
                (0, u.iM)({
                    location: n,
                    quest: t
                })
        }),
        Z = null != R ? R : u.U0;
    return (0, i.jsx)(c.A, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: h,
        trackGuildAndChannelMetadata: n === o.jn.QUESTS_EMBED,
        children: (e) =>
            (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(a.animated.div, {
                    style: {
                        maxHeight:
                            n === o.jn.QUESTS_EMBED
                                ? void 0
                                : x.to({
                                      range: [0, 1],
                                      output: [u.DJ, Z]
                                  })
                    },
                    className: m.questsCard,
                    onFocus: f,
                    onMouseEnter: f,
                    onBlur: p,
                    onMouseLeave: p,
                    children: (0, i.jsxs)('div', {
                        ref: (t) => {
                            (e.current = t), (S.current = t);
                        },
                        children: [
                            (0, i.jsx)(_.Z, {
                                isFocused: N,
                                isQuestExpired: g,
                                location: n,
                                quest: t,
                                size: A,
                                expansionSpring: x,
                                isAnimating: M,
                                isExpanded: v,
                                isInConcurrentQuestExperiment: O,
                                contentPosition: h,
                                toggleExpanded: L
                            }),
                            (0, i.jsx)(d.Z, {
                                quest: t,
                                isQuestExpired: g,
                                location: n,
                                size: A,
                                isFocused: N,
                                isExpanded: v,
                                isAnimating: M,
                                contentPosition: h
                            })
                        ]
                    })
                })
            })
    });
}
