"use strict";
n.d(t, {
  $w: function() {
    return S
  },
  Bh: function() {
    return T
  },
  Gx: function() {
    return N
  },
  TA: function() {
    return E
  },
  V$: function() {
    return I
  },
  g5: function() {
    return h
  },
  i7: function() {
    return f
  },
  rD: function() {
    return _
  },
  sd: function() {
    return d
  }
});
var i = n(367907),
  r = n(592125),
  s = n(19780),
  o = n(626135),
  a = n(768581),
  l = n(678916),
  u = n(981631);

function _(e) {
  return null != e && "object" == typeof e && "id" in e && e.type === l.xV.BACKGROUND
}

function d(e) {
  return "number" == typeof e && e in l.dp
}

function c(e) {
  return d(e) ? l.X7.includes(e) : !!_(e) && ((0, a.xR)(e.asset) || (0, a.ay)(e.asset))
}

function E(e) {
  return null != e ? "Video Background" : "None"
}

function I(e) {
  if (null == e) return "None";
  if (_(e)) return "Custom";
  if ("blur" === e) return "Blur";
  else return "Preset - ".concat(function(e) {
    switch (e) {
      case l.dp.OPTION_1:
        return "Cybercity";
      case l.dp.OPTION_2:
        return "Discord the Movie";
      case l.dp.OPTION_3:
        return "Wumpus Vacation";
      case l.dp.OPTION_4:
        return "Vaporwave";
      case l.dp.OPTION_7:
        return "Capernite Day";
      case l.dp.OPTION_8:
        return "Capernite Night";
      case l.dp.OPTION_9:
        return "Hacker Den";
      case l.dp.OPTION_10:
        return "Wumpice"
    }
  }(e))
}

function T(e, t, n) {
  let a = s.Z.getGuildId(),
    l = s.Z.getChannelId(),
    _ = r.Z.getChannel(l),
    d = (0, i.kO)(a, l, !0);
  o.default.track(u.rMx.VIDEO_EFFECT_UPDATED, {
    location: t,
    effect_type: E(e),
    effect_detail: I(e),
    effect_state: n,
    channel_id: l,
    channel_type: null == _ ? void 0 : _.type,
    guild_id: a,
    voice_state_count: d.voice_state_count,
    video_stream_count: d.video_stream_count,
    media_session_id: s.Z.getMediaSessionId(),
    rtc_connection_id: s.Z.getRTCConnectionId(),
    is_animated: c(e)
  })
}

function h(e, t, n) {
  o.default.track(u.rMx.VIDEO_BACKGROUND_ADDED, {
    is_animated: c(e),
    is_video: t,
    is_from_tenor: n
  })
}

function S(e) {
  o.default.track(u.rMx.VIDEO_BACKGROUND_DELETED, {
    is_animated: c(e)
  })
}

function f(e) {
  if (null == e) return {
    oneofKind: void 0
  };
  if (_(e)) return {
    oneofKind: "customAsset",
    customAsset: {
      id: e.id,
      assetHash: e.asset
    }
  };
  if ("blur" === e) return {
    oneofKind: "blur",
    blur: {
      useBlur: !0
    }
  };
  else return {
    oneofKind: "presetOption",
    presetOption: e
  }
}

function N(e, t) {
  if (null == e || void 0 === e.oneofKind) return null;
  switch (e.oneofKind) {
    case "customAsset":
      return {
        type: l.xV.BACKGROUND, id: e.customAsset.id, user_id: t, asset: e.customAsset.assetHash
      };
    case "blur":
      return e.blur.useBlur ? "blur" : null;
    case "presetOption":
      return e.presetOption
  }
}