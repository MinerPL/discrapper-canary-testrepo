n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(338545),
    o = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    _ = n(113434),
    E = n(566078),
    h = n(472144),
    m = n(644646),
    I = n(69439),
    g = n(46140),
    p = n(642145),
    T = n(689938),
    S = n(803162);
let f = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));
function C(e) {
    var t, n, s;
    let { quest: C, questContent: N, isHovering: A, contentPosition: v, rowIndex: Z, onReceiveErrorHints: L } = e,
        O = E.r.build(C.config).defaultReward.messages.name,
        R = (null === (t = C.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        { ref: x, scrollHeight: b } = (0, d.Z)(),
        P = 104 !== b,
        { expansionSpring: M } = (0, c.useSpring)({
            expansionSpring: A ? 1 : 0,
            config: {
                ...p.Y,
                clamp: !0
            }
        }),
        D = (null === (n = C.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        y = (null === (s = C.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null,
        { completedRatio: j, completedRatioDisplay: U } = (0, _.I)(C),
        G = (0, _.Bd)(C),
        k = a.useCallback(
            () =>
                (0, i.jsx)(c.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-normal',
                    tag: 'span',
                    className: S.header,
                    children: O
                }),
            [O]
        ),
        w = a.useMemo(() => (y ? k() : T.Z.Messages.QUESTS_CLAIM_THE_REWARD_HOOK.format({ rewardHook: k })), [y, k]),
        B = a.useMemo(() => {
            if (null != G)
                return (0, i.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: r()(S.description),
                    children: G
                });
        }, [G]),
        H = (0, o.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, i.jsxs)('div', {
        className: r()(S.container),
        children: [
            (0, i.jsxs)(l.animated.div, {
                style: {
                    maxHeight: M.to([0, 1], [104, (null != b ? b : 0) + 12])
                },
                className: r()(S.rewardDescriptionContainer),
                children: [
                    (0, i.jsxs)('div', {
                        className: S.assetWrapper,
                        children: [
                            !y && D && (0, i.jsx)('div', { className: S.completionAnimation }),
                            R && !y
                                ? (0, i.jsxs)('div', {
                                      className: S.progressWrapper,
                                      children: [
                                          D &&
                                              (0, i.jsx)(c.LottieAnimation, {
                                                  importData: f,
                                                  className: S.confetti,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !H
                                              }),
                                          (0, i.jsx)(h.Z, {
                                              quest: C,
                                              size: 76,
                                              percentComplete: j,
                                              percentCompleteText: A ? U : void 0,
                                              children: (0, i.jsx)('div', {
                                                  className: S.circularRewardTileWrapper,
                                                  children: (0, i.jsx)(m.Z, {
                                                      quest: C,
                                                      questContent: N,
                                                      className: S.circularQuestRewardTileAsset,
                                                      location: g.dr.QUEST_HOME_DESKTOP
                                                  })
                                              })
                                          })
                                      ]
                                  })
                                : (0, i.jsx)(m.Z, {
                                      quest: C,
                                      autoplay: A,
                                      questContent: N,
                                      className: S.questRewardTileAsset,
                                      location: g.dr.QUEST_HOME_DESKTOP
                                  })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        ref: x,
                        className: r()(S.textContainer, { [S.justifyCenter]: !P }),
                        children: [
                            (0, i.jsx)(c.Heading, {
                                variant: 'eyebrow',
                                color: 'text-brand',
                                className: S.questName,
                                children: T.Z.Messages.QUEST.format({ questName: C.config.messages.questName })
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: S.header,
                                children: w
                            }),
                            B
                        ]
                    }),
                    P &&
                        (0, i.jsx)(l.animated.div, {
                            style: {
                                opacity: M.to([0, 1], [1, 0])
                            },
                            className: S.textOverflowBlur
                        })
                ]
            }),
            (0, i.jsx)(I.Z, {
                quest: C,
                location: N,
                contentPosition: v,
                rowIndex: Z,
                onReceiveErrorHints: L
            })
        ]
    });
}
