"use strict";
n.r(t), n.d(t, {
  Popout: function() {
    return $
  },
  PopoutContent: function() {
    return ei
  },
  PopoutInteractionsContainer: function() {
    return en
  },
  PopoutReactor: function() {
    return ea
  },
  StreamingPopoutContent: function() {
    return er
  },
  VoiceChannelPopoutReactor: function() {
    return eo
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r);
n("699581");
var u = n("442837"),
  d = n("524437"),
  c = n("692547"),
  f = n("662645"),
  h = n("176743"),
  m = n("465270"),
  p = n("788698"),
  E = n("718671"),
  C = n("352903"),
  g = n("690172"),
  S = n("481060"),
  _ = n("493683"),
  T = n("475179"),
  I = n("220779"),
  A = n("201133"),
  N = n("605236"),
  v = n("543241"),
  x = n("318374"),
  M = n("359110"),
  R = n("12168"),
  L = n("592125"),
  y = n("430824"),
  O = n("496675"),
  j = n("938475"),
  P = n("346656"),
  D = n("682864"),
  b = n("409216"),
  U = n("368666"),
  F = n("626135"),
  w = n("768581"),
  k = n("5192"),
  H = n("485267"),
  B = n("71585"),
  G = n("192918"),
  V = n("571243"),
  W = n("69259"),
  Y = n("206295"),
  z = n("111386"),
  K = n("43205"),
  Z = n("469153"),
  q = n("206583"),
  X = n("981631"),
  Q = n("689938"),
  J = n("50928");

function $(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, S.useFocusLock)(n), (0, a.jsx)("div", {
    className: J.popout,
    ref: n,
    children: t
  })
}

function ee(e) {
  let {
    children: t,
    backgroundImgSrc: n,
    style: l = {}
  } = e, {
    primaryColor: s,
    secondaryColor: r
  } = (0, Y.default)(n);
  return (0, a.jsx)("div", {
    className: i()(J.hero, "theme-".concat(X.ThemeTypes.DARK)),
    style: {
      background: "linear-gradient(45deg, ".concat(s, ", ").concat(r, ")"),
      ...l
    },
    children: t
  })
}
let et = l.createContext(null);

function en(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: J.interactionsContainerHeader,
      ref: e => n.current = e
    }), (0, a.jsx)("div", {
      className: J.interactionsContainer,
      children: (0, a.jsx)(et.Provider, {
        value: n.current,
        children: t
      })
    })]
  })
}

