n(47120), n(653041);
var r,
    i = n(392711),
    a = n.n(i),
    s = n(913527),
    o = n.n(s),
    l = n(442837),
    u = n(570140),
    c = n(353926),
    d = n(814443),
    _ = n(480294),
    E = n(699516),
    f = n(709054),
    h = n(522558),
    p = n(581025),
    I = n(981631);
function m(e, t, n) {
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
function T() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null
    };
}
let S = T(),
    g = [],
    A = new Set(),
    N = {},
    O = null;
function R(e, t) {
    let n = new Date(),
        r = new Date(e.getTime());
    r.setFullYear(t);
    let i = new Date(r.getTime());
    i.setDate(r.getDate() - 7);
    let a = new Date(r.getTime());
    return a.setDate(r.getDate() + 7), n > i && n < a;
}
function v() {
    if (null != O) {
        L(O);
        return;
    }
    if ((C(), !_.Z.hasConsented(I.pjP.PERSONALIZATION))) return;
    let { enabled: e } = p.G.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 }),
        { enabled: t } = h.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (!!(e || t)) {
        for (let e of f.default.keys(E.Z.getRelationships())) {
            if (g.length >= 15) break;
            let t = E.Z.getSince(e),
                r = d.Z.getUserAffinity(e);
            if (E.Z.getRelationshipType(e) === I.OGo.FRIEND && null != r && r.affinity > 0 && null != t) {
                var n;
                let r = new Date(t);
                if (!R((n = r), n.getFullYear()) && R(n, new Date().getFullYear())) g.push(e), (N[e] = { friendsSince: r });
            }
        }
        g.sort((e, t) => {
            let n = d.Z.getUserAffinity(e),
                r = d.Z.getUserAffinity(t),
                i = null != n ? n.affinity : 0;
            return (null != r ? r.affinity : 0) - i;
        }),
            (A = new Set(g.slice(0, 5)));
    }
}
function C() {
    (g.length = 0), A.clear(), (N = {});
}
function L(e) {
    C();
    let { enabled: t } = h.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore generateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (!t) return;
    O = e;
    let n = E.Z.getFriendIDs();
    a()
        .sampleSize(n, e)
        .forEach((e) => {
            let t = E.Z.getSince(e);
            if (null != t) {
                let n = new Date(t);
                g.push(e), (N[e] = { friendsSince: n });
            }
        }),
        (A = new Set(g.slice(0, 5)));
}
class y extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        (S = T()),
            null != e && ((S.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime), (S.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)), (S.messageGiftIntentLastShownMap = { ...e.messageGiftIntentLastShownMap })),
            this.syncWith([E.Z, d.Z, _.Z, c.Z], v),
            !(function () {
                for (let e in S.messageGiftIntentLastShownMap) {
                    let t = S.messageGiftIntentLastShownMap[e];
                    Date.now() - t > 1209600000 && delete S.messageGiftIntentLastShownMap[e];
                }
            })();
    }
    getState() {
        return S;
    }
    getFriendAnniversaries() {
        return g;
    }
    isTopAffinityFriendAnniversary(e) {
        let { userId: t } = e,
            { enabled: n } = h.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore isTopAffinityFriendAnniversary' }, { autoTrackExposure: !1 });
        return !!n && A.has(t);
    }
    canShowFriendsTabBadge() {
        var e;
        let t = null !== (e = S.friendsTabBadgeLastDismissedTime) && void 0 !== e ? e : 0;
        return !(Date.now() - t <= 604800000) && Array.from(A).some((e) => !S.lastShownFriendsListGiftIntents.includes(e));
    }
    getFriendAnniversaryYears(e) {
        var t;
        let n = N[e];
        if (null == n) return 0;
        return (t = n.friendsSince), Math.round(o()().diff(t, 'years', !0));
    }
    isGiftIntentMessageInCooldown(e) {
        return null != S.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return O;
    }
}
m(y, 'displayName', 'PremiumGiftingIntentStore'),
    m(y, 'persistKey', 'PremiumGiftingIntentStore'),
    m(y, 'migrations', [
        (e) => {
            var t, n;
            return null == e
                ? e
                : {
                      friendsTabBadgeLastDismissedTime: null !== (t = e.friendsTabBadgeLastDismissedTime) && void 0 !== t ? t : null,
                      lastShownFriendsListGiftIntents: null !== (n = e.lastShownFriendsListGiftIntents) && void 0 !== n ? n : [],
                      messageGiftIntentLastShownMap: {}
                  };
        }
    ]),
    (t.Z = new y(u.Z, {
        CONNECTION_OPEN: function () {
            C();
        },
        LOGOUT: function () {
            (S = T()), C();
        },
        MESSAGE_GIFT_INTENT_SHOWN: function (e) {
            let { recipientUserId: t } = e;
            S.messageGiftIntentLastShownMap[t] = Date.now();
        },
        FRIENDS_LIST_GIFT_INTENTS_SHOWN: function () {
            S.lastShownFriendsListGiftIntents = Array.from(A);
        },
        FRIENDS_TAB_BADGE_DISMISS: function () {
            S.friendsTabBadgeLastDismissedTime = Date.now();
        },
        DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: function () {
            S.lastShownFriendsListGiftIntents = [];
        },
        DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: function () {
            S.messageGiftIntentLastShownMap = {};
        },
        DEV_TOOLS_FRIENDS_TAB_BADGE_COOLDOWN_RESET: function () {
            S.friendsTabBadgeLastDismissedTime = null;
        },
        DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: function (e) {
            let { total: t } = e;
            if (null == t) {
                (O = null), v();
                return;
            }
            L(t);
        }
    }));
