"use strict";
n.d(t, {
  $E: function() {
    return g
  },
  T6: function() {
    return C
  },
  TW: function() {
    return r
  },
  U0: function() {
    return O
  },
  Vn: function() {
    return D
  },
  WO: function() {
    return L
  },
  rU: function() {
    return R
  },
  wX: function() {
    return p
  }
});
var i, r, s = n(544891),
  o = n(780384),
  a = n(570140),
  l = n(668781),
  u = n(566006),
  _ = n(346479),
  d = n(314897),
  c = n(375954),
  E = n(585483),
  I = n(70956),
  T = n(176354),
  h = n(563114),
  S = n(981631),
  f = n(689938);

function N(e, t, n) {
  let {
    status: i,
    body: r
  } = e;
  if (429 === i) return setTimeout(t, e.body.retry_after * I.Z.Millis.SECOND), !1;
  if (403 === i) switch (r && r.code) {
    case S.evJ.TOO_MANY_REACTIONS:
      l.Z.show({
        title: f.Z.Messages.TOO_MANY_REACTIONS_ALERT_HEADER,
        body: f.Z.Messages.TOO_MANY_REACTIONS_ALERT_BODY,
        confirmText: f.Z.Messages.OKAY
      });
      break;
    case S.evJ.REACTION_BLOCKED:
      E.S.dispatch(S.CkL.SHAKE_APP, {
        duration: 200,
        intensity: 2
      })
  } else if (!n.isRetry) return t(), !1;
  return !0
}

function A(e, t, n, i, r) {
  var s, o;
  a.Z.dispatch({
    type: e,
    channelId: t,
    messageId: n,
    userId: null !== (s = null == r ? void 0 : r.userId) && void 0 !== s ? s : d.default.getId(),
    emoji: i,
    optimistic: !0,
    colors: null !== (o = null == r ? void 0 : r.colors) && void 0 !== o ? o : [],
    reactionType: (null == r ? void 0 : r.burst) ? u.O.BURST : u.O.NORMAL
  })
}

function m(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: i,
    userId: r,
    useTypeEndpoint: s = !1,
    type: o = u.O.NORMAL
  } = e, a = null != i.id ? "".concat(i.name, ":").concat(i.id) : i.name;
  return null == r ? S.ANM.REACTIONS(t, n, a) : s ? S.ANM.REACTION_WITH_TYPE(t, n, a, r, o) : S.ANM.REACTION(t, n, a, r)
}(i = r || (r = {})).MESSAGE = "Message", i.FORUM_TOOLBAR = "Forum Toolbar", i.MOBILE_MEDIA_VIEWER = "Mobile Media Viewer";
async function O(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: i,
    limit: r,
    after: o,
    type: l
  } = e, _ = l === u.O.VOTE ? function(e, t, n) {
    var i;
    let r = null !== (i = n.id) && void 0 !== i ? i : n.name;
    return S.ANM.POLL_ANSWER_VOTERS(e, t, r)
  }(t, n, i) : m({
    channelId: t,
    messageId: n,
    emoji: i
  }), d = await s.tn.get({
    url: _,
    query: {
      limit: r,
      after: o,
      type: l
    },
    oldFormErrors: !0
  }), c = l === u.O.VOTE ? d.body.users : d.body;
  return a.Z.dispatch({
    type: "MESSAGE_REACTION_ADD_USERS",
    channelId: t,
    messageId: n,
    users: c,
    emoji: i,
    reactionType: l
  }), c
}
async function R(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Message",
    r = arguments.length > 4 ? arguments[4] : void 0,
    a = null != r && !!r.burst,
    d = null != r && !!r.isRetry;
  if (!d && function(e, t, n, i) {
      let r = c.Z.getMessage(e, t);
      return null != r && r.userHasReactedWithEmoji(n, i)
    }(e, t, n, a)) {
    l.Z.show({
      title: f.Z.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_TITLE,
      body: f.Z.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_BODY,
      confirmText: f.Z.Messages.GOT_IT
    });
    return
  }
  let E = await v(n, a);
  return A("MESSAGE_REACTION_ADD", e, t, n, {
    burst: a,
    colors: E
  }), await _.Z.unarchiveThreadIfNecessary(e), s.tn.put({
    url: m({
      channelId: e,
      messageId: t,
      emoji: n,
      userId: "@me"
    }),
    query: {
      location: i,
      type: a ? u.O.BURST : u.O.NORMAL
    },
    oldFormErrors: !0
  }).then(() => {
    a ? (o.uv.announce(f.Z.Messages.BURST_REACTION_ADD_UNLIMITED_SUCCESS_A11Y.format({
      name: n.name
    })), h.Z.triggerFullscreenAnimation({
      channelId: e,
      messageId: t,
      emoji: {
        ...n,
        animated: !1
      }
    })) : o.uv.announce(f.Z.Messages.REACTION_ADD_SUCCESS_A11Y.format({
      name: n.name
    }))
  }).catch(r => {
    N(r, () => R(e, t, n, i, {
      burst: a,
      isRetry: !0
    }), {
      isRetry: d
    }) && (A("MESSAGE_REACTION_REMOVE", e, t, n, {
      burst: a
    }), a ? o.uv.announce(f.Z.Messages.BURST_REACTION_ADD_UNLIMITED_ERROR_A11Y.format({
      name: n.name
    })) : o.uv.announce(f.Z.Messages.REACTION_ADD_ERROR_A11Y.format({
      name: n.name
    })))
  })
}

