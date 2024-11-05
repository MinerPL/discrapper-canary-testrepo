var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(442837),
    o = n(481060),
    a = n(607070),
    u = n(706454),
    d = n(63063),
    c = n(930153),
    m = n(617136),
    x = n(113434),
    C = n(569984),
    h = n(497505),
    g = n(918701),
    p = n(566078),
    E = n(340100),
    j = n(644646),
    T = n(667105),
    f = n(341907),
    v = n(128535),
    S = n(87894),
    N = n(2660),
    q = n(46140),
    _ = n(981631),
    A = n(388032),
    R = n(389444),
    b = n(789002);
let I = (e, t, n) => ((0, S.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium');
function M(e) {
    let { containerSize: t, onClick: n, children: s, tabIndex: l } = e;
    return 'xs' === t
        ? (0, i.jsx)(o.Clickable, {
              tabIndex: l,
              className: R.learnMoreLink,
              tag: 'span',
              onClick: n,
              children: (0, i.jsx)(o.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-link',
                  children: s
              })
          })
        : (0, i.jsx)(o.Button, {
              tabIndex: l,
              wrapperClassName: R.ctaButtonWrapper,
              color: o.ButtonColors.PRIMARY,
              onClick: n,
              children: s
          });
}
function L(e) {
    let { quest: t, progressState: n, isCollectibleQuest: s, location: l, questContentPosition: u, inGiftInventory: d } = e,
        c = n >= x.OH.COMPLETED,
        m = (0, r.e7)([a.Z], () => a.Z.useReducedMotion),
        h = (0, r.e7)([C.Z], () => C.Z.isEnrolling(t.id)),
        p = (0, g.zK)(t, q.S7.IN_HOUSE_CONSOLE_QUEST),
        E = (0, g.cr)(t),
        j = (0, T.Ks)({
            progressState: n,
            quest: t,
            isInHouseQuest: p,
            location: l,
            isCollectibleQuest: s,
            questContentPosition: u,
            inGiftInventory: d,
            isVideoQuest: E
        }),
        f = p && d && c,
        v = f ? R.inHouseButton : o.ButtonColors.BRAND,
        S = c && !m ? o.ShinyButton : o.Button;
    return (0, i.jsx)(
        o.Tooltip,
        {
            text: j.tooltipText,
            tooltipContentClassName: R.ctaTooltipText,
            children: (e) => {
                var t;
                return (0, i.jsx)(S, {
                    ...e,
                    wrapperClassName: R.ctaButtonWrapper,
                    color: v,
                    disabled: null == j.onClick,
                    submitting: h,
                    onClick: null !== (t = j.onClick) && void 0 !== t ? t : () => {},
                    children: (0, i.jsxs)('div', {
                        className: R.ctaButtonInner,
                        children: [
                            f &&
                                (0, i.jsx)('img', {
                                    src: b,
                                    alt: '',
                                    className: R.inHouseIcon
                                }),
                            j.text
                        ]
                    })
                });
            }
        },
        j.tooltipText
    );
}
t.Z = (e) => {
    let { quest: t, location: n, size: s, isFocused: a, isQuestExpired: C, isExpanded: T, isAnimating: b, contentPosition: Z } = e,
        y = (0, x._Q)(t),
        P = y >= x.OH.ACCEPTED,
        B = y >= x.OH.COMPLETED,
        U = y >= x.OH.CLAIMED,
        D = (0, g.Xv)(t.config),
        O = (0, S.uq)(n),
        w = n === h.jn.QUESTS_EMBED,
        Q = T || b,
        k = P && !U && O,
        H = (0, x.t5)(t, q.dr.QUESTS_CARD, n),
        { xboxAndPlaystationAccounts: z } = (0, x.z6)(),
        W = (0, r.e7)([u.default], () => u.default.locale),
        G = (0, x.z)(t),
        F = O && D,
        V = C && !B,
        X = z.length > 0 && O && (0, g.$J)(t) && P && !B && !G,
        Y = (0, i.jsx)(j.Z, {
            autoplay: a,
            className: l()(R.gridImg, {
                [R.questRewardGiftInventory]: O && 'lg' === s,
                [R.questRewardEmbed]: w && 'lg' === s,
                [R.questRewardEmbedSm]: 'sm' === s,
                [R.questRewardEmbedXs]: 'xs' === s
            }),
            learnMoreStyle: O ? null : 'text',
            location: q.dr.QUESTS_CARD,
            quest: t,
            questContent: n,
            questContentPosition: Z
        });
    return (0, i.jsxs)('div', {
        className: R.root,
        children: [
            (0, i.jsxs)('div', {
                className: l()(R.outerContainer, {
                    [R.outerContainerSm]: 'sm' === s,
                    [R.outerContainerXs]: 'xs' === s,
                    [R.outerContainerNoProgress]: !k
                }),
                style: { visibility: Q ? 'inherit' : 'hidden' },
                'aria-hidden': !Q,
                children: [
                    (0, i.jsx)(o.Tooltip, {
                        text: V ? A.intl.string(A.t['04MTGR']) : null,
                        tooltipContentClassName: R.rewardTileExpirationTooltip,
                        shouldShow: V,
                        children: (e) =>
                            (0, i.jsxs)('div', {
                                className: R.rewardTileWrapper,
                                ...e,
                                children: [
                                    C &&
                                        (0, i.jsx)('div', {
                                            className: R.rewardTileExpired,
                                            children: (0, i.jsx)(o.CircleWarningIcon, { color: o.tokens.colors.WHITE })
                                        }),
                                    F
                                        ? (0, i.jsx)(N.Z, {
                                              questConfig: t.config,
                                              fallback: Y,
                                              isFocused: a
                                          })
                                        : Y
                                ]
                            })
                    }),
                    (0, i.jsxs)('div', {
                        className: l()(R.gridText, R.taskDetails),
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: I(n, s, P),
                                className: R.taskInstructions,
                                children: C ? A.intl.formatToPlainString(A.t['ge+AJi'], { questName: t.config.messages.questName }) : H
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'lg' === s ? 'text-sm/medium' : 'text-xs/medium',
                                color: 'text-muted',
                                children: (function (e) {
                                    var t, n, i, s, l, r;
                                    let { quest: o, location: a, locale: u, isQuestExpired: m } = e,
                                        C = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
                                        h = C && (null === (n = o.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
                                        E = (0, g.zK)(o, q.S7.IN_HOUSE_CONSOLE_QUEST),
                                        j = (0, S.uq)(a),
                                        T = (0, x.B6)(null === (i = o.userStatus) || void 0 === i ? void 0 : i.completedAt, {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        }),
                                        f = (0, g.oo)({ quest: o }),
                                        v = p.r.build(o.config).defaultReward.messages.nameWithArticle,
                                        N = (0, g.Kr)(o.config),
                                        R = (0, g.b7)(o);
                                    if (C && E && j) return A.intl.formatToPlainString(A.t.l1jCMz, { date: T });
                                    if (h) {
                                        let e = f
                                                ? (0, g.o9)({
                                                      quest: o,
                                                      idx: null === (s = o.userStatus) || void 0 === s ? void 0 : s.claimedTier
                                                  })
                                                : null,
                                            t = null !== (l = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== l ? l : null;
                                        return null != t
                                            ? A.intl.formatToPlainString(A.t.RrxtPT, {
                                                  reward: t,
                                                  date: T
                                              })
                                            : A.intl.formatToPlainString(A.t.zNoqRU, {
                                                  reward: v,
                                                  date: T
                                              });
                                    }
                                    if (C)
                                        return f
                                            ? A.intl.formatToPlainString(A.t.l1jCMz, { date: T })
                                            : A.intl.formatToPlainString(A.t.zNoqRU, {
                                                  reward: v,
                                                  date: T
                                              });
                                    let b = f
                                        ? (0, g.o9)({
                                              quest: o,
                                              idx: 0
                                          })
                                        : null;
                                    return m
                                        ? A.intl.formatToPlainString(A.t.DT3aub, { reward: null !== (r = null == b ? void 0 : b.messages.nameWithArticle) && void 0 !== r ? r : v })
                                        : null != b && null != b.approximateCount
                                          ? A.intl.format(A.t['4bMK19'], {
                                                maxReward: b.messages.nameWithArticle,
                                                maxRewardCount: (0, c.Bs)(b.approximateCount, u),
                                                helpCenterLink: d.Z.getArticleURL(_.BhN.QUESTS_LEARN_MORE)
                                            })
                                          : null != N
                                            ? A.intl.formatToPlainString(A.t.Pu5eyM, {
                                                  reward: v,
                                                  duration: N
                                              })
                                            : null != R
                                              ? R.description
                                              : A.intl.formatToPlainString(A.t.ttFsLi, { reward: v });
                                })({
                                    quest: t,
                                    location: n,
                                    locale: W,
                                    isQuestExpired: C
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: l()(R.ctaButtonContainer, R.gridCtaButtons),
                        children: [
                            !O &&
                                (0, i.jsx)(M, {
                                    containerSize: s,
                                    onClick: () => {
                                        (0, f.navigateToQuestHome)(q.dr.QUESTS_CARD, n, t.id),
                                            (0, m._3)({
                                                questId: t.id,
                                                questContent: n,
                                                questContentPosition: Z,
                                                questContentCTA: m.jZ.LEARN_MORE
                                            });
                                    },
                                    children: A.intl.string(A.t.LLLLPD)
                                }),
                            C && !B
                                ? null
                                : (0, i.jsx)(L, {
                                      quest: t,
                                      progressState: y,
                                      isCollectibleQuest: D,
                                      location: n,
                                      inGiftInventory: O
                                  })
                        ]
                    }),
                    k &&
                        (0, i.jsx)(E.Z, {
                            className: R.gridProgressBar,
                            color: B ? o.tokens.colors.TEXT_POSITIVE : o.tokens.colors.BG_BRAND,
                            quest: t,
                            isInventory: O
                        })
                ]
            }),
            X &&
                (0, i.jsxs)('div', {
                    className: R.microphoneContainer,
                    children: [
                        (0, i.jsx)('div', { className: R.separator }),
                        (0, i.jsx)(v.Z, {
                            quest: t,
                            location: n
                        })
                    ]
                })
        ]
    });
};
