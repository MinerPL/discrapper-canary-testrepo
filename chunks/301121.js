"use strict";
s.r(t), s.d(t, {
  default: function() {
    return ea
  }
}), s("47120"), s("733860"), s("773603");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("512722"),
  o = s.n(r),
  d = s("913527"),
  u = s.n(d),
  c = s("442837"),
  S = s("524437"),
  E = s("481060"),
  T = s("668781"),
  f = s("409700"),
  m = s("809206"),
  _ = s("230711"),
  g = s("651530"),
  h = s("163268"),
  I = s("294602"),
  N = s("610697"),
  p = s("880257"),
  C = s("236289"),
  A = s("518560"),
  O = s("237292"),
  x = s("604849"),
  R = s("278828"),
  M = s("480294"),
  v = s("430824"),
  D = s("663389"),
  L = s("594174"),
  P = s("285952"),
  j = s("153124"),
  b = s("626135"),
  U = s("63063"),
  y = s("78451"),
  B = s("709054"),
  F = s("88658"),
  G = s("695346"),
  k = s("3957"),
  w = s("279743"),
  H = s("973005"),
  V = s("526761"),
  Y = s("981631"),
  W = s("800530"),
  K = s("689938"),
  z = s("828131"),
  Q = s("949086");

function q(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function Z() {
  var e;
  let t = null === (e = (0, p.default)()) || void 0 === e || e,
    s = (0, O.useIsEligibleForInappropriateConversationWarning)({
      location: "user_settings_web"
    }),
    n = (0, x.useSafetyAlertsSettingOrDefault)(),
    l = (0, k.useScrollToSetting)(V.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS);
  return t || !s ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(E.FormDivider, {
      className: Q.marginBottom20
    }), (0, a.jsx)(E.FormSection, {
      ref: l,
      children: (0, a.jsxs)(E.FormItem, {
        className: i()(z.settingsBackgroundFlashElement),
        children: [(0, a.jsx)(E.FormTitle, {
          tag: E.FormTitleTags.H5,
          faded: !0,
          className: Q.marginBottom8,
          children: K.default.Messages.SAFETY_ALERTS_SETTINGS_HEADER
        }), (0, a.jsx)(E.FormSwitch, {
          value: n,
          note: K.default.Messages.SAFETY_ALERTS_SETTING_DESCRIPTION.format({
            learnMoreLink: U.default.getArticleURL(Y.HelpdeskArticles.SAFETY_ALERTS)
          }),
          onChange: R.updateDmSafetyAlertsSetting,
          hideBorder: !0,
          children: K.default.Messages.SAFETY_ALERTS_SETTING_TITLE
        }), (0, a.jsx)(w.default, {
          animationDelay: 1e3,
          scrollPosition: V.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS
        })]
      })
    }), (0, a.jsx)(E.FormDivider, {
      className: Q.marginBottom20
    })]
  })
}

function X(e, t) {
  b.default.track(Y.AnalyticEvents.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
    default_guilds_restricted: e,
    applied_to_existing_guilds: t
  })
}

function J() {
  let e = (0, N.default)(),
    t = G.DefaultGuildsRestricted.useSetting(),
    s = G.MessageRequestRestrictedDefault.useSetting(),
    n = (0, k.useScrollToSetting)(V.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS);
  return e ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: z.settingsBackgroundFlashElement,
      children: [(0, a.jsx)(E.FormItem, {
        ref: n,
        children: (0, a.jsx)(E.FormSwitch, {
          value: !s,
          note: K.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_CAPTION.format({
            helpdeskArticle: U.default.getArticleURL(Y.HelpdeskArticles.MESSAGE_REQUESTS)
          }),
          disabled: t,
          onChange: () => {
            var e;
            return e = !s, void ee({
              header: K.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
              body: K.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
              confirmText: K.default.Messages.NO_TEXT,
              cancelText: K.default.Messages.YES_TEXT,
              confirmButtonColor: E.Button.Colors.BRAND,
              onConfirm: () => {
                G.MessageRequestRestrictedDefault.updateSetting(e), X(e, !1)
              },
              onCancel: () => {
                G.MessageRequestRestrictedDefault.updateSetting(e), G.MessageRequestRestrictedGuildIds.updateSetting(e ? B.default.keys(v.default.getGuilds()) : []), X(e, !0)
              }
            })
          },
          hideBorder: !0,
          children: K.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER
        })
      }), (0, a.jsx)(w.default, {
        animationDelay: 700,
        scrollPosition: V.PrivacyAndSafetyScrollPositions.MESSAGE_REQUESTS
      })]
    }), (0, a.jsx)(E.FormDivider, {
      className: Q.marginBottom20
    })]
  })
}

