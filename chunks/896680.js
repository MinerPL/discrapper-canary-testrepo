"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("47120");
var u = n("735250"),
  l = n("470079"),
  a = n("442837"),
  i = n("481060"),
  d = n("239091"),
  r = n("154285"),
  s = n("369994"),
  o = n("666657"),
  c = n("533244"),
  f = n("487419"),
  I = n("965638"),
  p = n("430824"),
  _ = n("981631"),
  E = n("689938");

function T(e, t) {
  let T = t === _.AppContext.POPOUT,
    A = (0, a.useStateFromStores)([p.default], () => p.default.getGuild(e), [e]),
    [R, M] = l.useState(!1),
    {
      showAlertMode: S
    } = (0, r.useGuildAlertModeEnabled)(e),
    D = (0, a.useStateFromStores)([f.default], () => null != A ? f.default.getGuildIncident(A.id) : null),
    v = (null == A ? void 0 : A.hasFeature(_.GuildFeatures.INVITES_DISABLED)) || S && (null == D ? void 0 : D.invitesDisabledUntil) != null && new Date(D.invitesDisabledUntil) > new Date,
    [y, G] = l.useState(v),
    h = async t => {
      if (!R && null != A) {
        M(!0);
        try {
          if (G(t), S) {
            if (t) {
              let t = {
                source: o.GuildIncidentActionSources.MESSAGE,
                alertType: (0, c.getIncidentAlertType)(D)
              };
              (0, i.openModalLazy)(async () => {
                let {
                  default: l
                } = await Promise.all([n.e("99387"), n.e("58175")]).then(n.bind(n, "664452"));
                return n => (0, u.jsx)(l, {
                  ...n,
                  guildId: e,
                  analyticsData: t
                })
              })
            } else await (0, s.setGuildIncidentActions)(A.id, !1, !1)
          } else await (0, I.setInvitesDisabled)(A, t)
        } catch (e) {
          G(!t)
        } finally {
          M(!1), (0, d.closeContextMenu)()
        }
      }
    };
  return T ? null : (0, u.jsx)(i.MenuCheckboxItem, {
    id: "pause-invites",
    label: E.default.Messages.DISABLE_INVITES,
    action: () => {
      h(!y)
    },
    checked: y
  })
}