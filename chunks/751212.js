"use strict";
s.r(t), s.d(t, {
  default: function() {
    return W
  }
}), s("47120"), s("653041");
var i, a, n = s("735250"),
  l = s("470079"),
  r = s("392711"),
  d = s.n(r),
  o = s("913527"),
  u = s.n(o),
  c = s("699581"),
  h = s("374470"),
  S = s("442837"),
  N = s("692547"),
  g = s("481060"),
  f = s("92114"),
  E = s("798140"),
  m = s("740504"),
  _ = s("933557"),
  T = s("471445"),
  x = s("423589"),
  I = s("74888"),
  O = s("444899"),
  C = s("777861"),
  p = s("131704"),
  M = s("592125"),
  v = s("324067"),
  L = s("650774"),
  A = s("430824"),
  j = s("699516"),
  R = s("9156"),
  b = s("594174"),
  G = s("285952"),
  U = s("353872"),
  F = s("823379"),
  P = s("63063"),
  D = s("621600"),
  H = s("981631"),
  w = s("969943"),
  y = s("689938"),
  k = s("154460");

function B(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}(a = i || (i = {})).MUTED = "muted", a.MESSAGE_NOTIFICATIONS = "message_notifications", a.SUPPRESS_EVERYONE = "suppress_everyone", a.SUPPRESS_ROLES = "suppress_roles", a.MOBILE_PUSH = "mobile_push", a.MUTE_EVENTS = "mute_scheduled_events", a.NOTIFY_HIGHLIGHTS = "notify_highlights";
class Y extends l.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      overrides: s,
      channelOverridesProp: i
    } = t;
    return e.channelOverrides !== i ? (s = new Set(s), (0, x.filterOverrides)(e.channelOverrides).forEach(e => s.add(e)), {
      overrides: s,
      channelOverridesProp: e.channelOverrides
    }) : null
  }
  componentDidUpdate(e, t) {
    let {
      lastSelected: s
    } = this.state, i = null != s ? this._channelRefs[s] : null;
    if (null != this._scroller && null != i && s !== t.lastSelected) {
      let e = (0, c.findDOMNode)(i);
      if (null != this._scroller && (0, h.isElement)(e, HTMLElement)) {
        var a;
        null === (a = this._scroller) || void 0 === a || a.scrollIntoViewNode({
          node: e,
          animate: !0,
          padding: 20,
          callback: () => this.setState({
            lastSelected: null
          })
        }), i.highlight()
      }
    }
    if (this.props.channelOverrides !== e.channelOverrides) {
      let {
        overrides: e
      } = this.state;
      e = new Set(e), (0, x.filterOverrides)(this.props.channelOverrides).forEach(t => e.add(t)), this.setState({
        overrides: e
      })
    }
  }
  handleCheckboxChange(e, t, s) {
    f.default.updateGuildNotificationSettings(this.props.guildId, {
      [e]: t
    }, s)
  }
  handleRadioChange(e, t, s) {
    let {
      value: i
    } = t;
    f.default.updateGuildNotificationSettings(this.props.guildId, {
      [e]: i
    }, s)
  }
  renderHeader() {
    let {
      guild: e
    } = this.props;
    return null == e ? null : (0, n.jsxs)(g.ModalHeader, {
      children: [(0, n.jsxs)(G.default.Child, {
        children: [(0, n.jsx)(g.Heading, {
          variant: "heading-lg/semibold",
          children: y.default.Messages.NOTIFICATION_SETTINGS
        }), (0, n.jsx)(g.Text, {
          variant: "text-md/normal",
          className: k.guildName,
          children: e.name
        })]
      }), (0, n.jsx)(G.default.Child, {
        grow: 0,
        children: (0, n.jsx)(g.ModalCloseButton, {
          onClick: this.props.onClose
        })
      })]
    })
  }
  renderFooter() {
    return (0, n.jsx)(g.ModalFooter, {
      children: (0, n.jsx)(g.Button, {
        onClick: this.props.onClose,
        children: y.default.Messages.DONE
      })
    })
  }
  renderMute() {
    var e;
    let {
      muted: t,
      muteConfig: s,
      guild: i
    } = this.props, a = null !== (e = null == s ? void 0 : s.selected_time_window) && void 0 !== e ? e : w.MuteUntilSeconds.ALWAYS;
    return null == i ? null : (0, n.jsxs)(g.FormItem, {
      className: k.largeSpacing,
      children: [(0, n.jsx)(g.FormSwitch, {
        hideBorder: !0,
        value: t,
        onChange: e => this.handleCheckboxChange("muted", e, D.NotificationLabel.muted(e)),
        note: y.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
        children: y.default.Messages.FORM_LABEL_MUTE_SERVER.format({
          name: i.name
        })
      }), t ? (0, n.jsxs)(G.default, {
        className: k.spacing,
        align: G.default.Align.CENTER,
        children: [(0, n.jsxs)(G.default, {
          direction: G.default.Direction.VERTICAL,
          className: k.__invalid_muteUntilTextWrapper,
          children: [(0, n.jsx)(g.FormTitle, {
            tag: "h3",
            className: k.muteUntilTitle,
            children: y.default.Messages.MUTE_UNTIL
          }), (0, n.jsx)(C.default, {
            className: k.muteUntilText,
            muteConfig: s
          })]
        }), (0, n.jsx)(g.SingleSelect, {
          className: k.muteTimeSelector,
          options: (0, x.getMuteTimeOptions)(),
          value: a,
          onChange: this.handleSelectMuteTime
        })]
      }) : null, (0, n.jsx)(g.FormDivider, {})]
    })
  }
  renderServerSettings() {
    var e;
    let {
      messageNotifications: t,
      muted: s,
      memberCount: i
    } = this.props;
    return (0, n.jsxs)("div", {
      className: k.spacing,
      children: [(0, n.jsx)(g.FormItem, {
        title: y.default.Messages.FORM_LABEL_SERVER_NOTIFICATION_SETTINGS,
        className: k.largeSpacing,
        children: (0, n.jsx)(g.RadioGroup, {
          disabled: s,
          value: t,
          onChange: e => this.handleRadioChange("message_notifications", e, D.NotificationLabel.notifications(e.value)),
          options: (e = i, [{
            name: y.default.Messages.FORM_LABEL_ALL_MESSAGES,
            value: H.UserNotificationSettings.ALL_MESSAGES,
            desc: null != e && e >= H.MAX_MEMBERS_NOTIFY_ALL_MESSAGES ? y.default.Messages.LARGE_GUILD_NOTIFY_ALL_MESSAGES_DESCRIPTION : null
          }, {
            name: y.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
            value: H.UserNotificationSettings.ONLY_MENTIONS
          }, {
            name: y.default.Messages.FORM_LABEL_NOTHING,
            value: H.UserNotificationSettings.NO_MESSAGES
          }])
        })
      }), (0, n.jsx)(g.FormDivider, {})]
    })
  }
  renderNotificationOptions() {
    let {
      suppressEveryone: e,
      suppressRoles: t,
      mobilePush: s,
      muted: i,
      muteEvents: a,
      notifyHighlights: l,
      guildId: r
    } = this.props;
    return (0, n.jsxs)(g.FormItem, {
      className: k.largeSpacing,
      children: [(0, n.jsx)(g.FormSwitch, {
        onChange: e => this.handleCheckboxChange("suppress_everyone", e, D.NotificationLabel.suppressEveryone(e)),
        value: e,
        children: y.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format()
      }), (0, n.jsx)(g.FormSwitch, {
        onChange: e => this.handleCheckboxChange("suppress_roles", e, D.NotificationLabel.suppressRoles(e)),
        value: t,
        children: y.default.Messages.FORM_LABEL_SUPPRESS_ROLES
      }), (0, n.jsx)(g.FormSwitch, {
        onChange: e => {
          f.default.updateGuildNotificationSettings(r, {
            notify_highlights: e ? H.HighlightSettings.DISABLED : H.HighlightSettings.ENABLED
          }, D.NotificationLabel.highlights(!e))
        },
        value: i || l === H.HighlightSettings.DISABLED,
        disabled: i,
        note: (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(g.Text, {
            variant: "text-sm/normal",
            children: y.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT
          }), (0, n.jsx)("div", {
            className: k.highlightsLink,
            children: (0, n.jsx)(g.Anchor, {
              href: P.default.getArticleURL(H.HelpdeskArticles.HIGHLIGHTS),
              children: y.default.Messages.HIGHLIGHTS_LEARN_MORE
            })
          })]
        }),
        children: (0, n.jsx)(n.Fragment, {
          children: y.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS
        })
      }), (0, n.jsx)(g.FormSwitch, {
        value: a,
        onChange: e => this.handleCheckboxChange("mute_scheduled_events", e, D.NotificationLabel.mutedEvents(e)),
        children: y.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS
      }), (0, n.jsx)(g.FormSwitch, {
        value: !i && s,
        disabled: i,
        onChange: e => this.handleCheckboxChange("mobile_push", e, D.NotificationLabel.mobilePush(e)),
        children: y.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS
      })]
    })
  }
  renderOverrideSelect() {
    let {
      channels: e,
      categories: t
    } = this.props, s = d()(e).filter(e => {
      let {
        channel: s
      } = e;
      return s.type !== H.ChannelTypes.GUILD_CATEGORY || null != t[s.id] && t[s.id].length > 0
    }).map(e => {
      let {
        channel: t
      } = e;
      return {
        value: t.id,
        label: (0, _.computeChannelName)(t, b.default, j.default)
      }
    }).value();
    return (0, n.jsxs)(g.FormItem, {
      title: y.default.Messages.NOTIFICATION_OVERRIDES,
      className: k.largeSpacing,
      children: [(0, n.jsx)(g.FormText, {
        type: g.FormText.Types.DESCRIPTION,
        className: k.smallSpacing,
        children: y.default.Messages.ADD_CHANNEL_TO_OVERRIDE
      }), (0, n.jsx)(g.SearchableSelect, {
        value: H.EMPTY_STRING_SNOWFLAKE_ID,
        placeholder: y.default.Messages.SELECT_CHANNEL_OR_CATEGORY,
        renderOptionLabel: this.renderOptionLabel,
        options: s,
        onChange: this.handleSelectChange
      })]
    })
  }
  renderChannelNotifications() {
    let {
      channelOverrides: e,
      muted: t,
      channels: s,
      messageNotifications: i,
      categories: a,
      checkboxColor: l
    } = this.props, {
      overrides: r
    } = this.state, d = s.map(s => {
      let {
        channel: d
      } = s;
      if (!r.has(d.id) || null != a[d.id] && 0 === a[d.id].length) return null;
      let o = e[d.id];
      return (0, n.jsx)(O.ChannelNotificationSettings, {
        ref: e => {
          this._channelRefs[d.id] = e
        },
        channel: d,
        guildMuted: t,
        muted: null != o && (0, E.computeIsMuted)(o),
        messageNotifications: null != o ? o.message_notifications : null,
        guildMessageNotifications: i,
        onDelete: this.handleDeleteOverride,
        checkboxColor: l
      }, d.id)
    }).filter(F.isNotNullish);
    return (0 === r.size || 0 === d.length) && d.push((0, n.jsx)("div", {
      className: k.overridePlaceholder,
      children: (0, n.jsx)(g.Text, {
        className: k.overrideHeader,
        variant: "text-sm/semibold",
        children: y.default.Messages.ADD_CHANNEL_TO_OVERRIDE
      })
    }, "placeholder")), (0, n.jsxs)("div", {
      className: k.overrideList,
      children: [(0, n.jsxs)(G.default, {
        children: [(0, n.jsx)(g.Heading, {
          variant: "eyebrow",
          className: k.headerName,
          children: y.default.Messages.CHANNEL_OR_CATEGORY
        }), (0, n.jsx)(g.Heading, {
          variant: "eyebrow",
          className: k.headerOption,
          children: y.default.Messages.FORM_LABEL_ALL
        }), (0, n.jsx)(g.Heading, {
          variant: "eyebrow",
          className: k.headerOption,
          children: y.default.Messages.FORM_LABEL_MENTIONS
        }), (0, n.jsx)(g.Heading, {
          variant: "eyebrow",
          className: k.headerOption,
          children: y.default.Messages.FORM_LABEL_NOTHING
        }), (0, n.jsx)(g.Heading, {
          variant: "eyebrow",
          className: k.headerOption,
          children: (0, n.jsx)(g.Tooltip, {
            text: y.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
            position: "bottom",
            children: e => (0, n.jsx)("span", {
              ...e,
              children: y.default.Messages.SOUND_MUTE
            })
          })
        })]
      }), d]
    })
  }
  render() {
    return (0, n.jsxs)(g.ModalRoot, {
      "aria-label": y.default.Messages.NOTIFICATION_SETTINGS,
      size: g.ModalSize.MEDIUM,
      transitionState: this.props.transitionState,
      children: [this.renderHeader(), (0, n.jsxs)(g.ModalContent, {
        scrollerRef: this.setScrollerRef,
        children: [this.renderMute(), this.renderServerSettings(), this.renderNotificationOptions(), this.renderOverrideSelect(), this.renderChannelNotifications()]
      }), this.renderFooter()]
    })
  }
  constructor(...e) {
    super(...e), B(this, "_scroller", null), B(this, "_channelRefs", {}), B(this, "state", {
      overrides: new Set((0, x.filterOverrides)(this.props.channelOverrides)),
      channelOverridesProp: this.props.channelOverrides,
      lastSelected: null
    }), B(this, "setScrollerRef", e => {
      this._scroller = e
    }), B(this, "handleSelectChange", e => {
      if (null == e) return;
      let {
        overrides: t
      } = this.state;
      (t = new Set(t)).add(e), this.setState({
        overrides: t,
        lastSelected: e
      })
    }), B(this, "handleSelectMuteTime", e => {
      let t = e > 0 ? u()().add(e, "second").toISOString() : null;
      f.default.updateGuildNotificationSettings(this.props.guildId, {
        muted: !0,
        mute_config: {
          selected_time_window: e,
          end_time: t
        }
      }, D.NotificationLabels.Muted)
    }), B(this, "handleDeleteOverride", e => {
      let {
        overrides: t
      } = this.state;
      (t = new Set(t)).delete(e), this.setState({
        overrides: t
      })
    }), B(this, "renderOptionLabel", e => {
      let t = M.default.getChannel(e.value);
      if (null == t) return e.label;
      let s = M.default.getChannel(t.parent_id),
        i = null != s ? s.name : null;
      return (0, n.jsx)(U.default, {
        icon: (0, T.getChannelIconComponent)(t),
        title: e.label,
        subtitle: i
      })
    })
  }
}

