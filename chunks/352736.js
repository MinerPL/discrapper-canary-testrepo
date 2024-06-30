var E, _, s = t(25209), u = t(97797), r = t(35125), a = t(786761), i = t(739566), l = t(499401), M = t(693912), S = t(23750), N = t(314897), A = t(592125), o = t(430824), c = t(594174), I = t(5192), O = t(709054), T = t(981631), d = t(689938);
let C = {
    '234395307759108106': 'https://groovy.bot/commands',
    '365975655608745985': 'https://www.pokecord.com/getting-started',
    '512412940897484800': 'http://jameslantz.net/smilebot'
};
(E = _ || (_ = {})).NORMAL = 'NORMAL', E.CLAN = 'CLAN';
let R = () => [
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001_HOOK,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002_HOOK,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003_HOOK,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004_HOOK,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005_HOOK,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006_HOOK,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007_HOOK,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008_HOOK,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009_HOOK,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010_HOOK,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011_HOOK,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012_HOOK,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013_HOOK
    ], L = () => [
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012,
        d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013
    ], g = () => [
        d.Z.Messages.CLAN_WELCOME_MESSAGE_0_HOOK,
        d.Z.Messages.CLAN_WELCOME_MESSAGE_1_HOOK,
        d.Z.Messages.CLAN_WELCOME_MESSAGE_2_HOOK,
        d.Z.Messages.CLAN_WELCOME_MESSAGE_3_HOOK,
        d.Z.Messages.CLAN_WELCOME_MESSAGE_4_HOOK,
        d.Z.Messages.CLAN_WELCOME_MESSAGE_5_HOOK,
        d.Z.Messages.CLAN_WELCOME_MESSAGE_6_HOOK,
        d.Z.Messages.CLAN_WELCOME_MESSAGE_7_HOOK,
        d.Z.Messages.CLAN_WELCOME_MESSAGE_8_HOOK,
        d.Z.Messages.CLAN_WELCOME_MESSAGE_9_HOOK
    ], G = () => [
        d.Z.Messages.CLAN_WELCOME_MESSAGE_0,
        d.Z.Messages.CLAN_WELCOME_MESSAGE_1,
        d.Z.Messages.CLAN_WELCOME_MESSAGE_2,
        d.Z.Messages.CLAN_WELCOME_MESSAGE_3,
        d.Z.Messages.CLAN_WELCOME_MESSAGE_4,
        d.Z.Messages.CLAN_WELCOME_MESSAGE_5,
        d.Z.Messages.CLAN_WELCOME_MESSAGE_6,
        d.Z.Messages.CLAN_WELCOME_MESSAGE_7,
        d.Z.Messages.CLAN_WELCOME_MESSAGE_8,
        d.Z.Messages.CLAN_WELCOME_MESSAGE_9
    ], f = e => {
        switch (e) {
        case 'NORMAL':
        default:
            return R();
        case 'CLAN':
            return g();
        }
    }, Z = e => {
        switch (e) {
        case 'NORMAL':
        default:
            return L();
        case 'CLAN':
            return G();
        }
    };