function C(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: i,
    key: r
  } = e;
  a.Z.dispatch({
    type: "BURST_REACTION_EFFECT_PLAY",
    channelId: t,
    messageId: n,
    emoji: i,
    key: r
  })
}
async function p(e, t, n) {
  let i = null != n && !!n.isRetry;
  await _.Z.unarchiveThreadIfNecessary(e), s.tn.del({
    url: S.ANM.REMOVE_REACTIONS(e, t),
    oldFormErrors: !0
  }).catch(n => {
    N(n, () => p(e, t, {
      isRetry: !0
    }), {
      isRetry: i
    })
  })
}
async function g(e, t, n, i) {
  let r = null != i && !!i.isRetry;
  await _.Z.unarchiveThreadIfNecessary(e);
  let o = null === n.id ? n.name : "".concat(n.name, ":").concat(n.id);
  s.tn.del({
    url: S.ANM.REMOVE_EMOJI_REACTIONS(e, t, o),
    oldFormErrors: !0
  }).catch(i => {
    N(i, () => g(e, t, n, {
      isRetry: !0
    }), {
      isRetry: r
    })
  })
}
async function L(e, t, n, i) {
  let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "Message",
    a = arguments.length > 5 ? arguments[5] : void 0,
    l = null != a && !!a.burst,
    d = null != a && !!a.isRetry;
  A("MESSAGE_REACTION_REMOVE", e, t, n, {
    userId: i,
    burst: l
  }), await _.Z.unarchiveThreadIfNecessary(e), s.tn.del({
    url: m({
      channelId: e,
      messageId: t,
      emoji: n,
      userId: null != i ? i : "@me",
      type: l ? u.O.BURST : u.O.NORMAL,
      useTypeEndpoint: !0
    }),
    query: {
      location: r,
      burst: l
    },
    oldFormErrors: !0
  }).then(() => {
    (null == a ? void 0 : a.burst) ? o.uv.announce(f.Z.Messages.BURST_REACTION_REMOVE_SUCCESS_A11Y.format({
      name: n.name
    })): o.uv.announce(f.Z.Messages.REACTION_REMOVE_SUCCESS_A11Y.format({
      name: n.name
    }))
  }).catch(async s => {
    if (N(s, () => L(e, t, n, i, r, {
        burst: l,
        isRetry: !0
      }), {
        isRetry: d
      })) {
      let r = await v(n, l);
      A("MESSAGE_REACTION_ADD", e, t, n, {
        userId: i,
        burst: l,
        colors: r
      }), (null == a ? void 0 : a.burst) ? o.uv.announce(f.Z.Messages.BURST_REACTION_REMOVE_ERROR_A11Y.format({
        name: n.name
      })) : o.uv.announce(f.Z.Messages.REACTION_REMOVE_ERROR_A11Y.format({
        name: n.name
      }))
    }
  })
}
async function v(e, t) {
  let n = [];
  if (t) try {
    n = await (0, T.B6)(e)
  } catch {}
  return n
}

function D(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: i,
    reactionType: r,
    userId: s,
    location: o
  } = e;
  L(t, n, i, s, o, {
    burst: r === u.O.BURST
  })
}