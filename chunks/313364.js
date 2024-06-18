"use strict";
t.d(s, {
  Z: function() {
    return p
  }
});
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(399606),
  o = t(481060),
  c = t(100527),
  d = t(906732),
  u = t(434404),
  E = t(171368),
  _ = t(430824),
  I = t(893966),
  T = t(527379),
  N = t(305473),
  m = t(113679),
  S = t(440857),
  h = t(472596),
  g = t(598948),
  x = t(428936),
  C = t(41586),
  R = t(918192),
  L = t(981631),
  O = t(689938),
  A = t(22401);

function p(e) {
  let {
    guildId: s
  } = e, t = (0, r.e7)([_.Z], () => _.Z.getGuild(s)), {
    analyticsLocations: l
  } = (0, d.ZP)(c.Z.GUILD_SETTINGS_MEMBERS_PAGE), p = !1 == !!(null == t ? void 0 : t.hasFeature(L.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), M = (0, r.e7)([I.Z], () => I.Z.getEstimatedMemberSearchCountByGuildId(s), [s]), f = i.useCallback(e => {
    if (null != e)(0, E.openUserProfileModal)({
      userId: e.userId,
      guildId: e.guildId,
      sourceAnalyticsLocations: l,
      analyticsLocation: {
        section: L.jXE.GUILD_SETTINGS_MEMBERS
      }
    })
  }, [l]), v = i.useRef(null), D = i.useCallback(() => {
    var e;
    null === (e = v.current) || void 0 === e || e.resetSearchText()
  }, []);
  if (null == t) return null;
  let Z = (0, h.xb)(!1, !1, M);
  return (0, n.jsx)(d.Gt, {
    value: l,
    children: (0, n.jsx)("div", {
      className: A.settingsColumn,
      children: (0, n.jsx)("div", {
        className: A.settingsContainer,
        children: (0, n.jsx)(o.ScrollerAuto, {
          className: A.settingsScroller,
          orientation: "auto",
          children: (0, n.jsxs)("main", {
            className: A.settingsContent,
            children: [(0, n.jsx)(o.FormSection, {
              className: a()(A.header),
              children: (0, n.jsx)(o.FormTitle, {
                tag: o.FormTitleTags.H1,
                children: O.Z.Messages.GUILD_SETTINGS_MEMBERS_SERVER_MEMBERS
              })
            }, "header"), (0, n.jsx)(o.FormSection, {
              children: (0, n.jsxs)("div", {
                className: a()(A.tableContainer),
                children: [(0, n.jsx)(m.Z, {
                  guild: t
                }), (0, n.jsx)(N.Z, {
                  guild: t
                }), p ? (0, n.jsxs)("div", {
                  className: a()(A.mainTableContainer),
                  children: [(0, n.jsx)(C.Z, {
                    guild: t,
                    ref: v
                  }), (0, n.jsx)(g.Z, {
                    guild: t,
                    searchState: Z,
                    compact: !0,
                    onSelectRow: f,
                    onResetForNewMembers: D
                  }), Z !== h.po.SUCCESS_STILL_INDEXING && (0, n.jsx)(x.Z, {
                    guildId: t.id
                  })]
                }) : (0, n.jsx)("div", {
                  className: a()(A.movedTable),
                  children: (0, n.jsxs)("div", {
                    className: a()(A.noResultsContainer),
                    children: [(0, n.jsx)("div", {
                      className: a()(A.__invalid_noResultsIconContainer),
                      children: (0, n.jsx)(R.Z, {})
                    }), (0, n.jsx)(o.Text, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: O.Z.Messages.GUILD_SETTINGS_SAFETY_MODERATION_EXPERIENCE_ENABLED.format({
                        onClick: e => {
                          if (null != t) e.preventDefault(), u.Z.close(), (0, T._X)(t.id)
                        }
                      })
                    })]
                  })
                })]
              })
            }, "body"), (0, n.jsx)(S.Z, {
              guildId: t.id
            })]
          })
        })
      })
    })
  })
}