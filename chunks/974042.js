n(653041);
var i, s = n(392711), a = n.n(s), r = n(442837), l = n(570140), o = n(194359), c = n(81825), d = n(5254), u = n(199902), _ = n(271383), E = n(430824), h = n(158776), I = n(699516), m = n(594174), p = n(981631);
function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
function T(e) {
    let t = m.default.getUser(e);
    return {
        user: t,
        usernameLower: null != t ? t.username.toLowerCase() : null
    };
}
function S(e) {
    return {
        status: h.Z.getStatus(e),
        lastOnlineTimestamp: h.Z.getLastOnlineTimestamp(e),
        isMobile: h.Z.isMobileOnline(e),
        activities: h.Z.getActivities(e),
        applicationStream: u.Z.getAnyStreamForUser(e)
    };
}
function C(e) {
    let t = [];
    return a()(_.ZP.memberOf(e)).map(E.Z.getGuild).sortBy(e => null != e ? e.name.toLowerCase() : null).forEach(e => {
        null != e && t.push(e);
    }), {
        mutualGuildsLength: t.length,
        mutualGuilds: t.slice(0, 5)
    };
}
class N extends c.Z {
    get comparator() {
        var e, t, n, i, s;
        return [
            this.type,
            null !== (s = null !== (i = null === (e = this.nickname) || void 0 === e ? void 0 : e.toLowerCase()) && void 0 !== i ? i : null === (n = this.user) || void 0 === n ? void 0 : null === (t = n.globalName) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== s ? s : this.usernameLower
        ];
    }
    constructor(e) {
        super(), g(this, 'key', void 0), g(this, 'type', void 0), g(this, 'status', void 0), g(this, 'isMobile', void 0), g(this, 'activities', void 0), g(this, 'applicationStream', void 0), g(this, 'user', void 0), g(this, 'usernameLower', void 0), g(this, 'mutualGuildsLength', void 0), g(this, 'mutualGuilds', void 0), g(this, 'nickname', void 0), g(this, 'lastOnlineTimestamp', void 0), this.key = e.key, this.type = e.type, this.status = e.status, this.activities = e.activities, this.applicationStream = e.applicationStream, this.user = e.user, this.isMobile = e.isMobile, this.usernameLower = e.usernameLower, this.mutualGuildsLength = e.mutualGuildsLength, this.mutualGuilds = e.mutualGuilds, this.nickname = e.nickname, this.lastOnlineTimestamp = e.lastOnlineTimestamp;
    }
}
class f {
    reset() {
        let e = a().map(I.Z.getRelationships(), (e, t) => new N({
                key: t,
                type: e,
                nickname: I.Z.getNickname(t),
                ...T(t),
                ...S(t),
                ...C(t)
            })), t = a().map(d.Z.getSuggestions(), e => new N({
                key: e.key,
                type: 99,
                nickname: e.name,
                ...T(e.key),
                ...S(e.key),
                ...C(e.key)
            }));
        return new f(a().concat(e, t));
    }
    clone() {
        return new f(this._rows);
    }
    update(e) {
        let t = !1;
        for (let n = 0; n < this._rows.length; n++) {
            let i = this._rows[n], s = i.merge(e(i.key));
            t = t || s !== i, this._rows[n] = s;
        }
        return t;
    }
    filter(e, t) {
        return a()(this._rows).filter(e => {
            if (null == e.user)
                return !1;
            if (null != t && '' !== t) {
                let n = t.toLowerCase();
                return [
                    e.usernameLower,
                    e.nickname,
                    e.user.globalName
                ].map(e => null == e ? void 0 : e.toLowerCase()).some(e => null == e ? void 0 : e.includes(n));
            }
            return !0;
        }).filter(t => {
            switch (e) {
            case p.pJs.ONLINE:
                return t.type === p.OGo.FRIEND && t.status !== p.Skl.OFFLINE;
            case p.pJs.PENDING:
                return t.type === p.OGo.PENDING_INCOMING || t.type === p.OGo.PENDING_OUTGOING;
            case p.pJs.SUGGESTIONS:
                return 99 === t.type;
            case p.pJs.BLOCKED:
                return t.type === p.OGo.BLOCKED;
            case p.pJs.ALL:
            default:
                return t.type === p.OGo.FRIEND;
            }
        }).sortBy(e => e.comparator).value();
    }
    getRelationshipCounts() {
        let e = {
            [p.OGo.FRIEND]: 0,
            [p.OGo.PENDING_INCOMING]: 0,
            [p.OGo.PENDING_OUTGOING]: 0,
            99: 0,
            [p.OGo.BLOCKED]: 0
        };
        return this._rows.forEach(t => {
            null != t.user && null != e[t.type] && e[t.type]++;
        }), e;
    }
    constructor(e = []) {
        g(this, '_rows', void 0), this._rows = e;
    }
}
let A = !0, Z = !1, L = p.pJs.ONLINE, v = new f(), O = !0, R = !1;
function x() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    A && (e || L !== p.pJs.ONLINE && L !== p.pJs.ADD_FRIEND) && !Z && (A = !1, Z = !0, o.Z.fetchRelationships());
}
function P() {
    if (A = !0, O ? Z = !1 : x(), v = v.reset(), R)
        return;
    let e = v.getRelationshipCounts();
    L = 0 === e[p.OGo.FRIEND] ? 0 !== e[p.OGo.PENDING_INCOMING] ? p.pJs.PENDING : p.pJs.ADD_FRIEND : p.pJs.ONLINE;
}
function b() {
    v = O ? new f() : v.reset();
}
function M(e) {
    return function () {
        return !O && !!v.update(e) && (v = v.clone(), !0);
    };
}
class D extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(I.Z, h.Z, m.default, E.Z, _.ZP, u.Z, d.Z), this.syncWith([I.Z], b), this.syncWith([d.Z], b), this.syncWith([m.default], M(T)), this.syncWith([
            h.Z,
            u.Z
        ], M(S)), P();
    }
    getState() {
        return {
            fetching: Z,
            section: L,
            pendingCount: I.Z.getPendingCount(),
            rows: v
        };
    }
}
g(D, 'displayName', 'FriendsStore'), t.ZP = new D(l.Z, {
    CONNECTION_OPEN: function () {
        P();
    },
    FRIENDS_SET_SECTION: function (e) {
        L = e.section, x();
    },
    CHANNEL_SELECT: function (e) {
        let {channelId: t} = e;
        return O = null != t, b(), !O;
    },
    LOAD_RELATIONSHIPS_SUCCESS: function () {
        Z = !1;
    },
    LOAD_RELATIONSHIPS_FAILURE: function () {
        A = !0, Z = !0;
    },
    DRAWER_SELECT_TAB: function (e) {
        let {tab: t} = e;
        return O = t !== p.cII.FRIENDS, b(), !O;
    },
    FRIENDS_SET_INITIAL_SECTION: function (e) {
        L = e.section, R = !0;
    }
});
