n.d(t, {
  $h: function() {
return U;
  },
  J$: function() {
return L;
  },
  W5: function() {
return V;
  },
  gC: function() {
return Z;
  },
  kv: function() {
return w;
  },
  mW: function() {
return M;
  },
  oy: function() {
return b;
  },
  pu: function() {
return B;
  },
  rp: function() {
return P;
  },
  sN: function() {
return k;
  },
  tg: function() {
return H;
  },
  ux: function() {
return F;
  },
  w1: function() {
return G;
  }
}), n(47120);
var r = n(990547),
  i = n(544891),
  a = n(570140),
  o = n(493683),
  s = n(475179),
  l = n(447543),
  u = n(904245),
  c = n(479531),
  d = n(812236),
  _ = n(812206),
  E = n(358221),
  f = n(188597),
  h = n(973616),
  p = n(314897),
  m = n(592125),
  I = n(944486),
  T = n(594174),
  g = n(823379),
  S = n(573261),
  A = n(595519),
  N = n(317381),
  v = n(844797),
  O = n(672181),
  R = n(917107),
  C = n(981631),
  y = n(674563),
  D = n(245335);

function L(e, t, n) {
  let r = p.default.getId(),
i = N.ZP.getSelfEmbeddedActivityForChannel(e),
o = N.ZP.getEmbeddedActivitiesForChannel(e).find(e => e.applicationId === t && e.userIds.has(r));
  null != i ? M({
channelId: e,
applicationId: i.applicationId,
showFeedback: !1
  }) : null != o && P(e, t, !0), a.Z.dispatch({
type: 'EMBEDDED_ACTIVITY_OPEN',
channelId: e,
applicationId: t,
analyticsLocations: n
  }), (0, R.Z)(e) ? (s.Z.selectParticipant(e, t), s.Z.updateLayout(e, C.AEg.NO_CHAT)) : (0, O.Z)(e);
}
async function b(e) {
  var t, n;
  let i = m.Z.getChannel(e),
o = null !== (t = null == i ? void 0 : i.getGuildId()) && void 0 !== t ? t : void 0;
  if (null == o && !(null !== (n = null == i ? void 0 : i.isPrivate()) && void 0 !== n && n))
return;
  let s = N.ZP.getSelfEmbeddedActivityForChannel(e);
  if (null === s)
return;
  let l = p.default.getSessionId();
  try {
a.Z.dispatch({
  type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
  embeddedActivity: s
});
let t = N.ZP.getEmbeddedActivitiesForChannel(e).some(e => e.applicationId === s.applicationId),
  n = y.Yq.includes(s.applicationId),
  u = (null == i ? void 0 : i.isPrivate()) && (0, A.WS)(i, !t);
if (!t && ((0, v.TX)(e, s.applicationId, I.Z, m.Z) || n || u)) {
  let t;
  try {
    n && (t = await (0, d.ZP)(e, s.applicationId));
  } catch (e) {
    if (e.message !== d.sV)
      throw e;
  }
  await (0, f.qn)({
    applicationId: s.applicationId,
    channelId: e,
    guildId: o,
    command: t
  });
} else
  await S.Z.post({
    url: C.ANM.ACTIVITY_CHANNEL_LAUNCH(e, s.applicationId),
    body: {
      session_id: l,
      guild_id: null != o ? o : void 0
    },
    trackedActionData: {
      event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
      properties: {
        guild_id: o,
        channel_id: e,
        application_id: s.applicationId,
        session_id: l
      }
    },
    retries: 3,
    oldFormErrors: !0
  });
a.Z.dispatch({
  type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
  applicationId: s.applicationId
});
  } catch (t) {
a.Z.dispatch({
  type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
  guildId: o,
  applicationId: s.applicationId,
  error: new c.Z(t)
}), M({
  channelId: e,
  applicationId: s.applicationId,
  showFeedback: !1
});
  }
}

