"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("49111");
let s = "<removed>";

function l(e) {
  var t, n;
  let l = {
    ...e
  };
  if ("object" == typeof(t = l).args && "string" == typeof t.cmd) l = function(e) {
    if (e.cmd === a.RPCCommands.AUTHENTICATE) return {
      ...e,
      args: {
        ...e.args,
        access_token: s
      }
    };
    return {
      ...e
    }
  }(l);
  if ("object" == typeof(n = l).data && "string" == typeof n.cmd) l = function(e) {
    if (e.cmd === a.RPCCommands.AUTHENTICATE) return {
      ...e,
      data: {
        ...e.data,
        access_token: s
      }
    };
    return {
      ...e
    }
  }(l);
  return l
}