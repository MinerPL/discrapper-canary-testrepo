"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
});
var a = s("37983");
s("884691");
var l = s("414456"),
  i = s.n(l),
  n = s("974667"),
  r = s("446674"),
  u = s("77078"),
  o = s("302437"),
  d = s("305961"),
  c = s("36694"),
  E = s("128295"),
  I = s("414868"),
  f = s("549103"),
  T = s("90490"),
  R = s("567054"),
  S = s("122766"),
  _ = s("859130"),
  m = s("667793"),
  N = s("782340"),
  M = s("26900");
let A = () => null;

function p(e) {
  let {
    status: t
  } = e, s = N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, l = N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY;
  switch (t) {
    case R.GuildJoinRequestApplicationStatuses.REJECTED:
      s = N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_TITLE, l = N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_BODY;
      break;
    case R.GuildJoinRequestApplicationStatuses.APPROVED:
      s = N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_TITLE, l = N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_BODY;
      break;
    default:
      s = N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, l = N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY
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
    }), (0, a.jsx)(u.Heading, {
      variant: "heading-xl/semibold",
      children: s
    }), (0, a.jsx)(u.Text, {
      color: "header-secondary",
      className: M.emptyBody,
      variant: "text-sm/normal",
      children: l
    })]
  })
}
var h = function(e) {
  let {
    applicationStatus: t,
    guildJoinRequests: s,
    guildId: l,
    onScroll: c,
    listRef: E
  } = e, I = (0, r.useStateFromStores)([d.default], () => d.default.getGuild(l), [l]), h = (0, r.useStateFromStores)([T.default], () => T.default.isFetching()), x = h ? [s.length + 25] : [s.length], C = (0, S.useSelectedGuildJoinRequest)({
    guildId: l
  }), g = (0, _.useSubmittedGuildJoinRequestTotal)({
    guildId: l
  }), P = (0, o.default)("guild-join-requests"), j = e => {
    let {
      row: n
    } = e, r = s[n];
    return null == r ? (0, a.jsx)(m.MemberApplicationsListRowPlaceholder, {}, n) : (0, a.jsx)(m.MemberApplicationsListRow, {
      className: i({
        [M.selected]: C === r,
        [M.siblingSelected]: C === s[n - 1]
      }),
      guild: I,
      guildJoinRequest: r,
      onClick: () => f.default.setSelectedGuildJoinRequest(l, r),
      applicationStatus: t
    }, "".concat(r.userId, "-").concat(r.applicationStatus, "-").concat(n))
  };
  return h || 0 !== s.length ? (0, a.jsxs)(a.Fragment, {
    children: [0 !== g && t === R.GuildJoinRequestApplicationStatuses.SUBMITTED && (0, a.jsx)(u.Text, {
      className: M.title,
      variant: "text-xs/semibold",
      color: "header-secondary",
      children: (function(e, t) {
        let s = t.toLocaleString();
        switch (e) {
          case R.GuildJoinRequestApplicationStatuses.SUBMITTED:
            return N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT_HYPEN.format({
              count: s
            });
          case R.GuildJoinRequestApplicationStatuses.REJECTED:
            return N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED_COUNT_HYPEN.format({
              count: s
            });
          case R.GuildJoinRequestApplicationStatuses.APPROVED:
            return N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED_COUNT_HYPEN.format({
              count: s
            });
          default:
            return ""
        }
      })(t, g).toUpperCase()
    }), (0, a.jsx)(n.ListNavigatorProvider, {
      navigator: P,
      children: (0, a.jsx)(n.ListNavigatorContainer, {
        children: e => {
          let {
            ref: t,
            role: s,
            ...l
          } = e;
          return (0, a.jsx)(u.List, {
            innerRole: s,
            innerAriaLabel: N.default.Messages.MEMBERS,
            ref: e => {
              var s;
              E.current = e, t.current = null !== (s = null == e ? void 0 : e.getScrollerNode()) && void 0 !== s ? s : null
            },
            paddingTop: 0,
            paddingBottom: 16,
            sectionHeight: 0,
            rowHeight: 64,
            renderSection: A,
            renderRow: j,
            sections: x,
            onScroll: c,
            fade: !0,
            ...l
          }, "guild-application-review")
        }
      })
    })]
  }) : (0, a.jsx)(p, {
    status: t
  })
}