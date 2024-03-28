"use strict";
var r = n("67867"),
  a = n("447631"),
  o = n("688313"),
  i = n("729605"),
  l = n("65007"),
  u = n("256110");
r({
  target: "Object",
  stat: !0,
  sham: !a
}, {
  getOwnPropertyDescriptors: function(e) {
    for (var t, n, r = i(e), a = l.f, s = o(r), c = {}, d = 0; s.length > d;) void 0 !== (n = a(r, t = s[d++])) && u(c, t, n);
    return c
  }
})