function $() {
  var e;
  let t = null === (e = (0, p.default)()) || void 0 === e || e,
    {
      explicitContentGuilds: s,
      explicitContentFriendDm: n,
      explicitContentNonFriendDm: l
    } = (0, I.useExplicitContentSettingOrDefault)(),
    i = (0, k.useScrollToSetting)(V.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS),
    r = [{
      value: S.ExplicitContentRedaction.BLUR,
      label: K.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }, {
      value: S.ExplicitContentRedaction.BLOCK,
      label: K.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLOCK
    }],
    o = [{
      value: S.ExplicitContentRedaction.BLUR,
      label: K.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }],
    d = {
      value: S.ExplicitContentRedaction.SHOW,
      label: K.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_SHOW
    };
  return t && (r.unshift(d), o.unshift(d)), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: z.settingsBackgroundFlashElement,
      children: [(0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H5,
        faded: !0,
        className: Q.marginBottom8,
        children: K.default.Messages.OBSCURED_CONTENT_SETTINGS_HEADER
      }), (0, a.jsx)(E.FormText, {
        type: E.FormTextTypes.DESCRIPTION,
        className: Q.marginBottom8,
        children: K.default.Messages.OBSCURED_CONTENT_SETTINGS_DESC.format({
          learnMoreLink: U.default.getArticleURL(Y.HelpdeskArticles.EXPLICIT_MEDIA_REDACTION)
        })
      }), (0, a.jsx)(E.FormItem, {
        ref: i,
        tag: E.FormTitleTags.H3,
        className: Q.marginBottom20,
        title: K.default.Messages.OBSCURED_CONTENT_SETTING_FRIENDS,
        children: (0, a.jsx)(E.SingleSelect, {
          options: r,
          value: n,
          onChange: e => (0, h.updateExplicitContentSetting)({
            explicitContentFriendDm: e
          })
        })
      }), (0, a.jsx)(E.FormItem, {
        tag: E.FormTitleTags.H3,
        className: Q.marginBottom20,
        title: K.default.Messages.OBSCURED_CONTENT_SETTING_NON_FRIENDS,
        children: (0, a.jsx)(E.SingleSelect, {
          options: r,
          value: l,
          onChange: e => (0, h.updateExplicitContentSetting)({
            explicitContentNonFriendDm: e
          })
        })
      }), t && (0, a.jsx)(E.FormItem, {
        tag: E.FormTitleTags.H3,
        className: Q.marginBottom20,
        title: K.default.Messages.OBSCURED_CONTENT_SETTING_GUILDS,
        children: (0, a.jsx)(E.SingleSelect, {
          options: o,
          value: s,
          onChange: e => (0, h.updateExplicitContentSetting)({
            explicitContentGuilds: e
          })
        })
      }), (0, a.jsx)(w.default, {
        scrollPosition: V.PrivacyAndSafetyScrollPositions.EXPLICIT_MEDIA_REDACTION
      })]
    }), (0, a.jsx)(E.FormDivider, {
      className: Q.marginBottom20
    })]
  })
}

