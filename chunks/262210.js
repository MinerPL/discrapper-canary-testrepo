n.d(t, {
  Z: function() {
return d;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(846519),
  s = n(481060),
  o = n(70956),
  l = n(471627);
let u = e => String(e).padStart(2, '0'),
  c = e => {
let t = Math.floor(e) % o.Z.Seconds.MINUTE,
  n = Math.floor(e / o.Z.Seconds.MINUTE) % o.Z.Seconds.MINUTE,
  r = Math.floor(e / o.Z.Seconds.HOUR);
return 0 === r ? ''.concat(u(n), ':').concat(u(t)) : ''.concat(u(r), ':').concat(u(n), ':').concat(u(t));
  };

function d(e) {
  let {
start: t,
end: n
  } = e, [u] = i.useState(new a.Xp()), [d, _] = i.useState(Date.now());
  i.useEffect(() => (u.start(o.Z.Millis.HALF_SECOND, () => _(Date.now())), () => u.stop()), [u]);
  let E = (n - t) / o.Z.Millis.SECOND,
f = Math.max(Math.min((d - t) / o.Z.Millis.SECOND, E), 0),
h = f / E;
  return (0, r.jsxs)('div', {
className: l.container,
children: [
  (0, r.jsx)(s.Text, {
    variant: 'text-xs/normal',
    color: 'text-normal',
    className: l.text,
    children: c(f)
  }),
  (0, r.jsx)('div', {
    className: l.bar,
    children: (0, r.jsx)('div', {
      className: l.progress,
      style: {
        width: ''.concat(100 * Math.max(Math.min(h, 1), 0), '%')
      }
    })
  }),
  (0, r.jsx)(s.Text, {
    variant: 'text-xs/normal',
    color: 'text-normal',
    className: l.text,
    children: c(E)
  })
]
  });
}