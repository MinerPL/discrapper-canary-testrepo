n.d(t, {
  b: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(846027),
  r = n(468026),
  l = n(689938);
let o = null;

function c() {
  null !== o && (0, a.closeModal)(o), o = null;
}

function u() {
  s.Z.setSilenceWarning(!1), c();
}

function d() {
  o = (0, a.openModal)(e => (0, i.jsx)(r.default, {
title: l.Z.Messages.CONFIRM_DISABLE_SILENCE_TITLE,
body: l.Z.Messages.CONFIRM_DISABLE_SILENCE_BODY,
secondaryConfirmText: l.Z.Messages.CONFIRM_DISABLE_SILENCE_DONT_SHOW,
onConfirmSecondary: u,
onConfirm: c,
confirmText: l.Z.Messages.OKAY,
...e
  }));
}