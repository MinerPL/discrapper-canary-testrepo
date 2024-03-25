"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("65597"),
  o = s("77078"),
  d = s("812204"),
  u = s("685665"),
  c = s("592407"),
  E = s("401642"),
  _ = s("305961"),
  I = s("178406"),
  T = s("645266"),
  S = s("914985"),
  f = s("308073"),
  m = s("565556"),
  N = s("553275"),
  g = s("691307"),
  h = s("314143"),
  C = s("721302"),
  R = s("948512"),
  x = s("49111"),
  L = s("782340"),
  O = s("348943");

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
              className: i(O.header),
              children: (0, a.jsx)(o.FormTitle, {
                tag: o.FormTitleTags.H1,
                children: L.default.Messages.GUILD_SETTINGS_MEMBERS_SERVER_MEMBERS
              })
            }, "header"), (0, a.jsx)(o.FormSection, {
              children: (0, a.jsxs)("div", {
                className: i(O.tableContainer),
                children: [(0, a.jsx)(f.default, {
                  guild: s
                }), (0, a.jsx)(S.default, {
                  guild: s
                }), A ? (0, a.jsxs)("div", {
                  className: i(O.mainTableContainer),
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
                  className: i(O.movedTable),
                  children: (0, a.jsxs)("div", {
                    className: i(O.noResultsContainer),
                    children: [(0, a.jsx)("div", {
                      className: i(O.noResultsIconContainer),
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