"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("981631");
let s = "<removed>";

function l(e) {
  var t, n;
  let l = {
    ...e
  };
  if ("object" == typeof(t = l).args && "string" == typeof t.cmd) l = function(e) {
    switch (e.cmd) {
      case a.RPCCommands.AUTHENTICATE:
      case a.RPCCommands.GET_PROVIDER_ACCESS_TOKEN:
        return {
          ...e, args: {
            ...e.args,
            access_token: s
          }
        };
      default:
        return {
          ...e
        }
    }
  }(l);
  if ("object" == typeof(n = l).data && "string" == typeof n.cmd) l = function(e) {
    switch (e.cmd) {
      case a.RPCCommands.AUTHENTICATE:
      case a.RPCCommands.GET_PROVIDER_ACCESS_TOKEN:
        return {
          ...e, data: {
            ...e.data,
            access_token: s
          }
        };
      default:
        return {
          ...e
        }
    }
  }(l);
  return l
}