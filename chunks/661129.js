r.d(t, {
  F: function() {
return I;
  }
});
var n = r(140955),
  a = r(416987),
  o = r(596308),
  i = r(622574),
  _ = r(433691),
  E = r(118182),
  s = r(662355);
let c = [
100,
300
  ],
  I = (e, t = {}) => {
(0, s.A)(() => {
  let r;
  let s = (0, a.Y)(),
    I = (0, o.I)('FID'),
    u = e => {
      e.startTime < s.firstHiddenTime && (I.value = e.processingStart - e.startTime, I.entries.push(e), r(!0));
    },
    l = e => {
      e.forEach(u);
    },
    R = (0, i.N)('first-input', l);
  r = (0, n._)(e, I, c, t.reportAllChanges), R && (0, _.u)((0, E.R)(() => {
    l(R.takeRecords()), R.disconnect();
  }));
});
  };