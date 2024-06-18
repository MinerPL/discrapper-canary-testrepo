"use strict";
n.d(t, {
  Z: function() {
    return d
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(260034),
  o = n(993365),
  a = n(481060),
  l = n(489863),
  u = n(689938),
  _ = n(302191);

function d(e) {
  var t;
  let {
    selectedGuildId: n,
    selectedChannelId: d,
    onChannelChange: c,
    error: E
  } = e, [I, T] = r.useState(null), h = r.useRef(!1);
  if (r.useEffect(() => {
      async function e(e) {
        let t = await (0, l.UR)(e);
        n === e && (t.sort((e, t) => e.name.localeCompare(t.name)), T({
          guildId: e,
          channels: t
        }), h.current = !0)
      }
      T(null), null == n ? c(null) : e(n)
    }, [c, n]), r.useEffect(() => {
      if (!!h.current) null == I ? null != d && c(null) : !I.channels.some(e => e.id === d) && c(null)
    }, [I, c, d, n]), null == n) return null;
  let S = null == I || I.guildId !== n ? [] : (null !== (t = null == I ? void 0 : I.channels) && void 0 !== t ? t : []).map(e => ({
    value: e.id,
    label: e.name
  }));
  return (0, i.jsxs)("div", {
    className: _.selectorGroup,
    children: [(0, i.jsx)(s.X, {
      variant: "heading-deprecated-12/semibold",
      className: _.sectionLabel,
      children: u.Z.Messages.OAUTH2_ADD_WEBHOOK_INCOMING
    }), null != E && "" !== E ? (0, i.jsx)(o.x, {
      variant: "text-xs/normal",
      color: "text-danger",
      children: E
    }) : null, (0, i.jsx)(a.Select, {
      className: _.select,
      maxVisibleItems: 5,
      select: c,
      placeholder: u.Z.Messages.SCOPE_WEBHOOK_INCOMING_CHANNEL_PLACEHOLDER,
      options: S,
      isSelected: e => e === d,
      serialize: e => e,
      renderOptionLabel: e => (0, i.jsx)(o.x, {
        variant: "text-md/normal",
        children: e.label
      }),
      renderOptionValue: e => (0, i.jsx)(o.x, {
        variant: "text-md/normal",
        children: e[0].label
      })
    }), (0, i.jsx)(o.x, {
      variant: "text-xs/normal",
      color: "header-secondary",
      className: _.label,
      children: u.Z.Messages.SCOPE_WEBHOOK_INCOMING_DESCRIPTION
    })]
  })
}