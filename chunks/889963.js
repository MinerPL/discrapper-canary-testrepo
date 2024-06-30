n.d(t, {
    W: function () {
        return c;
    },
    s: function () {
        return r;
    }
}), n(47120), n(653041);
var r, i, a, o = n(470079), s = n(392711), l = n.n(s);
function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
(a = r || (r = {})).PAGE = 'PAGE', a.GAP = 'GAP', a.BACK = 'BACK', a.NEXT = 'NEXT';
class c extends (i = o.PureComponent) {
    getNeighborBounds() {
        let {
                totalPageCount: e,
                maxVisiblePages: t,
                selectedPage: n
            } = this.props, r = Math.ceil(t / 2), i = Math.floor(t / 2), a = [
                1,
                e
            ], [o, s] = a = n <= r ? [
                1,
                t
            ] : n > e - i ? [
                e - t + 1,
                e
            ] : [
                n - r + 1,
                n + i
            ];
        return [
            Math.max(o, 1),
            Math.min(s, e)
        ];
    }
    getPageList() {
        let {
                totalPageCount: e,
                selectedPage: t,
                hideMaxPage: n
            } = this.props, [r, i] = this.getNeighborBounds(), a = {
                type: 'BACK',
                key: 'back',
                disabled: 1 === t,
                selected: !1,
                navigateToPage: this.handleBackward
            }, o = {
                type: 'NEXT',
                key: 'next',
                disabled: t === e,
                selected: !1,
                navigateToPage: this.handleForward
            }, s = [], u = [];
        return r > 1 && (s = [
            {
                type: 'PAGE',
                key: 'page-1',
                targetPage: 1,
                navigateToPage: () => this.handleJump(1)
            },
            {
                type: 'GAP',
                key: 'left-gap'
            }
        ], r += 2), i < e && (u = [{
                type: 'GAP',
                key: 'right-gap'
            }], !n && u.push({
            type: 'PAGE',
            key: 'page-'.concat(e),
            targetPage: e,
            navigateToPage: () => this.handleJump(e)
        }), i -= 2), [
            a,
            ...s,
            ...l().range(r, i + 1).map(e => ({
                type: 'PAGE',
                key: 'page-'.concat(e),
                targetPage: e,
                selected: e === t,
                disabled: !1,
                navigateToPage: () => this.handleJump(e)
            })),
            ...u,
            o
        ];
    }
    render() {
        let {
            totalPageCount: e,
            children: t
        } = this.props;
        return t({
            pages: this.getPageList(),
            hasMultiplePages: e > 1
        });
    }
    constructor(...e) {
        super(...e), u(this, 'changePageTo', e => {
            let {
                selectedPage: t,
                onPageChange: n
            } = this.props;
            t !== e && null != n && n(e);
        }), u(this, 'handleForward', () => {
            this.changePageTo(Math.min(this.props.selectedPage + 1, this.props.totalPageCount));
        }), u(this, 'handleBackward', () => {
            this.changePageTo(Math.max(this.props.selectedPage - 1, 1));
        }), u(this, 'handleJump', e => {
            this.changePageTo(e);
        });
    }
}
u(c, 'defaultProps', {
    maxVisiblePages: 9,
    hideMaxPage: !1
});
