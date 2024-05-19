"use strict";
n.r(t);
var a = n("243814"),
  s = n("706454"),
  l = n("981631");
t.default = {
  [l.RPCCommands.USER_SETTINGS_GET_LOCALE]: {
    scope: a.OAuth2Scopes.IDENTIFY,
    handler: () => ({
      locale: s.default.locale
    })
  }
}