"use strict";
n.r(t), n.d(t, {
  ActiveTimestamp: function() {
    return f
  },
  useTimestampTickedNow: function() {
    return c
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("846519"),
  r = n("481060"),
  o = n("706454"),
  u = n("506071"),
  d = n("561308");

function c(e) {
  let [t, n] = l.useState(Date.now()), a = (0, u.useIsWindowFocused)(), s = l.useMemo(() => {
    let {
      hours: n
    } = (0, d.calculateActiveTimestampDurations)(e, t);
    return n > 0 ? 3e5 : 1e3
  }, [e, t]);
  return l.useEffect(() => {
    let e = new i.Interval;
    return e.start(s, () => {
      n(Date.now())
    }), !a && e.stop(), () => e.stop()
  }, [s, a]), t
}
let f = e => {
  let {
    entry: t,
    textColor: n
  } = e, s = c(t), i = l.useMemo(() => (0, d.formatActiveTimestamp)(t, s), [t, s]);
  return (0, a.jsx)(r.Text, {
    variant: "text-xs/normal",
    tabularNumbers: !0,
    color: n,
    children: i
  })
};
t.default = e => {
  let {
    entry: t,
    textColor: n
  } = e, l = (0, d.isEntryActive)(t), i = (0, s.useStateFromStores)([o.default], () => o.default.locale);
  return l ? (0, a.jsx)(f, {
    entry: t,
    textColor: n
  }) : (0, a.jsx)(r.Text, {
    variant: "text-xs/normal",
    color: n,
    lineClamp: 1,
    children: (0, d.formatEndedTimestamp)(t, i)
  })
}