"use strict";
n.r(t), n.d(t, {
  TOAST_LINGER_MS: function() {
    return L
  },
  default: function() {
    return O
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("392711"),
  o = n("718017"),
  u = n("442837"),
  d = n("481060"),
  c = n("570140"),
  f = n("475179"),
  h = n("904245"),
  m = n("372900"),
  p = n("937889"),
  E = n("739566"),
  C = n("378233"),
  g = n("419922"),
  S = n("375954"),
  _ = n("699516"),
  T = n("512665"),
  I = n("768581"),
  A = n("70956"),
  v = n("823379"),
  N = n("792125"),
  x = n("981631"),
  M = n("768760"),
  R = n("901288");
let L = 10 * A.default.Millis.SECOND;

function y(e) {
  var t;
  let {
    message: n
  } = e, s = (0, u.useStateFromStores)([_.default], () => _.default.isBlocked(n.author.id)), r = (0, E.useNullableMessageAuthor)(n), o = l.useContext(m.default), [c, S] = l.useState(!1), A = l.useCallback(e => {
    "A" !== e.target.nodeName && (f.default.updateChatOpen(n.channel_id, !0), h.default.jumpToMessage({
      channelId: n.channel_id,
      messageId: n.id,
      flash: !0
    }))
  }, [n.channel_id, n.id]), v = null != n.content && "" !== n.content ? (0, p.default)(n, {
    isInteracting: c
  }).content : null, {
    contentPlaceholder: N,
    renderedContent: x,
    icon: L
  } = (0, T.renderSingleLineMessage)(n, v, s, R.messageContent, {
    iconClass: R.messageContentIcon,
    iconSize: M.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
  }), y = (0, C.getMessageStickers)(n), O = y.length > 0 ? y.map(e => (0, a.jsx)(g.default, {
    className: R.sticker,
    size: 128,
    sticker: e,
    isInteracting: c
  }, e.id)) : null;
  return (0, a.jsxs)(d.Clickable, {
    className: R.toast,
    onMouseEnter: () => {
      S(!0)
    },
    onMouseLeave: () => {
      S(!1)
    },
    onClick: A,
    children: [(0, a.jsxs)("div", {
      className: i()(R.messageContentWrapper, {
        [R.mentioned]: n.mentioned
      }),
      children: [null !== (t = null != x ? x : O) && void 0 !== t ? t : (0, a.jsx)("span", {
        children: N
      }), null != O ? null : L]
    }), (0, a.jsx)("img", {
      alt: "",
      src: (null == r ? void 0 : r.guildMemberAvatar) != null && null != o ? (0, I.getGuildMemberAvatarURLSimple)({
        guildId: o,
        userId: n.author.id,
        avatar: r.guildMemberAvatar
      }) : n.author.getAvatarURL(o, 32),
      className: R.avatar
    })]
  })
}

function O(e) {
  let {
    channelId: t,
    className: n
  } = e, [s, d] = l.useState(!1), {
    toastsHidden: f,
    toastMessages: h
  } = function(e) {
    var t;
    let {
      channelId: n,
      isFrozen: a,
      count: s,
      lingerMs: i
    } = e, [r, o] = l.useState([]), [d, f] = l.useState(!1), h = l.useRef(null), m = l.useRef(), p = l.useCallback(() => {
      o([]), f(!0)
    }, []);
    l.useEffect(() => {
      function e(e) {
        let {
          channelId: t,
          message: a
        } = e;
        t === n && a.type !== x.MessageTypes.STAGE_START && a.type !== x.MessageTypes.STAGE_END && a.type !== x.MessageTypes.STAGE_TOPIC && a.type !== x.MessageTypes.STAGE_SPEAKER && a.type !== x.MessageTypes.STAGE_RAISE_HAND && (clearTimeout(m.current), m.current = setTimeout(p, i), o(e => [...e, a.id]))
      }
      return c.default.subscribe("MESSAGE_CREATE", e), () => {
        c.default.unsubscribe("MESSAGE_CREATE", e)
      }
    }, [n, p, s, i]), l.useEffect(() => () => {
      clearTimeout(m.current)
    }, []), l.useEffect(() => {
      r.length > 3 && o(e => {
        let t = e.length - 3;
        return [...e.slice(t)]
      })
    }, [r]), a && null == h.current ? h.current = r : !a && null != h.current && (h.current = null);
    let E = null !== (t = h.current) && void 0 !== t ? t : r;
    return {
      toastsHidden: d,
      toastMessages: (0, u.useStateFromStoresArray)([S.default], () => E.map(e => S.default.getMessage(n, e)), [n, E]).filter(v.isNotNullish)
    }
  }({
    channelId: t,
    isFrozen: s,
    count: 3,
    lingerMs: L
  }), m = l.useRef({}), [p, E] = l.useState({}), C = l.useCallback((e, t) => {
    null == t ? delete m.current[e] : m.current[e] = t
  }, []);
  l.useLayoutEffect(() => {
    let e = {},
      t = 0;
    for (let a of h) {
      var n;
      let l = null !== (n = m.current[a.id]) && void 0 !== n ? n : 0;
      e[a.id] = t, t += l + 8
    }!(0, r.isEqual)(e, p) && E(e)
  }, [h]);
  let g = h.map(e => ({
      message: e,
      height: m.current[e.id],
      y: p[e.id]
    })),
    _ = (0, o.useTransition)(g, {
      keys: e => e.message.id,
      from: () => ({
        opacity: 0
      }),
      enter: e => {
        let {
          y: t
        } = e;
        return {
          opacity: 1,
          translateY: t
        }
      },
      update: e => {
        let {
          y: t
        } = e;
        return {
          translateY: t
        }
      },
      leave: e => {
        let {
          height: t,
          y: n
        } = e;
        return {
          opacity: 0,
          translateY: f ? n : -(null != t ? t : 0) - 8,
          pointerEvents: "none"
        }
      }
    });
  return (0, a.jsx)("div", {
    className: i()(n, (0, N.getThemeClass)(x.ThemeTypes.DARK)),
    onMouseEnter: () => {
      d(!0)
    },
    onMouseLeave: () => {
      d(!1)
    },
    children: _((e, t) => (0, a.jsx)(o.animated.div, {
      ref: e => C(t.message.id, null != e ? e.offsetHeight : null),
      className: R.toastWrapper,
      style: e,
      children: (0, a.jsx)(y, {
        message: t.message
      })
    }))
  })
}