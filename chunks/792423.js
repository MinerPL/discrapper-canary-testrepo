"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("481060"),
  i = s("401190"),
  r = s("689938"),
  o = s("546668");

function d(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class u extends n.PureComponent {
  renderErrorMessage() {
    let {
      hasError: e
    } = this.state;
    return e ? (0, a.jsx)("div", {
      className: o.error,
      children: r.default.Messages.HYPESQUAD_LEAVE_ERROR
    }) : null
  }
  render() {
    let {
      isRequestPending: e
    } = this.state, {
      isHypeSquadOnlineMember: t
    } = this.props;
    return t ? (0, a.jsxs)("div", {
      className: o.leaveActionWrapper,
      children: [this.renderErrorMessage(), (0, a.jsxs)(l.Text, {
        variant: "text-sm/normal",
        children: [r.default.Messages.HYPESQUAD_LEAVE_PROMPT, (0, a.jsx)(l.Button, {
          className: o.leaveButton,
          color: l.Button.Colors.LINK,
          look: l.Button.Looks.LINK,
          onClick: this.handleLeaveHypeSquadClick,
          size: l.Button.Sizes.NONE,
          submitting: e,
          children: r.default.Messages.HYPESQUAD_LEAVE_ACTION
        })]
      })]
    }) : null
  }
  constructor(...e) {
    super(...e), d(this, "state", {
      isRequestPending: !1,
      hasError: !1
    }), d(this, "handleLeaveHypeSquadError", () => {
      this.setState({
        hasError: !0
      })
    }), d(this, "handleLeaveHypeSquadClick", () => {
      this.setState({
        isRequestPending: !0
      }, () => {
        i.default.leaveHypeSquadOnline().then(() => {
          this.setState({
            isRequestPending: !1
          })
        }).catch(() => {
          this.setState({
            hasError: !0,
            isRequestPending: !1
          })
        })
      })
    })
  }
}