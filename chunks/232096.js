n.d(t, {
    Z: function () {
        return a;
    }
}), n(47120);
let r = [
        [
            'position',
            'absolute'
        ],
        [
            'top',
            '-100px'
        ],
        [
            'left',
            '-100px'
        ],
        [
            'width',
            '100px'
        ],
        [
            'height',
            '100px'
        ],
        [
            'overflow',
            'scroll'
        ]
    ], i = [
        [
            'width',
            '200px'
        ],
        [
            'height',
            '200px'
        ]
    ];
function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '', t = document.createElement('div'), n = document.createElement('div');
    for (let [e, n] of r)
        t.style[e] = n;
    for (let [e, t] of i)
        n.style[e] = t;
    t.appendChild(n), document.body.appendChild(t), t.className = e;
    let a = {
        width: t.offsetWidth - t.clientWidth,
        height: t.offsetHeight - t.clientHeight
    };
    return document.body.removeChild(t), a;
}
