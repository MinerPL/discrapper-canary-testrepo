t.d(n, {
  Z: function() {
return d;
  }
});
var l = t(735250),
  r = t(481060),
  i = t(374129),
  a = t(639351),
  o = t(908841),
  s = t(410441),
  c = t(206583);
let u = {
  [c.kG.SPOTIFY]: o.Z,
  [c.kG.CRUNCHYROLL]: r.CrunchyrollNeutralIcon,
  [c.kG.XBOX]: a.Z,
  [c.kG.PLAYSTATION]: i.Z
};

function d(e) {
  let {
type: n,
...t
  } = e, r = u[n];
  return null == r ? null : (0, l.jsx)(s.Z, {
Icon: r,
...t
  });
}