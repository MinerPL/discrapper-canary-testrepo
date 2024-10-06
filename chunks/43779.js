n.d(t, {
    Z: function () {
        return T;
    }
});
var s = n(735250),
    o = n(470079),
    r = n(120356),
    a = n.n(r),
    l = n(212433),
    i = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    p = n(113434),
    m = n(566078),
    x = n(472144),
    _ = n(644646),
    C = n(69439),
    g = n(46140),
    f = n(642145),
    E = n(689938),
    h = n(684688);
let S = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));
function T(e) {
    var t, n, r;
    let { quest: T, questContent: v, isHovering: N, contentPosition: j, rowIndex: A, onReceiveErrorHints: R } = e,
        b = m.r.build(T.config),
        B = b.defaultReward.messages.name,
        I = b.defaultReward.messages.nameWithArticle,
        M = (null === (t = T.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        { ref: O, scrollHeight: y } = (0, d.Z)(),
        L = 104 !== y,
        { expansionSpring: w } = (0, c.useSpring)({
            expansionSpring: N ? 1 : 0,
            config: {
                ...f.Y,
                clamp: !0
            }
        }),
        k = (null === (n = T.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        U = (null === (r = T.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null,
        { completedRatio: Z, completedRatioDisplay: q } = (0, p.I)(T),
        P = (0, p.Bd)(T),
        Q = o.useCallback(
            (e) =>
                (0, s.jsx)(c.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-normal',
                    tag: 'span',
                    className: h.header,
                    children: e
                }),
            []
        ),
        D = o.useMemo(() => (U ? Q(B) : E.Z.Messages.QUESTS_CLAIM_REWARD_HOOK.format({ rewardWithArticleHook: () => Q(I) })), [B, I, U, Q]),
        W = o.useMemo(() => {
            if (null != P)
                return (0, s.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: a()(h.description),
                    children: P
                });
        }, [P]),
        H = (0, i.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, s.jsxs)('div', {
        className: a()(h.container),
        children: [
            (0, s.jsxs)(l.animated.div, {
                style: {
                    maxHeight: w.to([0, 1], [104, (null != y ? y : 0) + 12])
                },
                className: a()(h.rewardDescriptionContainer),
                children: [
                    (0, s.jsxs)('div', {
                        className: h.assetWrapper,
                        children: [
                            !U && k && (0, s.jsx)('div', { className: h.completionAnimation }),
                            M && !U
                                ? (0, s.jsxs)('div', {
                                      className: h.progressWrapper,
                                      children: [
                                          k &&
                                              (0, s.jsx)(c.LottieAnimation, {
                                                  importData: S,
                                                  className: h.confetti,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !H
                                              }),
                                          (0, s.jsx)(x.Z, {
                                              quest: T,
                                              size: 76,
                                              percentComplete: Z,
                                              percentCompleteText: N ? q : void 0,
                                              children: (0, s.jsx)('div', {
                                                  className: h.circularRewardTileWrapper,
                                                  children: (0, s.jsx)(_.Z, {
                                                      quest: T,
                                                      questContent: v,
                                                      className: h.circularQuestRewardTileAsset,
                                                      location: g.dr.QUEST_HOME_DESKTOP
                                                  })
                                              })
                                          })
                                      ]
                                  })
                                : (0, s.jsx)(_.Z, {
                                      quest: T,
                                      autoplay: N,
                                      questContent: v,
                                      className: h.questRewardTileAsset,
                                      location: g.dr.QUEST_HOME_DESKTOP
                                  })
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        ref: O,
                        className: a()(h.textContainer, { [h.justifyCenter]: !L }),
                        children: [
                            (0, s.jsx)(c.Heading, {
                                variant: 'eyebrow',
                                color: 'text-brand',
                                className: h.questName,
                                children: E.Z.Messages.QUEST.format({ questName: T.config.messages.questName })
                            }),
                            (0, s.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: h.header,
                                children: D
                            }),
                            W
                        ]
                    }),
                    L &&
                        (0, s.jsx)(l.animated.div, {
                            style: {
                                opacity: w.to([0, 1], [1, 0])
                            },
                            className: h.textOverflowBlur
                        })
                ]
            }),
            (0, s.jsx)(C.Z, {
                quest: T,
                location: v,
                contentPosition: j,
                rowIndex: A,
                onReceiveErrorHints: R
            })
        ]
    });
}
