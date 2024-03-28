"use strict";
n.r(t), n.d(t, {
  PollContextProvider: function() {
    return r
  },
  useMessageIds: function() {
    return u
  },
  usePollContext: function() {
    return i
  },
  useStyleClass: function() {
    return o
  }
}), n("411104");
var s = n("735250"),
  a = n("470079");
let l = a.createContext(void 0);

function i() {
  let e = a.useContext(l);
  if (null == e) throw Error("No PollContextProvider found");
  return e
}

function r(e) {
  let {
    children: t,
    message: n,
    poll: i
  } = e, r = a.useMemo(() => ({
    message: n,
    poll: i
  }), [n, i]);
  return (0, s.jsx)(l.Provider, {
    value: r,
    children: t
  })
}

function o(e) {
  return function() {
    let {
      poll: e
    } = i();
    return e.resources
  }().styles[e]
}

function u() {
  let {
    message: e
  } = i(), t = e.getChannelId();
  return a.useMemo(() => ({
    channelId: t,
    messageId: e.id
  }), [e.id, t])
}