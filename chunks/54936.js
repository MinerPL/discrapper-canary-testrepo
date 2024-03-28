"use strict";
n.r(t), n.d(t, {
  OperatingSystemSection: function() {
    return T
  }
}), n("411104");
var s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  i = n("481060"),
  r = n("910111"),
  o = n("732559"),
  u = n("723851"),
  d = n("981631"),
  c = n("689938"),
  f = n("294549");
let E = {
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
  } = e, a = E[t];
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
    className: l()(f.OSSection, n),
    children: t.map(e => (0, s.jsx)(_, {
      operatingSystem: e,
      className: l()(f.purchaseUnitOperatingSystem, a)
    }, e))
  })
}