"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("222007");
var a = s("37983");
s("884691");
var l = s("446674"),
  n = s("669491"),
  i = s("77078"),
  r = s("863636"),
  o = s("380710"),
  d = s("578706"),
  u = s("381546"),
  c = s("266926"),
  E = s("653274"),
  _ = s("682327"),
  I = s("653138"),
  T = s("782340"),
  S = s("376557");

function f(e) {
  let {
    guildId: t,
    scrollToQuestions: s
  } = e, f = (0, l.useStateFromStores)([r.default], () => r.default.isAdvancedMode(t)), m = (0, l.useStateFromStores)([E.default], () => E.default.editedDefaultChannelIds), [N, g] = (0, o.useChattableDefaultChannels)(t, [...m]), [h, C] = (0, _.useEditedChattableDefaultChannelsWithQuestions)(t, [...m]), R = f ? C.length : g.length, x = f ? h.length : N.length, L = R < I.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING, O = x >= I.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN, A = C.length - g.length, p = (0, a.jsx)(d.default, {
    color: n.default.unsafe_rawColors.BRAND_500.css,
    backgroundColor: n.default.unsafe_rawColors.WHITE_100.css,
    className: S.icon,
    width: 18,
    height: 18
  }), M = (0, a.jsx)(u.default, {
    className: S.icon,
    color: "var(--background-accent)",
    backgroundColor: n.default.colors.WHITE.css,
    width: 18,
    height: 18
  }), D = [Math.min(I.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN, x) / I.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING * 100, Math.min(I.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING, R) / I.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING * 100], v = !L && O ? [n.default.colors.TEXT_POSITIVE.css, n.default.colors.TEXT_POSITIVE.css] : [n.default.colors.TEXT_BRAND.css, n.default.colors.TEXT_MUTED.css];
  return (0, a.jsxs)("div", {
    className: S.container,
    children: [(0, a.jsxs)("div", {
      className: S.header,
      children: [(0, a.jsx)(i.Text, {
        variant: "text-xs/bold",
        color: "text-brand",
        children: T.default.Messages.DEFAULT_CHANNELS_CHATTABLE_COUNT.format({
          count: x
        })
      }), (0, a.jsx)(i.Text, {
        variant: "text-xs/bold",
        color: "text-muted",
        children: T.default.Messages.DEFAULT_CHANNELS_TOTAL_COUNT.format({
          count: R
        })
      })]
    }), (0, a.jsx)(i.StackedProgress, {
      foregroundColors: v,
      percents: D,
      size: i.StackedProgress.Sizes.XSMALL
    }), (0, a.jsxs)("div", {
      className: S.requiredItem,
      children: [L ? M : p, (0, a.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: T.default.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_MIN_CHANNELS.format({
          count: I.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING
        })
      })]
    }), (0, a.jsxs)("div", {
      className: S.requiredItem,
      children: [O ? p : M, (0, a.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: T.default.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_MIN_CHATTABLE_CHANNELS.format({
          count: I.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN
        })
      })]
    }), f && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: S.requiredItem,
        children: [(0, a.jsx)(c.default, {
          color: "var(--background-accent)",
          backgroundColor: n.default.colors.WHITE.css,
          className: S.icon,
          width: 18,
          height: 18
        }), (0, a.jsx)(i.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: T.default.Messages.DEFAULT_CHANNELS_ADVANCED_EXPLAINER
        })]
      }), (0, a.jsxs)("div", {
        className: S.requiredItem,
        children: [(0, a.jsx)(c.default, {
          color: "var(--background-accent)",
          backgroundColor: n.default.colors.WHITE.css,
          className: S.icon,
          width: 18,
          height: 18
        }), (0, a.jsx)(i.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: T.default.Messages.DEFAULT_CHANNELS_PREVIEW_ADDITIONAL.format({
            count: A,
            prejoinHook: e => (0, a.jsx)(i.Anchor, {
              onClick: s,
              children: (0, a.jsx)(i.Text, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-link",
                children: e
              })
            })
          })
        })]
      })]
    })]
  })
}