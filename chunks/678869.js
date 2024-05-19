"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("627494"), n("757143");
var a = n("735250"),
  l = n("470079"),
  s = n("423875"),
  i = n("442837"),
  r = n("481060"),
  o = n("952164"),
  u = n("768419"),
  d = n("456190"),
  c = n("239470"),
  f = n("894344"),
  h = n("314897"),
  m = n("936195"),
  p = n("5192"),
  E = n("22211"),
  C = n("561308"),
  g = n("256726"),
  S = n("206295"),
  _ = n("551228"),
  T = n("591853"),
  I = n("371991"),
  A = n("410441"),
  N = n("981631"),
  v = n("616922"),
  x = n("689938"),
  M = n("417094"),
  R = n("936183");

function y(e, t) {
  return x.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
    username: t.username,
    activity: e
  })
}
let L = (e, t, n) => {
  let {
    artist: a,
    media: l
  } = e, s = x.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST, i = p.default.getName(t.guild_id, t.id, n);
  return s.plainFormat({
    artist: a,
    userName: i,
    media: l
  }).replaceAll("*", "")
};

function O(e) {
  let {
    activity: t
  } = e, n = t.timestamps, s = (0, I.useTimestampTickedNow)(n), {
    durationTimestamp: i,
    seekBarStyles: o
  } = l.useMemo(() => {
    var e;
    let {
      start: n,
      end: a
    } = null !== (e = t.timestamps) && void 0 !== e ? e : {};
    if (null == n || null == a) return {};
    let l = Math.min(a, s),
      i = a - n,
      r = l - n;
    return {
      seekBarStyles: {
        width: "".concat(Math.floor(r / i * 100), "%")
      },
      durationTimestamp: (0, C.formatActiveTimestamp)({
        start: a
      }, n)
    }
  }, [t, s]);
  return null == o ? null : (0, a.jsxs)("div", {
    className: M.listeningTimeline,
    children: [(0, a.jsx)(I.ActiveTimestamp, {
      entry: n
    }), (0, a.jsx)("div", {
      className: M.seekBarContainer,
      children: (0, a.jsx)("div", {
        className: M.seekBarFill,
        style: o
      })
    }), (0, a.jsx)(r.Text, {
      variant: "text-xs/normal",
      tabularNumbers: !0,
      color: void 0,
      children: i
    })]
  })
}

function j(e) {
  var t;
  let n, r, I, {
      channel: M,
      entry: j,
      requestId: P,
      closePopout: D
    } = e,
    {
      activity: b,
      currentEntry: U,
      artist: F,
      imageUrl: w,
      title: k,
      user: B
    } = (0, _.useListenedSessionData)(j),
    {
      primaryColor: H,
      secondaryColor: G
    } = (0, S.default)(w),
    {
      streamPreviewUrl: V,
      channel: W
    } = (0, E.default)(j),
    Y = (0, i.useStateFromStores)([u.default, h.default], () => (null == b ? void 0 : b.type) === N.ActivityTypes.LISTENING && null != B ? (0, c.default)(u.default, h.default, B, b) : void 0, [b, B]),
    z = l.useCallback(() => {
      var e;
      if (null == M || null == B) return;
      let t = null === (e = b.timestamps) || void 0 === e ? void 0 : e.start,
        n = (0, C.formatActiveTimestamp)(null != t ? {
          start: t
        } : j, Date.now());
      return (0, g.generateListenContentImage)({
        user: B,
        channel: M,
        mediaImageSrc: w,
        artist: F,
        description: L({
          artist: F,
          media: k
        }, M, B),
        colors: [H, G],
        badges: (0, g.getListenSessionImageBadges)({
          timestamp: n
        })
      })
    }, [b, F, M, j, w, H, G, k, B]);
  if (null == b || null == U) return null;
  let K = F;
  if (U.media.provider === s.ContentInventoryListenedMediaProvider.SPOTIFY && (null == Y ? void 0 : Y.syncDisabled) === !1) {
    n = () => {
      (0, f.default)(Y, v.SpotifyActionTypes.USER_ACTIVITY_SYNC), D()
    };
    K = (0, a.jsx)(m.default, {
      artists: F,
      canOpen: null != b.sync_id,
      linkClassName: R.popoutTextSecondary,
      onOpenSpotifyArtist: e => {
        (0, o.openArtist)(b, B.id, e)
      }
    }), r = () => {
      (0, o.openTrack)(b)
    }, I = (0, d.default)(Y, v.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != M ? p.default.getNickname(M.guild_id, M.id, B) : void 0)
  }
  let Z = (0, a.jsx)(T.PopoutContent, {
    thumbnailSrc: w,
    channel: M,
    entry: j,
    headerIcons: (0, a.jsx)(A.default, {
      onClick: n,
      "aria-label": I,
      provider: U.media.provider
    }),
    userDescription: (0, C.isEntryActive)(j) ? x.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING : x.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
    title: k,
    onClickTitle: r,
    subtitle: K,
    badges: null,
    children: (null === (t = b.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, a.jsx)(O, {
      activity: b
    })
  });
  return (0, a.jsxs)(T.Popout, {
    children: [Z, (0, a.jsx)(T.PopoutInteractionsContainer, {
      children: null != W ? (0, a.jsx)(T.VoiceChannelPopoutReactor, {
        closePopout: D,
        user: B,
        channel: M,
        generateReactionImage: z,
        reactionImageAltText: y(F, B),
        entry: j,
        requestId: P,
        voiceChannel: W,
        isStreaming: null != V
      }) : (0, a.jsx)(T.PopoutReactor, {
        closePopout: D,
        user: B,
        channel: M,
        generateReactionImage: z,
        reactionImageAltText: y(F, B),
        entry: j,
        requestId: P
      })
    })]
  })
}