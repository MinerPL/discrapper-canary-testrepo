"use strict";
var n = r("535242");
t.exports = function(t) {
  return !!t && !!t.ownerDocument && n(t) && "IMG" === t.nodeName
}