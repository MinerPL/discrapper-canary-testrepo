"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
});
var l = n("37983");
n("884691");
var u = n("446674"),
  i = n("922770"),
  a = n("267567"),
  r = n("998716"),
  d = n("834052"),
  s = n("42203"),
  o = n("957255"),
  c = n("945956"),
  f = n("697218"),
  E = n("374021"),
  v = n("398604"),
  g = n("152475"),
  S = n("202358"),
  h = n("598639"),
  N = n("189443"),
  _ = n("841363"),
  C = n("822516"),
  I = n("93550"),
  T = n("617347"),
  m = n("369404"),
  p = n("49111");

function x(e) {
  var t;
  let {
    guildEvent: n,
    guildId: x,
    truncate: G,
    onActionTaken: D,
    className: L,
    isNew: R
  } = e, {
    id: M,
    guild_id: y,
    channel_id: A,
    creator_id: U,
    name: V,
    description: O,
    entity_type: P,
    image: j,
    recurrence_rule: F
  } = n, k = (0, C.getNextRecurrenceIdInEvent)(n), H = (0, u.useStateFromStores)([v.default], () => v.default.isInterestedInEventRecurrence(M, k), [M, k]), b = (0, u.useStateFromStores)([a.default], () => a.default.isLurking(y), [y]), w = (0, u.useStateFromStores)([d.default], () => d.default.getStageInstanceByChannel(A), [A]), B = (0, u.useStateFromStores)([s.default], () => s.default.getChannel(A), [A]), Y = (0, u.useStateFromStores)([f.default], () => f.default.getUser(U), [U]), {
    speakers: z
  } = (0, S.default)({
    id: A,
    data: {
      guild: null,
      instance: w,
      speakers: [],
      participantCount: 0
    },
    context: {
      guildId: y,
      instance: w
    }
  }), W = (0, u.useStateFromStores)([c.default], () => c.default.getChannelId()), K = (0, v.isGuildScheduledEventActive)(n), q = W === A && null != W && K, Z = z.filter(e => e.type === r.StageChannelParticipantTypes.VOICE), J = Z.length, X = (0, u.useStateFromStores)([o.default], () => o.default.can(p.Permissions.CONNECT, B), [B]), Q = (0, g.default)(n), {
    isMember: $,
    guild: ee
  } = (0, h.default)(y, M), et = (0, m.default)({
    guild: ee,
    channel: B,
    guildScheduledEvent: n,
    isActive: K,
    recurrenceId: k,
    onActionTaken: D
  }), en = (0, i.default)(x), el = b ? void 0 : e => (0, E.openGuildEventDetails)({
    eventId: M,
    parentGuildId: x,
    recurrenceId: e
  });
  return (0, l.jsx)(T.default, {
    guild: ee,
    channel: B,
    creator: Y,
    name: V,
    entityType: P,
    description: null != O ? O : void 0,
    location: null !== (t = (0, _.getLocationFromEvent)(n)) && void 0 !== t ? t : void 0,
    imageSource: null != j ? (0, I.default)(n) : void 0,
    imageLocation: T.GuildEventBodyImageLocation.THUMBNAIL,
    isActive: K,
    isUserLurking: b,
    isJoined: q,
    isMember: $,
    isHub: en,
    speakers: Z,
    canConnect: X,
    speakerCount: J,
    rsvped: H,
    canInvite: Q,
    ...et,
    className: L,
    onClick: el,
    truncate: G,
    isNew: R,
    guildEventId: M,
    recurrenceRule: (0, N.recurrenceRuleFromServer)(F),
    recurrenceId: k
  })
}