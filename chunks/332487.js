n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(724458);
var i = n(200651);
n(192379);
var l = n(70097),
    a = n(335131),
    r = n(590558);
let s = [
    {
        aspectRatio: 16 / 9,
        src: 'https://cdn.discordapp.com/assets/content/b429b51481761aa499a7fe533d1f7587c8e1c5d5e4839bc0251e2f77acbfac81.webm'
    },
    {
        aspectRatio: 1,
        src: 'https://cdn.discordapp.com/assets/content/c7b0e78acddc38d30f5edb828c2f4c6dbef41c4704a6587a6d8f22292004a3b9.webm'
    },
    {
        aspectRatio: 21 / 9,
        src: 'https://cdn.discordapp.com/assets/content/bb5d71a9e1a5bb733465f79a662d8801d7676a3ff8026ef51c0b7ebb66dbc80b.webm'
    }
];
function o(e) {
    let t,
        { baseTileRef: n } = e;
    if (null == n || 0 === n.offsetHeight) return null;
    let o = n.offsetWidth / n.offsetHeight;
    let { src: c } =
        ((t = o),
        s.reduce((e, n) => {
            let i = Math.abs(t - e.aspectRatio);
            return Math.abs(t - n.aspectRatio) < i ? n : e;
        }, s[0]));
    return (0, i.jsx)('div', {
        style: {
            width: 1.22 * n.offsetWidth,
            height: 1.22 * n.offsetHeight
        },
        className: r.demoEffectOverlay,
        children: (0, i.jsx)(l.Z, {
            autoPlay: !0,
            className: r.demoEffectImg,
            onEnded: a.ag,
            children: (0, i.jsx)('source', {
                src: c,
                type: 'video/webm'
            })
        })
    });
}
