n.d(t, {
  Zy: function() {
return u;
  },
  jW: function() {
return d;
  },
  vq: function() {
return c;
  }
}), n(773603);
var r = n(570140),
  i = n(40851),
  a = n(358085),
  o = n(601993),
  s = n(981631);

function l(e) {
  r.Z.dispatch({
type: 'CONTEXT_MENU_OPEN',
contextMenu: e
  });
}

function u(e) {
  {
let {
  flushSync: t
} = n(699581);
t(() => {
  r.Z.wait(() => {
    r.Z.dispatch({
      type: 'CONTEXT_MENU_CLOSE'
    }).finally(e);
  });
});
  }
}

function c(e, t, n, r) {
  var u, c, d;
  if (e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target))
return;
  let _ = 0,
E = 0;
  if ('pageX' in e && (_ = e.pageX, E = e.pageY), 0 === _ && 0 === E) {
let t = null === (u = e.target) || void 0 === u ? void 0 : u.getBoundingClientRect(),
  {
    left: n = 0,
    top: r = 0,
    width: i = 0,
    height: a = 0
  } = null != t ? t : {};
_ = n + i / 2, E = r + a / 2;
  }
  let f = {
render: t,
renderLazy: r,
target: null !== (c = e.target) && void 0 !== c ? c : e.currentTarget,
rect: new DOMRect(_, E, 0, 0),
config: {
  context: __OVERLAY__ ? s.IlC.OVERLAY : null !== (d = (0, i.GB)()) && void 0 !== d ? d : s.IlC.APP,
  ...n
}
  };
  if ((null == n ? void 0 : n.enableSpellCheck) && (0, a.isDesktop)()) {
let e = (0, o.RD)(() => {
  e(), l(f);
});
  } else
e.preventDefault(), l(f);
}

function d(e, t, n) {
  c(e, void 0, n, t);
}