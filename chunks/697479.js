n.d(t, {
  $: function() {
return r;
  }
});

function r(e, t, n) {
  let r = function(e, t, n) {
let r = 0,
  i = e.length;
for (; r < i;) {
  let a = r + i >>> 1;
  0 > n(e[a], t) ? r = a + 1 : i = a;
}
return r;
  }(e, t, n);
  e.splice(r, 0, t);
}