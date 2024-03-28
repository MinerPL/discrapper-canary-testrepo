"use strict";
r.r(t), r.d(t, {
  createModeratorOverwrite: function() {
    return x
  },
  default: function() {
    return p
  }
}), r("47120");
var n = r("735250"),
  a = r("470079"),
  l = r("442837"),
  s = r("481060"),
  i = r("741361"),
  o = r("881052"),
  d = r("911969"),
  u = r("185413"),
  c = r("592125"),
  E = r("430824"),
  h = r("285952"),
  S = r("153124"),
  M = r("170039"),
  m = r("700785"),
  f = r("146085"),
  A = r("71080"),
  N = r("689938"),
  g = r("724103");

function x(e, t) {
  return {
    id: e,
    type: t,
    deny: m.NONE,
    allow: f.MODERATE_STAGE_CHANNEL_PERMISSIONS
  }
}

function p(e) {
  let {
    transitionState: t,
    onClose: r,
    channelId: m
  } = e, p = (0, S.useUID)(), R = (0, l.useStateFromStores)([c.default], () => c.default.getChannel(m)), I = (0, l.useStateFromStores)([E.default], () => E.default.getGuild(null == R ? void 0 : R.getGuildId())), [T, C] = a.useState({}), [L, O] = a.useState(!1), [_, j] = a.useState(null);
  if (null == R || null == I) return null;
  let w = async () => {
    O(!0);
    try {
      await

      function(e, t) {
        let r = Object.values(t).filter(e => {
          let {
            row: t
          } = e;
          return null != t.id
        }).map(e => {
          let {
            row: t
          } = e;
          return t.rowType === A.RowType.ROLE ? x(t.id, d.PermissionOverwriteType.ROLE) : x(t.id, d.PermissionOverwriteType.MEMBER)
        });
        return (0, i.savePermissionUpdates)(e.id, r, !0)
      }(R, T), r()
    } catch (t) {
      let e = new o.APIError(t);
      O(!1), j(e)
    }
  };
  return (0, n.jsxs)(s.ModalRoot, {
    transitionState: t,
    "aria-labelledby": p,
    size: s.ModalSize.SMALL,
    className: g.modalRoot,
    children: [(0, n.jsxs)(s.ModalHeader, {
      separator: !1,
      direction: h.default.Direction.VERTICAL,
      align: h.default.Align.CENTER,
      className: g.header,
      children: [(0, n.jsx)(s.Heading, {
        variant: "heading-xl/semibold",
        children: N.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
      }), (0, n.jsxs)(s.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: g.headerSubtitle,
        children: [(0, n.jsx)(M.default, {
          height: 16,
          width: 16,
          className: g.headerSubtitleIcon
        }), R.name]
      })]
    }), (0, n.jsx)(u.AddMembersBody, {
      guild: I,
      channel: R,
      permission: f.MODERATE_STAGE_CHANNEL_PERMISSIONS,
      pendingAdditions: T,
      setPendingAdditions: C
    }), null != _ ? (0, n.jsx)(s.Text, {
      className: g.error,
      variant: "text-xs/normal",
      color: "text-danger",
      children: _.getAnyErrorMessage()
    }) : null, (0, n.jsxs)(s.ModalFooter, {
      children: [(0, n.jsx)(s.Button, {
        onClick: w,
        submitting: L,
        children: N.default.Messages.ADD
      }), (0, n.jsx)(s.Button, {
        look: s.Button.Looks.LINK,
        color: s.Button.Colors.PRIMARY,
        onClick: r,
        children: N.default.Messages.CANCEL
      })]
    })]
  })
}