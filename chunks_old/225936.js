"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
}), s("222007");
var n = s("37983"),
  r = s("884691"),
  a = s("866227"),
  l = s.n(a),
  i = s("730290"),
  o = s("872717"),
  c = s("862337"),
  u = s("77078"),
  d = s("145131"),
  f = s("364719"),
  h = s("258078"),
  g = s("599110"),
  m = s("814478"),
  x = s("57641"),
  p = s("49111"),
  v = s("782340"),
  N = s("89220"),
  C = s("666042"),
  j = s("265369"),
  _ = s("799557");
let I = e => {
    let {
      step: t,
      children: s
    } = e;
    return (0, n.jsxs)(r.Fragment, {
      children: [(0, n.jsx)(u.Heading, {
        className: N.sectionSubheader,
        variant: "heading-sm/semibold",
        children: v.default.Messages.STEP_NUMBER.format({
          number: t
        })
      }), (0, n.jsx)(h.default, {
        className: N.sectionSubtitle,
        size: h.default.Sizes.SIZE_24,
        children: s
      })]
    })
  },
  w = e => {
    let {
      pin: t,
      timeRemaining: s
    } = e;
    return (0, n.jsxs)(r.Fragment, {
      children: [(0, n.jsx)(u.Text, {
        className: N.pinNumber,
        variant: "text-sm/normal",
        children: t
      }), (0, n.jsx)(u.Text, {
        className: N.pinExpiresText,
        tag: "strong",
        variant: "text-sm/normal",
        children: s
      })]
    })
  };
class L extends r.PureComponent {
  componentDidMount() {
    let e = i.parse(this.props.location.search),
      {
        code: t,
        state: s
      } = e;
    g.default.track(p.AnalyticEvents.ACCOUNT_LINK_STEP, {
      previous_step: "microsoft auth",
      current_step: "PIN code display",
      session_id: s,
      platform_type: p.PlatformTypes.XBOX
    }), l.locale(window.navigator.userLanguage || window.navigator.language), o.HTTP.post({
      url: p.Endpoints.CONNECTIONS_CALLBACK_CONTINUATION("xbox"),
      body: {
        code: t,
        state: s
      },
      oldFormErrors: !0
    }).then(e => {
      this.setState({
        pin: e.body.short_code,
        currentTime: l(),
        endTime: l(e.body.expires_at),
        loading: !1
      }), this.interval = new c.Interval, this.interval.start(1e3, this.tick)
    }).catch(e => {
      let t;
      try {
        t = e.body.message
      } catch (s) {
        t = String(e)
      }
      g.default.track(p.AnalyticEvents.ACCOUNT_LINK_FAILED, {
        error_message: t,
        status_code: e.status,
        link_method: "pin",
        current_step: "PIN code display",
        platform_type: p.PlatformTypes.XBOX
      }), this.setState({
        errorMessage: t
      })
    })
  }
  componentWillUnmount() {
    null != this.interval && this.interval.stop()
  }
  handleDone() {
    window.location = p.Routes.CONNECTIONS(p.PlatformTypes.XBOX)
  }
  goBack() {
    window.history.back()
  }
  renderXboxButtons() {
    return (0, n.jsxs)("div", {
      className: C.xboxButtonContainer,
      children: [(0, n.jsx)(m.XboxGamepadButton, {
        type: "A",
        text: v.default.Messages.CLOSE,
        style: C.gamepadButton,
        onClick: this.handleDone
      }), this.renderErrorMessage()]
    })
  }
  renderErrorMessage() {
    let {
      errorMessage: e
    } = this.state;
    return null == e ? null : (0, n.jsxs)("div", {
      className: C.errorMessageContainer,
      children: [(0, n.jsx)(f.default, {
        className: C.errorMessageIcon
      }), (0, n.jsx)("div", {
        className: C.errorMessage,
        children: e
      })]
    })
  }
  renderContent() {
    let {
      pin: e
    } = this.state, t = null == e ? null : (0, n.jsx)(w, {
      pin: e,
      timeRemaining: this.getMinutesLeftText()
    });
    return (0, n.jsxs)("div", {
      className: C.pageWrapper,
      children: [(0, n.jsx)("img", {
        alt: "Discord",
        className: C.logo,
        src: j
      }), (0, n.jsxs)(d.default, {
        className: C.container,
        justify: d.default.Justify.CENTER,
        align: d.default.Align.CENTER,
        children: [(0, n.jsxs)(d.default.Child, {
          className: N.leftPanel,
          children: [t, (0, n.jsx)(u.Heading, {
            className: N.sectionTitle,
            variant: "heading-sm/semibold",
            children: v.default.Messages.LINK_YOUR_DISCORD_ACCOUNT
          }), (0, n.jsx)(I, {
            step: 1,
            children: v.default.Messages.XBOX_PIN_STEP1
          }), (0, n.jsx)(I, {
            step: 2,
            children: v.default.Messages.XBOX_PIN_STEP2
          }), (0, n.jsx)(I, {
            step: 3,
            children: v.default.Messages.XBOX_PIN_STEP3
          }), this.renderXboxButtons()]
        }), (0, n.jsx)(d.default.Child, {
          className: C.rightPanel,
          children: (0, n.jsx)("img", {
            alt: "",
            className: C.image,
            src: _
          })
        })]
      })]
    })
  }
  render() {
    return (0, n.jsx)(x.XboxGamepadButtonHandlers, {
      A: this.handleDone,
      B: this.goBack,
      children: this.renderContent()
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      pin: "",
      currentTime: l(),
      endTime: null,
      loading: !0,
      errorMessage: null
    }, this.tick = () => {
      let {
        endTime: e
      } = this.state;
      if (this.setState({
          currentTime: l()
        }), null != e && l().isAfter(e)) {
        var t;
        null === (t = this.interval) || void 0 === t || t.stop()
      }
    }, this.getMinutesLeftText = () => {
      let {
        endTime: e
      } = this.state;
      if (this.state.loading) return v.default.Messages.LOADING_YOUR_PIN;
      if (null != e && l().isAfter(e)) return v.default.Messages.YOUR_PIN_IS_EXPIRED;
      if (null != e) return v.default.Messages.YOUR_PIN_EXPIRES.format({
        time: e.fromNow()
      })
    }
  }
}
var T = L