"use strict";
a.r(t), a("47120");
var s = a("735250"),
  l = a("470079"),
  n = a("442837"),
  d = a("481060"),
  i = a("367907"),
  o = a("434404"),
  r = a("650774"),
  c = a("153124"),
  u = a("816817"),
  E = a("981631"),
  S = a("689938"),
  C = a("63193");
t.default = e => {
  let {
    transitionState: t,
    onClose: a,
    guild: _
  } = e, m = (0, c.useUID)();
  l.useEffect(() => {
    i.default.trackWithMetadata(E.AnalyticEvents.OPEN_MODAL, {
      type: E.AnalyticsSections.DISCOVERY_SETUP_SUCCESS_MODAL
    })
  }, []);
  let [h, f] = (0, n.useStateFromStoresArray)([r.default], () => [r.default.getOnlineCount(_.id), r.default.getMemberCount(_.id)], [_.id]);
  return (0, s.jsxs)(d.ModalRoot, {
    transitionState: t,
    "aria-labelledby": m,
    className: C.root,
    children: [(0, s.jsx)(d.ModalHeader, {
      className: C.modalHeader,
      separator: !1,
      children: (0, s.jsx)(d.ModalCloseButton, {
        onClick: a,
        className: C.modalCloseButton
      })
    }), (0, s.jsx)(d.Heading, {
      variant: "heading-xl/semibold",
      id: m,
      className: C.header,
      children: S.default.Messages.SERVER_DISCOVERY_SETUP_CONFIRMATION_PAGE_HEADER
    }), (0, s.jsxs)(d.ModalContent, {
      className: C.modalContent,
      children: [(0, s.jsx)(d.Text, {
        variant: "text-md/normal",
        className: C.subheader,
        children: S.default.Messages.SERVER_DISCOVERY_SETUP_CONFIRMATION_PAGE_SUBHEADING.format({
          onServerSettingsClick: () => {
            a(), o.default.setSection(E.GuildSettingsSections.DISCOVERY), i.default.trackWithMetadata(E.AnalyticEvents.SETTINGS_PANE_VIEWED, {
              settings_type: "guild",
              origin_pane: "DISCOVERY",
              destination_pane: "DISCOVERY"
            })
          }
        })
      }), (0, s.jsx)(u.default, {
        className: C.previewCard,
        guild: _,
        presenceCount: h,
        memberCount: f
      })]
    }), (0, s.jsx)(d.ModalFooter, {
      children: (0, s.jsx)(d.Button, {
        onClick: a,
        children: S.default.Messages.GOT_IT
      })
    })]
  })
}