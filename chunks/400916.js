"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var s = n("735250");
n("470079");
var a = n("512722"),
  r = n.n(a),
  i = n("399606"),
  l = n("481060"),
  u = n("682864"),
  o = n("671533"),
  c = n("943461"),
  d = n("240864"),
  C = n("613810"),
  E = n("596211"),
  f = n("689938"),
  _ = n("47528");

function A(e) {
  var t, n, a, A;
  let {
    guildId: p,
    productId: h
  } = e, m = (0, i.useStateFromStores)([d.default], () => d.default.getGuildProduct(h)), N = (null !== (A = null == m ? void 0 : null === (t = m.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== A ? A : 0) > 1, I = null == m ? void 0 : null === (a = m.attachments) || void 0 === a ? void 0 : null === (n = a[0]) || void 0 === n ? void 0 : n.id;
  return N ? (0, s.jsxs)(l.Button, {
    onClick: function() {
      C.default.open({
        guildId: p,
        productId: h
      })
    },
    innerClassName: _.textWithIcon,
    children: [(0, s.jsx)("div", {
      children: f.default.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_MULTIPLE_FILES
    }), (0, s.jsx)(u.default, {
      size: 8,
      horizontal: !0
    }), (0, s.jsx)(o.default, {
      width: 16,
      height: 16,
      direction: o.default.Directions.RIGHT
    })]
  }) : (r()(null != I, "No attachment"), (0, s.jsxs)(E.default, {
    guildId: p,
    productId: h,
    attachmentId: I,
    innerClassName: _.textWithIcon,
    children: [(0, s.jsx)("div", {
      children: f.default.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_SINGLE_FILE
    }), (0, s.jsx)(u.default, {
      size: 8,
      horizontal: !0
    }), (0, s.jsx)(c.default, {
      width: 16,
      height: 16
    })]
  }))
}