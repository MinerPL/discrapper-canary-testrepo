"use strict";
n.r(t), n.d(t, {
  getRuleCountByTriggerType: function() {
    return _
  },
  useAutomodRulesList: function() {
    return f
  },
  useSyncAutomodRules: function() {
    return c
  },
  useSyncAutomodRulesEffect: function() {
    return I
  }
}), n("653041"), n("47120"), n("724458");
var r = n("470079"),
  o = n("652874"),
  i = n("143927"),
  u = n("881052"),
  a = n("36459"),
  l = n("866894"),
  s = n("273504"),
  d = n("981631");
let T = {},
  E = e => {
    let t = {
      [s.AutomodTriggerType.KEYWORD]: [],
      [s.AutomodTriggerType.ML_SPAM]: [],
      [s.AutomodTriggerType.DEFAULT_KEYWORD_LIST]: [],
      [s.AutomodTriggerType.MENTION_SPAM]: [],
      [s.AutomodTriggerType.USER_PROFILE]: [],
      [s.AutomodTriggerType.SERVER_POLICY]: []
    };
    return e.forEach(e => {
      var n;
      let {
        triggerType: r
      } = e;
      null === (n = t[r]) || void 0 === n || n.push(e)
    }), t
  },
  A = (0, o.default)((e, t) => ({
    rules: {},
    fetching: !1,
    error: null,
    updateRule: n => {
      var r, o;
      let {
        guildId: i,
        id: u,
        triggerType: a
      } = n, {
        rules: s
      } = t(), d = null !== (r = s[i]) && void 0 !== r ? r : {}, T = null !== (o = d[a]) && void 0 !== o ? o : [], E = T.some(e => e.id === u), A = T.filter(e => (!(0, l.isDefaultRuleId)(e.id) || e.triggerType !== a) && !0), _ = E ? A.map(e => e.id === u ? n : e) : [...A, n];
      e({
        rules: {
          ...s,
          [i]: {
            ...d,
            [a]: _
          }
        },
        error: null
      })
    },
    removeRule: (n, r) => {
      let {
        rules: o
      } = t(), i = o[r], u = Object.keys(i).reduce((e, t) => {
        var r;
        let o = Number(t),
          u = null !== (r = i[o]) && void 0 !== r ? r : [];
        return e[o] = u.filter(e => e.id !== n), e
      }, i);
      e({
        rules: {
          ...o,
          [r]: u
        },
        error: null
      })
    },
    syncRules: async n => {
      if (function(e) {
          var t;
          let n = Date.now(),
            r = null !== (t = T[e]) && void 0 !== t ? t : 0;
          return n - r > 2e4
        }(n)) {
        T[n] = Date.now();
        try {
          let r = await (0, a.fetchAutomodRules)(n),
            o = E(r),
            i = t().rules;
          e({
            rules: {
              ...i,
              [n]: o
            },
            error: null
          })
        } catch (t) {
          e({
            error: new u.APIError(t)
          })
        }
      }
    }
  })),
  _ = (e, t) => {
    var n, r;
    return (null !== (r = null === (n = A.getState().rules[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : []).length
  };

function c(e) {
  let [t, n] = r.useState(!1), [o, u] = A(e => [e.syncRules, e.fetching], i.default);
  return [t, r.useCallback(async () => {
    if (!u && null != e) try {
      n(!0), await o(e)
    } finally {
      n(!1)
    }
  }, [e, u, o])]
}

function I(e) {
  let [t, n] = c(e);
  return r.useEffect(() => {
    (async () => {
      await n()
    })()
  }, [e, n]), [t, n]
}

function f(e) {
  return A(t => {
    var n;
    return {
      rulesByTriggerType: null !== (n = t.rules[null != e ? e : d.EMPTY_STRING_SNOWFLAKE_ID]) && void 0 !== n ? n : {},
      updateRule: t.updateRule,
      removeRule: t.removeRule
    }
  })
}