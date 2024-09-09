t.d(n, {
    PA: function () {
        return c;
    },
    Tn: function () {
        return s;
    },
    _i: function () {
        return g;
    },
    eI: function () {
        return E;
    },
    vp: function () {
        return f;
    },
    y8: function () {
        return I;
    }
});
var r = t(367907),
    i = t(200876),
    o = t(430824),
    l = t(594174);
t(709054), t(523361);
var u = t(981631),
    a = t(689938);
function s(e) {
    let { username: n, usernameOnClickHandler: t, roleSubscriptionOnClickHandler: r, guildId: i, roleSubscriptionData: o } = e,
        { content: l, formatParams: u } = _({
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o
        });
    return l.format(u);
}
function c(e) {
    let { username: n, usernameOnClickHandler: t, roleSubscriptionOnClickHandler: r, guildId: i, roleSubscriptionData: o } = e,
        { content: l, formatParams: u } = _({
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o
        });
    return l.astFormat(u);
}
function d(e, n) {
    var t, r;
    let i = o.Z.getGuild(e),
        l = null !== (t = null == n ? void 0 : n.total_months_subscribed) && void 0 !== t ? t : 0;
    return {
        guild: i,
        totalMonthsSubscribed: l,
        showWithDuration: l > 0,
        isRenewal: null !== (r = null == n ? void 0 : n.is_renewal) && void 0 !== r && r
    };
}
function _(e) {
    let n,
        { username: t, usernameOnClickHandler: r, roleSubscriptionOnClickHandler: i, guildId: o, roleSubscriptionData: l } = e,
        { guild: u, totalMonthsSubscribed: s, showWithDuration: c, isRenewal: _ } = d(o, l);
    return (
        (n = c ? (_ ? a.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION : a.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION) : _ ? a.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW : a.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN),
        {
            content: n,
            formatParams: {
                username: t,
                usernameHook: r,
                guildName: null == u ? void 0 : u.name,
                handleGuildNameClick: i,
                tierName: null == l ? void 0 : l.tier_name,
                months: s
            }
        }
    );
}
function f(e) {
    let n,
        { username: t, usernameOnClickHandler: r = u.dG4, roleSubscriptionOnClickHandler: i = u.dG4, guildId: o, roleSubscriptionData: l } = e,
        { guild: s, totalMonthsSubscribed: c, showWithDuration: _, isRenewal: f } = d(o, l),
        E = {
            guildName: null == s ? void 0 : s.name,
            tierName: null == l ? void 0 : l.tier_name,
            username: t,
            usernameOnClick: r,
            roleSubscriptionOnClick: i
        };
    return (n = _
        ? f
            ? a.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat({
                  ...E,
                  months: c
              })
            : a.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat({
                  ...E,
                  months: c
              })
        : f
          ? a.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(E)
          : a.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(E));
}
function E(e) {
    return (0, i.l)(e);
}
function I(e, n, t, i) {
    var o;
    r.ZP.trackWithMetadata(u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null === (o = l.default.getCurrentUser()) || void 0 === o ? void 0 : o.id,
        channel_id: n,
        message_id: t,
        role_subscription_listing_id: i
    });
}
function g(e, n) {
    var t;
    return {
        guild_id: e.guild_id,
        sender: null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
        target_user: n.author.id,
        channel_id: e.id,
        message_id: n.id
    };
}
