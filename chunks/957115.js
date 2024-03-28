"use strict";
a.r(t), a.d(t, {
  shuffleProblems: function() {
    return n
  }
}), a("653041");
var s = a("392711"),
  l = a.n(s);
let n = (e, t) => {
  let a = l().shuffle(e),
    s = a.findIndex(e => e.value === t);
  if (s > -1) {
    let e = a[s];
    a.splice(s, 1), a.push(e)
  }
  return a
}