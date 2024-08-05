n.d(t, {
  S: function() {
return _;
  }
});
var r = n(735250);
n(470079);
var i = n(979714),
  a = n(800870),
  s = n(780384),
  o = n(79320),
  l = n(600795);
let u = (0, a.vQ)('keydown', e => !!(0, l.Tm)(e) && (e.preventDefault(), !0)),
  c = (0, a.vQ)('mousedown', e => -1 === e.type.indexOf('touch') && -1 !== e.type.indexOf('mouse') && ((0, o.Yk)(!1), !0)),
  d = {
backends: [{
    id: 'html5',
    backend: i.PD,
    transition: c
  },
  {
    id: 'keyboard',
    backend: l.ZP,
    context: {
      window,
      document
    },
    options: {
      onDndModeChanged: o.Yk,
      announcer: s.uv
    },
    preview: !0,
    transition: u
  }
]
  };

function _(e) {
  let {
children: t
  } = e;
  return (0, r.jsx)(a.WG, {
options: d,
children: t
  });
}