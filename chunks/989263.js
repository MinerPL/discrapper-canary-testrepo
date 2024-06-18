"use strict";
n.d(t, {
  $: function() {
    return u
  },
  v: function() {
    return l
  }
});
var i = n(131704),
  r = n(592125),
  s = n(496675),
  o = n(981631);
let a = o.S7T.VIEW_CHANNEL | o.S7T.READ_MESSAGE_HISTORY;

function l(e) {
  return null != e && (e.type === o.d4z.DM || e.type === o.d4z.GROUP_DM || (0, i.Qm)(e.type) && s.Z.canBasicChannel(a, e))
}

function u(e) {
  return null != e && l(r.Z.getBasicChannel(e))
}