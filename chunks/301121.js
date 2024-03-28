"use strict";
s.r(t), s.d(t, {
  default: function() {
    return Z
  }
}), s("47120"), s("733860"), s("773603");
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("512722"),
  o = s.n(r),
  d = s("913527"),
  u = s.n(d),
  c = s("442837"),
  S = s("524437"),
  E = s("481060"),
  T = s("668781"),
  _ = s("409700"),
  f = s("809206"),
  m = s("230711"),
  g = s("651530"),
  h = s("163268"),
  N = s("294602"),
  I = s("688465"),
  p = s("610697"),
  C = s("880257"),
  A = s("236289"),
  O = s("518560"),
  x = s("237292"),
  R = s("604849"),
  M = s("278828"),
  v = s("480294"),
  D = s("430824"),
  L = s("663389"),
  P = s("594174"),
  j = s("285952"),
  b = s("153124"),
  U = s("626135"),
  y = s("63063"),
  B = s("78451"),
  F = s("709054"),
  G = s("88658"),
  k = s("695346"),
  H = s("973005"),
  w = s("981631"),
  V = s("800530"),
  Y = s("689938"),
  K = s("274430"),
  W = s("794711");

function z(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function Q(e) {
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

function X(e) {
  let {
    message: t
  } = e;
  Q({
    header: Y.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
    confirmText: Y.default.Messages.OKAY,
    body: t
  })
}
class q extends n.PureComponent {
  componentDidMount() {
    (0, _.fetchConsents)(), (0, f.getHarvestStatus)().then(e => {
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
    Q({
      header: Y.default.Messages.USER_DM_SETTINGS_TITLE,
      body: Y.default.Messages.USER_DM_SETTINGS_DESCRIPTION,
      confirmText: Y.default.Messages.NO_TEXT,
      cancelText: Y.default.Messages.YES_TEXT,
      confirmButtonColor: E.Button.Colors.BRAND,
      onConfirm: () => {
        k.DefaultGuildsRestricted.updateSetting(e), this.trackDefaultDmsUpdated(e, !1)
      },
      onCancel: () => {
        k.DefaultGuildsRestricted.updateSetting(e), k.RestrictedGuildIds.updateSetting(e ? F.default.keys(D.default.getGuilds()) : []), this.trackDefaultDmsUpdated(e, !0)
      }
    })
  }
  trackDefaultDmsUpdated(e, t) {
    U.default.track(w.AnalyticEvents.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  showMessageRequestRestrictionModal(e) {
    Q({
      header: Y.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
      body: Y.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
      confirmText: Y.default.Messages.NO_TEXT,
      cancelText: Y.default.Messages.YES_TEXT,
      confirmButtonColor: E.Button.Colors.BRAND,
      onConfirm: () => {
        k.MessageRequestRestrictedDefault.updateSetting(e), this.trackDefaultMessageRequestUpdated(e, !1)
      },
      onCancel: () => {
        k.MessageRequestRestrictedDefault.updateSetting(e), k.MessageRequestRestrictedGuildIds.updateSetting(e ? F.default.keys(D.default.getGuilds()) : []), this.trackDefaultMessageRequestUpdated(e, !0)
      }
    })
  }
  trackDefaultMessageRequestUpdated(e, t) {
    U.default.track(w.AnalyticEvents.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  renderLegacyExplicitContentFilter(e) {
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)(E.FormItem, {
        tag: E.FormTitleTags.H3,
        className: W.marginBottom20,
        title: Y.default.Messages.USER_EXPLICIT_CONTENT_FILTER_V2,
        children: [(0, a.jsx)(E.FormText, {
          type: E.FormTextTypes.DESCRIPTION,
          className: W.marginBottom8,
          children: Y.default.Messages.USER_EXPLICIT_CONTENT_FILTER_HELP_V3.format({
            appealLink: y.default.getArticleURL(w.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
          })
        }), (0, a.jsx)(E.RadioGroup, {
          value: this.props.explicitContentFilter,
          options: (0, B.generateExplicitImageOptions)(),
          onChange: t => {
            let {
              value: s
            } = t;
            this.props.dmSpamFilter === S.DmSpamFilterV2.DEFAULT_UNSET ? k.DmSpamFilterV2.updateSetting(e).then(() => {
              k.ExplicitContentFilter.updateSetting(s)
            }) : k.ExplicitContentFilter.updateSetting(s)
          }
        })]
      })
    })
  }
  renderSelfModExplicitContentSettings() {
    let {
      explicitContentSettingGuilds: e,
      explicitContentSettingFriendDm: t,
      explicitContentSettingNonFriendDm: s,
      userIsConsideredAdult: n
    } = this.props, l = [{
      value: S.ExplicitContentRedaction.BLUR,
      label: Y.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }, {
      value: S.ExplicitContentRedaction.BLOCK,
      label: Y.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLOCK
    }], r = [{
      value: S.ExplicitContentRedaction.BLUR,
      label: Y.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }], o = {
      value: S.ExplicitContentRedaction.SHOW,
      label: Y.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_SHOW
    };
    return n && (l.unshift(o), r.unshift(o)), (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H5,
        faded: !0,
        className: W.marginBottom8,
        children: (0, a.jsxs)("div", {
          className: i()(K.betaTagContainer),
          children: [Y.default.Messages.OBSCURED_CONTENT_SETTINGS_HEADER, (0, a.jsx)(I.default, {
            className: K.betaTagIcon
          })]
        })
      }), (0, a.jsx)(E.FormText, {
        type: E.FormTextTypes.DESCRIPTION,
        className: W.marginBottom8,
        children: Y.default.Messages.OBSCURED_CONTENT_SETTINGS_DESC.format({
          learnMoreLink: y.default.getArticleURL(w.HelpdeskArticles.EXPLICIT_MEDIA_REDACTION)
        })
      }), (0, a.jsx)(E.FormItem, {
        tag: E.FormTitleTags.H3,
        className: W.marginBottom20,
        title: Y.default.Messages.OBSCURED_CONTENT_SETTING_FRIENDS,
        children: (0, a.jsx)(E.SingleSelect, {
          options: l,
          value: t,
          onChange: e => (0, h.updateExplicitContentSetting)({
            explicitContentFriendDm: e
          })
        })
      }), (0, a.jsx)(E.FormItem, {
        tag: E.FormTitleTags.H3,
        className: W.marginBottom20,
        title: Y.default.Messages.OBSCURED_CONTENT_SETTING_NON_FRIENDS,
        children: (0, a.jsx)(E.SingleSelect, {
          options: l,
          value: s,
          onChange: e => (0, h.updateExplicitContentSetting)({
            explicitContentNonFriendDm: e
          })
        })
      }), n && (0, a.jsx)(E.FormItem, {
        tag: E.FormTitleTags.H3,
        className: W.marginBottom20,
        title: Y.default.Messages.OBSCURED_CONTENT_SETTING_GUILDS,
        children: (0, a.jsx)(E.SingleSelect, {
          options: r,
          value: e,
          onChange: e => (0, h.updateExplicitContentSetting)({
            explicitContentGuilds: e
          })
        })
      }), (0, a.jsx)(E.FormDivider, {
        className: W.marginBottom20
      })]
    })
  }
  renderDmSafetyAlerts() {
    let {
      isEligibleForSafetyAlerts: e,
      dmSafetyAlerts: t,
      userIsConsideredAdult: s
    } = this.props;
    return s || !e ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(E.FormDivider, {
        className: W.marginBottom20
      }), (0, a.jsxs)(E.FormSection, {
        className: W.marginBottom20,
        children: [(0, a.jsx)(E.FormTitle, {
          tag: E.FormTitleTags.H5,
          faded: !0,
          className: W.marginBottom8,
          children: Y.default.Messages.SAFETY_ALERTS_SETTINGS_HEADER
        }), (0, a.jsx)(E.FormItem, {
          children: (0, a.jsx)(E.FormSwitch, {
            value: t,
            note: Y.default.Messages.SAFETY_ALERTS_SETTING_DESCRIPTION.format({
              learnMoreLink: y.default.getArticleURL(w.HelpdeskArticles.SAFETY_ALERTS)
            }),
            onChange: M.updateDmSafetyAlertsSetting,
            children: Y.default.Messages.SAFETY_ALERTS_SETTING_TITLE
          })
        })]
      })]
    })
  }
  renderDMSafety() {
    var e;
    let t = this.props.dmSpamFilter !== S.DmSpamFilterV2.DEFAULT_UNSET ? this.props.dmSpamFilter : null !== (e = H.ExplicitContentFilterToDmSpamFilterV2.get(this.props.explicitContentFilter)) && void 0 !== e ? e : S.DmSpamFilterV2.NON_FRIENDS;
    return this.props.mediaRedactionIsEnabled ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(E.FormSection, {
        tag: E.FormTitleTags.H3,
        className: W.marginBottom20,
        children: [this.renderSelfModExplicitContentSettings(), (0, a.jsxs)(E.FormItem, {
          tag: E.FormTitleTags.H5,
          className: W.marginBottom4,
          title: Y.default.Messages.USER_DM_SPAM_FILTER,
          children: [(0, a.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: W.marginBottom8,
            children: Y.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
              appealLink: y.default.getArticleURL(w.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
            })
          }), (0, a.jsx)(E.RadioGroup, {
            value: t,
            options: (0, B.generateDmSpamOptions)(),
            onChange: e => {
              let {
                value: t
              } = e;
              return k.DmSpamFilterV2.updateSetting(t)
            }
          })]
        })]
      }), this.renderDmSafetyAlerts()]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(E.FormSection, {
        tag: E.FormTitleTags.H5,
        className: W.marginBottom40,
        title: Y.default.Messages.USER_DIRECT_MESSAGE_FILTERS,
        children: [this.renderLegacyExplicitContentFilter(t), (0, a.jsxs)(E.FormItem, {
          tag: E.FormTitleTags.H3,
          className: W.marginBottom4,
          title: Y.default.Messages.USER_DM_SPAM_FILTER,
          children: [(0, a.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: W.marginBottom8,
            children: Y.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
              appealLink: y.default.getArticleURL(w.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
            })
          }), (0, a.jsx)(E.RadioGroup, {
            value: t,
            options: (0, B.generateDmSpamOptions)(),
            onChange: e => {
              let {
                value: t
              } = e;
              return k.DmSpamFilterV2.updateSetting(t)
            }
          })]
        })]
      }), this.renderDmSafetyAlerts()]
    })
  }
  renderServerPrivacy() {
    let {
      viewNsfwGuilds: e,
      currentUser: t,
      isStricterMessageRequests: s,
      viewNsfwCommands: n
    } = this.props, {
      defaultGuildsRestricted: l,
      defaultMessageRequestRestricted: i
    } = this.state, r = !0 === t.nsfwAllowed;
    return (0, a.jsxs)(E.FormSection, {
      className: W.marginBottom40,
      children: [(0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H5,
        className: W.marginBottom8,
        children: Y.default.Messages.USER_DM_SETTINGS
      }), (0, a.jsx)(E.FormSwitch, {
        value: !l,
        note: Y.default.Messages.USER_DM_SETTINGS_HELP,
        onChange: this.handleChangeDefaultGuildsRestricted,
        children: Y.default.Messages.NEW_GUILDS_DM_ALLOWED
      }), (0, a.jsx)(E.FormSwitch, {
        value: !!r && e,
        note: Y.default.Messages.NSFW_GUILDS_TOGGLE_CAPTION,
        disabled: !r,
        onChange: k.ViewNsfwGuilds.updateSetting,
        children: Y.default.Messages.NSFW_GUILDS_TOGGLE_HEADER
      }), !s && (0, a.jsx)(E.FormSwitch, {
        value: !i,
        note: Y.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_CAPTION.format({
          helpdeskArticle: y.default.getArticleURL(w.HelpdeskArticles.MESSAGE_REQUESTS)
        }),
        disabled: l,
        onChange: this.handleChangeDefaultMessageRequestRestricted,
        children: Y.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER
      }), (0, a.jsx)(E.FormSwitch, {
        value: !!r && n,
        note: Y.default.Messages.NSFW_DM_COMMANDS_CAPTION,
        disabled: !r,
        onChange: k.ViewNsfwCommands.updateSetting,
        children: Y.default.Messages.NSFW_DM_COMMANDS_HEADER
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
      className: W.marginBottom40,
      children: [(0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H5,
        className: W.marginBottom8,
        children: Y.default.Messages.DATA_PRIVACY_CONTROLS
      }), (0, a.jsx)(E.FormSwitch, {
        value: e,
        note: Y.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_NOTE.format({
          helpdeskArticle: y.default.getArticleURL(w.HelpdeskArticles.DATA_USED_TO_IMPROVE_DISCORD)
        }),
        onChange: this.handleUsageStatisticsChange,
        children: Y.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE
      }), (0, a.jsx)(E.FormSwitch, {
        value: t,
        note: Y.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_NOTE_LEARN_MORE.format({
          helpdeskArticle: y.default.getArticleURL(w.HelpdeskArticles.DATA_USED_FOR_RECOMMENDED)
        }),
        hideBorder: !0,
        onChange: this.handlePersonalizationChange,
        children: Y.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE
      }), (0, a.jsx)(E.FormSwitch, {
        value: !s,
        note: Y.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT_FORMATTED.format({
          helpdeskArticle: y.default.getArticleURL(w.HelpdeskArticles.DATA_PRIVACY_CONTROLS)
        }),
        onChange: this.handleChangeDropsOptedOut,
        children: (0, a.jsx)("div", {
          children: Y.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT
        })
      }), (0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H3,
        className: i()(W.marginTop20, W.marginBottom8),
        children: Y.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_TITLE
      }), (0, a.jsx)(E.FormText, {
        type: E.FormTextTypes.DESCRIPTION,
        className: W.marginBottom20,
        children: Y.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_NOTE.format({
          onClick: () => {
            m.default.setSection(w.UserSettingsSections.ACCOUNT)
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
    } = this.state, i = (0, G.harvestDisabled)(l, t), r = (0, a.jsx)(E.Tooltip, {
      text: t.verified ? null : Y.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_TOOLTIP,
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
          children: Y.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD
        })
      }
    });
    return i && null != l && (e = (0, a.jsx)(E.Card, {
      className: K.card,
      children: (0, a.jsx)(E.Text, {
        variant: "text-md/normal",
        children: Y.default.Messages.DATA_DOWNLOAD_REQUESTED_STATUS_NOTE.format({
          date: u()(l.created_at).add(w.REQUEST_DATA_LIMIT_DAYS, "days").format("MMMM Do YYYY")
        })
      })
    }), r = null), null != r && (r = (0, a.jsx)(j.default, {
      children: r
    })), (0, a.jsxs)(n.Fragment, {
      children: [(0, a.jsx)(E.FormDivider, {
        className: W.marginBottom20
      }), (0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H3,
        children: Y.default.Messages.DATA_PRIVACY_CONTROLS_PERSONAL_DATA_TITLE
      }), (0, a.jsx)(E.FormText, {
        type: E.FormTextTypes.DESCRIPTION,
        className: W.marginBottom20,
        children: Y.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_NOTE.format({
          helpdeskArticle: y.default.getArticleURL(w.HelpdeskArticles.GDPR_REQUEST_DATA)
        })
      }), e, r]
    })
  }
  renderPrivacyAndTermsNote() {
    return (0, a.jsx)(E.FormSection, {
      className: W.marginBottom40,
      children: (0, a.jsx)(E.FormNotice, {
        type: E.FormNotice.Types.PRIMARY,
        body: Y.default.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
          termsLink: w.MarketingURLs.TERMS,
          privacyLink: w.MarketingURLs.PRIVACY
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
        className: W.marginBottom20
      }), (0, a.jsxs)(E.FormSection, {
        className: W.marginBottom40,
        children: [(0, a.jsx)(E.FormTitle, {
          tag: E.FormTitleTags.H5,
          className: W.marginBottom8,
          children: Y.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER
        }), (0, a.jsxs)(E.FormItem, {
          tag: E.FormTitleTags.H5,
          className: W.marginBottom4,
          children: [(0, a.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: W.marginBottom8,
            children: Y.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_DESC
          }), (0, a.jsx)(E.RadioGroup, {
            options: (0, G.generateNonSpamRetrainingOptInSettingOptions)(),
            value: null == t ? G.NonSpamRetrainingOptInOptions.UNDECIDED : t ? G.NonSpamRetrainingOptInOptions.OPTIN : G.NonSpamRetrainingOptInOptions.OPTOUT,
            onChange: e => {
              let {
                value: t
              } = e;
              return k.NonSpamRetrainingOptIn.updateSetting(G.NonSpamRetrainingOptInOptionsToValue[t])
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
      title: Y.default.Messages.PRIVACY_AND_SAFETY,
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
    let n = s === V.SafetyHubView.ACCOUNT_STANDING && null != e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(E.TabBar, {
        className: K.settingsTabBar,
        "aria-label": Y.default.Messages.SAFETY_HUB_PAGE_TITLE,
        selectedItem: s,
        type: "top",
        look: "brand",
        onItemSelect: this.handleTabSelect,
        children: [(0, a.jsx)(E.TabBar.Item, {
          className: K.settingsTabBarItem,
          id: V.SafetyHubView.SETTINGS,
          "aria-label": Y.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS,
          children: Y.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS
        }), (0, a.jsx)(E.TabBar.Item, {
          className: K.settingsTabBarItem,
          id: V.SafetyHubView.ACCOUNT_STANDING,
          "aria-label": Y.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
          children: Y.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2
        })]
      }), (0, a.jsx)(E.TabBar.Panel, {
        id: s,
        "aria-labelledby": (0, b.uid)(),
        className: [n ? K.contentPanelNagbar : "", K.contentPanel].join(" "),
        children: (0, a.jsx)("div", {
          children: this.SETTINGS_TABS[s]()
        })
      })]
    })
  }
  constructor(e) {
    super(e), z(this, "SETTINGS_TABS", {
      [V.SafetyHubView.SETTINGS]: () => this.renderSettingsBody(),
      [V.SafetyHubView.ACCOUNT_STANDING]: () => (0, a.jsx)(O.default, {})
    }), z(this, "handleChangeDefaultGuildsRestricted", e => {
      this.setState({
        defaultGuildsRestricted: !e
      }, () => this.showGuildRestrictionModal(!e))
    }), z(this, "handleChangeDropsOptedOut", () => {
      k.DropsOptedOut.updateSetting(!this.props.dropsOptedOut)
    }), z(this, "handleChangeDefaultMessageRequestRestricted", e => {
      this.setState({
        defaultMessageRequestRestricted: !e
      }, () => this.showMessageRequestRestrictionModal(!e))
    }), z(this, "handleUsageStatisticsChange", () => {
      this.props.usageStatistics ? Q({
        header: Y.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_TITLE,
        body: Y.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_BODY,
        confirmText: Y.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CONFIRM,
        cancelText: Y.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CANCEL,
        onConfirm: () => (0, _.setConsents)([], [w.Consents.USAGE_STATISTICS]).catch(X)
      }) : (0, _.setConsents)([w.Consents.USAGE_STATISTICS], []).catch(X)
    }), z(this, "handlePersonalizationChange", () => {
      this.props.personalization ? Q({
        header: Y.default.Messages.PERSONALIZATION_DISABLE_MODAL_TITLE,
        confirmText: Y.default.Messages.PERSONALIZATION_DISABLE_MODAL_CONFIRM,
        cancelText: Y.default.Messages.PERSONALIZATION_DISABLE_MODAL_CANCEL,
        onConfirm: () => {
          (0, _.setConsents)([], [w.Consents.PERSONALIZATION]).catch(X)
        },
        body: Y.default.Messages.PERSONALIZATION_DISABLE_MODAL_BODY
      }) : (0, _.setConsents)([w.Consents.PERSONALIZATION], []).catch(X)
    }), z(this, "handleDataDownloadRequest", () => {
      Q({
        header: Y.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_TITLE,
        body: Y.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_NOTE,
        confirmText: Y.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CONFIRM,
        cancelText: Y.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CANCEL,
        onConfirm: () => {
          this.setState({
            requestingHarvest: !0
          }, () => {
            (0, f.requestHarvest)().then(e => {
              null != e && null != e.body ? (this.setState({
                currentHarvestRequest: e.body
              }), T.default.show({
                body: Y.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_SUCCESS
              })) : T.default.show({
                title: Y.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
                body: Y.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
              })
            }, () => T.default.show({
              title: Y.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
              body: Y.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
            })).finally(() => this.setState({
              requestingHarvest: !1
            }))
          })
        }
      })
    }), z(this, "handleTabSelect", e => {
      this.setState({
        selectedTab: e
      })
    });
    let {
      defaultGuildsRestricted: t,
      defaultMessageRequestRestricted: s
    } = e;
    this.state = {
      defaultGuildsRestricted: t,
      defaultMessageRequestRestricted: s,
      currentHarvestRequest: null,
      requestingHarvest: !0,
      selectedTab: V.SafetyHubView.SETTINGS
    }
  }
}

function Z() {
  let e = (0, c.useStateFromStores)([P.default], () => {
      let e = P.default.getCurrentUser();
      return o()(null != e, "ConnectedUserSettingsPrivacySafety: currentUser cannot be undefined"), e
    }),
    t = (0, c.useStateFromStoresObject)([v.default], () => ({
      fetchedConsents: v.default.fetchedConsents,
      usageStatistics: v.default.hasConsented(w.Consents.USAGE_STATISTICS),
      personalization: v.default.hasConsented(w.Consents.PERSONALIZATION)
    })),
    s = (0, c.useStateFromStores)([A.default], () => A.default.getFetchError()),
    n = (0, c.useStateFromStores)([L.default], () => L.default.getSubsection()),
    l = (0, g.useIsEligibleForExplicitMediaRedaction)(),
    i = (0, N.useExplicitContentSettingOrDefault)(),
    r = (0, C.default)(),
    d = (0, x.useIsEligibleForInappropriateConversationWarning)({
      location: "user_settings_web"
    }),
    u = (0, R.useSafetyAlertsSettingOrDefault)();
  return (0, a.jsx)(q, {
    currentUser: e,
    defaultGuildsRestricted: k.DefaultGuildsRestricted.useSetting(),
    defaultMessageRequestRestricted: k.MessageRequestRestrictedDefault.useSetting(),
    nonSpamRetrainingOptIn: k.NonSpamRetrainingOptIn.useSetting(),
    isStricterMessageRequests: (0, p.default)(),
    viewNsfwGuilds: k.ViewNsfwGuilds.useSetting(),
    viewNsfwCommands: k.ViewNsfwCommands.useSetting(),
    explicitContentFilter: k.ExplicitContentFilter.useSetting(),
    dmSpamFilter: k.DmSpamFilterV2.useSetting(),
    showCurrentGame: k.ShowCurrentGame.useSetting(),
    dropsOptedOut: k.DropsOptedOut.useSetting(),
    safetyHubFetchError: s,
    mediaRedactionIsEnabled: l,
    explicitContentSettingGuilds: i.explicitContentGuilds,
    explicitContentSettingFriendDm: i.explicitContentFriendDm,
    explicitContentSettingNonFriendDm: i.explicitContentNonFriendDm,
    userIsConsideredAdult: null == r || r,
    isEligibleForSafetyAlerts: d,
    dmSafetyAlerts: u,
    subsection: n,
    ...t
  })
}