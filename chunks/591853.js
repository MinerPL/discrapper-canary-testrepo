"use strict";
n.r(t), n.d(t, {
  Popout: function() {
    return p
  },
  PopoutAvatar: function() {
    return _
  },
  PopoutHero: function() {
    return E
  },
  PopoutReactor: function() {
    return g
  },
  PopoutTitle: function() {
    return C
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("481060"),
  i = n("220779"),
  r = n("543241"),
  o = n("626135"),
  u = n("768581"),
  d = n("206295"),
  c = n("206583"),
  f = n("981631"),
  h = n("689938"),
  m = n("522791");

function p(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)("div", {
    className: m.popout,
    children: t
  })
}

function E(e) {
  let {
    children: t,
    backgroundImgSrc: n
  } = e, {
    primaryColor: l,
    secondaryColor: s
  } = (0, d.default)(n);
  return (0, a.jsx)("div", {
    className: m.hero,
    style: {
      background: "linear-gradient(45deg, ".concat(l, ", ").concat(s, ")")
    },
    children: t
  })
}

function C(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(s.Heading, {
    className: m.popoutTitle,
    variant: "heading-md/normal",
    color: "always-white",
    lineClamp: 3,
    children: t
  })
}

function g(e) {
  let {
    channel: t,
    onMessageReact: n,
    user: s
  } = e, [r, u] = l.useState(null), d = l.useRef(null), p = e => {
    null != e && null != r && (o.default.track(f.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
      surface_type: c.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
      channel_id: t.id,
      guild_id: t.guild_id
    }), r.insertEmoji(e, !1, !1), r.focus())
  };
  return (0, a.jsxs)("div", {
    className: m.reactionContainer,
    children: [(0, a.jsxs)("div", {
      className: m.emojiHotrail,
      children: [(0, a.jsx)(S, {
        channel: t,
        onClickSuggestion: p
      }), (0, a.jsx)(i.ReactionPickerButton, {
        onSelectEmoji: p
      })]
    }), (0, a.jsx)(i.ReplyInput, {
      ref: d,
      placeholder: h.default.Messages.TEXTAREA_PLACEHOLDER.format({
        channel: "@".concat(s.globalName)
      }),
      onEnter: n,
      setEditorRef: e => u(e),
      autoCompletePosition: (() => {
        if (null == d || null == d.current) return "top";
        let e = d.current.getBoundingClientRect(),
          t = window.innerHeight;
        return e.top < t / 2 ? "bottom" : "top"
      })()
    })]
  })
}
let S = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, l = (0, r.useFrequentlyUsedEmojis)(t.guild_id).slice(0, 5).map(e => null == e.id ? {
    emoji: e,
    url: e.url
  } : {
    emoji: e,
    url: (0, u.getEmojiURL)({
      id: e.id,
      animated: e.animated,
      size: 58
    })
  });
  return (0, a.jsx)(a.Fragment, {
    children: l.map(e => {
      let {
        emoji: t,
        url: l
      } = e;
      return null != l ? (0, a.jsx)(s.Clickable, {
        onClick: () => n(t),
        className: m.emojiSuggestionButton,
        children: (0, a.jsx)("img", {
          alt: t.name,
          src: l,
          className: m.emoji
        })
      }) : null
    })
  })
};

function _(e) {
  let {
    user: t,
    guildId: n
  } = e, l = t.getAvatarURL(n, 128);
  return (0, a.jsx)(s.Avatar, {
    src: l,
    size: s.AvatarSizes.SIZE_40,
    "aria-label": "avatar"
  })
}