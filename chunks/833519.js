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
  s = n("120356"),
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
  N = n("40300"),
  v = n("167580"),
  x = n("368666"),
  M = n("685203"),
  R = n("112560"),
  y = n("442168"),
  L = n("822296"),
  O = n("916771"),
  j = n("792517"),
  P = n("979425"),
  D = n("651183"),
  b = n("623825"),
  U = n("981631"),
  F = n("354459"),
  w = n("65154"),
  k = n("689938"),
  B = n("61707");
let H = new f.default("StreamTile");

function G(e) {
  let {
    participant: t,
    selected: n,
    focused: l,
    idle: s,
    width: i,
    premiumIndicator: o
  } = e, u = (0, r.useStateFromStores)([S.default], () => S.default.getActiveStreamForUser(t.user.id, t.stream.guildId)), d = (0, b.isVideoCompact)(i);
  return (0, a.jsxs)(a.Fragment, {
    children: [n ? null : (0, a.jsx)(D.default, {
      participant: t
    }), l || null == u || u.state === U.ApplicationStreamStates.ENDED || u.state === U.ApplicationStreamStates.FAILED ? null : (0, a.jsx)(E.default, {
      size: x.default.Sizes.SMALL,
      className: B.liveIndicator,
      participant: t,
      showQuality: !d && !s,
      isUpsellEnabled: !1,
      premiumIndicator: o
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
    streamId: K
  } = t, Z = (0, r.useStateFromStores)([T.default], () => T.default.getChannel(Y.channelId)), q = (0, r.useStateFromStores)([S.default], () => S.default.getActiveStreamForUser(z.id, Y.guildId), [z.id, Y.guildId]), X = (0, r.useStateFromStores)([S.default], () => S.default.getAllActiveStreams().length > 0), Q = (0, r.useStateFromStores)([A.default], () => A.default.isFocused()), J = (null == q ? void 0 : q.ownerId) === V, $ = J && !Q && !x, ee = null != q ? (0, m.default)(q, z, z.id === V, $) : null, et = D < 195;
  if (l.useEffect(() => {
      !X && (null == Z ? void 0 : Z.isGuildStageVoice()) && !J && ((0, d.watchStream)(Y), u.default.updateStageStreamSize(Y.channelId, !1))
    }, []), l.useEffect(() => {
      H.info("Stream Tile State - activeStream: ".concat(null != q, " | selected: ").concat(n, " | Video: ").concat(null != G, " | MediaEngine: ").concat(I.default.supports(w.Features.VIDEO)))
    }, [G, q, n]), W) return (0, a.jsx)(P.default, {
    stream: t.stream,
    isSmall: et,
    selected: n,
    isSelfStream: z.id === V
  });
  if ((null == q ? void 0 : q.state) === U.ApplicationStreamStates.ENDED) return (0, a.jsx)(L.default, {
    selected: n,
    stream: q,
    width: D
  });
  if ((null == q ? void 0 : q.state) === U.ApplicationStreamStates.FAILED) return (0, a.jsx)(O.default, {
    selected: n,
    stream: q,
    width: D
  });
  else if (t.type === F.ParticipantTypes.HIDDEN_STREAM) return (0, a.jsx)(j.default, {
    selected: n,
    participant: t,
    width: D
  });
  else if (null != q && !n && null != G && I.default.supports(w.Features.VIDEO)) return (0, a.jsxs)(a.Fragment, {
    children: [null != Z ? (0, a.jsx)(C.default, {
      focused: b,
      channelId: Z.id,
      guildId: Z.guild_id,
      streamerId: z.id,
      hasScreenMessage: null != ee,
      stream: Y
    }) : null, (0, a.jsx)(N.default, {
      onResize: s,
      wrapperClassName: B.videoWrapper,
      className: B.content,
      streamId: K,
      videoComponent: G,
      fit: E,
      paused: f || $,
      videoSpinnerContext: J ? c.VideoSpinnerContext.SELF_STREAM : c.VideoSpinnerContext.REMOTE_STREAM,
      userId: z.id
    }, K), null != ee ? (0, a.jsx)(g.default, {
      size: (0, R.getSizeForWidth)(D),
      ...ee
    }) : null, (0, a.jsx)(y.default, {
      stream: Y,
      inPopout: x
    })]
  });
  else return (0, a.jsxs)("div", {
    className: i()(B.content, B.streamPreview, {
      [B.small]: et
    }),
    children: [(0, a.jsx)(p.default, {
      noText: !0,
      className: i()(B.absoluteFill, {
        [B.streamPreviewOpacity]: null == q
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
      }), X ? (0, a.jsx)(M.CallTileCTA, {
        className: B.addCTA,
        tooltip: k.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
        onClick: e => {
          e.stopPropagation(), (0, d.watchStream)(Y, {
            forceMultiple: !0
          })
        },
        isSmall: et,
        children: (0, a.jsx)(v.default, {
          className: B.addStreamIcon
        })
      }) : null]
    })]
  })
}