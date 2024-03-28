"use strict";
n.r(t), n.d(t, {
  GuildDiscoveryMenuPopout: function() {
    return C
  },
  default: function() {
    return _
  }
});
var a = n("735250");
n("470079");
var s = n("442837"),
  l = n("481060"),
  i = n("239091"),
  r = n("299206"),
  o = n("726521"),
  u = n("430824"),
  d = n("496675"),
  c = n("795295"),
  f = n("556017"),
  E = n("981631"),
  h = n("689938");

function _(e) {
  let {
    guild: t,
    shiftId: n,
    onSelect: _,
    closePopout: C,
    "aria-label": m
  } = e, S = (0, r.default)({
    id: t.id,
    label: h.default.Messages.COPY_ID_GUILD,
    shiftId: n,
    onSuccess: C
  }), I = (0, s.useStateFromStores)([u.default], () => u.default.getGuild(t.id), [t.id]), p = (0, s.useStateFromStores)([d.default], () => d.default.can(E.Permissions.ADMINISTRATOR, I)), {
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
    "aria-label": null != m ? m : h.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
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
      children: S
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