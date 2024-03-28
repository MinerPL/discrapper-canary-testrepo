"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("954955"),
  o = n.n(r),
  u = n("442837"),
  d = n("481060"),
  c = n("607070"),
  f = n("223606"),
  h = n("188597"),
  m = n("41776"),
  p = n("641051"),
  E = n("329461"),
  C = n("222677"),
  g = n("995774"),
  S = n("931651"),
  _ = n("280845"),
  T = n("665906"),
  I = n("695346"),
  A = n("314897"),
  v = n("323873"),
  N = n("271383"),
  x = n("430824"),
  M = n("607744"),
  R = n("496675"),
  L = n("468210"),
  y = n("448239"),
  O = n("754424"),
  j = n("885442"),
  P = n("757698"),
  D = n("827104"),
  b = n("316949"),
  U = n("282597"),
  F = n("808268"),
  w = n("185403"),
  k = n("394831"),
  H = n("351167"),
  B = n("612418"),
  G = n("934458"),
  V = n("740727"),
  W = n("404975"),
  Y = n("626135"),
  z = n("572004"),
  Z = n("970257"),
  K = n("418476"),
  X = n("151007"),
  q = n("432376"),
  Q = n("996861"),
  J = n("603490"),
  $ = n("225138"),
  ee = n("717680"),
  et = n("981631"),
  en = n("689938"),
  ea = n("886335");

function el(e) {
  e.stopPropagation()
}

function es(e) {
  let {
    message: t,
    channel: n,
    canReport: a,
    onClose: l,
    updatePosition: s
  } = e;
  return (0, $.useMessageMenu)({
    message: t,
    channel: n,
    textSelection: "",
    favoriteableType: null,
    favoriteableId: null,
    favoriteableName: null,
    itemHref: void 0,
    itemSrc: void 0,
    itemSafeSrc: void 0,
    itemTextContent: void 0,
    canReport: a,
    onHeightUpdate: s,
    onClose: l,
    navId: "message-actions",
    ariaLabel: en.default.Messages.MESSAGE_UTILITIES_A11Y_LABEL
  })
}

function ei(e) {
  let {
    label: t,
    ariaLabel: n,
    tooltipText: l,
    tooltipColor: s,
    icon: i,
    iconProps: r,
    channel: o,
    message: u,
    onClick: c,
    key: f,
    disabled: h,
    dangerous: m,
    separator: p,
    sparkle: E,
    ...C
  } = e;
  return (0, a.jsx)(d.Tooltip, {
    text: null != l ? l : t,
    color: null != s ? s : d.TooltipColors.PRIMARY,
    "aria-label": t,
    hideOnClick: !0,
    tooltipClassName: ea.tooltip,
    children: e => {
      let {
        onMouseEnter: l,
        onMouseLeave: s,
        onClick: d
      } = e;
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(W.Button, {
          onMouseEnter: l,
          onMouseLeave: s,
          onClick: e => {
            null == d || d(), c(o, u, e)
          },
          "aria-label": null != n ? n : t,
          disabled: h,
          dangerous: m,
          ...C,
          children: [(0, a.jsx)(i, {
            className: ea.icon,
            ...r
          }), E && (0, a.jsx)(L.default, {})]
        }), p && (0, a.jsx)(W.Separator, {})]
      })
    }
  }, f)
}

