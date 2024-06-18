"use strict";
let i, r;
n.d(t, {
  o: function() {
    return S
  }
}), n(47120);
var s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(846519),
  _ = n(481060),
  d = n(626135),
  c = n(572004),
  E = n(757206),
  I = n(981631),
  T = n(689938),
  h = n(167974);

function S(e) {
  var t;
  let {
    className: n,
    copyValue: a,
    copyMetaData: S,
    copyTooltip: f,
    copyTooltipDelay: N = 500,
    children: A,
    disableCopy: m,
    showCopyIcon: O,
    "aria-label": R,
    onCopy: C
  } = e, [p, g] = o.useState(0), [L, v] = o.useState(!1), [D, M] = o.useState(!1);
  if (o.useEffect(() => (i = new u.V7, r = new u.V7, function() {
      i.stop(), r.stop()
    }), []), !c.wS || m) return (0, s.jsx)(s.Fragment, {
    children: A
  });
  let P = [T.Z.Messages.COPY_SUCCESS_1, T.Z.Messages.COPY_SUCCESS_2, T.Z.Messages.COPY_SUCCESS_3, T.Z.Messages.COPY_SUCCESS_4, T.Z.Messages.COPY_SUCCESS_5, T.Z.Messages.COPY_SUCCESS_6, T.Z.Messages.COPY_SUCCESS_7, T.Z.Messages.COPY_SUCCESS_8, T.Z.Messages.COPY_SUCCESS_9, T.Z.Messages.COPY_SUCCESS_10, T.Z.Messages.COPY_SUCCESS_11],
    y = Math.min(Math.max(p - 1, 0), P.length - 1),
    U = null !== (t = P[y]) && void 0 !== t ? t : P[0],
    b = p >= P.length - 1,
    G = b ? _.TooltipColors.RED : _.TooltipColors.GREEN,
    w = L ? G : _.TooltipColors.PRIMARY,
    k = () => {
      i.stop(), M(!1)
    },
    B = e => {
      null == C || C(), (0, c.JG)(a), d.default.track(I.rMx.TEXT_COPIED, {
        type: S
      }), "function" == typeof e && e(), !D && g(p + 1), M(!0), v(!0), i.start(1e3, () => M(!1)), r.start(2e3, () => g(0))
    };
  return (0, s.jsx)(_.Tooltip, {
    delay: N,
    color: w,
    forceOpen: D,
    text: L ? (0, s.jsx)(_.Shaker, {
      isShaking: b,
      children: U
    }) : f,
    onAnimationRest: (e, t) => {
      !D && L && t.phase === I.UkZ.LEAVE && v(!1)
    },
    "aria-label": f,
    children: e => {
      let {
        onClick: t,
        onMouseEnter: i,
        ...r
      } = e;
      return (0, s.jsx)(_.Clickable, {
        ...r,
        className: h.clickTarget,
        "aria-label": R,
        onMouseEnter: () => {
          L ? k() : "function" == typeof i && i()
        },
        onClick: () => {
          B(t)
        },
        children: (0, s.jsxs)("div", {
          className: l()(n, h.copiableWrapper),
          children: [(0, s.jsx)("div", {
            className: h.childWrapper,
            children: A
          }), O ? (0, s.jsx)("div", {
            className: h.__invalid_copyIconWrapper,
            children: (0, s.jsx)(E.Z, {
              width: 18,
              height: 18,
              className: h.copyIcon
            })
          }) : null]
        })
      })
    }
  })
}