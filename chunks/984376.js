"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("271938");

function r(e) {
  return class extends n.Component {
    componentDidMount() {
      l.default.addChangeListener(this.onStoreChange)
    }
    componentWillUnmount() {
      l.default.removeChangeListener(this.onStoreChange)
    }
    render() {
      return (0, a.jsx)(e, {
        ...this.props,
        isAuthenticated: this.state.isAuthenticated
      })
    }
    constructor(...e) {
      super(...e), this.state = {
        isAuthenticated: l.default.isAuthenticated()
      }, this.onStoreChange = () => {
        this.setState({
          isAuthenticated: l.default.isAuthenticated()
        })
      }
    }
  }
}