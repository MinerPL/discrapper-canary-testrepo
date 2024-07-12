n.d(t, {
  O: function() {
return eS;
  },
  Z: function() {
return eg;
  }
}), n(47120), n(733860);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(512722),
  o = n.n(l),
  c = n(392711),
  d = n.n(c),
  u = n(442837),
  _ = n(692547),
  I = n(780384),
  E = n(481060),
  T = n(852860),
  m = n(902840),
  N = n(410030),
  S = n(100527),
  h = n(367907),
  g = n(906732),
  C = n(740504),
  x = n(933557),
  p = n(471445),
  R = n(890477),
  f = n(162461),
  L = n(34586),
  O = n(688465),
  A = n(807582),
  M = n(48217),
  D = n(26323),
  v = n(35125),
  j = n(536442),
  Z = n(142497),
  b = n(884858),
  U = n(516129),
  G = n(813197),
  P = n(208567),
  B = n(592125),
  y = n(324067),
  F = n(650774),
  w = n(496675),
  k = n(699516),
  H = n(594174),
  V = n(285952),
  Y = n(709586),
  W = n(768581),
  z = n(630388),
  K = n(823379),
  q = n(63063),
  X = n(434404),
  Q = n(999382),
  J = n(203377),
  $ = n(981631),
  ee = n(30513),
  et = n(486324),
  en = n(200299),
  es = n(689938),
  ea = n(633766),
  ei = n(935653),
  er = n(449874);

