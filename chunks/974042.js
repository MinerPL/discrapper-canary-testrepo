n(653041);
var i,
    a = n(392711),
    s = n.n(a),
    r = n(442837),
    l = n(570140),
    o = n(194359),
    c = n(81825),
    d = n(5254),
    u = n(735778),
    _ = n(199902),
    E = n(271383),
    h = n(430824),
    m = n(158776),
    I = n(699516),
    g = n(594174),
    p = n(981631);
function T(e, t, n) {
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
function S(e) {
    let t = g.default.getUser(e);
    return {
        user: t,
        usernameLower: null != t ? t.username.toLowerCase() : null
    };
}
function C(e) {
    return {
        status: m.Z.getStatus(e),
        isMobile: m.Z.isMobileOnline(e),
        activities: m.Z.getActivities(e),
        applicationStream: _.Z.getAnyStreamForUser(e)
    };
}
function f(e) {
    let t = [];
    return (
        s()(E.ZP.memberOf(e))
            .map(h.Z.getGuild)
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
class N extends c.Z {
    get comparator() {
        var e, t, n, i, a;
        return [this.type, null !== (a = null !== (i = null === (e = this.nickname) || void 0 === e ? void 0 : e.toLowerCase()) && void 0 !== i ? i : null === (n = this.user) || void 0 === n ? void 0 : null === (t = n.globalName) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== a ? a : this.usernameLower];
    }
    constructor(e) {
        super(), T(this, 'key', void 0), T(this, 'type', void 0), T(this, 'status', void 0), T(this, 'isMobile', void 0), T(this, 'activities', void 0), T(this, 'applicationStream', void 0), T(this, 'user', void 0), T(this, 'usernameLower', void 0), T(this, 'mutualGuildsLength', void 0), T(this, 'mutualGuilds', void 0), T(this, 'nickname', void 0), T(this, 'spam', void 0), (this.key = e.key), (this.type = e.type), (this.status = e.status), (this.activities = e.activities), (this.applicationStream = e.applicationStream), (this.user = e.user), (this.isMobile = e.isMobile), (this.usernameLower = e.usernameLower), (this.mutualGuildsLength = e.mutualGuildsLength), (this.mutualGuilds = e.mutualGuilds), (this.nickname = e.nickname), (this.spam = e.spam);
    }
}
class A {
    reset() {
        let e = s().map(
                I.Z.getRelationships(),
                (e, t) =>
                    new N({
                        key: t,
                        type: e,
                        nickname: I.Z.getNickname(t),
                        ...S(t),
                        ...C(t),
                        ...f(t),
                        spam: (0, u.A)({ location: 'friend-store' }) && I.Z.isSpam(t)
                    })
            ),
            t = s().map(
                d.Z.getSuggestions(),
                (e) =>
                    new N({
                        key: e.key,
                        type: 99,
                        nickname: e.name,
                        ...S(e.key),
                        ...C(e.key),
                        ...f(e.key)
                    })
            );
        return new A(s().concat(e, t));
    }
    clone() {
        return new A(this._rows);
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
                    case p.pJs.ONLINE:
                        return t.type === p.OGo.FRIEND && t.status !== p.Skl.OFFLINE;
                    case p.pJs.PENDING:
                        return (t.type === p.OGo.PENDING_INCOMING && (!(0, u.A)({ location: 'friends-store' }) || !t.spam)) || t.type === p.OGo.PENDING_OUTGOING;
                    case p.pJs.SPAM:
                        return t.type === p.OGo.PENDING_INCOMING && t.spam;
                    case p.pJs.SUGGESTIONS:
                        return 99 === t.type;
                    case p.pJs.BLOCKED:
                        return t.type === p.OGo.BLOCKED;
                    case p.pJs.ALL:
                    default:
                        return t.type === p.OGo.FRIEND;
                }
            })
            .sortBy((e) => e.comparator)
            .value();
    }
    getRelationshipCounts() {
        let e = {
            [p.OGo.FRIEND]: 0,
            [p.OGo.PENDING_INCOMING]: 0,
            [p.OGo.PENDING_OUTGOING]: 0,
            99: 0,
            [p.OGo.BLOCKED]: 0
        };
        return (
            this._rows.forEach((t) => {
                null != t.user && null != e[t.type] && e[t.type]++;
            }),
            e
        );
    }
    constructor(e = []) {
        T(this, '_rows', void 0), (this._rows = e);
    }
}
let v = !0,
    L = !1,
    Z = p.pJs.ONLINE,
    R = new A(),
    O = !0,
    x = !1;
function b() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    v && (e || (Z !== p.pJs.ONLINE && Z !== p.pJs.ADD_FRIEND)) && !L && ((v = !1), (L = !0), o.Z.fetchRelationships());
}
function P() {
    if (((v = !0), O ? (L = !1) : b(), (R = R.reset()), x)) return;
    let e = R.getRelationshipCounts();
    Z = 0 === e[p.OGo.FRIEND] ? (0 !== e[p.OGo.PENDING_INCOMING] ? p.pJs.PENDING : p.pJs.ADD_FRIEND) : p.pJs.ONLINE;
}
function M() {
    R = O ? new A() : R.reset();
}
function D(e) {
    return function () {
        return !O && !!R.update(e) && ((R = R.clone()), !0);
    };
}
class y extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(I.Z, m.Z, g.default, h.Z, E.ZP, _.Z, d.Z), this.syncWith([I.Z], M), this.syncWith([d.Z], M), this.syncWith([g.default], D(S)), this.syncWith([m.Z, _.Z], D(C)), P();
    }
    getState() {
        return {
            fetching: L,
            section: Z,
            pendingCount: I.Z.getPendingCount(),
            rows: R
        };
    }
}
T(y, 'displayName', 'FriendsStore'),
    (t.ZP = new y(l.Z, {
        CONNECTION_OPEN: function () {
            P();
        },
        FRIENDS_SET_SECTION: function (e) {
            (Z = e.section), b();
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return (O = null != t), M(), !O;
        },
        LOAD_RELATIONSHIPS_SUCCESS: function () {
            L = !1;
        },
        LOAD_RELATIONSHIPS_FAILURE: function () {
            (v = !0), (L = !0);
        },
        DRAWER_SELECT_TAB: function (e) {
            let { tab: t } = e;
            return (O = t !== p.cII.FRIENDS), M(), !O;
        },
        FRIENDS_SET_INITIAL_SECTION: function (e) {
            (Z = e.section), (x = !0);
        }
    }));
