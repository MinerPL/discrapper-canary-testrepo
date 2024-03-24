"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("77078"),
  r = n("438931"),
  o = n("845579"),
  u = n("577427"),
  d = n("145131"),
  c = n("945330"),
  f = n("599110"),
  E = n("568734"),
  h = n("602043"),
  _ = n("737295"),
  C = n("762448"),
  S = n("49111"),
  I = n("782340"),
  m = n("72711");

function p(e) {
  let {
    applicationViewItems: t,
    restoreApplication: n
  } = e;
  if (0 === t.length) return null;
  let s = t.map(e => {
    let t = e.libraryApplication.getDistributor();
    return (0, a.jsxs)("div", {
      className: m.hiddenLibraryApplication,
      children: [(0, a.jsxs)(d.default, {
        direction: d.default.Direction.VERTICAL,
        className: m.hiddenLibraryApplicationContent,
        children: [(0, a.jsx)("div", {
          className: m.applicationName,
          children: e.libraryApplication.getBranchedName(e.application)
        }), null != t ? (0, a.jsx)("div", {
          className: m.applicationSubText,
          children: S.DistributorNames[t]
        }) : null]
      }), (0, a.jsx)(i.Clickable, {
        className: m.restoreButton,
        onClick: () => n(e.libraryApplication),
        children: (0, a.jsx)(c.default, {
          className: m.restoreIcon
        })
      })]
    }, e.key)
  });
  return (0, a.jsxs)(i.FormSection, {
    className: m.hiddenLibraryApplications,
    children: [(0, a.jsx)(i.FormTitle, {
      className: m.hiddenLibraryApplicationsTitle,
      children: I.default.Messages.SETTINGS_GAMES_HIDDEN_LIBRARY_APPLICATIONS_LABEL
    }), s]
  })
}
class T extends s.PureComponent {
  handleToggleShortcutDesktop(e) {
    o.InstallShortcutDesktop.updateSetting(e)
  }
  handleToggleShortcutStartMenu(e) {
    o.InstallShortcutStartMenu.updateSetting(e)
  }
  trackRestoreApplication(e, t) {
    f.default.track(S.AnalyticEvents.APPLICATION_SETTINGS_UPDATED, {
      hidden_enabled: t,
      ...e.getAnalyticsData()
    })
  }
  renderBody() {
    let {
      hiddenLibraryApplicationViewItems: e,
      installShortcutDesktop: t,
      installShortcutStartMenu: n
    } = this.props;
    return (0, a.jsxs)("div", {
      className: m.body,
      children: [(0, h.isSupportedPlatform)() ? (0, a.jsxs)(s.Fragment, {
        children: [(0, a.jsx)(i.FormSwitch, {
          value: t,
          onChange: this.handleToggleShortcutDesktop,
          note: I.default.Messages.USER_SETTINGS_GAMES_SHORTCUTS_DESKTOP_NOTE,
          children: I.default.Messages.USER_SETTINGS_GAMES_SHORTCUTS_DESKTOP
        }), (0, a.jsx)(i.FormSwitch, {
          value: n,
          onChange: this.handleToggleShortcutStartMenu,
          note: I.default.Messages.USER_SETTINGS_GAMES_SHORTCUTS_START_MENU_NOTE,
          children: I.default.Messages.USER_SETTINGS_GAMES_SHORTCUTS_START_MENU
        }), (0, a.jsx)(C.default, {})]
      }) : null, (0, a.jsx)(p, {
        restoreApplication: this.handleRestoreHiddenLibraryApplication,
        applicationViewItems: e
      })]
    })
  }
  render() {
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(_.default, {
        currentRoute: S.Routes.APPLICATION_LIBRARY_SETTINGS
      }), (0, a.jsx)(i.ScrollerAuto, {
        className: m.scroller,
        children: this.renderBody()
      })]
    })
  }
  constructor(...e) {
    super(...e), this.handleRestoreHiddenLibraryApplication = e => {
      let t = E.toggleFlag(e.getFlags(), S.LibraryApplicationFlags.HIDDEN);
      r.updateFlags(e.id, e.branchId, t), this.trackRestoreApplication(e, E.hasFlag(t, S.LibraryApplicationFlags.HIDDEN))
    }
  }
}

function g() {
  let e = {
    installShortcutDesktop: o.InstallShortcutDesktop.useSetting(),
    installShortcutStartMenu: o.InstallShortcutStartMenu.useSetting(),
    hiddenLibraryApplicationViewItems: (0, l.useStateFromStores)([u.default], () => u.default.hiddenLibraryApplicationViewItems)
  };
  return (0, a.jsx)(T, {
    ...e
  })
}