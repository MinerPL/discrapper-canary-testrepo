n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120),
    n(773603);
var r = n(990547),
    i = n(283693),
    a = n(131704),
    s = n(314897),
    o = n(626135),
    l = n(573261),
    u = n(264229),
    c = n(245335),
    d = n(981631);
function f(e) {
    let t = null;
    if (null != e && null != e.channel) {
        let n = e.channel;
        t = e.target_type === c.Iq.STREAM ? d.dAT.STREAM : e.target_type === c.Iq.EMBEDDED_APPLICATION ? d.dAT.APPLICATION : (0, a.bc)(n.type) ? d.dAT.GDM_INVITE : null == n || (0, a.hv)(n.type) ? d.dAT.FRIEND_INVITE : d.dAT.SERVER_INVITE;
    }
    return t;
}
let _ = new Map();
function h(e, t, n) {
    if ((o.default.track(d.rMx.INVITE_OPENED, { invite_code: e }), _.has(e))) return _.get(e);
    let a = (0, u.fU)(e),
        c = {
            ...n,
            with_counts: !0,
            with_expiration: !0,
            guild_scheduled_event_id: a.guildScheduledEventId
        },
        h = l.Z.get({
            url: d.ANM.INVITE(a.baseCode),
            query: c,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.INVITE_RESOLVE,
                properties: (e) => {
                    var r, o, l, u, c, _;
                    let h = e.body,
                        p = (null === (r = e.body) || void 0 === r ? void 0 : r.code) === d.evJ.USER_BANNED;
                    return (0, i.iG)({
                        resolved: e.ok,
                        guild_id: null == h ? void 0 : null === (o = h.guild) || void 0 === o ? void 0 : o.id,
                        channel_id: null == h ? void 0 : null === (l = h.channel) || void 0 === l ? void 0 : l.id,
                        channel_type: null == h ? void 0 : null === (u = h.channel) || void 0 === u ? void 0 : u.type,
                        inviter_id: null == h ? void 0 : null === (c = h.inviter) || void 0 === c ? void 0 : c.id,
                        code: a.baseCode,
                        input_value: null == n ? void 0 : n.inputValue,
                        location: t,
                        authenticated: s.default.isAuthenticated(),
                        size_total: null == h ? void 0 : h.approximate_member_count,
                        size_online: null == h ? void 0 : h.approximate_presence_count,
                        destination_user_id: null == h ? void 0 : null === (_ = h.target_user) || void 0 === _ ? void 0 : _.id,
                        invite_type: f(h),
                        user_banned: p
                    });
                }
            }
        })
            .then(
                (r) => {
                    let i = r.body;
                    return (
                        null != t &&
                            o.default.track(
                                d.rMx.INVITE_RESOLVED,
                                {
                                    resolved: !0,
                                    guild_id: null != i.guild ? i.guild.id : null,
                                    channel_id: null != i.channel ? i.channel.id : null,
                                    channel_type: null != i.channel ? i.channel.type : null,
                                    inviter_id: i.inviter ? i.inviter.id : null,
                                    code: a.baseCode,
                                    input_value: null == n ? void 0 : n.inputValue,
                                    location: t,
                                    authenticated: s.default.isAuthenticated(),
                                    size_total: i.approximate_member_count,
                                    size_online: i.approximate_presence_count,
                                    destination_user_id: null != i.target_user ? i.target_user.id : null,
                                    invite_type: f(i)
                                },
                                { flush: !0 }
                            ),
                        {
                            invite: i,
                            code: e
                        }
                    );
                },
                (r) => {
                    let i = null != r.body && r.body.code === d.evJ.USER_BANNED;
                    if (null != t) {
                        var l, u;
                        o.default.track(
                            d.rMx.INVITE_RESOLVED,
                            {
                                resolved: !1,
                                code: a.baseCode,
                                input_value: null == n ? void 0 : n.inputValue,
                                location: t,
                                authenticated: s.default.isAuthenticated(),
                                user_banned: i,
                                error_code: null === (l = r.body) || void 0 === l ? void 0 : l.code,
                                error_message: null === (u = r.body) || void 0 === u ? void 0 : u.message
                            },
                            { flush: !0 }
                        );
                    }
                    return {
                        invite: null,
                        code: e,
                        banned: i
                    };
                }
            )
            .finally(() => {
                _.delete(e);
            });
    return _.set(e, h), h;
}
