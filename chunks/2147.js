"use strict";
s.r(t), s.d(t, {
  ChannelSettingsOverviewNotice: function() {
    return e_
  },
  default: function() {
    return ex
  }
}), s("789020"), s("47120"), s("733860"), s("653041");
var l = s("735250"),
  a = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("313361"),
  o = s("683860"),
  d = s("442837"),
  u = s("692547"),
  c = s("780384"),
  h = s("481060"),
  m = s("787014"),
  E = s("771340"),
  f = s("410575"),
  g = s("852860"),
  S = s("129865"),
  T = s("902840"),
  N = s("933557"),
  _ = s("541716"),
  p = s("752305"),
  C = s("893718"),
  x = s("907040"),
  M = s("633302"),
  I = s("109434"),
  R = s("162389"),
  A = s("946458"),
  O = s("859802"),
  L = s("968437"),
  v = s("665906"),
  j = s("456077"),
  D = s("747212"),
  y = s("210887"),
  F = s("131704"),
  b = s("314897"),
  P = s("388610"),
  w = s("430824"),
  U = s("496675"),
  H = s("903223"),
  B = s("594174"),
  G = s("285952"),
  V = s("153124"),
  k = s("26290"),
  W = s("934415"),
  Y = s("70956"),
  z = s("630388"),
  K = s("63063"),
  Z = s("129724"),
  Q = s("296146"),
  X = s("564735"),
  J = s("981631"),
  q = s("176505"),
  $ = s("185923"),
  ee = s("710352"),
  et = s("369701"),
  es = s("124368"),
  el = s("689938"),
  ea = s("677846"),
  en = s("949086");

