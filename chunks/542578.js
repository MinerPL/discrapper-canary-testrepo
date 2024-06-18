"use strict";
var i, r = n(442837),
  s = n(570140),
  o = n(41776),
  a = n(222677),
  l = n(598077),
  u = n(592125),
  _ = n(594174);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = {};
class E {
  static ensure(e, t, n) {
    var i, r;
    let s = "".concat(e, ":").concat(t.name, ":").concat(null !== (i = t.id) && void 0 !== i ? i : "", ":").concat(n);
    return c[s] = null !== (r = c[s]) && void 0 !== r ? r : new E
  }
  constructor() {
    d(this, "users", void 0), d(this, "fetched", void 0), this.fetched = !1, this.users = {}
  }
}

function I(e) {
  let {
    type: t,
    messageId: n,
    userId: i,
    emoji: r,
    reactionType: s
  } = e, o = E.ensure(n, r, s);
  if ("MESSAGE_REACTION_ADD" === t) {
    let e = _.default.getUser(i);
    null != e && (o.users[i] = e)
  } else delete o.users[i]
}
class T extends(i = r.ZP.Store) {
  getReactions(e, t, n, i, r) {
    let s = E.ensure(t, n, r);
    if (!s.fetched) {
      let l = u.Z.getChannel(e),
        _ = null != l ? l.getGuildId() : null;
      if (null != _ && o.Z.isLurking(_)) return;
      a.U0({
        channelId: e,
        messageId: t,
        emoji: n,
        limit: i,
        type: r
      }), s.fetched = !0
    }
    return s.users
  }
}
d(T, "displayName", "MessageReactionsStore"), t.Z = new T(s.Z, {
  CONNECTION_OPEN: function() {
    c = {}
  },
  MESSAGE_REACTION_ADD: I,
  MESSAGE_REACTION_REMOVE: I,
  MESSAGE_REACTION_ADD_USERS: function(e) {
    let {
      messageId: t,
      users: n,
      emoji: i,
      reactionType: r
    } = e, s = E.ensure(t, i, r);
    n.forEach(e => s.users[e.id] = new l.Z(e))
  }
})