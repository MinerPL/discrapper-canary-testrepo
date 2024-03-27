"use strict";
n.r(t), n.d(t, {
  StreamTileIndicators: function() {
    return B
  },
  default: function() {
    return G
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("77078"),
  o = n("255397"),
  d = n("990766"),
  c = n("103723"),
  f = n("605250"),
  h = n("889014"),
  m = n("430951"),
  p = n("673527"),
  E = n("336804"),
  g = n("952221"),
  S = n("600123"),
  C = n("373469"),
  _ = n("271938"),
  I = n("42203"),
  T = n("42887"),
  v = n("471671"),
  x = n("512264"),
  N = n("30672"),
  A = n("980423"),
  M = n("100844"),
  R = n("607391"),
  j = n("466211"),
  L = n("683245"),
  y = n("772442"),
  O = n("211019"),
  P = n("810640"),
  D = n("170643"),
  b = n("144565"),
  U = n("49111"),
  w = n("99795"),
  F = n("353927"),
  V = n("782340"),
  H = n("532351");
let k = new f.default("StreamTile");

function B(e) {
  let {
    participant: t,
    selected: n,
    focused: l,
    idle: s,
    width: i
  } = e, u = (0, r.useStateFromStores)([C.default], () => C.default.getActiveStreamForUser(t.user.id, t.stream.guildId)), o = (0, b.isVideoCompact)(i);
  return (0, a.jsxs)(a.Fragment, {
    children: [n ? null : (0, a.jsx)(D.default, {
      participant: t
    }), l || null == u || u.state === U.ApplicationStreamStates.ENDED || u.state === U.ApplicationStreamStates.FAILED ? null : (0, a.jsx)(E.default, {
      size: A.default.Sizes.SMALL,
      className: H.liveIndicator,
      participant: t,
      showQuality: !o && !s,
      isUpsellEnabled: !1
    })]
  })
}

function G(e) {
  let {
    participant: t,
    selected: n,
    onVideoResize: s,
    paused: f,
    fit: E,
    inPopout: A,
    width: D,
    focused: b
  } = e, B = T.default.getVideoComponent(), G = (0, r.useStateFromStores)([_.default], () => _.default.getId()), W = (0, h.default)(), {
    stream: Y,
    user: z,
    streamId: K
  } = t, Z = (0, r.useStateFromStores)([I.default], () => I.default.getChannel(Y.channelId)), X = (0, r.useStateFromStores)([C.default], () => C.default.getActiveStreamForUser(z.id, Y.guildId), [z.id, Y.guildId]), Q = (0, r.useStateFromStores)([C.default], () => C.default.getAllActiveStreams().length > 0), q = (0, r.useStateFromStores)([v.default], () => v.default.isFocused()), J = (null == X ? void 0 : X.ownerId) === G, $ = J && !q && !A, ee = null != X ? (0, m.default)(X, z, z.id === G, $) : null, et = D < 195;
  if (l.useEffect(() => {
      !Q && (null == Z ? void 0 : Z.isGuildStageVoice()) && !J && ((0, d.watchStream)(Y), o.default.updateStageStreamSize(Y.channelId, !1))
    }, []), l.useEffect(() => {
      k.info("Stream Tile State - activeStream: ".concat(null != X, " | selected: ").concat(n, " | Video: ").concat(null != B, " | MediaEngine: ").concat(T.default.supports(F.Features.VIDEO)))
    }, [B, X, n]), W) return (0, a.jsx)(P.default, {
    stream: t.stream,
    isSmall: et,
    selected: n,
    isSelfStream: z.id === G
  });
  if ((null == X ? void 0 : X.state) === U.ApplicationStreamStates.ENDED) return (0, a.jsx)(L.default, {
    selected: n,
    stream: X,
    width: D
  });
  if ((null == X ? void 0 : X.state) === U.ApplicationStreamStates.FAILED) return (0, a.jsx)(y.default, {
    selected: n,
    stream: X,
    width: D
  });
  else if (t.type === w.ParticipantTypes.HIDDEN_STREAM) return (0, a.jsx)(O.default, {
    selected: n,
    participant: t,
    width: D
  });
  else if (null != X && !n && null != B && T.default.supports(F.Features.VIDEO)) return (0, a.jsxs)(a.Fragment, {
    children: [null != Z ? (0, a.jsx)(g.default, {
      focused: b,
      channelId: Z.id,
      guildId: Z.guild_id,
      streamerId: z.id,
      hasScreenMessage: null != ee,
      stream: Y
    }) : null, (0, a.jsx)(x.default, {
      onResize: s,
      wrapperClassName: H.videoWrapper,
      className: H.content,
      streamId: K,
      videoComponent: B,
      fit: E,
      paused: f || $,
      videoSpinnerContext: J ? c.VideoSpinnerContext.SELF_STREAM : c.VideoSpinnerContext.REMOTE_STREAM,
      userId: z.id
    }, K), null != ee ? (0, a.jsx)(S.default, {
      size: (0, R.getSizeForWidth)(D),
      ...ee
    }) : null, (0, a.jsx)(j.default, {
      stream: Y,
      inPopout: A
    })]
  });
  else return (0, a.jsxs)("div", {
    className: i(H.content, H.streamPreview, {
      [H.small]: et
    }),
    children: [(0, a.jsx)(p.default, {
      noText: !0,
      className: i(H.absoluteFill, {
        [H.streamPreviewOpacity]: null == X
      }),
      stream: t.stream
    }), n ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(M.CallTileCTA, {
        isSmall: et,
        children: (0, a.jsx)(u.Text, {
          variant: et ? "text-sm/semibold" : "text-md/semibold",
          color: "none",
          children: D < 175 ? V.default.Messages.WATCH : V.default.Messages.WATCH_STREAM
        })
      }), Q ? (0, a.jsx)(M.CallTileCTA, {
        className: H.addCTA,
        tooltip: V.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
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