"use strict";
n.r(t);
var a = n("570140");
t.default = {
  closeSidebar() {
    a.default.dispatch({
      type: "MOBILE_WEB_SIDEBAR_CLOSE"
    })
  },
  openSidebar() {
    a.default.dispatch({
      type: "MOBILE_WEB_SIDEBAR_OPEN"
    })
  }
}