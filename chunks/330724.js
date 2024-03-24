"use strict";
n.r(t), n.d(t, {
  resetGuildOnboardingPrompts: function() {
    return f
  },
  editGuildOnboardingPrompt: function() {
    return O
  },
  deleteGuildOnboardingPrompt: function() {
    return S
  },
  editGuildOnboardingPrompts: function() {
    return T
  },
  saveGuildOnboardingPrompts: function() {
    return m
  },
  enableGuildOnboarding: function() {
    return D
  },
  editOnboarding: function() {
    return A
  },
  validateOptionRoles: function() {
    return G
  }
}), n("70102"), n("222007");
var a = n("872717"),
  l = n("913144"),
  s = n("404118"),
  i = n("448993"),
  r = n("385976"),
  d = n("837648"),
  o = n("42203"),
  u = n("305961"),
  N = n("449008"),
  c = n("136278"),
  _ = n("49111"),
  I = n("653138"),
  E = n("782340");

function f() {
  l.default.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET"
  })
}

function O(e, t, n) {
  T(e, c.default.editedOnboardingPrompts.map(e => e.id === t ? {
    ...e,
    ...n
  } : e))
}

function S(e, t) {
  T(e, c.default.editedOnboardingPrompts.filter(e => e.id !== t))
}

function T(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  if (l.default.dispatch({
      type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT",
      prompts: t
    }), n) {
    let n = t.map(n => g(e, t, n));
    l.default.dispatch({
      type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS",
      errors: n
    })
  }
}
async function m(e, t) {
  let {
    dropdownsAllowed: n
  } = (0, d.getOnboardingDropdownExperiment)(e.id);
  if (!c.default.hasChanges()) return;
  let a = c.default.editedOnboardingPrompts;
  null != t && t.ignoreDefaultPrompt && 1 === a.length && (0, I.isDefaultPrompt)(a[0]) && (a = []);
  let _ = a.map(t => {
      let a = t.options.map(t => {
        var n;
        let a = null == t.roleIds ? t.roleIds : t.roleIds.filter(t => null != u.default.getRole(e.id, t)),
          l = null == t.channelIds ? t.channelIds : t.channelIds.filter(e => null != o.default.getChannel(e)),
          s = (null == t ? void 0 : null === (n = t.emoji) || void 0 === n ? void 0 : n.id) == null || null == r.default.getCustomEmojiById(t.emoji.id) ? void 0 : t.emoji.id;
        return {
          ...t,
          roleIds: a,
          channelIds: l,
          emojiId: s
        }
      });
      return {
        ...t,
        options: a,
        type: a.length >= I.ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD && n ? I.OnboardingPromptType.DROPDOWN : I.OnboardingPromptType.MULTIPLE_CHOICE
      }
    }),
    f = _.filter(e => e.inOnboarding),
    O = _.filter(e => !0 !== e.inOnboarding),
    S = _.map(t => g(e, _, t));
  if (S.filter(N.isNotNullish).length > 0) throw l.default.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
    errors: S
  }), Error("failed to locally validate prompts");
  if (f.length > I.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING) throw s.default.show({
    title: E.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
    body: E.default.Messages.ONBOARDING_PROMPT_SAVE_TOO_MANY_PROMPTS_IN_ONBOARDING.format({
      numQuestions: I.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING
    })
  }), l.default.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
    errors: S
  }), Error("too many prompts in onboarding");
  let T = [...f, ...O];
  l.default.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT"
  });
  try {
    await A(e.id, {
      prompts: T.map(I.clientPromptToServerPrompt)
    }), l.default.dispatch({
      type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS",
      guildId: e.id,
      updates: {
        prompts: T
      }
    })
  } catch (n) {
    var m;
    let {
      fieldName: e,
      error: t
    } = null !== (m = new(0, i.APIError)(n).getAnyErrorMessageAndField()) && void 0 !== m ? m : {};
    throw s.default.show({
      title: E.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
      body: [e, t].filter(N.isNotNullish).join(": ")
    }), l.default.dispatch({
      type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED"
    }), Error("failed to save prompts")
  }
}
async function D(e, t) {
  l.default.dispatch({
    type: "GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE",
    guildId: e,
    updates: {
      enabled: t
    }
  });
  try {
    await A(e, {
      enabled: t
    })
  } catch (a) {
    var n;
    let {
      fieldName: e,
      error: t
    } = null !== (n = new(0, i.APIError)(a).getAnyErrorMessageAndField()) && void 0 !== n ? n : {};
    s.default.show({
      title: E.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
      body: [e, t].filter(N.isNotNullish).join(": ")
    })
  }
}
async function A(e, t) {
  await a.HTTP.put({
    url: _.Endpoints.GUILD_ONBOARDING(e),
    body: t
  })
}

function g(e, t, n) {
  let a = {
      optionErrors: []
    },
    l = !1;
  return n.title.length <= 0 && (a.title = E.default.Messages.ONBOARDING_PROMPT_TITLE_REQUIRED, l = !0), n.options.length <= 0 && (a.options = E.default.Messages.ONBOARDING_PROMPT_ANSWER_REQUIRED, l = !0), n.inOnboarding && t.filter(e => e.inOnboarding).length > I.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING && (a.config = E.default.Messages.ONBOARDING_PROMPT_SAVE_TOO_MANY_PROMPTS_IN_ONBOARDING.format({
    numQuestions: I.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING
  }), l = !0), a.optionErrors = n.options.map(a => G(e, t, n, a)), (l = l || a.optionErrors.some(e => null != e)) ? a : null
}

function G(e, t, n, a) {
  var l, s, i;
  if (n.singleSelect) {
    let e = new Set(null !== (l = a.roleIds) && void 0 !== l ? l : []);
    for (let a of t)
      if (a.id !== n.id) {
        for (let t of a.options)
          if (null != t.roleIds && t.roleIds.some(t => e.has(t))) return E.default.Messages.ONBOARDING_PROMPT_SINGLE_SELECT_UNIQUE_ROLES
      }
  }
  let r = (null !== (s = a.roleIds) && void 0 !== s ? s : []).filter(t => null != u.default.getRole(e.id, t)),
    d = (null !== (i = a.channelIds) && void 0 !== i ? i : []).filter(e => null != o.default.getChannel(e));
  return 0 === r.length && 0 === d.length ? E.default.Messages.ONBOARDING_PROMPT_OPTION_ROLES_REQUIRED : null
}