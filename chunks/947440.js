"use strict";
i.r(t), i.d(t, {
  default: function() {
    return K
  }
}), i("47120"), i("653041");
var a = i("735250");
i("470079");
var n = i("442837"),
  l = i("481060"),
  d = i("278323"),
  u = i("224706"),
  s = i("2052"),
  o = i("906732"),
  r = i("835473"),
  c = i("768419"),
  f = i("300020"),
  I = i("456190"),
  p = i("239470"),
  A = i("894344"),
  T = i("203777"),
  S = i("314897"),
  _ = i("592125"),
  y = i("650774"),
  v = i("430824"),
  E = i("496675"),
  m = i("158776"),
  N = i("699516"),
  C = i("944486"),
  M = i("885110"),
  g = i("594174"),
  h = i("979651"),
  b = i("181106"),
  O = i("5192"),
  x = i("566620"),
  L = i("317381"),
  F = i("638880"),
  j = i("782769"),
  R = i("255621"),
  U = i("527805"),
  P = i("620662"),
  V = i("841784"),
  D = i("275920"),
  G = i("952561"),
  Y = i("513202"),
  J = i("701488"),
  k = i("981631"),
  w = i("616922"),
  B = i("689938");

function K(e, t) {
  let {
    analyticsLocations: K
  } = (0, o.default)(), H = (0, n.useStateFromStores)([g.default], () => g.default.getCurrentUser()), X = (0, n.useStateFromStores)([L.default], () => L.default.getSelfEmbeddedActivities()), z = (0, n.useStateFromStoresArray)([M.default], () => M.default.getActivities().filter(e => null != e.application_id && !(null == X ? void 0 : X.has(e.application_id)))), W = (0, n.useStateFromStoresArray)([m.default], () => null != t ? m.default.getActivities(t.id, null == e ? void 0 : e.getGuildId()) : [], [t, e]), q = (0, n.useStateFromStoresArray)([L.default], () => {
    let i = (null == e ? void 0 : e.id) != null ? L.default.getEmbeddedActivitiesForChannel(e.id) : L.NO_ACTIVITIES;
    return null != t ? i.filter(e => {
      let {
        userIds: i
      } = e;
      return i.has(t.id)
    }) : i
  }, [t, e]), Q = (0, G.default)(), Z = (0, n.useStateFromStores)([E.default], () => null == e || e.isPrivate() || E.default.can(k.Permissions.SEND_MESSAGES, e), [e]), $ = (0, n.useStateFromStoresArray)([b.default], () => [...W.map(e => null != e.application_id && b.default.getState(e.application_id, k.ActivityActionTypes.JOIN) === k.ActivityActionStates.LOADING), ...q.map(e => b.default.getState(e.applicationId, k.ActivityActionTypes.JOIN) === k.ActivityActionStates.LOADING)], [W, q]), ee = (0, r.default)([...W.filter(e => (null == e ? void 0 : e.application_id) != null).map(e => e.application_id), ...q.map(e => e.applicationId)]), et = null == e ? void 0 : e.id, ei = (0, n.useStateFromStoresArray)([_.default, v.default, y.default, N.default, C.default, h.default, E.default], () => [...W.map(e => (0, R.default)({
    user: null != t ? t : H,
    activity: e,
    application: ee.find(t => (null == t ? void 0 : t.id) === e.application_id),
    channelId: et,
    currentUser: H,
    isEmbedded: (0, V.default)(e),
    ChannelStore: _.default,
    GuildStore: v.default,
    GuildMemberCountStore: y.default,
    RelationshipStore: N.default,
    SelectedChannelStore: C.default,
    VoiceStateStore: h.default,
    PermissionStore: E.default
  })), ...q.map(e => {
    let i = null != t ? t : H;
    return null != i && (0, U.default)({
      userId: i.id,
      application: ee.find(t => (null == t ? void 0 : t.id) === e.applicationId),
      channelId: et,
      currentUser: H,
      isActivitiesEnabledForCurrentPlatform: (0, j.getIsActivitiesEnabledForCurrentPlatform)(),
      ChannelStore: _.default,
      GuildStore: v.default,
      VoiceStateStore: h.default,
      PermissionStore: E.default
    }) === U.EmbeddedActivityJoinability.CAN_JOIN
  })], [W, ee, et, H, q, t]), ea = (0, n.useStateFromStoresArray)([c.default, S.default], () => W.map(e => e.type === k.ActivityTypes.LISTENING && null != t ? (0, p.default)(c.default, S.default, t, e) : void 0), [t, W]), en = (0, s.useAnalyticsContext)();
  if (!Z) return null;
  let el = (i, a) => {
      null != e ? d.default.sendActivityInvite({
        type: i,
        channelId: e.id,
        activity: a,
        location: k.AnalyticsLocations.CONTEXT_MENU
      }) : null != t && d.default.sendActivityInviteUser({
        type: i,
        userId: t.id,
        activity: a,
        location: k.AnalyticsLocations.CONTEXT_MENU
      })
    },
    ed = (n, d) => {
      let u = _.default.getChannel(n),
        s = null == u ? void 0 : v.default.getGuild(u.guild_id);
      if (null != u && null != s) {
        if (null != t) return x.sendEmbeddedActivityInviteUser({
          channelId: u.id,
          applicationId: d,
          userId: t.id,
          location: k.InstantInviteSources.CONTEXT_MENU
        });
        if (null != e && e.type === k.ChannelTypes.GUILD_VOICE) return (0, l.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([i.e("49237"), i.e("99387"), i.e("43643"), i.e("7654"), i.e("96626")]).then(i.bind(i, "560114"));
          return i => (0, a.jsx)(t, {
            ...i,
            guild: s,
            channel: u,
            applicationId: d,
            analyticsLocation: e.type === k.ChannelTypes.GUILD_VOICE ? k.AnalyticsPages.GUILD_CHANNEL : k.AnalyticsPages.DM_CHANNEL,
            source: k.InstantInviteSources.ACTIVITY_INVITE
          })
        }, {
          modalKey: "use-activity-items-embedded-invite-modal"
        });
        if ((null == e ? void 0 : e.id) != null) return x.sendEmbeddedActivityInvite({
          activityChannelId: u.id,
          invitedChannelId: e.id,
          applicationId: d,
          location: k.InstantInviteSources.CONTEXT_MENU
        })
      }
    },
    eu = async e => {
      var i;
      await u.default.join({
        userId: t.id,
        sessionId: e.session_id,
        applicationId: e.application_id,
        channelId: C.default.getVoiceChannelId(),
        messageId: null,
        intent: J.ActivityIntent.PLAY,
        embedded: (0, P.default)(e, k.ActivityFlags.EMBEDDED)
      }), (0, D.default)({
        type: k.AnalyticsGameOpenTypes.JOIN,
        userId: t.id,
        applicationId: e.application_id,
        partyId: null === (i = e.party) || void 0 === i ? void 0 : i.id,
        locationObject: en.location,
        analyticsLocations: K
      })
    }, es = async t => {
      await (0, F.default)({
        applicationId: t.applicationId,
        currentEmbeddedApplication: Q,
        activityChannelId: null == e ? void 0 : e.id,
        locationObject: en.location,
        embeddedActivitiesManager: Y.default,
        analyticsLocations: K
      })
    }, eo = [];
  return null == X || X.forEach(i => {
    let n = (null == t ? void 0 : t.id) != null && i.userIds.has(null == t ? void 0 : t.id),
      d = E.default.can(k.Permissions.CREATE_INSTANT_INVITE, e),
      u = ee.find(e => (null == e ? void 0 : e.id) === i.applicationId);
    null != i.launchId && !n && d && null != u && eo.push((0, a.jsx)(l.MenuItem, {
      id: "invite-to-join-embedded",
      label: B.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
      subtext: u.name,
      action: () => {
        ed(i.channelId, i.applicationId)
      }
    }, "self-embedded-".concat(i.applicationId)))
  }), z.forEach((e, t) => {
    e.type === k.ActivityTypes.PLAYING && (0, P.default)(e, k.ActivityFlags.JOIN) ? eo.push((0, a.jsx)(l.MenuItem, {
      id: "invite-to-join",
      label: B.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
      subtext: e.name,
      action: () => el(k.ActivityActionTypes.JOIN, e)
    }, "self".concat(t))) : e.type === k.ActivityTypes.LISTENING && (0, P.default)(e, k.ActivityFlags.SYNC) && eo.push((0, a.jsx)(l.MenuItem, {
      id: "invite-to-listen",
      label: B.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
      subtext: e.name,
      action: () => el(k.ActivityActionTypes.LISTEN, e)
    }, "self".concat(t)))
  }), eo.length > 0 && eo.push((0, a.jsx)(l.MenuSeparator, {})), W.forEach((i, n) => {
    if (i.type === k.ActivityTypes.PLAYING && (0, P.default)(i, k.ActivityFlags.JOIN) && null != i.session_id && null != i.application_id) {
      if (ei[n]) {
        let e = $[n];
        eo.push((0, a.jsx)(l.MenuItem, {
          id: "join",
          label: e ? B.default.Messages.USER_ACTIVITY_JOINING : B.default.Messages.JOIN,
          disabled: e,
          hint: e ? (0, a.jsx)(l.Spinner, {
            type: l.Spinner.Type.PULSING_ELLIPSIS
          }) : null,
          subtext: i.name,
          action: () => eu(i)
        }, n))
      } else eo.push((0, a.jsx)(l.MenuItem, {
        id: "ask-to-join",
        label: B.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
        subtext: i.name,
        action: () => el(k.ActivityActionTypes.JOIN_REQUEST, i)
      }, n))
    } else if (i.type === k.ActivityTypes.LISTENING && (0, P.default)(i, k.ActivityFlags.SYNC) && null != ea[n]) {
      let d = ea[n],
        {
          playDisabled: u,
          syncDisabled: s
        } = d;
      eo.push((0, a.jsx)(l.MenuItem, {
        id: "spotify-play-".concat(i.session_id),
        action: () => (0, T.default)(d, w.SpotifyActionTypes.USER_ACTIVITY_PLAY),
        label: (0, f.default)(d, w.SpotifyActionTypes.USER_ACTIVITY_PLAY),
        subtext: u ? (0, I.default)(d, w.SpotifyActionTypes.USER_ACTIVITY_PLAY, null != e ? O.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
        disabled: u
      }, "spotify-play-".concat(i.session_id)), (0, a.jsx)(l.MenuItem, {
        id: "spotify-sync-".concat(i.session_id),
        action: () => (0, A.default)(d, w.SpotifyActionTypes.USER_ACTIVITY_SYNC),
        label: B.default.Messages.USER_ACTIVITY_LISTEN_ALONG,
        subtext: s ? (0, I.default)(d, w.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != e ? O.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
        disabled: s
      }, "spotify-sync-".concat(i.session_id)))
    }
  }), q.forEach((e, t) => {
    var i;
    let n = e.userIds.has(null !== (i = null == H ? void 0 : H.id) && void 0 !== i ? i : k.EMPTY_STRING_SNOWFLAKE_ID),
      d = t + W.length,
      u = $[d] || n,
      s = B.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
    n ? s = B.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : $[d] && (s = B.default.Messages.USER_ACTIVITY_JOINING);
    let o = ee.find(t => (null == t ? void 0 : t.id) === e.applicationId);
    ei[d] && null != o && eo.push((0, a.jsx)(l.MenuItem, {
      id: "embedded-activity-join-".concat(e.applicationId),
      label: s,
      disabled: u,
      hint: $[d] ? (0, a.jsx)(l.Spinner, {
        type: l.Spinner.Type.PULSING_ELLIPSIS
      }) : null,
      subtext: o.name,
      action: () => es(e)
    }, "embedded-activity-".concat(e.applicationId)))
  }), eo
}