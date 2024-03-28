"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("241559"),
  o = n("527379"),
  u = n("430824"),
  d = n("944486"),
  c = n("914010"),
  f = n("346656"),
  E = n("630641"),
  _ = n("644766"),
  T = n("626135"),
  m = n("528011"),
  I = n("666657"),
  p = n("533244"),
  h = n("981631"),
  N = n("176505"),
  S = n("689938"),
  C = n("515320");

function A(e) {
  var t, A;
  let {
    onDismiss: g
  } = e, M = (0, l.useStateFromStores)([c.default], () => c.default.getGuildId()), R = (0, l.useStateFromStores)([d.default], () => null != M ? d.default.getChannelId(M) : null, [M]), O = null != M ? M : null, v = (0, l.useStateFromStores)([u.default], () => null != O ? u.default.getGuild(O) : null, [O]), {
    shouldShowIncidentActions: L,
    incidentData: x,
    isUnderLockdown: D
  } = (0, m.useGuildIncidentsState)(O), P = (0, r.useCanAccessMemberSafetyPage)(null !== (t = null == v ? void 0 : v.id) && void 0 !== t ? t : h.EMPTY_STRING_SNOWFLAKE_ID), y = a.useCallback(() => null != v && (0, o.goToMemberSafetyDashboard)(v.id), [v]);
  if (null == v || null == x || !L) return null;
  let U = e => {
      if (e && P && R !== N.StaticChannelRoute.MEMBER_SAFETY && y()) {
        T.default.track(h.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
          notice_type: h.NoticeTypes.GUILD_RAID_NOTIFICATION,
          guild_id: v.id
        });
        return
      }(0, i.openModalLazy)(async () => {
        let e = {
            source: I.GuildIncidentActionSources.NAGBAR,
            alertType: (0, p.getIncidentAlertType)(x)
          },
          {
            default: t
          } = await Promise.all([n.e("99387"), n.e("61536")]).then(n.bind(n, "664452"));
        return n => (0, s.jsx)(t, {
          ...n,
          guildId: v.id,
          analyticsData: e
        })
      })
    },
    b = (0, s.jsx)(f.default, {
      className: C.guildIcon,
      guild: v,
      size: f.default.Sizes.MINI
    }),
    j = (0, p.getSecurityActionDetailsString)(x, v.name);
  if (null != (null !== (A = x.dmsDisabledUntil) && void 0 !== A ? A : x.invitesDisabledUntil) && D) return (0, s.jsxs)(_.default, {
    className: C.notice,
    color: _.NoticeColors.NEUTRAL,
    children: [(0, s.jsx)(_.NoticeCloseButton, {
      onClick: g,
      noticeType: h.NoticeTypes.GUILD_RAID_NOTIFICATION
    }), b, j, (0, s.jsx)(_.NoticeButton, {
      className: C.actionButton,
      onClick: () => U(!1),
      children: (0, s.jsxs)("div", {
        className: C.actionButtonInner,
        children: [(0, s.jsx)(E.default, {
          width: 16,
          height: 16
        }), (0, s.jsx)("span", {
          children: S.default.Messages.GUILD_ANTIRAID_LOCKDOWN_NAGBAR_ACTION
        })]
      })
    })]
  });
  let G = (0, p.hasDetectedRaid)(x) ? S.default.Messages.GUILD_ANTIRAID_NAGBAR_RAID_MESSAGE_2_NEW.format({
      guildName: v.name
    }) : (0, p.hasDetectedDMRaid)(x) ? S.default.Messages.GUILD_ANTIRAID_NAGBAR_DM_RAID_MESSAGE_2_NEW.format({
      guildName: v.name
    }) : S.default.Messages.GUILD_ANTIRAID_NAGBAR_MESSAGE_2_NEW.format({
      guildName: v.name
    }),
    B = P && R === N.StaticChannelRoute.MEMBER_SAFETY;
  return (0, s.jsxs)(_.default, {
    className: C.notice,
    color: _.NoticeColors.WARNING,
    children: [(0, s.jsx)(_.NoticeCloseButton, {
      onClick: g,
      noticeType: h.NoticeTypes.GUILD_RAID_NOTIFICATION
    }), b, G, !B && (0, s.jsx)(_.NoticeButton, {
      className: C.actionButton,
      onClick: () => U(!0),
      children: (0, s.jsx)("div", {
        className: C.actionButtonInner,
        children: (0, s.jsx)("span", {
          children: S.default.Messages.GUILD_ANTIRAID_NAGBAR_ACTION_VIEW
        })
      })
    })]
  })
}