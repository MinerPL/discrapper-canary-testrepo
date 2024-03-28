"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("780384"),
  i = n("481060"),
  r = n("410030"),
  o = n("367907"),
  u = n("984370"),
  d = n("93879"),
  c = n("981631"),
  f = n("689938"),
  h = n("639556"),
  m = n("66737"),
  p = n("525377");
t.default = () => {
  let e = (0, r.default)();
  l.useEffect(() => {
    o.default.trackWithMetadata(c.AnalyticEvents.GUILD_OUTAGE_VIEWED, {})
  }, []);
  let t = (0, s.isThemeDark)(e) ? m : p;
  return (0, a.jsxs)("div", {
    className: h.container,
    children: [(0, a.jsxs)(u.default, {
      toolbar: (0, a.jsx)(l.Fragment, {}),
      children: [(0, a.jsx)(u.default.Icon, {
        icon: d.default,
        "aria-hidden": !0
      }), (0, a.jsx)(u.default.Title, {
        children: f.default.Messages.GUILD_UNAVAILABLE_HEADER
      })]
    }), (0, a.jsxs)("div", {
      className: h.content,
      children: [(0, a.jsx)("img", {
        alt: "",
        className: h.splashImage,
        src: t
      }), (0, a.jsx)(i.Heading, {
        className: h.splashHeader,
        variant: "heading-lg/medium",
        children: f.default.Messages.GUILD_UNAVAILABLE_TITLE
      }), (0, a.jsx)(i.Text, {
        className: h.splashText,
        variant: "text-md/normal",
        children: f.default.Messages.GUILD_UNAVAILABLE_BODY
      })]
    })]
  })
}