t.d(n, {
  $K: function() {
return h;
  },
  IG: function() {
return f;
  },
  Nb: function() {
return L;
  },
  Ts: function() {
return g;
  },
  Wy: function() {
return x;
  },
  di: function() {
return R;
  }
}), t(47120);
var s = t(570140),
  l = t(668781),
  a = t(479531),
  i = t(45966),
  r = t(819553),
  o = t(637853),
  c = t(17181),
  d = t(621923),
  I = t(962086),
  N = t(225675),
  _ = t(592125),
  u = t(430824),
  E = t(823379),
  T = t(434404),
  m = t(889369),
  O = t(570961),
  S = t(84658),
  D = t(176505),
  G = t(290511),
  A = t(689938);

function h(e) {
  s.Z.dispatch({
type: 'GUILD_SETTINGS_ONBOARDING_STEP',
step: e
  });
}

function L(e) {
  null != e && s.Z.dispatch({
type: 'GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED',
upsellType: e
  });
}
async function g(e, n) {
  let t = i.Z.getEnabled(e),
r = Array.from(m.Z.editedDefaultChannelIds).filter(e => null != _.Z.getChannel(e)),
[c, d] = (0, o.d9)(e, [...r]);
  if (t && n === G.Un.ONBOARDING_DEFAULT && (d.length < G.md || c.length < G.X)) {
l.Z.show({
  title: A.Z.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
  body: A.Z.Messages.DEFAULT_CHANNELS_SAVE_INVALID_DEFAULT_CHANNELS
});
return;
  }
  try {
await (0, O.n_)(e, {
  mode: n
});
  } catch (t) {
var I;
let {
  fieldName: e,
  error: n
} = null !== (I = new a.Z(t).getAnyErrorMessageAndField()) && void 0 !== I ? I : {};
l.Z.show({
  title: A.Z.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
  body: [
    e,
    n
  ].filter(E.lm).join(': ')
});
  }
  s.Z.dispatch({
type: 'GUILD_SETTINGS_ONBOARDING_SET_MODE',
guildId: e,
mode: n
  });
}

function f(e, n) {
  let {
homeSettingsEnabled: t
  } = (0, d.l6)(e), s = S.xh.findIndex(e => e === n);
  if (-1 !== s && s !== S.xh.length - 1) {
if (!t && S.xh[s + 1] === S.PG.HOME_SETTINGS) {
  h(S.xh[s + 2]);
  return;
}
h(S.xh[s + 1]);
  }
}

function x(e, n) {
  let {
homeSettingsEnabled: t
  } = (0, d.l6)(e), s = S.xh.findIndex(e => e === n);
  if (-1 !== s && 0 !== s) {
if (!t && S.xh[s - 1] === S.PG.HOME_SETTINGS) {
  h(S.xh[s - 2]);
  return;
}
h(S.xh[s - 1]);
  }
}
async function R(e) {
  let n = u.Z.getGuild(e);
  null != n && (T.Z.close(), (0, I.iD)(n.id, {
type: N.z.NEW_MEMBER,
roles: {},
optInChannels: new Set(),
optInEnabled: !1,
onboardingResponses: new Set(),
onboardingEnabled: !0,
memberOptions: {
  isPending: n.hasVerificationGate(),
  flags: 0
}
  }), r.ZP.resetOnboardingStatus(n.id), (0, c.discardOnboardingPromise)(n.id), await (0, c.default)({
guildId: n.id,
isPreview: !0,
returnChannelId: D.oC.GUILD_HOME
  }));
}