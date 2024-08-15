n(653041);
var i = n(735250),
  a = n(470079),
  s = n(965288),
  l = n(934492);
t.Z = a.memo(function(e) {
  let {
channel: t,
participants: n,
maxTiles: a
  } = e;
  if (0 === n.length)
return null;
  let r = [];
  for (let e = 0; e < a; e++)
if (e < n.length) {
  let a = n[e];
  r.push((0, i.jsx)(s.Z, {
    channel: t,
    participant: a
  }, a.id));
} else
  r.push((0, i.jsx)(s.y, {}, e));
  return (0, i.jsx)('div', {
className: l.participants,
children: r
  });
});