var r = n(544891),
  i = n(570140),
  a = n(523746),
  o = n(699516),
  s = n(594174),
  l = n(626135),
  u = n(668781),
  c = n(194359),
  d = n(287734),
  _ = n(981631),
  E = n(689938);
t.Z = {
  call(e, t, n, i, a) {
let f = n => {
  d.default.selectVoiceChannel(e, t), n && this.ring(e), null == a || a(e);
};
if (null != i) {
  if (o.Z.isBlocked(i))
    return;
  let t = s.default.getUser(i);
  r.tn.get({
    url: _.ANM.CALL(e),
    oldFormErrors: !0
  }).then(e => {
    f(n && e.body.ringable);
  }, () => {
    l.default.track(_.rMx.OPEN_POPOUT, {
      type: 'Not Friend',
      source: 'Call'
    }), u.Z.show({
      title: E.Z.Messages.START_CALL,
      body: E.Z.Messages.CALL_INVITE_NOT_FRIENDS.format({
        username: null != t ? t.username : ''
      }),
      confirmText: E.Z.Messages.ADD_FRIEND_BUTTON,
      cancelText: E.Z.Messages.OKAY,
      onConfirm() {
        c.Z.addRelationship({
          userId: i,
          context: {
            location: 'Call'
          }
        });
      }
    });
  });
} else
  f(n);
  },
  ring(e, t) {
let n = a.Z.getCall(e);
if (null != n && null != n.messageId && !a.Z.isCallUnavailable(e)) {
  r.tn.post({
    url: _.ANM.CALL_RING(e),
    body: {
      recipients: t
    },
    oldFormErrors: !0
  });
  return;
}
i.Z.dispatch({
  type: 'CALL_ENQUEUE_RING',
  channelId: e,
  recipients: t
});
  },
  stopRinging: (e, t) => r.tn.post({
url: _.ANM.CALL_STOP_RINGING(e),
body: {
  recipients: t
},
oldFormErrors: !0
  })
};