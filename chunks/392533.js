"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  },
  GuildDiscoveryMenuPopout: function() {
    return C
  }
});
var a = n("37983");
n("884691");
var s = n("446674"),
  l = n("77078"),
  i = n("272030"),
  r = n("861370"),
  o = n("377114"),
  u = n("305961"),
  d = n("957255"),
  c = n("907566"),
  f = n("378662"),
  E = n("49111"),
  h = n("782340");

function _(e) {
  let {
    guild: t,
    shiftId: n,
    onSelect: _,
    closePopout: C,
    "aria-label": S
  } = e, I = (0, r.default)({
    id: t.id,
    label: h.default.Messages.COPY_ID_GUILD,
    shiftId: n,
    onSuccess: C
  }), m = (0, s.useStateFromStores)([u.default], () => u.default.getGuild(t.id), [t.id]), p = (0, s.useStateFromStores)([d.default], () => d.default.can(E.Permissions.ADMINISTRATOR, m)), {
    canSeeInAppReportingButtons: T
  } = f.DiscoveryInAppReportingExperiment.useExperiment({
    location: "0e35b9_1"
  }, {
    autoTrackExposure: !1
  }), g = () => {
    (0, i.closeContextMenu)(), null == C || C()
  };
  return (0, a.jsxs)(l.Menu, {
    onSelect: _,
    navId: "guild-discovery-context-menu",
    "aria-label": null != S ? S : h.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: i.closeContextMenu,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: !p && T ? (0, a.jsx)(l.MenuItem, {
        id: "report-guild-discovery-listing",
        label: h.default.Messages.REPORT_SERVER_NO_NAME,
        action: () => {
          (0, o.showReportModalForDiscoverableGuild)(t), g()
        },
        icon: c.default,
        color: "danger"
      }) : null
    }), (0, a.jsx)(l.MenuGroup, {
      children: I
    })]
  })
}
let C = e => {
  let {
    guild: t,
    children: n,
    onRequestOpen: s,
    onRequestClose: i
  } = e;
  return (0, a.jsx)(l.Popout, {
    onRequestOpen: s,
    onRequestClose: i,
    animation: l.Popout.Animation.NONE,
    position: "bottom",
    spacing: 4,
    align: "right",
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, a.jsx)(_, {
        guild: t,
        closePopout: n
      })
    },
    children: n
  })
}