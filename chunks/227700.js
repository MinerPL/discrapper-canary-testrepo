"use strict";
u.r(e), u.d(e, {
  getRoundingMethod: function() {
    return r
  }
});
var n = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function(t) {
    return t < 0 ? Math.ceil(t) : Math.floor(t)
  }
};

function r(t) {
  return t ? n[t] : n.trunc
}