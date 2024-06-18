"use strict";
E.d(e, {
  FB: function() {
    return l
  },
  Pu: function() {
    return O
  },
  Vt: function() {
    return L
  },
  XX: function() {
    return o
  },
  Zs: function() {
    return C
  },
  c7: function() {
    return T
  },
  eS: function() {
    return s
  },
  fr: function() {
    return c
  },
  ox: function() {
    return u
  }
}), E(724458);
var t = E(913527),
  I = E.n(t),
  _ = E(118139),
  i = E(531441),
  r = E(800530),
  N = E(981631),
  S = E(959517),
  A = E(689938);

function o(n) {
  return I()().to(I()(n))
}

function s(n) {
  var e, E;
  return (0, _.CO)(n.filename) || (0, _.NU)(n.filename) ? "".concat(S._j).concat(null !== (e = n.filename) && void 0 !== e ? e : ".png") : null !== (E = n.filename) && void 0 !== E ? E : ""
}

function c(n) {
  var e, E, t, I;
  if (null == n.fields) return;
  let _ = n.fields.reduce((n, e) => (n[e.rawName] = e.rawValue, n), {});
  return {
    header: null !== (e = _[r.I5.HEADER]) && void 0 !== e ? e : "",
    icon: _[r.I5.ICON_TYPE],
    body: null !== (E = _[r.I5.BODY]) && void 0 !== E ? E : "",
    ctas: (null !== (t = _[r.I5.CTAS]) && void 0 !== t ? t : "").split(",").filter(n => "" !== n),
    timestamp: parseFloat(null !== (I = _[r.I5.TIMESTAMP]) && void 0 !== I ? I : 0),
    theme: _[r.I5.THEME],
    learn_more_link: _[r.I5.LEARN_MORE_LINK],
    classification_id: _[r.I5.CLASSIFICATION_ID]
  }
}

function L(n) {
  if (n.type === i.lK.MESSAGE) return "" === n.content && 0 === n.attachments.length;
  return !0
}
let u = n => ({
    [r.bK.DIDNT_VIOLATE_POLICY]: A.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DIDNT_VIOLATE_POLICY,
    [r.bK.TOO_STRICT_UNFAIR]: A.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_TOO_STRICT_UNFAIR,
    [r.bK.DONT_AGREE_PENALTY]: A.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DONT_AGREE_PENALTY,
    [r.bK.SOMETHING_ELSE]: A.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SOMETHING_ELSE
  })[n],
  T = n => null == n || 0 === n.length ? "" : 1 === n.length ? n.toUpperCase() : "".concat(n.charAt(0).toUpperCase()).concat(n.slice(1));

function l(n) {
  return null != n && null != n.guild_metadata
}
let C = n => {
  if (n === N.evJ.DSA_APPEAL_REQUEST_DEFLECTION) return A.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_DEFLECTION_ERROR;
  return A.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ERROR
};

function O(n) {
  let e = n.max_expiration_time;
  if (null == e) return null;
  try {
    return new Date(e)
  } catch {
    return null
  }
}