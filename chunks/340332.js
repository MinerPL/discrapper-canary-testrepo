n.d(t, {
  r: function() {
return s;
  },
  z: function() {
return l;
  }
});
var r = n(51407),
  i = n(46973),
  a = n(36703),
  o = n(526761);

function s(e, t) {
  let n = t === i.Yn.STREAM ? r.h.STREAM : r.h.USER;
  return 1 > Math.abs((0, a.P)(n) - (0, a.P)(e)) ? n : e;
}

function l(e) {
  switch (e) {
case i.Yn.DEFAULT:
  return o.u0.USER;
case i.Yn.STREAM:
  return o.u0.STREAM;
default:
  return;
  }
}