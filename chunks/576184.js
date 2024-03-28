"use strict";
r.r(s);
var t = r("735250"),
  a = r("470079"),
  o = r("803997"),
  l = r.n(o),
  d = r("613828"),
  n = r("481060"),
  c = r("710845"),
  i = r("361207"),
  u = r("954824"),
  m = r("981631"),
  p = r("689938"),
  h = r("968487");
let w = [{
    id: "discord",
    getName: () => p.default.Messages.DESKTOP_APP,
    url: (0, i.getCurrentPlatformDownloadURL)()
  }, {
    id: "chrome",
    getName: () => p.default.Messages.BROWSER_CHROME,
    url: "https://www.google.com/chrome/browser/desktop/"
  }, {
    id: "firefox",
    getName: () => p.default.Messages.BROWSER_FIREFOX,
    url: "https://www.mozilla.org/en-US/firefox/new/?scene=2"
  }],
  f = {
    discord: "browserDiscord",
    firefox: "browserFirefox",
    chrome: "browserChrome"
  };
class x extends a.Component {
  render() {
    let e;
    let {
      id: s,
      getName: r,
      url: a
    } = this.props.browser;
    return e = null != a ? (0, t.jsx)(n.Anchor, {
      className: h.btn,
      href: a,
      children: p.default.Messages.DOWNLOAD
    }) : (0, t.jsx)(d.Link, {
      className: h.btn,
      to: m.Routes.APPS,
      children: p.default.Messages.DOWNLOAD
    }), (0, t.jsxs)("li", {
      className: h.browserItem,
      children: [(0, t.jsx)("div", {
        className: l()(h.browserItemText, h.browser, h[f[s]])
      }), (0, t.jsx)("div", {
        className: h.browserItemText,
        children: r()
      }), e]
    })
  }
}
class g extends a.Component {
  componentDidMount() {
    u.default.launch("discord://" + this.props.location.pathname, e => {
      new c.default("UnsupportedBrowser").log("discord://", e)
    })
  }
  render() {
    let e = w.map(e => (0, t.jsx)(x, {
      browser: e
    }, e.id));
    return (0, t.jsx)("div", {
      className: h.unsupportedBrowser,
      children: (0, t.jsxs)("div", {
        className: h.wrap,
        children: [(0, t.jsx)(n.H, {
          className: h.title,
          children: p.default.Messages.UNSUPPORTED_BROWSER_TITLE
        }), (0, t.jsx)("p", {
          className: h.message,
          children: p.default.Messages.UNSUPPORTED_BROWSER_BODY
        }), (0, t.jsx)("ul", {
          className: h.browserList,
          children: e
        })]
      })
    })
  }
}
s.default = g