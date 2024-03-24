"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
}), s("222007");
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("9759"),
  i = s("395635"),
  r = s("162236"),
  o = s("305961"),
  d = s("701909"),
  u = s("773336"),
  c = s("299039"),
  S = s("845579"),
  E = s("49111"),
  T = s("782340"),
  f = s("436557"),
  _ = s("890957");

function m() {
  let e = S.ShowCurrentGame.useSetting(),
    t = S.DefaultGuildsActivityRestricted.useSetting(),
    s = u.isPlatformEmbedded ? T.default.Messages.SHOW_CURRENT_ACTIVITY_DESC_EMBEDDED : T.default.Messages.SHOW_CURRENT_ACTIVITY_DESC,
    l = e => {
      S.DefaultGuildsActivityRestricted.updateSetting(e), ! function(e) {
        let t = () => {
          S.ActivityRestrictedGuilds.updateSetting(e ? c.default.keys(o.default.getGuilds()) : [])
        };
        (0, n.openModal)(e => (0, a.jsx)(n.ConfirmModal, {
          header: T.default.Messages.USER_DM_SETTINGS_TITLE,
          confirmText: T.default.Messages.NO_TEXT,
          cancelText: T.default.Messages.YES_TEXT,
          onCancel: t,
          confirmButtonColor: n.Button.Colors.BRAND,
          ...e,
          children: (0, a.jsx)(n.Text, {
            variant: "text-md/normal",
            children: T.default.Messages.ACTIVITY_RESTRICTION_MODAL_DESC
          })
        }))
      }(e)
    };
  return (0, a.jsxs)(n.FormSection, {
    className: _.marginBottom40,
    children: [(0, a.jsx)(n.FormTitle, {
      tag: n.FormTitleTags.H5,
      className: _.marginBottom8,
      children: T.default.Messages.ACTIVITY_STATUS
    }), (0, a.jsx)(n.FormSwitch, {
      value: e,
      onChange: e => S.ShowCurrentGame.updateSetting(e),
      note: s,
      children: T.default.Messages.SHOW_CURRENT_ACTIVITY
    }), (0, a.jsx)(n.FormSwitch, {
      value: !t,
      note: T.default.Messages.ACTIVITY_RESTRICTION_DEFAULT_NOTE.format({
        helpdeskArticle: d.default.getArticleURL(E.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
      }),
      onChange: e => l(!e),
      children: T.default.Messages.ACTIVITY_RESTRICTION_DEFAULT
    })]
  })
}

function g() {
  let e = S.AllowActivityPartyPrivacyFriends.useSetting(),
    t = S.AllowActivityPartyPrivacyVoiceChannel.useSetting();
  return (0, a.jsxs)(n.FormSection, {
    className: _.marginBottom40,
    children: [(0, a.jsx)(n.FormTitle, {
      tag: n.FormTitleTags.H5,
      className: _.marginBottom8,
      children: T.default.Messages.ACTIVITY_PARTY_PRIVACY
    }), (0, a.jsx)(n.FormSwitch, {
      value: e,
      note: T.default.Messages.ACTIVITY_PARTY_PRIVACY_FRIENDS_HELP,
      onChange: e => S.AllowActivityPartyPrivacyFriends.updateSetting(e),
      children: T.default.Messages.ACTIVITY_PARTY_PRIVACY_FRIENDS
    }), (0, a.jsx)(n.FormSwitch, {
      value: t,
      note: T.default.Messages.ACTIVITY_PARTY_PRIVACY_VOICE_CHANNEL_HELP,
      onChange: e => S.AllowActivityPartyPrivacyVoiceChannel.updateSetting(e),
      children: T.default.Messages.ACTIVITY_PARTY_PRIVACY_VOICE_CHANNEL
    })]
  })
}

function h() {
  return (0, a.jsxs)(n.FormSection, {
    className: _.marginBottom40,
    children: [(0, a.jsxs)(n.FormTitle, {
      tag: n.FormTitleTags.H5,
      className: _.marginBottom8,
      children: [T.default.Messages.BROADCASTING_SETTINGS, (0, a.jsx)(i.default, {
        className: f.betaTag
      })]
    }), (0, a.jsx)(n.FormText, {
      type: n.FormText.Types.DESCRIPTION,
      className: _.marginBottom20,
      children: T.default.Messages.BROADCASTING_SETTINGS_DESCRIPTION
    }), (0, a.jsx)(n.FormItem, {
      children: (0, a.jsx)(n.Button, {
        onClick: () => (0, r.openBroadcastingPrivacySettingsModal)(),
        size: n.ButtonSizes.SMALL,
        children: T.default.Messages.BROADCASTING_SETTINGS_CTA
      })
    })]
  })
}

function N() {
  return (0, a.jsx)(n.FormSection, {
    className: _.marginBottom40,
    children: (0, a.jsx)(n.FormNotice, {
      type: n.FormNotice.Types.PRIMARY,
      body: T.default.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
        termsLink: E.MarketingURLs.TERMS,
        privacyLink: E.MarketingURLs.PRIVACY
      })
    })
  })
}

function I() {
  let {
    canBroadcast: e
  } = l.default.useExperiment({
    location: "user_settings_activity_privacy"
  }, {
    autoTrackExposure: !0
  });
  return (0, a.jsxs)(n.FormSection, {
    tag: n.FormTitleTags.H1,
    title: T.default.Messages.ACTIVITY_PRIVACY,
    children: [(0, a.jsx)(m, {}), (0, a.jsx)(g, {}), e && (0, a.jsx)(h, {}), (0, a.jsx)(N, {})]
  })
}