function V(e) {
  let {
    guildId: t,
    ...s
  } = e, i = (0, S.useStateFromStoresObject)([v.default, A.default, L.default, R.default], () => {
    let e = v.default.getCategories(t);
    return {
      guildId: t,
      categories: e,
      guild: A.default.getGuild(t),
      memberCount: L.default.getMemberCount(t),
      suppressEveryone: R.default.isSuppressEveryoneEnabled(t),
      suppressRoles: R.default.isSuppressRolesEnabled(t),
      muteEvents: R.default.isMuteScheduledEventsEnabled(t),
      mobilePush: R.default.isMobilePushEnabled(t),
      muted: R.default.isMuted(t),
      muteConfig: R.default.getMuteConfig(t),
      messageNotifications: R.default.getMessageNotifications(t),
      channelOverrides: R.default.getChannelOverrides(t),
      channels: (0, m.default)(e._categories, e, e => {
        let {
          channel: {
            type: t
          }
        } = e;
        return (0, p.isGuildSelectableChannelType)(t) || t === H.ChannelTypes.GUILD_CATEGORY
      }),
      notifyHighlights: R.default.getNotifyHighlights(t)
    }
  }), a = (0, g.useToken)(N.default.unsafe_rawColors.GREEN_360).hex();
  return (0, n.jsx)(Y, {
    ...i,
    ...s,
    checkboxColor: a
  })
}

function W(e) {
  let t = (0, x.useShouldUseNewNotificationSystem)("NotificationSettingsModal") ? I.default : V;
  return (0, n.jsx)(t, {
    ...e
  })
}