"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("990547"),
  i = n("442837"),
  r = n("524437"),
  o = n("40851"),
  u = n("317381"),
  d = n("374065"),
  c = n("213609"),
  f = n("358221"),
  h = n("381586"),
  m = n("159300"),
  p = n("430824"),
  E = n("496675"),
  C = n("199052"),
  g = n("434488"),
  S = n("27457"),
  _ = n("251564"),
  T = n("695492"),
  I = n("981631"),
  A = n("446816");

function v(e) {
  let {
    participants: t,
    onClick: n,
    onDoubleClick: v,
    onContextMenu: N,
    channel: x,
    className: M,
    inCall: R,
    totalNumberOfParticipants: L,
    paused: y = !1
  } = e, O = (0, o.useAppContext)() === I.AppContext.POPOUT, j = (0, i.useStateFromStores)([p.default], () => p.default.getGuild(x.guild_id), [x.guild_id]), {
    dismissedActivityEntryPointTileChannel: P
  } = (0, _.useChannelCallVideoGridStore)(), D = (0, i.useStateFromStores)([f.default], () => f.default.getUserParticipantCount(x.id), [x]), b = l.useCallback(() => {
    _.useChannelCallVideoGridStore.setState({
      dismissedActivityEntryPointTileChannel: x.id
    })
  }, [x.id]);
  l.useEffect(() => {
    null != P && x.id !== P && _.useChannelCallVideoGridStore.setState({
      dismissedActivityEntryPointTileChannel: null
    })
  }, [x.id, P]);
  let U = (0, i.useStateFromStores)([E.default], () => x.isPrivate() || (0, m.canViewInviteModal)(E.default, j, x), [j, x]),
    F = (null == j ? void 0 : j.afkChannelId) === x.id,
    w = x.userLimit <= 0 || x.userLimit > 1,
    k = (0, i.useStateFromStores)([u.default], () => u.default.getEmbeddedActivitiesForChannel(x.id).length <= 0),
    H = (0, h.useIsDismissibleContentTypeDismissed)(r.DismissibleContent.VC_TILE_ACTIVITIES_ENTRY_POINT),
    B = (0, d.useEmbeddedActivityLaunchability)(x.id) !== d.EmbeddedActivityLaunchability.CAN_LAUNCH,
    G = null != P && P === x.id,
    V = t.map(e => t => (0, a.jsx)(S.default, {
      participant: e,
      channel: x,
      className: A.tile,
      paused: y,
      onClick: n,
      onDoubleClick: v,
      onContextMenu: N,
      inCall: R,
      width: t,
      inPopout: O
    }, e.id));
  (0, c.default)({
    type: s.ImpressionTypes.VIEW,
    name: s.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
    properties: {
      total_participants: L,
      can_invite: U,
      is_afk_channel: F,
      channel_user_limit: x.userLimit
    }
  }, {
    trackOnInitialLoad: !0
  }, []), null != j && !F && (!(D >= 2) || !k || B || H || G ? w && 1 === D && U && (k && !B ? V.push(e => (0, a.jsx)(g.ActivityEntryPointTile, {
    channel: x,
    guild: j,
    width: e,
    inPopout: O,
    handleClose: b,
    userParticipantCount: D
  })) : V.push(e => (0, a.jsx)(T.default, {
    width: e,
    channel: x,
    guild: j,
    inPopout: O
  }))) : V.push(e => (0, a.jsx)(g.ActivityEntryPointTile, {
    channel: x,
    guild: j,
    width: e,
    inPopout: O,
    handleClose: b,
    userParticipantCount: D
  })));
  let W = l.useCallback(e => {
    var n, a;
    return null !== (a = null === (n = t[e]) || void 0 === n ? void 0 : n.id) && void 0 !== a ? a : "empty-tile"
  }, [t]);
  return (0, a.jsx)(C.default, {
    className: M,
    keyExtractor: W,
    paddingTop: 64,
    paddingBottom: 64,
    children: V
  })
}