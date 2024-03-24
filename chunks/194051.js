"use strict";
a.r(t), a.d(t, {
  default: function() {
    return D
  }
}), a("222007");
var l, n, r = a("917351"),
  s = a("446674"),
  i = a("407846"),
  d = a("913144"),
  o = a("766274"),
  u = a("271938"),
  c = a("299039"),
  S = a("9759"),
  f = a("837374");
(n = l || (l = {}))[n.INVALID = 0] = "INVALID", n[n.VALID_USER_ONLY = 1] = "VALID_USER_ONLY", n[n.VALID = 2] = "VALID";
let A = new Set,
  T = new Set,
  _ = new Set,
  E = [],
  I = {
    BROADCASTS_BY_USER_ID: e => "user:".concat(e),
    BROADCASTS_BY_CHANNEL_ID: e => "channel:".concat(e),
    BROADCASTS_BY_VALIDITY: e => "validity:".concat(e)
  },
  g = new i.default(function(e) {
    let t = A.has(e.userId) ? 1 : 0;
    return null != e.viewers && (t = 2), [I.BROADCASTS_BY_USER_ID(e.userId), I.BROADCASTS_BY_CHANNEL_ID(e.channelId), I.BROADCASTS_BY_VALIDITY(t)]
  }, e => e.channelId);

function R(e, t, a) {
  if (u.default.getId() === e) return !1;
  if (null == t) {
    let t = g.get(e);
    return !!(null != t && (0, r.isEqual)(t.source, a)) && (g.delete(e), void 0)
  }!A.has(e) && !T.has(e) && (_.add(e), E = [..._]);
  let l = (0, f.broadcastFromServer)(t, e, a);
  g.set(e, l)
}

function h(e) {
  return null != e ? {
    type: f.BroadcastSourceType.GUILD,
    guildId: e
  } : {
    type: f.BroadcastSourceType.GLOBAL
  }
}
class m extends s.default.Store {
  getBroadcasts() {
    return g.values(I.BROADCASTS_BY_VALIDITY(2))
  }
  getBroadcastsToValidateChannels() {
    return g.values(I.BROADCASTS_BY_VALIDITY(1))
  }
  getBroadcastByChannel(e) {
    return g.values(I.BROADCASTS_BY_CHANNEL_ID(e))[0]
  }
  getBroadcastByUser(e) {
    return g.get(e)
  }
  getUserIdsToValidate() {
    return E
  }
}
m.displayName = "BroadcastingStore";
var D = new m(d.default, {
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.forEach(e => {
      let {
        user: t,
        broadcast: a,
        guildId: l
      } = e;
      R(t.id, a, h(l))
    })
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    return t.forEach(e => {
      let {
        user: t,
        broadcast: a,
        guildId: l
      } = e;
      R(t.id, a, h(l))
    })
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      presences: t,
      guilds: a
    } = e;
    t.forEach(e => {
      let {
        user: t,
        broadcast: a,
        guildId: l
      } = e;
      R(t.id, a, h(l))
    }), a.forEach(e => {
      let {
        presences: t,
        id: a
      } = e;
      t.forEach(e => {
        let {
          user: t,
          broadcast: l
        } = e;
        R(t.id, l, h(a))
      })
    })
  },
  BROADCASTER_BUCKETS_RECEIVED: function(e) {
    let {
      data: t
    } = e;
    c.default.keys(t).forEach(e => {
      S.CAN_VIEW_BROADCASTS_BUCKETS.includes(t[e]) ? A.add(e) : T.add(e), _.clear(), E = [..._];
      let a = g.get(e);
      null != a && (g.delete(e), g.set(e, a))
    })
  },
  BROADCAST_VIEWERS_UPDATE: function(e) {
    let {
      viewers: t
    } = e;
    Object.entries(t).forEach(e => {
      let [t, a] = e, l = g.get(t);
      null != l && g.set(t, {
        ...l,
        viewers: a
      })
    })
  },
  CHANNEL_RECIPIENT_ADD: function(e) {
    let {
      channelId: t,
      user: a
    } = e, l = g.values(I.BROADCASTS_BY_CHANNEL_ID(t))[0];
    if (null == l || null == l.viewers || l.viewers.some(e => e.id === a.id)) return !1;
    g.set(l.userId, {
      ...l,
      viewers: [...l.viewers, new o.default(a)]
    })
  },
  CHANNEL_RECIPIENT_REMOVE: function(e) {
    let {
      channelId: t,
      user: a
    } = e, l = g.values(I.BROADCASTS_BY_CHANNEL_ID(t))[0];
    if (null == l || null == l.viewers) return !1;
    g.set(l.userId, {
      ...l,
      viewers: l.viewers.filter(e => e.id !== a.id)
    })
  },
  CHANNEL_CREATE: function(e) {
    var t;
    let {
      channel: a
    } = e, l = g.values(I.BROADCASTS_BY_CHANNEL_ID(a.id))[0];
    if (null == l) return !1;
    let n = null !== (t = a.rawRecipients) && void 0 !== t ? t : [];
    g.set(l.userId, {
      ...l,
      viewers: n.filter(e => e.id !== l.userId).map(e => new o.default(e))
    })
  },
  LOGOUT: function() {
    A.clear(), T.clear(), _.clear(), E = [], g.clear()
  }
})