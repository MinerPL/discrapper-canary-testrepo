"use strict";
i.r(e), i.d(e, {
  default: function() {
    return K
  }
}), i("47120"), i("653041");
var a = i("735250");
i("470079");
var l = i("442837"),
  n = i("481060"),
  d = i("278323"),
  s = i("224706"),
  u = i("2052"),
  o = i("906732"),
  c = i("835473"),
  I = i("768419"),
  r = i("300020"),
  p = i("456190"),
  f = i("239470"),
  y = i("894344"),
  A = i("203777"),
  S = i("314897"),
  T = i("592125"),
  _ = i("650774"),
  v = i("430824"),
  N = i("496675"),
  E = i("158776"),
  m = i("699516"),
  C = i("944486"),
  b = i("885110"),
  h = i("594174"),
  g = i("979651"),
  O = i("181106"),
  L = i("5192"),
  M = i("566620"),
  j = i("317381"),
  V = i("638880"),
  U = i("782769"),
  Y = i("255621"),
  x = i("527805"),
  G = i("620662"),
  P = i("841784"),
  F = i("275920"),
  J = i("952561"),
  R = i("513202"),
  D = i("701488"),
  k = i("981631"),
  w = i("616922"),
  X = i("689938");

function K(t, e) {
  let {
    analyticsLocations: K
  } = (0, o.default)(), B = (0, l.useStateFromStores)([h.default], () => h.default.getCurrentUser()), H = (0, l.useStateFromStores)([j.default], () => j.default.getSelfEmbeddedActivities()), z = (0, l.useStateFromStoresArray)([b.default], () => b.default.getActivities().filter(t => null != t.application_id && !(null == H ? void 0 : H.has(t.application_id)))), Q = (0, l.useStateFromStoresArray)([E.default], () => null != e ? E.default.getActivities(e.id, null == t ? void 0 : t.getGuildId()) : [], [e, t]), W = (0, l.useStateFromStoresArray)([j.default], () => {
    let i = (null == t ? void 0 : t.id) != null ? j.default.getEmbeddedActivitiesForChannel(t.id) : j.NO_ACTIVITIES;
    return null != e ? i.filter(t => {
      let {
        userIds: i
      } = t;
      return i.has(e.id)
    }) : i
  }, [e, t]), q = (0, J.default)(), Z = (0, l.useStateFromStores)([N.default], () => null == t || t.isPrivate() || N.default.can(k.Permissions.SEND_MESSAGES, t), [t]), $ = (0, l.useStateFromStoresArray)([O.default], () => [...Q.map(t => null != t.application_id && O.default.getState(t.application_id, k.ActivityActionTypes.JOIN) === k.ActivityActionStates.LOADING), ...W.map(t => O.default.getState(t.applicationId, k.ActivityActionTypes.JOIN) === k.ActivityActionStates.LOADING)], [Q, W]), tt = (0, c.default)([...Q.filter(t => (null == t ? void 0 : t.application_id) != null).map(t => t.application_id), ...W.map(t => t.applicationId)]), te = null == t ? void 0 : t.id, ti = (0, l.useStateFromStoresArray)([T.default, v.default, _.default, m.default, C.default, g.default, N.default], () => [...Q.map(t => (0, Y.default)({
    user: null != e ? e : B,
    activity: t,
    application: tt.find(e => (null == e ? void 0 : e.id) === t.application_id),
    channelId: te,
    currentUser: B,
    isEmbedded: (0, P.default)(t),
    ChannelStore: T.default,
    GuildStore: v.default,
    GuildMemberCountStore: _.default,
    RelationshipStore: m.default,
    SelectedChannelStore: C.default,
    VoiceStateStore: g.default,
    PermissionStore: N.default
  })), ...W.map(t => {
    let i = null != e ? e : B;
    return null != i && (0, x.default)({
      userId: i.id,
      application: tt.find(e => (null == e ? void 0 : e.id) === t.applicationId),
      channelId: te,
      currentUser: B,
      isActivitiesEnabledForCurrentPlatform: (0, U.getIsActivitiesEnabledForCurrentPlatform)(),
      ChannelStore: T.default,
      GuildStore: v.default,
      VoiceStateStore: g.default,
      PermissionStore: N.default
    }) === x.EmbeddedActivityJoinability.CAN_JOIN
  })], [Q, tt, te, B, W, e]), ta = (0, l.useStateFromStoresArray)([I.default, S.default], () => Q.map(t => t.type === k.ActivityTypes.LISTENING && null != e ? (0, f.default)(I.default, S.default, e, t) : void 0), [e, Q]), tl = (0, u.useAnalyticsContext)();
  if (!Z) return null;
  let tn = (i, a) => {
      null != t ? d.default.sendActivityInvite({
        type: i,
        channelId: t.id,
        activity: a,
        location: k.AnalyticsLocations.CONTEXT_MENU
      }) : null != e && d.default.sendActivityInviteUser({
        type: i,
        userId: e.id,
        activity: a,
        location: k.AnalyticsLocations.CONTEXT_MENU
      })
    },
    td = (l, d) => {
      let s = T.default.getChannel(l),
        u = null == s ? void 0 : v.default.getGuild(s.guild_id);
      if (null != s && null != u) {
        if (null != e) return M.sendEmbeddedActivityInviteUser({
          channelId: s.id,
          applicationId: d,
          userId: e.id,
          location: k.InstantInviteSources.CONTEXT_MENU
        });
        if (null != t && t.type === k.ChannelTypes.GUILD_VOICE) return (0, n.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([i.e("49237"), i.e("99387"), i.e("43643"), i.e("7654"), i.e("91007")]).then(i.bind(i, "560114"));
          return i => (0, a.jsx)(e, {
            ...i,
            guild: u,
            channel: s,
            applicationId: d,
            analyticsLocation: t.type === k.ChannelTypes.GUILD_VOICE ? k.AnalyticsPages.GUILD_CHANNEL : k.AnalyticsPages.DM_CHANNEL,
            source: k.InstantInviteSources.ACTIVITY_INVITE
          })
        }, {
          modalKey: "use-activity-items-embedded-invite-modal"
        });
        if ((null == t ? void 0 : t.id) != null) return M.sendEmbeddedActivityInvite({
          activityChannelId: s.id,
          invitedChannelId: t.id,
          applicationId: d,
          location: k.InstantInviteSources.CONTEXT_MENU
        })
      }
    },
    ts = async t => {
      var i;
      await s.default.join({
        userId: e.id,
        sessionId: t.session_id,
        applicationId: t.application_id,
        channelId: C.default.getVoiceChannelId(),
        messageId: null,
        intent: D.ActivityIntent.PLAY,
        embedded: (0, G.default)(t, k.ActivityFlags.EMBEDDED)
      }), (0, F.default)({
        type: k.AnalyticsGameOpenTypes.JOIN,
        userId: e.id,
        applicationId: t.application_id,
        partyId: null === (i = t.party) || void 0 === i ? void 0 : i.id,
        locationObject: tl.location,
        analyticsLocations: K
      })
    }, tu = async e => {
      await (0, V.default)({
        applicationId: e.applicationId,
        currentEmbeddedApplication: q,
        activityChannelId: null == t ? void 0 : t.id,
        locationObject: tl.location,
        embeddedActivitiesManager: R.default,
        analyticsLocations: K
      })
    }, to = [];
  return null == H || H.forEach(i => {
    let l = (null == e ? void 0 : e.id) != null && i.userIds.has(null == e ? void 0 : e.id),
      d = N.default.can(k.Permissions.CREATE_INSTANT_INVITE, t),
      s = tt.find(t => (null == t ? void 0 : t.id) === i.applicationId);
    null != i.instanceId && !l && d && null != s && to.push((0, a.jsx)(n.MenuItem, {
      id: "invite-to-join-embedded",
      label: X.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
      subtext: s.name,
      action: () => {
        td(i.channelId, i.applicationId)
      }
    }, "self-embedded-".concat(i.applicationId)))
  }), z.forEach((t, e) => {
    t.type === k.ActivityTypes.PLAYING && (0, G.default)(t, k.ActivityFlags.JOIN) ? to.push((0, a.jsx)(n.MenuItem, {
      id: "invite-to-join",
      label: X.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
      subtext: t.name,
      action: () => tn(k.ActivityActionTypes.JOIN, t)
    }, "self".concat(e))) : t.type === k.ActivityTypes.LISTENING && (0, G.default)(t, k.ActivityFlags.SYNC) && to.push((0, a.jsx)(n.MenuItem, {
      id: "invite-to-listen",
      label: X.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
      subtext: t.name,
      action: () => tn(k.ActivityActionTypes.LISTEN, t)
    }, "self".concat(e)))
  }), to.length > 0 && to.push((0, a.jsx)(n.MenuSeparator, {})), Q.forEach((i, l) => {
    if (i.type === k.ActivityTypes.PLAYING && (0, G.default)(i, k.ActivityFlags.JOIN) && null != i.session_id && null != i.application_id) {
      if (ti[l]) {
        let t = $[l];
        to.push((0, a.jsx)(n.MenuItem, {
          id: "join",
          label: t ? X.default.Messages.USER_ACTIVITY_JOINING : X.default.Messages.JOIN,
          disabled: t,
          hint: t ? (0, a.jsx)(n.Spinner, {
            type: n.Spinner.Type.PULSING_ELLIPSIS
          }) : null,
          subtext: i.name,
          action: () => ts(i)
        }, l))
      } else to.push((0, a.jsx)(n.MenuItem, {
        id: "ask-to-join",
        label: X.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
        subtext: i.name,
        action: () => tn(k.ActivityActionTypes.JOIN_REQUEST, i)
      }, l))
    } else if (i.type === k.ActivityTypes.LISTENING && (0, G.default)(i, k.ActivityFlags.SYNC) && null != ta[l]) {
      let d = ta[l],
        {
          notPlayable: s,
          playingSameTrack: u,
          isCurrentUser: o,
          syncingWithUser: c,
          syncingWithParty: I
        } = d,
        f = o || s || u,
        S = o || c || I;
      to.push((0, a.jsx)(n.MenuItem, {
        id: "spotify-play-".concat(i.session_id),
        action: () => (0, A.default)(d, w.SpotifyActionTypes.USER_ACTIVITY_PLAY),
        label: (0, r.default)(d, w.SpotifyActionTypes.USER_ACTIVITY_PLAY),
        subtext: f ? (0, p.default)(d, w.SpotifyActionTypes.USER_ACTIVITY_PLAY, null != t ? L.default.getNickname(t.guild_id, t.id, e) : void 0) : void 0,
        disabled: f
      }, "spotify-play-".concat(i.session_id)), (0, a.jsx)(n.MenuItem, {
        id: "spotify-sync-".concat(i.session_id),
        action: () => (0, y.default)(d, w.SpotifyActionTypes.USER_ACTIVITY_SYNC),
        label: X.default.Messages.USER_ACTIVITY_LISTEN_ALONG,
        subtext: S ? (0, p.default)(d, w.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != t ? L.default.getNickname(t.guild_id, t.id, e) : void 0) : void 0,
        disabled: S
      }, "spotify-sync-".concat(i.session_id)))
    }
  }), W.forEach((t, e) => {
    var i;
    let l = t.userIds.has(null !== (i = null == B ? void 0 : B.id) && void 0 !== i ? i : k.EMPTY_STRING_SNOWFLAKE_ID),
      d = e + Q.length,
      s = $[d] || l,
      u = X.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
    l ? u = X.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : $[d] && (u = X.default.Messages.USER_ACTIVITY_JOINING);
    let o = tt.find(e => (null == e ? void 0 : e.id) === t.applicationId);
    ti[d] && null != o && to.push((0, a.jsx)(n.MenuItem, {
      id: "embedded-activity-join-".concat(t.applicationId),
      label: u,
      disabled: s,
      hint: $[d] ? (0, a.jsx)(n.Spinner, {
        type: n.Spinner.Type.PULSING_ELLIPSIS
      }) : null,
      subtext: o.name,
      action: () => tu(t)
    }, "embedded-activity-".concat(t.applicationId)))
  }), to
}