var r = t(570140),
    i = t(668781),
    E = t(287734),
    u = t(881052),
    a = t(314897),
    o = t(592125),
    s = t(979651),
    c = t(352954),
    _ = t(630759),
    l = t(760373),
    d = t(981631),
    f = t(689938);
async function S(e, n) {
    if (e) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_SETTINGS_UPDATE',
            persistentCodesEnabled: e
        });
        try {
            await (0, _.om)(l.GB), null == n || n();
        } catch (n) {
            var t;
            let e = new u.Hx(n);
            r.Z.dispatch({
                type: 'SECURE_FRAMES_SETTINGS_UPDATE',
                persistentCodesEnabled: !1
            }),
                i.Z.show({
                    title: f.Z.Messages.ERROR_GENERIC_TITLE,
                    body: null !== (t = e.getAnyErrorMessage()) && void 0 !== t ? t : f.Z.Messages.GENERIC_ERROR_BODY
                });
        }
    } else
        r.Z.dispatch({
            type: 'SECURE_FRAMES_SETTINGS_UPDATE',
            persistentCodesEnabled: e
        }),
            null == n || n();
}
async function I(e) {
    let n = (function () {
        let e = s.Z.getVoiceStateForUser(a.default.getId()),
            n = o.Z.getChannel(null == e ? void 0 : e.channelId);
        return a.default.getSessionId() === (null == e ? void 0 : e.sessionId) && null != n && n.type !== d.d4z.GUILD_STAGE_VOICE ? n.id : null;
    })();
    null != n
        ? c.Z.openSecureFramesUpdateConfirmation({
              title: e ? f.Z.Messages.E2EE_ENABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_TITLE : f.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_TITLE,
              subtitle: e ? f.Z.Messages.E2EE_ENABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_SUBTITLE : f.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_SUBTITLE,
              confirmText: f.Z.Messages.E2EE_PERSISTENT_KEYS_RECONNECT_CONFIRM,
              onConfirm: async () => {
                  await S(e, () => {
                      E.default.disconnect(), E.default.selectVoiceChannel(n);
                  });
              }
          })
        : await S(e);
}
n.Z = {
    clearUploadedKeyVersions: function () {
        r.Z.dispatch({ type: 'SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR' });
    },
    updatePersistentCodesEnabled: I,
    addUploadedKeyVersion: function (e) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD',
            keyVersion: e
        });
    },
    createSecureFramesVerifiedKey: function (e, n) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_VERIFIED_KEY_CREATE',
            userId: e,
            key: n
        });
    },
    deleteSecureFramesVerifiedKey: function (e, n) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_VERIFIED_KEY_DELETE',
            userId: e,
            serializedKey: n
        });
    },
    deleteSecureFramesUserVerifiedKeys: function (e) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE',
            userId: e
        });
    },
    createSecureFramesTransientKey: function (e, n) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_TRANSIENT_KEY_CREATE',
            userId: e,
            key: n
        });
    },
    deleteSecureFramesTransientKey: function (e) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_TRANSIENT_KEY_DELETE',
            userId: e
        });
    }
};
