"use strict";
n.r(t);
var a = n("706454"),
  s = n("981631");
t.default = {
  [s.RPCCommands.USER_SETTINGS_GET_LOCALE]: {
    scope: s.OAuth2Scopes.IDENTIFY,
    handler: () => ({
      locale: a.default.locale
    })
  }
}