"use strict";
n.r(t), n.d(t, {
  baseRules: function() {
    return A
  },
  customRules: function() {
    return m
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(302454),
  l = n.n(a),
  u = n(481060),
  _ = n(37234),
  d = n(230711),
  c = n(454585),
  E = n(703656),
  I = n(626135),
  T = n(981631),
  h = n(596401);
let S = l().defaultRules.link,
  f = {
    section: T.jXE.SETTINGS_CHANGELOG
  },
  N = e => {
    var t, n;
    let {
      level: i,
      children: s,
      className: a = null,
      styleSheet: l = {}
    } = e, _ = (0, u.usePrivateHeadingLevel)(), d = parseInt(i, 10), c = isNaN(d) ? 1 : d;
    return r.createElement("h".concat(_ + c - 1), {
      className: o()(...(t = l, null == (n = a) ? [] : n.split(" ").map(e => t[e])))
    }, s)
  },
  A = null != c.Z ? c.Z.defaultRules : null,
  m = {
    link: {
      parse(e, t, n) {
        let i;
        let r = e[2],
          s = r.startsWith("https://discordapp.com/nitro") || r.startsWith("https://discord.com/nitro"),
          o = r.startsWith("https://discordapp.com/hypesquad") || r.startsWith("https://discord.com/hypesquad"),
          a = r.startsWith("/shop/fullscreen?source=1") || r.startsWith("/activities");
        return i = s || o ? e => {
          I.default.track(T.rMx.PREMIUM_PROMOTION_OPENED, {
            location: f
          }), s ? d.Z.open(T.oAB.PREMIUM) : o && d.Z.open(T.oAB.HYPESQUAD_ONLINE), n.changeLog.track(T.rMx.CHANGE_LOG_CTA_CLICKED, {
            cta_type: "nitro"
          }), (0, u.closeModal)(h.Xd), e.preventDefault()
        } : a ? e => {
          (0, E.uL)(r), n.changeLog.track(T.rMx.CHANGE_LOG_CTA_CLICKED, {
            ...I.default.getCampaignParams(r)
          }), (0, _.Ou)(), (0, u.closeModal)(h.Xd), e.preventDefault()
        } : () => {
          n && "function" == typeof n.onLinkClick && n.onLinkClick(r), n.changeLog.track(T.rMx.CHANGE_LOG_CTA_CLICKED, {
            target: r,
            cta_type: "inline_link",
            ...I.default.getCampaignParams(r)
          })
        }, {
          ...S.parse(e, t, n),
          callToAction: i
        }
      },
      react: (e, t, n) => (0, i.jsx)(u.Anchor, {
        href: l().sanitizeUrl(e.target),
        title: e.title,
        onClick: e.callToAction,
        target: "_blank",
        className: e.callToAction ? "cta" : void 0,
        children: t(e.content, n)
      }, n.key)
    },
    lheading: e => ({
      react: (t, n, r) => (0, i.jsx)(N, {
        level: t.level,
        className: t.className,
        styleSheet: e,
        children: n(t.content, r)
      }, r.key)
    }),
    heading: {
      react: (e, t, n) => (0, i.jsx)(N, {
        level: e.level,
        children: t(e.content, n)
      }, n.key)
    },
    image: {
      react(e, t, r) {
        let s = n(595173)("./".concat(e.target));
        return (0, i.jsx)("img", {
          alt: e.alt,
          src: s
        }, r.key)
      }
    },
    blockQuote: {
      react: null == A ? void 0 : A.blockQuote.react
    },
    paragraph: {
      react: (e, t, n) => (0, i.jsx)("p", {
        children: t(e.content, n)
      }, n.key)
    }
  }