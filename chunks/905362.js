n.d(t, {
  S: function() {
return l;
  },
  q: function() {
return u;
  }
});
var r = n(735250);
n(470079);
var i = n(704215),
  a = n(481060),
  s = n(645041),
  o = n(970606);

function l(e) {
  (0, a.openModalLazy)(async () => {
let {
  default: t
} = await n.e('95883').then(n.bind(n, 83521));
return n => (0, r.jsx)(t, {
  ...n,
  onClose: t => {
    (0, s.Qd)(i.C.ADOPT_CLAN_IDENTITY_NOTICE, e, !0, t), n.onClose();
  },
  guildId: e
});
  });
}

function u(e, t, i, s, l) {
  (0, o.Vr)({
guildId: e,
...i
  }), (0, a.openModalLazy)(async () => {
let {
  default: e
} = await Promise.all([
  n.e('80026'),
  n.e('41558')
]).then(n.bind(n, 767593));
return n => (0, r.jsx)(e, {
  ...n,
  clan: t,
  prioritizedGameIds: s,
  position: l
});
  });
}