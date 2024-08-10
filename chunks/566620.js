n.d(t, {
  $h: function() {
return k;
  },
  J$: function() {
return U;
  },
  W5: function() {
return j;
  },
  gC: function() {
return K;
  },
  kv: function() {
return B;
  },
  mW: function() {
return x;
  },
  oy: function() {
return w;
  },
  pu: function() {
return Z;
  },
  rp: function() {
return G;
  },
  sN: function() {
return H;
  },
  tg: function() {
return W;
  },
  ux: function() {
return Y;
  },
  w1: function() {
return V;
  }
}), n(789020), n(411104), n(47120);
var r = n(990547),
  i = n(544891),
  a = n(570140),
  s = n(493683),
  o = n(475179),
  l = n(447543),
  u = n(904245),
  c = n(479531),
  d = n(911969),
  _ = n(845936),
  E = n(213459),
  f = n(812236),
  h = n(812206),
  p = n(358221),
  m = n(233764),
  I = n(188597),
  T = n(973616),
  g = n(314897),
  S = n(592125),
  A = n(594174),
  N = n(630388),
  v = n(823379),
  O = n(573261),
  R = n(595519),
  C = n(317381),
  y = n(363522),
  D = n(672181),
  L = n(917107),
  b = n(981631),
  M = n(674563),
  P = n(245335);

