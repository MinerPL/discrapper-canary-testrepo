n.d(t, {
    HG: function () {
        return h;
    },
    Iv: function () {
        return _;
    },
    XN: function () {
        return E;
    }
});
var i = n(704215),
    a = n(823385),
    s = n(327689),
    r = n(421176),
    l = n(989695),
    o = n(456065),
    c = n(683743),
    d = n(823379),
    u = n(981631);
let _ = 'lastHiddenChannelNotice',
    E = [
        {
            type: u.vID.CLAN_ADMIN_UPSELL,
            dismissibleContentType: i.z.CHANNEL_LIST_CLAN_ADMIN_UPSELL
        },
        {
            type: u.vID.GUILD_BOOSTING,
            store: r.Z,
            dismissibleContentType: i.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION
        },
        {
            type: u.vID.GUILD_BANNER,
            store: s.Z,
            dismissibleContentType: i.z.CHANNEL_NOTICE_GUILD_BANNER
        },
        {
            type: u.vID.INVITE,
            store: c.Z,
            dismissibleContentType: i.z.CHANNEL_NOTICE_INVITE
        },
        {
            type: u.vID.HUB_LINK,
            store: o.Z,
            dismissibleContentType: i.z.CHANNEL_NOTICE_HUBLINK
        },
        {
            type: u.vID.QUICKSWITCHER,
            store: a.Z,
            dismissibleContentType: i.z.CHANNEL_NOTICE_QUICKSWITCHER
        },
        {
            type: u.vID.GUILD_ONBOARDING_UPSELL,
            store: l.Z,
            dismissibleContentType: i.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE
        },
        {
            type: u.vID.LINKED_ROLES_ADMIN,
            dismissibleContentType: i.z.LINKED_ROLE_ADMIN_GUILD
        }
    ],
    h = E.map((e) => e.store).filter(d.lm);
