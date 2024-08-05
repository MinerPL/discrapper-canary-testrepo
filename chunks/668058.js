n.d(t, {
  $: function() {
return a;
  }
}), n(47120);
var i = n(470079),
  s = n(881052);

function a(e) {
  let {
onError: t,
onSuccess: n,
report: a
  } = e, [r, l] = i.useState(!1);
  return {
reportFalsePositive: i.useCallback(async () => {
  if (!r) {
    l(!0);
    try {
      await a(), null == n || n();
    } catch (n) {
      let e = new s.Hx(n);
      null == t || t(e);
    } finally {
      l(!1);
    }
  }
}, [
  r,
  t,
  n,
  a
]),
isReportFalsePositiveLoading: r
  };
}