function ee(e) {
  let {
    body: t,
    ...s
  } = e;
  (0, E.openModal)(e => (0, a.jsx)(E.ConfirmModal, {
    ...e,
    ...s,
    children: (0, a.jsx)(E.Text, {
      variant: "text-md/normal",
      children: t
    })
  }))
}

function et(e) {
  let {
    message: t
  } = e;
  ee({
    header: K.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
    confirmText: K.default.Messages.OKAY,
    body: t
  })
}
class es extends n.PureComponent {
  componentDidMount() {
    (0, f.fetchConsents)(), (0, m.getHarvestStatus)().then(e => {
      let t = {
        requestingHarvest: !1,
        currentHarvestRequest: e.body
      };
      this.setState(t)
    }, () => {
      this.setState({
        requestingHarvest: !1
      })
    })
  }
  componentDidUpdate(e) {
    e.defaultGuildsRestricted !== this.props.defaultGuildsRestricted && this.setState({
      defaultGuildsRestricted: this.props.defaultGuildsRestricted
    })
  }
  showGuildRestrictionModal(e) {
    ee({
      header: K.default.Messages.USER_DM_SETTINGS_TITLE,
      body: K.default.Messages.USER_DM_SETTINGS_DESCRIPTION,
      confirmText: K.default.Messages.NO_TEXT,
      cancelText: K.default.Messages.YES_TEXT,
      confirmButtonColor: E.Button.Colors.BRAND,
      onConfirm: () => {
        G.DefaultGuildsRestricted.updateSetting(e), this.trackDefaultDmsUpdated(e, !1)
      },
      onCancel: () => {
        G.DefaultGuildsRestricted.updateSetting(e), G.RestrictedGuildIds.updateSetting(e ? B.default.keys(v.default.getGuilds()) : []), this.trackDefaultDmsUpdated(e, !0)
      }
    })
  }
  trackDefaultDmsUpdated(e, t) {
    b.default.track(Y.AnalyticEvents.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  showMessageRequestRestrictionModal(e) {
    ee({
      header: K.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
      body: K.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
      confirmText: K.default.Messages.NO_TEXT,
      cancelText: K.default.Messages.YES_TEXT,
      confirmButtonColor: E.Button.Colors.BRAND,
      onConfirm: () => {
        G.MessageRequestRestrictedDefault.updateSetting(e), this.trackDefaultMessageRequestUpdated(e, !1)
      },
      onCancel: () => {
        G.MessageRequestRestrictedDefault.updateSetting(e), G.MessageRequestRestrictedGuildIds.updateSetting(e ? B.default.keys(v.default.getGuilds()) : []), this.trackDefaultMessageRequestUpdated(e, !0)
      }
    })
  }
  trackDefaultMessageRequestUpdated(e, t) {
    b.default.track(Y.AnalyticEvents.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  renderLegacyExplicitContentFilter(e) {
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)(E.FormItem, {
        tag: E.FormTitleTags.H3,
        className: Q.marginBottom20,
        title: K.default.Messages.USER_EXPLICIT_CONTENT_FILTER_V2,
        children: [(0, a.jsx)(E.FormText, {
          type: E.FormTextTypes.DESCRIPTION,
          className: Q.marginBottom8,
          children: K.default.Messages.USER_EXPLICIT_CONTENT_FILTER_HELP_V3.format({
            appealLink: U.default.getArticleURL(Y.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
          })
        }), (0, a.jsx)(E.RadioGroup, {
          value: this.props.explicitContentFilter,
          options: (0, y.generateExplicitImageOptions)(),
          onChange: t => {
            let {
              value: s
            } = t;
            this.props.dmSpamFilter === S.DmSpamFilterV2.DEFAULT_UNSET ? G.DmSpamFilterV2.updateSetting(e).then(() => {
              G.ExplicitContentFilter.updateSetting(s)
            }) : G.ExplicitContentFilter.updateSetting(s)
          }
        })]
      })
    })
  }
  renderDMSafety() {
    var e;
    let t = this.props.dmSpamFilter !== S.DmSpamFilterV2.DEFAULT_UNSET ? this.props.dmSpamFilter : null !== (e = H.ExplicitContentFilterToDmSpamFilterV2.get(this.props.explicitContentFilter)) && void 0 !== e ? e : S.DmSpamFilterV2.NON_FRIENDS;
    return this.props.mediaRedactionIsEnabled ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(E.FormSection, {
        tag: E.FormTitleTags.H3,
        className: Q.marginBottom20,
        children: [(0, a.jsx)($, {}), (0, a.jsxs)(E.FormItem, {
          tag: E.FormTitleTags.H5,
          className: Q.marginBottom4,
          title: K.default.Messages.USER_DM_SPAM_FILTER,
          children: [(0, a.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: Q.marginBottom8,
            children: K.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
              appealLink: U.default.getArticleURL(Y.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
            })
          }), (0, a.jsx)(E.RadioGroup, {
            value: t,
            options: (0, y.generateDmSpamOptions)(),
            onChange: e => {
              let {
                value: t
              } = e;
              return G.DmSpamFilterV2.updateSetting(t)
            }
          })]
        })]
      }), (0, a.jsx)(Z, {})]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(E.FormSection, {
        tag: E.FormTitleTags.H5,
        className: Q.marginBottom40,
        title: K.default.Messages.USER_DIRECT_MESSAGE_FILTERS,
        children: [this.renderLegacyExplicitContentFilter(t), (0, a.jsxs)(E.FormItem, {
          tag: E.FormTitleTags.H3,
          className: Q.marginBottom4,
          title: K.default.Messages.USER_DM_SPAM_FILTER,
          children: [(0, a.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: Q.marginBottom8,
            children: K.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
              appealLink: U.default.getArticleURL(Y.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
            })
          }), (0, a.jsx)(E.RadioGroup, {
            value: t,
            options: (0, y.generateDmSpamOptions)(),
            onChange: e => {
              let {
                value: t
              } = e;
              return G.DmSpamFilterV2.updateSetting(t)
            }
          })]
        })]
      }), (0, a.jsx)(Z, {})]
    })
  }
  renderServerPrivacy() {
    let {
      viewNsfwGuilds: e,
      currentUser: t,
      viewNsfwCommands: s
    } = this.props, {
      defaultGuildsRestricted: n
    } = this.state, l = !0 === t.nsfwAllowed;
    return (0, a.jsxs)(E.FormSection, {
      className: Q.marginBottom40,
      children: [(0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H5,
        className: Q.marginBottom8,
        children: K.default.Messages.USER_DM_SETTINGS
      }), (0, a.jsx)(E.FormSwitch, {
        value: !n,
        note: K.default.Messages.USER_DM_SETTINGS_HELP,
        onChange: this.handleChangeDefaultGuildsRestricted,
        children: K.default.Messages.NEW_GUILDS_DM_ALLOWED
      }), (0, a.jsx)(E.FormSwitch, {
        value: !!l && e,
        note: K.default.Messages.NSFW_GUILDS_TOGGLE_CAPTION,
        disabled: !l,
        onChange: G.ViewNsfwGuilds.updateSetting,
        children: K.default.Messages.NSFW_GUILDS_TOGGLE_HEADER
      }), (0, a.jsx)(J, {}), (0, a.jsx)(E.FormSwitch, {
        value: !!l && s,
        note: K.default.Messages.NSFW_DM_COMMANDS_CAPTION,
        disabled: !l,
        onChange: G.ViewNsfwCommands.updateSetting,
        children: K.default.Messages.NSFW_DM_COMMANDS_HEADER
      })]
    })
  }
  renderDataPrivacy() {
    let {
      usageStatistics: e,
      personalization: t,
      dropsOptedOut: s
    } = this.props;
    return (0, a.jsxs)(E.FormSection, {
      className: Q.marginBottom40,
      children: [(0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H5,
        className: Q.marginBottom8,
        children: K.default.Messages.DATA_PRIVACY_CONTROLS
      }), (0, a.jsx)(E.FormSwitch, {
        value: e,
        note: K.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_NOTE.format({
          helpdeskArticle: U.default.getArticleURL(Y.HelpdeskArticles.DATA_USED_TO_IMPROVE_DISCORD)
        }),
        onChange: this.handleUsageStatisticsChange,
        children: K.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE
      }), (0, a.jsx)(E.FormSwitch, {
        value: t,
        note: K.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_NOTE_LEARN_MORE.format({
          helpdeskArticle: U.default.getArticleURL(Y.HelpdeskArticles.DATA_USED_FOR_RECOMMENDED)
        }),
        hideBorder: !0,
        onChange: this.handlePersonalizationChange,
        children: K.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE
      }), (0, a.jsx)(E.FormSwitch, {
        value: !s,
        note: K.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT_FORMATTED.format({
          helpdeskArticle: U.default.getArticleURL(Y.HelpdeskArticles.DATA_PRIVACY_CONTROLS)
        }),
        onChange: this.handleChangeDropsOptedOut,
        children: (0, a.jsx)("div", {
          children: K.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT
        })
      }), (0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H3,
        className: i()(Q.marginTop20, Q.marginBottom8),
        children: K.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_TITLE
      }), (0, a.jsx)(E.FormText, {
        type: E.FormTextTypes.DESCRIPTION,
        className: Q.marginBottom20,
        children: K.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_NOTE.format({
          onClick: () => {
            _.default.setSection(Y.UserSettingsSections.ACCOUNT)
          }
        })
      }), this.renderHarvestRequest()]
    })
  }
  renderHarvestRequest() {
    let e;
    let {
      currentUser: t
    } = this.props, {
      requestingHarvest: s,
      currentHarvestRequest: l
    } = this.state, i = (0, F.harvestDisabled)(l, t), r = (0, a.jsx)(E.Tooltip, {
      text: t.verified ? null : K.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_TOOLTIP,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: n
        } = e;
        return (0, a.jsx)(E.Button, {
          disabled: i,
          onClick: this.handleDataDownloadRequest,
          onMouseEnter: t,
          onMouseLeave: n,
          look: E.Button.Looks.OUTLINED,
          color: E.Button.Colors.BRAND,
          submitting: s,
          children: K.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD
        })
      }
    });
    return i && null != l && (e = (0, a.jsx)(E.Card, {
      className: z.card,
      children: (0, a.jsx)(E.Text, {
        variant: "text-md/normal",
        children: K.default.Messages.DATA_DOWNLOAD_REQUESTED_STATUS_NOTE.format({
          date: u()(l.created_at).add(Y.REQUEST_DATA_LIMIT_DAYS, "days").format("MMMM Do YYYY")
        })
      })
    }), r = null), null != r && (r = (0, a.jsx)(P.default, {
      children: r
    })), (0, a.jsxs)(n.Fragment, {
      children: [(0, a.jsx)(E.FormDivider, {
        className: Q.marginBottom20
      }), (0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H3,
        children: K.default.Messages.DATA_PRIVACY_CONTROLS_PERSONAL_DATA_TITLE
      }), (0, a.jsx)(E.FormText, {
        type: E.FormTextTypes.DESCRIPTION,
        className: Q.marginBottom20,
        children: K.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_NOTE.format({
          helpdeskArticle: U.default.getArticleURL(Y.HelpdeskArticles.GDPR_REQUEST_DATA)
        })
      }), e, r]
    })
  }
  renderPrivacyAndTermsNote() {
    return (0, a.jsx)(E.FormSection, {
      className: Q.marginBottom40,
      children: (0, a.jsx)(E.FormNotice, {
        type: E.FormNotice.Types.PRIMARY,
        body: K.default.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
          termsLink: Y.MarketingURLs.TERMS,
          privacyLink: Y.MarketingURLs.PRIVACY
        })
      })
    })
  }
  renderStaffOnlySettings() {
    let {
      currentUser: e,
      nonSpamRetrainingOptIn: t
    } = this.props;
    return e.isStaff() ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(E.FormDivider, {
        className: Q.marginBottom20
      }), (0, a.jsxs)(E.FormSection, {
        className: Q.marginBottom40,
        children: [(0, a.jsx)(E.FormTitle, {
          tag: E.FormTitleTags.H5,
          className: Q.marginBottom8,
          children: K.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER
        }), (0, a.jsxs)(E.FormItem, {
          tag: E.FormTitleTags.H5,
          className: Q.marginBottom4,
          children: [(0, a.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: Q.marginBottom8,
            children: K.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_DESC
          }), (0, a.jsx)(E.RadioGroup, {
            options: (0, F.generateNonSpamRetrainingOptInSettingOptions)(),
            value: null == t ? F.NonSpamRetrainingOptInOptions.UNDECIDED : t ? F.NonSpamRetrainingOptInOptions.OPTIN : F.NonSpamRetrainingOptInOptions.OPTOUT,
            onChange: e => {
              let {
                value: t
              } = e;
              return G.NonSpamRetrainingOptIn.updateSetting(F.NonSpamRetrainingOptInOptionsToValue[t])
            }
          })]
        })]
      })]
    }) : null
  }
  renderSettingsBody() {
    let {
      fetchedConsents: e
    } = this.props;
    return (0, a.jsxs)(E.FormSection, {
      tag: E.FormTitleTags.H1,
      title: K.default.Messages.PRIVACY_AND_SAFETY,
      children: [this.renderDMSafety(), this.renderServerPrivacy(), e ? this.renderDataPrivacy() : null, this.renderPrivacyAndTermsNote(), this.renderStaffOnlySettings()]
    })
  }
  render() {
    let {
      safetyHubFetchError: e,
      subsection: t
    } = this.props, {
      selectedTab: s
    } = this.state;
    null != t && this.setState({
      selectedTab: t
    });
    let n = s === W.SafetyHubView.ACCOUNT_STANDING && null != e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(E.TabBar, {
        className: z.settingsTabBar,
        "aria-label": K.default.Messages.SAFETY_HUB_PAGE_TITLE,
        selectedItem: s,
        type: "top",
        look: "brand",
        onItemSelect: this.handleTabSelect,
        children: [(0, a.jsx)(E.TabBar.Item, {
          className: z.settingsTabBarItem,
          id: W.SafetyHubView.SETTINGS,
          "aria-label": K.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS,
          children: K.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS
        }), (0, a.jsx)(E.TabBar.Item, {
          className: z.settingsTabBarItem,
          id: W.SafetyHubView.ACCOUNT_STANDING,
          "aria-label": K.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
          children: K.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2
        })]
      }), (0, a.jsx)(E.TabBar.Panel, {
        id: s,
        "aria-labelledby": (0, j.uid)(),
        className: i()(z.contentPanel, {
          [z.contentPanelNagbar]: n
        }),
        children: (0, a.jsx)("div", {
          children: this.SETTINGS_TABS[s]()
        })
      })]
    })
  }
  constructor(e) {
    super(e), q(this, "SETTINGS_TABS", {
      [W.SafetyHubView.SETTINGS]: () => this.renderSettingsBody(),
      [W.SafetyHubView.ACCOUNT_STANDING]: () => (0, a.jsx)(A.default, {})
    }), q(this, "handleChangeDefaultGuildsRestricted", e => {
      this.setState({
        defaultGuildsRestricted: !e
      }, () => this.showGuildRestrictionModal(!e))
    }), q(this, "handleChangeDropsOptedOut", () => {
      G.DropsOptedOut.updateSetting(!this.props.dropsOptedOut)
    }), q(this, "handleUsageStatisticsChange", () => {
      this.props.usageStatistics ? ee({
        header: K.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_TITLE,
        body: K.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_BODY,
        confirmText: K.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CONFIRM,
        cancelText: K.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CANCEL,
        onConfirm: () => (0, f.setConsents)([], [Y.Consents.USAGE_STATISTICS]).catch(et)
      }) : (0, f.setConsents)([Y.Consents.USAGE_STATISTICS], []).catch(et)
    }), q(this, "handlePersonalizationChange", () => {
      this.props.personalization ? ee({
        header: K.default.Messages.PERSONALIZATION_DISABLE_MODAL_TITLE,
        confirmText: K.default.Messages.PERSONALIZATION_DISABLE_MODAL_CONFIRM,
        cancelText: K.default.Messages.PERSONALIZATION_DISABLE_MODAL_CANCEL,
        onConfirm: () => {
          (0, f.setConsents)([], [Y.Consents.PERSONALIZATION]).catch(et)
        },
        body: K.default.Messages.PERSONALIZATION_DISABLE_MODAL_BODY
      }) : (0, f.setConsents)([Y.Consents.PERSONALIZATION], []).catch(et)
    }), q(this, "handleDataDownloadRequest", () => {
      ee({
        header: K.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_TITLE,
        body: K.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_NOTE,
        confirmText: K.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CONFIRM,
        cancelText: K.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CANCEL,
        onConfirm: () => {
          this.setState({
            requestingHarvest: !0
          }, () => {
            (0, m.requestHarvest)().then(e => {
              null != e && null != e.body ? (this.setState({
                currentHarvestRequest: e.body
              }), T.default.show({
                body: K.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_SUCCESS
              })) : T.default.show({
                title: K.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
                body: K.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
              })
            }, () => T.default.show({
              title: K.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
              body: K.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
            })).finally(() => this.setState({
              requestingHarvest: !1
            }))
          })
        }
      })
    }), q(this, "handleTabSelect", e => {
      this.setState({
        selectedTab: e
      })
    });
    let {
      defaultGuildsRestricted: t
    } = e;
    this.state = {
      defaultGuildsRestricted: t,
      currentHarvestRequest: null,
      requestingHarvest: !0,
      selectedTab: W.SafetyHubView.SETTINGS
    }
  }
}

