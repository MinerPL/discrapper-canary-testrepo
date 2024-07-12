t.r(s), t.d(s, {
  default: function() {
return z;
  }
}), t(47120), t(653041);
var n, i, l = t(735250),
  a = t(470079),
  r = t(392711),
  o = t.n(r),
  d = t(913527),
  c = t.n(d),
  u = t(699581),
  h = t(374470),
  N = t(442837),
  S = t(692547),
  E = t(481060),
  m = t(92114),
  g = t(798140),
  _ = t(740504),
  T = t(933557),
  x = t(471445),
  I = t(423589),
  O = t(74888),
  C = t(444899),
  M = t(11352),
  p = t(610617),
  v = t(777861),
  L = t(131704),
  j = t(592125),
  Z = t(324067),
  A = t(650774),
  R = t(430824),
  f = t(699516),
  b = t(9156),
  U = t(594174),
  G = t(285952),
  P = t(823379),
  F = t(63063),
  D = t(621600),
  k = t(981631),
  B = t(969943),
  w = t(689938),
  H = t(520177);

function y(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[s] = t, e;
}
(i = n || (n = {})).MUTED = 'muted', i.MESSAGE_NOTIFICATIONS = 'message_notifications', i.SUPPRESS_EVERYONE = 'suppress_everyone', i.SUPPRESS_ROLES = 'suppress_roles', i.MOBILE_PUSH = 'mobile_push', i.MUTE_EVENTS = 'mute_scheduled_events', i.NOTIFY_HIGHLIGHTS = 'notify_highlights';
class Y extends a.PureComponent {
  static getDerivedStateFromProps(e, s) {
let {
  overrides: t,
  channelOverridesProp: n
} = s;
return e.channelOverrides !== n ? (t = new Set(t), (0, I.OD)(e.channelOverrides).forEach(e => t.add(e)), {
  overrides: t,
  channelOverridesProp: e.channelOverrides
}) : null;
  }
  componentDidUpdate(e, s) {
let {
  lastSelected: t
} = this.state, n = null != t ? this._channelRefs[t] : null;
if (null != this._scroller && null != n && t !== s.lastSelected) {
  let e = (0, u.findDOMNode)(n);
  if (null != this._scroller && (0, h.k)(e, HTMLElement)) {
    var i;
    null === (i = this._scroller) || void 0 === i || i.scrollIntoViewNode({
      node: e,
      animate: !0,
      padding: 20,
      callback: () => this.setState({
        lastSelected: null
      })
    }), n.highlight();
  }
}
if (this.props.channelOverrides !== e.channelOverrides) {
  let {
    overrides: e
  } = this.state;
  e = new Set(e), (0, I.OD)(this.props.channelOverrides).forEach(s => e.add(s)), this.setState({
    overrides: e
  });
}
  }
  handleCheckboxChange(e, s, t) {
m.Z.updateGuildNotificationSettings(this.props.guildId, {
  [e]: s
}, t);
  }
  handleRadioChange(e, s, t) {
let {
  value: n
} = s;
m.Z.updateGuildNotificationSettings(this.props.guildId, {
  [e]: n
}, t);
  }
  renderHeader() {
let {
  guild: e
} = this.props;
return null == e ? null : (0, l.jsxs)(E.ModalHeader, {
  children: [
    (0, l.jsxs)(G.Z.Child, {
      children: [
        (0, l.jsx)(E.Heading, {
          variant: 'heading-lg/semibold',
          children: w.Z.Messages.NOTIFICATION_SETTINGS
        }),
        (0, l.jsx)(E.Text, {
          variant: 'text-md/normal',
          className: H.guildName,
          children: e.name
        })
      ]
    }),
    (0, l.jsx)(G.Z.Child, {
      grow: 0,
      children: (0, l.jsx)(E.ModalCloseButton, {
        onClick: this.props.onClose
      })
    })
  ]
});
  }
  renderFooter() {
return (0, l.jsx)(E.ModalFooter, {
  children: (0, l.jsx)(E.Button, {
    onClick: this.props.onClose,
    children: w.Z.Messages.DONE
  })
});
  }
  renderMute() {
var e;
let {
  muted: s,
  muteConfig: t,
  guild: n
} = this.props, i = null !== (e = null == t ? void 0 : t.selected_time_window) && void 0 !== e ? e : B.Oe.ALWAYS;
return null == n ? null : (0, l.jsxs)(E.FormItem, {
  className: H.largeSpacing,
  children: [
    (0, l.jsx)(E.FormSwitch, {
      hideBorder: !0,
      value: s,
      onChange: e => this.handleCheckboxChange('muted', e, D.UE.muted(e)),
      note: w.Z.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
      children: w.Z.Messages.FORM_LABEL_MUTE_SERVER.format({
        name: n.name
      })
    }),
    s ? (0, l.jsxs)(G.Z, {
      className: H.spacing,
      align: G.Z.Align.CENTER,
      children: [
        (0, l.jsxs)(G.Z, {
          direction: G.Z.Direction.VERTICAL,
          className: H.__invalid_muteUntilTextWrapper,
          children: [
            (0, l.jsx)(E.FormTitle, {
              tag: 'h3',
              className: H.muteUntilTitle,
              children: w.Z.Messages.MUTE_UNTIL
            }),
            (0, l.jsx)(v.Z, {
              className: H.muteUntilText,
              muteConfig: t
            })
          ]
        }),
        (0, l.jsx)(E.SingleSelect, {
          className: H.muteTimeSelector,
          options: (0, I.W9)(),
          value: i,
          onChange: this.handleSelectMuteTime
        })
      ]
    }) : null,
    (0, l.jsx)(E.FormDivider, {})
  ]
});
  }
  renderServerSettings() {
var e;
let {
  messageNotifications: s,
  muted: t,
  memberCount: n
} = this.props;
return (0, l.jsxs)('div', {
  className: H.spacing,
  children: [
    (0, l.jsx)(E.FormItem, {
      title: w.Z.Messages.FORM_LABEL_SERVER_NOTIFICATION_SETTINGS,
      className: H.largeSpacing,
      children: (0, l.jsx)(E.RadioGroup, {
        disabled: t,
        value: s,
        onChange: e => this.handleRadioChange('message_notifications', e, D.UE.notifications(e.value)),
        options: (e = n, [{
            name: w.Z.Messages.FORM_LABEL_ALL_MESSAGES,
            value: k.bL.ALL_MESSAGES,
            desc: null != e && e >= k.qWG ? w.Z.Messages.LARGE_GUILD_NOTIFY_ALL_MESSAGES_DESCRIPTION : null
          },
          {
            name: w.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
            value: k.bL.ONLY_MENTIONS
          },
          {
            name: w.Z.Messages.FORM_LABEL_NOTHING,
            value: k.bL.NO_MESSAGES
          }
        ])
      })
    }),
    (0, l.jsx)(E.FormDivider, {})
  ]
});
  }
  renderNotificationOptions() {
let {
  suppressEveryone: e,
  suppressRoles: s,
  mobilePush: t,
  muted: n,
  muteEvents: i,
  notifyHighlights: a,
  guildId: r
} = this.props;
return (0, l.jsxs)(E.FormItem, {
  className: H.largeSpacing,
  children: [
    (0, l.jsx)(E.FormSwitch, {
      onChange: e => this.handleCheckboxChange('suppress_everyone', e, D.UE.suppressEveryone(e)),
      value: e,
      children: w.Z.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format()
    }),
    (0, l.jsx)(E.FormSwitch, {
      onChange: e => this.handleCheckboxChange('suppress_roles', e, D.UE.suppressRoles(e)),
      value: s,
      children: w.Z.Messages.FORM_LABEL_SUPPRESS_ROLES
    }),
    (0, l.jsx)(E.FormSwitch, {
      onChange: e => {
        m.Z.updateGuildNotificationSettings(r, {
          notify_highlights: e ? k.gLR.DISABLED : k.gLR.ENABLED
        }, D.UE.highlights(!e));
      },
      value: n || a === k.gLR.DISABLED,
      disabled: n,
      note: (0, l.jsxs)(l.Fragment, {
        children: [
          (0, l.jsx)(E.Text, {
            variant: 'text-sm/normal',
            children: w.Z.Messages.HIGHLIGHTS_NOTE_SUBTEXT
          }),
          (0, l.jsx)('div', {
            className: H.highlightsLink,
            children: (0, l.jsx)(E.Anchor, {
              href: F.Z.getArticleURL(k.BhN.HIGHLIGHTS),
              children: w.Z.Messages.HIGHLIGHTS_LEARN_MORE
            })
          })
        ]
      }),
      children: (0, l.jsx)(l.Fragment, {
        children: w.Z.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS
      })
    }),
    (0, l.jsx)(E.FormSwitch, {
      value: i,
      onChange: e => this.handleCheckboxChange('mute_scheduled_events', e, D.UE.mutedEvents(e)),
      children: w.Z.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS
    }),
    (0, l.jsx)(E.FormSwitch, {
      value: !n && t,
      disabled: n,
      onChange: e => this.handleCheckboxChange('mobile_push', e, D.UE.mobilePush(e)),
      children: w.Z.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS
    })
  ]
});
  }
  renderCustomNotificationSoundOptions() {
let {
  shouldShowCustomNotificationSounds: e,
  guildId: s,
  onClose: t
} = this.props;
if (!!e)
  return (0, l.jsxs)(l.Fragment, {
    children: [
      (0, l.jsx)(p.Z, {
        guildId: s,
        onClose: t
      }),
      (0, l.jsx)(E.FormDivider, {
        className: H.customNotificationSoundsDivider
      })
    ]
  });
  }
  renderOverrideSelect() {
let {
  channels: e,
  categories: s
} = this.props, t = o()(e).filter(e => {
  let {
    channel: t
  } = e;
  return t.type !== k.d4z.GUILD_CATEGORY || null != s[t.id] && s[t.id].length > 0;
}).map(e => {
  let {
    channel: s
  } = e;
  return {
    value: s.id,
    label: (0, T.F6)(s, U.default, f.Z)
  };
}).value();
return (0, l.jsxs)(E.FormItem, {
  title: w.Z.Messages.NOTIFICATION_OVERRIDES,
  className: H.largeSpacing,
  children: [
    (0, l.jsx)(E.FormText, {
      type: E.FormText.Types.DESCRIPTION,
      className: H.smallSpacing,
      children: w.Z.Messages.ADD_CHANNEL_TO_OVERRIDE
    }),
    (0, l.jsx)(E.SearchableSelect, {
      value: k.lds,
      placeholder: w.Z.Messages.SELECT_CHANNEL_OR_CATEGORY,
      renderOptionLabel: this.renderOptionLabel,
      options: t,
      onChange: this.handleSelectChange
    })
  ]
});
  }
  renderChannelNotifications() {
let {
  channelOverrides: e,
  muted: s,
  channels: t,
  messageNotifications: n,
  categories: i,
  checkboxColor: a
} = this.props, {
  overrides: r
} = this.state, o = t.map(t => {
  let {
    channel: o
  } = t;
  if (!r.has(o.id) || null != i[o.id] && 0 === i[o.id].length)
    return null;
  let d = e[o.id];
  return (0, l.jsx)(C.f, {
    ref: e => {
      this._channelRefs[o.id] = e;
    },
    channel: o,
    guildMuted: s,
    muted: null != d && (0, g.m$)(d),
    messageNotifications: null != d ? d.message_notifications : null,
    guildMessageNotifications: n,
    onDelete: this.handleDeleteOverride,
    checkboxColor: a
  }, o.id);
}).filter(P.lm);
return (0 === r.size || 0 === o.length) && o.push((0, l.jsx)('div', {
  className: H.overridePlaceholder,
  children: (0, l.jsx)(E.Text, {
    className: H.overrideHeader,
    variant: 'text-sm/semibold',
    children: w.Z.Messages.ADD_CHANNEL_TO_OVERRIDE
  })
}, 'placeholder')), (0, l.jsxs)('div', {
  className: H.overrideList,
  children: [
    (0, l.jsxs)(G.Z, {
      children: [
        (0, l.jsx)(E.Heading, {
          variant: 'eyebrow',
          className: H.headerName,
          children: w.Z.Messages.CHANNEL_OR_CATEGORY
        }),
        (0, l.jsx)(E.Heading, {
          variant: 'eyebrow',
          className: H.headerOption,
          children: w.Z.Messages.FORM_LABEL_ALL
        }),
        (0, l.jsx)(E.Heading, {
          variant: 'eyebrow',
          className: H.headerOption,
          children: w.Z.Messages.FORM_LABEL_MENTIONS
        }),
        (0, l.jsx)(E.Heading, {
          variant: 'eyebrow',
          className: H.headerOption,
          children: w.Z.Messages.FORM_LABEL_NOTHING
        }),
        (0, l.jsx)(E.Heading, {
          variant: 'eyebrow',
          className: H.headerOption,
          children: (0, l.jsx)(E.Tooltip, {
            text: w.Z.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
            position: 'bottom',
            children: e => (0, l.jsx)('span', {
              ...e,
              children: w.Z.Messages.SOUND_MUTE
            })
          })
        })
      ]
    }),
    o
  ]
});
  }
  render() {
return (0, l.jsxs)(E.ModalRoot, {
  'aria-label': w.Z.Messages.NOTIFICATION_SETTINGS,
  size: E.ModalSize.MEDIUM,
  transitionState: this.props.transitionState,
  children: [
    this.renderHeader(),
    (0, l.jsxs)(E.ModalContent, {
      scrollerRef: this.setScrollerRef,
      children: [
        this.renderMute(),
        this.renderServerSettings(),
        this.renderCustomNotificationSoundOptions(),
        this.renderNotificationOptions(),
        this.renderOverrideSelect(),
        this.renderChannelNotifications()
      ]
    }),
    this.renderFooter()
  ]
});
  }
  constructor(...e) {
super(...e), y(this, '_scroller', null), y(this, '_channelRefs', {}), y(this, 'state', {
  overrides: new Set((0, I.OD)(this.props.channelOverrides)),
  channelOverridesProp: this.props.channelOverrides,
  lastSelected: null
}), y(this, 'setScrollerRef', e => {
  this._scroller = e;
}), y(this, 'handleSelectChange', e => {
  if (null == e)
    return;
  let {
    overrides: s
  } = this.state;
  (s = new Set(s)).add(e), this.setState({
    overrides: s,
    lastSelected: e
  });
}), y(this, 'handleSelectMuteTime', e => {
  let s = e > 0 ? c()().add(e, 'second').toISOString() : null;
  m.Z.updateGuildNotificationSettings(this.props.guildId, {
    muted: !0,
    mute_config: {
      selected_time_window: e,
      end_time: s
    }
  }, D.ZB.Muted);
}), y(this, 'handleDeleteOverride', e => {
  let {
    overrides: s
  } = this.state;
  (s = new Set(s)).delete(e), this.setState({
    overrides: s
  });
}), y(this, 'renderOptionLabel', e => {
  let s = j.Z.getChannel(e.value);
  if (null == s)
    return e.label;
  let t = j.Z.getChannel(s.parent_id),
    n = null != t ? t.name : null;
  return (0, l.jsx)(E.IconSelectOption, {
    icon: (0, x.KS)(s),
    title: e.label,
    subtitle: n
  });
});
  }
}

