n.d(t, {
    i0: function () {
        return h;
    },
    yD: function () {
        return _;
    }
});
var r = n(200651);
n(192379);
var o = n(120356),
    i = n.n(o),
    l = n(481060),
    a = n(617136),
    s = n(497505),
    c = n(918701),
    u = n(796111),
    d = n(667105),
    m = n(341907),
    p = n(604162),
    f = n(46140),
    v = n(388032),
    C = n(128220);
function g(e) {
    let { quest: t, taskDetails: n } = e;
    return (0, r.jsx)(l.Button, {
        className: C.cta,
        color: l.Button.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, m.openVideoQuestModal)(t);
        },
        size: l.Button.Sizes.SMALL,
        children: (0, p.F9)(n)
    });
}
let x = (e) => {
        let { quest: t } = e;
        return (0, r.jsx)(l.Button, {
            className: C.cta,
            size: l.Button.Sizes.SMALL,
            onClick: () =>
                (0, c.FE)(t, {
                    content: s.jn.QUEST_BAR_V2,
                    ctaContent: a.jZ.OPEN_GAME_LINK
                }),
            children: v.intl.string(v.t.lwQdjI)
        });
    },
    S = (e) => {
        let { quest: t } = e;
        return (0, r.jsx)(l.Button, {
            fullWidth: !0,
            className: C.cta,
            onClick: () =>
                (0, c.gI)(
                    { quest: t },
                    {
                        content: s.jn.QUEST_BAR_V2,
                        ctaContent: a.jZ.CONNECT_CONSOLE
                    }
                ),
            size: l.Button.Sizes.SMALL,
            children: v.intl.string(v.t.csptqa)
        });
    },
    h = (e) => {
        let { quest: t, useReducedMotion: n, isExpanded: o, className: a, ctaLabel: c, ...u } = e,
            m = (0, d.hf)({
                quest: t,
                location: s.jn.QUEST_BAR_V2
            });
        return (0, r.jsx)(l.ShinyButton, {
            fullWidth: !0,
            size: l.Button.Sizes.SMALL,
            onClick: m,
            pauseAnimation: n || !o,
            className: i()(C.cta, a),
            buttonShineClassName: C.shine,
            ...u,
            children: null != c ? c : v.intl.string(v.t.cfY4PD)
        });
    },
    E = (e) => {
        var t;
        let { quest: n, useReducedMotion: o, isExpanded: i, awaitingConsoleConnections: l, hasMadeProgress: a, isProgressing: d, activeScreen: m, taskDetails: p } = e,
            v = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
            C = (0, u.P)({ location: f.dr.QUESTS_BAR }),
            E = (0, c.cr)(n);
        if (v)
            return (0, r.jsx)(h, {
                quest: n,
                useReducedMotion: o,
                isExpanded: i
            });
        if (E)
            return (0, r.jsx)(g, {
                quest: n,
                taskDetails: p
            });
        if (m === s.LI.CONSOLE && l && !C) return (0, r.jsx)(S, { quest: n });
        else if (m !== s.LI.SELECT && !a && !d) return (0, r.jsx)(x, { quest: n });
        return null;
    };
function _(e) {
    return (0, r.jsxs)('div', {
        className: C.ctaButtons,
        children: [
            e.showBackButton &&
                (0, r.jsx)(l.Button, {
                    className: C.backButton,
                    innerClassName: C.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, r.jsx)(l.ChevronSmallLeftIcon, { className: C.backIcon })
                }),
            (0, r.jsx)(E, { ...e })
        ]
    });
}
