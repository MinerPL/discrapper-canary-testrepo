"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("873546"),
  i = n("442837"),
  r = n("481060"),
  o = n("433355"),
  u = n("373791"),
  d = n("301822"),
  c = n("705130");
t.default = l.memo(function(e) {
  let {
    message: t,
    subtitle: n,
    countdown: f,
    buttonText: h,
    buttonColor: m,
    buttonSubmitting: p,
    onButtonClick: E,
    imageSrc: C,
    animationSrc: g,
    secondaryButtonText: S,
    onSecondaryButtonClick: _,
    children: T,
    useReducedMotion: I = !1
  } = e, A = (0, i.useStateFromStores)([o.default], () => o.default.getState().isMembersOpen);
  if (s.isMobile && A) return null;
  if (null == t) return (0, a.jsx)(a.Fragment, {
    children: l.Children.only(T)
  });
  let N = null;
  return null != C ? N = (0, a.jsx)("img", {
    alt: "",
    src: C,
    className: c.image
  }) : null != g && (N = (0, a.jsx)(d.default, {
    importData: g,
    shouldAnimate: !I,
    className: c.animation
  })), (0, a.jsxs)("div", {
    className: c.wrapper,
    children: [(0, a.jsxs)("div", {
      className: c.content,
      children: [N, (0, a.jsxs)("div", {
        className: c.text,
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          className: c.title,
          children: t
        }), null != n && (0, a.jsx)(r.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          children: n
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: c.buttonContainer,
      children: [null != S && (0, a.jsx)(r.Button, {
        className: c.button,
        size: r.Button.Sizes.SMALL,
        onClick: _,
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.PRIMARY,
        submitting: p,
        children: S
      }), null != h && (0, a.jsx)(r.Button, {
        className: c.button,
        innerClassName: c.innerButton,
        size: r.Button.Sizes.SMALL,
        onClick: E,
        submitting: p,
        color: null != m ? m : r.Button.Colors.PRIMARY,
        children: h
      })]
    }), null != f && (0, a.jsx)(u.default, {
      className: c.countdown,
      deadline: f
    })]
  })
})