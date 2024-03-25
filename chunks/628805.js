"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("394846"),
  s = n("446674"),
  l = n("913144");
let i = !1;
class r extends s.default.Store {
  getIsOpen() {
    return !a.isMobile || i
  }
}
r.displayName = "MobileWebSidebarStore";
var o = new r(l.default, {
  MOBILE_WEB_SIDEBAR_OPEN: function() {
    i = !0
  },
  MOBILE_WEB_SIDEBAR_CLOSE: function() {
    i = !1
  }
})