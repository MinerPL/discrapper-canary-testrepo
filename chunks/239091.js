"use strict";
n.d(t, {
  Zy: function() {
    return u
  },
  jW: function() {
    return d
  },
  vq: function() {
    return _
  }
}), n(773603);
var i = n(570140),
  r = n(40851),
  s = n(358085),
  o = n(601993),
  a = n(981631);

function l(e) {
  i.Z.dispatch({
    type: "CONTEXT_MENU_OPEN",
    contextMenu: e
  })
}

function u(e) {
  {
    let {
      flushSync: t
    } = n(699581);
    t(() => {
      i.Z.wait(() => {
        i.Z.dispatch({
          type: "CONTEXT_MENU_CLOSE"
        }).finally(e)
      })
    })
  }
}

function _(e, t, n, i) {
  var u, _, d;
  if (e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target)) return;
  let c = 0,
    E = 0;
  if ("pageX" in e && (c = e.pageX, E = e.pageY), 0 === c && 0 === E) {
    let t = null === (u = e.target) || void 0 === u ? void 0 : u.getBoundingClientRect(),
      {
        left: n = 0,
        top: i = 0,
        width: r = 0,
        height: s = 0
      } = null != t ? t : {};
    c = n + r / 2, E = i + s / 2
  }
  let I = {
    render: t,
    renderLazy: i,
    target: null !== (_ = e.target) && void 0 !== _ ? _ : e.currentTarget,
    rect: new DOMRect(c, E, 0, 0),
    config: {
      context: __OVERLAY__ ? a.IlC.OVERLAY : null !== (d = (0, r.GB)()) && void 0 !== d ? d : a.IlC.APP,
      ...n
    }
  };
  if ((null == n ? void 0 : n.enableSpellCheck) && (0, s.isDesktop)()) {
    let e = (0, o.RD)(() => {
      e(), l(I)
    })
  } else e.preventDefault(), l(I)
}

function d(e, t, n) {
  _(e, void 0, n, t)
}