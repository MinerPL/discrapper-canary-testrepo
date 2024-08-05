s.d(t, {
  G: function() {
return ep;
  },
  Z: function() {
return eS;
  }
}), s(789020), s(47120), s(733860), s(653041);
var n = s(735250),
  l = s(470079),
  a = s(120356),
  i = s.n(a),
  r = s(313361),
  o = s(683860),
  d = s(442837),
  c = s(692547),
  u = s(780384),
  h = s(481060),
  m = s(787014),
  g = s(771340),
  E = s(410575),
  T = s(852860),
  p = s(129865),
  N = s(902840),
  _ = s(933557),
  S = s(541716),
  x = s(752305),
  f = s(893718),
  C = s(907040),
  I = s(633302),
  M = s(109434),
  R = s(162389),
  Z = s(946458),
  v = s(968437),
  O = s(665906),
  A = s(456077),
  L = s(747212),
  j = s(210887),
  b = s(131704),
  D = s(314897),
  y = s(388610),
  w = s(430824),
  P = s(496675),
  F = s(903223),
  B = s(594174),
  U = s(285952),
  H = s(153124),
  G = s(934415),
  k = s(70956),
  V = s(630388),
  W = s(63063),
  z = s(129724),
  Y = s(296146),
  Q = s(564735),
  q = s(981631),
  X = s(176505),
  K = s(185923),
  $ = s(710352),
  J = s(124368),
  ee = s(689938),
  et = s(260790),
  es = s(549856);

