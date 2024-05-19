"use strict";
n.r(t), n.d(t, {
  Popout: function() {
    return el
  },
  PopoutContent: function() {
    return ef
  },
  PopoutInteractionsContainer: function() {
    return er
  },
  PopoutReactor: function() {
    return eo
  },
  StreamingPopoutContent: function() {
    return eh
  },
  VoiceChannelPopoutReactor: function() {
    return em
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r);
n("699581");
var u = n("194048"),
  d = n("442837"),
  c = n("524437"),
  f = n("692547"),
  h = n("662645"),
  m = n("176743"),
  p = n("465270"),
  E = n("788698"),
  C = n("718671"),
  g = n("352903"),
  S = n("690172"),
  _ = n("481060"),
  T = n("493683"),
  I = n("475179"),
  A = n("607070"),
  N = n("220779"),
  v = n("201133"),
  x = n("605236"),
  M = n("543241"),
  R = n("318374"),
  y = n("359110"),
  L = n("12168"),
  O = n("592125"),
  j = n("430824"),
  P = n("496675"),
  D = n("699516"),
  b = n("9156"),
  U = n("938475"),
  F = n("346656"),
  w = n("682864"),
  k = n("409216"),
  B = n("368666"),
  H = n("626135"),
  G = n("768581"),
  V = n("5192"),
  W = n("485267"),
  Y = n("71585"),
  z = n("192918"),
  K = n("571243"),
  Z = n("69259"),
  q = n("206295"),
  X = n("111386"),
  Q = n("43205"),
  J = n("469153"),
  $ = n("206583"),
  ee = n("981631"),
  et = n("689938"),
  en = n("936183");

function ea(e) {
  return async function() {
    for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
    try {
      return await e(...n)
    } catch (e) {
      throw e
    }
  }
}

function el(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, _.useFocusLock)(n), (0, a.jsx)("div", {
    className: en.popout,
    ref: n,
    children: t
  })
}

function es(e) {
  let {
    children: t,
    backgroundImgSrc: n,
    className: l,
    style: s = {}
  } = e, {
    primaryColor: r,
    secondaryColor: o
  } = (0, q.default)(n);
  return (0, a.jsx)("div", {
    className: i()(en.hero, "theme-".concat(ee.ThemeTypes.DARK), l),
    style: {
      background: "linear-gradient(45deg, ".concat(r, ", ").concat(o, ")"),
      ...s
    },
    children: t
  })
}
let ei = l.createContext(null);

function er(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: en.interactionsContainerHeader,
      ref: e => n.current = e
    }), (0, a.jsx)("div", {
      className: en.interactionsContainer,
      children: (0, a.jsx)(ei.Provider, {
        value: n.current,
        children: t
      })
    })]
  })
}

