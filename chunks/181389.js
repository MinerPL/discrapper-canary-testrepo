n.d(t, {
  Jl: function() {
return l;
  },
  g9: function() {
return o;
  }
}), n(653041);
var i = n(395041);
n(349033);
var a = n(999650);
n(72006);
var s = n(405656);
n(981631);
let r = {
  [a.Qe.FILTER]: i.w,
  [a.Qe.ANSWER]: i.O
};

function l() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
t = [];
  return Object.keys(e).forEach(n => {
let i = e[n];
t.push({
  strategy: (e, t, i) => function(e, t, n, i) {
    t.findEntityRanges(t => {
      let n = t.getEntity();
      return null !== n && e.getEntity(n).getType() === i;
    }, n);
  }(i, e, t, n),
  component: r[i.componentType]
});
  }), t;
}

function o(e, t) {
  let {
focusOffset: n,
anchorOffset: i
  } = t.getSelection();
  return (0, s.g9)(e, n, i);
}