function D(e, n) {
    let t = Z(n), E = O.default.extractTimestamp(e) % t.length;
    return t[E];
}
function U(e) {
    return (0, s.Rp)(d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
        username: e,
        usernameOnClick: T.dG4
    }));
}
function m(e, n) {
    let t = A.Z.getChannel(n);
    return null == t || null == o.Z.getGuild(t.getGuildId()) ? U(e) : (0, s.Rp)(d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
        username: e,
        usernameOnClick: T.dG4
    }));
}
function p(e) {
    var n;
    return (null === (n = o.Z.getGuild(e)) || void 0 === n ? void 0 : n.hasFeature(T.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
}
n.Z = {
    stringify: function (e, n) {
        var t, E, _, O;
        let C = null === (t = e.mentions) || void 0 === t ? void 0 : t[0], R = null != C && 'string' != typeof C ? c.default.getUser(C.id) : void 0, L = e.channel_id, g = I.ZP.getName(null, L, e.author);
        switch (e.type) {
        case T.uaV.RECIPIENT_ADD:
            if (null == R)
                return;
            return (0, s.Rp)(d.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD.astFormat({
                username: g,
                usernameOnClick: T.dG4,
                otherUsername: I.ZP.getName(null, L, R),
                otherUsernameOnClick: T.dG4
            }));
        case T.uaV.RECIPIENT_REMOVE:
            if (null == R)
                return;
            let G = e.author;
            if (null == G || G.id === R.id)
                return (0, s.Rp)(d.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF.astFormat({
                    username: g,
                    usernameOnClick: T.dG4
                }));
            return (0, s.Rp)(d.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE.astFormat({
                username: g,
                usernameOnClick: T.dG4,
                otherUsername: I.ZP.getName(null, L, R),
                otherUsernameOnClick: T.dG4
            }));
        case T.uaV.CALL:
            let {call: f} = e;
            if (null != f && -1 === f.participants.indexOf(N.default.getId()))
                return (0, s.Rp)(d.Z.Messages.SYSTEM_MESSAGE_CALL_STARTED.astFormat({
                    username: g,
                    usernameOnClick: T.dG4
                }));
            return;
        case T.uaV.CHANNEL_NAME_CHANGE:
            return (0, s.Rp)((n.isForumPost() ? d.Z.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE : d.Z.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE).astFormat({
                username: g,
                usernameOnClick: T.dG4,
                channelName: e.content
            }));
        case T.uaV.CHANNEL_ICON_CHANGE:
            return (0, s.Rp)(d.Z.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE.astFormat({
                username: g,
                usernameOnClick: T.dG4
            }));
        case T.uaV.CHANNEL_PINNED_MESSAGE:
            return (0, s.Rp)(d.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA.astFormat({
                username: g,
                usernameOnClick: T.dG4
            }));
        case T.uaV.USER_JOIN:
            let Z = p(n.guild_id);
            return (0, s.Rp)(D(e.id, Z).astFormat({
                username: g,
                usernameOnClick: T.dG4
            }));
        case T.uaV.GUILD_BOOST:
            return U(g);
        case T.uaV.GUILD_BOOST_TIER_1:
        case T.uaV.GUILD_BOOST_TIER_2:
        case T.uaV.GUILD_BOOST_TIER_3:
            return m(g, L);
        case T.uaV.GUILD_INVITE_REMINDER:
            return d.Z.Messages.SYSTEM_MESSAGE_INVITE_NOTIFICATION;
        case T.uaV.THREAD_STARTER_MESSAGE:
            return d.Z.Messages.THREAD_STARTER_MESSAGE_NOTIFICATION.format({
                username: g,
                threadName: n.name
            });
        case T.uaV.ROLE_SUBSCRIPTION_PURCHASE:
            if (e instanceof S.ZP)
                return null;
            return (0, s.Rp)((0, r.vp)({
                username: g,
                guildId: n.guild_id,
                roleSubscriptionData: e.role_subscription_data
            }));
        case T.uaV.PURCHASE_NOTIFICATION:
            if (e instanceof S.ZP || (null === (_ = e.purchase_notification) || void 0 === _ ? void 0 : null === (E = _.guild_product_purchase) || void 0 === E ? void 0 : E.product_name) == null)
                return null;
            return (0, s.Rp)((0, u.i)({
                username: g,
                productName: e.purchase_notification.guild_product_purchase.product_name
            }));
        case T.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
            if (e instanceof S.ZP)
                return null;
            let h = (0, i.ZH)((0, a.e5)(e));
            return (0, s.Rp)((0, l.Y)({
                application: e.application,
                username: h.nick
            }));
        case T.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
            if (e instanceof S.ZP)
                return null;
            return (0, s.Rp)((0, M.B2)({
                application: e.application,
                username: (0, i.ZH)((0, a.e5)(e)).nick
            }));
        case T.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
            if (e instanceof S.ZP)
                return null;
            return (0, s.Rp)((0, M.hj)({
                application: e.application,
                username: (0, i.ZH)((0, a.e5)(e)).nick
            }));
        case T.uaV.AUTO_MODERATION_ACTION:
            if (null === (O = e.embeds) || void 0 === O ? void 0 : O.some(e => {
                    let {type: n} = e;
                    return n === T.hBH.AUTO_MODERATION_NOTIFICATION;
                }))
                return function (e) {
                    let n = A.Z.getChannel(e);
                    if (null == n)
                        return null;
                    let t = o.Z.getGuild(n.getGuildId());
                    return null == t ? null : (0, s.Rp)(d.Z.Messages.GUILD_SERVER_RAID_ALERT_NOTIFICATION.astFormat({ guildName: t.name }));
                }(L);
            return e.content;
        case T.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
            return function (e, n, t) {
                let E = A.Z.getChannel(n);
                if (null == E)
                    return null;
                let _ = o.Z.getGuild(E.getGuildId());
                return null == _ ? null : (0, s.Rp)(d.Z.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_NOTIFICATION.astFormat({
                    username: e,
                    guildName: _.name,
                    time: '' !== t ? new Date(t).toLocaleString(d.Z.getLocale(), {
                        hour: 'numeric',
                        minute: '2-digit'
                    }) : ''
                }));
            }(g, L, e.content);
        case T.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
            return function (e, n) {
                let t = A.Z.getChannel(n);
                if (null == t)
                    return null;
                let E = o.Z.getGuild(t.getGuildId());
                return null == E ? null : (0, s.Rp)(d.Z.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_NOTIFICATION.astFormat({
                    username: e,
                    guildName: E.name
                }));
            }(g, L);
        default:
            return e.content;
        }
    },
    getSystemMessageUserJoin: function (e, n) {
        let t = f(n), E = O.default.extractTimestamp(e) % t.length;
        return t[E];
    },
    getSystemMessageUserJoinMobile: D,
    getSystemMessageBotJoin: function (e) {
        return null == C[e] ? null : d.Z.Messages.SYSTEM_MESSAGE_GUILD_BOT_JOIN.format({ learnOnClick: { onClick: () => window.open(C[e]) } });
    },
    getWelcomeMessageKind: p
};
