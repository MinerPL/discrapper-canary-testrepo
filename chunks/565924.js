"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(592125),
  r = n(981631);

function s(e) {
  if (null == e.parent_id) return e.type === r.d4z.GUILD_CATEGORY ? (e.position + 1) * 1e3 : e.position;
  {
    var t, n;
    let r = ((null !== (n = null === (t = i.Z.getChannel(e.parent_id)) || void 0 === t ? void 0 : t.position) && void 0 !== n ? n : 0) + 1) * 1e3;
    return e.isGuildVocal() ? r + e.position + 500 : r + e.position
  }
}

function o(e, t) {
  var n, i, r, o, a, l;
  if (e.score !== t.score) return t.score - e.score;
  let u = s(e.record),
    _ = s(t.record);
  if (u !== _) return u - _;
  let d = null !== (o = null !== (r = e.sortable) && void 0 !== r ? r : null === (n = e.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== o ? o : "",
    c = null !== (l = null !== (a = e.sortable) && void 0 !== a ? a : null === (i = t.comparator) || void 0 === i ? void 0 : i.toLocaleLowerCase()) && void 0 !== l ? l : "";
  return d < c ? -1 : d > c ? 1 : 0
}