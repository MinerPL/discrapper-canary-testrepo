n.d(t, {
  Z: function() {
return x;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(442837),
  r = n(447543),
  l = n(410575),
  o = n(906732),
  c = n(924301),
  u = n(11868),
  d = n(413605),
  _ = n(451603),
  E = n(885714),
  I = n(314897),
  m = n(430824),
  T = n(701190),
  h = n(610699),
  N = n(313876),
  C = n(778333),
  f = n(949981),
  p = n(680668),
  g = n(143708),
  S = n(358595),
  A = n(563917),
  R = n(135845),
  O = n(981631);

function x(e) {
  let {
code: t,
author: n,
getAcceptInviteContext: x
  } = e, {
invite: M,
inviteError: v
  } = (0, a.cj)([T.Z], () => ({
invite: T.Z.getInvite(t),
inviteError: T.Z.getInviteError(t)
  }), [t]);
  s.useEffect(() => {
null == M && r.Z.resolveInvite(t);
  }, [t]);
  let L = null != M ? M : {
  state: O.r2o.RESOLVING,
  code: ''
},
{
  analyticsLocations: Z
} = (0, o.ZP)(),
P = (0, a.e7)([m.Z], () => (null == M ? void 0 : M.guild) != null ? m.Z.getGuild(M.guild.id) : null, [M]),
D = (0, a.e7)([I.default], () => I.default.getId()),
b = (0, a.e7)([c.ZP], () => {
  var e;
  return c.ZP.getGuildScheduledEvent(null === (e = L.guild_scheduled_event) || void 0 === e ? void 0 : e.id);
}, [L]),
j = () => {
  null != L.channel && r.Z.transitionToInviteSync(L);
},
U = () => {
  (0, _.yU)() ? (0, E.Z)({
    analyticsSource: {
      page: O.ZY5.INVITE_EMBED
    },
    analyticsLocation: {
      page: O.ZY5.INVITE_EMBED,
      section: O.jXE.GUILD_CAP_UPSELL_MODAL
    },
    analyticsLocations: Z
  }) : r.Z.acceptInviteAndTransitionToInviteChannel({
    inviteKey: t,
    context: x('Invite Button Embed')
  });
},
y = (0, i.jsx)(p.Z, {
  onTransitionToInviteChannel: j,
  onAcceptInstantInvite: U,
  currentUserId: D,
  guild: P,
  invite: L,
  author: n
});
  switch (L.state) {
case O.r2o.RESOLVING:
  y = (0, i.jsx)(S.Z, {});
  break;
case O.r2o.EXPIRED:
case O.r2o.BANNED:
  y = (0, i.jsx)(g.Z, {
    banned: L.state === O.r2o.BANNED,
    author: n
  });
  break;
case O.r2o.ERROR:
  y = (0, i.jsx)(N.Z, {
    author: n,
    inviteError: v
  });
  break;
default:
  switch ((0, d.VR)(L)) {
    case d.wx.GROUP_DM:
      y = (0, i.jsx)(f.Z, {
        onTransitionToInviteChannel: j,
        onAcceptInstantInvite: U,
        currentUserId: D,
        invite: L,
        author: n
      });
      break;
    case d.wx.FRIEND:
      y = (0, i.jsx)(C.Z, {
        invite: L,
        author: n,
        getAcceptInviteContext: x
      });
      break;
    default:
      if ((0, d.TY)(L)) {
        y = (0, i.jsx)(R.Z, {
          onTransitionToInviteChannel: j,
          onAcceptInstantInvite: U,
          currentUserId: D,
          guild: P,
          invite: L
        });
        break;
      }
      if ((0, d.Tx)(L)) {
        y = (0, i.jsx)(u.ZP, {
          guildScheduledEvent: b,
          guild: L.guild,
          channel: L.channel,
          isMember: null != P,
          onAcceptInstantInvite: U,
          onTransitionToInviteChannel: j
        });
        break;
      }
      if ((0, d.$P)(L)) {
        y = (0, i.jsx)(A.Z, {
          stageInstance: L.stage_instance,
          guild: L.guild,
          isMember: null != P,
          onTransitionToInviteChannel: j,
          onAcceptInstantInvite: U
        });
        break;
      }
      (0, d.P1)(L) && (y = (0, i.jsx)(h.Z, {
        invite: L,
        getAcceptInviteContext: x
      }));
  }
  }
  return (0, i.jsx)(l.Z, {
section: O.jXE.INVITE_LINK,
children: y
  });
}