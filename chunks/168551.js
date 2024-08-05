n.d(t, {
  PQ: function() {
return c;
  },
  e3: function() {
return d;
  }
}), n(47120);
var r = n(470079),
  i = n(691324),
  a = n(442837),
  s = n(780384),
  o = n(813852),
  l = n(514361),
  u = n(629935);
let c = 'data-client-themes',
  d = 'custom-theme-background',
  _ = () => {
let e = (0, a.e7)([l.Z], () => l.Z.gradientPreset),
  {
    enabled: t
  } = o.U.useExperiment({
    location: 'useBackgroundGradientCSS'
  });
return (0, r.useMemo)(() => {
  if (null == e)
    return null;
  let n = l.Z.getLinearGradient();
  if (null == n)
    return null;
  let [r, a] = [...e.colors].sort((e, t) => t.stop - e.stop).slice(0, 2).map(e => i.b[e.token].hex), o = (0, u.W4)({
    enabled: t,
    primaryColor: r,
    secondaryColor: a,
    isDarkTheme: (0, s.wj)(e.theme)
  }), c = t ? '\n      '.concat(Object.entries(o).map(e => {
    let [t, n] = e;
    return ''.concat(t, ': ').concat(n, ';');
  }).join('\n'), '\n    ') : '';
  return '.'.concat(d, ' {\n      --custom-theme-background: ').concat(n, ';\n      ').concat(c, '\n    }');
}, [
  t,
  e
]);
  };
t.ZP = () => {
  let e = _();
  return null === e ? {
clientThemesCSS: '',
clientThemesClassName: ''
  } : {
clientThemesCSS: e,
clientThemesClassName: d
  };
};