function ea(e) {
  let {
    channel: t,
    user: n,
    generateReactionImage: s,
    reactionImageAltText: i,
    closePopout: r,
    entry: c,
    requestId: h
  } = e, m = (0, u.useStateFromStores)([B.default], () => B.default.isChannelReplyMode()), [p, E] = l.useState(null), g = (0, u.useStateFromStores)([O.default], () => O.default.can(X.Permissions.SEND_MESSAGES, t)), T = (0, V.useIsEligibleForMemberlistOneClickReply)({
    location: "PopoutReactor"
  }), [v, x] = l.useState(!1), [M, R] = l.useState(!1), y = "#".concat(t.name), j = k.default.getName(t.guild_id, t.id, n), P = m ? Q.default.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : Q.default.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL, D = async e => {
    if (null != e) {
      if (F.default.track(X.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
          surface_type: q.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
          channel_id: t.id,
          guild_id: t.guild_id
        }), T) {
        let l;
        if ((0, N.markDismissibleContentAsDismissed)(d.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), x(!0), R(!1), m) l = t;
        else {
          var a;
          let e = await _.default.getOrEnsurePrivateChannel(n.id);
          l = null !== (a = L.default.getChannel(e)) && void 0 !== a ? a : null
        }
        return o()(null != l, "Send channel must be defined"), U({
          reply: ":".concat(e.name, ":"),
          sendToChannel: l,
          onComplete: () => {
            R(!0), setTimeout(() => {
              x(!1), r()
            }, 600)
          },
          interactionType: q.ContentInventoryInteractionTypes.REACTION_EMOJI_REACT_SENT
        })
      }
      null != p && (p.insertEmoji(e, !1, !1), p.focus())
    }
  }, b = async e => {
    let a;
    if (T && (0, N.markDismissibleContentAsDismissed)(d.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), m) a = t;
    else {
      let e = await _.default.openPrivateChannel(n.id, !1, !1),
        t = L.default.getChannel(e);
      o()(null != t, "DM channel must be defined"), a = t
    }
    let l = a.type === X.ChannelTypes.DM ? q.ContentInventoryInteractionTypes.DM_REACTION_MESSAGE_SENT : q.ContentInventoryInteractionTypes.CHANNEL_REACTION_MESSAGE_SENT;
    return U({
      reply: e,
      sendToChannel: a,
      onComplete: r,
      interactionType: l
    })
  }, U = async e => {
    let {
      reply: n,
      sendToChannel: a,
      onComplete: l,
      interactionType: r
    } = e, u = await s(a.id);
    o()(null != u, "Reaction image must be defined"), await (0, A.sendReply)({
      file: u,
      channel: a,
      altText: i,
      reply: n
    }), (0, W.trackInteraction)(r, {
      entry: c,
      channelId: t.id,
      guildId: t.guild_id,
      requestId: h,
      destinationChannelId: a.id,
      destinationGuildId: a.guild_id
    }), null == l || l()
  };
  return (0, a.jsxs)("div", {
    style: {
      pointerEvents: v ? "none" : "all"
    },
    children: [(0, a.jsx)(Z.default, {
      sent: M,
      shown: v,
      className: J.toastContainer
    }), T ? (0, a.jsx)(z.default, {
      children: (0, a.jsxs)("div", {
        className: J.emojiHotrailShareToChannel,
        children: [(0, a.jsx)(el, {
          channel: t,
          onClickSuggestion: D
        }), (0, a.jsx)(I.ReactionPickerButton, {
          onSelectEmoji: D
        })]
      })
    }) : (0, a.jsx)("div", {
      className: J.emojiHotrailShareToChannel,
      children: (0, a.jsx)(el, {
        channel: t,
        onClickSuggestion: D
      })
    }), (0, a.jsxs)("div", {
      className: J.inputContainerShareToChannel,
      children: [g && (0, a.jsx)(S.Tooltip, {
        text: P,
        children: e => (0, a.jsx)(S.Clickable, {
          ...e,
          className: J.shareToChannelButton,
          onClick: H.toggleContentInventoryReplyMode,
          children: m ? (0, a.jsx)(C.TextIcon, {
            width: 20,
            height: 20
          }) : (0, a.jsx)(f.AtIcon, {
            width: 20,
            height: 20
          })
        })
      }), (0, a.jsx)(I.ReplyInput, {
        placeholder: Q.default.Messages.TEXTAREA_PLACEHOLDER.format({
          channel: m ? y : "@".concat(j)
        }),
        onEnter: b,
        setEditorRef: e => E(e),
        channel: m ? t : void 0
      })]
    })]
  })
}
let el = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, l = (0, v.useFrequentlyUsedEmojis)(t.guild_id).slice(0, 5).map(e => null == e.id ? {
    emoji: e,
    url: e.url
  } : {
    emoji: e,
    url: (0, w.getEmojiURL)({
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
      return null != l ? (0, a.jsx)("div", {
        children: (0, a.jsx)(S.TooltipContainer, {
          text: Q.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          position: "top",
          "aria-label": Q.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          color: S.Tooltip.Colors.PRIMARY,
          children: (0, a.jsx)(R.HotBarEmoji, {
            emoji: t,
            isDisabled: !1,
            onClick: () => n(t),
            className: J.emoji
          })
        })
      }, t.name) : null
    })
  })
};

