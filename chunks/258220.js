"use strict";
n.r(t), n.d(t, {
  ACTIVITY_ENCOURAGES_HW_ACCELERATION: function() {
    return h
  },
  default: function() {
    return _
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("153867"),
  r = n("835473"),
  o = n("285952"),
  u = n("626135"),
  d = n("998502"),
  c = n("981631"),
  f = n("689938"),
  E = n("67558");
let h = "Activity Encourages Hardware Acceleration";

function _(e) {
  var t;
  let {
    applicationId: n,
    ..._
  } = e, [C, S] = s.useState(!1), [m] = (0, r.default)([n]), p = null !== (t = null == m ? void 0 : m.name) && void 0 !== t ? t : "This Activity";
  s.useEffect(() => {
    u.default.track(c.AnalyticEvents.OPEN_MODAL, {
      type: h
    })
  }, []);
  let I = () => {
    let e = "temporary";
    C && (e = "permanent", i.default.updatedUnsyncedSettings({
      disableActivityHardwareAccelerationPrompt: !0
    })), u.default.track(c.AnalyticEvents.MODAL_DISMISSED, {
      type: h,
      dismiss_type: e
    }), _.onClose()
  };
  return (0, a.jsxs)(l.ModalRoot, {
    className: E.root,
    "aria-label": f.default.Messages.ACTIVITY_HARDWARE_ACCELERATION_BETTER_TITLE,
    ..._,
    children: [(0, a.jsxs)(l.ModalHeader, {
      separator: !1,
      children: [(0, a.jsx)(l.Text, {
        className: E.__invalid_header,
        variant: "text-lg/normal",
        children: f.default.Messages.ACTIVITY_HARDWARE_ACCELERATION_BETTER_TITLE
      }), (0, a.jsx)(l.ModalCloseButton, {
        onClick: I,
        className: E.closeButton
      })]
    }), (0, a.jsx)(l.ModalContent, {
      className: E.content,
      children: (0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        className: E.__invalid_ratingBody,
        children: f.default.Messages.ACTIVITY_HARDWARE_ACCELERATION_BETTER_BODY.format({
          applicationName: p
        })
      })
    }), (0, a.jsxs)(l.ModalFooter, {
      className: E.footer,
      direction: o.default.Direction.HORIZONTAL,
      children: [(0, a.jsx)(l.Checkbox, {
        type: l.Checkbox.Types.INVERTED,
        size: 18,
        value: C,
        onChange: () => S(!C),
        children: (0, a.jsx)(l.Text, {
          variant: "text-sm/normal",
          children: f.default.Messages.DONT_SHOW_AGAIN
        })
      }), (0, a.jsx)(l.Button, {
        color: l.Button.Colors.PRIMARY,
        onClick: I,
        children: f.default.Messages.ACTIVITY_HARDWARE_ACCELERATION_NO_THANKS
      }), (0, a.jsx)(l.Button, {
        color: l.Button.Colors.BRAND,
        onClick: () => {
          u.default.track(c.AnalyticEvents.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, {
            application_id: n
          }), d.default.setEnableHardwareAcceleration(!0)
        },
        children: f.default.Messages.ACTIVITY_HARDWARE_ACCELERATION_TURN_IT_ON
      })]
    })]
  })
}