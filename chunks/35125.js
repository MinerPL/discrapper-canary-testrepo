n.d(t, {
    PA: function () {
        return d;
    },
    Tn: function () {
        return l;
    },
    _i: function () {
        return N;
    },
    eI: function () {
        return c;
    },
    vp: function () {
        return I;
    },
    y8: function () {
        return T;
    }
});
var i = n(367907), r = n(200876), a = n(430824), o = n(594174);
n(709054), n(523361);
var u = n(981631), s = n(689938);
function l(e) {
    let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a
        } = e, {
            content: o,
            formatParams: u
        } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a
        });
    return o.format(u);
}
function d(e) {
    let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a
        } = e, {
            content: o,
            formatParams: u
        } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a
        });
    return o.astFormat(u);
}
function E(e, t) {
    var n, i;
    let r = a.Z.getGuild(e), o = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0;
    return {
        guild: r,
        totalMonthsSubscribed: o,
        showWithDuration: o > 0,
        isRenewal: null !== (i = null == t ? void 0 : t.is_renewal) && void 0 !== i && i
    };
}
function _(e) {
    let t, {
            username: n,
            usernameOnClickHandler: i,
            roleSubscriptionOnClickHandler: r,
            guildId: a,
            roleSubscriptionData: o
        } = e, {
            guild: u,
            totalMonthsSubscribed: l,
            showWithDuration: d,
            isRenewal: _
        } = E(a, o);
    return t = d ? _ ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION : _ ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN, {
        content: t,
        formatParams: {
            username: n,
            usernameHook: i,
            guildName: null == u ? void 0 : u.name,
            handleGuildNameClick: r,
            tierName: null == o ? void 0 : o.tier_name,
            months: l
        }
    };
}
function I(e) {
    let t, {
            username: n,
            usernameOnClickHandler: i = u.dG4,
            roleSubscriptionOnClickHandler: r = u.dG4,
            guildId: a,
            roleSubscriptionData: o
        } = e, {
            guild: l,
            totalMonthsSubscribed: d,
            showWithDuration: _,
            isRenewal: I
        } = E(a, o), c = {
            guildName: null == l ? void 0 : l.name,
            tierName: null == o ? void 0 : o.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: r
        };
    return t = _ ? I ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat({
        ...c,
        months: d
    }) : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat({
        ...c,
        months: d
    }) : I ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(c) : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(c);
}
function c(e) {
    return (0, r.l)(e);
}
function T(e, t, n, r) {
    var a;
    i.ZP.trackWithMetadata(u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null === (a = o.default.getCurrentUser()) || void 0 === a ? void 0 : a.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: r
    });
}
function N(e, t) {
    var n;
    return {
        guild_id: e.guild_id,
        sender: null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id
    };
}
