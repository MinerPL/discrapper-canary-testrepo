t.d(n, {
    Z: function () {
        return _;
    }
}),
    t(47120);
var i = t(735250);
t(470079);
var r = t(442837),
    u = t(481060),
    l = t(740492),
    a = t(27584),
    o = t(295510),
    d = t(394059),
    s = t(65154),
    c = t(689938);
function _(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Yn.DEFAULT,
        [t, _, E] = (0, a.Z)(e, n),
        I = (0, r.e7)([l.ZP], () => l.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
    return t
        ? (0, i.jsx)(u.MenuCheckboxItem, {
              id: 'self-video-hide',
              label: c.Z.Messages.SHOW_SELF_VIDEO,
              checked: !_,
              action: () => {
                  if (I || _) return E(!_);
                  (0, u.openModal)((e) =>
                      (0, i.jsx)(o.Z, {
                          ...e,
                          type: d.K.VIDEO,
                          onConfirm: () => E(!_)
                      })
                  );
              }
          })
        : null;
}
