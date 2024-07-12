n.d(t, {
  Z: function() {
return l;
  }
}), n(411104);
var r = n(735250);
n(470079);
var i = n(758426),
  a = n(973675),
  o = n(949605),
  s = n(981631);

function l(e) {
  let {
tier: t,
...n
  } = e;
  switch (t) {
case s.Eu4.NONE:
case s.Eu4.TIER_1:
  return (0, r.jsx)(i.Z, {
    ...n
  });
case s.Eu4.TIER_2:
  return (0, r.jsx)(a.Z, {
    ...n
  });
case s.Eu4.TIER_3:
  return (0, r.jsx)(o.Z, {
    ...n
  });
default:
  throw Error('Not a valid tier type');
  }
}