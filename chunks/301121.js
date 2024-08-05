s.d(t, {
  Z: function() {
return em;
  }
}), s(47120), s(733860), s(773603);
var n, a, i = s(735250),
  r = s(470079),
  o = s(120356),
  l = s.n(o),
  c = s(512722),
  d = s.n(c),
  _ = s(913527),
  E = s.n(_),
  u = s(442837),
  T = s(524437),
  I = s(481060),
  S = s(570140),
  N = s(668781),
  C = s(409700),
  m = s(809206),
  A = s(230711),
  g = s(241420),
  h = s(651530),
  O = s(163268),
  p = s(294602),
  R = s(778825),
  x = s(856768),
  M = s(592204),
  f = s(712950),
  D = s(880257),
  P = s(16703),
  L = s(977059),
  b = s(236289),
  Z = s(518560),
  v = s(237292),
  j = s(604849),
  B = s(278828),
  U = s(921801),
  G = s(480294),
  F = s(430824),
  y = s(663389),
  V = s(594174),
  Y = s(285952),
  w = s(626135),
  k = s(63063),
  H = s(78451),
  W = s(709054),
  K = s(88658),
  z = s(695346),
  Q = s(3957),
  X = s(279743),
  q = s(526156),
  J = s(76793),
  $ = s(839469),
  ee = s(973005),
  et = s(703115),
  es = s(526761),
  en = s(726985),
  ea = s(981631),
  ei = s(800530),
  er = s(689938),
  eo = s(339582),
  el = s(549856);

function ec(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}

function ed() {
  let e = (0, u.e7)([R.Z], () => R.Z.getGuild()),
t = (0, P.Z)(),
s = null != e ? e : t;
  r.useEffect(() => {
w.default.track(ea.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
  action: et.Y.VIEW_SETTINGS_PAGE
});
  }, []);
  let n = r.useCallback(e => {
null != e && S.Z.dispatch({
  type: 'GUILD_IDENTITY_SETTINGS_SET_GUILD',
  guild: e
}), w.default.track(ea.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
  action: et.Y.SELECT_GUILD,
  guild_id: null == e ? void 0 : e.id
});
  }, []);
  return null == s ? null : (0, i.jsxs)(I.FormSection, {
tag: I.FormTitleTags.H1,
title: er.Z.Messages.PRIVACY_AND_SAFETY,
children: [
  (0, i.jsx)(x.Z, {
    className: eo.guildSelector,
    guildId: s.id,
    onChange: n
  }),
  (0, i.jsx)(g.ConnectedPrivacySettings, {
    guild: s,
    ingress: g.PrivacySettingSurfaces.USER_SETTINGS_PRIVACY_SAFETY
  })
]
  });
}

function e_() {
  var e;
  let t = null === (e = (0, D.Z)()) || void 0 === e || e,
s = (0, v.y0)({
  location: 'user_settings_web'
}),
n = (0, j.c)(),
a = (0, Q.a)(es.to.DM_SAFETY_ALERTS);
  return t || !s ? null : (0, i.jsxs)(U.F, {
setting: en.s6.PRIVACY_SAFETY_ALERTS,
children: [
  (0, i.jsx)(I.FormSection, {
    ref: a,
    children: (0, i.jsxs)(I.FormItem, {
      className: l()(eo.settingsBackgroundFlashElement),
      children: [
        (0, i.jsx)(I.FormTitle, {
          tag: I.FormTitleTags.H5,
          faded: !0,
          className: el.marginBottom8,
          children: er.Z.Messages.SAFETY_ALERTS_SETTINGS_HEADER
        }),
        (0, i.jsx)(I.FormSwitch, {
          value: n,
          note: er.Z.Messages.SAFETY_ALERTS_SETTING_DESCRIPTION.format({
            learnMoreLink: k.Z.getArticleURL(ea.BhN.SAFETY_ALERTS)
          }),
          onChange: B.Q,
          hideBorder: !0,
          children: er.Z.Messages.SAFETY_ALERTS_SETTING_TITLE
        }),
        (0, i.jsx)(X.Z, {
          animationDelay: 1000,
          scrollPosition: es.to.DM_SAFETY_ALERTS
        })
      ]
    })
  }),
  (0, i.jsx)(I.FormDivider, {
    className: el.marginBottom20
  })
]
  });
}

