"use strict";
a.r(t), a.d(t, {
  baseRules: function() {
    return v
  },
  customRules: function() {
    return L
  }
}), a("47120");
var n = a("735250"),
  l = a("470079"),
  s = a("803997"),
  r = a.n(s),
  o = a("302454"),
  i = a.n(o),
  c = a("481060"),
  u = a("37234"),
  d = a("230711"),
  h = a("454585"),
  p = a("703656"),
  g = a("626135"),
  f = a("981631"),
  C = a("596401");
let m = i().defaultRules.link,
  x = {
    section: f.AnalyticsSections.SETTINGS_CHANGELOG
  },
  _ = e => {
    var t, a;
    let {
      level: n,
      children: s,
      className: o = null,
      styleSheet: i = {}
    } = e, u = (0, c.usePrivateHeadingLevel)(), d = parseInt(n, 10), h = isNaN(d) ? 1 : d;
    return l.createElement("h".concat(u + h - 1), {
      className: r()(...(t = i, null == (a = o) ? [] : a.split(" ").map(e => t[e])))
    }, s)
  },
  v = h.default.defaultRules,
  L = {
    link: {
      parse(e, t, a) {
        let n;
        let l = e[2],
          s = l.startsWith("https://discordapp.com/nitro") || l.startsWith("https://discord.com/nitro"),
          r = l.startsWith("https://discordapp.com/hypesquad") || l.startsWith("https://discord.com/hypesquad"),
          o = l.startsWith("/shop/fullscreen?source=1") || l.startsWith("/activities");
        return n = s || r ? e => {
          g.default.track(f.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
            location: x
          }), s ? d.default.open(f.UserSettingsSections.PREMIUM) : r && d.default.open(f.UserSettingsSections.HYPESQUAD_ONLINE), a.changeLog.track(f.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
            cta_type: "nitro"
          }), (0, c.closeModal)(C.CHANGELOG_MODAL_KEY), e.preventDefault()
        } : o ? e => {
          (0, p.transitionTo)(l), a.changeLog.track(f.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
            ...g.default.getCampaignParams(l)
          }), (0, u.popAllLayers)(), (0, c.closeModal)(C.CHANGELOG_MODAL_KEY), e.preventDefault()
        } : () => {
          a && "function" == typeof a.onLinkClick && a.onLinkClick(l), a.changeLog.track(f.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
            ...g.default.getCampaignParams(l)
          })
        }, {
          ...m.parse(e, t, a),
          callToAction: n
        }
      },
      react: (e, t, a) => (0, n.jsx)(c.Anchor, {
        href: i().sanitizeUrl(e.target),
        title: e.title,
        onClick: e.callToAction,
        target: "_blank",
        className: e.callToAction ? "cta" : void 0,
        children: t(e.content, a)
      }, a.key)
    },
    lheading: e => ({
      react: (t, a, l) => (0, n.jsx)(_, {
        level: t.level,
        className: t.className,
        styleSheet: e,
        children: a(t.content, l)
      }, l.key)
    }),
    heading: {
      react: (e, t, a) => (0, n.jsx)(_, {
        level: e.level,
        children: t(e.content, a)
      }, a.key)
    },
    image: {
      react(e, t, l) {
        let s = a("302731")("../../images/change-log/".concat(e.target).replace("../../images/change-log/", "./"));
        return (0, n.jsx)("img", {
          alt: e.alt,
          src: s
        }, l.key)
      }
    },
    blockQuote: {
      react: v.blockQuote.react
    },
    paragraph: {
      react: (e, t, a) => (0, n.jsx)("p", {
        children: t(e.content, a)
      }, a.key)
    }
  }