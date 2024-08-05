n.d(t, {
  Z: function() {
return b;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(392711),
  o = n.n(s),
  l = n(866442),
  u = n(442837),
  c = n(481060),
  d = n(239091),
  _ = n(276264),
  E = n(607070),
  f = n(100527),
  h = n(906732),
  p = n(818083),
  m = n(480608),
  I = n(124072),
  T = n(484459),
  g = n(103575),
  S = n(592125),
  A = n(271383),
  N = n(430824),
  v = n(594174),
  O = n(285952),
  R = n(151827),
  C = n(689938),
  y = n(153521),
  D = n(549805);
let L = (0, p.B)({
  kind: 'user',
  id: '2021-07_role_popout',
  label: 'Role Popout',
  defaultConfig: {
enabled: !1
  },
  treatments: [{
id: 1,
label: 'Enable Popout',
config: {
  enabled: !0
}
  }]
});

function b(e) {
  let {
roleColor: t,
roleId: i,
channelId: s,
roleName: p,
guildId: b,
children: M,
inlinePreview: P = !1
  } = e, {
analyticsLocations: U
  } = (0, h.ZP)(f.Z.ROLE_MENTION), w = (0, u.e7)([E.Z], () => E.Z.roleStyle), x = null != t && 0 !== t && !P, G = x && 'dot' === w, k = e => (0, r.jsxs)(I.Z, {
className: a()(y.roleMention),
color: 'username' === w && x ? t : null,
...e,
children: [
  G && (0, r.jsx)(c.RoleDot, {
    color: (0, l.Rf)(t),
    className: D.roleDot,
    background: !1,
    tooltip: !1
  }),
  M
]
  }), {
enabled: B
  } = L.getCurrentConfig({
location: '2ec235_1'
  }, {
autoTrackExposure: !1
  });
  return !B || P || null == s || null == b || null == i && '@everyone' !== p ? (0, r.jsx)(h.Gt, {
value: U,
children: k()
  }) : (0, r.jsx)(h.Gt, {
value: U,
children: (0, r.jsx)(c.Popout, {
  preload: async () => {
    null != i && await (0, m.H)(b, i);
  },
  renderPopout: e => {
    let t = S.Z.getChannel(s),
      a = N.Z.getGuild(b),
      l = A.ZP.getMembers(a.id),
      u = N.Z.getRole(b, null != i ? i : a.getEveryoneRoleId()),
      E = o()(l).filter(e => !!('@everyone' === p || e.roles.includes(i)) && null != v.default.getUser(e.userId)).sortBy(e => {
        var t;
        let n = v.default.getUser(e.userId);
        return (null != n ? null !== (t = e.nick) && void 0 !== t ? t : n.username : '').toLocaleLowerCase();
      }).map(e => {
        let i = v.default.getUser(e.userId);
        return (0, r.jsx)(c.Popout, {
          preload: () => (0, T.W)(i.id, i.getAvatarURL(t.guild_id, 80), {
            guildId: t.guild_id,
            channelId: t.id
          }),
          renderPopout: n => (0, r.jsx)(g.Z, {
            ...n,
            location: 'RoleMention',
            userId: e.userId,
            guildId: a.id,
            channelId: t.id,
            roleId: u.id
          }),
          spacing: 14,
          children: (s, o) => {
            let {
              isShown: l
            } = o;
            return (0, r.jsx)(_.Z, {
              selected: l,
              colorString: e.colorString,
              colorRoleName: u.name,
              user: i,
              isOwner: e.userId === a.ownerId,
              nick: e.nick,
              premiumSince: null == e.premiumSince ? null : new Date(e.premiumSince),
              channel: t,
              guildId: a.id,
              onContextMenu: e => {
                (0, d.jW)(e, async () => {
                  let {
                    default: e
                  } = await Promise.all([
                    n.e('79695'),
                    n.e('70474'),
                    n.e('12435'),
                    n.e('70742')
                  ]).then(n.bind(n, 757387));
                  return n => (0, r.jsx)(e, {
                    ...n,
                    user: i,
                    guildId: a.id,
                    channel: t,
                    showMediaItems: !0
                  });
                });
              },
              ...s
            }, e.userId);
          }
        }, i.id);
      }).value();
    return (0, r.jsx)(O.Z, {
      className: y.rolePopout,
      ...e,
      children: (0, r.jsxs)(c.Scroller, {
        className: y.roleScroller,
        children: [
          (0, r.jsx)(R.Z, {
            className: y.roleHeader,
            'aria-label': C.Z.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
              title: u.name,
              count: E.length
            }),
            children: (0, r.jsxs)('span', {
              'aria-hidden': !0,
              children: [
                u.name,
                ' \u2014 ',
                E.length
              ]
            })
          }),
          E
        ]
      })
    });
  },
  position: 'right',
  children: k
})
  });
}