function eE(e, t) {
  w.default.track(ea.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
default_guilds_restricted: e,
applied_to_existing_guilds: t
  });
}

function eu() {
  let e = z.iG.useSetting(),
t = z.mX.useSetting(),
s = (0, Q.a)(es.to.DM_SAFETY_ALERTS);
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)('div', {
    className: eo.settingsBackgroundFlashElement,
    children: [
      (0, i.jsx)(I.FormItem, {
        ref: s,
        children: (0, i.jsx)(I.FormSwitch, {
          value: !t,
          note: er.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_CAPTION.format({
            helpdeskArticle: k.Z.getArticleURL(ea.BhN.MESSAGE_REQUESTS)
          }),
          disabled: e,
          onChange: () => {
            var e;
            return e = !t, void eS({
              header: er.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
              body: er.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
              confirmText: er.Z.Messages.NO_TEXT,
              cancelText: er.Z.Messages.YES_TEXT,
              confirmButtonColor: I.Button.Colors.BRAND,
              onConfirm: () => {
                z.mX.updateSetting(e), eE(e, !1);
              },
              onCancel: () => {
                z.mX.updateSetting(e), z.zA.updateSetting(e ? W.default.keys(F.Z.getGuilds()) : []), eE(e, !0);
              }
            });
          },
          hideBorder: !0,
          children: er.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER
        })
      }),
      (0, i.jsx)(X.Z, {
        animationDelay: 700,
        scrollPosition: es.to.MESSAGE_REQUESTS
      })
    ]
  }),
  (0, i.jsx)(I.FormDivider, {
    className: el.marginBottom20
  })
]
  });
}

function eT() {
  var e;
  let t = null === (e = (0, D.Z)()) || void 0 === e || e,
{
  explicitContentGuilds: s,
  explicitContentFriendDm: n,
  explicitContentNonFriendDm: a
} = (0, p.B)(),
r = (0, Q.a)(es.to.DM_SAFETY_ALERTS),
o = [{
    value: T.Q4.BLUR,
    label: er.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
  },
  {
    value: T.Q4.BLOCK,
    label: er.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLOCK
  }
],
l = [{
  value: T.Q4.BLUR,
  label: er.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
}],
c = {
  value: T.Q4.SHOW,
  label: er.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_SHOW
};
  return t && (o.unshift(c), l.unshift(c)), (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)('div', {
    className: eo.settingsBackgroundFlashElement,
    children: [
      (0, i.jsx)(I.FormTitle, {
        tag: I.FormTitleTags.H5,
        faded: !0,
        className: el.marginBottom8,
        children: er.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER
      }),
      (0, i.jsx)(I.FormText, {
        type: I.FormTextTypes.DESCRIPTION,
        className: el.marginBottom8,
        children: er.Z.Messages.OBSCURED_CONTENT_SETTINGS_DESC.format({
          learnMoreLink: k.Z.getArticleURL(ea.BhN.EXPLICIT_MEDIA_REDACTION)
        })
      }),
      (0, i.jsx)(I.FormItem, {
        ref: r,
        tag: I.FormTitleTags.H3,
        className: el.marginBottom20,
        title: er.Z.Messages.OBSCURED_CONTENT_SETTING_FRIENDS,
        children: (0, i.jsx)(I.SingleSelect, {
          options: o,
          value: n,
          onChange: e => (0, O.zj)({
            explicitContentFriendDm: e
          })
        })
      }),
      (0, i.jsx)(I.FormItem, {
        tag: I.FormTitleTags.H3,
        className: el.marginBottom20,
        title: er.Z.Messages.OBSCURED_CONTENT_SETTING_NON_FRIENDS,
        children: (0, i.jsx)(I.SingleSelect, {
          options: o,
          value: a,
          onChange: e => (0, O.zj)({
            explicitContentNonFriendDm: e
          })
        })
      }),
      t && (0, i.jsx)(I.FormItem, {
        tag: I.FormTitleTags.H3,
        className: el.marginBottom20,
        title: er.Z.Messages.OBSCURED_CONTENT_SETTING_GUILDS,
        children: (0, i.jsx)(I.SingleSelect, {
          options: l,
          value: s,
          onChange: e => (0, O.zj)({
            explicitContentGuilds: e
          })
        })
      }),
      (0, i.jsx)(X.Z, {
        scrollPosition: es.to.EXPLICIT_MEDIA_REDACTION
      })
    ]
  }),
  (0, i.jsx)(I.FormDivider, {
    className: el.marginBottom20
  })
]
  });
}

