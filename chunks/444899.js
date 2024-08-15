t.d(s, {
  f: function() {
return x;
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(481060),
  a = t(92114),
  r = t(225433),
  o = t(933557),
  d = t(471445),
  c = t(600164),
  u = t(592125),
  h = t(324067),
  N = t(699516),
  S = t(594174),
  E = t(621600),
  g = t(981631),
  m = t(689938),
  _ = t(270904);

function T(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[s] = t, e;
}
class x extends i.PureComponent {
  highlight() {
this.setState({
  highlight: !0
}, () => {
  null != this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(this.unhighlight, 1000);
});
  }
  componentWillUnmount() {
null != this._timeout && clearTimeout(this._timeout);
  }
  setMessageNotification(e, s, t) {
let {
  channel: n
} = this.props, i = n.getGuildId();
null != i && a.Z.updateChannelOverrideSettings(i, n.id, {
  message_notifications: e,
  muted: null != s && s
}, t);
  }
  handleRadioChange(e) {
this.setMessageNotification(e, void 0, E.UE.notifications(e));
  }
  renderMessageNotificationsRadioOption(e) {
let {
  messageNotifications: s,
  guildMuted: t,
  muted: i,
  guildMessageNotifications: a,
  checkboxColor: r
} = this.props, o = s === e;
(null == s || s === g.bL.NULL) && e === a && (o = !0);
let d = l.Checkbox.Types.INVERTED;
return (i || s === g.bL.NULL || null == s) && (d = l.Checkbox.Types.GHOST), (0, n.jsx)(l.Checkbox, {
  value: !t && o,
  disabled: t,
  shape: l.Checkbox.Shapes.ROUND,
  color: r,
  type: d,
  onChange: this.handleRadioChange.bind(this, e)
});
  }
  renderName() {
let e, s;
let {
  channel: t
} = this.props;
null != t.parent_id && (e = u.Z.getChannel(t.parent_id));
let i = (0, d.KS)(t);
if (t.type === g.d4z.GUILD_CATEGORY && null != t.guild_id && '' !== t.guild_id) {
  let e = h.Z.getCategories(t.guild_id);
  s = m.Z.Messages.NUM_CHANNELS.format({
    num: null != e[t.id] ? e[t.id].length : 0
  });
} else
  s = null != e ? m.Z.Messages.IN_CATEGORY.format({
    categoryName: (0, o.F6)(e, S.default, N.Z)
  }) : m.Z.Messages.NO_CATEGORY;
return (0, n.jsxs)(c.Z, {
  grow: 1,
  className: _.nameContainer,
  children: [
    null != i ? (0, n.jsx)(i, {
      className: _.icon
    }) : null,
    (0, n.jsxs)('div', {
      className: _.channelNameContainer,
      children: [
        (0, n.jsx)(l.Text, {
          variant: 'text-md/semibold',
          className: _.channelName,
          children: (0, o.F6)(t, S.default, N.Z)
        }),
        (0, n.jsx)(l.Text, {
          variant: 'text-xs/normal',
          className: _.channelNameByline,
          children: s
        })
      ]
    })
  ]
});
  }
  renderOptions() {
let {
  muted: e,
  guildMuted: s
} = this.props;
return (0, n.jsxs)(c.Z, {
  grow: 0,
  shrink: 0,
  className: _.checkboxGroup,
  justify: c.Z.Justify.AROUND,
  align: c.Z.Align.CENTER,
  children: [
    (0, n.jsx)(c.Z.Child, {
      wrap: !0,
      grow: 0,
      shrink: 0,
      className: s ? _.checkboxContainerMuted : _.checkboxContainer,
      children: this.renderMessageNotificationsRadioOption(g.bL.ALL_MESSAGES)
    }),
    (0, n.jsx)(c.Z.Child, {
      wrap: !0,
      grow: 0,
      shrink: 0,
      className: s ? _.checkboxContainerMuted : _.checkboxContainer,
      children: this.renderMessageNotificationsRadioOption(g.bL.ONLY_MENTIONS)
    }),
    (0, n.jsx)(c.Z.Child, {
      wrap: !0,
      grow: 0,
      shrink: 0,
      className: s ? _.checkboxContainerMuted : _.checkboxContainer,
      children: this.renderMessageNotificationsRadioOption(g.bL.NO_MESSAGES)
    }),
    (0, n.jsx)(c.Z.Child, {
      wrap: !0,
      grow: 0,
      shrink: 0,
      className: _.checkboxMute,
      children: (0, n.jsx)(l.Checkbox, {
        value: e,
        shape: l.Checkbox.Shapes.BOX,
        type: l.Checkbox.Types.INVERTED,
        onChange: this.handleMute
      })
    })
  ]
});
  }
  render() {
let {
  highlight: e
} = this.state;
return (0, n.jsxs)(l.Card, {
  outline: !0,
  editable: !0,
  className: e ? _.overrideHighlight : _.override,
  children: [
    this.renderName(),
    this.renderOptions(),
    (0, n.jsx)(r.Z, {
      className: _.removeOverride,
      onClick: this.handleDelete
    })
  ]
});
  }
  constructor(...e) {
super(...e), T(this, '_timeout', void 0), T(this, 'state', {
  highlight: !1
}), T(this, 'unhighlight', () => {
  this.setState({
    highlight: !1
  });
}), T(this, 'handleMute', (e, s) => {
  let {
    messageNotifications: t
  } = this.props;
  this.setMessageNotification(null != t ? t : g.bL.NULL, s, E.UE.muted(s));
}), T(this, 'handleDelete', () => {
  let {
    onDelete: e,
    channel: s
  } = this.props;
  this.setMessageNotification(g.bL.NULL, !1, E.ZB.OverrideDeleted), null != e && e(s.id);
});
  }
}