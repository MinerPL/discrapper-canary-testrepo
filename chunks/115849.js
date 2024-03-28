"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("512722"),
  o = n.n(r),
  u = n("481060"),
  d = n("194359"),
  c = n("153124"),
  f = n("657682"),
  E = n("981631"),
  h = n("420212"),
  _ = n("689938"),
  C = n("823734"),
  m = n("794711");
let S = {
    canSend: !1,
    hint: null,
    success: null,
    error: null
  },
  I = (0, c.uid)(),
  p = "".concat(I, "-decription"),
  T = "".concat(I, "-error");

function g(e, t) {
  switch (t.type) {
    case "RESET":
      return S;
    case "SUCCESS":
      return {
        ...S, success: t.text
      };
    case "HINT":
      return {
        ...S, canSend: !0, hint: t.text
      };
    case "ERROR":
      return {
        ...e, canSend: !0, error: t.text
      }
  }
}

function A() {
  let e = s.createRef(),
    t = s.createRef(),
    [n, l] = s.useReducer(g, S),
    {
      canSend: r,
      hint: c,
      success: A,
      error: N
    } = n;
  return s.useEffect(() => {
    null != A && (o()(null != e.current, "Input is submitting when not mounted"), e.current.value = "", e.current.focus())
  }, [A, e]), (0, a.jsxs)("form", {
    onSubmit: t => {
      t.preventDefault(), o()(null != e.current, "Input is submitted when not mounted");
      let n = e.current.value.trim();
      !n.includes("#") && n.startsWith("@") && (n = n.substring(1));
      let a = (0, f.validateDiscordTag)(n);
      if (null != a) {
        l({
          type: "ERROR",
          text: a
        });
        return
      }
      d.default.sendRequest({
        discordTag: n,
        context: {
          location: "Add Friend"
        }
      }).then(() => l({
        type: "SUCCESS",
        text: _.default.Messages.ADD_FRIEND_SUCCESS.format({
          discordTag: n
        })
      }), e => {
        var t;
        return l({
          type: "ERROR",
          text: (0, f.humanizeAbortCode)(null === (t = e.body) || void 0 === t ? void 0 : t.code, n)
        })
      })
    },
    autoComplete: "off",
    children: [(0, a.jsx)(u.FormText, {
      id: p,
      type: u.FormText.Types.DESCRIPTION,
      children: _.default.Messages.POMELO_ADD_FRIEND_DESCRIPTION
    }), (0, a.jsx)(u.FocusRing, {
      focusTarget: e,
      ringTarget: t,
      ringClassName: C.ring,
      children: (0, a.jsxs)("div", {
        ref: t,
        className: i()(C.addFriendInputWrapper, {
          [C.success]: A,
          [C.error]: N
        }),
        children: [(0, a.jsx)(u.TextInput, {
          id: I,
          inputRef: e,
          className: C.addFriendInput,
          inputClassName: C.input,
          onKeyPress: t => {
            let n = t.currentTarget.value;
            if (t.key !== h.KeyboardEventKey.Enter && n.includes("#")) {
              o()(null != e.current, "Input is handling keypress when not mounted");
              let a = n.indexOf("#"),
                s = e.current.selectionStart,
                l = t.key === h.KeyboardEventKey.Backspace || t.key === h.KeyboardEventKey.ArrowRight || t.key === h.KeyboardEventKey.ArrowLeft,
                i = t.which >= 48 && t.which <= 57;
              null != s && s > a && /^(.+?#\d{4})$/.test(n) && !l ? t.preventDefault() : null != s && s > a && !i && !l && t.preventDefault()
            }
          },
          onChange: e => {
            if (e.length <= 0) {
              l({
                type: "RESET"
              });
              return
            }
            let t = "",
              [, n] = e.split("#");
            null != n && (t = e + E.PLACEHOLDER_TAG.slice(null != n ? n.length + 1 : 0)), l({
              type: "HINT",
              text: t
            })
          },
          maxLength: 37,
          autoFocus: !0,
          autoComplete: "off",
          name: "add-friend",
          "data-lpignore": !0,
          placeholder: _.default.Messages.POMELO_ADD_FRIEND_DESCRIPTION,
          "aria-label": _.default.Messages.POMELO_ADD_FRIEND_DESCRIPTION,
          "aria-invalid": null != N || void 0,
          "aria-describedby": null != N ? T : p
        }), null != c && (0, a.jsx)("div", {
          className: C.addFriendHint,
          "aria-hidden": !0,
          children: c
        }), (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          disabled: !r,
          type: "submit",
          children: _.default.Messages.ADD_FRIEND_BUTTON
        })]
      })
    }), null != N && (0, a.jsx)(u.FormText, {
      role: "alert",
      id: T,
      type: u.FormText.Types.ERROR,
      className: m.marginTop8,
      children: N
    }), null != A && (0, a.jsx)(u.FormText, {
      role: "status",
      type: u.FormText.Types.SUCCESS,
      className: m.marginTop8,
      children: A
    })]
  })
}