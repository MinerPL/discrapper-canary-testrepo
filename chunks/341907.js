n.r(t),
    n.d(t, {
        navigateToQuestHome: function () {
            return p;
        },
        openDisclosureModal: function () {
            return h;
        },
        openQuestInGameRewardModal: function () {
            return f;
        },
        openQuestsNitroRewardModal: function () {
            return E;
        },
        openQuestsRewardCodeModal: function () {
            return _;
        }
    });
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(212093),
    s = n(703656),
    o = n(617136),
    l = n(497505),
    u = n(150560),
    c = n(981631),
    d = n(731455);
function _(e) {
    let { questId: t, location: a, questContentPosition: s, preview: o = !1 } = e;
    (0, i.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e('37447'), n.e('48923'), n.e('64838'), n.e('28044'), n.e('71740')]).then(n.bind(n, 985866));
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
function E(e, t) {
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
function f(e, t) {
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
function h(e, t) {
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
function p(e, t, n) {
    let r = u.Z.getState().setUtmCurrentContext;
    r({
        utmSourceCurrent: 'Discord Widget',
        utmMediumCurrent: 'in-app',
        utmCampaignCurrent: n,
        utmContentCurrent: Object.keys(l.jn).find((e) => l.jn[e] === t)
    });
    let i = null != n ? '#'.concat(n) : '';
    (0, a.uY)(d.Gj.Quests), (0, s.uL)(c.Z5c.QUEST_HOME + i);
}
