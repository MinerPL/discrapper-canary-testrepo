"use strict";
s.r(t), s.d(t, {
  default: function() {
    return eE
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
  T = s("570140"),
  f = s("668781"),
  _ = s("409700"),
  m = s("809206"),
  g = s("230711"),
  I = s("241420"),
  h = s("651530"),
  N = s("163268"),
  p = s("294602"),
  C = s("778825"),
  A = s("856768"),
  O = s("592204"),
  x = s("712950"),
  R = s("610697"),
  M = s("880257"),
  v = s("16703"),
  L = s("236289"),
  D = s("518560"),
  P = s("237292"),
  j = s("604849"),
  b = s("278828"),
  U = s("480294"),
  y = s("430824"),
  B = s("663389"),
  G = s("594174"),
  F = s("285952"),
  k = s("153124"),
  w = s("626135"),
  H = s("63063"),
  V = s("78451"),
  Y = s("709054"),
  W = s("88658"),
  K = s("263399"),
  z = s("695346"),
  Q = s("3957"),
  q = s("279743"),
  Z = s("973005"),
  X = s("703115"),
  J = s("526761"),
  $ = s("981631"),
  ee = s("800530"),
  et = s("689938"),
  es = s("79849"),
  ea = s("611273");

function en(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function el() {
  let e = (0, c.useStateFromStores)([C.default], () => C.default.getGuild()),
    t = (0, v.default)(),
    s = null != e ? e : t;
  n.useEffect(() => {
    w.default.track($.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: X.UserGuildPrivacySettingsAction.VIEW_SETTINGS_PAGE
    })
  }, []);
  let l = n.useCallback(e => {
    null != e && T.default.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
      guild: e
    }), w.default.track($.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: X.UserGuildPrivacySettingsAction.SELECT_GUILD,
      guild_id: null == e ? void 0 : e.id
    })
  }, []);
  return null == s ? null : (0, a.jsxs)(E.FormSection, {
    tag: E.FormTitleTags.H1,
    title: et.default.Messages.PRIVACY_AND_SAFETY,
    children: [(0, a.jsx)(A.default, {
      className: es.guildSelector,
      guildId: s.id,
      onChange: l
    }), (0, a.jsx)(I.ConnectedPrivacySettings, {
      guild: s,
      ingress: I.PrivacySettingSurfaces.USER_SETTINGS_PRIVACY_SAFETY
    })]
  })
}

function ei() {
  var e;
  let t = null === (e = (0, M.default)()) || void 0 === e || e,
    s = (0, P.useIsEligibleForInappropriateConversationWarning)({
      location: "user_settings_web"
    }),
    n = (0, j.useSafetyAlertsSettingOrDefault)(),
    l = (0, Q.useScrollToSetting)(J.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS);
  return t || !s ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(E.FormDivider, {
      className: ea.marginBottom20
    }), (0, a.jsx)(E.FormSection, {
      ref: l,
      children: (0, a.jsxs)(E.FormItem, {
        className: i()(es.settingsBackgroundFlashElement),
        children: [(0, a.jsx)(E.FormTitle, {
          tag: E.FormTitleTags.H5,
          faded: !0,
          className: ea.marginBottom8,
          children: et.default.Messages.SAFETY_ALERTS_SETTINGS_HEADER
        }), (0, a.jsx)(E.FormSwitch, {
          value: n,
          note: et.default.Messages.SAFETY_ALERTS_SETTING_DESCRIPTION.format({
            learnMoreLink: H.default.getArticleURL($.HelpdeskArticles.SAFETY_ALERTS)
          }),
          onChange: b.updateDmSafetyAlertsSetting,
          hideBorder: !0,
          children: et.default.Messages.SAFETY_ALERTS_SETTING_TITLE
        }), (0, a.jsx)(q.default, {
          animationDelay: 1e3,
          scrollPosition: J.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS
        })]
      })
    }), (0, a.jsx)(E.FormDivider, {
      className: ea.marginBottom20
    })]
  })
}

function er(e, t) {
  w.default.track($.AnalyticEvents.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
    default_guilds_restricted: e,
    applied_to_existing_guilds: t
  })
}

