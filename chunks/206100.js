"use strict";
n.r(t), n.d(t, {
  OperatingSystemSection: function() {
    return T
  }
}), n("70102");
var s = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  i = n("77078"),
  r = n("84084"),
  o = n("260162"),
  u = n("415844"),
  d = n("49111"),
  c = n("782340"),
  E = n("926494");
let f = {
  [d.OperatingSystems.WINDOWS]: {
    icon: u.default,
    getLabel: () => c.default.Messages.WINDOWS
  },
  [d.OperatingSystems.MACOS]: {
    icon: o.default,
    getLabel: () => c.default.Messages.MACOS
  },
  [d.OperatingSystems.LINUX]: {
    icon: r.default,
    getLabel: () => c.default.Messages.LINUX
  }
};

function _(e) {
  let {
    operatingSystem: t,
    className: n
  } = e, a = f[t];
  if (null == a) throw Error("Unexpected operating system: ".concat(t));
  let l = a.icon;
  return (0, s.jsx)(i.Tooltip, {
    text: a.getLabel(),
    children: e => (0, s.jsx)(l, {
      ...e,
      className: n
    })
  })
}
let T = e => {
  let {
    systems: t,
    className: n,
    iconClassName: a
  } = e;
  return (0, s.jsx)("div", {
    className: l(E.OSSection, n),
    children: t.map(e => (0, s.jsx)(_, {
      operatingSystem: e,
      className: l(E.purchaseUnitOperatingSystem, a)
    }, e))
  })
}