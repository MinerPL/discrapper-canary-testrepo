n.r(t),
    n.d(t, {
        default: function () {
            return j;
        }
    });
var s = n(200651);
n(192379);
var o = n(442837),
    i = n(481060),
    l = n(231757),
    a = n(511010),
    r = n(553795),
    d = n(430824),
    c = n(979192),
    u = n(647529),
    x = n(463031),
    m = n(981631),
    h = n(388032),
    g = n(97741);
function j(e) {
    let { guildId: t, ...n } = e,
        l = (0, o.e7)([d.Z], () => d.Z.getGuild(t));
    return null == l
        ? null
        : (0, s.jsx)(u.Z, {
              guildId: t,
              title: h.intl.string(h.t['WWBw5+']),
              ...n,
              children: (0, s.jsxs)(i.ModalContent, {
                  className: g.modalContent,
                  children: [
                      (0, s.jsxs)('div', {
                          className: g.subtitleContainer,
                          children: [
                              (0, s.jsx)(i.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  children: h.intl.string(h.t.OBuzJi)
                              }),
                              (0, s.jsx)(i.LeagueOfLegendsBrandIcon, { size: 'xs' })
                          ]
                      }),
                      (0, s.jsxs)('div', {
                          className: g.notes,
                          children: [(0, s.jsx)(p, {}), (0, s.jsx)(i.Spacer, { size: 4 }), (0, s.jsx)(a.Z, { className: g.divider }), null != l && (0, s.jsx)(B, { guild: l })]
                      })
                  ]
              })
          });
}
function p() {
    return (0, s.jsxs)('div', {
        className: g.row,
        children: [
            (0, s.jsx)(i.Text, {
                variant: 'text-md/medium',
                children: h.intl.string(h.t.PL48CA)
            }),
            (0, s.jsx)(f, {})
        ]
    });
}
function f() {
    return null != (0, o.e7)([r.Z], () => r.Z.getAccount(null, m.ABu.RIOT_GAMES))
        ? (0, s.jsxs)(i.Button, {
              disabled: !0,
              color: i.Button.Colors.TRANSPARENT,
              look: i.Button.Looks.OUTLINED,
              innerClassName: g.doneButton,
              children: [
                  (0, s.jsx)(i.CheckmarkSmallIcon, {}),
                  (0, s.jsx)(i.Text, {
                      variant: 'text-sm/medium',
                      children: h.intl.string(h.t.i4jeWV)
                  })
              ]
          })
        : (0, s.jsx)(i.Button, {
              onClick: () => (0, l.Z)({ platformType: m.ABu.RIOT_GAMES }),
              size: i.Button.Sizes.SMALL,
              color: i.Button.Colors.PRIMARY,
              children: h.intl.string(h.t.To26Nj)
          });
}
function B(e) {
    let { guild: t } = e,
        { leaderboardsDisabled: n, toggleGuildLeaderboardsDisabled: o } = (0, c.O)(t.id, x._);
    return (0, s.jsx)(i.FormSwitch, {
        hideBorder: !0,
        onChange: o,
        value: !n,
        className: g.guildOptoutSwitch,
        children: h.intl.string(h.t.eZhXQU)
    });
}
