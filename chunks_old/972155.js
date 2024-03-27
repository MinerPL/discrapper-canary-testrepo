"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("759843"),
  i = n("446674"),
  r = n("151426"),
  u = n("244201"),
  o = n("191225"),
  d = n("943349"),
  c = n("428958"),
  f = n("191145"),
  h = n("393171"),
  m = n("242757"),
  p = n("305961"),
  E = n("957255"),
  g = n("466079"),
  S = n("444657"),
  C = n("679243"),
  _ = n("832897"),
  I = n("308419"),
  T = n("49111"),
  v = n("842030");

function x(e) {
  let {
    participants: t,
    onClick: n,
    onDoubleClick: x,
    onContextMenu: N,
    channel: A,
    className: M,
    inCall: R,
    totalNumberOfParticipants: j,
    paused: L = !1
  } = e, y = (0, u.useAppContext)(), O = y === T.AppContext.POPOUT, P = (0, i.useStateFromStores)([p.default], () => p.default.getGuild(A.guild_id), [A.guild_id]), {
    dismissedActivityEntryPointTileChannel: D
  } = (0, _.useChannelCallVideoGridStore)(), b = (0, i.useStateFromStores)([f.default], () => f.default.getUserParticipantCount(A.id), [A]), U = l.useCallback(() => {
    _.useChannelCallVideoGridStore.setState({
      dismissedActivityEntryPointTileChannel: A.id
    })
  }, [A.id]);
  l.useEffect(() => {
    null != D && A.id !== D && _.useChannelCallVideoGridStore.setState({
      dismissedActivityEntryPointTileChannel: null
    })
  }, [A.id, D]);
  let w = (0, i.useStateFromStores)([E.default], () => A.isPrivate() || (0, m.canViewInviteModal)(E.default, P, A), [P, A]),
    F = (null == P ? void 0 : P.afkChannelId) === A.id,
    V = A.userLimit <= 0 || A.userLimit > 1,
    H = (0, i.useStateFromStores)([o.default], () => o.default.getEmbeddedActivitiesForChannel(A.id).length <= 0),
    k = (0, h.useIsDismissibleContentTypeDismissed)(r.DismissibleContent.VC_TILE_ACTIVITIES_ENTRY_POINT),
    B = (0, d.useEmbeddedActivityLaunchability)(A.id),
    G = B !== d.EmbeddedActivityLaunchability.CAN_LAUNCH,
    W = null != D && D === A.id,
    Y = t.map(e => t => (0, a.jsx)(C.default, {
      participant: e,
      channel: A,
      className: v.tile,
      paused: L,
      onClick: n,
      onDoubleClick: x,
      onContextMenu: N,
      inCall: R,
      width: t,
      inPopout: O
    }, e.id));
  (0, c.default)({
    type: s.ImpressionTypes.VIEW,
    name: s.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
    properties: {
      total_participants: j,
      can_invite: w,
      is_afk_channel: F,
      channel_user_limit: A.userLimit
    }
  }, {
    trackOnInitialLoad: !0
  }, []), null != P && !F && (!(b >= 2) || !H || G || k || W ? V && 1 === b && w && (H && !G ? Y.push(e => (0, a.jsx)(S.ActivityEntryPointTile, {
    channel: A,
    guild: P,
    width: e,
    inPopout: O,
    handleClose: U,
    userParticipantCount: b
  })) : Y.push(e => (0, a.jsx)(I.default, {
    width: e,
    channel: A,
    guild: P,
    inPopout: O
  }))) : Y.push(e => (0, a.jsx)(S.ActivityEntryPointTile, {
    channel: A,
    guild: P,
    width: e,
    inPopout: O,
    handleClose: U,
    userParticipantCount: b
  })));
  let z = l.useCallback(e => {
    var n, a;
    return null !== (a = null === (n = t[e]) || void 0 === n ? void 0 : n.id) && void 0 !== a ? a : "empty-tile"
  }, [t]);
  return (0, a.jsx)(g.default, {
    className: M,
    keyExtractor: z,
    paddingTop: 64,
    paddingBottom: 64,
    children: Y
  })
}