"use strict";
n.d(t, {
  Z: function() {
    return T
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(475179),
  l = n(605403),
  u = n(158010),
  _ = n(871499),
  d = n(689938),
  c = n(868889);

function E(e) {
  let {
    className: t,
    isVertical: n
  } = e;
  return (0, i.jsxs)("div", {
    className: c.iconContainer,
    children: [(0, i.jsx)(l.Z, {
      className: o()(n ? c.upCaret : c.leftCaret, t)
    }), (0, i.jsx)(u.Z, {
      className: o()(c.members, t)
    })]
  })
}

function I(e) {
  let {
    className: t,
    isVertical: n
  } = e;
  return (0, i.jsxs)("div", {
    className: c.iconContainer,
    children: [(0, i.jsx)(l.Z, {
      className: o()(n ? c.downCaret : c.rightCaret, t)
    }), n && (0, i.jsx)(u.Z, {
      className: o()(c.members, t)
    })]
  })
}

function T(e) {
  let {
    channelId: t,
    className: n,
    isParticipantsOpen: s,
    isVertical: l = !1,
    hideTooltip: u = !1
  } = e, T = r.useCallback(e => {
    let {
      className: t
    } = e;
    return s ? (0, i.jsx)(I, {
      className: t,
      isVertical: l
    }) : (0, i.jsx)(E, {
      className: t,
      isVertical: l
    })
  }, [s, l]);
  return (0, i.jsx)(_.Z, {
    label: s ? d.Z.Messages.VIDEO_CALL_HIDE_MEMBERS : d.Z.Messages.VIDEO_CALL_SHOW_MEMBERS,
    className: o()(c.participantsButton, n),
    onClick: function() {
      a.Z.toggleParticipants(t, !s)
    },
    iconComponent: T,
    shouldShowTooltip: !u
  })
}