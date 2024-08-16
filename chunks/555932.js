n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(338545),
    s = n(442837),
    o = n(481060),
    l = n(607070),
    u = n(267642),
    c = n(198466),
    d = n(436444),
    _ = n(981631),
    E = n(689938),
    f = n(625135);
let h = [_.Eu4.NONE, _.Eu4.TIER_1, _.Eu4.TIER_2, _.Eu4.TIER_3];
function p(e) {
    let { guild: t } = e,
        n = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        [p, m] = i.useState(!1),
        [I, T] = i.useState(0),
        g = i.useRef(null),
        S = Math.min(_.Eu4.TIER_3, t.premiumTier + 1),
        A = _.oCV[t.premiumTier],
        N = _.oCV[S],
        v = (t.premiumSubscriberCount - A) / (N - A),
        O = d.P[t.premiumTier],
        R = d.P[S],
        C = t.premiumTier === _.Eu4.TIER_3,
        {
            progressBarFillWidthFactor: y,
            isProgressBarAnimationComplete: D,
            setShouldFireConfetti: L,
            shouldFireConfetti: b,
            tierMarkerAnimationPosition: M
        } = (function (e) {
            let { fillFactor: t, guildBoostCount: n, premiumTier: r, isRevealed: a, useReducedMotion: s } = e,
                [l, u] = i.useState(s ? r : -1),
                [c, E] = i.useState(0 === n),
                [f, h] = i.useState(!1),
                p = i.useRef(!0),
                { widthFactor: m } = (0, o.useSpring)({
                    from: { widthFactor: 0 },
                    to: { widthFactor: a ? t : 0 },
                    config: {
                        tension: 15,
                        friction: 7,
                        clamp: !0
                    },
                    onChange: function (e) {
                        let { widthFactor: t } = e;
                        for (let [e, n] of Object.entries(d.P).reverse())
                            if (t >= n - 0.02727272727272727) {
                                u(Number(e));
                                break;
                            }
                    },
                    onStart: () => {
                        E(!1);
                    },
                    onRest: () => {
                        E(!0),
                            r === _.Eu4.TIER_3 &&
                                (h(!0),
                                window.setTimeout(() => {
                                    p.current && h(!1);
                                }, 200));
                    }
                });
            return (
                i.useEffect(
                    () => () => {
                        p.current = !1;
                    },
                    []
                ),
                {
                    isProgressBarAnimationComplete: c,
                    progressBarFillWidthFactor: m,
                    setShouldFireConfetti: h,
                    shouldFireConfetti: f,
                    tierMarkerAnimationPosition: l
                }
            );
        })({
            fillFactor: C ? 1 : v * (R - O) + O,
            isRevealed: p || n,
            useReducedMotion: n,
            premiumTier: t.premiumTier,
            guildBoostCount: t.premiumSubscriberCount
        });
    return (
        i.useEffect(() => {
            let e = window.setTimeout(() => {
                m(!0);
            }, 250);
            return () => {
                window.clearTimeout(e);
            };
        }, []),
        (0, r.jsxs)('div', {
            className: f.progressBar,
            role: 'progressbar',
            'aria-valuenow': t.premiumSubscriberCount,
            'aria-valuetext':
                t.premiumTier === _.Eu4.NONE
                    ? E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_SCREEN_READER_VALUE.format({ numSubscriptionsApplied: t.premiumSubscriberCount })
                    : E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_SCREEN_READER_VALUE_TIER_UNLOCKED.format({
                          numSubscriptionsApplied: t.premiumSubscriberCount,
                          tierName: (0, u.nW)(t.premiumTier, { useLevels: !1 })
                      }),
            children: [
                (0, r.jsxs)('div', {
                    className: f.progressBarScrubber,
                    children: [
                        (0, r.jsx)(a.animated.div, {
                            className: f.progressBarFill,
                            style: {
                                width: y
                                    .to({
                                        range: [0, 1],
                                        output: [0, 100]
                                    })
                                    .to((e) => ''.concat(e, '%'))
                            }
                        }),
                        (0, r.jsx)('div', { className: f.progressBarTrack })
                    ]
                }),
                h.map((e) =>
                    (0, r.jsx)(
                        d.Z,
                        {
                            confettiTriggerRef: g,
                            guild: t,
                            isProgressBarAnimationComplete: D,
                            setConfettiCount: T,
                            setShouldFireConfetti: L,
                            tier: e,
                            tierMarkerAnimationPosition: M,
                            children: (0, u.nW)(e)
                        },
                        e
                    )
                ),
                (0, r.jsx)(c.Z, {
                    confettiCount: I,
                    confettiTriggerRef: g,
                    isFiring: b
                })
            ]
        })
    );
}
