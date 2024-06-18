"use strict";
n.d(t, {
  aB: function() {
    return a
  }
}), n(653041), n(47120);
var i = n(392711),
  r = n.n(i);
let s = new(n(710845)).Z("DragAndDropUtils");

function o(e) {
  let {
    oldOrdering: t,
    newOrdering: n,
    idGetter: i,
    existingPositionGetter: r,
    ascending: o = !0
  } = e, a = n.length;
  if (t.length !== a) return s.warn("Arrays are not of the same length!", t, n), [];
  let l = t.map(i).sort().join(":"),
    u = n.map(i).sort().join(":");
  if (l !== u) return s.warn("Object IDs in the old ordering and the new ordering are not the same.", l, u), [];
  let _ = {};
  for (let e = 0; e < a; e++) _[i(t[e])] = r(t[e]);
  let d = [];
  for (let e = 0; e < a; e++) {
    let t = i(n[e]),
      s = _[t],
      l = o ? e : a - 1 - e;
    (s !== l || r(n[e]) !== l) && d.push({
      id: t,
      position: l
    })
  }
  return !o && d.reverse(), d
}

function a(e, t, n) {
  let i = e[t],
    r = [...e];
  return r.splice(t, 1), r.splice(n, 0, i), r
}
t.ZP = {
  moveItemFromTo: a,
  calculatePositionDeltas: o,
  getPositionUpdates: function(e) {
    let {
      objectArray: t,
      fromPosition: n,
      toPosition: i,
      idGetter: s,
      existingPositionGetter: l,
      ascending: u = !0
    } = e;
    !Array.isArray(t) && (t = r().values(t));
    let _ = a(t, n, i);
    return o({
      oldOrdering: t,
      newOrdering: _,
      idGetter: s,
      existingPositionGetter: l,
      ascending: u
    })
  }
}