function V(e) {
  let {
guildId: s,
...t
  } = e, n = (0, N.cj)([
Z.Z,
R.Z,
A.Z,
b.ZP
  ], () => {
let e = Z.Z.getCategories(s);
return {
  guildId: s,
  categories: e,
  guild: R.Z.getGuild(s),
  memberCount: A.Z.getMemberCount(s),
  suppressEveryone: b.ZP.isSuppressEveryoneEnabled(s),
  suppressRoles: b.ZP.isSuppressRolesEnabled(s),
  muteEvents: b.ZP.isMuteScheduledEventsEnabled(s),
  mobilePush: b.ZP.isMobilePushEnabled(s),
  muted: b.ZP.isMuted(s),
  muteConfig: b.ZP.getMuteConfig(s),
  messageNotifications: b.ZP.getMessageNotifications(s),
  channelOverrides: b.ZP.getChannelOverrides(s),
  channels: (0, _.Z)(e._categories, e, e => {
    let {
      channel: {
        type: s
      }
    } = e;
    return (0, L.r8)(s) || s === k.d4z.GUILD_CATEGORY;
  }),
  notifyHighlights: b.ZP.getNotifyHighlights(s)
};
  }), i = M.Y.useExperiment({
location: 'connected_notification_settings'
  }, {
autoTrackExposure: !0
  }).enabled, a = (0, E.useToken)(S.Z.unsafe_rawColors.GREEN_360).hex();
  return (0, l.jsx)(Y, {
...n,
...t,
shouldShowCustomNotificationSounds: i,
checkboxColor: a
  });
}

function z(e) {
  let s = (0, I.Mn)('NotificationSettingsModal') ? O.Z : V;
  return (0, l.jsx)(s, {
...e
  });
}