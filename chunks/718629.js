var r = n(570140),
  i = n(668781),
  a = n(881052),
  s = n(352954),
  o = n(630759),
  E = n(651941),
  u = n(760373),
  c = n(689938);
async function l(e) {
  if (e) {
r.Z.dispatch({
  type: 'SECURE_FRAMES_SETTINGS_UPDATE',
  persistentCodesEnabled: e
});
try {
  await (0, o.om)(u.GB);
} catch (n) {
  var t;
  let e = new a.Hx(n);
  r.Z.dispatch({
    type: 'SECURE_FRAMES_SETTINGS_UPDATE',
    persistentCodesEnabled: !1
  }), i.Z.show({
    title: c.Z.Messages.ERROR_GENERIC_TITLE,
    body: null !== (t = e.getAnyErrorMessage()) && void 0 !== t ? t : c.Z.Messages.GENERIC_ERROR_BODY
  });
}
  } else {
let t = () => {
  r.Z.dispatch({
    type: 'SECURE_FRAMES_SETTINGS_UPDATE',
    persistentCodesEnabled: e
  }), r.Z.dispatch({
    type: 'SECURE_FRAMES_ALL_VERIFIED_KEYS_DELETE'
  });
};
E.Z.getUserIds().length > 0 ? s.Z.openSecureFramesUpdateConfirmation({
  title: c.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_TITLE,
  subtitle: c.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_SUBTITLE,
  onConfirm: t
}) : t();
  }
}
t.Z = {
  updatePersistentCodesEnabled: l,
  addCurrentUserUploadedKeyVersionCached: function(e) {
r.Z.dispatch({
  type: 'SECURE_FRAMES_UPLOAD_PUBLIC_KEY_SUCCESS',
  keyVersion: e
});
  },
  createVerifiedKey: function(e, t) {
r.Z.dispatch({
  type: 'SECURE_FRAMES_VERIFIED_KEY_CREATE',
  userId: e,
  key: t
});
  },
  deleteVerifiedKey: function(e, t) {
r.Z.dispatch({
  type: 'SECURE_FRAMES_VERIFIED_KEY_DELETE',
  userId: e,
  serializedKey: t
});
  },
  deleteAllUserVerifiedKeys: function(e) {
r.Z.dispatch({
  type: 'SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE',
  userId: e
});
  },
  createSecureFramesTransientKey: function(e, t) {
r.Z.dispatch({
  type: 'SECURE_FRAMES_TRANSIENT_KEY_CREATE',
  userId: e,
  key: t
});
  },
  deleteSecureFramesTransientKey: function(e) {
r.Z.dispatch({
  type: 'SECURE_FRAMES_TRANSIENT_KEY_DELETE',
  userId: e
});
  }
};