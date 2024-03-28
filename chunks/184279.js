"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("43267"),
  i = n("933557"),
  r = n("534091"),
  o = n("797717"),
  u = n("507957"),
  d = n("967128"),
  c = n("689938"),
  f = n("629476"),
  h = n("191986");
let m = () => (0, a.jsx)("svg", {
  width: "46",
  height: "34",
  viewBox: "0 0 46 34",
  className: f.chatBubbleLip,
  xmlns: "http://www.w3.org/2000/svg",
  children: (0, a.jsx)("path", {
    d: "M0 33.4637C16.1697 28.954 21.1764 9.59155 19.2146 0L45.681 0.000148089C45.681 0.000148089 44.681 9.14498 40.1914 18.3023C34.4077 30.0996 6.2893 33.1232 0 33.4637Z"
  })
});

function p(e) {
  var t;
  let {
    channel: n
  } = e, p = null !== (t = (0, i.default)(n)) && void 0 !== t ? t : "";
  return (0, a.jsxs)("div", {
    id: (0, r.getMessageDOMId)(n.id, n.id),
    className: f.headerContainer,
    children: [(0, a.jsx)("img", {
      src: h,
      className: f.wumpusImage,
      alt: ""
    }), (0, a.jsxs)("div", {
      className: f.chatBubbleContainer,
      children: [(0, a.jsx)(m, {}), (0, a.jsxs)("div", {
        className: f.chatBubble,
        children: [(0, a.jsx)(l.Avatar, {
          "aria-label": p,
          size: l.AvatarSizes.SIZE_80,
          src: (0, s.getChannelIconURL)(n, 80, !1)
        }), (0, a.jsxs)(d.EmptyMessageHeader, {
          className: f.emptyMessageHeader,
          children: [p, (0, a.jsx)(o.default, {
            className: f.flowerStar,
            size: 24,
            children: (0, a.jsx)(u.default, {
              className: f.verified,
              width: 24,
              height: 24
            })
          })]
        }), (0, a.jsx)(d.EmptyMessageBody, {
          children: c.default.Messages.SYSTEM_DM_EMPTY_MESSAGE
        })]
      })]
    })]
  })
}