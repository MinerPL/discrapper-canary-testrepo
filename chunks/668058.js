n.d(t, {
  $: function() {
return s;
  }
}), n(47120);
var i = n(470079),
  a = n(881052);

function s(e) {
  let {
onError: t,
onSuccess: n,
report: s
  } = e, [r, l] = i.useState(!1);
  return {
reportFalsePositive: i.useCallback(async () => {
  if (!r) {
    l(!0);
    try {
      await s(), null == n || n();
    } catch (n) {
      let e = new a.Hx(n);
      null == t || t(e);
    } finally {
      l(!1);
    }
  }
}, [
  r,
  t,
  n,
  s
]),
isReportFalsePositiveLoading: r
  };
}