n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(374470),
  o = n(481060),
  c = n(239091),
  u = n(822951),
  d = n(835473),
  h = n(933557),
  p = n(454585),
  m = n(63063),
  _ = n(984370),
  f = n(981631),
  E = n(689938),
  g = n(523649);

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function I(e) {
  var t;
  let {
channel: n,
onClose: a,
transitionState: s
  } = e, l = (0, h.ZP)(n, !0), r = (0, d.q)(null === (t = n.linkedLobby) || void 0 === t ? void 0 : t.application_id);
  return (0, i.jsx)(o.ModalRoot, {
transitionState: s,
'aria-label': E.Z.Messages.FORM_LABEL_CHANNEL_TOPIC,
children: (0, i.jsx)(o.ModalContent, {
  children: (0, i.jsxs)(u.Z, {
    selectable: !0,
    onClose: a,
    renderHeader: () => (0, i.jsx)(o.Heading, {
      variant: 'heading-lg/semibold',
      children: l
    }),
    children: [
      (0, i.jsx)(o.Text, {
        selectable: !0,
        variant: 'text-md/normal',
        className: g.content,
        children: p.Z.parseTopic(n.topic, !0, {
          channelId: n.id
        })
      }),
      null != r ? (0, i.jsxs)('div', {
        className: g.linkedLobbyNotice,
        children: [
          (0, i.jsx)(o.RefreshIcon, {
            className: g.linkedLobbyApplicationIcon
          }),
          (0, i.jsx)(o.Text, {
            variant: 'text-sm/normal',
            color: 'header-secondary',
            children: E.Z.Messages.CHANNEL_LINKED_LOBBY_CHANNEL_TOPIC_NOTICE.format({
              applicationName: r.name,
              helpdeskArticle: m.Z.getArticleURL(f.BhN.CHANNEL_LINKED_LOBBIES),
              separatorHook: (e, t) => (0, i.jsx)('span', {
                className: g.linkedLobbyNoticeSeparator,
                children: e
              }, t)
            })
          })
        ]
      }) : null
    ]
  })
})
  });
}

function x(e) {
  return e.matches('a') || 'highlight' === e.className || e.className.includes('mention');
}
class T extends a.Component {
  render() {
let {
  channel: e
} = this.props;
return e.isMultiUserDM() || null == e.topic || 0 === e.topic.length ? null : (0, i.jsxs)(a.Fragment, {
  children: [
    (0, i.jsx)(_.Z.Divider, {}),
    (0, i.jsxs)('div', {
      className: l()(g.topic, g.expandable),
      onMouseDown: this.onMouseDown,
      onMouseMove: this.onMouseMove,
      onMouseUp: this.onMouseUp,
      onContextMenu: this.handleContextMenu,
      onClick: this.handleClick,
      children: [
        (0, i.jsx)(o.Clickable, {
          onClick: this.handleClick,
          'aria-label': E.Z.Messages.OPEN_CHANNEL_TOPIC,
          className: g.topicClickTarget
        }),
        p.Z.parseTopic(e.topic, !0, {
          channelId: e.id,
          allowLinks: !0
        })
      ]
    })
  ]
});
  }
  constructor(...e) {
super(...e), C(this, '_mouseDown', !1), C(this, '_mouseUp', !1), C(this, 'handleOpenTopic', e => {
  let t = e.target;
  if ((0, r.k)(t)) {
    if (x(t))
      return;
    let e = t.parentNode;
    if ((0, r.k)(e) && x(e))
      return;
  }
  (0, o.openModal)(e => (0, i.jsx)(I, {
    ...e,
    ...this.props
  }));
}), C(this, 'onMouseDown', () => {
  this._mouseDown = !0;
}), C(this, 'onMouseMove', () => {
  this._mouseDown && (this._mouseDown = !1);
}), C(this, 'onMouseUp', e => {
  this._mouseDown && e.button !== f.AeJ.SECONDARY && this.handleOpenTopic(e), this._mouseUp = !0, this._mouseDown = !1;
}), C(this, 'handleContextMenu', e => {
  let {
    channel: t,
    guild: a
  } = this.props;
  (0, c.jW)(e, async () => {
    let {
      default: e
    } = await n.e('24783').then(n.bind(n, 439635));
    return n => (0, i.jsx)(e, {
      ...n,
      channel: t,
      guild: a,
      includeTopic: !0
    });
  });
}), C(this, 'handleClick', e => {
  if (this._mouseUp) {
    this._mouseUp = !1;
    return;
  }
  this.handleOpenTopic(e);
});
  }
}
t.Z = T;