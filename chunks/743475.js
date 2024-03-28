"use strict";
s.r(t), s.d(t, {
  resetDefaultChannels: function() {
    return T
  },
  saveDefaultChannels: function() {
    return f
  },
  toggleDefaultChannel: function() {
    return S
  }
}), s("47120");
var a = s("570140"),
  l = s("668781"),
  n = s("881052"),
  i = s("45966"),
  r = s("637853"),
  o = s("592125"),
  d = s("823379"),
  u = s("889369"),
  c = s("570961"),
  E = s("208665"),
  _ = s("290511"),
  I = s("689938");

function T() {
  a.default.dispatch({
    type: "GUILD_SETTINGS_DEFAULT_CHANNELS_RESET"
  })
}

function S(e) {
  a.default.dispatch({
    type: "GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE",
    channelId: e
  })
}
async function f(e) {
  let t = Array.from(u.default.editedDefaultChannelIds).filter(e => null != o.default.getChannel(e)),
    s = E.default.advancedMode,
    [T, S] = (0, r.getChattableDefaultChannels)(e.id, [...t]),
    f = (0, r.getMinimumSetOfDefaultChannelIds)(e.id, t, E.default.editedOnboardingPrompts),
    m = (0, r.getMinimumSetOfDefaultChannelIds)(e.id, t, E.default.editedOnboardingPrompts, r.isChattableChannelId);
  if (i.default.getEnabled(e.id) && (!s && (S.length < _.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING || T.length < _.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN) || s && (f.length < _.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING || m.length < _.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN))) {
    l.default.show({
      title: I.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
      body: I.default.Messages.DEFAULT_CHANNELS_SAVE_INVALID_DEFAULT_CHANNELS
    });
    return
  }
  if (u.default.hasChanges()) {
    a.default.dispatch({
      type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT"
    });
    try {
      await (0, c.editOnboarding)(e.id, {
        default_channel_ids: t
      }), a.default.dispatch({
        type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS",
        guildId: e.id,
        channelIds: t
      })
    } catch (s) {
      var N;
      let {
        fieldName: e,
        error: t
      } = null !== (N = new n.APIError(s).getAnyErrorMessageAndField()) && void 0 !== N ? N : {};
      l.default.show({
        title: I.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
        body: [e, t].filter(d.isNotNullish).join(": ")
      }), a.default.dispatch({
        type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED"
      })
    }
  }
}