n.d(t, {
  Z: function() {
return l;
  },
  s: function() {
return r;
  }
}), n(47120);
var r, i, a = n(470079),
  o = n(695346),
  s = n(768581);

function l(e) {
  let {
displayProfile: t,
size: n,
canAnimate: r,
pendingBanner: i
  } = e, l = o.QK.getSetting(), u = null == t ? void 0 : t.getPreviewBanner(i, r, n), [c, d] = (0, a.useState)((null == t ? void 0 : t.banner) == null ? 2 : 0);
  return (0, a.useEffect)(() => {
if (null == u || 0 !== c)
  return;
d(1);
let e = new Image();
e.src = u, e.onload = () => d(2);
  }, [
u,
c
  ]), (0, a.useEffect)(() => {
if (l)
  return;
let e = null == t ? void 0 : t.getPreviewBanner(i, !0, n);
if (null != e && !!(0, s.F8)(e))
  new Image().src = e;
  }, [
l,
t,
n,
i
  ]), {
bannerSrc: u,
status: c
  };
}
(i = r || (r = {}))[i.SHOULD_LOAD = 0] = 'SHOULD_LOAD', i[i.LOADING = 1] = 'LOADING', i[i.COMPLETE = 2] = 'COMPLETE';