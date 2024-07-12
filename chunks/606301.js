n.d(t, {
  Tk: function() {
return _;
  },
  kT: function() {
return c;
  },
  wN: function() {
return d;
  }
}), n(757143);
var r = n(299608),
  i = n.n(r),
  a = n(626135),
  o = n(549058),
  s = n(981631);
let l = /(!|\.|;|,|-|—|–|\?|"|')/g,
  u = /(\n|\t|\s)/g,
  c = e => e.replace(l, '').replace(u, ' '),
  d = e => null == e ? [] : c(e).trim().split(' '),
  _ = i()(e => {
a.default.track(s.rMx.AUTO_SUGGEST_DISPLAYED, {
  suggestion_trigger: e
});
  }, o.xv, {
leading: !0,
trailing: !1
  });