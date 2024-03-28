"use strict";
n.r(t), n.d(t, {
  StreamTileIndicators: function() {
    return G
  },
  default: function() {
    return V
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("475179"),
  d = n("872810"),
  c = n("763520"),
  f = n("710845"),
  h = n("590293"),
  m = n("863908"),
  p = n("871118"),
  E = n("517525"),
  C = n("590076"),
  g = n("507675"),
  S = n("199902"),
  _ = n("314897"),
  T = n("592125"),
  I = n("131951"),
  A = n("451478"),
  v = n("40300"),
  N = n("167580"),
  x = n("368666"),
  M = n("685203"),
  R = n("112560"),
  L = n("442168"),
  y = n("822296"),
  O = n("916771"),
  j = n("792517"),
  P = n("979425"),
  D = n("651183"),
  b = n("623825"),
  U = n("981631"),
  F = n("354459"),
  w = n("65154"),
  k = n("689938"),
  H = n("373448");
let B = new f.default("StreamTile");

function G(e) {
  let {
    participant: t,
    selected: n,
    focused: l,
    idle: s,
    width: i
  } = e, o = (0, r.useStateFromStores)([S.default], () => S.default.getActiveStreamForUser(t.user.id, t.stream.guildId)), u = (0, b.isVideoCompact)(i);
  return (0, a.jsxs)(a.Fragment, {
    children: [n ? null : (0, a.jsx)(D.default, {
      participant: t
    }), l || null == o || o.state === U.ApplicationStreamStates.ENDED || o.state === U.ApplicationStreamStates.FAILED ? null : (0, a.jsx)(E.default, {
      size: x.default.Sizes.SMALL,
      className: H.liveIndicator,
      participant: t,
      showQuality: !u && !s,
      isUpsellEnabled: !1
    })]
  })
}

function V(e) {
  let {
    participant: t,
    selected: n,
    onVideoResize: s,
    paused: f,
    fit: E,
    inPopout: x,
    width: D,
    focused: b
  } = e, G = I.default.getVideoComponent(), V = (0, r.useStateFromStores)([_.default], () => _.default.getId()), W = (0, h.default)(), {
    stream: Y,
    user: z,
    streamId: Z
  } = t, K = (0, r.useStateFromStores)([T.default], () => T.default.getChannel(Y.channelId)), X = (0, r.useStateFromStores)([S.default], () => S.default.getActiveStreamForUser(z.id, Y.guildId), [z.id, Y.guildId]), q = (0, r.useStateFromStores)([S.default], () => S.default.getAllActiveStreams().length > 0), Q = (0, r.useStateFromStores)([A.default], () => A.default.isFocused()), J = (null == X ? void 0 : X.ownerId) === V, $ = J && !Q && !x, ee = null != X ? (0, m.default)(X, z, z.id === V, $) : null, et = D < 195;
  if (l.useEffect(() => {
      !q && (null == K ? void 0 : K.isGuildStageVoice()) && !J && ((0, d.watchStream)(Y), u.default.updateStageStreamSize(Y.channelId, !1))
    }, []), l.useEffect(() => {
      B.info("Stream Tile State - activeStream: ".concat(null != X, " | selected: ").concat(n, " | Video: ").concat(null != G, " | MediaEngine: ").concat(I.default.supports(w.Features.VIDEO)))
    }, [G, X, n]), W) return (0, a.jsx)(P.default, {
    stream: t.stream,
    isSmall: et,
    selected: n,
    isSelfStream: z.id === V
  });
  if ((null == X ? void 0 : X.state) === U.ApplicationStreamStates.ENDED) return (0, a.jsx)(y.default, {
    selected: n,
    stream: X,
    width: D
  });
  if ((null == X ? void 0 : X.state) === U.ApplicationStreamStates.FAILED) return (0, a.jsx)(O.default, {
    selected: n,
    stream: X,
    width: D
  });
  else if (t.type === F.ParticipantTypes.HIDDEN_STREAM) return (0, a.jsx)(j.default, {
    selected: n,
    participant: t,
    width: D
  });
  else if (null != X && !n && null != G && I.default.supports(w.Features.VIDEO)) return (0, a.jsxs)(a.Fragment, {
    children: [null != K ? (0, a.jsx)(C.default, {
      focused: b,
      channelId: K.id,
      guildId: K.guild_id,
      streamerId: z.id,
      hasScreenMessage: null != ee,
      stream: Y
    }) : null, (0, a.jsx)(v.default, {
      onResize: s,
      wrapperClassName: H.videoWrapper,
      className: H.content,
      streamId: Z,
      videoComponent: G,
      fit: E,
      paused: f || $,
      videoSpinnerContext: J ? c.VideoSpinnerContext.SELF_STREAM : c.VideoSpinnerContext.REMOTE_STREAM,
      userId: z.id
    }, Z), null != ee ? (0, a.jsx)(g.default, {
      size: (0, R.getSizeForWidth)(D),
      ...ee
    }) : null, (0, a.jsx)(L.default, {
      stream: Y,
      inPopout: x
    })]
  });
  else return (0, a.jsxs)("div", {
    className: i()(H.content, H.streamPreview, {
      [H.small]: et
    }),
    children: [(0, a.jsx)(p.default, {
      noText: !0,
      className: i()(H.absoluteFill, {
        [H.streamPreviewOpacity]: null == X
      }),
      stream: t.stream
    }), n ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(M.CallTileCTA, {
        isSmall: et,
        children: (0, a.jsx)(o.Text, {
          variant: et ? "text-sm/semibold" : "text-md/semibold",
          color: "none",
          children: D < 175 ? k.default.Messages.WATCH : k.default.Messages.WATCH_STREAM
        })
      }), q ? (0, a.jsx)(M.CallTileCTA, {
        className: H.addCTA,
        tooltip: k.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
        onClick: e => {
          e.stopPropagation(), (0, d.watchStream)(Y, {
            forceMultiple: !0
          })
        },
        isSmall: et,
        children: (0, a.jsx)(N.default, {
          className: H.addStreamIcon
        })
      }) : null]
    })]
  })
}