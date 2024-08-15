t.d(n, {
  $y: function() {
return G;
  },
  Kk: function() {
return m;
  },
  NB: function() {
return T;
  },
  en: function() {
return L;
  },
  fi: function() {
return O;
  },
  n_: function() {
return A;
  },
  rS: function() {
return D;
  },
  tS: function() {
return S;
  }
}), t(411104), t(47120);
var s = t(544891),
  l = t(570140),
  a = t(668781),
  i = t(881052),
  r = t(339085),
  o = t(107862),
  c = t(592125),
  d = t(430824),
  I = t(823379),
  N = t(208665),
  _ = t(981631),
  u = t(290511),
  E = t(689938);

function T() {
  l.Z.dispatch({
type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET'
  });
}

function m(e, n, t) {
  S(e, N.Z.editedOnboardingPrompts.map(e => e.id === n ? {
...e,
...t
  } : e));
}

function O(e, n) {
  S(e, N.Z.editedOnboardingPrompts.filter(e => e.id !== n));
}

function S(e, n) {
  let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  if (l.Z.dispatch({
  type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT',
  prompts: n
}), t) {
let t = n.map(t => h(e, n, t));
l.Z.dispatch({
  type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS',
  errors: t
});
  }
}
async function D(e, n) {
  let {
dropdownsAllowed: t
  } = (0, o.RM)(e.id);
  if (!N.Z.hasChanges())
return;
  let s = N.Z.editedOnboardingPrompts;
  null != n && n.ignoreDefaultPrompt && 1 === s.length && (0, u.RF)(s[0]) && (s = []);
  let _ = s.map(n => {
  let s = n.options.map(n => {
    let t = null == n.roleIds ? n.roleIds : n.roleIds.filter(n => null != d.Z.getRole(e.id, n)),
      s = null == n.channelIds ? n.channelIds : n.channelIds.filter(e => null != c.Z.getChannel(e));
    return {
      ...n,
      roleIds: t,
      channelIds: s,
      emoji: function(e) {
        var n;
        if (null == e)
          return;
        if ((null === (n = e.emoji) || void 0 === n ? void 0 : n.id) == null)
          return e.emoji;
        if (null != r.ZP.getCustomEmojiById(e.emoji.id))
          return e.emoji;
      }(n)
    };
  });
  return {
    ...n,
    options: s,
    type: s.length >= u.fY && t ? u.FN.DROPDOWN : u.FN.MULTIPLE_CHOICE
  };
}),
T = _.filter(e => e.inOnboarding),
m = _.filter(e => !0 !== e.inOnboarding),
O = _.map(n => h(e, _, n));
  if (O.filter(I.lm).length > 0)
throw l.Z.dispatch({
  type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED',
  errors: O
}), Error('failed to locally validate prompts');
  if (T.length > u.b3)
throw a.Z.show({
  title: E.Z.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
  body: E.Z.Messages.ONBOARDING_PROMPT_SAVE_TOO_MANY_PROMPTS_IN_ONBOARDING.format({
    numQuestions: u.b3
  })
}), l.Z.dispatch({
  type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED',
  errors: O
}), Error('too many prompts in onboarding');
  let S = [
...T,
...m
  ];
  l.Z.dispatch({
type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT'
  });
  try {
await A(e.id, {
  prompts: S.map(u.dr)
}), l.Z.dispatch({
  type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS',
  guildId: e.id,
  updates: {
    prompts: S
  }
});
  } catch (t) {
var D;
let {
  fieldName: e,
  error: n
} = null !== (D = new i.Hx(t).getAnyErrorMessageAndField()) && void 0 !== D ? D : {};
throw a.Z.show({
  title: E.Z.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
  body: [
    e,
    n
  ].filter(I.lm).join(': ')
}), l.Z.dispatch({
  type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED'
}), Error('failed to save prompts');
  }
}
async function G(e, n) {
  l.Z.dispatch({
type: 'GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE',
guildId: e,
updates: {
  enabled: n
}
  });
  try {
await A(e, {
  enabled: n
});
  } catch (s) {
var t;
let {
  fieldName: e,
  error: n
} = null !== (t = new i.Hx(s).getAnyErrorMessageAndField()) && void 0 !== t ? t : {};
a.Z.show({
  title: E.Z.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
  body: [
    e,
    n
  ].filter(I.lm).join(': ')
});
  }
}
async function A(e, n) {
  await s.tn.put({
url: _.ANM.GUILD_ONBOARDING(e),
body: n
  });
}

function h(e, n, t) {
  let s = {
  optionErrors: []
},
l = !1;
  return t.title.length <= 0 && (s.title = E.Z.Messages.ONBOARDING_PROMPT_TITLE_REQUIRED, l = !0), t.options.length <= 0 && (s.options = E.Z.Messages.ONBOARDING_PROMPT_ANSWER_REQUIRED, l = !0), t.inOnboarding && n.filter(e => e.inOnboarding).length > u.b3 && (s.config = E.Z.Messages.ONBOARDING_PROMPT_SAVE_TOO_MANY_PROMPTS_IN_ONBOARDING.format({
numQuestions: u.b3
  }), l = !0), s.optionErrors = t.options.map(s => L(e, n, t, s)), (l = l || s.optionErrors.some(e => null != e)) ? s : null;
}

function L(e, n, t, s) {
  var l, a, i;
  if (t.singleSelect) {
let e = new Set(null !== (l = s.roleIds) && void 0 !== l ? l : []);
for (let s of n)
  if (s.id !== t.id) {
    for (let n of s.options)
      if (null != n.roleIds && n.roleIds.some(n => e.has(n)))
        return E.Z.Messages.ONBOARDING_PROMPT_SINGLE_SELECT_UNIQUE_ROLES;
  }
  }
  let r = (null !== (a = s.roleIds) && void 0 !== a ? a : []).filter(n => null != d.Z.getRole(e.id, n)),
o = (null !== (i = s.channelIds) && void 0 !== i ? i : []).filter(e => null != c.Z.getChannel(e));
  return 0 === r.length && 0 === o.length ? E.Z.Messages.ONBOARDING_PROMPT_OPTION_ROLES_REQUIRED : null;
}