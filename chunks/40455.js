n(47120);
var r = n(592125),
    i = n(650774),
    a = n(944486),
    s = n(412788),
    o = n(368321),
    l = n(553245),
    u = n(143806),
    c = n(814074),
    d = n(582142),
    _ = n(989263),
    E = n(872261);
function f(e, t, n) {
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
let h = null,
    p = new l.b(750, 500),
    m = new u.S(15),
    I = !1;
class T extends s.Z {
    initialize() {
        this.waitFor(r.Z), this.waitFor(a.Z), this.waitFor(i.Z), this.syncWith([o.Z], () => !0), this.syncWith([a.Z], g);
    }
    loadCache() {
        let e = this.readSnapshot(T.LATEST_SNAPSHOT_VERSION);
        null != e && ((I = !0), T.mergeSnapshot(e));
    }
    canEvictOrphans() {
        return I;
    }
    saveLimit(e) {
        let t = r.Z.getBasicChannel(e);
        return (null != t && (0, d.p)(t)) || (null != t && p.has(e)) ? 25 : 1;
    }
    getSaveableChannels() {
        let e = r.Z.getChannelIds(null).map((e) => ({
            guildId: null,
            channelId: e
        }));
        return o.Z.isLowDisk ? (null != h ? [...e, h] : e) : [...e, ...p.values()];
    }
    takeSnapshot() {
        return {
            version: T.LATEST_SNAPSHOT_VERSION,
            data: {
                channels: [...p.allValues()].filter((e) => !e.fallback),
                penalized: [...m.keys()],
                lastChannel: h
            }
        };
    }
    static mergeSnapshot(e) {
        let t = p,
            n = m;
        for (let n of ((p = new l.b(p.primaryCapacity, p.extendedCapacity)), (m = new u.S(m.capacity)), (h = null != h ? h : e.lastChannel), [e.channels, t.values()])) for (let e of n) !e.fallback && p.put(e.channelId, e);
        for (let t of [e.penalized, n.keys()]) for (let e of t) m.put(e, null);
    }
    static recordChannel(e) {
        let t = r.Z.getBasicChannel(e);
        if (null != t && (0, _.v)(t)) {
            var n;
            let r = {
                guildId: null !== (n = t.guild_id) && void 0 !== n ? n : null,
                channelId: e,
                channelType: t.type
            };
            (h = r), p.put(e, r), (0, c.Hr)(t) && null != m.put(e, null) && p.delete(e);
        }
    }
    static deleteChannel(e) {
        p.delete(e);
    }
    static deleteGuild(e) {
        for (let t of p.allValues()) t.guildId === e && p.delete(t.channelId);
    }
    static dropUnreachableChannels() {
        for (let e of p.keys()) {
            let t = r.Z.getBasicChannel(e);
            !(0, _.v)(t) && T.deleteChannel(e);
        }
    }
    static deleteUnreadableGuildChannels(e) {
        for (let t of p.values()) e === t.guildId && !(0, _.$)(t.channelId) && T.deleteChannel(t.channelId);
    }
    static replaceLru(e) {
        p = e;
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY_NO_CACHE: D,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: v,
            CHANNEL_UPDATES: N,
            CONNECTION_OPEN_SUPPLEMENTAL: S,
            GUILD_DELETE: C,
            LOGIN_SUCCESS: y,
            THREAD_DELETE: R,
            THREAD_UPDATE: O
        });
    }
}
function g() {
    let e = a.Z.getChannelId();
    null != e && T.recordChannel(e);
}
function S() {
    T.dropUnreachableChannels(), T.replaceLru((0, E.J)(p, 1250));
}
function A(e) {
    let t = e.id,
        n = (0, _.v)(e),
        r = a.Z.getChannelId();
    n && t === r && T.recordChannel(t), !n && T.deleteChannel(t);
}
function N(e) {
    for (let t of e.channels) A(t);
}
function v(e) {
    T.deleteChannel(e.channel.id);
}
function O(e) {
    A(e.channel);
}
function R(e) {
    T.deleteChannel(e.channel.id);
}
function C(e) {
    return !e.guild.unavailable && (T.deleteGuild(e.guild.id), !0);
}
function y(e) {
    p.clear(), m.clear(), (I = !1);
}
function D(e) {
    I = !0;
}
f(T, 'displayName', 'SaveableChannelsStore'), f(T, 'LATEST_SNAPSHOT_VERSION', 1), (t.ZP = new T());
