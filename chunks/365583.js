n.d(t, {
  Z: function() {
return p;
  }
}), n(627341);
var r = n(735250);
n(470079);
var i = n(278074),
  a = n(442837),
  s = n(481060),
  o = n(230711),
  l = n(503438),
  u = n(26033),
  c = n(594174),
  d = n(171368),
  _ = n(981631),
  E = n(728151),
  f = n(332325),
  h = n(689938);

function p(e) {
  let {
activity: t,
entry: n,
user: p
  } = e, m = function(e) {
let {
  activity: t,
  entry: n
} = e;
return null != n ? function(e) {
  let {
    settingsSection: t,
    settingsSubsection: n
  } = (0, i.EQ)(e).when(u.dX, () => ({
    settingsSection: _.oAB.GAMES,
    settingsSubsection: f.Z.ACTIVITY_PRIVACY
  })).when(u.r5, () => ({
    settingsSection: _.oAB.CONNECTIONS,
    settingsSubsection: null
  })).when(u.kx, () => ({
    settingsSection: _.oAB.CONNECTIONS,
    settingsSubsection: null
  })).otherwise(() => ({
    settingsSection: null,
    settingsSubsection: null
  }));
  return null == t ? null : () => {
    (0, d.closeUserProfileModal)(), o.Z.open(t, n);
  };
}(n) : null != t ? function(e) {
  let {
    settingsSection: t,
    settingsSubsection: n
  } = (0, i.EQ)(e).with({
    type: _.IIU.PLAYING
  }, () => ({
    settingsSection: _.oAB.GAMES,
    settingsSubsection: f.Z.ACTIVITY_PRIVACY
  })).with({
    type: _.IIU.WATCHING,
    application_id: E.sp
  }, () => ({
    settingsSection: _.oAB.CONNECTIONS,
    settingsSubsection: null
  })).when(l.Z, () => ({
    settingsSection: _.oAB.CONNECTIONS,
    settingsSubsection: null
  })).otherwise(() => ({
    settingsSection: null,
    settingsSubsection: null
  }));
  return null == t ? null : () => {
    (0, d.closeUserProfileModal)(), o.Z.open(t, n);
  };
}(t) : null;
  }({
activity: t,
entry: n
  }), I = (0, a.e7)([c.default], () => c.default.getCurrentUser());
  return p.id !== (null == I ? void 0 : I.id) || null == m ? null : (0, r.jsx)(s.MenuItem, {
id: 'manage-privacy',
label: h.Z.Messages.USER_ACTIVITY_MANAGE_PRIVACY,
action: m
  });
}