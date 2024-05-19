"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("481060"),
  l = n("718582"),
  u = n("411511");
let d = [
  [{
    translateY: 0,
    translateX: 0,
    scale: 1
  }, {
    translateY: 0,
    translateX: 0,
    scale: 0
  }, {
    translateY: 0,
    translateX: 0,
    scale: 0
  }, {
    translateY: 0,
    translateX: 0,
    scale: 0
  }],
  [{
    translateY: -14,
    translateX: -14,
    scale: .75
  }, {
    translateY: 12,
    translateX: 12,
    scale: .875
  }, {
    translateY: 0,
    translateX: 0,
    scale: 0
  }, {
    translateY: 0,
    translateX: 0,
    scale: 0
  }],
  [{
    translateY: -4,
    translateX: 16,
    scale: .75
  }, {
    translateY: 14,
    translateX: -14,
    scale: .875
  }, {
    translateY: -18,
    translateX: -12,
    scale: .625
  }, {
    translateY: 0,
    translateX: 0,
    scale: 0
  }],
  [{
    translateY: -14,
    translateX: -14,
    scale: .875
  }, {
    translateY: 14,
    translateX: 14,
    scale: .875
  }, {
    translateY: -18,
    translateX: 18,
    scale: .625
  }, {
    translateY: 18,
    translateX: -18,
    scale: .625
  }]
];

function _(e) {
  let {
    users: t,
    guildId: n
  } = e, a = (0, l.useSortUsersByAffinity)(t), o = r.useRef(!1);
  r.useEffect(() => {
    o.current = !0
  }, []);
  let _ = Math.min(d.length - 1, a.length - 1),
    I = d[Math.max(0, _)],
    T = a.length > 4,
    f = a.length - 3,
    S = f >= 10 ? 1 : 2,
    h = I.map((e, t) => {
      let r = a[t];
      if (null == r) return null;
      let o = T && t === S;
      return (0, i.jsx)("div", {
        className: s()(u.avatarContainer),
        style: {
          opacity: 1,
          transform: "translateX(".concat(e.translateX, "px) translateY(").concat(e.translateY, "px) scale(").concat(e.scale, ")")
        },
        children: o ? (0, i.jsx)(c, {
          count: f
        }) : (0, i.jsx)(E, {
          guildId: n,
          user: r
        })
      }, r.id)
    });
  return (0, i.jsx)("div", {
    className: u.groupContainer,
    children: h
  })
}

function c(e) {
  let {
    count: t
  } = e;
  return (0, i.jsx)("div", {
    className: u.avatarWrapper,
    children: (0, i.jsx)("div", {
      className: u.overflowCount,
      children: (0, i.jsxs)(o.Text, {
        variant: "text-sm/semibold",
        children: ["+", t]
      })
    })
  })
}

function E(e) {
  let {
    guildId: t,
    user: n
  } = e;
  return null == r.useMemo(() => null == n ? void 0 : n.getAvatarSource(t, !1, 32), [t, n]) ? null : (0, i.jsx)("div", {
    className: u.avatarWrapper,
    children: (0, i.jsx)("img", {
      className: u.avatar,
      src: null == n ? void 0 : n.getAvatarURL(t, 80),
      alt: ""
    })
  })
}