n.r(t),
    n.d(t, {
        maybeShowSurveyForQuest: function () {
            return b;
        },
        navigateToQuestHome: function () {
            return T;
        },
        openDisclosureModal: function () {
            return S;
        },
        openQuestInGameRewardModal: function () {
            return I;
        },
        openQuestsNitroRewardModal: function () {
            return v;
        },
        openQuestsRewardCodeModal: function () {
            return E;
        },
        openVideoQuestModal: function () {
            return y;
        }
    });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(836768),
    s = n(703656),
    o = n(617136),
    l = n(497505),
    u = n(918701),
    c = n(862847),
    d = n(5881),
    f = n(842942),
    _ = n(61115),
    h = n(150560),
    p = n(46140),
    m = n(981631),
    g = n(49898);
function E(e) {
    let { questId: t, location: a, questContentPosition: s, preview: o = !1 } = e;
    (0, i.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e('48923'), n.e('99393'), n.e('28044'), n.e('71740')]).then(n.bind(n, 985866));
        return (n) =>
            (0, r.jsx)(e, {
                ...n,
                questId: t,
                questContentPosition: s,
                location: a,
                preview: o
            });
    });
}
function v(e, t) {
    (0, i.openModalLazy)(async () => {
        let { default: i } = await n.e('838').then(n.bind(n, 824393));
        return (n) =>
            (0, r.jsx)(i, {
                ...n,
                quest: e,
                location: t
            });
    });
}
function I(e, t) {
    (0, i.openModalLazy)(async () => {
        let { default: i } = await n.e('88938').then(n.bind(n, 390238));
        return (n) =>
            (0, r.jsx)(i, {
                ...n,
                quest: e,
                location: t
            });
    });
}
function S(e, t) {
    (0, o._3)({
        questId: e.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent
    }),
        (0, i.openModalLazy)(async () => {
            let { default: i } = await n.e('4266').then(n.bind(n, 316210));
            return (n) =>
                (0, r.jsx)(i, {
                    ...n,
                    questContent: t.content,
                    quest: e
                });
        });
}
function T(e, t, n) {
    let r = h.Z.getState().setUtmCurrentContext;
    r({
        utmSourceCurrent: 'Discord Widget',
        utmMediumCurrent: 'in-app',
        utmCampaignCurrent: n,
        utmContentCurrent: Object.keys(l.jn).find((e) => l.jn[e] === t)
    });
    let i = null != n ? '#'.concat(n) : '';
    a.Z.setState({ selectedTab: g.F$.QUESTS }), (0, s.uL)(m.Z5c.QUEST_HOME + i);
}
function b(e) {
    let t = (0, d.T)({ quest: e }),
        n = { location: p.dr.QUESTS_BAR };
    if (!(0, c.j)(n)) return;
    let r = (0, u.il)(e),
        i = (0, f.Z)({ gameName: e.config.messages.gameTitle });
    if (i.taskType === r.taskType && !!i.experiment.getCurrentConfig(n).enabled)
        t.log('Showing survey '.concat(i.id)),
            (0, _.openQuestSurveyModal)({
                questId: e.id,
                survey: i
            });
}
function y(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    (0, i.openModalLazy)(
        async () => {
            let { default: i } = await n.e('32249').then(n.bind(n, 536687));
            return (n) =>
                (0, r.jsx)(i, {
                    ...n,
                    questId: e.id,
                    autoplay: t
                });
        },
        { modalKey: (0, u.u7)(e.id) }
    );
}
