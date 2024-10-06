n.d(t, {
    y: function () {
        return f;
    }
});
var s = n(735250);
n(470079);
var o = n(481060),
    r = n(782568),
    a = n(617136),
    l = n(497505),
    i = n(918701),
    c = n(796111),
    d = n(667105),
    u = n(46140),
    p = n(689938),
    m = n(128220);
let x = (e) => {
        let { quest: t } = e;
        return (0, i.KM)(t)
            ? (0, s.jsx)(o.Button, {
                  className: m.cta,
                  size: o.Button.Sizes.SMALL,
                  onClick: () => (0, r.Z)('https://support.discord.com/hc/en-us/articles/4422142836759-Activities-on-Discord'),
                  children: p.Z.Messages.QUESTS_LEARN_MORE_V2
              })
            : (0, s.jsx)(o.Button, {
                  className: m.cta,
                  size: o.Button.Sizes.SMALL,
                  onClick: () =>
                      (0, i.FE)(t, {
                          content: l.jn.QUEST_BAR_V2,
                          ctaContent: a.jZ.OPEN_GAME_LINK
                      }),
                  children: p.Z.Messages.QUESTS_GET_THIS_GAME
              });
    },
    _ = (e) => {
        let { quest: t } = e;
        return (0, s.jsx)(o.Button, {
            fullWidth: !0,
            className: m.cta,
            onClick: () =>
                (0, i.gI)(
                    { quest: t },
                    {
                        content: l.jn.QUEST_BAR_V2,
                        ctaContent: a.jZ.CONNECT_CONSOLE
                    }
                ),
            size: o.Button.Sizes.SMALL,
            children: p.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
        });
    },
    C = (e) => {
        let { quest: t, useReducedMotion: n, isExpanded: r } = e,
            a = (0, d.hf)({
                quest: t,
                location: l.jn.QUEST_BAR_V2
            });
        return (0, s.jsx)(o.ShinyButton, {
            fullWidth: !0,
            size: o.Button.Sizes.SMALL,
            onClick: a,
            pauseAnimation: n || !r,
            className: m.cta,
            buttonShineClassName: m.shine,
            children: p.Z.Messages.QUESTS_CLAIM_REWARD
        });
    },
    g = (e) => {
        var t;
        let { quest: n, useReducedMotion: o, isExpanded: r, awaitingConsoleConnections: a, hasMadeProgress: i, isProgressing: d, activeScreen: p } = e,
            m = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
            g = (0, c.P)({ location: u.dr.QUESTS_BAR });
        if (m)
            return (0, s.jsx)(C, {
                quest: n,
                useReducedMotion: o,
                isExpanded: r
            });
        if (p === l.LI.CONSOLE && a && !g) return (0, s.jsx)(_, { quest: n });
        if (p !== l.LI.SELECT && !i && !d) return (0, s.jsx)(x, { quest: n });
        return null;
    };
function f(e) {
    return (0, s.jsxs)('div', {
        className: m.ctaButtons,
        children: [
            e.showBackButton &&
                (0, s.jsx)(o.Button, {
                    className: m.backButton,
                    innerClassName: m.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, s.jsx)(o.ChevronSmallLeftIcon, { className: m.backIcon })
                }),
            (0, s.jsx)(g, { ...e })
        ]
    });
}
