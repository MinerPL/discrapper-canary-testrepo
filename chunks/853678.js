"use strict";
n.r(t), n("47120"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648");
var a = n("12647"),
  s = n("49012"),
  l = n("358085"),
  i = n("996106"),
  r = n("914946"),
  o = n("452426"),
  u = n("186901"),
  d = n("981631");
t.default = {
  [d.RPCCommands.OPEN_EXTERNAL_LINK]: {
    scope: {
      [u.RPC_SCOPE_CONFIG.ANY]: [u.RPC_AUTHENTICATED_SCOPE]
    },
    validation: e => (0, o.default)(e).required().keys({
      url: e.string().required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          url: n
        }
      } = e;
      (0, r.validatePostMessageTransport)(t.transport);
      try {
        let e = new URL(n);
        l.isPlatformEmbedded && a.default.focus(null, !0), (0, s.handleClick)({
          href: e.toString()
        })
      } catch (e) {
        throw new i.default({
          errorCode: d.RPCErrors.INVALID_COMMAND
        }, "Invalid URL: ".concat(n))
      }
    }
  }
}