"use strict";
n.r(t), n("47120");
var a, l, s, i, r = n("442837"),
  o = n("570140"),
  u = n("106301"),
  d = n("314897"),
  c = n("158776"),
  f = n("709054"),
  h = n("981631");
let m = {};

function p(e) {
  var t;
  let n = e.find(e => e.type === h.ActivityTypes.CUSTOM_STATUS);
  return null == n ? null : (null === (t = n.emoji) || void 0 === t ? void 0 : t.name) === "\uD83C\uDFAE" ? function(e) {
    var t;
    return {
      game: "Test Game",
      description: null !== (t = e.state) && void 0 !== t ? t : "",
      created_at: e.created_at
    }
  }(n) : null
}

function E(e, t) {
  let n = p(e);
  null != n ? m[t] = {
    userId: t,
    ...n
  } : delete m[t]
}
class C extends(a = r.default.Store) {
  initialize() {
    this.waitFor(d.default, u.default, c.default)
  }
  getDownToPlay(e) {
    return m[e]
  }
}
i = "DownToPlayStore", (s = "displayName") in(l = C) ? Object.defineProperty(l, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[s] = i, t.default = new C(o.default, {
  CONNECTION_OPEN: function() {
    return !0
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: n
    } = e;
    m = {}, t.forEach(e => {
      e.presences.forEach(e => {
        E(e.activities, e.user.id)
      })
    }), n.forEach(e => {
      E(e.activities, e.user.id)
    })
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      presences: t
    } = e;
    m = {}, f.default.keys(t.presencesForGuilds).forEach(e => {
      let n = t.presencesForGuilds[e];
      f.default.keys(n).forEach(t => {
        let a = p(n[t].activities);
        null != a && (m[e] = {
          userId: e,
          ...a
        })
      })
    })
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    t.presences.forEach(e => {
      E(e.activities, e.user.id)
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
    return t.map(e => E(e.activities, e.user.id)).some(e => e)
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    m = {}, t.forEach(e => {
      null != e.user && E(e.activities, e.user.id)
    })
  },
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      members: t
    } = e;
    t.forEach(e => {
      null != e.presence && E(e.presence.activities, e.presence.user.id)
    })
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let {
      addedMembers: t
    } = e;
    null == t || t.forEach(e => {
      null != e.presence && E(e.presence.activities, e.presence.user.id)
    })
  },
  SELF_PRESENCE_STORE_UPDATE: function(e) {
    let t = d.default.getId();
    E(e.activities, t)
  }
})