"use strict";
i.r(t), i.d(t, {
  default: function() {
    return _
  }
}), i("222007");
var l = i("37983");
i("884691");
var s = i("750485"),
  n = i("77078"),
  a = i("887657"),
  r = i("549586"),
  o = i("564875"),
  c = i("404158"),
  d = i("671088"),
  h = i("368874"),
  u = i("775032"),
  C = i("821586"),
  f = i("922832"),
  x = i("782340"),
  T = i("782962"),
  p = i("392963");
let A = {
    [f.TeenActionDisplayType.USER_INTERACTION]: (0, l.jsx)(C.default, {
      width: 18,
      height: 18
    }),
    [f.TeenActionDisplayType.USER_CALLED]: (0, l.jsx)(a.default, {
      width: 22,
      height: 22
    }),
    [f.TeenActionDisplayType.USER_ADD]: (0, l.jsx)(o.default, {
      className: T.personWavingIcon,
      width: 22,
      height: 22
    }),
    [f.TeenActionDisplayType.GUILD_ADD]: (0, l.jsx)(r.default, {
      width: 22,
      height: 22
    }),
    [f.TeenActionDisplayType.GUILD_INTERACTION]: (0, l.jsx)(c.default, {
      className: T.threadIcon,
      width: 22,
      height: 22
    })
  },
  g = e => {
    let {
      header: t,
      description: i,
      icon: a
    } = e;
    return (0, l.jsxs)(s.Flex, {
      className: T.row,
      grow: 0,
      children: [(0, l.jsx)("div", {
        className: T.iconContainer,
        children: a
      }), (0, l.jsxs)("div", {
        className: T.rowContent,
        children: [(0, l.jsx)(n.Text, {
          className: T.rowHeader,
          variant: "text-sm/bold",
          children: t
        }), (0, l.jsx)(n.Text, {
          variant: "text-xs/medium",
          children: i
        })]
      })]
    })
  };
var _ = e => {
  let {
    transitionState: t,
    onClose: i
  } = e, a = (0, h.useAgeSpecificText)(x.default.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_TEEN, x.default.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_PARENT), r = (0, u.default)(), o = Array.from(f.ACTION_TO_TEXT.entries()), c = (0, d.useIsEligibleForFamilyCenterVCJoin)({
    location: "family_center_tooltip_modal_web"
  });
  return (0, l.jsxs)(n.ModalRoot, {
    transitionState: t,
    children: [(0, l.jsx)("img", {
      className: T.art,
      src: p,
      alt: x.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_IMAGE_ALT
    }), (0, l.jsx)(n.ModalContent, {
      className: T.content,
      children: (0, l.jsxs)(s.Flex, {
        direction: s.Flex.Direction.VERTICAL,
        align: s.Flex.Align.CENTER,
        children: [(0, l.jsx)(n.Heading, {
          className: T.header,
          color: "header-primary",
          variant: "heading-lg/semibold",
          children: (0, l.jsx)(n.HeadingLevel, {
            children: a
          })
        }), o.map(e => {
          let [t, i] = e;
          return (0, l.jsx)(g, {
            icon: A[t],
            header: i.tooltipHeader(),
            description: i.tooltipDescription(null != r ? r : void 0, c)
          }, t)
        })]
      })
    }), (0, l.jsx)(n.ModalFooter, {
      children: (0, l.jsx)(n.Button, {
        className: T.button,
        type: "button",
        color: n.Button.Colors.BRAND,
        onClick: i,
        children: x.default.Messages.GOT_IT
      })
    })]
  })
}