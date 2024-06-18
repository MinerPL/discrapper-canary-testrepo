"use strict";
var i = n(544891),
  r = n(570140),
  s = n(367907),
  o = n(957730),
  a = n(592125),
  l = n(493683),
  u = n(904245),
  _ = n(981631);
t.Z = {
  updateActivity(e) {
    let {
      applicationId: t,
      distributor: n,
      shareActivity: s,
      token: o = null,
      duration: a = 0,
      closed: l = !1,
      exePath: u = null,
      voiceChannelId: d = null,
      sessionId: c = null,
      mediaSessionId: E = null
    } = e;
    r.Z.wait(() => r.Z.dispatch({
      type: "ACTIVITY_UPDATE_START",
      applicationId: t,
      duration: a,
      distributor: n
    })), i.tn.post({
      url: _.ANM.ACTIVITIES,
      body: {
        application_id: t,
        token: o,
        duration: a,
        share_activity: s,
        distributor: n,
        closed: l,
        exePath: u,
        voice_channel_id: d,
        session_id: c,
        media_session_id: E
      },
      retries: 1,
      oldFormErrors: !0
    }).then(e => {
      let {
        body: {
          token: i
        }
      } = e;
      r.Z.dispatch({
        type: "ACTIVITY_UPDATE_SUCCESS",
        applicationId: t,
        token: i,
        duration: a,
        distributor: n
      })
    }).catch(() => {
      r.Z.dispatch({
        type: "ACTIVITY_UPDATE_FAIL",
        applicationId: t
      })
    })
  },
  sendActivityInvite(e) {
    let {
      channelId: t,
      type: n,
      activity: i,
      content: r,
      location: l
    } = e, d = a.Z.getChannel(t);
    if (null == d) return Promise.resolve(null);
    let c = o.ZP.parse(d, null != r ? r : "");
    return u.Z.sendMessage(d.id, c, !1, {
      activityAction: {
        type: n,
        activity: i
      }
    }).then(e => (s.ZP.trackWithMetadata(_.rMx.INVITE_SENT, {
      location: l,
      invite_type: i.type === _.IIU.LISTENING ? _.dAT.SPOTIFY : _.dAT.APPLICATION,
      application_id: i.application_id,
      guild_id: d.getGuildId(),
      channel_id: d.id,
      message_id: null != e ? e.body.id : null
    }), Promise.resolve(d)), e => Promise.reject(e))
  },
  sendActivityInviteUser(e) {
    let {
      userId: t,
      type: n,
      activity: i,
      content: r,
      location: s
    } = e;
    return l.Z.ensurePrivateChannel(t).then(e => this.sendActivityInvite({
      channelId: e,
      type: n,
      activity: i,
      content: r,
      location: s
    }))
  },
  async getJoinSecret(e, t, n, r, s) {
    let o = {};
    return null != r && (o.channel_id = r), null != s && (o.message_id = s), (await i.tn.get({
      url: _.ANM.USER_ACTIVITY_JOIN(e, t, n),
      retries: 3,
      query: o
    })).body.secret
  }
}