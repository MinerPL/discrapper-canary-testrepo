"use strict";
n.d(t, {
  Z: function() {
    return E
  }
});
var i = n(990547),
  r = n(283693),
  s = n(131704),
  o = n(314897),
  a = n(626135),
  l = n(573261),
  u = n(264229),
  _ = n(245335),
  d = n(981631);

function c(e) {
  let t = null;
  if (null != e && null != e.channel) {
    let n = e.channel;
    t = e.target_type === _.Iq.STREAM ? d.dAT.STREAM : e.target_type === _.Iq.EMBEDDED_APPLICATION ? d.dAT.APPLICATION : (0, s.bc)(n.type) ? d.dAT.GDM_INVITE : null == n || (0, s.hv)(n.type) ? d.dAT.FRIEND_INVITE : d.dAT.SERVER_INVITE
  }
  return t
}

function E(e, t, n) {
  a.default.track(d.rMx.INVITE_OPENED, {
    invite_code: e
  });
  let s = (0, u.fU)(e),
    _ = {
      ...n,
      with_counts: !0,
      with_expiration: !0,
      guild_scheduled_event_id: s.guildScheduledEventId
    };
  return l.Z.get({
    url: d.ANM.INVITE(s.baseCode),
    query: _,
    oldFormErrors: !0,
    trackedActionData: {
      event: i.NetworkActionNames.INVITE_RESOLVE,
      properties: e => {
        var i, a, l, u, _, E;
        let I = e.body,
          T = (null === (i = e.body) || void 0 === i ? void 0 : i.code) === d.evJ.USER_BANNED;
        return (0, r.iG)({
          resolved: e.ok,
          guild_id: null == I ? void 0 : null === (a = I.guild) || void 0 === a ? void 0 : a.id,
          channel_id: null == I ? void 0 : null === (l = I.channel) || void 0 === l ? void 0 : l.id,
          channel_type: null == I ? void 0 : null === (u = I.channel) || void 0 === u ? void 0 : u.type,
          inviter_id: null == I ? void 0 : null === (_ = I.inviter) || void 0 === _ ? void 0 : _.id,
          code: s.baseCode,
          input_value: null == n ? void 0 : n.inputValue,
          location: t,
          authenticated: o.default.isAuthenticated(),
          size_total: null == I ? void 0 : I.approximate_member_count,
          size_online: null == I ? void 0 : I.approximate_presence_count,
          destination_user_id: null == I ? void 0 : null === (E = I.target_user) || void 0 === E ? void 0 : E.id,
          invite_type: c(I),
          user_banned: T
        })
      }
    }
  }).then(i => {
    let r = i.body;
    return null != t && a.default.track(d.rMx.INVITE_RESOLVED, {
      resolved: !0,
      guild_id: null != r.guild ? r.guild.id : null,
      channel_id: null != r.channel ? r.channel.id : null,
      channel_type: null != r.channel ? r.channel.type : null,
      inviter_id: r.inviter ? r.inviter.id : null,
      code: s.baseCode,
      input_value: null == n ? void 0 : n.inputValue,
      location: t,
      authenticated: o.default.isAuthenticated(),
      size_total: r.approximate_member_count,
      size_online: r.approximate_presence_count,
      destination_user_id: null != r.target_user ? r.target_user.id : null,
      invite_type: c(r)
    }, {
      flush: !0
    }), {
      invite: r,
      code: e
    }
  }, i => {
    let r = null != i.body && i.body.code === d.evJ.USER_BANNED;
    if (null != t) {
      var l, u;
      a.default.track(d.rMx.INVITE_RESOLVED, {
        resolved: !1,
        code: s.baseCode,
        input_value: null == n ? void 0 : n.inputValue,
        location: t,
        authenticated: o.default.isAuthenticated(),
        user_banned: r,
        error_code: null === (l = i.body) || void 0 === l ? void 0 : l.code,
        error_message: null === (u = i.body) || void 0 === u ? void 0 : u.message
      }, {
        flush: !0
      })
    }
    return {
      invite: null,
      code: e,
      banned: r
    }
  })
}