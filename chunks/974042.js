n(653041);
var i,
    a = n(392711),
    s = n.n(a),
    r = n(442837),
    l = n(570140),
    o = n(194359),
    c = n(81825),
    d = n(5254),
    u = n(441623),
    _ = n(735778),
    E = n(199902),
    h = n(271383),
    m = n(430824),
    I = n(158776),
    p = n(699516),
    g = n(594174),
    T = n(981631),
    f = n(474936);
function S(e, t, n) {
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
function C(e) {
    let t = g.default.getUser(e);
    return {
        user: t,
        usernameLower: null != t ? t.username.toLowerCase() : null
    };
}
function N(e) {
    return {
        status: I.Z.getStatus(e),
        isMobile: I.Z.isMobileOnline(e),
        activities: I.Z.getActivities(e),
        applicationStream: E.Z.getAnyStreamForUser(e)
    };
}
function A(e) {
    let t = [];
    return (
        s()(h.ZP.memberOf(e))
            .map(m.Z.getGuild)
            .sortBy((e) => (null != e ? e.name.toLowerCase() : null))
            .forEach((e) => {
                null != e && t.push(e);
            }),
        {
            mutualGuildsLength: t.length,
            mutualGuilds: t.slice(0, 5)
        }
    );
}
class v extends c.Z {
    get comparator() {
        var e, t, n, i, a;
        return [this.type, null != this.giftIntentType ? 0 : 1, null !== (a = null !== (i = null === (e = this.nickname) || void 0 === e ? void 0 : e.toLowerCase()) && void 0 !== i ? i : null === (n = this.user) || void 0 === n ? void 0 : null === (t = n.globalName) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== a ? a : this.usernameLower];
    }
    constructor(e) {
        super(), S(this, 'key', void 0), S(this, 'type', void 0), S(this, 'status', void 0), S(this, 'isMobile', void 0), S(this, 'activities', void 0), S(this, 'applicationStream', void 0), S(this, 'user', void 0), S(this, 'usernameLower', void 0), S(this, 'mutualGuildsLength', void 0), S(this, 'mutualGuilds', void 0), S(this, 'nickname', void 0), S(this, 'spam', void 0), S(this, 'giftIntentType', void 0), (this.key = e.key), (this.type = e.type), (this.status = e.status), (this.activities = e.activities), (this.applicationStream = e.applicationStream), (this.user = e.user), (this.isMobile = e.isMobile), (this.usernameLower = e.usernameLower), (this.mutualGuildsLength = e.mutualGuildsLength), (this.mutualGuilds = e.mutualGuilds), (this.nickname = e.nickname), (this.spam = e.spam), (this.giftIntentType = e.giftIntentType);
    }
}
class Z {
    reset() {
        let e = s().map(
                p.Z.getRelationships(),
                (e, t) =>
                    new v({
                        key: t,
                        type: e,
                        nickname: p.Z.getNickname(t),
                        ...C(t),
                        ...N(t),
                        ...A(t),
                        spam: (0, _.A)({ location: 'friend-store' }) && p.Z.isSpam(t),
                        giftIntentType: e === T.OGo.FRIEND && u.Z.isTopAffinityFriendAnniversary({ userId: t }) ? f.hX.FRIEND_ANNIVERSARY : void 0
                    })
            ),
            t = s().map(
                d.Z.getSuggestions(),
                (e) =>
                    new v({
                        key: e.key,
                        type: 99,
                        nickname: e.name,
                        ...C(e.key),
                        ...N(e.key),
                        ...A(e.key)
                    })
            );
        return new Z(s().concat(e, t));
    }
    clone() {
        return new Z(this._rows);
    }
    update(e) {
        let t = !1;
        for (let n = 0; n < this._rows.length; n++) {
            let i = this._rows[n],
                a = i.merge(e(i.key));
            (t = t || a !== i), (this._rows[n] = a);
        }
        return t;
    }
    filter(e, t) {
        return s()(this._rows)
            .filter((e) => {
                if (null == e.user) return !1;
                if (null != t && '' !== t) {
                    let n = t.toLowerCase();
                    return [e.usernameLower, e.nickname, e.user.globalName].map((e) => (null == e ? void 0 : e.toLowerCase())).some((e) => (null == e ? void 0 : e.includes(n)));
                }
                return !0;
            })
            .filter((t) => {
                switch (e) {
                    case T.pJs.ONLINE:
                        return t.type === T.OGo.FRIEND && t.status !== T.Skl.OFFLINE;
                    case T.pJs.PENDING:
                        return (t.type === T.OGo.PENDING_INCOMING && (!(0, _.A)({ location: 'friends-store' }) || !t.spam)) || t.type === T.OGo.PENDING_OUTGOING;
                    case T.pJs.SPAM:
                        return t.type === T.OGo.PENDING_INCOMING && t.spam;
                    case T.pJs.SUGGESTIONS:
                        return 99 === t.type;
                    case T.pJs.BLOCKED:
                        return t.type === T.OGo.BLOCKED;
                    case T.pJs.ALL:
                    default:
                        return t.type === T.OGo.FRIEND;
                }
            })
            .sortBy((e) => e.comparator)
            .value();
    }
    getRelationshipCounts() {
        let e = {
            [T.OGo.FRIEND]: 0,
            [T.OGo.PENDING_INCOMING]: 0,
            [T.OGo.PENDING_OUTGOING]: 0,
            99: 0,
            [T.OGo.BLOCKED]: 0
        };
        return (
            this._rows.forEach((t) => {
                null != t.user && null != e[t.type] && e[t.type]++;
            }),
            e
        );
    }
    constructor(e = []) {
        S(this, '_rows', void 0), (this._rows = e);
    }
}
let L = !0,
    R = !1,
    O = T.pJs.ONLINE,
    x = new Z(),
    b = !0,
    M = !1;
function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    L && (e || (O !== T.pJs.ONLINE && O !== T.pJs.ADD_FRIEND)) && !R && ((L = !1), (R = !0), o.Z.fetchRelationships());
}
function D() {
    if (((L = !0), b ? (R = !1) : P(), (x = x.reset()), M)) return;
    let e = x.getRelationshipCounts();
    O = 0 === e[T.OGo.FRIEND] ? (0 !== e[T.OGo.PENDING_INCOMING] ? T.pJs.PENDING : T.pJs.ADD_FRIEND) : T.pJs.ONLINE;
}
function y() {
    x = b ? new Z() : x.reset();
}
function j(e) {
    return function () {
        return !b && !!x.update(e) && ((x = x.clone()), !0);
    };
}
class U extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, I.Z, g.default, m.Z, h.ZP, E.Z, d.Z), this.syncWith([p.Z], y), this.syncWith([d.Z], y), this.syncWith([u.Z], y), this.syncWith([g.default], j(C)), this.syncWith([I.Z, E.Z], j(N)), D();
    }
    getState() {
        return {
            fetching: R,
            section: O,
            pendingCount: p.Z.getPendingCount(),
            rows: x
        };
    }
}
S(U, 'displayName', 'FriendsStore'),
    (t.ZP = new U(l.Z, {
        CONNECTION_OPEN: function () {
            D();
        },
        FRIENDS_SET_SECTION: function (e) {
            (O = e.section), P();
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return (b = null != t), y(), !b;
        },
        LOAD_RELATIONSHIPS_SUCCESS: function () {
            R = !1;
        },
        LOAD_RELATIONSHIPS_FAILURE: function () {
            (L = !0), (R = !0);
        },
        DRAWER_SELECT_TAB: function (e) {
            let { tab: t } = e;
            return (b = t !== T.cII.FRIENDS), y(), !b;
        },
        FRIENDS_SET_INITIAL_SECTION: function (e) {
            (O = e.section), (M = !0);
        }
    }));
