"use strict";
t.d(s, {
  O: function() {
    return eN
  },
  Z: function() {
    return eS
  }
}), t(47120), t(733860);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(512722),
  o = t.n(r),
  c = t(392711),
  d = t.n(c),
  u = t(442837),
  E = t(692547),
  _ = t(780384),
  I = t(481060),
  T = t(852860),
  N = t(902840),
  m = t(410030),
  S = t(100527),
  h = t(367907),
  g = t(906732),
  x = t(740504),
  C = t(933557),
  R = t(471445),
  L = t(890477),
  O = t(688465),
  A = t(807582),
  p = t(48217),
  M = t(26323),
  f = t(35125),
  v = t(536442),
  D = t(142497),
  Z = t(884858),
  j = t(516129),
  U = t(813197),
  G = t(208567),
  P = t(592125),
  b = t(324067),
  B = t(650774),
  y = t(496675),
  F = t(699516),
  w = t(594174),
  k = t(285952),
  H = t(709586),
  V = t(768581),
  Y = t(630388),
  W = t(823379),
  K = t(63063),
  z = t(434404),
  q = t(999382),
  X = t(203377),
  Q = t(981631),
  J = t(30513),
  $ = t(486324),
  ee = t(200299),
  es = t(689938),
  et = t(81041),
  en = t(935653),
  ei = t(449874);

