"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(75060),
  r = n(991240);
async function s() {
  let e = null;
  try {
    e = await i.Z.getThermalState()
  } catch (e) {
    if (e.message === r.n) return Promise.resolve(null);
    throw e
  }
  return Promise.resolve(e)
}