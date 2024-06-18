"use strict";
t.d(s, {
  F: function() {
    return a
  },
  i: function() {
    return r
  }
}), t(653041), t(47120);
var n = t(149765),
  i = t(233608),
  l = t(981631);

function a(e) {
  return n.Db(e.permissions, l.TC2)
}

function r(e, s) {
  let t = [],
    a = i.Z.getGuildPermissionSpecMap(e);
  for (let e of l.yYS) n.e$(s.permissions, e) && t.push(a[e.toString()].title);
  return t
}