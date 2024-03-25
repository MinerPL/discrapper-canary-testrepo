"use strict";
n.r(t), n.d(t, {
  createRPCCommand: function() {
    return s
  }
});
var a = n("61141");

function s(e, t) {
  var n;
  let {
    scope: s,
    handler: l
  } = t, i = {
    scope: s,
    handler: l
  }, r = null === (n = a.RPCCommandSchemas[e]) || void 0 === n ? void 0 : n.request, o = null;
  return null != r && (i.validation = function(e) {
    return null == o && (o = r(e)), o
  }), i
}