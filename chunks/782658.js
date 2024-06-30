n.d(t, {
    Z: function () {
        return R;
    }
});
var i = n(735250), a = n(470079), s = n(442837), l = n(447543), r = n(410575), o = n(906732), c = n(924301), d = n(11868), u = n(413605), _ = n(451603), E = n(885714), m = n(314897), I = n(430824), T = n(701190), h = n(610699), N = n(313876), f = n(778333), p = n(949981), C = n(680668), g = n(143708), S = n(358595), A = n(563917), x = n(135845), O = n(981631);
function R(e) {
    let {
            code: t,
            author: n,
            getAcceptInviteContext: R
        } = e, {
            invite: M,
            inviteError: v
        } = (0, s.cj)([T.Z], () => ({
            invite: T.Z.getInvite(t),
            inviteError: T.Z.getInviteError(t)
        }), [t]);
    a.useEffect(() => {
        null == M && l.Z.resolveInvite(t);
    }, [t]);
    let L = null != M ? M : {
            state: O.r2o.RESOLVING,
            code: ''
        }, {analyticsLocations: Z} = (0, o.ZP)(), P = (0, s.e7)([I.Z], () => (null == M ? void 0 : M.guild) != null ? I.Z.getGuild(M.guild.id) : null, [M]), b = (0, s.e7)([m.default], () => m.default.getId()), D = (0, s.e7)([c.ZP], () => {
            var e;
            return c.ZP.getGuildScheduledEvent(null === (e = L.guild_scheduled_event) || void 0 === e ? void 0 : e.id);
        }, [L]), j = () => {
            null != L.channel && l.Z.transitionToInviteSync(L);
        }, U = () => {
            (0, _.yU)() ? (0, E.Z)({
                analyticsSource: { page: O.ZY5.INVITE_EMBED },
                analyticsLocation: {
                    page: O.ZY5.INVITE_EMBED,
                    section: O.jXE.GUILD_CAP_UPSELL_MODAL
                },
                analyticsLocations: Z
            }) : l.Z.acceptInviteAndTransitionToInviteChannel({
                inviteKey: t,
                context: R('Invite Button Embed')
            });
        }, y = (0, i.jsx)(C.Z, {
            onTransitionToInviteChannel: j,
            onAcceptInstantInvite: U,
            currentUserId: b,
            guild: P,
            invite: L,
            author: n
        });
    switch (L.state) {
    case O.r2o.RESOLVING:
        y = (0, i.jsx)(S.Z, {});
        break;
    case O.r2o.EXPIRED:
    case O.r2o.BANNED:
        y = (0, i.jsx)(g.Z, {
            banned: L.state === O.r2o.BANNED,
            author: n
        });
        break;
    case O.r2o.ERROR:
        y = (0, i.jsx)(N.Z, {
            author: n,
            inviteError: v
        });
        break;
    default:
        switch ((0, u.VR)(L)) {
        case u.wx.GROUP_DM:
            y = (0, i.jsx)(p.Z, {
                onTransitionToInviteChannel: j,
                onAcceptInstantInvite: U,
                currentUserId: b,
                invite: L,
                author: n
            });
            break;
        case u.wx.FRIEND:
            y = (0, i.jsx)(f.Z, {
                invite: L,
                author: n,
                getAcceptInviteContext: R
            });
            break;
        default:
            if ((0, u.TY)(L)) {
                y = (0, i.jsx)(x.Z, {
                    onTransitionToInviteChannel: j,
                    onAcceptInstantInvite: U,
                    currentUserId: b,
                    guild: P,
                    invite: L
                });
                break;
            }
            if ((0, u.Tx)(L)) {
                y = (0, i.jsx)(d.ZP, {
                    guildScheduledEvent: D,
                    guild: L.guild,
                    channel: L.channel,
                    isMember: null != P,
                    onAcceptInstantInvite: U,
                    onTransitionToInviteChannel: j
                });
                break;
            }
            if ((0, u.$P)(L)) {
                y = (0, i.jsx)(A.Z, {
                    stageInstance: L.stage_instance,
                    guild: L.guild,
                    isMember: null != P,
                    onTransitionToInviteChannel: j,
                    onAcceptInstantInvite: U
                });
                break;
            }
            (0, u.P1)(L) && (y = (0, i.jsx)(h.Z, {
                invite: L,
                getAcceptInviteContext: R
            }));
        }
    }
    return (0, i.jsx)(r.Z, {
        section: O.jXE.INVITE_LINK,
        children: y
    });
}
