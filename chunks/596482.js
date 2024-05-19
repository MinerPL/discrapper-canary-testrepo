"use strict";
l.r(t), l.d(t, {
  default: function() {
    return p
  }
});
var a, s, n = l("735250"),
  o = l("470079"),
  i = l("722770"),
  r = l("481060"),
  d = l("100527"),
  u = l("666657"),
  C = l("533244"),
  c = l("226192"),
  m = l("223606"),
  E = l("976644"),
  f = l("630641"),
  _ = l("288176"),
  M = l("689938"),
  h = l("733837");

function T(e) {
  var t;
  if (null == (null !== (t = e.dmsDisabledUntil) && void 0 !== t ? t : e.invitesDisabledUntil)) return "";
  let l = null != e.dmsDisabledUntil,
    a = null != e.invitesDisabledUntil;
  switch (!0) {
    case l && a:
      return M.default.Messages.MEMBER_SAFETY_DM_AND_INVITES_PAUSED_HEADER;
    case l:
      return M.default.Messages.MEMBER_SAFETY_DM_PAUSED_HEADER;
    case a:
      return M.default.Messages.MEMBER_SAFETY_INVITES_PAUSED_HEADER;
    default:
      return ""
  }
}

function S(e) {
  var t;
  let {
    onHandleEnableLockdown: l,
    onHandleReportFalseAlarm: a,
    incidentData: s
  } = e, o = null !== (t = s.raidDetectedAt) && void 0 !== t ? t : s.dmSpamDetectedAt;
  return (0, n.jsxs)("div", {
    className: h.subheaderContainer,
    children: [(0, n.jsxs)("div", {
      className: h.subHeaderTextContainer,
      children: [(0, n.jsx)(_.default, {
        className: h.shieldIcon,
        color: i.default.RED_345,
        width: 24,
        height: 24
      }), (0, n.jsxs)("div", {
        className: h.subHeaderText,
        children: [(0, n.jsx)(r.Heading, {
          className: h.heading,
          variant: "heading-lg/semibold",
          color: "text-danger",
          children: (0, C.hasDetectedDMRaid)(s) ? M.default.Messages.MEMBER_SAFETY_DM_RAID_ALERT_HEADER : M.default.Messages.MEMBER_SAFETY_JOIN_RAID_ALERT_HEADER
        }), (0, n.jsx)(r.Text, {
          className: h.tagLine,
          variant: "text-sm/medium",
          children: M.default.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_ACTION_DESCRIPTION.format({
            dateTime: new Date(null != o ? o : "").toLocaleString(M.default.getLocale(), C.DATE_CONFIG)
          })
        })]
      })]
    }), (0, n.jsxs)("div", {
      className: h.buttonContainer,
      children: [(0, n.jsx)(r.Button, {
        className: h.reportButton,
        color: r.Button.Colors.TRANSPARENT,
        onClick: a,
        children: (0, n.jsx)(r.Text, {
          variant: "text-sm/semibold",
          children: M.default.Messages.MEMBER_SAFETY_RESOLVE_RAID_ALERT_BUTTON
        })
      }), (0, n.jsx)(E.default, {
        className: h.__invalid_lockdownButton,
        color: r.Button.Colors.RED,
        onClick: l,
        children: (0, n.jsxs)("div", {
          className: h.lockdownButtonInnerRaidDetected,
          children: [(0, n.jsx)(f.default, {
            className: h.lockIcon,
            width: 16,
            height: 16
          }), (0, n.jsx)(r.Text, {
            className: h.lockdownButtonText,
            variant: "text-sm/semibold",
            children: M.default.Messages.GUILD_ANTIRAID_NAGBAR_ACTION
          })]
        })
      })]
    })]
  })
}

function x(e) {
  let {
    onHandleEnableLockdown: t,
    incidentData: l,
    guildName: a
  } = e;
  return (0, n.jsxs)("div", {
    className: h.subheaderContainer,
    children: [(0, n.jsxs)("div", {
      className: h.subHeaderTextContainer,
      children: [(0, n.jsx)(_.default, {
        className: h.shieldIcon,
        color: i.default.BRAND_360,
        width: 24,
        height: 24
      }), (0, n.jsxs)("div", {
        className: h.subHeaderText,
        children: [(0, n.jsx)(r.Heading, {
          className: h.heading,
          variant: "heading-lg/semibold",
          color: "text-brand",
          children: T(l)
        }), (0, n.jsx)(r.Text, {
          className: h.tagLine,
          variant: "text-sm/medium",
          children: (0, C.getSecurityActionDetailsString)(l, a)
        })]
      })]
    }), (0, n.jsx)(r.Button, {
      className: h.lockdownNoticeButton,
      color: r.Button.Colors.BRAND,
      onClick: t,
      children: (0, n.jsxs)("div", {
        className: h.lockdownButtonInner,
        children: [(0, n.jsx)(f.default, {
          className: h.lockIcon,
          width: 16,
          height: 16
        }), (0, n.jsx)(r.Text, {
          className: h.lockdownButtonText,
          variant: "text-sm/semibold",
          children: M.default.Messages.GUILD_ANTIRAID_NAGBAR_EDIT_ACTION
        })]
      })
    })]
  })
}

