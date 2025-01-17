n.d(t, {
    K: function () {
        return R;
    }
}),
    n(47120),
    n(627341);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(297821),
    o = n(338545),
    c = n(278074),
    u = n(748780),
    d = n(481060),
    _ = n(313201),
    E = n(542578),
    I = n(203143),
    m = n(79390),
    T = n(839963),
    h = n(139256),
    N = n(294608),
    f = n(689938),
    C = n(703308);
function p(e) {
    let { percentage: t, label: n, canShowVoterDetails: s, answerId: r } = e,
        o = (0, _.Dt)(),
        { channelId: c, messageId: u } = (0, N.pE)(),
        [T, h] = a.useState(''),
        [f, p] = a.useState(!1),
        g = '' !== T && f,
        S = a.useCallback(() => {
            h((0, m.e1)(u, c, r));
        }, [u, c, r]),
        A = a.useCallback(() => {
            S(), p(!0);
        }, [S]),
        R = a.useCallback(() => {
            p(!1);
        }, []),
        x = a.useCallback(() => {
            (0, I.n)({
                channelId: c,
                messageId: u,
                answerId: r
            });
        }, [c, u, r]);
    a.useEffect(() => {
        if (!!f)
            return (
                E.Z.addReactChangeListener(S),
                () => {
                    E.Z.removeReactChangeListener(S);
                }
            );
    }, [f, S]);
    let O = (0, i.jsx)(d.Text, {
        variant: 'text-xs/semibold',
        color: 'none',
        className: C.voteCount,
        scaleFontToUserSetting: !0,
        children: n
    });
    return (0, i.jsxs)('div', {
        className: C.votesData,
        children: [
            s
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(d.Tooltip, {
                              text: (0, i.jsx)(d.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-muted',
                                  scaleFontToUserSetting: !0,
                                  children: T
                              }),
                              forceOpen: g,
                              'aria-label': !1,
                              children: (e) =>
                                  (0, i.jsx)(d.Button, {
                                      ...e,
                                      onMouseEnter: A,
                                      onMouseLeave: R,
                                      onFocus: A,
                                      onBlur: R,
                                      onClick: x,
                                      className: C.voteCountButton,
                                      'aria-describedby': g ? o : void 0,
                                      look: d.Button.Looks.BLANK,
                                      size: d.Button.Sizes.NONE,
                                      children: O
                                  })
                          }),
                          g &&
                              (0, i.jsx)(l.T, {
                                  id: o,
                                  children: T
                              })
                      ]
                  })
                : (0, i.jsx)(i.Fragment, { children: O }),
            (0, i.jsxs)(d.Text, {
                variant: 'text-md/bold',
                color: 'none',
                scaleFontToUserSetting: !0,
                children: [t, '%']
            })
        ]
    });
}
function g(e) {
    let { percentage: t, shouldAnimate: n } = e,
        a = (0, d.useSpring)(
            {
                from: { width: n ? '0%' : ''.concat(t, '%') },
                to: { width: ''.concat(t, '%') },
                config: {
                    duration: 1200,
                    easing: u.Z.Easing.inOut(u.Z.Easing.ease)
                }
            },
            'animate-always'
        );
    return (0, i.jsx)(o.animated.span, {
        className: C.votePercentageBar,
        style: a,
        'aria-hidden': !0
    });
}
function S(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: a, isVictor: s, isExpired: r, className: l } = e;
    return (0, c.EQ)({
        answersInteraction: t,
        didSelfVote: a
    })
        .with({ answersInteraction: T.Y7.RADIO_BUTTONS }, () =>
            (0, i.jsx)(h.Og, {
                isSelected: n,
                size: 24,
                className: l
            })
        )
        .with({ answersInteraction: T.Y7.CHECKBOXES }, () =>
            (0, i.jsx)(h.zs, {
                isSelected: n,
                size: 20,
                className: l
            })
        )
        .with(
            {
                answersInteraction: T.Y7.LIST,
                didSelfVote: !0
            },
            () =>
                (0, i.jsx)(h.ZY, {
                    isVictor: s,
                    isExpired: r,
                    size: 24,
                    className: l
                })
        )
        .otherwise(() => null);
}
function A(e) {
    let { answer: t, isExpired: n, answersInteraction: a, canShowVoteCounts: s, canShowVoterDetails: o } = e,
        c = !0 === t.isSelected,
        u = !0 === t.didSelfVote,
        _ = !0 === t.isVictor,
        E = t.shouldAnimateTransition;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: r()(C.answerInner, {
                [C.currentlyVoting]: a !== T.Y7.LIST,
                [C.selected]: c
            }),
            children: [
                s
                    ? (0, i.jsx)(g, {
                          percentage: t.votesPercentage,
                          shouldAnimate: E
                      })
                    : null,
                null != t.pollMedia.emoji &&
                    (0, i.jsx)(h.sc, {
                        className: C.emoji,
                        emoji: t.pollMedia.emoji
                    }),
                (0, i.jsx)(d.Text, {
                    className: C.label,
                    variant: 'text-sm/semibold',
                    color: 'none',
                    scaleFontToUserSetting: !0,
                    children: t.pollMedia.text
                }),
                t.didSelfVote && (0, i.jsx)(l.T, { children: f.Z.Messages.POLL_ANSWER_VOTED_ARIA }),
                s &&
                    (0, i.jsx)(p, {
                        percentage: t.votesPercentage,
                        label: t.votes,
                        canShowVoterDetails: o,
                        answerId: t.answerId
                    }),
                (0, i.jsx)(S, {
                    answersInteraction: a,
                    isSelected: c,
                    didSelfVote: u,
                    isVictor: _,
                    isExpired: n,
                    className: C.answerSelectionIcon
                })
            ]
        })
    });
}
function R(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: a, canTapAnswers: s, ...r } = e;
    return (0, i.jsx)(h.$e, {
        className: C.answersContainer,
        answerClassName: C.answer,
        answersInteraction: n,
        canTapAnswers: s,
        renderAnswerContent: (e) =>
            (0, i.jsx)(A, {
                answer: e,
                isExpired: t,
                answersInteraction: n,
                canShowVoteCounts: a,
                canShowVoterDetails: s
            }),
        ...r
    });
}
