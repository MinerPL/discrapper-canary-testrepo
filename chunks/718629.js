var n = s(570140),
  a = s(668781),
  i = s(881052),
  r = s(352954),
  o = s(630759),
  l = s(651941),
  c = s(760373),
  d = s(689938);
async function _(e) {
  if (e) {
n.Z.dispatch({
  type: 'SECURE_FRAMES_SETTINGS_UPDATE',
  persistentCodesEnabled: e
});
try {
  await (0, o.om)(c.GB);
} catch (s) {
  var t;
  let e = new i.Hx(s);
  n.Z.dispatch({
    type: 'SECURE_FRAMES_SETTINGS_UPDATE',
    persistentCodesEnabled: !1
  }), a.Z.show({
    title: d.Z.Messages.ERROR_GENERIC_TITLE,
    body: null !== (t = e.getAnyErrorMessage()) && void 0 !== t ? t : d.Z.Messages.GENERIC_ERROR_BODY
  });
}
  } else {
let t = () => {
  n.Z.dispatch({
    type: 'SECURE_FRAMES_SETTINGS_UPDATE',
    persistentCodesEnabled: e
  }), n.Z.dispatch({
    type: 'SECURE_FRAMES_ALL_VERIFIED_KEYS_DELETE'
  });
};
l.Z.getUserIds().length > 0 ? r.Z.openSecureFramesUpdateConfirmation({
  title: d.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_TITLE,
  subtitle: d.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_SUBTITLE,
  onConfirm: t
}) : t();
  }
}
t.Z = {
  updatePersistentCodesEnabled: _,
  addCurrentUserUploadedKeyVersionCached: function(e) {
n.Z.dispatch({
  type: 'SECURE_FRAMES_UPLOAD_PUBLIC_KEY_SUCCESS',
  keyVersion: e
});
  },
  createVerifiedKey: function(e, t) {
n.Z.dispatch({
  type: 'SECURE_FRAMES_VERIFIED_KEY_CREATE',
  userId: e,
  key: t
});
  },
  deleteVerifiedKey: function(e, t) {
n.Z.dispatch({
  type: 'SECURE_FRAMES_VERIFIED_KEY_DELETE',
  userId: e,
  serializedKey: t
});
  },
  deleteAllUserVerifiedKeys: function(e) {
n.Z.dispatch({
  type: 'SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE',
  userId: e
});
  },
  createSecureFramesTransientKey: function(e, t) {
n.Z.dispatch({
  type: 'SECURE_FRAMES_TRANSIENT_KEY_CREATE',
  userId: e,
  key: t
});
  },
  deleteSecureFramesTransientKey: function(e) {
n.Z.dispatch({
  type: 'SECURE_FRAMES_TRANSIENT_KEY_DELETE',
  userId: e
});
  }
};