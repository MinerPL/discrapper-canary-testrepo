"use strict";
n.r(t), n.d(t, {
  ContentBlob: function() {
    return f
  },
  HEIGHT_ATTACHMEMT_PADDING: function() {
    return g
  },
  HEIGHT_COMPACT_MESSAGE: function() {
    return C
  },
  HEIGHT_COMPACT_MESSAGE_START: function() {
    return E
  },
  HEIGHT_COZY_MESSAGE: function() {
    return p
  },
  HEIGHT_COZY_MESSAGE_START: function() {
    return m
  },
  default: function() {
    return S
  }
});
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("392711"),
  r = n.n(i),
  o = n("481060"),
  u = n("744750");

function d(e) {
  return "".concat(e / 16, "rem")
}

function c() {
  return (0, a.jsx)("div", {
    className: u.avatar,
    style: {
      opacity: .08
    }
  })
}

function f(e) {
  let {
    width: t,
    opacity: n,
    className: l
  } = e;
  return (0, a.jsx)("div", {
    className: s()(l, {
      [u.blob]: !0
    }),
    style: {
      width: d(t),
      opacity: null != n ? n : r().random(.02, .08)
    }
  })
}

function h(e) {
  let t, {
      groupStart: n = !1,
      compact: l = !1,
      attachmentSpecs: i,
      usernameWidth: d,
      usernameOpacity: h,
      className: m,
      style: p
    } = e,
    E = l ? 50 : r().random(40, 50);
  return !l && n ? t = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(c, {}), (0, a.jsx)(o.H, {
      className: u.header,
      children: (0, a.jsx)(f, {
        width: d,
        opacity: h,
        className: u.__invalid_username
      })
    })]
  }) : l && (t = (0, a.jsxs)(a.Fragment, {
    children: [l && (0, a.jsx)(f, {
      width: E,
      className: s()({
        [u.compactTimestamp]: !0,
        [u.hidden]: !n
      })
    }), (0, a.jsx)(o.H, {
      className: u.header,
      children: (0, a.jsx)(f, {
        width: d,
        opacity: h
      })
    })]
  })), (0, a.jsxs)("div", {
    "aria-hidden": !0,
    className: s()(m, {
      [u.wrapper]: !0,
      [u.compact]: l,
      [u.cozy]: !l
    }),
    style: p,
    children: [(0, a.jsxs)("div", {
      className: u.contents,
      children: [t, (0, a.jsx)("div", {
        className: u.content,
        children: Array(r().random(3, 8)).fill(null).map(() => r().random(30, 80)).map((e, t) => (0, a.jsx)(f, {
          width: e,
          opacity: .06
        }, t))
      })]
    }), null != i && (0, a.jsx)("div", {
      className: u.attachmentContainer,
      children: (0, a.jsx)("div", {
        className: u.attachment,
        style: {
          opacity: .03,
          ...i
        }
      })
    })]
  })
}
let m = 44,
  p = 22,
  E = 26,
  C = 26,
  g = 6;

function S(e) {
  let {
    messages: t,
    groupSpacing: n = 0,
    compact: l = !1,
    attachmentSpecs: s,
    className: i
  } = e, o = null != s ? s.last ? t - 1 : r().random(0, t - 1) : -1, u = r().random(80, 120), c = r().random(.1, .2);
  return (0, a.jsx)(a.Fragment, {
    children: Array(t).fill(null).map((e, t) => (0, a.jsx)(h, {
      compact: l,
      className: i,
      usernameWidth: u,
      usernameOpacity: c,
      groupStart: 0 === t,
      attachmentSpecs: t === o ? s : void 0,
      style: 0 === t ? {
        marginTop: d(n)
      } : void 0
    }, t))
  })
}