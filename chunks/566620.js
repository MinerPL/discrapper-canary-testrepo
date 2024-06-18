"use strict";
n.d(t, {
  $h: function() {
    return b
  },
  J$: function() {
    return M
  },
  W5: function() {
    return Z
  },
  gC: function() {
    return F
  },
  kv: function() {
    return G
  },
  mW: function() {
    return y
  },
  oy: function() {
    return P
  },
  pu: function() {
    return x
  },
  rp: function() {
    return U
  },
  sN: function() {
    return B
  },
  tg: function() {
    return H
  },
  ux: function() {
    return V
  },
  w1: function() {
    return k
  }
}), n(47120);
var i = n(990547),
  r = n(544891),
  s = n(570140),
  o = n(493683),
  a = n(475179),
  l = n(447543),
  u = n(904245),
  _ = n(479531),
  d = n(812236),
  c = n(812206),
  E = n(358221),
  I = n(188597),
  T = n(973616),
  h = n(314897),
  S = n(592125),
  f = n(944486),
  N = n(594174),
  A = n(823379),
  m = n(573261),
  O = n(867176),
  R = n(317381),
  C = n(844797),
  p = n(672181),
  g = n(917107),
  L = n(981631),
  v = n(674563),
  D = n(245335);

function M(e, t, n) {
  let i = h.default.getId(),
    r = R.ZP.getSelfEmbeddedActivityForChannel(e),
    o = R.ZP.getEmbeddedActivitiesForChannel(e).find(e => e.applicationId === t && e.userIds.has(i));
  null != r ? y({
    channelId: e,
    applicationId: r.applicationId,
    showFeedback: !1
  }) : null != o && U(e, t, !0), s.Z.dispatch({
    type: "EMBEDDED_ACTIVITY_OPEN",
    channelId: e,
    applicationId: t,
    analyticsLocations: n
  }), (0, g.Z)(e) ? (a.Z.selectParticipant(e, t), a.Z.updateLayout(e, L.AEg.NO_CHAT)) : (0, p.Z)(e)
}
async function P(e) {
  var t, n;
  let r = S.Z.getChannel(e),
    o = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : void 0;
  if (null == o && !(null !== (n = null == r ? void 0 : r.isPrivate()) && void 0 !== n && n)) return;
  let a = R.ZP.getSelfEmbeddedActivityForChannel(e);
  if (null === a) return;
  let l = h.default.getSessionId();
  try {
    s.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_START",
      embeddedActivity: a
    });
    let t = R.ZP.getEmbeddedActivitiesForChannel(e).some(e => e.applicationId === a.applicationId),
      n = v.Yq.includes(a.applicationId),
      u = (null == r ? void 0 : r.isPrivate()) && (0, O.WS)(r, !t, "EmbeddedActivitiesActionCreators#launchEmbeddedActivity");
    if (!t && ((0, C.TX)(e, a.applicationId, f.Z, S.Z) || n || u)) {
      let t;
      try {
        n && (t = await (0, d.ZP)(e, a.applicationId))
      } catch (e) {
        if (e.message !== d.sV) throw e
      }
      await (0, I.qn)({
        applicationId: a.applicationId,
        channelId: e,
        guildId: o,
        command: t
      })
    } else await m.Z.post({
      url: L.ANM.ACTIVITY_CHANNEL_LAUNCH(e, a.applicationId),
      body: {
        session_id: l,
        guild_id: null != o ? o : void 0
      },
      trackedActionData: {
        event: i.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
        properties: {
          guild_id: o,
          channel_id: e,
          application_id: a.applicationId,
          session_id: l
        }
      },
      retries: 3,
      oldFormErrors: !0
    });
    s.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS",
      applicationId: a.applicationId
    })
  } catch (t) {
    s.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
      guildId: o,
      applicationId: a.applicationId,
      error: new _.Z(t)
    }), y({
      channelId: e,
      applicationId: a.applicationId,
      showFeedback: !1
    })
  }
}

