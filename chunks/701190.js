"use strict";
n(789020);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(264229),
  _ = n(981631);
let d = {},
  c = {},
  E = {};

function I(e, t) {
  var n;
  e = null != e ? e : "";
  let i = (0, u.fU)(e),
    r = d[e],
    s = null != r ? {
      state: _.r2o.RESOLVING,
      ...r
    } : {
      state: _.r2o.RESOLVING,
      code: i.baseCode
    };
  t(s), d = {
    ...d,
    [e]: s
  }, (null === (n = s.guild) || void 0 === n ? void 0 : n.id) != null && (E = {
    ...E,
    [s.guild.id]: e
  })
}

function T(e) {
  return I(e.code, t => {
    t.state = "banned" in e && e.banned ? _.r2o.BANNED : _.r2o.EXPIRED
  })
}
class h extends(i = a.ZP.Store) {
  getInvite(e) {
    return d[e]
  }
  getInviteError(e) {
    return c[e]
  }
  getInvites() {
    return d
  }
  getInviteKeyForGuildId(e) {
    return E[e]
  }
}
o = "InviteStore", (s = "displayName") in(r = h) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new h(l.Z, {
  INVITE_RESOLVE: function(e) {
    let {
      code: t
    } = e, n = (0, u.fU)(t);
    d = {
      ...d,
      [t]: {
        code: n.baseCode,
        state: _.r2o.RESOLVING
      }
    }
  },
  INVITE_RESOLVE_SUCCESS: function(e) {
    return I(e.code, t => {
      var n, i;
      t.state = _.r2o.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
    })
  },
  INVITE_RESOLVE_FAILURE: T,
  INSTANT_INVITE_REVOKE_SUCCESS: T,
  FRIEND_INVITE_CREATE_SUCCESS: function(e) {
    return I(e.invite.code, t => {
      t.state = _.r2o.RESOLVED, t.inviter = e.invite.inviter
    })
  },
  FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
    e.invites.forEach(e => I(e.code, e => {
      e.state = _.r2o.EXPIRED
    }))
  },
  INSTANT_INVITE_CREATE_SUCCESS: function(e) {
    return I(e.invite.code, t => {
      var n, i;
      t.state = _.r2o.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
    })
  },
  INVITE_ACCEPT: function(e) {
    return I(e.code, e => {
      e.state = _.r2o.ACCEPTING
    })
  },
  INVITE_ACCEPT_SUCCESS: function(e) {
    return I(e.code, t => {
      t.state = _.r2o.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
        ...t.channel,
        ...e.invite.channel
      }
    })
  },
  INVITE_ACCEPT_FAILURE: function(e) {
    return c[e.code] = e.error, I(e.code, e => {
      e.state = _.r2o.ERROR
    })
  },
  INVITE_APP_OPENING: function(e) {
    return I(e.code, e => {
      e.state = _.r2o.APP_OPENING
    })
  },
  INVITE_APP_OPENED: function(e) {
    return I(e.code, e => {
      e.state = _.r2o.APP_OPENED
    })
  },
  INVITE_APP_NOT_OPENED: function(e) {
    return I(e.code, e => {
      e.state = _.r2o.APP_NOT_OPENED
    })
  }
})