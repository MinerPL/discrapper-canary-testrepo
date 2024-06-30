n.d(t, {
    V: function () {
        return M;
    },
    w: function () {
        return c;
    }
});
var r = n(392711), a = n.n(r), i = n(652874), E = n(881052), _ = n(823379), u = n(539573), s = n(236413), l = n(85960), o = n(36459), I = n(422303), T = n(866894), O = n(981631), A = n(689938);
let N = Object.freeze({
        editingRule: null,
        hasChanges: !1,
        isLoading: !1,
        errorMessage: null
    }), S = (0, i.Z)((e, t) => ({
        editingRule: null,
        hasChanges: !1,
        setEditingRule: n => {
            let r = t().editingRule, i = null != n && null != r && n.id === r.id, E = a().cloneDeep(n);
            null != E && (E = {
                ...E,
                actions: E.actions.filter(_.lm)
            }), e({
                editingRule: E,
                hasChanges: i,
                errorMessage: null
            });
        },
        createNewEditingRule: (t, n, r) => {
            let a = {
                ...(0, s.ep)(t, n),
                ...null != r ? r : {}
            };
            return e({
                editingRule: a,
                hasChanges: !1
            }), a;
        },
        isLoading: !1,
        errorMessage: null,
        cancelEditingRule: () => {
            e({ ...N });
        },
        saveRule: async (t, n) => {
            if (null == t)
                return e({ ...N }), null;
            try {
                var r, a, i;
                (0, s.DO)(t) && (t.triggerMetadata.keywordFilter = (0, I.cb)((0, I.Ze)(null !== (r = t.triggerMetadata.keywordFilter) && void 0 !== r ? r : [])), t.triggerMetadata.allowList = (0, I.cb)((0, I.Ze)(null !== (a = t.triggerMetadata.allowList) && void 0 !== a ? a : []))), (0, s.Fn)(t) && (t.triggerMetadata.allowList = (0, I.cb)((0, I.Ze)(null !== (i = t.triggerMetadata.allowList) && void 0 !== i ? i : []))), (0, l.yU)(t, n), (0, s.QO)(t);
            } catch (t) {
                return t instanceof u.V6 ? e({
                    errorMessage: A.Z.Messages.GUILD_AUTOMOD_KEYWORD_GENERIC_SAVE_ERROR,
                    isLoading: !1
                }) : t instanceof u.uS ? e({
                    errorMessage: A.Z.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR,
                    isLoading: !1
                }) : e({
                    errorMessage: t.message,
                    isLoading: !1
                }), null;
            }
            try {
                e({ isLoading: !0 });
                let n = null;
                return n = (0, s.Vb)(t) && !(0, T.U)(t.id) ? await (0, o.Je)(t) : await (0, o.JK)(t), e({ ...N }), n;
            } catch (t) {
                e({
                    isLoading: !1,
                    errorMessage: function (e) {
                        if (e.code === O.evJ.INVALID_FORM_BODY) {
                            var t, n;
                            if ((null === (n = e.errors) || void 0 === n ? void 0 : null === (t = n.trigger_metadata) || void 0 === t ? void 0 : t.regex_patterns) != null)
                                return A.Z.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR;
                        }
                        return e.getAnyErrorMessage();
                    }(new E.Hx(t))
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
function c() {
    return S(e => ({
        hasChanges: e.hasChanges,
        editingRule: e.editingRule,
        isLoading: e.isLoading,
        errorMessage: e.errorMessage,
        saveRule: e.saveRule,
        saveEditingRule: e.saveEditingRule,
        cancelEditingRule: e.cancelEditingRule
    }));
}
function M() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = S(e => ({
            hasChanges: e.hasChanges,
            editingRule: e.editingRule,
            setEditingRule: e.setEditingRule,
            createNewEditingRule: e.createNewEditingRule
        }));
    return null != e && t.setEditingRule(e), t;
}
