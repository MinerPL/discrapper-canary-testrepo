"use strict";
n.r(t), n.d(t, {
  connect: function() {
    return i
  },
  disconnect: function() {
    return r
  },
  createLobby: function() {
    return o
  },
  updateLobby: function() {
    return u
  },
  updateLobbyMember: function() {
    return d
  },
  deleteLobby: function() {
    return c
  },
  send: function() {
    return f
  },
  search: function() {
    return E
  },
  voiceConnect: function() {
    return h
  },
  voiceDisconnect: function() {
    return _
  }
});
var a = n("872717"),
  s = n("913144"),
  l = n("49111");

function i(e, t, n) {
  return new Promise((a, l) => {
    s.default.dispatch({
      type: "LOBBY_CONNECT",
      socketId: e,
      lobbyId: t,
      lobbySecret: n,
      resolve: a,
      reject: l
    })
  })
}

function r(e) {
  s.default.dispatch({
    type: "LOBBY_DISCONNECT",
    lobbyId: e
  })
}

function o(e, t, n) {
  return a.HTTP.post({
    url: l.Endpoints.LOBBIES,
    body: {
      application_id: t,
      ...n
    },
    retries: 1,
    oldFormErrors: !0
  }).then(t => {
    let {
      body: n
    } = t;
    return i(e, n.id, n.secret)
  })
}

function u(e, t) {
  return a.HTTP.patch({
    url: l.Endpoints.LOBBY(e),
    body: {
      ...t
    },
    retries: 1,
    oldFormErrors: !0
  }).then(l.NOOP)
}

function d(e, t, n) {
  return a.HTTP.patch({
    url: l.Endpoints.LOBBY_MEMBER(e, t),
    body: {
      ...n
    },
    retries: 1,
    oldFormErrors: !0
  }).then(l.NOOP)
}

function c(e) {
  return a.HTTP.del({
    url: l.Endpoints.LOBBY(e),
    body: {},
    retries: 1,
    oldFormErrors: !0
  }).then(l.NOOP)
}

function f(e, t) {
  return a.HTTP.post({
    url: l.Endpoints.LOBBY_SEND(e),
    body: {
      data: t
    },
    oldFormErrors: !0
  }).then(l.NOOP)
}

function E(e) {
  return a.HTTP.post({
    url: l.Endpoints.LOBBY_SEARCH,
    body: e,
    oldFormErrors: !0
  }).then(e => {
    let {
      body: t
    } = e;
    return t
  })
}

function h(e) {
  s.default.dispatch({
    type: "LOBBY_VOICE_CONNECT",
    lobbyId: e
  })
}

function _(e) {
  s.default.dispatch({
    type: "LOBBY_VOICE_DISCONNECT",
    lobbyId: e
  })
}