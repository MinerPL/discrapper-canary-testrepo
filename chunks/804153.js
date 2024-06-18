"use strict";
t(47120), t(733860);
var n = t(735250),
  i = t(470079),
  l = t(392711),
  a = t.n(l),
  r = t(149765),
  o = t(442837),
  c = t(481060),
  d = t(497321),
  u = t(484614),
  E = t(933557),
  _ = t(984933),
  I = t(496675),
  T = t(699516),
  N = t(246946),
  m = t(594174),
  S = t(434404),
  h = t(999382),
  g = t(981631),
  x = t(689938),
  C = t(684617);

function R(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let L = "NO_INSTANT_INVITE",
  O = r.$e(g.Plq.VIEW_CHANNEL, g.Plq.CREATE_INSTANT_INVITE);
class A extends i.PureComponent {
  static getDerivedStateFromProps(e, s) {
    let {
      widgetEnabled: t
    } = e, {
      widgetEnabledProp: n
    } = s;
    return t !== n ? {
      internalEnabled: t,
      widgetEnabledProp: t
    } : null
  }
  renderChannelSelect(e) {
    let {
      widgetChannelId: s
    } = this.props, t = _.ZP.getChannels(e.id), i = a()([...t[_.sH], ...t[_.Zb]]).filter(s => {
      let {
        channel: t
      } = s;
      return t.guild_id === e.id
    }).filter(e => {
      let {
        channel: t
      } = e;
      return t.id === s || I.Z.can(O, t)
    }).map(e => {
      let {
        channel: s
      } = e;
      return {
        value: s.id,
        label: (0, E.F6)(s, m.default, T.Z, !0)
      }
    }).value();
    return i.unshift({
      value: L,
      label: x.Z.Messages.NO_INSTANT_INVITE
    }), (0, n.jsxs)(c.FormItem, {
      title: x.Z.Messages.FORM_LABEL_INSTANT_INVITE_CHANNEL,
      children: [(0, n.jsx)(c.SingleSelect, {
        className: C.spacing,
        options: i,
        value: s,
        onChange: this.handleChannelSelect
      }), (0, n.jsx)(c.FormText, {
        type: c.FormTextTypes.DESCRIPTION,
        children: x.Z.Messages.FORM_HELP_INSTANT_INVITE_CHANNEL
      })]
    })
  }
  renderAPIInfo(e) {
    let s = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, "/guilds/").concat(e.id, "/widget.json");
    return (0, n.jsxs)("div", {
      className: C.infoWrapper,
      children: [(0, n.jsx)(c.FormItem, {
        title: x.Z.Messages.FORM_LABEL_SERVER_ID,
        className: C.infoItem,
        children: (0, n.jsx)(u.Z, {
          value: e.id
        })
      }), (0, n.jsx)(c.FormItem, {
        title: x.Z.Messages.FORM_LABEL_JSON_API,
        className: C.infoItem,
        children: (0, n.jsx)(u.Z, {
          value: s
        })
      })]
    })
  }
  renderWidget(e) {
    let s = "".concat(location.protocol).concat(window.GLOBAL_ENV.WIDGET_ENDPOINT, "?id=").concat(e.id, "&theme=dark");
    return (0, n.jsx)("div", {
      children: (0, n.jsxs)("div", {
        className: C.infoWrapper,
        children: [(0, n.jsxs)(c.FormItem, {
          className: C.infoItem,
          title: x.Z.Messages.FORM_LABEL_PREMADE_WIDGET,
          children: [(0, n.jsx)(u.Z, {
            value: '<iframe src="'.concat(s, '" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>')
          }), (0, n.jsx)(c.FormText, {
            type: c.FormTextTypes.DESCRIPTION,
            children: x.Z.Messages.GUILD_SETTINGS_WIDGET_EMBED_HELP.format()
          })]
        }), (0, n.jsx)("img", {
          className: C.infoItem,
          "data-accessibility": "desaturate",
          alt: "",
          src: t(329488)
        })]
      })
    })
  }
  render() {
    let {
      guild: e
    } = this.props;
    return null == e ? null : this.props.hide ? (0, n.jsx)(d.Z, {}) : (0, n.jsxs)(c.FormSection, {
      tag: c.FormTitleTags.H1,
      title: x.Z.Messages.GUILD_SETTINGS_TITLE_SERVER_WIDGET,
      children: [this.renderToggle(), this.renderChannelSelect(e), (0, n.jsx)(c.FormDivider, {
        className: C.divider
      }), this.renderAPIInfo(e), (0, n.jsx)(c.FormDivider, {
        className: C.divider
      }), this.renderWidget(e)]
    })
  }
  constructor(...e) {
    super(...e), R(this, "state", {
      internalEnabled: this.props.widgetEnabled,
      widgetEnabledProp: this.props.widgetEnabled
    }), R(this, "renderToggle", () => (0, n.jsx)(c.FormSwitch, {
      className: C.spacing,
      value: this.state.internalEnabled,
      onChange: this.handleToggleWidget,
      children: x.Z.Messages.GUILD_SETTINGS_WIDGET_ENABLE_WIDGET
    })), R(this, "handleToggleWidget", e => {
      let {
        guild: s,
        widgetChannelId: t
      } = this.props;
      if (null != s) this.setState({
        internalEnabled: e
      }), S.Z.updateEmbed(s.id, e, t)
    }), R(this, "handleChannelSelect", e => {
      let {
        guild: s,
        widgetEnabled: t
      } = this.props;
      if (null != s) S.Z.updateEmbed(s.id, t, e !== L ? e : null)
    })
  }
}
s.Z = o.ZP.connectStores([h.Z, N.Z], () => {
  let {
    guild: e,
    embedChannelId: s,
    embedEnabled: t
  } = h.Z.getProps();
  return {
    guild: e,
    widgetChannelId: s,
    widgetEnabled: t,
    hide: N.Z.enabled
  }
})(A)