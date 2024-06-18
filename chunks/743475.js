"use strict";
t.d(s, {
  BG: function() {
    return T
  },
  DO: function() {
    return m
  },
  pt: function() {
    return N
  }
}), t(47120);
var n = t(570140),
  i = t(668781),
  l = t(881052),
  a = t(45966),
  r = t(637853),
  o = t(592125),
  c = t(823379),
  d = t(889369),
  u = t(570961),
  E = t(208665),
  _ = t(290511),
  I = t(689938);

function T() {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_DEFAULT_CHANNELS_RESET"
  })
}

function N(e) {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE",
    channelId: e
  })
}
async function m(e) {
  let s = Array.from(d.Z.editedDefaultChannelIds).filter(e => null != o.Z.getChannel(e)),
    t = E.Z.advancedMode,
    [T, N] = (0, r.d9)(e.id, [...s]),
    m = (0, r.kl)(e.id, s, E.Z.editedOnboardingPrompts),
    S = (0, r.kl)(e.id, s, E.Z.editedOnboardingPrompts, r.V7);
  if (a.Z.getEnabled(e.id) && (!t && (N.length < _.md || T.length < _.X) || t && (m.length < _.md || S.length < _.X))) {
    i.Z.show({
      title: I.Z.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
      body: I.Z.Messages.DEFAULT_CHANNELS_SAVE_INVALID_DEFAULT_CHANNELS
    });
    return
  }
  if (d.Z.hasChanges()) {
    n.Z.dispatch({
      type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT"
    });
    try {
      await (0, u.n_)(e.id, {
        default_channel_ids: s
      }), n.Z.dispatch({
        type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS",
        guildId: e.id,
        channelIds: s
      })
    } catch (t) {
      var h;
      let {
        fieldName: e,
        error: s
      } = null !== (h = new l.Hx(t).getAnyErrorMessageAndField()) && void 0 !== h ? h : {};
      i.Z.show({
        title: I.Z.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
        body: [e, s].filter(c.lm).join(": ")
      }), n.Z.dispatch({
        type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED"
      })
    }
  }
}