n.d(t, {
  h: function() {
return s;
  }
}), n(177593), n(653041);
var r = n(570140),
  i = n(38618);
let a = [];

function o(e) {
  setImmediate(() => e());
}

function s(e) {
  i.Z.isConnectedOrOverlay() ? o(e) : a.push(e);
}
r.Z.subscribe('CONNECTION_OPEN', () => {
  a.forEach(e => o(e)), a = [];
}), r.Z.subscribe('CONNECTION_RESUMED', () => {
  a.forEach(e => o(e)), a = [];
});