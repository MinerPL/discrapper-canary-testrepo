n(47120);
var r = n(348326),
    i = n(710845),
    a = n(38618),
    s = n(592125),
    o = n(287328),
    l = n(59480),
    u = n(40455),
    c = n(989263),
    d = n(513418);
function _(e, t, n) {
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
let E = new i.Z('Messages');
class f {
    static computeUsersAndMembers(e) {
        (0, d.Z)(e);
        let t = new Map(),
            n = new Map();
        for (let r of e) this.addIntoMap(t, r.users, (e) => e.id), this.addIntoMap(n, r.members, (e) => e.userId);
        return [Array.from(t.values()), Array.from(n.values())];
    }
    static addIntoMap(e, t, n) {
        for (let r of t) {
            let t = n(r),
                i = e.get(t);
            (null == i || (i.incomplete && !r.incomplete)) && e.set(t, r);
        }
    }
    constructor(e) {
        if ((_(this, 'connectionId', null), _(this, 'users', []), _(this, 'members', []), _(this, 'messages', []), e.length > 0)) {
            var t;
            let n = null === (t = e[0]) || void 0 === t ? void 0 : t.connectionId,
                [r, i] = f.computeUsersAndMembers(e);
            e.length > 0 && e.every((e) => e.connectionId === n) && (this.connectionId = n), (this.users = r), (this.members = i), (this.messages = e.map((e) => e.message));
        }
    }
}
t.ZP = new (class e {
    async startupLoad(e, t, n, r) {
        let i = o.Z.messages(e);
        return new f(await i.getLatest(t, n, r));
    }
    async load(e, t, n) {
        let r = s.Z.getBasicChannel(t);
        if (null == t || null == r || !(0, c.v)(r)) return new f([]);
        {
            let i = o.Z.messages(e);
            return new f(await i.getLatest(r.guild_id, t, n));
        }
    }
    handleMessageCreate(e, t) {
        if (!e.optimistic && !e.isPushNotification && null == e.sendMessageOptions) (0, c.$)(e.channelId) && this.upsertOne(e.guildId, e.channelId, e.message, t);
    }
    handleMessageUpdate(e, t) {
        if (null != e.message.id && null != e.message.channel_id && !!(0, c.$)(e.message.channel_id))
            (function (e) {
                return null != e.author && null != e.content && null != e.mentions && null != e.timestamp;
            })(e.message)
                ? this.upsertOne(e.guildId, e.message.channel_id, e.message, t)
                : this.updateOne(e.guildId, e.message.channel_id, e.message, t);
    }
    handleMessagePreviewsLoaded(e, t) {
        for (let n of e.messages) (0, c.$)(n.channel_id) && this.insertStale(e.guildId, n.channel_id, n, t);
    }
    handleLoadMessagesSuccess(e, t) {
        let n = s.Z.getBasicChannel(e.channelId);
        null != n && (0, c.$)(e.channelId) && this.upsertMany(n.guild_id, e.channelId, e.messages, t);
    }
    handleMessageDelete(e, t) {
        if (null != e.id) this.deleteOne(e.guildId, e.channelId, e.id, t);
    }
    handleMessageDeleteBulk(e, t) {
        for (let n of e.ids) this.deleteOne(e.guildId, e.channelId, n, t);
    }
    handleChannelDelete(e, t) {
        this.deleteChannel(e.channel.guild_id, e.channel.id, t);
    }
    handleGuildDelete(e, t) {
        !e.guild.unavailable && this.deleteGuild(e.guild.id, t);
    }
    resetInMemoryState() {}
    insertStale(e, t, n, i) {
        let s = o.Z.messagesTransaction(i),
            u = a.Z.lastTimeConnectedChanged();
        s.put(e, t, l.a.fromMessage(e, t, n, u), r.Sn.Skip);
    }
    upsertOne(e, t, n, i) {
        let s = o.Z.messagesTransaction(i),
            c = a.Z.lastTimeConnectedChanged();
        s.put(e, t, l.a.fromMessage(e, t, n, c), r.Sn.Replace), s.trimChannel(e, t, u.ZP.saveLimit(t));
    }
    upsertMany(e, t, n, r) {
        let i = o.Z.messagesTransaction(r),
            s = a.Z.lastTimeConnectedChanged();
        for (let r of n) i.put(e, t, l.a.fromMessage(e, t, r, s));
        i.trimChannel(e, t, u.ZP.saveLimit(t));
    }
    async updateOne(e, t, n, r) {
        if (null == n.id) {
            E.warn('updateOne: message.id is null; cannot update a message if we do not know its id.');
            return;
        }
        let i = o.Z.messages(r.database),
            s = await i.get(e, t, n.id),
            u = a.Z.lastTimeConnectedChanged();
        null != s &&
            i.put(
                e,
                t,
                l.a.fromMessage(
                    e,
                    t,
                    {
                        ...s.message,
                        ...n
                    },
                    u
                )
            );
    }
    deleteOne(e, t, n, r) {
        o.Z.messagesTransaction(r).deleteMessage(e, t, n);
    }
    deleteChannel(e, t, n) {
        o.Z.messagesTransaction(n).deleteChannel(e, t);
    }
    deleteGuild(e, t) {
        o.Z.messagesTransaction(t).deleteGuild(e);
    }
    constructor() {
        _(this, 'actions', {
            CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
            GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
            LOAD_MESSAGES_SUCCESS: (e, t) => this.handleLoadMessagesSuccess(e, t),
            MESSAGE_CREATE: (e, t) => this.handleMessageCreate(e, t),
            MESSAGE_DELETE_BULK: (e, t) => this.handleMessageDeleteBulk(e, t),
            MESSAGE_DELETE: (e, t) => this.handleMessageDelete(e, t),
            MESSAGE_PREVIEWS_LOADED: (e, t) => this.handleMessagePreviewsLoaded(e, t),
            MESSAGE_UPDATE: (e, t) => this.handleMessageUpdate(e, t)
        });
    }
})();
