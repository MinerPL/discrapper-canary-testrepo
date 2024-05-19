"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("399606"),
  o = s("481060"),
  d = s("100527"),
  u = s("906732"),
  c = s("434404"),
  E = s("171368"),
  _ = s("430824"),
  I = s("893966"),
  T = s("527379"),
  S = s("305473"),
  f = s("113679"),
  m = s("440857"),
  N = s("472596"),
  g = s("598948"),
  h = s("428936"),
  C = s("41586"),
  R = s("918192"),
  x = s("981631"),
  L = s("689938"),
  O = s("22401");

function A(e) {
  let {
    guildId: t
  } = e, s = (0, r.useStateFromStores)([_.default], () => _.default.getGuild(t)), {
    analyticsLocations: n
  } = (0, u.default)(d.default.GUILD_SETTINGS_MEMBERS_PAGE), A = !1 == !!(null == s ? void 0 : s.hasFeature(x.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), p = (0, r.useStateFromStores)([I.default], () => I.default.getEstimatedMemberSearchCountByGuildId(t), [t]), M = l.useCallback(e => {
    null != e && (0, E.openUserProfileModal)({
      userId: e.userId,
      guildId: e.guildId,
      sourceAnalyticsLocations: n,
      analyticsLocation: {
        section: x.AnalyticsSections.GUILD_SETTINGS_MEMBERS
      }
    })
  }, [n]), D = l.useRef(null), v = l.useCallback(() => {
    var e;
    null === (e = D.current) || void 0 === e || e.resetSearchText()
  }, []);
  if (null == s) return null;
  let G = (0, N.getSearchState)(!1, !1, p);
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: n,
    children: (0, a.jsx)("div", {
      className: O.settingsColumn,
      children: (0, a.jsx)("div", {
        className: O.settingsContainer,
        children: (0, a.jsx)(o.ScrollerAuto, {
          className: O.settingsScroller,
          orientation: "auto",
          children: (0, a.jsxs)("main", {
            className: O.settingsContent,
            children: [(0, a.jsx)(o.FormSection, {
              className: i()(O.header),
              children: (0, a.jsx)(o.FormTitle, {
                tag: o.FormTitleTags.H1,
                children: L.default.Messages.GUILD_SETTINGS_MEMBERS_SERVER_MEMBERS
              })
            }, "header"), (0, a.jsx)(o.FormSection, {
              children: (0, a.jsxs)("div", {
                className: i()(O.tableContainer),
                children: [(0, a.jsx)(f.default, {
                  guild: s
                }), (0, a.jsx)(S.default, {
                  guild: s
                }), A ? (0, a.jsxs)("div", {
                  className: i()(O.mainTableContainer),
                  children: [(0, a.jsx)(C.default, {
                    guild: s,
                    ref: D
                  }), (0, a.jsx)(g.default, {
                    guild: s,
                    searchState: G,
                    compact: !0,
                    onSelectRow: M,
                    onResetForNewMembers: v
                  }), G !== N.SearchState.SUCCESS_STILL_INDEXING && (0, a.jsx)(h.default, {
                    guildId: s.id
                  })]
                }) : (0, a.jsx)("div", {
                  className: i()(O.movedTable),
                  children: (0, a.jsxs)("div", {
                    className: i()(O.noResultsContainer),
                    children: [(0, a.jsx)("div", {
                      className: i()(O.__invalid_noResultsIconContainer),
                      children: (0, a.jsx)(R.default, {})
                    }), (0, a.jsx)(o.Text, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: L.default.Messages.GUILD_SETTINGS_SAFETY_MODERATION_EXPERIENCE_ENABLED.format({
                        onClick: e => {
                          null != s && (e.preventDefault(), c.default.close(), (0, T.goToMemberSafetyDashboard)(s.id))
                        }
                      })
                    })]
                  })
                })]
              })
            }, "body"), (0, a.jsx)(m.default, {
              guildId: s.id
            })]
          })
        })
      })
    })
  })
}