n.d(t, {
  W: function() {
return a;
  }
});
var r = n(99047),
  i = n(470079);

function a(e) {
  let t = (0, r.d)(e),
[n, a] = (0, i.useState)(null),
[s, o] = (0, i.useState)([]),
l = () => {
  o([]), t.close();
};
  return {
focusStrategy: n,
...t,
open(e = null) {
  a(e), t.open();
},
toggle(e = null) {
  a(e), t.toggle();
},
close() {
  l();
},
UNSTABLE_expandedKeysStack: s,
UNSTABLE_openSubmenu: (e, t) => {
  o(n => t > n.length ? n : [
    ...n.slice(0, t),
    e
  ]);
},
UNSTABLE_closeSubmenu: (e, t) => {
  o(n => n[t] === e ? n.slice(0, t) : n);
}
  };
}