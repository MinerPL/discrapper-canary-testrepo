n.d(t, {
    HG: function () {
        return E;
    },
    Iv: function () {
        return u;
    },
    XN: function () {
        return _;
    }
});
var i = n(704215),
    a = n(823385),
    s = n(327689),
    r = n(421176),
    l = n(456065),
    o = n(683743),
    c = n(823379),
    d = n(981631);
let u = 'lastHiddenChannelNotice',
    _ = [
        {
            type: d.vID.CLAN_ADMIN_UPSELL,
            dismissibleContentType: i.z.CHANNEL_LIST_CLAN_ADMIN_UPSELL
        },
        {
            type: d.vID.GUILD_BOOSTING,
            store: r.Z,
            dismissibleContentType: i.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION
        },
        {
            type: d.vID.GUILD_BANNER,
            store: s.Z,
            dismissibleContentType: i.z.CHANNEL_NOTICE_GUILD_BANNER
        },
        {
            type: d.vID.INVITE,
            store: o.Z,
            dismissibleContentType: i.z.CHANNEL_NOTICE_INVITE
        },
        {
            type: d.vID.HUB_LINK,
            store: l.Z,
            dismissibleContentType: i.z.CHANNEL_NOTICE_HUBLINK
        },
        {
            type: d.vID.QUICKSWITCHER,
            store: a.Z,
            dismissibleContentType: i.z.CHANNEL_NOTICE_QUICKSWITCHER
        },
        {
            type: d.vID.LINKED_ROLES_ADMIN,
            dismissibleContentType: i.z.LINKED_ROLE_ADMIN_GUILD
        }
    ],
    E = _.map((e) => e.store).filter(c.lm);
