n(47120);
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(570140),
  r = n(988298),
  l = n(447543),
  o = n(13245),
  c = n(596223),
  d = n(293273),
  u = n(885110),
  _ = n(996106),
  h = n(914946),
  E = n(452426),
  I = n(852926),
  m = n(186901),
  g = n(981631);
t.Z = {
  [g.Etm.SET_OVERLAY_LOCKED]: {
scope: m.lH,
validation: e => (0, E.Z)(e).required().keys({
  locked: e.boolean().required(),
  pid: e.number().min(0).required()
}),
handler(e) {
  let {
    args: {
      locked: t,
      pid: n
    },
    socket: {
      application: i
    }
  } = e;
  if (null == i.id)
    throw new _.Z({
      errorCode: g.lTL.INVALID_COMMAND
    }, 'No application.');
  o.Z.setLocked(t, n);
}
  },
  [g.Etm.OPEN_OVERLAY_ACTIVITY_INVITE]: {
scope: m.lH,
validation: e => (0, E.Z)(e).required().keys({
  type: e.number().required().valid([g.mFx.JOIN]),
  pid: e.number().min(0).required()
}),
handler(e) {
  let {
    socket: t,
    args: {
      type: n,
      pid: i
    }
  } = e, a = t.application.id;
  if (null == a)
    throw new _.Z({
      errorCode: g.lTL.INVALID_COMMAND
    }, 'No application.');
  let s = d.Z.getApplicationActivity(a);
  if (null == s || null == s.secrets || !(0, h.t9)(n, s.party, s.secrets))
    throw new _.Z({
      errorCode: g.lTL.NO_ELIGIBLE_ACTIVITY
    }, 'No eligible activity for application. Ensure an activity includes a party and appropriate secret.');
  let {
    lock: l
  } = (0, I.s0)(i), o = (0, c.Z)(s, u.Z);
  return (0, r.h7)(s, o).then(() => {
    if (l(), o)
      throw new _.Z({
        errorCode: g.lTL.NO_ELIGIBLE_ACTIVITY
      }, 'No eligible activity for application. Ensure user does have have privacy enabled.');
  });
}
  },
  [g.Etm.OPEN_OVERLAY_GUILD_INVITE]: {
scope: m.lH,
validation: e => (0, E.Z)(e).required().keys({
  code: e.string().required(),
  pid: e.number().min(0).required()
}),
handler(e) {
  let {
    args: {
      code: t,
      pid: n
    },
    socket: i
  } = e;
  if (null == i.application.id)
    throw new _.Z({
      errorCode: g.lTL.INVALID_COMMAND
    }, 'No application.');
  return l.Z.resolveInvite(t, 'Game SDK').then(e => {
    let {
      invite: t,
      code: i
    } = e;
    if (null == t)
      throw new _.Z({
        errorCode: g.lTL.INVALID_INVITE
      }, 'Invalid invite id: '.concat(i));
    let {
      context: a,
      lock: r
    } = (0, I.s0)(n);
    return new Promise(e => {
      s.Z.dispatch({
        type: 'INVITE_MODAL_OPEN',
        invite: t,
        code: i,
        context: a,
        resolve: e
      });
    }).then(r);
  });
}
  },
  [g.Etm.OPEN_OVERLAY_VOICE_SETTINGS]: {
scope: m.lH,
validation: e => (0, E.Z)(e).required().keys({
  pid: e.number().min(0).required()
}),
handler(e) {
  let {
    args: {
      pid: t
    },
    socket: s
  } = e, r = s.application.id;
  if (null == r)
    throw new _.Z({
      errorCode: g.lTL.INVALID_COMMAND
    }, 'No application.');
  let {
    lock: l
  } = (0, I.s0)(t);
  return new Promise(e => {
    (0, a.openModalLazy)(async () => {
      let {
        default: t
      } = await n.e('66063').then(n.bind(n, 344516));
      return n => (0, i.jsx)(t, {
        ...n,
        mediaEngineContext: r,
        title: s.application.name,
        onClose: () => {
          n.onClose(), l(), e();
        }
      });
    });
  });
}
  }
};