function eo(e) {
  let {
    channel: t,
    user: n,
    generateReactionImage: s,
    reactionImageAltText: i,
    closePopout: r,
    entry: u,
    requestId: f
  } = e, m = (0, d.useStateFromStores)([Y.default], () => Y.default.isChannelReplyMode()), [p, E] = l.useState(null), C = (0, d.useStateFromStores)([P.default], () => P.default.can(ee.Permissions.SEND_MESSAGES, t)), S = (0, K.useIsEligibleForMemberlistOneClickReply)({
    location: "PopoutReactor"
  }), [I, A] = l.useState(!1), [M, R] = l.useState(!1), y = "#".concat(t.name), L = V.default.getName(t.guild_id, t.id, n), j = m ? et.default.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : et.default.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL, D = async e => {
    if (null != e) {
      if (H.default.track(ee.AnalyticEvents.CONTENT_POPOUT_EMOJI_CLICKED, {
          surface_type: $.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
          channel_id: t.id,
          guild_id: t.guild_id
        }), S) {
        let l;
        if ((0, x.markDismissibleContentAsDismissed)(c.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), A(!0), R(!1), m) l = t;
        else {
          var a;
          let e = await T.default.getOrEnsurePrivateChannel(n.id);
          l = null !== (a = O.default.getChannel(e)) && void 0 !== a ? a : null
        }
        return o()(null != l, "Send channel must be defined"), U({
          reply: ":".concat(e.name, ":"),
          sendToChannel: l,
          onComplete: () => {
            R(!0), setTimeout(() => {
              A(!1), r()
            }, 600)
          },
          interactionType: $.ContentInventoryInteractionTypes.REACTION_EMOJI_REACT_SENT
        })
      }
      null != p && (p.insertEmoji(e, !1, !1), p.focus())
    }
  }, b = async e => {
    let a;
    if (S && (0, x.markDismissibleContentAsDismissed)(c.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), m) a = t;
    else {
      let e = await T.default.openPrivateChannel(n.id, !1, !1),
        t = O.default.getChannel(e);
      o()(null != t, "DM channel must be defined"), a = t
    }
    let l = a.type === ee.ChannelTypes.DM ? $.ContentInventoryInteractionTypes.DM_REACTION_MESSAGE_SENT : $.ContentInventoryInteractionTypes.CHANNEL_REACTION_MESSAGE_SENT;
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
    } = e, d = await ea(s)(a.id);
    o()(null != d, "Reaction image must be defined"), await (0, v.sendReply)({
      file: d,
      channel: a,
      altText: i,
      reply: n
    }), (0, Z.trackInteraction)(r, {
      entry: u,
      channelId: t.id,
      guildId: t.guild_id,
      requestId: f,
      destinationChannelId: a.id,
      destinationGuildId: a.guild_id
    }), null == l || l()
  };
  return (0, a.jsxs)("div", {
    style: {
      pointerEvents: I ? "none" : "all"
    },
    children: [(0, a.jsx)(J.default, {
      sent: M,
      shown: I,
      className: en.toastContainer
    }), S ? (0, a.jsx)(X.default, {
      children: (0, a.jsxs)("div", {
        className: en.emojiHotrailShareToChannel,
        children: [(0, a.jsx)(eu, {
          channel: t,
          onClickSuggestion: D
        }), (0, a.jsx)(N.ReactionPickerButton, {
          onSelectEmoji: D
        })]
      })
    }) : (0, a.jsx)("div", {
      className: en.emojiHotrailShareToChannel,
      children: (0, a.jsx)(eu, {
        channel: t,
        onClickSuggestion: D
      })
    }), (0, a.jsxs)("div", {
      className: en.inputContainerShareToChannel,
      children: [C && (0, a.jsx)(_.Tooltip, {
        text: j,
        children: e => (0, a.jsx)(_.Clickable, {
          ...e,
          className: en.shareToChannelButton,
          onClick: W.toggleContentInventoryReplyMode,
          children: m ? (0, a.jsx)(g.TextIcon, {
            width: 20,
            height: 20
          }) : (0, a.jsx)(h.AtIcon, {
            width: 20,
            height: 20
          })
        })
      }), (0, a.jsx)(N.ReplyInput, {
        placeholder: et.default.Messages.TEXTAREA_PLACEHOLDER.format({
          channel: m ? y : "@".concat(L)
        }),
        onEnter: b,
        setEditorRef: e => E(e),
        channel: m ? t : void 0
      })]
    })]
  })
}
let eu = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, [s, i] = l.useState(!1);
  l.useEffect(() => {
    i(!0)
  }, []);
  let r = !!A.default.keyboardModeEnabled && !s,
    o = (0, M.useFrequentlyUsedEmojis)(t.guild_id).slice(0, 5).map(e => null == e.id ? {
      emoji: e,
      url: e.url
    } : {
      emoji: e,
      url: (0, G.getEmojiURL)({
        id: e.id,
        animated: e.animated,
        size: 58
      })
    });
  return (0, a.jsx)(a.Fragment, {
    children: o.map(e => {
      let {
        emoji: t,
        url: l
      } = e;
      return null != l ? (0, a.jsx)("div", {
        children: (0, a.jsx)(_.TooltipContainer, {
          text: et.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          position: "top",
          "aria-label": et.default.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({
            emojiName: t.name
          }),
          color: _.Tooltip.Colors.PRIMARY,
          shouldShow: !r && void 0,
          children: (0, a.jsx)(L.HotBarEmoji, {
            emoji: t,
            isDisabled: !s,
            onClick: () => n(t),
            className: en.emoji
          })
        })
      }, t.name) : null
    })
  })
};

