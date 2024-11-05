var r = n(570140),
    i = n(668781),
    o = n(287734),
    u = n(881052),
    a = n(314897),
    c = n(592125),
    l = n(979651),
    E = n(352954),
    s = n(630759),
    f = n(760373),
    d = n(981631),
    _ = n(388032);
async function S(t, e) {
    if (t) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_SETTINGS_UPDATE',
            persistentCodesEnabled: t
        });
        try {
            await (0, s.om)(f.GB), null == e || e();
        } catch (e) {
            var n;
            let t = new u.Hx(e);
            r.Z.dispatch({
                type: 'SECURE_FRAMES_SETTINGS_UPDATE',
                persistentCodesEnabled: !1
            }),
                i.Z.show({
                    title: _.intl.string(_.t.R0RpRU),
                    body: null !== (n = t.getAnyErrorMessage()) && void 0 !== n ? n : _.intl.string(_.t.eAn6z8)
                });
        }
    } else
        r.Z.dispatch({
            type: 'SECURE_FRAMES_SETTINGS_UPDATE',
            persistentCodesEnabled: t
        }),
            null == e || e();
}
async function h(t) {
    let e = (function () {
        let t = l.Z.getVoiceStateForUser(a.default.getId()),
            e = c.Z.getChannel(null == t ? void 0 : t.channelId);
        return a.default.getSessionId() === (null == t ? void 0 : t.sessionId) && null != e && e.type !== d.d4z.GUILD_STAGE_VOICE ? e.id : null;
    })();
    null != e
        ? E.Z.openSecureFramesUpdateConfirmation({
              title: t ? _.intl.string(_.t.DRFN1N) : _.intl.string(_.t.q29xJy),
              subtitle: t ? _.intl.string(_.t.y015ZW) : _.intl.string(_.t.E66FQk),
              confirmText: _.intl.string(_.t.aTuFYW),
              onConfirm: async () => {
                  await S(t, () => {
                      o.default.disconnect(), o.default.selectVoiceChannel(e);
                  });
              }
          })
        : await S(t);
}
e.Z = {
    clearUploadedKeyVersions: function () {
        r.Z.dispatch({ type: 'SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR' });
    },
    updatePersistentCodesEnabled: h,
    addUploadedKeyVersion: function (t) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD',
            keyVersion: t
        });
    },
    createSecureFramesVerifiedKey: function (t, e) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_VERIFIED_KEY_CREATE',
            userId: t,
            key: e
        });
    },
    deleteSecureFramesVerifiedKey: function (t, e) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_VERIFIED_KEY_DELETE',
            userId: t,
            serializedKey: e
        });
    },
    deleteSecureFramesUserVerifiedKeys: function (t) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE',
            userId: t
        });
    },
    createSecureFramesTransientKey: function (t, e) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_TRANSIENT_KEY_CREATE',
            userId: t,
            key: e
        });
    },
    deleteSecureFramesTransientKey: function (t) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_TRANSIENT_KEY_DELETE',
            userId: t
        });
    }
};
