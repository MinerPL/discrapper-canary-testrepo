"use strict";
a.r(t), a.d(t, {
  default: function() {
    return T
  }
}), a("47120");
var l = a("735250"),
  s = a("470079"),
  n = a("442837"),
  o = a("481060"),
  i = a("91176"),
  r = a("906732"),
  u = a("910693"),
  c = a("594174"),
  d = a("746124"),
  _ = a("153124"),
  D = a("465670"),
  I = a("626135"),
  C = a("5192"),
  N = a("590433"),
  m = a("981631"),
  A = a("689938"),
  E = a("11838");

function M(e) {
  return {
    value: e,
    get label() {
      var t;
      return null === (t = (0, N.getFriendlyDurationString)(e)) || void 0 === t ? void 0 : t.toLocaleUpperCase()
    }
  }
}
let O = [M(N.DisableCommunicationDuration.DURATION_60_SEC), M(N.DisableCommunicationDuration.DURATION_5_MIN), M(N.DisableCommunicationDuration.DURATION_10_MIN), M(N.DisableCommunicationDuration.DURATION_1_HOUR), M(N.DisableCommunicationDuration.DURATION_1_DAY), M(N.DisableCommunicationDuration.DURATION_1_WEEK)];

function T(e) {
  var t, a;
  let {
    guildId: M,
    userId: T,
    anaylticsLocations: f,
    transitionState: U,
    onClose: S
  } = e, x = (0, _.useUID)(), {
    analyticsLocations: h
  } = (0, r.default)(), L = null !== (a = null !== (t = null == f ? void 0 : f[0]) && void 0 !== t ? t : null == h ? void 0 : h[0]) && void 0 !== a ? a : null, R = (0, n.useStateFromStores)([c.default], () => c.default.getUser(T), [T]), [b, g] = s.useState(N.DisableCommunicationDuration.DURATION_60_SEC), v = (0, u.useTrackModerationAction)(M, {
    location: L,
    targetUserId: T
  }), [p, j] = s.useState(""), [B, k] = s.useState(!1), y = s.useCallback(async () => {
    if (null != R) {
      k(!0);
      try {
        await i.default.setCommunicationDisabledDuration(M, T, b, p, L), v(u.ModerationActionType.TIMEOUT), (0, o.showToast)((0, o.createToast)(A.default.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
          user: C.default.getName(M, null, R)
        }), o.ToastType.SUCCESS)), S()
      } catch (e) {
        (0, o.showToast)((0, o.createToast)(A.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, o.ToastType.FAILURE))
      } finally {
        k(!1)
      }
    }
  }, [M, R, T, S, b, p, L, v]);
  return (s.useEffect(() => {
    null != R && I.default.track(m.AnalyticEvents.OPEN_MODAL, {
      type: N.CLEAR_COMMUNICATION_DISABLED_MODAL_NAME,
      guild_id: M,
      other_user_id: R.id
    })
  }, []), s.useEffect(() => {
    (null == R || null == M) && S()
  }, [M, R, S]), null == R || null == M) ? null : (0, l.jsxs)(o.ModalRoot, {
    transitionState: U,
    "aria-labelledby": x,
    children: [(0, l.jsxs)(o.ModalHeader, {
      className: E.header,
      separator: !1,
      children: [(0, l.jsx)(o.Heading, {
        id: x,
        variant: "heading-lg/semibold",
        children: A.default.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({
          user: C.default.getName(M, null, R)
        })
      }), (0, l.jsx)(o.Clickable, {
        onClick: S,
        className: E.closeButton,
        "aria-label": A.default.Messages.CLOSE,
        children: (0, l.jsx)(D.default, {
          className: E.closeIcon,
          width: 16,
          height: 16
        })
      })]
    }), (0, l.jsxs)(o.ModalContent, {
      className: E.contentContainer,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "interactive-normal",
        children: A.default.Messages.DISABLE_GUILD_COMMUNICATION_BODY_HEADER.format({
          helpdeskArticle: N.GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK
        })
      }), (0, l.jsx)(o.Text, {
        className: E.selectorHeader,
        variant: "text-xs/semibold",
        color: "interactive-normal",
        children: A.default.Messages.GUILD_COMMUNICATION_DISABLED_DURATION
      }), (0, l.jsx)(d.default, {
        buttons: O.map(e => (function(e, t, a) {
          let {
            value: s,
            label: n
          } = e;
          return {
            content: (0, l.jsx)(o.Text, {
              variant: "text-xs/normal",
              className: t ? E.selectorTextSelected : E.selectorText,
              children: n
            }),
            className: t ? E.selectorButtonSelected : E.selectorButton,
            onClick: () => a(s)
          }
        })(e, e.value === b, g))
      }), (0, l.jsx)(o.Text, {
        className: E.selectorHeader,
        variant: "text-xs/semibold",
        color: "interactive-normal",
        children: A.default.Messages.GUILD_COMMUNICATION_DISABLED_REASON
      }), (0, l.jsx)(o.TextArea, {
        value: p,
        onChange: e => j(e),
        placeholder: A.default.Messages.GUILD_COMMUNICATION_DISABLED_REASON_PLACEHOLDER,
        rows: 2,
        maxLength: N.MAX_REASON_LENGTH
      })]
    }), (0, l.jsxs)(o.ModalFooter, {
      children: [(0, l.jsx)(o.Button, {
        onClick: y,
        color: o.Button.Colors.BRAND_NEW,
        submitting: B,
        children: A.default.Messages.TIMEOUT_SUBMIT
      }), (0, l.jsx)(o.Button, {
        type: "button",
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.PRIMARY,
        onClick: S,
        children: A.default.Messages.CANCEL
      })]
    })]
  })
}