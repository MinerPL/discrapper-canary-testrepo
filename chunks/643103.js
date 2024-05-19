"use strict";
n.r(t), n.d(t, {
  LocalePicker: function() {
    return h
  }
}), n("47120");
var s = n("735250"),
  l = n("470079"),
  i = n("557533"),
  a = n.n(i),
  r = n("435935"),
  o = n("982905"),
  c = n("431138"),
  u = n("330711"),
  d = n("448787");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class h extends l.PureComponent {
  componentDidMount() {
    this.callChangeLocale(u.default.getLocale())
  }
  render() {
    let {
      isOpen: e,
      languages: t,
      current: l
    } = this.state, {
      className: i
    } = this.props, u = null;
    return null != t && (u = t.sort((e, t) => e.code < t.code ? -1 : e.code > t.code ? 1 : 0).map(e => {
      let t = function(e) {
        try {
          return n("365322")("../../images/flags/".concat(e, ".png").replace("../../images/flags/", "./"))
        } catch (e) {
          return null
        }
      }(e.code);
      return null == t ? null : (0, s.jsxs)("li", {
        className: (0, o.getClass)(d, "locale", null != l && e.code === l.code ? "Current" : null),
        onClick: () => this.setLocale(e.code),
        children: [(0, s.jsx)("img", {
          className: d.localeImage,
          src: t,
          alt: e.name
        }), e.name]
      }, e.code)
    })), (0, s.jsxs)("div", {
      className: a()(d.localePicker, i),
      onMouseEnter: this.open,
      onMouseLeave: this.close,
      onClick: this.toggle,
      children: [(0, s.jsxs)(r.Flex, {
        align: r.Flex.Align.CENTER,
        className: (0, o.getClass)(d, "opener", e ? "Open" : null),
        children: [(0, s.jsx)("span", {
          className: d.line
        }), (0, s.jsx)("img", {
          className: d.localeIcon,
          src: c.Images.ICON_TRANSLATE,
          alt: "Choose Locale"
        }), (0, s.jsx)("img", {
          className: d.arrowIcon,
          src: c.Images.ICON_ARROW_DOWN,
          alt: "Open Locale"
        })]
      }), (0, s.jsx)("ul", {
        className: (0, o.getClass)(d, "localeList", e ? "Open" : "Closed"),
        children: u
      })]
    })
  }
  constructor(...e) {
    super(...e), p(this, "state", {
      languages: u.default.getLanguages().filter(e => e.enabled),
      current: u.default.getLocaleInfo(),
      isOpen: !1
    }), p(this, "setLocale", e => {
      null != u.default && (u.default.setLocale(e), this.callChangeLocale(e))
    }), p(this, "callChangeLocale", e => {
      let {
        onChange: t
      } = this.props;
      null != t && t(e)
    }), p(this, "open", () => {
      this.setState({
        isOpen: !0
      })
    }), p(this, "close", () => {
      this.setState({
        isOpen: !1
      })
    }), p(this, "toggle", () => {
      let {
        isOpen: e
      } = this.state;
      this.setState({
        isOpen: !e
      })
    })
  }
}