function ei(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let er = (0, V.uid)(),
  eo = (0, V.uid)(),
  ed = (0, V.uid)(),
  eu = (0, V.uid)(),
  ec = (0, V.uid)(),
  eh = (0, V.uid)(),
  em = (0, V.uid)(),
  eE = (0, V.uid)(),
  ef = (0, V.uid)(),
  eg = (0, V.uid)(),
  eS = (0, V.uid)(),
  eT = (0, F.createChannelRecord)({
    id: "1",
    type: J.ChannelTypes.DM
  }),
  eN = "AUTOMATIC_RTC_REGION",
  e_ = d.default.connectStores([P.default], () => {
    let {
      channel: e,
      submitting: t
    } = P.default.getProps();
    return {
      channel: e,
      submitting: t,
      onReset() {
        null != e && (0, m.init)(e.id)
      },
      onSave() {
        if (null == e) return;
        let {
          name: t,
          type: s,
          topic: l,
          bitrate: a,
          userLimit: n,
          nsfw: i,
          flags: r,
          rateLimitPerUser: o,
          defaultThreadRateLimitPerUser: d,
          threadMetadata: u,
          defaultAutoArchiveDuration: c,
          template: h,
          rtcRegion: E,
          videoQualityMode: f,
          defaultReactionEmoji: g,
          availableTags: S,
          defaultSortOrder: T,
          defaultForumLayout: N
        } = e;
        e.isThread() && (t = (0, j.default)(t, !0)), (0, m.saveChannel)(e.id, {
          name: t,
          type: s,
          topic: l,
          bitrate: a,
          userLimit: n,
          nsfw: i,
          flags: r,
          rateLimitPerUser: o,
          defaultThreadRateLimitPerUser: d,
          autoArchiveDuration: null == u ? void 0 : u.autoArchiveDuration,
          locked: null == u ? void 0 : u.locked,
          invitable: null == u ? void 0 : u.invitable,
          defaultAutoArchiveDuration: c,
          template: h,
          rtcRegion: E,
          videoQualityMode: f,
          defaultReactionEmoji: g,
          availableTags: S,
          defaultSortOrder: T,
          defaultForumLayout: N
        })
      }
    }
  })(g.default);

function ep(e) {
  var t;
  let {
    channel: s,
    onChange: n
  } = e, [i, r] = a.useState(null !== (t = s.rateLimitPerUser) && void 0 !== t ? t : 0), [o, d] = a.useState(null), u = a.useMemo(() => {
    let e = [...null != o ? o : J.SLOWMODE_VALUES];
    return !e.includes(i) && e.unshift(i), e.map(e => ({
      label: (0, Z.getSecondsSliderLabel)(e, !1),
      value: e
    }))
  }, [o, i]), c = a.useCallback(e => {
    r(e), n(e), d(null)
  }, [n]), m = a.useCallback(e => {
    if ("" === e) {
      d(null);
      return
    }
    let t = [],
      s = parseInt(e, 10);
    if (Number.isNaN(s)) {
      d(null);
      return
    }
    s <= J.SLOWMODE_MAX_VALUE && t.push(s);
    let l = s * Y.default.Seconds.MINUTE;
    l <= J.SLOWMODE_MAX_VALUE && t.push(l);
    let a = s * Y.default.Seconds.HOUR;
    a <= J.SLOWMODE_MAX_VALUE && t.push(a), d(t)
  }, []), E = a.useCallback(() => {
    d(null)
  }, []);
  return (0, l.jsx)(h.SearchableSelect, {
    className: en.marginBottom8,
    value: i,
    onChange: c,
    onSearchChange: m,
    options: u,
    onBlur: E,
    placeholder: el.default.Messages.FORM_LABEL_SLOWMODE_SEARCH_PLACEHOLDER
  })
}
class eC extends a.PureComponent {
  componentDidMount() {
    null == this.props.regions && null != this.props.guild && E.default.fetchRegions(this.props.guild.id)
  }
  componentDidUpdate(e) {
    var t, s, l, a;
    let n = null !== (l = null === (t = this.props.channel) || void 0 === t ? void 0 : t.topic) && void 0 !== l ? l : "";
    (null !== (a = null === (s = e.channel) || void 0 === s ? void 0 : s.topic) && void 0 !== a ? a : "") !== n && n !== this.state.textTopicValue && this.setState({
      textTopicValue: n,
      richTopicValue: (0, p.toRichValue)(n)
    })
  }
  getError(e) {
    let {
      errors: t
    } = this.props;
    return null == t ? void 0 : t[e]
  }
  getCooldownSliderMarker(e) {
    return (0, Z.getSecondsSliderLabel)(e, !0)
  }
  getAutoArchiveDurationSliderMarker(e) {
    return (0, Z.getSecondsSliderLabel)(e * Y.default.Seconds.MINUTE, !0)
  }
  renderChannelInfo(e, t) {
    var s, a, n, d, c, m;
    let E, g;
    let {
      canManageChannels: S,
      canSendMessages: T,
      isThreadModerator: N,
      canManageThread: p,
      guild: x,
      isForumPost: I,
      isOwner: O,
      showAdvancedSlowModeSetting: v
    } = this.props, j = F.THREAD_CHANNEL_TYPES.has(e.type), y = e.isForumLikeChannel(), b = y && (null === (s = e.availableTags) || void 0 === s ? void 0 : s.every(e => e.moderated)), P = (null === (a = B.default.getCurrentUser()) || void 0 === a ? void 0 : a.isStaff()) === !0, w = F.TOPIC_CHANNEL_TYPES.has(e.type) ? (0, l.jsxs)("div", {
      children: [(0, l.jsx)(h.FormItem, {
        title: y ? el.default.Messages.FORM_LABEL_CHANNEL_GUIDELINES : el.default.Messages.FORM_LABEL_CHANNEL_TOPIC,
        className: en.marginTop20,
        children: y ? (0, l.jsx)(C.default, {
          innerClassName: ea.forumGuidelines,
          characterCountClassName: ea.forumGuidelinesCharacterCount,
          maxCharacterCount: q.MAX_FORUM_CHANNEL_TOPIC_LENGTH,
          onChange: this.handleChangeRichTopic,
          placeholder: el.default.Messages.CHANNEL_TOPIC_EMPTY,
          channel: eT,
          textValue: this.state.textTopicValue,
          richValue: this.state.richTopicValue,
          type: _.ChatInputTypes.FORUM_CHANNEL_GUIDELINES,
          onBlur: () => {
            this.setState({
              topicFocused: !1
            })
          },
          onFocus: () => {
            this.setState({
              topicFocused: !0
            })
          },
          focused: this.state.topicFocused,
          onSubmit: this.handleSubmit,
          disableThemedBackground: !0
        }) : (0, l.jsx)(h.TextArea, {
          autoFocus: this.props.subsection === J.ChannelSettingsSubsections.TOPIC,
          placeholder: el.default.Messages.CHANNEL_TOPIC_EMPTY,
          value: M.default.translateSurrogatesToInlineEmoji(e.topic),
          onChange: this.handleChangeTopic,
          error: this.getError("topic"),
          maxLength: q.MAX_CHANNEL_TOPIC_LENGTH,
          disabled: !S,
          autosize: !0
        })
      }), (0, l.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      })]
    }) : null, U = y && P ? (0, l.jsxs)("div", {
      children: [(0, l.jsx)(h.FormItem, {
        title: el.default.Messages.FORM_LABEL_CHANNEL_TEMPLATE,
        className: en.marginTop20,
        children: (0, l.jsx)(h.TextArea, {
          placeholder: el.default.Messages.FORM_PLACEHOLDER_CHANNEL_TEMPLATE,
          value: M.default.translateSurrogatesToInlineEmoji(null !== (n = e.template) && void 0 !== n ? n : ""),
          onChange: this.handleChangeTemplate,
          error: this.getError("template"),
          maxLength: ee.MAX_FORUM_TEMPLATE_LENGTH,
          disabled: !S,
          autosize: !0
        })
      }), (0, l.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      })]
    }) : null, H = e.isForumLikeChannel() ? (0, l.jsxs)("div", {
      children: [(0, l.jsxs)(h.FormItem, {
        children: [(0, l.jsx)(h.FormTitle, {
          id: er,
          className: ea.formTitle,
          children: el.default.Messages.FORUM_TAGS
        }), (0, l.jsx)(h.FormText, {
          id: eo,
          type: h.FormText.Types.DESCRIPTION,
          className: ea.description,
          children: el.default.Messages.FORM_HELP_FORUM_TAGS
        }), (0, l.jsx)(R.default, {
          channel: e
        })]
      }), (0, l.jsx)(h.Checkbox, {
        disabled: !S || b,
        value: e.hasFlag(q.ChannelFlags.REQUIRE_TAG),
        type: h.Checkbox.Types.INVERTED,
        onChange: (e, t) => this.handleRequireTagChanged(t),
        children: (0, l.jsx)(h.Text, {
          variant: "text-sm/normal",
          children: el.default.Messages.FORUM_REQUIRE_TAG_NOTE
        })
      }), (0, l.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      })]
    }) : null, G = e.isForumLikeChannel() ? (0, l.jsxs)("div", {
      children: [(0, l.jsxs)("div", {
        className: ea.twoColumnSettings,
        children: [(0, l.jsxs)(h.FormItem, {
          className: i()(ea.settingsLeft, ea.settingsDefaultReaction),
          children: [(0, l.jsx)(h.FormTitle, {
            id: ed,
            className: ea.formTitle,
            children: el.default.Messages.FORUM_DEFAULT_REACTION
          }), (0, l.jsx)(h.FormText, {
            id: eo,
            type: h.FormText.Types.DESCRIPTION,
            className: ea.description,
            children: el.default.Messages.FORUM_DEFAULT_REACTION_DESCRIPTION
          }), (0, l.jsxs)("div", {
            className: ea.buttonRow,
            children: [(0, l.jsx)(h.Popout, {
              renderPopout: this.renderEmojiPicker,
              position: "right",
              animation: h.Popout.Animation.NONE,
              align: "center",
              children: e => (0, l.jsx)(h.Button, {
                ...e,
                disabled: !S,
                onClick: t => {
                  var s;
                  null === (s = e.onClick) || void 0 === s || s.call(e, t)
                },
                children: el.default.Messages.SELECT_EMOJI
              })
            }), null != e.defaultReactionEmoji ? (0, l.jsx)(h.Button, {
              className: ea.removeButton,
              onClick: () => this.handleChangeDefaultReactionEmoji(null),
              size: h.Button.Sizes.MIN,
              look: h.Button.Looks.LINK,
              color: h.Button.Colors.RED,
              children: el.default.Messages.REMOVE
            }) : null]
          })]
        }), (0, l.jsx)(A.default, {
          reactionEmoji: e.defaultReactionEmoji
        })]
      }), (0, l.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      })]
    }) : null, V = e.isForumChannel() ? (0, l.jsxs)("div", {
      children: [(0, l.jsxs)("div", {
        className: ea.twoColumnSettings,
        children: [(0, l.jsxs)(h.FormItem, {
          className: i()(ea.settingsLeft, ea.settingsDefaultView),
          children: [(0, l.jsx)(h.FormSection, {
            title: el.default.Messages.FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT,
            children: (0, l.jsx)(h.SingleSelect, {
              options: [{
                label: el.default.Messages.FORUM_CHANNEL_SETTINGS_LIST_VIEW,
                value: r.ForumLayout.LIST
              }, {
                label: el.default.Messages.FORUM_CHANNEL_SETTINGS_GRID_VIEW,
                value: r.ForumLayout.GRID
              }],
              value: null !== (d = e.defaultForumLayout) && void 0 !== d ? d : r.ForumLayout.LIST,
              onChange: this.handleChangeDefaultForumLayout
            })
          }), (0, l.jsx)(h.FormText, {
            className: en.marginTop8,
            type: h.FormText.Types.DESCRIPTION,
            children: el.default.Messages.FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT_DESCRIPTION
          })]
        }), e.defaultForumLayout === r.ForumLayout.GRID ? (0, l.jsx)(Q.default, {
          className: ea.defaultImageView
        }) : (0, l.jsx)(X.default, {
          className: ea.defaultImageView
        })]
      }), (0, l.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      })]
    }) : null, W = e.isForumLikeChannel() ? (0, l.jsxs)("div", {
      children: [(0, l.jsx)(h.FormItem, {
        children: (0, l.jsx)(h.FormSection, {
          title: el.default.Messages.FORUM_DEFAULT_SORT_ORDER,
          children: (0, l.jsx)(h.SingleSelect, {
            options: [{
              label: el.default.Messages.FORUM_SORT_ACTIVITY,
              value: o.ThreadSortOrder.LATEST_ACTIVITY
            }, {
              label: el.default.Messages.FORUM_SORT_CREATION,
              value: o.ThreadSortOrder.CREATION_DATE
            }],
            value: e.getDefaultSortOrder(),
            onChange: this.handleChangeDefaultSortOrder
          })
        })
      }), (0, l.jsx)(h.FormText, {
        className: en.marginTop8,
        type: h.FormText.Types.DESCRIPTION,
        children: el.default.Messages.FORUM_DEFAULT_SORT_ORDER_DESCRIPTION
      }), (0, l.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      })]
    }) : null, Y = j ? N : S, z = F.SLOWMODE_CHANNEL_TYPES.has(e.type) ? (0, l.jsxs)("div", {
      children: [(0, l.jsxs)(h.FormItem, {
        children: [(0, l.jsx)(h.FormTitle, {
          id: eu,
          className: en.marginBottom8,
          children: el.default.Messages.FORM_LABEL_SLOWMODE
        }), y ? (0, l.jsx)(h.FormTitle, {
          className: en.marginTop20,
          children: el.default.Messages.FORUM_SETTING_SLOW_MODE_POSTS
        }) : null, !0 === v ? (0, l.jsx)(ep, {
          channel: e,
          onChange: this.handleChangeSlowmode
        }) : (0, l.jsx)(h.Slider, {
          className: en.marginTop20,
          initialValue: e.rateLimitPerUser,
          markers: J.SLOWMODE_VALUES,
          stickToMarkers: !0,
          onValueChange: this.handleChangeSlowmode,
          onMarkerRender: this.getCooldownSliderMarker,
          disabled: !Y,
          equidistant: !0,
          "aria-labelledby": eu,
          "aria-describedby": ec
        }), (0, l.jsx)(h.FormText, {
          id: ec,
          type: h.FormText.Types.DESCRIPTION,
          children: y ? el.default.Messages.FORM_HELP_SLOWMODE_FORUM : j ? el.default.Messages.FORM_HELP_SLOWMODE_THREAD : el.default.Messages.FORM_HELP_SLOWMODE
        }), y ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(h.FormTitle, {
            className: en.marginTop20,
            children: el.default.Messages.FORUM_SETTING_SLOW_MODE_MESSAGES
          }), (0, l.jsx)(h.Slider, {
            className: en.marginTop20,
            initialValue: null !== (c = e.defaultThreadRateLimitPerUser) && void 0 !== c ? c : 0,
            markers: J.SLOWMODE_VALUES,
            stickToMarkers: !0,
            onValueChange: this.handleChangeThreadMessageSlowmode,
            onMarkerRender: this.getCooldownSliderMarker,
            disabled: !Y,
            equidistant: !0,
            "aria-labelledby": eu,
            "aria-describedby": ec
          }), (0, l.jsx)(h.FormText, {
            type: h.FormText.Types.DESCRIPTION,
            children: el.default.Messages.FORUM_SETTING_SLOW_MODE_MESSAGE_TEXT
          })]
        }) : null]
      }), (0, l.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      })]
    }) : null, Z = j && null != e.threadMetadata ? (0, l.jsxs)("div", {
      children: [(0, l.jsx)(h.FormItem, {
        children: (0, l.jsx)(f.default, {
          page: J.AnalyticsPages.CHANNEL_SETTINGS,
          children: (0, l.jsx)(D.default, {
            autoArchiveDuration: null !== (m = e.threadMetadata.autoArchiveDuration) && void 0 !== m ? m : es.DEFAULT_AUTO_ARCHIVE_DURATION,
            guild: x,
            channel: e,
            onChange: this.handleAutoArchiveDurationChanged,
            isDisabled: !p
          })
        })
      }), (0, l.jsx)(h.FormText, {
        className: en.marginTop8,
        type: h.FormText.Types.DESCRIPTION,
        children: I ? el.default.Messages.FORM_HELP_AUTO_ARCHIVE_DURATION_FORUM_POST : el.default.Messages.FORM_HELP_AUTO_ARCHIVE_DURATION
      })]
    }) : null, $ = e.type === J.ChannelTypes.PRIVATE_THREAD && null != e.threadMetadata ? (0, l.jsx)("div", {
      children: (0, l.jsx)(h.FormSwitch, {
        note: el.default.Messages.FORM_HELP_THREAD_INVITABLE,
        onChange: this.handleInvitableChanged,
        value: e.threadMetadata.invitable,
        hideBorder: !0,
        disabled: !p,
        children: el.default.Messages.THREAD_INVITABLE_TOGGLE_LABEL
      })
    }) : null, et = F.NSFW_CHANNEL_TYPES.has(e.type) ? (0, l.jsx)("div", {
      children: (0, l.jsx)(h.FormSwitch, {
        note: el.default.Messages.FORM_HELP_NSFW,
        onChange: this.handleNSFWChange,
        value: e.isNSFW(),
        hideBorder: !0,
        disabled: !S,
        children: el.default.Messages.FORM_LABEL_NSFW_CHANNEL
      })
    }) : null, ei = F.TOGGLE_ANNOUNCEMENT_CHANNEL_TYPES.has(e.type) && null != x && x.hasFeature(J.GuildFeatures.NEWS) && e.id !== (null == x ? void 0 : x.rulesChannelId) && e.id !== (null == x ? void 0 : x.publicUpdatesChannelId) ? (0, l.jsx)("div", {
      children: (0, l.jsx)(h.FormSwitch, {
        note: el.default.Messages.FORM_HELP_NEWS.format({
          documentationLink: K.default.getArticleURL(J.HelpdeskArticles.ANNOUNCEMENT_CHANNELS)
        }),
        onChange: this.handleNewsChange,
        value: e.type === J.ChannelTypes.GUILD_ANNOUNCEMENT,
        hideBorder: !0,
        disabled: !S,
        children: el.default.Messages.FORM_LABEL_NEWS_CHANNEL
      })
    }) : null, eh = F.THREADED_CHANNEL_TYPES.has(e.type) ? (0, l.jsxs)("div", {
      children: [(0, l.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      }), (0, l.jsx)(f.default, {
        page: J.AnalyticsPages.CHANNEL_SETTINGS,
        children: (0, l.jsx)(D.default, {
          autoArchiveDuration: (0, L.getAutoArchiveDuration)(e, null),
          guild: x,
          channel: e,
          onChange: this.handleChangeDefaultAutoArchiveDuration,
          isDisabled: !S
        })
      }), (0, l.jsx)(h.FormText, {
        className: en.marginTop8,
        type: h.FormText.Types.DESCRIPTION,
        children: e.isForumLikeChannel() ? el.default.Messages.FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION_FORUM_POST : el.default.Messages.FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION
      })]
    }) : null, em = this.props.showChannelSummariesSettings ? (0, l.jsx)(h.FormSwitch, {
      note: el.default.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE_DESCRIPTION.format({
        helpdeskArticle: K.default.getArticleURL(J.HelpdeskArticles.CONVERSATION_SUMMARIES)
      }),
      onChange: this.handleChannelSummariesToggled,
      value: !e.hasFlag(q.ChannelFlags.SUMMARIES_DISABLED) && (null == x ? void 0 : x.hasFeature(J.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
      hideBorder: !0,
      disabled: !S || !(null == x ? void 0 : x.hasFeature(J.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
      children: (0, l.jsxs)("div", {
        className: ea.badgedItem,
        children: [el.default.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE, (0, l.jsx)(k.TextBadge, {
          text: el.default.Messages.BETA,
          color: u.default.unsafe_rawColors.BRAND_500.css,
          className: ea.__invalid_betaTag
        })]
      })
    }) : null, eE = e.isMediaChannel() ? (0, l.jsxs)("div", {
      children: [(0, l.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      }), (0, l.jsx)(h.FormSwitch, {
        onChange: this.handleShowMediaOptionsToggled,
        value: !e.hasFlag(q.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS),
        note: el.default.Messages.MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_DESCRIPTION,
        hideBorder: !0,
        disabled: !S,
        children: el.default.Messages.MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_LABEL
      })]
    }) : null;
    return e.type === J.ChannelTypes.GUILD_CATEGORY ? (g = el.default.Messages.CATEGORY_NAME, E = "category-name") : e.isForumPost() ? (g = el.default.Messages.FORUM_POST_TITLE, E = "post-title") : j ? (g = el.default.Messages.THREAD_NAME, E = "thread-name") : (g = el.default.Messages.FORM_LABEL_CHANNEL_NAME, E = "channel-name"), (0, l.jsxs)("div", {
      children: [(0, l.jsx)(h.FormItem, {
        title: g,
        children: (0, l.jsx)(h.TextInput, {
          value: t,
          onChange: this.handleChangeName,
          onBlur: this.handleBlurName,
          error: this.getError("name"),
          name: E,
          autoFocus: !0,
          disabled: O ? !T : !S,
          maxLength: J.MAX_CHANNEL_NAME_LENGTH
        })
      }), (0, l.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      }), w, U, H, G, z, Z, V, W, $, et, ei, em, eh, eE]
    })
  }
  renderHomeFlags(e) {
    let {
      canManageChannels: t
    } = this.props;
    if (!(0, O.canSeeGuildHome)(e.guild_id)) return null;
    let s = J.ChannelTypesSets.GUILD_PARENTABLE.has(e.type) ? (0, l.jsx)("div", {
        children: (0, l.jsx)(h.FormSwitch, {
          note: el.default.Messages.ACTIVE_CHANNELS_SHOW_CHANNEL_DESCRIPTION,
          onChange: this.handleActiveChannelsRemovedChange,
          value: !e.hasFlag(q.ChannelFlags.ACTIVE_CHANNELS_REMOVED),
          hideBorder: !0,
          disabled: !t,
          children: (0, l.jsxs)("div", {
            className: ea.badgedItem,
            children: [el.default.Messages.ACTIVE_CHANNELS_SHOW_CHANNEL, (0, l.jsx)(k.TextBadge, {
              text: el.default.Messages.BETA,
              color: u.default.unsafe_rawColors.BRAND_500.css,
              className: ea.__invalid_betaTag
            })]
          })
        })
      }) : null,
      a = et.GUILD_FEED_CHANNEL_TYPES.has(e.type) ? (0, l.jsx)("div", {
        children: (0, l.jsx)(h.FormSwitch, {
          note: el.default.Messages.GUILD_FEED_DEMOTE_CHANNEL_DESCRIPTION.format({
            warningHook: (e, t) => (0, l.jsx)("span", {
              className: ea.warningText,
              children: e
            }, t)
          }),
          onChange: this.handleGuildFeedRemovedChange,
          value: e.hasFlag(q.ChannelFlags.GUILD_FEED_REMOVED),
          hideBorder: !0,
          disabled: !t,
          children: (0, l.jsxs)("div", {
            className: ea.badgedItem,
            children: [el.default.Messages.GUILD_FEED_DEMOTE_CHANNEL, (0, l.jsx)(k.TextBadge, {
              text: el.default.Messages.BETA,
              color: u.default.unsafe_rawColors.BRAND_500.css,
              className: ea.__invalid_betaTag
            })]
          })
        })
      }) : null;
    return null == s && null == a ? null : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      }), (0, l.jsxs)(h.FormItem, {
        title: el.default.Messages.GUILD_HOME,
        children: [(0, l.jsx)(h.Text, {
          className: en.marginBottom20,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: el.default.Messages.GUILD_HOME_CHANNEL_SETTINGS_SUBTITLE.format({
            helpCenterLink: K.default.getArticleURL(J.HelpdeskArticles.GUILD_HOME)
          })
        }), s, a]
      })]
    })
  }
  renderBitrate(e) {
    return "".concat(Math.round(e / 1e3), "kbps")
  }
  renderVoiceBitrate(e, t) {
    let {
      canManageChannels: s
    } = this.props;
    if (!this.showVoiceSettings()) return null;
    let a = (0, W.getBitrateLimit)(t, e),
      n = this.getError("bitrate");
    return (0, l.jsxs)(G.default, {
      direction: G.default.Direction.VERTICAL,
      className: en.marginBottom40,
      children: [(0, l.jsx)(h.FormTitle, {
        id: eh,
        children: el.default.Messages.FORM_LABEL_BITRATE
      }), "" !== n && (0, l.jsx)(h.FormText, {
        id: em,
        type: h.FormTextTypes.DESCRIPTION,
        style: {
          color: u.default.unsafe_rawColors.RED_400.css
        },
        className: en.marginBottom8,
        children: n
      }), (0, l.jsx)(h.Slider, {
        initialValue: Math.min(e.bitrate, a),
        onValueChange: this.handleChangeBitrate,
        onValueRender: this.renderBitrate,
        onMarkerRender: this.renderBitrate,
        markers: [J.BITRATE_MIN, J.BITRATE_DEFAULT, a],
        minValue: J.BITRATE_MIN,
        maxValue: a,
        keyboardStep: J.BITRATE_STEP,
        disabled: !s,
        "aria-labelledby": eh,
        "aria-describedby": null != n && "" !== n ? em : eE
      }), a > J.BITRATE_DEFAULT ? (0, l.jsx)(h.FormText, {
        id: eE,
        type: h.FormTextTypes.DESCRIPTION,
        children: el.default.Messages.FORM_HELP_BITRATE.format({
          bitrate: J.BITRATE_DEFAULT / 1e3
        })
      }) : null]
    })
  }
  showVoiceSettings() {
    let {
      channel: e
    } = this.props;
    return null != e && null != e.guild_id && F.EDITABLE_VOICE_SETTINGS_TYPES.has(e.type) && (e.isGuildVocal() || v.VoiceInThreadsExperiment.getCurrentConfig({
      guildId: e.guild_id,
      location: "9b50bd_1"
    }).enabled)
  }
  renderVideoQualityMode(e) {
    var t;
    let {
      canManageChannels: s
    } = this.props;
    if (!this.showVoiceSettings()) return null;
    let a = [{
      value: J.VideoQualityMode.AUTO,
      name: el.default.Messages.VIDEO_QUALITY_MODE_AUTO
    }, {
      value: J.VideoQualityMode.FULL,
      name: el.default.Messages.VIDEO_QUALITY_MODE_FULL
    }];
    return (0, l.jsxs)(G.default, {
      direction: G.default.Direction.VERTICAL,
      className: en.marginBottom40,
      children: [(0, l.jsx)(h.FormItem, {
        title: el.default.Messages.FORM_LABEL_VIDEO_QUALITY,
        children: (0, l.jsx)(h.RadioGroup, {
          onChange: e => {
            let {
              value: t
            } = e;
            return this.handleVideoQualityModeChange(t)
          },
          options: a,
          value: null !== (t = e.videoQualityMode) && void 0 !== t ? t : J.VideoQualityMode.AUTO,
          disabled: !s
        })
      }), (0, l.jsx)(h.FormText, {
        type: h.FormTextTypes.DESCRIPTION,
        children: el.default.Messages.FORM_HELP_VIDEO_QUALITY_MODE.format()
      })]
    })
  }
  onRenderUserLimit(e) {
    return 0 === (e = Math.round(e)) ? el.default.Messages.NO_USER_LIMIT : el.default.Messages.NUM_USERS.format({
      num: e
    })
  }
  renderUserLimit(e) {
    let {
      canManageChannels: t
    } = this.props;
    if (!this.showVoiceSettings()) return null;
    let s = this.getError("user_limit"),
      a = e.isGuildStageVoice() ? J.MAX_STAGE_VOICE_USER_LIMIT : J.MAX_VOICE_USER_LIMIT;
    return (0, l.jsxs)(G.default, {
      direction: G.default.Direction.VERTICAL,
      className: en.marginBottom40,
      children: [(0, l.jsx)(h.FormTitle, {
        id: ef,
        children: el.default.Messages.FORM_LABEL_USER_LIMIT
      }), "" !== s && (0, l.jsx)(h.FormText, {
        id: eg,
        type: h.FormTextTypes.DESCRIPTION,
        style: {
          color: u.default.unsafe_rawColors.RED_400.css
        },
        className: en.marginBottom8,
        children: s
      }), (0, l.jsx)(h.Slider, {
        initialValue: Math.min(e.userLimit, a),
        onValueChange: this.handleUserLimitChange,
        onValueRender: this.onRenderUserLimit,
        onMarkerRender: e => 0 === Math.round(e) ? "∞" : e,
        markers: [0, a],
        minValue: 0,
        maxValue: a,
        disabled: !t,
        "aria-labelledby": ef,
        "aria-describedby": null != s && "" !== s ? eg : eS
      }), (0, l.jsx)(h.FormText, {
        id: eS,
        type: h.FormTextTypes.DESCRIPTION,
        children: (e.isGuildStageVoice() ? el.default.Messages.FORM_HELP_USER_LIMIT_STAGE : el.default.Messages.FORM_HELP_USER_LIMIT).format()
      })]
    })
  }
  renderRegionOverride(e) {
    var t;
    let {
      regions: s,
      canManageChannels: a,
      guild: n
    } = this.props;
    if (null == n || !this.showVoiceSettings() || e.isGuildStageVoice()) return null;
    let i = [];
    null != s && (i = s.filter(e => !e.deprecated && !e.hidden).map(e => ({
      label: e.name,
      value: e.id
    }))).unshift({
      label: el.default.Messages.AUTOMATIC_REGION,
      value: eN
    });
    let r = null !== (t = e.rtcRegion) && void 0 !== t ? t : eN;
    return (0, l.jsxs)(G.default, {
      direction: G.default.Direction.VERTICAL,
      children: [(0, l.jsx)(h.FormTitle, {
        children: el.default.Messages.FORM_LABEL_REGION_OVERRIDE
      }), (0, l.jsx)(h.SingleSelect, {
        options: i,
        value: r,
        onChange: this.handleRegionChange,
        isDisabled: !a
      }), (0, l.jsx)(h.FormText, {
        type: h.FormTextTypes.DESCRIPTION,
        children: el.default.Messages.FORM_HELP_REGION_OVERRIDE
      })]
    })
  }
  renderJuiceImage(e) {
    let t;
    let {
      theme: a
    } = this.props;
    return t = e.type === J.ChannelTypes.GUILD_CATEGORY ? (0, c.isThemeDark)(a) ? s("309095") : s("925442") : (0, c.isThemeDark)(a) ? s("316491") : s("301358"), (0, l.jsx)(G.default, {
      justify: G.default.Justify.CENTER,
      className: en.marginTop60,
      children: (0, l.jsx)("img", {
        alt: "",
        width: 280,
        height: 165,
        src: t
      })
    })
  }
  render() {
    let {
      channel: e,
      channelName: t,
      guild: s
    } = this.props;
    return null == e || null == t || null == s ? null : (0, l.jsxs)(h.FormSection, {
      className: "channel-settings-overview",
      tag: h.FormTitleTags.H1,
      title: el.default.Messages.OVERVIEW,
      children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, l.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      }) : null, this.renderVoiceBitrate(e, s), this.renderVideoQualityMode(e), this.renderUserLimit(e), this.renderRegionOverride(e), this.renderHomeFlags(e), this.renderJuiceImage(e)]
    })
  }
  handleSubmit() {
    return new Promise(e => {
      e({
        shouldClear: !1,
        shouldRefocus: !0
      })
    })
  }
  constructor(e) {
    var t, a;
    super(e), ei(this, "renderEmojiPicker", e => {
      let {
        closePopout: t
      } = e, {
        channel: s
      } = this.props;
      return (0, l.jsx)(x.default, {
        guildId: null == s ? void 0 : s.guild_id,
        closePopout: t,
        onSelectEmoji: (e, s) => {
          this.handleChangeDefaultReactionEmoji(e), s && t()
        },
        pickerIntention: $.EmojiIntention.COMMUNITY_CONTENT,
        channel: s
      })
    }), ei(this, "handleRequireTagChanged", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let s = (0, z.setFlag)(t.flags, q.ChannelFlags.REQUIRE_TAG, e);
      (0, m.updateChannel)({
        flags: s
      })
    }), ei(this, "handleChangeName", e => {
      let {
        channel: t
      } = this.props;
      null != t && (t.isThread() ? e = (0, j.default)(e, !1) : J.ChannelTypesSets.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, W.sanitizeGuildTextChannelName)(e)), (0, m.updateChannel)({
        name: e
      }))
    }), ei(this, "handleBlurName", () => {
      let {
        channel: e,
        channelName: t
      } = this.props;
      if ((null == e ? void 0 : e.isThread()) && null != t) {
        let e = (0, j.default)(t, !0);
        e !== t && (0, m.updateChannel)({
          name: e
        })
      }
    }), ei(this, "handleChangeTopic", e => {
      (0, m.updateChannel)({
        topic: M.default.translateInlineEmojiToSurrogates(e)
      })
    }), ei(this, "handleChangeRichTopic", (e, t, s) => {
      this.setState({
        textTopicValue: t,
        richTopicValue: s
      }), this.handleChangeTopic(t)
    }), ei(this, "handleChangeTemplate", e => {
      (0, m.updateChannel)({
        template: M.default.translateInlineEmojiToSurrogates(e)
      })
    }), ei(this, "handleChangeDefaultReactionEmoji", e => {
      let t = null == e ? null : (null == e ? void 0 : e.id) != null ? {
        emojiId: e.id,
        emojiName: void 0
      } : {
        emojiId: void 0,
        emojiName: e.optionallyDiverseSequence
      };
      (0, m.updateChannel)({
        defaultReactionEmoji: t
      })
    }), ei(this, "handleChangeDefaultForumLayout", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, m.updateChannel)({
        defaultForumLayout: e
      }), this.props.handleSetDefaultLayout(e)
    }), ei(this, "handleChangeDefaultSortOrder", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, m.updateChannel)({
        defaultSortOrder: e
      })
    }), ei(this, "handleChangeBitrate", e => {
      (0, m.updateChannel)({
        bitrate: 1e3 * Math.round(e / 1e3)
      })
    }), ei(this, "handleUserLimitChange", e => {
      (0, m.updateChannel)({
        userLimit: Math.round(e)
      })
    }), ei(this, "handleNSFWChange", e => {
      (0, m.updateChannel)({
        nsfw: e
      })
    }), ei(this, "handleGuildFeedRemovedChange", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      if (!e) {
        let e = (0, z.setFlag)(t.flags, q.ChannelFlags.GUILD_FEED_REMOVED, !1);
        (0, m.updateChannel)({
          flags: e
        });
        return
      }(0, h.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("49237"), s.e("99387"), s.e("15180")]).then(s.bind(s, "75777"));
        return s => (0, l.jsx)(e, {
          ...s,
          channelId: t.id,
          onSubmit: () => {
            let e = (0, z.setFlag)(t.flags, q.ChannelFlags.GUILD_FEED_REMOVED, !0);
            (0, m.updateChannel)({
              flags: e
            })
          }
        })
      })
    }), ei(this, "handleActiveChannelsRemovedChange", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let s = (0, z.setFlag)(t.flags, q.ChannelFlags.ACTIVE_CHANNELS_REMOVED, !e);
      (0, m.updateChannel)({
        flags: s
      })
    }), ei(this, "handleNewsChange", e => {
      (0, m.updateChannel)({
        type: e ? J.ChannelTypes.GUILD_ANNOUNCEMENT : J.ChannelTypes.GUILD_TEXT
      })
    }), ei(this, "handleChangeSlowmode", e => {
      (0, m.updateChannel)({
        rateLimitPerUser: e
      })
    }), ei(this, "handleChangeThreadMessageSlowmode", e => {
      (0, m.updateChannel)({
        defaultThreadRateLimitPerUser: e
      })
    }), ei(this, "handleChangeDefaultAutoArchiveDuration", e => {
      (0, m.updateChannel)({
        defaultAutoArchiveDuration: e
      })
    }), ei(this, "handleRegionChange", e => {
      (0, m.updateChannel)({
        rtcRegion: e === eN ? null : e
      })
    }), ei(this, "handleVideoQualityModeChange", e => {
      (0, m.updateChannel)({
        videoQualityMode: e
      })
    }), ei(this, "handleAutoArchiveDurationChanged", e => {
      (0, m.updateChannel)({
        autoArchiveDuration: e
      })
    }), ei(this, "handleInvitableChanged", e => {
      (0, m.updateChannel)({
        invitable: e
      })
    }), ei(this, "handleChannelSummariesToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let s = (0, z.setFlag)(t.flags, q.ChannelFlags.SUMMARIES_DISABLED, !e);
      (0, m.updateChannel)({
        flags: s
      })
    }), ei(this, "handleShowMediaOptionsToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let s = (0, z.setFlag)(t.flags, q.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
      (0, m.updateChannel)({
        flags: s
      })
    });
    let n = null !== (a = null === (t = this.props.channel) || void 0 === t ? void 0 : t.topic) && void 0 !== a ? a : "";
    this.state = {
      textTopicValue: n,
      richTopicValue: (0, p.toRichValue)(n),
      topicFocused: !1
    }
  }
}

