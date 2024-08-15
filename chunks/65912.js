n.d(t, {
  V: function() {
return d;
  },
  w: function() {
return M;
  }
});
var r = n(392711),
  a = n.n(r),
  i = n(652874),
  E = n(731965),
  _ = n(881052),
  u = n(823379),
  l = n(539573),
  s = n(236413),
  o = n(85960),
  I = n(36459),
  T = n(422303),
  O = n(866894),
  A = n(981631),
  N = n(689938);
let S = Object.freeze({
editingRule: null,
hasChanges: !1,
isLoading: !1,
errorMessage: null
  }),
  c = (0, i.Z)((e, t) => ({
editingRule: null,
hasChanges: !1,
setEditingRule: n => {
  let r = t().editingRule,
    i = null != n && null != r && n.id === r.id,
    _ = a().cloneDeep(n);
  null != _ && (_ = {
    ..._,
    actions: _.actions.filter(u.lm)
  }), (0, E.j)(() => e({
    editingRule: _,
    hasChanges: i,
    errorMessage: null
  }));
},
createNewEditingRule: (t, n, r) => {
  let a = {
    ...(0, s.ep)(t, n),
    ...null != r ? r : {}
  };
  return (0, E.j)(() => e({
    editingRule: a,
    hasChanges: !1
  })), a;
},
isLoading: !1,
errorMessage: null,
cancelEditingRule: () => {
  (0, E.j)(() => e({
    ...S
  }));
},
saveRule: async (t, n) => {
  if (null == t)
    return (0, E.j)(() => e({
      ...S
    })), null;
  try {
    var r, a, i;
    (0, s.DO)(t) && (t.triggerMetadata.keywordFilter = (0, T.cb)((0, T.Ze)(null !== (r = t.triggerMetadata.keywordFilter) && void 0 !== r ? r : [])), t.triggerMetadata.allowList = (0, T.cb)((0, T.Ze)(null !== (a = t.triggerMetadata.allowList) && void 0 !== a ? a : []))), (0, s.Fn)(t) && (t.triggerMetadata.allowList = (0, T.cb)((0, T.Ze)(null !== (i = t.triggerMetadata.allowList) && void 0 !== i ? i : []))), (0, o.yU)(t, n), (0, s.QO)(t);
  } catch (t) {
    return t instanceof l.V6 ? (0, E.j)(() => {
      e({
        errorMessage: N.Z.Messages.GUILD_AUTOMOD_KEYWORD_GENERIC_SAVE_ERROR,
        isLoading: !1
      });
    }) : t instanceof l.uS ? (0, E.j)(() => {
      e({
        errorMessage: N.Z.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR,
        isLoading: !1
      });
    }) : (0, E.j)(() => {
      e({
        errorMessage: t.message,
        isLoading: !1
      });
    }), null;
  }
  try {
    (0, E.j)(() => {
      e({
        isLoading: !0
      });
    });
    let n = null;
    return n = (0, s.Vb)(t) && !(0, O.U)(t.id) ? await (0, I.Je)(t) : await (0, I.JK)(t), (0, E.j)(() => e({
      ...S
    })), n;
  } catch (n) {
    let t = new _.Hx(n);
    (0, E.j)(() => {
      e({
        isLoading: !1,
        errorMessage: function(e) {
          if (e.code === A.evJ.INVALID_FORM_BODY) {
            var t, n;
            if ((null === (n = e.errors) || void 0 === n ? void 0 : null === (t = n.trigger_metadata) || void 0 === t ? void 0 : t.regex_patterns) != null)
              return N.Z.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR;
          }
          return e.getAnyErrorMessage();
        }(t)
      });
    });
  }
  return null;
},
saveEditingRule: e => {
  let {
    editingRule: n,
    saveRule: r
  } = t();
  return r(n, e);
}
  }));

function M() {
  return c(e => ({
hasChanges: e.hasChanges,
editingRule: e.editingRule,
isLoading: e.isLoading,
errorMessage: e.errorMessage,
saveRule: e.saveRule,
saveEditingRule: e.saveEditingRule,
cancelEditingRule: e.cancelEditingRule
  }));
}

function d() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
t = c(e => ({
  hasChanges: e.hasChanges,
  editingRule: e.editingRule,
  setEditingRule: e.setEditingRule,
  createNewEditingRule: e.createNewEditingRule
}));
  return null != e && t.setEditingRule(e), t;
}