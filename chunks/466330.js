a.d(e, {
  Z: function() {
return E;
  }
});
var t = a(735250);
a(470079);
var l = a(442837),
  u = a(481060),
  r = a(159300),
  c = a(984933),
  s = a(496675),
  i = a(981631),
  o = a(689938);

function E(n) {
  let {
source: e,
guild: a,
channel: t,
stageInstance: u
  } = n, o = (0, l.e7)([c.ZP], () => c.ZP.getDefaultChannel(a.id, !0, i.Plq.CREATE_INSTANT_INVITE)), E = (0, l.e7)([s.Z], () => (0, r.b)(s.Z, a, t, u)), Z = d(e, a, E && null != t ? t : o), N = _(e);
  return null == t && e === i.t4x.GUILD_CONTEXT_MENU ? null : E || null != o ? Z : N;
}
let d = (n, e, l) => (0, t.jsx)(u.MenuItem, {
id: 'invite-people',
label: o.Z.Messages.INVITE_PEOPLE,
color: 'brand',
icon: n === i.t4x.GUILD_HEADER ? u.GroupPlusIcon : void 0,
action: () => (0, u.openModalLazy)(async () => {
  let {
    default: u
  } = await Promise.all([
    a.e('7654'),
    a.e('66633')
  ]).then(a.bind(a, 560114));
  return a => (0, t.jsx)(u, {
    ...a,
    guild: e,
    channel: l,
    source: n
  });
})
  }),
  _ = n => (0, t.jsx)(u.MenuItem, {
id: 'invite-people',
label: o.Z.Messages.INVITE_PEOPLE,
color: 'brand',
icon: n === i.t4x.GUILD_HEADER ? u.GroupPlusIcon : void 0,
action: () => (0, u.openModalLazy)(async () => {
  let {
    default: n
  } = await a.e('88358').then(a.bind(a, 598402));
  return e => (0, t.jsx)(n, {
    ...e
  });
})
  });