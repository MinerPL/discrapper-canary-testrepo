n(47120);
var r = n(147913), i = n(57132), a = n(914010), o = n(924301), s = n(482241);
let l = {}, u = new Set(), c = async e => {
        if (!(0 === o.ZP.getGuildScheduledEventsForGuild(e).length || u.has(e)))
            try {
                await s.Z.getGuildEventsForCurrentUser(e), u.add(e);
            } catch (e) {
            }
    };
class d extends r.Z {
    async getGuildEventUserCounts(e, t, n) {
        let r = n.filter(n => null == l[''.concat(e, '-').concat(t, '-').concat(n)] || Date.now() - l[''.concat(e, '-').concat(t, '-').concat(n)] > 1800000);
        if (!(Date.now() - l[''.concat(e, '-').concat(t)] < 1800000) || 0 !== r.length) {
            l[''.concat(e, '-').concat(t)] = Date.now(), r.forEach(n => l[''.concat(e, '-').concat(t, '-').concat(n)] = Date.now());
            try {
                await s.Z.fetchGuildEventUserCounts(e, t, r);
            } catch (e) {
            }
        }
    }
    getGuildEventUsers(e, t, n) {
        return s.Z.fetchUsersForGuildEvent(e, t, n);
    }
    getGuildEventsForCurrentUser(e) {
        return c(e);
    }
    handleConnectionOpen() {
        u.clear(), l = {};
        let e = (0, i.cn)(), t = a.Z.getLastSelectedGuildId();
        e && null != t && o.ZP.getGuildScheduledEventsForGuild(t).forEach(e => this.getGuildEventUserCounts(t, e.id, []));
    }
    handleGuildUnavailable(e) {
        let {guildId: t} = e;
        u.delete(t), delete l[t];
    }
    handleGuildDelete(e) {
        let {guild: t} = e, n = t.id;
        u.delete(n), delete l[n];
    }
    handleInviteResolveSuccess(e) {
        var t;
        let {invite: n} = e, r = n.guild_scheduled_event, i = null === (t = n.guild) || void 0 === t ? void 0 : t.id;
        if (null != r && null != i)
            c(i);
    }
    handleChannelSelect(e) {
        let {guildId: t} = e;
        if (null != t)
            o.ZP.getGuildScheduledEventsForGuild(t).forEach(e => this.getGuildEventUserCounts(t, e.id, []));
    }
    constructor(...e) {
        var t, n, r;
        super(...e), t = this, n = 'actions', r = {
            POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
            GUILD_DELETE: e => this.handleGuildDelete(e),
            GUILD_UNAVAILABLE: e => this.handleGuildUnavailable(e),
            INVITE_RESOLVE_SUCCESS: e => this.handleInviteResolveSuccess(e),
            CHANNEL_SELECT: e => this.handleChannelSelect(e)
        }, n in t ? Object.defineProperty(t, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = r;
    }
}
t.Z = new d();
