"use strict";
n.r(t), n.d(t, {
  capitalizeText: function() {
    return T
  },
  getAppealSignalDisplayText: function() {
    return m
  },
  getAttachmentFilename: function() {
    return f
  },
  getClassificationExpiration: function() {
    return h
  },
  getClassificationRelativeIncidentTime: function() {
    return c
  },
  getRequestReviewErrorFromCode: function() {
    return p
  },
  isFlaggedContentEmpty: function() {
    return _
  },
  isGuildClassification: function() {
    return I
  },
  parseMessageEmbedForProps: function() {
    return E
  }
}), n("724458");
var s = n("913527"),
  a = n.n(s),
  l = n("118139"),
  i = n("531441"),
  r = n("800530"),
  o = n("981631"),
  u = n("959517"),
  d = n("689938");

function c(e) {
  return a()().to(a()(e))
}

function f(e) {
  var t, n;
  return (0, l.isImageFile)(e.filename) || (0, l.isVideoFile)(e.filename) ? "".concat(u.SPOILER_ATTACHMENT_PREFIX).concat(null !== (t = e.filename) && void 0 !== t ? t : ".png") : null !== (n = e.filename) && void 0 !== n ? n : ""
}

function E(e) {
  var t, n, s, a;
  if (null == e.fields) return;
  let l = e.fields.reduce((e, t) => (e[t.rawName] = t.rawValue, e), {});
  return {
    header: null !== (t = l[r.SafetySystemNotificationEmbedKeys.HEADER]) && void 0 !== t ? t : "",
    icon: l[r.SafetySystemNotificationEmbedKeys.ICON_TYPE],
    body: null !== (n = l[r.SafetySystemNotificationEmbedKeys.BODY]) && void 0 !== n ? n : "",
    ctas: (null !== (s = l[r.SafetySystemNotificationEmbedKeys.CTAS]) && void 0 !== s ? s : "").split(",").filter(e => "" !== e),
    timestamp: parseFloat(null !== (a = l[r.SafetySystemNotificationEmbedKeys.TIMESTAMP]) && void 0 !== a ? a : 0),
    theme: l[r.SafetySystemNotificationEmbedKeys.THEME],
    learn_more_link: l[r.SafetySystemNotificationEmbedKeys.LEARN_MORE_LINK],
    classification_id: l[r.SafetySystemNotificationEmbedKeys.CLASSIFICATION_ID]
  }
}

function _(e) {
  if (e.type === i.ContentIdType.MESSAGE) return "" === e.content && 0 === e.attachments.length;
  return !0
}
let m = e => ({
    [r.AppealIngestionSignal.DIDNT_VIOLATE_POLICY]: d.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DIDNT_VIOLATE_POLICY,
    [r.AppealIngestionSignal.TOO_STRICT_UNFAIR]: d.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_TOO_STRICT_UNFAIR,
    [r.AppealIngestionSignal.DONT_AGREE_PENALTY]: d.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DONT_AGREE_PENALTY,
    [r.AppealIngestionSignal.SOMETHING_ELSE]: d.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SOMETHING_ELSE
  })[e],
  T = e => null == e || 0 === e.length ? "" : 1 === e.length ? e.toUpperCase() : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));

function I(e) {
  return null != e && null != e.guild_metadata
}
let p = e => {
  if (e === o.AbortCodes.DSA_APPEAL_REQUEST_DEFLECTION) return d.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_DEFLECTION_ERROR;
  return d.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ERROR
};

function h(e) {
  let t = e.max_expiration_time;
  if (null == t) return null;
  try {
    return new Date(t)
  } catch {
    return null
  }
}