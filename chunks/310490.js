"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("222007"), s("843762");
var a = s("37983"),
  l = s("884691"),
  n = s("917351"),
  i = s.n(n),
  r = s("316693"),
  o = s("446674"),
  d = s("77078"),
  u = s("642950"),
  c = s("913801"),
  E = s("679653"),
  _ = s("923959"),
  I = s("957255"),
  T = s("27618"),
  S = s("102985"),
  f = s("697218"),
  m = s("592407"),
  N = s("900938"),
  g = s("49111"),
  h = s("782340"),
  C = s("927253");
let R = "NO_INSTANT_INVITE",
  x = r.combine(g.Permissions.VIEW_CHANNEL, g.Permissions.CREATE_INSTANT_INVITE);
class L extends l.PureComponent {
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
    } = this.props, s = _.default.getChannels(e.id), l = i([...s[_.GUILD_SELECTABLE_CHANNELS_KEY], ...s[_.GUILD_VOCAL_CHANNELS_KEY]]).filter(t => {
      let {
        channel: s
      } = t;
      return s.guild_id === e.id
    }).filter(e => {
      let {
        channel: s
      } = e;
      return s.id === t || I.default.can(x, s)
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
      value: R,
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
          src: s("94944")
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
    super(...e), this.state = {
      internalEnabled: this.props.widgetEnabled,
      widgetEnabledProp: this.props.widgetEnabled
    }, this.renderToggle = () => (0, a.jsx)(d.FormSwitch, {
      className: C.spacing,
      value: this.state.internalEnabled,
      onChange: this.handleToggleWidget,
      children: h.default.Messages.GUILD_SETTINGS_WIDGET_ENABLE_WIDGET
    }), this.handleToggleWidget = e => {
      let {
        guild: t,
        widgetChannelId: s
      } = this.props;
      null != t && (this.setState({
        internalEnabled: e
      }), m.default.updateEmbed(t.id, e, s))
    }, this.handleChannelSelect = e => {
      let {
        guild: t,
        widgetEnabled: s
      } = this.props;
      null != t && m.default.updateEmbed(t.id, s, e !== R ? e : null)
    }
  }
}
var O = o.default.connectStores([N.default, S.default], () => {
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
})(L)