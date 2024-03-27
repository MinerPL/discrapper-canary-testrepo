"use strict";
A.r(t), A.d(t, {
  default: function() {
    return c
  }
}), A("222007");
var a = A("37983"),
  l = A("884691"),
  n = A("146606"),
  r = A("669491"),
  s = A("77078"),
  i = A("659500"),
  o = A("49111"),
  d = A("782340"),
  u = A("645780"),
  c = function(e) {
    var t;
    let {
      message: A,
      errorMessage: c,
      submitting: f,
      onReset: g,
      onSave: C,
      onSaveText: h,
      onResetText: m,
      onSaveButtonColor: p,
      disabled: T,
      saveButtonTooltip: v
    } = e, U = l.useRef(null), [{
      spring: I
    }, E] = (0, n.useSpring)(() => ({
      spring: 0
    }));
    l.useEffect(() => {
      function e() {
        E({
          spring: 1,
          config: n.config.gentle
        }), E({
          spring: 0,
          config: n.config.gentle,
          delay: 1e3
        })
      }
      return i.ComponentDispatch.subscribe(o.ComponentActions.EMPHASIZE_NOTICE, e), () => {
        i.ComponentDispatch.unsubscribe(o.ComponentActions.EMPHASIZE_NOTICE, e)
      }
    }, [E]);
    let x = I.to({
        range: [0, 1],
        output: [(0, s.useToken)(r.default.colors.TEXT_NORMAL).hex(), (0, s.useToken)(r.default.unsafe_rawColors.WHITE_500).hex()]
      }),
      N = I.to({
        range: [0, 1],
        output: [(0, s.useToken)(r.default.colors.BACKGROUND_FLOATING).hex(), (0, s.useToken)(r.default.colors.STATUS_DANGER).hex()]
      }),
      D = I.to({
        range: [0, 1],
        output: [(0, s.useToken)(r.default.colors.TEXT_DANGER).hex(), (0, s.useToken)(r.default.unsafe_rawColors.WHITE_500).hex()]
      });
    return (0, a.jsx)(n.animated.div, {
      className: u.container,
      style: {
        backgroundColor: N
      },
      children: (0, a.jsx)("div", {
        className: u.flexContainer,
        ref: U,
        children: (0, a.jsxs)(s.FocusRingScope, {
          containerRef: U,
          children: [(0, a.jsx)("div", {
            className: u.shrinkingContainer,
            children: (0, a.jsx)(n.animated.div, {
              className: u.message,
              style: {
                color: null != c ? D : x
              },
              children: null !== (t = null != c ? c : A) && void 0 !== t ? t : d.default.Messages.SETTINGS_NOTICE_MESSAGE
            })
          }), (0, a.jsxs)("div", {
            className: u.actions,
            children: [null != g && (0, a.jsx)(s.Button, {
              className: u.resetButton,
              size: s.Button.Sizes.SMALL,
              color: s.Button.Colors.PRIMARY,
              look: s.Button.Looks.LINK,
              onClick: g,
              children: (0, a.jsx)(n.animated.span, {
                style: {
                  color: x
                },
                children: null != m ? m : d.default.Messages.RESET
              })
            }), null != C ? (0, a.jsx)(s.Tooltip, {
              text: v,
              children: e => (0, a.jsx)(s.Button, {
                size: s.Button.Sizes.SMALL,
                color: null != p ? p : s.Button.Colors.GREEN,
                submitting: f,
                disabled: T,
                onClick: C,
                ...e,
                children: null != h ? h : d.default.Messages.SAVE_CHANGES
              })
            }) : null]
          })]
        })
      })
    })
  }