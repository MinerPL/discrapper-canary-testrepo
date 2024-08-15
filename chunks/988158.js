n.d(e, {
  X: function() {
return l;
  },
  h: function() {
return s;
  }
}), n(757143), n(47120);
var o = n(470079),
  a = n(902676);

function s(t) {
  let {
protocol: e,
hostname: n
  } = o.useMemo(() => ({
protocol: (0, a.E)(t),
hostname: (0, a.F)(t)
  }), [t]), s = ''.concat(e, '//').concat(n);
  return {
protocol: e,
hostname: n,
theRestOfTheUrl: t.replace(s, '')
  };
}

function l(t) {
  let {
url: e,
trustUrl: n,
onConfirm: a,
onClose: l
  } = t, [r, i] = o.useState(!1), {
protocol: c,
hostname: d,
theRestOfTheUrl: _
  } = s(e), u = o.useCallback(() => {
r && n(e), null == l || l(), a();
  }, [
e,
r,
n,
a,
l
  ]);
  return {
protocol: c,
hostname: d,
theRestOfTheUrl: _,
shouldTrustUrl: r,
setShouldTrustUrl: i,
handleConfirm: u
  };
}