function eI(e) {
  let {
modalProps: t,
settings: {
  onConfirm: s,
  ...n
}
  } = e, [a, o] = r.useState({
Account: {
  value: 'Account',
  label: er.Z.Messages.HARVEST_BACKEND_USERS,
  checked: !1
},
Analytics: {
  value: 'Analytics',
  label: er.Z.Messages.HARVEST_BACKEND_ANALYTICS,
  checked: !1
},
Activities: {
  value: 'Activities',
  label: er.Z.Messages.HARVEST_BACKEND_ACTIVITIES,
  checked: !1
},
Messages: {
  value: 'Messages',
  label: er.Z.Messages.HARVEST_BACKEND_MESSAGES,
  checked: !1
},
Programs: {
  value: 'Programs',
  label: er.Z.Messages.HARVEST_BACKEND_HUBSPOT,
  checked: !1
},
Servers: {
  value: 'Servers',
  label: er.Z.Messages.HARVEST_BACKEND_GUILDS,
  checked: !1
}
  }), l = e => (t, s) => {
o(t => ({
  ...t,
  [e]: {
    ...t[e],
    checked: s
  }
}));
  };
  return (0, i.jsxs)(I.ConfirmModal, {
...t,
...n,
onConfirm: () => {
  let e = Object.keys(a).filter(e => a[e].checked).map(e => a[e].value);
  null == s || s(e);
},
children: [
  (0, i.jsx)(I.Text, {
    variant: 'text-md/normal',
    style: {
      marginBottom: '5px'
    },
    children: n.body
  }),
  Object.keys(a).map(e => {
    let {
      label: t,
      checked: s
    } = a[e];
    return (0, i.jsx)(I.Checkbox, {
      type: I.Checkbox.Types.INVERTED,
      value: s,
      style: {
        marginBottom: '2px'
      },
      onChange: l(e),
      children: (0, i.jsx)(I.Text, {
        variant: 'text-md/normal',
        children: t
      })
    }, e);
  })
]
  });
}
(a = n || (n = {})).USERS = 'Account', a.MESSAGES = 'Messages', a.GUILDS = 'Servers', a.ANALYTICS = 'Analytics', a.ACTIVITIES = 'Activities', a.HUBSPOT = 'Programs';

function eS(e) {
  let {
body: t,
...s
  } = e;
  (0, I.openModal)(e => (0, i.jsx)(I.ConfirmModal, {
...e,
...s,
children: (0, i.jsx)(I.Text, {
  variant: 'text-md/normal',
  children: t
})
  }));
}

