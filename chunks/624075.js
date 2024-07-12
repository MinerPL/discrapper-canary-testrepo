n.d(t, {
  Z: function() {
return i;
  }
}), n(47120);
var r = n(191532);

function i(e, t, n, i) {
  let a = (0, r.Z)(e, t, i),
o = (e, t) => n.computeScrollPosition(e, t);
  return {
...a,
getScrollPosition: o,
isItemVisible(e, n) {
  let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    [i, a] = o(e, n),
    s = t();
  return r ? i >= s.scrollTop && i + a <= s.scrollTop + s.offsetHeight : i + a >= s.scrollTop && i <= s.scrollTop + s.offsetHeight;
},
scrollToIndex(e) {
  let {
    section: t,
    row: n,
    animate: r,
    callback: i,
    padding: s = 0
  } = e, [l, u] = o(t, n);
  a.scrollIntoViewRect({
    start: l,
    end: l + u,
    padding: s,
    animate: r,
    callback: i
  });
}
  };
}