function ea() {
  let e = (0, c.useStateFromStores)([L.default], () => {
      let e = L.default.getCurrentUser();
      return o()(null != e, "ConnectedUserSettingsPrivacySafety: currentUser cannot be undefined"), e
    }),
    t = (0, c.useStateFromStoresObject)([M.default], () => ({
      fetchedConsents: M.default.fetchedConsents,
      usageStatistics: M.default.hasConsented(Y.Consents.USAGE_STATISTICS),
      personalization: M.default.hasConsented(Y.Consents.PERSONALIZATION)
    })),
    s = (0, c.useStateFromStores)([C.default], () => C.default.getFetchError()),
    n = (0, c.useStateFromStores)([D.default], () => D.default.getSubsection()),
    l = (0, g.useIsEligibleForExplicitMediaRedaction)(),
    i = (0, p.default)();
  return (0, a.jsx)(es, {
    currentUser: e,
    defaultGuildsRestricted: G.DefaultGuildsRestricted.useSetting(),
    nonSpamRetrainingOptIn: G.NonSpamRetrainingOptIn.useSetting(),
    viewNsfwGuilds: G.ViewNsfwGuilds.useSetting(),
    viewNsfwCommands: G.ViewNsfwCommands.useSetting(),
    explicitContentFilter: G.ExplicitContentFilter.useSetting(),
    dmSpamFilter: G.DmSpamFilterV2.useSetting(),
    showCurrentGame: G.ShowCurrentGame.useSetting(),
    dropsOptedOut: G.DropsOptedOut.useSetting(),
    safetyHubFetchError: s,
    mediaRedactionIsEnabled: l,
    userIsConsideredAdult: null == i || i,
    subsection: n,
    ...t
  })
}