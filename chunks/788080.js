"use strict";
n.r(t), n.d(t, {
  capitalizeText: function() {
    return u
  },
  getAppealSignalDisplayText: function() {
    return N
  },
  getAttachmentFilename: function() {
    return S
  },
  getClassificationRelativeIncidentTime: function() {
    return a
  },
  getRequestReviewErrorFromCode: function() {
    return L
  },
  isFlaggedContentEmpty: function() {
    return A
  },
  isGuildClassification: function() {
    return T
  },
  parseMessageEmbedForProps: function() {
    return _
  }
}), n("724458");
var i = n("913527"),
  o = n.n(i),
  E = n("118139"),
  r = n("531441"),
  s = n("800530"),
  l = n("981631"),
  c = n("959517"),
  I = n("689938");

function a(e) {
  return o()().to(o()(e))
}

function S(e) {
  var t, n;
  return (0, E.isImageFile)(e.filename) || (0, E.isVideoFile)(e.filename) ? "".concat(c.SPOILER_ATTACHMENT_PREFIX).concat(null !== (t = e.filename) && void 0 !== t ? t : ".png") : null !== (n = e.filename) && void 0 !== n ? n : ""
}

function _(e) {
  var t, n, i, o;
  if (null == e.fields) return;
  let E = e.fields.reduce((e, t) => (e[t.rawName] = t.rawValue, e), {});
  return {
    header: null !== (t = E[s.SafetySystemNotificationEmbedKeys.HEADER]) && void 0 !== t ? t : "",
    icon: E[s.SafetySystemNotificationEmbedKeys.ICON_TYPE],
    body: null !== (n = E[s.SafetySystemNotificationEmbedKeys.BODY]) && void 0 !== n ? n : "",
    ctas: (null !== (i = E[s.SafetySystemNotificationEmbedKeys.CTAS]) && void 0 !== i ? i : "").split(",").filter(e => "" !== e),
    timestamp: parseFloat(null !== (o = E[s.SafetySystemNotificationEmbedKeys.TIMESTAMP]) && void 0 !== o ? o : 0),
    theme: E[s.SafetySystemNotificationEmbedKeys.THEME],
    learn_more_link: E[s.SafetySystemNotificationEmbedKeys.LEARN_MORE_LINK],
    classification_id: E[s.SafetySystemNotificationEmbedKeys.CLASSIFICATION_ID]
  }
}

function A(e) {
  if (e.type === r.ContentIdType.MESSAGE) return "" === e.content && 0 === e.attachments.length;
  return !0
}
let N = e => ({
    [s.AppealIngestionSignal.DIDNT_VIOLATE_POLICY]: I.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DIDNT_VIOLATE_POLICY,
    [s.AppealIngestionSignal.TOO_STRICT_UNFAIR]: I.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_TOO_STRICT_UNFAIR,
    [s.AppealIngestionSignal.DONT_AGREE_PENALTY]: I.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DONT_AGREE_PENALTY,
    [s.AppealIngestionSignal.SOMETHING_ELSE]: I.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SOMETHING_ELSE
  })[e],
  u = e => null == e || 0 === e.length ? "" : 1 === e.length ? e.toUpperCase() : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));

function T(e) {
  return null != e && null != e.guild_metadata
}
let L = e => {
  if (e === l.AbortCodes.DSA_APPEAL_REQUEST_DEFLECTION) return I.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_DEFLECTION_ERROR;
  return I.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ERROR
}