"use strict";
n.r(t), n.d(t, {
  ComponentStateContextProvider: function() {
    return L
  },
  useComponentState: function() {
    return b
  },
  useComponentStateContext: function() {
    return U
  }
}), n("47120"), n("789020");
var l = n("735250"),
  u = n("470079"),
  a = n("512722"),
  o = n.n(a),
  i = n("442837"),
  r = n("570140"),
  d = n("911969"),
  s = n("71619"),
  c = n("282397"),
  E = n("622449"),
  T = n("188597"),
  f = n("41776"),
  p = n("665906"),
  C = n("592125"),
  S = n("271383"),
  m = n("607744"),
  I = n("594174"),
  _ = n("280501"),
  N = n("892902"),
  O = n("359232");
let g = e => {
    switch (e.type) {
      case d.ComponentType.BUTTON:
        return e.style !== d.ButtonStyle.LINK;
      case d.ComponentType.STRING_SELECT:
      case d.ComponentType.USER_SELECT:
      case d.ComponentType.ROLE_SELECT:
      case d.ComponentType.MENTIONABLE_SELECT:
      case d.ComponentType.CHANNEL_SELECT:
        return !0;
      case d.ComponentType.ACTION_ROW:
      case d.ComponentType.INPUT_TEXT:
        return !1
    }
  },
  M = function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      l = _.ActionComponentState.NORMAL;
    return null != e && e.state !== E.InteractionState.FAILED && (e.data.interactionType === d.InteractionTypes.MESSAGE_COMPONENT && e.data.componentId === t.id ? l = _.ActionComponentState.LOADING : g(t) && (l = _.ActionComponentState.DISABLED)), n && (l = _.ActionComponentState.DISABLED), l
  },
  A = e => {
    let t = C.default.getChannel(e),
      n = (0, i.useStateFromStores)([m.default], () => (null == t ? void 0 : t.guild_id) == null || m.default.canChatInGuild(t.guild_id), [t]),
      l = (0, i.useStateFromStores)([f.default], () => (null == t ? void 0 : t.guild_id) != null && f.default.isLurking(t.guild_id), [t]),
      u = (0, i.useStateFromStores)([S.default, I.default], () => {
        var e, n;
        let l = I.default.getCurrentUser();
        return null !== (n = (null == t ? void 0 : t.guild_id) != null && null != l ? null === (e = S.default.getMember(null == t ? void 0 : t.guild_id, l.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== n && n
      }),
      [, a] = (0, s.useCurrentUserCommunicationDisabled)(null == t ? void 0 : t.guild_id),
      o = (0, p.useCanUnarchiveThread)(t);
    return !!(!n || l || u || (null == t ? void 0 : t.isLockedThread()) || (null == t ? void 0 : t.isArchivedThread()) && !o) || !!a || !1
  };

function h(e, t) {
  let n = u.useContext(y),
    [l, a] = u.useState(null),
    o = u.useCallback(t => {
      let n = (0, O.default)(e, t);
      return a(n), null == n
    }, [e]);
  return u.useEffect(() => {
    var e;
    let l = () => o(t);
    return null === (e = n.validators) || void 0 === e || e.add(l), () => {
      var e;
      null === (e = n.validators) || void 0 === e || e.delete(l)
    }
  }, [n.validators, o, t]), {
    error: l,
    validate: o
  }
}

function R(e, t, n) {
  var l;
  let a = (0, i.useStateFromStores)([N.default], () => N.default.getInteractionComponentState(e.id, t.id)),
    o = (0, i.useStateFromStores)([c.default], () => c.default.getInteraction(e), [e]),
    r = A(e.channel_id),
    {
      error: d,
      validate: s
    } = h(t, a),
    E = null !== (l = e.applicationId) && void 0 !== l ? l : e.author.id;
  return {
    state: a,
    executeStateUpdate: u.useCallback(n => {
      if (!s(n)) return !1;
      let l = C.default.getChannel(e.channel_id);
      return null != l && null != t.customId && (0, T.executeMessageComponentInteraction)({
        componentType: t.type,
        messageId: e.id,
        messageFlags: e.flags,
        customId: t.customId,
        componentId: t.id,
        applicationId: E,
        channelId: l.id,
        guildId: l.guild_id,
        localState: n
      }), !0
    }, [e.channel_id, e.flags, e.id, t.customId, t.type, t.id, E, s]),
    isDisabled: r,
    visualState: M(o, t),
    error: d
  }
}

function v(e, t, n) {
  let l = (0, i.useStateFromStores)([N.default], () => N.default.getInteractionComponentState(e.customId, t.id)),
    {
      error: a,
      validate: o
    } = h(t, l),
    d = u.useCallback(n => null == n || (r.default.dispatch({
      type: "SET_INTERACTION_COMPONENT_STATE",
      rootContainerId: e.customId,
      componentId: t.id,
      state: n
    }), !!o(n) || !1), [e.customId, t.id, o]);
  return u.useEffect(() => {
    d(n)
  }, []), {
    state: l,
    executeStateUpdate: d,
    isDisabled: !1,
    visualState: _.ActionComponentState.NORMAL,
    error: a
  }
}
let y = u.createContext(null);

function L(e) {
  let {
    children: t,
    message: n,
    modal: a,
    validators: i
  } = e, r = u.useMemo(() => null != n ? {
    useComponentState: R.bind(null, n),
    channelId: n.channel_id,
    message: n,
    validators: i
  } : (o()(null != a, "modal is present if message is not"), {
    useComponentState: v.bind(null, a),
    channelId: a.channelId,
    modal: a,
    validators: i
  }), [n, a, i]);
  return (0, l.jsx)(y.Provider, {
    value: r,
    children: t
  })
}

function b(e, t) {
  return u.useContext(y).useComponentState(e, t)
}

function U() {
  return u.useContext(y)
}