function el(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let ea = "NO_AFK_CHANNEL",
  er = "NO_SYSTEM_CHANNEL",
  eo = "".concat(60),
  ec = "".concat(300),
  ed = "".concat(900),
  eu = "".concat(1800),
  eE = "".concat(3600);

function e_(e) {
  return eI(e[0])
}

function eI(e) {
  if (null == e) return;
  let {
    label: s,
    channel: t,
    category: i
  } = e, l = (0, R.KS)(t), a = null != i ? (0, C.F6)(i, w.default, F.Z) : null;
  return (0, n.jsx)(I.IconSelectOption, {
    title: s,
    icon: l,
    subtitle: a
  })
}

function eT(e) {
  return {
    value: e.id,
    label: (0, C.F6)(e, w.default, F.Z),
    channel: e,
    category: P.Z.getChannel(e.parent_id)
  }
}
let eN = () => {
  let {
    guild: e,
    originalGuild: s,
    submitting: t,
    errors: l
  } = (0, u.cj)([q.Z], () => q.Z.getProps()), a = i.useMemo(() => (0, X.LG)(l), [l]), r = i.useCallback(() => {
    if (null == e) return;
    let t = {
      name: e.name,
      icon: e.icon,
      splash: e.splash,
      afkChannelId: e.afkChannelId,
      afkTimeout: e.afkTimeout,
      systemChannelId: e.systemChannelId,
      safetyAlertsChannelId: e.safetyAlertsChannelId,
      verificationLevel: e.verificationLevel,
      defaultMessageNotifications: e.defaultMessageNotifications,
      explicitContentFilter: e.explicitContentFilter,
      description: e.description,
      banner: e.banner,
      systemChannelFlags: e.systemChannelFlags,
      publicUpdatesChannelId: e.publicUpdatesChannelId,
      premiumProgressBarEnabled: e.premiumProgressBarEnabled,
      homeHeader: e.homeHeader,
      clan: e.clan
    };
    !(0, W.OL)(new Set(e.features), new Set(s.features)) && (t.features = e.features), z.Z.saveGuild(e.id, t)
  }, [e, s]), o = i.useCallback(() => {
    if (null != e) z.Z.init(e.id)
  }, [e]);
  return (0, n.jsx)(T.Z, {
    submitting: t,
    errorMessage: a,
    onSave: r,
    onReset: o
  })
};
class em extends i.PureComponent {
  componentDidMount() {
    if (this.props.subsection === Q.KsC.DISPLAY && null != this._displaySectionRef.current) {
      let e = this._displaySectionRef.current;
      setTimeout(() => e.scrollIntoView(), 0)
    } else if (this.props.subsection === Q.KsC.INVITE && null != this._inviteSectionRef.current) {
      let e = this._inviteSectionRef.current;
      setTimeout(() => e.scrollIntoView(), 0)
    } else if (this.props.subsection === Q.KsC.DEFAULT_NOTIFICATIONS && null != this._notificationSectionRef.current) {
      let e = this._notificationSectionRef.current;
      setTimeout(() => e.scrollIntoView(), 0)
    }
  }
  handleNameChange(e) {
    z.Z.updateGuild({
      name: e
    })
  }
  handleAFKChannelChange(e) {
    e === ea && (e = null), z.Z.updateGuild({
      afkChannelId: e
    })
  }
  handleAFKTimeoutChange(e) {
    z.Z.updateGuild({
      afkTimeout: parseInt(e, 10)
    })
  }
  handleSystemChannelChange(e) {
    e === er && (e = null), z.Z.updateGuild({
      systemChannelId: e
    })
  }
  handleDefaultMessageNotificationsChange(e) {
    let {
      value: s
    } = e;
    z.Z.updateGuild({
      defaultMessageNotifications: s
    })
  }
  handleSplashChange(e) {
    z.Z.updateGuild({
      splash: e
    })
  }
  handleSystemChannelFlagsChange(e, s) {
    let {
      guild: t
    } = this.props, n = (0, Y.mB)(t.systemChannelFlags, e, s);
    z.Z.updateGuild({
      systemChannelFlags: n
    })
  }
  handlePremiumProgressBarEnabledChange(e) {
    z.Z.updateGuild({
      premiumProgressBarEnabled: e
    })
  }
  handleChangeDescription(e) {
    z.Z.updateGuild({
      description: e
    })
  }
  renderBaseSettings() {
    let {
      guild: e,
      errors: s,
      canManageGuild: t
    } = this.props;
    return (0, n.jsxs)(k.Z, {
      className: a()(et.__invalid_baseSection),
      children: [(0, n.jsxs)(k.Z, {
        basis: "50%",
        justify: k.Z.Justify.BETWEEN,
        children: [(0, n.jsxs)(k.Z.Child, {
          wrap: !0,
          children: [(0, n.jsx)(G.Z, {
            showIcon: !0,
            name: e.name,
            image: e.icon,
            onChange: this.handleIconChange,
            disabled: !t,
            hint: es.Z.Messages.CHANGE_ICON,
            makeURL: s => V.ZP.getGuildIconURL({
              id: e.id,
              icon: s,
              canAnimate: !0,
              size: 100
            }),
            className: a()({
              [et.avatarUploader]: t,
              [et.avatarUploaderDisabled]: !t
            }),
            imageClassName: a()(et.avatarUploaderInner, {
              [et.avatarUploaderInnerEmpty]: null == e.icon
            })
          }), null != s.icon ? (0, n.jsx)("div", {
            className: et.iconError,
            children: s.icon
          }) : null]
        }), (0, n.jsxs)(k.Z, {
          direction: k.Z.Direction.VERTICAL,
          align: k.Z.Align.START,
          style: {
            maxWidth: 180
          },
          children: [(0, n.jsx)(I.FormText, {
            type: I.FormTextTypes.DESCRIPTION,
            className: et.marginBottom8,
            children: es.Z.Messages.GUILD_SETTINGS_ICON_RECOMMEND
          }), (0, n.jsxs)(I.Button, {
            look: I.ButtonLooks.OUTLINED,
            color: I.ButtonColors.PRIMARY,
            disabled: !t,
            className: et.marginTop8,
            onClick: this.handleUploadImage,
            children: [es.Z.Messages.UPLOAD_IMAGE, (0, n.jsx)(U.ZP, {
              ref: this._imageInputRef,
              onChange: this.handleOpenImageCroppingModal,
              disabled: !t
            })]
          })]
        })]
      }), (0, n.jsx)(k.Z.Child, {
        basis: "50%",
        children: (0, n.jsx)(I.FormItem, {
          title: es.Z.Messages.FORM_LABEL_SERVER_NAME,
          className: et.marginBottom20,
          children: (0, n.jsx)(I.TextInput, {
            type: "text",
            disabled: !t,
            value: e.name,
            maxLength: 100,
            onChange: this.handleNameChange,
            error: s.name
          })
        })
      })]
    })
  }
  renderAFKSection() {
    var e;
    let {
      guild: s,
      canManageGuild: t,
      channels: i
    } = this.props, l = null != s.afkTimeout ? "".concat(s.afkTimeout) : null, a = null !== (e = s.afkChannelId) && void 0 !== e ? e : ea, r = [{
      value: eo,
      label: es.Z.Messages.DURATION_MINUTES.format({
        minutes: 1
      })
    }, {
      value: ec,
      label: es.Z.Messages.DURATION_MINUTES.format({
        minutes: 5
      })
    }, {
      value: ed,
      label: es.Z.Messages.DURATION_MINUTES.format({
        minutes: 15
      })
    }, {
      value: eu,
      label: es.Z.Messages.DURATION_MINUTES.format({
        minutes: 30
      })
    }, {
      value: eE,
      label: es.Z.Messages.DURATION_HOURS.format({
        hours: 1
      })
    }], o = d()(i).filter(e => {
      let {
        channel: s
      } = e;
      return s.type === Q.d4z.GUILD_VOICE
    }).map(e => {
      let {
        channel: s
      } = e;
      return eT(s)
    }).value();
    return o.unshift({
      value: ea,
      label: es.Z.Messages.NO_AFK_CHANNEL
    }), (0, n.jsxs)(I.FormSection, {
      className: et.divider,
      children: [(0, n.jsxs)(k.Z, {
        children: [(0, n.jsx)(k.Z.Child, {
          basis: "50%",
          children: (0, n.jsx)(I.FormItem, {
            title: es.Z.Messages.FORM_LABEL_AFK_CHANNEL,
            children: (0, n.jsx)(I.SingleSelect, {
              value: a,
              options: o,
              onChange: this.handleAFKChannelChange,
              isDisabled: !t,
              renderOptionLabel: eI,
              renderOptionValue: e_
            })
          })
        }), (0, n.jsx)(k.Z.Child, {
          basis: "50%",
          children: (0, n.jsx)(I.FormItem, {
            title: es.Z.Messages.FORM_LABEL_AFK_TIMEOUT,
            children: (0, n.jsx)(I.SingleSelect, {
              value: l,
              options: r,
              isDisabled: a === ea || !t,
              onChange: this.handleAFKTimeoutChange
            })
          })
        })]
      }), (0, n.jsx)(I.FormText, {
        className: et.marginTop8,
        type: I.FormTextTypes.DESCRIPTION,
        children: es.Z.Messages.FORM_HELP_AFK_CHANNEL
      })]
    })
  }
  renderJoinNotificationSection() {
    var e;
    let {
      guild: s,
      channels: t,
      canManageGuild: i,
      eligibleForDeadchatPrompt: l
    } = this.props, r = null !== (e = s.systemChannelId) && void 0 !== e ? e : er, o = d()(t).filter(e => {
      let {
        channel: s
      } = e;
      return s.type === Q.d4z.GUILD_TEXT
    }).map(e => {
      let {
        channel: s
      } = e;
      return eT(s)
    }).value();
    o.unshift({
      value: er,
      label: es.Z.Messages.NO_SYSTEM_CHANNEL
    });
    let c = (0, f.eI)(s),
      u = c || (0, Y.yE)(s.systemChannelFlags, Q.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
      E = c || (0, Y.yE)(s.systemChannelFlags, Q.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
    return (0, n.jsxs)(I.FormSection, {
      className: et.divider,
      children: [(0, n.jsx)(I.FormTitle, {
        children: es.Z.Messages.FORM_LABEL_SYSTEM_CHANNEL
      }), (0, n.jsx)(I.SingleSelect, {
        value: r,
        options: o,
        isDisabled: !i,
        onChange: this.handleSystemChannelChange,
        renderOptionLabel: eI,
        renderOptionValue: e_
      }), (0, n.jsx)(I.FormText, {
        className: et.marginTop8,
        type: I.FormTextTypes.DESCRIPTION,
        children: es.Z.Messages.FORM_HELP_SYSTEM_CHANNEL
      }), (0, n.jsx)(I.FormSwitch, {
        className: et.marginTop20,
        onChange: this.handleShowJoinsChange,
        value: !(0, Y.yE)(s.systemChannelFlags, Q.xmn.SUPPRESS_JOIN_NOTIFICATIONS),
        hideBorder: !0,
        disabled: !i || r === er,
        children: es.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_JOIN_MESSAGES
      }), (0, n.jsx)(I.FormSwitch, {
        className: a()(et.__invalid_marginReset, et.marginTop20),
        onChange: this.handleShowJoinRepliesChange,
        value: !(0, Y.yE)(s.systemChannelFlags, Q.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
        hideBorder: !0,
        disabled: !i || r === er,
        children: es.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_JOIN_MESSAGE_REPLIES
      }), (0, n.jsx)(I.FormSwitch, {
        className: a()(et.__invalid_marginReset, et.marginTop20),
        onChange: this.handleShowSubscriptionsChange,
        value: !(0, Y.yE)(s.systemChannelFlags, Q.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
        hideBorder: !0,
        disabled: !i || r === er,
        children: es.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTION_MESSAGES
      }), (0, n.jsx)(I.FormSwitch, {
        className: a()(et.__invalid_marginReset, et.marginTop20),
        onChange: this.handleShowGuildRemindersChange,
        value: !(0, Y.yE)(s.systemChannelFlags, Q.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
        hideBorder: !0,
        disabled: !i || r === er,
        children: es.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_GUILD_REMINDERS
      }), u && (0, n.jsx)(I.FormSwitch, {
        className: a()(et.__invalid_marginReset, et.marginTop20),
        onChange: this.handleShowGuildRoleSubscriptionPurchaseMessages,
        value: !(0, Y.yE)(s.systemChannelFlags, Q.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
        hideBorder: !0,
        disabled: !i || r === er,
        children: es.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_ROLE_SUBSCRIPTION_PURCHASE_MESSAGES
      }), E && (0, n.jsx)(I.FormSwitch, {
        className: a()(et.__invalid_marginReset, et.marginTop20),
        onChange: this.handleShowGuildRoleSubscriptionPurchaseMessageRepliesChange,
        value: !(0, Y.yE)(s.systemChannelFlags, Q.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
        hideBorder: !0,
        disabled: !i || r === er,
        children: es.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_ROLE_SUBSCRIPTION_PURCHASE_MESSAGE_REPLIES
      }), l && (0, n.jsx)(I.FormSwitch, {
        className: a()(et.__invalid_marginReset, et.marginTop20),
        onChange: this.handleShowDeadchatPromptMessageChange,
        value: !(0, Y.yE)(s.systemChannelFlags, Q.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
        hideBorder: !0,
        disabled: !i || r === er,
        children: (0, n.jsxs)("div", {
          className: et.flexRow,
          children: [es.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_DEADCHAT_PROMPT_MESSAGE, (0, n.jsx)(O.Z, {})]
        })
      })]
    })
  }
  renderNotificationSection() {
    let {
      guild: e,
      canManageGuild: s,
      guildMemberCount: t
    } = this.props, i = [{
      name: es.Z.Messages.FORM_LABEL_ALL_MESSAGES,
      value: Q.bL.ALL_MESSAGES,
      desc: null != t && t >= Q.qWG ? es.Z.Messages.GUILD_SETTINGS_DEFAULT_NOTIFICATIONS_LARGE_GUILD_NOTIFY_ALL : null
    }, {
      name: es.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
      value: Q.bL.ONLY_MENTIONS
    }];
    return (0, n.jsx)("div", {
      ref: this._notificationSectionRef,
      children: (0, n.jsxs)(I.FormSection, {
        className: et.divider,
        children: [(0, n.jsx)(I.FormTitle, {
          children: es.Z.Messages.FORM_LABEL_DEFAULT_NOTIFICATION_SETTINGS
        }), (0, n.jsx)(I.FormText, {
          type: I.FormTextTypes.DESCRIPTION,
          className: et.marginBottom20,
          children: es.Z.Messages.GUILD_SETTINGS_DEFAULT_NOTIFICATION_SETTINGS_INTRO
        }), (0, n.jsx)(I.FormText, {
          type: I.FormTextTypes.DESCRIPTION,
          className: et.marginBottom20,
          children: es.Z.Messages.GUILD_SETTINGS_DEFAULT_NOTIFICATION_SETTINGS_TIP
        }), (0, n.jsx)(I.RadioGroup, {
          options: i,
          value: e.defaultMessageNotifications,
          disabled: !s,
          onChange: this.handleDefaultMessageNotificationsChange
        })]
      })
    })
  }
  renderSummariesSection() {
    let {
      guild: e,
      canManageGuild: s
    } = this.props;
    return (0, N.Jc)(e, !1) ? (0, n.jsx)("div", {
      children: (0, n.jsx)(I.FormSection, {
        className: et.divider,
        children: (0, n.jsx)(I.FormSwitch, {
          className: a()(et.marginTop8, et.marginBottom8),
          onChange: this.handleConversationSummariesToggle,
          value: e.hasFeature(Q.oNc.SUMMARIES_ENABLED_BY_USER),
          hideBorder: !0,
          note: es.Z.Messages.GUILD_SETTINGS_SUMMARIES_TOGGLE_DESCRIPTION.format({
            helpdeskArticle: K.Z.getArticleURL(Q.BhN.CONVERSATION_SUMMARIES)
          }),
          disabled: !s,
          children: (0, n.jsxs)("div", {
            className: et.badgedItem,
            children: [es.Z.Messages.GUILD_SETTINGS_SUMMARIES_TOGGLE, (0, n.jsx)(I.TextBadge, {
              text: es.Z.Messages.BETA,
              color: E.Z.unsafe_rawColors.BRAND_500.css,
              className: et.__invalid_betaTag
            })]
          })
        })
      })
    }) : null
  }
  renderServerInviteBGSection() {
    let {
      guild: e,
      canManageGuild: s
    } = this.props, t = e.hasFeature(Q.oNc.INVITE_SPLASH), i = s && t, l = (0, n.jsx)(j.Z, {
      image: e.splash,
      makeURL: s => null != s ? V.ZP.getGuildSplashURL({
        id: e.id,
        splash: s
      }) : null,
      disabled: !i,
      onChange: this.handleSplashChange,
      hint: es.Z.Messages.CHANGE_SPLASH,
      enabled: i,
      maxFileSizeBytes: ee.B,
      onFileSizeError: () => (0, Z.Z)(ee.B)
    });
    return (0, n.jsx)("div", {
      ref: this._inviteSectionRef,
      children: (0, n.jsx)(I.FormSection, {
        className: et.divider,
        children: (0, n.jsxs)(k.Z, {
          basis: "50%",
          direction: k.Z.Direction.HORIZONTAL,
          align: k.Z.Justify.START,
          children: [(0, n.jsxs)(k.Z.Child, {
            wrap: !0,
            basis: "50%",
            children: [(0, n.jsxs)(I.FormTitle, {
              className: et.flexFormTitle,
              children: [(0, n.jsx)("div", {
                children: es.Z.Messages.GUILD_SETTINGS_SERVER_INVITE_BACKGROUND
              }), (0, n.jsx)(A.Z, {
                guild: e,
                guildFeature: Q.oNc.INVITE_SPLASH,
                className: et.guildFeatureAvailabilityIndicator,
                onClick: this.handleInviteSplashUpsellIndicator
              })]
            }), (0, n.jsx)(I.FormText, {
              type: I.FormTextTypes.DESCRIPTION,
              className: et.marginBottom8,
              children: es.Z.Messages.GUILD_SETTINGS_SPLASH_DESCRIPTION
            }), (0, n.jsx)(I.FormText, {
              type: I.FormTextTypes.DESCRIPTION,
              children: es.Z.Messages.GUILD_SETTINGS_SPLASH_RECOMMEND.format({
                articleURL: K.Z.getArticleURL(Q.BhN.GUILD_INVITE_SPLASH)
              })
            }), t ? (0, n.jsxs)(I.Button, {
              disabled: !i,
              color: I.ButtonColors.BRAND,
              className: et.marginTop16,
              children: [es.Z.Messages.UPLOAD_BACKGROUND, (0, n.jsx)(U.ZP, {
                disabled: !i,
                onChange: this.handleSplashChange,
                maxFileSizeBytes: ee.B,
                onFileSizeError: () => (0, Z.Z)(ee.B)
              })]
            }) : this.uploadBGUpsellButton(this.handleInviteSplashUpsellButton)]
          }), (0, n.jsx)(k.Z.Child, {
            wrap: !0,
            basis: "50%",
            children: t ? l : (0, n.jsx)(I.Clickable, {
              "aria-hidden": !0,
              tabIndex: -1,
              className: et.upsell,
              onClick: this.handleInviteSplashUpsellUpload,
              children: l
            })
          })]
        })
      })
    })
  }
  renderBanner() {
    let {
      guild: e,
      canManageGuild: s,
      analyticsLocations: t
    } = this.props, i = e.hasFeature(Q.oNc.BANNER), l = e.hasFeature(Q.oNc.ANIMATED_BANNER), a = i && s, r = (0, n.jsx)(j.Z, {
      image: e.banner,
      makeURL: s => null != s ? V.ZP.getGuildBannerURL({
        id: e.id,
        banner: s
      }, l) : null,
      disabled: !a,
      onChange: this.handleBannerChange,
      hint: es.Z.Messages.CHANGE_SPLASH,
      onOpenImageSelectModal: () => eh($.pC.GUILD_BANNER, ee.B, this.handleBannerChange, !0, {
        page: Q.ZY5.GUILD_SETTINGS,
        section: Q.jXE.GUILD_BANNER
      }, t),
      enabled: a
    }), o = (0, n.jsx)(I.Button, {
      disabled: !a,
      color: I.Button.Colors.BRAND,
      className: et.marginTop16,
      onClick: () => eh($.pC.GUILD_BANNER, ee.B, this.handleBannerChange, !0, {
        page: Q.ZY5.GUILD_SETTINGS,
        section: Q.jXE.GUILD_BANNER
      }, t),
      children: es.Z.Messages.UPLOAD_BACKGROUND
    });
    return (0, n.jsx)(I.FormSection, {
      className: et.divider,
      children: (0, n.jsxs)(k.Z, {
        basis: "50%",
        direction: k.Z.Direction.HORIZONTAL,
        align: k.Z.Justify.START,
        children: [(0, n.jsxs)(k.Z.Child, {
          wrap: !0,
          basis: "50%",
          children: [(0, n.jsxs)(I.FormTitle, {
            className: et.flexFormTitle,
            children: [(0, n.jsx)("div", {
              children: es.Z.Messages.FORM_LABEL_SERVER_BANNER
            }), (0, n.jsx)(A.Z, {
              guild: e,
              guildFeature: Q.oNc.BANNER,
              className: et.guildFeatureAvailabilityIndicator,
              onClick: this.handleBannerUpsellIndicator
            })]
          }), (0, n.jsx)(I.FormText, {
            type: I.FormTextTypes.DESCRIPTION,
            className: et.marginBottom8,
            children: es.Z.Messages.FORM_HELP_SERVER_BANNER
          }), (0, n.jsx)(I.FormText, {
            type: I.FormTextTypes.DESCRIPTION,
            children: es.Z.Messages.GUILD_SETTINGS_BANNER_RECOMMEND.format({
              articleURL: K.Z.getArticleURL(Q.BhN.GUILD_BANNER_SPLASH)
            })
          }), i ? o : this.uploadBGUpsellButton(this.handleBannerUpsellButton)]
        }), (0, n.jsx)(k.Z.Child, {
          wrap: !0,
          basis: "50%",
          children: i ? r : (0, n.jsx)(I.Clickable, {
            "aria-hidden": !0,
            tabIndex: -1,
            className: et.upsell,
            onClick: this.handleBannerUpsellUpload,
            children: r
          })
        })]
      })
    })
  }
  renderProgressBar() {
    let {
      guild: e,
      canManageGuild: s,
      theme: t
    } = this.props;
    return (0, n.jsx)(I.FormSection, {
      children: (0, n.jsxs)(k.Z, {
        align: k.Z.Align.START,
        children: [(0, n.jsxs)(k.Z, {
          basis: "50%",
          direction: k.Z.Direction.VERTICAL,
          align: k.Z.Align.STRETCH,
          children: [(0, n.jsx)(I.FormSwitch, {
            className: a()(et.marginTop8, et.marginBottom8),
            onChange: this.handlePremiumProgressBarEnabledChange,
            value: e.premiumProgressBarEnabled,
            hideBorder: !0,
            disabled: !s,
            children: es.Z.Messages.GUILD_SETTINGS_PREMIUM_PROGRESS_BAR_TITLE
          }), (0, n.jsx)(I.FormText, {
            type: I.FormTextTypes.DESCRIPTION,
            className: et.marginBottom8,
            children: es.Z.Messages.GUILD_SETTINGS_PREMIUM_PROGRESS_BAR_DESCRIPTION
          })]
        }), (0, n.jsx)(k.Z.Child, {
          wrap: !0,
          basis: "50%",
          children: (0, n.jsx)("img", {
            alt: es.Z.Messages.GUILD_SETTINGS_PREMIUM_PROGRESS_BAR_IMG_ALT,
            src: (0, _.ap)(t) ? ei : en,
            className: et.progressBarImage
          })
        })]
      })
    })
  }
  renderDisplaySection() {
    return (0, n.jsx)("div", {
      ref: this._displaySectionRef,
      children: (0, n.jsxs)(I.FormSection, {
        title: es.Z.Messages.DISPLAY,
        tag: I.FormTitleTags.H1,
        className: et.divider,
        children: [this.renderProgressBar(), this.renderBanner(), this.renderServerInviteBGSection()]
      })
    })
  }
  render() {
    return (0, n.jsxs)(I.FormSection, {
      title: es.Z.Messages.SERVER_OVERVIEW,
      tag: I.FormTitleTags.H1,
      children: [this.renderBaseSettings(), this.renderSummariesSection(), this.renderAFKSection(), this.renderJoinNotificationSection(), this.renderNotificationSection(), this.renderDisplaySection()]
    })
  }
  constructor(...e) {
    super(...e), el(this, "_imageInputRef", i.createRef()), el(this, "_displaySectionRef", i.createRef()), el(this, "_inviteSectionRef", i.createRef()), el(this, "_notificationSectionRef", i.createRef()), el(this, "handleIconChange", e => {
      z.Z.updateGuild({
        icon: e
      })
    }), el(this, "handleOpenImageCroppingModal", (e, s) => {
      (0, I.openModalLazy)(async () => {
        let {
          default: i
        } = await Promise.all([t.e("99387"), t.e("75409")]).then(t.bind(t, 850085));
        return t => (0, n.jsx)(i, {
          onCrop: this.handleIconChange,
          imgURI: e,
          file: s,
          ...t
        })
      })
    }), el(this, "handleUploadImage", e => {
      var s;
      e.target === e.currentTarget && (null === (s = this._imageInputRef.current) || void 0 === s || s.activateUploadDialogue())
    }), el(this, "handleShowJoinsChange", e => this.handleSystemChannelFlagsChange(Q.xmn.SUPPRESS_JOIN_NOTIFICATIONS, !e)), el(this, "handleShowSubscriptionsChange", e => this.handleSystemChannelFlagsChange(Q.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e)), el(this, "handleShowGuildRemindersChange", e => {
      this.handleSystemChannelFlagsChange(Q.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e)
    }), el(this, "handleShowJoinRepliesChange", e => this.handleSystemChannelFlagsChange(Q.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e)), el(this, "handleShowGuildRoleSubscriptionPurchaseMessages", e => {
      this.handleSystemChannelFlagsChange(Q.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e)
    }), el(this, "handleShowDeadchatPromptMessageChange", e => {
      this.handleSystemChannelFlagsChange(Q.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e)
    }), el(this, "handleShowGuildRoleSubscriptionPurchaseMessageRepliesChange", e => {
      this.handleSystemChannelFlagsChange(Q.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e)
    }), el(this, "handleHomeHeaderChange", (e, s) => {
      if (null == e || void 0 === s) {
        z.Z.updateGuild({
          homeHeader: null
        });
        return
      }(0, I.openModalLazy)(async () => {
        let {
          default: i
        } = await Promise.all([t.e("99387"), t.e("75409")]).then(t.bind(t, 850085));
        return t => (0, n.jsx)(i, {
          imgURI: e,
          file: s,
          onCrop: e => z.Z.updateGuild({
            homeHeader: e
          }),
          uploadType: $.pC.HOME_HEADER,
          ...t
        })
      })
    }), el(this, "handleBannerChange", (e, s) => {
      let {
        guild: t,
        analyticsLocations: n
      } = this.props, i = null == s ? void 0 : s.type, l = {
        page: Q.ZY5.GUILD_SETTINGS,
        section: Q.jXE.ANIMATED_GUILD_BANNER_UPSELL,
        object: "temp"
      };
      if (null != i && null != e) {
        if ("image/gif" !== i || t.hasFeature(Q.oNc.ANIMATED_BANNER)) {
          if (!t.hasFeature(Q.oNc.BANNER)) {
            l.object = Q.qAy.IMAGE_CROPPING_MODAL, (0, p.c)({
              guild: t,
              analyticsLocations: n,
              analyticsLocation: l,
              banner: e,
              isGIF: !1
            });
            return
          }
        } else {
          l.object = Q.qAy.GIF_CROPPING_MODAL, (0, p.c)({
            guild: t,
            analyticsLocations: n,
            analyticsLocation: l,
            banner: e,
            isGIF: !0
          });
          return
        }
      }
      z.Z.updateGuild({
        banner: e
      })
    }), el(this, "handleShowModalUpsell", (e, s, t, n) => {
      e.preventDefault(), e.stopPropagation();
      let {
        guild: i,
        analyticsLocations: l
      } = this.props;
      (0, h.yw)(Q.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
        location: {
          section: s,
          object: Q.qAy.LEARN_MORE
        },
        guild_id: null == i ? void 0 : i.id,
        location_stack: l
      }), (0, M.Z)({
        analyticsLocations: l,
        analyticsSourceLocation: {
          section: s,
          object: t,
          page: Q.ZY5.GUILD_SETTINGS
        },
        guild: i,
        perks: n
      })
    }), el(this, "handleInviteSplashUpsellIndicator", e => {
      this.handleShowModalUpsell(e, Q.jXE.GUILD_INVITE_BACKGROUND, Q.qAy.BADGE, (0, J.o9)())
    }), el(this, "handleInviteSplashUpsellButton", e => {
      this.handleShowModalUpsell(e, Q.jXE.GUILD_INVITE_BACKGROUND, Q.qAy.BUTTON_CTA, (0, J.o9)())
    }), el(this, "handleInviteSplashUpsellUpload", e => {
      this.handleShowModalUpsell(e, Q.jXE.GUILD_INVITE_BACKGROUND, Q.qAy.UPLOAD_IMAGE, (0, J.o9)())
    }), el(this, "handleBannerUpsellIndicator", e => {
      this.handleShowModalUpsell(e, Q.jXE.GUILD_BANNER, Q.qAy.BADGE, (0, J.XO)())
    }), el(this, "handleBannerUpsellButton", e => {
      this.handleShowModalUpsell(e, Q.jXE.GUILD_BANNER, Q.qAy.BUTTON_CTA, (0, J.XO)())
    }), el(this, "handleBannerUpsellUpload", e => {
      this.handleShowModalUpsell(e, Q.jXE.GUILD_BANNER, Q.qAy.UPLOAD_IMAGE, (0, J.XO)())
    }), el(this, "handleConversationSummariesToggle", e => {
      let {
        guild: s
      } = this.props, t = new Set(s.features);
      e ? t.add(Q.oNc.SUMMARIES_ENABLED_BY_USER) : t.delete(Q.oNc.SUMMARIES_ENABLED_BY_USER), z.Z.updateGuild({
        features: t
      })
    }), el(this, "uploadBGUpsellButton", e => (0, n.jsxs)(I.ShinyButton, {
      color: I.Button.Colors.GREEN,
      className: a()(et.marginTop16),
      innerClassName: et.upsellButton,
      onClick: e,
      children: [(0, n.jsx)(H.Z, {
        height: 16,
        width: 16,
        className: et.premiumUpsellBadge
      }), " ", es.Z.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA]
    }))
  }
}

function eS() {
  var e;
  let {
    guild: s,
    errors: t,
    submitting: l,
    subsection: a
  } = (0, u.cj)([q.Z], () => q.Z.getProps()), r = (0, m.ZP)(), {
    analyticsLocations: c
  } = (0, g.ZP)(S.Z.OVERVIEW);
  i.useEffect(() => {
    (0, D.Kw)(v.v6.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL)
  }, []);
  let d = (0, u.e7)([b.Z], () => b.Z.getCategories(null == s ? void 0 : s.id)),
    E = i.useMemo(() => (0, x.Z)(d._categories, d), [d]),
    {
      canManageGuild: _,
      isGuildAdmin: I
    } = (0, u.cj)([y.Z], () => ({
      canManageGuild: y.Z.can(Q.Plq.MANAGE_GUILD, s),
      isGuildAdmin: y.Z.can(Q.Plq.ADMINISTRATOR, s)
    })),
    T = (0, u.e7)([B.Z], () => B.Z.getMemberCount(null == s ? void 0 : s.id)),
    N = (0, u.e7)([w.default], () => w.default.getCurrentUser());
  o()(null != N, "GuildSettingsOverview: currentUser cannot be undefined");
  let {
    enableDeadchat: h
  } = L.Z.useExperiment({
    guildId: null !== (e = null == s ? void 0 : s.id) && void 0 !== e ? e : Q.lds,
    location: "guild_settings"
  }, {
    disable: null == s,
    autoTrackExposure: !0
  });
  return null == s ? null : (0, n.jsx)(g.Gt, {
    value: c,
    children: (0, n.jsx)(em, {
      channels: E,
      canManageGuild: _,
      isGuildAdmin: I,
      subsection: a,
      guild: s,
      errors: t,
      submitting: l,
      currentUser: N,
      guildMemberCount: T,
      theme: r,
      analyticsLocations: c,
      eligibleForDeadchatPrompt: h
    })
  })
}

function eh(e, s, i) {
  let l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
    a = arguments.length > 4 ? arguments[4] : void 0,
    r = arguments.length > 5 ? arguments[5] : void 0;
  (0, I.openModalLazy)(async () => {
    let {
      default: o
    } = await Promise.all([t.e("99387"), t.e("82634")]).then(t.bind(t, 28130));
    return t => (0, n.jsx)(o, {
      maxFileSizeBytes: s,
      onComplete: i,
      uploadType: e,
      showUpsellHeader: l,
      analyticsLocation: a,
      analyticsLocations: r,
      ...t
    })
  })
}