n(47120), n(789020);
var i = n(544891),
  a = n(115130),
  s = n(287545),
  r = n(812206),
  l = n(695103),
  o = n(626135),
  c = n(630388),
  d = n(996106),
  u = n(914946),
  _ = n(452426),
  h = n(561205),
  E = n(186901),
  I = n(981631);
t.Z = {
  [I.Etm.SEND_ANALYTICS_EVENT]: {
validation: e => (0, _.Z)(e).required().keys({
  event_name: e.string().required(),
  event_properties: e.object().required()
}),
handler(e) {
  var t;
  let {
    socket: n,
    args: {
      event_name: i,
      event_properties: a
    }
  } = e;
  (0, u.bu)(n.transport), (0, u._f)(n.application);
  let l = n.application.id,
    _ = (0, h.Z)(),
    E = null == _ ? void 0 : _.getGuildId();
  if (null == _)
    throw new d.Z({
      errorCode: I.lTL.INVALID_COMMAND
    }, 'Invalid channel');
  let m = r.Z.getApplication(l);
  if (!(0, c.yE)(null !== (t = null == m ? void 0 : m.flags) && void 0 !== t ? t : 0, I.udG.EMBEDDED_FIRST_PARTY))
    throw new d.Z({
      errorCode: I.lTL.INVALID_COMMAND
    }, 'This application cannot access this API');
  let g = (0, s.U)(l),
    p = {
      activity_application_id: l,
      activity_channel_type: _.type,
      activity_guild_id: E,
      activity_user_session_id: null == g ? void 0 : g.activityUserSessionId
    };
  o.default.track(i, {
    ...p,
    ...a
  });
}
  },
  [I.Etm.GET_APPLICATION_TICKET]: {
scope: E.lH,
handler(e) {
  let {
    socket: t
  } = e, n = t.application.id;
  if (null == n)
    throw new d.Z({
      errorCode: I.lTL.INVALID_COMMAND
    }, 'No application.');
  return i.tn.post({
    url: I.ANM.APPLICATION_TICKET(n),
    body: {
      test_mode: l.Z.inTestModeForApplication(n) || a.Z.inDevModeForApplication(n)
    },
    retries: 3,
    oldFormErrors: !0
  }).then(e => {
    let {
      body: t
    } = e;
    return t;
  });
}
  }
};