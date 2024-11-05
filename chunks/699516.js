n(47120);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(735778),
    f = n(922611),
    _ = n(23750),
    h = n(709054),
    p = n(594174),
    m = n(981631);
let g = {},
    E = {},
    v = {},
    I = new Set(),
    S = new Set(),
    T = 0,
    b = 0,
    y = 0,
    A = 0,
    N = 0;
function C() {
    A = Object.values(g).length;
    let { [m.OGo.PENDING_INCOMING]: e = 0, [m.OGo.PENDING_OUTGOING]: t = 0, [m.OGo.FRIEND]: n = 0 } = l().countBy(Object.values(g), (e) => e);
    (b = t), (y = n), (T = e - (N = I.size));
}
class R extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(p.default);
    }
    isFriend(e) {
        return null != e && g[e] === m.OGo.FRIEND;
    }
    isBlockedOrIgnored(e) {
        return this.isBlocked(e) || this.isIgnored(e);
    }
    isBlockedOrIgnoredForMessage(e) {
        return this.isBlockedForMessage(e) || this.isIgnoredForMessage(e);
    }
    isBlocked(e) {
        return null != e && g[e] === m.OGo.BLOCKED;
    }
    isBlockedForMessage(e) {
        var t, n, r, i;
        if (null != e.author && g[e.author.id] === m.OGo.BLOCKED) return !0;
        if (e instanceof _.ZP) {
            if (this.isBlocked(null === (i = e.interactionMetadata) || void 0 === i ? void 0 : null === (r = i.user) || void 0 === r ? void 0 : r.id)) return !0;
        } else if (this.isBlocked(null === (n = e.interaction_metadata) || void 0 === n ? void 0 : null === (t = n.user) || void 0 === t ? void 0 : t.id)) return !0;
        return !1;
    }
    isIgnored(e) {
        return !!(0, f.JX)({ location: 'relationship-store' }) && null != e && S.has(e);
    }
    isIgnoredForMessage(e) {
        var t, n, r, i;
        if (null != e.author && this.isIgnored(e.author.id)) return !0;
        if (e instanceof _.ZP) {
            if (this.isIgnored(null === (i = e.interactionMetadata) || void 0 === i ? void 0 : null === (r = i.user) || void 0 === r ? void 0 : r.id)) return !0;
        } else if (this.isIgnored(null === (n = e.interaction_metadata) || void 0 === n ? void 0 : null === (t = n.user) || void 0 === t ? void 0 : t.id)) return !0;
        return !1;
    }
    getPendingCount() {
        return T;
    }
    getSpamCount() {
        return (0, d.A)({ location: 'friend_request_spam_inbox' }) ? N : 0;
    }
    getOutgoingCount() {
        return b;
    }
    getFriendCount() {
        return y;
    }
    getRelationshipCount() {
        return A;
    }
    getRelationships() {
        return g;
    }
    isSpam(e) {
        return (0, d.A)({ location: 'friend_request_spam_inbox' }) && I.has(e);
    }
    getRelationshipType(e) {
        let t = g[e];
        return null != t ? t : m.OGo.NONE;
    }
    getNickname(e) {
        return E[e];
    }
    getSince(e) {
        return v[e];
    }
    getSinces() {
        return v;
    }
    getFriendIDs() {
        return h.default.keys(g).filter((e) => g[e] === m.OGo.FRIEND);
    }
    getBlockedIDs() {
        return h.default.keys(g).filter((e) => g[e] === m.OGo.BLOCKED);
    }
}
(s = 'RelationshipStore'),
    (a = 'displayName') in (i = R)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new R(c.Z, {
        CONNECTION_OPEN: function (e) {
            (g = {}),
                (E = {}),
                (v = {}),
                e.relationships.forEach((e) => {
                    (g[e.id] = e.type), null != e.nickname && (E[e.id] = e.nickname), null != e.since && (v[e.id] = e.since), e.is_spam_request && (0, d.A)({ location: 'friend_request_spam_inbox' }) && I.add(e.id), (0, f.JX)({ location: 'relationship_store' }) && e.user_ignored && S.add(e.id);
                }),
                C();
        },
        OVERLAY_INITIALIZE: function (e) {
            (g = { ...e.relationships }), C();
        },
        RELATIONSHIP_ADD: function (e) {
            let t = g[e.relationship.id];
            (g = {
                ...g,
                [e.relationship.id]: e.relationship.type
            }),
                null != e.relationship.nickname &&
                    (E = {
                        ...E,
                        [e.relationship.id]: e.relationship.nickname
                    }),
                null != e.relationship.since &&
                    (v = {
                        ...v,
                        [e.relationship.id]: e.relationship.since
                    }),
                (0, d.A)({ location: 'relationship_store' }) && e.relationship.isSpamRequest ? I.add(e.relationship.id) : I.delete(e.relationship.id),
                C(),
                e.relationship.type === m.OGo.FRIEND &&
                    t === m.OGo.PENDING_OUTGOING &&
                    c.Z.dispatch({
                        type: 'FRIEND_REQUEST_ACCEPTED',
                        user: e.relationship.user
                    });
        },
        RELATIONSHIP_REMOVE: function (e) {
            (g = { ...g }), delete g[e.relationship.id], null != E[e.relationship.id] && ((E = { ...E }), delete E[e.relationship.id]), null != v[e.relationship.id] && ((v = { ...v }), delete v[e.relationship.id]), !e.relationship.userIgnored && S.delete(e.relationship.id), I.delete(e.relationship.id), C();
        },
        RELATIONSHIP_UPDATE: function (e) {
            let { relationship: t } = e;
            null == t.since ? delete v[t.id] : (v[t.id] = t.since), null == t.nickname ? delete E[t.id] : (E[t.id] = t.nickname), (0, d.A)({ location: 'relationship_store' }) && t.isSpamRequest ? I.add(t.id) : I.delete(t.id), t.userIgnored ? S.add(t.id) : S.delete(t.id);
        },
        RELATIONSHIP_PENDING_INCOMING_REMOVED: function (e) {
            (g = { ...g }),
                h.default.keys(g).forEach((e) => {
                    g[e] === m.OGo.PENDING_INCOMING && (delete g[e], I.delete(e));
                }),
                C();
        }
    }));
