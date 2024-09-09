n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(374470),
    o = n(481060),
    c = n(239091),
    u = n(822951),
    d = n(835473),
    h = n(933557),
    m = n(471445),
    p = n(454585),
    _ = n(63063),
    f = n(984370),
    E = n(981631),
    g = n(689938),
    C = n(119338);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function x(e) {
    var t;
    let { channel: n, onClose: s, guild: a, transitionState: l } = e,
        r = (0, m.KS)(n, a),
        c = (0, h.ZP)(n, !1),
        f = (0, d.q)(null === (t = n.linkedLobby) || void 0 === t ? void 0 : t.application_id);
    return (0, i.jsx)(o.ModalRoot, {
        transitionState: l,
        'aria-label': g.Z.Messages.FORM_LABEL_CHANNEL_TOPIC,
        children: (0, i.jsx)(o.ModalContent, {
            children: (0, i.jsxs)(u.Z, {
                selectable: !0,
                onClose: s,
                renderHeader: () =>
                    (0, i.jsxs)('div', {
                        className: C.header,
                        children: [
                            null != r &&
                                (0, i.jsx)(r, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: C.channelIcon
                                }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: c
                            })
                        ]
                    }),
                children: [
                    (0, i.jsx)(o.Text, {
                        selectable: !0,
                        variant: 'text-md/normal',
                        className: C.content,
                        children: p.Z.parseTopic(n.topic, !0, { channelId: n.id })
                    }),
                    null != f
                        ? (0, i.jsxs)('div', {
                              className: C.linkedLobbyNotice,
                              children: [
                                  (0, i.jsx)(o.RefreshIcon, { className: C.linkedLobbyApplicationIcon }),
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'header-secondary',
                                      children: g.Z.Messages.CHANNEL_LINKED_LOBBY_CHANNEL_TOPIC_NOTICE.format({
                                          applicationName: f.name,
                                          helpdeskArticle: _.Z.getArticleURL(E.BhN.CHANNEL_LINKED_LOBBIES),
                                          separatorHook: (e, t) =>
                                              (0, i.jsx)(
                                                  'span',
                                                  {
                                                      className: C.linkedLobbyNoticeSeparator,
                                                      children: e
                                                  },
                                                  t
                                              )
                                      })
                                  })
                              ]
                          })
                        : null
                ]
            })
        })
    });
}
function T(e) {
    return e.matches('a') || 'highlight' === e.className || e.className.includes('mention');
}
class v extends s.Component {
    render() {
        let { channel: e } = this.props;
        return e.isMultiUserDM() || null == e.topic || 0 === e.topic.length
            ? null
            : (0, i.jsxs)(s.Fragment, {
                  children: [
                      (0, i.jsx)(f.Z.Divider, {}),
                      (0, i.jsxs)('div', {
                          className: l()(C.topic, C.expandable),
                          onMouseDown: this.onMouseDown,
                          onMouseMove: this.onMouseMove,
                          onMouseUp: this.onMouseUp,
                          onContextMenu: this.handleContextMenu,
                          onClick: this.handleClick,
                          children: [
                              (0, i.jsx)(o.Clickable, {
                                  onClick: this.handleClick,
                                  'aria-label': g.Z.Messages.OPEN_CHANNEL_TOPIC,
                                  className: C.topicClickTarget
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
        super(...e),
            I(this, '_mouseDown', !1),
            I(this, '_mouseUp', !1),
            I(this, 'handleOpenTopic', (e) => {
                let t = e.target;
                if ((0, r.k)(t)) {
                    if (T(t)) return;
                    let e = t.parentNode;
                    if ((0, r.k)(e) && T(e)) return;
                }
                (0, o.openModal)((e) =>
                    (0, i.jsx)(x, {
                        ...e,
                        ...this.props
                    })
                );
            }),
            I(this, 'onMouseDown', () => {
                this._mouseDown = !0;
            }),
            I(this, 'onMouseMove', () => {
                this._mouseDown && (this._mouseDown = !1);
            }),
            I(this, 'onMouseUp', (e) => {
                this._mouseDown && e.button !== E.AeJ.SECONDARY && this.handleOpenTopic(e), (this._mouseUp = !0), (this._mouseDown = !1);
            }),
            I(this, 'handleContextMenu', (e) => {
                let { channel: t, guild: s } = this.props;
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e('24783').then(n.bind(n, 439635));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channel: t,
                            guild: s,
                            includeTopic: !0
                        });
                });
            }),
            I(this, 'handleClick', (e) => {
                if (this._mouseUp) {
                    this._mouseUp = !1;
                    return;
                }
                this.handleOpenTopic(e);
            });
    }
}
t.Z = v;
