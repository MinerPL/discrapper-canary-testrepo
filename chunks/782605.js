n.d(t, {
    O: function () {
        return c;
    },
    l: function () {
        return o;
    }
});
var i = n(594174),
    a = n(63063),
    s = n(74538),
    r = n(981631),
    l = n(689938);
function o(e) {
    switch (e) {
        case r.evJ.TOO_MANY_USER_GUILDS:
            let t = i.default.getCurrentUser(),
                n = s.ZP.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? r.tHP : r.DZw;
            return {
                title: l.Z.Messages.TOO_MANY_USER_GUILDS_TITLE_2.format({ quantity: n }),
                description: l.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION
            };
        case r.evJ.GUILD_AT_CAPACITY:
            return {
                title: l.Z.Messages.SERVER_IS_CURRENTLY_FULL,
                description: l.Z.Messages.PLEASE_TRY_AGAIN_LATER
            };
        case r.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return {
                title: l.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING,
                description: l.Z.Messages.PLEASE_TRY_AGAIN_LATER
            };
        default:
            return null;
    }
}
function c(e) {
    switch (e) {
        case r.evJ.TOO_MANY_USER_GUILDS:
            return l.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION;
        case r.evJ.GUILD_AT_CAPACITY:
            return l.Z.Messages.MAX_GUILD_MEMBERS_REACHED_ERROR;
        case r.evJ.INVALID_COUNTRY_CODE:
            return l.Z.Messages.INVALID_COUNTRY_CODE;
        case r.evJ.INVALID_CANNOT_FRIEND_SELF:
            return l.Z.Messages.INVALID_CANNOT_FRIEND_SELF;
        case r.evJ.INVITES_DISABLED:
            return l.Z.Messages.INVITES_DISABLED_MODAL_DESCRIPTION.format({ articleLink: a.Z.getArticleURL(r.BhN.INVITE_DISABLED) });
        default:
            return l.Z.Messages.INVITE_MODAL_ERROR_DEFAULT;
    }
}
