n(47120), n(411104), n(789020);
var i = n(735250);
n(470079);
var s = n(243814),
  a = n(45792),
  r = n(481060),
  l = n(278323),
  o = n(988298),
  c = n(224706),
  d = n(45114),
  u = n(479531),
  _ = n(40851),
  h = n(566620),
  E = n(596223),
  I = n(838195),
  m = n(928518),
  g = n(592125),
  p = n(293273),
  T = n(885110),
  S = n(451478),
  C = n(630388),
  f = n(823379),
  N = n(591759),
  A = n(228488),
  Z = n(996106),
  L = n(914946),
  v = n(452426),
  O = n(561205),
  R = n(600027),
  x = n(852926),
  b = n(186901),
  P = n(981631);
async function M(e, t, n, i) {
  let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '',
a = p.Z.getApplicationActivity(t);
  if (null == a || null == a.secrets || !(0, L.t9)(i, a.party, a.secrets))
throw new Z.Z({
  errorCode: P.lTL.NO_ELIGIBLE_ACTIVITY
}, 'No eligible activity for application. Ensure an activity includes a party and appropriate secret.');
  let r = (0, E.Z)(a, T.Z);
  if (r) {
let {
  lock: t
} = (0, x.s0)(e);
return (0, o.h7)(a, r).then(() => {
  throw t(), new Z.Z({
    errorCode: P.lTL.NO_ELIGIBLE_ACTIVITY
  }, 'No eligible activity for application. Ensure user does have have privacy enabled.');
});
  }
  await l.Z.sendActivityInviteUser({
userId: n,
type: i,
activity: a,
content: s,
location: 'In-Game Invite'
  });
}
t.Z = {
  [P.Etm.SEND_ACTIVITY_JOIN_INVITE]: {
scope: {
  [b.Gp.ANY]: [
    s.x.RPC,
    b.lH
  ]
},
handler(e) {
  let {
    socket: t,
    args: {
      user_id: n,
      pid: i
    }
  } = e, s = t.application.id;
  if (null == s)
    throw new Z.Z({
      errorCode: P.lTL.INVALID_COMMAND
    }, 'No application.');
  return M(i, s, n, P.mFx.JOIN);
}
  },
  [P.Etm.CLOSE_ACTIVITY_JOIN_REQUEST]: {
scope: {
  [b.Gp.ANY]: [
    s.x.RPC,
    b.lH
  ]
},
handler(e) {
  let {
    args: {
      user_id: t
    }
  } = e, n = g.Z.getDMFromUserId(t);
  null != n && (0, d.In)(n, !0, !0);
}
  },
  [P.Etm.ACTIVITY_INVITE_USER]: {
scope: {
  [b.Gp.ANY]: [
    s.x.RPC,
    b.lH
  ]
},
validation: e => (0, v.Z)(e).required().keys({
  user_id: e.string().required(),
  type: e.number().required().valid([P.mFx.JOIN]),
  content: e.string().min(0).max(1024),
  pid: e.number().min(0).required()
}),
handler(e) {
  let {
    socket: t,
    args: {
      type: n,
      user_id: i,
      content: s,
      pid: a
    }
  } = e, r = t.application.id;
  if (null == r)
    throw new Z.Z({
      errorCode: P.lTL.INVALID_COMMAND
    }, 'No application.');
  return M(a, r, i, n, s);
}
  },
  [P.Etm.ACCEPT_ACTIVITY_INVITE]: {
scope: {
  [b.Gp.ANY]: [
    s.x.RPC,
    b.lH
  ]
},
validation: e => (0, v.Z)(e).required().keys({
  type: e.number().required().valid([P.mFx.JOIN]),
  user_id: e.string().required(),
  session_id: e.string().required(),
  channel_id: e.string().required(),
  message_id: e.string().required()
}),
handler(e) {
  let {
    socket: t,
    args: {
      type: n,
      user_id: i,
      session_id: s,
      channel_id: a,
      message_id: r
    }
  } = e, l = t.application.id;
  if (null == l)
    throw new Z.Z({
      errorCode: P.lTL.INVALID_COMMAND
    }, 'No application.');
  let o = Promise.resolve(!1);
  if (n === P.mFx.JOIN)
    o = c.Z.join({
      userId: i,
      sessionId: s,
      applicationId: l,
      channelId: a,
      messageId: r
    });
  return o.then(e => {
    if (!e)
      throw new Z.Z({
        errorCode: P.lTL.INVALID_INVITE
      }, 'Invite is expired or invalid.');
  });
}
  },
  [P.Etm.OPEN_INVITE_DIALOG]: {
scope: {
  [b.Gp.ANY]: [
    s.x.RPC,
    b.lH,
    b.wE
  ]
},
handler(e) {
  let {
    socket: t
  } = e, {
    channel: s,
    guild: a
  } = (0, R.T)(), l = m.Z.getWindow(P.KJ3.CHANNEL_CALL_POPOUT);
  (null == l ? void 0 : l.closed) && (l = null);
  let o = null != l ? P.IlC.POPOUT : P.IlC.APP;
  (0, A.Pr)({}, null == l ? void 0 : l.document), (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('7654'),
      n.e('21026')
    ]).then(n.bind(n, 560114));
    return n => (0, i.jsx)(e, {
      ...n,
      guild: a,
      channel: s,
      applicationId: t.application.id,
      analyticsLocation: P.Sbl.ACTIVITY_RPC,
      source: P.t4x.ACTIVITY_INVITE
    });
  }, {
    contextKey: o === P.IlC.POPOUT ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT
  });
}
  },
  [P.Etm.INITIATE_IMAGE_UPLOAD]: (0, a.S)(P.Etm.INITIATE_IMAGE_UPLOAD, {
scope: {
  [b.Gp.ANY]: [
    s.x.RPC,
    b.lH,
    b.wE
  ]
},
handler(e) {
  var t;
  let {
    socket: n
  } = e, i = n.application.id;
  if (null == i)
    throw new Z.Z({
      errorCode: P.lTL.INVALID_COMMAND
    }, 'No application.');
  let s = null === (t = (0, O.Z)()) || void 0 === t ? void 0 : t.id;
  if (null == s)
    throw new Z.Z({
      errorCode: P.lTL.UNKNOWN_ERROR
    }, 'Unable to find selected channel');
  return new Promise((e, t) => {
    ! function(e, t) {
      var n;
      let i = S.Z.getLastFocusedWindowId(),
        s = null == i ? null : null === (n = (0, _.g0)(i)) || void 0 === n ? void 0 : n.renderWindow;
      if (null == s)
        throw new Z.Z({
          errorCode: P.lTL.UNKNOWN_ERROR
        }, 'No valid window found');
      let a = s.document.createElement('input');
      a.style.display = 'none', a.type = 'file', a.accept = 'image/jpeg, image/jpg, image/png, image/gif';
      let r = () => {
        (null == a.files || 0 === a.files.length) && t(), s.document.body.removeEventListener('focus', r, !0), setTimeout(() => {
          s.document.body.removeChild(a);
        }, 1000);
      };
      a.addEventListener('change', () => {
        (0, f.lm)(a.files) && e(a.files[0]), r();
      }), a.addEventListener('cancel', () => {
        r();
      }), s.document.body.addEventListener('focus', r, !0), s.document.body.appendChild(a), a.click();
    }(async n => {
      let a = await (0, h.kv)(i, s, n);
      (0, f.lm)(a) && (0, f.lm)(a.url) && !(a instanceof u.Z) ? e({
        image_url: a.url
      }): t(a);
    }, () => t(Error('Upload canceled')));
  }).catch(e => {
    var t;
    throw new Z.Z({
      errorCode: P.lTL.UNKNOWN_ERROR
    }, null !== (t = null == e ? void 0 : e.message) && void 0 !== t ? t : 'Failed to upload image');
  });
}
  }),
  [P.Etm.OPEN_SHARE_MOMENT_DIALOG]: (0, a.S)(P.Etm.OPEN_SHARE_MOMENT_DIALOG, {
scope: {
  [b.Gp.ANY]: [b.wE]
},
handler(e) {
  var t;
  let {
    socket: n,
    args: {
      mediaUrl: i
    }
  } = e;
  (0, L.bu)(n.transport);
  let s = n.application.id;
  if (null == s)
    throw new Z.Z({
      errorCode: P.lTL.INVALID_COMMAND
    }, 'No application.');
  if (!(0, C.yE)(null !== (t = n.application.flags) && void 0 !== t ? t : 0, P.udG.EMBEDDED))
    throw new Z.Z({
      errorCode: P.lTL.INVALID_COMMAND
    }, 'This application cannot access this API');
  let a = (0, O.Z)();
  if (null == a)
    throw new Z.Z({
      errorCode: P.lTL.INVALID_COMMAND
    }, 'No channel found');
  if (!N.Z.isDiscordCdnUrl(i))
    throw new Z.Z({
      errorCode: P.lTL.INVALID_PAYLOAD
    }, 'mediaUrl must be a Discord CDN url');
  (0, I.Z)({
    applicationId: s,
    channelId: a.id,
    mediaUrl: i
  });
}
  })
};