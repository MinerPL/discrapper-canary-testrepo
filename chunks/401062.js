"use strict";
n.d(t, {
  Lx: function() {
    return p
  },
  kq: function() {
    return C
  },
  vy: function() {
    return R
  },
  yX: function() {
    return r
  }
});
var i, r, s = n(392711),
  o = n(544891),
  a = n(570140),
  l = n(100527),
  u = n(367907),
  _ = n(339085),
  d = n(697426),
  c = n(100986),
  E = n(944486),
  I = n(70956),
  T = n(176354),
  h = n(696900),
  S = n(456631),
  f = n(963838),
  N = n(353368),
  A = n(981631),
  m = n(710111);

function O(e) {
  let t = new AbortController,
    n = (0, s.throttle)(n => {
      E.Z.getVoiceChannelId() !== e && t.abort()
    }, 1e3);
  return {
    abortController: t,
    onRequestProgress: n
  }
}

function R(e, t, n) {
  var i;
  let {
    abortController: r,
    onRequestProgress: s
  } = O(e), a = null !== (i = h.Z.getState().animationType) && void 0 !== i ? i : N.q.BASIC, u = {
    animation_type: a,
    animation_id: (0, f.Iu)(a, f.v)
  };
  o.tn.post({
    url: A.ANM.CUSTOM_CALL_SOUNDS(e),
    body: u,
    signal: r.signal,
    onRequestProgress: s
  }).then(A.VqG, () => {
    if (r.signal.aborted) return
  }), (0, c.Z)([l.Z.CHANNEL_CALL], n, t, d.jy.ENTRY)
}

function C(e, t, n, i) {
  var r, s;
  let a = _.Z.getCustomEmojiById(null !== (r = t.emojiId) && void 0 !== r ? r : ""),
    {
      abortController: l,
      onRequestProgress: u
    } = O(e),
    E = {
      sound_id: t.soundId,
      emoji_id: t.emojiId,
      emoji_name: null !== (s = t.emojiName) && void 0 !== s ? s : null == a ? void 0 : a.name
    };
  t.guildId !== m.X8 && (E.source_guild_id = t.guildId), o.tn.post({
    url: A.ANM.SEND_SOUNDBOARD_SOUND(e),
    body: E,
    signal: l.signal,
    onRequestProgress: u
  }).then(A.VqG, () => {
    if (l.signal.aborted) return
  }), (0, c.Z)(null != i ? i : [], n, t, d.jy.DEFAULT)
}(i = r || (r = {})).EMOJI_PICKER = "emoji_picker", i.EFFECT_BAR = "effect_bar";
let p = async e => {
  let {
    channel: t,
    emoji: n,
    location: i,
    animationType: r,
    animationId: s,
    isPremium: l
  } = e;
  if (null == n || S.Z.isOnCooldown) return;
  let u = l && null != r ? r : N.q.BASIC;
  try {
    let e = null != n.id ? {
      emoji_id: n.id,
      emoji_name: n.name,
      animation_type: u,
      animation_id: s
    } : {
      emoji_id: null,
      emoji_name: n.optionallyDiverseSequence,
      animation_type: u,
      animation_id: s
    };
    await o.tn.post({
      url: A.ANM.VOICE_CHANNEL_EFFECTS(t.id),
      body: e
    }), L(t, n, i, u), a.Z.dispatch({
      type: "VOICE_CHANNEL_EFFECT_SENT_LOCAL"
    })
  } catch (e) {
    if (429 === e.status && null != e.body.retry_after) {
      let t = e.body.retry_after * I.Z.Millis.SECOND;
      a.Z.dispatch({
        type: "VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP",
        cooldownEndsAtMs: t
      })
    }
  }
}, g = {
  [N.q.BASIC]: "Basic",
  [N.q.PREMIUM]: "Premium"
}, L = (e, t, n, i) => {
  let {
    unicode: r,
    custom: s,
    customExternal: o,
    managed: a,
    managedExternal: l,
    animated: _
  } = (0, T.sp)([t], e.getGuildId()), d = g[i];
  u.ZP.trackWithMetadata(A.rMx.VOICE_CHANNEL_EFFECT_SENT, {
    channel_id: e.id,
    guild_id: e.getGuildId(),
    location: n,
    emoji_unicode: r,
    emoji_custom: s,
    emoji_custom_external: o,
    emoji_managed: a,
    emoji_managed_external: l,
    emoji_animated: _,
    animation_type: d,
    is_broadcast: e.isBroadcastChannel()
  })
}