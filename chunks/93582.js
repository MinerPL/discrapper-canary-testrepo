"use strict";
n.r(t), n.d(t, {
  getNodeText: function() {
    return function e(t) {
      return "string" == typeof t || "number" == typeof t ? t : t instanceof Array ? t.map(e).join("") : l.isValidElement(t) ? e(t.props.children) : void 0
    }
  }
});
var l = n("470079")