function M(e) {
  var t, n;
  let {
channelId: r,
applicationId: i,
showFeedback: o = !0
  } = e, l = N.ZP.getSelfEmbeddedActivityForChannel(r);
  a.Z.dispatch({
type: 'EMBEDDED_ACTIVITY_CLOSE',
channelId: r,
applicationId: i,
locationId: null == l ? void 0 : null === (t = l.location) || void 0 === t ? void 0 : t.id,
instanceId: null == l ? void 0 : l.launchId,
showFeedback: o
  });
  let u = E.Z.getSelectedParticipantId(r),
c = null === (n = T.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
  if (null != N.ZP.getEmbeddedActivitiesForChannel(r).find(e => e.applicationId === i) && null != c && '' !== c)
u === i && s.Z.selectParticipant(r, null);
}

function P(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  a.Z.dispatch({
type: 'EMBEDDED_ACTIVITY_DISCONNECT',
channelId: e,
applicationId: t,
isRejoiningFromCurrentSession: n
  });
}
async function U() {
  try {
a.Z.dispatch({
  type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START'
});
let e = await i.tn.get({
    url: C.ANM.APPLICATIONS_WITH_ASSETS,
    query: {
      with_team_applications: !0
    },
    oldFormErrors: !0
  }),
  t = e.body.applications.map(e => h.Z.createFromServer(e));
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
async function w(e, t, n) {
  try {
a.Z.dispatch({
  type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START'
});
let r = await i.tn.post({
  url: C.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
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
let x = (e, t, n) => {
  let {
guildId: r
  } = n;
  (r === e || null == r && null == e) && t();
};
async function G(e) {
  var t, n, i, o;
  let {
guildId: s,
force: l = !1
  } = e, u = N.ZP.getShelfActivities(s), c = u.map(e => _.Z.getApplication(e.application_id)).filter(g.lm);
  if (!l && !N.ZP.shouldFetchShelf(s)) {
if (null === (t = N.ZP.getShelfFetchStatus(s)) || void 0 === t ? void 0 : t.isFetching) {
  let e, t;
  let n = new Promise(t => {
      e = x.bind(null, s, t), a.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e);
    }),
    r = new Promise(e => {
      t = x.bind(null, s, e), a.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t);
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
  guildId: s
});
let e = void 0 !== s && '' !== s ? {
    guild_id: s
  } : void 0,
  t = await S.Z.get({
    url: C.ANM.ACTIVITY_SHELF,
    query: e,
    trackedActionData: {
      event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
      properties: {
        guild_id: s
      }
    },
    retries: 3,
    oldFormErrors: !0
  }),
  l = null !== (n = t.body.activities) && void 0 !== n ? n : [],
  u = null !== (i = t.body.applications) && void 0 !== i ? i : [],
  c = null !== (o = t.body.assets) && void 0 !== o ? o : {};
return a.Z.dispatch({
  type: 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS',
  guildId: s,
  activities: l,
  applications: u,
  assets: c
}), u.length > 0 && a.Z.dispatch({
  type: 'APPLICATIONS_FETCH_SUCCESS',
  applications: u
}), {
  activityConfigs: l,
  applications: u.map(e => h.Z.createFromServer(e))
};
  } catch (e) {
return a.Z.dispatch({
  type: 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL',
  guildId: s
}), {
  activityConfigs: u,
  applications: c
};
  }
}
async function k(e) {
  let {
activityChannelId: t,
invitedChannelId: n,
applicationId: r,
location: i
  } = e, a = await l.Z.createInvite(t, {
target_type: D.Iq.EMBEDDED_APPLICATION,
target_application_id: r
  }, i);
  null != m.Z.getChannel(n) && u.Z.sendInvite(n, a.code, i, null);
}
async function B(e) {
  let {
channelId: t,
applicationId: n,
userId: r,
location: i
  } = e, a = await l.Z.createInvite(t, {
target_type: D.Iq.EMBEDDED_APPLICATION,
target_application_id: n
  }, i);
  o.Z.ensurePrivateChannel(r).then(e => {
null != m.Z.getChannel(e) && u.Z.sendInvite(e, a.code, i, null);
  });
}

function F() {
  a.Z.dispatch({
type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR'
  });
}
async function V(e) {
  let t = C.ANM.ACTIVITY_TEST_MODE(e);
  try {
return await i.tn.get({
  url: t,
  oldFormErrors: !0
}), !0;
  } catch (e) {
return !1;
  }
}

function H(e) {
  a.Z.dispatch({
type: 'EMBEDDED_ACTIVITY_SET_PANEL_MODE',
activityPanelMode: e
  });
}

function Z(e) {
  a.Z.dispatch({
type: 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT',
focusedActivityLayout: e
  });
}