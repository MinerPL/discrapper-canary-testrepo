"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  i = s("271938");

function n(e) {
  return class extends r.Component {
    componentDidMount() {
      i.default.addChangeListener(this.onStoreChange)
    }
    componentWillUnmount() {
      i.default.removeChangeListener(this.onStoreChange)
    }
    render() {
      return (0, a.jsx)(e, {
        ...this.props,
        isAuthenticated: this.state.isAuthenticated
      })
    }
    constructor(...e) {
      super(...e), this.state = {
        isAuthenticated: i.default.isAuthenticated()
      }, this.onStoreChange = () => {
        this.setState({
          isAuthenticated: i.default.isAuthenticated()
        })
      }
    }
  }
}