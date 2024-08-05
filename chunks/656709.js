n.d(t, {
  p: function() {
return s;
  }
});
var i = n(904245),
  a = n(957730);

function s(e) {
  let {
channel: t,
content: n,
entry: s
  } = e, l = a.ZP.parse(t, n);
  return i.Z.sendMessage(t.id, l, void 0, {
contentInventoryEntry: {
  content: s
}
  });
}