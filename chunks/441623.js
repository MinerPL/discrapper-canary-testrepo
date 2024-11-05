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
    f = n(480294),
    _ = n(699516),
    h = n(709054),
    p = n(522558),
    m = n(581025),
    g = n(981631);
function E(e, t, n) {
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
function v() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null
    };
}
let I = v(),
    S = [],
    T = new Set(),
    b = {},
    y = null;
function A(e, t) {
    let n = new Date(),
        r = new Date(e.getTime());
    r.setFullYear(t);
    let i = new Date(r.getTime());
    i.setDate(r.getDate() - 7);
    let a = new Date(r.getTime());
    return a.setDate(r.getDate() + 7), n > i && n < a;
}
function N() {
    if (null != y) {
        O(y);
        return;
    }
    if ((C(), !f.Z.hasConsented(g.pjP.PERSONALIZATION))) return;
    let { enabled: e } = m.G.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 }),
        { enabled: t } = p.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (!!(e || t)) {
        for (let e of h.default.keys(_.Z.getRelationships())) {
            if (S.length >= 15) break;
            let t = _.Z.getSince(e),
                r = d.Z.getUserAffinity(e);
            if (_.Z.getRelationshipType(e) === g.OGo.FRIEND && null != r && r.affinity > 0 && null != t) {
                var n;
                let r = new Date(t);
                if (!A((n = r), n.getFullYear()) && A(n, new Date().getFullYear())) S.push(e), (b[e] = { friendsSince: r });
            }
        }
        S.sort((e, t) => {
            let n = d.Z.getUserAffinity(e),
                r = d.Z.getUserAffinity(t),
                i = null != n ? n.affinity : 0;
            return (null != r ? r.affinity : 0) - i;
        }),
            (T = new Set(S.slice(0, 5)));
    }
}
function C() {
    (S.length = 0), T.clear(), (b = {});
}
function R(e) {
    null == I.messageGiftIntentLastShownMap[e] && (I.messageGiftIntentLastShownMap[e] = Date.now());
}
function O(e) {
    C();
    let { enabled: t } = p.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore generateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (!t) return;
    y = e;
    let n = _.Z.getFriendIDs();
    a()
        .sampleSize(n, e)
        .forEach((e) => {
            let t = _.Z.getSince(e);
            if (null != t) {
                let n = new Date(t);
                S.push(e), (b[e] = { friendsSince: n });
            }
        }),
        (T = new Set(S.slice(0, 5)));
}
class D extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        (I = v()),
            null != e && ((I.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime), (I.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)), (I.messageGiftIntentLastShownMap = { ...e.messageGiftIntentLastShownMap })),
            this.syncWith([_.Z, d.Z, f.Z, c.Z], N),
            !(function () {
                for (let e in I.messageGiftIntentLastShownMap) {
                    let t = I.messageGiftIntentLastShownMap[e];
                    Date.now() - t > 1209600000 && delete I.messageGiftIntentLastShownMap[e];
                }
            })();
    }
    getState() {
        return I;
    }
    getFriendAnniversaries() {
        return S;
    }
    isTopAffinityFriendAnniversary(e) {
        let { userId: t } = e,
            { enabled: n } = p.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore isTopAffinityFriendAnniversary' }, { autoTrackExposure: !1 });
        return !!n && T.has(t);
    }
    canShowFriendsTabBadge() {
        var e;
        let t = null !== (e = I.friendsTabBadgeLastDismissedTime) && void 0 !== e ? e : 0;
        return !(Date.now() - t <= 604800000) && Array.from(T).some((e) => !I.lastShownFriendsListGiftIntents.includes(e));
    }
    getFriendAnniversaryYears(e) {
        var t;
        let n = b[e];
        if (null == n) return 0;
        return (t = n.friendsSince), Math.round(o()().diff(t, 'years', !0));
    }
    isGiftIntentMessageInCooldown(e) {
        return null != I.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return y;
    }
}
E(D, 'displayName', 'PremiumGiftingIntentStore'),
    E(D, 'persistKey', 'PremiumGiftingIntentStore'),
    E(D, 'migrations', [
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
    (t.Z = new D(u.Z, {
        CONNECTION_OPEN: function () {
            C();
        },
        LOGOUT: function () {
            (I = v()), C();
        },
        MESSAGE_GIFT_INTENT_SHOWN: function (e) {
            let { recipientUserId: t } = e;
            R(t);
        },
        FRIENDS_LIST_GIFT_INTENTS_SHOWN: function () {
            I.lastShownFriendsListGiftIntents = Array.from(T);
        },
        FRIENDS_TAB_BADGE_DISMISS: function () {
            I.friendsTabBadgeLastDismissedTime = Date.now();
        },
        GIFT_INTENT_FLOW_PURCHASED_GIFT: function (e) {
            let { recipientUserId: t } = e;
            R(t);
        },
        DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: function () {
            I.lastShownFriendsListGiftIntents = [];
        },
        DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: function () {
            I.messageGiftIntentLastShownMap = {};
        },
        DEV_TOOLS_FRIENDS_TAB_BADGE_COOLDOWN_RESET: function () {
            I.friendsTabBadgeLastDismissedTime = null;
        },
        DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: function (e) {
            let { total: t } = e;
            if (null == t) {
                (y = null), N();
                return;
            }
            O(t);
        }
    }));
