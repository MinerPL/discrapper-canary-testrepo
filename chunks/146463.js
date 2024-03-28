"use strict";
s.r(t);
var a = s("735250");
s("470079");
var l = s("803997"),
  i = s.n(l),
  n = s("924826"),
  u = s("442837"),
  r = s("481060"),
  o = s("209613"),
  d = s("430824"),
  c = s("263704"),
  E = s("855981"),
  I = s("55543"),
  f = s("693546"),
  T = s("826581"),
  _ = s("246364"),
  S = s("328977"),
  R = s("571728"),
  N = s("762660"),
  A = s("689938"),
  M = s("123471");
let m = () => null;

function h(e) {
  let {
    status: t
  } = e, s = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, l = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY;
  switch (t) {
    case _.GuildJoinRequestApplicationStatuses.REJECTED:
      s = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_TITLE, l = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_BODY;
      break;
    case _.GuildJoinRequestApplicationStatuses.APPROVED:
      s = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_TITLE, l = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_BODY;
      break;
    default:
      s = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, l = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY
  }
  return (0, a.jsxs)("div", {
    className: M.emptyContainer,
    children: [(0, a.jsxs)("div", {
      className: M.emptyIcon,
      children: [(0, a.jsx)(I.default, {
        className: M.star
      }), (0, a.jsx)(c.default, {
        className: M.checkmark
      }), (0, a.jsx)(E.default, {
        className: M.plus
      })]
    }), (0, a.jsx)(r.Heading, {
      variant: "heading-xl/semibold",
      children: s
    }), (0, a.jsx)(r.Text, {
      color: "header-secondary",
      className: M.emptyBody,
      variant: "text-sm/normal",
      children: l
    })]
  })
}
t.default = function(e) {
  let {
    applicationStatus: t,
    guildJoinRequests: s,
    guildId: l,
    onScroll: c,
    listRef: E
  } = e, I = (0, u.useStateFromStores)([d.default], () => d.default.getGuild(l), [l]), p = (0, u.useStateFromStores)([T.default], () => T.default.isFetching()), C = p ? [s.length + 25] : [s.length], g = (0, S.useSelectedGuildJoinRequest)({
    guildId: l
  }), x = (0, R.useSubmittedGuildJoinRequestTotal)({
    guildId: l
  }), G = (0, o.default)("guild-join-requests"), P = e => {
    let {
      row: n
    } = e, u = s[n];
    return null == u ? (0, a.jsx)(N.MemberApplicationsListRowPlaceholder, {}, n) : (0, a.jsx)(N.MemberApplicationsListRow, {
      className: i()({
        [M.selected]: g === u,
        [M.siblingSelected]: g === s[n - 1]
      }),
      guild: I,
      guildJoinRequest: u,
      onClick: () => f.default.setSelectedGuildJoinRequest(l, u),
      applicationStatus: t
    }, "".concat(u.userId, "-").concat(u.applicationStatus, "-").concat(n))
  };
  return p || 0 !== s.length ? (0, a.jsxs)(a.Fragment, {
    children: [0 !== x && t === _.GuildJoinRequestApplicationStatuses.SUBMITTED && (0, a.jsx)(r.Text, {
      className: M.title,
      variant: "text-xs/semibold",
      color: "header-secondary",
      children: (function(e, t) {
        let s = t.toLocaleString();
        switch (e) {
          case _.GuildJoinRequestApplicationStatuses.SUBMITTED:
            return A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT_HYPEN.format({
              count: s
            });
          case _.GuildJoinRequestApplicationStatuses.REJECTED:
            return A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED_COUNT_HYPEN.format({
              count: s
            });
          case _.GuildJoinRequestApplicationStatuses.APPROVED:
            return A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED_COUNT_HYPEN.format({
              count: s
            });
          default:
            return ""
        }
      })(t, x).toUpperCase()
    }), (0, a.jsx)(n.ListNavigatorProvider, {
      navigator: G,
      children: (0, a.jsx)(n.ListNavigatorContainer, {
        children: e => {
          let {
            ref: t,
            role: s,
            ...l
          } = e;
          return (0, a.jsx)(r.List, {
            innerRole: s,
            innerAriaLabel: A.default.Messages.MEMBERS,
            ref: e => {
              var s;
              E.current = e, t.current = null !== (s = null == e ? void 0 : e.getScrollerNode()) && void 0 !== s ? s : null
            },
            paddingTop: 0,
            paddingBottom: 16,
            sectionHeight: 0,
            rowHeight: 64,
            renderSection: m,
            renderRow: P,
            sections: C,
            onScroll: c,
            fade: !0,
            ...l
          }, "guild-application-review")
        }
      })
    })]
  }) : (0, a.jsx)(h, {
    status: t
  })
}