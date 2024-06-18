"use strict";
n.d(t, {
  I1: function() {
    return f
  },
  eM: function() {
    return h
  },
  rK: function() {
    return S
  },
  rj: function() {
    return T
  }
}), n(789020);
var i = n(544891),
  r = n(570140),
  s = n(367907),
  o = n(314897),
  a = n(271383),
  l = n(430824),
  u = n(626135),
  _ = n(630388),
  d = n(45966),
  c = n(290511),
  E = n(981631),
  I = n(372897);

function T(e) {
  u.default.track(E.rMx.GUILD_ONBOARDING_LOADED, {
    ...(0, s.hH)(e),
    has_new_prompts: !1,
    number_of_prompts: 0
  })
}

function h(e) {
  return r.Z.dispatch({
    type: "GUILD_ONBOARDING_PROMPTS_FETCH_START",
    guildId: e
  }), i.tn.get({
    url: E.ANM.GUILD_ONBOARDING(e)
  }).then(t => {
    let {
      body: n
    } = t, i = (0, c.cf)(n);
    return r.Z.dispatch({
      type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS",
      guildId: e,
      ...i
    }).then(() => i.prompts)
  }, t => (r.Z.dispatch({
    type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE",
    guildId: e
  }), t))
}
async function S(e) {
  var t, n;
  let i = o.default.getId(),
    r = (0, _.yE)(null !== (n = null === (t = a.ZP.getMember(e, i)) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0, I.q.COMPLETED_ONBOARDING),
    s = l.Z.getGuild(e);
  if (null == s || !s.hasFeature(E.oNc.GUILD_ONBOARDING)) return Promise.resolve();
  let u = d.Z.shouldFetchPrompts(e),
    c = d.Z.getOnboardingPrompts(e);
  if (!u && c.length > 0) return c.every(e => !e.inOnboarding) ? (N(e), Promise.resolve()) : (!r && f(e), Promise.resolve());
  let T = await h(e);
  return Array.isArray(T) && T.every(e => !e.inOnboarding) ? (N(e), Promise.resolve()) : (!r && f(e), T)
}

function f(e) {
  r.Z.dispatch({
    type: "GUILD_ONBOARDING_START",
    guildId: e
  })
}

function N(e) {
  u.default.track(E.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
    ...(0, s.hH)(e),
    step: -2,
    required: !0
  }), u.default.track(E.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
    ...(0, s.hH)(e),
    step: -2,
    skipped: !1,
    is_final_step: !0,
    in_onboarding: !0
  })
}