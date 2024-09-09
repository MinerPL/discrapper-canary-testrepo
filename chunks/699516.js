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
    _ = n(23750),
    E = n(709054),
    f = n(594174),
    h = n(981631);
let p = {},
    I = {},
    m = {},
    T = new Set(),
    S = 0,
    g = 0,
    A = 0,
    N = 0,
    O = 0;
function R() {
    N = Object.values(p).length;
    let { [h.OGo.PENDING_INCOMING]: e = 0, [h.OGo.PENDING_OUTGOING]: t = 0, [h.OGo.FRIEND]: n = 0 } = l().countBy(Object.values(p), (e) => e);
    (g = t), (A = n), (S = e - (O = T.size));
}
class v extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(f.default);
    }
    isFriend(e) {
        return null != e && p[e] === h.OGo.FRIEND;
    }
    isBlocked(e) {
        return null != e && p[e] === h.OGo.BLOCKED;
    }
    isBlockedForMessage(e) {
        var t, n, r, i;
        if (null != e.author && p[e.author.id] === h.OGo.BLOCKED) return !0;
        if (e instanceof _.ZP) {
            if (this.isBlocked(null === (i = e.interactionMetadata) || void 0 === i ? void 0 : null === (r = i.user) || void 0 === r ? void 0 : r.id)) return !0;
        } else if (this.isBlocked(null === (n = e.interaction_metadata) || void 0 === n ? void 0 : null === (t = n.user) || void 0 === t ? void 0 : t.id)) return !0;
        return !1;
    }
    getPendingCount() {
        return S;
    }
    getSpamCount() {
        return (0, d.A)({ location: 'friend_request_spam_inbox' }) ? O : 0;
    }
    getOutgoingCount() {
        return g;
    }
    getFriendCount() {
        return A;
    }
    getRelationshipCount() {
        return N;
    }
    getRelationships() {
        return p;
    }
    isSpam(e) {
        return (0, d.A)({ location: 'friend_request_spam_inbox' }) && T.has(e);
    }
    getRelationshipType(e) {
        let t = p[e];
        return null != t ? t : h.OGo.NONE;
    }
    getNickname(e) {
        return I[e];
    }
    getSince(e) {
        return m[e];
    }
    getSinces() {
        return m;
    }
    getFriendIDs() {
        return E.default.keys(p).filter((e) => p[e] === h.OGo.FRIEND);
    }
    getBlockedIDs() {
        return E.default.keys(p).filter((e) => p[e] === h.OGo.BLOCKED);
    }
}
(s = 'RelationshipStore'),
    (a = 'displayName') in (i = v)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new v(c.Z, {
        CONNECTION_OPEN: function (e) {
            (p = {}),
                (I = {}),
                (m = {}),
                e.relationships.forEach((e) => {
                    (p[e.id] = e.type), null != e.nickname && (I[e.id] = e.nickname), null != e.since && (m[e.id] = e.since), (0, d.A)({ location: 'friend_request_spam_inbox' }) && e.is_spam_request && T.add(e.id);
                }),
                R();
        },
        OVERLAY_INITIALIZE: function (e) {
            (p = { ...e.relationships }), R();
        },
        RELATIONSHIP_ADD: function (e) {
            let t = p[e.relationship.id];
            (p = {
                ...p,
                [e.relationship.id]: e.relationship.type
            }),
                null != e.relationship.nickname &&
                    (I = {
                        ...I,
                        [e.relationship.id]: e.relationship.nickname
                    }),
                null != e.relationship.since &&
                    (m = {
                        ...m,
                        [e.relationship.id]: e.relationship.since
                    }),
                (0, d.A)({ location: 'relationship_store' }) && e.relationship.isSpamRequest ? T.add(e.relationship.id) : T.delete(e.relationship.id),
                R(),
                e.relationship.type === h.OGo.FRIEND &&
                    t === h.OGo.PENDING_OUTGOING &&
                    c.Z.dispatch({
                        type: 'FRIEND_REQUEST_ACCEPTED',
                        user: e.relationship.user
                    });
        },
        RELATIONSHIP_REMOVE: function (e) {
            (p = { ...p }), delete p[e.relationship.id], null != I[e.relationship.id] && ((I = { ...I }), delete I[e.relationship.id]), null != m[e.relationship.id] && ((m = { ...m }), delete m[e.relationship.id]), T.delete(e.relationship.id), R();
        },
        RELATIONSHIP_UPDATE: function (e) {
            null == e.relationship.since ? delete m[e.relationship.id] : (m[e.relationship.id] = e.relationship.since), null == e.relationship.nickname ? delete I[e.relationship.id] : (I[e.relationship.id] = e.relationship.nickname), (0, d.A)({ location: 'relationship_store' }) && e.relationship.isSpamRequest ? T.add(e.relationship.id) : T.delete(e.relationship.id);
        },
        RELATIONSHIP_PENDING_INCOMING_REMOVED: function (e) {
            (p = { ...p }),
                E.default.keys(p).forEach((e) => {
                    p[e] === h.OGo.PENDING_INCOMING && (delete p[e], T.delete(e));
                }),
                R();
        }
    }));
