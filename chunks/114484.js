"use strict";
n.d(t, {
  c4: function() {
    return f
  },
  st: function() {
    return N
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(718922),
  l = n(442837),
  u = n(481060),
  _ = n(292419),
  d = n(282397),
  c = n(188597),
  E = n(759231),
  I = n(981631),
  T = n(689938),
  h = n(702149);

function S(e) {
  return {
    text: e,
    icon: (0, i.jsx)(u.Dots, {
      className: h.icon,
      dotRadius: 3.5,
      themed: !0
    })
  }
}

function f(e) {
  return {
    text: null != e ? e : T.Z.Messages.APPLICATION_COMMAND_FAILED,
    color: "text-danger",
    icon: (0, i.jsx)(E.Z, {
      width: 16,
      height: 16,
      className: o()(h.icon, h.errorIcon)
    })
  }
}

function N(e) {
  let {
    className: t,
    icon: n,
    text: r,
    color: s
  } = e;
  return (0, i.jsxs)("div", {
    className: o()(h.wrapper, t),
    children: [n, (0, i.jsx)(u.Text, {
      variant: "text-md/normal",
      color: s,
      scaleFontToUserSetting: !0,
      children: r
    })]
  })
}
t.ZP = r.memo(function(e) {
  let {
    message: t,
    className: n,
    component: s
  } = e, o = (0, a.Z)(), u = (0, l.e7)([d.Z], () => d.Z.getInteraction(t), [t]);
  r.useEffect(() => {
    let e = null;
    if (t.hasFlag(I.iLy.LOADING) && null != u) {
      let n = (0, c.ow)(t.id) - Date.now();
      n > 0 && (e = setTimeout(() => o(), 1e3 + n))
    }
    return () => {
      clearTimeout(e)
    }
  }, [o, u, t]);
  let E = null;
  if (null == s) E = function(e, t) {
    switch ((0, c.t$)(t, e)) {
      case c.rQ.SENDING:
        return S(T.Z.Messages.APPLICATION_COMMAND_SENDING);
      case c.rQ.CREATED:
        return S(T.Z.Messages.APPLICATION_COMMAND_WAITING.format({
          applicationName: t.author.username
        }));
      case c.rQ.TIMED_OUT:
        return f(T.Z.Messages.APPLICATION_COMMAND_TIMED_OUT);
      case c.rQ.FAILED:
        return f(t.interactionError)
    }
  }(u, t);
  else {
    let e = (0, _.SD)(u, t, s);
    null != e && (E = f(e))
  }
  if (null == E) return null;
  let {
    text: h,
    icon: A,
    color: m
  } = E;
  return (0, i.jsx)(N, {
    icon: A,
    text: h,
    className: n,
    color: m
  })
})