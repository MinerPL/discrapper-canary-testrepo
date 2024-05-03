"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
});
var a = s("735250");
s("470079");
var l = s("913527"),
  i = s.n(l),
  n = s("442837"),
  r = s("692547"),
  u = s("481060"),
  d = s("239091"),
  o = s("171368"),
  c = s("271383"),
  E = s("594174"),
  I = s("441674"),
  T = s("696202"),
  f = s("497309"),
  R = s("808268"),
  _ = s("709054"),
  S = s("246364"),
  N = s("360328"),
  m = s("981631"),
  A = s("689938"),
  M = s("3995");

function h(e) {
  var t;
  let {
    guildJoinRequest: l,
    guild: h,
    guildJoinRequestUser: C
  } = e, {
    createdAt: x,
    actionedAt: p,
    guildId: g,
    userId: j
  } = l, {
    approveRequest: P,
    rejectRequest: v,
    submitting: G
  } = (0, N.useJoinRequestButtonActions)(g, j), O = null === (t = l.actionedByUser) || void 0 === t ? void 0 : t.id, L = (0, n.useStateFromStores)([E.default], () => E.default.getUser(O)), D = (0, n.useStateFromStores)([c.default], () => null != O ? c.default.getMember(g, O) : null, [O, g]), b = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING, F = (0, a.jsx)(f.default, {
    width: 24,
    height: 24,
    className: M.icon
  });
  l.applicationStatus === S.GuildJoinRequestApplicationStatuses.APPROVED ? (b = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED, F = (0, a.jsx)(I.default, {
    width: 24,
    height: 24,
    className: M.iconApproved,
    backgroundColor: r.default.unsafe_rawColors.WHITE_500.css
  })) : l.applicationStatus === S.GuildJoinRequestApplicationStatuses.REJECTED && (b = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED, F = (0, a.jsx)(T.default, {
    width: 24,
    height: 24,
    className: M.iconRejected,
    backgroundColor: r.default.unsafe_rawColors.WHITE_500.css
  }));
  let B = null != L && null != p ? A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_ACTIONED_BY_HOOK.format({
    date: i()(_.default.extractTimestamp(p)).format("ll"),
    usernameHook: function() {
      var e;
      return (0, a.jsx)(u.Clickable, {
        className: M.actionedByUser,
        onClick: () => (0, o.openUserProfileModal)({
          userId: L.id,
          guildId: g,
          analyticsLocation: {
            section: m.AnalyticsSections.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
            object: m.AnalyticsObjects.ACTIONED_BY_USER
          }
        }),
        tag: "div",
        role: "link",
        children: (0, a.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: null !== (e = null == D ? void 0 : D.nick) && void 0 !== e ? e : L.username
        })
      }, "username-hook")
    }
  }) : i()(x).format("lll");
  return (0, a.jsxs)("div", {
    className: M.container,
    children: [(0, a.jsxs)("div", {
      className: M.wrapper,
      children: [(0, a.jsxs)("div", {
        className: M.inline,
        children: [F, (0, a.jsxs)("div", {
          children: [(0, a.jsx)(u.Heading, {
            variant: "heading-sm/semibold",
            children: b
          }), (0, a.jsx)(u.Text, {
            className: M.headerSubtext,
            variant: "text-xs/normal",
            color: "header-secondary",
            children: B
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: M.inline,
        children: [l.applicationStatus === S.GuildJoinRequestApplicationStatuses.SUBMITTED && (0, a.jsxs)("div", {
          className: M.buttons,
          children: [(0, a.jsx)(u.Button, {
            color: u.Button.Colors.GREEN,
            submitting: G,
            onClick: P,
            children: A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVE_APPLICATION
          }), (0, a.jsx)(u.Button, {
            color: u.Button.Colors.RED,
            onClick: v,
            disabled: G,
            children: A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION
          })]
        }), (0, a.jsx)(u.Clickable, {
          onClick: e => {
            (0, d.openContextMenuLazy)(e, async () => {
              let {
                default: e
              } = await s.e("84259").then(s.bind(s, "597409"));
              return t => (0, a.jsx)(e, {
                ...t,
                guild: h,
                user: C
              })
            })
          },
          className: M.overflow,
          children: (0, a.jsx)(R.default, {
            width: 20,
            height: 20,
            className: M.iconInteractive
          })
        })]
      })]
    }), l.applicationStatus === S.GuildJoinRequestApplicationStatuses.REJECTED && null != l.rejectionReason && (0, a.jsx)("div", {
      className: M.rejectionReason,
      children: (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: l.rejectionReason
      })
    })]
  })
}