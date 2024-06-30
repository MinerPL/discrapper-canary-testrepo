n.d(t, {
    i: function () {
        return i;
    },
    p: function () {
        return r;
    }
});
var s = n(981631), a = n(689938);
function i(e) {
    switch (e) {
    case s.evJ.UNKNOWN_CHANNEL:
        return a.Z.Messages.SET_VANITY_URL_ERROR_MESSAGE_UNKNOWN_CHANNEL;
    case s.evJ.INVALID_PERMISSIONS:
        return a.Z.Messages.SET_VANITY_URL_ERROR_MESSAGE_INVALID_PERMISSIONS;
    case s.evJ.INVALID_ACCESS:
        return a.Z.Messages.SET_VANITY_URL_ERROR_MESSAGE_INVALID_ACCESS;
    case s.evJ.VANITY_URL_REQUIRED_FOR_PUBLISHED_GUILDS:
        return a.Z.Messages.SET_VANITY_URL_ERROR_MESSAGE_REQUIRED_FOR_PUBLISHED_GUILDS;
    case s.evJ.VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED:
        return a.Z.Messages.VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED;
    case s.evJ.VANITY_URL_REQUIREMENTS_NOT_MET:
        return a.Z.Messages.SET_VANITY_URL_ERROR_MESSAGE_REQUIREMENTS_NOT_MET;
    default:
        return a.Z.Messages.CHANGE_VANITY_URL_ERROR;
    }
}
function r(e) {
    return e.hasFeature(s.oNc.VANITY_URL) || e.hasFeature(s.oNc.GUILD_WEB_PAGE_VANITY_URL) && null != e.vanityURLCode;
}