function U(e, t, n) {
  let r = g.default.getId(),
i = C.ZP.getSelfEmbeddedActivityForChannel(e),
s = C.ZP.getEmbeddedActivitiesForChannel(e).find(e => e.applicationId === t && e.userIds.has(r));
  null != i ? x({
channelId: e,
applicationId: i.applicationId,
showFeedback: !1
  }) : null != s && G(e, t, !0), a.Z.dispatch({
type: 'EMBEDDED_ACTIVITY_OPEN',
channelId: e,
applicationId: t,
analyticsLocations: n
  }), (0, L.Z)(e) ? (o.Z.selectParticipant(e, t), o.Z.updateLayout(e, b.AEg.NO_CHAT)) : (0, D.Z)(e);
}
async function w(e) {
  var t, n;
  let {
channelId: i
  } = e, s = S.Z.getChannel(i), o = null !== (t = null == s ? void 0 : s.getGuildId()) && void 0 !== t ? t : void 0;
  if (null == o && !(null !== (n = null == s ? void 0 : s.isPrivate()) && void 0 !== n && n))
return;
  let l = C.ZP.getSelfEmbeddedActivityForChannel(i);
  if (null === l)
return;
  let u = g.default.getSessionId();
  try {
a.Z.dispatch({
  type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
  embeddedActivity: l
});
let e = !C.ZP.getEmbeddedActivitiesForChannel(i).some(e => e.applicationId === l.applicationId),
  t = !0;
if (e) {
  let e = async e => {
    let {
      canSendFakeCommand: t
    } = e, n = null;
    try {
      n = await (0, f.ZP)(i, l.applicationId);
    } catch (e) {
      if (e.message !== f.sV)
        throw e;
    }
    if (null != n) {
      if (n.handler === d.VC.APP_HANDLER) {
        let e = E.ZP.getGuildState(o),
          t = E.ZP.getUserState();
        if (!await (0, _.L)({
            applicationId: l.applicationId,
            userIndexState: t,
            guildIndexState: e
          }))
          return !1;
      }
      return await (0, I.qn)({
        applicationId: l.applicationId,
        channelId: i,
        guildId: o,
        command: n
      }), !0;
    }
    return null == n && !!t && (await (0, I.XV)({
      applicationId: l.applicationId,
      channelId: i,
      guildId: o
    }), !0);
  }, n = M.Yq.includes(l.applicationId), r = (null == s ? void 0 : s.type) === b.d4z.GUILD_VOICE, a = h.Z.getApplication(l.applicationId), u = null != a && (0, N.yE)(a.flags, b.udG.EMBEDDED), c = null != a && (0, N.yE)(a.flags, b.udG.EMBEDDED_RELEASED), p = (0, R.l5)(s);
  if (n) {
    if (t = !1, !await e({
        canSendFakeCommand: !1
      }))
      throw Error();
  } else if (r) {
    if (u && !c)
      t = !await e({
        canSendFakeCommand: !1
      });
    else if (u && c) {
      y.j.trackExposure({
        location: 'EmbeddedActivitiesActionCreators.launchEmbeddedActivity'
      });
      let {
        enabled: n
      } = y.j.getCurrentConfig({
        location: 'EmbeddedActivitiesActionCreators.launchEmbeddedActivity'
      });
      if (n) {
        if (!await e({
            canSendFakeCommand: !1
          }))
          throw new m.Z(m.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        t = !1;
      } else
        t = !0;
    }
  } else if (p) {
    let n = await e({
      canSendFakeCommand: u && c
    });
    if (t = !n, u && !n)
      throw new m.Z(m.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
  }
}
(!e || t) && await O.Z.post({
  url: b.ANM.ACTIVITY_CHANNEL_LAUNCH(i, l.applicationId),
  body: {
    session_id: u,
    guild_id: null != o ? o : void 0
  },
  trackedActionData: {
    event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
    properties: {
      guild_id: o,
      channel_id: i,
      application_id: l.applicationId,
      session_id: u
    }
  },
  retries: 3,
  oldFormErrors: !0
}), a.Z.dispatch({
  type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
  applicationId: l.applicationId
});
  } catch (e) {
a.Z.dispatch({
  type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
  guildId: o,
  applicationId: l.applicationId,
  error: e instanceof m.Z ? e : new c.Z(e)
}), x({
  channelId: i,
  applicationId: l.applicationId,
  showFeedback: !1
});
  }
}

function x(e) {
  var t, n;
  let {
channelId: r,
applicationId: i,
showFeedback: s = !0
  } = e, l = C.ZP.getSelfEmbeddedActivityForChannel(r);
  a.Z.dispatch({
type: 'EMBEDDED_ACTIVITY_CLOSE',
channelId: r,
applicationId: i,
locationId: null == l ? void 0 : null === (t = l.location) || void 0 === t ? void 0 : t.id,
instanceId: null == l ? void 0 : l.launchId,
showFeedback: s
  });
  let u = p.Z.getSelectedParticipantId(r),
c = null === (n = A.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
  if (null != C.ZP.getEmbeddedActivitiesForChannel(r).find(e => e.applicationId === i) && null != c && '' !== c)
u === i && o.Z.selectParticipant(r, null);
}

function G(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  a.Z.dispatch({
type: 'EMBEDDED_ACTIVITY_DISCONNECT',
channelId: e,
applicationId: t,
isRejoiningFromCurrentSession: n
  });
}
async function k() {
  try {
a.Z.dispatch({
  type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START'
});
let e = await i.tn.get({
    url: b.ANM.APPLICATIONS_WITH_ASSETS,
    query: {
      with_team_applications: !0
    },
    oldFormErrors: !0
  }),
  t = e.body.applications.map(e => T.Z.createFromServer(e));
a.Z.dispatch({
  type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS',
  applications: t,
  assets: e.body.assets
});
  } catch (e) {
a.Z.dispatch({
  type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL'
});
  }
}
async function B(e, t, n) {
  try {
a.Z.dispatch({
  type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START'
});
let r = await i.tn.post({
  url: b.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
  query: {
    channel_id: t
  },
  attachments: [{
    name: 'file',
    file: n
  }]
});
return a.Z.dispatch({
  type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS',
  attachment: r.body.attachment
}), r.body.attachment;
  } catch (e) {
return a.Z.dispatch({
  type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL'
}), new c.Z(e);
  }
}
let F = (e, t, n) => {
  let {
guildId: r
  } = n;
  (r === e || null == r && null == e) && t();
};
async function V(e) {
  var t, n, i, s;
  let {
guildId: o,
force: l = !1
  } = e, u = C.ZP.getShelfActivities(o), c = u.map(e => h.Z.getApplication(e.application_id)).filter(v.lm);
  if (!l && !C.ZP.shouldFetchShelf(o)) {
if (null === (t = C.ZP.getShelfFetchStatus(o)) || void 0 === t ? void 0 : t.isFetching) {
  let e, t;
  let n = new Promise(t => {
      e = F.bind(null, o, t), a.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e);
    }),
    r = new Promise(e => {
      t = F.bind(null, o, e), a.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t);
    });
  await Promise.race([
    n,
    r
  ]), null != e && (a.Z.unsubscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e), e = null), null != t && (a.Z.unsubscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t), t = null);
}
return {
  activityConfigs: u,
  applications: c
};
  }
  try {
a.Z.dispatch({
  type: 'EMBEDDED_ACTIVITY_FETCH_SHELF',
  guildId: o
});
let e = void 0 !== o && '' !== o ? {
    guild_id: o
  } : void 0,
  t = await O.Z.get({
    url: b.ANM.ACTIVITY_SHELF,
    query: e,
    trackedActionData: {
      event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
      properties: {
        guild_id: o
      }
    },
    retries: 3,
    oldFormErrors: !0
  }),
  l = null !== (n = t.body.activities) && void 0 !== n ? n : [],
  u = null !== (i = t.body.applications) && void 0 !== i ? i : [],
  c = null !== (s = t.body.assets) && void 0 !== s ? s : {};
return a.Z.dispatch({
  type: 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS',
  guildId: o,
  activities: l,
  applications: u,
  assets: c
}), u.length > 0 && a.Z.dispatch({
  type: 'APPLICATIONS_FETCH_SUCCESS',
  applications: u
}), {
  activityConfigs: l,
  applications: u.map(e => T.Z.createFromServer(e))
};
  } catch (e) {
return a.Z.dispatch({
  type: 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL',
  guildId: o
}), {
  activityConfigs: u,
  applications: c
};
  }
}
async function H(e) {
  let {
activityChannelId: t,
invitedChannelId: n,
applicationId: r,
location: i
  } = e, a = await l.Z.createInvite(t, {
target_type: P.Iq.EMBEDDED_APPLICATION,
target_application_id: r
  }, i);
  null != S.Z.getChannel(n) && u.Z.sendInvite(n, a.code, i, null);
}
async function Z(e) {
  let {
channelId: t,
applicationId: n,
userId: r,
location: i
  } = e, a = await l.Z.createInvite(t, {
target_type: P.Iq.EMBEDDED_APPLICATION,
target_application_id: n
  }, i);
  s.Z.ensurePrivateChannel(r).then(e => {
null != S.Z.getChannel(e) && u.Z.sendInvite(e, a.code, i, null);
  });
}

function Y() {
  a.Z.dispatch({
type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR'
  });
}
async function j(e) {
  let t = b.ANM.ACTIVITY_TEST_MODE(e);
  try {
return await i.tn.get({
  url: t,
  oldFormErrors: !0
}), !0;
  } catch (e) {
return !1;
  }
}

function W(e) {
  a.Z.dispatch({
type: 'EMBEDDED_ACTIVITY_SET_PANEL_MODE',
activityPanelMode: e
  });
}

function K(e) {
  a.Z.dispatch({
type: 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT',
focusedActivityLayout: e
  });
}