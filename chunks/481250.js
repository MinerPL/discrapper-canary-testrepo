n.d(t, {
  V: function() {
return R;
  },
  a: function() {
return y;
  }
}), n(653041), n(47120);
var r = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  o = n(481060),
  s = n(304680),
  l = n(763520),
  c = n(600164),
  d = n(352978),
  u = n(131951),
  m = n(226961),
  p = n(513547),
  h = n(65154),
  g = n(634040),
  f = n(549856);
let C = {
  [h.Z.NO_OVERRIDE]: 'None',
  [h.Z.LOW]: 'Low Quality Stream',
  [h.Z.HIGH]: 'High Quality Stream'
};

function y(e) {
  let t = [],
n = 0;
  for (e.length % 2 != 0 && e.push((0, r.jsx)(c.Z, {
  basis: '50%',
  grow: 0
}, n++)); e.length > 0;)
t.push((0, r.jsx)(c.Z, {
  basis: '50%',
  grow: 0,
  children: e.splice(0, 2)
}, n++));
  return t;
}
let S = {
  ssrc: 1,
  codec: 2
};

function R(e, t, n, a, R) {
  return e.map((D, v) => {
var b, E;
let Z = [];
for (let e of Object.keys(D).sort((e, t) => {
    let n = S[e],
      r = S[t];
    if (n !== r)
      return void 0 === n ? 1 : void 0 === r ? -1 : n - r;
    return m.Pz[e] !== m.Pz[t] ? m.Pz[e] ? 1 : -1 : e > t ? 1 : -1;
  })) {
  let t = D[e];
  if (!p.al[e] && void 0 !== t)
    Z.push((0, r.jsx)(p.ck, {
      section: a,
      label: e,
      value: t
    }, e));
}
return (0, r.jsxs)(o.FormSection, {
  className: f.marginBottom40,
  title: D.type,
  titleClassName: g.sectionHeader,
  children: [
    'video' === D.type && null != n && null != a && null != R && function(e, t, n, a) {
      let o = a.get(t, n, e.ssrc);
      return null != o ? (0, r.jsx)('div', {
        className: i()(g.videoWrapper, f.marginBottom40),
        children: (0, r.jsx)(d.Z, {
          streamId: o,
          videoComponent: u.Z.getMediaEngine().Video,
          paused: !1,
          videoSpinnerContext: l.m.REPLAY_VIDEO_STREAM,
          userId: n
        })
      }) : null;
    }(D, n, a, R),
    y(Z),
    'video' === D.type && v === e.length - 1 && null != n && null != a && null != R && (b = a, E = t, (0, r.jsx)(c.Z, {
      className: f.marginBottom20,
      children: (0, r.jsxs)(c.Z.Child, {
        basis: '100%',
        children: [
          (0, r.jsx)(o.FormTitle, {
            tag: o.FormTitleTags.H5,
            className: f.marginBottom8,
            children: 'Simulcast Override'
          }),
          (0, r.jsx)(o.SingleSelect, {
            value: m.ZP.getSimulcastDebugOverride(b, E),
            onChange: e => {
              s.MS(b, E, e);
            },
            options: Object.values(h.Z).map(e => ({
              value: e,
              label: C[e]
            }))
          })
        ]
      })
    }))
  ]
}, ''.concat(D.type, ' + ').concat(D.ssrc));
  });
}