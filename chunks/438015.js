n(47120);
var i = n(200651),
    r = n(192379),
    s = n(13245),
    a = n(593481),
    l = n(692546),
    o = n(981631),
    c = n(668697);
function d(e, t, n) {
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
class u extends r.Component {
    getStyle() {
        let e, t, n, i;
        let {
            props: { position: r, zIndex: s }
        } = this;
        switch (r) {
            case o._vf.TOP_LEFT:
            case o._vf.BOTTOM_LEFT:
                e = 0;
                break;
            default:
                t = 0;
        }
        switch (r) {
            case o._vf.BOTTOM_LEFT:
            case o._vf.BOTTOM_RIGHT:
                n = 0;
                break;
            default:
                i = 0;
        }
        return {
            left: e,
            right: t,
            bottom: n,
            top: i,
            zIndex: s
        };
    }
    render() {
        let {
                props: {
                    locked: e,
                    index: t,
                    notification: {
                        props: { renderFooter: n, onNotificationShow: r, onDismissClick: s, onNotificationClick: o, onConfirmClick: d, onCancelClick: u, ...h }
                    }
                }
            } = this,
            p = (0, i.jsx)('div', {
                className: c.notificationContainer,
                children: (0, i.jsx)(a.ZP, {
                    ...h,
                    onNotificationShow: 0 === t ? this.handleNotificationShow : null,
                    onDismissClick: this.handleDismissClick,
                    onNotificationClick: null != o ? this.handleNotificationClick : null,
                    onConfirmClick: null != d ? this.handleConfirmClick : null,
                    onCancelClick: null != u ? this.handleCancelClick : null,
                    renderFooter: this.renderFooter,
                    expand: !e && 0 === t
                })
            });
        return 0 === t
            ? (0, i.jsx)(l.Z, {
                  observeInterval: 200,
                  children: p
              })
            : p;
    }
    constructor(...e) {
        super(...e),
            d(this, 'handleNotificationShow', () => {
                let {
                    id: e,
                    props: { onNotificationShow: t }
                } = this.props.notification;
                t(e);
            }),
            d(this, 'handleDismissClick', (e) => {
                let {
                    id: t,
                    props: { onDismissClick: n }
                } = this.props.notification;
                s.Z.updateNotificationStatus(t), null != n && n(e, t);
            }),
            d(this, 'handleNotificationClick', (e) => {
                let {
                    id: t,
                    props: { onNotificationClick: n }
                } = this.props.notification;
                null != n && n(e, t);
            }),
            d(this, 'handleConfirmClick', (e) => {
                let {
                    id: t,
                    props: { onConfirmClick: n }
                } = this.props.notification;
                null != n && n(e, t);
            }),
            d(this, 'handleCancelClick', (e) => {
                let {
                    id: t,
                    props: { onCancelClick: n }
                } = this.props.notification;
                null != n && n(e, t);
            }),
            d(this, 'renderFooter', (e) => {
                let {
                    id: t,
                    props: { renderFooter: n }
                } = this.props.notification;
                return null != n ? n(e, t) : null;
            });
    }
}
t.Z = u;
