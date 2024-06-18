"use strict";
n.d(t, {
  Z: function() {
    return r
  }
}), n(47120), n(653041);
var i = n(887490);

function r(e, t) {
  if (i.bN.areStylesDisabled(e)) return [];
  let [n, r] = t, s = [];
  if (!i.LC.isText(n)) return s;
  let [o] = i.bN.node(e, i.C0.parent(r));
  return i.aj.isType(o, "applicationCommand") ? (n === o.children[0] && s.push({
    anchor: {
      path: r,
      offset: 0
    },
    focus: {
      path: r,
      offset: 0 + o.command.displayName.length + 1
    },
    commandName: !0
  }), s) : s
}