function ed(e) {
  let {
    channel: t,
    userDescription: n,
    headerIcons: l,
    entry: s
  } = e, r = t.guild_id, {
    displayParticipants: o,
    participant1: u,
    participant2: d,
    numOtherParticipants: c
  } = (0, z.default)(s, 3);
  return (0, a.jsxs)("div", {
    className: en.popoutContentHeader,
    children: [(0, a.jsxs)("div", {
      className: en.popoutUserContainer,
      children: [(0, a.jsx)(R.default, {
        maxUsers: 3,
        users: o,
        size: _.AvatarSizes.SIZE_24,
        avatarClassName: en.popoutStackedAvatar,
        hideOverflowCount: !0,
        disableUsernameTooltip: !0
      }), (0, a.jsx)(w.default, {
        size: 8,
        horizontal: !0
      }), (0, a.jsx)(_.Heading, {
        variant: "heading-sm/normal",
        className: en.popoutTextSecondary,
        children: n.format({
          user1: V.default.getName(r, t.id, u),
          user2: V.default.getName(r, t.id, d),
          countOthers: c,
          nameHook: (e, t) => (0, a.jsx)(_.Text, {
            variant: "text-sm/medium",
            className: i()(en.popoutUsername, en.popoutTextPrimary),
            children: e
          }, t)
        })
      })]
    }), (0, a.jsx)("div", {
      className: en.popoutHeaderIcons,
      children: l
    })]
  })
}

function ec(e) {
  let {
    children: t,
    onClick: n
  } = e;
  return null == n ? (0, a.jsx)(a.Fragment, {
    children: t
  }) : (0, a.jsx)(_.Clickable, {
    className: en.maybeClickable,
    onClick: n,
    children: t
  })
}

function ef(e) {
  let {
    thumbnailSrc: t,
    title: n,
    subtitle: l,
    badges: s,
    children: i,
    onClickTitle: r,
    onClickSubtitle: o,
    ...u
  } = e;
  return (0, a.jsxs)(es, {
    backgroundImgSrc: t,
    children: [(0, a.jsx)(ed, {
      ...u
    }), (0, a.jsxs)("div", {
      className: en.popoutContentBody,
      children: [(0, a.jsx)("div", {
        className: en.popoutThumbnailContainer,
        children: (0, a.jsx)(Q.ContentImage, {
          size: 72,
          src: t,
          className: en.contentImage
        })
      }), (0, a.jsx)(w.default, {
        size: 16,
        horizontal: !0
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(ec, {
          onClick: r,
          children: (0, a.jsx)(_.Heading, {
            variant: "heading-md/medium",
            className: en.popoutTextPrimary,
            lineClamp: 3,
            children: n
          })
        }), null != l ? (0, a.jsx)(ec, {
          onClick: o,
          children: (0, a.jsx)(_.Text, {
            variant: "text-md/normal",
            className: en.popoutTextSecondary,
            children: l
          })
        }) : null, (0, a.jsx)(w.default, {
          size: 8
        }), s]
      })]
    }), i]
  })
}

function eh(e) {
  let {
    title: t,
    badges: n,
    streamPreviewSrc: l,
    ...s
  } = e;
  return (0, a.jsxs)(es, {
    className: en.streamingPopoutHero,
    children: [(0, a.jsx)(ed, {
      ...s,
      headerIcons: (0, a.jsx)(B.default, {
        size: B.default.Sizes.SMALL
      })
    }), (0, a.jsx)(w.default, {
      size: 16
    }), (0, a.jsx)("img", {
      src: l,
      className: en.popoutStreamImg,
      alt: ""
    }), (0, a.jsx)(w.default, {
      size: 16
    }), (0, a.jsx)(_.Heading, {
      variant: "heading-md/semibold",
      className: en.popoutTextPrimary,
      lineClamp: 3,
      children: t
    }), (0, a.jsx)(w.default, {
      size: 8
    }), n]
  })
}

