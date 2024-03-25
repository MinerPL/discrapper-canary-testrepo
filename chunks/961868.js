"use strict";
l.r(t), l.d(t, {
  default: function() {
    return p
  }
});
var a, s, n = l("37983"),
  o = l("884691"),
  i = l("733724"),
  r = l("77078"),
  d = l("812204"),
  u = l("712125"),
  C = l("311161"),
  c = l("928098"),
  m = l("619259"),
  E = l("181114"),
  f = l("45029"),
  M = l("561359"),
  h = l("782340"),
  _ = l("355851");

function T(e) {
  var t;
  let l = null !== (t = e.dmsDisabledUntil) && void 0 !== t ? t : e.invitesDisabledUntil;
  if (null == l) return "";
  let a = null != e.dmsDisabledUntil,
    s = null != e.invitesDisabledUntil;
  switch (!0) {
    case a && s:
      return h.default.Messages.MEMBER_SAFETY_DM_AND_INVITES_PAUSED_HEADER;
    case a:
      return h.default.Messages.MEMBER_SAFETY_DM_PAUSED_HEADER;
    case s:
      return h.default.Messages.MEMBER_SAFETY_INVITES_PAUSED_HEADER;
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
    className: _.subheaderContainer,
    children: [(0, n.jsxs)("div", {
      className: _.subHeaderTextContainer,
      children: [(0, n.jsx)(M.default, {
        className: _.shieldIcon,
        color: i.default.RED_345,
        width: 24,
        height: 24
      }), (0, n.jsxs)("div", {
        className: _.subHeaderText,
        children: [(0, n.jsx)(r.Heading, {
          className: _.heading,
          variant: "heading-lg/semibold",
          color: "text-danger",
          children: (0, C.hasDetectedDMRaid)(s) ? h.default.Messages.MEMBER_SAFETY_DM_RAID_ALERT_HEADER : h.default.Messages.MEMBER_SAFETY_JOIN_RAID_ALERT_HEADER
        }), (0, n.jsx)(r.Text, {
          className: _.tagLine,
          variant: "text-sm/medium",
          children: h.default.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_ACTION_DESCRIPTION.format({
            dateTime: new Date(null != o ? o : "").toLocaleString(h.default.getLocale(), C.DATE_CONFIG)
          })
        })]
      })]
    }), (0, n.jsxs)("div", {
      className: _.buttonContainer,
      children: [(0, n.jsx)(r.Button, {
        className: _.reportButton,
        color: r.Button.Colors.TRANSPARENT,
        onClick: a,
        children: (0, n.jsx)(r.Text, {
          variant: "text-sm/semibold",
          children: h.default.Messages.MEMBER_SAFETY_RESOLVE_RAID_ALERT_BUTTON
        })
      }), (0, n.jsx)(E.default, {
        className: _.lockdownButton,
        color: r.Button.Colors.RED,
        onClick: l,
        children: (0, n.jsxs)("div", {
          className: _.lockdownButtonInnerRaidDetected,
          children: [(0, n.jsx)(f.default, {
            className: _.lockIcon,
            width: 16,
            height: 16
          }), (0, n.jsx)(r.Text, {
            className: _.lockdownButtonText,
            variant: "text-sm/semibold",
            children: h.default.Messages.GUILD_ANTIRAID_NAGBAR_ACTION
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
    className: _.subheaderContainer,
    children: [(0, n.jsxs)("div", {
      className: _.subHeaderTextContainer,
      children: [(0, n.jsx)(M.default, {
        className: _.shieldIcon,
        color: i.default.BRAND_360,
        width: 24,
        height: 24
      }), (0, n.jsxs)("div", {
        className: _.subHeaderText,
        children: [(0, n.jsx)(r.Heading, {
          className: _.heading,
          variant: "heading-lg/semibold",
          color: "text-brand",
          children: T(l)
        }), (0, n.jsx)(r.Text, {
          className: _.tagLine,
          variant: "text-sm/medium",
          children: (0, C.getSecurityActionDetailsString)(l, a)
        })]
      })]
    }), (0, n.jsx)(r.Button, {
      className: _.lockdownNoticeButton,
      color: r.Button.Colors.BRAND,
      onClick: t,
      children: (0, n.jsxs)("div", {
        className: _.lockdownButtonInner,
        children: [(0, n.jsx)(f.default, {
          className: _.lockIcon,
          width: 16,
          height: 16
        }), (0, n.jsx)(r.Text, {
          className: _.lockdownButtonText,
          variant: "text-sm/semibold",
          children: h.default.Messages.GUILD_ANTIRAID_NAGBAR_EDIT_ACTION
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
    className: _.subheaderContainer,
    children: [(0, n.jsxs)("div", {
      className: _.subHeaderTextContainer,
      children: [(0, n.jsx)(M.default, {
        className: _.shieldIcon,
        color: i.default.BRAND_360,
        width: 24,
        height: 24
      }), (0, n.jsxs)("div", {
        className: _.subHeaderText,
        children: [(0, n.jsx)(r.Heading, {
          className: _.heading,
          variant: "heading-lg/semibold",
          color: "text-brand",
          children: T(a)
        }), (0, n.jsx)(r.Text, {
          className: _.tagLine,
          variant: "text-sm/medium",
          children: (0, C.getSecurityActionDetailsString)(a, s)
        })]
      })]
    }), (0, n.jsxs)("div", {
      className: _.buttonContainer,
      children: [(0, n.jsx)(r.Button, {
        className: _.reportButton,
        color: r.Button.Colors.TRANSPARENT,
        onClick: l,
        children: (0, n.jsx)(r.Text, {
          variant: "text-sm/semibold",
          children: h.default.Messages.MEMBER_SAFETY_RESOLVE_RAID_ALERT_BUTTON
        })
      }), (0, n.jsx)(r.Button, {
        className: _.lockdownButton,
        color: r.Button.Colors.BRAND,
        onClick: t,
        children: (0, n.jsxs)("div", {
          className: _.lockdownButtonInnerRaidDetected,
          children: [(0, n.jsx)(f.default, {
            className: _.lockIcon,
            width: 16,
            height: 16
          }), (0, n.jsx)(r.Text, {
            className: _.lockdownButtonText,
            variant: "text-sm/semibold",
            children: h.default.Messages.GUILD_ANTIRAID_NAGBAR_EDIT_ACTION
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
        } = await l.el("186638").then(l.bind(l, "186638"));
      return l => (0, n.jsx)(s, {
        ...l,
        guildId: t.id,
        analyticsData: e
      })
    })
  }, [t.id, a]), f = o.useCallback(() => {
    let e = m.default.getLastIncidentAlertMessage(t.id);
    (0, c.openRaidResolveModal)(e, t.id)
  }, [t.id]), M = (() => {
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
  switch (M) {
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