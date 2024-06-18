"use strict";
n.d(t, {
  RO: function() {
    return d
  },
  rK: function() {
    return c
  }
}), n(47120);
var i = n(470079),
  r = n(913527),
  s = n.n(r),
  o = n(846519),
  a = n(987170);
let l = new Date("2024-01-04T07:59:59.000Z"),
  u = s()(l),
  _ = (0, a.Z)({
    id: "2023-11_seasonal_gifting",
    label: "Seasonal Gifting 2023",
    kind: "user",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  d = (0, a.Z)({
    id: "2023-11_seasonal_gifting_marketing_2023",
    label: "Seasonal Gifting Marketing 2023",
    kind: "user",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enabled",
      config: {
        enabled: !0
      }
    }]
  });

function c() {
  let [e, t] = i.useState(() => u.isAfter(Date.now()));
  return i.useEffect(() => {
    let n = new o.V7,
      i = () => {
        let e = Math.min(u.diff(Date.now(), "millisecond"), 864e5);
        null == n || n.start(e, () => {
          u.isBefore(Date.now()) ? t(!1) : i()
        })
      };
    return e && i(), () => n.stop()
  }), e
}
t.ZP = _