"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("692547"),
  i = n("780384"),
  r = n("481060"),
  o = n("367907"),
  u = n("210887"),
  d = n("87888"),
  c = n("626135"),
  f = n("981631"),
  h = n("689938"),
  m = n("68236"),
  p = n("946278");

function E(e) {
  let {
    onClose: t,
    onConfirm: E,
    onCancel: C,
    channel: g,
    analyticsType: S,
    popoutText: _,
    animation: T
  } = e;
  l.useEffect(() => {
    c.default.track(f.AnalyticEvents.OPEN_POPOUT, {
      type: S,
      ...(0, o.collectChannelAnalyticsMetadata)(g)
    })
  }, [S, g]);
  let I = l.useCallback(() => {
      null == E || E(), t()
    }, [E, t]),
    A = l.useCallback(() => {
      null == C || C(), t()
    }, [C, t]),
    N = l.useRef(null);
  return l.useEffect(() => {
    let e;
    let t = u.default.theme,
      a = !1;
    return null != T && (async () => {
      let [{
        default: l
      }, s] = await Promise.all([Promise.resolve().then(n.t.bind(n, "500923", 23)), (0, i.isThemeDark)(t) ? T.dark() : T.light()]);
      !a && null != N.current && (e = l.loadAnimation({
        container: N.current,
        renderer: "svg",
        loop: !0,
        autoplay: !0,
        animationData: s
      }))
    })(), () => {
      a = !0, null != e && (e.destroy(), e = void 0)
    }
  }, [T]), (0, a.jsx)(r.Dialog, {
    "aria-labelledby": "content-warning-popout-label",
    children: (0, a.jsxs)("form", {
      className: m.contentWarningPopout,
      onSubmit: I,
      children: [(0, a.jsxs)("div", {
        className: m.body,
        children: [null != T && (0, a.jsx)("div", {
          className: m.animation,
          ref: N
        }), (0, a.jsxs)("div", {
          className: m.content,
          children: [(0, a.jsx)("div", {
            className: m.header,
            children: h.default.Messages.SELF_XSS_HEADER
          }), (0, a.jsx)(r.Text, {
            id: "content-warning-popout-label",
            className: p.markup,
            variant: "text-sm/normal",
            children: _.body
          }), (0, a.jsxs)("div", {
            className: m.buttonWrapper,
            children: [(0, a.jsxs)("div", {
              className: m.buttonContainer,
              children: [(0, a.jsx)(r.Button, {
                className: m.button,
                color: r.Button.Colors.PRIMARY,
                onClick: A,
                children: h.default.Messages.EDIT_MESSAGE
              }), (0, a.jsx)(r.Text, {
                variant: "text-xs/normal",
                className: m.buttonHint,
                children: h.default.Messages.EVERYONE_POPOUT_ESC.format()
              })]
            }), (0, a.jsxs)("div", {
              className: m.buttonContainer,
              children: [(0, a.jsx)(r.Button, {
                className: m.button,
                onClick: I,
                type: "submit",
                autoFocus: !0,
                children: h.default.Messages.EVERYONE_POPOUT_SEND_NOW
              }), (0, a.jsx)(r.Text, {
                variant: "text-xs/normal",
                className: m.buttonHint,
                children: h.default.Messages.EVERYONE_POPOUT_ENTER.format()
              })]
            })]
          })]
        })]
      }), null != _.footer && "" !== _.footer ? (0, a.jsxs)("div", {
        className: m.footer,
        children: [(0, a.jsx)(d.default, {
          color: s.default.unsafe_rawColors.PRIMARY_400.css,
          className: m.icon
        }), (0, a.jsx)(r.Text, {
          variant: "text-sm/normal",
          children: _.footer
        })]
      }) : null]
    })
  })
}