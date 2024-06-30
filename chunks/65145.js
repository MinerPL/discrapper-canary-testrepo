n.d(t, {
    Pk: function () {
        return u;
    },
    dv: function () {
        return c;
    }
}), n(411104), n(47120);
var i, a, s = n(735250), l = n(470079), r = n(823379);
(a = i || (i = {})).POLL_ANSWERS = 'POLL_ANSWERS', a.ACTION_BUTTON = 'ACTION_BUTTON';
let o = l.createContext(void 0);
function c() {
    let e = l.useContext(o);
    if (null == e)
        throw Error('No PollFocusContextProvider found');
    return e;
}
function d(e) {
    let {
            children: t,
            actionButtonRef: n,
            pollAnswerRef: i,
            manageFocusOnAction: a
        } = e, r = l.useMemo(() => ({
            actionButtonRef: n,
            pollAnswerRef: i,
            manageFocusOnAction: a
        }), [
            n,
            i,
            a
        ]);
    return (0, s.jsx)(o.Provider, {
        value: r,
        children: t
    });
}
function u(e) {
    let {children: t} = e, [n, i] = l.useState(), a = l.useRef(null), o = l.useRef(null);
    return l.useEffect(() => {
        var e, t, i;
        'POLL_ANSWERS' === n && null != o.current && (null === (t = o.current) || void 0 === t || null === (e = t.ref) || void 0 === e || e.focus()), 'ACTION_BUTTON' === n && null != a.current && (null === (i = a.current) || void 0 === i || i.focus());
    }, [n]), (0, s.jsx)(d, {
        pollAnswerRef: o,
        actionButtonRef: a,
        manageFocusOnAction: e => {
            switch (e) {
            case 'submit':
            case 'cancel':
                i('ACTION_BUTTON');
                break;
            case 'remove':
            case 'showVotes':
                i('POLL_ANSWERS');
                break;
            case 'showVoterDetails':
                break;
            default:
                (0, r.vE)(e);
            }
        },
        children: t
    });
}
