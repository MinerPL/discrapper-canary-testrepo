"use strict";
n.d(t, {
  m: function() {
    return a
  }
}), n(653041);
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(185625),
  o = n(186023);
async function a(e, t, n, a) {
  let l = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
    u = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5],
    _ = arguments.length > 6 ? arguments[6] : void 0,
    d = (0, r.getInteractingModalContext)();
  try {
    let c, E = u ? await (0, s.Nt)(e, t) : await (0, s.B0)(e, t),
      I = [];
    let T = e => {
        I.push(e)
      },
      h = e => {
        c = e, null == n || n()
      };
    (0, r.openModal)(t => (0, i.jsx)(o.Z, {
      menu: E,
      reportType: e,
      modalProps: t,
      onNavigate: T,
      onSubmit: h,
      isAuthenticated: u,
      emailToken: _
    }), {
      onCloseCallback: () => {
        (0, s.k8)(e, I, c), null == a || a(), l && (0, s.X)(e, null != c ? c : null)
      }
    }, d)
  } catch {}
}