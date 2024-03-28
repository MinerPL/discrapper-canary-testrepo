"use strict";
n.r(t), n("47120");
var a = n("232567"),
  s = n("996106"),
  l = n("452426"),
  i = n("863141"),
  r = n("186901"),
  o = n("981631");
t.default = {
  [o.RPCCommands.GET_USER]: {
    scope: r.RPC_LOCAL_SCOPE,
    validation: e => (0, l.default)(e).required().keys({
      id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          id: t
        }
      } = e;
      return (0, a.getUser)(t).then(i.default).catch(() => {
        throw new s.default({
          errorCode: o.RPCErrors.INVALID_USER
        }, "Invalid user id: ".concat(t))
      })
    }
  }
}