"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("222007");
var n = s("37983"),
  r = s("884691"),
  l = s("872717"),
  a = s("145131"),
  i = s("364719"),
  o = s("599110"),
  c = s("814478"),
  u = s("57641"),
  d = s("49111"),
  f = s("782340"),
  h = s("549727"),
  g = s("666042"),
  p = s("265369"),
  x = s("799557");
class v extends r.PureComponent {
  componentDidMount() {
    o.default.track(d.AnalyticEvents.ACCOUNT_LINK_STEP, {
      previous_step: null,
      current_step: "landing page",
      platform_type: d.PlatformTypes.XBOX
    })
  }
  handleLinkAccountPressed() {
    l.HTTP.get({
      url: d.Endpoints.CONNECTIONS_AUTHORIZE_CONTINUATION(d.PlatformTypes.XBOX),
      oldFormErrors: !0
    }).then(e => {
      window.location.href = e.body.url
    }).catch(e => {
      let t;
      try {
        t = e.body.message
      } catch (s) {
        t = String(e)
      }
      o.default.track(d.AnalyticEvents.ACCOUNT_LINK_FAILED, {
        error_message: t,
        status_code: e.status,
        link_method: "pin",
        current_step: "landing page",
        platform_type: d.PlatformTypes.XBOX
      }), this.setState({
        errorMessage: t
      })
    })
  }
  goBack() {
    window.location = d.Routes.CONNECTIONS(d.PlatformTypes.XBOX)
  }
  renderXboxButtons() {
    return (0, n.jsxs)("div", {
      className: g.xboxButtonContainer,
      children: [(0, n.jsx)(c.XboxGamepadButton, {
        type: "A",
        text: f.default.Messages.XBOX_LINK,
        style: g.gamepadButton,
        onClick: this.handleLinkAccountPressed
      }), (0, n.jsx)(c.XboxGamepadButton, {
        type: "B",
        text: f.default.Messages.CANCEL,
        style: g.gamepadButton,
        onClick: this.goBack
      }), this.renderErrorMessage()]
    })
  }
  renderErrorMessage() {
    let {
      errorMessage: e
    } = this.state;
    return null == e ? null : (0, n.jsxs)("div", {
      className: g.errorMessageContainer,
      children: [(0, n.jsx)(i.default, {
        className: g.errorMessageIcon
      }), (0, n.jsx)("div", {
        className: g.errorMessage,
        children: e
      })]
    })
  }
  renderContent() {
    return (0, n.jsxs)("div", {
      className: g.pageWrapper,
      children: [(0, n.jsx)("img", {
        alt: "Discord",
        className: g.logo,
        src: p
      }), (0, n.jsxs)(a.default, {
        className: g.container,
        justify: a.default.Justify.CENTER,
        align: a.default.Align.CENTER,
        children: [(0, n.jsxs)(a.default.Child, {
          className: h.leftPanel,
          children: [(0, n.jsx)("div", {
            className: h.sectionTitle,
            children: f.default.Messages.DISCORD_RICH_PRESENCE
          }), (0, n.jsx)("div", {
            className: h.sectionSubtitle,
            children: f.default.Messages.LINK_YOUR_XBOX_ACCOUNT_1
          }), (0, n.jsx)("div", {
            className: h.sectionSubtitle,
            children: f.default.Messages.LINK_YOUR_XBOX_ACCOUNT_2
          }), this.renderXboxButtons()]
        }), (0, n.jsx)(a.default, {
          className: g.rightPanel,
          justify: a.default.Justify.END,
          align: a.default.Align.CENTER,
          children: (0, n.jsx)("img", {
            alt: "",
            className: g.image,
            src: x
          })
        })]
      })]
    })
  }
  render() {
    return (0, n.jsx)(u.XboxGamepadButtonHandlers, {
      A: this.handleLinkAccountPressed,
      B: this.goBack,
      children: this.renderContent()
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      errorMessage: null
    }
  }
}
var C = v