n.d(t, {
  $h: function() {
return w;
  },
  J$: function() {
return b;
  },
  W5: function() {
return H;
  },
  gC: function() {
return Y;
  },
  kv: function() {
return x;
  },
  mW: function() {
return P;
  },
  oy: function() {
return M;
  },
  pu: function() {
return F;
  },
  rp: function() {
return U;
  },
  sN: function() {
return B;
  },
  tg: function() {
return Z;
  },
  ux: function() {
return V;
  },
  w1: function() {
return k;
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
  d = n(812236),
  _ = n(812206),
  E = n(358221),
  f = n(233764),
  h = n(188597),
  p = n(973616),
  m = n(314897),
  I = n(592125),
  T = n(594174),
  g = n(630388),
  S = n(823379),
  A = n(573261),
  N = n(595519),
  v = n(317381),
  O = n(363522),
  R = n(672181),
  C = n(917107),
  y = n(981631),
  D = n(674563),
  L = n(245335);

function b(e, t, n) {
  let r = m.default.getId(),
i = v.ZP.getSelfEmbeddedActivityForChannel(e),
s = v.ZP.getEmbeddedActivitiesForChannel(e).find(e => e.applicationId === t && e.userIds.has(r));
  null != i ? P({
channelId: e,
applicationId: i.applicationId,
showFeedback: !1
  }) : null != s && U(e, t, !0), a.Z.dispatch({
type: 'EMBEDDED_ACTIVITY_OPEN',
channelId: e,
applicationId: t,
analyticsLocations: n
  }), (0, C.Z)(e) ? (o.Z.selectParticipant(e, t), o.Z.updateLayout(e, y.AEg.NO_CHAT)) : (0, R.Z)(e);
}
async function M(e) {
  var t, n;
  let i = I.Z.getChannel(e),
s = null !== (t = null == i ? void 0 : i.getGuildId()) && void 0 !== t ? t : void 0;
  if (null == s && !(null !== (n = null == i ? void 0 : i.isPrivate()) && void 0 !== n && n))
return;
  let o = v.ZP.getSelfEmbeddedActivityForChannel(e);
  if (null === o)
return;
  let l = m.default.getSessionId();
  try {
a.Z.dispatch({
  type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
  embeddedActivity: o
});
let t = !v.ZP.getEmbeddedActivitiesForChannel(e).some(e => e.applicationId === o.applicationId),
  n = !0;
if (t) {
  let t = async t => {
    let {
      canSendFakeCommand: n
    } = t, r = null;
    try {
      r = await (0, d.ZP)(e, o.applicationId);
    } catch (e) {
      if (e.message !== d.sV)
        throw e;
    }
    return null != r ? (await (0, h.qn)({
      applicationId: o.applicationId,
      channelId: e,
      guildId: s,
      command: r
    }), !0) : null == r && !!n && (await (0, h.XV)({
      applicationId: o.applicationId,
      channelId: e,
      guildId: s
    }), !0);
  }, r = D.Yq.includes(o.applicationId), a = (null == i ? void 0 : i.type) === y.d4z.GUILD_VOICE, l = _.Z.getApplication(o.applicationId), u = null != l && (0, g.yE)(l.flags, y.udG.EMBEDDED), c = null != l && (0, g.yE)(l.flags, y.udG.EMBEDDED_RELEASED), E = (0, N.l5)(i);
  if (r) {
    if (n = !1, !await t({
        canSendFakeCommand: !1
      }))
      throw Error();
  } else if (a) {
    if (u && !c)
      n = !await t({
        canSendFakeCommand: !1
      });
    else if (u && c) {
      O.j.trackExposure({
        location: 'EmbeddedActivitiesActionCreators.launchEmbeddedActivity'
      });
      let {
        enabled: e
      } = O.j.getCurrentConfig({
        location: 'EmbeddedActivitiesActionCreators.launchEmbeddedActivity'
      });
      if (e) {
        if (!await t({
            canSendFakeCommand: !1
          }))
          throw new f.Z(f.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        n = !1;
      } else
        n = !0;
    }
  } else if (E) {
    let e = await t({
      canSendFakeCommand: u && c
    });
    if (n = !e, u && !e)
      throw new f.Z(f.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
  }
}
(!t || n) && await A.Z.post({
  url: y.ANM.ACTIVITY_CHANNEL_LAUNCH(e, o.applicationId),
  body: {
    session_id: l,
    guild_id: null != s ? s : void 0
  },
  trackedActionData: {
    event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
    properties: {
      guild_id: s,
      channel_id: e,
      application_id: o.applicationId,
      session_id: l
    }
  },
  retries: 3,
  oldFormErrors: !0
}), a.Z.dispatch({
  type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
  applicationId: o.applicationId
});
  } catch (t) {
a.Z.dispatch({
  type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
  guildId: s,
  applicationId: o.applicationId,
  error: t instanceof f.Z ? t : new c.Z(t)
}), P({
  channelId: e,
  applicationId: o.applicationId,
  showFeedback: !1
});
  }
}

function P(e) {
  var t, n;
  let {
channelId: r,
applicationId: i,
showFeedback: s = !0
  } = e, l = v.ZP.getSelfEmbeddedActivityForChannel(r);
  a.Z.dispatch({
type: 'EMBEDDED_ACTIVITY_CLOSE',
channelId: r,
applicationId: i,
locationId: null == l ? void 0 : null === (t = l.location) || void 0 === t ? void 0 : t.id,
instanceId: null == l ? void 0 : l.launchId,
showFeedback: s
  });
  let u = E.Z.getSelectedParticipantId(r),
c = null === (n = T.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
  if (null != v.ZP.getEmbeddedActivitiesForChannel(r).find(e => e.applicationId === i) && null != c && '' !== c)
u === i && o.Z.selectParticipant(r, null);
}

function U(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  a.Z.dispatch({
type: 'EMBEDDED_ACTIVITY_DISCONNECT',
channelId: e,
applicationId: t,
isRejoiningFromCurrentSession: n
  });
}
async function w() {
  try {
a.Z.dispatch({
  type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START'
});
let e = await i.tn.get({
    url: y.ANM.APPLICATIONS_WITH_ASSETS,
    query: {
      with_team_applications: !0
    },
    oldFormErrors: !0
  }),
  t = e.body.applications.map(e => p.Z.createFromServer(e));
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
async function x(e, t, n) {
  try {
a.Z.dispatch({
  type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START'
});
let r = await i.tn.post({
  url: y.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
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
let G = (e, t, n) => {
  let {
guildId: r
  } = n;
  (r === e || null == r && null == e) && t();
};
async function k(e) {
  var t, n, i, s;
  let {
guildId: o,
force: l = !1
  } = e, u = v.ZP.getShelfActivities(o), c = u.map(e => _.Z.getApplication(e.application_id)).filter(S.lm);
  if (!l && !v.ZP.shouldFetchShelf(o)) {
if (null === (t = v.ZP.getShelfFetchStatus(o)) || void 0 === t ? void 0 : t.isFetching) {
  let e, t;
  let n = new Promise(t => {
      e = G.bind(null, o, t), a.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e);
    }),
    r = new Promise(e => {
      t = G.bind(null, o, e), a.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t);
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
  t = await A.Z.get({
    url: y.ANM.ACTIVITY_SHELF,
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
  applications: u.map(e => p.Z.createFromServer(e))
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
async function B(e) {
  let {
activityChannelId: t,
invitedChannelId: n,
applicationId: r,
location: i
  } = e, a = await l.Z.createInvite(t, {
target_type: L.Iq.EMBEDDED_APPLICATION,
target_application_id: r
  }, i);
  null != I.Z.getChannel(n) && u.Z.sendInvite(n, a.code, i, null);
}
async function F(e) {
  let {
channelId: t,
applicationId: n,
userId: r,
location: i
  } = e, a = await l.Z.createInvite(t, {
target_type: L.Iq.EMBEDDED_APPLICATION,
target_application_id: n
  }, i);
  s.Z.ensurePrivateChannel(r).then(e => {
null != I.Z.getChannel(e) && u.Z.sendInvite(e, a.code, i, null);
  });
}

function V() {
  a.Z.dispatch({
type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR'
  });
}
async function H(e) {
  let t = y.ANM.ACTIVITY_TEST_MODE(e);
  try {
return await i.tn.get({
  url: t,
  oldFormErrors: !0
}), !0;
  } catch (e) {
return !1;
  }
}

function Z(e) {
  a.Z.dispatch({
type: 'EMBEDDED_ACTIVITY_SET_PANEL_MODE',
activityPanelMode: e
  });
}

function Y(e) {
  a.Z.dispatch({
type: 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT',
focusedActivityLayout: e
  });
}