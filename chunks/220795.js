"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("915639"),
  s = n("49111"),
  l = {
    [s.RPCCommands.USER_SETTINGS_GET_LOCALE]: {
      scope: s.OAuth2Scopes.IDENTIFY,
      handler: () => ({
        locale: a.default.locale
      })
    }
  }