function em(e) {
  let {
    user: t,
    entry: n,
    voiceChannel: s,
    channel: i,
    requestId: r,
    reactionImageAltText: c,
    generateReactionImage: h,
    isStreaming: g = !1
  } = e, A = V.default.getName(i.guild_id, i.id, t), [x, M] = l.useState(!1), R = (0, d.useStateFromStores)([j.default], () => j.default.getGuild(s.guild_id)), L = (0, d.useStateFromStoresArray)([U.default], () => U.default.getVoiceStatesForChannel(s), [s]), P = l.useMemo(() => {
    for (let e of L) {
      let t = O.default.getDMFromUserId(e.user.id),
        n = null != t && b.default.isChannelMuted(null, t),
        a = D.default.isBlocked(e.user.id);
      if (n || a) return !0
    }
    return !1
  }, [L]), w = async e => {
    let a = await T.default.openPrivateChannel(t.id, !1, !1),
      l = O.default.getChannel(a);
    o()(null != l, "DM channel must be defined");
    let s = await ea(h)(l.id);
    o()(null != s, "Reaction image must be defined"), await (0, v.sendReply)({
      file: s,
      channel: l,
      altText: c,
      reply: e
    }), (0, Z.trackInteraction)($.ContentInventoryInteractionTypes.DM_REACTION_MESSAGE_SENT, {
      entry: n,
      channelId: i.id,
      guildId: i.guild_id,
      requestId: r
    })
  }, B = () => {
    I.default.updateChatOpen(s.id, !0), (0, y.transitionToChannel)(s.id), (0, Z.trackInteraction)($.ContentInventoryInteractionTypes.VOICE_CHANNEL_PREVIEWED, {
      entry: n,
      channelId: i.id,
      guildId: i.guild_id,
      requestId: r,
      destinationChannelId: s.id,
      destinationGuildId: s.guild_id
    })
  };
  return null == R ? null : (0, a.jsxs)("div", {
    children: [(0, a.jsxs)("div", {
      className: en.voiceChannelPopoutReactorHeader,
      children: [(0, a.jsxs)("div", {
        className: en.voiceChannelPopoutReactorChannel,
        children: [(0, a.jsx)(F.default, {
          guild: R,
          size: F.default.Sizes.SMOL,
          className: en.voiceChannelGuildIcon,
          active: !0
        }), (0, a.jsx)(p.ChevronSmallRightIcon, {
          width: 12,
          height: 12,
          color: f.default.colors.INTERACTIVE_NORMAL
        }), (0, a.jsx)(S.VoiceNormalIcon, {
          width: 16,
          height: 16,
          color: f.default.colors.TEXT_NORMAL
        }), (0, a.jsx)(_.Text, {
          variant: "text-sm/medium",
          color: "text-normal",
          children: s.name
        })]
      }), (0, a.jsx)(k.default, {
        guildId: R.id,
        users: L,
        max: 3,
        renderUser: (e, t) => (0, a.jsx)(_.Avatar, {
          src: e.user.getAvatarURL(R.id, 16),
          size: _.AvatarSizes.SIZE_16,
          "aria-label": "avatar",
          className: t
        }),
        renderMoreUsers: e => (0, a.jsx)("div", {
          className: en.voiceChannelAdditionalParticipants,
          children: (0, a.jsx)(_.Text, {
            variant: "text-xxs/semibold",
            color: "text-normal",
            children: e
          })
        })
      })]
    }), (0, a.jsx)("div", {
      className: en.voicePopoutDivider
    }), x ? (0, a.jsx)(N.ReplyInput, {
      placeholder: et.default.Messages.TEXTAREA_PLACEHOLDER.format({
        channel: "@".concat(A)
      }),
      onEnter: w,
      showEmojiButton: !0,
      renderAttachButton: () => (0, a.jsx)(_.Clickable, {
        onClick: () => M(!1),
        className: en.voicePopoutMessageCloseIcon,
        children: (0, a.jsx)(E.CloseSmallIcon, {
          width: 20,
          height: 20,
          color: f.default.colors.ICON_PRIMARY
        })
      })
    }) : (0, a.jsxs)("div", {
      className: en.voicePopoutActionButtons,
      children: [(0, a.jsxs)(_.Button, {
        className: en.secondaryButton,
        color: _.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: () => M(!0),
        innerClassName: en.iconButton,
        size: _.Button.Sizes.LARGE,
        children: [(0, a.jsx)(m.ChatIcon, {
          width: 20,
          height: 20,
          colorClass: en.secondaryText
        }), (0, a.jsx)(_.Text, {
          variant: "text-md/semibold",
          className: en.secondaryText,
          children: et.default.Messages.USER_POPOUT_MESSAGE
        })]
      }), (0, a.jsx)(_.Tooltip, {
        "aria-label": et.default.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING,
        text: (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(u.WarningIcon, {
            width: 13,
            height: 13,
            className: en.popoutBlockedWarningIcon
          }), et.default.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING]
        }),
        shouldShow: P,
        children: e => (0, a.jsxs)(_.Button, {
          ...e,
          color: _.Button.Colors.GREEN,
          onClick: B,
          fullWidth: !0,
          innerClassName: en.iconButton,
          size: _.Button.Sizes.LARGE,
          children: [g ? (0, a.jsx)(C.ScreenIcon, {
            width: 20,
            height: 20,
            color: f.default.colors.WHITE
          }) : (0, a.jsx)(S.VoiceNormalIcon, {
            width: 20,
            height: 20,
            color: f.default.colors.WHITE
          }), (0, a.jsx)(_.Text, {
            variant: "text-md/semibold",
            color: "always-white",
            children: et.default.Messages.PREVIEW
          })]
        })
      })]
    })]
  })
}