n.r(t),
    n.d(t, {
        loadVideoQuestModal: () => Z,
        maybeShowSurveyForQuest: () => V,
        navigateToQuestHome: () => F,
        openAppWithQuest: () => Y,
        openDisclosureModal: () => B,
        openQuestInGameRewardModal: () => U,
        openQuestOrbsRewardModal: () => G,
        openQuestsNitroRewardModal: () => j,
        openQuestsRewardCodeModal: () => k,
        openVideoQuestModal: () => H
    });
var r = n(200651);
n(192379);
var i = n(772848),
    o = n(271579),
    a = n(756647),
    s = n(481060),
    l = n(836768),
    c = n(98278),
    u = n(703656),
    d = n(751648),
    f = n(82856),
    _ = n(314897),
    p = n(866960),
    h = n(626135),
    m = n(954824),
    g = n(617136),
    E = n(569984),
    b = n(497505),
    y = n(918701),
    v = n(184299),
    O = n(862847),
    I = n(5881),
    S = n(492112),
    T = n(61115),
    N = n(150560),
    A = n(46140),
    C = n(981631),
    R = n(49898);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = 'in-app',
    M = 'Discord Widget';
function k(e) {
    let { questId: t, location: i, questContentPosition: o, preview: a = !1, previewQuest: l = null } = e;
    (0, s.ZDy)(async () => {
        let { default: e } = await Promise.all([n.e('37447'), n.e('64838'), n.e('48923'), n.e('64842')]).then(n.bind(n, 985866));
        return (n) =>
            (0, r.jsx)(
                e,
                L(w({}, n), {
                    questId: t,
                    questContentPosition: o,
                    location: i,
                    preview: a,
                    previewQuest: l
                })
            );
    });
}
function j(e, t) {
    var i;
    (null == (i = e.userStatus) ? void 0 : i.claimedAt) == null
        ? (0, s.ZDy)(async () => {
              let { default: i } = await Promise.resolve().then(n.bind(n, 824393));
              return (n) =>
                  (0, r.jsx)(
                      i,
                      L(w({}, n), {
                          quest: e,
                          location: t
                      })
                  );
          })
        : (0, c.$)();
}
function U(e, t) {
    (0, s.ZDy)(async () => {
        let { default: i } = await n.e('88938').then(n.bind(n, 390238));
        return (n) =>
            (0, r.jsx)(
                i,
                L(w({}, n), {
                    quest: e,
                    location: t
                })
            );
    });
}
function G(e, t) {
    (0, d.S6)(),
        (0, s.ZDy)(
            async () => {
                let { default: i } = await n.e('20565').then(n.bind(n, 383294));
                return (n) =>
                    (0, r.jsx)(
                        i,
                        L(w({}, n), {
                            quest: e,
                            location: t
                        })
                    );
            },
            {
                onCloseCallback() {
                    (0, f.vp)();
                }
            }
        );
}
function B(e, t) {
    (0, g._3)({
        questId: e.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId
    }),
        (0, s.ZDy)(async () => {
            let { default: i } = await n.e('4266').then(n.bind(n, 316210));
            return (n) =>
                (0, r.jsx)(
                    i,
                    L(w({}, n), {
                        questContent: t.content,
                        quest: e
                    })
                );
        });
}
function F() {
    let { fromContent: e, questId: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, N.Z.getState().setUtmCurrentContext)({
        utmSourceCurrent: M,
        utmMediumCurrent: x,
        utmCampaignCurrent: t,
        utmContentCurrent: Object.keys(b.jn).find((t) => b.jn[t] === e)
    });
    let n = null != t ? '#'.concat(t) : '';
    l.Z.setState({ selectedTab: R.GlobalDiscoveryTab.QUESTS }), (0, u.uL)(C.Z5c.QUEST_HOME + n);
}
function V(e) {
    let t = (0, I.T)({ quest: e }),
        n = { location: A.dr.QUESTS_BAR };
    if (!(0, O.j)(n)) return;
    let r = (0, S.Z)({ entityName: e.config.messages.gameTitle });
    t.log('Showing survey '.concat(r.id)),
        (0, T.C)({
            questId: e.id,
            survey: r
        });
}
function Z() {
    return Promise.all([n.e('29976'), n.e('32249'), n.e('58914')]).then(n.bind(n, 536687));
}
function H(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, i.Z)();
    (0, s.ZDy)(
        async () => {
            let { default: i } = await Z();
            return (o) =>
                (0, r.jsx)(
                    i,
                    L(w({}, o), {
                        openStartClockTime: performance.now(),
                        questId: e.id,
                        autoplay: t,
                        videoSessionId: n
                    })
                );
        },
        {
            modalKey: (0, y.u7)(e.id),
            backdropStyle: s.fCB.IMMERSIVE,
            onCloseCallback: () => {
                var t, r;
                let i = v.ZP.getState().getVideoProgress(e.id);
                if (null == i) return;
                let o = E.Z.getQuest(e.id);
                null != o && (null == (t = o.userStatus) ? void 0 : t.enrolledAt) != null && (null == (r = o.userStatus) ? void 0 : r.completedAt) == null && (0, y.FI)(o, i.maxTimestampSec);
                let a = (0, y.bA)(i.maxTimestampSec, i.duration);
                (0, g.dA)({
                    questId: e.id,
                    event: C.rMx.QUEST_VIDEO_PROGRESSED,
                    properties: {
                        progress: a,
                        video_timestamp_seconds: i.maxTimestampSec,
                        video_session_id: n
                    }
                }),
                    (0, g.dA)({
                        questId: e.id,
                        event: C.rMx.QUEST_VIDEO_MODAL_CLOSED,
                        properties: {
                            video_progress: a,
                            video_session_id: n,
                            network_connection_speed: p.Z.getEffectiveConnectionSpeed()
                        }
                    });
            }
        }
    );
}
function W(e) {
    var t;
    let n = null == (t = platform.os) ? void 0 : t.family,
        r = 'quest';
    if ('Android' === n || 'iOS' === n) {
        let t = _.default.getFingerprint(),
            n = (0, o.WS)(),
            i = ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, '/quests/').concat(e);
        return (0, o.ZP)(i, {
            utmSource: r,
            fingerprint: t,
            attemptId: n
        });
    }
    return 'discord://';
}
function Y(e) {
    let t = W(e),
        n = (0, o.zS)(t);
    null != n &&
        h.default.track(C.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }),
        m.Z.launch(t, (t) => {
            t ||
                (0, u.dL)({
                    pathname: C.Z5c.QUEST_HOME,
                    hash: e
                });
        });
}
