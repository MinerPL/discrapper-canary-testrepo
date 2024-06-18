"use strict";
n.d(t, {
  Z: function() {
    return v
  }
}), n(411104), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(846519),
  d = n(481060),
  c = n(239091),
  E = n(410575),
  I = n(199902),
  T = n(594174),
  h = n(321148),
  S = n(794358),
  f = n(823379),
  N = n(5192),
  A = n(354459),
  m = n(981631),
  O = n(689938),
  R = n(265054);

function C(e, t) {
  switch (e) {
    case A.fO.ACTIVITY:
      return O.Z.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
        numUsers: t
      });
    case A.fO.STREAM:
      return O.Z.Messages.SPECTATORS.format({
        numViewers: t
      });
    default:
      throw Error("Unknown participant type.")
  }
}

function p(e) {
  let {
    users: t,
    disableInteraction: n,
    guildId: r,
    participantType: s,
    channelId: a,
    handleUserContextMenu: l
  } = e, u = C(s, t.length);
  return (0, i.jsx)(d.Dialog, {
    "aria-label": u,
    className: R.popoutWrapper,
    children: (0, i.jsxs)(d.Scroller, {
      className: R.scroller,
      children: [(0, i.jsx)(d.Heading, {
        variant: "heading-deprecated-12/semibold",
        className: R.memberListHeader,
        children: u
      }), (0, i.jsx)("div", {
        children: t.map(e => (0, i.jsx)(h.Z, {
          guildId: null != r ? r : void 0,
          className: o()(R.memberListItem, {
            [R.popoutDisabled]: n
          }),
          textClassName: R.memberListItemText,
          user: e,
          disablePopout: n,
          nick: N.ZP.getNickname(r, a, e),
          onContextMenu: t => n ? null : l(t, e)
        }, e.id))
      })]
    })
  })
}

function g(e) {
  let {
    users: t,
    guildId: n,
    channelId: r,
    maxVisibleUsers: s = 3,
    className: a,
    participantType: l
  } = e, u = C(l, t.length), _ = t.length < s ? t.map(e => (0, i.jsx)("div", {
    className: R.viewersTooltipItem,
    children: N.ZP.getName(n, r, e)
  }, e.id)) : u;
  return (0, i.jsx)(d.TooltipContainer, {
    text: _,
    "aria-label": u,
    children: (0, i.jsxs)("div", {
      className: o()(R.viewers, a),
      children: [(0, i.jsx)(S.Z, {
        className: R.viewersIcon
      }), (0, i.jsx)("span", {
        "aria-hidden": "true",
        children: t.length
      })]
    })
  })
}
let L = [];

function v(e) {
  let {
    channelId: t,
    guildId: s,
    participant: a,
    className: h,
    compact: S = !1,
    disableInteraction: N = !1,
    maxVisibleUsers: O = 3
  } = e, [C, v] = r.useState(!1), D = r.useRef(new _.sW(150, () => v(!1))), M = (0, u.Wu)([I.Z, T.default], () => {
    if (a.type === A.fO.STREAM) {
      let e = I.Z.getViewerIds(a.id);
      return e.length > 0 ? e.map(e => T.default.getUser(e)).filter(f.lm) : L
    }
    return a.type === A.fO.ACTIVITY ? a.participants.length > 0 ? Array.from(a.participants).map(e => T.default.getUser(e.userId)).filter(f.lm) : L : L
  }, [a]), P = r.useCallback(() => {
    D.current.cancel(), v(!0)
  }, []), y = r.useCallback(() => {
    D.current.delay()
  }, []), U = r.useCallback((e, t) => {
    P(), (0, c.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("15421")]).then(n.bind(n, 881351));
      return n => (0, i.jsx)(e, {
        ...n,
        user: t
      })
    }, {
      onClose: y
    })
  }, [y, P]);
  if (0 === M.length) return null;
  if (S) return (0, i.jsx)(g, {
    maxVisibleUsers: O,
    users: M,
    guildId: s,
    channelId: t,
    className: h,
    participantType: a.type
  });
  let b = l()(M).take(O).map(e => (0, i.jsx)(d.Avatar, {
    src: e.getAvatarURL(s, 24),
    "aria-label": e.username,
    size: d.AvatarSizes.SIZE_24,
    className: R.viewer
  }, e.id)).value();
  return M.length > O && (b[b.length - 1] = (0, i.jsxs)("div", {
    className: R.overflow,
    children: ["+", M.length - O + 1]
  }, "overflow")), (0, i.jsx)(E.Z, {
    section: m.jXE.STREAM_VIEWER_POPOUT,
    children: (0, i.jsx)("div", {
      onMouseEnter: P,
      onMouseLeave: y,
      children: (0, i.jsx)(d.Popout, {
        renderPopout: () => (0, i.jsx)(p, {
          participantType: a.type,
          handleUserContextMenu: U,
          guildId: s,
          channelId: t,
          users: M,
          disableInteraction: N
        }),
        shouldShow: C,
        position: "top",
        children: () => (0, i.jsx)("div", {
          className: o()(R.viewers, h),
          children: b
        })
      })
    })
  })
}