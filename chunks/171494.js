"use strict";
a.r(t), a.d(t, {
  default: function() {
    return M
  }
}), a("47120");
var l = a("735250"),
  s = a("470079"),
  n = a("442837"),
  i = a("481060"),
  o = a("91176"),
  r = a("906732"),
  u = a("594174"),
  d = a("373791"),
  c = a("153124"),
  f = a("465670"),
  N = a("626135"),
  _ = a("71619"),
  h = a("590433"),
  C = a("981631"),
  I = a("689938"),
  E = a("48923");

function M(e) {
  var t, a;
  let {
    guildId: M,
    userId: O,
    anaylticsLocations: U,
    transitionState: m,
    onClose: T
  } = e, p = (0, c.useUID)(), {
    analyticsLocations: A
  } = (0, r.default)(), S = null !== (a = null !== (t = null == U ? void 0 : U[0]) && void 0 !== t ? t : null == A ? void 0 : A[0]) && void 0 !== a ? a : null, D = (0, n.useStateFromStores)([u.default], () => u.default.getUser(O), [O]), [v, g] = (0, _.default)(O, M), [L, R] = s.useState(!1), b = s.useCallback(async () => {
    if (null != D) {
      R(!0);
      try {
        await o.default.setCommunicationDisabledDuration(M, O, null, null, S), (0, i.showToast)((0, i.createToast)(I.default.Messages.GUILD_ENABLE_COMMUNICATION_SUCCESS, i.ToastType.SUCCESS)), T()
      } catch (e) {
        (0, i.showToast)((0, i.createToast)(I.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, i.ToastType.FAILURE))
      } finally {
        R(!1)
      }
    }
  }, [M, D, O, T, S]), x = s.useCallback(() => {
    !g && T()
  }, [g, T]);
  return (s.useEffect(() => {
    null != D && N.default.track(C.AnalyticEvents.OPEN_MODAL, {
      type: h.SET_COMMUNICATION_DISABLED_MODAL_NAME,
      guild_id: M,
      other_user_id: D.id
    })
  }, []), s.useEffect(() => {
    (null == D || null == M) && T()
  }), null == D || null == M) ? null : (0, l.jsxs)(i.ModalRoot, {
    transitionState: m,
    "aria-labelledby": p,
    children: [(0, l.jsxs)(i.ModalHeader, {
      className: E.header,
      separator: !1,
      children: [(0, l.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        children: I.default.Messages.GUILD_ENABLE_COMMUNICATION_HEADER
      }), (0, l.jsx)(i.Clickable, {
        onClick: T,
        className: E.closeButton,
        "aria-label": I.default.Messages.CLOSE,
        children: (0, l.jsx)(f.default, {
          className: E.closeIcon,
          width: 16,
          height: 16
        })
      })]
    }), (0, l.jsxs)(i.ModalContent, {
      children: [(0, l.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "interactive-normal",
        children: I.default.Messages.GUILD_ENABLE_COMMUNICATION_TIME_REMAINING.format({
          username: D.username,
          countdown: e => null == v ? null : (0, l.jsx)(d.default, {
            className: E.countdown,
            deadline: new Date(v),
            onInterval: x,
            showUnits: !0,
            stopAtOneSec: !0
          })
        })
      }), (0, l.jsx)(i.Text, {
        className: E.cta,
        variant: "text-md/normal",
        color: "interactive-normal",
        children: I.default.Messages.GUILD_ENABLE_COMMUNICATION_CTA.format({
          link: h.GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK
        })
      })]
    }), (0, l.jsxs)(i.ModalFooter, {
      children: [(0, l.jsx)(i.Button, {
        color: i.Button.Colors.RED,
        onClick: b,
        submitting: L,
        children: I.default.Messages.REMOVE_TIME_OUT
      }), (0, l.jsx)(i.Button, {
        type: "button",
        look: i.Button.Looks.LINK,
        color: i.Button.Colors.PRIMARY,
        onClick: T,
        children: I.default.Messages.CANCEL
      })]
    })]
  })
}