function en(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
let el = (0, H.hQ)(),
  ea = (0, H.hQ)(),
  ei = (0, H.hQ)(),
  er = (0, H.hQ)(),
  eo = (0, H.hQ)(),
  ed = (0, H.hQ)(),
  ec = (0, H.hQ)(),
  eu = (0, H.hQ)(),
  eh = (0, H.hQ)(),
  em = (0, H.hQ)(),
  eg = (0, H.hQ)(),
  eE = (0, b.kt)({
id: '1',
type: q.d4z.DM
  }),
  eT = 'AUTOMATIC_RTC_REGION',
  ep = d.ZP.connectStores([y.Z], () => {
let {
  channel: e,
  submitting: t
} = y.Z.getProps();
return {
  channel: e,
  submitting: t,
  onReset() {
    null != e && (0, m.S1)(e.id);
  },
  onSave() {
    if (null == e)
      return;
    let {
      name: t,
      type: s,
      topic: n,
      bitrate: l,
      userLimit: a,
      nsfw: i,
      flags: r,
      rateLimitPerUser: o,
      defaultThreadRateLimitPerUser: d,
      threadMetadata: c,
      defaultAutoArchiveDuration: u,
      template: h,
      rtcRegion: g,
      videoQualityMode: E,
      defaultReactionEmoji: T,
      availableTags: p,
      defaultSortOrder: N,
      defaultForumLayout: _
    } = e;
    e.isThread() && (t = (0, A.Z)(t, !0)), (0, m.wk)(e.id, {
      name: t,
      type: s,
      topic: n,
      bitrate: l,
      userLimit: a,
      nsfw: i,
      flags: r,
      rateLimitPerUser: o,
      defaultThreadRateLimitPerUser: d,
      autoArchiveDuration: null == c ? void 0 : c.autoArchiveDuration,
      locked: null == c ? void 0 : c.locked,
      invitable: null == c ? void 0 : c.invitable,
      defaultAutoArchiveDuration: u,
      template: h,
      rtcRegion: g,
      videoQualityMode: E,
      defaultReactionEmoji: T,
      availableTags: p,
      defaultSortOrder: N,
      defaultForumLayout: _
    });
  }
};
  })(T.Z);

function eN(e) {
  var t;
  let {
channel: s,
onChange: a
  } = e, [i, r] = l.useState(null !== (t = s.rateLimitPerUser) && void 0 !== t ? t : 0), [o, d] = l.useState(null), c = l.useMemo(() => {
let e = [...null != o ? o : q.BiE];
return !e.includes(i) && e.unshift(i), e.map(e => ({
  label: (0, z.A)(e, !1),
  value: e
}));
  }, [
o,
i
  ]), u = l.useCallback(e => {
r(e), a(e), d(null);
  }, [a]), m = l.useCallback(e => {
if ('' === e) {
  d(null);
  return;
}
let t = [],
  s = parseInt(e, 10);
if (Number.isNaN(s)) {
  d(null);
  return;
}
s <= q.GI0 && t.push(s);
let n = s * k.Z.Seconds.MINUTE;
n <= q.GI0 && t.push(n);
let l = s * k.Z.Seconds.HOUR;
l <= q.GI0 && t.push(l), d(t);
  }, []), g = l.useCallback(() => {
d(null);
  }, []);
  return (0, n.jsx)(h.SearchableSelect, {
className: es.marginBottom8,
value: i,
onChange: u,
onSearchChange: m,
options: c,
onBlur: g,
placeholder: ee.Z.Messages.FORM_LABEL_SLOWMODE_SEARCH_PLACEHOLDER
  });
}
class e_ extends l.PureComponent {
  componentDidMount() {
null == this.props.regions && null != this.props.guild && g.Z.fetchRegions(this.props.guild.id);
  }
  componentDidUpdate(e) {
var t, s, n, l;
let a = null !== (n = null === (t = this.props.channel) || void 0 === t ? void 0 : t.topic) && void 0 !== n ? n : '';
(null !== (l = null === (s = e.channel) || void 0 === s ? void 0 : s.topic) && void 0 !== l ? l : '') !== a && a !== this.state.textTopicValue && this.setState({
  textTopicValue: a,
  richTopicValue: (0, x.JM)(a)
});
  }
  getError(e) {
let {
  errors: t
} = this.props;
return null == t ? void 0 : t[e];
  }
  getCooldownSliderMarker(e) {
return (0, z.A)(e, !0);
  }
  getAutoArchiveDurationSliderMarker(e) {
return (0, z.A)(e * k.Z.Seconds.MINUTE, !0);
  }
  renderChannelInfo(e, t) {
var s, l, a, d, u, m;
let g, T;
let {
  canManageChannels: p,
  canSendMessages: N,
  isThreadModerator: _,
  canManageThread: x,
  guild: C,
  isForumPost: M,
  isOwner: O,
  showAdvancedSlowModeSetting: A
} = this.props, j = b.Ec.has(e.type), D = e.isForumLikeChannel(), y = D && (null === (s = e.availableTags) || void 0 === s ? void 0 : s.every(e => e.moderated)), w = (null === (l = B.default.getCurrentUser()) || void 0 === l ? void 0 : l.isStaff()) === !0, P = b.TK.has(e.type) ? (0, n.jsxs)('div', {
  children: [
    (0, n.jsx)(h.FormItem, {
      title: D ? ee.Z.Messages.FORM_LABEL_CHANNEL_GUIDELINES : ee.Z.Messages.FORM_LABEL_CHANNEL_TOPIC,
      className: es.marginTop20,
      children: D ? (0, n.jsx)(f.Z, {
        innerClassName: et.forumGuidelines,
        characterCountClassName: et.forumGuidelinesCharacterCount,
        maxCharacterCount: X.Z7,
        onChange: this.handleChangeRichTopic,
        placeholder: ee.Z.Messages.CHANNEL_TOPIC_EMPTY,
        channel: eE,
        textValue: this.state.textTopicValue,
        richValue: this.state.richTopicValue,
        type: S.I.FORUM_CHANNEL_GUIDELINES,
        onBlur: () => {
          this.setState({
            topicFocused: !1
          });
        },
        onFocus: () => {
          this.setState({
            topicFocused: !0
          });
        },
        focused: this.state.topicFocused,
        onSubmit: this.handleSubmit,
        disableThemedBackground: !0
      }) : (0, n.jsx)(h.TextArea, {
        autoFocus: this.props.subsection === q.ZfP.TOPIC,
        placeholder: ee.Z.Messages.CHANNEL_TOPIC_EMPTY,
        value: I.ZP.translateSurrogatesToInlineEmoji(e.topic),
        onChange: this.handleChangeTopic,
        error: this.getError('topic'),
        maxLength: X.$x,
        disabled: !p,
        autosize: !0
      })
    }),
    (0, n.jsx)(h.FormDivider, {
      className: i()(es.marginTop40, es.marginBottom40)
    })
  ]
}) : null, F = D && w ? (0, n.jsxs)('div', {
  children: [
    (0, n.jsx)(h.FormItem, {
      title: ee.Z.Messages.FORM_LABEL_CHANNEL_TEMPLATE,
      className: es.marginTop20,
      children: (0, n.jsx)(h.TextArea, {
        placeholder: ee.Z.Messages.FORM_PLACEHOLDER_CHANNEL_TEMPLATE,
        value: I.ZP.translateSurrogatesToInlineEmoji(null !== (a = e.template) && void 0 !== a ? a : ''),
        onChange: this.handleChangeTemplate,
        error: this.getError('template'),
        maxLength: $.Vb,
        disabled: !p,
        autosize: !0
      })
    }),
    (0, n.jsx)(h.FormDivider, {
      className: i()(es.marginTop40, es.marginBottom40)
    })
  ]
}) : null, U = e.isForumLikeChannel() ? (0, n.jsxs)('div', {
  children: [
    (0, n.jsxs)(h.FormItem, {
      children: [
        (0, n.jsx)(h.FormTitle, {
          id: el,
          className: et.formTitle,
          children: ee.Z.Messages.FORUM_TAGS
        }),
        (0, n.jsx)(h.FormText, {
          id: ea,
          type: h.FormText.Types.DESCRIPTION,
          className: et.description,
          children: ee.Z.Messages.FORM_HELP_FORUM_TAGS
        }),
        (0, n.jsx)(R.Z, {
          channel: e
        })
      ]
    }),
    (0, n.jsx)(h.Checkbox, {
      disabled: !p || y,
      value: e.hasFlag(X.zZ.REQUIRE_TAG),
      type: h.Checkbox.Types.INVERTED,
      onChange: (e, t) => this.handleRequireTagChanged(t),
      children: (0, n.jsx)(h.Text, {
        variant: 'text-sm/normal',
        children: ee.Z.Messages.FORUM_REQUIRE_TAG_NOTE
      })
    }),
    (0, n.jsx)(h.FormDivider, {
      className: i()(es.marginTop40, es.marginBottom40)
    })
  ]
}) : null, H = e.isForumLikeChannel() ? (0, n.jsxs)('div', {
  children: [
    (0, n.jsxs)('div', {
      className: et.twoColumnSettings,
      children: [
        (0, n.jsxs)(h.FormItem, {
          className: i()(et.settingsLeft, et.settingsDefaultReaction),
          children: [
            (0, n.jsx)(h.FormTitle, {
              id: ei,
              className: et.formTitle,
              children: ee.Z.Messages.FORUM_DEFAULT_REACTION
            }),
            (0, n.jsx)(h.FormText, {
              id: ea,
              type: h.FormText.Types.DESCRIPTION,
              className: et.description,
              children: ee.Z.Messages.FORUM_DEFAULT_REACTION_DESCRIPTION
            }),
            (0, n.jsxs)('div', {
              className: et.buttonRow,
              children: [
                (0, n.jsx)(h.Popout, {
                  renderPopout: this.renderEmojiPicker,
                  position: 'right',
                  animation: h.Popout.Animation.NONE,
                  align: 'center',
                  children: e => (0, n.jsx)(h.Button, {
                    ...e,
                    disabled: !p,
                    onClick: t => {
                      var s;
                      null === (s = e.onClick) || void 0 === s || s.call(e, t);
                    },
                    children: ee.Z.Messages.SELECT_EMOJI
                  })
                }),
                null != e.defaultReactionEmoji ? (0, n.jsx)(h.Button, {
                  className: et.removeButton,
                  onClick: () => this.handleChangeDefaultReactionEmoji(null),
                  size: h.Button.Sizes.MIN,
                  look: h.Button.Looks.LINK,
                  color: h.Button.Colors.RED,
                  children: ee.Z.Messages.REMOVE
                }) : null
              ]
            })
          ]
        }),
        (0, n.jsx)(Z.Z, {
          reactionEmoji: e.defaultReactionEmoji
        })
      ]
    }),
    (0, n.jsx)(h.FormDivider, {
      className: i()(es.marginTop40, es.marginBottom40)
    })
  ]
}) : null, G = e.isForumChannel() ? (0, n.jsxs)('div', {
  children: [
    (0, n.jsxs)('div', {
      className: et.twoColumnSettings,
      children: [
        (0, n.jsxs)(h.FormItem, {
          className: i()(et.settingsLeft, et.settingsDefaultView),
          children: [
            (0, n.jsx)(h.FormSection, {
              title: ee.Z.Messages.FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT,
              children: (0, n.jsx)(h.SingleSelect, {
                options: [{
                    label: ee.Z.Messages.FORUM_CHANNEL_SETTINGS_LIST_VIEW,
                    value: r.X.LIST
                  },
                  {
                    label: ee.Z.Messages.FORUM_CHANNEL_SETTINGS_GRID_VIEW,
                    value: r.X.GRID
                  }
                ],
                value: null !== (d = e.defaultForumLayout) && void 0 !== d ? d : r.X.LIST,
                onChange: this.handleChangeDefaultForumLayout
              })
            }),
            (0, n.jsx)(h.FormText, {
              className: es.marginTop8,
              type: h.FormText.Types.DESCRIPTION,
              children: ee.Z.Messages.FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT_DESCRIPTION
            })
          ]
        }),
        e.defaultForumLayout === r.X.GRID ? (0, n.jsx)(Y.Z, {
          className: et.defaultImageView
        }) : (0, n.jsx)(Q.Z, {
          className: et.defaultImageView
        })
      ]
    }),
    (0, n.jsx)(h.FormDivider, {
      className: i()(es.marginTop40, es.marginBottom40)
    })
  ]
}) : null, k = e.isForumLikeChannel() ? (0, n.jsxs)('div', {
  children: [
    (0, n.jsx)(h.FormItem, {
      children: (0, n.jsx)(h.FormSection, {
        title: ee.Z.Messages.FORUM_DEFAULT_SORT_ORDER,
        children: (0, n.jsx)(h.SingleSelect, {
          options: [{
              label: ee.Z.Messages.FORUM_SORT_ACTIVITY,
              value: o.z.LATEST_ACTIVITY
            },
            {
              label: ee.Z.Messages.FORUM_SORT_CREATION,
              value: o.z.CREATION_DATE
            }
          ],
          value: e.getDefaultSortOrder(),
          onChange: this.handleChangeDefaultSortOrder
        })
      })
    }),
    (0, n.jsx)(h.FormText, {
      className: es.marginTop8,
      type: h.FormText.Types.DESCRIPTION,
      children: ee.Z.Messages.FORUM_DEFAULT_SORT_ORDER_DESCRIPTION
    }),
    (0, n.jsx)(h.FormDivider, {
      className: i()(es.marginTop40, es.marginBottom40)
    })
  ]
}) : null, V = j ? _ : p, z = b.X_.has(e.type) ? (0, n.jsxs)('div', {
  children: [
    (0, n.jsxs)(h.FormItem, {
      children: [
        (0, n.jsx)(h.FormTitle, {
          id: er,
          className: es.marginBottom8,
          children: ee.Z.Messages.FORM_LABEL_SLOWMODE
        }),
        D ? (0, n.jsx)(h.FormTitle, {
          className: es.marginTop20,
          children: ee.Z.Messages.FORUM_SETTING_SLOW_MODE_POSTS
        }) : null,
        !0 === A ? (0, n.jsx)(eN, {
          channel: e,
          onChange: this.handleChangeSlowmode
        }) : (0, n.jsx)(h.Slider, {
          className: es.marginTop20,
          initialValue: e.rateLimitPerUser,
          markers: q.BiE,
          stickToMarkers: !0,
          onValueChange: this.handleChangeSlowmode,
          onMarkerRender: this.getCooldownSliderMarker,
          disabled: !V,
          equidistant: !0,
          'aria-labelledby': er,
          'aria-describedby': eo
        }),
        (0, n.jsx)(h.FormText, {
          id: eo,
          type: h.FormText.Types.DESCRIPTION,
          children: D ? ee.Z.Messages.FORM_HELP_SLOWMODE_FORUM : j ? ee.Z.Messages.FORM_HELP_SLOWMODE_THREAD : ee.Z.Messages.FORM_HELP_SLOWMODE
        }),
        D ? (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(h.FormTitle, {
              className: es.marginTop20,
              children: ee.Z.Messages.FORUM_SETTING_SLOW_MODE_MESSAGES
            }),
            (0, n.jsx)(h.Slider, {
              className: es.marginTop20,
              initialValue: null !== (u = e.defaultThreadRateLimitPerUser) && void 0 !== u ? u : 0,
              markers: q.BiE,
              stickToMarkers: !0,
              onValueChange: this.handleChangeThreadMessageSlowmode,
              onMarkerRender: this.getCooldownSliderMarker,
              disabled: !V,
              equidistant: !0,
              'aria-labelledby': er,
              'aria-describedby': eo
            }),
            (0, n.jsx)(h.FormText, {
              type: h.FormText.Types.DESCRIPTION,
              children: ee.Z.Messages.FORUM_SETTING_SLOW_MODE_MESSAGE_TEXT
            })
          ]
        }) : null
      ]
    }),
    (0, n.jsx)(h.FormDivider, {
      className: i()(es.marginTop40, es.marginBottom40)
    })
  ]
}) : null, K = j && null != e.threadMetadata ? (0, n.jsxs)('div', {
  children: [
    (0, n.jsx)(h.FormItem, {
      children: (0, n.jsx)(E.Z, {
        page: q.ZY5.CHANNEL_SETTINGS,
        children: (0, n.jsx)(L.Z, {
          autoArchiveDuration: null !== (m = e.threadMetadata.autoArchiveDuration) && void 0 !== m ? m : J.AX,
          guild: C,
          channel: e,
          onChange: this.handleAutoArchiveDurationChanged,
          isDisabled: !x
        })
      })
    }),
    (0, n.jsx)(h.FormText, {
      className: es.marginTop8,
      type: h.FormText.Types.DESCRIPTION,
      children: M ? ee.Z.Messages.FORM_HELP_AUTO_ARCHIVE_DURATION_FORUM_POST : ee.Z.Messages.FORM_HELP_AUTO_ARCHIVE_DURATION
    })
  ]
}) : null, en = e.type === q.d4z.PRIVATE_THREAD && null != e.threadMetadata ? (0, n.jsx)('div', {
  children: (0, n.jsx)(h.FormSwitch, {
    note: ee.Z.Messages.FORM_HELP_THREAD_INVITABLE,
    onChange: this.handleInvitableChanged,
    value: e.threadMetadata.invitable,
    hideBorder: !0,
    disabled: !x,
    children: ee.Z.Messages.THREAD_INVITABLE_TOGGLE_LABEL
  })
}) : null, ed = b.ov.has(e.type) ? (0, n.jsx)('div', {
  children: (0, n.jsx)(h.FormSwitch, {
    note: ee.Z.Messages.FORM_HELP_NSFW,
    onChange: this.handleNSFWChange,
    value: e.isNSFW(),
    hideBorder: !0,
    disabled: !p,
    children: ee.Z.Messages.FORM_LABEL_NSFW_CHANNEL
  })
}) : null, ec = b.Y0.has(e.type) && null != C && C.hasFeature(q.oNc.NEWS) && e.id !== (null == C ? void 0 : C.rulesChannelId) && e.id !== (null == C ? void 0 : C.publicUpdatesChannelId) ? (0, n.jsx)('div', {
  children: (0, n.jsx)(h.FormSwitch, {
    note: ee.Z.Messages.FORM_HELP_NEWS.format({
      documentationLink: W.Z.getArticleURL(q.BhN.ANNOUNCEMENT_CHANNELS)
    }),
    onChange: this.handleNewsChange,
    value: e.type === q.d4z.GUILD_ANNOUNCEMENT,
    hideBorder: !0,
    disabled: !p,
    children: ee.Z.Messages.FORM_LABEL_NEWS_CHANNEL
  })
}) : null, eu = b.uC.has(e.type) ? (0, n.jsxs)('div', {
  children: [
    (0, n.jsx)(h.FormDivider, {
      className: i()(es.marginTop40, es.marginBottom40)
    }),
    (0, n.jsx)(E.Z, {
      page: q.ZY5.CHANNEL_SETTINGS,
      children: (0, n.jsx)(L.Z, {
        autoArchiveDuration: (0, v.WD)(e, null),
        guild: C,
        channel: e,
        onChange: this.handleChangeDefaultAutoArchiveDuration,
        isDisabled: !p
      })
    }),
    (0, n.jsx)(h.FormText, {
      className: es.marginTop8,
      type: h.FormText.Types.DESCRIPTION,
      children: e.isForumLikeChannel() ? ee.Z.Messages.FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION_FORUM_POST : ee.Z.Messages.FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION
    })
  ]
}) : null, eh = this.props.showChannelSummariesSettings ? (0, n.jsx)(h.FormSwitch, {
  note: ee.Z.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE_DESCRIPTION.format({
    helpdeskArticle: W.Z.getArticleURL(q.BhN.CONVERSATION_SUMMARIES)
  }),
  onChange: this.handleChannelSummariesToggled,
  value: !e.hasFlag(X.zZ.SUMMARIES_DISABLED) && (null == C ? void 0 : C.hasFeature(q.oNc.SUMMARIES_ENABLED_BY_USER)),
  hideBorder: !0,
  disabled: !p || !(null == C ? void 0 : C.hasFeature(q.oNc.SUMMARIES_ENABLED_BY_USER)),
  children: (0, n.jsxs)('div', {
    className: et.badgedItem,
    children: [
      ee.Z.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE,
      (0, n.jsx)(h.TextBadge, {
        text: ee.Z.Messages.BETA,
        color: c.Z.colors.BG_BRAND.css
      })
    ]
  })
}) : null, em = e.isMediaChannel() ? (0, n.jsxs)('div', {
  children: [
    (0, n.jsx)(h.FormDivider, {
      className: i()(es.marginTop40, es.marginBottom40)
    }),
    (0, n.jsx)(h.FormSwitch, {
      onChange: this.handleShowMediaOptionsToggled,
      value: !e.hasFlag(X.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
      note: ee.Z.Messages.MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_DESCRIPTION,
      hideBorder: !0,
      disabled: !p,
      children: ee.Z.Messages.MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_LABEL
    })
  ]
}) : null;
return e.type === q.d4z.GUILD_CATEGORY ? (T = ee.Z.Messages.CATEGORY_NAME, g = 'category-name') : e.isForumPost() ? (T = ee.Z.Messages.FORUM_POST_TITLE, g = 'post-title') : j ? (T = ee.Z.Messages.THREAD_NAME, g = 'thread-name') : (T = ee.Z.Messages.FORM_LABEL_CHANNEL_NAME, g = 'channel-name'), (0, n.jsxs)('div', {
  children: [
    (0, n.jsx)(h.FormItem, {
      title: T,
      children: (0, n.jsx)(h.TextInput, {
        value: t,
        onChange: this.handleChangeName,
        onBlur: this.handleBlurName,
        error: this.getError('name'),
        name: g,
        autoFocus: !0,
        disabled: O ? !N : !p,
        maxLength: q.HN8
      })
    }),
    (0, n.jsx)(h.FormDivider, {
      className: i()(es.marginTop40, es.marginBottom40)
    }),
    P,
    F,
    U,
    H,
    z,
    K,
    G,
    k,
    en,
    ed,
    ec,
    eh,
    eu,
    em
  ]
});
  }
  renderBitrate(e) {
return ''.concat(Math.round(e / 1000), 'kbps');
  }
  renderVoiceBitrate(e, t) {
let {
  canManageChannels: s
} = this.props;
if (!this.showVoiceSettings())
  return null;
let l = (0, G.g7)(t, e),
  a = this.getError('bitrate');
return (0, n.jsxs)(U.Z, {
  direction: U.Z.Direction.VERTICAL,
  className: es.marginBottom40,
  children: [
    (0, n.jsx)(h.FormTitle, {
      id: ed,
      children: ee.Z.Messages.FORM_LABEL_BITRATE
    }),
    '' !== a && (0, n.jsx)(h.FormText, {
      id: ec,
      type: h.FormTextTypes.DESCRIPTION,
      style: {
        color: c.Z.unsafe_rawColors.RED_400.css
      },
      className: es.marginBottom8,
      children: a
    }),
    (0, n.jsx)(h.Slider, {
      initialValue: Math.min(e.bitrate, l),
      onValueChange: this.handleChangeBitrate,
      onValueRender: this.renderBitrate,
      onMarkerRender: this.renderBitrate,
      markers: [
        q.Fc,
        q.epw,
        l
      ],
      minValue: q.Fc,
      maxValue: l,
      keyboardStep: q.V7H,
      disabled: !s,
      'aria-labelledby': ed,
      'aria-describedby': null != a && '' !== a ? ec : eu
    }),
    l > q.epw ? (0, n.jsx)(h.FormText, {
      id: eu,
      type: h.FormTextTypes.DESCRIPTION,
      children: ee.Z.Messages.FORM_HELP_BITRATE.format({
        bitrate: q.epw / 1000
      })
    }) : null
  ]
});
  }
  showVoiceSettings() {
let {
  channel: e
} = this.props;
return null != e && null != e.guild_id && b.vg.has(e.type) && (e.isGuildVocal() || O.tM.getCurrentConfig({
  guildId: e.guild_id,
  location: '9b50bd_1'
}).enabled);
  }
  renderVideoQualityMode(e) {
var t;
let {
  canManageChannels: s
} = this.props;
if (!this.showVoiceSettings())
  return null;
let l = [{
    value: q.Ucd.AUTO,
    name: ee.Z.Messages.VIDEO_QUALITY_MODE_AUTO
  },
  {
    value: q.Ucd.FULL,
    name: ee.Z.Messages.VIDEO_QUALITY_MODE_FULL
  }
];
return (0, n.jsxs)(U.Z, {
  direction: U.Z.Direction.VERTICAL,
  className: es.marginBottom40,
  children: [
    (0, n.jsx)(h.FormItem, {
      title: ee.Z.Messages.FORM_LABEL_VIDEO_QUALITY,
      children: (0, n.jsx)(h.RadioGroup, {
        onChange: e => {
          let {
            value: t
          } = e;
          return this.handleVideoQualityModeChange(t);
        },
        options: l,
        value: null !== (t = e.videoQualityMode) && void 0 !== t ? t : q.Ucd.AUTO,
        disabled: !s
      })
    }),
    (0, n.jsx)(h.FormText, {
      type: h.FormTextTypes.DESCRIPTION,
      children: ee.Z.Messages.FORM_HELP_VIDEO_QUALITY_MODE.format()
    })
  ]
});
  }
  onRenderUserLimit(e) {
return 0 === (e = Math.round(e)) ? ee.Z.Messages.NO_USER_LIMIT : ee.Z.Messages.NUM_USERS.format({
  num: e
});
  }
  renderUserLimit(e) {
let {
  canManageChannels: t
} = this.props;
if (!this.showVoiceSettings())
  return null;
let s = this.getError('user_limit'),
  l = e.isGuildStageVoice() ? q.xGv : q.$pe;
return (0, n.jsxs)(U.Z, {
  direction: U.Z.Direction.VERTICAL,
  className: es.marginBottom40,
  children: [
    (0, n.jsx)(h.FormTitle, {
      id: eh,
      children: ee.Z.Messages.FORM_LABEL_USER_LIMIT
    }),
    '' !== s && (0, n.jsx)(h.FormText, {
      id: em,
      type: h.FormTextTypes.DESCRIPTION,
      style: {
        color: c.Z.unsafe_rawColors.RED_400.css
      },
      className: es.marginBottom8,
      children: s
    }),
    (0, n.jsx)(h.Slider, {
      initialValue: Math.min(e.userLimit, l),
      onValueChange: this.handleUserLimitChange,
      onValueRender: this.onRenderUserLimit,
      onMarkerRender: e => 0 === Math.round(e) ? '\u221E' : e,
      markers: [
        0,
        l
      ],
      minValue: 0,
      maxValue: l,
      disabled: !t,
      'aria-labelledby': eh,
      'aria-describedby': null != s && '' !== s ? em : eg
    }),
    (0, n.jsx)(h.FormText, {
      id: eg,
      type: h.FormTextTypes.DESCRIPTION,
      children: (e.isGuildStageVoice() ? ee.Z.Messages.FORM_HELP_USER_LIMIT_STAGE : ee.Z.Messages.FORM_HELP_USER_LIMIT).format()
    })
  ]
});
  }
  renderRegionOverride(e) {
var t;
let {
  regions: s,
  canManageChannels: l,
  guild: a
} = this.props;
if (null == a || !this.showVoiceSettings() || e.isGuildStageVoice())
  return null;
let i = [];
null != s && (i = s.filter(e => !e.deprecated && !e.hidden).map(e => ({
  label: e.name,
  value: e.id
}))).unshift({
  label: ee.Z.Messages.AUTOMATIC_REGION,
  value: eT
});
let r = null !== (t = e.rtcRegion) && void 0 !== t ? t : eT;
return (0, n.jsxs)(U.Z, {
  direction: U.Z.Direction.VERTICAL,
  children: [
    (0, n.jsx)(h.FormTitle, {
      children: ee.Z.Messages.FORM_LABEL_REGION_OVERRIDE
    }),
    (0, n.jsx)(h.SingleSelect, {
      options: i,
      value: r,
      onChange: this.handleRegionChange,
      isDisabled: !l
    }),
    (0, n.jsx)(h.FormText, {
      type: h.FormTextTypes.DESCRIPTION,
      children: ee.Z.Messages.FORM_HELP_REGION_OVERRIDE
    })
  ]
});
  }
  renderJuiceImage(e) {
let t;
let {
  theme: l
} = this.props;
return t = e.type === q.d4z.GUILD_CATEGORY ? (0, u.wj)(l) ? s(309095) : s(925442) : (0, u.wj)(l) ? s(316491) : s(301358), (0, n.jsx)(U.Z, {
  justify: U.Z.Justify.CENTER,
  className: es.marginTop60,
  children: (0, n.jsx)('img', {
    alt: '',
    width: 280,
    height: 165,
    src: t
  })
});
  }
  render() {
let {
  channel: e,
  channelName: t,
  guild: s
} = this.props;
return null == e || null == t || null == s ? null : (0, n.jsxs)(h.FormSection, {
  className: 'channel-settings-overview',
  tag: h.FormTitleTags.H1,
  title: ee.Z.Messages.OVERVIEW,
  children: [
    this.renderChannelInfo(e, t),
    this.showVoiceSettings() ? (0, n.jsx)(h.FormDivider, {
      className: i()(es.marginTop40, es.marginBottom40)
    }) : null,
    this.renderVoiceBitrate(e, s),
    this.renderVideoQualityMode(e),
    this.renderUserLimit(e),
    this.renderRegionOverride(e),
    this.renderJuiceImage(e)
  ]
});
  }
  handleSubmit() {
return new Promise(e => {
  e({
    shouldClear: !1,
    shouldRefocus: !0
  });
});
  }
  constructor(e) {
var t, s;
super(e), en(this, 'renderEmojiPicker', e => {
  let {
    closePopout: t
  } = e, {
    channel: s
  } = this.props;
  return (0, n.jsx)(C.Z, {
    guildId: null == s ? void 0 : s.guild_id,
    closePopout: t,
    onSelectEmoji: (e, s) => {
      this.handleChangeDefaultReactionEmoji(e), s && t();
    },
    pickerIntention: K.Hz.COMMUNITY_CONTENT,
    channel: s
  });
}), en(this, 'handleRequireTagChanged', e => {
  let {
    channel: t
  } = this.props;
  if (null == t)
    return null;
  let s = (0, V.mB)(t.flags, X.zZ.REQUIRE_TAG, e);
  (0, m.pW)({
    flags: s
  });
}), en(this, 'handleChangeName', e => {
  let {
    channel: t
  } = this.props;
  if (null != t)
    t.isThread() ? e = (0, A.Z)(e, !1) : q.TPd.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, G.Nj)(e)), (0, m.pW)({
      name: e
    });
}), en(this, 'handleBlurName', () => {
  let {
    channel: e,
    channelName: t
  } = this.props;
  if ((null == e ? void 0 : e.isThread()) && null != t) {
    let e = (0, A.Z)(t, !0);
    e !== t && (0, m.pW)({
      name: e
    });
  }
}), en(this, 'handleChangeTopic', e => {
  (0, m.pW)({
    topic: I.ZP.translateInlineEmojiToSurrogates(e)
  });
}), en(this, 'handleChangeRichTopic', (e, t, s) => {
  this.setState({
    textTopicValue: t,
    richTopicValue: s
  }), this.handleChangeTopic(t);
}), en(this, 'handleChangeTemplate', e => {
  (0, m.pW)({
    template: I.ZP.translateInlineEmojiToSurrogates(e)
  });
}), en(this, 'handleChangeDefaultReactionEmoji', e => {
  let t = null == e ? null : (null == e ? void 0 : e.id) != null ? {
    emojiId: e.id,
    emojiName: void 0
  } : {
    emojiId: void 0,
    emojiName: e.optionallyDiverseSequence
  };
  (0, m.pW)({
    defaultReactionEmoji: t
  });
}), en(this, 'handleChangeDefaultForumLayout', e => {
  let {
    channel: t
  } = this.props;
  if (null == t)
    return null;
  (0, m.pW)({
    defaultForumLayout: e
  }), this.props.handleSetDefaultLayout(e);
}), en(this, 'handleChangeDefaultSortOrder', e => {
  let {
    channel: t
  } = this.props;
  if (null == t)
    return null;
  (0, m.pW)({
    defaultSortOrder: e
  });
}), en(this, 'handleChangeBitrate', e => {
  (0, m.pW)({
    bitrate: 1000 * Math.round(e / 1000)
  });
}), en(this, 'handleUserLimitChange', e => {
  (0, m.pW)({
    userLimit: Math.round(e)
  });
}), en(this, 'handleNSFWChange', e => {
  (0, m.pW)({
    nsfw: e
  });
}), en(this, 'handleActiveChannelsRemovedChange', e => {
  let {
    channel: t
  } = this.props;
  if (null == t)
    return null;
  let s = (0, V.mB)(t.flags, X.zZ.ACTIVE_CHANNELS_REMOVED, !e);
  (0, m.pW)({
    flags: s
  });
}), en(this, 'handleNewsChange', e => {
  (0, m.pW)({
    type: e ? q.d4z.GUILD_ANNOUNCEMENT : q.d4z.GUILD_TEXT
  });
}), en(this, 'handleChangeSlowmode', e => {
  (0, m.pW)({
    rateLimitPerUser: e
  });
}), en(this, 'handleChangeThreadMessageSlowmode', e => {
  (0, m.pW)({
    defaultThreadRateLimitPerUser: e
  });
}), en(this, 'handleChangeDefaultAutoArchiveDuration', e => {
  (0, m.pW)({
    defaultAutoArchiveDuration: e
  });
}), en(this, 'handleRegionChange', e => {
  (0, m.pW)({
    rtcRegion: e === eT ? null : e
  });
}), en(this, 'handleVideoQualityModeChange', e => {
  (0, m.pW)({
    videoQualityMode: e
  });
}), en(this, 'handleAutoArchiveDurationChanged', e => {
  (0, m.pW)({
    autoArchiveDuration: e
  });
}), en(this, 'handleInvitableChanged', e => {
  (0, m.pW)({
    invitable: e
  });
}), en(this, 'handleChannelSummariesToggled', e => {
  let {
    channel: t
  } = this.props;
  if (null == t)
    return null;
  let s = (0, V.mB)(t.flags, X.zZ.SUMMARIES_DISABLED, !e);
  (0, m.pW)({
    flags: s
  });
}), en(this, 'handleShowMediaOptionsToggled', e => {
  let {
    channel: t
  } = this.props;
  if (null == t)
    return null;
  let s = (0, V.mB)(t.flags, X.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
  (0, m.pW)({
    flags: s
  });
});
let l = null !== (s = null === (t = this.props.channel) || void 0 === t ? void 0 : t.topic) && void 0 !== s ? s : '';
this.state = {
  textTopicValue: l,
  richTopicValue: (0, x.JM)(l),
  topicFocused: !1
};
  }
}

