"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
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
  T = s("773336"),
  f = s("50885"),
  _ = s("845579"),
  m = s("271445"),
  g = s("49111"),
  h = s("782340"),
  N = s("26423");

function I() {
  let [e] = n.useState(() => f.default.getEnableHardwareAcceleration()), t = _.DisableGamesTab.useSetting(), s = _.DeveloperMode.useSetting(), I = _.DisableHomeAutoNav.useSetting(), {
    hasLibraryApplication: p,
    testModeApplicationId: C
  } = (0, l.useStateFromStoresObject)([u.default, d.default], () => ({
    hasLibraryApplication: d.default.hasLibraryApplication(),
    testModeApplicationId: u.default.testModeApplicationId
  })), A = n.useCallback(e => {
    _.DisableGamesTab.updateSetting(!e)
  }, []), O = n.useCallback(e => {
    e ? (0, r.openModal)(e => (0, a.jsx)(m.default, {
      ...e
    })) : o.reset()
  }, []), x = n.useCallback(e => {
    (0, r.openModal)(t => (0, a.jsx)(r.ConfirmModal, {
      header: h.default.Messages.SWITCH_HARDWARE_ACCELERATION,
      confirmText: h.default.Messages.OKAY,
      cancelText: h.default.Messages.CANCEL,
      onConfirm: () => f.default.setEnableHardwareAcceleration(e),
      ...t,
      children: (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: h.default.Messages.SWITCH_HARDWARE_ACCELERATION_BODY
      })
    }))
  }, []), R = n.useCallback(e => {
    _.DisableHomeAutoNav.updateSetting(!e)
  }, []);
  return (0, a.jsxs)(r.FormSection, {
    tag: r.FormTitleTags.H1,
    title: h.default.Messages.SETTINGS_ADVANCED,
    children: [S.SUPPORTS_COPY && (0, a.jsx)(r.FormSwitch, {
      value: s,
      onChange: _.DeveloperMode.updateSetting,
      note: h.default.Messages.DEVELOPER_MODE_HELP_TEXT.format({
        apiDocsUrl: g.MarketingURLs.API_DOCS
      }),
      children: h.default.Messages.DEVELOPER_MODE
    }), T.isPlatformEmbedded && (0, a.jsx)(r.FormSwitch, {
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
      value: !I,
      note: h.default.Messages.USER_SETTINGS_HOME_AUTO_NAV_HELP_TEXT.format({
        helpCenterLink: E.default.getArticleURL(g.HelpdeskArticles.GUILD_HOME)
      }),
      onChange: R,
      children: (0, a.jsxs)("div", {
        className: N.badgedItem,
        children: [h.default.Messages.USER_SETTINGS_HOME_AUTO_NAV, (0, a.jsx)(c.TextBadge, {
          text: h.default.Messages.BETA,
          color: i.default.unsafe_rawColors.BRAND_500.css,
          className: N.betaTag
        })]
      })
    })]
  })
}