"use strict";
n.r(t), n.d(t, {
  useCustomStatusMenuItem: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var s = n("803997"),
  l = n.n(s),
  i = n("481060"),
  r = n("788307"),
  o = n("2052"),
  u = n("785717"),
  d = n("695346"),
  c = n("696202"),
  f = n("689938"),
  E = n("832805");

function h(e, t) {
  let s = (0, o.useAnalyticsContext)(),
    {
      trackUserProfileAction: h
    } = (0, u.useUserProfileAnalyticsContext)();

  function _(e) {
    e.stopPropagation(), d.CustomStatusSetting.updateSetting(void 0)
  }

  function C() {
    h({
      action: "PRESS_SET_CUSTOM_STATUS"
    }), (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("47484")]).then(n.bind(n, "211065"));
      return t => (0, a.jsx)(e, {
        sourceAnalyticsContext: s,
        ...t
      })
    })
  }
  if (null != e) {
    let n = null != e.emoji ? t => {
      let {
        className: n
      } = t;
      return (0, a.jsx)(r.ActivityEmoji, {
        className: n,
        emoji: e.emoji,
        animate: !0,
        hideTooltip: !0
      })
    } : void 0;
    return (0, a.jsx)(i.MenuItem, {
      id: "edit-custom-status",
      label: f.default.Messages.CUSTOM_STATUS_EDIT_CUSTOM_STATUS_PLACEHOLDER,
      icon: n,
      focusedClassName: t,
      showIconFirst: !0,
      hint: e => (0, a.jsx)(i.Clickable, {
        ...e,
        onClick: _,
        tabIndex: -1,
        children: (0, a.jsx)(c.default, {
          width: 18,
          height: 18
        })
      }),
      action: C
    })
  }
  return (0, a.jsx)(i.MenuItem, {
    id: "set-custom-status",
    focusedClassName: t,
    label: f.default.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS_CTA,
    icon: e => (0, a.jsx)("div", {
      className: l()(E.customEmojiPlaceholder, e)
    }),
    action: C,
    showIconFirst: !0
  })
}