function eS() {
  let {
errors: e,
channel: t,
submitting: s,
subsection: a
  } = (0, d.cj)([y.Z], () => y.Z.getProps()), i = (0, d.e7)([F.Z], () => {
var e;
return F.Z.getRegions(null !== (e = null == t ? void 0 : t.getGuildId()) && void 0 !== e ? e : null);
  }), r = (0, d.e7)([j.Z], () => j.Z.theme), o = (0, d.e7)([w.Z], () => w.Z.getGuild(null == t ? void 0 : t.getGuildId())), c = (0, O.C7)(t), u = (0, O.Xb)(t), {
canManageChannels: h,
canSendMessages: m
  } = (0, d.cj)([P.Z], () => ({
canManageChannels: P.Z.can(q.Plq.MANAGE_CHANNELS, t),
canSendMessages: P.Z.can(q.Plq.SEND_MESSAGES, t)
  })), g = (0, _.ZP)(t), E = D.default.getId(), T = (0, M.v)(), S = null == t ? void 0 : t.id, x = (0, N.ts)(t, !1, !0), f = p.Z.useExperiment({
guildId: null == t ? void 0 : t.guild_id,
location: 'ChannelSettingsOverview'
  }).enabled, C = l.useCallback(e => {
null != S && T.getState().setLayoutType(S, e);
  }, [
S,
T
  ]);
  return (0, n.jsx)(e_, {
errors: e,
channel: t,
channelName: g,
submitting: s,
regions: i,
theme: r,
guild: o,
canManageChannels: (null == t ? void 0 : t.isThread()) ? c : h,
canSendMessages: m,
isThreadModerator: u,
canManageThread: c,
subsection: a,
isForumPost: null != t && t.isForumPost(),
isOwner: null == t ? void 0 : t.isOwner(E),
handleSetDefaultLayout: C,
showChannelSummariesSettings: x,
showAdvancedSlowModeSetting: f
  });
}