function A(e) {
  let {
    onHandleEnableLockdown: t,
    onHandleReportFalseAlarm: l,
    incidentData: a,
    guildName: s
  } = e;
  return (0, n.jsxs)("div", {
    className: h.subheaderContainer,
    children: [(0, n.jsxs)("div", {
      className: h.subHeaderTextContainer,
      children: [(0, n.jsx)(_.default, {
        className: h.shieldIcon,
        color: i.default.BRAND_360,
        width: 24,
        height: 24
      }), (0, n.jsxs)("div", {
        className: h.subHeaderText,
        children: [(0, n.jsx)(r.Heading, {
          className: h.heading,
          variant: "heading-lg/semibold",
          color: "text-brand",
          children: T(a)
        }), (0, n.jsx)(r.Text, {
          className: h.tagLine,
          variant: "text-sm/medium",
          children: (0, C.getSecurityActionDetailsString)(a, s)
        })]
      })]
    }), (0, n.jsxs)("div", {
      className: h.buttonContainer,
      children: [(0, n.jsx)(r.Button, {
        className: h.reportButton,
        color: r.Button.Colors.TRANSPARENT,
        onClick: l,
        children: (0, n.jsx)(r.Text, {
          variant: "text-sm/semibold",
          children: M.default.Messages.MEMBER_SAFETY_RESOLVE_RAID_ALERT_BUTTON
        })
      }), (0, n.jsx)(r.Button, {
        className: h.__invalid_lockdownButton,
        color: r.Button.Colors.BRAND,
        onClick: t,
        children: (0, n.jsxs)("div", {
          className: h.lockdownButtonInnerRaidDetected,
          children: [(0, n.jsx)(f.default, {
            className: h.lockIcon,
            width: 16,
            height: 16
          }), (0, n.jsx)(r.Text, {
            className: h.lockdownButtonText,
            variant: "text-sm/semibold",
            children: M.default.Messages.GUILD_ANTIRAID_NAGBAR_EDIT_ACTION
          })]
        })
      })]
    })]
  })
}

function p(e) {
  let {
    guild: t,
    incidentData: a,
    isUnderLockdown: s,
    isRaidDetected: i
  } = e, E = o.useCallback(() => {
    (0, r.openModalLazy)(async () => {
      let e = {
          source: u.GuildIncidentActionSources.MEMBER_SAFETY_PAGE,
          location: d.default.MEMBER_SAFETY_PAGE,
          alertType: (0, C.getIncidentAlertType)(a)
        },
        {
          default: s
        } = await Promise.all([l.e("99387"), l.e("58448")]).then(l.bind(l, "664452"));
      return l => (0, n.jsx)(s, {
        ...l,
        guildId: t.id,
        analyticsData: e
      })
    })
  }, [t.id, a]), f = o.useCallback(() => {
    let e = m.default.getLastIncidentAlertMessage(t.id);
    (0, c.openRaidResolveModal)(e, t.id)
  }, [t.id]), _ = (() => {
    switch (!0) {
      case i && s:
        return 3;
      case i:
        return 1;
      case s:
        return 2;
      default:
        return 0
    }
  })();
  if (null == t || null == a) return null;
  switch (_) {
    case 1:
      return (0, n.jsx)(S, {
        onHandleEnableLockdown: E,
        onHandleReportFalseAlarm: f,
        incidentData: a
      });
    case 2:
      return (0, n.jsx)(x, {
        onHandleEnableLockdown: E,
        incidentData: a,
        guildName: t.name
      });
    case 3:
      return (0, n.jsx)(A, {
        onHandleEnableLockdown: E,
        onHandleReportFalseAlarm: f,
        incidentData: a,
        guildName: t.name
      });
    default:
      return null
  }
}(a = s || (s = {}))[a.DEFAULT = 0] = "DEFAULT", a[a.RAID_DETECTED = 1] = "RAID_DETECTED", a[a.LOCKDOWN_ENABLED = 2] = "LOCKDOWN_ENABLED", a[a.RAID_DETECTED_LOCKDOWN_ENABLED = 3] = "RAID_DETECTED_LOCKDOWN_ENABLED"