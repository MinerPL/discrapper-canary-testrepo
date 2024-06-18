"use strict";
n(653041), n(536091);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  d = n(160404),
  c = n(592125),
  E = n(70956),
  I = n(709054),
  T = n(977258),
  h = n(819553),
  S = n(290511);
let f = {},
  N = {},
  A = {},
  m = !1;

function O(e, t, n) {
  return e.map(e => (function(e, t, n) {
    let i = !1,
      r = [];
    for (let t = 0; t < e.options.length; t++) {
      let s = e.options[t],
        o = null == n[s.id];
      o && (i = !0), r.push({
        ...s,
        isUnseen: o
      })
    }
    return {
      ...e,
      options: r,
      hasNewAnswers: i,
      isNew: null == t[e.id]
    }
  })(e, t, n))
}

function R(e) {
  var t, n, i, r, s, o, a, l, u;
  let {
    guildId: _,
    updates: d
  } = e, c = null !== (s = null !== (r = d.onboardingPromptsSeen) && void 0 !== r ? r : null === (t = f[_]) || void 0 === t ? void 0 : t.onboardingPromptsSeen) && void 0 !== s ? s : {}, E = null !== (a = null !== (o = d.onboardingResponsesSeen) && void 0 !== o ? o : null === (n = f[_]) || void 0 === n ? void 0 : n.onboardingResponsesSeen) && void 0 !== a ? a : {}, I = O(null !== (u = null !== (l = d.prompts) && void 0 !== l ? l : null === (i = f[_]) || void 0 === i ? void 0 : i.prompts) && void 0 !== u ? u : [], c, E);
  f[_] = {
    ...f[_],
    ...d,
    prompts: I
  }
}

function C(e, t) {
  if (null == N[e]) return;
  let n = {};
  Object.keys(N[e]).forEach(i => {
    !t.includes(i) && N[e][i] ? n[i] = !0 : t.includes(i) && !1 === N[e][i] && (n[i] = !1)
  }), N[e] = n;
  let i = t.filter(e => null == n[e] || !0 === n[e]);
  Object.keys(n).forEach(e => {
    !0 === n[e] && !t.includes(e) && i.push(e)
  }), f[e] = {
    ...f[e],
    responses: i
  }
}
let p = [],
  g = [],
  L = [];
class v extends(i = u.ZP.Store) {
  initialize() {
    this.waitFor(c.Z, h.ZP, d.Z)
  }
  getOnboardingPromptsForOnboarding(e) {
    var t, n;
    return null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.onboardingPrompts) && void 0 !== n ? n : p
  }
  getOnboardingPrompts(e) {
    var t, n;
    return null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.prompts) && void 0 !== n ? n : p
  }
  getOnboardingResponses(e) {
    var t, n, i;
    return d.Z.isFullServerPreview(e) ? Array.from(null !== (n = d.Z.getOnboardingResponses(e)) && void 0 !== n ? n : g) : null !== (i = null === (t = f[e]) || void 0 === t ? void 0 : t.responses) && void 0 !== i ? i : g
  }
  getSelectedOptions(e) {
    let t = this.getOnboardingResponses(e);
    return this.getOnboardingPrompts(e).map(e => e.options).flat().filter(e => t.includes(e.id))
  }
  getOnboardingResponsesForPrompt(e, t) {
    let n = f[e];
    if (null == n) return g;
    let i = n.prompts.find(e => e.id === t);
    return null == i ? g : l().intersection(i.options.map(e => e.id), this.getOnboardingResponses(e))
  }
  getEnabledOnboardingPrompts(e) {
    var t, n;
    let i = f[e];
    return d.Z.isFullServerPreview(e) ? null !== (t = null == i ? void 0 : i.prompts) && void 0 !== t ? t : p : null != i && i.enabled ? null !== (n = i.prompts) && void 0 !== n ? n : p : p
  }
  getDefaultChannelIds(e) {
    var t, n;
    return null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.defaultChannelIds) && void 0 !== n ? n : L
  }
  getEnabled(e) {
    var t, n;
    return d.Z.isFullServerPreview(e) ? null != f[e] : null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n
  }
  getOnboardingPrompt(e) {
    return Object.values(f).map(e => e.prompts).flat().find(t => t.id === e)
  }
  isLoading() {
    return m
  }
  shouldFetchPrompts(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.Z.Millis.HOUR;
    if (m) return !1;
    let n = A[e];
    return null == n || Date.now() - n > t
  }
  getPendingResponseOptions(e) {
    return N[e]
  }
  ackIdForGuild(e) {
    let t = this.getEnabledOnboardingPrompts(e),
      n = "0";
    return t.forEach(e => {
      e.options.forEach(e => {
        I.default.compare(e.id, n) > 0 && (n = e.id)
      }), I.default.compare(e.id, n) > 0 && (n = e.id)
    }), n
  }
  lastFetchedAt(e) {
    return A[e]
  }
  isAdvancedMode(e) {
    var t;
    return null != e && (null === (t = f[e]) || void 0 === t ? void 0 : t.mode) === S.Un.ONBOARDING_ADVANCED
  }
}
o = "GuildOnboardingPromptsStore", (s = "displayName") in(r = v) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new v(_.Z, {
  CONNECTION_OPEN: function() {
    m = !1, f = {}
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_START: function() {
    m = !0
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      prompts: n,
      defaultChannelIds: i,
      enabled: r,
      responses: s,
      onboardingPromptsSeen: o,
      onboardingResponsesSeen: a,
      mode: l,
      belowRequirements: u
    } = e;
    m = !1;
    let _ = h.ZP.getOnboardingStatus(t) === h.uX.READY,
      d = O(n, o, a);
    f[t] = {
      enabled: r,
      mode: l,
      belowRequirements: u,
      prompts: d,
      onboardingPrompts: d.filter(e => e.inOnboarding),
      defaultChannelIds: i.filter(e => (0, T.s)(t, e)),
      responses: _ ? [] : s,
      onboardingPromptsSeen: o,
      onboardingResponsesSeen: a
    }, !_ && C(t, s), A[t] = Date.now()
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function() {
    m = !1
  },
  GUILD_ONBOARDING_SELECT_OPTION: function(e) {
    let {
      guildId: t,
      optionId: n,
      selected: i,
      removedOptionIds: r
    } = e;
    return !!d.Z.isFullServerPreview(t) || null != f[t] && (null != r && r.length > 0 && l().pullAll(f[t].responses, r), i ? f[t].responses.push(n) : l().pull(f[t].responses, n), null == N[t] && (N[t] = {}), N[t][n] = i, null != r && r.forEach(e => N[t][e] = !1), N[t] = {
      ...N[t]
    }, !0)
  },
  GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: function(e) {
    let {
      guildId: t,
      options: n,
      prompts_seen: i,
      options_seen: r
    } = e;
    C(t, n);
    let s = f[t];
    if (null == s) return !1;
    let o = O(s.prompts, i, r);
    f[t] = {
      ...s,
      prompts: o,
      onboardingPrompts: o.filter(e => e.inOnboarding),
      onboardingPromptsSeen: i,
      onboardingResponsesSeen: r
    }
  },
  GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: R,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: R,
  GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e;
    f[t] = {
      ...f[t],
      defaultChannelIds: n
    }
  },
  GUILD_SETTINGS_ONBOARDING_SET_MODE: function(e) {
    let {
      guildId: t,
      mode: n
    } = e, i = f[t];
    null != i && (i.mode = n)
  }
})