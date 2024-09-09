var r = n(570140);
t.Z = {
    clearDraft(e, t) {
        r.Z.dispatch({
            type: 'DRAFT_CLEAR',
            channelId: e,
            draftType: t
        });
    },
    saveDraft(e, t, n) {
        r.Z.dispatch({
            type: 'DRAFT_SAVE',
            channelId: e,
            draft: t,
            draftType: n
        });
    },
    changeDraft(e, t, n) {
        r.Z.dispatch({
            type: 'DRAFT_CHANGE',
            channelId: e,
            draft: t,
            draftType: n
        });
    },
    changeThreadSettings(e, t) {
        r.Z.dispatch({
            type: 'THREAD_SETTINGS_DRAFT_CHANGE',
            channelId: e,
            draft: t
        });
    }
};