function es(e) {
  let {
    channel: t,
    userDescription: n,
    headerIcons: s,
    entry: i
  } = e, r = t.guild_id, o = (0, G.default)(i), u = l.useMemo(() => o.slice(-3), [o]), d = o[o.length - 1], c = o[o.length - 2];
  return (0, a.jsxs)("div", {
    className: J.popoutContentHeader,
    children: [(0, a.jsxs)("div", {
      className: J.popoutUserContainer,
      children: [(0, a.jsx)(x.default, {
        maxUsers: 3,
        users: u,
        size: S.AvatarSizes.SIZE_24,
        avatarClassName: J.popoutStackedAvatar,
        hideOverflowCount: !0,
        disableUsernameTooltip: !0
      }), (0, a.jsx)(D.default, {
        size: 8,
        horizontal: !0
      }), (0, a.jsx)(S.Heading, {
        variant: "heading-sm/normal",
        color: "text-secondary",
        children: n.format({
          user1: k.default.getName(r, t.id, d),
          user2: k.default.getName(r, t.id, c),
          countOthers: o.length - 1,
          nameHook: (e, t) => (0, a.jsx)(S.Text, {
            variant: "text-sm/medium",
            color: "header-primary",
            className: J.popoutUsername,
            children: e
          }, t)
        })
      })]
    }), s]
  })
}

function ei(e) {
  let {
    thumbnailSrc: t,
    title: n,
    subtitle: l,
    badges: s,
    ...i
  } = e;
  return (0, a.jsxs)(ee, {
    backgroundImgSrc: t,
    children: [(0, a.jsx)(es, {
      ...i
    }), (0, a.jsx)(D.default, {
      size: 16
    }), (0, a.jsxs)("div", {
      className: J.popoutContentBody,
      children: [(0, a.jsx)("div", {
        className: J.popoutThumbnailContainer,
        children: (0, a.jsx)(K.ContentImage, {
          size: 72,
          src: t,
          className: J.contentImage
        })
      }), (0, a.jsx)(D.default, {
        size: 16,
        horizontal: !0
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(S.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          lineClamp: 3,
          children: n
        }), null != l ? (0, a.jsx)(S.Text, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: l
        }) : null, (0, a.jsx)(D.default, {
          size: 8
        }), s]
      })]
    })]
  })
}

function er(e) {
  let {
    title: t,
    badges: n,
    streamPreviewSrc: l,
    ...s
  } = e;
  return (0, a.jsxs)(ee, {
    style: {
      background: "linear-gradient(45deg, #24282B, #1A2020)"
    },
    children: [(0, a.jsx)(es, {
      ...s,
      headerIcons: (0, a.jsx)(U.default, {
        size: U.default.Sizes.SMALL
      })
    }), (0, a.jsx)(D.default, {
      size: 16
    }), (0, a.jsx)("img", {
      src: l,
      className: J.popoutStreamImg,
      alt: ""
    }), (0, a.jsx)(D.default, {
      size: 16
    }), (0, a.jsx)(S.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      lineClamp: 3,
      children: t
    }), (0, a.jsx)(D.default, {
      size: 8
    }), n]
  })
}

