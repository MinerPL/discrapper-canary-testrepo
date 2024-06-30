t.d(n, {
    ZP: function () {
        return c;
    }
}), t(653041);
var r = t(131704), i = t(699516), o = t(594174), l = t(933557), u = t(981631), s = t(689938);
function a(e) {
    let {
        isSubscriptionGated: n,
        needSubscriptionToAccess: t
    } = e;
    if (n)
        return t ? s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_LOCKED : s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_UNLOCKED;
}
function c(e) {
    let n, {
            channel: t,
            unread: c = !1,
            mentionCount: d = 0,
            userCount: _,
            embeddedActivitiesCount: f,
            isSubscriptionGated: E,
            needSubscriptionToAccess: I
        } = e, g = (0, l.F6)(t, o.default, i.Z);
    switch (t.type) {
    case u.d4z.DM:
        n = c ? s.Z.Messages.DIRECT_MESSAGE_A11Y_LABEL_WITH_UNREADS : s.Z.Messages.DIRECT_MESSAGE_A11Y_LABEL;
        break;
    case u.d4z.GROUP_DM:
        n = c ? s.Z.Messages.GROUP_MESSAGE_A11Y_LABEL_WITH_UNREADS : s.Z.Messages.GROUP_MESSAGE_A11Y_LABEL;
        break;
    case u.d4z.GUILD_STORE:
        n = s.Z.Messages.GUILD_SIDEBAR_STORE_CHANNEL_A11Y_LABEL;
        break;
    case u.d4z.GUILD_DIRECTORY:
        n = s.Z.Messages.GUILD_SIDEBAR_DIRECTORY_CHANNEL_A11Y_LABEL;
        break;
    case u.d4z.GUILD_ANNOUNCEMENT:
        n = d > 0 ? s.Z.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : c ? s.Z.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_UNREADS : s.Z.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL;
        break;
    case u.d4z.GUILD_VOICE:
        let p = [s.Z.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({ channelName: t.name })];
        if (d > 0 && p.push(s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({ mentionCount: d })), c && p.push(s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD), null != _) {
            let e = t.userLimit;
            null != e && e > 0 ? p.push(s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_LIMIT.format({
                userCount: _,
                limit: e
            })) : p.push(s.Z.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL_USERS.format({ userCount: _ }));
        }
        null != f && f > 0 && p.push(s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_ACTIVITIES.format({ activitiesCount: f }));
        let C = a({
            isSubscriptionGated: E,
            needSubscriptionToAccess: I
        });
        return null != C && p.push(C), p.join(', ');
    case u.d4z.GUILD_STAGE_VOICE:
        n = s.Z.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL;
        break;
    default:
        n = r.Ec.has(t.type) ? d > 0 ? s.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS : c ? s.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS : s.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL : d > 0 ? s.Z.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : c ? s.Z.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_UNREADS : s.Z.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL;
    }
    let T = [n.format({
                channelName: g,
                mentionCount: d
            })], S = a({
            isSubscriptionGated: E,
            needSubscriptionToAccess: I
        });
    return null != S && T.push(S), T.join(', ');
}
