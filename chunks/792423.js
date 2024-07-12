s.d(t, {
  Z: function() {
return d;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(481060),
  r = s(401190),
  o = s(689938),
  l = s(536537);

function c(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
class d extends a.PureComponent {
  renderErrorMessage() {
let {
  hasError: e
} = this.state;
return e ? (0, n.jsx)('div', {
  className: l.error,
  children: o.Z.Messages.HYPESQUAD_LEAVE_ERROR
}) : null;
  }
  render() {
let {
  isRequestPending: e
} = this.state, {
  isHypeSquadOnlineMember: t
} = this.props;
return t ? (0, n.jsxs)('div', {
  className: l.leaveActionWrapper,
  children: [
    this.renderErrorMessage(),
    (0, n.jsxs)(i.Text, {
      variant: 'text-sm/normal',
      children: [
        o.Z.Messages.HYPESQUAD_LEAVE_PROMPT,
        (0, n.jsx)(i.Button, {
          className: l.leaveButton,
          color: i.Button.Colors.LINK,
          look: i.Button.Looks.LINK,
          onClick: this.handleLeaveHypeSquadClick,
          size: i.Button.Sizes.NONE,
          submitting: e,
          children: o.Z.Messages.HYPESQUAD_LEAVE_ACTION
        })
      ]
    })
  ]
}) : null;
  }
  constructor(...e) {
super(...e), c(this, 'state', {
  isRequestPending: !1,
  hasError: !1
}), c(this, 'handleLeaveHypeSquadError', () => {
  this.setState({
    hasError: !0
  });
}), c(this, 'handleLeaveHypeSquadClick', () => {
  this.setState({
    isRequestPending: !0
  }, () => {
    r.Z.leaveHypeSquadOnline().then(() => {
      this.setState({
        isRequestPending: !1
      });
    }).catch(() => {
      this.setState({
        hasError: !0,
        isRequestPending: !1
      });
    });
  });
});
  }
}