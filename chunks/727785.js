"use strict";
var i, r, s, o, a, l;

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
n.d(t, {
  X5: function() {
    return _
  },
  a8: function() {
    return i
  },
  h8: function() {
    return r
  },
  xQ: function() {
    return s
  }
});
class _ {
  constructor(e) {
    u(this, "id", void 0), u(this, "text", void 0), this.id = e, this.text = e
  }
}(o = i || (i = {})).UP = "UP", o.DOWN = "DOWN", (a = r || (r = {})).GUILD = "GUILD", a.TEXT_CHANNEL = "TEXT_CHANNEL", a.GROUP_DM = "GROUP_DM", a.VOICE_CHANNEL = "VOICE_CHANNEL", a.USER = "USER", a.HEADER = "HEADER", a.APPLICATION = "APPLICATION", a.SKU = "SKU", a.LINK = "LINK", (l = s || (s = {})).USER = "@", l.TEXT_CHANNEL = "#", l.VOICE_CHANNEL = "!", l.GUILD = "*", l.APPLICATION = "$"