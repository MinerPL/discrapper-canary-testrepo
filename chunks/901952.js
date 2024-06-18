"use strict";
n.d(t, {
  Z: function() {
    return O
  }
}), n(411104), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(493683),
  o = n(904245),
  a = n(906732),
  l = n(541716),
  u = n(752305),
  _ = n(893718),
  d = n(957730),
  c = n(131704),
  E = n(592125),
  I = n(5192),
  T = n(838440),
  h = n(785717),
  S = n(981631),
  f = n(689938),
  N = n(112147);
let A = (0, c.kt)({
    id: "1",
    type: S.d4z.DM
  }),
  m = async e => {
    let {
      userId: t,
      content: n,
      location: i
    } = e, {
      valid: r,
      failureReason: a
    } = await (0, T.v)({
      type: l.I.NORMAL,
      content: n,
      channel: null
    });
    if (!r) throw Error(a);
    let u = await s.Z.openPrivateChannel(t, !1, !1, i),
      _ = E.Z.getChannel(u);
    if (null == _) throw Error("Failed to open private channel");
    let c = d.ZP.parse(_, n);
    return o.Z.sendMessage(_.id, c)
  };

function O(e) {
  let {
    user: t,
    guildId: n,
    channelId: s,
    onClose: o
  } = e, {
    newestAnalyticsLocation: d
  } = (0, a.ZP)(), {
    trackUserProfileAction: c
  } = (0, h.KZ)(), [E, T] = r.useState(""), [S, O] = r.useState((0, u.JM)(E)), R = r.useRef(!1);
  return (0, i.jsx)(_.Z, {
    innerClassName: N.inner,
    editorClassName: N.editor,
    type: l.I.USER_PROFILE,
    placeholder: f.Z.Messages.QUICK_DM_USER.format({
      name: I.ZP.getName(n, s, t)
    }),
    channel: A,
    textValue: E,
    richValue: S,
    onChange: (e, t, n) => {
      if (t !== E) T(t), O(n)
    },
    focused: R.current,
    onFocus: () => {
      R.current = !0
    },
    onBlur: () => {
      R.current = !1
    },
    onSubmit: async e => {
      let {
        value: n
      } = e;
      try {
        return c({
          action: "SEND_DIRECT_MESSAGE"
        }), await m({
          userId: t.id,
          content: n.trim(),
          location: d
        }), null == o || o(), {
          shouldClear: !0,
          shouldRefocus: !1
        }
      } catch {
        return {
          shouldClear: !1,
          shouldRefocus: !1
        }
      }
    }
  })
}