n.d(t, {
  fW: function() {
return u;
  }
}), n(47120), n(653041);
var r = n(470079);
n(823379);
var i = n(568315),
  a = n(83126),
  s = n(617191),
  o = n(82554);
let l = {
  [o.zR.SAFETY_DM_SPAM_FILTER]: i.Z,
  [o.zR.SAFETY_SENSITIVE_MEDIA_FILTERS]: s.Z,
  [o.zR.SAFETY_LANGUAGE_FILTER]: a.Z
};

function u(e) {
  return r.useMemo(() => null != e ? function(e) {
let t = [];
return Object.entries(l).forEach(n => {
  let [r, i] = n;
  (null == i.eligibleReportSubtypes || i.eligibleReportSubtypes.includes(e)) && t.push(r);
}), 0 === t.length ? null : t;
  }(e) : null, [e]);
}