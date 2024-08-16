n.d(t, {
    __: function () {
        return c;
    },
    in: function () {
        return d;
    }
}),
    n(373793);
var r = n(39621),
    i = n(911969),
    a = n(213459),
    s = n(581364),
    o = n(807169),
    l = n(104793),
    u = n(689938);
function c(e, t, n) {
    var r, u, c, d;
    let _ = (0, o.Hs)(t, [i.yU.CHAT]),
        E = (0, a.PL)(!0, !1),
        f = (0, a.LD)(null == t ? void 0 : t.guild_id, !1),
        h = (0, s.vC)(null == t ? void 0 : t.guild_id, n);
    if (null == e || h) return !1;
    let { context: p, userId: m, roleIds: I, isImpersonating: T } = _,
        g = null === (u = f.result) || void 0 === u ? void 0 : null === (r = u.sections[e.applicationId]) || void 0 === r ? void 0 : r.descriptor;
    if (void 0 !== g) {
        let n = (0, l.ZJ)(g.permissions, t, null == t ? void 0 : t.guild_id),
            r = (0, l.ML)(g.permissions, p.guild_id, m, I, T);
        if (
            (0, l.Ft)(e, _, {
                applicationAllowedForUser: r,
                applicationAllowedForChannel: n,
                commandBotId: g.botId
            }) === l.mF.ALLOWED
        )
            return !1;
    }
    let S = null === (d = E.result) || void 0 === d ? void 0 : null === (c = d.sections[e.applicationId]) || void 0 === c ? void 0 : c.commands;
    return null != S && e.id in S;
}
function d(e) {
    switch (e) {
        case r.O.FEATURE_LIMITED:
            return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_FEATURE_LIMITED;
        case r.O.GUILD_FEATURE_LIMITED:
            return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_GUILD_FEATURE_LIMITED;
        case r.O.USER_FEATURE_LIMITED:
            return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_USER_FEATURE_LIMITED;
        case r.O.SLOWMODE:
            return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_SLOWMODE;
        case r.O.RATE_LIMIT:
            return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_RATE_LIMIT;
        case r.O.CANNOT_MESSAGE_USER:
            return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_MESSAGE_USER;
        case r.O.USER_VERIFICATION_LEVEL:
            return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_USER_VERIFICATION_LEVEL;
        case r.O.CANNOT_UNARCHIVE_THREAD:
            return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_UNARCHIVE_THREAD;
        case r.O.CANNOT_JOIN_THREAD:
            return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_JOIN_THREAD;
        case r.O.MISSING_PERMISSIONS:
            return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_MISSING_PERMISSIONS;
        case r.O.CANNOT_SEND_ATTACHMENTS:
            return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_SEND_ATTACHMENTS;
        case r.O.CANNOT_SEND_EMBEDS:
            return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_SEND_EMBEDS;
        case r.O.CANNOT_SEND_STICKERS:
            return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_SEND_STICKERS;
        case r.O.AUTOMOD_BLOCKED:
            return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_AUTOMOD_BLOCKED;
        case r.O.HARMFUL_LINK:
            return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_HARMFUL_LINK;
        case r.O.CANNOT_USE_COMMAND:
            return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_USE_COMMAND;
        case r.O.BETA_GUILD_SIZE:
            return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_BETA;
        case r.O.CANNOT_USE_EXTERNAL_APPS:
            return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_USE_EXTERNAL_APPS;
        default:
            return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_UNKNOWN;
    }
}
