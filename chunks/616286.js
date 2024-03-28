"use strict";
n.r(t), n.d(t, {
  ChatButton: function() {
    return I
  }
}), n("47120"), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("392711"),
  o = n("442837"),
  u = n("475179"),
  d = n("358221"),
  c = n("306680"),
  f = n("944486"),
  h = n("111583"),
  m = n("459273"),
  p = n("880831"),
  E = n("774168"),
  C = n("871499"),
  g = n("981631"),
  S = n("689938");

function _(e) {
  let t = (0, o.useStateFromStores)([h.default], () => !(0, r.isEmpty)(h.default.getTypingUsers(e)), [e]),
    n = (0, o.useStateFromStores)([f.default], () => f.default.getVoiceChannelId() === e, [e]),
    {
      unreadCount: a,
      mentionCount: l
    } = (0, o.useStateFromStoresObject)([c.default], () => ({
      unreadCount: c.default.getUnreadCount(e),
      mentionCount: c.default.getMentionCount(e)
    }), [e]);
  return {
    unreadCount: a,
    mentionCount: l,
    voiceChannelIsSelected: n,
    isTyping: t
  }
}

function T(e) {
  let {
    className: t,
    channelId: n
  } = e, {
    unreadCount: l,
    mentionCount: s,
    isTyping: i,
    voiceChannelIsSelected: r
  } = _(n);
  return (0, a.jsx)(E.default, {
    className: t,
    unreadCount: l,
    mentionCount: s,
    isTyping: i,
    canBadge: r
  })
}

function I(e) {
  let t, {
      channelId: n,
      className: s,
      showingClassName: r,
      onClick: c,
      inPopout: f,
      showRequestToSpeakSidebar: h,
      toggleRequestToSpeakSidebar: E,
      ...I
    } = e,
    {
      disabled: A
    } = I,
    v = l.useRef(null),
    N = (0, o.useStateFromStores)([d.default], () => d.default.getChatOpen(n), [n]),
    {
      isShowing: x,
      unreadCount: M,
      mentionCount: R
    } = function(e) {
      let {
        unreadCount: t,
        mentionCount: n,
        isTyping: a
      } = _(e), [s, i] = l.useState(!1);
      return l.useEffect(() => {
        i(t > 0);
        let e = setTimeout(() => {
          i(!1)
        }, p.TOAST_LINGER_MS);
        return () => {
          clearTimeout(e), i(!1)
        }
      }, [t]), {
        isShowing: s || n > 0 || a,
        unreadCount: t,
        mentionCount: n
      }
    }(n),
    L = l.useCallback(() => {
      null == c || c(), !N && h && (null == E || E()), u.default.updateChatOpen(n, !N)
    }, [n, N, c, h, E]),
    y = l.useCallback(e => {
      let {
        className: t
      } = e;
      return (0, a.jsx)(T, {
        className: t,
        channelId: n
      })
    }, [n]),
    O = l.useCallback(() => {
      var e;
      null === (e = v.current) || void 0 === e || e.focus()
    }, []);
  (0, m.useComponentAction)({
    event: g.ComponentActions.FOCUS_CHAT_BUTTON,
    handler: A ? null : O
  });
  let [j, P] = l.useState(!1), D = l.useCallback(() => {
    f && P(!0)
  }, [f]);
  (0, m.useComponentAction)({
    event: g.ComponentActions.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
    handler: D
  }), l.useEffect(() => {
    let e;
    return j && (e = setTimeout(() => {
      P(!1)
    }, 3e3)), () => {
      clearTimeout(e)
    }
  }, [j]);
  let b = [t = f && A ? S.default.Messages.TEXT_IN_VOICE_POPOUT_DISABLED : N ? S.default.Messages.VIDEO_CALL_HIDE_CHAT : S.default.Messages.VIDEO_CALL_SHOW_CHAT];
  return R > 0 && b.push(S.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
    mentionCount: R
  })), M > 0 && b.push(S.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD), (0, a.jsx)(C.default, {
    buttonRef: v,
    onClick: L,
    label: t,
    "aria-label": b.join(", "),
    iconComponent: y,
    tooltipPosition: "bottom",
    wrapperClassName: i()(s, null != r && {
      [r]: x
    }),
    forceTooltipOpen: j,
    ...I
  })
}