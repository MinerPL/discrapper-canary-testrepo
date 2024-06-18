"use strict";
n.d(t, {
  d: function() {
    return r
  }
});
var i = n(149765);

function r(e) {
  if (null == e.guilds) return e;
  return {
    ...e,
    guilds: e.guilds.map(e => ({
      ...e,
      permissions: i.vB(e.permissions)
    }))
  }
}