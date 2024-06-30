s.d(t, {
    HV: function () {
        return l;
    },
    Tp: function () {
        return o;
    },
    Xv: function () {
        return r;
    }
});
var n = s(392711), a = s(423891), i = s.n(a);
let r = async (e, t, s) => {
        var n;
        return {
            src: e,
            loop: !1,
            loopDelay: 0,
            duration: (n = await t.arrayBuffer(), i().decode(n).frames.length * 80),
            start: 0,
            position: {
                x: 0,
                y: 0
            },
            zIndex: 100 + s,
            height: 880,
            width: 450,
            name: t.name
        };
    }, o = e => {
        let t = (0, n.cloneDeep)(e), s = Math.floor(101 * Math.random()) + 150;
        return t.forEach((e, t) => {
            0 !== t && (e.start += s);
        }), t;
    }, l = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'json', s = '\n[';
        return 'json' === t && e.forEach((e, t) => {
            s += '\n              {\n                  "src": "file-'.concat(t, '.png",\n                  "start": ').concat(e.start, ',\n                  "duration": ').concat(e.duration, ',\n                  "height": ').concat(e.height, ',\n                  "width": ').concat(e.width, ',\n                  "zIndex": ').concat(e.zIndex, ',\n                  "loop": ').concat(e.loop, ',\n              },\n          ');
        }), 'proto' === t && e.forEach((e, t) => {
            s += '\n              ProfileEffectKeyFrame(\n                  src=\'file-'.concat(t, '.png\',\n                  loop=').concat(e.loop, ',\n                  width=').concat(e.width, ',\n                  height=').concat(e.height, ',\n                  duration=').concat(e.duration, ',\n                  start=').concat(e.start, ',\n                  loop_delay=0,\n                  position=Point(x=0, y=0),\n                  z_index=').concat(e.zIndex, ',\n              ),\n          ');
        }), s += '\n]';
    };
