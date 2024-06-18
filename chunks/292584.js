"use strict";
n(47120);
var i, r, s, o, a, l, u = n(392711),
  _ = n(442837),
  d = n(759174),
  c = n(570140),
  E = n(598077),
  I = n(314897),
  T = n(709054),
  h = n(770471),
  S = n(860852);
(s = i || (i = {}))[s.INVALID = 0] = "INVALID", s[s.VALID_USER_ONLY = 1] = "VALID_USER_ONLY", s[s.VALID = 2] = "VALID";
let f = new Set,
  N = new Set,
  A = new Set,
  m = [],
  O = e => "user:".concat(e),
  R = e => "channel:".concat(e),
  C = e => "validity:".concat(e),
  p = new d.h(function(e) {
    let t = f.has(e.userId) ? 1 : 0;
    return null != e.viewers && (t = 2), [O(e.userId), R(e.channelId), C(t)]
  }, e => e.channelId);

function g(e, t, n) {
  if (I.default.getId() === e) return !1;
  if (null == t) {
    let t = p.get(e);
    return !!(null != t && (0, u.isEqual)(t.source, n)) && (p.delete(e), void 0)
  }!f.has(e) && !N.has(e) && (A.add(e), m = [...A]);
  let i = (0, S.tI)(t, e, n);
  p.set(e, i)
}

function L(e) {
  return null != e ? {
    type: S.$C.GUILD,
    guildId: e
  } : {
    type: S.$C.GLOBAL
  }
}
class v extends(r = _.ZP.Store) {
  getBroadcasts() {
    return p.values(C(2))
  }
  getBroadcastsToValidateChannels() {
    return p.values(C(1))
  }
  getBroadcastByChannel(e) {
    return p.values(R(e))[0]
  }
  getBroadcastByUser(e) {
    return p.get(e)
  }
  getUserIdsToValidate() {
    return m
  }
}
l = "BroadcastingStore", (a = "displayName") in(o = v) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.Z = new v(c.Z, {
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.forEach(e => {
      let {
        user: t,
        broadcast: n,
        guildId: i
      } = e;
      g(t.id, n, L(i))
    })
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    return t.forEach(e => {
      let {
        user: t,
        broadcast: n,
        guildId: i
      } = e;
      g(t.id, n, L(i))
    })
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      presences: t,
      guilds: n
    } = e;
    t.forEach(e => {
      let {
        user: t,
        broadcast: n,
        guildId: i
      } = e;
      g(t.id, n, L(i))
    }), n.forEach(e => {
      let {
        presences: t,
        id: n
      } = e;
      t.forEach(e => {
        let {
          user: t,
          broadcast: i
        } = e;
        g(t.id, i, L(n))
      })
    })
  },
  BROADCASTER_BUCKETS_RECEIVED: function(e) {
    let {
      data: t
    } = e;
    T.default.keys(t).forEach(e => {
      h.g.includes(t[e]) ? f.add(e) : N.add(e), A.clear(), m = [...A];
      let n = p.get(e);
      null != n && (p.delete(e), p.set(e, n))
    })
  },
  BROADCAST_VIEWERS_UPDATE: function(e) {
    let {
      viewers: t
    } = e;
    Object.entries(t).forEach(e => {
      let [t, n] = e, i = p.get(t);
      null != i && p.set(t, {
        ...i,
        viewers: n
      })
    })
  },
  CHANNEL_RECIPIENT_ADD: function(e) {
    let {
      channelId: t,
      user: n
    } = e, i = p.values(R(t))[0];
    if (null == i || null == i.viewers || i.viewers.some(e => e.id === n.id)) return !1;
    p.set(i.userId, {
      ...i,
      viewers: [...i.viewers, new E.Z(n)]
    })
  },
  CHANNEL_RECIPIENT_REMOVE: function(e) {
    let {
      channelId: t,
      user: n
    } = e, i = p.values(R(t))[0];
    if (null == i || null == i.viewers) return !1;
    p.set(i.userId, {
      ...i,
      viewers: i.viewers.filter(e => e.id !== n.id)
    })
  },
  CHANNEL_CREATE: function(e) {
    var t;
    let {
      channel: n
    } = e, i = p.values(R(n.id))[0];
    if (null == i) return !1;
    let r = null !== (t = n.rawRecipients) && void 0 !== t ? t : [];
    p.set(i.userId, {
      ...i,
      viewers: r.filter(e => e.id !== i.userId).map(e => new E.Z(e))
    })
  },
  LOGOUT: function() {
    f.clear(), N.clear(), A.clear(), m = [], p.clear()
  }
})