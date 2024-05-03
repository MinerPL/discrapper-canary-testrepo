"use strict";
s.r(t);
var a = s("735250");
s("470079");
var l = s("120356"),
  i = s.n(l),
  n = s("924826"),
  r = s("442837"),
  u = s("481060"),
  d = s("209613"),
  o = s("430824"),
  c = s("263704"),
  E = s("855981"),
  I = s("55543"),
  T = s("693546"),
  f = s("826581"),
  R = s("246364"),
  _ = s("328977"),
  S = s("571728"),
  N = s("762660"),
  m = s("689938"),
  A = s("978577");
let M = () => null;

function h(e) {
  let {
    status: t
  } = e, s = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, l = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY;
  switch (t) {
    case R.GuildJoinRequestApplicationStatuses.REJECTED:
      s = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_TITLE, l = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_BODY;
      break;
    case R.GuildJoinRequestApplicationStatuses.APPROVED:
      s = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_TITLE, l = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_BODY;
      break;
    default:
      s = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, l = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY
  }
  return (0, a.jsxs)("div", {
    className: A.emptyContainer,
    children: [(0, a.jsxs)("div", {
      className: A.emptyIcon,
      children: [(0, a.jsx)(I.default, {
        className: A.star
      }), (0, a.jsx)(c.default, {
        className: A.checkmark
      }), (0, a.jsx)(E.default, {
        className: A.plus
      })]
    }), (0, a.jsx)(u.Heading, {
      variant: "heading-xl/semibold",
      children: s
    }), (0, a.jsx)(u.Text, {
      color: "header-secondary",
      className: A.emptyBody,
      variant: "text-sm/normal",
      children: l
    })]
  })
}
t.default = function(e) {
  var t;
  let {
    applicationStatus: s,
    guildJoinRequests: l,
    guildId: c,
    onScroll: E,
    listRef: I
  } = e, C = (0, r.useStateFromStores)([o.default], () => o.default.getGuild(c), [c]), x = (0, r.useStateFromStores)([f.default], () => f.default.isFetching()), p = x ? [l.length + 25] : [l.length], g = (0, _.useSelectedGuildJoinRequest)({
    guildId: c
  }), j = null !== (t = (0, S.useSubmittedGuildJoinRequestTotal)({
    guildId: c
  })) && void 0 !== t ? t : 0, P = (0, d.default)("guild-join-requests"), v = e => {
    let {
      row: t
    } = e, n = l[t];
    return null == n ? (0, a.jsx)(N.MemberApplicationsListRowPlaceholder, {}, t) : (0, a.jsx)(N.MemberApplicationsListRow, {
      className: i()({
        [A.selected]: g === n,
        [A.siblingSelected]: g === l[t - 1]
      }),
      guild: C,
      guildJoinRequest: n,
      onClick: () => T.default.setSelectedGuildJoinRequest(c, n),
      applicationStatus: s
    }, "".concat(n.userId, "-").concat(n.applicationStatus, "-").concat(t))
  };
  return x || 0 !== l.length ? (0, a.jsxs)(a.Fragment, {
    children: [0 !== j && s === R.GuildJoinRequestApplicationStatuses.SUBMITTED && (0, a.jsx)(u.Text, {
      className: A.title,
      variant: "text-xs/semibold",
      color: "header-secondary",
      children: (function(e, t) {
        let s = t.toLocaleString();
        switch (e) {
          case R.GuildJoinRequestApplicationStatuses.SUBMITTED:
            return m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT_HYPEN.format({
              count: s
            });
          case R.GuildJoinRequestApplicationStatuses.REJECTED:
            return m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED_COUNT_HYPEN.format({
              count: s
            });
          case R.GuildJoinRequestApplicationStatuses.APPROVED:
            return m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED_COUNT_HYPEN.format({
              count: s
            });
          default:
            return ""
        }
      })(s, j).toUpperCase()
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
            innerAriaLabel: m.default.Messages.MEMBERS,
            ref: e => {
              var s;
              I.current = e, t.current = null !== (s = null == e ? void 0 : e.getScrollerNode()) && void 0 !== s ? s : null
            },
            paddingTop: 0,
            paddingBottom: 16,
            sectionHeight: 0,
            rowHeight: 64,
            renderSection: M,
            renderRow: v,
            sections: p,
            onScroll: E,
            fade: !0,
            ...l
          }, "guild-application-review")
        }
      })
    })]
  }) : (0, a.jsx)(h, {
    status: s
  })
}