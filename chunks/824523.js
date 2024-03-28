"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("36478"),
  a = n("573492");

function o(e) {
  return (o = "function" == typeof r && "symbol" == typeof a ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof r && e.constructor === r && e !== r.prototype ? "symbol" : typeof e
  })(e)
}