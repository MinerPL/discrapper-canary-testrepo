"use strict";
n.r(t), n.d(t, {
  disconnectEmbeddedActivity: function() {
    return U
  },
  dismissNewActivityIndicator: function() {
    return x
  },
  fetchDeveloperApplications: function() {
    return b
  },
  fetchShelf: function() {
    return k
  },
  launchEmbeddedActivity: function() {
    return y
  },
  sendEmbeddedActivityInvite: function() {
    return B
  },
  sendEmbeddedActivityInviteUser: function() {
    return V
  },
  startEmbeddedActivity: function() {
    return M
  },
  stopEmbeddedActivity: function() {
    return P
  },
  updateActivityPanelMode: function() {
    return H
  },
  updateFocusedActivityLayout: function() {
    return Y
  },
  uploadImageAttachment: function() {
    return G
  },
  validateTestMode: function() {
    return F
  }
}), n("47120");
var i = n("990547"),
  r = n("544891"),
  a = n("570140"),
  s = n("493683"),
  o = n("475179"),
  l = n("447543"),
  u = n("904245"),
  d = n("479531"),
  _ = n("812236"),
  c = n("812206"),
  E = n("358221"),
  I = n("188597"),
  T = n("973616"),
  f = n("314897"),
  S = n("592125"),
  h = n("944486"),
  A = n("594174"),
  m = n("823379"),
  N = n("573261"),
  p = n("867176"),
  O = n("317381"),
  C = n("844797"),
  R = n("672181"),
  g = n("917107"),
  L = n("981631"),
  v = n("674563"),
  D = n("245335");

function M(e, t, n) {
  let i = f.default.getId(),
    r = O.default.getSelfEmbeddedActivityForChannel(e),
    s = O.default.getEmbeddedActivitiesForChannel(e).find(e => e.applicationId === t && e.userIds.has(i));
  null != r ? P({
    channelId: e,
    applicationId: r.applicationId,
    showFeedback: !1
  }) : null != s && U(e, t, !0), a.default.dispatch({
    type: "EMBEDDED_ACTIVITY_OPEN",
    channelId: e,
    applicationId: t,
    analyticsLocations: n
  }), (0, g.default)(e) ? (o.default.selectParticipant(e, t), o.default.updateLayout(e, L.ChannelLayouts.NO_CHAT)) : (0, R.default)(e)
}
async function y(e) {
  var t, n;
  let r = S.default.getChannel(e),
    s = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : void 0;
  if (null == s && !(null !== (n = null == r ? void 0 : r.isPrivate()) && void 0 !== n && n)) return;
  let o = O.default.getSelfEmbeddedActivityForChannel(e);
  if (null === o) return;
  let l = f.default.getSessionId();
  try {
    a.default.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_START",
      embeddedActivity: o
    });
    let t = O.default.getEmbeddedActivitiesForChannel(e).some(e => e.applicationId === o.applicationId),
      n = v.INSTALL_LESS_APP_IDS.includes(o.applicationId),
      u = (null == r ? void 0 : r.isPrivate()) && (0, p.isActivitiesInTextEnabled)(r, !t, "EmbeddedActivitiesActionCreators#launchEmbeddedActivity");
    if (!t && ((0, C.isActivityInTextStart)(e, o.applicationId, h.default, S.default) || n || u)) {
      let t;
      try {
        n && (t = await (0, _.default)(e, o.applicationId))
      } catch (e) {
        if (e.message !== _.NO_PRIMARY_APP_COMMAND_ERROR) throw e
      }
      await (0, I.executePrimaryEntryPointInteraction)({
        applicationId: o.applicationId,
        channelId: e,
        guildId: s,
        command: t
      })
    } else await N.default.post({
      url: L.Endpoints.ACTIVITY_CHANNEL_LAUNCH(e, o.applicationId),
      body: {
        session_id: l,
        guild_id: null != s ? s : void 0
      },
      trackedActionData: {
        event: i.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
        properties: {
          guild_id: s,
          channel_id: e,
          application_id: o.applicationId,
          session_id: l
        }
      },
      retries: 3,
      oldFormErrors: !0
    });
    a.default.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS",
      applicationId: o.applicationId
    })
  } catch (t) {
    a.default.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
      guildId: s,
      applicationId: o.applicationId,
      error: new d.default(t)
    }), P({
      channelId: e,
      applicationId: o.applicationId,
      showFeedback: !1
    })
  }
}

