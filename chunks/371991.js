"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("846519"),
  r = n("481060"),
  o = n("706454"),
  u = n("506071"),
  d = n("561308");
let c = e => {
  let {
    entry: t,
    textColor: n
  } = e, [s, o] = l.useState(Date.now()), c = (0, u.useIsWindowFocused)(), f = l.useMemo(() => {
    let {
      hours: e
    } = (0, d.calculateActiveTimestampDurations)(t, s);
    return e > 0 ? 3e5 : 1e3
  }, [t, s]);
  l.useEffect(() => {
    let e = new i.Interval;
    return e.start(f, () => {
      o(Date.now())
    }), !c && e.stop(), () => e.stop()
  }, [f, c]);
  let h = l.useMemo(() => (0, d.formatActiveTimestamp)(t, s), [t, s]);
  return (0, a.jsx)(r.Text, {
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
  } = e, l = (0, d.isEntryActive)(t), i = (0, s.useStateFromStores)([o.default], () => o.default.locale);
  return l ? (0, a.jsx)(c, {
    entry: t,
    textColor: n
  }) : (0, a.jsx)(r.Text, {
    variant: "text-xs/normal",
    color: n,
    lineClamp: 1,
    children: (0, d.formatEndedTimestamp)(t, i)
  })
}