s.d(n, {
    Z: function () {
        return E;
    }
});
var t = s(735250);
s(470079);
var i = s(481060),
    o = s(194359),
    l = s(906732),
    r = s(475413),
    a = s(261253),
    c = s(7242),
    d = s(934861),
    u = s(981631),
    I = s(689938),
    _ = s(9654);
function E(e) {
    let { isCurrentUser: n, user: s, relationshipType: E, friendToken: f, persistentCallCtaEnabled: x = !1, activeInviteToCallCtaEnabled: m = !1, onClose: Z } = e,
        { newestAnalyticsLocation: p } = (0, l.ZP)();
    if (n || E === u.OGo.BLOCKED) return null;
    let h = x
            ? (0, t.jsx)(a.Z, {
                  user: s,
                  onClose: Z
              })
            : null,
        S = (0, t.jsx)(c.Z, {
            user: s,
            onClose: Z
        });
    if (E === u.OGo.FRIEND && m && null != S)
        return (0, t.jsxs)('div', {
            className: _.multipleButtons,
            children: [
                (0, t.jsx)(d.v, {
                    userId: s.id,
                    onClose: Z
                }),
                S
            ]
        });
    if (E === u.OGo.FRIEND || s.bot)
        return (0, t.jsxs)('div', {
            className: _.multipleButtons,
            children: [
                h,
                (0, t.jsx)(d.c, {
                    userId: s.id,
                    onClose: Z
                })
            ]
        });
    if (E === u.OGo.PENDING_OUTGOING || E === u.OGo.PENDING_INCOMING)
        return m && null != S
            ? (0, t.jsxs)('div', {
                  className: _.multipleButtons,
                  children: [
                      (0, t.jsx)(r.ef, {
                          icon: i.UserClockIcon,
                          tooltipText: I.Z.Messages.FRIENDS_SECTION_PENDING,
                          disabled: !0
                      }),
                      (0, t.jsx)(d.v, {
                          userId: s.id,
                          onClose: Z
                      }),
                      S
                  ]
              })
            : (0, t.jsxs)('div', {
                  className: _.multipleButtons,
                  children: [
                      (0, t.jsx)(r.ef, {
                          icon: i.UserClockIcon,
                          tooltipText: I.Z.Messages.FRIENDS_SECTION_PENDING,
                          disabled: !0
                      }),
                      h,
                      (0, t.jsx)(d.c, {
                          userId: s.id,
                          onClose: Z
                      })
                  ]
              });
    return m && null != S
        ? (0, t.jsxs)('div', {
              className: _.multipleButtons,
              children: [
                  (0, t.jsx)(r.ef, {
                      action: 'SEND_FRIEND_REQUEST',
                      icon: i.UserPlusIcon,
                      tooltipText: I.Z.Messages.USER_PROFILE_ADD_FRIEND,
                      onClick: () => {
                          o.Z.addRelationship({
                              userId: s.id,
                              context: { location: p },
                              friendToken: f
                          });
                      }
                  }),
                  (0, t.jsx)(d.v, {
                      userId: s.id,
                      onClose: Z
                  }),
                  S
              ]
          })
        : (0, t.jsxs)('div', {
              className: _.multipleButtons,
              children: [
                  h,
                  (0, t.jsx)(d.v, {
                      userId: s.id,
                      onClose: Z
                  }),
                  (0, t.jsx)(r.tG, {
                      action: 'SEND_FRIEND_REQUEST',
                      icon: i.UserPlusIcon,
                      text: I.Z.Messages.USER_PROFILE_ADD_FRIEND,
                      color: i.Button.Colors.BRAND,
                      onClick: () => {
                          o.Z.addRelationship({
                              userId: s.id,
                              context: { location: p },
                              friendToken: f
                          });
                      }
                  })
              ]
          });
}
