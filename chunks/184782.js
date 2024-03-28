"use strict";
a.r(l), a("653041");
var t = a("735250"),
  n = a("470079"),
  i = a("442837"),
  s = a("481060"),
  o = a("596454"),
  d = a("471445"),
  c = a("339085"),
  r = a("633302"),
  u = a("703656"),
  m = a("592125"),
  E = a("430824"),
  h = a("496675"),
  f = a("940627"),
  _ = a("346656"),
  C = a("153124"),
  N = a("259580"),
  j = a("93879"),
  p = a("806519"),
  x = a("626135"),
  S = a("524329"),
  g = a("995532"),
  I = a("845606"),
  k = a("981631"),
  O = a("231338"),
  v = a("689938"),
  L = a("114275");
let T = e => {
  var l;
  let {
    channelData: a,
    onClose: n,
    trackOptionClick: E
  } = e, f = (0, i.useStateFromStores)([m.default], () => m.default.getChannel(a.channel_id)), _ = (0, i.useStateFromStores)([h.default], () => null != f && h.default.can(O.Permissions.VIEW_CHANNEL, f)), C = (0, i.useStateFromStores)([c.default], () => null != a.emoji_id ? c.default.getCustomEmojiById(a.emoji_id) : null, [a.emoji_id]), p = null != a.emoji_name ? r.default.getByName(r.default.convertSurrogateToName(a.emoji_name, !1)) : null, x = null !== (l = (0, d.getChannelIconComponent)(f)) && void 0 !== l ? l : j.default;
  return null != f && _ ? (0, t.jsxs)(s.Clickable, {
    className: L.optionContainer,
    onClick: () => {
      E(), n(), (0, u.transitionToGuild)(f.guild_id, f.id)
    },
    children: [null != C || null != p ? (0, t.jsx)(o.default, {
      emojiName: null != a.emoji_id ? null == C ? void 0 : C.name : a.emoji_name,
      animated: null != C && C.animated,
      emojiId: null == C ? void 0 : C.id,
      autoplay: !0,
      className: L.optionEmoji
    }) : (0, t.jsx)(x, {
      className: L.channelIcon
    }), (0, t.jsxs)("div", {
      className: L.optionTextContainer,
      children: [(0, t.jsx)(s.Text, {
        variant: "text-md/normal",
        className: L.channelDescription,
        children: a.description
      }), (0, t.jsxs)(s.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: [(0, t.jsx)(x, {
          className: L.channelTitleIcon,
          height: 12,
          width: 12
        }), (0, t.jsx)("span", {
          children: f.name
        })]
      })]
    }), (0, t.jsx)(N.default, {
      direction: N.default.Directions.RIGHT,
      className: L.optionArrow
    })]
  }) : null
};
l.default = e => {
  var l;
  let {
    onClose: a,
    transitionState: o,
    guildId: d,
    isPreview: c
  } = e, r = (0, i.useStateFromStores)([E.default], () => E.default.getGuild(d)), {
    welcomeScreen: u,
    fetching: m,
    hasError: h
  } = (0, i.useStateFromStoresObject)([g.default], () => ({
    welcomeScreen: g.default.get(d),
    fetching: g.default.isFetching(),
    hasError: g.default.hasError()
  })), N = (0, C.useUID)();
  n.useEffect(() => {
    null == u && (0, S.fetchWelcomeScreen)(d)
  }, [d, u]), n.useEffect(() => {
    !1 === m && !0 === h && null == u && a()
  }, [m, h, a, u]), n.useEffect(() => {
    u === g.NO_WELCOME_SCREEN && !1 === m && a()
  }, [a, u, m]), n.useEffect(() => {
    !0 !== c && x.default.track(k.AnalyticEvents.OPEN_MODAL, {
      type: I.WELCOME_SCREEN_TYPE,
      guild_id: d
    })
  }, [d, c]);
  let j = n.useCallback(e => {
    var l;
    if (null == u || !0 === c) return;
    let a = [],
      t = [],
      n = !1;
    null === (l = u.welcome_channels) || void 0 === l || l.forEach(e => {
      a.push(e.description), t.push(e.channel_id), null != e.emoji_id && (n = !0)
    }), x.default.track(k.AnalyticEvents.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
      index: e,
      guild_id: d,
      options: a,
      options_channel_ids: t,
      guild_description: u.description,
      has_custom_emojis: n
    })
  }, [d, c, u]);
  return null == r ? null : null == u ? (0, t.jsx)(s.ModalRoot, {
    transitionState: o,
    className: L.main,
    "aria-label": v.default.Messages.LOADING,
    children: (0, t.jsx)(s.Spinner, {
      type: s.Spinner.Type.SPINNING_CIRCLE
    })
  }) : (0, t.jsxs)(s.ModalRoot, {
    transitionState: o,
    className: L.main,
    "aria-labelledby": N,
    children: [(0, t.jsx)(s.ModalCloseButton, {
      onClick: a,
      className: L.close
    }), (0, t.jsx)(p.default, {
      mask: p.default.Masks.SQUIRCLE,
      width: 64,
      height: 64,
      className: L.guildIcon,
      children: (0, t.jsx)(_.default, {
        size: _.default.Sizes.LARGER,
        guild: r,
        active: !0,
        animate: !0,
        tabIndex: -1
      })
    }), (0, t.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      className: L.header,
      id: N,
      children: v.default.Messages.WELCOME_SCREEN_TITLE.format({
        guildName: r.name,
        guildNameHook: (e, l) => (0, t.jsxs)("span", {
          children: [(0, t.jsx)(f.default, {
            guild: r,
            className: L.headerGuildBadge,
            flowerStarClassName: L.flowerStar,
            tooltipColor: s.Tooltip.Colors.PRIMARY
          }), (0, t.jsx)("strong", {
            className: L.headerGuildName,
            children: e
          })]
        }, l)
      })
    }), null != u.description ? (0, t.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      className: L.guildDescription,
      children: u.description
    }) : null, (0, t.jsx)(s.FormTitle, {
      className: L.choiceHeader,
      children: v.default.Messages.WELCOME_SCREEN_CHOICE_HEADER
    }), (0, t.jsx)("div", {
      className: L.options,
      children: null === (l = u.welcome_channels) || void 0 === l ? void 0 : l.map((e, l) => (0, t.jsx)(T, {
        channelData: e,
        trackOptionClick: () => j(l),
        onClose: a
      }, "".concat(e.channel_id, "-").concat(l)))
    }), (0, t.jsx)(s.Button, {
      look: s.Button.Looks.LINK,
      color: L.skipColor,
      className: L.skip,
      onClick: a,
      children: v.default.Messages.WELCOME_SCREEN_SKIP
    })]
  })
}