n.d(t, {
  FN: function() {
return s;
  },
  M$: function() {
return p;
  },
  NE: function() {
return E;
  },
  NO: function() {
return f;
  },
  Oq: function() {
return y;
  },
  RF: function() {
return A;
  },
  Un: function() {
return l;
  },
  X: function() {
return g;
  },
  YW: function() {
return h;
  },
  ae: function() {
return N;
  },
  b3: function() {
return I;
  },
  cf: function() {
return C;
  },
  dr: function() {
return O;
  },
  fY: function() {
return S;
  },
  iU: function() {
return _;
  },
  l7: function() {
return o;
  },
  md: function() {
return T;
  },
  qm: function() {
return m;
  },
  yZ: function() {
return v;
  }
});
var r, i, a, o, s, l, u = n(348327),
  c = n.n(u),
  d = n(689938);
let _ = 100,
  E = 50,
  f = 100,
  h = 15,
  p = 12,
  m = 50,
  I = 4,
  T = 7,
  g = 5,
  S = 13;

function A(e) {
  if (e.options.length > 0)
return !1;
  let {
id: t,
...n
  } = N(), {
id: r,
...i
  } = e;
  return c()(n, i);
}

function N() {
  return {
id: String(Date.now()),
title: d.Z.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE,
options: [],
singleSelect: !1,
required: !1,
inOnboarding: !0,
type: 0
  };
}

function v(e) {
  return {
id: String(Date.now()),
title: '',
options: [],
singleSelect: !1,
required: !1,
inOnboarding: e,
type: 0
  };
}

function O(e) {
  return {
id: e.id,
options: e.options.map(e => {
  var t, n, r;
  return {
    id: e.id,
    channel_ids: e.channelIds,
    role_ids: e.roleIds,
    emoji: e.emoji,
    emoji_id: null === (t = e.emoji) || void 0 === t ? void 0 : t.id,
    emoji_name: null === (n = e.emoji) || void 0 === n ? void 0 : n.name,
    emoji_animated: null === (r = e.emoji) || void 0 === r ? void 0 : r.animated,
    title: e.title,
    description: e.description
  };
}),
title: e.title,
single_select: e.singleSelect,
disabled: e.disabled,
required: e.required,
in_onboarding: e.inOnboarding,
type: e.type
  };
}

function R(e) {
  return {
id: e.id,
options: e.options.map(e => {
  var t;
  return {
    id: e.id,
    channelIds: e.channel_ids,
    roleIds: e.role_ids,
    emoji: e.emoji,
    title: e.title,
    description: null !== (t = e.description) && void 0 !== t ? t : ''
  };
}),
title: e.title,
singleSelect: e.single_select,
disabled: e.disabled,
required: e.required,
inOnboarding: e.in_onboarding,
type: e.type
  };
}

function C(e) {
  var t, n, r;
  return {
prompts: e.prompts.map(R),
defaultChannelIds: e.default_channel_ids,
responses: null !== (t = e.responses) && void 0 !== t ? t : [],
mode: e.mode,
enabled: e.enabled,
onboardingPromptsSeen: null !== (n = e.onboarding_prompts_seen) && void 0 !== n ? n : {},
onboardingResponsesSeen: null !== (r = e.onboarding_responses_seen) && void 0 !== r ? r : {},
belowRequirements: e.below_requirements
  };
}

function y(e) {
  return null == e || null == e.id && null == e.name;
}
(r = o || (o = {}))[r.CUSTOMIZE = 0] = 'CUSTOMIZE', r[r.BROWSE = 1] = 'BROWSE', (i = s || (s = {}))[i.MULTIPLE_CHOICE = 0] = 'MULTIPLE_CHOICE', i[i.DROPDOWN = 1] = 'DROPDOWN', (a = l || (l = {}))[a.ONBOARDING_DEFAULT = 0] = 'ONBOARDING_DEFAULT', a[a.ONBOARDING_ADVANCED = 1] = 'ONBOARDING_ADVANCED';