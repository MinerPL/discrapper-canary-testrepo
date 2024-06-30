n.d(t, {
    CR: function () {
        return D;
    },
    oL: function () {
        return L;
    },
    so: function () {
        return r;
    }
}), n(724458), n(653041), n(47120);
var r, i, a, o = n(392711), s = n.n(o), l = n(108131), u = n.n(l), c = n(149765), d = n(442837), _ = n(570140), E = n(353926), f = n(280234), h = n(653733), p = n(700785), m = n(199902), I = n(314897), T = n(592125), g = n(650774), S = n(271383), A = n(430824), N = n(158776), v = n(885110), O = n(594174), R = n(981631), C = n(689938);
function y(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let D = 'everyone', L = 0;
function b(e, t, n, r) {
    switch (t) {
    case R.Skl.ONLINE:
    case R.Skl.OFFLINE:
    case R.Skl.UNKNOWN:
        return {
            type: 'GROUP',
            key: t,
            id: t,
            get title() {
                switch (t) {
                case R.Skl.ONLINE:
                    return C.Z.Messages.STATUS_ONLINE;
                case R.Skl.OFFLINE:
                    return C.Z.Messages.STATUS_OFFLINE;
                default:
                    return C.Z.Messages.STATUS_UNKNOWN;
                }
            },
            count: n,
            index: r
        };
    case 'recently-online':
        return {
            type: 'GROUP',
            key: t,
            id: t,
            get title() {
                return C.Z.Messages.RECENTLY_ONLINE;
            },
            count: n,
            index: r
        };
    default:
        let i = A.Z.getGuild(e), a = null != i ? A.Z.getRole(i.id, t) : null;
        return {
            type: 'GROUP',
            key: t,
            id: t,
            title: null != a ? a.name : '',
            count: n,
            index: r
        };
    }
}
function M(e, t, n) {
    let r = n === I.default.getId(), i = N.Z.isMobileOnline(n), a = r ? v.Z.getStatus() : N.Z.getStatus(n, e), o = r ? v.Z.getActivities() : N.Z.getActivities(n, e), s = m.Z.getStreamForUser(n, e), l = O.default.getUser(n), u = N.Z.getLastOnlineTimestamp(n), {isRecentlyOnlineShowable: c} = (0, f.$)(u);
    return null == l ? null : {
        type: 'MEMBER',
        ...S.ZP.getMember(e, n),
        user: l,
        status: a,
        activities: o,
        applicationStream: s,
        isOwner: t === n,
        isMobileOnline: i,
        lastOnlineTimestamp: c ? u : void 0
    };
}
function P(e) {
    let t = T.Z.getChannel(e);
    return null == t ? D : null == t.memberListId ? function (e) {
        return p.oz(R.Plq.VIEW_CHANNEL, e) ? D : u().v3(s()(e.permissionOverwrites).reduce((e, t) => {
            let {
                id: n,
                allow: r,
                deny: i
            } = t;
            return c.e$(r, R.Plq.VIEW_CHANNEL) ? e.push('allow:'.concat(n)) : c.e$(i, R.Plq.VIEW_CHANNEL) && e.push('deny:'.concat(n)), e;
        }, []).sort().join(',')).toString();
    }(t) : t.memberListId;
}
(a = r || (r = {})).GROUP = 'GROUP', a.MEMBER = 'MEMBER', a.CONTENT_INVENTORY = 'CONTENT_INVENTORY', a.CONTENT_INVENTORY_GROUP = 'CONTENT_INVENTORY_GROUP', a.HIDDEN_CONTENT_INVENTORY = 'HIDDEN_CONTENT_INVENTORY';
class U {
    updateOwnerId() {
        let e = A.Z.getGuild(this.guildId);
        if (null == e)
            return !1;
        let t = p.iJ(e);
        return this.ownerId !== t && (this.ownerId = t, !0);
    }
    setGroups(e) {
        let t = 0;
        this.groups = e.map(e => {
            var n;
            let r = t, i = Math.max(0, null !== (n = e.count) && void 0 !== n ? n : 0);
            return t += i + 1, b(this.guildId, e.id, i, r);
        }), this.rows.length = t;
    }
    sync(e, t) {
        let [n] = e;
        t.forEach((e, t) => this.update(n + t, e));
    }
    invalidate(e) {
        let [t, n] = e;
        for (let e = t; e <= n; e++) {
            let t = this.rows[e];
            if (null == t)
                break;
            delete this.rows[e], 'MEMBER' === t.type && delete this.members[t.user.id];
        }
        this.version++;
    }
    insert(e, t) {
        let {
            group: n,
            member: r
        } = t;
        if (null != n)
            this.rows.splice(e, 0, b(this.guildId, n.id, n.count));
        else if (null != r) {
            let t = M(this.guildId, this.ownerId, r.user.id);
            if (null == t)
                return;
            this.rows.splice(e, 0, t), this.members[r.user.id] = t;
        }
        this.version++;
    }
    update(e, t) {
        let {
                group: n,
                member: r
            } = t, i = this.rows[e];
        if (null != i && 'MEMBER' === i.type && delete this.members[i.user.id], null != n)
            this.rows[e] = b(this.guildId, n.id, n.count);
        else if (null != r) {
            let t = M(this.guildId, this.ownerId, r.user.id);
            if (null == t)
                return;
            this.rows[e] = t, this.members[r.user.id] = t;
        }
        this.version++;
    }
    delete(e) {
        let t = this.rows[e];
        if (null != t)
            'MEMBER' === t.type && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++;
    }
    rebuildMember(e, t) {
        let n = this.members[e];
        if (null != n)
            Object.assign(n, M(this.guildId, this.ownerId, e)), t && this.syncRecentlyOfflineList(), this.version++;
    }
    rebuildMembers() {
        let e = Object.keys(this.members);
        for (let t = 0; t < e.length; t++) {
            let n = e[t];
            this.rebuildMember(n, t === e.length);
        }
    }
    syncRecentlyOfflineList() {
        var e, t;
        let {isRecentlyOnlineUIEnabled: n} = (0, h.h)(this.guildId);
        if (!n || this.rows.length >= 99) {
            this.experimentalGroups = [], this.experimentalRows = [];
            return;
        }
        let r = [], i = [], a = this.rows.findIndex(e => null != e && 'GROUP' === e.type && e.id === R.Skl.OFFLINE);
        if (a < 0) {
            this.experimentalGroups = [], this.experimentalRows = [];
            return;
        }
        let o = [];
        for (let e = 0; e < a; e++)
            o.push(this.rows[e]);
        for (let e = a; e < this.rows.length; e++) {
            let t = this.rows[e];
            if (null != t && 'MEMBER' === t.type) {
                if (t.status === R.Skl.OFFLINE && null != t.lastOnlineTimestamp) {
                    let e = { ...t };
                    r.push(e);
                } else
                    (t.status === R.Skl.OFFLINE || t.status === R.Skl.INVISIBLE) && i.push({ ...t });
            }
        }
        r.sort((e, t) => {
            var n, r;
            return (null !== (n = t.lastOnlineTimestamp) && void 0 !== n ? n : 0) - (null !== (r = e.lastOnlineTimestamp) && void 0 !== r ? r : 0);
        });
        let s = [...this.groups];
        if (s = s.filter(e => e.id !== R.Skl.OFFLINE), r.length > 0) {
            let t = s[s.length - 1], n = null != t ? (null !== (e = t.index) && void 0 !== e ? e : 0) + t.count + 1 : 0, i = b(this.guildId, 'recently-online', r.length, n);
            s.push(i), o.push(i), o.push(...r);
        }
        if (i.length > 0) {
            let e = s[s.length - 1], n = null != e ? (null !== (t = e.index) && void 0 !== t ? t : 0) + e.count + 1 : 0, r = b(this.guildId, R.Skl.OFFLINE, i.length, n);
            s.push(r), o.push(r), o.push(...i);
        }
        this.experimentalGroups = s, this.experimentalRows = o;
    }
    constructor(e, t) {
        y(this, 'guildId', void 0), y(this, 'listId', void 0), y(this, 'ownerId', void 0), y(this, 'rows', []), y(this, 'experimentalRows', []), y(this, 'groups', []), y(this, 'experimentalGroups', []), y(this, 'members', {}), y(this, 'version', 0), this.guildId = e, this.listId = t, this.updateOwnerId();
    }
}
let w = new class e {
    get(e, t) {
        let n = this._guildLists[e];
        null == n && (n = this._guildLists[e] = {});
        let r = n[t];
        return null == r && ((r = new U(e, t)).setGroups([{
                id: R.Skl.UNKNOWN,
                count: 0
            }]), n[t] = r), r;
    }
    forEach(e, t) {
        if (null == e)
            s().forEach(this._guildLists, e => {
                s().forEach(e, t);
            });
        else {
            let n = this._guildLists[e];
            null != n && s().forEach(n, t);
        }
    }
    delete(e) {
        delete this._guildLists[e];
    }
    reset() {
        this._guildLists = {};
    }
    constructor() {
        y(this, '_guildLists', {});
    }
}();
function x() {
    w.reset();
}
let G = [];
function k() {
    let e = m.Z.getAllApplicationStreams(), t = G.concat(e);
    G = e, t.forEach(e => {
        w.forEach(null, t => t.rebuildMember(e.ownerId, !0));
    });
}
function B() {
    let e = I.default.getId();
    w.forEach(null, t => t.rebuildMember(e, !0));
}
class F extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(O.default, A.Z, T.Z, S.ZP, N.Z, v.Z, I.default, g.Z, m.Z, E.Z), this.syncWith([v.Z], B), this.syncWith([m.Z], k);
    }
    getProps(e, t) {
        let n = w.get(e, P(t));
        return n.experimentalRows.length > 0 && n.experimentalGroups.length > 0 ? {
            listId: ''.concat(n.guildId, ':').concat(n.listId),
            groups: n.experimentalGroups,
            rows: n.experimentalRows,
            version: n.version,
            isRecentlyOnlineEnabled: !0
        } : {
            listId: ''.concat(n.guildId, ':').concat(n.listId),
            groups: n.groups,
            rows: n.rows,
            version: n.version,
            isRecentlyOnlineEnabled: !1
        };
    }
    getRows(e, t) {
        return w.get(e, P(t)).rows;
    }
}
y(F, 'displayName', 'ChannelMemberStore'), t.ZP = new F(_.Z, {
    CONNECTION_OPEN: x,
    OVERLAY_INITIALIZE: x,
    GUILD_MEMBER_LIST_UPDATE: function (e) {
        let t = w.get(e.guildId, e.id);
        e.ops.forEach(e => {
            switch (e.op) {
            case 'SYNC':
                t.sync(e.range, e.items);
                break;
            case 'INVALIDATE':
                t.invalidate(e.range);
                break;
            case 'INSERT':
                t.insert(e.index, e.item);
                break;
            case 'UPDATE':
                t.update(e.index, e.item);
                break;
            case 'DELETE':
                t.delete(e.index);
            }
        }), t.setGroups(e.groups), t.syncRecentlyOfflineList();
    },
    GUILD_UPDATE: function (e) {
        let {guild: t} = e;
        w.forEach(t.id, e => {
            e.updateOwnerId() && e.rebuildMembers();
        });
    },
    GUILD_DELETE: function (e) {
        let {guild: t} = e;
        w.delete(t.id);
    },
    GUILD_ROLE_UPDATE: function (e) {
        let {guildId: t} = e;
        w.forEach(t, e => e.rebuildMembers());
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let {
            guildId: t,
            user: n
        } = e;
        w.forEach(t, e => e.rebuildMember(n.id, !0));
    },
    CHANNEL_UPDATES: function () {
        return !0;
    }
});
