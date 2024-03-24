"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var a = n("446674"),
  l = n("913144"),
  s = n("32346"),
  i = n("271938"),
  r = n("824563"),
  u = n("299039"),
  o = n("49111");
let d = {};

function c(e) {
  var t;
  let n = e.find(e => e.type === o.ActivityTypes.CUSTOM_STATUS);
  return null == n ? null : (null === (t = n.emoji) || void 0 === t ? void 0 : t.name) === "\uD83C\uDFAE" ? function(e) {
    var t;
    return {
      game: "Test Game",
      description: null !== (t = e.state) && void 0 !== t ? t : "",
      created_at: e.created_at
    }
  }(n) : null
}

function f(e, t) {
  let n = c(e);
  null != n ? d[t] = {
    userId: t,
    ...n
  } : delete d[t]
}
class h extends a.default.Store {
  initialize() {
    this.waitFor(i.default, s.default, r.default)
  }
  getDownToPlay(e) {
    return d[e]
  }
}
h.displayName = "DownToPlayStore";
var m = new h(l.default, {
  CONNECTION_OPEN: function() {
    return !0
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: n
    } = e;
    d = {}, t.forEach(e => {
      e.presences.forEach(e => {
        f(e.activities, e.user.id)
      })
    }), n.forEach(e => {
      f(e.activities, e.user.id)
    })
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      presences: t
    } = e;
    d = {}, u.default.keys(t.presencesForGuilds).forEach(e => {
      let n = t.presencesForGuilds[e];
      u.default.keys(n).forEach(t => {
        let a = n[t],
          l = c(a.activities);
        null != l && (d[e] = {
          userId: e,
          ...l
        })
      })
    })
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    t.presences.forEach(e => {
      f(e.activities, e.user.id)
    })
  },
  GUILD_DELETE: function(e) {
    let {} = e
  },
  GUILD_MEMBER_REMOVE: function(e) {
    let {} = e
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => f(e.activities, e.user.id)).some(e => e)
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    d = {}, t.forEach(e => {
      null != e.user && f(e.activities, e.user.id)
    })
  },
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      members: t
    } = e;
    t.forEach(e => {
      null != e.presence && f(e.presence.activities, e.presence.user.id)
    })
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let {
      addedMembers: t
    } = e;
    null == t || t.forEach(e => {
      null != e.presence && f(e.presence.activities, e.presence.user.id)
    })
  },
  SELF_PRESENCE_STORE_UPDATE: function(e) {
    let t = i.default.getId();
    f(e.activities, t)
  }
})