function er(e) {
  let {
    channel: t,
    message: n,
    canCopy: s,
    canPin: i,
    canDelete: r,
    canReport: o,
    canEdit: f,
    canPublish: h,
    canReact: C,
    canConfigureJoin: g,
    canReply: S,
    canStartThread: v,
    canViewThread: L,
    isExpanded: B,
    showMoreUtilities: W,
    showEmojiPicker: $,
    showMessageRemindersActions: ea,
    isMessageReminder: el,
    setPopout: er,
    hasDeveloperMode: eo,
    isGuildInviteReminder: ed,
    isFocused: ec
  } = function(e) {
    let {
      channel: t,
      message: n,
      showEmojiPicker: a,
      showEmojiBurstPicker: l,
      showMoreUtilities: s,
      setPopout: i,
      isFocused: r
    } = e, {
      author: o
    } = n, d = (0, u.useStateFromStores)([x.default], () => x.default.getGuild(t.guild_id), [t.guild_id]), f = (0, u.useStateFromStores)([A.default], () => A.default.getId()), h = (0, T.useIsActiveChannelOrUnarchivableThread)(t), C = (0, T.useIsNonModInLockedThread)(t), g = I.RenderReactions.useSetting(), S = I.DeveloperMode.useSetting(), v = (0, u.useStateFromStores)([M.default], () => null == t.guild_id || M.default.canChatInGuild(t.guild_id), [t]), {
      canManageMessages: L,
      canAddNewReactions: y
    } = (0, u.useStateFromStoresObject)([R.default], () => ({
      canAddNewReactions: v && R.default.can(et.Permissions.ADD_REACTIONS, t),
      canManageMessages: R.default.can(et.Permissions.MANAGE_MESSAGES, t)
    }), [t, v]), O = (0, _.useCanReplyToMessage)(t, n), j = (0, T.useCanStartPublicThread)(t, n), P = (0, T.useCanViewThreadForMessage)(n), D = (0, u.useStateFromStores)([m.default], () => null != t.guild_id && m.default.isLurking(t.guild_id), [t]), b = (0, u.useStateFromStores)([N.default], () => null != t.guild_id && N.default.isCurrentUserGuest(t.guild_id), [t]), U = o.id === f, F = (L || n.canDeleteOwnMessage(f)) && h && !et.MessageTypesSets.UNDELETABLE.has(n.type);
    n.type === et.MessageTypes.AUTO_MODERATION_ACTION && (F = F && L);
    let w = (0, Z.canReportMessage)(n),
      k = (0, X.default)(n, t, L),
      H = !t.isSystemDM() && (0, K.default)(n, f) && h && !C,
      {
        disableReactionCreates: B
      } = (0, q.default)({
        channel: t,
        canChat: v,
        renderReactions: g,
        canAddNewReactions: y,
        isLurking: D,
        isGuest: b,
        isActiveChannelOrUnarchivableThread: h
      }),
      G = t.type === et.ChannelTypes.GUILD_ANNOUNCEMENT && null != d && d.hasFeature(et.GuildFeatures.NEWS) && (U || L) && n.type === et.MessageTypes.DEFAULT,
      V = t.getGuildId(),
      W = null != V && (n.type === et.MessageTypes.USER_JOIN || n.type === et.MessageTypes.GUILD_INVITE_REMINDER) && R.default.canWithPartialContext(et.Permissions.MANAGE_GUILD, {
        guildId: V
      }),
      {
        showReminders: Y
      } = p.default.useExperiment({
        location: "9bfedc_1"
      }, {
        autoTrackExposure: !1
      }),
      Q = (0, u.useStateFromStores)([E.default], () => null != E.default.getMessageReminders().find(e => e.messageId === n.id)),
      J = (0, ee.default)(),
      $ = (0, u.useStateFromStores)([c.default], () => c.default.keyboardModeEnabled);
    return {
      channel: t,
      message: n,
      canPin: k,
      canEdit: H,
      canDelete: F,
      canReport: w,
      canReply: O,
      canStartThread: j,
      canViewThread: P,
      canCopy: z.SUPPORTS_COPY,
      hasDeveloperMode: S,
      canReact: !B && g,
      canPublish: G,
      canConfigureJoin: W,
      isExpanded: J && !$ && !a && !l && !s,
      showEmojiPicker: a,
      showEmojiBurstPicker: l,
      showMoreUtilities: s,
      showMessageRemindersActions: Y,
      isMessageReminder: Q,
      setPopout: i,
      isFocused: r,
      isGuildInviteReminder: n.type === et.MessageTypes.GUILD_INVITE_REMINDER
    }
  }(e), ef = l.useCallback(() => {
    !W && Y.default.track(et.AnalyticEvents.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
      message_id: n.id,
      channel: n.channel_id
    }), er({
      moreUtilities: !W
    })
  }, [W, er, n]), eh = l.useCallback(() => {
    er({
      emojiPicker: !$
    })
  }, [$, er]), em = (0, T.useIsActiveChannelOrUnarchivableThread)(t), ep = n.hasFlag(et.MessageFlags.CROSSPOSTED);
  return (0, a.jsxs)(a.Fragment, {
    children: [B ? (0, a.jsxs)(a.Fragment, {
      children: [s && eo ? ei({
        key: "copy-id",
        channel: t,
        message: n,
        label: en.default.Messages.COPY_ID_MESSAGE,
        icon: O.default,
        onClick: Q.copyId
      }) : null, s && !ed ? ei({
        key: "copy-link",
        channel: t,
        message: n,
        label: en.default.Messages.COPY_LINK,
        icon: P.default,
        onClick: Q.copyLink
      }) : null, g ? ei({
        key: "configure",
        channel: t,
        message: n,
        label: en.default.Messages.CONFIGURE,
        icon: j.default,
        onClick: Q.configureJoin
      }) : null, ea ? ei({
        key: "mark-reminder",
        channel: t,
        message: n,
        label: el ? en.default.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : en.default.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
        icon: el ? y.default : U.default,
        onClick: el ? Q.markMessageRemindersAsComplete : Q.markMessageAsReminder
      }) : null, em ? ei({
        key: "mark-unread",
        channel: t,
        message: n,
        label: en.default.Messages.MARK_UNREAD,
        icon: D.default,
        onClick: Q.markMessageUnread
      }) : null, i ? ei({
        key: "pin",
        channel: t,
        message: n,
        label: n.pinned ? en.default.Messages.UNPIN_MESSAGE : en.default.Messages.PIN_MESSAGE,
        icon: k.default,
        onClick: Q.pinMessage
      }) : null, S && f ? ei({
        key: "reply-self",
        channel: t,
        message: n,
        label: en.default.Messages.MESSAGE_ACTION_REPLY,
        icon: H.default,
        onClick: Q.replyToMessage
      }) : null]
    }) : null, C && !ed ? (0, a.jsx)(J.default, {
      channel: t,
      message: n,
      togglePopout: eh,
      renderEmojiPicker: eu,
      shouldShow: $,
      isFocused: ec
    }) : null, S && !f ? ei({
      key: "reply-other",
      channel: t,
      message: n,
      label: en.default.Messages.MESSAGE_ACTION_REPLY,
      icon: H.default,
      onClick: Q.replyToMessage
    }) : null, f ? ei({
      key: "edit",
      channel: t,
      message: n,
      label: en.default.Messages.EDIT,
      icon: w.default,
      onClick: Q.editMessage
    }) : null, v ? ei({
      key: "thread",
      channel: t,
      message: n,
      label: en.default.Messages.CREATE_THREAD,
      icon: G.default,
      onClick: Q.createThread
    }) : null, !v && L ? ei({
      key: "view-thread",
      channel: t,
      message: n,
      label: en.default.Messages.VIEW_THREAD,
      icon: G.default,
      onClick: Q.goToThread
    }) : null, h ? ei({
      key: "publish",
      channel: t,
      message: n,
      label: ep ? en.default.Messages.NEWS_CHANNEL_PUBLISHED : en.default.Messages.NEWS_CHANNEL_PUBLISH,
      icon: b.default,
      onClick: Q.publishMessage,
      disabled: ep
    }) : null, r && (ed || B) ? ei({
      key: "delete",
      channel: t,
      message: n,
      label: en.default.Messages.DELETE,
      icon: V.default,
      onClick: Q.deleteMessage,
      dangerous: !0,
      separator: !B
    }) : null, B && r ? null : (0, a.jsx)(d.Popout, {
      renderPopout: e => {
        let {
          updatePosition: l,
          closePopout: s
        } = e;
        return (0, a.jsx)(es, {
          channel: t,
          message: n,
          canReport: o,
          onClose: s,
          updatePosition: l
        })
      },
      shouldShow: W,
      onRequestClose: ef,
      position: "left",
      align: "top",
      animation: d.Popout.Animation.NONE,
      children: (e, a) => {
        let {
          onClick: l,
          ...s
        } = e, {
          isShown: i
        } = a;
        return ei({
          key: "more",
          label: en.default.Messages.MORE,
          icon: F.default,
          channel: t,
          message: n,
          selected: i,
          onClick: ef,
          ...s
        })
      }
    })]
  })
}

