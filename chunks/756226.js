"use strict";
i.r(t), i("47120");
var s = i("735250");
i("470079");
var a = i("435935"),
  l = i("481060"),
  n = i("125015"),
  r = i("705077"),
  o = i("988951"),
  d = i("435443"),
  c = i("259756"),
  h = i("785681"),
  C = i("880257"),
  T = i("863552"),
  u = i("292352"),
  _ = i("689938"),
  x = i("137792"),
  p = i("128216");
let A = {
    [u.TeenActionDisplayType.USER_INTERACTION]: (0, s.jsx)(T.default, {
      width: 18,
      height: 18
    }),
    [u.TeenActionDisplayType.USER_CALLED]: (0, s.jsx)(n.default, {
      width: 22,
      height: 22
    }),
    [u.TeenActionDisplayType.USER_ADD]: (0, s.jsx)(o.default, {
      className: x.personWavingIcon,
      width: 22,
      height: 22
    }),
    [u.TeenActionDisplayType.GUILD_ADD]: (0, s.jsx)(r.default, {
      width: 22,
      height: 22
    }),
    [u.TeenActionDisplayType.GUILD_INTERACTION]: (0, s.jsx)(d.default, {
      className: x.threadIcon,
      width: 22,
      height: 22
    })
  },
  E = e => {
    let {
      header: t,
      description: i,
      icon: n
    } = e;
    return (0, s.jsxs)(a.Flex, {
      className: x.row,
      grow: 0,
      children: [(0, s.jsx)("div", {
        className: x.iconContainer,
        children: n
      }), (0, s.jsxs)("div", {
        className: x.rowContent,
        children: [(0, s.jsx)(l.Text, {
          className: x.__invalid_rowHeader,
          variant: "text-sm/bold",
          children: t
        }), (0, s.jsx)(l.Text, {
          variant: "text-xs/medium",
          children: i
        })]
      })]
    })
  };
t.default = e => {
  let {
    transitionState: t,
    onClose: i
  } = e, n = (0, h.useAgeSpecificText)(_.default.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_TEEN, _.default.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_PARENT), r = (0, C.default)(), o = Array.from(u.ACTION_TO_TEXT.entries()), d = (0, c.useIsEligibleForFamilyCenterVCJoin)({
    location: "family_center_tooltip_modal_web"
  });
  return (0, s.jsxs)(l.ModalRoot, {
    transitionState: t,
    children: [(0, s.jsx)("img", {
      className: x.art,
      src: p,
      alt: _.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_IMAGE_ALT
    }), (0, s.jsx)(l.ModalContent, {
      className: x.content,
      children: (0, s.jsxs)(a.Flex, {
        direction: a.Flex.Direction.VERTICAL,
        align: a.Flex.Align.CENTER,
        children: [(0, s.jsx)(l.Heading, {
          className: x.header,
          color: "header-primary",
          variant: "heading-lg/semibold",
          children: (0, s.jsx)(l.HeadingLevel, {
            children: n
          })
        }), o.map(e => {
          let [t, i] = e;
          return (0, s.jsx)(E, {
            icon: A[t],
            header: i.tooltipHeader(),
            description: i.tooltipDescription(null != r ? r : void 0, d)
          }, t)
        })]
      })
    }), (0, s.jsx)(l.ModalFooter, {
      children: (0, s.jsx)(l.Button, {
        className: x.__invalid_button,
        type: "button",
        color: l.Button.Colors.BRAND,
        onClick: i,
        children: _.default.Messages.GOT_IT
      })
    })]
  })
}