function el(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let eo = 'NO_AFK_CHANNEL',
  ec = 'NO_SYSTEM_CHANNEL',
  ed = ''.concat(60),
  eu = ''.concat(300),
  e_ = ''.concat(900),
  eI = ''.concat(1800),
  eE = ''.concat(3600);

function eT(e) {
  return em(e[0]);
}

function em(e) {
  if (null == e)
return;
  let {
label: t,
channel: n,
category: a
  } = e, i = (0, p.KS)(n), r = null != a ? (0, x.F6)(a, H.default, k.Z) : null;
  return (0, s.jsx)(E.IconSelectOption, {
title: t,
icon: i,
subtitle: r
  });
}

function eN(e) {
  return {
value: e.id,
label: (0, x.F6)(e, H.default, k.Z),
channel: e,
category: B.Z.getChannel(e.parent_id)
  };
}
let eS = () => {
  let {
guild: e,
originalGuild: t,
submitting: n,
errors: i
  } = (0, u.cj)([Q.Z], () => Q.Z.getProps()), r = a.useMemo(() => (0, J.LG)(i), [i]), l = a.useCallback(() => {
if (null == e)
  return;
let n = {
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
!(0, K.OL)(new Set(e.features), new Set(t.features)) && (n.features = e.features), X.Z.saveGuild(e.id, n);
  }, [
e,
t
  ]), o = a.useCallback(() => {
if (null != e)
  X.Z.init(e.id);
  }, [e]);
  return (0, s.jsx)(T.Z, {
submitting: n,
errorMessage: r,
onSave: l,
onReset: o
  });
};
class eh extends a.PureComponent {
  componentDidMount() {
if (this.props.subsection === $.KsC.DISPLAY && null != this._displaySectionRef.current) {
  let e = this._displaySectionRef.current;
  setTimeout(() => e.scrollIntoView(), 0);
} else if (this.props.subsection === $.KsC.INVITE && null != this._inviteSectionRef.current) {
  let e = this._inviteSectionRef.current;
  setTimeout(() => e.scrollIntoView(), 0);
} else if (this.props.subsection === $.KsC.DEFAULT_NOTIFICATIONS && null != this._notificationSectionRef.current) {
  let e = this._notificationSectionRef.current;
  setTimeout(() => e.scrollIntoView(), 0);
}
  }
  handleNameChange(e) {
X.Z.updateGuild({
  name: e
});
  }
  handleAFKChannelChange(e) {
e === eo && (e = null), X.Z.updateGuild({
  afkChannelId: e
});
  }
  handleAFKTimeoutChange(e) {
X.Z.updateGuild({
  afkTimeout: parseInt(e, 10)
});
  }
  handleSystemChannelChange(e) {
e === ec && (e = null), X.Z.updateGuild({
  systemChannelId: e
});
  }
  handleDefaultMessageNotificationsChange(e) {
let {
  value: t
} = e;
X.Z.updateGuild({
  defaultMessageNotifications: t
});
  }
  handleSplashChange(e) {
X.Z.updateGuild({
  splash: e
});
  }
  handleSystemChannelFlagsChange(e, t) {
let {
  guild: n
} = this.props, s = (0, z.mB)(n.systemChannelFlags, e, t);
X.Z.updateGuild({
  systemChannelFlags: s
});
  }
  handlePremiumProgressBarEnabledChange(e) {
X.Z.updateGuild({
  premiumProgressBarEnabled: e
});
  }
  handleChangeDescription(e) {
X.Z.updateGuild({
  description: e
});
  }
  renderBaseSettings() {
let {
  guild: e,
  errors: t,
  canManageGuild: n
} = this.props;
return (0, s.jsxs)(V.Z, {
  className: r()(ea.__invalid_baseSection),
  children: [
    (0, s.jsxs)(V.Z, {
      basis: '50%',
      justify: V.Z.Justify.BETWEEN,
      children: [
        (0, s.jsxs)(V.Z.Child, {
          wrap: !0,
          children: [
            (0, s.jsx)(P.Z, {
              showIcon: !0,
              name: e.name,
              image: e.icon,
              onChange: this.handleIconChange,
              disabled: !n,
              hint: es.Z.Messages.CHANGE_ICON,
              makeURL: t => W.ZP.getGuildIconURL({
                id: e.id,
                icon: t,
                canAnimate: !0,
                size: 100
              }),
              className: r()({
                [ea.avatarUploader]: n,
                [ea.avatarUploaderDisabled]: !n
              }),
              imageClassName: r()(ea.avatarUploaderInner, {
                [ea.avatarUploaderInnerEmpty]: null == e.icon
              })
            }),
            null != t.icon ? (0, s.jsx)('div', {
              className: ea.iconError,
              children: t.icon
            }) : null
          ]
        }),
        (0, s.jsxs)(V.Z, {
          direction: V.Z.Direction.VERTICAL,
          align: V.Z.Align.START,
          style: {
            maxWidth: 180
          },
          children: [
            (0, s.jsx)(E.FormText, {
              type: E.FormTextTypes.DESCRIPTION,
              className: ea.marginBottom8,
              children: es.Z.Messages.GUILD_SETTINGS_ICON_RECOMMEND
            }),
            (0, s.jsxs)(E.Button, {
              look: E.ButtonLooks.OUTLINED,
              color: E.ButtonColors.PRIMARY,
              disabled: !n,
              className: ea.marginTop8,
              onClick: this.handleUploadImage,
              children: [
                es.Z.Messages.UPLOAD_IMAGE,
                (0, s.jsx)(G.ZP, {
                  ref: this._imageInputRef,
                  onChange: this.handleOpenImageCroppingModal,
                  disabled: !n
                })
              ]
            })
          ]
        })
      ]
    }),
    (0, s.jsx)(V.Z.Child, {
      basis: '50%',
      children: (0, s.jsx)(E.FormItem, {
        title: es.Z.Messages.FORM_LABEL_SERVER_NAME,
        className: ea.marginBottom20,
        children: (0, s.jsx)(E.TextInput, {
          type: 'text',
          disabled: !n,
          value: e.name,
          maxLength: 100,
          onChange: this.handleNameChange,
          error: t.name
        })
      })
    })
  ]
});
  }
  renderAFKSection() {
var e;
let {
  guild: t,
  canManageGuild: n,
  channels: a
} = this.props, i = null != t.afkTimeout ? ''.concat(t.afkTimeout) : null, r = null !== (e = t.afkChannelId) && void 0 !== e ? e : eo, l = [{
    value: ed,
    label: es.Z.Messages.DURATION_MINUTES.format({
      minutes: 1
    })
  },
  {
    value: eu,
    label: es.Z.Messages.DURATION_MINUTES.format({
      minutes: 5
    })
  },
  {
    value: e_,
    label: es.Z.Messages.DURATION_MINUTES.format({
      minutes: 15
    })
  },
  {
    value: eI,
    label: es.Z.Messages.DURATION_MINUTES.format({
      minutes: 30
    })
  },
  {
    value: eE,
    label: es.Z.Messages.DURATION_HOURS.format({
      hours: 1
    })
  }
], o = d()(a).filter(e => {
  let {
    channel: t
  } = e;
  return t.type === $.d4z.GUILD_VOICE;
}).map(e => {
  let {
    channel: t
  } = e;
  return eN(t);
}).value();
return o.unshift({
  value: eo,
  label: es.Z.Messages.NO_AFK_CHANNEL
}), (0, s.jsxs)(E.FormSection, {
  className: ea.divider,
  children: [
    (0, s.jsxs)(V.Z, {
      children: [
        (0, s.jsx)(V.Z.Child, {
          basis: '50%',
          children: (0, s.jsx)(E.FormItem, {
            title: es.Z.Messages.FORM_LABEL_AFK_CHANNEL,
            children: (0, s.jsx)(E.SingleSelect, {
              value: r,
              options: o,
              onChange: this.handleAFKChannelChange,
              isDisabled: !n,
              renderOptionLabel: em,
              renderOptionValue: eT
            })
          })
        }),
        (0, s.jsx)(V.Z.Child, {
          basis: '50%',
          children: (0, s.jsx)(E.FormItem, {
            title: es.Z.Messages.FORM_LABEL_AFK_TIMEOUT,
            children: (0, s.jsx)(E.SingleSelect, {
              value: i,
              options: l,
              isDisabled: r === eo || !n,
              onChange: this.handleAFKTimeoutChange
            })
          })
        })
      ]
    }),
    (0, s.jsx)(E.FormText, {
      className: ea.marginTop8,
      type: E.FormTextTypes.DESCRIPTION,
      children: es.Z.Messages.FORM_HELP_AFK_CHANNEL
    })
  ]
});
  }
  renderJoinNotificationSection() {
var e;
let {
  guild: t,
  channels: n,
  canManageGuild: a,
  eligibleForDeadchatPrompt: i
} = this.props, l = null !== (e = t.systemChannelId) && void 0 !== e ? e : ec, o = d()(n).filter(e => {
  let {
    channel: t
  } = e;
  return t.type === $.d4z.GUILD_TEXT;
}).map(e => {
  let {
    channel: t
  } = e;
  return eN(t);
}).value();
o.unshift({
  value: ec,
  label: es.Z.Messages.NO_SYSTEM_CHANNEL
});
let c = (0, v.eI)(t),
  u = c || (0, z.yE)(t.systemChannelFlags, $.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
  _ = c || (0, z.yE)(t.systemChannelFlags, $.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
return (0, s.jsxs)(E.FormSection, {
  className: ea.divider,
  children: [
    (0, s.jsx)(E.FormTitle, {
      children: es.Z.Messages.FORM_LABEL_SYSTEM_CHANNEL
    }),
    (0, s.jsx)(E.SingleSelect, {
      value: l,
      options: o,
      isDisabled: !a,
      onChange: this.handleSystemChannelChange,
      renderOptionLabel: em,
      renderOptionValue: eT
    }),
    (0, s.jsx)(E.FormText, {
      className: ea.marginTop8,
      type: E.FormTextTypes.DESCRIPTION,
      children: es.Z.Messages.FORM_HELP_SYSTEM_CHANNEL
    }),
    (0, s.jsx)(E.FormSwitch, {
      className: ea.marginTop20,
      onChange: this.handleShowJoinsChange,
      value: !(0, z.yE)(t.systemChannelFlags, $.xmn.SUPPRESS_JOIN_NOTIFICATIONS),
      hideBorder: !0,
      disabled: !a || l === ec,
      children: es.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_JOIN_MESSAGES
    }),
    (0, s.jsx)(E.FormSwitch, {
      className: r()(ea.__invalid_marginReset, ea.marginTop20),
      onChange: this.handleShowJoinRepliesChange,
      value: !(0, z.yE)(t.systemChannelFlags, $.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
      hideBorder: !0,
      disabled: !a || l === ec,
      children: es.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_JOIN_MESSAGE_REPLIES
    }),
    (0, s.jsx)(E.FormSwitch, {
      className: r()(ea.__invalid_marginReset, ea.marginTop20),
      onChange: this.handleShowSubscriptionsChange,
      value: !(0, z.yE)(t.systemChannelFlags, $.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
      hideBorder: !0,
      disabled: !a || l === ec,
      children: es.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTION_MESSAGES
    }),
    (0, s.jsx)(E.FormSwitch, {
      className: r()(ea.__invalid_marginReset, ea.marginTop20),
      onChange: this.handleShowGuildRemindersChange,
      value: !(0, z.yE)(t.systemChannelFlags, $.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
      hideBorder: !0,
      disabled: !a || l === ec,
      children: es.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_GUILD_REMINDERS
    }),
    u && (0, s.jsx)(E.FormSwitch, {
      className: r()(ea.__invalid_marginReset, ea.marginTop20),
      onChange: this.handleShowGuildRoleSubscriptionPurchaseMessages,
      value: !(0, z.yE)(t.systemChannelFlags, $.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
      hideBorder: !0,
      disabled: !a || l === ec,
      children: es.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_ROLE_SUBSCRIPTION_PURCHASE_MESSAGES
    }),
    _ && (0, s.jsx)(E.FormSwitch, {
      className: r()(ea.__invalid_marginReset, ea.marginTop20),
      onChange: this.handleShowGuildRoleSubscriptionPurchaseMessageRepliesChange,
      value: !(0, z.yE)(t.systemChannelFlags, $.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
      hideBorder: !0,
      disabled: !a || l === ec,
      children: es.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_ROLE_SUBSCRIPTION_PURCHASE_MESSAGE_REPLIES
    }),
    i && (0, s.jsx)(E.FormSwitch, {
      className: r()(ea.__invalid_marginReset, ea.marginTop20),
      onChange: this.handleShowDeadchatPromptMessageChange,
      value: !(0, z.yE)(t.systemChannelFlags, $.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
      hideBorder: !0,
      disabled: !a || l === ec,
      children: (0, s.jsxs)('div', {
        className: ea.flexRow,
        children: [
          es.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_DEADCHAT_PROMPT_MESSAGE,
          (0, s.jsx)(O.Z, {})
        ]
      })
    })
  ]
});
  }
  renderNotificationSection() {
let {
  guild: e,
  canManageGuild: t,
  guildMemberCount: n
} = this.props, a = [{
    name: es.Z.Messages.FORM_LABEL_ALL_MESSAGES,
    value: $.bL.ALL_MESSAGES,
    desc: null != n && n >= $.qWG ? es.Z.Messages.GUILD_SETTINGS_DEFAULT_NOTIFICATIONS_LARGE_GUILD_NOTIFY_ALL : null
  },
  {
    name: es.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
    value: $.bL.ONLY_MENTIONS
  }
];
return (0, s.jsx)('div', {
  ref: this._notificationSectionRef,
  children: (0, s.jsxs)(E.FormSection, {
    className: ea.divider,
    children: [
      (0, s.jsx)(E.FormTitle, {
        children: es.Z.Messages.FORM_LABEL_DEFAULT_NOTIFICATION_SETTINGS
      }),
      (0, s.jsx)(E.FormText, {
        type: E.FormTextTypes.DESCRIPTION,
        className: ea.marginBottom20,
        children: es.Z.Messages.GUILD_SETTINGS_DEFAULT_NOTIFICATION_SETTINGS_INTRO
      }),
      (0, s.jsx)(E.FormText, {
        type: E.FormTextTypes.DESCRIPTION,
        className: ea.marginBottom20,
        children: es.Z.Messages.GUILD_SETTINGS_DEFAULT_NOTIFICATION_SETTINGS_TIP
      }),
      (0, s.jsx)(E.RadioGroup, {
        options: a,
        value: e.defaultMessageNotifications,
        disabled: !t,
        onChange: this.handleDefaultMessageNotificationsChange
      })
    ]
  })
});
  }
  renderActivityFeedSection() {
let {
  canManageGuild: e,
  isInventoryFeedEnabled: t
} = this.props;
return void 0 !== t && (0, f.sA)('GuildSettingsOverview') ? (0, s.jsx)('div', {
  ref: this._notificationSectionRef,
  children: (0, s.jsxs)(E.FormSection, {
    className: ea.divider,
    children: [
      (0, s.jsx)(E.FormTitle, {
        children: es.Z.Messages.FORM_LABEL_ACTIVITY_FEED
      }),
      (0, s.jsx)(E.FormSwitch, {
        className: ea.marginBottom0,
        onChange: this.handleShowActivityFeedToggle,
        value: t,
        hideBorder: !0,
        note: es.Z.Messages.FORM_HELP_ACTIVITY_FEED,
        disabled: !e,
        children: es.Z.Messages.FORM_ACTIVITY_FEED_TOGGLE
      })
    ]
  })
}) : null;
  }
  renderSummariesSection() {
let {
  guild: e,
  canManageGuild: t
} = this.props;
return (0, m.Jc)(e, !1) ? (0, s.jsx)('div', {
  children: (0, s.jsx)(E.FormSection, {
    className: ea.divider,
    children: (0, s.jsx)(E.FormSwitch, {
      className: r()(ea.marginTop8, ea.marginBottom8),
      onChange: this.handleConversationSummariesToggle,
      value: e.hasFeature($.oNc.SUMMARIES_ENABLED_BY_USER),
      hideBorder: !0,
      note: es.Z.Messages.GUILD_SETTINGS_SUMMARIES_TOGGLE_DESCRIPTION.format({
        helpdeskArticle: q.Z.getArticleURL($.BhN.CONVERSATION_SUMMARIES)
      }),
      disabled: !t,
      children: (0, s.jsxs)('div', {
        className: ea.badgedItem,
        children: [
          es.Z.Messages.GUILD_SETTINGS_SUMMARIES_TOGGLE,
          (0, s.jsx)(E.TextBadge, {
            text: es.Z.Messages.BETA,
            color: _.Z.unsafe_rawColors.BRAND_500.css,
            className: ea.__invalid_betaTag
          })
        ]
      })
    })
  })
}) : null;
  }
  renderServerInviteBGSection() {
let {
  guild: e,
  canManageGuild: t
} = this.props, n = e.hasFeature($.oNc.INVITE_SPLASH), a = t && n, i = (0, s.jsx)(U.Z, {
  image: e.splash,
  makeURL: t => null != t ? W.ZP.getGuildSplashURL({
    id: e.id,
    splash: t
  }) : null,
  disabled: !a,
  onChange: this.handleSplashChange,
  hint: es.Z.Messages.CHANGE_SPLASH,
  enabled: a,
  maxFileSizeBytes: en.B,
  onFileSizeError: () => (0, b.Z)(en.B)
});
return (0, s.jsx)('div', {
  ref: this._inviteSectionRef,
  children: (0, s.jsx)(E.FormSection, {
    className: ea.divider,
    children: (0, s.jsxs)(V.Z, {
      basis: '50%',
      direction: V.Z.Direction.HORIZONTAL,
      align: V.Z.Justify.START,
      children: [
        (0, s.jsxs)(V.Z.Child, {
          wrap: !0,
          basis: '50%',
          children: [
            (0, s.jsxs)(E.FormTitle, {
              className: ea.flexFormTitle,
              children: [
                (0, s.jsx)('div', {
                  children: es.Z.Messages.GUILD_SETTINGS_SERVER_INVITE_BACKGROUND
                }),
                (0, s.jsx)(A.Z, {
                  guild: e,
                  guildFeature: $.oNc.INVITE_SPLASH,
                  className: ea.guildFeatureAvailabilityIndicator,
                  onClick: this.handleInviteSplashUpsellIndicator
                })
              ]
            }),
            (0, s.jsx)(E.FormText, {
              type: E.FormTextTypes.DESCRIPTION,
              className: ea.marginBottom8,
              children: es.Z.Messages.GUILD_SETTINGS_SPLASH_DESCRIPTION
            }),
            (0, s.jsx)(E.FormText, {
              type: E.FormTextTypes.DESCRIPTION,
              children: es.Z.Messages.GUILD_SETTINGS_SPLASH_RECOMMEND.format({
                articleURL: q.Z.getArticleURL($.BhN.GUILD_INVITE_SPLASH)
              })
            }),
            n ? (0, s.jsxs)(E.Button, {
              disabled: !a,
              color: E.ButtonColors.BRAND,
              className: ea.marginTop16,
              children: [
                es.Z.Messages.UPLOAD_BACKGROUND,
                (0, s.jsx)(G.ZP, {
                  disabled: !a,
                  onChange: this.handleSplashChange,
                  maxFileSizeBytes: en.B,
                  onFileSizeError: () => (0, b.Z)(en.B)
                })
              ]
            }) : this.uploadBGUpsellButton(this.handleInviteSplashUpsellButton)
          ]
        }),
        (0, s.jsx)(V.Z.Child, {
          wrap: !0,
          basis: '50%',
          children: n ? i : (0, s.jsx)(E.Clickable, {
            'aria-hidden': !0,
            tabIndex: -1,
            className: ea.upsell,
            onClick: this.handleInviteSplashUpsellUpload,
            children: i
          })
        })
      ]
    })
  })
});
  }
  renderBanner() {
let {
  guild: e,
  canManageGuild: t,
  analyticsLocations: n
} = this.props, a = e.hasFeature($.oNc.BANNER), i = e.hasFeature($.oNc.ANIMATED_BANNER), r = a && t, l = (0, s.jsx)(U.Z, {
  image: e.banner,
  makeURL: t => null != t ? W.ZP.getGuildBannerURL({
    id: e.id,
    banner: t
  }, i) : null,
  disabled: !r,
  onChange: this.handleBannerChange,
  hint: es.Z.Messages.CHANGE_SPLASH,
  onOpenImageSelectModal: () => eC(et.pC.GUILD_BANNER, en.B, this.handleBannerChange, !0, {
    page: $.ZY5.GUILD_SETTINGS,
    section: $.jXE.GUILD_BANNER
  }, n),
  enabled: r
}), o = (0, s.jsx)(E.Button, {
  disabled: !r,
  color: E.Button.Colors.BRAND,
  className: ea.marginTop16,
  onClick: () => eC(et.pC.GUILD_BANNER, en.B, this.handleBannerChange, !0, {
    page: $.ZY5.GUILD_SETTINGS,
    section: $.jXE.GUILD_BANNER
  }, n),
  children: es.Z.Messages.UPLOAD_BACKGROUND
});
return (0, s.jsx)(E.FormSection, {
  className: ea.divider,
  children: (0, s.jsxs)(V.Z, {
    basis: '50%',
    direction: V.Z.Direction.HORIZONTAL,
    align: V.Z.Justify.START,
    children: [
      (0, s.jsxs)(V.Z.Child, {
        wrap: !0,
        basis: '50%',
        children: [
          (0, s.jsxs)(E.FormTitle, {
            className: ea.flexFormTitle,
            children: [
              (0, s.jsx)('div', {
                children: es.Z.Messages.FORM_LABEL_SERVER_BANNER
              }),
              (0, s.jsx)(A.Z, {
                guild: e,
                guildFeature: $.oNc.BANNER,
                className: ea.guildFeatureAvailabilityIndicator,
                onClick: this.handleBannerUpsellIndicator
              })
            ]
          }),
          (0, s.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: ea.marginBottom8,
            children: es.Z.Messages.FORM_HELP_SERVER_BANNER
          }),
          (0, s.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            children: es.Z.Messages.GUILD_SETTINGS_BANNER_RECOMMEND.format({
              articleURL: q.Z.getArticleURL($.BhN.GUILD_BANNER_SPLASH)
            })
          }),
          a ? o : this.uploadBGUpsellButton(this.handleBannerUpsellButton)
        ]
      }),
      (0, s.jsx)(V.Z.Child, {
        wrap: !0,
        basis: '50%',
        children: a ? l : (0, s.jsx)(E.Clickable, {
          'aria-hidden': !0,
          tabIndex: -1,
          className: ea.upsell,
          onClick: this.handleBannerUpsellUpload,
          children: l
        })
      })
    ]
  })
});
  }
  renderProgressBar() {
let {
  guild: e,
  canManageGuild: t,
  theme: n
} = this.props;
return (0, s.jsx)(E.FormSection, {
  children: (0, s.jsxs)(V.Z, {
    align: V.Z.Align.START,
    children: [
      (0, s.jsxs)(V.Z, {
        basis: '50%',
        direction: V.Z.Direction.VERTICAL,
        align: V.Z.Align.STRETCH,
        children: [
          (0, s.jsx)(E.FormSwitch, {
            className: r()(ea.marginTop8, ea.marginBottom8),
            onChange: this.handlePremiumProgressBarEnabledChange,
            value: e.premiumProgressBarEnabled,
            hideBorder: !0,
            disabled: !t,
            children: es.Z.Messages.GUILD_SETTINGS_PREMIUM_PROGRESS_BAR_TITLE
          }),
          (0, s.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: ea.marginBottom8,
            children: es.Z.Messages.GUILD_SETTINGS_PREMIUM_PROGRESS_BAR_DESCRIPTION
          })
        ]
      }),
      (0, s.jsx)(V.Z.Child, {
        wrap: !0,
        basis: '50%',
        children: (0, s.jsx)('img', {
          alt: es.Z.Messages.GUILD_SETTINGS_PREMIUM_PROGRESS_BAR_IMG_ALT,
          src: (0, I.ap)(n) ? er : ei,
          className: ea.progressBarImage
        })
      })
    ]
  })
});
  }
  renderDisplaySection() {
return (0, s.jsx)('div', {
  ref: this._displaySectionRef,
  children: (0, s.jsxs)(E.FormSection, {
    title: es.Z.Messages.DISPLAY,
    tag: E.FormTitleTags.H1,
    className: ea.divider,
    children: [
      this.renderProgressBar(),
      this.renderBanner(),
      this.renderServerInviteBGSection()
    ]
  })
});
  }
  render() {
return (0, s.jsxs)(E.FormSection, {
  title: es.Z.Messages.SERVER_OVERVIEW,
  tag: E.FormTitleTags.H1,
  children: [
    this.renderBaseSettings(),
    this.renderSummariesSection(),
    this.renderAFKSection(),
    this.renderJoinNotificationSection(),
    this.renderActivityFeedSection(),
    this.renderNotificationSection(),
    this.renderDisplaySection()
  ]
});
  }
  constructor(...e) {
super(...e), el(this, '_imageInputRef', a.createRef()), el(this, '_displaySectionRef', a.createRef()), el(this, '_inviteSectionRef', a.createRef()), el(this, '_notificationSectionRef', a.createRef()), el(this, 'handleIconChange', e => {
  X.Z.updateGuild({
    icon: e
  });
}), el(this, 'handleOpenImageCroppingModal', (e, t) => {
  (0, E.openModalLazy)(async () => {
    let {
      default: a
    } = await n.e('22872').then(n.bind(n, 850085));
    return n => (0, s.jsx)(a, {
      onCrop: this.handleIconChange,
      imgURI: e,
      file: t,
      ...n
    });
  });
}), el(this, 'handleUploadImage', e => {
  var t;
  e.target === e.currentTarget && (null === (t = this._imageInputRef.current) || void 0 === t || t.activateUploadDialogue());
}), el(this, 'handleShowJoinsChange', e => this.handleSystemChannelFlagsChange($.xmn.SUPPRESS_JOIN_NOTIFICATIONS, !e)), el(this, 'handleShowSubscriptionsChange', e => this.handleSystemChannelFlagsChange($.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e)), el(this, 'handleShowGuildRemindersChange', e => {
  this.handleSystemChannelFlagsChange($.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e);
}), el(this, 'handleShowJoinRepliesChange', e => this.handleSystemChannelFlagsChange($.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e)), el(this, 'handleShowGuildRoleSubscriptionPurchaseMessages', e => {
  this.handleSystemChannelFlagsChange($.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e);
}), el(this, 'handleShowDeadchatPromptMessageChange', e => {
  this.handleSystemChannelFlagsChange($.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e);
}), el(this, 'handleShowGuildRoleSubscriptionPurchaseMessageRepliesChange', e => {
  this.handleSystemChannelFlagsChange($.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e);
}), el(this, 'handleHomeHeaderChange', (e, t) => {
  if (null == e || void 0 === t) {
    X.Z.updateGuild({
      homeHeader: null
    });
    return;
  }
  (0, E.openModalLazy)(async () => {
    let {
      default: a
    } = await n.e('22872').then(n.bind(n, 850085));
    return n => (0, s.jsx)(a, {
      imgURI: e,
      file: t,
      onCrop: e => X.Z.updateGuild({
        homeHeader: e
      }),
      uploadType: et.pC.HOME_HEADER,
      ...n
    });
  });
}), el(this, 'handleBannerChange', (e, t) => {
  let {
    guild: n,
    analyticsLocations: s
  } = this.props, a = null == t ? void 0 : t.type, i = {
    page: $.ZY5.GUILD_SETTINGS,
    section: $.jXE.ANIMATED_GUILD_BANNER_UPSELL,
    object: 'temp'
  };
  if (null != a && null != e) {
    if ('image/gif' !== a || n.hasFeature($.oNc.ANIMATED_BANNER)) {
      if (!n.hasFeature($.oNc.BANNER)) {
        i.object = $.qAy.IMAGE_CROPPING_MODAL, (0, M.c)({
          guild: n,
          analyticsLocations: s,
          analyticsLocation: i,
          banner: e,
          isGIF: !1
        });
        return;
      }
    } else {
      i.object = $.qAy.GIF_CROPPING_MODAL, (0, M.c)({
        guild: n,
        analyticsLocations: s,
        analyticsLocation: i,
        banner: e,
        isGIF: !0
      });
      return;
    }
  }
  X.Z.updateGuild({
    banner: e
  });
}), el(this, 'handleShowModalUpsell', (e, t, n, s) => {
  e.preventDefault(), e.stopPropagation();
  let {
    guild: a,
    analyticsLocations: i
  } = this.props;
  (0, h.yw)($.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
    location: {
      section: t,
      object: $.qAy.LEARN_MORE
    },
    guild_id: null == a ? void 0 : a.id,
    location_stack: i
  }), (0, D.Z)({
    analyticsLocations: i,
    analyticsSourceLocation: {
      section: t,
      object: n,
      page: $.ZY5.GUILD_SETTINGS
    },
    guild: a,
    perks: s
  });
}), el(this, 'handleInviteSplashUpsellIndicator', e => {
  this.handleShowModalUpsell(e, $.jXE.GUILD_INVITE_BACKGROUND, $.qAy.BADGE, (0, ee.o9)());
}), el(this, 'handleInviteSplashUpsellButton', e => {
  this.handleShowModalUpsell(e, $.jXE.GUILD_INVITE_BACKGROUND, $.qAy.BUTTON_CTA, (0, ee.o9)());
}), el(this, 'handleInviteSplashUpsellUpload', e => {
  this.handleShowModalUpsell(e, $.jXE.GUILD_INVITE_BACKGROUND, $.qAy.UPLOAD_IMAGE, (0, ee.o9)());
}), el(this, 'handleBannerUpsellIndicator', e => {
  this.handleShowModalUpsell(e, $.jXE.GUILD_BANNER, $.qAy.BADGE, (0, ee.XO)());
}), el(this, 'handleBannerUpsellButton', e => {
  this.handleShowModalUpsell(e, $.jXE.GUILD_BANNER, $.qAy.BUTTON_CTA, (0, ee.XO)());
}), el(this, 'handleBannerUpsellUpload', e => {
  this.handleShowModalUpsell(e, $.jXE.GUILD_BANNER, $.qAy.UPLOAD_IMAGE, (0, ee.XO)());
}), el(this, 'handleConversationSummariesToggle', e => {
  let {
    guild: t
  } = this.props, n = new Set(t.features);
  e ? n.add($.oNc.SUMMARIES_ENABLED_BY_USER) : n.delete($.oNc.SUMMARIES_ENABLED_BY_USER), X.Z.updateGuild({
    features: n
  });
}), el(this, 'handleShowActivityFeedToggle', e => {
  let {
    guild: t
  } = this.props, n = new Set(t.features);
  e ? (n.add($.oNc.ACTIVITY_FEED_ENABLED_BY_USER), n.delete($.oNc.ACTIVITY_FEED_DISABLED_BY_USER)) : (n.add($.oNc.ACTIVITY_FEED_DISABLED_BY_USER), n.delete($.oNc.ACTIVITY_FEED_ENABLED_BY_USER)), X.Z.updateGuild({
    features: n
  });
}), el(this, 'uploadBGUpsellButton', e => (0, s.jsxs)(E.ShinyButton, {
  color: E.Button.Colors.GREEN,
  className: r()(ea.marginTop16),
  innerClassName: ea.upsellButton,
  onClick: e,
  children: [
    (0, s.jsx)(Y.Z, {
      height: 16,
      width: 16,
      className: ea.premiumUpsellBadge
    }),
    ' ',
    es.Z.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA
  ]
}));
  }
}

function eg() {
  var e;
  let {
guild: t,
errors: n,
submitting: i,
subsection: r
  } = (0, u.cj)([Q.Z], () => Q.Z.getProps()), l = (0, N.ZP)(), {
analyticsLocations: c
  } = (0, g.ZP)(S.Z.OVERVIEW);
  a.useEffect(() => {
(0, Z.Kw)(j.v6.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL);
  }, []);
  let d = (0, u.e7)([y.Z], () => y.Z.getCategories(null == t ? void 0 : t.id)),
_ = a.useMemo(() => (0, C.Z)(d._categories, d), [d]),
{
  canManageGuild: I,
  isGuildAdmin: E
} = (0, u.cj)([w.Z], () => ({
  canManageGuild: w.Z.can($.Plq.MANAGE_GUILD, t),
  isGuildAdmin: w.Z.can($.Plq.ADMINISTRATOR, t)
})),
T = (0, u.e7)([F.Z], () => F.Z.getMemberCount(null == t ? void 0 : t.id)),
m = (0, L.E)(t),
h = (0, u.e7)([H.default], () => H.default.getCurrentUser());
  o()(null != h, 'GuildSettingsOverview: currentUser cannot be undefined');
  let {
enableDeadchat: x
  } = R.Z.useExperiment({
guildId: null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : $.lds,
location: 'guild_settings'
  }, {
disable: null == t,
autoTrackExposure: !0
  });
  return null == t ? null : (0, s.jsx)(g.Gt, {
value: c,
children: (0, s.jsx)(eh, {
  channels: _,
  canManageGuild: I,
  isGuildAdmin: E,
  subsection: r,
  guild: t,
  errors: n,
  submitting: i,
  currentUser: h,
  guildMemberCount: T,
  isInventoryFeedEnabled: m,
  theme: l,
  analyticsLocations: c,
  eligibleForDeadchatPrompt: x
})
  });
}

function eC(e, t, a) {
  let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
r = arguments.length > 4 ? arguments[4] : void 0,
l = arguments.length > 5 ? arguments[5] : void 0;
  (0, E.openModalLazy)(async () => {
let {
  default: o
} = await n.e('89289').then(n.bind(n, 28130));
return n => (0, s.jsx)(o, {
  maxFileSizeBytes: t,
  onComplete: a,
  uploadType: e,
  showUpsellHeader: i,
  analyticsLocation: r,
  analyticsLocations: l,
  ...n
});
  });
}