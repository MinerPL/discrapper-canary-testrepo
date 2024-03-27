"use strict";
n.r(t), n.d(t, {
  TOAST_LINGER_MS: function() {
    return j
  },
  default: function() {
    return y
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  u = n("146606"),
  o = n("446674"),
  d = n("77078"),
  c = n("913144"),
  f = n("255397"),
  h = n("819689"),
  m = n("390236"),
  p = n("95045"),
  E = n("574073"),
  g = n("24373"),
  S = n("41170"),
  C = n("377253"),
  _ = n("27618"),
  I = n("93427"),
  T = n("315102"),
  v = n("718517"),
  x = n("449008"),
  N = n("439932"),
  A = n("49111"),
  M = n("719347"),
  R = n("907646");
let j = 10 * v.default.Millis.SECOND;

function L(e) {
  var t;
  let {
    message: n
  } = e, s = (0, o.useStateFromStores)([_.default], () => _.default.isBlocked(n.author.id)), r = (0, E.useNullableMessageAuthor)(n), u = l.useContext(m.default), [c, C] = l.useState(!1), v = l.useCallback(e => {
    "A" !== e.target.nodeName && (f.default.updateChatOpen(n.channel_id, !0), h.default.jumpToMessage({
      channelId: n.channel_id,
      messageId: n.id,
      flash: !0
    }))
  }, [n.channel_id, n.id]), x = null != n.content && "" !== n.content ? (0, p.default)(n, {
    isInteracting: c
  }).content : null, {
    contentPlaceholder: N,
    renderedContent: A,
    icon: j
  } = (0, I.renderSingleLineMessage)(n, x, s, R.messageContent, {
    iconClass: R.messageContentIcon,
    iconSize: M.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
  }), L = (0, g.getMessageStickers)(n), y = L.length > 0, O = y ? L.map(e => (0, a.jsx)(S.default, {
    className: R.sticker,
    size: 128,
    sticker: e,
    isInteracting: c
  }, e.id)) : null;
  return (0, a.jsxs)(d.Clickable, {
    className: R.toast,
    onMouseEnter: () => {
      C(!0)
    },
    onMouseLeave: () => {
      C(!1)
    },
    onClick: v,
    children: [(0, a.jsxs)("div", {
      className: i(R.messageContentWrapper, {
        [R.mentioned]: n.mentioned
      }),
      children: [null !== (t = null != A ? A : O) && void 0 !== t ? t : (0, a.jsx)("span", {
        children: N
      }), null != O ? null : j]
    }), (0, a.jsx)("img", {
      alt: "",
      src: (null == r ? void 0 : r.guildMemberAvatar) != null && null != u ? (0, T.getGuildMemberAvatarURLSimple)({
        guildId: u,
        userId: n.author.id,
        avatar: r.guildMemberAvatar
      }) : n.author.getAvatarURL(u, 32),
      className: R.avatar
    })]
  })
}

function y(e) {
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
    } = e, [r, u] = l.useState([]), [d, f] = l.useState(!1), h = l.useRef(null), m = l.useRef(), p = l.useCallback(() => {
      u([]), f(!0)
    }, []);
    l.useEffect(() => {
      function e(e) {
        let {
          channelId: t,
          message: a
        } = e;
        t === n && a.type !== A.MessageTypes.STAGE_START && a.type !== A.MessageTypes.STAGE_END && a.type !== A.MessageTypes.STAGE_TOPIC && a.type !== A.MessageTypes.STAGE_SPEAKER && a.type !== A.MessageTypes.STAGE_RAISE_HAND && (clearTimeout(m.current), m.current = setTimeout(p, i), u(e => [...e, a.id]))
      }
      return c.default.subscribe("MESSAGE_CREATE", e), () => {
        c.default.unsubscribe("MESSAGE_CREATE", e)
      }
    }, [n, p, s, i]), l.useEffect(() => () => {
      clearTimeout(m.current)
    }, []), l.useEffect(() => {
      r.length > 3 && u(e => {
        let t = e.length - 3;
        return [...e.slice(t)]
      })
    }, [r]), a && null == h.current ? h.current = r : !a && null != h.current && (h.current = null);
    let E = null !== (t = h.current) && void 0 !== t ? t : r,
      g = (0, o.useStateFromStoresArray)([C.default], () => E.map(e => C.default.getMessage(n, e)), [n, E]);
    return {
      toastsHidden: d,
      toastMessages: g.filter(x.isNotNullish)
    }
  }({
    channelId: t,
    isFrozen: s,
    count: 3,
    lingerMs: j
  }), m = l.useRef({}), [p, E] = l.useState({}), g = l.useCallback((e, t) => {
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
  let S = h.map(e => ({
      message: e,
      height: m.current[e.id],
      y: p[e.id]
    })),
    _ = (0, u.useTransition)(S, {
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
    className: i(n, (0, N.getThemeClass)(A.ThemeTypes.DARK)),
    onMouseEnter: () => {
      d(!0)
    },
    onMouseLeave: () => {
      d(!1)
    },
    children: _((e, t) => (0, a.jsx)(u.animated.div, {
      ref: e => g(t.message.id, null != e ? e.offsetHeight : null),
      className: R.toastWrapper,
      style: e,
      children: (0, a.jsx)(L, {
        message: t.message
      })
    }))
  })
}