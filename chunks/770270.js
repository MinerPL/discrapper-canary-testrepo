"use strict";
t.d(s, {
  i: function() {
    return l
  },
  p: function() {
    return a
  }
});
var n = t(981631),
  i = t(689938);

function l(e) {
  switch (e) {
    case n.evJ.UNKNOWN_CHANNEL:
      return i.Z.Messages.SET_VANITY_URL_ERROR_MESSAGE_UNKNOWN_CHANNEL;
    case n.evJ.INVALID_PERMISSIONS:
      return i.Z.Messages.SET_VANITY_URL_ERROR_MESSAGE_INVALID_PERMISSIONS;
    case n.evJ.INVALID_ACCESS:
      return i.Z.Messages.SET_VANITY_URL_ERROR_MESSAGE_INVALID_ACCESS;
    case n.evJ.VANITY_URL_REQUIRED_FOR_PUBLISHED_GUILDS:
      return i.Z.Messages.SET_VANITY_URL_ERROR_MESSAGE_REQUIRED_FOR_PUBLISHED_GUILDS;
    case n.evJ.VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED:
      return i.Z.Messages.VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED;
    case n.evJ.VANITY_URL_REQUIREMENTS_NOT_MET:
      return i.Z.Messages.SET_VANITY_URL_ERROR_MESSAGE_REQUIREMENTS_NOT_MET;
    default:
      return i.Z.Messages.CHANGE_VANITY_URL_ERROR
  }
}

function a(e) {
  return e.hasFeature(n.oNc.VANITY_URL) || e.hasFeature(n.oNc.GUILD_WEB_PAGE_VANITY_URL) && null != e.vanityURLCode
}