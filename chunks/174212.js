"use strict";
n(47120);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(367907),
  _ = n(998698),
  d = n(981631);
let c = new Map,
  E = new Map,
  I = new Map;

function T(e) {
  if (!E.has(e)) {
    var t;
    E.set(e, {
      commandId: null === (t = _.Z.getActiveCommand(e)) || void 0 === t ? void 0 : t.id,
      optionName: _.Z.getActiveOptionName(e),
      optionNameToAutocompleteQueries: new Map,
      optionNameToLastResults: new Map,
      optionNameToNonce: new Map,
      optionNameToLastQuery: new Map,
      lastErrored: !1,
      lastResponseNonce: void 0
    })
  }
  return E.get(e)
}

function h() {
  return c.clear(), E.clear(), !0
}

function S(e) {
  let {
    channelId: t,
    command: n
  } = e;
  f(t, null == n ? void 0 : n.id)
}

function f(e, t) {
  let n = _.Z.getActiveOptionName(e),
    i = E.get(e);
  return null != i && (t !== i.commandId || n !== i.optionName) && (null != t && t !== i.commandId && (i.optionNameToLastResults.clear(), i.optionNameToNonce.clear(), i.optionNameToLastQuery.clear(), i.optionNameToAutocompleteQueries.clear()), i.lastErrored = !1, i.commandId = t, i.optionName = n, !0)
}
class N extends(i = a.ZP.Store) {
  initialize() {
    this.waitFor(_.Z)
  }
  getLastErrored(e) {
    return T(e).lastErrored
  }
  getAutocompleteChoices(e, t, n) {
    var i;
    return null === (i = T(e).optionNameToAutocompleteQueries.get(t)) || void 0 === i ? void 0 : i.get(n)
  }
  getAutocompleteLastChoices(e, t) {
    return T(e).optionNameToLastResults.get(t)
  }
  getLastResponseNonce(e) {
    return T(e).lastResponseNonce
  }
}
o = "ApplicationCommandAutocompleteStore", (s = "displayName") in(r = N) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new N(l.Z, {
  CONNECTION_OPEN: h,
  LOGOUT: h,
  CHANNEL_SELECT: h,
  APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function(e) {
    var t;
    let {
      nonce: n,
      channelId: i,
      query: r,
      name: s
    } = e, o = T(i);
    if (o.optionNameToLastQuery.get(s) === r) return !1;
    o.optionNameToLastQuery.set(s, r);
    let a = null === (t = o.optionNameToAutocompleteQueries.get(s)) || void 0 === t ? void 0 : t.get(r);
    if (null != a) return o.lastErrored = !1, o.optionNameToLastResults.set(s, a), !0;
    let l = o.optionNameToNonce.get(s);
    if (null != l && c.delete(l), c.set(n, {
        channelId: i,
        query: r,
        name: s
      }), I.set(n, new Date), o.optionNameToNonce.set(s, n), o.lastErrored) return o.lastErrored = !1, !0
  },
  APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function(e) {
    var t, n;
    let {
      choices: i,
      nonce: r
    } = e, s = c.get(r);
    if (null == s) return !1;
    c.delete(r);
    let o = null !== (n = null == i ? void 0 : i.map(e => {
        var t;
        return {
          ...e,
          displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
        }
      })) && void 0 !== n ? n : [],
      a = I.get(r),
      l = null != a ? new Date().getTime() - a.getTime() : 0;
    (0, u.yw)(d.rMx.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
      duration_ms: l,
      error: !1,
      num_options: o.length
    }), I.delete(r);
    let _ = T(s.channelId);
    return null == _.optionNameToAutocompleteQueries.get(s.name) && _.optionNameToAutocompleteQueries.set(s.name, new Map), null === (t = _.optionNameToAutocompleteQueries.get(s.name)) || void 0 === t || t.set(s.query, o), _.optionNameToLastQuery.get(s.name) === s.query && (_.lastErrored = !1, _.optionNameToLastResults.set(s.name, o)), _.lastResponseNonce = r, !0
  },
  INTERACTION_FAILURE: function(e) {
    let {
      nonce: t
    } = e;
    if (null == t) return !1;
    let n = c.get(t);
    if (null == n) return !1;
    c.delete(t);
    let i = I.get(t),
      r = null != i ? new Date().getTime() - i.getTime() : 0;
    return (0, u.yw)(d.rMx.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
      duration_ms: r,
      error: !0
    }), I.delete(t), T(n.channelId).lastErrored = !0, !0
  },
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: S,
  APP_LAUNCHER_SET_ACTIVE_COMMAND: S,
  APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
    let {
      channelId: t,
      command: n
    } = e;
    f(t, null == n ? void 0 : n.id)
  }
})