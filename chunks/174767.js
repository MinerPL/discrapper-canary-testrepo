n.d(t, {
  Br: function() {
return o;
  },
  MH: function() {
return c;
  },
  Ol: function() {
return d;
  },
  TG: function() {
return E;
  },
  UF: function() {
return _;
  },
  sJ: function() {
return u;
  }
}), n(411104);
var i = n(544891),
  a = n(570140),
  s = n(439849),
  r = n(358085),
  l = n(981631);
async function o(e) {
  if (e.platform_type === l.ABu.XBOX) {
let t = e.parsed_launch_parameters.titleId,
  n = e.parsed_launch_parameters.inviteToken;
if (!(0, r.isWindows)() || null == t || null == n)
  return;
let i = await I(t, !1),
  s = await T(n);
a.Z.dispatch({
  type: 'GAME_INVITE_UPDATE_STATUS',
  inviteId: e.invite_id,
  installed: i,
  joinable: s
});
  } else
throw Error('Unsupported invite platform ' + e.platform_type);
}
async function c(e) {
  if (e.platform_type === l.ABu.XBOX) {
let t = e.parsed_launch_parameters.titleId;
return !!(0, r.isWindows)() && null != t && await m(t);
  }
  throw Error('Unsupported invite platform ' + e.platform_type);
}
async function d(e) {
  if (e.platform_type === l.ABu.XBOX) {
let t = e.parsed_launch_parameters.inviteToken;
return !!(0, r.isWindows)() && null != t && await h(t);
  }
  throw Error('Unsupported invite platform ' + e.platform_type);
}

function u() {
  a.Z.dispatch({
type: 'GAME_INVITE_CLEAR_UNSEEN'
  });
}
async function _(e) {
  await i.tn.del({
url: l.ANM.GAME_INVITE(e.invite_id)
  });
}
async function E() {
  await i.tn.del({
url: l.ANM.GAME_INVITES
  });
}
async function I(e, t) {
  if (!(0, r.isWindows)())
return !1;
  let n = await (0, s.Z)();
  return new Promise((i, a) => {
if ((null == n ? void 0 : n.xboxIsApplicationInstalled) == null) {
  a(Error('Game utils module not loaded'));
  return;
}
n.xboxIsApplicationInstalled(e, t, e => {
  i(e);
});
  });
}
async function m(e) {
  if (!(0, r.isWindows)())
return !1;
  let t = await (0, s.Z)();
  return new Promise((n, i) => {
if ((null == t ? void 0 : t.xboxLaunchGame) == null) {
  i(Error('Game utils module not loaded'));
  return;
}
t.xboxLaunchGame(e, e => {
  n(e);
});
  });
}
async function T(e) {
  if (!(0, r.isWindows)())
return !1;
  let t = await (0, s.Z)();
  return new Promise((n, i) => {
if ((null == t ? void 0 : t.xboxIsInviteTokenValid) == null) {
  i(Error('Game utils module not loaded'));
  return;
}
t.xboxIsInviteTokenValid(e, e => {
  n(e);
});
  });
}
async function h(e) {
  if (!(0, r.isWindows)())
return !1;
  let t = await (0, s.Z)();
  return new Promise((n, i) => {
if ((null == t ? void 0 : t.xboxAcceptGameInvite) == null) {
  i(Error('Game utils module not loaded'));
  return;
}
t.xboxAcceptGameInvite(e, e => {
  n(e);
});
  });
}