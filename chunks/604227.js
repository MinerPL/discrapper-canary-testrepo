"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("47120"), s("757143"), s("653041");
var a = s("735250");
s("470079");
var n = s("525654"),
  l = s.n(n),
  i = s("481060"),
  r = s("579806"),
  o = s("969832"),
  d = s("689938"),
  u = s("537090");

function c() {
  var e, t, s, n, c;
  let S = window.GLOBAL_ENV.RELEASE_CHANNEL,
    E = "279519",
    T = (e = "0e6229f96f388a45d0ea4b965761b0728c44542b", e.substring(0, 7)),
    _ = null === r.default || void 0 === r.default ? void 0 : r.default.remoteApp.getVersion(),
    f = null === r.default || void 0 === r.default ? void 0 : null === (t = (s = r.default.remoteApp).getBuildNumber) || void 0 === t ? void 0 : t.call(s),
    m = null === r.default || void 0 === r.default ? void 0 : null === (n = (c = r.default.remoteApp).getAppArch) || void 0 === n ? void 0 : n.call(c),
    g = function() {
      var e;
      let t = null === l() || void 0 === l() ? void 0 : null === (e = l().os) || void 0 === e ? void 0 : e.toString();
      if (null == t || null == r.default) return null;
      let s = r.default.os.release,
        [a, n, i] = s.split(".").map(e => parseInt(e, 10));
      return t.includes("Windows 10") && void 0 !== i && i >= 22e3 && (t = t.replace("Windows 10", "Windows 11")), t.includes("OS X 10.15.7") && void 0 !== a && a >= 20 && (t = "macOS ".concat(a - 9)), "".concat(t, " (").concat(s, ")")
    }(),
    h = [S, E, "(".concat(T, ")")];
  return null != _ && (h.push("Host ".concat(_)), null != m && h.push(m.toLowerCase()), null != f && h.push("(".concat(f, ")"))), null != g && h.push(g), (0, a.jsx)(o.CopiableField, {
    copyValue: h.join(" "),
    disableCopy: !1,
    copyTooltip: d.default.Messages.COPY_VERSION,
    showCopyIcon: !1,
    children: (0, a.jsxs)("div", {
      className: u.info,
      children: [(0, a.jsxs)(i.Text, {
        tag: "span",
        className: u.line,
        variant: "text-xs/normal",
        color: "text-muted",
        children: [S, " ", E, " ", (0, a.jsxs)("span", {
          className: u.versionHash,
          children: ["(", T, ")"]
        })]
      }), " ", null != _ ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(i.Text, {
          tag: "span",
          className: u.line,
          variant: "text-xs/normal",
          color: "text-muted",
          children: ["Host ", _, " ", null != m ? (0, a.jsxs)("span", {
            className: u.appArch,
            children: [m.toLowerCase(), " "]
          }) : null, null != f ? (0, a.jsxs)("span", {
            children: ["(", f, ")"]
          }) : null]
        }), " "]
      }) : null, null != g ? (0, a.jsx)(i.Text, {
        tag: "span",
        className: u.line,
        variant: "text-xs/normal",
        color: "text-muted",
        children: g
      }) : null]
    })
  })
}