"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("374470"),
  o = n("481060"),
  u = n("239091"),
  d = n("822951"),
  c = n("933557"),
  f = n("454585"),
  h = n("984370"),
  m = n("981631"),
  p = n("689938"),
  E = n("458133");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function g(e) {
  let {
    channel: t,
    onClose: n,
    transitionState: l
  } = e, s = (0, c.default)(t, !0);
  return (0, a.jsx)(o.ModalRoot, {
    transitionState: l,
    "aria-label": p.default.Messages.FORM_LABEL_CHANNEL_TOPIC,
    children: (0, a.jsx)(o.ModalContent, {
      children: (0, a.jsx)(d.default, {
        selectable: !0,
        onClose: n,
        renderHeader: () => (0, a.jsx)(o.Heading, {
          variant: "heading-lg/semibold",
          children: s
        }),
        children: (0, a.jsx)(o.Text, {
          selectable: !0,
          variant: "text-md/normal",
          className: E.content,
          children: f.default.parseTopic(t.topic, !0, {
            channelId: t.id
          })
        })
      })
    })
  })
}

function S(e) {
  return e.matches("a") || "highlight" === e.className || e.className.includes("mention")
}
class _ extends l.Component {
  render() {
    let {
      channel: e
    } = this.props;
    return e.isMultiUserDM() || null == e.topic || 0 === e.topic.length ? null : (0, a.jsxs)(l.Fragment, {
      children: [(0, a.jsx)(h.default.Divider, {}), (0, a.jsxs)("div", {
        className: i()(E.topic, E.expandable),
        onMouseDown: this.onMouseDown,
        onMouseMove: this.onMouseMove,
        onMouseUp: this.onMouseUp,
        onContextMenu: this.handleContextMenu,
        onClick: this.handleClick,
        children: [(0, a.jsx)(o.Clickable, {
          onClick: this.handleClick,
          "aria-label": p.default.Messages.OPEN_CHANNEL_TOPIC,
          className: E.topicClickTarget
        }), f.default.parseTopic(e.topic, !0, {
          channelId: e.id,
          allowLinks: !0
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), C(this, "_mouseDown", !1), C(this, "_mouseUp", !1), C(this, "handleOpenTopic", e => {
      let t = e.target;
      if ((0, r.isElement)(t)) {
        if (S(t)) return;
        let e = t.parentNode;
        if ((0, r.isElement)(e) && S(e)) return
      }(0, o.openModal)(e => (0, a.jsx)(g, {
        ...e,
        ...this.props
      }))
    }), C(this, "onMouseDown", () => {
      this._mouseDown = !0
    }), C(this, "onMouseMove", () => {
      this._mouseDown && (this._mouseDown = !1)
    }), C(this, "onMouseUp", e => {
      this._mouseDown && e.button !== m.MouseButtons.SECONDARY && this.handleOpenTopic(e), this._mouseUp = !0, this._mouseDown = !1
    }), C(this, "handleContextMenu", e => {
      let {
        channel: t,
        guild: l
      } = this.props;
      (0, u.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("24783")]).then(n.bind(n, "439635"));
        return n => (0, a.jsx)(e, {
          ...n,
          channel: t,
          guild: l,
          includeTopic: !0
        })
      })
    }), C(this, "handleClick", e => {
      if (this._mouseUp) {
        this._mouseUp = !1;
        return
      }
      this.handleOpenTopic(e)
    })
  }
}
t.default = _