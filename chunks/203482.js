"use strict";
s.r(t), s("47120");
var n = s("735250"),
  r = s("470079"),
  l = s("544891"),
  a = s("285952"),
  i = s("729017"),
  o = s("626135"),
  c = s("994693"),
  u = s("515704"),
  d = s("981631"),
  f = s("689938"),
  h = s("420050"),
  g = s("415718"),
  p = s("955221"),
  v = s("224071");
class x extends r.PureComponent {
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
            src: v
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
    var t, s, n;
    super(...e), t = this, n = {
      errorMessage: null
    }, (s = "state") in t ? Object.defineProperty(t, s, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[s] = n
  }
}
t.default = x