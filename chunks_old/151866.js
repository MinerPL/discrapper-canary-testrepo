"use strict";
n.r(t), n.d(t, {
  useAutomodEditingRuleActions: function() {
    return g
  },
  useAutomodEditingRuleState: function() {
    return O
  }
});
var r = n("917351"),
  o = n.n(r),
  u = n("308503"),
  i = n("448993"),
  a = n("449008"),
  l = n("600798"),
  s = n("454686"),
  d = n("296839"),
  T = n("702873"),
  E = n("314865"),
  A = n("254365"),
  _ = n("49111"),
  c = n("782340");
let I = Object.freeze({
    editingRule: null,
    hasChanges: !1,
    isLoading: !1,
    errorMessage: null
  }),
  f = (0, u.default)((e, t) => ({
    editingRule: null,
    hasChanges: !1,
    setEditingRule: n => {
      let r = t().editingRule,
        u = null != n && null != r && n.id === r.id,
        i = o.cloneDeep(n);
      null != i && (i = {
        ...i,
        actions: i.actions.filter(a.isNotNullish)
      }), e({
        editingRule: i,
        hasChanges: u,
        errorMessage: null
      })
    },
    createNewEditingRule: (t, n, r) => {
      let o = {
        ...(0, s.createDefaultRule)(t, n),
        ...null != r ? r : {}
      };
      return e({
        editingRule: o,
        hasChanges: !1
      }), o
    },
    isLoading: !1,
    errorMessage: null,
    cancelEditingRule: () => {
      e({
        ...I
      })
    },
    saveRule: async (t, n) => {
      if (null == t) return e({
        ...I
      }), null;
      try {
        var r, o, u;
        (0, s.isRuleKeywordFilter)(t) && (t.triggerMetadata.keywordFilter = (0, E.sortKeywords)((0, E.dedupeKeywords)(null !== (r = t.triggerMetadata.keywordFilter) && void 0 !== r ? r : [])), t.triggerMetadata.allowList = (0, E.sortKeywords)((0, E.dedupeKeywords)(null !== (o = t.triggerMetadata.allowList) && void 0 !== o ? o : []))), (0, s.isRuleDefaultKeywordListFilter)(t) && (t.triggerMetadata.allowList = (0, E.sortKeywords)((0, E.dedupeKeywords)(null !== (u = t.triggerMetadata.allowList) && void 0 !== u ? u : []))), (0, d.validateRuleByTriggerConfigOrThrow)(t, n), (0, s.validateRuleBeforeSaveOrThrow)(t)
      } catch (t) {
        return t instanceof l.InvalidKeywordError ? e({
          errorMessage: c.default.Messages.GUILD_AUTOMOD_KEYWORD_GENERIC_SAVE_ERROR,
          isLoading: !1
        }) : t instanceof l.InvalidRegexPatternError ? e({
          errorMessage: c.default.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR,
          isLoading: !1
        }) : e({
          errorMessage: t.message,
          isLoading: !1
        }), null
      }
      try {
        e({
          isLoading: !0
        });
        let n = null;
        return n = (0, s.isBackendPersistedRule)(t) && !(0, A.isDefaultRuleId)(t.id) ? await (0, T.updateAutomodRule)(t) : await (0, T.createAutomodRule)(t), e({
          ...I
        }), n
      } catch (n) {
        let t = new i.APIError(n);
        e({
          isLoading: !1,
          errorMessage: function(e) {
            if (e.code === _.AbortCodes.INVALID_FORM_BODY) {
              var t, n;
              if ((null === (n = e.errors) || void 0 === n ? void 0 : null === (t = n.trigger_metadata) || void 0 === t ? void 0 : t.regex_patterns) != null) return c.default.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR
            }
            return e.getAnyErrorMessage()
          }(t)
        })
      }
      return null
    },
    saveEditingRule: e => {
      let {
        editingRule: n,
        saveRule: r
      } = t();
      return r(n, e)
    }
  }));

function g() {
  return f(e => ({
    hasChanges: e.hasChanges,
    editingRule: e.editingRule,
    isLoading: e.isLoading,
    errorMessage: e.errorMessage,
    saveRule: e.saveRule,
    saveEditingRule: e.saveEditingRule,
    cancelEditingRule: e.cancelEditingRule
  }))
}

function O() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
    t = f(e => ({
      hasChanges: e.hasChanges,
      editingRule: e.editingRule,
      setEditingRule: e.setEditingRule,
      createNewEditingRule: e.createNewEditingRule
    }));
  return null != e && t.setEditingRule(e), t
}