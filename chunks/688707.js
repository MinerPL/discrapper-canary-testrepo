"use strict";
n.r(t), n("47120");
var a = n("243814"),
  s = n("920456"),
  l = n("996106"),
  i = n("452426"),
  r = n("186901"),
  o = n("981631");
t.default = {
  [o.RPCCommands.SET_USER_ACHIEVEMENT]: {
    scope: {
      [r.RPC_SCOPE_CONFIG.ANY]: [a.OAuth2Scopes.RPC, r.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, i.default)(e).required().keys({
      achievement_id: e.string().min(2).max(128),
      percent_complete: e.number().min(0).max(100).required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          achievement_id: n,
          percent_complete: a
        }
      } = e, i = t.application.id;
      if (null == i) throw new l.default({
        errorCode: o.RPCErrors.INVALID_COMMAND
      }, "No application.");
      return s.default.setUserAchievement(i, n, a).catch(e => {
        let {
          status: t,
          body: n
        } = e;
        switch (t) {
          case 429:
            throw new l.default({
              errorCode: o.RPCErrors.RATE_LIMITED
            }, "You are being rate limited.");
          case 403:
            if (null != n && n.code === o.AbortCodes.USER_NOT_AUTHORIZED_FOR_APPLICATION) throw new l.default({
              errorCode: o.RPCErrors.UNAUTHORIZED_FOR_ACHIEVEMENT
            }, "Not authorized to update this achievement.");
            throw new l.default({
              errorCode: o.RPCErrors.UNKNOWN_ERROR
            }, "Unknown error from API. status=".concat(t, "."));
          default:
            throw new l.default({
              errorCode: o.RPCErrors.UNKNOWN_ERROR
            }, "Unknown error from API. status=".concat(t, "."))
        }
      }).then(() => null)
    }
  },
  [o.RPCCommands.GET_USER_ACHIEVEMENTS]: {
    scope: {
      [r.RPC_SCOPE_CONFIG.ANY]: [a.OAuth2Scopes.RPC, r.RPC_LOCAL_SCOPE]
    },
    handler(e) {
      let {
        socket: t
      } = e, n = t.application.id;
      if (null == n) throw new l.default({
        errorCode: o.RPCErrors.INVALID_COMMAND
      }, "No application.");
      return s.default.fetchForApplication(n).then(e => e || [])
    }
  }
}