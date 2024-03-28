"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("735250");
n("470079");
var u = n("481060"),
  a = n("572004"),
  s = n("592126"),
  d = n("981631"),
  i = n("689938");

function r(e, t, n) {
  let r = null != n,
    {
      isMember: o
    } = (0, s.default)(t, e);
  if (!o) return null;

  function c() {
    let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (0, a.copy)("".concat(location.protocol, "//").concat(location.host).concat(d.Routes.GUILD_EVENT_DETAILS(t, e, l ? null : n))), (0, u.showToast)((0, u.createToast)(i.default.Messages.COPIED_LINK, u.ToastType.SUCCESS))
  }
  return (0, l.jsx)(u.MenuItem, {
    id: i.default.Messages.COPY_EVENT_LINK,
    label: i.default.Messages.COPY_EVENT_LINK,
    action: r ? void 0 : () => c(!0),
    children: r && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(u.MenuItem, {
        id: i.default.Messages.COPY_RECURRENCE_LINK,
        label: i.default.Messages.COPY_RECURRENCE_LINK,
        action: () => c(!1)
      }), (0, l.jsx)(u.MenuItem, {
        id: i.default.Messages.COPY_SERIES_LINK,
        label: i.default.Messages.COPY_SERIES_LINK,
        action: () => c(!0)
      })]
    })
  })
}