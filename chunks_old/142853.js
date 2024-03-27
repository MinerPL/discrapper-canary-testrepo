"use strict";
n.r(t), n.d(t, {
  Popout: function() {
    return p
  },
  PopoutHero: function() {
    return E
  },
  PopoutTitle: function() {
    return g
  },
  PopoutReactor: function() {
    return S
  },
  PopoutAvatar: function() {
    return _
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("77078"),
  i = n("945701"),
  r = n("788506"),
  u = n("599110"),
  o = n("315102"),
  d = n("674567"),
  c = n("709377"),
  f = n("49111"),
  h = n("782340"),
  m = n("782689");

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

function g(e) {
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

function S(e) {
  let {
    channel: t,
    onMessageReact: n,
    user: s
  } = e, [r, o] = l.useState(null), d = e => {
    null != e && null != r && (u.default.track(f.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
      surface_type: c.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
      channel_id: t.id,
      guild_id: t.guild_id
    }), r.insertEmoji(e, !1, !1), r.focus())
  };
  return (0, a.jsxs)("div", {
    className: m.reactionContainer,
    children: [(0, a.jsxs)("div", {
      className: m.emojiHotrail,
      children: [(0, a.jsx)(C, {
        channel: t,
        onClickSuggestion: d
      }), (0, a.jsx)(i.ReactionPickerButton, {
        onSelectEmoji: d
      })]
    }), (0, a.jsx)(i.ReplyInput, {
      placeholder: h.default.Messages.TEXTAREA_PLACEHOLDER.format({
        channel: "@".concat(s.globalName)
      }),
      onEnter: n,
      setEditorRef: e => o(e)
    })]
  })
}
let C = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, l = (0, r.useFrequentlyUsedEmojis)(t.guild_id), i = l.slice(0, 5).map(e => null == e.id ? {
    emoji: e,
    url: e.url
  } : {
    emoji: e,
    url: (0, o.getEmojiURL)({
      id: e.id,
      animated: e.animated,
      size: 58
    })
  });
  return (0, a.jsx)(a.Fragment, {
    children: i.map(e => {
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