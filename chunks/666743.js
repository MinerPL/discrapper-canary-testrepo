"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
}), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("314897");

function n(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function l(e) {
  return class extends i.Component {
    componentDidMount() {
      r.default.addChangeListener(this.onStoreChange)
    }
    componentWillUnmount() {
      r.default.removeChangeListener(this.onStoreChange)
    }
    render() {
      return (0, a.jsx)(e, {
        ...this.props,
        isAuthenticated: this.state.isAuthenticated
      })
    }
    constructor(...e) {
      super(...e), n(this, "state", {
        isAuthenticated: r.default.isAuthenticated()
      }), n(this, "onStoreChange", () => {
        this.setState({
          isAuthenticated: r.default.isAuthenticated()
        })
      })
    }
  }
}