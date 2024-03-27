"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  a = n("446674"),
  u = n("77078"),
  r = n("272030"),
  d = n("610174"),
  s = n("311340"),
  o = n("712125"),
  c = n("311161"),
  f = n("54346"),
  _ = n("100835"),
  A = n("305961"),
  D = n("49111"),
  I = n("782340");

function E(e, t) {
  let E = t === D.AppContext.POPOUT,
    S = (0, a.useStateFromStores)([A.default], () => A.default.getGuild(e), [e]),
    [m, M] = l.useState(!1),
    {
      showAlertMode: h
    } = (0, d.useGuildAlertModeEnabled)(e),
    p = (0, a.useStateFromStores)([f.default], () => null != S ? f.default.getGuildIncident(S.id) : null),
    R = (null == S ? void 0 : S.hasFeature(D.GuildFeatures.INVITES_DISABLED)) || h && (null == p ? void 0 : p.invitesDisabledUntil) != null && new Date(p.invitesDisabledUntil) > new Date,
    [b, v] = l.useState(R),
    T = async t => {
      if (!m && null != S) {
        M(!0);
        try {
          if (v(t), h) {
            if (t) {
              let t = {
                source: o.GuildIncidentActionSources.MESSAGE,
                alertType: (0, c.getIncidentAlertType)(p)
              };
              (0, u.openModalLazy)(async () => {
                let {
                  default: l
                } = await n.el("186638").then(n.bind(n, "186638"));
                return n => (0, i.jsx)(l, {
                  ...n,
                  guildId: e,
                  analyticsData: t
                })
              })
            } else await (0, s.setGuildIncidentActions)(S.id, !1, !1)
          } else await (0, _.setInvitesDisabled)(S, t)
        } catch (e) {
          v(!t)
        } finally {
          M(!1), (0, r.closeContextMenu)()
        }
      }
    };
  return E ? null : (0, i.jsx)(u.MenuCheckboxItem, {
    id: "pause-invites",
    label: I.default.Messages.DISABLE_INVITES,
    action: () => {
      T(!b)
    },
    checked: b
  })
}