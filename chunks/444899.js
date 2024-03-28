"use strict";
s.r(t), s.d(t, {
  ChannelNotificationSettings: function() {
    return T
  }
}), s("47120");
var i = s("735250"),
  a = s("470079"),
  n = s("481060"),
  l = s("92114"),
  r = s("225433"),
  d = s("933557"),
  o = s("471445"),
  u = s("592125"),
  c = s("324067"),
  h = s("699516"),
  S = s("594174"),
  N = s("285952"),
  g = s("621600"),
  f = s("981631"),
  E = s("689938"),
  m = s("154460");

function _(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class T extends a.PureComponent {
  highlight() {
    this.setState({
      highlight: !0
    }, () => {
      null != this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(this.unhighlight, 1e3)
    })
  }
  componentWillUnmount() {
    null != this._timeout && clearTimeout(this._timeout)
  }
  setMessageNotification(e, t, s) {
    let {
      channel: i
    } = this.props, a = i.getGuildId();
    null != a && l.default.updateChannelOverrideSettings(a, i.id, {
      message_notifications: e,
      muted: null != t && t
    }, s)
  }
  handleRadioChange(e) {
    this.setMessageNotification(e, void 0, g.NotificationLabel.notifications(e))
  }
  renderMessageNotificationsRadioOption(e) {
    let {
      messageNotifications: t,
      guildMuted: s,
      muted: a,
      guildMessageNotifications: l,
      checkboxColor: r
    } = this.props, d = t === e;
    (null == t || t === f.UserNotificationSettings.NULL) && e === l && (d = !0);
    let o = n.Checkbox.Types.INVERTED;
    return (a || t === f.UserNotificationSettings.NULL || null == t) && (o = n.Checkbox.Types.GHOST), (0, i.jsx)(n.Checkbox, {
      value: !s && d,
      disabled: s,
      shape: n.Checkbox.Shapes.ROUND,
      color: r,
      type: o,
      onChange: this.handleRadioChange.bind(this, e)
    })
  }
  renderName() {
    let e, t;
    let {
      channel: s
    } = this.props;
    null != s.parent_id && (e = u.default.getChannel(s.parent_id));
    let a = (0, o.getChannelIconComponent)(s);
    if (s.type === f.ChannelTypes.GUILD_CATEGORY && null != s.guild_id && "" !== s.guild_id) {
      let e = c.default.getCategories(s.guild_id);
      t = E.default.Messages.NUM_CHANNELS.format({
        num: null != e[s.id] ? e[s.id].length : 0
      })
    } else t = null != e ? E.default.Messages.IN_CATEGORY.format({
      categoryName: (0, d.computeChannelName)(e, S.default, h.default)
    }) : E.default.Messages.NO_CATEGORY;
    return (0, i.jsxs)(N.default, {
      grow: 1,
      className: m.nameContainer,
      children: [null != a ? (0, i.jsx)(a, {
        className: m.icon
      }) : null, (0, i.jsxs)("div", {
        className: m.channelNameContainer,
        children: [(0, i.jsx)(n.Text, {
          variant: "text-md/semibold",
          className: m.channelName,
          children: (0, d.computeChannelName)(s, S.default, h.default)
        }), (0, i.jsx)(n.Text, {
          variant: "text-xs/normal",
          className: m.channelNameByline,
          children: t
        })]
      })]
    })
  }
  renderOptions() {
    let {
      muted: e,
      guildMuted: t
    } = this.props;
    return (0, i.jsxs)(N.default, {
      grow: 0,
      shrink: 0,
      className: m.checkboxGroup,
      justify: N.default.Justify.AROUND,
      align: N.default.Align.CENTER,
      children: [(0, i.jsx)(N.default.Child, {
        wrap: !0,
        grow: 0,
        shrink: 0,
        className: t ? m.checkboxContainerMuted : m.checkboxContainer,
        children: this.renderMessageNotificationsRadioOption(f.UserNotificationSettings.ALL_MESSAGES)
      }), (0, i.jsx)(N.default.Child, {
        wrap: !0,
        grow: 0,
        shrink: 0,
        className: t ? m.checkboxContainerMuted : m.checkboxContainer,
        children: this.renderMessageNotificationsRadioOption(f.UserNotificationSettings.ONLY_MENTIONS)
      }), (0, i.jsx)(N.default.Child, {
        wrap: !0,
        grow: 0,
        shrink: 0,
        className: t ? m.checkboxContainerMuted : m.checkboxContainer,
        children: this.renderMessageNotificationsRadioOption(f.UserNotificationSettings.NO_MESSAGES)
      }), (0, i.jsx)(N.default.Child, {
        wrap: !0,
        grow: 0,
        shrink: 0,
        className: m.checkboxMute,
        children: (0, i.jsx)(n.Checkbox, {
          value: e,
          shape: n.Checkbox.Shapes.BOX,
          type: n.Checkbox.Types.INVERTED,
          onChange: this.handleMute
        })
      })]
    })
  }
  render() {
    let {
      highlight: e
    } = this.state;
    return (0, i.jsxs)(n.Card, {
      outline: !0,
      editable: !0,
      className: e ? m.overrideHighlight : m.override,
      children: [this.renderName(), this.renderOptions(), (0, i.jsx)(r.default, {
        className: m.removeOverride,
        onClick: this.handleDelete
      })]
    })
  }
  constructor(...e) {
    super(...e), _(this, "_timeout", void 0), _(this, "state", {
      highlight: !1
    }), _(this, "unhighlight", () => {
      this.setState({
        highlight: !1
      })
    }), _(this, "handleMute", (e, t) => {
      let {
        messageNotifications: s
      } = this.props;
      this.setMessageNotification(null != s ? s : f.UserNotificationSettings.NULL, t, g.NotificationLabel.muted(t))
    }), _(this, "handleDelete", () => {
      let {
        onDelete: e,
        channel: t
      } = this.props;
      this.setMessageNotification(f.UserNotificationSettings.NULL, !1, g.NotificationLabels.OverrideDeleted), null != e && e(t.id)
    })
  }
}