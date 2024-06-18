"use strict";
n(47120), n(653041);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(91192),
  l = n(536895),
  u = n(442837),
  _ = n(570140),
  d = n(166459),
  c = n(911969),
  E = n(607070),
  I = n(209613),
  T = n(998698),
  h = n(703558),
  S = n(117530),
  f = n(132338),
  N = n(459273),
  A = n(444282),
  m = n(898463),
  O = n(981631),
  R = n(62469),
  C = n(842648);
let p = [];

function g(e) {
  let {
    channelId: t,
    type: n
  } = e, s = (0, u.e7)([E.Z], () => E.Z.keyboardModeEnabled), g = (0, I.Z)("attachments", l.hy.HORIZONTAL), L = (0, u.e7)([S.Z], () => S.Z.getUploads(t, n.drafts.type)), {
    isApplicationCommand: v,
    commandOptions: D,
    commandOptionStates: M
  } = (0, u.cj)([T.Z], () => {
    let e = T.Z.getActiveCommand(t);
    if (null == e) return {
      isApplicationCommand: !1,
      commandOptions: p,
      commandOptionStates: null
    };
    let n = T.Z.getOptionStates(t);
    return {
      isApplicationCommand: !0,
      commandOptions: e.options,
      commandOptionStates: n
    }
  }), P = r.useMemo(() => {
    var e;
    return null !== (e = null == D ? void 0 : D.filter(e => {
      var t;
      return e.type === c.jw.ATTACHMENT && (null == M ? void 0 : null === (t = M[e.name]) || void 0 === t ? void 0 : t.hasValue)
    })) && void 0 !== e ? e : []
  }, [D, M]), [y, U] = r.useState([]);
  r.useEffect(() => {
    let e = () => {
      d.Z.clearAll(t, n.drafts.type)
    };
    return _.Z.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e), () => _.Z.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
  }, [t, n]);
  let b = r.useCallback(() => {
    g.focusFirstVisibleItem()
  }, [g]);
  return ((0, N.yp)({
    event: O.CkL.FOCUS_ATTACHMENT_AREA,
    handler: b
  }), r.useEffect(() => {
    if (v) {
      let e = [];
      y.forEach(t => {
        !P.some(e => t.name === e.name) && e.push(t)
      }), e.forEach(e => {
        d.Z.remove(t, e.name, n.drafts.type)
      }), U(P)
    }
  }, [t, P.length, n]), !v && 0 === L.length || v && 0 === P.length) ? null : (0, i.jsxs)(r.Fragment, {
    children: [(0, i.jsx)(a.bG, {
      navigator: g,
      children: (0, i.jsx)(a.SJ, {
        children: e => {
          let {
            ref: r,
            ...a
          } = e;
          return (0, i.jsx)("ul", {
            ref: r,
            ...a,
            className: o()(R.channelAttachmentArea, C.scrollbarGhost),
            children: v ? P.map(e => (0, i.jsx)(A.Z, {
              channelId: t,
              keyboardModeEnabled: s,
              option: e
            }, e.name)) : L.map(e => (0, i.jsx)(m.Z, {
              channelId: t,
              draftType: n.drafts.type,
              upload: e,
              keyboardModeEnabled: s,
              clip: e.clip
            }, e.id))
          })
        }
      })
    }), n.drafts.type === h.d.FirstThreadMessage ? null : (0, i.jsx)(f.Z, {})]
  })
}
t.Z = r.memo(function(e) {
  let {
    channelId: t,
    type: n,
    canAttachFiles: r
  } = e;
  return r ? (0, i.jsx)(g, {
    channelId: t,
    type: n
  }) : null
})