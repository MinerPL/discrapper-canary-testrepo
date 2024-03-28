"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var a = s("735250");
s("470079");
var n = s("803997"),
  l = s.n(n),
  i = s("442837"),
  r = s("481060"),
  o = s("223245"),
  d = s("230711"),
  u = s("579806"),
  c = s("246946"),
  S = s("358085"),
  E = s("981631"),
  T = s("689938"),
  _ = s("665084"),
  f = s("794711");

function m() {
  var e, t, n;
  let {
    enabled: m,
    autoToggle: g,
    hideInstantInvites: h,
    hidePersonalInformation: N,
    disableSounds: I,
    disableNotifications: p,
    enableContentProtection: C
  } = (0, i.useStateFromStoresObject)([c.default], () => ({
    ...c.default.getSettings()
  })), A = (e, t) => {
    o.default.update({
      [e]: t
    })
  }, O = null !== (n = null === u.default || void 0 === u.default ? void 0 : null === (t = u.default.window) || void 0 === t ? void 0 : null === (e = t.supportsContentProtection) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n && n;
  return (0, a.jsxs)(r.FormSection, {
    className: _.container,
    tag: r.FormTitleTags.H1,
    title: T.default.Messages.STREAMER_MODE,
    children: [(0, a.jsx)(r.FormNotice, {
      className: f.marginBottom40,
      iconClassName: _.noticeIcon,
      type: r.FormNoticeTypes.PRIMARY,
      imageData: {
        src: s("560264"),
        width: 184,
        height: 110,
        position: r.FormNoticeImagePositions.RIGHT
      },
      title: T.default.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE,
      body: T.default.Messages.USER_SETTINGS_STREAMER_NOTICE_BODY.format({
        streamkitURL: E.MarketingURLs.STREAMKIT
      })
    }), (0, a.jsx)(r.FormSwitch, {
      value: m,
      onChange: e => A("enabled", e),
      note: T.default.Messages.ENABLE_STREAMER_MODE_DESCRIPTION.format({
        onClick: () => {
          d.default.setSection(E.UserSettingsSections.KEYBINDS)
        }
      }),
      children: T.default.Messages.ENABLE_STREAMER_MODE_LABEL
    }), (() => {
      if (S.isPlatformEmbedded) return (0, a.jsx)(r.FormSwitch, {
        value: g,
        onChange: e => A("autoToggle", e),
        note: T.default.Messages.AUTO_TOGGLE_STREAMER_MODE_DESCRIPTION,
        children: T.default.Messages.AUTO_TOGGLE_STREAMER_MODE_LABEL
      })
    })(), (0, a.jsx)(r.FormTitle, {
      className: l()(f.marginTop40, f.marginBottom8),
      children: T.default.Messages.OPTIONS
    }), (0, a.jsx)(r.FormSwitch, {
      value: N,
      onChange: e => A("hidePersonalInformation", e),
      note: T.default.Messages.HIDE_PERSONAL_INFORMATION_DESCRIPTION,
      children: T.default.Messages.HIDE_PERSONAL_INFORMATION_LABEL
    }), (0, a.jsx)(r.FormSwitch, {
      value: h,
      onChange: e => A("hideInstantInvites", e),
      note: T.default.Messages.HIDE_INSTANT_INVITES_DESCRIPTION,
      children: T.default.Messages.HIDE_INSTANT_INVITES_LABEL
    }), (0, a.jsx)(r.FormSwitch, {
      value: I,
      onChange: e => A("disableSounds", e),
      note: T.default.Messages.DISABLE_SOUNDS_DESCRIPTION,
      children: T.default.Messages.DISABLE_SOUNDS_LABEL
    }), (0, a.jsx)(r.FormSwitch, {
      value: p,
      onChange: e => A("disableNotifications", e),
      note: T.default.Messages.DISABLE_NOTIFICATIONS_DESCRIPTION,
      children: T.default.Messages.DISABLE_NOTIFICATIONS_LABEL
    }), O && (0, a.jsx)(r.FormSwitch, {
      value: C,
      onChange: e => A("enableContentProtection", e),
      note: T.default.Messages.HIDE_WINDOW_FROM_STREAM_DESCRIPTION,
      children: T.default.Messages.HIDE_WINDOW_FROM_STREAM_LABEL
    })]
  })
}