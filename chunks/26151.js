"use strict";
var i = n(544891),
  r = n(570140),
  s = n(523746),
  o = n(699516),
  a = n(594174),
  l = n(626135),
  u = n(668781),
  _ = n(194359),
  d = n(287734),
  c = n(981631),
  E = n(689938);
t.Z = {
  call(e, t, n, r, s) {
    let I = n => {
      d.default.selectVoiceChannel(e, t), n && this.ring(e), null == s || s(e)
    };
    if (null != r) {
      if (o.Z.isBlocked(r)) return;
      let t = a.default.getUser(r);
      i.tn.get({
        url: c.ANM.CALL(e),
        oldFormErrors: !0
      }).then(e => {
        I(n && e.body.ringable)
      }, () => {
        l.default.track(c.rMx.OPEN_POPOUT, {
          type: "Not Friend",
          source: "Call"
        }), u.Z.show({
          title: E.Z.Messages.START_CALL,
          body: E.Z.Messages.CALL_INVITE_NOT_FRIENDS.format({
            username: null != t ? t.username : ""
          }),
          confirmText: E.Z.Messages.ADD_FRIEND_BUTTON,
          cancelText: E.Z.Messages.OKAY,
          onConfirm() {
            _.Z.addRelationship({
              userId: r,
              context: {
                location: "Call"
              }
            })
          }
        })
      })
    } else I(n)
  },
  ring(e, t) {
    let n = s.Z.getCall(e);
    if (null != n && null != n.messageId && !s.Z.isCallUnavailable(e)) {
      i.tn.post({
        url: c.ANM.CALL_RING(e),
        body: {
          recipients: t
        },
        oldFormErrors: !0
      });
      return
    }
    r.Z.dispatch({
      type: "CALL_ENQUEUE_RING",
      channelId: e,
      recipients: t
    })
  },
  stopRinging: (e, t) => i.tn.post({
    url: c.ANM.CALL_STOP_RINGING(e),
    body: {
      recipients: t
    },
    oldFormErrors: !0
  })
}