function eo(e) {
  let {
    channel: t,
    message: n
  } = e, l = (0, u.useStateFromStores)([f.default], () => null != f.default.getMessage(n.id), [n.id]), s = null == n.interaction || null != n.interactionData && (0, h.canRetryInteractionData)(n.interactionData);
  return (0, a.jsxs)(a.Fragment, {
    children: [!l && s && ei({
      key: "retry",
      label: en.default.Messages.RETRY,
      icon: B.default,
      channel: t,
      message: n,
      onClick: Q.retrySendMessage
    }), ei({
      key: "delete-usent",
      label: en.default.Messages.DELETE,
      icon: V.default,
      channel: t,
      message: n,
      onClick: Q.deleteMessage
    })]
  })
}

function eu(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    s = {
      openPopoutType: "message_reaction_emoji_picker",
      ...l && {
        openPopoutType: "message_super_reaction_emoji_picker",
        page: null != e.getGuildId() ? et.AnalyticsPages.GUILD_CHANNEL : et.AnalyticsPages.DM_CHANNEL,
        section: (0, g.getBurstAnalyticsSection)(e),
        object: et.AnalyticsObjects.EMOJI_REACTION_PICKER_POPOUT
      }
    };
  return (0, a.jsx)(S.ReactionPicker, {
    channel: e,
    closePopout: n,
    onSelectEmoji: (a, l, s) => {
      ! function(e, t, n) {
        let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        null != e && (0, C.addReaction)(t.id, n.id, (0, g.toReactionEmoji)(e), void 0, {
          burst: a
        })
      }(a, e, t, s), l && (s ? o()(n, 150)() : n())
    },
    analyticsOverride: s,
    messageId: t.id
  })
}
t.default = l.memo(function(e) {
  let {
    channel: t,
    message: n,
    isHeader: l
  } = e, s = (0, u.useStateFromStores)([v.default], () => v.default.isEditing(t.id, n.id), [t.id, n.id]), r = function(e) {
    let {
      channel: t,
      message: n
    } = e;
    return n.state === et.MessageStates.SEND_FAILED ? (0, a.jsx)(eo, {
      channel: t,
      message: n
    }) : null
  }(e), o = function(e) {
    let {
      message: t
    } = e;
    return t.state !== et.MessageStates.SEND_FAILED ? (0, a.jsx)(er, {
      ...e
    }) : null
  }(e);
  return s || null == r && null == o ? null : (0, a.jsx)("div", {
    className: i()(e.className, {
      [ea.container]: !0,
      [ea.isHeader]: l
    }),
    onClick: el,
    onContextMenu: el,
    role: "group",
    "aria-label": en.default.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
    children: (0, a.jsxs)(W.default, {
      className: e.innerClassName,
      children: [r, o]
    })
  })
})