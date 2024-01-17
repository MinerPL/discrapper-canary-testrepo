"use strict";
E.r(_), E.d(_, {
  default: function() {
    return a
  }
});
var t = E("102053"),
  o = E("689988"),
  n = E("303217"),
  r = E("352266");
class i extends o.default {
  _initialize() {
    setTimeout(() => t.default.timeAsync("\uD83D\uDCBE", "getBlockedDomainList", () => r.default.getBlockedDomainList()), 1e3), setTimeout(() => (0, n.fetchBlockedDomainList)(), 1e4), this.intervalID = setInterval(n.fetchBlockedDomainList, 144e5)
  }
  _terminate() {
    clearInterval(this.intervalID)
  }
}
var a = new i