function P(e) {
  var t, n;
  let {
    channelId: i,
    applicationId: r,
    showFeedback: s = !0
  } = e, l = O.default.getSelfEmbeddedActivityForChannel(i);
  a.default.dispatch({
    type: "EMBEDDED_ACTIVITY_CLOSE",
    channelId: i,
    applicationId: r,
    locationId: null == l ? void 0 : null === (t = l.location) || void 0 === t ? void 0 : t.id,
    instanceId: null == l ? void 0 : l.launchId,
    showFeedback: s
  });
  let u = E.default.getSelectedParticipantId(i),
    d = null === (n = A.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
  null != O.default.getEmbeddedActivitiesForChannel(i).find(e => e.applicationId === r) && null != d && "" !== d && u === r && o.default.selectParticipant(i, null)
}

function U(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  a.default.dispatch({
    type: "EMBEDDED_ACTIVITY_DISCONNECT",
    channelId: e,
    applicationId: t,
    isRejoiningFromCurrentSession: n
  })
}
async function b() {
  try {
    a.default.dispatch({
      type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START"
    });
    let e = await r.HTTP.get({
        url: L.Endpoints.APPLICATIONS_WITH_ASSETS,
        query: {
          with_team_applications: !0
        },
        oldFormErrors: !0
      }),
      t = e.body.applications.map(e => T.default.createFromServer(e));
    a.default.dispatch({
      type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS",
      applications: t,
      assets: e.body.assets
    })
  } catch (e) {
    a.default.dispatch({
      type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL"
    })
  }
}
async function G(e, t, n) {
  try {
    a.default.dispatch({
      type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START"
    });
    let i = await r.HTTP.post({
      url: L.Endpoints.APPLICATION_UPLOAD_ATTACHMENT(e),
      query: {
        channel_id: t
      },
      attachments: [{
        name: "file",
        file: n
      }]
    });
    return a.default.dispatch({
      type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS",
      attachment: i.body.attachment
    }), i.body.attachment
  } catch (e) {
    return a.default.dispatch({
      type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL"
    }), new d.default(e)
  }
}
let w = (e, t, n) => {
  let {
    guildId: i
  } = n;
  (i === e || null == i && null == e) && t()
};
async function k(e) {
  var t, n, r, s;
  let {
    guildId: o,
    force: l = !1
  } = e, u = O.default.getShelfActivities(o), d = u.map(e => c.default.getApplication(e.application_id)).filter(m.isNotNullish);
  if (!l && !O.default.shouldFetchShelf(o)) {
    if (null === (t = O.default.getShelfFetchStatus(o)) || void 0 === t ? void 0 : t.isFetching) {
      let e, t;
      let n = new Promise(t => {
          e = w.bind(null, o, t), a.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e)
        }),
        i = new Promise(e => {
          t = w.bind(null, o, e), a.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t)
        });
      await Promise.race([n, i]), null != e && (a.default.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e), e = null), null != t && (a.default.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t), t = null)
    }
    return {
      activityConfigs: u,
      applications: d
    }
  }
  try {
    a.default.dispatch({
      type: "EMBEDDED_ACTIVITY_FETCH_SHELF",
      guildId: o
    });
    let e = void 0 !== o && "" !== o ? {
        guild_id: o
      } : void 0,
      t = await N.default.get({
        url: L.Endpoints.ACTIVITY_SHELF,
        query: e,
        trackedActionData: {
          event: i.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
          properties: {
            guild_id: o
          }
        },
        retries: 3,
        oldFormErrors: !0
      }),
      l = null !== (n = t.body.activities) && void 0 !== n ? n : [],
      u = null !== (r = t.body.applications) && void 0 !== r ? r : [],
      d = null !== (s = t.body.assets) && void 0 !== s ? s : {};
    return a.default.dispatch({
      type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
      guildId: o,
      activities: l,
      applications: u,
      assets: d
    }), u.length > 0 && a.default.dispatch({
      type: "APPLICATIONS_FETCH_SUCCESS",
      applications: u
    }), {
      activityConfigs: l,
      applications: u.map(e => T.default.createFromServer(e))
    }
  } catch (e) {
    return a.default.dispatch({
      type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL",
      guildId: o
    }), {
      activityConfigs: u,
      applications: d
    }
  }
}
async function B(e) {
  let {
    activityChannelId: t,
    invitedChannelId: n,
    applicationId: i,
    location: r
  } = e, a = await l.default.createInvite(t, {
    target_type: D.InviteTargetTypes.EMBEDDED_APPLICATION,
    target_application_id: i
  }, r);
  null != S.default.getChannel(n) && u.default.sendInvite(n, a.code, r, null)
}
async function V(e) {
  let {
    channelId: t,
    applicationId: n,
    userId: i,
    location: r
  } = e, a = await l.default.createInvite(t, {
    target_type: D.InviteTargetTypes.EMBEDDED_APPLICATION,
    target_application_id: n
  }, r);
  s.default.ensurePrivateChannel(i).then(e => {
    null != S.default.getChannel(e) && u.default.sendInvite(e, a.code, r, null)
  })
}

function x() {
  a.default.dispatch({
    type: "EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR"
  })
}
async function F(e) {
  let t = L.Endpoints.ACTIVITY_TEST_MODE(e);
  try {
    return await r.HTTP.get({
      url: t,
      oldFormErrors: !0
    }), !0
  } catch (e) {
    return !1
  }
}

function H(e) {
  a.default.dispatch({
    type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE",
    activityPanelMode: e
  })
}

function Y(e) {
  a.default.dispatch({
    type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT",
    focusedActivityLayout: e
  })
}