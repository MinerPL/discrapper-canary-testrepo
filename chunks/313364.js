n.d(t, {
  Z: function() {
return O;
  }
});
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(399606),
  o = n(481060),
  c = n(100527),
  d = n(906732),
  u = n(434404),
  _ = n(171368),
  I = n(430824),
  E = n(893966),
  T = n(527379),
  m = n(305473),
  N = n(113679),
  S = n(440857),
  h = n(472596),
  g = n(598948),
  C = n(428936),
  x = n(41586),
  p = n(918192),
  R = n(981631),
  f = n(689938),
  L = n(935135);

function O(e) {
  let {
guildId: t
  } = e, n = (0, l.e7)([I.Z], () => I.Z.getGuild(t)), {
analyticsLocations: i
  } = (0, d.ZP)(c.Z.GUILD_SETTINGS_MEMBERS_PAGE), O = !1 == !!(null == n ? void 0 : n.hasFeature(R.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), A = (0, l.e7)([E.Z], () => E.Z.getEstimatedMemberSearchCountByGuildId(t), [t]), M = a.useCallback(e => {
if (null != e)
  (0, _.openUserProfileModal)({
    userId: e.userId,
    guildId: e.guildId,
    sourceAnalyticsLocations: i,
    analyticsLocation: {
      section: R.jXE.GUILD_SETTINGS_MEMBERS
    }
  });
  }, [i]), D = a.useRef(null), v = a.useCallback(() => {
var e;
null === (e = D.current) || void 0 === e || e.resetSearchText();
  }, []);
  if (null == n)
return null;
  let j = (0, h.xb)(!1, !1, A);
  return (0, s.jsx)(d.Gt, {
value: i,
children: (0, s.jsx)('div', {
  className: L.settingsColumn,
  children: (0, s.jsx)('div', {
    className: L.settingsContainer,
    children: (0, s.jsx)(o.ScrollerAuto, {
      className: L.settingsScroller,
      orientation: 'auto',
      children: (0, s.jsxs)('main', {
        className: L.settingsContent,
        children: [
          (0, s.jsx)(o.FormSection, {
            className: r()(L.header),
            children: (0, s.jsx)(o.FormTitle, {
              tag: o.FormTitleTags.H1,
              children: f.Z.Messages.GUILD_SETTINGS_MEMBERS_SERVER_MEMBERS
            })
          }, 'header'),
          (0, s.jsx)(o.FormSection, {
            children: (0, s.jsxs)('div', {
              className: r()(L.tableContainer),
              children: [
                (0, s.jsx)(N.Z, {
                  guild: n
                }),
                (0, s.jsx)(m.Z, {
                  guild: n
                }),
                O ? (0, s.jsxs)('div', {
                  className: r()(L.mainTableContainer),
                  children: [
                    (0, s.jsx)(x.Z, {
                      guild: n,
                      ref: D
                    }),
                    (0, s.jsx)(g.Z, {
                      guild: n,
                      searchState: j,
                      compact: !0,
                      onSelectRow: M,
                      onResetForNewMembers: v
                    }),
                    j !== h.po.SUCCESS_STILL_INDEXING && (0, s.jsx)(C.Z, {
                      guildId: n.id
                    })
                  ]
                }) : (0, s.jsx)('div', {
                  className: r()(L.movedTable),
                  children: (0, s.jsxs)('div', {
                    className: r()(L.noResultsContainer),
                    children: [
                      (0, s.jsx)('div', {
                        className: r()(L.__invalid_noResultsIconContainer),
                        children: (0, s.jsx)(p.Z, {})
                      }),
                      (0, s.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        children: f.Z.Messages.GUILD_SETTINGS_SAFETY_MODERATION_EXPERIENCE_ENABLED.format({
                          onClick: e => {
                            if (null != n)
                              e.preventDefault(), u.Z.close(), (0, T._X)(n.id);
                          }
                        })
                      })
                    ]
                  })
                })
              ]
            })
          }, 'body'),
          (0, s.jsx)(S.Z, {
            guildId: n.id
          })
        ]
      })
    })
  })
})
  });
}