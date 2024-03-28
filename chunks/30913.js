"use strict";
var r = n("67867"),
  a = n("294377"),
  o = n("821819"),
  i = n("274745"),
  l = n("342545"),
  u = n("502754"),
  s = a("URL");
r({
  target: "URL",
  stat: !0,
  forced: !(u && o(function() {
    s.canParse()
  }))
}, {
  canParse: function(e) {
    var t = i(arguments.length, 1),
      n = l(e),
      r = t < 2 || void 0 === arguments[1] ? void 0 : l(arguments[1]);
    try {
      return new s(n, r), !0
    } catch (e) {
      return !1
    }
  }
})