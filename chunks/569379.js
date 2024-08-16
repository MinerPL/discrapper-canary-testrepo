n.d(t, {
    EK: function () {
        return h;
    },
    GX: function () {
        return f;
    },
    eQ: function () {
        return _;
    },
    vf: function () {
        return C;
    }
}),
    n(47120);
var s = n(470079),
    o = n(442837),
    r = n(481060),
    a = n(410030),
    l = n(706454),
    i = n(930153),
    c = n(113434),
    d = n(497505),
    u = n(918701),
    p = n(585500),
    x = n(566078),
    m = n(46140),
    g = n(689938);
function _(e) {
    var t, n;
    let s = (0, o.e7)([l.default], () => l.default.locale),
        { percentComplete: r } = (0, c.Rf)(e);
    if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return g.Z.Messages.QUESTS_COMPLETION_COMPLETE;
    if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && r > 0) {
        let e = (0, i.T3)(s, r, { roundingMode: 'floor' });
        return g.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED_V2.format({ percent: e });
    }
    return (0, u.$J)(e) ? g.Z.Messages.QUEST_BAR_TITLE_START_PLAYING : g.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED;
}
function C(e, t, n) {
    var s;
    let o = (0, c.B6)(x.r.build(e.config).rewardsExpireAt),
        r = (0, c.Rf)(e),
        a = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.completedAt) != null,
        l = (0, c.z)(e),
        i = (0, p.D)({
            quest: e,
            location: m.dr.QUESTS_BAR,
            questContent: d.jn.QUEST_BAR_V2,
            taskDetails: r,
            useV2Variants: !0
        });
    if (a) return g.Z.Messages.QUESTS_CLAIM_BY_DATE.format({ expirationDate: o });
    if (t) return n === d.LI.SELECT ? g.Z.Messages.QUEST_MULTIPLATFORM_SELECT_SUBTITLE : i;
    if (r.percentComplete > 0)
        return l
            ? (0, u.AV)({
                  quest: e,
                  taskDetails: r
              })
            : g.Z.Messages.QUEST_BAR_TITLE_START_PLAYING;
    return g.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED_SUBTITLE;
}
function f() {
    let [{ spring: e }, t] = (0, r.useSpring)(() => ({ spring: 0 }), 'animate-always');
    return {
        completionSpring: e,
        startCompletionAnimation: s.useCallback(() => {
            t({ spring: 1 }),
                t({
                    spring: 0,
                    delay: 2000
                });
        }, [t])
    };
}
function h(e, t) {
    var n;
    let s = (0, c.z)(e),
        o = null !== (n = (0, a.i6)()) && void 0 !== n ? n : 0,
        r = 'var(--green-330)',
        l = ['var(--background-tertiary)', 'var(--interactive-normal)'],
        i = t ? l[o] : ['#828288', '#CBCDD4'][o];
    return {
        backgroundTop: i,
        backgroundBottom: t ? l[o] : ['#535356', '#8B8C95'][o],
        foreground: r,
        glow: t && s ? r : '#C4C1D66E'
    };
}
