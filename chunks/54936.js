n.d(t, {
  n: function() {
return m;
  }
}), n(411104);
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(481060),
  l = n(910111),
  o = n(732559),
  c = n(723851),
  u = n(981631),
  d = n(689938),
  _ = n(317523);
let E = {
  [u.TaA.WINDOWS]: {
icon: c.Z,
getLabel: () => d.Z.Messages.WINDOWS
  },
  [u.TaA.MACOS]: {
icon: o.Z,
getLabel: () => d.Z.Messages.MACOS
  },
  [u.TaA.LINUX]: {
icon: l.Z,
getLabel: () => d.Z.Messages.LINUX
  }
};

function I(e) {
  let {
operatingSystem: t,
className: n
  } = e, s = E[t];
  if (null == s)
throw Error('Unexpected operating system: '.concat(t));
  let a = s.icon;
  return (0, i.jsx)(r.Tooltip, {
text: s.getLabel(),
children: e => (0, i.jsx)(a, {
  ...e,
  className: n
})
  });
}
let m = e => {
  let {
systems: t,
className: n,
iconClassName: s
  } = e;
  return (0, i.jsx)('div', {
className: a()(_.OSSection, n),
children: t.map(e => (0, i.jsx)(I, {
  operatingSystem: e,
  className: a()(_.purchaseUnitOperatingSystem, s)
}, e))
  });
};