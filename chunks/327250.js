"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
});
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("399606"),
  r = n("481060"),
  o = n("493683"),
  u = n("906732"),
  d = n("69882"),
  c = n("251794"),
  f = n("386696"),
  h = n("910693"),
  m = n("314897"),
  p = n("271383"),
  E = n("430824"),
  C = n("496675"),
  g = n("158776"),
  S = n("885110"),
  _ = n("594174"),
  T = n("340149"),
  I = n("974029"),
  A = n("789695"),
  v = n("465670"),
  N = n("754424"),
  x = n("877410"),
  M = n("572004"),
  R = n("5192"),
  L = n("51144"),
  y = n("991570"),
  O = n("981631"),
  j = n("689938"),
  P = n("109336");

function D(e) {
  let {
    user: t,
    backgroundColor: n,
    guildId: l,
    onClose: s
  } = e, o = t.id, u = (0, i.useStateFromStores)([S.default, g.default, m.default], () => o === m.default.getId() ? S.default.getStatus() : g.default.getStatus(o, l), [o, l]);
  return (0, a.jsxs)("div", {
    className: P.topRow,
    style: {
      backgroundColor: n
    },
    children: [(0, a.jsxs)("div", {
      className: P.memberNameContainer,
      children: [(0, a.jsx)("div", {
        className: P.memberAvatar,
        children: (0, a.jsx)(r.Avatar, {
          src: t.getAvatarURL(l, 48),
          "aria-label": t.username,
          size: r.AvatarSizes.SIZE_48,
          status: u
        })
      }), (0, a.jsx)("div", {
        className: P.memberName,
        children: (0, a.jsx)(r.Text, {
          variant: "text-lg/medium",
          children: (0, a.jsx)(r.NameWithRole, {
            name: R.default.getName(l, null, t),
            color: r.tokens.colors.HEADER_PRIMARY.css
          })
        })
      }), (0, a.jsx)("div", {
        className: P.__invalid_memberGlobalName,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/medium",
          color: "text-normal",
          children: L.default.getUserTag(t)
        })
      })]
    }), (0, a.jsx)("div", {
      className: P.__invalid_close,
      children: (0, a.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "text-normal",
        children: (0, a.jsx)(r.Clickable, {
          className: P.closeAction,
          onClick: s,
          children: (0, a.jsx)(v.default, {})
        })
      })
    })]
  })
}

function b(e) {
  let {
    tag: t = "div",
    disabled: n,
    children: l,
    onClick: i,
    ...o
  } = e;
  return (0, a.jsx)(r.Clickable, {
    ...o,
    tag: t,
    className: s()(P.bottomRowAction, {
      [P.bottomRowActionDisabled]: n
    }),
    onClick: n ? void 0 : i,
    children: (0, a.jsx)("div", {
      className: P.innerBottomRowAction,
      children: l
    })
  })
}

function U(e) {
  let {
    backgroundColor: t,
    user: l,
    member: s,
    guildId: m
  } = e, p = (0, i.useStateFromStores)([E.default], () => E.default.getGuild(m)), {
    canKickUser: g,
    canBanUser: S,
    canModerateMembers: v
  } = (0, i.useStateFromStoresObject)([C.default, _.default, E.default], () => ({
    canKickUser: null != p && C.default.canManageUser(O.Permissions.KICK_MEMBERS, l, p),
    canBanUser: null != p && C.default.canManageUser(O.Permissions.BAN_MEMBERS, l, p),
    canModerateMembers: null != p && (0, f.canToggleCommunicationDisableOnUser)(p.id, l.id, [_.default, E.default, C.default])
  }), [l, p]), R = (0, d.isMemberCommunicationDisabled)(s), {
    analyticsLocations: L,
    newestAnalyticsLocation: y
  } = (0, u.default)(), D = (0, h.useTrackModerationAction)(m, {
    targetUserId: l.id,
    location: y,
    locations: L
  });
  return (0, a.jsxs)("div", {
    className: P.bottomRow,
    children: [(0, a.jsxs)(b, {
      "aria-label": j.default.Messages.SEND_DM,
      style: {
        backgroundColor: t
      },
      onClick: () => {
        o.default.openPrivateChannel(l.id)
      },
      children: [(0, a.jsx)(I.default, {
        width: 22,
        height: 22
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: j.default.Messages.SEND_DM
      })]
    }), (0, a.jsxs)(b, {
      disabled: !g,
      "aria-label": j.default.Messages.KICK,
      style: {
        backgroundColor: t
      },
      onClick: () => {
        (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("5454")]).then(n.bind(n, "854360"));
          return t => (0, a.jsx)(e, {
            ...t,
            location: y,
            guildId: m,
            user: l
          })
        })
      },
      children: [(0, a.jsx)(x.default, {
        width: 22,
        height: 22,
        color: r.tokens.colors.TEXT_NORMAL.css
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: j.default.Messages.KICK
      })]
    }), (0, a.jsxs)(b, {
      disabled: !S,
      "aria-label": j.default.Messages.BAN,
      style: {
        backgroundColor: t
      },
      onClick: () => {
        (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("43350")]).then(n.bind(n, "98746"));
          return t => (0, a.jsx)(e, {
            ...t,
            location: y,
            guildId: m,
            user: l
          })
        })
      },
      children: [(0, a.jsx)(T.default, {
        width: 22,
        height: 22,
        color: r.tokens.colors.TEXT_NORMAL.css
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: j.default.Messages.BAN
      })]
    }), (0, a.jsxs)(b, {
      disabled: !v,
      "aria-label": j.default.Messages.TIMEOUT_USER,
      style: {
        backgroundColor: t
      },
      onClick: () => {
        R ? (0, c.openEnableCommunication)(s.guildId, s.userId, L) : (0, c.openDisableCommunication)(s.guildId, s.userId, L)
      },
      children: [(0, a.jsx)(A.default, {
        width: 22,
        height: 22,
        color: r.tokens.colors.TEXT_NORMAL.css
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: R ? j.default.Messages.REMOVE : j.default.Messages.TIMEOUT_USER
      })]
    }), (0, a.jsxs)(b, {
      "aria-label": j.default.Messages.COPY_ID,
      style: {
        backgroundColor: t
      },
      onClick: () => {
        D(h.ModerationActionType.COPY_ID), (0, M.copy)(l.id)
      },
      disabled: !M.SUPPORTS_COPY,
      children: [(0, a.jsx)(N.default, {
        width: 22,
        height: 22,
        color: r.tokens.colors.TEXT_NORMAL.css
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: j.default.Messages.COPY_ID
      })]
    })]
  })
}

function F(e) {
  let {
    userId: t,
    guildId: n,
    onClose: l
  } = e, s = (0, i.useStateFromStores)([_.default], () => _.default.getUser(t), [t]), o = (0, i.useStateFromStores)([p.default], () => p.default.getMember(n, t), [n, t]), u = (0, y.useProfileThemedPanelBackground)(t, n, .8, r.tokens.colors.BACKGROUND_SECONDARY);
  return null == s || null == o ? null : (0, a.jsxs)("div", {
    className: P.container,
    children: [(0, a.jsx)(D, {
      user: s,
      guildId: n,
      onClose: l,
      backgroundColor: u
    }), (0, a.jsx)(U, {
      user: s,
      member: o,
      guildId: n,
      backgroundColor: u
    })]
  })
}