function eo() {
  let e = (0, R.default)(),
    t = z.DefaultGuildsRestricted.useSetting(),
    s = z.MessageRequestRestrictedDefault.useSetting(),
    n = (0, Q.useScrollToSetting)(J.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS);
  return e ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: es.settingsBackgroundFlashElement,
      children: [(0, a.jsx)(E.FormItem, {
        ref: n,
        children: (0, a.jsx)(E.FormSwitch, {
          value: !s,
          note: et.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_CAPTION.format({
            helpdeskArticle: H.default.getArticleURL($.HelpdeskArticles.MESSAGE_REQUESTS)
          }),
          disabled: t,
          onChange: () => {
            var e;
            return e = !s, void eu({
              header: et.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
              body: et.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
              confirmText: et.default.Messages.NO_TEXT,
              cancelText: et.default.Messages.YES_TEXT,
              confirmButtonColor: E.Button.Colors.BRAND,
              onConfirm: () => {
                z.MessageRequestRestrictedDefault.updateSetting(e), er(e, !1)
              },
              onCancel: () => {
                z.MessageRequestRestrictedDefault.updateSetting(e), z.MessageRequestRestrictedGuildIds.updateSetting(e ? Y.default.keys(y.default.getGuilds()) : []), er(e, !0)
              }
            })
          },
          hideBorder: !0,
          children: et.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER
        })
      }), (0, a.jsx)(q.default, {
        animationDelay: 700,
        scrollPosition: J.PrivacyAndSafetyScrollPositions.MESSAGE_REQUESTS
      })]
    }), (0, a.jsx)(E.FormDivider, {
      className: ea.marginBottom20
    })]
  })
}

function ed() {
  var e;
  let t = null === (e = (0, M.default)()) || void 0 === e || e,
    {
      explicitContentGuilds: s,
      explicitContentFriendDm: n,
      explicitContentNonFriendDm: l
    } = (0, p.useExplicitContentSettingOrDefault)(),
    i = (0, Q.useScrollToSetting)(J.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS),
    r = [{
      value: S.ExplicitContentRedaction.BLUR,
      label: et.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }, {
      value: S.ExplicitContentRedaction.BLOCK,
      label: et.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLOCK
    }],
    o = [{
      value: S.ExplicitContentRedaction.BLUR,
      label: et.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }],
    d = {
      value: S.ExplicitContentRedaction.SHOW,
      label: et.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_SHOW
    };
  return t && (r.unshift(d), o.unshift(d)), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: es.settingsBackgroundFlashElement,
      children: [(0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H5,
        faded: !0,
        className: ea.marginBottom8,
        children: et.default.Messages.OBSCURED_CONTENT_SETTINGS_HEADER
      }), (0, a.jsx)(E.FormText, {
        type: E.FormTextTypes.DESCRIPTION,
        className: ea.marginBottom8,
        children: et.default.Messages.OBSCURED_CONTENT_SETTINGS_DESC.format({
          learnMoreLink: H.default.getArticleURL($.HelpdeskArticles.EXPLICIT_MEDIA_REDACTION)
        })
      }), (0, a.jsx)(E.FormItem, {
        ref: i,
        tag: E.FormTitleTags.H3,
        className: ea.marginBottom20,
        title: et.default.Messages.OBSCURED_CONTENT_SETTING_FRIENDS,
        children: (0, a.jsx)(E.SingleSelect, {
          options: r,
          value: n,
          onChange: e => (0, N.updateExplicitContentSetting)({
            explicitContentFriendDm: e
          })
        })
      }), (0, a.jsx)(E.FormItem, {
        tag: E.FormTitleTags.H3,
        className: ea.marginBottom20,
        title: et.default.Messages.OBSCURED_CONTENT_SETTING_NON_FRIENDS,
        children: (0, a.jsx)(E.SingleSelect, {
          options: r,
          value: l,
          onChange: e => (0, N.updateExplicitContentSetting)({
            explicitContentNonFriendDm: e
          })
        })
      }), t && (0, a.jsx)(E.FormItem, {
        tag: E.FormTitleTags.H3,
        className: ea.marginBottom20,
        title: et.default.Messages.OBSCURED_CONTENT_SETTING_GUILDS,
        children: (0, a.jsx)(E.SingleSelect, {
          options: o,
          value: s,
          onChange: e => (0, N.updateExplicitContentSetting)({
            explicitContentGuilds: e
          })
        })
      }), (0, a.jsx)(q.default, {
        scrollPosition: J.PrivacyAndSafetyScrollPositions.EXPLICIT_MEDIA_REDACTION
      })]
    }), (0, a.jsx)(E.FormDivider, {
      className: ea.marginBottom20
    })]
  })
}

