o.d(n, {
  Z: function() {
return c;
  }
});
var t = o(735250);
o(470079);
var i = o(585183),
  r = o(728151),
  s = o(981631);

function c(e) {
  let {
authToken: n,
onContinue: o,
onError: c,
onClose: l
  } = e;
  return (0, t.jsx)(i.h, {
platformType: s.ABu.CRUNCHYROLL,
clientId: r.sp,
scopes: r.Ii,
authToken: n,
onContinue: o,
onError: c,
onClose: l
  });
}