"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var a = n("37983");
n("884691");
var u = n("446674"),
  i = n("77078"),
  l = n("168973"),
  d = n("301603"),
  r = n("632616"),
  s = n("535348"),
  o = n("353927"),
  c = n("782340");

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MediaEngineContextTypes.DEFAULT,
    [n, f, E] = (0, d.default)(e, t),
    S = (0, u.useStateFromStores)([l.default], () => l.default.disableHideSelfStreamAndVideoConfirmationAlert);
  return n ? (0, a.jsx)(i.MenuCheckboxItem, {
    id: "self-video-hide",
    label: c.default.Messages.SHOW_SELF_VIDEO,
    checked: !f,
    action: () => {
      if (S || f) return E(!f);
      (0, i.openModal)(e => (0, a.jsx)(r.default, {
        ...e,
        type: s.SelfStreamAndVideoAlertType.VIDEO,
        onConfirm: () => E(!f)
      }))
    }
  }) : null
}