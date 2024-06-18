"use strict";
n.d(t, {
  FN: function() {
    return a
  },
  M$: function() {
    return h
  },
  NE: function() {
    return E
  },
  NO: function() {
    return I
  },
  Oq: function() {
    return v
  },
  RF: function() {
    return O
  },
  Un: function() {
    return l
  },
  X: function() {
    return A
  },
  YW: function() {
    return T
  },
  ae: function() {
    return R
  },
  b3: function() {
    return f
  },
  cf: function() {
    return L
  },
  dr: function() {
    return p
  },
  fY: function() {
    return m
  },
  iU: function() {
    return c
  },
  l7: function() {
    return o
  },
  md: function() {
    return N
  },
  qm: function() {
    return S
  },
  yZ: function() {
    return C
  }
});
var i, r, s, o, a, l, u = n(348327),
  _ = n.n(u),
  d = n(689938);
let c = 100,
  E = 50,
  I = 100,
  T = 15,
  h = 12,
  S = 50,
  f = 4,
  N = 7,
  A = 5,
  m = 13;

function O(e) {
  if (e.options.length > 0) return !1;
  let {
    id: t,
    ...n
  } = R(), {
    id: i,
    ...r
  } = e;
  return _()(n, r)
}

function R() {
  return {
    id: String(Date.now()),
    title: d.Z.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE,
    options: [],
    singleSelect: !1,
    required: !1,
    inOnboarding: !0,
    type: 0
  }
}

function C(e) {
  return {
    id: String(Date.now()),
    title: "",
    options: [],
    singleSelect: !1,
    required: !1,
    inOnboarding: e,
    type: 0
  }
}

function p(e) {
  return {
    id: e.id,
    options: e.options.map(e => {
      var t, n, i;
      return {
        id: e.id,
        channel_ids: e.channelIds,
        role_ids: e.roleIds,
        emoji: e.emoji,
        emoji_id: null === (t = e.emoji) || void 0 === t ? void 0 : t.id,
        emoji_name: null === (n = e.emoji) || void 0 === n ? void 0 : n.name,
        emoji_animated: null === (i = e.emoji) || void 0 === i ? void 0 : i.animated,
        title: e.title,
        description: e.description
      }
    }),
    title: e.title,
    single_select: e.singleSelect,
    disabled: e.disabled,
    required: e.required,
    in_onboarding: e.inOnboarding,
    type: e.type
  }
}

function g(e) {
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
        description: null !== (t = e.description) && void 0 !== t ? t : ""
      }
    }),
    title: e.title,
    singleSelect: e.single_select,
    disabled: e.disabled,
    required: e.required,
    inOnboarding: e.in_onboarding,
    type: e.type
  }
}

function L(e) {
  var t, n, i;
  return {
    prompts: e.prompts.map(g),
    defaultChannelIds: e.default_channel_ids,
    responses: null !== (t = e.responses) && void 0 !== t ? t : [],
    mode: e.mode,
    enabled: e.enabled,
    onboardingPromptsSeen: null !== (n = e.onboarding_prompts_seen) && void 0 !== n ? n : {},
    onboardingResponsesSeen: null !== (i = e.onboarding_responses_seen) && void 0 !== i ? i : {},
    belowRequirements: e.below_requirements
  }
}

function v(e) {
  return null == e || null == e.id && null == e.name
}(i = o || (o = {}))[i.CUSTOMIZE = 0] = "CUSTOMIZE", i[i.BROWSE = 1] = "BROWSE", (r = a || (a = {}))[r.MULTIPLE_CHOICE = 0] = "MULTIPLE_CHOICE", r[r.DROPDOWN = 1] = "DROPDOWN", (s = l || (l = {}))[s.ONBOARDING_DEFAULT = 0] = "ONBOARDING_DEFAULT", s[s.ONBOARDING_ADVANCED = 1] = "ONBOARDING_ADVANCED"