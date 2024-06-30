n.d(t, {
    O: function () {
        return c;
    },
    l: function () {
        return o;
    }
});
var i = n(594174), a = n(63063), s = n(74538), l = n(981631), r = n(689938);
function o(e) {
    switch (e) {
    case l.evJ.TOO_MANY_USER_GUILDS:
        let t = i.default.getCurrentUser(), n = s.ZP.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? l.tHP : l.DZw;
        return {
            title: r.Z.Messages.TOO_MANY_USER_GUILDS_TITLE_2.format({ quantity: n }),
            description: r.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION
        };
    case l.evJ.GUILD_AT_CAPACITY:
        return {
            title: r.Z.Messages.SERVER_IS_CURRENTLY_FULL,
            description: r.Z.Messages.PLEASE_TRY_AGAIN_LATER
        };
    case l.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
        return {
            title: r.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING,
            description: r.Z.Messages.PLEASE_TRY_AGAIN_LATER
        };
    default:
        return null;
    }
}
function c(e) {
    switch (e) {
    case l.evJ.TOO_MANY_USER_GUILDS:
        return r.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION;
    case l.evJ.GUILD_AT_CAPACITY:
        return r.Z.Messages.MAX_GUILD_MEMBERS_REACHED_ERROR;
    case l.evJ.INVALID_COUNTRY_CODE:
        return r.Z.Messages.INVALID_COUNTRY_CODE;
    case l.evJ.INVALID_CANNOT_FRIEND_SELF:
        return r.Z.Messages.INVALID_CANNOT_FRIEND_SELF;
    case l.evJ.INVITES_DISABLED:
        return r.Z.Messages.INVITES_DISABLED_MODAL_DESCRIPTION.format({ articleLink: a.Z.getArticleURL(l.BhN.INVITE_DISABLED) });
    default:
        return r.Z.Messages.INVITE_MODAL_ERROR_DEFAULT;
    }
}
