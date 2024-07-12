n.d(t, {
  D: function() {
return a;
  }
});

function a(e) {
  return e.map((e, t) => {
var n, a;
return {
  file: e.file,
  name: null !== (a = e.id) && void 0 !== a ? a : 'attachment_'.concat(t),
  filename: null === (n = e.file) || void 0 === n ? void 0 : n.name
};
  });
}