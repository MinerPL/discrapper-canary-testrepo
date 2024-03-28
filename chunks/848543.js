"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("399606"),
  i = n("524437"),
  r = n("582019"),
  o = n("481060"),
  u = n("239091"),
  d = n("100527"),
  c = n("906732"),
  f = n("706140"),
  E = n("294629"),
  h = n("131951"),
  _ = n("242291"),
  C = n("792165"),
  m = n("603074"),
  S = n("921944"),
  I = n("689938");

function p(e) {
  let {
    channel: t,
    iconClassName: p,
    className: T,
    innerClassName: g,
    ...A
  } = e, {
    mute: N,
    suppress: v
  } = (0, E.default)(t), O = (0, l.useStateFromStores)([h.default], () => h.default.isDeaf()), R = N || v || O, [L, P] = s.useState(!1), M = t.getGuildId(), y = (0, _.useSoundBoardDismissContentTypes)({
    isSoundboardButtonDisabled: R
  }), [D, b] = (0, f.useGetDismissibleContent)(y), {
    analyticsLocations: x
  } = (0, c.default)(d.default.SOUNDBOARD_BUTTON);

  function U(e) {
    null != M && (0, u.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, "338991"));
      return t => (0, a.jsx)(e, {
        guildId: M,
        ...t
      })
    })
  }
  let {
    Component: j,
    play: G,
    events: {
      onMouseEnter: w,
      onMouseLeave: k
    }
  } = (0, r.useSoundboardLottie)(), F = e => (0, a.jsx)(o.Popout, {
    shouldShow: L,
    position: "top",
    onRequestClose: () => P(!1),
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, a.jsx)(m.default, {
        guildId: M,
        channel: t,
        onClose: n,
        gridNotice: D === i.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, a.jsx)(C.CustomCallSoundUpsell, {
          onClose: n,
          markAsDismissed: b
        }),
        analyticsSource: "rtc panel"
      })
    },
    children: t => (0, a.jsx)("div", {
      children: (0, a.jsx)(o.Button, {
        ...e,
        ...t,
        className: T,
        wrapperClassName: T,
        innerClassName: g,
        disabled: R,
        onClick: () => {
          var t, n;
          null == n || n(), null != D && D !== i.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && b(S.ContentDismissActionType.UNKNOWN), null == e || null === (t = e.onClick) || void 0 === t || t.call(e), P(!L), G()
        },
        onMouseEnter: e => {
          var t;
          null === (t = A.onMouseEnter) || void 0 === t || t.call(A, e), w()
        },
        onMouseLeave: e => {
          var t;
          null === (t = A.onMouseLeave) || void 0 === t || t.call(A, e), k()
        },
        onContextMenu: U,
        fullWidth: !0,
        size: o.Button.Sizes.SMALL,
        ...A,
        children: (0, a.jsx)(j, {
          className: p,
          size: "sm",
          color: o.tokens.colors.INTERACTIVE_ACTIVE
        })
      })
    })
  });
  return (0, a.jsx)(c.AnalyticsLocationProvider, {
    value: x,
    children: (0, a.jsx)(o.Tooltip, {
      text: function() {
        if (N) return I.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_GUILD_MUTE;
        if (v) return I.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_SUPPRESSED;
        if (O) return I.default.Messages.SOUNDBOARD_OPEN_SOUNBOARRD_ERROR_DEAFENED;
        return I.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD
      }(),
      children: e => F(e)
    })
  })
}