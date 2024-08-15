n.d(t, {
  Z: function() {
return o;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  r = n(311308),
  a = n(692547),
  s = n(481060);

function o(e) {
  let t = (0, l.useRef)(null),
[n, o] = (0, l.useState)(null),
[c] = (0, l.useState)(() => new r.TimelineDataSeries()),
u = (0, s.useToken)(a.Z.colors.BACKGROUND_PRIMARY).hsl(),
d = (0, s.useToken)(a.Z.colors.TEXT_NORMAL).hsl(),
h = (0, s.useToken)(a.Z.colors.BACKGROUND_ACCENT).hsl(),
p = (0, s.useToken)(a.Z.unsafe_rawColors.BRAND_500).hsl();
  (0, l.useEffect)(() => {
var e;
let n = t.current;
if (null == n)
  return;
let i = new r.TimelineGraphView(n, null !== (e = window.devicePixelRatio) && void 0 !== e ? e : 1);
i.backgroundColor = u, i.textColor = d, i.gridColor = h, i.timeOptions = {
  timeStyle: 'short'
}, i.fontFamily = 'gg sans', i.fontSize = 11, c.setColor(p), i.addDataSeries(c), i.updateEndDate(), o(i);
  }, [
t,
u,
p,
h,
d,
c
  ]), c.setPoints(e.dataPoints), null == n || n.updateEndDate();
  let _ = {
width: e.width,
height: e.height
  };
  return (0, i.jsx)('canvas', {
style: _,
width: e.width,
height: e.height,
ref: t
  }, 'canvas');
}