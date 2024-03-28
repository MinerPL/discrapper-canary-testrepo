"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("846519"),
  i = n("481060"),
  r = n("506071"),
  o = n("561308");
let u = e => {
  let {
    entry: t,
    textColor: n
  } = e, [u, d] = l.useState(Date.now()), c = (0, r.useIsWindowFocused)(), f = l.useMemo(() => {
    let {
      hours: e
    } = (0, o.calculateActiveTimestampDurations)(t, u);
    return e > 0 ? 3e5 : 1e3
  }, [t, u]);
  l.useEffect(() => {
    let e = new s.Interval;
    return e.start(f, () => {
      d(Date.now())
    }), !c && e.stop(), () => e.stop()
  }, [f, c]);
  let h = l.useMemo(() => (0, o.formatEntryTimestamp)(t, u), [t, u]);
  return (0, a.jsx)(i.Text, {
    variant: "text-xs/normal",
    tabularNumbers: !0,
    color: n,
    children: h
  })
};
t.default = e => {
  let {
    entry: t,
    textColor: n
  } = e;
  return (0, o.isEntryActive)(t) ? (0, a.jsx)(u, {
    entry: t,
    textColor: n
  }) : (0, a.jsx)(i.Text, {
    variant: "text-xs/normal",
    color: n,
    children: (0, o.formatEntryTimestamp)(t, Date.now())
  })
}