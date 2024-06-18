"use strict";
n.d(t, {
  K: function() {
    return r
  }
});
var s = n(998502);
async function r(e) {
  try {
    return await s.ZP.getSetting("USERNAME_PREFIX", "") + e
  } catch (e) {}
  return e
}