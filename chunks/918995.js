"use strict";
s.r(t), s("47120");
var l = s("735250"),
  n = s("470079"),
  a = s("481060"),
  r = s("233787"),
  c = s("689938");

function i(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class o extends n.Component {
  render() {
    let {
      transitionState: e
    } = this.props;
    return (0, l.jsxs)(r.default, {
      transitionState: e,
      "aria-label": c.default.Messages.PREMIUM_NOT_CLAIMED,
      children: [(0, l.jsx)(r.default.Header, {
        children: c.default.Messages.PREMIUM_NOT_CLAIMED
      }), (0, l.jsx)(r.default.Content, {
        type: r.default.Types.UNCLAIMED,
        children: c.default.Messages.PREMIUM_NOT_CLAIMED_BODY
      }), (0, l.jsx)(r.default.Footer, {
        secondary: {
          onClick: this.cancel,
          label: c.default.Messages.NEVERMIND
        },
        primary: {
          onClick: this.claimAccount,
          label: c.default.Messages.CLAIM_ACCOUNT
        }
      })]
    })
  }
  constructor(...e) {
    super(...e), i(this, "cancel", () => {
      let {
        onClose: e
      } = this.props;
      null == e || e()
    }), i(this, "claimAccount", () => {
      let {
        onClose: e
      } = this.props;
      null == e || e(), (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("69495")]).then(s.bind(s, "324239"));
        return t => (0, l.jsx)(e, {
          ...t
        })
      })
    })
  }
}
t.default = o