function eN(e) {
  let {
message: t
  } = e;
  eS({
header: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
confirmText: er.Z.Messages.OKAY,
body: t
  });
}
class eC extends r.PureComponent {
  componentDidMount() {
(0, C.I)(), (0, m.ol)().then(e => {
  let t = {
    requestingHarvest: !1,
    currentHarvestRequest: e.body
  };
  this.setState(t);
}, () => {
  this.setState({
    requestingHarvest: !1
  });
});
  }
  componentDidUpdate(e) {
e.defaultGuildsRestricted !== this.props.defaultGuildsRestricted && this.setState({
  defaultGuildsRestricted: this.props.defaultGuildsRestricted
}), null != this.props.subsection && e.subsection !== this.props.subsection && this.setState({
  selectedTab: this.props.subsection
});
  }
  showGuildRestrictionModal(e) {
eS({
  header: er.Z.Messages.USER_DM_SETTINGS_TITLE,
  body: er.Z.Messages.USER_DM_SETTINGS_DESCRIPTION,
  confirmText: er.Z.Messages.NO_TEXT,
  cancelText: er.Z.Messages.YES_TEXT,
  confirmButtonColor: I.Button.Colors.BRAND,
  onConfirm: () => {
    z.iG.updateSetting(e), this.trackDefaultDmsUpdated(e, !1);
  },
  onCancel: () => {
    z.iG.updateSetting(e), z.h2.updateSetting(e ? W.default.keys(F.Z.getGuilds()) : []), this.trackDefaultDmsUpdated(e, !0);
  }
});
  }
  trackDefaultDmsUpdated(e, t) {
w.default.track(ea.rMx.GUILD_DEFAULT_DMS_UPDATED, {
  default_guilds_restricted: e,
  applied_to_existing_guilds: t
});
  }
  showMessageRequestRestrictionModal(e) {
eS({
  header: er.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
  body: er.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
  confirmText: er.Z.Messages.NO_TEXT,
  cancelText: er.Z.Messages.YES_TEXT,
  confirmButtonColor: I.Button.Colors.BRAND,
  onConfirm: () => {
    z.mX.updateSetting(e), this.trackDefaultMessageRequestUpdated(e, !1);
  },
  onCancel: () => {
    z.mX.updateSetting(e), z.zA.updateSetting(e ? W.default.keys(F.Z.getGuilds()) : []), this.trackDefaultMessageRequestUpdated(e, !0);
  }
});
  }
  trackDefaultMessageRequestUpdated(e, t) {
w.default.track(ea.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
  default_guilds_restricted: e,
  applied_to_existing_guilds: t
});
  }
  renderLegacyExplicitContentFilter(e) {
return (0, i.jsx)(i.Fragment, {
  children: (0, i.jsxs)(I.FormItem, {
    tag: I.FormTitleTags.H3,
    className: el.marginBottom20,
    title: er.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_V2,
    children: [
      (0, i.jsx)(I.FormText, {
        type: I.FormTextTypes.DESCRIPTION,
        className: el.marginBottom8,
        children: er.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_HELP_V3.format({
          appealLink: k.Z.getArticleURL(ea.BhN.SAFE_DIRECT_MESSAGING)
        })
      }),
      (0, i.jsx)(I.RadioGroup, {
        value: this.props.explicitContentFilter,
        options: (0, H.X7)(),
        onChange: t => {
          let {
            value: s
          } = t;
          this.props.dmSpamFilter === T.Xr.DEFAULT_UNSET ? z.Xr.updateSetting(e).then(() => {
            z.UP.updateSetting(s);
          }) : z.UP.updateSetting(s);
        }
      })
    ]
  })
});
  }
  renderDMSafety() {
var e;
let t = this.props.dmSpamFilter !== T.Xr.DEFAULT_UNSET ? this.props.dmSpamFilter : null !== (e = ee.O7.get(this.props.explicitContentFilter)) && void 0 !== e ? e : T.Xr.NON_FRIENDS;
return this.props.mediaRedactionIsEnabled ? (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsxs)(I.FormSection, {
      tag: I.FormTitleTags.H3,
      className: el.marginBottom20,
      children: [
        (0, i.jsx)(U.F, {
          setting: en.s6.PRIVACY_SENSITIVE_MEDIA,
          children: (0, i.jsx)(eT, {})
        }),
        (0, i.jsxs)(U.F, {
          setting: en.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER,
          children: [
            (0, i.jsxs)(I.FormItem, {
              tag: I.FormTitleTags.H5,
              className: el.marginBottom4,
              title: er.Z.Messages.USER_DM_SPAM_FILTER,
              children: [
                (0, i.jsx)(I.FormText, {
                  type: I.FormTextTypes.DESCRIPTION,
                  className: el.marginBottom8,
                  children: er.Z.Messages.USER_DM_SPAM_FILTER_HELP.format({
                    appealLink: k.Z.getArticleURL(ea.BhN.SAFE_DIRECT_MESSAGING)
                  })
                }),
                (0, i.jsx)(I.RadioGroup, {
                  value: t,
                  options: (0, H.c7)(),
                  onChange: e => {
                    let {
                      value: t
                    } = e;
                    return z.Xr.updateSetting(t);
                  }
                })
              ]
            }),
            (0, i.jsx)(I.FormDivider, {
              className: l()(el.marginTop20, el.marginBottom8)
            })
          ]
        })
      ]
    }),
    (0, i.jsx)(e_, {})
  ]
}) : (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsxs)(I.FormSection, {
      tag: I.FormTitleTags.H5,
      className: el.marginBottom40,
      title: er.Z.Messages.USER_DIRECT_MESSAGE_FILTERS,
      children: [
        this.renderLegacyExplicitContentFilter(t),
        (0, i.jsxs)(I.FormItem, {
          tag: I.FormTitleTags.H3,
          className: el.marginBottom4,
          title: er.Z.Messages.USER_DM_SPAM_FILTER,
          children: [
            (0, i.jsx)(I.FormText, {
              type: I.FormTextTypes.DESCRIPTION,
              className: el.marginBottom8,
              children: er.Z.Messages.USER_DM_SPAM_FILTER_HELP.format({
                appealLink: k.Z.getArticleURL(ea.BhN.SAFE_DIRECT_MESSAGING)
              })
            }),
            (0, i.jsx)(I.RadioGroup, {
              value: t,
              options: (0, H.c7)(),
              onChange: e => {
                let {
                  value: t
                } = e;
                return z.Xr.updateSetting(t);
              }
            })
          ]
        })
      ]
    }),
    (0, i.jsx)(I.FormDivider, {
      className: el.marginBottom20
    }),
    (0, i.jsx)(e_, {})
  ]
});
  }
  renderKeywordFiltering() {
return (0, i.jsxs)(I.FormSection, {
  tag: I.FormTitleTags.H3,
  className: el.marginBottom20,
  children: [
    (0, i.jsx)(I.FormTitle, {
      tag: I.FormTitleTags.H5,
      className: el.marginBottom8,
      children: er.Z.Messages.USER_KEYWORD_FILTERS_TITLE
    }),
    (0, i.jsx)(U.F, {
      setting: en.s6.PRIVACY_KEYWORD_FILTER,
      children: (0, i.jsx)(I.FormSwitch, {
        value: this.props.keywordFilter,
        note: er.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION_V2.format({
          learnMoreLink: k.Z.getArticleURL(ea.BhN.KEYWORD_FILTERS)
        }),
        onChange: e => z.gw.updateSetting({
          profanity: e,
          slurs: e,
          sexualContent: e
        }),
        children: er.Z.Messages.USER_KEYWORD_FILTERS_TOGGLE_TITLE
      })
    })
  ]
});
  }
  renderServerPrivacy() {
let {
  viewNsfwGuilds: e,
  currentUser: t,
  viewNsfwCommands: s
} = this.props, {
  defaultGuildsRestricted: n
} = this.state, a = !0 === t.nsfwAllowed;
return (0, i.jsxs)(I.FormSection, {
  className: el.marginBottom40,
  children: [
    (0, i.jsx)(I.FormTitle, {
      tag: I.FormTitleTags.H5,
      className: el.marginBottom8,
      children: er.Z.Messages.USER_DM_SETTINGS
    }),
    (0, i.jsx)(U.F, {
      setting: en.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS,
      children: (0, i.jsx)(I.FormSwitch, {
        value: !n,
        note: er.Z.Messages.USER_DM_SETTINGS_HELP,
        onChange: this.handleChangeDefaultGuildsRestricted,
        children: er.Z.Messages.NEW_GUILDS_DM_ALLOWED
      })
    }),
    (0, i.jsx)(U.F, {
      setting: en.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS,
      children: (0, i.jsx)(I.FormSwitch, {
        value: !!a && e,
        note: er.Z.Messages.NSFW_GUILDS_TOGGLE_CAPTION,
        disabled: !a,
        onChange: z.DC.updateSetting,
        children: er.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER
      })
    }),
    (0, i.jsx)(U.F, {
      setting: en.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS,
      children: (0, i.jsx)(eu, {})
    }),
    (0, i.jsx)(U.F, {
      setting: en.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS,
      children: (0, i.jsx)(I.FormSwitch, {
        value: !!a && s,
        note: er.Z.Messages.NSFW_DM_COMMANDS_CAPTION,
        disabled: !a,
        onChange: z.xM.updateSetting,
        children: er.Z.Messages.NSFW_DM_COMMANDS_HEADER
      })
    })
  ]
});
  }
  renderDataPrivacy() {
let {
  usageStatistics: e,
  personalization: t,
  dropsOptedOut: s
} = this.props;
return (0, i.jsxs)(I.FormSection, {
  className: el.marginBottom40,
  children: [
    (0, i.jsx)(I.FormTitle, {
      tag: I.FormTitleTags.H5,
      className: el.marginBottom8,
      children: er.Z.Messages.DATA_PRIVACY_CONTROLS
    }),
    (0, i.jsx)(U.F, {
      setting: en.s6.PRIVACY_DATA_IMPROVE_DISCORD,
      children: (0, i.jsx)(I.FormSwitch, {
        value: e,
        note: er.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_NOTE.format({
          helpdeskArticle: k.Z.getArticleURL(ea.BhN.DATA_USED_TO_IMPROVE_DISCORD)
        }),
        onChange: this.handleUsageStatisticsChange,
        children: er.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE
      })
    }),
    (0, i.jsx)(U.F, {
      setting: en.s6.PRIVACY_DATA_PERSONALIZE,
      children: (0, i.jsx)(I.FormSwitch, {
        value: t,
        note: er.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_NOTE_LEARN_MORE.format({
          helpdeskArticle: k.Z.getArticleURL(ea.BhN.DATA_USED_FOR_RECOMMENDED)
        }),
        onChange: this.handlePersonalizationChange,
        children: er.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE
      })
    }),
    (0, i.jsx)(U.F, {
      setting: en.s6.PRIVACY_DATA_QUESTS,
      children: (0, i.jsx)(I.FormSwitch, {
        value: !s,
        note: er.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT_FORMATTED.format({
          helpdeskArticle: k.Z.getArticleURL(ea.BhN.DATA_PRIVACY_CONTROLS)
        }),
        onChange: this.handleChangeDropsOptedOut,
        children: (0, i.jsx)('div', {
          children: er.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT
        })
      })
    }),
    (0, i.jsxs)(U.F, {
      setting: en.s6.PRIVACY_DATA_BASIC_SERVICE,
      children: [
        (0, i.jsx)(I.FormTitle, {
          tag: I.FormTitleTags.H3,
          className: l()(el.marginTop20, el.marginBottom8),
          children: er.Z.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_TITLE
        }),
        (0, i.jsx)(I.FormText, {
          type: I.FormTextTypes.DESCRIPTION,
          className: el.marginBottom20,
          children: er.Z.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_NOTE.format({
            onClick: () => {
              A.Z.setSection(ea.oAB.ACCOUNT);
            }
          })
        }),
        (0, i.jsx)(I.FormDivider, {
          className: el.marginBottom20
        })
      ]
    }),
    (0, i.jsx)(U.F, {
      setting: en.s6.PRIVACY_DATA_REQUEST,
      children: this.renderHarvestRequest()
    })
  ]
});
  }
  renderHarvestRequest() {
let e;
let {
  currentUser: t
} = this.props, {
  requestingHarvest: s,
  currentHarvestRequest: n
} = this.state, a = (0, K.$6)(n, t), o = (0, i.jsx)(I.Tooltip, {
  text: t.verified ? null : er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_TOOLTIP,
  children: e => {
    let {
      onMouseEnter: t,
      onMouseLeave: n
    } = e;
    return (0, i.jsx)(I.Button, {
      disabled: a,
      onClick: this.handleDataDownloadRequest,
      onMouseEnter: t,
      onMouseLeave: n,
      look: I.Button.Looks.FILLED,
      color: I.Button.Colors.BRAND,
      submitting: s,
      children: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD
    });
  }
});
return a && null != n && (e = (0, i.jsx)(I.Card, {
  className: eo.card,
  children: (0, i.jsx)(I.Text, {
    variant: 'text-md/normal',
    children: er.Z.Messages.DATA_DOWNLOAD_REQUESTED_STATUS_NOTE.format({
      date: E()(n.created_at).add(ea.eBq, 'days').format('MMMM Do YYYY')
    })
  })
}), o = null), null != o && (o = (0, i.jsx)(Y.Z, {
  children: o
})), (0, i.jsxs)(r.Fragment, {
  children: [
    (0, i.jsx)(I.FormTitle, {
      tag: I.FormTitleTags.H3,
      children: er.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONAL_DATA_TITLE
    }),
    (0, i.jsx)(I.FormText, {
      type: I.FormTextTypes.DESCRIPTION,
      className: el.marginBottom20,
      children: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_NOTE.format({
        helpdeskArticle: k.Z.getArticleURL(ea.BhN.GDPR_REQUEST_DATA)
      })
    }),
    e,
    o
  ]
});
  }
  renderPrivacyAndTermsNote() {
return (0, i.jsx)(I.FormSection, {
  className: el.marginBottom40,
  children: (0, i.jsx)(I.FormNotice, {
    type: I.FormNotice.Types.PRIMARY,
    body: er.Z.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
      termsLink: ea.EYA.TERMS,
      privacyLink: ea.EYA.PRIVACY
    })
  })
});
  }
  renderStaffOnlySettings() {
let {
  nonSpamRetrainingOptIn: e
} = this.props;
return (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsx)(I.FormDivider, {
      className: el.marginBottom20
    }),
    (0, i.jsxs)(I.FormSection, {
      className: el.marginBottom40,
      children: [
        (0, i.jsx)(I.FormTitle, {
          tag: I.FormTitleTags.H5,
          className: el.marginBottom8,
          children: er.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER
        }),
        (0, i.jsxs)(I.FormItem, {
          tag: I.FormTitleTags.H5,
          className: el.marginBottom4,
          children: [
            (0, i.jsx)(I.FormText, {
              type: I.FormTextTypes.DESCRIPTION,
              className: el.marginBottom8,
              children: er.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_DESC
            }),
            (0, i.jsx)(I.RadioGroup, {
              options: (0, K.xH)(),
              value: null == e ? K.g0.UNDECIDED : e ? K.g0.OPTIN : K.g0.OPTOUT,
              onChange: e => {
                let {
                  value: t
                } = e;
                return z.kJ.updateSetting(K.ac[t]);
              }
            })
          ]
        })
      ]
    })
  ]
});
  }
  renderSettingsBody() {
let {
  fetchedConsents: e
} = this.props;
return (0, i.jsxs)(I.FormSection, {
  tag: I.FormTitleTags.H1,
  title: er.Z.Messages.PRIVACY_AND_SAFETY,
  children: [
    this.renderDMSafety(),
    (0, i.jsx)(U.F, {
      setting: en.s6.PRIVACY_KEYWORD_FILTER,
      children: this.renderKeywordFiltering()
    }),
    (0, i.jsx)(U.F, {
      setting: en.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS,
      children: this.renderServerPrivacy()
    }),
    (0, i.jsx)(U.F, {
      setting: en.s6.PRIVACY_DATA_PRIVACY,
      children: e ? this.renderDataPrivacy() : null
    }),
    (0, i.jsx)(U.F, {
      setting: en.s6.PRIVACY_TERMS_POLICY,
      children: this.renderPrivacyAndTermsNote()
    }),
    (0, i.jsx)(U.F, {
      setting: en.s6.PRIVACY_STAFF_ONLY,
      children: this.renderStaffOnlySettings()
    })
  ]
});
  }
  render() {
let {
  isSecureFramesEnabled: e
} = this.props;
return (0, i.jsx)(q.Z, {
  parentSetting: en.s6.PRIVACY_AND_SAFETY,
  settingsSection: ea.oAB.PRIVACY_AND_SAFETY,
  tabs: [{
      title: er.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS,
      component: this.renderSettingsBody(),
      setting: en.s6.PRIVACY_USER_SETTINGS
    },
    {
      title: er.Z.Messages.PRIVACY_AND_SAFETY_GUILD_TAB_TITLE,
      component: (0, i.jsx)(ed, {}),
      setting: en.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
    },
    {
      title: er.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
      component: (0, i.jsx)(Z.Z, {}),
      setting: en.s6.PRIVACY_ACCOUNT_STANDING
    },
    {
      title: er.Z.Messages.E2EE_ENCRYPTION,
      component: (0, i.jsx)(J.Z, {}),
      setting: en.s6.PRIVACY_ENCRYPTION,
      predicate: () => e
    }
  ]
});
  }
  constructor(e) {
super(e), ec(this, 'handleChangeDefaultGuildsRestricted', e => {
  this.setState({
    defaultGuildsRestricted: !e
  }, () => this.showGuildRestrictionModal(!e));
}), ec(this, 'handleChangeDropsOptedOut', () => {
  z.bh.updateSetting(!this.props.dropsOptedOut);
}), ec(this, 'handleUsageStatisticsChange', () => {
  this.props.usageStatistics ? eS({
    header: er.Z.Messages.USAGE_STATISTICS_DISABLE_MODAL_TITLE,
    body: er.Z.Messages.USAGE_STATISTICS_DISABLE_MODAL_BODY,
    confirmText: er.Z.Messages.USAGE_STATISTICS_DISABLE_MODAL_CONFIRM,
    cancelText: er.Z.Messages.USAGE_STATISTICS_DISABLE_MODAL_CANCEL,
    onConfirm: () => (0, C.g)([], [ea.pjP.USAGE_STATISTICS]).catch(eN)
  }) : (0, C.g)([ea.pjP.USAGE_STATISTICS], []).catch(eN);
}), ec(this, 'handlePersonalizationChange', () => {
  this.props.personalization ? eS({
    header: er.Z.Messages.PERSONALIZATION_DISABLE_MODAL_TITLE,
    confirmText: er.Z.Messages.PERSONALIZATION_DISABLE_MODAL_CONFIRM,
    cancelText: er.Z.Messages.PERSONALIZATION_DISABLE_MODAL_CANCEL,
    onConfirm: () => {
      (0, C.g)([], [ea.pjP.PERSONALIZATION]).catch(eN);
    },
    body: er.Z.Messages.PERSONALIZATION_DISABLE_MODAL_BODY
  }) : (0, C.g)([ea.pjP.PERSONALIZATION], []).catch(eN);
}), ec(this, 'handleDataDownloadRequest', () => {
  var e;
  e = {
    header: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_TITLE,
    body: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_WEB_NOTE.format({
      helpdeskArticle: k.Z.getArticleURL(ea.BhN.GDPR_PACKAGE_CONTENTS)
    }),
    confirmText: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CONFIRM,
    cancelText: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CANCEL,
    confirmButtonColor: I.Button.Colors.BRAND,
    onConfirm: e => {
      this.setState({
        requestingHarvest: !0
      }, () => {
        (0, m.V3)(e).then(e => {
          null != e && null != e.body ? (this.setState({
            currentHarvestRequest: e.body
          }), N.Z.show({
            body: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_SUCCESS
          })) : N.Z.show({
            title: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
            body: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
          });
        }, () => N.Z.show({
          title: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
          body: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
        })).finally(() => this.setState({
          requestingHarvest: !1
        }));
      });
    }
  }, (0, I.openModal)(t => (0, i.jsx)(eI, {
    modalProps: t,
    settings: e
  }));
});
let {
  defaultGuildsRestricted: t,
  subsection: s
} = e;
this.state = {
  defaultGuildsRestricted: t,
  currentHarvestRequest: null,
  requestingHarvest: !0,
  selectedTab: null != s ? s : ei.SU.SETTINGS
};
  }
}

