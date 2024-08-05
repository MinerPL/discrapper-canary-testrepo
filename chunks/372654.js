n.d(t, {
  ML: function() {
return o;
  },
  nH: function() {
return i;
  },
  vK: function() {
return d;
  },
  yV: function() {
return s;
  }
});
var a = n(180650),
  r = n(921948);
let s = 1060,
  o = e => e * (0, r.Z)(),
  i = function(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
  {
    primary: n,
    secondary: a
  } = e;
return 'linear-gradient('.concat(t, 'deg, ').concat(n.toHslString(), ', ').concat(a.toHslString(), ')');
  },
  l = [
n(241371),
n(448509)
  ],
  c = {
[''.concat(a.T.FANTASY)]: [
  n(709393),
  n(646584)
],
[''.concat(a.T.ANIME)]: [
  n(647387),
  n(448509)
],
[''.concat(a.T.BREAKFAST)]: [
  n(289901),
  n(402344)
],
[''.concat(a.T.HALLOWEEN)]: [
  n(292006),
  n(799718)
],
[''.concat(a.T.FALL)]: [
  n(432170),
  n(15888)
],
[''.concat(a.T.WINTER)]: [
  n(304088),
  n(774694)
],
[''.concat(a.T.MONSTERS)]: [
  n(16724),
  n(441506)
]
  },
  d = e => {
var t;
return null == e ? l : null !== (t = c[e]) && void 0 !== t ? t : l;
  };