let i, s, l;
n(47120), n(653041);
var r, a, d, o, h, u, c = n(913527), C = n.n(c), g = n(442837), p = n(759174), f = n(570140), v = n(57132), I = n(781157), E = n(355298), y = n(333984), S = n(131704), _ = n(592125), m = n(430824), w = n(306680), b = n(9156), N = n(594174), L = n(709054), Z = n(176505);
(d = r || (r = {})).DEFAULT = 'DEFAULT', d.FAVORITE = 'FAVORITE';
let A = new p.h(e => {
    let {
        isRequest: t,
        isFavorite: n
    } = e;
    return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
}, e => {
    let {lastMessageId: t} = e;
    return -t;
});
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function (e) {
        var t, n;
        let i = null !== (n = null !== (t = w.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id, s = e.isMessageRequestTimestamp;
        if (null != s) {
            let e = C()(s).valueOf(), t = L.default.fromTimestamp(e);
            return L.default.compare(i, t) > 0 ? i : t;
        }
        return i;
    }(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: b.ZP.isMessagesFavorite(e.id) && (0, v.cn)(),
        isRequest: E.Z.isMessageRequest(e.id) || y.Z.isSpam(e.id)
    };
}
function R() {
    A.clear(), Object.values(_.Z.getMutablePrivateChannels()).forEach(e => {
        A.set(e.id, P(e));
    }), (0, v.cn)() && (0, I.x7)() && b.ZP.getAddedToMessages().forEach(e => {
        let t = _.Z.getChannel(e);
        null != t && (0, S.zi)(t.type) && A.set(t.id, P(t));
    });
}
function O() {
    let e = _.Z.getMutablePrivateChannels();
    for (let t in e)
        A.set(t, P(e[t]));
}
let T = (i = [], s = [], l = [], () => {
    let e = A.values('FAVORITE'), t = A.values('DEFAULT');
    return (i !== e || s !== t) && (l = [], e.forEach(e => {
        let {channelId: t} = e;
        return l.push(t);
    }), i = e, t.forEach(e => {
        let {channelId: t} = e;
        return l.push(t);
    }), s = t), l;
});
class D extends (a = g.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, m.Z, N.default, E.Z, b.ZP), this.syncWith([
            b.ZP,
            E.Z
        ], R);
    }
    getPrivateChannelIds() {
        return T();
    }
    getSortedChannels() {
        return [
            A.values('FAVORITE'),
            A.values('DEFAULT')
        ];
    }
    serializeForOverlay() {
        let e = {};
        return A.values().forEach(t => {
            let {
                channelId: n,
                lastMessageId: i
            } = t;
            e[n] = i;
        }), e;
    }
}
u = 'PrivateChannelSortStore', (h = 'displayName') in (o = D) ? Object.defineProperty(o, h, {
    value: u,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : o[h] = u, t.Z = new D(f.Z, {
    CONNECTION_OPEN: R,
    CONNECTION_OPEN_SUPPLEMENTAL: R,
    OVERLAY_INITIALIZE: R,
    CACHE_LOADED: O,
    CACHE_LOADED_LAZY: O,
    CHANNEL_UPDATES: function (e) {
        let {channels: t} = e;
        t.forEach(e => {
            ((0, S.hv)(e.type) || A.has(e.id)) && A.set(e.id, P(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let {channel: t} = e;
        if (!(0, S.hv)(t.type) || t.id === Z.V)
            return !1;
        A.set(t.id, P(t));
    },
    CHANNEL_DELETE: function (e) {
        let {channel: t} = e;
        return A.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let {
            channelId: t,
            message: n
        } = e;
        if (!A.has(t))
            return !1;
        let i = _.Z.getChannel(t);
        return null != i && A.set(t, P(i, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return A.delete(t);
    },
    LOGOUT: function () {
        A.clear();
    }
});
