"use strict";
var i = n(570140),
  r = n(367907),
  s = n(626135),
  o = n(585483),
  a = n(981631);
t.Z = {
  rebuildRTCActiveChannels() {
    i.Z.dispatch({
      type: "CHANNEL_RTC_ACTIVE_CHANNELS"
    })
  },
  selectParticipant(e, t) {
    i.Z.dispatch({
      type: "CHANNEL_RTC_SELECT_PARTICIPANT",
      channelId: e,
      id: t
    })
  },
  updateLayout(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.IlC.APP;
    s.default.track(a.rMx.VIDEO_LAYOUT_TOGGLED, {
      video_layout: t,
      ...(0, r.AB)(e)
    }), i.Z.dispatch({
      type: "CHANNEL_RTC_UPDATE_LAYOUT",
      channelId: e,
      layout: t,
      appContext: n
    })
  },
  toggleParticipants(e, t) {
    i.Z.dispatch({
      type: "CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN",
      channelId: e,
      participantsOpen: t
    })
  },
  toggleVoiceParticipantsHidden(e, t) {
    i.Z.dispatch({
      type: "CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN",
      channelId: e,
      voiceParticipantsHidden: t
    })
  },
  updateStageStreamSize(e, t) {
    i.Z.dispatch({
      type: "CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE",
      channelId: e,
      large: t
    })
  },
  updateStageVideoLimitBoostUpsellDismissed(e, t) {
    i.Z.dispatch({
      type: "CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED",
      channelId: e,
      dismissed: t
    })
  },
  updateChatOpen(e, t) {
    i.Z.dispatch({
      type: "CHANNEL_RTC_UPDATE_CHAT_OPEN",
      channelId: e,
      chatOpen: t
    }), t ? setTimeout(() => {
      o.S.dispatch(a.CkL.FOCUS_CHANNEL_TEXT_AREA, {
        channelId: e
      })
    }, 0) : o.S.dispatch(a.CkL.FOCUS_CHAT_BUTTON)
  }
}