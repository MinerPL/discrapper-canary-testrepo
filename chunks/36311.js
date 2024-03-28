"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("749210"),
  d = n("594174"),
  c = n("499371"),
  f = n("63063"),
  h = n("981631"),
  m = n("689938"),
  p = n("354942");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class C extends l.PureComponent {
  componentDidMount() {
    let {
      current: e
    } = this.scroller;
    null == e || e.scrollToBottom()
  }
  render() {
    let {
      nsfwDisallowed: e
    } = this.props, t = m.default.Messages.NSFW_DESCRIPTION;
    t = e ? m.default.Messages.AGE_GATE_NSFW_UNDERAGE_BODY.format({
      helpURL: f.default.getArticleURL(h.HelpdeskArticles.NSFW_AGE_GATING)
    }) : m.default.Messages.AGE_GATE_NSFW_DESCRIPTION;
    let n = e ? (0, a.jsx)(c.default, {
      onAgree: this.handleAgree,
      onDisagree: this.handleDisagree,
      title: m.default.Messages.AGE_GATE_NSFW_UNDERAGE_HEADER,
      description: t,
      agreement: null,
      disagreement: m.default.Messages.BACK,
      imageClassName: p.ageGatedImage
    }) : (0, a.jsx)(c.default, {
      onAgree: this.handleAgree,
      onDisagree: this.handleDisagree,
      title: m.default.Messages.NSFW_TITLE,
      description: t,
      agreement: m.default.Messages.NSFW_ACCEPT,
      disagreement: m.default.Messages.NSFW_DECLINE
    });
    return (0, a.jsx)(o.AdvancedScroller, {
      ref: this.scroller,
      className: p.scroller,
      children: (0, a.jsx)("div", {
        className: i()(this.props.className, p.wrapper),
        children: n
      })
    })
  }
  constructor(...e) {
    super(...e), E(this, "scroller", l.createRef()), E(this, "handleDisagree", () => {
      let {
        guild: e
      } = this.props;
      null != e && u.default.nsfwReturnToSafety(e.id)
    }), E(this, "handleAgree", () => {
      let {
        guild: e
      } = this.props;
      null != e && u.default.nsfwAgree(e.id)
    })
  }
}
t.default = r.default.connectStores([d.default], () => {
  var e;
  return {
    nsfwDisallowed: (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) === !1
  }
})(C)