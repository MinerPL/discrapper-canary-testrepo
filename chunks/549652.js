"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
});
var s = n("735250"),
  a = n("470079"),
  i = n("593473"),
  l = n("442837"),
  r = n("544891"),
  u = n("536285"),
  o = n("703656"),
  d = n("314897"),
  c = n("285952"),
  f = n("819570"),
  p = n("981631"),
  m = n("689938"),
  g = n("727653"),
  h = n("794711");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
l.default.initialize();
let N = {
  HANDOFF: "handoff",
  DONE: "done",
  FAILED: "failed"
};

function T() {
  try {
    window.close()
  } catch (e) {}
}
class b extends a.PureComponent {
  componentDidMount() {
    let {
      stage: e,
      key: t
    } = this.state;
    e === N.DONE ? T() : d.default.isAuthenticated() ? r.HTTP.post({
      url: p.Endpoints.HANDOFF,
      body: {
        key: t
      },
      oldFormErrors: !0
    }).then(e => this.handoff(e.body.handoff_token), () => this.handoff()) : this.handoff()
  }
  handoff(e) {
    u.default.requestRedirect(p.RPCCommands.BROWSER_HANDOFF, {
      handoffToken: e,
      fingerprint: d.default.getFingerprint()
    }).then(this.done, this.failed)
  }
  renderDone() {
    return (0, s.jsxs)(f.default, {
      children: [(0, s.jsx)(f.Image, {
        src: n("69008"),
        className: h.marginBottom20
      }), (0, s.jsx)(f.Title, {
        className: h.marginBottom8,
        children: m.default.Messages.BROWSER_HANDOFF_DONE_TITLE
      }), (0, s.jsx)(f.SubTitle, {
        className: h.marginBottom40,
        children: m.default.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE
      }), (0, s.jsx)(f.Button, {
        onClick: this.handleOpenApp,
        children: m.default.Messages.CONTINUE_TO_WEBAPP
      })]
    })
  }
  renderFailed() {
    return (0, s.jsxs)(f.default, {
      children: [(0, s.jsx)(f.Image, {
        src: n("69008"),
        className: h.marginBottom20
      }), (0, s.jsx)(f.Title, {
        className: h.marginBottom8,
        children: m.default.Messages.BROWSER_HANDOFF_FAILED_TITLE
      }), (0, s.jsx)(f.SubTitle, {
        className: h.marginBottom40,
        children: m.default.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE
      }), (0, s.jsx)(f.Button, {
        onClick: this.handleOpenApp,
        children: m.default.Messages.CONTINUE_TO_WEBAPP
      })]
    })
  }
  renderHandoff() {
    return (0, s.jsxs)(f.default, {
      children: [(0, s.jsx)(f.AuthSpinner, {}), (0, s.jsx)(f.Title, {
        className: h.marginBottom8,
        children: m.default.Messages.BROWSER_HANDOFF_AUTHENTICATING_TITLE
      }), (0, s.jsx)(f.SubTitle, {
        children: m.default.Messages.BROWSER_HANDOFF_AUTHENTICATING_DESCRIPTION
      })]
    })
  }
  render() {
    let e;
    let {
      stage: t
    } = this.state;
    switch (t) {
      case N.DONE:
        e = this.renderDone();
        break;
      case N.FAILED:
        e = this.renderFailed();
        break;
      case N.HANDOFF:
      default:
        e = this.renderHandoff()
    }
    return (0, s.jsx)(c.default, {
      justify: c.default.Justify.CENTER,
      align: c.default.Align.CENTER,
      className: g.wrapper,
      children: e
    })
  }
  constructor(e) {
    var t;
    super(e), x(this, "done", () => {
      T(), this.setState({
        stage: N.DONE
      })
    }), x(this, "failed", () => {
      this.setState({
        stage: N.FAILED
      }), T()
    }), x(this, "handleOpenApp", () => {
      (0, o.transitionTo)(p.Routes.ME)
    });
    let {
      search: n
    } = e.location, s = null != n && "" !== n ? (0, i.parse)(n) : {};
    this.state = {
      key: null !== (t = s.key) && void 0 !== t ? t : "",
      stage: "true" === s.done ? N.DONE : N.HANDOFF
    }
  }
}