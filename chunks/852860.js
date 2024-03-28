"use strict";
n.r(t), n("47120");
var r = n("735250"),
  s = n("470079"),
  o = n("718017"),
  i = n("692547"),
  a = n("481060"),
  l = n("585483"),
  u = n("981631"),
  d = n("689938"),
  c = n("394692");
t.default = function(e) {
  var t;
  let {
    message: n,
    errorMessage: h,
    submitting: f,
    onReset: m,
    onSave: E,
    onSaveText: p,
    onResetText: _,
    onSaveButtonColor: T,
    disabled: x,
    saveButtonTooltip: N
  } = e, R = s.useRef(null), [{
    spring: g
  }, I] = (0, o.useSpring)(() => ({
    spring: 0
  }));
  s.useEffect(() => {
    function e() {
      I({
        spring: 1,
        config: o.config.gentle
      }), I({
        spring: 0,
        config: o.config.gentle,
        delay: 1e3
      })
    }
    return l.ComponentDispatch.subscribe(u.ComponentActions.EMPHASIZE_NOTICE, e), () => {
      l.ComponentDispatch.unsubscribe(u.ComponentActions.EMPHASIZE_NOTICE, e)
    }
  }, [I]);
  let C = g.to({
      range: [0, 1],
      output: [(0, a.useToken)(i.default.colors.TEXT_NORMAL).hex(), (0, a.useToken)(i.default.unsafe_rawColors.WHITE_500).hex()]
    }),
    v = g.to({
      range: [0, 1],
      output: [(0, a.useToken)(i.default.colors.BACKGROUND_FLOATING).hex(), (0, a.useToken)(i.default.colors.STATUS_DANGER).hex()]
    }),
    F = g.to({
      range: [0, 1],
      output: [(0, a.useToken)(i.default.colors.TEXT_DANGER).hex(), (0, a.useToken)(i.default.unsafe_rawColors.WHITE_500).hex()]
    });
  return (0, r.jsx)(o.animated.div, {
    className: c.container,
    style: {
      backgroundColor: v
    },
    children: (0, r.jsx)("div", {
      className: c.flexContainer,
      ref: R,
      children: (0, r.jsxs)(a.FocusRingScope, {
        containerRef: R,
        children: [(0, r.jsx)("div", {
          className: c.shrinkingContainer,
          children: (0, r.jsx)(o.animated.div, {
            className: c.message,
            style: {
              color: null != h ? F : C
            },
            children: null !== (t = null != h ? h : n) && void 0 !== t ? t : d.default.Messages.SETTINGS_NOTICE_MESSAGE
          })
        }), (0, r.jsxs)("div", {
          className: c.actions,
          children: [null != m && (0, r.jsx)(a.Button, {
            className: c.resetButton,
            size: a.Button.Sizes.SMALL,
            color: a.Button.Colors.PRIMARY,
            look: a.Button.Looks.LINK,
            onClick: m,
            children: (0, r.jsx)(o.animated.span, {
              style: {
                color: C
              },
              children: null != _ ? _ : d.default.Messages.RESET
            })
          }), null != E ? (0, r.jsx)(a.Tooltip, {
            text: N,
            children: e => (0, r.jsx)(a.Button, {
              size: a.Button.Sizes.SMALL,
              color: null != T ? T : a.Button.Colors.GREEN,
              submitting: f,
              disabled: x,
              onClick: E,
              ...e,
              children: null != p ? p : d.default.Messages.SAVE_CHANGES
            })
          }) : null]
        })]
      })
    })
  })
}