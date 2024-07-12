n.r(t), n.d(t, {
  baseRules: function() {
return g;
  },
  customRules: function() {
return S;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(302454),
  l = n.n(s),
  u = n(481060),
  c = n(37234),
  d = n(230711),
  _ = n(454585),
  E = n(703656),
  f = n(626135),
  h = n(981631),
  p = n(596401);
let m = l().defaultRules.link,
  I = {
section: h.jXE.SETTINGS_CHANGELOG
  },
  T = e => {
var t, n;
let {
  level: r,
  children: a,
  className: s = null,
  styleSheet: l = {}
} = e, c = (0, u.usePrivateHeadingLevel)(), d = parseInt(r, 10), _ = isNaN(d) ? 1 : d;
return i.createElement('h'.concat(c + _ - 1), {
  className: o()(...(t = l, null == (n = s) ? [] : n.split(' ').map(e => t[e])))
}, a);
  },
  g = null != _.Z ? _.Z.defaultRules : null,
  S = {
link: {
  parse(e, t, n) {
    let r;
    let i = e[2],
      a = i.startsWith('https://discordapp.com/nitro') || i.startsWith('https://discord.com/nitro'),
      o = i.startsWith('https://discordapp.com/hypesquad') || i.startsWith('https://discord.com/hypesquad'),
      s = i.startsWith('/shop/fullscreen?source=1') || i.startsWith('/activities');
    return r = a || o ? e => {
      f.default.track(h.rMx.PREMIUM_PROMOTION_OPENED, {
        location: I
      }), a ? d.Z.open(h.oAB.PREMIUM) : o && d.Z.open(h.oAB.HYPESQUAD_ONLINE), n.changeLog.track(h.rMx.CHANGE_LOG_CTA_CLICKED, {
        cta_type: 'nitro'
      }), (0, u.closeModal)(p.Xd), e.preventDefault();
    } : s ? e => {
      (0, E.uL)(i), n.changeLog.track(h.rMx.CHANGE_LOG_CTA_CLICKED, {
        ...f.default.getCampaignParams(i)
      }), (0, c.Ou)(), (0, u.closeModal)(p.Xd), e.preventDefault();
    } : () => {
      n && 'function' == typeof n.onLinkClick && n.onLinkClick(i), n.changeLog.track(h.rMx.CHANGE_LOG_CTA_CLICKED, {
        target: i,
        cta_type: 'inline_link',
        ...f.default.getCampaignParams(i)
      });
    }, {
      ...m.parse(e, t, n),
      callToAction: r
    };
  },
  react: (e, t, n) => (0, r.jsx)(u.Anchor, {
    href: l().sanitizeUrl(e.target),
    title: e.title,
    onClick: e.callToAction,
    target: '_blank',
    className: e.callToAction ? 'cta' : void 0,
    children: t(e.content, n)
  }, n.key)
},
lheading: e => ({
  react: (t, n, i) => (0, r.jsx)(T, {
    level: t.level,
    className: t.className,
    styleSheet: e,
    children: n(t.content, i)
  }, i.key)
}),
heading: {
  react: (e, t, n) => (0, r.jsx)(T, {
    level: e.level,
    children: t(e.content, n)
  }, n.key)
},
image: {
  react(e, t, i) {
    let a = n(595173)('./'.concat(e.target));
    return (0, r.jsx)('img', {
      alt: e.alt,
      src: a
    }, i.key);
  }
},
blockQuote: {
  react: null == g ? void 0 : g.blockQuote.react
},
paragraph: {
  react: (e, t, n) => (0, r.jsx)('p', {
    children: t(e.content, n)
  }, n.key)
}
  };