"use strict";
n.r(t), n.d(t, {
  useAutomodEditingRuleActions: function() {
    return N
  },
  useAutomodEditingRuleState: function() {
    return O
  }
});
var r = n("392711"),
  o = n.n(r),
  i = n("652874"),
  u = n("881052"),
  a = n("823379"),
  l = n("539573"),
  s = n("236413"),
  d = n("85960"),
  T = n("36459"),
  E = n("422303"),
  A = n("866894"),
  _ = n("981631"),
  c = n("689938");
let I = Object.freeze({
    editingRule: null,
    hasChanges: !1,
    isLoading: !1,
    errorMessage: null
  }),
  f = (0, i.default)((e, t) => ({
    editingRule: null,
    hasChanges: !1,
    setEditingRule: n => {
      let r = t().editingRule,
        i = null != n && null != r && n.id === r.id,
        u = o().cloneDeep(n);
      null != u && (u = {
        ...u,
        actions: u.actions.filter(a.isNotNullish)
      }), e({
        editingRule: u,
        hasChanges: i,
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
        var r, o, i;
        (0, s.isRuleKeywordFilter)(t) && (t.triggerMetadata.keywordFilter = (0, E.sortKeywords)((0, E.dedupeKeywords)(null !== (r = t.triggerMetadata.keywordFilter) && void 0 !== r ? r : [])), t.triggerMetadata.allowList = (0, E.sortKeywords)((0, E.dedupeKeywords)(null !== (o = t.triggerMetadata.allowList) && void 0 !== o ? o : []))), (0, s.isRuleDefaultKeywordListFilter)(t) && (t.triggerMetadata.allowList = (0, E.sortKeywords)((0, E.dedupeKeywords)(null !== (i = t.triggerMetadata.allowList) && void 0 !== i ? i : []))), (0, d.validateRuleByTriggerConfigOrThrow)(t, n), (0, s.validateRuleBeforeSaveOrThrow)(t)
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
      } catch (t) {
        e({
          isLoading: !1,
          errorMessage: function(e) {
            if (e.code === _.AbortCodes.INVALID_FORM_BODY) {
              var t, n;
              if ((null === (n = e.errors) || void 0 === n ? void 0 : null === (t = n.trigger_metadata) || void 0 === t ? void 0 : t.regex_patterns) != null) return c.default.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR
            }
            return e.getAnyErrorMessage()
          }(new u.APIError(t))
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

function N() {
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