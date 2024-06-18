"use strict";
n.d(t, {
  Z: function() {
    return g
  },
  a: function() {
    return r
  }
});
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(873546),
  _ = n(442837),
  d = n(481060),
  c = n(607070),
  E = n(100527),
  I = n(906732),
  T = n(979264),
  h = n(372900),
  S = n(463396),
  f = n(477734),
  N = n(484459),
  A = n(467679),
  m = n(768581),
  O = n(51063),
  R = n(981631),
  C = n(822545);

function p(e) {
  let {
    compact: t
  } = e;
  return (0, s.jsx)(A.Z, {
    className: t ? C.botTagCompact : C.botTagCozy,
    type: A.Z.Types.REMIX,
    useRemSizes: !0
  })
}

function g(e) {
  var t;
  let n, {
      author: i,
      message: r,
      channel: a,
      userOverride: A,
      compact: g = !1,
      withMentionPrefix: L = !1,
      showPopout: v = !1,
      className: D,
      onClick: M,
      onContextMenu: P,
      onPopoutRequestClose: y,
      renderPopout: U,
      renderRemixTag: b = !1,
      decorations: G
    } = e,
    w = o.useContext(h.Z),
    k = null !== (t = null == a ? void 0 : a.guild_id) && void 0 !== t ? t : w,
    {
      analyticsLocations: B
    } = (0, I.ZP)(E.Z.USERNAME),
    {
      nick: x,
      colorString: V,
      colorRoleName: Z
    } = i,
    H = null != r.messageReference && null != r.webhookId && r.hasFlag(R.iLy.IS_CROSSPOST),
    F = (0, _.e7)([c.Z], () => c.Z.roleStyle),
    Y = (0, f.X$)(),
    j = o.useMemo(() => ({
      source: R.jXE.CHANNEL,
      messageId: r.id,
      tagUserId: r.author.id
    }), [r.id, r.author.id]),
    W = {
      className: C.username,
      style: "username" === F && null != V ? {
        color: V
      } : void 0,
      onClick: M,
      onContextMenu: P,
      children: (0, s.jsx)(s.Fragment, {
        children: (L ? "@" : "") + x
      })
    },
    K = o.useMemo(() => g ? (0, s.jsx)(T.ZP, {
      clan: i.clan,
      userId: r.author.id,
      contextGuildId: k,
      className: C.clanTagChiplet,
      profileViewedAnalytics: j
    }) : null, [g, j, i.clan, k, r.author.id]);
  n = null != U && null != v ? (0, s.jsx)(d.Popout, {
    preload: H ? void 0 : function() {
      let e = null != A ? A : r.author;
      return (0, N.W)(e.id, null != i.guildMemberAvatar && null != k ? (0, m.JM)({
        guildId: k,
        userId: e.id,
        avatar: i.guildMemberAvatar,
        size: 80
      }) : e.getAvatarURL(k, 80), {
        guildId: k,
        channelId: r.channel_id
      })
    },
    renderPopout: U,
    shouldShow: v,
    position: u.tq ? "window_center" : "right",
    onRequestClose: y,
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(d.Clickable, {
          tag: "span",
          ...n,
          ...W,
          className: l()(W.className, C.clickable, D)
        }), K]
      })
    }
  }) : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(d.Clickable, {
      ...W,
      className: l()(W.className, D)
    }), K]
  });
  let z = null != G ? G[0] : null,
    q = null != G ? G[1] : null;
  return (0, s.jsxs)(I.Gt, {
    value: B,
    children: [null != z && g ? (0, s.jsxs)(s.Fragment, {
      children: [" ", z, " "]
    }) : null, "dot" === F ? (0, s.jsx)(d.RoleDot, {
      color: V,
      name: Z,
      className: C.roleDot
    }) : null, n, !g && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(T.ZP, {
        clan: i.clan,
        userId: r.author.id,
        contextGuildId: k,
        className: C.clanTagChiplet,
        profileViewedAnalytics: j
      }), (0, s.jsx)(O.Z, {
        message: r
      })]
    }), null != q ? (0, s.jsx)(s.Fragment, {
      children: q
    }) : null, null == z || g ? null : z, null != r && (0, S.f)(r) && Y && b ? (0, s.jsx)(p, {}) : null]
  })
}(i = r || (r = {}))[i.SYSTEM_TAG = 0] = "SYSTEM_TAG", i[i.BADGES = 1] = "BADGES"