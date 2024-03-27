"use strict";
n.r(t), n.d(t, {
  getClassificationRelativeIncidentTime: function() {
    return c
  },
  getAttachmentFilename: function() {
    return E
  },
  parseMessageEmbedForProps: function() {
    return f
  },
  isFlaggedContentEmpty: function() {
    return _
  },
  getAppealSignalDisplayText: function() {
    return T
  },
  capitalizeText: function() {
    return I
  },
  isGuildClassification: function() {
    return m
  },
  getRequestReviewErrorFromCode: function() {
    return N
  }
}), n("808653");
var s = n("866227"),
  a = n.n(s),
  l = n("651693"),
  i = n("908539"),
  r = n("170213"),
  o = n("49111"),
  u = n("894488"),
  d = n("782340");

function c(e) {
  return a().to(a(e))
}

function E(e) {
  var t, n;
  return (0, l.isImageFile)(e.filename) || (0, l.isVideoFile)(e.filename) ? "".concat(u.SPOILER_ATTACHMENT_PREFIX).concat(null !== (t = e.filename) && void 0 !== t ? t : ".png") : null !== (n = e.filename) && void 0 !== n ? n : ""
}

function f(e) {
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
let T = e => {
    let t = {
      [r.AppealIngestionSignal.DIDNT_VIOLATE_POLICY]: d.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DIDNT_VIOLATE_POLICY,
      [r.AppealIngestionSignal.TOO_STRICT_UNFAIR]: d.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_TOO_STRICT_UNFAIR,
      [r.AppealIngestionSignal.DONT_AGREE_PENALTY]: d.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DONT_AGREE_PENALTY,
      [r.AppealIngestionSignal.SOMETHING_ELSE]: d.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SOMETHING_ELSE
    };
    return t[e]
  },
  I = e => null == e || 0 === e.length ? "" : 1 === e.length ? e.toUpperCase() : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));

function m(e) {
  return null != e && null != e.guild_metadata
}
let N = e => {
  if (e === o.AbortCodes.DSA_APPEAL_REQUEST_DEFLECTION) return d.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_DEFLECTION_ERROR;
  return d.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ERROR
}