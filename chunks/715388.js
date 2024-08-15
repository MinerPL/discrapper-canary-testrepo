n.d(s, {
  Z: function() {
return Z;
  }
});
var i = n(735250);
n(470079);
var t = n(442837),
  l = n(481060),
  o = n(666520),
  a = n(592125),
  r = n(430824),
  d = n(944486),
  c = n(785717),
  u = n(621853),
  _ = n(588822),
  I = n(940730),
  f = n(900927),
  E = n(678738),
  m = n(351707),
  S = n(228168),
  x = n(689938),
  v = n(408277);

function Z(e) {
  var s;
  let {
user: n,
currentUser: Z,
displayProfile: h,
subsection: p,
onClose: T
  } = e, {
trackUserProfileAction: g
  } = (0, c.KZ)(), N = (0, t.e7)([r.Z], () => (null == h ? void 0 : h.guildId) != null ? r.Z.getGuild(h.guildId) : null), C = (0, t.e7)([u.Z], () => {
var e;
return null === (e = u.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application;
  }), j = (0, t.e7)([
a.Z,
d.Z
  ], () => a.Z.getChannel(d.Z.getChannelId()));
  return (0, i.jsxs)(l.ScrollerThin, {
fade: !0,
className: v.scroller,
children: [
  (null == h ? void 0 : h.bio) != null && (null == h ? void 0 : h.bio) !== '' && (0, i.jsx)(_.Z, {
    userBio: h.bio,
    setLineClamp: !1
  }),
  (null == C ? void 0 : C.popularApplicationCommandIds) != null && null != j && (0, i.jsx)(I.Z, {
    applicationId: C.id,
    commandIds: C.popularApplicationCommandIds,
    channel: j,
    guildId: null !== (s = null == h ? void 0 : h.guildId) && void 0 !== s ? s : void 0,
    onClick: T
  }),
  null != N && (0, i.jsx)(m.Z, {
    user: n,
    currentUser: Z,
    guild: N,
    scrollIntoView: p === S.Tb.ROLES
  }),
  (0, i.jsx)(E.Z, {
    heading: x.Z.Messages.BOT_PROFILE_CREATED_ON,
    children: (0, i.jsx)(f.Z, {
      userId: n.id,
      guildId: null == h ? void 0 : h.guildId,
      tooltipDelay: S.vB
    })
  }),
  (0, i.jsx)(E.Z, {
    heading: x.Z.Messages.NOTE,
    scrollIntoView: p === S.Tb.NOTE,
    children: (0, i.jsx)(o.Z, {
      userId: n.id,
      className: v.note,
      autoFocus: p === S.Tb.NOTE,
      onUpdate: () => g({
        action: 'SET_NOTE'
      })
    })
  })
]
  });
}