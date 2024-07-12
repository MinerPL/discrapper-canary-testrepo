t.d(n, {
  Z: function() {
return N;
  }
}), t(653041), t(47120);
var l = t(735250),
  i = t(470079),
  a = t(442837),
  r = t(481060),
  u = t(493683),
  s = t(447543),
  d = t(904245),
  o = t(159300),
  c = t(592125),
  Z = t(984933),
  E = t(430824),
  M = t(496675),
  f = t(699516),
  _ = t(771845),
  g = t(594174),
  I = t(981631),
  m = t(689938);

function R(e, n) {
  u.Z.ensurePrivateChannel(e).then(e => {
null != c.Z.getChannel(e) && d.Z.sendInvite(e, n, 'context_menu', null);
  });
}

function N(e) {
  let {
user: n,
guildId: t,
onAction: u
  } = e, d = (0, a.e7)([g.default], () => g.default.getCurrentUser(), []), c = (0, a.Wu)([
_.ZP,
E.Z,
M.Z
  ], () => {
let e = _.ZP.getFlattenedGuildIds(),
  n = [];
return e.forEach(e => {
  let l = E.Z.getGuild(e);
  null != l && (0, o.b)(M.Z, l) && l.id !== t && n.push(l);
}), n;
  }, [t]), [N, C] = i.useState({});
  return (null == d ? void 0 : d.id) === n.id || n.bot || 0 === c.length || f.Z.isBlocked(n.id) ? null : (0, l.jsx)(r.MenuItem, {
id: 'invite-to-server',
label: m.Z.Messages.INVITE_TO_SERVER,
children: c.map(e => N[e.id] ? (0, l.jsx)(r.MenuItem, {
  id: e.id,
  disabled: !0,
  label: m.Z.Messages.INVITE_SENT
}, e.id) : (0, l.jsx)(r.MenuItem, {
  id: e.id,
  label: e.name,
  action: () => {
    null == u || u(), ! function(e, n) {
      let t = Z.ZP.getDefaultChannel(e.id, !0, I.Plq.CREATE_INSTANT_INVITE);
      if (null != t) {
        if (C({
            ...N,
            [e.id]: !0
          }), !M.Z.can(I.Plq.CREATE_INSTANT_INVITE, e) && null != e.vanityURLCode) {
          R(n, e.vanityURLCode);
          return;
        }
        s.Z.createInvite(t.id, {
          max_uses: 1,
          unique: !0
        }, 'User Invite Context Menu').then(e => R(n, e.code));
      }
    }(e, n.id);
  }
}, e.id))
  });
}