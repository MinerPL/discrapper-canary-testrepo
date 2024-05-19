"use strict";
n.r(t), n.d(t, {
  UsernameDecorationTypes: function() {
    return r
  },
  default: function() {
    return g
  }
});
var i, r, a = n("735250"),
  s = n("470079"),
  o = n("120356"),
  l = n.n(o),
  u = n("873546"),
  d = n("442837"),
  _ = n("481060"),
  c = n("607070"),
  E = n("100527"),
  I = n("906732"),
  T = n("979264"),
  f = n("372900"),
  S = n("463396"),
  h = n("477734"),
  A = n("484459"),
  m = n("467679"),
  N = n("768581"),
  p = n("51063"),
  O = n("981631"),
  C = n("822545");

function R(e) {
  let {
    compact: t
  } = e;
  return (0, a.jsx)(m.default, {
    className: t ? C.botTagCompact : C.botTagCozy,
    type: m.default.Types.REMIX,
    useRemSizes: !0
  })
}

function g(e) {
  let t, {
      author: n,
      message: i,
      userOverride: r,
      compact: o = !1,
      withMentionPrefix: m = !1,
      showPopout: g = !1,
      className: L,
      onClick: v,
      onContextMenu: D,
      onPopoutRequestClose: M,
      renderPopout: y,
      renderRemixTag: P = !1,
      decorations: U
    } = e,
    b = s.useContext(f.default),
    {
      analyticsLocations: G
    } = (0, I.default)(E.default.USERNAME),
    w = m ? "@" : "",
    {
      nick: k,
      colorString: B,
      colorRoleName: V
    } = n,
    x = null != i.messageReference && null != i.webhookId,
    F = (0, d.useStateFromStores)([c.default], () => c.default.roleStyle),
    H = (0, h.useCanSeeRemixBadge)(),
    Y = s.useMemo(() => ({
      source: O.AnalyticsSections.CHANNEL,
      messageId: i.id,
      tagUserId: i.author.id
    }), [i.id, i.author.id]),
    j = {
      className: C.username,
      style: "username" === F && null != B ? {
        color: B
      } : void 0,
      onClick: v,
      onContextMenu: D,
      children: o ? (0, a.jsxs)(a.Fragment, {
        children: [w + k, (0, a.jsx)(T.default, {
          clan: n.clan,
          userId: i.author.id,
          contextGuildId: b,
          className: C.clanTagChiplet,
          profileViewedAnalytics: Y
        })]
      }) : (0, a.jsx)(a.Fragment, {
        children: w + k
      })
    };
  t = null != y && null != g ? (0, a.jsx)(_.Popout, {
    preload: x ? void 0 : function() {
      let e = null != r ? r : i.author;
      return (0, A.maybeFetchUserProfileForPopout)(e.id, null != n.guildMemberAvatar && null != b ? (0, N.getGuildMemberAvatarURLSimple)({
        guildId: b,
        userId: e.id,
        avatar: n.guildMemberAvatar,
        size: 80
      }) : e.getAvatarURL(b, 80), {
        guildId: b,
        channelId: i.channel_id
      })
    },
    renderPopout: y,
    shouldShow: g,
    position: u.isMobile ? "window_center" : "right",
    onRequestClose: M,
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return (0, a.jsx)(_.Clickable, {
        tag: "span",
        ...n,
        ...j,
        className: l()(j.className, C.clickable, L)
      })
    }
  }) : (0, a.jsx)(_.Clickable, {
    ...j,
    className: l()(j.className, L)
  });
  let W = null != U ? U[0] : null,
    K = null != U ? U[1] : null;
  return (0, a.jsxs)(I.AnalyticsLocationProvider, {
    value: G,
    children: [null != W && o ? (0, a.jsxs)(a.Fragment, {
      children: [" ", W, " "]
    }) : null, "dot" === F ? (0, a.jsx)(_.RoleDot, {
      color: B,
      name: V,
      className: C.roleDot
    }) : null, t, !o && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(T.default, {
        clan: n.clan,
        userId: i.author.id,
        contextGuildId: b,
        className: C.clanTagChiplet,
        profileViewedAnalytics: Y
      }), (0, a.jsx)(p.default, {
        message: i
      })]
    }), null != K ? (0, a.jsx)(a.Fragment, {
      children: K
    }) : null, null == W || o ? null : W, null != i && (0, S.default)(i) && H && P ? (0, a.jsx)(R, {}) : null]
  })
}(i = r || (r = {}))[i.SYSTEM_TAG = 0] = "SYSTEM_TAG", i[i.BADGES = 1] = "BADGES"