function em() {
  let e = (0, u.e7)([V.default], () => {
  let e = V.default.getCurrentUser();
  return d()(null != e, 'ConnectedUserSettingsPrivacySafety: currentUser cannot be undefined'), e;
}),
t = (0, u.cj)([G.Z], () => ({
  fetchedConsents: G.Z.fetchedConsents,
  usageStatistics: G.Z.hasConsented(ea.pjP.USAGE_STATISTICS),
  personalization: G.Z.hasConsented(ea.pjP.PERSONALIZATION)
})),
s = (0, u.e7)([b.Z], () => b.Z.getFetchError()),
n = (0, u.e7)([y.Z], () => y.Z.getSubsection()),
a = (0, h.yh)(),
r = (0, M.Xo)({
  location: 'web_user_privacy_and_safety_settings'
}),
{
  hasSearchResults: o,
  searchResults: l
} = (0, $.E)(),
c = (0, f.p)(),
_ = (0, D.Z)(),
{
  enabled: E
} = L.c.useExperiment({
  location: 'PrivacySafetySettings'
});
  return (0, i.jsx)(eC, {
currentUser: e,
defaultGuildsRestricted: z.iG.useSetting(),
nonSpamRetrainingOptIn: z.kJ.useSetting(),
viewNsfwGuilds: z.DC.useSetting(),
viewNsfwCommands: z.xM.useSetting(),
explicitContentFilter: z.UP.useSetting(),
keywordFilter: c,
dmSpamFilter: z.Xr.useSetting(),
showCurrentGame: z.G6.useSetting(),
dropsOptedOut: z.bh.useSetting(),
safetyHubFetchError: s,
mediaRedactionIsEnabled: a,
keywordFilteringExperimentEnabled: r,
userIsConsideredAdult: null == _ || _,
subsection: n,
searchFilter: o ? l : void 0,
isSecureFramesEnabled: E,
...t
  });
}