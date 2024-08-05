n.d(t, {
  DQ: function() {
return l;
  },
  He: function() {
return o;
  },
  P1: function() {
return s;
  }
});
var r = n(825829),
  i = n(594174),
  a = n(981631);

function s(e) {
  return void 0 !== e && e.type !== a.d4z.DM;
}

function o(e) {
  var t, n;
  return null !== (n = null === (t = i.default.getUser(e)) || void 0 === t ? void 0 : t.hasFlag(a.xW$.SPAMMER)) && void 0 !== n && n;
}

function l(e) {
  return o(e.author.id) && !(0, r.nY)(e);
}