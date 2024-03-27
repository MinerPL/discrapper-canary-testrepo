"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  i = s("866227"),
  n = s.n(i),
  r = s("446674"),
  u = s("669491"),
  o = s("77078"),
  d = s("272030"),
  c = s("401642"),
  E = s("26989"),
  I = s("697218"),
  f = s("578706"),
  T = s("381546"),
  R = s("841811"),
  S = s("433487"),
  _ = s("299039"),
  m = s("549103"),
  N = s("567054"),
  M = s("49111"),
  A = s("782340"),
  p = s("73266");

function h(e) {
  var t;
  let {
    guildJoinRequest: i,
    guild: h,
    guildJoinRequestUser: x
  } = e, [C, g] = l.useState(!1), {
    createdAt: P,
    actionedAt: j,
    guildId: G,
    userId: v
  } = i, O = null === (t = i.actionedByUser) || void 0 === t ? void 0 : t.id, D = (0, r.useStateFromStores)([I.default], () => I.default.getUser(O)), L = (0, r.useStateFromStores)([E.default], () => null != O ? E.default.getMember(G, O) : null, [O, G]), b = l.useCallback(() => {
    (0, o.showToast)((0, o.createToast)(A.default.Messages.ERROR_GENERIC_TITLE, o.ToastType.FAILURE))
  }, []), F = async () => {
    if (!C) {
      g(!0);
      try {
        await m.default.updateGuildJoinRequest(G, v, N.GuildJoinRequestApplicationStatuses.APPROVED)
      } catch {
        b()
      } finally {
        g(!1)
      }
    }
  }, V = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING, B = (0, a.jsx)(R.default, {
    width: 24,
    height: 24,
    className: p.icon
  });
  i.applicationStatus === N.GuildJoinRequestApplicationStatuses.APPROVED ? (V = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED, B = (0, a.jsx)(f.default, {
    width: 24,
    height: 24,
    className: p.iconApproved,
    backgroundColor: u.default.unsafe_rawColors.WHITE_500.css
  })) : i.applicationStatus === N.GuildJoinRequestApplicationStatuses.REJECTED && (V = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED, B = (0, a.jsx)(T.default, {
    width: 24,
    height: 24,
    className: p.iconRejected,
    backgroundColor: u.default.unsafe_rawColors.WHITE_500.css
  }));
  let U = null != D && null != j ? A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_ACTIONED_BY_HOOK.format({
    date: n(_.default.extractTimestamp(j)).format("ll"),
    usernameHook: function() {
      var e;
      return (0, a.jsx)(o.Clickable, {
        className: p.actionedByUser,
        onClick: () => (0, c.openUserProfileModal)({
          userId: D.id,
          guildId: G,
          analyticsLocation: {
            section: M.AnalyticsSections.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
            object: M.AnalyticsObjects.ACTIONED_BY_USER
          }
        }),
        tag: "div",
        role: "link",
        children: (0, a.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: null !== (e = null == L ? void 0 : L.nick) && void 0 !== e ? e : D.username
        })
      }, "username-hook")
    }
  }) : n(P).format("lll");
  return (0, a.jsxs)("div", {
    className: p.container,
    children: [(0, a.jsxs)("div", {
      className: p.wrapper,
      children: [(0, a.jsxs)("div", {
        className: p.inline,
        children: [B, (0, a.jsxs)("div", {
          children: [(0, a.jsx)(o.Heading, {
            variant: "heading-sm/semibold",
            children: V
          }), (0, a.jsx)(o.Text, {
            className: p.headerSubtext,
            variant: "text-xs/normal",
            color: "header-secondary",
            children: U
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: p.inline,
        children: [i.applicationStatus === N.GuildJoinRequestApplicationStatuses.SUBMITTED && (0, a.jsxs)("div", {
          className: p.buttons,
          children: [(0, a.jsx)(o.Button, {
            color: o.Button.Colors.GREEN,
            submitting: C,
            onClick: () => F(),
            children: A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVE_APPLICATION
          }), (0, a.jsx)(o.Button, {
            color: o.Button.Colors.RED,
            onClick: () => {
              (0, o.openModalLazy)(async () => {
                let {
                  default: e
                } = await s.el("155554").then(s.bind(s, "155554"));
                return t => (0, a.jsx)(e, {
                  modalProps: t,
                  guildId: G,
                  userId: v,
                  onError: b
                })
              })
            },
            disabled: C,
            children: A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION
          })]
        }), (0, a.jsx)(o.Clickable, {
          onClick: e => {
            (0, d.openContextMenuLazy)(e, async () => {
              let {
                default: e
              } = await s.el("176032").then(s.bind(s, "176032"));
              return t => (0, a.jsx)(e, {
                ...t,
                guild: h,
                user: x
              })
            })
          },
          className: p.overflow,
          children: (0, a.jsx)(S.default, {
            width: 20,
            height: 20,
            className: p.iconInteractive
          })
        })]
      })]
    }), i.applicationStatus === N.GuildJoinRequestApplicationStatuses.REJECTED && null != i.rejectionReason && (0, a.jsx)("div", {
      className: p.rejectionReason,
      children: (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: i.rejectionReason
      })
    })]
  })
}