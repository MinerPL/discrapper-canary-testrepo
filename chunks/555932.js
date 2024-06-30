n.d(t, {
    Z: function () {
        return h;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(920906), o = n(442837), s = n(607070), l = n(267642), u = n(198466), c = n(436444), d = n(981631), _ = n(689938), E = n(889515);
let f = [
    d.Eu4.NONE,
    d.Eu4.TIER_1,
    d.Eu4.TIER_2,
    d.Eu4.TIER_3
];
function h(e) {
    let {guild: t} = e, n = (0, o.e7)([s.Z], () => s.Z.useReducedMotion), [h, p] = i.useState(!1), [m, I] = i.useState(0), T = i.useRef(null), g = Math.min(d.Eu4.TIER_3, t.premiumTier + 1), S = d.oCV[t.premiumTier], A = d.oCV[g], N = (t.premiumSubscriberCount - S) / (A - S), v = c.P[t.premiumTier], O = c.P[g], R = t.premiumTier === d.Eu4.TIER_3, {
            progressBarFillWidthFactor: C,
            isProgressBarAnimationComplete: y,
            setShouldFireConfetti: D,
            shouldFireConfetti: L,
            tierMarkerAnimationPosition: b
        } = function (e) {
            let {
                    fillFactor: t,
                    guildBoostCount: n,
                    premiumTier: r,
                    isRevealed: o,
                    useReducedMotion: s
                } = e, [l, u] = i.useState(s ? r : -1), [_, E] = i.useState(0 === n), [f, h] = i.useState(!1), p = i.useRef(!0), {widthFactor: m} = (0, a.useSpring)({
                    from: { widthFactor: 0 },
                    to: { widthFactor: o ? t : 0 },
                    config: {
                        tension: 15,
                        friction: 7,
                        clamp: !0
                    },
                    immediate: s,
                    onChange: function (e) {
                        let {widthFactor: t} = e;
                        for (let [e, n] of Object.entries(c.P).reverse())
                            if (t >= n - 0.02727272727272727) {
                                u(Number(e));
                                break;
                            }
                    },
                    onStart: () => {
                        E(!1);
                    },
                    onRest: () => {
                        E(!0), r === d.Eu4.TIER_3 && (h(!0), window.setTimeout(() => {
                            p.current && h(!1);
                        }, 200));
                    }
                });
            return i.useEffect(() => () => {
                p.current = !1;
            }, []), {
                isProgressBarAnimationComplete: _,
                progressBarFillWidthFactor: m,
                setShouldFireConfetti: h,
                shouldFireConfetti: f,
                tierMarkerAnimationPosition: l
            };
        }({
            fillFactor: R ? 1 : N * (O - v) + v,
            isRevealed: h || n,
            useReducedMotion: n,
            premiumTier: t.premiumTier,
            guildBoostCount: t.premiumSubscriberCount
        });
    return i.useEffect(() => {
        let e = window.setTimeout(() => {
            p(!0);
        }, 250);
        return () => {
            window.clearTimeout(e);
        };
    }, []), (0, r.jsxs)('div', {
        className: E.progressBar,
        role: 'progressbar',
        'aria-valuenow': t.premiumSubscriberCount,
        'aria-valuetext': t.premiumTier === d.Eu4.NONE ? _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_SCREEN_READER_VALUE.format({ numSubscriptionsApplied: t.premiumSubscriberCount }) : _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_SCREEN_READER_VALUE_TIER_UNLOCKED.format({
            numSubscriptionsApplied: t.premiumSubscriberCount,
            tierName: (0, l.nW)(t.premiumTier, { useLevels: !1 })
        }),
        children: [
            (0, r.jsxs)('div', {
                className: E.progressBarScrubber,
                children: [
                    (0, r.jsx)(a.animated.div, {
                        className: E.progressBarFill,
                        style: {
                            width: C.to({
                                range: [
                                    0,
                                    1
                                ],
                                output: [
                                    0,
                                    100
                                ]
                            }).to(e => ''.concat(e, '%'))
                        }
                    }),
                    (0, r.jsx)('div', { className: E.progressBarTrack })
                ]
            }),
            f.map(e => (0, r.jsx)(c.Z, {
                confettiTriggerRef: T,
                guild: t,
                isProgressBarAnimationComplete: y,
                setConfettiCount: I,
                setShouldFireConfetti: D,
                tier: e,
                tierMarkerAnimationPosition: b,
                children: (0, l.nW)(e)
            }, e)),
            (0, r.jsx)(u.Z, {
                confettiCount: m,
                confettiTriggerRef: T,
                isFiring: L
            })
        ]
    });
}
