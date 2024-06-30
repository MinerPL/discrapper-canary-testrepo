s.d(t, {
    Z: function () {
        return u;
    }
}), s(47120);
var n = s(735250), r = s(470079), o = s(748780), i = s(481060), a = s(45791);
class u extends r.Component {
    componentWillEnter(e) {
        let {offset: t} = this.state;
        t.setValue(1), o.Z.spring(t, {
            toValue: 0,
            duration: 75
        }).start(e);
    }
    componentWillLeave(e) {
        let {offset: t} = this.state;
        t.setValue(0), this.setState({ isExiting: !0 }, () => {
            o.Z.spring(t, {
                toValue: -1,
                duration: 75
            }).start(e);
        });
    }
    render() {
        let {
            isExiting: e,
            offset: t
        } = this.state;
        return (0, n.jsx)(o.Z.div, {
            className: a.wrapper,
            style: {
                left: 0,
                position: e ? 'absolute' : 'relative',
                top: 0,
                transform: [{
                        translateX: t.interpolate({
                            inputRange: [
                                -1,
                                1
                            ],
                            outputRange: [
                                '-100%',
                                '100%'
                            ]
                        })
                    }]
            },
            children: (0, n.jsx)(i.ModalContent, {
                className: a.contentWrapper,
                children: this.props.children
            })
        });
    }
    constructor(...e) {
        var t, s, n;
        super(...e), t = this, s = 'state', n = {
            isExiting: !1,
            offset: new o.Z.Value(0),
            selectedValue: null
        }, s in t ? Object.defineProperty(t, s, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[s] = n;
    }
}
