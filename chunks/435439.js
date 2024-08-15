l.d(n, {
  Z: function() {
return d;
  }
});
var t = l(735250),
  r = l(481060),
  i = l(374129),
  a = l(639351),
  u = l(908841),
  s = l(410441),
  o = l(206583);
let c = {
  [o.kG.SPOTIFY]: u.Z,
  [o.kG.CRUNCHYROLL]: r.CrunchyrollNeutralIcon,
  [o.kG.XBOX]: a.Z,
  [o.kG.PLAYSTATION]: i.Z
};

function d(e) {
  let {
type: n,
...l
  } = e, r = c[n];
  return null == r ? null : (0, t.jsx)(s.Z, {
Icon: r,
...l
  });
}