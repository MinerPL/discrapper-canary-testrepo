"use strict";
n.r(t), n.d(t, {
  baseRules: function() {
    return v
  },
  customRules: function() {
    return L
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  r = n.n(s),
  o = n("404828"),
  i = n.n(o),
  c = n("77078"),
  u = n("54239"),
  d = n("79112"),
  h = n("367376"),
  p = n("393414"),
  g = n("599110"),
  f = n("49111"),
  C = n("234222");
let m = i.defaultRules.link,
  x = {
    section: f.AnalyticsSections.SETTINGS_CHANGELOG
  },
  _ = e => {
    var t, n;
    let {
      level: a,
      children: s,
      className: o = null,
      styleSheet: i = {}
    } = e, u = (0, c.usePrivateHeadingLevel)(), d = parseInt(a, 10), h = isNaN(d) ? 1 : d;
    return l.createElement("h".concat(u + h - 1), {
      className: r(...(t = i, null == (n = o) ? [] : n.split(" ").map(e => t[e])))
    }, s)
  },
  v = h.default.defaultRules,
  L = {
    link: {
      parse(e, t, n) {
        let a;
        let l = e[2],
          s = l.startsWith("https://discordapp.com/nitro") || l.startsWith("https://discord.com/nitro"),
          r = l.startsWith("https://discordapp.com/hypesquad") || l.startsWith("https://discord.com/hypesquad"),
          o = l.startsWith("/shop/fullscreen?source=1") || l.startsWith("/activities");
        return a = s || r ? e => {
          g.default.track(f.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
            location: x
          }), s ? d.default.open(f.UserSettingsSections.PREMIUM) : r && d.default.open(f.UserSettingsSections.HYPESQUAD_ONLINE), n.changeLog.track(f.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
            cta_type: "nitro"
          }), (0, c.closeModal)(C.CHANGELOG_MODAL_KEY), e.preventDefault()
        } : o ? e => {
          (0, p.transitionTo)(l), n.changeLog.track(f.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
            ...g.default.getCampaignParams(l)
          }), (0, u.popAllLayers)(), (0, c.closeModal)(C.CHANGELOG_MODAL_KEY), e.preventDefault()
        } : () => {
          n && "function" == typeof n.onLinkClick && n.onLinkClick(l), n.changeLog.track(f.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
            ...g.default.getCampaignParams(l)
          })
        }, {
          ...m.parse(e, t, n),
          callToAction: a
        }
      },
      react(e, t, n) {
        let l = (0, a.jsx)(c.Anchor, {
          href: i.sanitizeUrl(e.target),
          title: e.title,
          onClick: e.callToAction,
          target: "_blank",
          className: e.callToAction ? "cta" : void 0,
          children: t(e.content, n)
        }, n.key);
        return l
      }
    },
    lheading: e => ({
      react: (t, n, l) => (0, a.jsx)(_, {
        level: t.level,
        className: t.className,
        styleSheet: e,
        children: n(t.content, l)
      }, l.key)
    }),
    heading: {
      react: (e, t, n) => (0, a.jsx)(_, {
        level: e.level,
        children: t(e.content, n)
      }, n.key)
    },
    image: {
      react(e, t, l) {
        let s = n("291802")("../../images/change-log/".concat(e.target).replace("../../images/change-log/", "./"));
        return (0, a.jsx)("img", {
          alt: e.alt,
          src: s
        }, l.key)
      }
    },
    blockQuote: {
      react: v.blockQuote.react
    },
    paragraph: {
      react: (e, t, n) => (0, a.jsx)("p", {
        children: t(e.content, n)
      }, n.key)
    }
  }