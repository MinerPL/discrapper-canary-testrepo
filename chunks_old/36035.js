"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("862337"),
  i = n("77078"),
  r = n("866190"),
  u = n("476774");
let o = e => {
  let {
    entry: t,
    textColor: n
  } = e, [o, d] = l.useState(Date.now()), c = (0, r.useIsWindowFocused)(), f = l.useMemo(() => {
    let {
      hours: e
    } = (0, u.calculateActiveTimestampDurations)(t, o);
    return e > 0 ? 3e5 : 1e3
  }, [t, o]);
  l.useEffect(() => {
    let e = new s.Interval;
    return e.start(f, () => {
      d(Date.now())
    }), !c && e.stop(), () => e.stop()
  }, [f, c]);
  let h = l.useMemo(() => (0, u.formatEntryTimestamp)(t, o), [t, o]);
  return (0, a.jsx)(i.Text, {
    variant: "text-xs/normal",
    tabularNumbers: !0,
    color: n,
    children: h
  })
};
var d = e => {
  let {
    entry: t,
    textColor: n
  } = e, l = (0, u.isEntryActive)(t);
  return l ? (0, a.jsx)(o, {
    entry: t,
    textColor: n
  }) : (0, a.jsx)(i.Text, {
    variant: "text-xs/normal",
    color: n,
    children: (0, u.formatEntryTimestamp)(t, Date.now())
  })
}