function eu(e) {
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

function ec(e) {
  let {
    message: t
  } = e;
  eu({
    header: et.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
    confirmText: et.default.Messages.OKAY,
    body: t
  })
}
class eS extends n.PureComponent {
  componentDidMount() {
    (0, _.fetchConsents)(), (0, m.getHarvestStatus)().then(e => {
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
    eu({
      header: et.default.Messages.USER_DM_SETTINGS_TITLE,
      body: et.default.Messages.USER_DM_SETTINGS_DESCRIPTION,
      confirmText: et.default.Messages.NO_TEXT,
      cancelText: et.default.Messages.YES_TEXT,
      confirmButtonColor: E.Button.Colors.BRAND,
      onConfirm: () => {
        z.DefaultGuildsRestricted.updateSetting(e), this.trackDefaultDmsUpdated(e, !1)
      },
      onCancel: () => {
        z.DefaultGuildsRestricted.updateSetting(e), z.RestrictedGuildIds.updateSetting(e ? Y.default.keys(y.default.getGuilds()) : []), this.trackDefaultDmsUpdated(e, !0)
      }
    })
  }
  trackDefaultDmsUpdated(e, t) {
    w.default.track($.AnalyticEvents.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  showMessageRequestRestrictionModal(e) {
    eu({
      header: et.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
      body: et.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
      confirmText: et.default.Messages.NO_TEXT,
      cancelText: et.default.Messages.YES_TEXT,
      confirmButtonColor: E.Button.Colors.BRAND,
      onConfirm: () => {
        z.MessageRequestRestrictedDefault.updateSetting(e), this.trackDefaultMessageRequestUpdated(e, !1)
      },
      onCancel: () => {
        z.MessageRequestRestrictedDefault.updateSetting(e), z.MessageRequestRestrictedGuildIds.updateSetting(e ? Y.default.keys(y.default.getGuilds()) : []), this.trackDefaultMessageRequestUpdated(e, !0)
      }
    })
  }
  trackDefaultMessageRequestUpdated(e, t) {
    w.default.track($.AnalyticEvents.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  renderLegacyExplicitContentFilter(e) {
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)(E.FormItem, {
        tag: E.FormTitleTags.H3,
        className: ea.marginBottom20,
        title: et.default.Messages.USER_EXPLICIT_CONTENT_FILTER_V2,
        children: [(0, a.jsx)(E.FormText, {
          type: E.FormTextTypes.DESCRIPTION,
          className: ea.marginBottom8,
          children: et.default.Messages.USER_EXPLICIT_CONTENT_FILTER_HELP_V3.format({
            appealLink: H.default.getArticleURL($.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
          })
        }), (0, a.jsx)(E.RadioGroup, {
          value: this.props.explicitContentFilter,
          options: (0, V.generateExplicitImageOptions)(),
          onChange: t => {
            let {
              value: s
            } = t;
            this.props.dmSpamFilter === S.DmSpamFilterV2.DEFAULT_UNSET ? z.DmSpamFilterV2.updateSetting(e).then(() => {
              z.ExplicitContentFilter.updateSetting(s)
            }) : z.ExplicitContentFilter.updateSetting(s)
          }
        })]
      })
    })
  }
  renderDMSafety() {
    var e;
    let t = this.props.dmSpamFilter !== S.DmSpamFilterV2.DEFAULT_UNSET ? this.props.dmSpamFilter : null !== (e = Z.ExplicitContentFilterToDmSpamFilterV2.get(this.props.explicitContentFilter)) && void 0 !== e ? e : S.DmSpamFilterV2.NON_FRIENDS;
    return this.props.mediaRedactionIsEnabled ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(E.FormSection, {
        tag: E.FormTitleTags.H3,
        className: ea.marginBottom20,
        children: [(0, a.jsx)(ed, {}), (0, a.jsxs)(E.FormItem, {
          tag: E.FormTitleTags.H5,
          className: ea.marginBottom4,
          title: et.default.Messages.USER_DM_SPAM_FILTER,
          children: [(0, a.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: ea.marginBottom8,
            children: et.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
              appealLink: H.default.getArticleURL($.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
            })
          }), (0, a.jsx)(E.RadioGroup, {
            value: t,
            options: (0, V.generateDmSpamOptions)(),
            onChange: e => {
              let {
                value: t
              } = e;
              return z.DmSpamFilterV2.updateSetting(t)
            }
          })]
        })]
      }), (0, a.jsx)(ei, {})]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(E.FormSection, {
        tag: E.FormTitleTags.H5,
        className: ea.marginBottom40,
        title: et.default.Messages.USER_DIRECT_MESSAGE_FILTERS,
        children: [this.renderLegacyExplicitContentFilter(t), (0, a.jsxs)(E.FormItem, {
          tag: E.FormTitleTags.H3,
          className: ea.marginBottom4,
          title: et.default.Messages.USER_DM_SPAM_FILTER,
          children: [(0, a.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: ea.marginBottom8,
            children: et.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
              appealLink: H.default.getArticleURL($.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
            })
          }), (0, a.jsx)(E.RadioGroup, {
            value: t,
            options: (0, V.generateDmSpamOptions)(),
            onChange: e => {
              let {
                value: t
              } = e;
              return z.DmSpamFilterV2.updateSetting(t)
            }
          })]
        })]
      }), (0, a.jsx)(ei, {})]
    })
  }
  renderKeywordFiltering() {
    if (!this.props.keywordFilteringEnabled) return null;
    let {
      profanity: e,
      slurs: t,
      sexualContent: s
    } = this.props.keywordFilter;
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)(E.FormSection, {
        tag: E.FormTitleTags.H3,
        className: ea.marginBottom20,
        children: [(0, a.jsx)(E.FormTitle, {
          tag: E.FormTitleTags.H5,
          className: ea.marginBottom8,
          children: et.default.Messages.USER_KEYWORD_FILTERS_TITLE
        }), (0, a.jsx)(E.FormText, {
          type: E.FormTextTypes.DESCRIPTION,
          className: ea.marginBottom8,
          children: et.default.Messages.USER_KEYWORD_FILTERS_DESCRIPTION
        }), (0, a.jsx)(E.FormSwitch, {
          value: e,
          note: et.default.Messages.USER_KEYWORD_FILTERS_PROFANITY_DESCRIPTION,
          onChange: e => z.KeywordFilterSettings.updateSetting({
            profanity: e,
            slurs: t,
            sexualContent: s
          }),
          children: et.default.Messages.USER_KEYWORD_FILTERS_PROFANITY_TITLE
        }), (0, a.jsx)(E.FormSwitch, {
          value: t,
          note: et.default.Messages.USER_KEYWORD_FILTERS_SLURS_DESCRIPTION,
          onChange: t => z.KeywordFilterSettings.updateSetting({
            profanity: e,
            slurs: t,
            sexualContent: s
          }),
          children: et.default.Messages.USER_KEYWORD_FILTERS_SLURS_TITLE
        }), (0, a.jsx)(E.FormSwitch, {
          value: s,
          note: et.default.Messages.USER_KEYWORD_FILTERS_SEXUAL_CONTENT_DESCRIPTION,
          onChange: s => z.KeywordFilterSettings.updateSetting({
            profanity: e,
            slurs: t,
            sexualContent: s
          }),
          children: et.default.Messages.USER_KEYWORD_FILTERS_SEXUAL_CONTENT_TITLE
        })]
      })
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
      className: ea.marginBottom40,
      children: [(0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H5,
        className: ea.marginBottom8,
        children: et.default.Messages.USER_DM_SETTINGS
      }), (0, a.jsx)(E.FormSwitch, {
        value: !n,
        note: et.default.Messages.USER_DM_SETTINGS_HELP,
        onChange: this.handleChangeDefaultGuildsRestricted,
        children: et.default.Messages.NEW_GUILDS_DM_ALLOWED
      }), (0, a.jsx)(E.FormSwitch, {
        value: !!l && e,
        note: et.default.Messages.NSFW_GUILDS_TOGGLE_CAPTION,
        disabled: !l,
        onChange: z.ViewNsfwGuilds.updateSetting,
        children: et.default.Messages.NSFW_GUILDS_TOGGLE_HEADER
      }), (0, a.jsx)(eo, {}), (0, a.jsx)(E.FormSwitch, {
        value: !!l && s,
        note: et.default.Messages.NSFW_DM_COMMANDS_CAPTION,
        disabled: !l,
        onChange: z.ViewNsfwCommands.updateSetting,
        children: et.default.Messages.NSFW_DM_COMMANDS_HEADER
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
      className: ea.marginBottom40,
      children: [(0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H5,
        className: ea.marginBottom8,
        children: et.default.Messages.DATA_PRIVACY_CONTROLS
      }), (0, a.jsx)(E.FormSwitch, {
        value: e,
        note: et.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_NOTE.format({
          helpdeskArticle: H.default.getArticleURL($.HelpdeskArticles.DATA_USED_TO_IMPROVE_DISCORD)
        }),
        onChange: this.handleUsageStatisticsChange,
        children: et.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE
      }), (0, a.jsx)(E.FormSwitch, {
        value: t,
        note: et.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_NOTE_LEARN_MORE.format({
          helpdeskArticle: H.default.getArticleURL($.HelpdeskArticles.DATA_USED_FOR_RECOMMENDED)
        }),
        hideBorder: !0,
        onChange: this.handlePersonalizationChange,
        children: et.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE
      }), (0, a.jsx)(E.FormSwitch, {
        value: !s,
        note: et.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT_FORMATTED.format({
          helpdeskArticle: H.default.getArticleURL($.HelpdeskArticles.DATA_PRIVACY_CONTROLS)
        }),
        onChange: this.handleChangeDropsOptedOut,
        children: (0, a.jsx)("div", {
          children: et.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT
        })
      }), (0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H3,
        className: i()(ea.marginTop20, ea.marginBottom8),
        children: et.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_TITLE
      }), (0, a.jsx)(E.FormText, {
        type: E.FormTextTypes.DESCRIPTION,
        className: ea.marginBottom20,
        children: et.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_NOTE.format({
          onClick: () => {
            g.default.setSection($.UserSettingsSections.ACCOUNT)
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
    } = this.state, i = (0, W.harvestDisabled)(l, t), r = (0, a.jsx)(E.Tooltip, {
      text: t.verified ? null : et.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_TOOLTIP,
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
          children: et.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD
        })
      }
    });
    return i && null != l && (e = (0, a.jsx)(E.Card, {
      className: es.card,
      children: (0, a.jsx)(E.Text, {
        variant: "text-md/normal",
        children: et.default.Messages.DATA_DOWNLOAD_REQUESTED_STATUS_NOTE.format({
          date: u()(l.created_at).add($.REQUEST_DATA_LIMIT_DAYS, "days").format("MMMM Do YYYY")
        })
      })
    }), r = null), null != r && (r = (0, a.jsx)(F.default, {
      children: r
    })), (0, a.jsxs)(n.Fragment, {
      children: [(0, a.jsx)(E.FormDivider, {
        className: ea.marginBottom20
      }), (0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H3,
        children: et.default.Messages.DATA_PRIVACY_CONTROLS_PERSONAL_DATA_TITLE
      }), (0, a.jsx)(E.FormText, {
        type: E.FormTextTypes.DESCRIPTION,
        className: ea.marginBottom20,
        children: et.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_NOTE.format({
          helpdeskArticle: H.default.getArticleURL($.HelpdeskArticles.GDPR_REQUEST_DATA)
        })
      }), e, r]
    })
  }
  renderPrivacyAndTermsNote() {
    return (0, a.jsx)(E.FormSection, {
      className: ea.marginBottom40,
      children: (0, a.jsx)(E.FormNotice, {
        type: E.FormNotice.Types.PRIMARY,
        body: et.default.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
          termsLink: $.MarketingURLs.TERMS,
          privacyLink: $.MarketingURLs.PRIVACY
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
        className: ea.marginBottom20
      }), (0, a.jsxs)(E.FormSection, {
        className: ea.marginBottom40,
        children: [(0, a.jsx)(E.FormTitle, {
          tag: E.FormTitleTags.H5,
          className: ea.marginBottom8,
          children: et.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER
        }), (0, a.jsxs)(E.FormItem, {
          tag: E.FormTitleTags.H5,
          className: ea.marginBottom4,
          children: [(0, a.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: ea.marginBottom8,
            children: et.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_DESC
          }), (0, a.jsx)(E.RadioGroup, {
            options: (0, W.generateNonSpamRetrainingOptInSettingOptions)(),
            value: null == t ? W.NonSpamRetrainingOptInOptions.UNDECIDED : t ? W.NonSpamRetrainingOptInOptions.OPTIN : W.NonSpamRetrainingOptInOptions.OPTOUT,
            onChange: e => {
              let {
                value: t
              } = e;
              return z.NonSpamRetrainingOptIn.updateSetting(W.NonSpamRetrainingOptInOptionsToValue[t])
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
      title: et.default.Messages.PRIVACY_AND_SAFETY,
      children: [this.renderDMSafety(), this.renderKeywordFiltering(), this.renderServerPrivacy(), e ? this.renderDataPrivacy() : null, this.renderPrivacyAndTermsNote(), this.renderStaffOnlySettings()]
    })
  }
  render() {
    let {
      safetyHubFetchError: e,
      subsection: t,
      guildPrivacySettingsEnabled: s
    } = this.props, {
      selectedTab: n
    } = this.state;
    null != t && this.setState({
      selectedTab: t
    });
    let l = n === ee.SafetyHubView.ACCOUNT_STANDING && null != e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(E.TabBar, {
        className: es.settingsTabBar,
        "aria-label": et.default.Messages.SAFETY_HUB_PAGE_TITLE,
        selectedItem: n,
        type: "top",
        look: "brand",
        onItemSelect: this.handleTabSelect,
        children: [(0, a.jsx)(E.TabBar.Item, {
          className: es.settingsTabBarItem,
          id: ee.SafetyHubView.SETTINGS,
          "aria-label": et.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS,
          children: et.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS
        }), s ? (0, a.jsx)(E.TabBar.Item, {
          className: es.settingsTabBarItem,
          id: ee.SafetyHubView.GUILD_SETTINGS,
          "aria-label": et.default.Messages.PRIVACY_AND_SAFETY_GUILD_TAB_TITLE,
          children: et.default.Messages.PRIVACY_AND_SAFETY_GUILD_TAB_TITLE
        }) : null, (0, a.jsx)(E.TabBar.Item, {
          className: es.settingsTabBarItem,
          id: ee.SafetyHubView.ACCOUNT_STANDING,
          "aria-label": et.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
          children: et.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2
        })]
      }), (0, a.jsx)(E.TabBar.Panel, {
        id: n,
        "aria-labelledby": (0, k.uid)(),
        className: i()(es.contentPanel, {
          [es.contentPanelNagbar]: l
        }),
        children: (0, a.jsx)("div", {
          children: this.SETTINGS_TABS[n]()
        })
      })]
    })
  }
  constructor(e) {
    super(e), en(this, "SETTINGS_TABS", {
      [ee.SafetyHubView.SETTINGS]: () => this.renderSettingsBody(),
      [ee.SafetyHubView.ACCOUNT_STANDING]: () => (0, a.jsx)(D.default, {}),
      [ee.SafetyHubView.GUILD_SETTINGS]: () => (0, a.jsx)(el, {})
    }), en(this, "handleChangeDefaultGuildsRestricted", e => {
      this.setState({
        defaultGuildsRestricted: !e
      }, () => this.showGuildRestrictionModal(!e))
    }), en(this, "handleChangeDropsOptedOut", () => {
      z.DropsOptedOut.updateSetting(!this.props.dropsOptedOut)
    }), en(this, "handleUsageStatisticsChange", () => {
      this.props.usageStatistics ? eu({
        header: et.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_TITLE,
        body: et.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_BODY,
        confirmText: et.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CONFIRM,
        cancelText: et.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CANCEL,
        onConfirm: () => (0, _.setConsents)([], [$.Consents.USAGE_STATISTICS]).catch(ec)
      }) : (0, _.setConsents)([$.Consents.USAGE_STATISTICS], []).catch(ec)
    }), en(this, "handlePersonalizationChange", () => {
      this.props.personalization ? eu({
        header: et.default.Messages.PERSONALIZATION_DISABLE_MODAL_TITLE,
        confirmText: et.default.Messages.PERSONALIZATION_DISABLE_MODAL_CONFIRM,
        cancelText: et.default.Messages.PERSONALIZATION_DISABLE_MODAL_CANCEL,
        onConfirm: () => {
          (0, _.setConsents)([], [$.Consents.PERSONALIZATION]).catch(ec)
        },
        body: et.default.Messages.PERSONALIZATION_DISABLE_MODAL_BODY
      }) : (0, _.setConsents)([$.Consents.PERSONALIZATION], []).catch(ec)
    }), en(this, "handleDataDownloadRequest", () => {
      eu({
        header: et.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_TITLE,
        body: et.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_NOTE,
        confirmText: et.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CONFIRM,
        cancelText: et.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CANCEL,
        onConfirm: () => {
          this.setState({
            requestingHarvest: !0
          }, () => {
            (0, m.requestHarvest)().then(e => {
              null != e && null != e.body ? (this.setState({
                currentHarvestRequest: e.body
              }), f.default.show({
                body: et.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_SUCCESS
              })) : f.default.show({
                title: et.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
                body: et.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
              })
            }, () => f.default.show({
              title: et.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
              body: et.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
            })).finally(() => this.setState({
              requestingHarvest: !1
            }))
          })
        }
      })
    }), en(this, "handleTabSelect", e => {
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
      selectedTab: ee.SafetyHubView.SETTINGS
    }
  }
}

function eE() {
  let e = (0, c.useStateFromStores)([G.default], () => {
      let e = G.default.getCurrentUser();
      return o()(null != e, "ConnectedUserSettingsPrivacySafety: currentUser cannot be undefined"), e
    }),
    t = (0, c.useStateFromStoresObject)([U.default], () => ({
      fetchedConsents: U.default.fetchedConsents,
      usageStatistics: U.default.hasConsented($.Consents.USAGE_STATISTICS),
      personalization: U.default.hasConsented($.Consents.PERSONALIZATION)
    })),
    s = (0, c.useStateFromStores)([L.default], () => L.default.getFetchError()),
    n = (0, c.useStateFromStores)([B.default], () => B.default.getSubsection()),
    l = (0, h.useIsEligibleForExplicitMediaRedaction)(),
    i = (0, O.useIsEligibleForKeywordFiltering)({
      location: "web_user_privacy_and_safety_settings"
    }),
    r = (0, x.useKeywordFilterSettings)(),
    d = (0, M.default)(),
    u = (0, K.useServerPrivacySettingsInUserSettingsEnabled)({
      location: "user_settings_privacy_safety"
    });
  return (0, a.jsx)(eS, {
    currentUser: e,
    defaultGuildsRestricted: z.DefaultGuildsRestricted.useSetting(),
    nonSpamRetrainingOptIn: z.NonSpamRetrainingOptIn.useSetting(),
    viewNsfwGuilds: z.ViewNsfwGuilds.useSetting(),
    viewNsfwCommands: z.ViewNsfwCommands.useSetting(),
    explicitContentFilter: z.ExplicitContentFilter.useSetting(),
    keywordFilter: r,
    dmSpamFilter: z.DmSpamFilterV2.useSetting(),
    showCurrentGame: z.ShowCurrentGame.useSetting(),
    dropsOptedOut: z.DropsOptedOut.useSetting(),
    safetyHubFetchError: s,
    mediaRedactionIsEnabled: l,
    keywordFilteringEnabled: i,
    userIsConsideredAdult: null == d || d,
    subsection: n,
    guildPrivacySettingsEnabled: u,
    ...t
  })
}