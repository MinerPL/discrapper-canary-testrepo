"use strict";
n.d(t, {
  R: function() {
    return R
  }
}), n(411104);
var s = n(735250),
  r = n(470079),
  i = n(442837),
  a = n(481060),
  l = n(726745),
  o = n(973616),
  u = n(131704),
  c = n(601964),
  d = n(598077),
  h = n(594174),
  E = n(366695),
  _ = n(940627),
  m = n(819570),
  g = n(806519),
  f = n(51144),
  p = n(981631),
  I = n(888592),
  N = n(245335),
  A = n(689938),
  T = n(493918);
let R = () => (0, s.jsxs)(r.Fragment, {
    children: [(0, s.jsx)(m.qE, {
      src: null,
      size: a.AvatarSizes.DEPRECATED_SIZE_100,
      className: T.avatar
    }), (0, s.jsx)(m.DK, {
      children: A.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
    }), (0, s.jsx)(m.Dx, {
      className: T.inviteResolvingGuildName,
      children: A.Z.Messages.LOADING
    })]
  }),
  S = e => {
    let {
      guild: t,
      user: n,
      application: r,
      compact: i
    } = e;
    if (null != r) return (0, s.jsx)(E.Z, {
      className: T.appIcon,
      game: r,
      size: T.appIconSize
    });
    if (null != n) return (0, s.jsx)(m.qE, {
      src: null != n ? n.getAvatarURL(void 0, 80) : null,
      size: a.AvatarSizes.SIZE_80,
      className: i ? T.compactAvatar : T.avatar
    });
    if (null != t) return (0, s.jsx)(g.ZP, {
      mask: g.ZP.Masks.SQUIRCLE,
      width: 64,
      height: 64,
      className: T.guildIcon,
      children: (0, s.jsx)(m.Vj, {
        guild: t,
        size: m.Vj.Sizes.LARGER,
        animate: !0
      })
    });
    else return null
  };
t.Z = e => {
  var t;
  let n, r, E, {
      invite: g,
      disableUser: R = !1,
      error: C,
      flatActivityCount: x = !1,
      isRegister: O = !1
    } = e,
    {
      currentUser: Z,
      multiAccounts: L
    } = (0, i.cj)([l.Z, h.default], () => ({
      currentUser: h.default.getCurrentUser(),
      multiAccounts: l.Z.getUsers()
    }));
  if (null == g) return null;
  let M = null != g.guild ? new c.ZP(g.guild) : null,
    v = null != g.channel ? (0, u.jD)(g.channel) : null,
    D = null != g.target_application ? new o.Z(g.target_application) : null,
    b = R || null == g.inviter ? null : new d.Z(g.inviter),
    y = !(null != g.approximate_member_count && g.approximate_member_count > 100 || null != M && M.hasFeature(p.oNc.COMMUNITY)) && null != b,
    j = null,
    P = !1;
  if (null != M) j = null == b ? A.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : A.Z.Messages.AUTH_MESSAGE_INVITED_BY.format({
    username: f.ZP.getFormattedName(b)
  }), g.target_type === N.Iq.STREAM && null != g.target_user && (j = A.Z.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
    username: f.ZP.getFormattedName(g.target_user)
  })), g.target_type === N.Iq.EMBEDDED_APPLICATION && null != g.target_application && (j = null != b ? A.Z.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
    username: f.ZP.getFormattedName(b)
  }) : A.Z.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), y && null == D && (n = (0, s.jsx)(m.Vj, {
    className: T.icon,
    guild: M,
    size: m.Vj.Sizes.SMALL
  })), r = M.name, null != D && (r = D.name, E = (0, s.jsxs)("div", {
    children: [(0, s.jsx)(m.DK, {
      className: T.appIn,
      children: A.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
    }), (0, s.jsxs)("div", {
      className: T.guildContainer,
      children: [(0, s.jsx)(m.Vj, {
        guild: M,
        size: m.Vj.Sizes.SMALL
      }), (0, s.jsx)(a.Text, {
        tag: "span",
        variant: "text-lg/normal",
        color: "header-primary",
        className: T.appGuildName,
        children: M.name
      })]
    })]
  }));
  else if (null != v) {
    if (null == b) throw Error("no inviter in group DM invite");
    let e = f.ZP.getFormattedName(b);
    null != v.name && "" !== v.name ? (j = A.Z.Messages.AUTH_MESSAGE_INVITED_BY.format({
      username: e
    }), r = v.name, null != v.icon && (n = (0, s.jsx)(m.MC, {
      channel: v,
      size: a.AvatarSizes.SIZE_32
    }))) : (j = A.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, r = e)
  } else if (null != b) {
    let e = f.ZP.getFormattedName(b, !0);
    r = A.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
      username: e
    }), P = !0, E = null != C ? null : (0, s.jsx)(m.DK, {
      className: T.directInviteSubTitle,
      children: O ? A.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
        username: e
      }) : A.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
        username: e
      })
    })
  }
  return (0, s.jsxs)("div", {
    className: T.container,
    children: [(0, s.jsx)(S, {
      application: D,
      guild: M,
      user: y ? b : null,
      compact: P
    }), null != C ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(m.DK, {
        children: A.Z.Messages.INVITE_MODAL_ERROR_TITLE
      }), (0, s.jsx)(m.Dx, {
        children: C
      })]
    }) : (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(m.DK, {
        children: j
      }), (0, s.jsxs)(m.Dx, {
        className: T.title,
        children: [null != M ? (0, s.jsx)(_.Z, {
          guild: M,
          className: T.guildBadge,
          tooltipPosition: "left"
        }) : null, n, r]
      })]
    }), E, null != D || P || (null == g ? void 0 : null === (t = g.guild) || void 0 === t ? void 0 : t.id) === I.fQ ? null : (0, s.jsx)(m.EJ, {
      className: T.activityCount,
      online: g.approximate_presence_count,
      total: g.approximate_member_count,
      flat: x
    }), L.length > 1 ? (0, s.jsx)(m.jQ, {
      user: Z
    }) : null]
  })
}