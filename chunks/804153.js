"use strict";
s.r(t), s("47120"), s("733860");
var a = s("735250"),
  l = s("470079"),
  n = s("392711"),
  i = s.n(n),
  r = s("149765"),
  o = s("442837"),
  d = s("481060"),
  u = s("497321"),
  c = s("484614"),
  E = s("933557"),
  _ = s("984933"),
  I = s("496675"),
  T = s("699516"),
  S = s("246946"),
  f = s("594174"),
  m = s("434404"),
  N = s("999382"),
  g = s("981631"),
  h = s("689938"),
  C = s("995369");

function R(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let x = "NO_INSTANT_INVITE",
  L = r.combine(g.Permissions.VIEW_CHANNEL, g.Permissions.CREATE_INSTANT_INVITE);
class O extends l.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      widgetEnabled: s
    } = e, {
      widgetEnabledProp: a
    } = t;
    return s !== a ? {
      internalEnabled: s,
      widgetEnabledProp: s
    } : null
  }
  renderChannelSelect(e) {
    let {
      widgetChannelId: t
    } = this.props, s = _.default.getChannels(e.id), l = i()([...s[_.GUILD_SELECTABLE_CHANNELS_KEY], ...s[_.GUILD_VOCAL_CHANNELS_KEY]]).filter(t => {
      let {
        channel: s
      } = t;
      return s.guild_id === e.id
    }).filter(e => {
      let {
        channel: s
      } = e;
      return s.id === t || I.default.can(L, s)
    }).map(e => {
      let {
        channel: t
      } = e;
      return {
        value: t.id,
        label: (0, E.computeChannelName)(t, f.default, T.default, !0)
      }
    }).value();
    return l.unshift({
      value: x,
      label: h.default.Messages.NO_INSTANT_INVITE
    }), (0, a.jsxs)(d.FormItem, {
      title: h.default.Messages.FORM_LABEL_INSTANT_INVITE_CHANNEL,
      children: [(0, a.jsx)(d.SingleSelect, {
        className: C.spacing,
        options: l,
        value: t,
        onChange: this.handleChannelSelect
      }), (0, a.jsx)(d.FormText, {
        type: d.FormTextTypes.DESCRIPTION,
        children: h.default.Messages.FORM_HELP_INSTANT_INVITE_CHANNEL
      })]
    })
  }
  renderAPIInfo(e) {
    let t = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, "/guilds/").concat(e.id, "/widget.json");
    return (0, a.jsxs)("div", {
      className: C.infoWrapper,
      children: [(0, a.jsx)(d.FormItem, {
        title: h.default.Messages.FORM_LABEL_SERVER_ID,
        className: C.infoItem,
        children: (0, a.jsx)(c.default, {
          value: e.id
        })
      }), (0, a.jsx)(d.FormItem, {
        title: h.default.Messages.FORM_LABEL_JSON_API,
        className: C.infoItem,
        children: (0, a.jsx)(c.default, {
          value: t
        })
      })]
    })
  }
  renderWidget(e) {
    let t = "".concat(location.protocol).concat(window.GLOBAL_ENV.WIDGET_ENDPOINT, "?id=").concat(e.id, "&theme=dark");
    return (0, a.jsx)("div", {
      children: (0, a.jsxs)("div", {
        className: C.infoWrapper,
        children: [(0, a.jsxs)(d.FormItem, {
          className: C.infoItem,
          title: h.default.Messages.FORM_LABEL_PREMADE_WIDGET,
          children: [(0, a.jsx)(c.default, {
            value: '<iframe src="'.concat(t, '" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>')
          }), (0, a.jsx)(d.FormText, {
            type: d.FormTextTypes.DESCRIPTION,
            children: h.default.Messages.GUILD_SETTINGS_WIDGET_EMBED_HELP.format()
          })]
        }), (0, a.jsx)("img", {
          className: C.infoItem,
          "data-accessibility": "desaturate",
          alt: "",
          src: s("329488")
        })]
      })
    })
  }
  render() {
    let {
      guild: e
    } = this.props;
    return null == e ? null : this.props.hide ? (0, a.jsx)(u.default, {}) : (0, a.jsxs)(d.FormSection, {
      tag: d.FormTitleTags.H1,
      title: h.default.Messages.GUILD_SETTINGS_TITLE_SERVER_WIDGET,
      children: [this.renderToggle(), this.renderChannelSelect(e), (0, a.jsx)(d.FormDivider, {
        className: C.divider
      }), this.renderAPIInfo(e), (0, a.jsx)(d.FormDivider, {
        className: C.divider
      }), this.renderWidget(e)]
    })
  }
  constructor(...e) {
    super(...e), R(this, "state", {
      internalEnabled: this.props.widgetEnabled,
      widgetEnabledProp: this.props.widgetEnabled
    }), R(this, "renderToggle", () => (0, a.jsx)(d.FormSwitch, {
      className: C.spacing,
      value: this.state.internalEnabled,
      onChange: this.handleToggleWidget,
      children: h.default.Messages.GUILD_SETTINGS_WIDGET_ENABLE_WIDGET
    })), R(this, "handleToggleWidget", e => {
      let {
        guild: t,
        widgetChannelId: s
      } = this.props;
      null != t && (this.setState({
        internalEnabled: e
      }), m.default.updateEmbed(t.id, e, s))
    }), R(this, "handleChannelSelect", e => {
      let {
        guild: t,
        widgetEnabled: s
      } = this.props;
      null != t && m.default.updateEmbed(t.id, s, e !== x ? e : null)
    })
  }
}
t.default = o.default.connectStores([N.default, S.default], () => {
  let {
    guild: e,
    embedChannelId: t,
    embedEnabled: s
  } = N.default.getProps();
  return {
    guild: e,
    widgetChannelId: t,
    widgetEnabled: s,
    hide: S.default.enabled
  }
})(O)