n.d(t, {
  DQ: function() {
return s;
  },
  He: function() {
return o;
  },
  P1: function() {
return a;
  }
});
var r = n(594174),
  i = n(981631);

function a(e) {
  return void 0 !== e && e.type !== i.d4z.DM;
}

function o(e) {
  var t, n;
  return null !== (n = null === (t = r.default.getUser(e)) || void 0 === t ? void 0 : t.hasFlag(i.xW$.SPAMMER)) && void 0 !== n && n;
}

function s(e) {
  return o(e.author.id);
}