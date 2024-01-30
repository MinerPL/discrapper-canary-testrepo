"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("669491"),
  r = s("77078"),
  o = s("70614"),
  d = s("686470"),
  u = s("167726"),
  c = s("956089"),
  S = s("306160"),
  E = s("701909"),
  f = s("773336"),
  T = s("50885"),
  m = s("845579"),
  _ = s("271445"),
  g = s("49111"),
  h = s("782340"),
  I = s("393149");

function N() {
  let [e] = n.useState(() => T.default.getEnableHardwareAcceleration()), t = m.DisableGamesTab.useSetting(), s = m.DeveloperMode.useSetting(), N = m.DisableHomeAutoNav.useSetting(), {
    hasLibraryApplication: p,
    testModeApplicationId: C
  } = (0, l.useStateFromStoresObject)([u.default, d.default], () => ({
    hasLibraryApplication: d.default.hasLibraryApplication(),
    testModeApplicationId: u.default.testModeApplicationId
  })), A = n.useCallback(e => {
    m.DisableGamesTab.updateSetting(!e)
  }, []), O = n.useCallback(e => {
    e ? (0, r.openModal)(e => (0, a.jsx)(_.default, {
      ...e
    })) : o.reset()
  }, []), x = n.useCallback(e => {
    (0, r.openModal)(t => (0, a.jsx)(r.ConfirmModal, {
      header: h.default.Messages.SWITCH_HARDWARE_ACCELERATION,
      confirmText: h.default.Messages.OKAY,
      cancelText: h.default.Messages.CANCEL,
      onConfirm: () => T.default.setEnableHardwareAcceleration(e),
      ...t,
      children: (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: h.default.Messages.SWITCH_HARDWARE_ACCELERATION_BODY
      })
    }))
  }, []), R = n.useCallback(e => {
    m.DisableHomeAutoNav.updateSetting(!e)
  }, []);
  return (0, a.jsxs)(r.FormSection, {
    tag: r.FormTitleTags.H1,
    title: h.default.Messages.SETTINGS_ADVANCED,
    children: [S.SUPPORTS_COPY && (0, a.jsx)(r.FormSwitch, {
      value: s,
      onChange: m.DeveloperMode.updateSetting,
      note: h.default.Messages.DEVELOPER_MODE_HELP_TEXT.format({
        apiDocsUrl: g.MarketingURLs.API_DOCS
      }),
      children: h.default.Messages.DEVELOPER_MODE
    }), f.isPlatformEmbedded && (0, a.jsx)(r.FormSwitch, {
      value: e,
      onChange: x,
      note: h.default.Messages.HARDWARE_ACCELERATION_HELP_TEXT,
      children: h.default.Messages.HARDWARE_ACCELERATION
    }), p && (0, a.jsx)(r.FormSwitch, {
      value: !t,
      onChange: A,
      note: h.default.Messages.USER_SETTINGS_SHOW_LIBRARY_NOTE,
      children: h.default.Messages.USER_SETTINGS_SHOW_LIBRARY
    }), s && (0, a.jsx)(r.FormSwitch, {
      value: null != C,
      note: h.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_NOTE,
      onChange: O,
      children: h.default.Messages.DEVELOPER_APPLICATION_TEST_MODE
    }), (0, a.jsx)(r.FormSwitch, {
      value: !N,
      note: h.default.Messages.USER_SETTINGS_HOME_AUTO_NAV_HELP_TEXT.format({
        helpCenterLink: E.default.getArticleURL(g.HelpdeskArticles.GUILD_HOME)
      }),
      onChange: R,
      children: (0, a.jsxs)("div", {
        className: I.badgedItem,
        children: [h.default.Messages.USER_SETTINGS_HOME_AUTO_NAV, (0, a.jsx)(c.TextBadge, {
          text: h.default.Messages.BETA,
          color: i.default.unsafe_rawColors.BRAND_500.css,
          className: I.betaTag
        })]
      })
    })]
  })
}