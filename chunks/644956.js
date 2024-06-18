"use strict";
n.d(t, {
  Z: function() {
    return P
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(392711),
  a = n.n(o),
  l = n(866442),
  u = n(442837),
  _ = n(481060),
  d = n(239091),
  c = n(276264),
  E = n(607070),
  I = n(100527),
  T = n(906732),
  h = n(818083),
  S = n(480608),
  f = n(484459),
  N = n(103575),
  A = n(592125),
  m = n(271383),
  O = n(430824),
  R = n(594174),
  C = n(285952),
  p = n(797053),
  g = n(151827),
  L = n(689938),
  v = n(743090),
  D = n(946278);
let M = (0, h.B)({
  kind: "user",
  id: "2021-07_role_popout",
  label: "Role Popout",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Popout",
    config: {
      enabled: !0
    }
  }]
});

function P(e) {
  let {
    roleColor: t,
    roleId: r,
    channelId: o,
    roleName: h,
    guildId: P,
    children: y,
    inlinePreview: U = !1
  } = e, {
    analyticsLocations: b
  } = (0, T.ZP)(I.Z.ROLE_MENTION), G = (0, u.e7)([E.Z], () => E.Z.roleStyle), w = null != t && 0 !== t && !U, k = w && "dot" === G, B = e => (0, i.jsxs)(p.Z, {
    className: s()(D.roleMention),
    color: "username" === G && w ? t : null,
    ...e,
    children: [k && (0, i.jsx)(_.RoleDot, {
      color: (0, l.Rf)(t),
      className: v.roleDot,
      background: !1,
      tooltip: !1
    }), y]
  }), {
    enabled: x
  } = M.getCurrentConfig({
    location: "2ec235_1"
  }, {
    autoTrackExposure: !1
  });
  return !x || U || null == o || null == P || null == r && "@everyone" !== h ? (0, i.jsx)(T.Gt, {
    value: b,
    children: B()
  }) : (0, i.jsx)(T.Gt, {
    value: b,
    children: (0, i.jsx)(_.Popout, {
      preload: async () => {
        null != r && await (0, S.H)(P, r)
      },
      renderPopout: e => {
        let t = A.Z.getChannel(o),
          s = O.Z.getGuild(P),
          l = m.ZP.getMembers(s.id),
          u = O.Z.getRole(P, null != r ? r : s.getEveryoneRoleId()),
          E = a()(l).filter(e => !!("@everyone" === h || e.roles.includes(r)) && null != R.default.getUser(e.userId)).sortBy(e => {
            var t;
            let n = R.default.getUser(e.userId);
            return (null != n ? null !== (t = e.nick) && void 0 !== t ? t : n.username : "").toLocaleLowerCase()
          }).map(e => {
            let r = R.default.getUser(e.userId);
            return (0, i.jsx)(_.Popout, {
              preload: () => (0, f.W)(r.id, r.getAvatarURL(t.guild_id, 80), {
                guildId: t.guild_id,
                channelId: t.id
              }),
              renderPopout: n => (0, i.jsx)(N.Z, {
                ...n,
                location: "RoleMention",
                userId: e.userId,
                guildId: s.id,
                channelId: t.id,
                roleId: u.id
              }),
              spacing: 14,
              children: (o, a) => {
                let {
                  isShown: l
                } = a;
                return (0, i.jsx)(c.Z, {
                  selected: l,
                  colorString: e.colorString,
                  colorRoleName: u.name,
                  user: r,
                  isOwner: e.userId === s.ownerId,
                  nick: e.nick,
                  premiumSince: null == e.premiumSince ? null : new Date(e.premiumSince),
                  channel: t,
                  guildId: s.id,
                  onContextMenu: e => {
                    (0, d.jW)(e, async () => {
                      let {
                        default: e
                      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("12435"), n.e("71580")]).then(n.bind(n, 757387));
                      return n => (0, i.jsx)(e, {
                        ...n,
                        user: r,
                        guildId: s.id,
                        channel: t,
                        showMediaItems: !0
                      })
                    })
                  },
                  ...o
                }, e.userId)
              }
            }, r.id)
          }).value();
        return (0, i.jsx)(C.Z, {
          className: D.rolePopout,
          ...e,
          children: (0, i.jsxs)(_.Scroller, {
            className: D.roleScroller,
            children: [(0, i.jsx)(g.Z, {
              className: D.roleHeader,
              "aria-label": L.Z.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
                title: u.name,
                count: E.length
              }),
              children: (0, i.jsxs)("span", {
                "aria-hidden": !0,
                children: [u.name, " — ", E.length]
              })
            }), E]
          })
        })
      },
      position: "right",
      children: B
    })
  })
}