function eo(e) {
  let {
    user: t,
    entry: n,
    voiceChannel: s,
    channel: i,
    requestId: r,
    reactionImageAltText: d,
    generateReactionImage: f,
    isStreaming: C = !1
  } = e, N = k.default.getName(i.guild_id, i.id, t), [v, x] = l.useState(!1), R = (0, u.useStateFromStores)([y.default], () => y.default.getGuild(s.guild_id)), O = (0, u.useStateFromStoresArray)([j.default], () => j.default.getVoiceStatesForChannel(s), [s]), D = async e => {
    let a = await _.default.openPrivateChannel(t.id, !1, !1),
      l = L.default.getChannel(a);
    o()(null != l, "DM channel must be defined");
    let s = await f(l.id);
    o()(null != s, "Reaction image must be defined"), await (0, A.sendReply)({
      file: s,
      channel: l,
      altText: d,
      reply: e
    }), (0, W.trackInteraction)(q.ContentInventoryInteractionTypes.DM_REACTION_MESSAGE_SENT, {
      entry: n,
      channelId: i.id,
      guildId: i.guild_id,
      requestId: r
    })
  };
  return null == R ? null : (0, a.jsxs)("div", {
    children: [(0, a.jsxs)("div", {
      className: J.voiceChannelPopoutReactorHeader,
      children: [(0, a.jsxs)("div", {
        className: J.voiceChannelPopoutReactorChannel,
        children: [(0, a.jsx)(P.default, {
          guild: R,
          size: P.default.Sizes.SMOL,
          className: J.voiceChannelGuildIcon,
          active: !0
        }), (0, a.jsx)(m.ChevronSmallRightIcon, {
          width: 12,
          height: 12,
          color: c.default.colors.INTERACTIVE_NORMAL
        }), (0, a.jsx)(g.VoiceNormalIcon, {
          width: 16,
          height: 16,
          color: c.default.colors.TEXT_NORMAL
        }), (0, a.jsx)(S.Text, {
          variant: "text-sm/medium",
          color: "text-normal",
          children: s.name
        })]
      }), (0, a.jsx)(b.default, {
        guildId: R.id,
        users: O,
        max: 3,
        renderUser: (e, t) => (0, a.jsx)(S.Avatar, {
          src: e.user.getAvatarURL(R.id, 16),
          size: S.AvatarSizes.SIZE_16,
          "aria-label": "avatar",
          className: t
        }),
        renderMoreUsers: e => (0, a.jsx)("div", {
          className: J.voiceChannelAdditionalParticipants,
          children: (0, a.jsx)(S.Text, {
            variant: "text-xxs/semibold",
            color: "text-normal",
            children: e
          })
        })
      })]
    }), (0, a.jsx)("div", {
      className: J.voicePopoutDivider
    }), v ? (0, a.jsx)(I.ReplyInput, {
      placeholder: Q.default.Messages.TEXTAREA_PLACEHOLDER.format({
        channel: "@".concat(N)
      }),
      onEnter: D,
      showEmojiButton: !0,
      renderAttachButton: () => (0, a.jsx)(S.Clickable, {
        onClick: () => x(!1),
        className: J.voicePopoutMessageCloseIcon,
        children: (0, a.jsx)(p.CloseSmallIcon, {
          width: 20,
          height: 20,
          color: c.default.colors.ICON_PRIMARY
        })
      })
    }) : (0, a.jsxs)("div", {
      className: J.voicePopoutActionButtons,
      children: [(0, a.jsxs)(S.Button, {
        className: J.secondaryButton,
        color: S.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: () => x(!0),
        innerClassName: J.iconButton,
        size: S.Button.Sizes.LARGE,
        children: [(0, a.jsx)(h.ChatIcon, {
          width: 20,
          height: 20,
          colorClass: J.secondaryText
        }), (0, a.jsx)(S.Text, {
          variant: "text-md/semibold",
          className: J.secondaryText,
          children: Q.default.Messages.USER_POPOUT_MESSAGE
        })]
      }), (0, a.jsxs)(S.Button, {
        color: S.Button.Colors.GREEN,
        onClick: () => {
          T.default.updateChatOpen(s.id, !0), (0, M.transitionToChannel)(s.id), (0, W.trackInteraction)(q.ContentInventoryInteractionTypes.VOICE_CHANNEL_PREVIEWED, {
            entry: n,
            channelId: i.id,
            guildId: i.guild_id,
            requestId: r,
            destinationChannelId: s.id,
            destinationGuildId: s.guild_id
          })
        },
        fullWidth: !0,
        innerClassName: J.iconButton,
        size: S.Button.Sizes.LARGE,
        children: [C ? (0, a.jsx)(E.ScreenIcon, {
          width: 20,
          height: 20,
          color: c.default.colors.WHITE
        }) : (0, a.jsx)(g.VoiceNormalIcon, {
          width: 20,
          height: 20,
          color: c.default.colors.WHITE
        }), (0, a.jsx)(S.Text, {
          variant: "text-md/semibold",
          color: "always-white",
          children: Q.default.Messages.PREVIEW
        })]
      })]
    })]
  })
}