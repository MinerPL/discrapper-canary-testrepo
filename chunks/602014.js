"use strict";
n.r(t), n.d(t, {
  ClanSetupIntro: function() {
    return E
  },
  ClanSetupIntroAnimation: function() {
    return h
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("718017"),
  i = n("442837"),
  r = n("481060"),
  o = n("425493"),
  u = n("430824"),
  d = n("308083"),
  c = n("689938"),
  f = n("653196");
let E = e => {
    let {
      onClose: t,
      setPage: n
    } = e;
    return (0, a.jsxs)("div", {
      className: f.introContainer,
      children: [(0, a.jsx)(o.default, {
        closeAction: t,
        keybind: "ESC",
        className: f.closeIconButton,
        variant: o.default.Variants.SOLID
      }), (0, a.jsx)(r.Heading, {
        variant: "heading-xxl/semibold",
        className: f.header,
        children: c.default.Messages.CLAN_SETUP_INTRO_TITLE
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        className: f.header,
        children: c.default.Messages.CLAN_SETUP_INTRO_INFO
      }), (0, a.jsx)(r.Button, {
        onClick: () => n(d.ClanSetupModalPages.ANIMATE),
        children: c.default.Messages.CLAN_SETUP_INTRO_CTA
      })]
    })
  },
  h = e => {
    let {
      guildId: t,
      setPage: n
    } = e, o = s.useRef(null), E = s.useRef(null), h = (0, i.useStateFromStores)([u.default], () => {
      var e, n;
      return null !== (n = null === (e = u.default.getGuild(t)) || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : ""
    });
    s.useEffect(() => {
      setTimeout(() => {
        n(d.ClanSetupModalPages.SETUP)
      }, 2e3)
    });
    let _ = (0, l.useSpring)({
        ref: o,
        config: {
          duration: 500
        },
        from: {
          height: "20%"
        },
        to: {
          height: "100%"
        }
      }),
      C = (0, l.useSpring)({
        ref: E,
        config: {
          duration: 500
        },
        from: {
          opacity: 0
        },
        to: {
          opacity: 1
        }
      });
    return (0, l.useChain)([o, E]), (0, a.jsx)(l.animated.div, {
      className: f.animationContainer,
      children: (0, a.jsxs)(l.animated.div, {
        className: f.scrollContainer,
        style: _,
        children: [(0, a.jsxs)("div", {
          className: f.scrollBg,
          children: [(0, a.jsx)("div", {
            className: f.scrollBgTop
          }), (0, a.jsx)("div", {
            className: f.scrollBgBottom
          })]
        }), (0, a.jsxs)(l.animated.div, {
          className: f.overviewSidebarContent,
          style: C,
          children: [(0, a.jsx)(r.Heading, {
            variant: "heading-lg/semibold",
            color: "text-muted",
            className: f.overviewText,
            children: c.default.Messages.CLAN_SETUP_OVERVIEW_TITLE.format({
              guildName: h
            })
          }), (0, a.jsx)(r.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: f.overviewText,
            children: c.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_DEFAULT
          }), (0, a.jsx)(r.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: f.overviewText,
            children: c.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
          })]
        })]
      })
    })
  }