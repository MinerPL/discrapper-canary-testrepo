n.d(t, {
  aB: function() {
return s;
  }
}), n(653041), n(47120);
var r = n(392711),
  i = n.n(r);
let a = new(n(710845)).Z('DragAndDropUtils');

function o(e) {
  let {
oldOrdering: t,
newOrdering: n,
idGetter: r,
existingPositionGetter: i,
ascending: o = !0
  } = e, s = n.length;
  if (t.length !== s)
return a.warn('Arrays are not of the same length!', t, n), [];
  let l = t.map(r).sort().join(':'),
u = n.map(r).sort().join(':');
  if (l !== u)
return a.warn('Object IDs in the old ordering and the new ordering are not the same.', l, u), [];
  let c = {};
  for (let e = 0; e < s; e++)
c[r(t[e])] = i(t[e]);
  let d = [];
  for (let e = 0; e < s; e++) {
let t = r(n[e]),
  a = c[t],
  l = o ? e : s - 1 - e;
(a !== l || i(n[e]) !== l) && d.push({
  id: t,
  position: l
});
  }
  return !o && d.reverse(), d;
}

function s(e, t, n) {
  let r = e[t],
i = [...e];
  return i.splice(t, 1), i.splice(n, 0, r), i;
}
t.ZP = {
  moveItemFromTo: s,
  calculatePositionDeltas: o,
  getPositionUpdates: function(e) {
let {
  objectArray: t,
  fromPosition: n,
  toPosition: r,
  idGetter: a,
  existingPositionGetter: l,
  ascending: u = !0
} = e;
!Array.isArray(t) && (t = i().values(t));
let c = s(t, n, r);
return o({
  oldOrdering: t,
  newOrdering: c,
  idGetter: a,
  existingPositionGetter: l,
  ascending: u
});
  }
};