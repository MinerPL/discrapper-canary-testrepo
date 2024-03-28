"use strict";
a.r(e);
var s = a("735250"),
  n = a("470079"),
  l = a("481060"),
  o = a("434404"),
  i = a("703656"),
  r = a("153124"),
  c = a("112612"),
  u = a("981631"),
  d = a("176505"),
  I = a("689938"),
  T = a("326644");
e.default = function(t) {
  let {
    guildId: e,
    submittedGuildJoinRequestsCount: a,
    onClose: E,
    transitionState: x,
    onConfirm: N
  } = t, _ = (0, r.useUID)(), {
    submitting: C,
    errorMessage: M,
    onSubmit: h
  } = (0, c.default)({
    onSubmit: N,
    onClose: E
  }), m = n.useCallback(() => {
    E(), o.default.close(), (0, i.transitionTo)(u.Routes.CHANNEL(e, d.StaticChannelRoute.MEMBER_APPLICATIONS))
  }, [e, E]);
  return (0, s.jsxs)(l.ModalRoot, {
    className: T.container,
    transitionState: x,
    "aria-labelledby": _,
    children: [(0, s.jsxs)(l.ModalContent, {
      className: T.content,
      children: [(0, s.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        id: _,
        children: I.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EDIT_WARNING_TITLE.format({
          count: a
        })
      }), (0, s.jsx)(l.Text, {
        className: T.descriptionText,
        color: "header-secondary",
        variant: "text-sm/normal",
        children: I.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EDIT_WARNING_DESCRIPTIONG
      }), (0, s.jsx)(l.Clickable, {
        className: T.actionText,
        onClick: m,
        children: (0, s.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "text-link",
          children: I.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPLICATIONS_TITLE
        })
      }), null != M && (0, s.jsx)(l.Text, {
        className: T.__invalid_errorText,
        variant: "text-xs/normal",
        color: "text-danger",
        children: M
      })]
    }), (0, s.jsxs)(l.ModalFooter, {
      children: [(0, s.jsx)(l.Button, {
        className: T.actionButton,
        color: l.Button.Colors.BRAND,
        submitting: C,
        onClick: h,
        size: l.Button.Sizes.SMALL,
        children: (0, s.jsx)(l.Text, {
          variant: "text-sm/semibold",
          children: I.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_CONTINUE_EDITING
        })
      }), (0, s.jsx)(l.Button, {
        color: l.Button.Colors.PRIMARY,
        onClick: E,
        size: l.Button.Sizes.SMALL,
        children: (0, s.jsx)(l.Text, {
          variant: "text-sm/semibold",
          children: I.default.Messages.CANCEL
        })
      })]
    })]
  })
}