function ex() {
  let {
    errors: e,
    channel: t,
    submitting: s,
    subsection: n
  } = (0, d.useStateFromStoresObject)([P.default], () => P.default.getProps()), i = (0, d.useStateFromStores)([H.default], () => {
    var e;
    return H.default.getRegions(null !== (e = null == t ? void 0 : t.getGuildId()) && void 0 !== e ? e : null)
  }), r = (0, d.useStateFromStores)([y.default], () => y.default.theme), o = (0, d.useStateFromStores)([w.default], () => w.default.getGuild(null == t ? void 0 : t.getGuildId())), u = (0, v.useCanManageThread)(t), c = (0, v.useIsThreadModerator)(t), {
    canManageChannels: h,
    canSendMessages: m
  } = (0, d.useStateFromStoresObject)([U.default], () => ({
    canManageChannels: U.default.can(J.Permissions.MANAGE_CHANNELS, t),
    canSendMessages: U.default.can(J.Permissions.SEND_MESSAGES, t)
  })), E = (0, N.default)(t), f = b.default.getId(), g = (0, I.useForumChannelStoreApi)(), _ = null == t ? void 0 : t.id, p = (0, T.useChannelSummariesExperiment)(t, !1, !0), C = S.default.useExperiment({
    guildId: null == t ? void 0 : t.guild_id,
    location: "ChannelSettingsOverview"
  }).enabled, x = a.useCallback(e => {
    null != _ && g.getState().setLayoutType(_, e)
  }, [_, g]);
  return (0, l.jsx)(eC, {
    errors: e,
    channel: t,
    channelName: E,
    submitting: s,
    regions: i,
    theme: r,
    guild: o,
    canManageChannels: (null == t ? void 0 : t.isThread()) ? u : h,
    canSendMessages: m,
    isThreadModerator: c,
    canManageThread: u,
    subsection: n,
    isForumPost: null != t && t.isForumPost(),
    isOwner: null == t ? void 0 : t.isOwner(f),
    handleSetDefaultLayout: x,
    showChannelSummariesSettings: p,
    showAdvancedSlowModeSetting: C
  })
}