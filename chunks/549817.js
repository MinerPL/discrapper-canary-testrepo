n(536091), n(47120), n(789020);
var r = n(392711),
  i = n.n(r),
  a = n(544891),
  o = n(570140),
  s = n(45114),
  l = n(367907),
  u = n(781792),
  c = n(962086),
  d = n(160404),
  _ = n(152376),
  E = n(592125),
  f = n(271383),
  h = n(594174),
  p = n(626135),
  m = n(630388),
  I = n(823379),
  T = n(960048),
  g = n(709054),
  S = n(45966),
  A = n(637853),
  N = n(816436),
  v = n(981631),
  O = n(372897),
  R = n(490897);

function C(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (d.Z.isFullServerPreview(e))
return;
  let n = t ? S.Z.getOnboardingPromptsForOnboarding(e) : S.Z.getOnboardingPrompts(e),
r = S.Z.getOnboardingResponses(e),
i = n.map(e => e.options.filter(e => r.includes(e.id))).flat(),
s = {},
l = {};
  return (n.forEach(e => {
s[e.id] = Date.now(), e.options.forEach(e => l[e.id] = Date.now());
  }), t) ? a.tn.post({
url: v.ANM.GUILD_ONBOARDING_RESPONSES(e),
body: {
  onboarding_responses: i.map(e => e.id),
  onboarding_prompts_seen: s,
  onboarding_responses_seen: l
}
  }).then(t => {
null != t.body && o.Z.dispatch({
  type: 'GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS',
  guildId: e,
  options: t.body.onboarding_responses,
  prompts_seen: t.body.onboarding_prompts_seen,
  options_seen: t.body.onboarding_responses_seen
});
  }).catch(e => T.Z.captureException(e)) : a.tn.put({
url: v.ANM.GUILD_ONBOARDING_RESPONSES(e),
body: {
  onboarding_responses: i.map(e => e.id),
  onboarding_prompts_seen: s,
  onboarding_responses_seen: l
}
  }).then(t => {
null != t.body && o.Z.dispatch({
  type: 'GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS',
  guildId: e,
  options: t.body.onboarding_responses,
  prompts_seen: t.body.onboarding_prompts_seen,
  options_seen: t.body.onboarding_responses_seen
});
  }).catch(e => T.Z.captureException(e));
}
t.Z = {
  selectOption(e, t, n, r) {
let a = S.Z.getOnboardingPrompt(t);
if (null == a)
  return;
let s = a.singleSelect ? i().without(i().map(a.options, 'id'), n) : [];
o.Z.dispatch({
  type: 'GUILD_ONBOARDING_SELECT_OPTION',
  guildId: e,
  promptId: t,
  optionId: n,
  selected: r,
  removedOptionIds: s
});
  },
  updateOnboardingResponses: i().debounce(C, 1000),
  updateRolesLocal: function(e, t, n) {
var r, a;
let s = null !== (a = null === (r = f.ZP.getSelfMember(e)) || void 0 === r ? void 0 : r.roles) && void 0 !== a ? a : [];
if (d.Z.isViewingRoles(e)) {
  (0, c.og)(e, i().difference(i().union(s, t), n));
  return;
}
(t.length > 0 || n.length > 0) && o.Z.dispatch({
  type: 'GUILD_MEMBER_UPDATE_LOCAL',
  guildId: e,
  roles: i().difference(i().union(s, t), n),
  addedRoleIds: t,
  removedRoleIds: n
});
  },
  completeOnboarding(e, t) {
let n = t.length > 0 ? t[t.length - 1] : null,
  r = S.Z.getSelectedOptions(e),
  i = (0, A.L6)(r),
  a = (0, A.dX)(r),
  o = S.Z.getEnabled(e) ? S.Z.getDefaultChannelIds(e) : [],
  [u, _] = (0, A.Ee)(e, t, o),
  T = [
    ...a,
    ...o
  ],
  y = T.map(e => E.Z.getChannel(e)).filter(I.lm),
  D = (0, N.v)(e, new Set(T), y, !0).length,
  L = null == n ? [] : n.options.map(e => e.id);
if (p.default.track(v.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
    ...(0, l.hH)(e),
    step: t.length - 1,
    options_selected: null == n ? 0 : r.filter(e => L.includes(e.id)).length,
    skipped: L.length > 0,
    back: !1,
    in_onboarding: !0,
    is_final_step: !0,
    roles_granted: i.size,
    channels_granted: D,
    guild_onboarding_covered_channel_ids: u.map(e => e.id),
    guild_onboarding_uncovered_channel_ids: _.map(e => e.id)
  }), (0, s.Ju)(e, R.W.GUILD_ONBOARDING_QUESTION, g.default.fromTimestamp(Date.now())), C(e, !0), d.Z.isFullServerPreview(e)) {
  (0, c.zS)(e, T, []), (0, c.aq)(e, {
    optInEnabled: !0
  }), (0, c.og)(e, Array.from(i));
  let t = h.default.getCurrentUser();
  if (null != t) {
    var b, M;
    let n = null !== (M = null === (b = f.ZP.getMember(e, t.id)) || void 0 === b ? void 0 : b.flags) && void 0 !== M ? M : 0;
    (0, c.aq)(e, {
      memberOptions: {
        flags: (0, m.mB)(n, O.q.COMPLETED_ONBOARDING, !0)
      }
    });
  }
}
  },
  onboardExistingMember(e, t) {
let n = new Set(t);
(S.Z.getEnabled(e) ? S.Z.getDefaultChannelIds(e) : []).forEach(e => n.add(e)), n.size > 0 && (0, _.Mo)(e, Array.from(n), !0, {
  page: v.ZY5.GUILD_ONBOARDING
});
  },
  finishOnboarding(e) {
o.Z.dispatch({
  type: 'GUILD_ONBOARDING_COMPLETE',
  guildId: e
});
  },
  setUserOnboardingStep(e, t) {
o.Z.dispatch({
  type: 'GUILD_ONBOARDING_SET_STEP',
  guildId: e,
  step: t
});
  },
  async resetOnboarding(e) {
let t = h.default.getCurrentUser();
if (null != t) {
  var n, r;
  let i = null !== (r = null === (n = f.ZP.getMember(e, t.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== r ? r : 0;
  await (0, u.e)(e, {
    flags: (0, m.mB)(i, O.q.COMPLETED_ONBOARDING, !1)
  });
}
  }
};