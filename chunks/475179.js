var r = n(570140),
    i = n(367907),
    a = n(626135),
    s = n(585483),
    o = n(981631);
t.Z = {
    rebuildRTCActiveChannels() {
        r.Z.dispatch({ type: 'CHANNEL_RTC_ACTIVE_CHANNELS' });
    },
    selectParticipant(e, t) {
        r.Z.dispatch({
            type: 'CHANNEL_RTC_SELECT_PARTICIPANT',
            channelId: e,
            id: t
        });
    },
    updateLayout(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.IlC.APP;
        a.default.track(o.rMx.VIDEO_LAYOUT_TOGGLED, {
            video_layout: t,
            ...(0, i.AB)(e)
        }),
            r.Z.dispatch({
                type: 'CHANNEL_RTC_UPDATE_LAYOUT',
                channelId: e,
                layout: t,
                appContext: n
            });
    },
    toggleParticipants(e, t) {
        r.Z.dispatch({
            type: 'CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN',
            channelId: e,
            participantsOpen: t
        });
    },
    toggleVoiceParticipantsHidden(e, t) {
        r.Z.dispatch({
            type: 'CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN',
            channelId: e,
            voiceParticipantsHidden: t
        });
    },
    updateStageStreamSize(e, t) {
        r.Z.dispatch({
            type: 'CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE',
            channelId: e,
            large: t
        });
    },
    updateStageVideoLimitBoostUpsellDismissed(e, t) {
        r.Z.dispatch({
            type: 'CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED',
            channelId: e,
            dismissed: t
        });
    },
    updateChatOpen(e, t) {
        r.Z.dispatch({
            type: 'CHANNEL_RTC_UPDATE_CHAT_OPEN',
            channelId: e,
            chatOpen: t
        }),
            t
                ? setTimeout(() => {
                      s.S.dispatch(o.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                  }, 0)
                : s.S.dispatch(o.CkL.FOCUS_CHAT_BUTTON);
    }
};
