"use strict";
n.r(t), n.d(t, {
  getRuleCountByTriggerType: function() {
    return _
  },
  useSyncAutomodRules: function() {
    return c
  },
  useSyncAutomodRulesEffect: function() {
    return I
  },
  useAutomodRulesList: function() {
    return f
  }
}), n("424973"), n("222007"), n("808653");
var r = n("884691"),
  o = n("308503"),
  u = n("16470"),
  i = n("448993"),
  a = n("702873"),
  l = n("254365"),
  s = n("143460"),
  d = n("49111");
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
        guildId: u,
        id: i,
        triggerType: a
      } = n, {
        rules: s
      } = t(), d = null !== (r = s[u]) && void 0 !== r ? r : {}, T = null !== (o = d[a]) && void 0 !== o ? o : [], E = T.some(e => e.id === i), A = T.filter(e => (!(0, l.isDefaultRuleId)(e.id) || e.triggerType !== a) && !0), _ = E ? A.map(e => e.id === i ? n : e) : [...A, n];
      e({
        rules: {
          ...s,
          [u]: {
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
      } = t(), u = o[r], i = Object.keys(u).reduce((e, t) => {
        var r;
        let o = Number(t),
          i = null !== (r = u[o]) && void 0 !== r ? r : [];
        return e[o] = i.filter(e => e.id !== n), e
      }, u);
      e({
        rules: {
          ...o,
          [r]: i
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
            u = t().rules;
          e({
            rules: {
              ...u,
              [n]: o
            },
            error: null
          })
        } catch (n) {
          let t = new i.APIError(n);
          e({
            error: t
          })
        }
      }
    }
  })),
  _ = (e, t) => {
    var n, r;
    let o = A.getState().rules,
      u = null !== (r = null === (n = o[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : [];
    return u.length
  };

function c(e) {
  let [t, n] = r.useState(!1), [o, i] = A(e => [e.syncRules, e.fetching], u.default), a = r.useCallback(async () => {
    if (!i && null != e) try {
      n(!0), await o(e)
    } finally {
      n(!1)
    }
  }, [e, i, o]);
  return [t, a]
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