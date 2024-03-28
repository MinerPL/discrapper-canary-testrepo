"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("447543"),
  r = n("410575"),
  o = n("906732"),
  u = n("924301"),
  d = n("11868"),
  c = n("413605"),
  f = n("451603"),
  E = n("885714"),
  _ = n("314897"),
  T = n("430824"),
  m = n("701190"),
  I = n("610699"),
  p = n("313876"),
  h = n("778333"),
  N = n("949981"),
  S = n("680668"),
  C = n("143708"),
  A = n("358595"),
  g = n("563917"),
  M = n("135845"),
  R = n("981631");

function O(e) {
  let {
    code: t,
    author: n,
    getAcceptInviteContext: O
  } = e, {
    invite: v,
    inviteError: L
  } = (0, l.useStateFromStoresObject)([m.default], () => ({
    invite: m.default.getInvite(t),
    inviteError: m.default.getInviteError(t)
  }), [t]);
  a.useEffect(() => {
    null == v && i.default.resolveInvite(t)
  }, [t]);
  let x = null != v ? v : {
      state: R.InviteStates.RESOLVING,
      code: ""
    },
    {
      analyticsLocations: D
    } = (0, o.default)(),
    P = (0, l.useStateFromStores)([T.default], () => (null == v ? void 0 : v.guild) != null ? T.default.getGuild(v.guild.id) : null, [v]),
    y = (0, l.useStateFromStores)([_.default], () => _.default.getId()),
    U = (0, l.useStateFromStores)([u.default], () => {
      var e;
      return u.default.getGuildScheduledEvent(null === (e = x.guild_scheduled_event) || void 0 === e ? void 0 : e.id)
    }, [x]),
    b = () => {
      null != x.channel && i.default.transitionToInviteSync(x)
    },
    j = () => {
      (0, f.isAtGuildCapAndNonPremium)() ? (0, E.default)({
        analyticsSource: {
          page: R.AnalyticsPages.INVITE_EMBED
        },
        analyticsLocation: {
          page: R.AnalyticsPages.INVITE_EMBED,
          section: R.AnalyticsSections.GUILD_CAP_UPSELL_MODAL
        },
        analyticsLocations: D
      }) : i.default.acceptInviteAndTransitionToInviteChannel({
        inviteKey: t,
        context: O("Invite Button Embed")
      })
    },
    G = (0, s.jsx)(S.default, {
      onTransitionToInviteChannel: b,
      onAcceptInstantInvite: j,
      currentUserId: y,
      guild: P,
      invite: x,
      author: n
    });
  switch (x.state) {
    case R.InviteStates.RESOLVING:
      G = (0, s.jsx)(A.default, {});
      break;
    case R.InviteStates.EXPIRED:
    case R.InviteStates.BANNED:
      G = (0, s.jsx)(C.default, {
        banned: x.state === R.InviteStates.BANNED,
        author: n
      });
      break;
    case R.InviteStates.ERROR:
      G = (0, s.jsx)(p.default, {
        author: n,
        inviteError: L
      });
      break;
    default:
      switch ((0, c.getInviteType)(x)) {
        case c.InviteTypes.GROUP_DM:
          G = (0, s.jsx)(N.default, {
            onTransitionToInviteChannel: b,
            onAcceptInstantInvite: j,
            currentUserId: y,
            invite: x,
            author: n
          });
          break;
        case c.InviteTypes.FRIEND:
          G = (0, s.jsx)(h.default, {
            invite: x,
            author: n,
            getAcceptInviteContext: O
          });
          break;
        default:
          if ((0, c.isStreamInvite)(x)) {
            G = (0, s.jsx)(M.default, {
              onTransitionToInviteChannel: b,
              onAcceptInstantInvite: j,
              currentUserId: y,
              guild: P,
              invite: x
            });
            break
          }
          if ((0, c.isGuildScheduledEventInviteEmbed)(x)) {
            G = (0, s.jsx)(d.default, {
              guildScheduledEvent: U,
              guild: x.guild,
              channel: x.channel,
              isMember: null != P,
              onAcceptInstantInvite: j,
              onTransitionToInviteChannel: b
            });
            break
          }
          if ((0, c.isStageInviteEmbed)(x)) {
            G = (0, s.jsx)(g.default, {
              stageInstance: x.stage_instance,
              guild: x.guild,
              isMember: null != P,
              onTransitionToInviteChannel: b,
              onAcceptInstantInvite: j
            });
            break
          }(0, c.isEmbeddedApplicationInvite)(x) && (G = (0, s.jsx)(I.default, {
            invite: x,
            getAcceptInviteContext: O
          }))
      }
  }
  return (0, s.jsx)(r.default, {
    section: R.AnalyticsSections.INVITE_LINK,
    children: G
  })
}