function y(e) {
  var t, n;
  let {
    channelId: i,
    applicationId: r,
    showFeedback: o = !0
  } = e, l = R.ZP.getSelfEmbeddedActivityForChannel(i);
  s.Z.dispatch({
    type: "EMBEDDED_ACTIVITY_CLOSE",
    channelId: i,
    applicationId: r,
    locationId: null == l ? void 0 : null === (t = l.location) || void 0 === t ? void 0 : t.id,
    instanceId: null == l ? void 0 : l.launchId,
    showFeedback: o
  });
  let u = E.Z.getSelectedParticipantId(i),
    _ = null === (n = N.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
  if (null != R.ZP.getEmbeddedActivitiesForChannel(i).find(e => e.applicationId === r) && null != _ && "" !== _) u === r && a.Z.selectParticipant(i, null)
}

function U(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  s.Z.dispatch({
    type: "EMBEDDED_ACTIVITY_DISCONNECT",
    channelId: e,
    applicationId: t,
    isRejoiningFromCurrentSession: n
  })
}
async function b() {
  try {
    s.Z.dispatch({
      type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START"
    });
    let e = await r.tn.get({
        url: L.ANM.APPLICATIONS_WITH_ASSETS,
        query: {
          with_team_applications: !0
        },
        oldFormErrors: !0
      }),
      t = e.body.applications.map(e => T.Z.createFromServer(e));
    s.Z.dispatch({
      type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS",
      applications: t,
      assets: e.body.assets
    })
  } catch (e) {
    s.Z.dispatch({
      type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL"
    })
  }
}
async function G(e, t, n) {
  try {
    s.Z.dispatch({
      type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START"
    });
    let i = await r.tn.post({
      url: L.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
      query: {
        channel_id: t
      },
      attachments: [{
        name: "file",
        file: n
      }]
    });
    return s.Z.dispatch({
      type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS",
      attachment: i.body.attachment
    }), i.body.attachment
  } catch (e) {
    return s.Z.dispatch({
      type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL"
    }), new _.Z(e)
  }
}
let w = (e, t, n) => {
  let {
    guildId: i
  } = n;
  (i === e || null == i && null == e) && t()
};
async function k(e) {
  var t, n, r, o;
  let {
    guildId: a,
    force: l = !1
  } = e, u = R.ZP.getShelfActivities(a), _ = u.map(e => c.Z.getApplication(e.application_id)).filter(A.lm);
  if (!l && !R.ZP.shouldFetchShelf(a)) {
    if (null === (t = R.ZP.getShelfFetchStatus(a)) || void 0 === t ? void 0 : t.isFetching) {
      let e, t;
      let n = new Promise(t => {
          e = w.bind(null, a, t), s.Z.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e)
        }),
        i = new Promise(e => {
          t = w.bind(null, a, e), s.Z.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t)
        });
      await Promise.race([n, i]), null != e && (s.Z.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e), e = null), null != t && (s.Z.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t), t = null)
    }
    return {
      activityConfigs: u,
      applications: _
    }
  }
  try {
    s.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_FETCH_SHELF",
      guildId: a
    });
    let e = void 0 !== a && "" !== a ? {
        guild_id: a
      } : void 0,
      t = await m.Z.get({
        url: L.ANM.ACTIVITY_SHELF,
        query: e,
        trackedActionData: {
          event: i.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
          properties: {
            guild_id: a
          }
        },
        retries: 3,
        oldFormErrors: !0
      }),
      l = null !== (n = t.body.activities) && void 0 !== n ? n : [],
      u = null !== (r = t.body.applications) && void 0 !== r ? r : [],
      _ = null !== (o = t.body.assets) && void 0 !== o ? o : {};
    return s.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
      guildId: a,
      activities: l,
      applications: u,
      assets: _
    }), u.length > 0 && s.Z.dispatch({
      type: "APPLICATIONS_FETCH_SUCCESS",
      applications: u
    }), {
      activityConfigs: l,
      applications: u.map(e => T.Z.createFromServer(e))
    }
  } catch (e) {
    return s.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL",
      guildId: a
    }), {
      activityConfigs: u,
      applications: _
    }
  }
}
async function B(e) {
  let {
    activityChannelId: t,
    invitedChannelId: n,
    applicationId: i,
    location: r
  } = e, s = await l.Z.createInvite(t, {
    target_type: D.Iq.EMBEDDED_APPLICATION,
    target_application_id: i
  }, r);
  null != S.Z.getChannel(n) && u.Z.sendInvite(n, s.code, r, null)
}
async function x(e) {
  let {
    channelId: t,
    applicationId: n,
    userId: i,
    location: r
  } = e, s = await l.Z.createInvite(t, {
    target_type: D.Iq.EMBEDDED_APPLICATION,
    target_application_id: n
  }, r);
  o.Z.ensurePrivateChannel(i).then(e => {
    null != S.Z.getChannel(e) && u.Z.sendInvite(e, s.code, r, null)
  })
}

function V() {
  s.Z.dispatch({
    type: "EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR"
  })
}
async function Z(e) {
  let t = L.ANM.ACTIVITY_TEST_MODE(e);
  try {
    return await r.tn.get({
      url: t,
      oldFormErrors: !0
    }), !0
  } catch (e) {
    return !1
  }
}

function H(e) {
  s.Z.dispatch({
    type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE",
    activityPanelMode: e
  })
}

function F(e) {
  s.Z.dispatch({
    type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT",
    focusedActivityLayout: e
  })
}