! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(function() {
        try {
            return require("moment")
        } catch (t) {}
    }()) : "function" == typeof define && define.amd ? define(["require"], function(t) {
        return e(function() {
            try {
                return t("moment")
            } catch (t) {}
        }())
    }) : t.Chart = e(t.moment)
}(this, function(n) {
    "use strict";
    n = n && n.hasOwnProperty("default") ? n.default : n;
    var a = {
        rgb2hsl: o,
        rgb2hsv: e,
        rgb2hwb: i,
        rgb2cmyk: s,
        rgb2keyword: l,
        rgb2xyz: d,
        rgb2lab: u,
        rgb2lch: function(t) {
            return x(u(t))
        },
        hsl2rgb: h,
        hsl2hsv: function(t) {
            var e = t[0],
                i = t[1] / 100,
                n = t[2] / 100;
            return 0 === n ? [0, 0, 0] : [e, 2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i) * 100, (n + i) / 2 * 100]
        },
        hsl2hwb: function(t) {
            return i(h(t))
        },
        hsl2cmyk: function(t) {
            return s(h(t))
        },
        hsl2keyword: function(t) {
            return l(h(t))
        },
        hsv2rgb: c,
        hsv2hsl: function(t) {
            var e, i, n = t[0],
                a = t[1] / 100,
                r = t[2] / 100;
            return e = a * r, [n, 100 * (e = (e /= (i = (2 - a) * r) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)]
        },
        hsv2hwb: function(t) {
            return i(c(t))
        },
        hsv2cmyk: function(t) {
            return s(c(t))
        },
        hsv2keyword: function(t) {
            return l(c(t))
        },
        hwb2rgb: f,
        hwb2hsl: function(t) {
            return o(f(t))
        },
        hwb2hsv: function(t) {
            return e(f(t))
        },
        hwb2cmyk: function(t) {
            return s(f(t))
        },
        hwb2keyword: function(t) {
            return l(f(t))
        },
        cmyk2rgb: p,
        cmyk2hsl: function(t) {
            return o(p(t))
        },
        cmyk2hsv: function(t) {
            return e(p(t))
        },
        cmyk2hwb: function(t) {
            return i(p(t))
        },
        cmyk2keyword: function(t) {
            return l(p(t))
        },
        keyword2rgb: w,
        keyword2hsl: function(t) {
            return o(w(t))
        },
        keyword2hsv: function(t) {
            return e(w(t))
        },
        keyword2hwb: function(t) {
            return i(w(t))
        },
        keyword2cmyk: function(t) {
            return s(w(t))
        },
        keyword2lab: function(t) {
            return u(w(t))
        },
        keyword2xyz: function(t) {
            return d(w(t))
        },
        xyz2rgb: m,
        xyz2lab: v,
        xyz2lch: function(t) {
            return x(v(t))
        },
        lab2xyz: y,
        lab2rgb: _,
        lab2lch: x,
        lch2lab: k,
        lch2xyz: function(t) {
            return y(k(t))
        },
        lch2rgb: function(t) {
            return _(k(t))
        }
    };

    function o(t) {
        var e, i, n = t[0] / 255,
            a = t[1] / 255,
            r = t[2] / 255,
            o = Math.min(n, a, r),
            s = Math.max(n, a, r),
            l = s - o;
        return s == o ? e = 0 : n == s ? e = (a - r) / l : a == s ? e = 2 + (r - n) / l : r == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (o + s) / 2, [e, 100 * (s == o ? 0 : i <= .5 ? l / (s + o) : l / (2 - s - o)), 100 * i]
    }

    function e(t) {
        var e, i, n = t[0],
            a = t[1],
            r = t[2],
            o = Math.min(n, a, r),
            s = Math.max(n, a, r),
            l = s - o;
        return i = 0 == s ? 0 : l / s * 1e3 / 10, s == o ? e = 0 : n == s ? e = (a - r) / l : a == s ? e = 2 + (r - n) / l : r == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10]
    }

    function i(t) {
        var e = t[0],
            i = t[1],
            n = t[2];
        return [o(t)[0], 1 / 255 * Math.min(e, Math.min(i, n)) * 100, 100 * (n = 1 - 1 / 255 * Math.max(e, Math.max(i, n)))]
    }

    function s(t) {
        var e, i = t[0] / 255,
            n = t[1] / 255,
            a = t[2] / 255;
        return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - a))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e]
    }

    function l(t) {
        return S[JSON.stringify(t)]
    }

    function d(t) {
        var e = t[0] / 255,
            i = t[1] / 255,
            n = t[2] / 255;
        return [100 * (.4124 * (e = .04045 < e ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = .04045 < i ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = .04045 < n ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)]
    }

    function u(t) {
        var e = d(t),
            i = e[0],
            n = e[1],
            a = e[2];
        return n /= 100, a /= 108.883, i = .008856 < (i /= 95.047) ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = .008856 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (a = .008856 < a ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]
    }

    function h(t) {
        var e, i, n, a, r, o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100;
        if (0 == s) return [r = 255 * l, r, r];
        e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];
        for (var d = 0; d < 3; d++)(n = o + 1 / 3 * -(d - 1)) < 0 && n++, 1 < n && n--, r = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, a[d] = 255 * r;
        return a
    }

    function c(t) {
        var e = t[0] / 60,
            i = t[1] / 100,
            n = t[2] / 100,
            a = Math.floor(e) % 6,
            r = e - Math.floor(e),
            o = 255 * n * (1 - i),
            s = 255 * n * (1 - i * r),
            l = 255 * n * (1 - i * (1 - r));
        switch (n *= 255, a) {
            case 0:
                return [n, l, o];
            case 1:
                return [s, n, o];
            case 2:
                return [o, n, l];
            case 3:
                return [o, s, n];
            case 4:
                return [l, o, n];
            case 5:
                return [n, o, s]
        }
    }

    function f(t) {
        var e, i, n, a, o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100,
            d = s + l;
        switch (1 < d && (s /= d, l /= d), n = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (n = 1 - n), a = s + n * ((i = 1 - l) - s), e) {
            default:
                case 6:
                case 0:
                r = i,
            g = a,
            b = s;
            break;
            case 1:
                    r = a,
                g = i,
                b = s;
                break;
            case 2:
                    r = s,
                g = i,
                b = a;
                break;
            case 3:
                    r = s,
                g = a,
                b = i;
                break;
            case 4:
                    r = a,
                g = s,
                b = i;
                break;
            case 5:
                    r = i,
                g = s,
                b = a
        }
        return [255 * r, 255 * g, 255 * b]
    }

    function p(t) {
        var e = t[0] / 100,
            i = t[1] / 100,
            n = t[2] / 100,
            a = t[3] / 100;
        return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a))]
    }

    function m(t) {
        var e, i, n, a = t[0] / 100,
            r = t[1] / 100,
            o = t[2] / 100;
        return i = -.9689 * a + 1.8758 * r + .0415 * o, n = .0557 * a + -.204 * r + 1.057 * o, e = .0031308 < (e = 3.2406 * a + -1.5372 * r + -.4986 * o) ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = .0031308 < i ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = .0031308 < n ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
    }

    function v(t) {
        var e = t[0],
            i = t[1],
            n = t[2];
        return i /= 100, n /= 108.883, e = .008856 < (e /= 95.047) ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = .008856 < i ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = .008856 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
    }

    function y(t) {
        var e, i, n, a, r = t[0],
            o = t[1],
            s = t[2];
        return a = r <= 8 ? (i = 100 * r / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((r + 16) / 116, 3), Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (o / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(o / 500 + a, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3)]
    }

    function x(t) {
        var e, i = t[0],
            n = t[1],
            a = t[2];
        return (e = 360 * Math.atan2(a, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + a * a), e]
    }

    function _(t) {
        return m(y(t))
    }

    function k(t) {
        var e, i = t[0],
            n = t[1];
        return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)]
    }

    function w(t) {
        return M[t]
    }
    var M = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        },
        S = {};
    for (var t in M) S[JSON.stringify(M[t])] = t;

    function C() {
        return new A
    }
    for (var D in a) {
        C[D + "Raw"] = function(e) {
            return function(t) {
                return "number" == typeof t && (t = Array.prototype.slice.call(arguments)), a[e](t)
            }
        }(D);
        var P = /(\w+)2(\w+)/.exec(D),
            T = P[1],
            I = P[2];
        (C[T] = C[T] || {})[I] = C[D] = function(n) {
            return function(t) {
                "number" == typeof t && (t = Array.prototype.slice.call(arguments));
                var e = a[n](t);
                if ("string" == typeof e || void 0 === e) return e;
                for (var i = 0; i < e.length; i++) e[i] = Math.round(e[i]);
                return e
            }
        }(D)
    }
    var A = function() {
        this.convs = {}
    };
    A.prototype.routeSpace = function(t, e) {
        var i = e[0];
        return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i))
    }, A.prototype.setValues = function(t, e) {
        return this.space = t, this.convs = {}, this.convs[t] = e, this
    }, A.prototype.getValues = function(t) {
        var e = this.convs[t];
        if (!e) {
            var i = this.space,
                n = this.convs[i];
            e = C[i][t](n), this.convs[t] = e
        }
        return e
    }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(e) {
        A.prototype[e] = function(t) {
            return this.routeSpace(e, arguments)
        }
    });
    var F = C,
        O = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        },
        L = {
            getRgba: R,
            getHsla: W,
            getRgb: function(t) {
                var e = R(t);
                return e && e.slice(0, 3)
            },
            getHsl: function(t) {
                var e = W(t);
                return e && e.slice(0, 3)
            },
            getHwb: N,
            getAlpha: function(t) {
                var e = R(t);
                return e ? e[3] : (e = W(t)) ? e[3] : (e = N(t)) ? e[3] : void 0
            },
            hexString: function(t, e) {
                e = void 0 !== e && 3 === t.length ? e : t[3];
                return "#" + H(t[0]) + H(t[1]) + H(t[2]) + (0 <= e && e < 1 ? H(Math.round(255 * e)) : "")
            },
            rgbString: function(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? z(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
            },
            rgbaString: z,
            percentString: function(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? B(t, e) : "rgb(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%)"
            },
            percentaString: B,
            hslString: function(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? V(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
            },
            hslaString: V,
            hwbString: function(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
            },
            keyword: function(t) {
                return Y[t.slice(0, 3)]
            }
        };

    function R(t) {
        if (t) {
            var e = [0, 0, 0],
                i = 1,
                n = t.match(/^#([a-fA-F0-9]{3,4})$/i),
                a = "";
            if (n) {
                a = (n = n[1])[3];
                for (var r = 0; r < e.length; r++) e[r] = parseInt(n[r] + n[r], 16);
                a && (i = Math.round(parseInt(a + a, 16) / 255 * 100) / 100)
            } else if (n = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
                for (a = n[2], n = n[1], r = 0; r < e.length; r++) e[r] = parseInt(n.slice(2 * r, 2 * r + 2), 16);
                a && (i = Math.round(parseInt(a, 16) / 255 * 100) / 100)
            } else if (n = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for (r = 0; r < e.length; r++) e[r] = parseInt(n[r + 1]);
                i = parseFloat(n[4])
            } else if (n = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for (r = 0; r < e.length; r++) e[r] = Math.round(2.55 * parseFloat(n[r + 1]));
                i = parseFloat(n[4])
            } else if (n = t.match(/(\w+)/)) {
                if ("transparent" == n[1]) return [0, 0, 0, 0];
                if (!(e = O[n[1]])) return
            }
            for (r = 0; r < e.length; r++) e[r] = E(e[r], 0, 255);
            return i = i || 0 == i ? E(i, 0, 1) : 1, e[3] = i, e
        }
    }

    function W(t) {
        if (t) {
            var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (e) {
                var i = parseFloat(e[4]);
                return [E(parseInt(e[1]), 0, 360), E(parseFloat(e[2]), 0, 100), E(parseFloat(e[3]), 0, 100), E(isNaN(i) ? 1 : i, 0, 1)]
            }
        }
    }

    function N(t) {
        if (t) {
            var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (e) {
                var i = parseFloat(e[4]);
                return [E(parseInt(e[1]), 0, 360), E(parseFloat(e[2]), 0, 100), E(parseFloat(e[3]), 0, 100), E(isNaN(i) ? 1 : i, 0, 1)]
            }
        }
    }

    function z(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
    }

    function B(t, e) {
        return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
    }

    function V(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
    }

    function E(t, e, i) {
        return Math.min(Math.max(e, t), i)
    }

    function H(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e
    }
    var Y = {};
    for (var j in O) Y[O[j]] = j;
    var U = function(t) {
        return t instanceof U ? t : this instanceof U ? (this.valid = !1, this.values = {
            rgb: [0, 0, 0],
            hsl: [0, 0, 0],
            hsv: [0, 0, 0],
            hwb: [0, 0, 0],
            cmyk: [0, 0, 0, 0],
            alpha: 1
        }, void("string" == typeof t ? (e = L.getRgba(t)) ? this.setValues("rgb", e) : (e = L.getHsla(t)) ? this.setValues("hsl", e) : (e = L.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new U(t);
        var e
    };
    U.prototype = {
        isValid: function() {
            return this.valid
        },
        rgb: function() {
            return this.setSpace("rgb", arguments)
        },
        hsl: function() {
            return this.setSpace("hsl", arguments)
        },
        hsv: function() {
            return this.setSpace("hsv", arguments)
        },
        hwb: function() {
            return this.setSpace("hwb", arguments)
        },
        cmyk: function() {
            return this.setSpace("cmyk", arguments)
        },
        rgbArray: function() {
            return this.values.rgb
        },
        hslArray: function() {
            return this.values.hsl
        },
        hsvArray: function() {
            return this.values.hsv
        },
        hwbArray: function() {
            var t = this.values;
            return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
        },
        cmykArray: function() {
            return this.values.cmyk
        },
        rgbaArray: function() {
            var t = this.values;
            return t.rgb.concat([t.alpha])
        },
        hslaArray: function() {
            var t = this.values;
            return t.hsl.concat([t.alpha])
        },
        alpha: function(t) {
            return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
        },
        red: function(t) {
            return this.setChannel("rgb", 0, t)
        },
        green: function(t) {
            return this.setChannel("rgb", 1, t)
        },
        blue: function(t) {
            return this.setChannel("rgb", 2, t)
        },
        hue: function(t) {
            return t = t && ((t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
        },
        saturation: function(t) {
            return this.setChannel("hsl", 1, t)
        },
        lightness: function(t) {
            return this.setChannel("hsl", 2, t)
        },
        saturationv: function(t) {
            return this.setChannel("hsv", 1, t)
        },
        whiteness: function(t) {
            return this.setChannel("hwb", 1, t)
        },
        blackness: function(t) {
            return this.setChannel("hwb", 2, t)
        },
        value: function(t) {
            return this.setChannel("hsv", 2, t)
        },
        cyan: function(t) {
            return this.setChannel("cmyk", 0, t)
        },
        magenta: function(t) {
            return this.setChannel("cmyk", 1, t)
        },
        yellow: function(t) {
            return this.setChannel("cmyk", 2, t)
        },
        black: function(t) {
            return this.setChannel("cmyk", 3, t)
        },
        hexString: function() {
            return L.hexString(this.values.rgb)
        },
        rgbString: function() {
            return L.rgbString(this.values.rgb, this.values.alpha)
        },
        rgbaString: function() {
            return L.rgbaString(this.values.rgb, this.values.alpha)
        },
        percentString: function() {
            return L.percentString(this.values.rgb, this.values.alpha)
        },
        hslString: function() {
            return L.hslString(this.values.hsl, this.values.alpha)
        },
        hslaString: function() {
            return L.hslaString(this.values.hsl, this.values.alpha)
        },
        hwbString: function() {
            return L.hwbString(this.values.hwb, this.values.alpha)
        },
        keyword: function() {
            return L.keyword(this.values.rgb, this.values.alpha)
        },
        rgbNumber: function() {
            var t = this.values.rgb;
            return t[0] << 16 | t[1] << 8 | t[2]
        },
        luminosity: function() {
            for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                var n = t[i] / 255;
                e[i] = n <= .03928 ? n / 12.92 : Math.pow((.055 + n) / 1.055, 2.4)
            }
            return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
        },
        contrast: function(t) {
            var e = this.luminosity(),
                i = t.luminosity();
            return i < e ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
        },
        level: function(t) {
            var e = this.contrast(t);
            return 7.1 <= e ? "AAA" : 4.5 <= e ? "AA" : ""
        },
        dark: function() {
            var t = this.values.rgb;
            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
        },
        light: function() {
            return !this.dark()
        },
        negate: function() {
            for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
            return this.setValues("rgb", t), this
        },
        lighten: function(t) {
            var e = this.values.hsl;
            return e[2] += e[2] * t, this.setValues("hsl", e), this
        },
        darken: function(t) {
            var e = this.values.hsl;
            return e[2] -= e[2] * t, this.setValues("hsl", e), this
        },
        saturate: function(t) {
            var e = this.values.hsl;
            return e[1] += e[1] * t, this.setValues("hsl", e), this
        },
        desaturate: function(t) {
            var e = this.values.hsl;
            return e[1] -= e[1] * t, this.setValues("hsl", e), this
        },
        whiten: function(t) {
            var e = this.values.hwb;
            return e[1] += e[1] * t, this.setValues("hwb", e), this
        },
        blacken: function(t) {
            var e = this.values.hwb;
            return e[2] += e[2] * t, this.setValues("hwb", e), this
        },
        greyscale: function() {
            var t = this.values.rgb,
                e = .3 * t[0] + .59 * t[1] + .11 * t[2];
            return this.setValues("rgb", [e, e, e]), this
        },
        clearer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e - e * t), this
        },
        opaquer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e + e * t), this
        },
        rotate: function(t) {
            var e = this.values.hsl,
                i = (e[0] + t) % 360;
            return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this
        },
        mix: function(t, e) {
            var i = t,
                n = void 0 === e ? .5 : e,
                a = 2 * n - 1,
                r = this.alpha() - i.alpha(),
                o = (1 + (a * r == -1 ? a : (a + r) / (1 + a * r))) / 2,
                s = 1 - o;
            return this.rgb(o * this.red() + s * i.red(), o * this.green() + s * i.green(), o * this.blue() + s * i.blue()).alpha(this.alpha() * n + i.alpha() * (1 - n))
        },
        toJSON: function() {
            return this.rgb()
        },
        clone: function() {
            var t, e, i = new U,
                n = this.values,
                a = i.values;
            for (var r in n) n.hasOwnProperty(r) && (t = n[r], "[object Array]" === (e = {}.toString.call(t)) ? a[r] = t.slice(0) : "[object Number]" === e ? a[r] = t : console.error("unexpected color value:", t));
            return i
        }
    }, U.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
    }, U.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
    }, U.prototype.getValues = function(t) {
        for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
        return 1 !== e.alpha && (i.a = e.alpha), i
    }, U.prototype.setValues = function(t, e) {
        var i, n, a = this.values,
            r = this.spaces,
            o = this.maxes,
            s = 1;
        if (this.valid = !0, "alpha" === t) s = e;
        else if (e.length) a[t] = e.slice(0, t.length), s = e[t.length];
        else if (void 0 !== e[t.charAt(0)]) {
            for (i = 0; i < t.length; i++) a[t][i] = e[t.charAt(i)];
            s = e.a
        } else if (void 0 !== e[r[t][0]]) {
            var l = r[t];
            for (i = 0; i < t.length; i++) a[t][i] = e[l[i]];
            s = e.alpha
        }
        if (a.alpha = Math.max(0, Math.min(1, void 0 === s ? a.alpha : s)), "alpha" === t) return !1;
        for (i = 0; i < t.length; i++) n = Math.max(0, Math.min(o[t][i], a[t][i])), a[t][i] = Math.round(n);
        for (var d in r) d !== t && (a[d] = F[t][d](a[t]));
        return !0
    }, U.prototype.setSpace = function(t, e) {
        var i = e[0];
        return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
    }, U.prototype.setChannel = function(t, e, i) {
        var n = this.values[t];
        return void 0 === i ? n[e] : (i === n[e] || (n[e] = i, this.setValues(t, n)), this)
    }, "undefined" != typeof window && (window.Color = U);
    var q, G = U,
        Z = {
            noop: function() {},
            uid: (q = 0, function() {
                return q++
            }),
            isNullOrUndef: function(t) {
                return null == t
            },
            isArray: function(t) {
                if (Array.isArray && Array.isArray(t)) return !0;
                var e = Object.prototype.toString.call(t);
                return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6)
            },
            isObject: function(t) {
                return null !== t && "[object Object]" === Object.prototype.toString.call(t)
            },
            isFinite: function(t) {
                return ("number" == typeof t || t instanceof Number) && isFinite(t)
            },
            valueOrDefault: function(t, e) {
                return void 0 === t ? e : t
            },
            valueAtIndexOrDefault: function(t, e, i) {
                return Z.valueOrDefault(Z.isArray(t) ? t[e] : t, i)
            },
            callback: function(t, e, i) {
                if (t && "function" == typeof t.call) return t.apply(i, e)
            },
            each: function(t, e, i, n) {
                var a, r, o;
                if (Z.isArray(t))
                    if (r = t.length, n)
                        for (a = r - 1; 0 <= a; a--) e.call(i, t[a], a);
                    else
                        for (a = 0; a < r; a++) e.call(i, t[a], a);
                else if (Z.isObject(t))
                    for (r = (o = Object.keys(t)).length, a = 0; a < r; a++) e.call(i, t[o[a]], o[a])
            },
            arrayEquals: function(t, e) {
                var i, n, a, r;
                if (!t || !e || t.length !== e.length) return !1;
                for (i = 0, n = t.length; i < n; ++i)
                    if (a = t[i], r = e[i], a instanceof Array && r instanceof Array) {
                        if (!Z.arrayEquals(a, r)) return !1
                    } else if (a !== r) return !1;
                return !0
            },
            clone: function(t) {
                if (Z.isArray(t)) return t.map(Z.clone);
                if (Z.isObject(t)) {
                    for (var e = {}, i = Object.keys(t), n = i.length, a = 0; a < n; ++a) e[i[a]] = Z.clone(t[i[a]]);
                    return e
                }
                return t
            },
            _merger: function(t, e, i, n) {
                var a = e[t],
                    r = i[t];
                Z.isObject(a) && Z.isObject(r) ? Z.merge(a, r, n) : e[t] = Z.clone(r)
            },
            _mergerIf: function(t, e, i) {
                var n = e[t],
                    a = i[t];
                Z.isObject(n) && Z.isObject(a) ? Z.mergeIf(n, a) : e.hasOwnProperty(t) || (e[t] = Z.clone(a))
            },
            merge: function(t, e, i) {
                var n, a, r, o, s, l = Z.isArray(e) ? e : [e],
                    d = l.length;
                if (!Z.isObject(t)) return t;
                for (n = (i = i || {}).merger || Z._merger, a = 0; a < d; ++a)
                    if (e = l[a], Z.isObject(e))
                        for (s = 0, o = (r = Object.keys(e)).length; s < o; ++s) n(r[s], t, e, i);
                return t
            },
            mergeIf: function(t, e) {
                return Z.merge(t, e, {
                    merger: Z._mergerIf
                })
            },
            extend: function(i) {
                for (var t = function(t, e) {
                        i[e] = t
                    }, e = 1, n = arguments.length; e < n; ++e) Z.each(arguments[e], t);
                return i
            },
            inherits: function(t) {
                function e() {
                    this.constructor = n
                }
                var i = this,
                    n = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                        return i.apply(this, arguments)
                    };
                return e.prototype = i.prototype, n.prototype = new e, n.extend = Z.inherits, t && Z.extend(n.prototype, t), n.__super__ = i.prototype, n
            }
        },
        X = Z;
    Z.callCallback = Z.callback, Z.indexOf = function(t, e, i) {
        return Array.prototype.indexOf.call(t, e, i)
    }, Z.getValueOrDefault = Z.valueOrDefault, Z.getValueAtIndexOrDefault = Z.valueAtIndexOrDefault;
    var K = {
            linear: function(t) {
                return t
            },
            easeInQuad: function(t) {
                return t * t
            },
            easeOutQuad: function(t) {
                return -t * (t - 2)
            },
            easeInOutQuad: function(t) {
                return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            },
            easeInCubic: function(t) {
                return t * t * t
            },
            easeOutCubic: function(t) {
                return (t -= 1) * t * t + 1
            },
            easeInOutCubic: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            easeInQuart: function(t) {
                return t * t * t * t
            },
            easeOutQuart: function(t) {
                return -((t -= 1) * t * t * t - 1)
            },
            easeInOutQuart: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            },
            easeInQuint: function(t) {
                return t * t * t * t * t
            },
            easeOutQuint: function(t) {
                return (t -= 1) * t * t * t * t + 1
            },
            easeInOutQuint: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            easeInSine: function(t) {
                return 1 - Math.cos(t * (Math.PI / 2))
            },
            easeOutSine: function(t) {
                return Math.sin(t * (Math.PI / 2))
            },
            easeInOutSine: function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            },
            easeInExpo: function(t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
            },
            easeOutExpo: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            easeInOutExpo: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
            },
            easeInCirc: function(t) {
                return 1 <= t ? t : -(Math.sqrt(1 - t * t) - 1)
            },
            easeOutCirc: function(t) {
                return Math.sqrt(1 - (t -= 1) * t)
            },
            easeInOutCirc: function(t) {
                return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            easeInElastic: function(t) {
                var e = 1.70158,
                    i = 0,
                    n = 1;
                return 0 === t ? 0 : 1 === t ? 1 : (i = i || .3, e = n < 1 ? (n = 1, i / 4) : i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i))
            },
            easeOutElastic: function(t) {
                var e = 1.70158,
                    i = 0,
                    n = 1;
                return 0 === t ? 0 : 1 === t ? 1 : (i = i || .3, e = n < 1 ? (n = 1, i / 4) : i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1)
            },
            easeInOutElastic: function(t) {
                var e = 1.70158,
                    i = 0,
                    n = 1;
                return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i = i || .45, e = n < 1 ? (n = 1, i / 4) : i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1)
            },
            easeInBack: function(t) {
                return t * t * (2.70158 * t - 1.70158)
            },
            easeOutBack: function(t) {
                return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
            },
            easeInOutBack: function(t) {
                var e = 1.70158;
                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            },
            easeInBounce: function(t) {
                return 1 - K.easeOutBounce(1 - t)
            },
            easeOutBounce: function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            },
            easeInOutBounce: function(t) {
                return t < .5 ? .5 * K.easeInBounce(2 * t) : .5 * K.easeOutBounce(2 * t - 1) + .5
            }
        },
        $ = {
            effects: K
        };
    X.easingEffects = K;
    var J = Math.PI,
        Q = J / 180,
        tt = 2 * J,
        et = J / 2,
        it = J / 4,
        nt = 2 * J / 3,
        at = {
            clear: function(t) {
                t.ctx.clearRect(0, 0, t.width, t.height)
            },
            roundedRect: function(t, e, i, n, a, r) {
                if (r) {
                    var o = Math.min(r, a / 2, n / 2),
                        s = e + o,
                        l = i + o,
                        d = e + n - o,
                        u = i + a - o;
                    t.moveTo(e, l), s < d && l < u ? (t.arc(s, l, o, -J, -et), t.arc(d, l, o, -et, 0), t.arc(d, u, o, 0, et), t.arc(s, u, o, et, J)) : s < d ? (t.moveTo(s, i), t.arc(d, l, o, -et, et), t.arc(s, l, o, et, J + et)) : l < u ? (t.arc(s, l, o, -J, 0), t.arc(s, u, o, 0, J)) : t.arc(s, l, o, -J, J), t.closePath(), t.moveTo(e, i)
                } else t.rect(e, i, n, a)
            },
            drawPoint: function(t, e, i, n, a, r) {
                var o, s, l, d, u, h = (r || 0) * Q;
                if (!e || "object" != typeof e || "[object HTMLImageElement]" !== (o = e.toString()) && "[object HTMLCanvasElement]" !== o) {
                    if (!(isNaN(i) || i <= 0)) {
                        switch (t.beginPath(), e) {
                            default: t.arc(n, a, i, 0, tt),
                            t.closePath();
                            break;
                            case "triangle":
                                    t.moveTo(n + Math.sin(h) * i, a - Math.cos(h) * i),
                                h += nt,
                                t.lineTo(n + Math.sin(h) * i, a - Math.cos(h) * i),
                                h += nt,
                                t.lineTo(n + Math.sin(h) * i, a - Math.cos(h) * i),
                                t.closePath();
                                break;
                            case "rectRounded":
                                    d = i - (u = .516 * i),
                                s = Math.cos(h + it) * d,
                                l = Math.sin(h + it) * d,
                                t.arc(n - s, a - l, u, h - J, h - et),
                                t.arc(n + l, a - s, u, h - et, h),
                                t.arc(n + s, a + l, u, h, h + et),
                                t.arc(n - l, a + s, u, h + et, h + J),
                                t.closePath();
                                break;
                            case "rect":
                                    if (!r) {
                                    d = Math.SQRT1_2 * i, t.rect(n - d, a - d, 2 * d, 2 * d);
                                    break
                                }h += it;
                            case "rectRot":
                                    s = Math.cos(h) * i,
                                l = Math.sin(h) * i,
                                t.moveTo(n - s, a - l),
                                t.lineTo(n + l, a - s),
                                t.lineTo(n + s, a + l),
                                t.lineTo(n - l, a + s),
                                t.closePath();
                                break;
                            case "crossRot":
                                    h += it;
                            case "cross":
                                    s = Math.cos(h) * i,
                                l = Math.sin(h) * i,
                                t.moveTo(n - s, a - l),
                                t.lineTo(n + s, a + l),
                                t.moveTo(n + l, a - s),
                                t.lineTo(n - l, a + s);
                                break;
                            case "star":
                                    s = Math.cos(h) * i,
                                l = Math.sin(h) * i,
                                t.moveTo(n - s, a - l),
                                t.lineTo(n + s, a + l),
                                t.moveTo(n + l, a - s),
                                t.lineTo(n - l, a + s),
                                h += it,
                                s = Math.cos(h) * i,
                                l = Math.sin(h) * i,
                                t.moveTo(n - s, a - l),
                                t.lineTo(n + s, a + l),
                                t.moveTo(n + l, a - s),
                                t.lineTo(n - l, a + s);
                                break;
                            case "line":
                                    s = Math.cos(h) * i,
                                l = Math.sin(h) * i,
                                t.moveTo(n - s, a - l),
                                t.lineTo(n + s, a + l);
                                break;
                            case "dash":
                                    t.moveTo(n, a),
                                t.lineTo(n + Math.cos(h) * i, a + Math.sin(h) * i)
                        }
                        t.fill(), t.stroke()
                    }
                } else t.drawImage(e, n - e.width / 2, a - e.height / 2, e.width, e.height)
            },
            _isPointInArea: function(t, e) {
                return t.x > e.left - 1e-6 && t.x < e.right + 1e-6 && t.y > e.top - 1e-6 && t.y < e.bottom + 1e-6
            },
            clipArea: function(t, e) {
                t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
            },
            unclipArea: function(t) {
                t.restore()
            },
            lineTo: function(t, e, i, n) {
                var a = i.steppedLine;
                if (a) {
                    if ("middle" === a) {
                        var r = (e.x + i.x) / 2;
                        t.lineTo(r, n ? i.y : e.y), t.lineTo(r, n ? e.y : i.y)
                    } else "after" === a && !n || "after" !== a && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
                    t.lineTo(i.x, i.y)
                } else i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y)
            }
        },
        rt = at;
    X.clear = at.clear, X.drawRoundedRectangle = function(t) {
        t.beginPath(), at.roundedRect.apply(at, arguments)
    };
    var ot = {
        _set: function(t, e) {
            return X.merge(this[t] || (this[t] = {}), e)
        }
    };
    ot._set("global", {
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        defaultLineHeight: 1.2,
        showLines: !0
    });
    var st = ot,
        lt = X.valueOrDefault,
        dt = {
            toLineHeight: function(t, e) {
                var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                if (!i || "normal" === i[1]) return 1.2 * e;
                switch (t = +i[2], i[3]) {
                    case "px":
                        return t;
                    case "%":
                        t /= 100
                }
                return e * t
            },
            toPadding: function(t) {
                var e, i, n, a;
                return X.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, n = +t.bottom || 0, a = +t.left || 0) : e = i = n = a = +t || 0, {
                    top: e,
                    right: i,
                    bottom: n,
                    left: a,
                    height: e + n,
                    width: a + i
                }
            },
            _parseFont: function(t) {
                var e, i = st.global,
                    n = lt(t.fontSize, i.defaultFontSize),
                    a = {
                        family: lt(t.fontFamily, i.defaultFontFamily),
                        lineHeight: X.options.toLineHeight(lt(t.lineHeight, i.defaultLineHeight), n),
                        size: n,
                        style: lt(t.fontStyle, i.defaultFontStyle),
                        weight: null,
                        string: ""
                    };
                return a.string = !(e = a) || X.isNullOrUndef(e.size) || X.isNullOrUndef(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family, a
            },
            resolve: function(t, e, i) {
                var n, a, r;
                for (n = 0, a = t.length; n < a; ++n)
                    if (void 0 !== (r = t[n]) && (void 0 !== e && "function" == typeof r && (r = r(e)), void 0 !== i && X.isArray(r) && (r = r[i]), void 0 !== r)) return r
            }
        },
        ut = X,
        ht = $,
        ct = rt,
        ft = dt;
    ut.easing = ht, ut.canvas = ct, ut.options = ft;

    function gt(t) {
        ut.extend(this, t), this.initialize.apply(this, arguments)
    }
    ut.extend(gt.prototype, {
        initialize: function() {
            this.hidden = !1
        },
        pivot: function() {
            var t = this;
            return t._view || (t._view = ut.clone(t._model)), t._start = {}, t
        },
        transition: function(t) {
            var e = this,
                i = e._model,
                n = e._start,
                a = e._view;
            return i && 1 !== t ? (a = a || (e._view = {}), function(t, e, i, n) {
                var a, r, o, s, l, d, u, h, c, f = Object.keys(i);
                for (a = 0, r = f.length; a < r; ++a)
                    if (d = i[o = f[a]], e.hasOwnProperty(o) || (e[o] = d), (s = e[o]) !== d && "_" !== o[0]) {
                        if (t.hasOwnProperty(o) || (t[o] = s), (u = typeof d) == typeof(l = t[o]))
                            if ("string" == u) {
                                if ((h = G(l)).valid && (c = G(d)).valid) {
                                    e[o] = c.mix(h, n).rgbString();
                                    continue
                                }
                            } else if (ut.isFinite(l) && ut.isFinite(d)) {
                            e[o] = l + (d - l) * n;
                            continue
                        }
                        e[o] = d
                    }
            }(n = n || (e._start = {}), a, i, t)) : (e._view = i, e._start = null), e
        },
        tooltipPosition: function() {
            return {
                x: this._model.x,
                y: this._model.y
            }
        },
        hasValue: function() {
            return ut.isNumber(this._model.x) && ut.isNumber(this._model.y)
        }
    }), gt.extend = ut.inherits;
    var pt = gt,
        mt = pt.extend({
            chart: null,
            currentStep: 0,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null
        }),
        vt = mt;
    Object.defineProperty(mt.prototype, "animationObject", {
        get: function() {
            return this
        }
    }), Object.defineProperty(mt.prototype, "chartInstance", {
        get: function() {
            return this.chart
        },
        set: function(t) {
            this.chart = t
        }
    }), st._set("global", {
        animation: {
            duration: 1e3,
            easing: "easeOutQuart",
            onProgress: ut.noop,
            onComplete: ut.noop
        }
    });
    var bt = {
            animations: [],
            request: null,
            addAnimation: function(t, e, i, n) {
                var a, r, o = this.animations;
                for (e.chart = t, e.startTime = Date.now(), e.duration = i, n || (t.animating = !0), a = 0, r = o.length; a < r; ++a)
                    if (o[a].chart === t) return void(o[a] = e);
                o.push(e), 1 === o.length && this.requestAnimationFrame()
            },
            cancelAnimation: function(e) {
                var t = ut.findIndex(this.animations, function(t) {
                    return t.chart === e
                }); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1)
            },
            requestAnimationFrame: function() {
                var t = this;
                null === t.request && (t.request = ut.requestAnimFrame.call(window, function() {
                    t.request = null, t.startDigest()
                }))
            },
            startDigest: function() {
                this.advance(), 0 < this.animations.length && this.requestAnimationFrame()
            },
            advance: function() {
                for (var t, e, i, n, a = this.animations, r = 0; r < a.length;) e = (t = a[r]).chart, i = t.numSteps, n = Math.floor((Date.now() - t.startTime) / t.duration * i) + 1, t.currentStep = Math.min(n, i), ut.callback(t.render, [e, t], e), ut.callback(t.onAnimationProgress, [t], e), t.currentStep >= i ? (ut.callback(t.onAnimationComplete, [t], e), e.animating = !1, a.splice(r, 1)) : ++r
            }
        },
        yt = ut.options.resolve,
        xt = ["push", "pop", "shift", "splice", "unshift"];

    function _t(e, t) {
        var i = e._chartjs;
        if (i) {
            var n = i.listeners,
                a = n.indexOf(t); - 1 !== a && n.splice(a, 1), 0 < n.length || (xt.forEach(function(t) {
                delete e[t]
            }), delete e._chartjs)
        }
    }

    function kt(t, e) {
        this.initialize(t, e)
    }
    ut.extend(kt.prototype, {
        datasetElementType: null,
        dataElementType: null,
        initialize: function(t, e) {
            this.chart = t, this.index = e, this.linkScales(), this.addElements()
        },
        updateIndex: function(t) {
            this.index = t
        },
        linkScales: function() {
            var t = this,
                e = t.getMeta(),
                i = t.getDataset();
            null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id)
        },
        getDataset: function() {
            return this.chart.data.datasets[this.index]
        },
        getMeta: function() {
            return this.chart.getDatasetMeta(this.index)
        },
        getScaleForId: function(t) {
            return this.chart.scales[t]
        },
        _getValueScaleId: function() {
            return this.getMeta().yAxisID
        },
        _getIndexScaleId: function() {
            return this.getMeta().xAxisID
        },
        _getValueScale: function() {
            return this.getScaleForId(this._getValueScaleId())
        },
        _getIndexScale: function() {
            return this.getScaleForId(this._getIndexScaleId())
        },
        reset: function() {
            this.update(!0)
        },
        destroy: function() {
            this._data && _t(this._data, this)
        },
        createMetaDataset: function() {
            var t = this.datasetElementType;
            return t && new t({
                _chart: this.chart,
                _datasetIndex: this.index
            })
        },
        createMetaData: function(t) {
            var e = this.dataElementType;
            return e && new e({
                _chart: this.chart,
                _datasetIndex: this.index,
                _index: t
            })
        },
        addElements: function() {
            var t, e, i = this.getMeta(),
                n = this.getDataset().data || [],
                a = i.data;
            for (t = 0, e = n.length; t < e; ++t) a[t] = a[t] || this.createMetaData(t);
            i.dataset = i.dataset || this.createMetaDataset()
        },
        addElementAndReset: function(t) {
            var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
        },
        buildOrUpdateElements: function() {
            var a, t, e = this,
                i = e.getDataset(),
                n = i.data || (i.data = []);
            e._data !== n && (e._data && _t(e._data, e), n && Object.isExtensible(n) && (t = e, (a = n)._chartjs ? a._chartjs.listeners.push(t) : (Object.defineProperty(a, "_chartjs", {
                configurable: !0,
                enumerable: !1,
                value: {
                    listeners: [t]
                }
            }), xt.forEach(function(t) {
                var i = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                    n = a[t];
                Object.defineProperty(a, t, {
                    configurable: !0,
                    enumerable: !1,
                    value: function() {
                        var e = Array.prototype.slice.call(arguments),
                            t = n.apply(this, e);
                        return ut.each(a._chartjs.listeners, function(t) {
                            "function" == typeof t[i] && t[i].apply(t, e)
                        }), t
                    }
                })
            }))), e._data = n), e.resyncElements()
        },
        update: ut.noop,
        transition: function(t) {
            for (var e = this.getMeta(), i = e.data || [], n = i.length, a = 0; a < n; ++a) i[a].transition(t);
            e.dataset && e.dataset.transition(t)
        },
        draw: function() {
            var t = this.getMeta(),
                e = t.data || [],
                i = e.length,
                n = 0;
            for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw()
        },
        removeHoverStyle: function(t) {
            ut.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle
        },
        setHoverStyle: function(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                a = t._model,
                r = ut.getHoverColor;
            t.$previousStyle = {
                backgroundColor: a.backgroundColor,
                borderColor: a.borderColor,
                borderWidth: a.borderWidth
            }, a.backgroundColor = yt([n.hoverBackgroundColor, e.hoverBackgroundColor, r(a.backgroundColor)], void 0, i), a.borderColor = yt([n.hoverBorderColor, e.hoverBorderColor, r(a.borderColor)], void 0, i), a.borderWidth = yt([n.hoverBorderWidth, e.hoverBorderWidth, a.borderWidth], void 0, i)
        },
        resyncElements: function() {
            var t = this.getMeta(),
                e = this.getDataset().data,
                i = t.data.length,
                n = e.length;
            n < i ? t.data.splice(n, i - n) : i < n && this.insertElements(i, n - i)
        },
        insertElements: function(t, e) {
            for (var i = 0; i < e; ++i) this.addElementAndReset(t + i)
        },
        onDataPush: function() {
            var t = arguments.length;
            this.insertElements(this.getDataset().data.length - t, t)
        },
        onDataPop: function() {
            this.getMeta().data.pop()
        },
        onDataShift: function() {
            this.getMeta().data.shift()
        },
        onDataSplice: function(t, e) {
            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
        },
        onDataUnshift: function() {
            this.insertElements(0, arguments.length)
        }
    }), kt.extend = ut.inherits;
    var wt = kt;
    st._set("global", {
        elements: {
            arc: {
                backgroundColor: st.global.defaultColor,
                borderColor: "#fff",
                borderWidth: 2,
                borderAlign: "center"
            }
        }
    });
    var Mt = pt.extend({
            inLabelRange: function(t) {
                var e = this._view;
                return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
            },
            inRange: function(t, e) {
                var i = this._view;
                if (i) {
                    for (var n = ut.getAngleFromPoint(i, {
                            x: t,
                            y: e
                        }), a = n.angle, r = n.distance, o = i.startAngle, s = i.endAngle; s < o;) s += 2 * Math.PI;
                    for (; s < a;) a -= 2 * Math.PI;
                    for (; a < o;) a += 2 * Math.PI;
                    var l = o <= a && a <= s,
                        d = r >= i.innerRadius && r <= i.outerRadius;
                    return l && d
                }
                return !1
            },
            getCenterPoint: function() {
                var t = this._view,
                    e = (t.startAngle + t.endAngle) / 2,
                    i = (t.innerRadius + t.outerRadius) / 2;
                return {
                    x: t.x + Math.cos(e) * i,
                    y: t.y + Math.sin(e) * i
                }
            },
            getArea: function() {
                var t = this._view;
                return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
            },
            tooltipPosition: function() {
                var t = this._view,
                    e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                    i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                return {
                    x: t.x + Math.cos(e) * i,
                    y: t.y + Math.sin(e) * i
                }
            },
            draw: function() {
                var t, e = this._chart.ctx,
                    i = this._view,
                    n = i.startAngle,
                    a = i.endAngle,
                    r = "inner" === i.borderAlign ? .33 : 0;
                e.save(), e.beginPath(), e.arc(i.x, i.y, Math.max(i.outerRadius - r, 0), n, a), e.arc(i.x, i.y, i.innerRadius, a, n, !0), e.closePath(), e.fillStyle = i.backgroundColor, e.fill(), i.borderWidth && ("inner" === i.borderAlign ? (e.beginPath(), t = r / i.outerRadius, e.arc(i.x, i.y, i.outerRadius, n - t, a + t), i.innerRadius > r ? (t = r / i.innerRadius, e.arc(i.x, i.y, i.innerRadius - r, a + t, n - t, !0)) : e.arc(i.x, i.y, r, a + Math.PI / 2, n - Math.PI / 2), e.closePath(), e.clip(), e.beginPath(), e.arc(i.x, i.y, i.outerRadius, n, a), e.arc(i.x, i.y, i.innerRadius, a, n, !0), e.closePath(), e.lineWidth = 2 * i.borderWidth, e.lineJoin = "round") : (e.lineWidth = i.borderWidth, e.lineJoin = "bevel"), e.strokeStyle = i.borderColor, e.stroke()), e.restore()
            }
        }),
        St = ut.valueOrDefault,
        Ct = st.global.defaultColor;
    st._set("global", {
        elements: {
            line: {
                tension: .4,
                backgroundColor: Ct,
                borderWidth: 3,
                borderColor: Ct,
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                capBezierPoints: !0,
                fill: !0
            }
        }
    });
    var Dt = pt.extend({
            draw: function() {
                var t, e, i, n, a = this._view,
                    r = this._chart.ctx,
                    o = a.spanGaps,
                    s = this._children.slice(),
                    l = st.global,
                    d = l.elements.line,
                    u = -1;
                for (this._loop && s.length && s.push(s[0]), r.save(), r.lineCap = a.borderCapStyle || d.borderCapStyle, r.setLineDash && r.setLineDash(a.borderDash || d.borderDash), r.lineDashOffset = St(a.borderDashOffset, d.borderDashOffset), r.lineJoin = a.borderJoinStyle || d.borderJoinStyle, r.lineWidth = St(a.borderWidth, d.borderWidth), r.strokeStyle = a.borderColor || l.defaultColor, r.beginPath(), u = -1, t = 0; t < s.length; ++t) e = s[t], i = ut.previousItem(s, t), n = e._view, 0 === t ? n.skip || (r.moveTo(n.x, n.y), u = t) : (i = -1 === u ? i : s[u], n.skip || (u !== t - 1 && !o || -1 === u ? r.moveTo(n.x, n.y) : ut.canvas.lineTo(r, i._view, e._view), u = t));
                r.stroke(), r.restore()
            }
        }),
        Pt = ut.valueOrDefault,
        Tt = st.global.defaultColor;

    function It(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
    }
    st._set("global", {
        elements: {
            point: {
                radius: 3,
                pointStyle: "circle",
                backgroundColor: Tt,
                borderColor: Tt,
                borderWidth: 1,
                hitRadius: 1,
                hoverRadius: 4,
                hoverBorderWidth: 1
            }
        }
    });
    var At = pt.extend({
            inRange: function(t, e) {
                var i = this._view;
                return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2)
            },
            inLabelRange: It,
            inXRange: It,
            inYRange: function(t) {
                var e = this._view;
                return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
            },
            getCenterPoint: function() {
                var t = this._view;
                return {
                    x: t.x,
                    y: t.y
                }
            },
            getArea: function() {
                return Math.PI * Math.pow(this._view.radius, 2)
            },
            tooltipPosition: function() {
                var t = this._view;
                return {
                    x: t.x,
                    y: t.y,
                    padding: t.radius + t.borderWidth
                }
            },
            draw: function(t) {
                var e = this._view,
                    i = this._chart.ctx,
                    n = e.pointStyle,
                    a = e.rotation,
                    r = e.radius,
                    o = e.x,
                    s = e.y,
                    l = st.global,
                    d = l.defaultColor;
                e.skip || void 0 !== t && !ut.canvas._isPointInArea(e, t) || (i.strokeStyle = e.borderColor || d, i.lineWidth = Pt(e.borderWidth, l.elements.point.borderWidth), i.fillStyle = e.backgroundColor || d, ut.canvas.drawPoint(i, n, r, o, s, a))
            }
        }),
        Ft = st.global.defaultColor;

    function Ot(t) {
        return t && void 0 !== t.width
    }

    function Lt(t) {
        var e, i, n, a, r;
        return a = Ot(t) ? (r = t.width / 2, e = t.x - r, i = t.x + r, n = Math.min(t.y, t.base), Math.max(t.y, t.base)) : (r = t.height / 2, e = Math.min(t.x, t.base), i = Math.max(t.x, t.base), n = t.y - r, t.y + r), {
            left: e,
            top: n,
            right: i,
            bottom: a
        }
    }

    function Rt(t, e, i) {
        return t === e ? i : t === i ? e : t
    }

    function Wt(t, e, i) {
        var n = null === e,
            a = null === i,
            r = !(!t || n && a) && Lt(t);
        return r && (n || e >= r.left && e <= r.right) && (a || i >= r.top && i <= r.bottom)
    }
    st._set("global", {
        elements: {
            rectangle: {
                backgroundColor: Ft,
                borderColor: Ft,
                borderSkipped: "bottom",
                borderWidth: 0
            }
        }
    });
    var Nt = pt.extend({
            draw: function() {
                var t, e, i, n, a, r = this._chart.ctx,
                    o = this._view,
                    s = (e = Lt(t = o), i = e.right - e.left, n = e.bottom - e.top, a = function(t, e, i) {
                        var n, a, r, o, s, l, d, u = t.borderWidth,
                            h = (l = (s = t).borderSkipped, d = {}, l && (s.horizontal ? s.base > s.x && (l = Rt(l, "left", "right")) : s.base < s.y && (l = Rt(l, "bottom", "top")), d[l] = !0), d);
                        return ut.isObject(u) ? (n = +u.top || 0, a = +u.right || 0, r = +u.bottom || 0, o = +u.left || 0) : n = a = r = o = +u || 0, {
                            t: h.top || n < 0 ? 0 : i < n ? i : n,
                            r: h.right || a < 0 ? 0 : e < a ? e : a,
                            b: h.bottom || r < 0 ? 0 : i < r ? i : r,
                            l: h.left || o < 0 ? 0 : e < o ? e : o
                        }
                    }(t, i / 2, n / 2), {
                        outer: {
                            x: e.left,
                            y: e.top,
                            w: i,
                            h: n
                        },
                        inner: {
                            x: e.left + a.l,
                            y: e.top + a.t,
                            w: i - a.l - a.r,
                            h: n - a.t - a.b
                        }
                    }),
                    l = s.outer,
                    d = s.inner;
                r.fillStyle = o.backgroundColor, r.fillRect(l.x, l.y, l.w, l.h), l.w === d.w && l.h === d.h || (r.save(), r.beginPath(), r.rect(l.x, l.y, l.w, l.h), r.clip(), r.fillStyle = o.borderColor, r.rect(d.x, d.y, d.w, d.h), r.fill("evenodd"), r.restore())
            },
            height: function() {
                var t = this._view;
                return t.base - t.y
            },
            inRange: function(t, e) {
                return Wt(this._view, t, e)
            },
            inLabelRange: function(t, e) {
                var i = this._view;
                return Ot(i) ? Wt(i, t, null) : Wt(i, null, e)
            },
            inXRange: function(t) {
                return Wt(this._view, t, null)
            },
            inYRange: function(t) {
                return Wt(this._view, null, t)
            },
            getCenterPoint: function() {
                var t, e, i = this._view;
                return e = Ot(i) ? (t = i.x, (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, i.y), {
                    x: t,
                    y: e
                }
            },
            getArea: function() {
                var t = this._view;
                return Ot(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base)
            },
            tooltipPosition: function() {
                var t = this._view;
                return {
                    x: t.x,
                    y: t.y
                }
            }
        }),
        zt = {},
        Bt = Mt,
        Vt = Dt,
        Et = At,
        Ht = Nt;
    zt.Arc = Bt, zt.Line = Vt, zt.Point = Et, zt.Rectangle = Ht;
    var Yt = ut.options.resolve;
    st._set("bar", {
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [{
                type: "category",
                categoryPercentage: .8,
                barPercentage: .9,
                offset: !0,
                gridLines: {
                    offsetGridLines: !0
                }
            }],
            yAxes: [{
                type: "linear"
            }]
        }
    });
    var jt = wt.extend({
            dataElementType: zt.Rectangle,
            initialize: function() {
                var t;
                wt.prototype.initialize.apply(this, arguments), (t = this.getMeta()).stack = this.getDataset().stack, t.bar = !0
            },
            update: function(t) {
                var e, i, n = this.getMeta().data;
                for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t)
            },
            updateElement: function(t, e, i) {
                var n = this,
                    a = n.getMeta(),
                    r = n.getDataset(),
                    o = n._resolveElementOptions(t, e);
                t._xScale = n.getScaleForId(a.xAxisID), t._yScale = n.getScaleForId(a.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
                    backgroundColor: o.backgroundColor,
                    borderColor: o.borderColor,
                    borderSkipped: o.borderSkipped,
                    borderWidth: o.borderWidth,
                    datasetLabel: r.label,
                    label: n.chart.data.labels[e]
                }, n._updateElementGeometry(t, e, i), t.pivot()
            },
            _updateElementGeometry: function(t, e, i) {
                var n = this,
                    a = t._model,
                    r = n._getValueScale(),
                    o = r.getBasePixel(),
                    s = r.isHorizontal(),
                    l = n._ruler || n.getRuler(),
                    d = n.calculateBarValuePixels(n.index, e),
                    u = n.calculateBarIndexPixels(n.index, e, l);
                a.horizontal = s, a.base = i ? o : d.base, a.x = s ? i ? o : d.head : u.center, a.y = s ? u.center : i ? o : d.head, a.height = s ? u.size : void 0, a.width = s ? void 0 : u.size
            },
            _getStacks: function(t) {
                var e, i, n = this.chart,
                    a = this._getIndexScale().options.stacked,
                    r = void 0 === t ? n.data.datasets.length : t + 1,
                    o = [];
                for (e = 0; e < r; ++e)(i = n.getDatasetMeta(e)).bar && n.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === o.indexOf(i.stack) || void 0 === a && (void 0 === i.stack || -1 === o.indexOf(i.stack))) && o.push(i.stack);
                return o
            },
            getStackCount: function() {
                return this._getStacks().length
            },
            getStackIndex: function(t, e) {
                var i = this._getStacks(t),
                    n = void 0 !== e ? i.indexOf(e) : -1;
                return -1 === n ? i.length - 1 : n
            },
            getRuler: function() {
                var t, e, i = this._getIndexScale(),
                    n = this.getStackCount(),
                    a = this.index,
                    r = i.isHorizontal(),
                    o = r ? i.left : i.top,
                    s = o + (r ? i.width : i.height),
                    l = [];
                for (t = 0, e = this.getMeta().data.length; t < e; ++t) l.push(i.getPixelForValue(null, t, a));
                return {
                    min: ut.isNullOrUndef(i.options.barThickness) ? function(t, e) {
                        var i, n, a, r, o = t.isHorizontal() ? t.width : t.height,
                            s = t.getTicks();
                        for (a = 1, r = e.length; a < r; ++a) o = Math.min(o, Math.abs(e[a] - e[a - 1]));
                        for (a = 0, r = s.length; a < r; ++a) n = t.getPixelForTick(a), o = 0 < a ? Math.min(o, n - i) : o, i = n;
                        return o
                    }(i, l) : -1,
                    pixels: l,
                    start: o,
                    end: s,
                    stackCount: n,
                    scale: i
                }
            },
            calculateBarValuePixels: function(t, e) {
                var i, n, a, r, o, s, l = this.chart,
                    d = this.getMeta(),
                    u = this._getValueScale(),
                    h = u.isHorizontal(),
                    c = l.data.datasets,
                    f = +u.getRightValue(c[t].data[e]),
                    g = u.options.minBarLength,
                    p = u.options.stacked,
                    m = d.stack,
                    v = 0;
                if (p || void 0 === p && void 0 !== m)
                    for (i = 0; i < t; ++i)(n = l.getDatasetMeta(i)).bar && n.stack === m && n.controller._getValueScaleId() === u.id && l.isDatasetVisible(i) && (a = +u.getRightValue(c[i].data[e]), (f < 0 && a < 0 || 0 <= f && 0 < a) && (v += a));
                return r = u.getPixelForValue(v), s = (o = u.getPixelForValue(v + f)) - r, void 0 !== g && Math.abs(s) < g && (s = g, o = 0 <= f && !h || f < 0 && h ? r - g : r + g), {
                    size: s,
                    base: r,
                    head: o,
                    center: o + s / 2
                }
            },
            calculateBarIndexPixels: function(t, e, i) {
                var n, a, r, o, s, l, d, u, h, c, f, g, p, m, v, b, y, x = i.scale.options,
                    _ = "flex" === x.barThickness ? (h = e, f = x, p = (c = i).pixels, m = p[h], v = 0 < h ? p[h - 1] : null, b = h < p.length - 1 ? p[h + 1] : null, y = f.categoryPercentage, null === v && (v = m - (null === b ? c.end - c.start : b - m)), null === b && (b = m + m - v), g = m - (m - Math.min(v, b)) / 2 * y, {
                        chunk: Math.abs(b - v) / 2 * y / c.stackCount,
                        ratio: f.barPercentage,
                        start: g
                    }) : (n = e, a = i, l = (r = x).barThickness, d = a.stackCount, u = a.pixels[n], s = ut.isNullOrUndef(l) ? (o = a.min * r.categoryPercentage, r.barPercentage) : (o = l * d, 1), {
                        chunk: o / d,
                        ratio: s,
                        start: u - o / 2
                    }),
                    k = this.getStackIndex(t, this.getMeta().stack),
                    w = _.start + _.chunk * k + _.chunk / 2,
                    M = Math.min(ut.valueOrDefault(x.maxBarThickness, 1 / 0), _.chunk * _.ratio);
                return {
                    base: w - M / 2,
                    head: w + M / 2,
                    center: w,
                    size: M
                }
            },
            draw: function() {
                var t = this.chart,
                    e = this._getValueScale(),
                    i = this.getMeta().data,
                    n = this.getDataset(),
                    a = i.length,
                    r = 0;
                for (ut.canvas.clipArea(t.ctx, t.chartArea); r < a; ++r) isNaN(e.getRightValue(n.data[r])) || i[r].draw();
                ut.canvas.unclipArea(t.ctx)
            },
            _resolveElementOptions: function(t, e) {
                var i, n, a, r = this.chart,
                    o = r.data.datasets[this.index],
                    s = t.custom || {},
                    l = r.options.elements.rectangle,
                    d = {},
                    u = {
                        chart: r,
                        dataIndex: e,
                        dataset: o,
                        datasetIndex: this.index
                    },
                    h = ["backgroundColor", "borderColor", "borderSkipped", "borderWidth"];
                for (i = 0, n = h.length; i < n; ++i) d[a = h[i]] = Yt([s[a], o[a], l[a]], u, e);
                return d
            }
        }),
        Ut = ut.valueOrDefault,
        qt = ut.options.resolve;
    st._set("bubble", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [{
                type: "linear",
                position: "bottom",
                id: "x-axis-0"
            }],
            yAxes: [{
                type: "linear",
                position: "left",
                id: "y-axis-0"
            }]
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    var i = e.datasets[t.datasetIndex].label || "",
                        n = e.datasets[t.datasetIndex].data[t.index];
                    return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")"
                }
            }
        }
    });
    var Gt = wt.extend({
            dataElementType: zt.Point,
            update: function(i) {
                var n = this,
                    t = n.getMeta().data;
                ut.each(t, function(t, e) {
                    n.updateElement(t, e, i)
                })
            },
            updateElement: function(t, e, i) {
                var n = this,
                    a = n.getMeta(),
                    r = t.custom || {},
                    o = n.getScaleForId(a.xAxisID),
                    s = n.getScaleForId(a.yAxisID),
                    l = n._resolveElementOptions(t, e),
                    d = n.getDataset().data[e],
                    u = n.index,
                    h = i ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == typeof d ? d : NaN, e, u),
                    c = i ? s.getBasePixel() : s.getPixelForValue(d, e, u);
                t._xScale = o, t._yScale = s, t._options = l, t._datasetIndex = u, t._index = e, t._model = {
                    backgroundColor: l.backgroundColor,
                    borderColor: l.borderColor,
                    borderWidth: l.borderWidth,
                    hitRadius: l.hitRadius,
                    pointStyle: l.pointStyle,
                    rotation: l.rotation,
                    radius: i ? 0 : l.radius,
                    skip: r.skip || isNaN(h) || isNaN(c),
                    x: h,
                    y: c
                }, t.pivot()
            },
            setHoverStyle: function(t) {
                var e = t._model,
                    i = t._options,
                    n = ut.getHoverColor;
                t.$previousStyle = {
                    backgroundColor: e.backgroundColor,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth,
                    radius: e.radius
                }, e.backgroundColor = Ut(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = Ut(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = Ut(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius
            },
            _resolveElementOptions: function(t, e) {
                var i, n, a, r = this.chart,
                    o = r.data.datasets[this.index],
                    s = t.custom || {},
                    l = r.options.elements.point,
                    d = o.data[e],
                    u = {},
                    h = {
                        chart: r,
                        dataIndex: e,
                        dataset: o,
                        datasetIndex: this.index
                    },
                    c = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];
                for (i = 0, n = c.length; i < n; ++i) u[a = c[i]] = qt([s[a], o[a], l[a]], h, e);
                return u.radius = qt([s.radius, d ? d.r : void 0, o.radius, l.radius], h, e), u
            }
        }),
        Zt = ut.options.resolve,
        Xt = ut.valueOrDefault;
    st._set("doughnut", {
        animation: {
            animateRotate: !0,
            animateScale: !1
        },
        hover: {
            mode: "single"
        },
        legendCallback: function(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var i = t.data,
                n = i.datasets,
                a = i.labels;
            if (n.length)
                for (var r = 0; r < n[0].data.length; ++r) e.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), a[r] && e.push(a[r]), e.push("</li>");
            return e.push("</ul>"), e.join("")
        },
        legend: {
            labels: {
                generateLabels: function(s) {
                    var l = s.data;
                    return l.labels.length && l.datasets.length ? l.labels.map(function(t, e) {
                        var i = s.getDatasetMeta(0),
                            n = l.datasets[0],
                            a = i.data[e],
                            r = a && a.custom || {},
                            o = s.options.elements.arc;
                        return {
                            text: t,
                            fillStyle: Zt([r.backgroundColor, n.backgroundColor, o.backgroundColor], void 0, e),
                            strokeStyle: Zt([r.borderColor, n.borderColor, o.borderColor], void 0, e),
                            lineWidth: Zt([r.borderWidth, n.borderWidth, o.borderWidth], void 0, e),
                            hidden: isNaN(n.data[e]) || i.data[e].hidden,
                            index: e
                        }
                    }) : []
                }
            },
            onClick: function(t, e) {
                var i, n, a, r = e.index,
                    o = this.chart;
                for (i = 0, n = (o.data.datasets || []).length; i < n; ++i)(a = o.getDatasetMeta(i)).data[r] && (a.data[r].hidden = !a.data[r].hidden);
                o.update()
            }
        },
        cutoutPercentage: 50,
        rotation: -.5 * Math.PI,
        circumference: 2 * Math.PI,
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    var i = e.labels[t.index],
                        n = ": " + e.datasets[t.datasetIndex].data[t.index];
                    return ut.isArray(i) ? (i = i.slice())[0] += n : i += n, i
                }
            }
        }
    });
    var Kt = wt.extend({
        dataElementType: zt.Arc,
        linkScales: ut.noop,
        getRingIndex: function(t) {
            for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;
            return e
        },
        update: function(t) {
            var e, i, n = this,
                a = n.chart,
                r = a.chartArea,
                o = a.options,
                s = r.right - r.left,
                l = r.bottom - r.top,
                d = Math.min(s, l),
                u = {
                    x: 0,
                    y: 0
                },
                h = n.getMeta(),
                c = h.data,
                f = o.cutoutPercentage,
                g = o.circumference,
                p = n._getRingWeight(n.index);
            if (g < 2 * Math.PI) {
                var m = o.rotation % (2 * Math.PI),
                    v = (m += 2 * Math.PI * (m >= Math.PI ? -1 : m < -Math.PI ? 1 : 0)) + g,
                    b = Math.cos(m),
                    y = Math.sin(m),
                    x = Math.cos(v),
                    _ = Math.sin(v),
                    k = m <= 0 && 0 <= v || m <= 2 * Math.PI && 2 * Math.PI <= v,
                    w = m <= .5 * Math.PI && .5 * Math.PI <= v || m <= 2.5 * Math.PI && 2.5 * Math.PI <= v,
                    M = m <= -Math.PI && -Math.PI <= v || m <= Math.PI && Math.PI <= v,
                    S = m <= .5 * -Math.PI && .5 * -Math.PI <= v || m <= 1.5 * Math.PI && 1.5 * Math.PI <= v,
                    C = f / 100,
                    D = M ? -1 : Math.min(b * (b < 0 ? 1 : C), x * (x < 0 ? 1 : C)),
                    P = S ? -1 : Math.min(y * (y < 0 ? 1 : C), _ * (_ < 0 ? 1 : C)),
                    T = k ? 1 : Math.max(b * (0 < b ? 1 : C), x * (0 < x ? 1 : C)),
                    I = w ? 1 : Math.max(y * (0 < y ? 1 : C), _ * (0 < _ ? 1 : C)),
                    A = .5 * (T - D),
                    F = .5 * (I - P);
                d = Math.min(s / A, l / F), u = {
                    x: -.5 * (T + D),
                    y: -.5 * (I + P)
                }
            }
            for (e = 0, i = c.length; e < i; ++e) c[e]._options = n._resolveElementOptions(c[e], e);
            for (a.borderWidth = n.getMaxBorderWidth(), a.outerRadius = Math.max((d - a.borderWidth) / 2, 0), a.innerRadius = Math.max(f ? a.outerRadius / 100 * f : 0, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / (n._getVisibleDatasetWeightTotal() || 1), a.offsetX = u.x * a.outerRadius, a.offsetY = u.y * a.outerRadius, h.total = n.calculateTotal(), n.outerRadius = a.outerRadius - a.radiusLength * n._getRingWeightOffset(n.index), n.innerRadius = Math.max(n.outerRadius - a.radiusLength * p, 0), e = 0, i = c.length; e < i; ++e) n.updateElement(c[e], e, t)
        },
        updateElement: function(t, e, i) {
            var n = this,
                a = n.chart,
                r = a.chartArea,
                o = a.options,
                s = o.animation,
                l = (r.left + r.right) / 2,
                d = (r.top + r.bottom) / 2,
                u = o.rotation,
                h = o.rotation,
                c = n.getDataset(),
                f = i && s.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(c.data[e]) * (o.circumference / (2 * Math.PI)),
                g = i && s.animateScale ? 0 : n.innerRadius,
                p = i && s.animateScale ? 0 : n.outerRadius,
                m = t._options || {};
            ut.extend(t, {
                _datasetIndex: n.index,
                _index: e,
                _model: {
                    backgroundColor: m.backgroundColor,
                    borderColor: m.borderColor,
                    borderWidth: m.borderWidth,
                    borderAlign: m.borderAlign,
                    x: l + a.offsetX,
                    y: d + a.offsetY,
                    startAngle: u,
                    endAngle: h,
                    circumference: f,
                    outerRadius: p,
                    innerRadius: g,
                    label: ut.valueAtIndexOrDefault(c.label, e, a.data.labels[e])
                }
            });
            var v = t._model;
            i && s.animateRotate || (v.startAngle = 0 === e ? o.rotation : n.getMeta().data[e - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot()
        },
        calculateTotal: function() {
            var i, n = this.getDataset(),
                t = this.getMeta(),
                a = 0;
            return ut.each(t.data, function(t, e) {
                i = n.data[e], isNaN(i) || t.hidden || (a += Math.abs(i))
            }), a
        },
        calculateCircumference: function(t) {
            var e = this.getMeta().total;
            return 0 < e && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0
        },
        getMaxBorderWidth: function(t) {
            var e, i, n, a, r, o, s, l, d = 0,
                u = this.chart;
            if (!t)
                for (e = 0, i = u.data.datasets.length; e < i; ++e)
                    if (u.isDatasetVisible(e)) {
                        t = (n = u.getDatasetMeta(e)).data, e !== this.index && (r = n.controller);
                        break
                    }
            if (!t) return 0;
            for (e = 0, i = t.length; e < i; ++e) a = t[e], "inner" !== (o = r ? r._resolveElementOptions(a, e) : a._options).borderAlign && (s = o.borderWidth, d = (l = o.hoverBorderWidth) > (d = d < s ? s : d) ? l : d);
            return d
        },
        setHoverStyle: function(t) {
            var e = t._model,
                i = t._options,
                n = ut.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth
            }, e.backgroundColor = Xt(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = Xt(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = Xt(i.hoverBorderWidth, i.borderWidth)
        },
        _resolveElementOptions: function(t, e) {
            var i, n, a, r = this.chart,
                o = this.getDataset(),
                s = t.custom || {},
                l = r.options.elements.arc,
                d = {},
                u = {
                    chart: r,
                    dataIndex: e,
                    dataset: o,
                    datasetIndex: this.index
                },
                h = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];
            for (i = 0, n = h.length; i < n; ++i) d[a = h[i]] = Zt([s[a], o[a], l[a]], u, e);
            return d
        },
        _getRingWeightOffset: function(t) {
            for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
            return e
        },
        _getRingWeight: function(t) {
            return Math.max(Xt(this.chart.data.datasets[t].weight, 1), 0)
        },
        _getVisibleDatasetWeightTotal: function() {
            return this._getRingWeightOffset(this.chart.data.datasets.length)
        }
    });
    st._set("horizontalBar", {
        hover: {
            mode: "index",
            axis: "y"
        },
        scales: {
            xAxes: [{
                type: "linear",
                position: "bottom"
            }],
            yAxes: [{
                type: "category",
                position: "left",
                categoryPercentage: .8,
                barPercentage: .9,
                offset: !0,
                gridLines: {
                    offsetGridLines: !0
                }
            }]
        },
        elements: {
            rectangle: {
                borderSkipped: "left"
            }
        },
        tooltips: {
            mode: "index",
            axis: "y"
        }
    });
    var $t = jt.extend({
            _getValueScaleId: function() {
                return this.getMeta().xAxisID
            },
            _getIndexScaleId: function() {
                return this.getMeta().yAxisID
            }
        }),
        Jt = ut.valueOrDefault,
        Qt = ut.options.resolve,
        te = ut.canvas._isPointInArea;

    function ee(t, e) {
        return Jt(t.showLine, e.showLines)
    }
    st._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [{
                type: "category",
                id: "x-axis-0"
            }],
            yAxes: [{
                type: "linear",
                id: "y-axis-0"
            }]
        }
    });
    var ie = wt.extend({
            datasetElementType: zt.Line,
            dataElementType: zt.Point,
            update: function(t) {
                var e, i, n = this,
                    a = n.getMeta(),
                    r = a.dataset,
                    o = a.data || [],
                    s = n.getScaleForId(a.yAxisID),
                    l = n.getDataset(),
                    d = ee(l, n.chart.options);
                for (d && (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), r._scale = s, r._datasetIndex = n.index, r._children = o, r._model = n._resolveLineOptions(r), r.pivot()), e = 0, i = o.length; e < i; ++e) n.updateElement(o[e], e, t);
                for (d && 0 !== r._model.tension && n.updateBezierControlPoints(), e = 0, i = o.length; e < i; ++e) o[e].pivot()
            },
            updateElement: function(t, e, i) {
                var n, a, r = this,
                    o = r.getMeta(),
                    s = t.custom || {},
                    l = r.getDataset(),
                    d = r.index,
                    u = l.data[e],
                    h = r.getScaleForId(o.yAxisID),
                    c = r.getScaleForId(o.xAxisID),
                    f = o.dataset._model,
                    g = r._resolvePointOptions(t, e);
                n = c.getPixelForValue("object" == typeof u ? u : NaN, e, d), a = i ? h.getBasePixel() : r.calculatePointY(u, e, d), t._xScale = c, t._yScale = h, t._options = g, t._datasetIndex = d, t._index = e, t._model = {
                    x: n,
                    y: a,
                    skip: s.skip || isNaN(n) || isNaN(a),
                    radius: g.radius,
                    pointStyle: g.pointStyle,
                    rotation: g.rotation,
                    backgroundColor: g.backgroundColor,
                    borderColor: g.borderColor,
                    borderWidth: g.borderWidth,
                    tension: Jt(s.tension, f ? f.tension : 0),
                    steppedLine: !!f && f.steppedLine,
                    hitRadius: g.hitRadius
                }
            },
            _resolvePointOptions: function(t, e) {
                var i, n, a, r = this.chart,
                    o = r.data.datasets[this.index],
                    s = t.custom || {},
                    l = r.options.elements.point,
                    d = {},
                    u = {
                        chart: r,
                        dataIndex: e,
                        dataset: o,
                        datasetIndex: this.index
                    },
                    h = {
                        backgroundColor: "pointBackgroundColor",
                        borderColor: "pointBorderColor",
                        borderWidth: "pointBorderWidth",
                        hitRadius: "pointHitRadius",
                        hoverBackgroundColor: "pointHoverBackgroundColor",
                        hoverBorderColor: "pointHoverBorderColor",
                        hoverBorderWidth: "pointHoverBorderWidth",
                        hoverRadius: "pointHoverRadius",
                        pointStyle: "pointStyle",
                        radius: "pointRadius",
                        rotation: "pointRotation"
                    },
                    c = Object.keys(h);
                for (i = 0, n = c.length; i < n; ++i) d[a = c[i]] = Qt([s[a], o[h[a]], o[a], l[a]], u, e);
                return d
            },
            _resolveLineOptions: function(t) {
                var e, i, n, a = this.chart,
                    r = a.data.datasets[this.index],
                    o = t.custom || {},
                    s = a.options,
                    l = s.elements.line,
                    d = {},
                    u = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill", "cubicInterpolationMode"];
                for (e = 0, i = u.length; e < i; ++e) d[n = u[e]] = Qt([o[n], r[n], l[n]]);
                return d.spanGaps = Jt(r.spanGaps, s.spanGaps), d.tension = Jt(r.lineTension, l.tension), d.steppedLine = Qt([o.steppedLine, r.steppedLine, l.stepped]), d
            },
            calculatePointY: function(t, e, i) {
                var n, a, r, o = this.chart,
                    s = this.getMeta(),
                    l = this.getScaleForId(s.yAxisID),
                    d = 0,
                    u = 0;
                if (l.options.stacked) {
                    for (n = 0; n < i; n++)
                        if (a = o.data.datasets[n], "line" === (r = o.getDatasetMeta(n)).type && r.yAxisID === l.id && o.isDatasetVisible(n)) {
                            var h = Number(l.getRightValue(a.data[e]));
                            h < 0 ? u += h || 0 : d += h || 0
                        }
                    var c = Number(l.getRightValue(t));
                    return c < 0 ? l.getPixelForValue(u + c) : l.getPixelForValue(d + c)
                }
                return l.getPixelForValue(t)
            },
            updateBezierControlPoints: function() {
                var t, e, i, n, a = this.chart,
                    r = this.getMeta(),
                    o = r.dataset._model,
                    s = a.chartArea,
                    l = r.data || [];

                function d(t, e, i) {
                    return Math.max(Math.min(t, i), e)
                }
                if (o.spanGaps && (l = l.filter(function(t) {
                        return !t._model.skip
                    })), "monotone" === o.cubicInterpolationMode) ut.splineCurveMonotone(l);
                else
                    for (t = 0, e = l.length; t < e; ++t) i = l[t]._model, n = ut.splineCurve(ut.previousItem(l, t)._model, i, ut.nextItem(l, t)._model, o.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
                if (a.options.elements.line.capBezierPoints)
                    for (t = 0, e = l.length; t < e; ++t) i = l[t]._model, te(i, s) && (0 < t && te(l[t - 1]._model, s) && (i.controlPointPreviousX = d(i.controlPointPreviousX, s.left, s.right), i.controlPointPreviousY = d(i.controlPointPreviousY, s.top, s.bottom)), t < l.length - 1 && te(l[t + 1]._model, s) && (i.controlPointNextX = d(i.controlPointNextX, s.left, s.right), i.controlPointNextY = d(i.controlPointNextY, s.top, s.bottom)))
            },
            draw: function() {
                var t, e = this.chart,
                    i = this.getMeta(),
                    n = i.data || [],
                    a = e.chartArea,
                    r = n.length,
                    o = 0;
                for (ee(this.getDataset(), e.options) && (t = (i.dataset._model.borderWidth || 0) / 2, ut.canvas.clipArea(e.ctx, {
                        left: a.left,
                        right: a.right,
                        top: a.top - t,
                        bottom: a.bottom + t
                    }), i.dataset.draw(), ut.canvas.unclipArea(e.ctx)); o < r; ++o) n[o].draw(a)
            },
            setHoverStyle: function(t) {
                var e = t._model,
                    i = t._options,
                    n = ut.getHoverColor;
                t.$previousStyle = {
                    backgroundColor: e.backgroundColor,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth,
                    radius: e.radius
                }, e.backgroundColor = Jt(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = Jt(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = Jt(i.hoverBorderWidth, i.borderWidth), e.radius = Jt(i.hoverRadius, i.radius)
            }
        }),
        ne = ut.options.resolve;
    st._set("polarArea", {
        scale: {
            type: "radialLinear",
            angleLines: {
                display: !1
            },
            gridLines: {
                circular: !0
            },
            pointLabels: {
                display: !1
            },
            ticks: {
                beginAtZero: !0
            }
        },
        animation: {
            animateRotate: !0,
            animateScale: !0
        },
        startAngle: -.5 * Math.PI,
        legendCallback: function(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var i = t.data,
                n = i.datasets,
                a = i.labels;
            if (n.length)
                for (var r = 0; r < n[0].data.length; ++r) e.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), a[r] && e.push(a[r]), e.push("</li>");
            return e.push("</ul>"), e.join("")
        },
        legend: {
            labels: {
                generateLabels: function(o) {
                    var s = o.data;
                    return s.labels.length && s.datasets.length ? s.labels.map(function(t, e) {
                        var i = o.getDatasetMeta(0),
                            n = s.datasets[0],
                            a = i.data[e].custom || {},
                            r = o.options.elements.arc;
                        return {
                            text: t,
                            fillStyle: ne([a.backgroundColor, n.backgroundColor, r.backgroundColor], void 0, e),
                            strokeStyle: ne([a.borderColor, n.borderColor, r.borderColor], void 0, e),
                            lineWidth: ne([a.borderWidth, n.borderWidth, r.borderWidth], void 0, e),
                            hidden: isNaN(n.data[e]) || i.data[e].hidden,
                            index: e
                        }
                    }) : []
                }
            },
            onClick: function(t, e) {
                var i, n, a, r = e.index,
                    o = this.chart;
                for (i = 0, n = (o.data.datasets || []).length; i < n; ++i)(a = o.getDatasetMeta(i)).data[r].hidden = !a.data[r].hidden;
                o.update()
            }
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    return e.labels[t.index] + ": " + t.yLabel
                }
            }
        }
    });
    var ae = wt.extend({
        dataElementType: zt.Arc,
        linkScales: ut.noop,
        update: function(t) {
            var e, i, n, a = this,
                r = a.getDataset(),
                o = a.getMeta(),
                s = a.chart.options.startAngle || 0,
                l = a._starts = [],
                d = a._angles = [],
                u = o.data;
            for (a._updateRadius(), o.count = a.countVisibleElements(), e = 0, i = r.data.length; e < i; e++) l[e] = s, n = a._computeAngle(e), s += d[e] = n;
            for (e = 0, i = u.length; e < i; ++e) u[e]._options = a._resolveElementOptions(u[e], e), a.updateElement(u[e], e, t)
        },
        _updateRadius: function() {
            var t = this,
                e = t.chart,
                i = e.chartArea,
                n = e.options,
                a = Math.min(i.right - i.left, i.bottom - i.top);
            e.outerRadius = Math.max(a / 2, 0), e.innerRadius = Math.max(n.cutoutPercentage ? e.outerRadius / 100 * n.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength
        },
        updateElement: function(t, e, i) {
            var n = this,
                a = n.chart,
                r = n.getDataset(),
                o = a.options,
                s = o.animation,
                l = a.scale,
                d = a.data.labels,
                u = l.xCenter,
                h = l.yCenter,
                c = o.startAngle,
                f = t.hidden ? 0 : l.getDistanceFromCenterForValue(r.data[e]),
                g = n._starts[e],
                p = g + (t.hidden ? 0 : n._angles[e]),
                m = s.animateScale ? 0 : l.getDistanceFromCenterForValue(r.data[e]),
                v = t._options || {};
            ut.extend(t, {
                _datasetIndex: n.index,
                _index: e,
                _scale: l,
                _model: {
                    backgroundColor: v.backgroundColor,
                    borderColor: v.borderColor,
                    borderWidth: v.borderWidth,
                    borderAlign: v.borderAlign,
                    x: u,
                    y: h,
                    innerRadius: 0,
                    outerRadius: i ? m : f,
                    startAngle: i && s.animateRotate ? c : g,
                    endAngle: i && s.animateRotate ? c : p,
                    label: ut.valueAtIndexOrDefault(d, e, d[e])
                }
            }), t.pivot()
        },
        countVisibleElements: function() {
            var i = this.getDataset(),
                t = this.getMeta(),
                n = 0;
            return ut.each(t.data, function(t, e) {
                isNaN(i.data[e]) || t.hidden || n++
            }), n
        },
        setHoverStyle: function(t) {
            var e = t._model,
                i = t._options,
                n = ut.getHoverColor,
                a = ut.valueOrDefault;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth
            }, e.backgroundColor = a(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = a(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = a(i.hoverBorderWidth, i.borderWidth)
        },
        _resolveElementOptions: function(t, e) {
            var i, n, a, r = this.chart,
                o = this.getDataset(),
                s = t.custom || {},
                l = r.options.elements.arc,
                d = {},
                u = {
                    chart: r,
                    dataIndex: e,
                    dataset: o,
                    datasetIndex: this.index
                },
                h = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];
            for (i = 0, n = h.length; i < n; ++i) d[a = h[i]] = ne([s[a], o[a], l[a]], u, e);
            return d
        },
        _computeAngle: function(t) {
            var e = this,
                i = this.getMeta().count,
                n = e.getDataset(),
                a = e.getMeta();
            if (isNaN(n.data[t]) || a.data[t].hidden) return 0;
            var r = {
                chart: e.chart,
                dataIndex: t,
                dataset: n,
                datasetIndex: e.index
            };
            return ne([e.chart.options.elements.arc.angle, 2 * Math.PI / i], r, t)
        }
    });
    st._set("pie", ut.clone(st.doughnut)), st._set("pie", {
        cutoutPercentage: 0
    });
    var re = Kt,
        oe = ut.valueOrDefault,
        se = ut.options.resolve;
    st._set("radar", {
        scale: {
            type: "radialLinear"
        },
        elements: {
            line: {
                tension: 0
            }
        }
    });
    var le = wt.extend({
        datasetElementType: zt.Line,
        dataElementType: zt.Point,
        linkScales: ut.noop,
        update: function(t) {
            var e, i, n = this,
                a = n.getMeta(),
                r = a.dataset,
                o = a.data || [],
                s = n.chart.scale,
                l = n.getDataset();
            for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), r._scale = s, r._datasetIndex = n.index, r._children = o, r._loop = !0, r._model = n._resolveLineOptions(r), r.pivot(), e = 0, i = o.length; e < i; ++e) n.updateElement(o[e], e, t);
            for (n.updateBezierControlPoints(), e = 0, i = o.length; e < i; ++e) o[e].pivot()
        },
        updateElement: function(t, e, i) {
            var n = this,
                a = t.custom || {},
                r = n.getDataset(),
                o = n.chart.scale,
                s = o.getPointPositionForValue(e, r.data[e]),
                l = n._resolvePointOptions(t, e),
                d = n.getMeta().dataset._model,
                u = i ? o.xCenter : s.x,
                h = i ? o.yCenter : s.y;
            t._scale = o, t._options = l, t._datasetIndex = n.index, t._index = e, t._model = {
                x: u,
                y: h,
                skip: a.skip || isNaN(u) || isNaN(h),
                radius: l.radius,
                pointStyle: l.pointStyle,
                rotation: l.rotation,
                backgroundColor: l.backgroundColor,
                borderColor: l.borderColor,
                borderWidth: l.borderWidth,
                tension: oe(a.tension, d ? d.tension : 0),
                hitRadius: l.hitRadius
            }
        },
        _resolvePointOptions: function(t, e) {
            var i, n, a, r = this.chart,
                o = r.data.datasets[this.index],
                s = t.custom || {},
                l = r.options.elements.point,
                d = {},
                u = {
                    chart: r,
                    dataIndex: e,
                    dataset: o,
                    datasetIndex: this.index
                },
                h = {
                    backgroundColor: "pointBackgroundColor",
                    borderColor: "pointBorderColor",
                    borderWidth: "pointBorderWidth",
                    hitRadius: "pointHitRadius",
                    hoverBackgroundColor: "pointHoverBackgroundColor",
                    hoverBorderColor: "pointHoverBorderColor",
                    hoverBorderWidth: "pointHoverBorderWidth",
                    hoverRadius: "pointHoverRadius",
                    pointStyle: "pointStyle",
                    radius: "pointRadius",
                    rotation: "pointRotation"
                },
                c = Object.keys(h);
            for (i = 0, n = c.length; i < n; ++i) d[a = c[i]] = se([s[a], o[h[a]], o[a], l[a]], u, e);
            return d
        },
        _resolveLineOptions: function(t) {
            var e, i, n, a = this.chart,
                r = a.data.datasets[this.index],
                o = t.custom || {},
                s = a.options.elements.line,
                l = {},
                d = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"];
            for (e = 0, i = d.length; e < i; ++e) l[n = d[e]] = se([o[n], r[n], s[n]]);
            return l.tension = oe(r.lineTension, s.tension), l
        },
        updateBezierControlPoints: function() {
            var t, e, i, n, a = this.getMeta(),
                r = this.chart.chartArea,
                o = a.data || [];

            function s(t, e, i) {
                return Math.max(Math.min(t, i), e)
            }
            for (t = 0, e = o.length; t < e; ++t) i = o[t]._model, n = ut.splineCurve(ut.previousItem(o, t, !0)._model, i, ut.nextItem(o, t, !0)._model, i.tension), i.controlPointPreviousX = s(n.previous.x, r.left, r.right), i.controlPointPreviousY = s(n.previous.y, r.top, r.bottom), i.controlPointNextX = s(n.next.x, r.left, r.right), i.controlPointNextY = s(n.next.y, r.top, r.bottom)
        },
        setHoverStyle: function(t) {
            var e = t._model,
                i = t._options,
                n = ut.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
                radius: e.radius
            }, e.backgroundColor = oe(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = oe(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = oe(i.hoverBorderWidth, i.borderWidth), e.radius = oe(i.hoverRadius, i.radius)
        }
    });
    st._set("scatter", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [{
                id: "x-axis-1",
                type: "linear",
                position: "bottom"
            }],
            yAxes: [{
                id: "y-axis-1",
                type: "linear",
                position: "left"
            }]
        },
        showLines: !1,
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t) {
                    return "(" + t.xLabel + ", " + t.yLabel + ")"
                }
            }
        }
    });
    var de = {
        bar: jt,
        bubble: Gt,
        doughnut: Kt,
        horizontalBar: $t,
        line: ie,
        polarArea: ae,
        pie: re,
        radar: le,
        scatter: ie
    };

    function ue(t, e) {
        return t.native ? {
            x: t.x,
            y: t.y
        } : ut.getRelativePosition(t, e)
    }

    function he(t, e) {
        var i, n, a, r, o;
        for (n = 0, r = t.data.datasets.length; n < r; ++n)
            if (t.isDatasetVisible(n))
                for (a = 0, o = (i = t.getDatasetMeta(n)).data.length; a < o; ++a) {
                    var s = i.data[a];
                    s._view.skip || e(s)
                }
    }

    function ce(t, e) {
        var i = [];
        return he(t, function(t) {
            t.inRange(e.x, e.y) && i.push(t)
        }), i
    }

    function fe(t, n, a, r) {
        var o = Number.POSITIVE_INFINITY,
            s = [];
        return he(t, function(t) {
            if (!a || t.inRange(n.x, n.y)) {
                var e = t.getCenterPoint(),
                    i = r(n, e);
                i < o ? (s = [t], o = i) : i === o && s.push(t)
            }
        }), s
    }

    function ge(t) {
        var a = -1 !== t.indexOf("x"),
            r = -1 !== t.indexOf("y");
        return function(t, e) {
            var i = a ? Math.abs(t.x - e.x) : 0,
                n = r ? Math.abs(t.y - e.y) : 0;
            return Math.sqrt(Math.pow(i, 2) + Math.pow(n, 2))
        }
    }

    function pe(n, t, e) {
        var i = ue(t, n);
        e.axis = e.axis || "x";
        var a = ge(e.axis),
            r = e.intersect ? ce(n, i) : fe(n, i, !1, a),
            o = [];
        return r.length ? (n.data.datasets.forEach(function(t, e) {
            if (n.isDatasetVisible(e)) {
                var i = n.getDatasetMeta(e).data[r[0]._index];
                i && !i._view.skip && o.push(i)
            }
        }), o) : []
    }
    var me = {
        modes: {
            single: function(t, e) {
                var i = ue(e, t),
                    n = [];
                return he(t, function(t) {
                    if (t.inRange(i.x, i.y)) return n.push(t), n
                }), n.slice(0, 1)
            },
            label: pe,
            index: pe,
            dataset: function(t, e, i) {
                var n = ue(e, t);
                i.axis = i.axis || "xy";
                var a = ge(i.axis),
                    r = i.intersect ? ce(t, n) : fe(t, n, !1, a);
                return 0 < r.length && (r = t.getDatasetMeta(r[0]._datasetIndex).data), r
            },
            "x-axis": function(t, e) {
                return pe(t, e, {
                    intersect: !1
                })
            },
            point: function(t, e) {
                return ce(t, ue(e, t))
            },
            nearest: function(t, e, i) {
                var n = ue(e, t);
                i.axis = i.axis || "xy";
                var a = ge(i.axis);
                return fe(t, n, i.intersect, a)
            },
            x: function(t, e, i) {
                var n = ue(e, t),
                    a = [],
                    r = !1;
                return he(t, function(t) {
                    t.inXRange(n.x) && a.push(t), t.inRange(n.x, n.y) && (r = !0)
                }), i.intersect && !r && (a = []), a
            },
            y: function(t, e, i) {
                var n = ue(e, t),
                    a = [],
                    r = !1;
                return he(t, function(t) {
                    t.inYRange(n.y) && a.push(t), t.inRange(n.x, n.y) && (r = !0)
                }), i.intersect && !r && (a = []), a
            }
        }
    };

    function ve(t, e) {
        return ut.where(t, function(t) {
            return t.position === e
        })
    }

    function be(t, a) {
        t.forEach(function(t, e) {
            return t._tmpIndex_ = e, t
        }), t.sort(function(t, e) {
            var i = a ? e : t,
                n = a ? t : e;
            return i.weight === n.weight ? i._tmpIndex_ - n._tmpIndex_ : i.weight - n.weight
        }), t.forEach(function(t) {
            delete t._tmpIndex_
        })
    }

    function ye(t, e) {
        ut.each(t, function(t) {
            e[t.position] += t.isHorizontal() ? t.height : t.width
        })
    }
    st._set("global", {
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        }
    });
    var xe, _e = {
            defaults: {},
            addBox: function(t, e) {
                t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
            },
            removeBox: function(t, e) {
                var i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
            },
            configure: function(t, e, i) {
                for (var n, a = ["fullWidth", "position", "weight"], r = a.length, o = 0; o < r; ++o) n = a[o], i.hasOwnProperty(n) && (e[n] = i[n])
            },
            update: function(e, i, t) {
                if (e) {
                    var n = e.options.layout || {},
                        a = ut.options.toPadding(n.padding),
                        r = a.left,
                        o = a.right,
                        s = a.top,
                        l = a.bottom,
                        d = ve(e.boxes, "left"),
                        u = ve(e.boxes, "right"),
                        h = ve(e.boxes, "top"),
                        c = ve(e.boxes, "bottom"),
                        f = ve(e.boxes, "chartArea");
                    be(d, !0), be(u, !1), be(h, !0), be(c, !1);
                    var g, p = d.concat(u),
                        m = h.concat(c),
                        v = p.concat(m),
                        b = i - r - o,
                        y = t - s - l,
                        x = (i - b / 2) / p.length,
                        _ = b,
                        k = y,
                        w = {
                            top: s,
                            left: r,
                            bottom: l,
                            right: o
                        },
                        M = [];
                    ut.each(v, function(t) {
                        var e, i = t.isHorizontal();
                        i ? (e = t.update(t.fullWidth ? b : _, y / 2), k -= e.height) : (e = t.update(x, k), _ -= e.width), M.push({
                            horizontal: i,
                            width: e.width,
                            box: t
                        })
                    }), A = v, R = L = O = F = 0, ut.each(A, function(t) {
                        if (t.getPadding) {
                            var e = t.getPadding();
                            F = Math.max(F, e.top), O = Math.max(O, e.left), L = Math.max(L, e.bottom), R = Math.max(R, e.right)
                        }
                    }), g = {
                        top: F,
                        left: O,
                        bottom: L,
                        right: R
                    }, ut.each(p, W), ye(p, w), ut.each(m, W), ye(m, w), ut.each(p, function(e) {
                        var t = ut.findNextWhere(M, function(t) {
                                return t.box === e
                            }),
                            i = {
                                left: 0,
                                right: 0,
                                top: w.top,
                                bottom: w.bottom
                            };
                        t && e.update(t.width, k, i)
                    }), ye(v, w = {
                        top: s,
                        left: r,
                        bottom: l,
                        right: o
                    });
                    var S = Math.max(g.left - w.left, 0);
                    w.left += S, w.right += Math.max(g.right - w.right, 0);
                    var C = Math.max(g.top - w.top, 0);
                    w.top += C, w.bottom += Math.max(g.bottom - w.bottom, 0);
                    var D = t - w.top - w.bottom,
                        P = i - w.left - w.right;
                    P === _ && D === k || (ut.each(p, function(t) {
                        t.height = D
                    }), ut.each(m, function(t) {
                        t.fullWidth || (t.width = P)
                    }), k = D, _ = P);
                    var T = r + S,
                        I = s + C;
                    ut.each(d.concat(h), N), T += _, I += k, ut.each(u, N), ut.each(c, N), e.chartArea = {
                        left: w.left,
                        top: w.top,
                        right: w.left + _,
                        bottom: w.top + k
                    }, ut.each(f, function(t) {
                        t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(_, k)
                    })
                }
                var A, F, O, L, R;

                function W(e) {
                    var t = ut.findNextWhere(M, function(t) {
                        return t.box === e
                    });
                    if (t)
                        if (t.horizontal) {
                            var i = {
                                left: Math.max(w.left, g.left),
                                right: Math.max(w.right, g.right),
                                top: 0,
                                bottom: 0
                            };
                            e.update(e.fullWidth ? b : _, y / 2, i)
                        } else e.update(t.width, k)
                }

                function N(t) {
                    t.isHorizontal() ? (t.left = t.fullWidth ? r : w.left, t.right = t.fullWidth ? i - o : w.left + _, t.top = I, t.bottom = I + t.height, I = t.bottom) : (t.left = T, t.right = T + t.width, t.top = w.top, t.bottom = w.top + k, T = t.right)
                }
            }
        },
        ke = (xe = Object.freeze({
            default: "@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}"
        })) && xe.default || xe,
        we = "$chartjs",
        Me = "chartjs-size-monitor",
        Se = "chartjs-render-monitor",
        Ce = ["animationstart", "webkitAnimationStart"],
        De = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout"
        };

    function Pe(t, e) {
        var i = ut.getStyle(t, e),
            n = i && i.match(/^(\d+)(\.\d+)?px$/);
        return n ? Number(n[1]) : void 0
    }
    var Te = !! function() {
        var t = !1;
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function() {
                    t = !0
                }
            });
            window.addEventListener("e", null, e)
        } catch (t) {}
        return t
    }() && {
        passive: !0
    };

    function Ie(t, e, i) {
        t.addEventListener(e, i, Te)
    }

    function Ae(t, e, i) {
        t.removeEventListener(e, i, Te)
    }

    function Fe(t, e, i, n, a) {
        return {
            type: t,
            chart: e,
            native: a || null,
            x: void 0 !== i ? i : null,
            y: void 0 !== n ? n : null
        }
    }

    function Oe(t) {
        var e = document.createElement("div");
        return e.className = t || "", e
    }

    function Le(i, n, a) {
        var t, e, r, o, s, l, d, u = i[we] || (i[we] = {}),
            h = u.resizer = function(t) {
                var e = Oe(Me),
                    i = Oe(Me + "-expand"),
                    n = Oe(Me + "-shrink");
                i.appendChild(Oe()), n.appendChild(Oe()), e.appendChild(i), e.appendChild(n), e._reset = function() {
                    i.scrollLeft = 1e6, i.scrollTop = 1e6, n.scrollLeft = 1e6, n.scrollTop = 1e6
                };

                function a() {
                    e._reset(), t()
                }
                return Ie(i, "scroll", a.bind(i, "expand")), Ie(n, "scroll", a.bind(n, "shrink")), e
            }((r = !(t = function() {
                if (u.resizer) {
                    var t = a.options.maintainAspectRatio && i.parentNode,
                        e = t ? t.clientWidth : 0;
                    n(Fe("resize", a)), t && t.clientWidth < e && a.canvas && n(Fe("resize", a))
                }
            }), o = [], function() {
                o = Array.prototype.slice.call(arguments), e = e || this, r || (r = !0, ut.requestAnimFrame.call(window, function() {
                    r = !1, t.apply(e, o)
                }))
            }));
        l = (s = i)[we] || (s[we] = {}), d = l.renderProxy = function(t) {
            "chartjs-render-animation" === t.animationName && function() {
                if (u.resizer) {
                    var t = i.parentNode;
                    t && t !== h.parentNode && t.insertBefore(h, t.firstChild), h._reset()
                }
            }()
        }, ut.each(Ce, function(t) {
            Ie(s, t, d)
        }), l.reflow = !!s.offsetParent, s.classList.add(Se)
    }
    var Re = {
        disableCSSInjection: !1,
        _enabled: "undefined" != typeof window && "undefined" != typeof document,
        _ensureLoaded: function() {
            var t, e;
            this._loaded || (this._loaded = !0, this.disableCSSInjection || (t = ke, e = this._style || document.createElement("style"), this._style || (t = "/* Chart.js */\n" + t, (this._style = e).setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(e)), e.appendChild(document.createTextNode(t))))
        },
        acquireContext: function(t, e) {
            "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
            var i = t && t.getContext && t.getContext("2d");
            return this._ensureLoaded(), i && i.canvas === t ? (function(t, e) {
                var i = t.style,
                    n = t.getAttribute("height"),
                    a = t.getAttribute("width");
                if (t[we] = {
                        initial: {
                            height: n,
                            width: a,
                            style: {
                                display: i.display,
                                height: i.height,
                                width: i.width
                            }
                        }
                    }, i.display = i.display || "block", null === a || "" === a) {
                    var r = Pe(t, "width");
                    void 0 !== r && (t.width = r)
                }
                if (null === n || "" === n)
                    if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                    else {
                        var o = Pe(t, "height");
                        void 0 !== r && (t.height = o)
                    }
            }(t, e), i) : null
        },
        releaseContext: function(t) {
            var i = t.canvas;
            if (i[we]) {
                var n = i[we].initial;
                ["height", "width"].forEach(function(t) {
                    var e = n[t];
                    ut.isNullOrUndef(e) ? i.removeAttribute(t) : i.setAttribute(t, e)
                }), ut.each(n.style || {}, function(t, e) {
                    i.style[e] = t
                }), i.width = i.width, delete i[we]
            }
        },
        addEventListener: function(r, t, o) {
            var e = r.canvas;
            if ("resize" !== t) {
                var i = o[we] || (o[we] = {});
                Ie(e, t, (i.proxies || (i.proxies = {}))[r.id + "_" + t] = function(t) {
                    var e, i, n, a;
                    o((i = r, n = De[(e = t).type] || e.type, a = ut.getRelativePosition(e, i), Fe(n, i, a.x, a.y, e)))
                })
            } else Le(e, o, r)
        },
        removeEventListener: function(t, e, i) {
            var n = t.canvas;
            if ("resize" !== e) {
                var a = ((i[we] || {}).proxies || {})[t.id + "_" + e];
                a && Ae(n, e, a)
            } else ! function(t) {
                var e, i, n, a = t[we] || {},
                    r = a.resizer;
                delete a.resizer, i = (e = t)[we] || {}, (n = i.renderProxy) && (ut.each(Ce, function(t) {
                    Ae(e, t, n)
                }), delete i.renderProxy), e.classList.remove(Se), r && r.parentNode && r.parentNode.removeChild(r)
            }(n)
        }
    };
    ut.addEvent = Ie, ut.removeEvent = Ae;
    var We = Re._enabled ? Re : {
            acquireContext: function(t) {
                return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
            }
        },
        Ne = ut.extend({
            initialize: function() {},
            acquireContext: function() {},
            releaseContext: function() {},
            addEventListener: function() {},
            removeEventListener: function() {}
        }, We);
    st._set("global", {
        plugins: {}
    });
    var ze = {
            _plugins: [],
            _cacheId: 0,
            register: function(t) {
                var e = this._plugins;
                [].concat(t).forEach(function(t) {
                    -1 === e.indexOf(t) && e.push(t)
                }), this._cacheId++
            },
            unregister: function(t) {
                var i = this._plugins;
                [].concat(t).forEach(function(t) {
                    var e = i.indexOf(t); - 1 !== e && i.splice(e, 1)
                }), this._cacheId++
            },
            clear: function() {
                this._plugins = [], this._cacheId++
            },
            count: function() {
                return this._plugins.length
            },
            getAll: function() {
                return this._plugins
            },
            notify: function(t, e, i) {
                var n, a, r, o, s, l = this.descriptors(t),
                    d = l.length;
                for (n = 0; n < d; ++n)
                    if ("function" == typeof(s = (r = (a = l[n]).plugin)[e]) && ((o = [t].concat(i || [])).push(a.options), !1 === s.apply(r, o))) return !1;
                return !0
            },
            descriptors: function(t) {
                var e = t.$plugins || (t.$plugins = {});
                if (e.id === this._cacheId) return e.descriptors;
                var n = [],
                    a = [],
                    i = t && t.config || {},
                    r = i.options && i.options.plugins || {};
                return this._plugins.concat(i.plugins || []).forEach(function(t) {
                    if (-1 === n.indexOf(t)) {
                        var e = t.id,
                            i = r[e];
                        !1 !== i && (!0 === i && (i = ut.clone(st.global.plugins[e])), n.push(t), a.push({
                            plugin: t,
                            options: i || {}
                        }))
                    }
                }), e.descriptors = a, e.id = this._cacheId, a
            },
            _invalidate: function(t) {
                delete t.$plugins
            }
        },
        Be = {
            constructors: {},
            defaults: {},
            registerScaleType: function(t, e, i) {
                this.constructors[t] = e, this.defaults[t] = ut.clone(i)
            },
            getScaleConstructor: function(t) {
                return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
            },
            getScaleDefaults: function(t) {
                return this.defaults.hasOwnProperty(t) ? ut.merge({}, [st.scale, this.defaults[t]]) : {}
            },
            updateScaleDefaults: function(t, e) {
                this.defaults.hasOwnProperty(t) && (this.defaults[t] = ut.extend(this.defaults[t], e))
            },
            addScalesToLayout: function(e) {
                ut.each(e.scales, function(t) {
                    t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, _e.addBox(e, t)
                })
            }
        },
        Ve = ut.valueOrDefault;
    st._set("global", {
        tooltips: {
            enabled: !0,
            custom: null,
            mode: "nearest",
            position: "average",
            intersect: !0,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyFontColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: "#fff",
            displayColors: !0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            callbacks: {
                beforeTitle: ut.noop,
                title: function(t, e) {
                    var i = "",
                        n = e.labels,
                        a = n ? n.length : 0;
                    if (0 < t.length) {
                        var r = t[0];
                        r.label ? i = r.label : r.xLabel ? i = r.xLabel : 0 < a && r.index < a && (i = n[r.index])
                    }
                    return i
                },
                afterTitle: ut.noop,
                beforeBody: ut.noop,
                beforeLabel: ut.noop,
                label: function(t, e) {
                    var i = e.datasets[t.datasetIndex].label || "";
                    return i && (i += ": "), ut.isNullOrUndef(t.value) ? i += t.yLabel : i += t.value, i
                },
                labelColor: function(t, e) {
                    var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                    return {
                        borderColor: i.borderColor,
                        backgroundColor: i.backgroundColor
                    }
                },
                labelTextColor: function() {
                    return this._options.bodyFontColor
                },
                afterLabel: ut.noop,
                afterBody: ut.noop,
                beforeFooter: ut.noop,
                footer: ut.noop,
                afterFooter: ut.noop
            }
        }
    });
    var Ee = {
        average: function(t) {
            if (!t.length) return !1;
            var e, i, n = 0,
                a = 0,
                r = 0;
            for (e = 0, i = t.length; e < i; ++e) {
                var o = t[e];
                if (o && o.hasValue()) {
                    var s = o.tooltipPosition();
                    n += s.x, a += s.y, ++r
                }
            }
            return {
                x: n / r,
                y: a / r
            }
        },
        nearest: function(t, e) {
            var i, n, a, r = e.x,
                o = e.y,
                s = Number.POSITIVE_INFINITY;
            for (i = 0, n = t.length; i < n; ++i) {
                var l = t[i];
                if (l && l.hasValue()) {
                    var d = l.getCenterPoint(),
                        u = ut.distanceBetweenPoints(e, d);
                    u < s && (s = u, a = l)
                }
            }
            if (a) {
                var h = a.tooltipPosition();
                r = h.x, o = h.y
            }
            return {
                x: r,
                y: o
            }
        }
    };

    function He(t, e) {
        return e && (ut.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
    }

    function Ye(t) {
        return ("string" == typeof t || t instanceof String) && -1 < t.indexOf("\n") ? t.split("\n") : t
    }

    function je(t) {
        var e = st.global;
        return {
            xPadding: t.xPadding,
            yPadding: t.yPadding,
            xAlign: t.xAlign,
            yAlign: t.yAlign,
            bodyFontColor: t.bodyFontColor,
            _bodyFontFamily: Ve(t.bodyFontFamily, e.defaultFontFamily),
            _bodyFontStyle: Ve(t.bodyFontStyle, e.defaultFontStyle),
            _bodyAlign: t.bodyAlign,
            bodyFontSize: Ve(t.bodyFontSize, e.defaultFontSize),
            bodySpacing: t.bodySpacing,
            titleFontColor: t.titleFontColor,
            _titleFontFamily: Ve(t.titleFontFamily, e.defaultFontFamily),
            _titleFontStyle: Ve(t.titleFontStyle, e.defaultFontStyle),
            titleFontSize: Ve(t.titleFontSize, e.defaultFontSize),
            _titleAlign: t.titleAlign,
            titleSpacing: t.titleSpacing,
            titleMarginBottom: t.titleMarginBottom,
            footerFontColor: t.footerFontColor,
            _footerFontFamily: Ve(t.footerFontFamily, e.defaultFontFamily),
            _footerFontStyle: Ve(t.footerFontStyle, e.defaultFontStyle),
            footerFontSize: Ve(t.footerFontSize, e.defaultFontSize),
            _footerAlign: t.footerAlign,
            footerSpacing: t.footerSpacing,
            footerMarginTop: t.footerMarginTop,
            caretSize: t.caretSize,
            cornerRadius: t.cornerRadius,
            backgroundColor: t.backgroundColor,
            opacity: 0,
            legendColorBackground: t.multiKeyBackground,
            displayColors: t.displayColors,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth
        }
    }

    function Ue(t, e) {
        return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding
    }

    function qe(t) {
        return He([], Ye(t))
    }
    var Ge = pt.extend({
            initialize: function() {
                this._model = je(this._options), this._lastActive = []
            },
            getTitle: function() {
                var t = this._options.callbacks,
                    e = t.beforeTitle.apply(this, arguments),
                    i = t.title.apply(this, arguments),
                    n = t.afterTitle.apply(this, arguments),
                    a = [];
                return He(a = He(a = He(a, Ye(e)), Ye(i)), Ye(n))
            },
            getBeforeBody: function() {
                return qe(this._options.callbacks.beforeBody.apply(this, arguments))
            },
            getBody: function(t, i) {
                var n = this,
                    a = n._options.callbacks,
                    r = [];
                return ut.each(t, function(t) {
                    var e = {
                        before: [],
                        lines: [],
                        after: []
                    };
                    He(e.before, Ye(a.beforeLabel.call(n, t, i))), He(e.lines, a.label.call(n, t, i)), He(e.after, Ye(a.afterLabel.call(n, t, i))), r.push(e)
                }), r
            },
            getAfterBody: function() {
                return qe(this._options.callbacks.afterBody.apply(this, arguments))
            },
            getFooter: function() {
                var t = this._options.callbacks,
                    e = t.beforeFooter.apply(this, arguments),
                    i = t.footer.apply(this, arguments),
                    n = t.afterFooter.apply(this, arguments),
                    a = [];
                return He(a = He(a = He(a, Ye(e)), Ye(i)), Ye(n))
            },
            update: function(t) {
                var e, i, n, a, r, o, s, l, d, u, h, c, f, g, p, m, v, b, y, x, _, k, w, M = this,
                    S = M._options,
                    C = M._model,
                    D = M._model = je(S),
                    P = M._active,
                    T = M._data,
                    I = {
                        xAlign: C.xAlign,
                        yAlign: C.yAlign
                    },
                    A = {
                        x: C.x,
                        y: C.y
                    },
                    F = {
                        width: C.width,
                        height: C.height
                    },
                    O = {
                        x: C.caretX,
                        y: C.caretY
                    };
                if (P.length) {
                    D.opacity = 1;
                    var L = [],
                        R = [];
                    O = Ee[S.position].call(M, P, M._eventPosition);
                    var W = [];
                    for (e = 0, i = P.length; e < i; ++e) W.push((u = d = l = r = a = void 0, a = (n = P[e])._xScale, r = n._yScale || n._scale, o = n._index, s = n._datasetIndex, d = (l = n._chart.getDatasetMeta(s).controller)._getIndexScale(), u = l._getValueScale(), {
                        xLabel: a ? a.getLabelForIndex(o, s) : "",
                        yLabel: r ? r.getLabelForIndex(o, s) : "",
                        label: d ? "" + d.getLabelForIndex(o, s) : "",
                        value: u ? "" + u.getLabelForIndex(o, s) : "",
                        index: o,
                        datasetIndex: s,
                        x: n._model.x,
                        y: n._model.y
                    }));
                    S.filter && (W = W.filter(function(t) {
                        return S.filter(t, T)
                    })), S.itemSort && (W = W.sort(function(t, e) {
                        return S.itemSort(t, e, T)
                    })), ut.each(W, function(t) {
                        L.push(S.callbacks.labelColor.call(M, t, M._chart)), R.push(S.callbacks.labelTextColor.call(M, t, M._chart))
                    }), D.title = M.getTitle(W, T), D.beforeBody = M.getBeforeBody(W, T), D.body = M.getBody(W, T), D.afterBody = M.getAfterBody(W, T), D.footer = M.getFooter(W, T), D.x = O.x, D.y = O.y, D.caretPadding = S.caretPadding, D.labelColors = L, D.labelTextColors = R, D.dataPoints = W, F = function(t, e) {
                        var i = t._chart.ctx,
                            n = 2 * e.yPadding,
                            a = 0,
                            r = e.body,
                            o = r.reduce(function(t, e) {
                                return t + e.before.length + e.lines.length + e.after.length
                            }, 0);
                        o += e.beforeBody.length + e.afterBody.length;
                        var s = e.title.length,
                            l = e.footer.length,
                            d = e.titleFontSize,
                            u = e.bodyFontSize,
                            h = e.footerFontSize;
                        n += s * d, n += s ? (s - 1) * e.titleSpacing : 0, n += s ? e.titleMarginBottom : 0, n += o * u, n += o ? (o - 1) * e.bodySpacing : 0, n += l ? e.footerMarginTop : 0, n += l * h, n += l ? (l - 1) * e.footerSpacing : 0;

                        function c(t) {
                            a = Math.max(a, i.measureText(t).width + f)
                        }
                        var f = 0;
                        return i.font = ut.fontString(d, e._titleFontStyle, e._titleFontFamily), ut.each(e.title, c), i.font = ut.fontString(u, e._bodyFontStyle, e._bodyFontFamily), ut.each(e.beforeBody.concat(e.afterBody), c), f = e.displayColors ? u + 2 : 0, ut.each(r, function(t) {
                            ut.each(t.before, c), ut.each(t.lines, c), ut.each(t.after, c)
                        }), f = 0, i.font = ut.fontString(h, e._footerFontStyle, e._footerFontFamily), ut.each(e.footer, c), {
                            width: a += 2 * e.xPadding,
                            height: n
                        }
                    }(this, D), h = D, f = I = function(t, e) {
                        var i, n, a, r, o, s = t._model,
                            l = t._chart,
                            d = t._chart.chartArea,
                            u = "center",
                            h = "center";
                        s.y < e.height ? h = "top" : s.y > l.height - e.height && (h = "bottom");
                        var c = (d.left + d.right) / 2,
                            f = (d.top + d.bottom) / 2;
                        n = "center" === h ? (i = function(t) {
                            return t <= c
                        }, function(t) {
                            return c < t
                        }) : (i = function(t) {
                            return t <= e.width / 2
                        }, function(t) {
                            return t >= l.width - e.width / 2
                        }), a = function(t) {
                            return t + e.width + s.caretSize + s.caretPadding > l.width
                        }, r = function(t) {
                            return t - e.width - s.caretSize - s.caretPadding < 0
                        }, o = function(t) {
                            return t <= f ? "top" : "bottom"
                        }, i(s.x) ? (u = "left", a(s.x) && (u = "center", h = o(s.y))) : n(s.x) && (u = "right", r(s.x) && (u = "center", h = o(s.y)));
                        var g = t._options;
                        return {
                            xAlign: g.xAlign ? g.xAlign : u,
                            yAlign: g.yAlign ? g.yAlign : h
                        }
                    }(this, c = F), g = M._chart, p = h.x, m = h.y, v = h.caretSize, b = h.caretPadding, y = h.cornerRadius, x = f.xAlign, _ = f.yAlign, k = v + b, w = y + b, "right" === x ? p -= c.width : "center" === x && ((p -= c.width / 2) + c.width > g.width && (p = g.width - c.width), p < 0 && (p = 0)), "top" === _ ? m += k : m -= "bottom" === _ ? c.height + k : c.height / 2, "center" === _ ? "left" === x ? p += k : "right" === x && (p -= k) : "left" === x ? p -= w : "right" === x && (p += w), A = {
                        x: p,
                        y: m
                    }
                } else D.opacity = 0;
                return D.xAlign = I.xAlign, D.yAlign = I.yAlign, D.x = A.x, D.y = A.y, D.width = F.width, D.height = F.height, D.caretX = O.x, D.caretY = O.y, M._model = D, t && S.custom && S.custom.call(M, D), M
            },
            drawCaret: function(t, e) {
                var i = this._chart.ctx,
                    n = this._view,
                    a = this.getCaretPosition(t, e, n);
                i.lineTo(a.x1, a.y1), i.lineTo(a.x2, a.y2), i.lineTo(a.x3, a.y3)
            },
            getCaretPosition: function(t, e, i) {
                var n, a, r, o, s, l, d = i.caretSize,
                    u = i.cornerRadius,
                    h = i.xAlign,
                    c = i.yAlign,
                    f = t.x,
                    g = t.y,
                    p = e.width,
                    m = e.height;
                if ("center" === c) s = g + m / 2, l = "left" === h ? (a = (n = f) - d, r = n, o = s + d, s - d) : (a = (n = f + p) + d, r = n, o = s - d, s + d);
                else if (r = (n = "left" === h ? (a = f + u + d) - d : "right" === h ? (a = f + p - u - d) - d : (a = i.caretX) - d, a + d), "top" === c) s = (o = g) - d, l = o;
                else {
                    s = (o = g + m) + d, l = o;
                    var v = r;
                    r = n, n = v
                }
                return {
                    x1: n,
                    x2: a,
                    x3: r,
                    y1: o,
                    y2: s,
                    y3: l
                }
            },
            drawTitle: function(t, e, i) {
                var n = e.title;
                if (n.length) {
                    t.x = Ue(e, e._titleAlign), i.textAlign = e._titleAlign, i.textBaseline = "top";
                    var a, r, o = e.titleFontSize,
                        s = e.titleSpacing;
                    for (i.fillStyle = e.titleFontColor, i.font = ut.fontString(o, e._titleFontStyle, e._titleFontFamily), a = 0, r = n.length; a < r; ++a) i.fillText(n[a], t.x, t.y), t.y += o + s, a + 1 === n.length && (t.y += e.titleMarginBottom - s)
                }
            },
            drawBody: function(i, n, a) {
                var r, o = n.bodyFontSize,
                    e = n.bodySpacing,
                    t = n._bodyAlign,
                    s = n.body,
                    l = n.displayColors,
                    d = n.labelColors,
                    u = 0,
                    h = l ? Ue(n, "left") : 0;
                a.textAlign = t, a.textBaseline = "top", a.font = ut.fontString(o, n._bodyFontStyle, n._bodyFontFamily), i.x = Ue(n, t);

                function c(t) {
                    a.fillText(t, i.x + u, i.y), i.y += o + e
                }
                a.fillStyle = n.bodyFontColor, ut.each(n.beforeBody, c), u = l && "right" !== t ? "center" === t ? o / 2 + 1 : o + 2 : 0, ut.each(s, function(t, e) {
                    r = n.labelTextColors[e], a.fillStyle = r, ut.each(t.before, c), ut.each(t.lines, function(t) {
                        l && (a.fillStyle = n.legendColorBackground, a.fillRect(h, i.y, o, o), a.lineWidth = 1, a.strokeStyle = d[e].borderColor, a.strokeRect(h, i.y, o, o), a.fillStyle = d[e].backgroundColor, a.fillRect(h + 1, i.y + 1, o - 2, o - 2), a.fillStyle = r), c(t)
                    }), ut.each(t.after, c)
                }), u = 0, ut.each(n.afterBody, c), i.y -= e
            },
            drawFooter: function(e, i, n) {
                var t = i.footer;
                t.length && (e.x = Ue(i, i._footerAlign), e.y += i.footerMarginTop, n.textAlign = i._footerAlign, n.textBaseline = "top", n.fillStyle = i.footerFontColor, n.font = ut.fontString(i.footerFontSize, i._footerFontStyle, i._footerFontFamily), ut.each(t, function(t) {
                    n.fillText(t, e.x, e.y), e.y += i.footerFontSize + i.footerSpacing
                }))
            },
            drawBackground: function(t, e, i, n) {
                i.fillStyle = e.backgroundColor, i.strokeStyle = e.borderColor, i.lineWidth = e.borderWidth;
                var a = e.xAlign,
                    r = e.yAlign,
                    o = t.x,
                    s = t.y,
                    l = n.width,
                    d = n.height,
                    u = e.cornerRadius;
                i.beginPath(), i.moveTo(o + u, s), "top" === r && this.drawCaret(t, n), i.lineTo(o + l - u, s), i.quadraticCurveTo(o + l, s, o + l, s + u), "center" === r && "right" === a && this.drawCaret(t, n), i.lineTo(o + l, s + d - u), i.quadraticCurveTo(o + l, s + d, o + l - u, s + d), "bottom" === r && this.drawCaret(t, n), i.lineTo(o + u, s + d), i.quadraticCurveTo(o, s + d, o, s + d - u), "center" === r && "left" === a && this.drawCaret(t, n), i.lineTo(o, s + u), i.quadraticCurveTo(o, s, o + u, s), i.closePath(), i.fill(), 0 < e.borderWidth && i.stroke()
            },
            draw: function() {
                var t = this._chart.ctx,
                    e = this._view;
                if (0 !== e.opacity) {
                    var i = {
                            width: e.width,
                            height: e.height
                        },
                        n = {
                            x: e.x,
                            y: e.y
                        },
                        a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                        r = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                    this._options.enabled && r && (t.save(), t.globalAlpha = a, this.drawBackground(n, e, t, i), n.y += e.yPadding, this.drawTitle(n, e, t), this.drawBody(n, e, t), this.drawFooter(n, e, t), t.restore())
                }
            },
            handleEvent: function(t) {
                var e, i = this,
                    n = i._options;
                return i._lastActive = i._lastActive || [], "mouseout" === t.type ? i._active = [] : i._active = i._chart.getElementsAtEventForMode(t, n.mode, n), (e = !ut.arrayEquals(i._active, i._lastActive)) && (i._lastActive = i._active, (n.enabled || n.custom) && (i._eventPosition = {
                    x: t.x,
                    y: t.y
                }, i.update(!0), i.pivot())), e
            }
        }),
        Ze = Ee,
        Xe = Ge;
    Xe.positioners = Ze;
    var Ke = ut.valueOrDefault;

    function $e() {
        return ut.merge({}, [].slice.call(arguments), {
            merger: function(t, e, i, n) {
                if ("xAxes" === t || "yAxes" === t) {
                    var a, r, o, s = i[t].length;
                    for (e[t] || (e[t] = []), a = 0; a < s; ++a) o = i[t][a], r = Ke(o.type, "xAxes" === t ? "category" : "linear"), a >= e[t].length && e[t].push({}), !e[t][a].type || o.type && o.type !== e[t][a].type ? ut.merge(e[t][a], [Be.getScaleDefaults(r), o]) : ut.merge(e[t][a], o)
                } else ut._merger(t, e, i, n)
            }
        })
    }

    function Je() {
        return ut.merge({}, [].slice.call(arguments), {
            merger: function(t, e, i, n) {
                var a = e[t] || {},
                    r = i[t];
                "scales" === t ? e[t] = $e(a, r) : "scale" === t ? e[t] = ut.merge(a, [Be.getScaleDefaults(r.type), r]) : ut._merger(t, e, i, n)
            }
        })
    }

    function Qe(t) {
        return "top" === t || "bottom" === t
    }
    st._set("global", {
        elements: {},
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {
            onHover: null,
            mode: "nearest",
            intersect: !0,
            animationDuration: 400
        },
        onClick: null,
        maintainAspectRatio: !0,
        responsive: !0,
        responsiveAnimationDuration: 0
    });

    function ti(t, e) {
        return this.construct(t, e), this
    }
    ut.extend(ti.prototype, {
        construct: function(t, e) {
            var i, n, a = this;
            (n = (i = (i = e) || {}).data = i.data || {}).datasets = n.datasets || [], n.labels = n.labels || [], i.options = Je(st.global, st[i.type], i.options || {}), e = i;
            var r = Ne.acquireContext(t, e),
                o = r && r.canvas,
                s = o && o.height,
                l = o && o.width;
            a.id = ut.uid(), a.ctx = r, a.canvas = o, a.config = e, a.width = l, a.height = s, a.aspectRatio = s ? l / s : null, a.options = e.options, a._bufferedRender = !1, (a.chart = a).controller = a, ti.instances[a.id] = a, Object.defineProperty(a, "data", {
                get: function() {
                    return a.config.data
                },
                set: function(t) {
                    a.config.data = t
                }
            }), r && o ? (a.initialize(), a.update()) : console.error("Failed to create chart: can't acquire context from the given item")
        },
        initialize: function() {
            var t = this;
            return ze.notify(t, "beforeInit"), ut.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), ze.notify(t, "afterInit"), t
        },
        clear: function() {
            return ut.canvas.clear(this), this
        },
        stop: function() {
            return bt.cancelAnimation(this), this
        },
        resize: function(t) {
            var e = this,
                i = e.options,
                n = e.canvas,
                a = i.maintainAspectRatio && e.aspectRatio || null,
                r = Math.max(0, Math.floor(ut.getMaximumWidth(n))),
                o = Math.max(0, Math.floor(a ? r / a : ut.getMaximumHeight(n)));
            if ((e.width !== r || e.height !== o) && (n.width = e.width = r, n.height = e.height = o, n.style.width = r + "px", n.style.height = o + "px", ut.retinaScale(e, i.devicePixelRatio), !t)) {
                var s = {
                    width: r,
                    height: o
                };
                ze.notify(e, "resize", [s]), i.onResize && i.onResize(e, s), e.stop(), e.update({
                    duration: i.responsiveAnimationDuration
                })
            }
        },
        ensureScalesHaveIDs: function() {
            var t = this.options,
                e = t.scales || {},
                i = t.scale;
            ut.each(e.xAxes, function(t, e) {
                t.id = t.id || "x-axis-" + e
            }), ut.each(e.yAxes, function(t, e) {
                t.id = t.id || "y-axis-" + e
            }), i && (i.id = i.id || "scale")
        },
        buildOrUpdateScales: function() {
            var o = this,
                t = o.options,
                s = o.scales || {},
                e = [],
                l = Object.keys(s).reduce(function(t, e) {
                    return t[e] = !1, t
                }, {});
            t.scales && (e = e.concat((t.scales.xAxes || []).map(function(t) {
                return {
                    options: t,
                    dtype: "category",
                    dposition: "bottom"
                }
            }), (t.scales.yAxes || []).map(function(t) {
                return {
                    options: t,
                    dtype: "linear",
                    dposition: "left"
                }
            }))), t.scale && e.push({
                options: t.scale,
                dtype: "radialLinear",
                isDefault: !0,
                dposition: "chartArea"
            }), ut.each(e, function(t) {
                var e = t.options,
                    i = e.id,
                    n = Ke(e.type, t.dtype);
                Qe(e.position) !== Qe(t.dposition) && (e.position = t.dposition), l[i] = !0;
                var a = null;
                if (i in s && s[i].type === n)(a = s[i]).options = e, a.ctx = o.ctx, a.chart = o;
                else {
                    var r = Be.getScaleConstructor(n);
                    if (!r) return;
                    a = new r({
                        id: i,
                        type: n,
                        options: e,
                        ctx: o.ctx,
                        chart: o
                    }), s[a.id] = a
                }
                a.mergeTicksOptions(), t.isDefault && (o.scale = a)
            }), ut.each(l, function(t, e) {
                t || delete s[e]
            }), o.scales = s, Be.addScalesToLayout(this)
        },
        buildOrUpdateControllers: function() {
            var r = this,
                o = [];
            return ut.each(r.data.datasets, function(t, e) {
                var i = r.getDatasetMeta(e),
                    n = t.type || r.config.type;
                if (i.type && i.type !== n && (r.destroyDatasetMeta(e), i = r.getDatasetMeta(e)), i.type = n, i.controller) i.controller.updateIndex(e), i.controller.linkScales();
                else {
                    var a = de[i.type];
                    if (void 0 === a) throw new Error('"' + i.type + '" is not a chart type.');
                    i.controller = new a(r, e), o.push(i.controller)
                }
            }, r), o
        },
        resetElements: function() {
            var i = this;
            ut.each(i.data.datasets, function(t, e) {
                i.getDatasetMeta(e).controller.reset()
            }, i)
        },
        reset: function() {
            this.resetElements(), this.tooltip.initialize()
        },
        update: function(t) {
            var e, i, n = this;
            if (t && "object" == typeof t || (t = {
                    duration: t,
                    lazy: arguments[1]
                }), i = (e = n).options, ut.each(e.scales, function(t) {
                    _e.removeBox(e, t)
                }), i = Je(st.global, st[e.config.type], i), e.options = e.config.options = i, e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.tooltip._options = i.tooltips, e.tooltip.initialize(), ze._invalidate(n), !1 !== ze.notify(n, "beforeUpdate")) {
                n.tooltip._data = n.data;
                var a = n.buildOrUpdateControllers();
                ut.each(n.data.datasets, function(t, e) {
                    n.getDatasetMeta(e).controller.buildOrUpdateElements()
                }, n), n.updateLayout(), n.options.animation && n.options.animation.duration && ut.each(a, function(t) {
                    t.reset()
                }), n.updateDatasets(), n.tooltip.initialize(), n.lastActive = [], ze.notify(n, "afterUpdate"), n._bufferedRender ? n._bufferedRequest = {
                    duration: t.duration,
                    easing: t.easing,
                    lazy: t.lazy
                } : n.render(t)
            }
        },
        updateLayout: function() {
            !1 !== ze.notify(this, "beforeLayout") && (_e.update(this, this.width, this.height), ze.notify(this, "afterScaleUpdate"), ze.notify(this, "afterLayout"))
        },
        updateDatasets: function() {
            if (!1 !== ze.notify(this, "beforeDatasetsUpdate")) {
                for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                ze.notify(this, "afterDatasetsUpdate")
            }
        },
        updateDataset: function(t) {
            var e = this.getDatasetMeta(t),
                i = {
                    meta: e,
                    index: t
                };
            !1 !== ze.notify(this, "beforeDatasetUpdate", [i]) && (e.controller.update(), ze.notify(this, "afterDatasetUpdate", [i]))
        },
        render: function(t) {
            var e = this;
            t && "object" == typeof t || (t = {
                duration: t,
                lazy: arguments[1]
            });
            var i = e.options.animation,
                n = Ke(t.duration, i && i.duration),
                a = t.lazy;
            if (!1 !== ze.notify(e, "beforeRender")) {
                var r = function(t) {
                    ze.notify(e, "afterRender"), ut.callback(i && i.onComplete, [t], e)
                };
                if (i && n) {
                    var o = new vt({
                        numSteps: n / 16.66,
                        easing: t.easing || i.easing,
                        render: function(t, e) {
                            var i = ut.easing.effects[e.easing],
                                n = e.currentStep,
                                a = n / e.numSteps;
                            t.draw(i(a), a, n)
                        },
                        onAnimationProgress: i.onProgress,
                        onAnimationComplete: r
                    });
                    bt.addAnimation(e, o, n, a)
                } else e.draw(), r(new vt({
                    numSteps: 0,
                    chart: e
                }));
                return e
            }
        },
        draw: function(t) {
            var e = this;
            e.clear(), ut.isNullOrUndef(t) && (t = 1), e.transition(t), e.width <= 0 || e.height <= 0 || !1 !== ze.notify(e, "beforeDraw", [t]) && (ut.each(e.boxes, function(t) {
                t.draw(e.chartArea)
            }, e), e.drawDatasets(t), e._drawTooltip(t), ze.notify(e, "afterDraw", [t]))
        },
        transition: function(t) {
            for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
            this.tooltip.transition(t)
        },
        drawDatasets: function(t) {
            var e = this;
            if (!1 !== ze.notify(e, "beforeDatasetsDraw", [t])) {
                for (var i = (e.data.datasets || []).length - 1; 0 <= i; --i) e.isDatasetVisible(i) && e.drawDataset(i, t);
                ze.notify(e, "afterDatasetsDraw", [t])
            }
        },
        drawDataset: function(t, e) {
            var i = this.getDatasetMeta(t),
                n = {
                    meta: i,
                    index: t,
                    easingValue: e
                };
            !1 !== ze.notify(this, "beforeDatasetDraw", [n]) && (i.controller.draw(e), ze.notify(this, "afterDatasetDraw", [n]))
        },
        _drawTooltip: function(t) {
            var e = this.tooltip,
                i = {
                    tooltip: e,
                    easingValue: t
                };
            !1 !== ze.notify(this, "beforeTooltipDraw", [i]) && (e.draw(), ze.notify(this, "afterTooltipDraw", [i]))
        },
        getElementAtEvent: function(t) {
            return me.modes.single(this, t)
        },
        getElementsAtEvent: function(t) {
            return me.modes.label(this, t, {
                intersect: !0
            })
        },
        getElementsAtXAxis: function(t) {
            return me.modes["x-axis"](this, t, {
                intersect: !0
            })
        },
        getElementsAtEventForMode: function(t, e, i) {
            var n = me.modes[e];
            return "function" == typeof n ? n(this, t, i) : []
        },
        getDatasetAtEvent: function(t) {
            return me.modes.dataset(this, t, {
                intersect: !0
            })
        },
        getDatasetMeta: function(t) {
            var e = this.data.datasets[t];
            e._meta || (e._meta = {});
            var i = e._meta[this.id];
            return i = i || (e._meta[this.id] = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null
            })
        },
        getVisibleDatasetCount: function() {
            for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;
            return t
        },
        isDatasetVisible: function(t) {
            var e = this.getDatasetMeta(t);
            return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
        },
        generateLegend: function() {
            return this.options.legendCallback(this)
        },
        destroyDatasetMeta: function(t) {
            var e = this.id,
                i = this.data.datasets[t],
                n = i._meta && i._meta[e];
            n && (n.controller.destroy(), delete i._meta[e])
        },
        destroy: function() {
            var t, e, i = this,
                n = i.canvas;
            for (i.stop(), t = 0, e = i.data.datasets.length; t < e; ++t) i.destroyDatasetMeta(t);
            n && (i.unbindEvents(), ut.canvas.clear(i), Ne.releaseContext(i.ctx), i.canvas = null, i.ctx = null), ze.notify(i, "destroy"), delete ti.instances[i.id]
        },
        toBase64Image: function() {
            return this.canvas.toDataURL.apply(this.canvas, arguments)
        },
        initToolTip: function() {
            var t = this;
            t.tooltip = new Xe({
                _chart: t,
                _chartInstance: t,
                _data: t.data,
                _options: t.options.tooltips
            }, t)
        },
        bindEvents: function() {
            var e = this,
                i = e._listeners = {},
                n = function() {
                    e.eventHandler.apply(e, arguments)
                };
            ut.each(e.options.events, function(t) {
                Ne.addEventListener(e, t, n), i[t] = n
            }), e.options.responsive && (n = function() {
                e.resize()
            }, Ne.addEventListener(e, "resize", n), i.resize = n)
        },
        unbindEvents: function() {
            var i = this,
                t = i._listeners;
            t && (delete i._listeners, ut.each(t, function(t, e) {
                Ne.removeEventListener(i, e, t)
            }))
        },
        updateHoverStyle: function(t, e, i) {
            var n, a, r, o = i ? "setHoverStyle" : "removeHoverStyle";
            for (a = 0, r = t.length; a < r; ++a)(n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[o](n)
        },
        eventHandler: function(t) {
            var e = this,
                i = e.tooltip;
            if (!1 !== ze.notify(e, "beforeEvent", [t])) {
                e._bufferedRender = !0, e._bufferedRequest = null;
                var n = e.handleEvent(t);
                i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), ze.notify(e, "afterEvent", [t]);
                var a = e._bufferedRequest;
                return a ? e.render(a) : n && !e.animating && (e.stop(), e.render({
                    duration: e.options.hover.animationDuration,
                    lazy: !0
                })), e._bufferedRender = !1, e._bufferedRequest = null, e
            }
        },
        handleEvent: function(t) {
            var e, i = this,
                n = i.options || {},
                a = n.hover;
            return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, a.mode, a), ut.callback(n.onHover || n.hover.onHover, [t.native, i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t.native, i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, a.mode, !1), i.active.length && a.mode && i.updateHoverStyle(i.active, a.mode, !0), e = !ut.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e
        }
    }), ti.instances = {};
    var ei = ti;

    function ii() {
        throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
    }

    function ni(t) {
        this.options = t || {}
    }(ti.Controller = ti).types = {}, ut.configMerge = Je, ut.scaleMerge = $e, ut.extend(ni.prototype, {
        formats: ii,
        parse: ii,
        format: ii,
        add: ii,
        diff: ii,
        startOf: ii,
        endOf: ii,
        _create: function(t) {
            return t
        }
    }), ni.override = function(t) {
        ut.extend(ni.prototype, t)
    };
    var ai = {
            _date: ni
        },
        ri = {
            formatters: {
                values: function(t) {
                    return ut.isArray(t) ? t : "" + t
                },
                linear: function(t, e, i) {
                    var n = 3 < i.length ? i[2] - i[1] : i[1] - i[0];
                    1 < Math.abs(n) && t !== Math.floor(t) && (n = t - Math.floor(t));
                    var a = ut.log10(Math.abs(n)),
                        r = "";
                    if (0 !== t)
                        if (Math.max(Math.abs(i[0]), Math.abs(i[i.length - 1])) < 1e-4) {
                            var o = ut.log10(Math.abs(t));
                            r = t.toExponential(Math.floor(o) - Math.floor(a))
                        } else {
                            var s = -1 * Math.floor(a);
                            s = Math.max(Math.min(s, 20), 0), r = t.toFixed(s)
                        }
                    else r = "0";
                    return r
                },
                logarithmic: function(t, e, i) {
                    var n = t / Math.pow(10, Math.floor(ut.log10(t)));
                    return 0 === t ? "0" : 1 == n || 2 == n || 5 == n || 0 === e || e === i.length - 1 ? t.toExponential() : ""
                }
            }
        },
        oi = ut.valueOrDefault,
        si = ut.valueAtIndexOrDefault;

    function li(t) {
        var e, i, n = [];
        for (e = 0, i = t.length; e < i; ++e) n.push(t[e].label);
        return n
    }

    function di(t, e, i) {
        return ut.isArray(e) ? ut.longestText(t, i, e) : t.measureText(e).width
    }
    st._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            zeroLineBorderDash: [],
            zeroLineBorderDashOffset: 0,
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0
        },
        scaleLabel: {
            display: !1,
            labelString: "",
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 0,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: ri.formatters.values,
            minor: {},
            major: {}
        }
    });
    var ui = pt.extend({
            getPadding: function() {
                return {
                    left: this.paddingLeft || 0,
                    top: this.paddingTop || 0,
                    right: this.paddingRight || 0,
                    bottom: this.paddingBottom || 0
                }
            },
            getTicks: function() {
                return this._ticks
            },
            mergeTicksOptions: function() {
                var t = this.options.ticks;
                for (var e in !1 === t.minor && (t.minor = {
                        display: !1
                    }), !1 === t.major && (t.major = {
                        display: !1
                    }), t) "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]))
            },
            beforeUpdate: function() {
                ut.callback(this.options.beforeUpdate, [this])
            },
            update: function(t, e, i) {
                var n, a, r, o, s, l, d = this;
                for (d.beforeUpdate(), d.maxWidth = t, d.maxHeight = e, d.margins = ut.extend({
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, i), d._maxLabelLines = 0, d.longestLabelWidth = 0, d.longestTextCache = d.longestTextCache || {}, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), s = d.buildTicks() || [], s = d.afterBuildTicks(s) || s, d.beforeTickToLabelConversion(), r = d.convertTicksToLabels(s) || d.ticks, d.afterTickToLabelConversion(), n = 0, a = (d.ticks = r).length; n < a; ++n) o = r[n], (l = s[n]) ? l.label = o : s.push(l = {
                    label: o,
                    major: !1
                });
                return d._ticks = s, d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d.afterUpdate(), d.minSize
            },
            afterUpdate: function() {
                ut.callback(this.options.afterUpdate, [this])
            },
            beforeSetDimensions: function() {
                ut.callback(this.options.beforeSetDimensions, [this])
            },
            setDimensions: function() {
                var t = this;
                t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
            },
            afterSetDimensions: function() {
                ut.callback(this.options.afterSetDimensions, [this])
            },
            beforeDataLimits: function() {
                ut.callback(this.options.beforeDataLimits, [this])
            },
            determineDataLimits: ut.noop,
            afterDataLimits: function() {
                ut.callback(this.options.afterDataLimits, [this])
            },
            beforeBuildTicks: function() {
                ut.callback(this.options.beforeBuildTicks, [this])
            },
            buildTicks: ut.noop,
            afterBuildTicks: function(t) {
                var e = this;
                return ut.isArray(t) && t.length ? ut.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = ut.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks, t)
            },
            beforeTickToLabelConversion: function() {
                ut.callback(this.options.beforeTickToLabelConversion, [this])
            },
            convertTicksToLabels: function() {
                var t = this.options.ticks;
                this.ticks = this.ticks.map(t.userCallback || t.callback, this)
            },
            afterTickToLabelConversion: function() {
                ut.callback(this.options.afterTickToLabelConversion, [this])
            },
            beforeCalculateTickRotation: function() {
                ut.callback(this.options.beforeCalculateTickRotation, [this])
            },
            calculateTickRotation: function() {
                var t = this,
                    e = t.ctx,
                    i = t.options.ticks,
                    n = li(t._ticks),
                    a = ut.options._parseFont(i);
                e.font = a.string;
                var r = i.minRotation || 0;
                if (n.length && t.options.display && t.isHorizontal())
                    for (var o, s = ut.longestText(e, a.string, n, t.longestTextCache), l = s, d = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; d < l && r < i.maxRotation;) {
                        var u = ut.toRadians(r);
                        if (o = Math.cos(u), Math.sin(u) * s > t.maxHeight) {
                            r--;
                            break
                        }
                        r++, l = o * s
                    }
                t.labelRotation = r
            },
            afterCalculateTickRotation: function() {
                ut.callback(this.options.afterCalculateTickRotation, [this])
            },
            beforeFit: function() {
                ut.callback(this.options.beforeFit, [this])
            },
            fit: function() {
                var t = this,
                    e = t.minSize = {
                        width: 0,
                        height: 0
                    },
                    i = li(t._ticks),
                    n = t.options,
                    a = n.ticks,
                    r = n.scaleLabel,
                    o = n.gridLines,
                    s = t._isVisible(),
                    l = n.position,
                    d = t.isHorizontal(),
                    u = ut.options._parseFont,
                    h = u(a),
                    c = n.gridLines.tickMarkLength;
                if (e.width = d ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : s && o.drawTicks ? c : 0, e.height = d ? s && o.drawTicks ? c : 0 : t.maxHeight, r.display && s) {
                    var f = u(r),
                        g = ut.options.toPadding(r.padding),
                        p = f.lineHeight + g.height;
                    d ? e.height += p : e.width += p
                }
                if (a.display && s) {
                    var m = ut.longestText(t.ctx, h.string, i, t.longestTextCache),
                        v = ut.numberOfLabelLines(i),
                        b = .5 * h.size,
                        y = t.options.ticks.padding;
                    if (t._maxLabelLines = v, t.longestLabelWidth = m, d) {
                        var x = ut.toRadians(t.labelRotation),
                            _ = Math.cos(x),
                            k = Math.sin(x) * m + h.lineHeight * v + b;
                        e.height = Math.min(t.maxHeight, e.height + k + y), t.ctx.font = h.string;
                        var w, M, S = di(t.ctx, i[0], h.string),
                            C = di(t.ctx, i[i.length - 1], h.string),
                            D = t.getPixelForTick(0) - t.left,
                            P = t.right - t.getPixelForTick(i.length - 1);
                        M = 0 !== t.labelRotation ? (w = "bottom" === l ? _ * S : _ * b, "bottom" === l ? _ * b : _ * C) : (w = S / 2, C / 2), t.paddingLeft = Math.max(w - D, 0) + 3, t.paddingRight = Math.max(M - P, 0) + 3
                    } else a.mirror ? m = 0 : m += y + b, e.width = Math.min(t.maxWidth, e.width + m), t.paddingTop = h.size / 2, t.paddingBottom = h.size / 2
                }
                t.handleMargins(), t.width = e.width, t.height = e.height
            },
            handleMargins: function() {
                var t = this;
                t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
            },
            afterFit: function() {
                ut.callback(this.options.afterFit, [this])
            },
            isHorizontal: function() {
                return "top" === this.options.position || "bottom" === this.options.position
            },
            isFullWidth: function() {
                return this.options.fullWidth
            },
            getRightValue: function(t) {
                if (ut.isNullOrUndef(t)) return NaN;
                if (("number" == typeof t || t instanceof Number) && !isFinite(t)) return NaN;
                if (t)
                    if (this.isHorizontal()) {
                        if (void 0 !== t.x) return this.getRightValue(t.x)
                    } else if (void 0 !== t.y) return this.getRightValue(t.y);
                return t
            },
            getLabelForIndex: ut.noop,
            getPixelForValue: ut.noop,
            getValueForPixel: ut.noop,
            getPixelForTick: function(t) {
                var e = this,
                    i = e.options.offset;
                if (e.isHorizontal()) {
                    var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
                        a = n * t + e.paddingLeft;
                    return i && (a += n / 2), e.left + a + (e.isFullWidth() ? e.margins.left : 0)
                }
                var r = e.height - (e.paddingTop + e.paddingBottom);
                return e.top + t * (r / (e._ticks.length - 1))
            },
            getPixelForDecimal: function(t) {
                var e = this;
                if (e.isHorizontal()) {
                    var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft;
                    return e.left + i + (e.isFullWidth() ? e.margins.left : 0)
                }
                return e.top + t * e.height
            },
            getBasePixel: function() {
                return this.getPixelForValue(this.getBaseValue())
            },
            getBaseValue: function() {
                var t = this.min,
                    e = this.max;
                return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0
            },
            _autoSkip: function(t) {
                var e, i, n = this,
                    a = n.isHorizontal(),
                    r = n.options.ticks.minor,
                    o = t.length,
                    s = !1,
                    l = r.maxTicksLimit,
                    d = n._tickSize() * (o - 1),
                    u = a ? n.width - (n.paddingLeft + n.paddingRight) : n.height - (n.paddingTop + n.PaddingBottom),
                    h = [];
                for (u < d && (s = 1 + Math.floor(d / u)), l < o && (s = Math.max(s, 1 + Math.floor(o / l))), e = 0; e < o; e++) i = t[e], 1 < s && 0 < e % s && delete i.label, h.push(i);
                return h
            },
            _tickSize: function() {
                var t = this,
                    e = t.isHorizontal(),
                    i = t.options.ticks.minor,
                    n = ut.toRadians(t.labelRotation),
                    a = Math.abs(Math.cos(n)),
                    r = Math.abs(Math.sin(n)),
                    o = i.autoSkipPadding || 0,
                    s = t.longestLabelWidth + o || 0,
                    l = ut.options._parseFont(i),
                    d = t._maxLabelLines * l.lineHeight + o || 0;
                return e ? s * r < d * a ? s / a : d / r : d * r < s * a ? d / a : s / r
            },
            _isVisible: function() {
                var t, e, i, n = this.chart,
                    a = this.options.display;
                if ("auto" !== a) return !!a;
                for (t = 0, e = n.data.datasets.length; t < e; ++t)
                    if (n.isDatasetVisible(t) && ((i = n.getDatasetMeta(t)).xAxisID === this.id || i.yAxisID === this.id)) return !0;
                return !1
            },
            draw: function(D) {
                var P = this,
                    T = P.options;
                if (P._isVisible()) {
                    var t, I, A, F = P.chart,
                        o = P.ctx,
                        e = st.global.defaultFontColor,
                        s = T.ticks.minor,
                        i = T.ticks.major || s,
                        O = T.gridLines,
                        n = T.scaleLabel,
                        L = T.position,
                        R = 0 !== P.labelRotation,
                        W = s.mirror,
                        N = P.isHorizontal(),
                        a = ut.options._parseFont,
                        r = s.display && s.autoSkip ? P._autoSkip(P.getTicks()) : P.getTicks(),
                        l = oi(s.fontColor, e),
                        d = a(s),
                        z = d.lineHeight,
                        u = oi(i.fontColor, e),
                        h = a(i),
                        B = s.padding,
                        V = s.labelOffset,
                        E = O.drawTicks ? O.tickMarkLength : 0,
                        c = oi(n.fontColor, e),
                        f = a(n),
                        g = ut.options.toPadding(n.padding),
                        H = ut.toRadians(P.labelRotation),
                        Y = [],
                        j = O.drawBorder ? si(O.lineWidth, 0, 0) : 0,
                        U = ut._alignPixel;
                    if (A = "top" === L ? (t = U(F, P.bottom, j), I = P.bottom - E, t - j / 2) : "bottom" === L ? (t = U(F, P.top, j), I = t + j / 2, P.top + E) : "left" === L ? (t = U(F, P.right, j), I = P.right - E, t - j / 2) : (t = U(F, P.left, j), I = t + j / 2, P.left + E), ut.each(r, function(t, e) {
                            if (!ut.isNullOrUndef(t.label)) {
                                var i, n, a, r, o, s, l, d, u, h, c, f, g, p, m, v, b = t.label;
                                r = e === P.zeroLineIndex && T.offset === O.offsetGridLines ? (i = O.zeroLineWidth, n = O.zeroLineColor, a = O.zeroLineBorderDash || [], O.zeroLineBorderDashOffset || 0) : (i = si(O.lineWidth, e), n = si(O.color, e), a = O.borderDash || [], O.borderDashOffset || 0);
                                var y = ut.isArray(b) ? b.length : 1,
                                    x = (w = P, M = e, S = O.offsetGridLines, C = w.getPixelForTick(M), S && (1 === w.getTicks().length ? C -= w.isHorizontal() ? Math.max(C - w.left, w.right - C) : Math.max(C - w.top, w.bottom - C) : C -= 0 === M ? (w.getPixelForTick(1) - C) / 2 : (C - w.getPixelForTick(M - 1)) / 2), C);
                                if (N) {
                                    var _ = E + B;
                                    x < P.left - 1e-7 && (n = "rgba(0,0,0,0)"), o = l = u = c = U(F, x, i), s = I, d = A, g = P.getPixelForTick(e) + V, p = "top" === L ? (h = U(F, D.top, j) + j / 2, f = D.bottom, m = ((R ? 1 : .5) - y) * z, v = R ? "left" : "center", P.bottom - _) : (h = D.top, f = U(F, D.bottom, j) - j / 2, m = (R ? 0 : .5) * z, v = R ? "right" : "center", P.top + _)
                                } else {
                                    var k = (W ? 0 : E) + B;
                                    x < P.top - 1e-7 && (n = "rgba(0,0,0,0)"), o = I, l = A, s = d = h = f = U(F, x, i), p = P.getPixelForTick(e) + V, m = (1 - y) * z / 2, g = "left" === L ? (u = U(F, D.left, j) + j / 2, c = D.right, v = W ? "left" : "right", P.right - k) : (u = D.left, c = U(F, D.right, j) - j / 2, v = W ? "right" : "left", P.left + k)
                                }
                                Y.push({
                                    tx1: o,
                                    ty1: s,
                                    tx2: l,
                                    ty2: d,
                                    x1: u,
                                    y1: h,
                                    x2: c,
                                    y2: f,
                                    labelX: g,
                                    labelY: p,
                                    glWidth: i,
                                    glColor: n,
                                    glBorderDash: a,
                                    glBorderDashOffset: r,
                                    rotation: -1 * H,
                                    label: b,
                                    major: t.major,
                                    textOffset: m,
                                    textAlign: v
                                })
                            }
                            var w, M, S, C
                        }), ut.each(Y, function(t) {
                            var e = t.glWidth,
                                i = t.glColor;
                            if (O.display && e && i && (o.save(), o.lineWidth = e, o.strokeStyle = i, o.setLineDash && (o.setLineDash(t.glBorderDash), o.lineDashOffset = t.glBorderDashOffset), o.beginPath(), O.drawTicks && (o.moveTo(t.tx1, t.ty1), o.lineTo(t.tx2, t.ty2)), O.drawOnChartArea && (o.moveTo(t.x1, t.y1), o.lineTo(t.x2, t.y2)), o.stroke(), o.restore()), s.display) {
                                o.save(), o.translate(t.labelX, t.labelY), o.rotate(t.rotation), o.font = t.major ? h.string : d.string, o.fillStyle = t.major ? u : l, o.textBaseline = "middle", o.textAlign = t.textAlign;
                                var n = t.label,
                                    a = t.textOffset;
                                if (ut.isArray(n))
                                    for (var r = 0; r < n.length; ++r) o.fillText("" + n[r], 0, a), a += z;
                                else o.fillText(n, 0, a);
                                o.restore()
                            }
                        }), n.display) {
                        var p, m, v = 0,
                            b = f.lineHeight / 2;
                        if (N) p = P.left + (P.right - P.left) / 2, m = "bottom" === L ? P.bottom - b - g.bottom : P.top + b + g.top;
                        else {
                            var y = "left" === L;
                            p = y ? P.left + b + g.top : P.right - b - g.top, m = P.top + (P.bottom - P.top) / 2, v = y ? -.5 * Math.PI : .5 * Math.PI
                        }
                        o.save(), o.translate(p, m), o.rotate(v), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = c, o.font = f.string, o.fillText(n.labelString, 0, 0), o.restore()
                    }
                    if (j) {
                        var x, _, k, w, M = j,
                            S = si(O.lineWidth, r.length - 1, 0);
                        N ? (x = U(F, P.left, M) - M / 2, _ = U(F, P.right, S) + S / 2, k = w = t) : (k = U(F, P.top, M) - M / 2, w = U(F, P.bottom, S) + S / 2, x = _ = t), o.lineWidth = j, o.strokeStyle = si(O.color, 0), o.beginPath(), o.moveTo(x, k), o.lineTo(_, w), o.stroke()
                    }
                }
            }
        }),
        hi = ui.extend({
            getLabels: function() {
                var t = this.chart.data;
                return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
            },
            determineDataLimits: function() {
                var t, e = this,
                    i = e.getLabels();
                e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex]
            },
            buildTicks: function() {
                var t = this,
                    e = t.getLabels();
                t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
            },
            getLabelForIndex: function(t, e) {
                var i = this,
                    n = i.chart;
                return n.getDatasetMeta(e).controller._getValueScaleId() === i.id ? i.getRightValue(n.data.datasets[e].data[t]) : i.ticks[t - i.minIndex]
            },
            getPixelForValue: function(t, e) {
                var i, n = this,
                    a = n.options.offset,
                    r = Math.max(n.maxIndex + 1 - n.minIndex - (a ? 0 : 1), 1);
                if (null != t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || void 0 !== t && isNaN(e)) {
                    t = i || t;
                    var o = n.getLabels().indexOf(t);
                    e = -1 !== o ? o : e
                }
                if (n.isHorizontal()) {
                    var s = n.width / r,
                        l = s * (e - n.minIndex);
                    return a && (l += s / 2), n.left + l
                }
                var d = n.height / r,
                    u = d * (e - n.minIndex);
                return a && (u += d / 2), n.top + u
            },
            getPixelForTick: function(t) {
                return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
            },
            getValueForPixel: function(t) {
                var e = this,
                    i = e.options.offset,
                    n = Math.max(e._ticks.length - (i ? 0 : 1), 1),
                    a = e.isHorizontal(),
                    r = (a ? e.width : e.height) / n;
                return t -= a ? e.left : e.top, i && (t -= r / 2), (t <= 0 ? 0 : Math.round(t / r)) + e.minIndex
            },
            getBasePixel: function() {
                return this.bottom
            }
        });
    hi._defaults = {
        position: "bottom"
    };
    var ci = ut.noop,
        fi = ut.isNullOrUndef,
        gi = ui.extend({
            getRightValue: function(t) {
                return "string" == typeof t ? +t : ui.prototype.getRightValue.call(this, t)
            },
            handleTickRangeOptions: function() {
                var t = this,
                    e = t.options.ticks;
                if (e.beginAtZero) {
                    var i = ut.sign(t.min),
                        n = ut.sign(t.max);
                    i < 0 && n < 0 ? t.max = 0 : 0 < i && 0 < n && (t.min = 0)
                }
                var a = void 0 !== e.min || void 0 !== e.suggestedMin,
                    r = void 0 !== e.max || void 0 !== e.suggestedMax;
                void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), a != r && t.min >= t.max && (a ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
            },
            getTickLimit: function() {
                var t, e = this.options.ticks,
                    i = e.stepSize,
                    n = e.maxTicksLimit;
                return i ? t = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1 : (t = this._computeTickLimit(), n = n || 11), n && (t = Math.min(n, t)), t
            },
            _computeTickLimit: function() {
                return Number.POSITIVE_INFINITY
            },
            handleDirectionalChanges: ci,
            buildTicks: function() {
                var t = this,
                    e = t.options.ticks,
                    i = t.getTickLimit(),
                    v = {
                        maxTicks: i = Math.max(2, i),
                        min: e.min,
                        max: e.max,
                        precision: e.precision,
                        stepSize: ut.valueOrDefault(e.fixedStepSize, e.stepSize)
                    },
                    n = t.ticks = function(t, e) {
                        var i, n, a, r, o = [],
                            s = v.stepSize,
                            l = s || 1,
                            d = v.maxTicks - 1,
                            u = v.min,
                            h = v.max,
                            c = v.precision,
                            f = e.min,
                            g = e.max,
                            p = ut.niceNum((g - f) / d / l) * l;
                        if (p < 1e-14 && fi(u) && fi(h)) return [f, g];
                        (r = Math.ceil(g / p) - Math.floor(f / p)) > d && (p = ut.niceNum(r * p / d / l) * l), s || fi(c) ? i = Math.pow(10, ut._decimalPlaces(p)) : (i = Math.pow(10, c), p = Math.ceil(p * i) / i), n = Math.floor(f / p) * p, a = Math.ceil(g / p) * p, s && (!fi(u) && ut.almostWhole(u / p, p / 1e3) && (n = u), !fi(h) && ut.almostWhole(h / p, p / 1e3) && (a = h)), r = (a - n) / p, r = ut.almostEquals(r, Math.round(r), p / 1e3) ? Math.round(r) : Math.ceil(r), n = Math.round(n * i) / i, a = Math.round(a * i) / i, o.push(fi(u) ? n : u);
                        for (var m = 1; m < r; ++m) o.push(Math.round((n + m * p) * i) / i);
                        return o.push(fi(h) ? a : h), o
                    }(0, t);
                t.handleDirectionalChanges(), t.max = ut.max(n), t.min = ut.min(n), e.reverse ? (n.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
            },
            convertTicksToLabels: function() {
                var t = this;
                t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), ui.prototype.convertTicksToLabels.call(t)
            }
        }),
        pi = {
            position: "left",
            ticks: {
                callback: ri.formatters.linear
            }
        },
        mi = gi.extend({
            determineDataLimits: function() {
                var o = this,
                    s = o.options,
                    l = o.chart,
                    t = l.data.datasets,
                    e = o.isHorizontal();

                function d(t) {
                    return e ? t.xAxisID === o.id : t.yAxisID === o.id
                }
                o.min = null, o.max = null;
                var n = s.stacked;
                if (void 0 === n && ut.each(t, function(t, e) {
                        if (!n) {
                            var i = l.getDatasetMeta(e);
                            l.isDatasetVisible(e) && d(i) && void 0 !== i.stack && (n = !0)
                        }
                    }), s.stacked || n) {
                    var u = {};
                    ut.each(t, function(t, e) {
                        var n = l.getDatasetMeta(e),
                            i = [n.type, void 0 === s.stacked && void 0 === n.stack ? e : "", n.stack].join(".");
                        void 0 === u[i] && (u[i] = {
                            positiveValues: [],
                            negativeValues: []
                        });
                        var a = u[i].positiveValues,
                            r = u[i].negativeValues;
                        l.isDatasetVisible(e) && d(n) && ut.each(t.data, function(t, e) {
                            var i = +o.getRightValue(t);
                            isNaN(i) || n.data[e].hidden || (a[e] = a[e] || 0, r[e] = r[e] || 0, s.relativePoints ? a[e] = 100 : i < 0 ? r[e] += i : a[e] += i)
                        })
                    }), ut.each(u, function(t) {
                        var e = t.positiveValues.concat(t.negativeValues),
                            i = ut.min(e),
                            n = ut.max(e);
                        o.min = null === o.min ? i : Math.min(o.min, i), o.max = null === o.max ? n : Math.max(o.max, n)
                    })
                } else ut.each(t, function(t, e) {
                    var n = l.getDatasetMeta(e);
                    l.isDatasetVisible(e) && d(n) && ut.each(t.data, function(t, e) {
                        var i = +o.getRightValue(t);
                        isNaN(i) || n.data[e].hidden || (null === o.min ? o.min = i : i < o.min && (o.min = i), null === o.max ? o.max = i : i > o.max && (o.max = i))
                    })
                });
                o.min = isFinite(o.min) && !isNaN(o.min) ? o.min : 0, o.max = isFinite(o.max) && !isNaN(o.max) ? o.max : 1, this.handleTickRangeOptions()
            },
            _computeTickLimit: function() {
                var t;
                return this.isHorizontal() ? Math.ceil(this.width / 40) : (t = ut.options._parseFont(this.options.ticks), Math.ceil(this.height / t.lineHeight))
            },
            handleDirectionalChanges: function() {
                this.isHorizontal() || this.ticks.reverse()
            },
            getLabelForIndex: function(t, e) {
                return +this.getRightValue(this.chart.data.datasets[e].data[t])
            },
            getPixelForValue: function(t) {
                var e = this,
                    i = e.start,
                    n = +e.getRightValue(t),
                    a = e.end - i;
                return e.isHorizontal() ? e.left + e.width / a * (n - i) : e.bottom - e.height / a * (n - i)
            },
            getValueForPixel: function(t) {
                var e = this,
                    i = e.isHorizontal(),
                    n = i ? e.width : e.height,
                    a = (i ? t - e.left : e.bottom - t) / n;
                return e.start + (e.end - e.start) * a
            },
            getPixelForTick: function(t) {
                return this.getPixelForValue(this.ticksAsNumbers[t])
            }
        }),
        vi = pi;
    mi._defaults = vi;
    var bi = ut.valueOrDefault,
        yi = {
            position: "left",
            ticks: {
                callback: ri.formatters.logarithmic
            }
        };

    function xi(t, e) {
        return ut.isFinite(t) && 0 <= t ? t : e
    }
    var _i = ui.extend({
            determineDataLimits: function() {
                var o = this,
                    i = o.options,
                    s = o.chart,
                    t = s.data.datasets,
                    e = o.isHorizontal();

                function l(t) {
                    return e ? t.xAxisID === o.id : t.yAxisID === o.id
                }
                o.min = null, o.max = null, o.minNotZero = null;
                var n = i.stacked;
                if (void 0 === n && ut.each(t, function(t, e) {
                        if (!n) {
                            var i = s.getDatasetMeta(e);
                            s.isDatasetVisible(e) && l(i) && void 0 !== i.stack && (n = !0)
                        }
                    }), i.stacked || n) {
                    var d = {};
                    ut.each(t, function(t, e) {
                        var a = s.getDatasetMeta(e),
                            r = [a.type, void 0 === i.stacked && void 0 === a.stack ? e : "", a.stack].join(".");
                        s.isDatasetVisible(e) && l(a) && (void 0 === d[r] && (d[r] = []), ut.each(t.data, function(t, e) {
                            var i = d[r],
                                n = +o.getRightValue(t);
                            isNaN(n) || a.data[e].hidden || n < 0 || (i[e] = i[e] || 0, i[e] += n)
                        }))
                    }), ut.each(d, function(t) {
                        if (0 < t.length) {
                            var e = ut.min(t),
                                i = ut.max(t);
                            o.min = null === o.min ? e : Math.min(o.min, e), o.max = null === o.max ? i : Math.max(o.max, i)
                        }
                    })
                } else ut.each(t, function(t, e) {
                    var n = s.getDatasetMeta(e);
                    s.isDatasetVisible(e) && l(n) && ut.each(t.data, function(t, e) {
                        var i = +o.getRightValue(t);
                        isNaN(i) || n.data[e].hidden || i < 0 || (null === o.min ? o.min = i : i < o.min && (o.min = i), null === o.max ? o.max = i : i > o.max && (o.max = i), 0 != i && (null === o.minNotZero || i < o.minNotZero) && (o.minNotZero = i))
                    })
                });
                this.handleTickRangeOptions()
            },
            handleTickRangeOptions: function() {
                var t = this,
                    e = t.options.ticks;
                t.min = xi(e.min, t.min), t.max = xi(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(ut.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(ut.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(ut.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(ut.log10(t.min)) + 1) : 10), null === t.minNotZero && (0 < t.min ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(ut.log10(t.max))) : t.minNotZero = 1)
            },
            buildTicks: function() {
                var t = this,
                    e = t.options.ticks,
                    i = !t.isHorizontal(),
                    n = {
                        min: xi(e.min),
                        max: xi(e.max)
                    },
                    a = t.ticks = function(t, e) {
                        var i, n, a = [],
                            r = bi(t.min, Math.pow(10, Math.floor(ut.log10(e.min)))),
                            o = Math.floor(ut.log10(e.max)),
                            s = Math.ceil(e.max / Math.pow(10, o));
                        0 === r ? (i = Math.floor(ut.log10(e.minNotZero)), n = Math.floor(e.minNotZero / Math.pow(10, i)), a.push(r), r = n * Math.pow(10, i)) : (i = Math.floor(ut.log10(r)), n = Math.floor(r / Math.pow(10, i)));
                        for (var l = i < 0 ? Math.pow(10, Math.abs(i)) : 1; a.push(r), 10 == ++n && (n = 1, l = 0 <= ++i ? 1 : l), r = Math.round(n * Math.pow(10, i) * l) / l, i < o || i === o && n < s;);
                        var d = bi(t.max, r);
                        return a.push(d), a
                    }(n, t);
                t.max = ut.max(a), t.min = ut.min(a), e.reverse ? (i = !i, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i && a.reverse()
            },
            convertTicksToLabels: function() {
                this.tickValues = this.ticks.slice(), ui.prototype.convertTicksToLabels.call(this)
            },
            getLabelForIndex: function(t, e) {
                return +this.getRightValue(this.chart.data.datasets[e].data[t])
            },
            getPixelForTick: function(t) {
                return this.getPixelForValue(this.tickValues[t])
            },
            _getFirstTickValue: function(t) {
                var e = Math.floor(ut.log10(t));
                return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
            },
            getPixelForValue: function(t) {
                var e, i, n, a, r, o = this,
                    s = o.options.ticks,
                    l = s.reverse,
                    d = ut.log10,
                    u = o._getFirstTickValue(o.minNotZero),
                    h = 0;
                return t = +o.getRightValue(t), r = l ? (n = o.end, a = o.start, -1) : (n = o.start, a = o.end, 1), i = o.isHorizontal() ? (e = o.width, l ? o.right : o.left) : (e = o.height, r *= -1, l ? o.top : o.bottom), t !== n && (0 === n && (e -= h = bi(s.fontSize, st.global.defaultFontSize), n = u), 0 !== t && (h += e / (d(a) - d(n)) * (d(t) - d(n))), i += r * h), i
            },
            getValueForPixel: function(t) {
                var e, i, n, a, r = this,
                    o = r.options.ticks,
                    s = o.reverse,
                    l = ut.log10,
                    d = r._getFirstTickValue(r.minNotZero);
                if (n = s ? (i = r.end, r.start) : (i = r.start, r.end), (a = r.isHorizontal() ? (e = r.width, s ? r.right - t : t - r.left) : (e = r.height, s ? t - r.top : r.bottom - t)) !== i) {
                    if (0 === i) {
                        var u = bi(o.fontSize, st.global.defaultFontSize);
                        a -= u, e -= u, i = d
                    }
                    a *= l(n) - l(i), a /= e, a = Math.pow(10, l(i) + a)
                }
                return a
            }
        }),
        ki = yi;
    _i._defaults = ki;
    var wi = ut.valueOrDefault,
        Mi = ut.valueAtIndexOrDefault,
        Si = ut.options.resolve,
        Ci = {
            display: !0,
            animate: !0,
            position: "chartArea",
            angleLines: {
                display: !0,
                color: "rgba(0, 0, 0, 0.1)",
                lineWidth: 1,
                borderDash: [],
                borderDashOffset: 0
            },
            gridLines: {
                circular: !1
            },
            ticks: {
                showLabelBackdrop: !0,
                backdropColor: "rgba(255,255,255,0.75)",
                backdropPaddingY: 2,
                backdropPaddingX: 2,
                callback: ri.formatters.linear
            },
            pointLabels: {
                display: !0,
                fontSize: 10,
                callback: function(t) {
                    return t
                }
            }
        };

    function Di(t) {
        var e = t.options;
        return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
    }

    function Pi(t) {
        var e = t.ticks;
        return e.display && t.display ? wi(e.fontSize, st.global.defaultFontSize) + 2 * e.backdropPaddingY : 0
    }

    function Ti(t, e, i, n, a) {
        return t === n || t === a ? {
            start: e - i / 2,
            end: e + i / 2
        } : t < n || a < t ? {
            start: e - i,
            end: e
        } : {
            start: e,
            end: e + i
        }
    }

    function Ii(t, e, i, n) {
        var a, r, o = i.y + n / 2;
        if (ut.isArray(e))
            for (a = 0, r = e.length; a < r; ++a) t.fillText(e[a], i.x, o), o += n;
        else t.fillText(e, i.x, o)
    }

    function Ai(t) {
        return ut.isNumber(t) ? t : 0
    }
    var Fi = gi.extend({
            setDimensions: function() {
                var t = this;
                t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = Pi(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2
            },
            determineDataLimits: function() {
                var a = this,
                    i = a.chart,
                    r = Number.POSITIVE_INFINITY,
                    o = Number.NEGATIVE_INFINITY;
                ut.each(i.data.datasets, function(t, e) {
                    if (i.isDatasetVisible(e)) {
                        var n = i.getDatasetMeta(e);
                        ut.each(t.data, function(t, e) {
                            var i = +a.getRightValue(t);
                            isNaN(i) || n.data[e].hidden || (r = Math.min(i, r), o = Math.max(i, o))
                        })
                    }
                }), a.min = r === Number.POSITIVE_INFINITY ? 0 : r, a.max = o === Number.NEGATIVE_INFINITY ? 0 : o, a.handleTickRangeOptions()
            },
            _computeTickLimit: function() {
                return Math.ceil(this.drawingArea / Pi(this.options))
            },
            convertTicksToLabels: function() {
                var t = this;
                gi.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t)
            },
            getLabelForIndex: function(t, e) {
                return +this.getRightValue(this.chart.data.datasets[e].data[t])
            },
            fit: function() {
                var t = this.options;
                t.display && t.pointLabels.display ? function(t) {
                    var e, i, n, a = ut.options._parseFont(t.options.pointLabels),
                        r = {
                            l: 0,
                            r: t.width,
                            t: 0,
                            b: t.height - t.paddingTop
                        },
                        o = {};
                    t.ctx.font = a.string, t._pointLabelSizes = [];
                    var s, l, d, u = Di(t);
                    for (e = 0; e < u; e++) {
                        n = t.getPointPosition(e, t.drawingArea + 5), s = t.ctx, l = a.lineHeight, d = t.pointLabels[e] || "", i = ut.isArray(d) ? {
                            w: ut.longestText(s, s.font, d),
                            h: d.length * l
                        } : {
                            w: s.measureText(d).width,
                            h: l
                        }, t._pointLabelSizes[e] = i;
                        var h = t.getIndexAngle(e),
                            c = ut.toDegrees(h) % 360,
                            f = Ti(c, n.x, i.w, 0, 180),
                            g = Ti(c, n.y, i.h, 90, 270);
                        f.start < r.l && (r.l = f.start, o.l = h), f.end > r.r && (r.r = f.end, o.r = h), g.start < r.t && (r.t = g.start, o.t = h), g.end > r.b && (r.b = g.end, o.b = h)
                    }
                    t.setReductions(t.drawingArea, r, o)
                }(this) : this.setCenterPoint(0, 0, 0, 0)
            },
            setReductions: function(t, e, i) {
                var n = this,
                    a = e.l / Math.sin(i.l),
                    r = Math.max(e.r - n.width, 0) / Math.sin(i.r),
                    o = -e.t / Math.cos(i.t),
                    s = -Math.max(e.b - (n.height - n.paddingTop), 0) / Math.cos(i.b);
                a = Ai(a), r = Ai(r), o = Ai(o), s = Ai(s), n.drawingArea = Math.min(Math.floor(t - (a + r) / 2), Math.floor(t - (o + s) / 2)), n.setCenterPoint(a, r, o, s)
            },
            setCenterPoint: function(t, e, i, n) {
                var a = this,
                    r = a.width - e - a.drawingArea,
                    o = t + a.drawingArea,
                    s = i + a.drawingArea,
                    l = a.height - a.paddingTop - n - a.drawingArea;
                a.xCenter = Math.floor((o + r) / 2 + a.left), a.yCenter = Math.floor((s + l) / 2 + a.top + a.paddingTop)
            },
            getIndexAngle: function(t) {
                return t * (2 * Math.PI / Di(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
            },
            getDistanceFromCenterForValue: function(t) {
                var e = this;
                if (null === t) return 0;
                var i = e.drawingArea / (e.max - e.min);
                return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i
            },
            getPointPosition: function(t, e) {
                var i = this.getIndexAngle(t) - Math.PI / 2;
                return {
                    x: Math.cos(i) * e + this.xCenter,
                    y: Math.sin(i) * e + this.yCenter
                }
            },
            getPointPositionForValue: function(t, e) {
                return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
            },
            getBasePosition: function() {
                var t = this.min,
                    e = this.max;
                return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0)
            },
            draw: function() {
                var r = this,
                    t = r.options,
                    o = t.gridLines,
                    s = t.ticks;
                if (t.display) {
                    var l = r.ctx,
                        d = this.getIndexAngle(0),
                        u = ut.options._parseFont(s);
                    (t.angleLines.display || t.pointLabels.display) && function(t) {
                        var e = t.ctx,
                            i = t.options,
                            n = i.angleLines,
                            a = i.gridLines,
                            r = i.pointLabels,
                            o = wi(n.lineWidth, a.lineWidth),
                            s = wi(n.color, a.color),
                            l = Pi(i);
                        e.save(), e.lineWidth = o, e.strokeStyle = s, e.setLineDash && (e.setLineDash(Si([n.borderDash, a.borderDash, []])), e.lineDashOffset = Si([n.borderDashOffset, a.borderDashOffset, 0]));
                        var d, u, h, c, f = t.getDistanceFromCenterForValue(i.ticks.reverse ? t.min : t.max),
                            g = ut.options._parseFont(r);
                        e.font = g.string, e.textBaseline = "middle";
                        for (var p = Di(t) - 1; 0 <= p; p--) {
                            if (n.display && o && s) {
                                var m = t.getPointPosition(p, f);
                                e.beginPath(), e.moveTo(t.xCenter, t.yCenter), e.lineTo(m.x, m.y), e.stroke()
                            }
                            if (r.display) {
                                var v = 0 === p ? l / 2 : 0,
                                    b = t.getPointPosition(p, f + v + 5),
                                    y = Mi(r.fontColor, p, st.global.defaultFontColor);
                                e.fillStyle = y;
                                var x = t.getIndexAngle(p),
                                    _ = ut.toDegrees(x);
                                e.textAlign = 0 === (c = _) || 180 === c ? "center" : c < 180 ? "left" : "right", d = _, u = t._pointLabelSizes[p], h = b, 90 === d || 270 === d ? h.y -= u.h / 2 : (270 < d || d < 90) && (h.y -= u.h), Ii(e, t.pointLabels[p] || "", b, g.lineHeight)
                            }
                        }
                        e.restore()
                    }(r), ut.each(r.ticks, function(t, e) {
                        if (0 < e || s.reverse) {
                            var i = r.getDistanceFromCenterForValue(r.ticksAsNumbers[e]);
                            if (o.display && 0 !== e && function(t, e, i, n) {
                                    var a, r = t.ctx,
                                        o = e.circular,
                                        s = Di(t),
                                        l = Mi(e.color, n - 1),
                                        d = Mi(e.lineWidth, n - 1);
                                    if ((o || s) && l && d) {
                                        if (r.save(), r.strokeStyle = l, r.lineWidth = d, r.setLineDash && (r.setLineDash(e.borderDash || []), r.lineDashOffset = e.borderDashOffset || 0), r.beginPath(), o) r.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI);
                                        else {
                                            a = t.getPointPosition(0, i), r.moveTo(a.x, a.y);
                                            for (var u = 1; u < s; u++) a = t.getPointPosition(u, i), r.lineTo(a.x, a.y)
                                        }
                                        r.closePath(), r.stroke(), r.restore()
                                    }
                                }(r, o, i, e), s.display) {
                                var n = wi(s.fontColor, st.global.defaultFontColor);
                                if (l.font = u.string, l.save(), l.translate(r.xCenter, r.yCenter), l.rotate(d), s.showLabelBackdrop) {
                                    var a = l.measureText(t).width;
                                    l.fillStyle = s.backdropColor, l.fillRect(-a / 2 - s.backdropPaddingX, -i - u.size / 2 - s.backdropPaddingY, a + 2 * s.backdropPaddingX, u.size + 2 * s.backdropPaddingY)
                                }
                                l.textAlign = "center", l.textBaseline = "middle", l.fillStyle = n, l.fillText(t, 0, -i), l.restore()
                            }
                        }
                    })
                }
            }
        }),
        Oi = Ci;
    Fi._defaults = Oi;
    var Li = ut.valueOrDefault,
        Ri = Number.MIN_SAFE_INTEGER || -9007199254740991,
        Wi = Number.MAX_SAFE_INTEGER || 9007199254740991,
        Ni = {
            millisecond: {
                common: !0,
                size: 1,
                steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
            },
            second: {
                common: !0,
                size: 1e3,
                steps: [1, 2, 5, 10, 15, 30]
            },
            minute: {
                common: !0,
                size: 6e4,
                steps: [1, 2, 5, 10, 15, 30]
            },
            hour: {
                common: !0,
                size: 36e5,
                steps: [1, 2, 3, 6, 12]
            },
            day: {
                common: !0,
                size: 864e5,
                steps: [1, 2, 5]
            },
            week: {
                common: !1,
                size: 6048e5,
                steps: [1, 2, 3, 4]
            },
            month: {
                common: !0,
                size: 2628e6,
                steps: [1, 2, 3]
            },
            quarter: {
                common: !1,
                size: 7884e6,
                steps: [1, 2, 3, 4]
            },
            year: {
                common: !0,
                size: 3154e7
            }
        },
        zi = Object.keys(Ni);

    function Bi(t, e) {
        return t - e
    }

    function Vi(t) {
        var e, i, n, a = {},
            r = [];
        for (e = 0, i = t.length; e < i; ++e) a[n = t[e]] || (a[n] = !0, r.push(n));
        return r
    }

    function Ei(t, e, i, n) {
        var a = function(t, e, i) {
                for (var n, a, r, o = 0, s = t.length - 1; 0 <= o && o <= s;) {
                    if (a = t[(n = o + s >> 1) - 1] || null, r = t[n], !a) return {
                        lo: null,
                        hi: r
                    };
                    if (r[e] < i) o = 1 + n;
                    else {
                        if (!(a[e] > i)) return {
                            lo: a,
                            hi: r
                        };
                        s = n - 1
                    }
                }
                return {
                    lo: r,
                    hi: null
                }
            }(t, e, i),
            r = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
            o = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
            s = o[e] - r[e],
            l = s ? (i - r[e]) / s : 0,
            d = (o[n] - r[n]) * l;
        return r[n] + d
    }

    function Hi(t, e) {
        var i = t._adapter,
            n = t.options.time,
            a = n.parser,
            r = a || n.format,
            o = e;
        return "function" == typeof a && (o = a(o)), ut.isFinite(o) || (o = "string" == typeof r ? i.parse(o, r) : i.parse(o)), null !== o ? +o : (a || "function" != typeof r || (o = r(e), ut.isFinite(o) || (o = i.parse(o))), o)
    }

    function Yi(t, e) {
        if (ut.isNullOrUndef(e)) return null;
        var i = t.options.time,
            n = Hi(t, t.getRightValue(e));
        return null === n || i.round && (n = +t._adapter.startOf(n, i.round)), n
    }

    function ji(t) {
        for (var e = zi.indexOf(t) + 1, i = zi.length; e < i; ++e)
            if (Ni[zi[e]].common) return zi[e]
    }
    var Ui = ui.extend({
        initialize: function() {
            this.mergeTicksOptions(), ui.prototype.initialize.call(this)
        },
        update: function() {
            var t = this.options,
                e = t.time || (t.time = {}),
                i = this._adapter = new ai._date(t.adapters.date);
            return e.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), ut.mergeIf(e.displayFormats, i.formats()), ui.prototype.update.apply(this, arguments)
        },
        getRightValue: function(t) {
            return t && void 0 !== t.t && (t = t.t), ui.prototype.getRightValue.call(this, t)
        },
        determineDataLimits: function() {
            var t, e, i, n, a, r, o = this,
                s = o.chart,
                l = o._adapter,
                d = o.options.time,
                u = d.unit || "day",
                h = Wi,
                c = Ri,
                f = [],
                g = [],
                p = [],
                m = s.data.labels || [];
            for (t = 0, i = m.length; t < i; ++t) p.push(Yi(o, m[t]));
            for (t = 0, i = (s.data.datasets || []).length; t < i; ++t)
                if (s.isDatasetVisible(t))
                    if (a = s.data.datasets[t].data, ut.isObject(a[0]))
                        for (g[t] = [], e = 0, n = a.length; e < n; ++e) r = Yi(o, a[e]), f.push(r), g[t][e] = r;
                    else {
                        for (e = 0, n = p.length; e < n; ++e) f.push(p[e]);
                        g[t] = p.slice(0)
                    }
            else g[t] = [];
            p.length && (p = Vi(p).sort(Bi), h = Math.min(h, p[0]), c = Math.max(c, p[p.length - 1])), f.length && (f = Vi(f).sort(Bi), h = Math.min(h, f[0]), c = Math.max(c, f[f.length - 1])), h = Yi(o, d.min) || h, c = Yi(o, d.max) || c, h = h === Wi ? +l.startOf(Date.now(), u) : h, c = c === Ri ? +l.endOf(Date.now(), u) + 1 : c, o.min = Math.min(h, c), o.max = Math.max(h + 1, c), o._horizontal = o.isHorizontal(), o._table = [], o._timestamps = {
                data: f,
                datasets: g,
                labels: p
            }
        },
        buildTicks: function() {
            var t, e, i, n, a, r, o, s, l, d, u = this,
                h = u.min,
                c = u.max,
                f = u.options,
                g = f.time,
                p = [],
                m = [];
            switch (f.ticks.source) {
                case "data":
                    p = u._timestamps.data;
                    break;
                case "labels":
                    p = u._timestamps.labels;
                    break;
                case "auto":
                default:
                    p = function(t, h, c, e) {
                        var i, n = t._adapter,
                            a = t.options,
                            r = a.time,
                            f = r.unit || function(t, e, i, n) {
                                var a, r, o, s = zi.length;
                                for (a = zi.indexOf(t); a < s - 1; ++a)
                                    if (o = (r = Ni[zi[a]]).steps ? r.steps[r.steps.length - 1] : Wi, r.common && Math.ceil((i - e) / (o * r.size)) <= n) return zi[a];
                                return zi[s - 1]
                            }(r.minUnit, h, c, e),
                            o = ji(f),
                            s = Li(r.stepSize, r.unitStepSize),
                            l = "week" === f && r.isoWeekday,
                            d = a.ticks.major.enabled,
                            u = Ni[f],
                            g = h,
                            p = c,
                            m = [];
                        for (s = s || function(t, e, i, n) {
                                var a, r, o, s = c - h,
                                    l = Ni[f],
                                    d = l.size,
                                    u = l.steps;
                                if (!u) return Math.ceil(s / (n * d));
                                for (a = 0, r = u.length; a < r && (o = u[a], !(Math.ceil(s / (d * o)) <= n)); ++a);
                                return o
                            }(0, 0, 0, e), l && (g = +n.startOf(g, "isoWeek", l), p = +n.startOf(p, "isoWeek", l)), g = +n.startOf(g, l ? "day" : f), (p = +n.startOf(p, l ? "day" : f)) < c && (p = +n.add(p, 1, f)), i = g, d && o && !l && !r.round && (i = +n.startOf(i, o), i = +n.add(i, ~~((g - i) / (u.size * s)) * s, f)); i < p; i = +n.add(i, s, f)) m.push(+i);
                        return m.push(+i), m
                    }(u, h, c, u.getLabelCapacity(h))
            }
            for ("ticks" === f.bounds && p.length && (h = p[0], c = p[p.length - 1]), h = Yi(u, g.min) || h, c = Yi(u, g.max) || c, t = 0, e = p.length; t < e; ++t)(i = p[t]) >= h && i <= c && m.push(i);
            return u.min = h, u.max = c, u._unit = g.unit || function(t, e, i, n, a) {
                    var r, o;
                    for (r = zi.length - 1; r >= zi.indexOf(i); r--)
                        if (o = zi[r], Ni[o].common && t._adapter.diff(a, n, o) >= e.length) return o;
                    return zi[i ? zi.indexOf(i) : 0]
                }(u, m, g.minUnit, u.min, u.max), u._majorUnit = ji(u._unit), u._table = function(t, e, i) {
                    if ("linear" === f.distribution || !t.length) return [{
                        time: e,
                        pos: 0
                    }, {
                        time: i,
                        pos: 1
                    }];
                    var n, a, r, o, s, l = [],
                        d = [e];
                    for (n = 0, a = t.length; n < a; ++n)(o = t[n]) > e && o < i && d.push(o);
                    for (d.push(i), n = 0, a = d.length; n < a; ++n) s = d[n + 1], r = d[n - 1], o = d[n], void 0 !== r && void 0 !== s && Math.round((s + r) / 2) === o || l.push({
                        time: o,
                        pos: n / (a - 1)
                    });
                    return l
                }(u._timestamps.data, h, c), u._offsets = (n = u._table, a = m, d = l = 0, (r = f).offset && a.length && (r.time.min || (o = Ei(n, "time", a[0], "pos"), l = 1 === a.length ? 1 - o : (Ei(n, "time", a[1], "pos") - o) / 2), r.time.max || (s = Ei(n, "time", a[a.length - 1], "pos"), d = 1 === a.length ? s : (s - Ei(n, "time", a[a.length - 2], "pos")) / 2)), {
                    start: l,
                    end: d
                }), f.ticks.reverse && m.reverse(),
                function(t, e, i) {
                    var n, a, r, o, s = [];
                    for (n = 0, a = e.length; n < a; ++n) r = e[n], o = !!i && r === +t._adapter.startOf(r, i), s.push({
                        value: r,
                        major: o
                    });
                    return s
                }(u, m, u._majorUnit)
        },
        getLabelForIndex: function(t, e) {
            var i = this,
                n = i._adapter,
                a = i.chart.data,
                r = i.options.time,
                o = a.labels && t < a.labels.length ? a.labels[t] : "",
                s = a.datasets[e].data[t];
            return ut.isObject(s) && (o = i.getRightValue(s)), r.tooltipFormat ? n.format(Hi(i, o), r.tooltipFormat) : "string" == typeof o ? o : n.format(Hi(i, o), r.displayFormats.datetime)
        },
        tickFormatFunction: function(t, e, i, n) {
            var a = this._adapter,
                r = this.options,
                o = r.time.displayFormats,
                s = o[this._unit],
                l = this._majorUnit,
                d = o[l],
                u = +a.startOf(t, l),
                h = r.ticks.major,
                c = h.enabled && l && d && t === u,
                f = a.format(t, n || (c ? d : s)),
                g = c ? h : r.ticks.minor,
                p = Li(g.callback, g.userCallback);
            return p ? p(f, e, i) : f
        },
        convertTicksToLabels: function(t) {
            var e, i, n = [];
            for (e = 0, i = t.length; e < i; ++e) n.push(this.tickFormatFunction(t[e].value, e, t));
            return n
        },
        getPixelForOffset: function(t) {
            var e = this,
                i = e.options.ticks.reverse,
                n = e._horizontal ? e.width : e.height,
                a = e._horizontal ? i ? e.right : e.left : i ? e.bottom : e.top,
                r = Ei(e._table, "time", t, "pos"),
                o = n * (e._offsets.start + r) / (e._offsets.start + 1 + e._offsets.end);
            return i ? a - o : a + o
        },
        getPixelForValue: function(t, e, i) {
            var n = null;
            if (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = Yi(this, t)), null !== n) return this.getPixelForOffset(n)
        },
        getPixelForTick: function(t) {
            var e = this.getTicks();
            return 0 <= t && t < e.length ? this.getPixelForOffset(e[t].value) : null
        },
        getValueForPixel: function(t) {
            var e = this,
                i = e._horizontal ? e.width : e.height,
                n = e._horizontal ? e.left : e.top,
                a = (i ? (t - n) / i : 0) * (e._offsets.start + 1 + e._offsets.start) - e._offsets.end,
                r = Ei(e._table, "pos", a, "time");
            return e._adapter._create(r)
        },
        getLabelWidth: function(t) {
            var e = this.options.ticks,
                i = this.ctx.measureText(t).width,
                n = ut.toRadians(e.maxRotation),
                a = Math.cos(n),
                r = Math.sin(n);
            return i * a + Li(e.fontSize, st.global.defaultFontSize) * r
        },
        getLabelCapacity: function(t) {
            var e = this,
                i = e.options.time.displayFormats.millisecond,
                n = e.tickFormatFunction(t, 0, [], i),
                a = e.getLabelWidth(n),
                r = e.isHorizontal() ? e.width : e.height,
                o = Math.floor(r / a);
            return 0 < o ? o : 1
        }
    });
    Ui._defaults = {
        position: "bottom",
        distribution: "linear",
        bounds: "data",
        adapters: {},
        time: {
            parser: !1,
            format: !1,
            unit: !1,
            round: !1,
            displayFormat: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {}
        },
        ticks: {
            autoSkip: !1,
            source: "auto",
            major: {
                enabled: !1
            }
        }
    };
    var qi = {
            category: hi,
            linear: mi,
            logarithmic: _i,
            radialLinear: Fi,
            time: Ui
        },
        Gi = {
            datetime: "MMM D, YYYY, h:mm:ss a",
            millisecond: "h:mm:ss.SSS a",
            second: "h:mm:ss a",
            minute: "h:mm a",
            hour: "hA",
            day: "MMM D",
            week: "ll",
            month: "MMM YYYY",
            quarter: "[Q]Q - YYYY",
            year: "YYYY"
        };
    ai._date.override("function" == typeof n ? {
        _id: "moment",
        formats: function() {
            return Gi
        },
        parse: function(t, e) {
            return "string" == typeof t && "string" == typeof e ? t = n(t, e) : t instanceof n || (t = n(t)), t.isValid() ? t.valueOf() : null
        },
        format: function(t, e) {
            return n(t).format(e)
        },
        add: function(t, e, i) {
            return n(t).add(e, i).valueOf()
        },
        diff: function(t, e, i) {
            return n.duration(n(t).diff(n(e))).as(i)
        },
        startOf: function(t, e, i) {
            return t = n(t), "isoWeek" === e ? t.isoWeekday(i).valueOf() : t.startOf(e).valueOf()
        },
        endOf: function(t, e) {
            return n(t).endOf(e).valueOf()
        },
        _create: function(t) {
            return n(t)
        }
    } : {}), st._set("global", {
        plugins: {
            filler: {
                propagate: !0
            }
        }
    });
    var Zi = {
        dataset: function(t) {
            var e = t.fill,
                i = t.chart,
                n = i.getDatasetMeta(e),
                a = n && i.isDatasetVisible(e) && n.dataset._children || [],
                r = a.length || 0;
            return r ? function(t, e) {
                return e < r && a[e]._view || null
            } : null
        },
        boundary: function(t) {
            var e = t.boundary,
                i = e ? e.x : null,
                n = e ? e.y : null;
            return function(t) {
                return {
                    x: null === i ? t.x : i,
                    y: null === n ? t.y : n
                }
            }
        }
    };

    function Xi(t, e, i) {
        var n, a = t._model || {},
            r = a.fill;
        if (void 0 === r && (r = !!a.backgroundColor), !1 === r || null === r) return !1;
        if (!0 === r) return "origin";
        if (n = parseFloat(r, 10), isFinite(n) && Math.floor(n) === n) return "-" !== r[0] && "+" !== r[0] || (n = e + n), !(n === e || n < 0 || i <= n) && n;
        switch (r) {
            case "bottom":
                return "start";
            case "top":
                return "end";
            case "zero":
                return "origin";
            case "origin":
            case "start":
            case "end":
                return r;
            default:
                return !1
        }
    }

    function Ki(t) {
        var e, i = t.el._model || {},
            n = t.el._scale || {},
            a = t.fill,
            r = null;
        if (isFinite(a)) return null;
        if ("start" === a ? r = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === a ? r = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? r = i.scaleZero : n.getBasePosition ? r = n.getBasePosition() : n.getBasePixel && (r = n.getBasePixel()), null != r) {
            if (void 0 !== r.x && void 0 !== r.y) return r;
            if (ut.isFinite(r)) return {
                x: (e = n.isHorizontal()) ? r : null,
                y: e ? null : r
            }
        }
        return null
    }

    function $i(t, e, i) {
        var n, a = t[e].fill,
            r = [e];
        if (!i) return a;
        for (; !1 !== a && -1 === r.indexOf(a);) {
            if (!isFinite(a)) return a;
            if (!(n = t[a])) return !1;
            if (n.visible) return a;
            r.push(a), a = n.fill
        }
        return !1
    }

    function Ji(t) {
        return t && !t.skip
    }

    function Qi(t, e, i, n, a) {
        var r;
        if (n && a) {
            for (t.moveTo(e[0].x, e[0].y), r = 1; r < n; ++r) ut.canvas.lineTo(t, e[r - 1], e[r]);
            for (t.lineTo(i[a - 1].x, i[a - 1].y), r = a - 1; 0 < r; --r) ut.canvas.lineTo(t, i[r], i[r - 1], !0)
        }
    }
    var tn = {
            id: "filler",
            afterDatasetsUpdate: function(t, e) {
                var i, n, a, r, o, s, l, d = (t.data.datasets || []).length,
                    u = e.propagate,
                    h = [];
                for (n = 0; n < d; ++n) r = null, (a = (i = t.getDatasetMeta(n)).dataset) && a._model && a instanceof zt.Line && (r = {
                    visible: t.isDatasetVisible(n),
                    fill: Xi(a, n, d),
                    chart: t,
                    el: a
                }), i.$filler = r, h.push(r);
                for (n = 0; n < d; ++n)(r = h[n]) && (r.fill = $i(h, n, u), r.boundary = Ki(r), r.mapper = (l = void 0, s = (o = r).fill, !(l = "dataset") === s ? null : (isFinite(s) || (l = "boundary"), Zi[l](o))))
            },
            beforeDatasetDraw: function(t, e) {
                var i = e.meta.$filler;
                if (i) {
                    var n = t.ctx,
                        a = i.el,
                        r = a._view,
                        o = a._children || [],
                        s = i.mapper,
                        l = r.backgroundColor || st.global.defaultColor;
                    s && l && o.length && (ut.canvas.clipArea(n, t.chartArea), function(t, e, i, n, a, r) {
                        var o, s, l, d, u, h, c, f = e.length,
                            g = n.spanGaps,
                            p = [],
                            m = [],
                            v = 0,
                            b = 0;
                        for (t.beginPath(), o = 0, s = f + !!r; o < s; ++o) u = i(d = e[l = o % f]._view, l, n), h = Ji(d), c = Ji(u), h && c ? (v = p.push(d), b = m.push(u)) : v && b && (g ? (h && p.push(d), c && m.push(u)) : (Qi(t, p, m, v, b), v = b = 0, p = [], m = []));
                        Qi(t, p, m, v, b), t.closePath(), t.fillStyle = a, t.fill()
                    }(n, o, s, r, l, a._loop), ut.canvas.unclipArea(n))
                }
            }
        },
        en = ut.noop,
        nn = ut.valueOrDefault;

    function an(t, e) {
        return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth
    }
    st._set("global", {
        legend: {
            display: !0,
            position: "top",
            fullWidth: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function(t, e) {
                var i = e.datasetIndex,
                    n = this.chart,
                    a = n.getDatasetMeta(i);
                a.hidden = null === a.hidden ? !n.data.datasets[i].hidden : null, n.update()
            },
            onHover: null,
            onLeave: null,
            labels: {
                boxWidth: 40,
                padding: 10,
                generateLabels: function(i) {
                    var t = i.data;
                    return ut.isArray(t.datasets) ? t.datasets.map(function(t, e) {
                        return {
                            text: t.label,
                            fillStyle: ut.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor,
                            hidden: !i.isDatasetVisible(e),
                            lineCap: t.borderCapStyle,
                            lineDash: t.borderDash,
                            lineDashOffset: t.borderDashOffset,
                            lineJoin: t.borderJoinStyle,
                            lineWidth: t.borderWidth,
                            strokeStyle: t.borderColor,
                            pointStyle: t.pointStyle,
                            datasetIndex: e
                        }
                    }, this) : []
                }
            }
        },
        legendCallback: function(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
            return e.push("</ul>"), e.join("")
        }
    });
    var rn = pt.extend({
        initialize: function(t) {
            ut.extend(this, t), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1
        },
        beforeUpdate: en,
        update: function(t, e, i) {
            var n = this;
            return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
        },
        afterUpdate: en,
        beforeSetDimensions: en,
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            }
        },
        afterSetDimensions: en,
        beforeBuildLabels: en,
        buildLabels: function() {
            var e = this,
                i = e.options.labels || {},
                t = ut.callback(i.generateLabels, [e.chart], e) || [];
            i.filter && (t = t.filter(function(t) {
                return i.filter(t, e.chart.data)
            })), e.options.reverse && t.reverse(), e.legendItems = t
        },
        afterBuildLabels: en,
        beforeFit: en,
        fit: function() {
            var t = this,
                e = t.options,
                n = e.labels,
                i = e.display,
                a = t.ctx,
                r = ut.options._parseFont(n),
                o = r.size,
                s = t.legendHitBoxes = [],
                l = t.minSize,
                d = t.isHorizontal();
            if (d ? (l.width = t.maxWidth, l.height = i ? 10 : 0) : (l.width = i ? 10 : 0, l.height = t.maxHeight), i)
                if (a.font = r.string, d) {
                    var u = t.lineWidths = [0],
                        h = 0;
                    a.textAlign = "left", a.textBaseline = "top", ut.each(t.legendItems, function(t, e) {
                        var i = an(n, o) + o / 2 + a.measureText(t.text).width;
                        (0 === e || u[u.length - 1] + i + n.padding > l.width) && (h += o + n.padding, u[u.length - (0 < e ? 0 : 1)] = n.padding), s[e] = {
                            left: 0,
                            top: 0,
                            width: i,
                            height: o
                        }, u[u.length - 1] += i + n.padding
                    }), l.height += h
                } else {
                    var c = n.padding,
                        f = t.columnWidths = [],
                        g = n.padding,
                        p = 0,
                        m = 0,
                        v = o + c;
                    ut.each(t.legendItems, function(t, e) {
                        var i = an(n, o) + o / 2 + a.measureText(t.text).width;
                        0 < e && m + v > l.height - c && (g += p + n.padding, f.push(p), m = p = 0), p = Math.max(p, i), m += v, s[e] = {
                            left: 0,
                            top: 0,
                            width: i,
                            height: o
                        }
                    }), g += p, f.push(p), l.width += g
                }
            t.width = l.width, t.height = l.height
        },
        afterFit: en,
        isHorizontal: function() {
            return "top" === this.options.position || "bottom" === this.options.position
        },
        draw: function() {
            var h = this,
                c = h.options,
                f = c.labels,
                t = st.global,
                g = t.defaultColor,
                p = t.elements.line,
                m = h.width,
                v = h.lineWidths;
            if (c.display) {
                var b, y = h.ctx,
                    e = nn(f.fontColor, t.defaultFontColor),
                    i = ut.options._parseFont(f),
                    x = i.size;
                y.textAlign = "left", y.textBaseline = "middle", y.lineWidth = .5, y.strokeStyle = e, y.fillStyle = e, y.font = i.string;
                var _ = an(f, x),
                    k = h.legendHitBoxes,
                    w = h.isHorizontal();
                b = w ? {
                    x: h.left + (m - v[0]) / 2 + f.padding,
                    y: h.top + f.padding,
                    line: 0
                } : {
                    x: h.left + f.padding,
                    y: h.top + f.padding,
                    line: 0
                };
                var M = x + f.padding;
                ut.each(h.legendItems, function(t, e) {
                    var i, n, a, r, o, s = y.measureText(t.text).width,
                        l = _ + x / 2 + s,
                        d = b.x,
                        u = b.y;
                    w ? 0 < e && d + l + f.padding > h.left + h.minSize.width && (u = b.y += M, b.line++, d = b.x = h.left + (m - v[b.line]) / 2 + f.padding) : 0 < e && u + M > h.top + h.minSize.height && (d = b.x = d + h.columnWidths[b.line] + f.padding, u = b.y = h.top + f.padding, b.line++),
                        function(t, e, i) {
                            if (!(isNaN(_) || _ <= 0)) {
                                y.save();
                                var n = nn(i.lineWidth, p.borderWidth);
                                if (y.fillStyle = nn(i.fillStyle, g), y.lineCap = nn(i.lineCap, p.borderCapStyle), y.lineDashOffset = nn(i.lineDashOffset, p.borderDashOffset), y.lineJoin = nn(i.lineJoin, p.borderJoinStyle), y.lineWidth = n, y.strokeStyle = nn(i.strokeStyle, g), y.setLineDash && y.setLineDash(nn(i.lineDash, p.borderDash)), c.labels && c.labels.usePointStyle) {
                                    var a = _ * Math.SQRT2 / 2,
                                        r = t + _ / 2,
                                        o = e + x / 2;
                                    ut.canvas.drawPoint(y, i.pointStyle, a, r, o)
                                } else 0 !== n && y.strokeRect(t, e, _, x), y.fillRect(t, e, _, x);
                                y.restore()
                            }
                        }(d, u, t), k[e].left = d, k[e].top = u, i = t, n = s, r = _ + (a = x / 2) + d, o = u + a, y.fillText(i.text, r, o), i.hidden && (y.beginPath(), y.lineWidth = 2, y.moveTo(r, o), y.lineTo(r + n, o), y.stroke()), w ? b.x += l + f.padding : b.y += M
                })
            }
        },
        _getLegendItemAt: function(t, e) {
            var i, n, a, r = this;
            if (t >= r.left && t <= r.right && e >= r.top && e <= r.bottom)
                for (a = r.legendHitBoxes, i = 0; i < a.length; ++i)
                    if (t >= (n = a[i]).left && t <= n.left + n.width && e >= n.top && e <= n.top + n.height) return r.legendItems[i];
            return null
        },
        handleEvent: function(t) {
            var e, i = this,
                n = i.options,
                a = "mouseup" === t.type ? "click" : t.type;
            if ("mousemove" === a) {
                if (!n.onHover && !n.onLeave) return
            } else {
                if ("click" !== a) return;
                if (!n.onClick) return
            }
            e = i._getLegendItemAt(t.x, t.y), "click" === a ? e && n.onClick && n.onClick.call(i, t.native, e) : (n.onLeave && e !== i._hoveredItem && (i._hoveredItem && n.onLeave.call(i, t.native, i._hoveredItem), i._hoveredItem = e), n.onHover && e && n.onHover.call(i, t.native, e))
        }
    });

    function on(t, e) {
        var i = new rn({
            ctx: t.ctx,
            options: e,
            chart: t
        });
        _e.configure(t, i, e), _e.addBox(t, i), t.legend = i
    }
    var sn = {
            id: "legend",
            _element: rn,
            beforeInit: function(t) {
                var e = t.options.legend;
                e && on(t, e)
            },
            beforeUpdate: function(t) {
                var e = t.options.legend,
                    i = t.legend;
                e ? (ut.mergeIf(e, st.global.legend), i ? (_e.configure(t, i, e), i.options = e) : on(t, e)) : i && (_e.removeBox(t, i), delete t.legend)
            },
            afterEvent: function(t, e) {
                var i = t.legend;
                i && i.handleEvent(e)
            }
        },
        ln = ut.noop;
    st._set("global", {
        title: {
            display: !1,
            fontStyle: "bold",
            fullWidth: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3
        }
    });
    var dn = pt.extend({
        initialize: function(t) {
            ut.extend(this, t), this.legendHitBoxes = []
        },
        beforeUpdate: ln,
        update: function(t, e, i) {
            var n = this;
            return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
        },
        afterUpdate: ln,
        beforeSetDimensions: ln,
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            }
        },
        afterSetDimensions: ln,
        beforeBuildLabels: ln,
        buildLabels: ln,
        afterBuildLabels: ln,
        beforeFit: ln,
        fit: function() {
            var t = this,
                e = t.options,
                i = e.display,
                n = t.minSize,
                a = ut.isArray(e.text) ? e.text.length : 1,
                r = ut.options._parseFont(e),
                o = i ? a * r.lineHeight + 2 * e.padding : 0;
            t.isHorizontal() ? (n.width = t.maxWidth, n.height = o) : (n.width = o, n.height = t.maxHeight), t.width = n.width, t.height = n.height
        },
        afterFit: ln,
        isHorizontal: function() {
            var t = this.options.position;
            return "top" === t || "bottom" === t
        },
        draw: function() {
            var t = this,
                e = t.ctx,
                i = t.options;
            if (i.display) {
                var n, a, r, o = ut.options._parseFont(i),
                    s = o.lineHeight,
                    l = s / 2 + i.padding,
                    d = 0,
                    u = t.top,
                    h = t.left,
                    c = t.bottom,
                    f = t.right;
                e.fillStyle = ut.valueOrDefault(i.fontColor, st.global.defaultFontColor), e.font = o.string, t.isHorizontal() ? (a = h + (f - h) / 2, r = u + l, n = f - h) : (a = "left" === i.position ? h + l : f - l, r = u + (c - u) / 2, n = c - u, d = Math.PI * ("left" === i.position ? -.5 : .5)), e.save(), e.translate(a, r), e.rotate(d), e.textAlign = "center", e.textBaseline = "middle";
                var g = i.text;
                if (ut.isArray(g))
                    for (var p = 0, m = 0; m < g.length; ++m) e.fillText(g[m], 0, p, n), p += s;
                else e.fillText(g, 0, 0, n);
                e.restore()
            }
        }
    });

    function un(t, e) {
        var i = new dn({
            ctx: t.ctx,
            options: e,
            chart: t
        });
        _e.configure(t, i, e), _e.addBox(t, i), t.titleBlock = i
    }
    var hn = {},
        cn = tn,
        fn = sn,
        gn = {
            id: "title",
            _element: dn,
            beforeInit: function(t) {
                var e = t.options.title;
                e && un(t, e)
            },
            beforeUpdate: function(t) {
                var e = t.options.title,
                    i = t.titleBlock;
                e ? (ut.mergeIf(e, st.global.title), i ? (_e.configure(t, i, e), i.options = e) : un(t, e)) : i && (_e.removeBox(t, i), delete t.titleBlock)
            }
        };
    for (var pn in hn.filler = cn, hn.legend = fn, hn.title = gn, (ei.helpers = ut).where = function(t, e) {
            if (ut.isArray(t) && Array.prototype.filter) return t.filter(e);
            var i = [];
            return ut.each(t, function(t) {
                e(t) && i.push(t)
            }), i
        }, ut.findIndex = Array.prototype.findIndex ? function(t, e, i) {
            return t.findIndex(e, i)
        } : function(t, e, i) {
            i = void 0 === i ? t : i;
            for (var n = 0, a = t.length; n < a; ++n)
                if (e.call(i, t[n], n, t)) return n;
            return -1
        }, ut.findNextWhere = function(t, e, i) {
            ut.isNullOrUndef(i) && (i = -1);
            for (var n = i + 1; n < t.length; n++) {
                var a = t[n];
                if (e(a)) return a
            }
        }, ut.findPreviousWhere = function(t, e, i) {
            ut.isNullOrUndef(i) && (i = t.length);
            for (var n = i - 1; 0 <= n; n--) {
                var a = t[n];
                if (e(a)) return a
            }
        }, ut.isNumber = function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }, ut.almostEquals = function(t, e, i) {
            return Math.abs(t - e) < i
        }, ut.almostWhole = function(t, e) {
            var i = Math.round(t);
            return i - e < t && t < i + e
        }, ut.max = function(t) {
            return t.reduce(function(t, e) {
                return isNaN(e) ? t : Math.max(t, e)
            }, Number.NEGATIVE_INFINITY)
        }, ut.min = function(t) {
            return t.reduce(function(t, e) {
                return isNaN(e) ? t : Math.min(t, e)
            }, Number.POSITIVE_INFINITY)
        }, ut.sign = Math.sign ? function(t) {
            return Math.sign(t)
        } : function(t) {
            return 0 == (t = +t) || isNaN(t) ? t : 0 < t ? 1 : -1
        }, ut.log10 = Math.log10 ? function(t) {
            return Math.log10(t)
        } : function(t) {
            var e = Math.log(t) * Math.LOG10E,
                i = Math.round(e);
            return t === Math.pow(10, i) ? i : e
        }, ut.toRadians = function(t) {
            return t * (Math.PI / 180)
        }, ut.toDegrees = function(t) {
            return t * (180 / Math.PI)
        }, ut._decimalPlaces = function(t) {
            if (ut.isFinite(t)) {
                for (var e = 1, i = 0; Math.round(t * e) / e !== t;) e *= 10, i++;
                return i
            }
        }, ut.getAngleFromPoint = function(t, e) {
            var i = e.x - t.x,
                n = e.y - t.y,
                a = Math.sqrt(i * i + n * n),
                r = Math.atan2(n, i);
            return r < -.5 * Math.PI && (r += 2 * Math.PI), {
                angle: r,
                distance: a
            }
        }, ut.distanceBetweenPoints = function(t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
        }, ut.aliasPixel = function(t) {
            return t % 2 == 0 ? 0 : .5
        }, ut._alignPixel = function(t, e, i) {
            var n = t.currentDevicePixelRatio,
                a = i / 2;
            return Math.round((e - a) * n) / n + a
        }, ut.splineCurve = function(t, e, i, n) {
            var a = t.skip ? e : t,
                r = e,
                o = i.skip ? e : i,
                s = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
                l = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
                d = s / (s + l),
                u = l / (s + l),
                h = n * (d = isNaN(d) ? 0 : d),
                c = n * (u = isNaN(u) ? 0 : u);
            return {
                previous: {
                    x: r.x - h * (o.x - a.x),
                    y: r.y - h * (o.y - a.y)
                },
                next: {
                    x: r.x + c * (o.x - a.x),
                    y: r.y + c * (o.y - a.y)
                }
            }
        }, ut.EPSILON = Number.EPSILON || 1e-14, ut.splineCurveMonotone = function(t) {
            var e, i, n, a, r, o, s, l, d, u = (t || []).map(function(t) {
                    return {
                        model: t._model,
                        deltaK: 0,
                        mK: 0
                    }
                }),
                h = u.length;
            for (e = 0; e < h; ++e)
                if (!(n = u[e]).model.skip) {
                    if (i = 0 < e ? u[e - 1] : null, (a = e < h - 1 ? u[e + 1] : null) && !a.model.skip) {
                        var c = a.model.x - n.model.x;
                        n.deltaK = 0 != c ? (a.model.y - n.model.y) / c : 0
                    }!i || i.model.skip ? n.mK = n.deltaK : !a || a.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2
                }
            for (e = 0; e < h - 1; ++e) n = u[e], a = u[e + 1], n.model.skip || a.model.skip || (ut.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = a.mK = 0 : (r = n.mK / n.deltaK, o = a.mK / n.deltaK, (l = Math.pow(r, 2) + Math.pow(o, 2)) <= 9 || (s = 3 / Math.sqrt(l), n.mK = r * s * n.deltaK, a.mK = o * s * n.deltaK)));
            for (e = 0; e < h; ++e)(n = u[e]).model.skip || (i = 0 < e ? u[e - 1] : null, a = e < h - 1 ? u[e + 1] : null, i && !i.model.skip && (d = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - d, n.model.controlPointPreviousY = n.model.y - d * n.mK), a && !a.model.skip && (d = (a.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + d, n.model.controlPointNextY = n.model.y + d * n.mK))
        }, ut.nextItem = function(t, e, i) {
            return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
        }, ut.previousItem = function(t, e, i) {
            return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
        }, ut.niceNum = function(t, e) {
            var i = Math.floor(ut.log10(t)),
                n = t / Math.pow(10, i);
            return (e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i)
        }, ut.requestAnimFrame = "undefined" == typeof window ? function(t) {
            t()
        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            return window.setTimeout(t, 1e3 / 60)
        }, ut.getRelativePosition = function(t, e) {
            var i, n, a = t.originalEvent || t,
                r = t.target || t.srcElement,
                o = r.getBoundingClientRect(),
                s = a.touches;
            n = s && 0 < s.length ? (i = s[0].clientX, s[0].clientY) : (i = a.clientX, a.clientY);
            var l = parseFloat(ut.getStyle(r, "padding-left")),
                d = parseFloat(ut.getStyle(r, "padding-top")),
                u = parseFloat(ut.getStyle(r, "padding-right")),
                h = parseFloat(ut.getStyle(r, "padding-bottom")),
                c = o.right - o.left - l - u,
                f = o.bottom - o.top - d - h;
            return {
                x: i = Math.round((i - o.left - l) / c * r.width / e.currentDevicePixelRatio),
                y: n = Math.round((n - o.top - d) / f * r.height / e.currentDevicePixelRatio)
            }
        }, ut.getConstraintWidth = function(t) {
            return bn(t, "max-width", "clientWidth")
        }, ut.getConstraintHeight = function(t) {
            return bn(t, "max-height", "clientHeight")
        }, ut._calculatePadding = function(t, e, i) {
            return -1 < (e = ut.getStyle(t, e)).indexOf("%") ? i * parseInt(e, 10) / 100 : parseInt(e, 10)
        }, ut._getParentNode = function(t) {
            var e = t.parentNode;
            return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
        }, ut.getMaximumWidth = function(t) {
            var e = ut._getParentNode(t);
            if (!e) return t.clientWidth;
            var i = e.clientWidth,
                n = i - ut._calculatePadding(e, "padding-left", i) - ut._calculatePadding(e, "padding-right", i),
                a = ut.getConstraintWidth(t);
            return isNaN(a) ? n : Math.min(n, a)
        }, ut.getMaximumHeight = function(t) {
            var e = ut._getParentNode(t);
            if (!e) return t.clientHeight;
            var i = e.clientHeight,
                n = i - ut._calculatePadding(e, "padding-top", i) - ut._calculatePadding(e, "padding-bottom", i),
                a = ut.getConstraintHeight(t);
            return isNaN(a) ? n : Math.min(n, a)
        }, ut.getStyle = function(t, e) {
            return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
        }, ut.retinaScale = function(t, e) {
            var i = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;
            if (1 !== i) {
                var n = t.canvas,
                    a = t.height,
                    r = t.width;
                n.height = a * i, n.width = r * i, t.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = a + "px", n.style.width = r + "px")
            }
        }, ut.fontString = function(t, e, i) {
            return e + " " + t + "px " + i
        }, ut.longestText = function(e, t, i, n) {
            var a = (n = n || {}).data = n.data || {},
                r = n.garbageCollect = n.garbageCollect || [];
            n.font !== t && (a = n.data = {}, r = n.garbageCollect = [], n.font = t), e.font = t;
            var o = 0;
            ut.each(i, function(t) {
                null != t && !0 !== ut.isArray(t) ? o = ut.measureText(e, a, r, o, t) : ut.isArray(t) && ut.each(t, function(t) {
                    null == t || ut.isArray(t) || (o = ut.measureText(e, a, r, o, t))
                })
            });
            var s = r.length / 2;
            if (s > i.length) {
                for (var l = 0; l < s; l++) delete a[r[l]];
                r.splice(0, s)
            }
            return o
        }, ut.measureText = function(t, e, i, n, a) {
            var r = e[a];
            return r || (r = e[a] = t.measureText(a).width, i.push(a)), n < r && (n = r), n
        }, ut.numberOfLabelLines = function(t) {
            var e = 1;
            return ut.each(t, function(t) {
                ut.isArray(t) && t.length > e && (e = t.length)
            }), e
        }, ut.color = G ? function(t) {
            return t instanceof CanvasGradient && (t = st.global.defaultColor), G(t)
        } : function(t) {
            return console.error("Color.js not found!"), t
        }, ut.getHoverColor = function(t) {
            return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : ut.color(t).saturate(.5).darken(.1).rgbString()
        }, ei._adapters = ai, ei.Animation = vt, ei.animationService = bt, ei.controllers = de, ei.DatasetController = wt, ei.defaults = st, ei.Element = pt, ei.elements = zt, ei.Interaction = me, ei.layouts = _e, ei.platform = Ne, ei.plugins = ze, ei.Scale = ui, ei.scaleService = Be, ei.Ticks = ri, ei.Tooltip = Xe, ei.helpers.each(qi, function(t, e) {
            ei.scaleService.registerScaleType(e, t, t._defaults)
        }), hn) hn.hasOwnProperty(pn) && ei.plugins.register(hn[pn]);

    function mn(t, e, i) {
        var n;
        return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
    }

    function vn(t) {
        return null != t && "none" !== t
    }

    function bn(t, e, i) {
        var n = document.defaultView,
            a = ut._getParentNode(t),
            r = n.getComputedStyle(t)[e],
            o = n.getComputedStyle(a)[e],
            s = vn(r),
            l = vn(o),
            d = Number.POSITIVE_INFINITY;
        return s || l ? Math.min(s ? mn(r, t, i) : d, l ? mn(o, a, i) : d) : "none"
    }
    ei.platform.initialize();
    var yn = ei;
    return "undefined" != typeof window && (window.Chart = ei), (ei.Chart = ei).Legend = hn.legend._element, ei.Title = hn.title._element, ei.pluginService = ei.plugins, ei.PluginBase = ei.Element.extend({}), ei.canvasHelpers = ei.helpers.canvas, ei.layoutService = ei.layouts, ei.LinearScaleBase = gi, ei.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], function(i) {
        ei[i] = function(t, e) {
            return new ei(t, ei.helpers.merge(e || {}, {
                type: i.charAt(0).toLowerCase() + i.slice(1)
            }))
        }
    }), yn
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Chart = e()
}(this, function() {
    "use strict";
    var a = {
        rgb2hsl: o,
        rgb2hsv: e,
        rgb2hwb: i,
        rgb2cmyk: n,
        rgb2keyword: s,
        rgb2xyz: l,
        rgb2lab: d,
        rgb2lch: function(t) {
            return y(d(t))
        },
        hsl2rgb: u,
        hsl2hsv: function(t) {
            var e = t[0],
                i = t[1] / 100,
                n = t[2] / 100;
            return 0 === n ? [0, 0, 0] : [e, 2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i) * 100, (n + i) / 2 * 100]
        },
        hsl2hwb: function(t) {
            return i(u(t))
        },
        hsl2cmyk: function(t) {
            return n(u(t))
        },
        hsl2keyword: function(t) {
            return s(u(t))
        },
        hsv2rgb: h,
        hsv2hsl: function(t) {
            var e, i, n = t[0],
                a = t[1] / 100,
                r = t[2] / 100;
            return e = a * r, [n, 100 * (e = (e /= (i = (2 - a) * r) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)]
        },
        hsv2hwb: function(t) {
            return i(h(t))
        },
        hsv2cmyk: function(t) {
            return n(h(t))
        },
        hsv2keyword: function(t) {
            return s(h(t))
        },
        hwb2rgb: c,
        hwb2hsl: function(t) {
            return o(c(t))
        },
        hwb2hsv: function(t) {
            return e(c(t))
        },
        hwb2cmyk: function(t) {
            return n(c(t))
        },
        hwb2keyword: function(t) {
            return s(c(t))
        },
        cmyk2rgb: f,
        cmyk2hsl: function(t) {
            return o(f(t))
        },
        cmyk2hsv: function(t) {
            return e(f(t))
        },
        cmyk2hwb: function(t) {
            return i(f(t))
        },
        cmyk2keyword: function(t) {
            return s(f(t))
        },
        keyword2rgb: k,
        keyword2hsl: function(t) {
            return o(k(t))
        },
        keyword2hsv: function(t) {
            return e(k(t))
        },
        keyword2hwb: function(t) {
            return i(k(t))
        },
        keyword2cmyk: function(t) {
            return n(k(t))
        },
        keyword2lab: function(t) {
            return d(k(t))
        },
        keyword2xyz: function(t) {
            return l(k(t))
        },
        xyz2rgb: p,
        xyz2lab: m,
        xyz2lch: function(t) {
            return y(m(t))
        },
        lab2xyz: v,
        lab2rgb: x,
        lab2lch: y,
        lch2lab: _,
        lch2xyz: function(t) {
            return v(_(t))
        },
        lch2rgb: function(t) {
            return x(_(t))
        }
    };

    function o(t) {
        var e, i, n = t[0] / 255,
            a = t[1] / 255,
            r = t[2] / 255,
            o = Math.min(n, a, r),
            s = Math.max(n, a, r),
            l = s - o;
        return s == o ? e = 0 : n == s ? e = (a - r) / l : a == s ? e = 2 + (r - n) / l : r == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (o + s) / 2, [e, 100 * (s == o ? 0 : i <= .5 ? l / (s + o) : l / (2 - s - o)), 100 * i]
    }

    function e(t) {
        var e, i, n = t[0],
            a = t[1],
            r = t[2],
            o = Math.min(n, a, r),
            s = Math.max(n, a, r),
            l = s - o;
        return i = 0 == s ? 0 : l / s * 1e3 / 10, s == o ? e = 0 : n == s ? e = (a - r) / l : a == s ? e = 2 + (r - n) / l : r == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10]
    }

    function i(t) {
        var e = t[0],
            i = t[1],
            n = t[2];
        return [o(t)[0], 1 / 255 * Math.min(e, Math.min(i, n)) * 100, 100 * (n = 1 - 1 / 255 * Math.max(e, Math.max(i, n)))]
    }

    function n(t) {
        var e, i = t[0] / 255,
            n = t[1] / 255,
            a = t[2] / 255;
        return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - a))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e]
    }

    function s(t) {
        return M[JSON.stringify(t)]
    }

    function l(t) {
        var e = t[0] / 255,
            i = t[1] / 255,
            n = t[2] / 255;
        return [100 * (.4124 * (e = .04045 < e ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = .04045 < i ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = .04045 < n ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)]
    }

    function d(t) {
        var e = l(t),
            i = e[0],
            n = e[1],
            a = e[2];
        return n /= 100, a /= 108.883, i = .008856 < (i /= 95.047) ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = .008856 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (a = .008856 < a ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]
    }

    function u(t) {
        var e, i, n, a, r, o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100;
        if (0 == s) return [r = 255 * l, r, r];
        e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];
        for (var d = 0; d < 3; d++)(n = o + 1 / 3 * -(d - 1)) < 0 && n++, 1 < n && n--, r = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, a[d] = 255 * r;
        return a
    }

    function h(t) {
        var e = t[0] / 60,
            i = t[1] / 100,
            n = t[2] / 100,
            a = Math.floor(e) % 6,
            r = e - Math.floor(e),
            o = 255 * n * (1 - i),
            s = 255 * n * (1 - i * r),
            l = 255 * n * (1 - i * (1 - r));
        switch (n *= 255, a) {
            case 0:
                return [n, l, o];
            case 1:
                return [s, n, o];
            case 2:
                return [o, n, l];
            case 3:
                return [o, s, n];
            case 4:
                return [l, o, n];
            case 5:
                return [n, o, s]
        }
    }

    function c(t) {
        var e, i, n, a, o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100,
            d = s + l;
        switch (1 < d && (s /= d, l /= d), n = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (n = 1 - n), a = s + n * ((i = 1 - l) - s), e) {
            default:
                case 6:
                case 0:
                r = i,
            g = a,
            b = s;
            break;
            case 1:
                    r = a,
                g = i,
                b = s;
                break;
            case 2:
                    r = s,
                g = i,
                b = a;
                break;
            case 3:
                    r = s,
                g = a,
                b = i;
                break;
            case 4:
                    r = a,
                g = s,
                b = i;
                break;
            case 5:
                    r = i,
                g = s,
                b = a
        }
        return [255 * r, 255 * g, 255 * b]
    }

    function f(t) {
        var e = t[0] / 100,
            i = t[1] / 100,
            n = t[2] / 100,
            a = t[3] / 100;
        return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a))]
    }

    function p(t) {
        var e, i, n, a = t[0] / 100,
            r = t[1] / 100,
            o = t[2] / 100;
        return i = -.9689 * a + 1.8758 * r + .0415 * o, n = .0557 * a + -.204 * r + 1.057 * o, e = .0031308 < (e = 3.2406 * a + -1.5372 * r + -.4986 * o) ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = .0031308 < i ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = .0031308 < n ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
    }

    function m(t) {
        var e = t[0],
            i = t[1],
            n = t[2];
        return i /= 100, n /= 108.883, e = .008856 < (e /= 95.047) ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = .008856 < i ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = .008856 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
    }

    function v(t) {
        var e, i, n, a, r = t[0],
            o = t[1],
            s = t[2];
        return a = r <= 8 ? (i = 100 * r / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((r + 16) / 116, 3), Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (o / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(o / 500 + a, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3)]
    }

    function y(t) {
        var e, i = t[0],
            n = t[1],
            a = t[2];
        return (e = 360 * Math.atan2(a, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + a * a), e]
    }

    function x(t) {
        return p(v(t))
    }

    function _(t) {
        var e, i = t[0],
            n = t[1];
        return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)]
    }

    function k(t) {
        return w[t]
    }
    var w = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        },
        M = {};
    for (var t in w) M[JSON.stringify(w[t])] = t;

    function S() {
        return new I
    }
    for (var C in a) {
        S[C + "Raw"] = function(e) {
            return function(t) {
                return "number" == typeof t && (t = Array.prototype.slice.call(arguments)), a[e](t)
            }
        }(C);
        var D = /(\w+)2(\w+)/.exec(C),
            P = D[1],
            T = D[2];
        (S[P] = S[P] || {})[T] = S[C] = function(n) {
            return function(t) {
                "number" == typeof t && (t = Array.prototype.slice.call(arguments));
                var e = a[n](t);
                if ("string" == typeof e || void 0 === e) return e;
                for (var i = 0; i < e.length; i++) e[i] = Math.round(e[i]);
                return e
            }
        }(C)
    }
    var I = function() {
        this.convs = {}
    };
    I.prototype.routeSpace = function(t, e) {
        var i = e[0];
        return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i))
    }, I.prototype.setValues = function(t, e) {
        return this.space = t, this.convs = {}, this.convs[t] = e, this
    }, I.prototype.getValues = function(t) {
        var e = this.convs[t];
        if (!e) {
            var i = this.space,
                n = this.convs[i];
            e = S[i][t](n), this.convs[t] = e
        }
        return e
    }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(e) {
        I.prototype[e] = function(t) {
            return this.routeSpace(e, arguments)
        }
    });
    var A = S,
        F = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        },
        O = {
            getRgba: L,
            getHsla: R,
            getRgb: function(t) {
                var e = L(t);
                return e && e.slice(0, 3)
            },
            getHsl: function(t) {
                var e = R(t);
                return e && e.slice(0, 3)
            },
            getHwb: W,
            getAlpha: function(t) {
                var e = L(t);
                return e ? e[3] : (e = R(t)) ? e[3] : (e = W(t)) ? e[3] : void 0
            },
            hexString: function(t, e) {
                e = void 0 !== e && 3 === t.length ? e : t[3];
                return "#" + E(t[0]) + E(t[1]) + E(t[2]) + (0 <= e && e < 1 ? E(Math.round(255 * e)) : "")
            },
            rgbString: function(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? N(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
            },
            rgbaString: N,
            percentString: function(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? z(t, e) : "rgb(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%)"
            },
            percentaString: z,
            hslString: function(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? B(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
            },
            hslaString: B,
            hwbString: function(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
            },
            keyword: function(t) {
                return H[t.slice(0, 3)]
            }
        };

    function L(t) {
        if (t) {
            var e = [0, 0, 0],
                i = 1,
                n = t.match(/^#([a-fA-F0-9]{3,4})$/i),
                a = "";
            if (n) {
                a = (n = n[1])[3];
                for (var r = 0; r < e.length; r++) e[r] = parseInt(n[r] + n[r], 16);
                a && (i = Math.round(parseInt(a + a, 16) / 255 * 100) / 100)
            } else if (n = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
                for (a = n[2], n = n[1], r = 0; r < e.length; r++) e[r] = parseInt(n.slice(2 * r, 2 * r + 2), 16);
                a && (i = Math.round(parseInt(a, 16) / 255 * 100) / 100)
            } else if (n = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for (r = 0; r < e.length; r++) e[r] = parseInt(n[r + 1]);
                i = parseFloat(n[4])
            } else if (n = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for (r = 0; r < e.length; r++) e[r] = Math.round(2.55 * parseFloat(n[r + 1]));
                i = parseFloat(n[4])
            } else if (n = t.match(/(\w+)/)) {
                if ("transparent" == n[1]) return [0, 0, 0, 0];
                if (!(e = F[n[1]])) return
            }
            for (r = 0; r < e.length; r++) e[r] = V(e[r], 0, 255);
            return i = i || 0 == i ? V(i, 0, 1) : 1, e[3] = i, e
        }
    }

    function R(t) {
        if (t) {
            var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (e) {
                var i = parseFloat(e[4]);
                return [V(parseInt(e[1]), 0, 360), V(parseFloat(e[2]), 0, 100), V(parseFloat(e[3]), 0, 100), V(isNaN(i) ? 1 : i, 0, 1)]
            }
        }
    }

    function W(t) {
        if (t) {
            var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (e) {
                var i = parseFloat(e[4]);
                return [V(parseInt(e[1]), 0, 360), V(parseFloat(e[2]), 0, 100), V(parseFloat(e[3]), 0, 100), V(isNaN(i) ? 1 : i, 0, 1)]
            }
        }
    }

    function N(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
    }

    function z(t, e) {
        return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
    }

    function B(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
    }

    function V(t, e, i) {
        return Math.min(Math.max(e, t), i)
    }

    function E(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e
    }
    var H = {};
    for (var Y in F) H[F[Y]] = Y;
    var j = function(t) {
        return t instanceof j ? t : this instanceof j ? (this.valid = !1, this.values = {
            rgb: [0, 0, 0],
            hsl: [0, 0, 0],
            hsv: [0, 0, 0],
            hwb: [0, 0, 0],
            cmyk: [0, 0, 0, 0],
            alpha: 1
        }, void("string" == typeof t ? (e = O.getRgba(t)) ? this.setValues("rgb", e) : (e = O.getHsla(t)) ? this.setValues("hsl", e) : (e = O.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new j(t);
        var e
    };
    j.prototype = {
        isValid: function() {
            return this.valid
        },
        rgb: function() {
            return this.setSpace("rgb", arguments)
        },
        hsl: function() {
            return this.setSpace("hsl", arguments)
        },
        hsv: function() {
            return this.setSpace("hsv", arguments)
        },
        hwb: function() {
            return this.setSpace("hwb", arguments)
        },
        cmyk: function() {
            return this.setSpace("cmyk", arguments)
        },
        rgbArray: function() {
            return this.values.rgb
        },
        hslArray: function() {
            return this.values.hsl
        },
        hsvArray: function() {
            return this.values.hsv
        },
        hwbArray: function() {
            var t = this.values;
            return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
        },
        cmykArray: function() {
            return this.values.cmyk
        },
        rgbaArray: function() {
            var t = this.values;
            return t.rgb.concat([t.alpha])
        },
        hslaArray: function() {
            var t = this.values;
            return t.hsl.concat([t.alpha])
        },
        alpha: function(t) {
            return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
        },
        red: function(t) {
            return this.setChannel("rgb", 0, t)
        },
        green: function(t) {
            return this.setChannel("rgb", 1, t)
        },
        blue: function(t) {
            return this.setChannel("rgb", 2, t)
        },
        hue: function(t) {
            return t = t && ((t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
        },
        saturation: function(t) {
            return this.setChannel("hsl", 1, t)
        },
        lightness: function(t) {
            return this.setChannel("hsl", 2, t)
        },
        saturationv: function(t) {
            return this.setChannel("hsv", 1, t)
        },
        whiteness: function(t) {
            return this.setChannel("hwb", 1, t)
        },
        blackness: function(t) {
            return this.setChannel("hwb", 2, t)
        },
        value: function(t) {
            return this.setChannel("hsv", 2, t)
        },
        cyan: function(t) {
            return this.setChannel("cmyk", 0, t)
        },
        magenta: function(t) {
            return this.setChannel("cmyk", 1, t)
        },
        yellow: function(t) {
            return this.setChannel("cmyk", 2, t)
        },
        black: function(t) {
            return this.setChannel("cmyk", 3, t)
        },
        hexString: function() {
            return O.hexString(this.values.rgb)
        },
        rgbString: function() {
            return O.rgbString(this.values.rgb, this.values.alpha)
        },
        rgbaString: function() {
            return O.rgbaString(this.values.rgb, this.values.alpha)
        },
        percentString: function() {
            return O.percentString(this.values.rgb, this.values.alpha)
        },
        hslString: function() {
            return O.hslString(this.values.hsl, this.values.alpha)
        },
        hslaString: function() {
            return O.hslaString(this.values.hsl, this.values.alpha)
        },
        hwbString: function() {
            return O.hwbString(this.values.hwb, this.values.alpha)
        },
        keyword: function() {
            return O.keyword(this.values.rgb, this.values.alpha)
        },
        rgbNumber: function() {
            var t = this.values.rgb;
            return t[0] << 16 | t[1] << 8 | t[2]
        },
        luminosity: function() {
            for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                var n = t[i] / 255;
                e[i] = n <= .03928 ? n / 12.92 : Math.pow((.055 + n) / 1.055, 2.4)
            }
            return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
        },
        contrast: function(t) {
            var e = this.luminosity(),
                i = t.luminosity();
            return i < e ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
        },
        level: function(t) {
            var e = this.contrast(t);
            return 7.1 <= e ? "AAA" : 4.5 <= e ? "AA" : ""
        },
        dark: function() {
            var t = this.values.rgb;
            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
        },
        light: function() {
            return !this.dark()
        },
        negate: function() {
            for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
            return this.setValues("rgb", t), this
        },
        lighten: function(t) {
            var e = this.values.hsl;
            return e[2] += e[2] * t, this.setValues("hsl", e), this
        },
        darken: function(t) {
            var e = this.values.hsl;
            return e[2] -= e[2] * t, this.setValues("hsl", e), this
        },
        saturate: function(t) {
            var e = this.values.hsl;
            return e[1] += e[1] * t, this.setValues("hsl", e), this
        },
        desaturate: function(t) {
            var e = this.values.hsl;
            return e[1] -= e[1] * t, this.setValues("hsl", e), this
        },
        whiten: function(t) {
            var e = this.values.hwb;
            return e[1] += e[1] * t, this.setValues("hwb", e), this
        },
        blacken: function(t) {
            var e = this.values.hwb;
            return e[2] += e[2] * t, this.setValues("hwb", e), this
        },
        greyscale: function() {
            var t = this.values.rgb,
                e = .3 * t[0] + .59 * t[1] + .11 * t[2];
            return this.setValues("rgb", [e, e, e]), this
        },
        clearer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e - e * t), this
        },
        opaquer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e + e * t), this
        },
        rotate: function(t) {
            var e = this.values.hsl,
                i = (e[0] + t) % 360;
            return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this
        },
        mix: function(t, e) {
            var i = t,
                n = void 0 === e ? .5 : e,
                a = 2 * n - 1,
                r = this.alpha() - i.alpha(),
                o = (1 + (a * r == -1 ? a : (a + r) / (1 + a * r))) / 2,
                s = 1 - o;
            return this.rgb(o * this.red() + s * i.red(), o * this.green() + s * i.green(), o * this.blue() + s * i.blue()).alpha(this.alpha() * n + i.alpha() * (1 - n))
        },
        toJSON: function() {
            return this.rgb()
        },
        clone: function() {
            var t, e, i = new j,
                n = this.values,
                a = i.values;
            for (var r in n) n.hasOwnProperty(r) && (t = n[r], "[object Array]" === (e = {}.toString.call(t)) ? a[r] = t.slice(0) : "[object Number]" === e ? a[r] = t : console.error("unexpected color value:", t));
            return i
        }
    }, j.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
    }, j.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
    }, j.prototype.getValues = function(t) {
        for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
        return 1 !== e.alpha && (i.a = e.alpha), i
    }, j.prototype.setValues = function(t, e) {
        var i, n, a = this.values,
            r = this.spaces,
            o = this.maxes,
            s = 1;
        if (this.valid = !0, "alpha" === t) s = e;
        else if (e.length) a[t] = e.slice(0, t.length), s = e[t.length];
        else if (void 0 !== e[t.charAt(0)]) {
            for (i = 0; i < t.length; i++) a[t][i] = e[t.charAt(i)];
            s = e.a
        } else if (void 0 !== e[r[t][0]]) {
            var l = r[t];
            for (i = 0; i < t.length; i++) a[t][i] = e[l[i]];
            s = e.alpha
        }
        if (a.alpha = Math.max(0, Math.min(1, void 0 === s ? a.alpha : s)), "alpha" === t) return !1;
        for (i = 0; i < t.length; i++) n = Math.max(0, Math.min(o[t][i], a[t][i])), a[t][i] = Math.round(n);
        for (var d in r) d !== t && (a[d] = A[t][d](a[t]));
        return !0
    }, j.prototype.setSpace = function(t, e) {
        var i = e[0];
        return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
    }, j.prototype.setChannel = function(t, e, i) {
        var n = this.values[t];
        return void 0 === i ? n[e] : (i === n[e] || (n[e] = i, this.setValues(t, n)), this)
    }, "undefined" != typeof window && (window.Color = j);
    var U, q = j,
        G = {
            noop: function() {},
            uid: (U = 0, function() {
                return U++
            }),
            isNullOrUndef: function(t) {
                return null == t
            },
            isArray: function(t) {
                if (Array.isArray && Array.isArray(t)) return !0;
                var e = Object.prototype.toString.call(t);
                return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6)
            },
            isObject: function(t) {
                return null !== t && "[object Object]" === Object.prototype.toString.call(t)
            },
            isFinite: function(t) {
                return ("number" == typeof t || t instanceof Number) && isFinite(t)
            },
            valueOrDefault: function(t, e) {
                return void 0 === t ? e : t
            },
            valueAtIndexOrDefault: function(t, e, i) {
                return G.valueOrDefault(G.isArray(t) ? t[e] : t, i)
            },
            callback: function(t, e, i) {
                if (t && "function" == typeof t.call) return t.apply(i, e)
            },
            each: function(t, e, i, n) {
                var a, r, o;
                if (G.isArray(t))
                    if (r = t.length, n)
                        for (a = r - 1; 0 <= a; a--) e.call(i, t[a], a);
                    else
                        for (a = 0; a < r; a++) e.call(i, t[a], a);
                else if (G.isObject(t))
                    for (r = (o = Object.keys(t)).length, a = 0; a < r; a++) e.call(i, t[o[a]], o[a])
            },
            arrayEquals: function(t, e) {
                var i, n, a, r;
                if (!t || !e || t.length !== e.length) return !1;
                for (i = 0, n = t.length; i < n; ++i)
                    if (a = t[i], r = e[i], a instanceof Array && r instanceof Array) {
                        if (!G.arrayEquals(a, r)) return !1
                    } else if (a !== r) return !1;
                return !0
            },
            clone: function(t) {
                if (G.isArray(t)) return t.map(G.clone);
                if (G.isObject(t)) {
                    for (var e = {}, i = Object.keys(t), n = i.length, a = 0; a < n; ++a) e[i[a]] = G.clone(t[i[a]]);
                    return e
                }
                return t
            },
            _merger: function(t, e, i, n) {
                var a = e[t],
                    r = i[t];
                G.isObject(a) && G.isObject(r) ? G.merge(a, r, n) : e[t] = G.clone(r)
            },
            _mergerIf: function(t, e, i) {
                var n = e[t],
                    a = i[t];
                G.isObject(n) && G.isObject(a) ? G.mergeIf(n, a) : e.hasOwnProperty(t) || (e[t] = G.clone(a))
            },
            merge: function(t, e, i) {
                var n, a, r, o, s, l = G.isArray(e) ? e : [e],
                    d = l.length;
                if (!G.isObject(t)) return t;
                for (n = (i = i || {}).merger || G._merger, a = 0; a < d; ++a)
                    if (e = l[a], G.isObject(e))
                        for (s = 0, o = (r = Object.keys(e)).length; s < o; ++s) n(r[s], t, e, i);
                return t
            },
            mergeIf: function(t, e) {
                return G.merge(t, e, {
                    merger: G._mergerIf
                })
            },
            extend: function(i) {
                for (var t = function(t, e) {
                        i[e] = t
                    }, e = 1, n = arguments.length; e < n; ++e) G.each(arguments[e], t);
                return i
            },
            inherits: function(t) {
                function e() {
                    this.constructor = n
                }
                var i = this,
                    n = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                        return i.apply(this, arguments)
                    };
                return e.prototype = i.prototype, n.prototype = new e, n.extend = G.inherits, t && G.extend(n.prototype, t), n.__super__ = i.prototype, n
            }
        },
        Z = G;
    G.callCallback = G.callback, G.indexOf = function(t, e, i) {
        return Array.prototype.indexOf.call(t, e, i)
    }, G.getValueOrDefault = G.valueOrDefault, G.getValueAtIndexOrDefault = G.valueAtIndexOrDefault;
    var X = {
            linear: function(t) {
                return t
            },
            easeInQuad: function(t) {
                return t * t
            },
            easeOutQuad: function(t) {
                return -t * (t - 2)
            },
            easeInOutQuad: function(t) {
                return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            },
            easeInCubic: function(t) {
                return t * t * t
            },
            easeOutCubic: function(t) {
                return (t -= 1) * t * t + 1
            },
            easeInOutCubic: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            easeInQuart: function(t) {
                return t * t * t * t
            },
            easeOutQuart: function(t) {
                return -((t -= 1) * t * t * t - 1)
            },
            easeInOutQuart: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            },
            easeInQuint: function(t) {
                return t * t * t * t * t
            },
            easeOutQuint: function(t) {
                return (t -= 1) * t * t * t * t + 1
            },
            easeInOutQuint: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            easeInSine: function(t) {
                return 1 - Math.cos(t * (Math.PI / 2))
            },
            easeOutSine: function(t) {
                return Math.sin(t * (Math.PI / 2))
            },
            easeInOutSine: function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            },
            easeInExpo: function(t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
            },
            easeOutExpo: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            easeInOutExpo: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
            },
            easeInCirc: function(t) {
                return 1 <= t ? t : -(Math.sqrt(1 - t * t) - 1)
            },
            easeOutCirc: function(t) {
                return Math.sqrt(1 - (t -= 1) * t)
            },
            easeInOutCirc: function(t) {
                return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            easeInElastic: function(t) {
                var e = 1.70158,
                    i = 0,
                    n = 1;
                return 0 === t ? 0 : 1 === t ? 1 : (i = i || .3, e = n < 1 ? (n = 1, i / 4) : i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i))
            },
            easeOutElastic: function(t) {
                var e = 1.70158,
                    i = 0,
                    n = 1;
                return 0 === t ? 0 : 1 === t ? 1 : (i = i || .3, e = n < 1 ? (n = 1, i / 4) : i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1)
            },
            easeInOutElastic: function(t) {
                var e = 1.70158,
                    i = 0,
                    n = 1;
                return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i = i || .45, e = n < 1 ? (n = 1, i / 4) : i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1)
            },
            easeInBack: function(t) {
                return t * t * (2.70158 * t - 1.70158)
            },
            easeOutBack: function(t) {
                return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
            },
            easeInOutBack: function(t) {
                var e = 1.70158;
                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            },
            easeInBounce: function(t) {
                return 1 - X.easeOutBounce(1 - t)
            },
            easeOutBounce: function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            },
            easeInOutBounce: function(t) {
                return t < .5 ? .5 * X.easeInBounce(2 * t) : .5 * X.easeOutBounce(2 * t - 1) + .5
            }
        },
        K = {
            effects: X
        };
    Z.easingEffects = X;
    var $ = Math.PI,
        J = $ / 180,
        Q = 2 * $,
        tt = $ / 2,
        et = $ / 4,
        it = 2 * $ / 3,
        nt = {
            clear: function(t) {
                t.ctx.clearRect(0, 0, t.width, t.height)
            },
            roundedRect: function(t, e, i, n, a, r) {
                if (r) {
                    var o = Math.min(r, a / 2, n / 2),
                        s = e + o,
                        l = i + o,
                        d = e + n - o,
                        u = i + a - o;
                    t.moveTo(e, l), s < d && l < u ? (t.arc(s, l, o, -$, -tt), t.arc(d, l, o, -tt, 0), t.arc(d, u, o, 0, tt), t.arc(s, u, o, tt, $)) : s < d ? (t.moveTo(s, i), t.arc(d, l, o, -tt, tt), t.arc(s, l, o, tt, $ + tt)) : l < u ? (t.arc(s, l, o, -$, 0), t.arc(s, u, o, 0, $)) : t.arc(s, l, o, -$, $), t.closePath(), t.moveTo(e, i)
                } else t.rect(e, i, n, a)
            },
            drawPoint: function(t, e, i, n, a, r) {
                var o, s, l, d, u, h = (r || 0) * J;
                if (!e || "object" != typeof e || "[object HTMLImageElement]" !== (o = e.toString()) && "[object HTMLCanvasElement]" !== o) {
                    if (!(isNaN(i) || i <= 0)) {
                        switch (t.beginPath(), e) {
                            default: t.arc(n, a, i, 0, Q),
                            t.closePath();
                            break;
                            case "triangle":
                                    t.moveTo(n + Math.sin(h) * i, a - Math.cos(h) * i),
                                h += it,
                                t.lineTo(n + Math.sin(h) * i, a - Math.cos(h) * i),
                                h += it,
                                t.lineTo(n + Math.sin(h) * i, a - Math.cos(h) * i),
                                t.closePath();
                                break;
                            case "rectRounded":
                                    d = i - (u = .516 * i),
                                s = Math.cos(h + et) * d,
                                l = Math.sin(h + et) * d,
                                t.arc(n - s, a - l, u, h - $, h - tt),
                                t.arc(n + l, a - s, u, h - tt, h),
                                t.arc(n + s, a + l, u, h, h + tt),
                                t.arc(n - l, a + s, u, h + tt, h + $),
                                t.closePath();
                                break;
                            case "rect":
                                    if (!r) {
                                    d = Math.SQRT1_2 * i, t.rect(n - d, a - d, 2 * d, 2 * d);
                                    break
                                }h += et;
                            case "rectRot":
                                    s = Math.cos(h) * i,
                                l = Math.sin(h) * i,
                                t.moveTo(n - s, a - l),
                                t.lineTo(n + l, a - s),
                                t.lineTo(n + s, a + l),
                                t.lineTo(n - l, a + s),
                                t.closePath();
                                break;
                            case "crossRot":
                                    h += et;
                            case "cross":
                                    s = Math.cos(h) * i,
                                l = Math.sin(h) * i,
                                t.moveTo(n - s, a - l),
                                t.lineTo(n + s, a + l),
                                t.moveTo(n + l, a - s),
                                t.lineTo(n - l, a + s);
                                break;
                            case "star":
                                    s = Math.cos(h) * i,
                                l = Math.sin(h) * i,
                                t.moveTo(n - s, a - l),
                                t.lineTo(n + s, a + l),
                                t.moveTo(n + l, a - s),
                                t.lineTo(n - l, a + s),
                                h += et,
                                s = Math.cos(h) * i,
                                l = Math.sin(h) * i,
                                t.moveTo(n - s, a - l),
                                t.lineTo(n + s, a + l),
                                t.moveTo(n + l, a - s),
                                t.lineTo(n - l, a + s);
                                break;
                            case "line":
                                    s = Math.cos(h) * i,
                                l = Math.sin(h) * i,
                                t.moveTo(n - s, a - l),
                                t.lineTo(n + s, a + l);
                                break;
                            case "dash":
                                    t.moveTo(n, a),
                                t.lineTo(n + Math.cos(h) * i, a + Math.sin(h) * i)
                        }
                        t.fill(), t.stroke()
                    }
                } else t.drawImage(e, n - e.width / 2, a - e.height / 2, e.width, e.height)
            },
            _isPointInArea: function(t, e) {
                return t.x > e.left - 1e-6 && t.x < e.right + 1e-6 && t.y > e.top - 1e-6 && t.y < e.bottom + 1e-6
            },
            clipArea: function(t, e) {
                t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
            },
            unclipArea: function(t) {
                t.restore()
            },
            lineTo: function(t, e, i, n) {
                var a = i.steppedLine;
                if (a) {
                    if ("middle" === a) {
                        var r = (e.x + i.x) / 2;
                        t.lineTo(r, n ? i.y : e.y), t.lineTo(r, n ? e.y : i.y)
                    } else "after" === a && !n || "after" !== a && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
                    t.lineTo(i.x, i.y)
                } else i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y)
            }
        },
        at = nt;
    Z.clear = nt.clear, Z.drawRoundedRectangle = function(t) {
        t.beginPath(), nt.roundedRect.apply(nt, arguments)
    };
    var rt = {
        _set: function(t, e) {
            return Z.merge(this[t] || (this[t] = {}), e)
        }
    };
    rt._set("global", {
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        defaultLineHeight: 1.2,
        showLines: !0
    });
    var ot = rt,
        st = Z.valueOrDefault,
        lt = {
            toLineHeight: function(t, e) {
                var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                if (!i || "normal" === i[1]) return 1.2 * e;
                switch (t = +i[2], i[3]) {
                    case "px":
                        return t;
                    case "%":
                        t /= 100
                }
                return e * t
            },
            toPadding: function(t) {
                var e, i, n, a;
                return Z.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, n = +t.bottom || 0, a = +t.left || 0) : e = i = n = a = +t || 0, {
                    top: e,
                    right: i,
                    bottom: n,
                    left: a,
                    height: e + n,
                    width: a + i
                }
            },
            _parseFont: function(t) {
                var e, i = ot.global,
                    n = st(t.fontSize, i.defaultFontSize),
                    a = {
                        family: st(t.fontFamily, i.defaultFontFamily),
                        lineHeight: Z.options.toLineHeight(st(t.lineHeight, i.defaultLineHeight), n),
                        size: n,
                        style: st(t.fontStyle, i.defaultFontStyle),
                        weight: null,
                        string: ""
                    };
                return a.string = !(e = a) || Z.isNullOrUndef(e.size) || Z.isNullOrUndef(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family, a
            },
            resolve: function(t, e, i) {
                var n, a, r;
                for (n = 0, a = t.length; n < a; ++n)
                    if (void 0 !== (r = t[n]) && (void 0 !== e && "function" == typeof r && (r = r(e)), void 0 !== i && Z.isArray(r) && (r = r[i]), void 0 !== r)) return r
            }
        },
        dt = Z,
        ut = K,
        ht = at,
        ct = lt;
    dt.easing = ut, dt.canvas = ht, dt.options = ct;

    function ft(t) {
        dt.extend(this, t), this.initialize.apply(this, arguments)
    }
    dt.extend(ft.prototype, {
        initialize: function() {
            this.hidden = !1
        },
        pivot: function() {
            return this._view || (this._view = dt.clone(this._model)), this._start = {}, this
        },
        transition: function(t) {
            var e = this._model,
                i = this._start,
                n = this._view;
            return e && 1 !== t ? (n = n || (this._view = {}), function(t, e, i, n) {
                var a, r, o, s, l, d, u, h, c, f = Object.keys(i);
                for (a = 0, r = f.length; a < r; ++a)
                    if (d = i[o = f[a]], e.hasOwnProperty(o) || (e[o] = d), (s = e[o]) !== d && "_" !== o[0]) {
                        if (t.hasOwnProperty(o) || (t[o] = s), (u = typeof d) == typeof(l = t[o]))
                            if ("string" == u) {
                                if ((h = q(l)).valid && (c = q(d)).valid) {
                                    e[o] = c.mix(h, n).rgbString();
                                    continue
                                }
                            } else if (dt.isFinite(l) && dt.isFinite(d)) {
                            e[o] = l + (d - l) * n;
                            continue
                        }
                        e[o] = d
                    }
            }(i = i || (this._start = {}), n, e, t)) : (this._view = e, this._start = null), this
        },
        tooltipPosition: function() {
            return {
                x: this._model.x,
                y: this._model.y
            }
        },
        hasValue: function() {
            return dt.isNumber(this._model.x) && dt.isNumber(this._model.y)
        }
    }), ft.extend = dt.inherits;
    var gt = ft,
        pt = gt.extend({
            chart: null,
            currentStep: 0,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null
        }),
        mt = pt;
    Object.defineProperty(pt.prototype, "animationObject", {
        get: function() {
            return this
        }
    }), Object.defineProperty(pt.prototype, "chartInstance", {
        get: function() {
            return this.chart
        },
        set: function(t) {
            this.chart = t
        }
    }), ot._set("global", {
        animation: {
            duration: 1e3,
            easing: "easeOutQuart",
            onProgress: dt.noop,
            onComplete: dt.noop
        }
    });
    var vt = {
            animations: [],
            request: null,
            addAnimation: function(t, e, i, n) {
                var a, r, o = this.animations;
                for (e.chart = t, e.startTime = Date.now(), e.duration = i, n || (t.animating = !0), a = 0, r = o.length; a < r; ++a)
                    if (o[a].chart === t) return void(o[a] = e);
                o.push(e), 1 === o.length && this.requestAnimationFrame()
            },
            cancelAnimation: function(e) {
                var t = dt.findIndex(this.animations, function(t) {
                    return t.chart === e
                }); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1)
            },
            requestAnimationFrame: function() {
                var t = this;
                null === t.request && (t.request = dt.requestAnimFrame.call(window, function() {
                    t.request = null, t.startDigest()
                }))
            },
            startDigest: function() {
                this.advance(), 0 < this.animations.length && this.requestAnimationFrame()
            },
            advance: function() {
                for (var t, e, i, n, a = this.animations, r = 0; r < a.length;) e = (t = a[r]).chart, i = t.numSteps, n = Math.floor((Date.now() - t.startTime) / t.duration * i) + 1, t.currentStep = Math.min(n, i), dt.callback(t.render, [e, t], e), dt.callback(t.onAnimationProgress, [t], e), t.currentStep >= i ? (dt.callback(t.onAnimationComplete, [t], e), e.animating = !1, a.splice(r, 1)) : ++r
            }
        },
        bt = dt.options.resolve,
        yt = ["push", "pop", "shift", "splice", "unshift"];

    function xt(e, t) {
        var i = e._chartjs;
        if (i) {
            var n = i.listeners,
                a = n.indexOf(t); - 1 !== a && n.splice(a, 1), 0 < n.length || (yt.forEach(function(t) {
                delete e[t]
            }), delete e._chartjs)
        }
    }

    function _t(t, e) {
        this.initialize(t, e)
    }
    dt.extend(_t.prototype, {
        datasetElementType: null,
        dataElementType: null,
        initialize: function(t, e) {
            this.chart = t, this.index = e, this.linkScales(), this.addElements()
        },
        updateIndex: function(t) {
            this.index = t
        },
        linkScales: function() {
            var t = this.getMeta(),
                e = this.getDataset();
            null !== t.xAxisID && t.xAxisID in this.chart.scales || (t.xAxisID = e.xAxisID || this.chart.options.scales.xAxes[0].id), null !== t.yAxisID && t.yAxisID in this.chart.scales || (t.yAxisID = e.yAxisID || this.chart.options.scales.yAxes[0].id)
        },
        getDataset: function() {
            return this.chart.data.datasets[this.index]
        },
        getMeta: function() {
            return this.chart.getDatasetMeta(this.index)
        },
        getScaleForId: function(t) {
            return this.chart.scales[t]
        },
        _getValueScaleId: function() {
            return this.getMeta().yAxisID
        },
        _getIndexScaleId: function() {
            return this.getMeta().xAxisID
        },
        _getValueScale: function() {
            return this.getScaleForId(this._getValueScaleId())
        },
        _getIndexScale: function() {
            return this.getScaleForId(this._getIndexScaleId())
        },
        reset: function() {
            this.update(!0)
        },
        destroy: function() {
            this._data && xt(this._data, this)
        },
        createMetaDataset: function() {
            var t = this.datasetElementType;
            return t && new t({
                _chart: this.chart,
                _datasetIndex: this.index
            })
        },
        createMetaData: function(t) {
            var e = this.dataElementType;
            return e && new e({
                _chart: this.chart,
                _datasetIndex: this.index,
                _index: t
            })
        },
        addElements: function() {
            var t, e, i = this.getMeta(),
                n = this.getDataset().data || [],
                a = i.data;
            for (t = 0, e = n.length; t < e; ++t) a[t] = a[t] || this.createMetaData(t);
            i.dataset = i.dataset || this.createMetaDataset()
        },
        addElementAndReset: function(t) {
            var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
        },
        buildOrUpdateElements: function() {
            var a, t = this.getDataset(),
                e = t.data || (t.data = []);
            this._data !== e && (this._data && xt(this._data, this), e && Object.isExtensible(e) && ((a = e)._chartjs ? a._chartjs.listeners.push(this) : (Object.defineProperty(a, "_chartjs", {
                configurable: !0,
                enumerable: !1,
                value: {
                    listeners: [this]
                }
            }), yt.forEach(function(t) {
                var i = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                    n = a[t];
                Object.defineProperty(a, t, {
                    configurable: !0,
                    enumerable: !1,
                    value: function() {
                        var e = Array.prototype.slice.call(arguments),
                            t = n.apply(this, e);
                        return dt.each(a._chartjs.listeners, function(t) {
                            "function" == typeof t[i] && t[i].apply(t, e)
                        }), t
                    }
                })
            }))), this._data = e), this.resyncElements()
        },
        update: dt.noop,
        transition: function(t) {
            for (var e = this.getMeta(), i = e.data || [], n = i.length, a = 0; a < n; ++a) i[a].transition(t);
            e.dataset && e.dataset.transition(t)
        },
        draw: function() {
            var t = this.getMeta(),
                e = t.data || [],
                i = e.length,
                n = 0;
            for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw()
        },
        removeHoverStyle: function(t) {
            dt.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle
        },
        setHoverStyle: function(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                a = t._model,
                r = dt.getHoverColor;
            t.$previousStyle = {
                backgroundColor: a.backgroundColor,
                borderColor: a.borderColor,
                borderWidth: a.borderWidth
            }, a.backgroundColor = bt([n.hoverBackgroundColor, e.hoverBackgroundColor, r(a.backgroundColor)], void 0, i), a.borderColor = bt([n.hoverBorderColor, e.hoverBorderColor, r(a.borderColor)], void 0, i), a.borderWidth = bt([n.hoverBorderWidth, e.hoverBorderWidth, a.borderWidth], void 0, i)
        },
        resyncElements: function() {
            var t = this.getMeta(),
                e = this.getDataset().data,
                i = t.data.length,
                n = e.length;
            n < i ? t.data.splice(n, i - n) : i < n && this.insertElements(i, n - i)
        },
        insertElements: function(t, e) {
            for (var i = 0; i < e; ++i) this.addElementAndReset(t + i)
        },
        onDataPush: function() {
            var t = arguments.length;
            this.insertElements(this.getDataset().data.length - t, t)
        },
        onDataPop: function() {
            this.getMeta().data.pop()
        },
        onDataShift: function() {
            this.getMeta().data.shift()
        },
        onDataSplice: function(t, e) {
            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
        },
        onDataUnshift: function() {
            this.insertElements(0, arguments.length)
        }
    }), _t.extend = dt.inherits;
    var kt = _t;
    ot._set("global", {
        elements: {
            arc: {
                backgroundColor: ot.global.defaultColor,
                borderColor: "#fff",
                borderWidth: 2,
                borderAlign: "center"
            }
        }
    });
    var wt = gt.extend({
            inLabelRange: function(t) {
                var e = this._view;
                return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
            },
            inRange: function(t, e) {
                var i = this._view;
                if (i) {
                    for (var n = dt.getAngleFromPoint(i, {
                            x: t,
                            y: e
                        }), a = n.angle, r = n.distance, o = i.startAngle, s = i.endAngle; s < o;) s += 2 * Math.PI;
                    for (; s < a;) a -= 2 * Math.PI;
                    for (; a < o;) a += 2 * Math.PI;
                    var l = o <= a && a <= s,
                        d = r >= i.innerRadius && r <= i.outerRadius;
                    return l && d
                }
                return !1
            },
            getCenterPoint: function() {
                var t = this._view,
                    e = (t.startAngle + t.endAngle) / 2,
                    i = (t.innerRadius + t.outerRadius) / 2;
                return {
                    x: t.x + Math.cos(e) * i,
                    y: t.y + Math.sin(e) * i
                }
            },
            getArea: function() {
                var t = this._view;
                return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
            },
            tooltipPosition: function() {
                var t = this._view,
                    e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                    i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                return {
                    x: t.x + Math.cos(e) * i,
                    y: t.y + Math.sin(e) * i
                }
            },
            draw: function() {
                var t, e = this._chart.ctx,
                    i = this._view,
                    n = i.startAngle,
                    a = i.endAngle,
                    r = "inner" === i.borderAlign ? .33 : 0;
                e.save(), e.beginPath(), e.arc(i.x, i.y, Math.max(i.outerRadius - r, 0), n, a), e.arc(i.x, i.y, i.innerRadius, a, n, !0), e.closePath(), e.fillStyle = i.backgroundColor, e.fill(), i.borderWidth && ("inner" === i.borderAlign ? (e.beginPath(), t = r / i.outerRadius, e.arc(i.x, i.y, i.outerRadius, n - t, a + t), i.innerRadius > r ? (t = r / i.innerRadius, e.arc(i.x, i.y, i.innerRadius - r, a + t, n - t, !0)) : e.arc(i.x, i.y, r, a + Math.PI / 2, n - Math.PI / 2), e.closePath(), e.clip(), e.beginPath(), e.arc(i.x, i.y, i.outerRadius, n, a), e.arc(i.x, i.y, i.innerRadius, a, n, !0), e.closePath(), e.lineWidth = 2 * i.borderWidth, e.lineJoin = "round") : (e.lineWidth = i.borderWidth, e.lineJoin = "bevel"), e.strokeStyle = i.borderColor, e.stroke()), e.restore()
            }
        }),
        Mt = dt.valueOrDefault,
        St = ot.global.defaultColor;
    ot._set("global", {
        elements: {
            line: {
                tension: .4,
                backgroundColor: St,
                borderWidth: 3,
                borderColor: St,
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                capBezierPoints: !0,
                fill: !0
            }
        }
    });
    var Ct = gt.extend({
            draw: function() {
                var t, e, i, n, a = this._view,
                    r = this._chart.ctx,
                    o = a.spanGaps,
                    s = this._children.slice(),
                    l = ot.global,
                    d = l.elements.line,
                    u = -1;
                for (this._loop && s.length && s.push(s[0]), r.save(), r.lineCap = a.borderCapStyle || d.borderCapStyle, r.setLineDash && r.setLineDash(a.borderDash || d.borderDash), r.lineDashOffset = Mt(a.borderDashOffset, d.borderDashOffset), r.lineJoin = a.borderJoinStyle || d.borderJoinStyle, r.lineWidth = Mt(a.borderWidth, d.borderWidth), r.strokeStyle = a.borderColor || l.defaultColor, r.beginPath(), u = -1, t = 0; t < s.length; ++t) e = s[t], i = dt.previousItem(s, t), n = e._view, 0 === t ? n.skip || (r.moveTo(n.x, n.y), u = t) : (i = -1 === u ? i : s[u], n.skip || (u !== t - 1 && !o || -1 === u ? r.moveTo(n.x, n.y) : dt.canvas.lineTo(r, i._view, e._view), u = t));
                r.stroke(), r.restore()
            }
        }),
        Dt = dt.valueOrDefault,
        Pt = ot.global.defaultColor;

    function Tt(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
    }
    ot._set("global", {
        elements: {
            point: {
                radius: 3,
                pointStyle: "circle",
                backgroundColor: Pt,
                borderColor: Pt,
                borderWidth: 1,
                hitRadius: 1,
                hoverRadius: 4,
                hoverBorderWidth: 1
            }
        }
    });
    var It = gt.extend({
            inRange: function(t, e) {
                var i = this._view;
                return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2)
            },
            inLabelRange: Tt,
            inXRange: Tt,
            inYRange: function(t) {
                var e = this._view;
                return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
            },
            getCenterPoint: function() {
                var t = this._view;
                return {
                    x: t.x,
                    y: t.y
                }
            },
            getArea: function() {
                return Math.PI * Math.pow(this._view.radius, 2)
            },
            tooltipPosition: function() {
                var t = this._view;
                return {
                    x: t.x,
                    y: t.y,
                    padding: t.radius + t.borderWidth
                }
            },
            draw: function(t) {
                var e = this._view,
                    i = this._chart.ctx,
                    n = e.pointStyle,
                    a = e.rotation,
                    r = e.radius,
                    o = e.x,
                    s = e.y,
                    l = ot.global,
                    d = l.defaultColor;
                e.skip || void 0 !== t && !dt.canvas._isPointInArea(e, t) || (i.strokeStyle = e.borderColor || d, i.lineWidth = Dt(e.borderWidth, l.elements.point.borderWidth), i.fillStyle = e.backgroundColor || d, dt.canvas.drawPoint(i, n, r, o, s, a))
            }
        }),
        At = ot.global.defaultColor;

    function Ft(t) {
        return t && void 0 !== t.width
    }

    function Ot(t) {
        var e, i, n, a, r;
        return a = Ft(t) ? (r = t.width / 2, e = t.x - r, i = t.x + r, n = Math.min(t.y, t.base), Math.max(t.y, t.base)) : (r = t.height / 2, e = Math.min(t.x, t.base), i = Math.max(t.x, t.base), n = t.y - r, t.y + r), {
            left: e,
            top: n,
            right: i,
            bottom: a
        }
    }

    function Lt(t, e, i) {
        return t === e ? i : t === i ? e : t
    }

    function Rt(t, e, i) {
        var n = null === e,
            a = null === i,
            r = !(!t || n && a) && Ot(t);
        return r && (n || e >= r.left && e <= r.right) && (a || i >= r.top && i <= r.bottom)
    }
    ot._set("global", {
        elements: {
            rectangle: {
                backgroundColor: At,
                borderColor: At,
                borderSkipped: "bottom",
                borderWidth: 0
            }
        }
    });
    var Wt = gt.extend({
            draw: function() {
                var t, e, i, n, a, r = this._chart.ctx,
                    o = this._view,
                    s = (e = Ot(t = o), i = e.right - e.left, n = e.bottom - e.top, a = function(t, e, i) {
                        var n, a, r, o, s, l, d, u = t.borderWidth,
                            h = (l = (s = t).borderSkipped, d = {}, l && (s.horizontal ? s.base > s.x && (l = Lt(l, "left", "right")) : s.base < s.y && (l = Lt(l, "bottom", "top")), d[l] = !0), d);
                        return dt.isObject(u) ? (n = +u.top || 0, a = +u.right || 0, r = +u.bottom || 0, o = +u.left || 0) : n = a = r = o = +u || 0, {
                            t: h.top || n < 0 ? 0 : i < n ? i : n,
                            r: h.right || a < 0 ? 0 : e < a ? e : a,
                            b: h.bottom || r < 0 ? 0 : i < r ? i : r,
                            l: h.left || o < 0 ? 0 : e < o ? e : o
                        }
                    }(t, i / 2, n / 2), {
                        outer: {
                            x: e.left,
                            y: e.top,
                            w: i,
                            h: n
                        },
                        inner: {
                            x: e.left + a.l,
                            y: e.top + a.t,
                            w: i - a.l - a.r,
                            h: n - a.t - a.b
                        }
                    }),
                    l = s.outer,
                    d = s.inner;
                r.fillStyle = o.backgroundColor, r.fillRect(l.x, l.y, l.w, l.h), l.w === d.w && l.h === d.h || (r.save(), r.beginPath(), r.rect(l.x, l.y, l.w, l.h), r.clip(), r.fillStyle = o.borderColor, r.rect(d.x, d.y, d.w, d.h), r.fill("evenodd"), r.restore())
            },
            height: function() {
                var t = this._view;
                return t.base - t.y
            },
            inRange: function(t, e) {
                return Rt(this._view, t, e)
            },
            inLabelRange: function(t, e) {
                var i = this._view;
                return Ft(i) ? Rt(i, t, null) : Rt(i, null, e)
            },
            inXRange: function(t) {
                return Rt(this._view, t, null)
            },
            inYRange: function(t) {
                return Rt(this._view, null, t)
            },
            getCenterPoint: function() {
                var t, e, i = this._view;
                return e = Ft(i) ? (t = i.x, (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, i.y), {
                    x: t,
                    y: e
                }
            },
            getArea: function() {
                var t = this._view;
                return Ft(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base)
            },
            tooltipPosition: function() {
                var t = this._view;
                return {
                    x: t.x,
                    y: t.y
                }
            }
        }),
        Nt = {},
        zt = wt,
        Bt = Ct,
        Vt = It,
        Et = Wt;
    Nt.Arc = zt, Nt.Line = Bt, Nt.Point = Vt, Nt.Rectangle = Et;
    var Ht = dt.options.resolve;
    ot._set("bar", {
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [{
                type: "category",
                categoryPercentage: .8,
                barPercentage: .9,
                offset: !0,
                gridLines: {
                    offsetGridLines: !0
                }
            }],
            yAxes: [{
                type: "linear"
            }]
        }
    });
    var Yt = kt.extend({
            dataElementType: Nt.Rectangle,
            initialize: function() {
                var t;
                kt.prototype.initialize.apply(this, arguments), (t = this.getMeta()).stack = this.getDataset().stack, t.bar = !0
            },
            update: function(t) {
                var e, i, n = this.getMeta().data;
                for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t)
            },
            updateElement: function(t, e, i) {
                var n = this.getMeta(),
                    a = this.getDataset(),
                    r = this._resolveElementOptions(t, e);
                t._xScale = this.getScaleForId(n.xAxisID), t._yScale = this.getScaleForId(n.yAxisID), t._datasetIndex = this.index, t._index = e, t._model = {
                    backgroundColor: r.backgroundColor,
                    borderColor: r.borderColor,
                    borderSkipped: r.borderSkipped,
                    borderWidth: r.borderWidth,
                    datasetLabel: a.label,
                    label: this.chart.data.labels[e]
                }, this._updateElementGeometry(t, e, i), t.pivot()
            },
            _updateElementGeometry: function(t, e, i) {
                var n = t._model,
                    a = this._getValueScale(),
                    r = a.getBasePixel(),
                    o = a.isHorizontal(),
                    s = this._ruler || this.getRuler(),
                    l = this.calculateBarValuePixels(this.index, e),
                    d = this.calculateBarIndexPixels(this.index, e, s);
                n.horizontal = o, n.base = i ? r : l.base, n.x = o ? i ? r : l.head : d.center, n.y = o ? d.center : i ? r : l.head, n.height = o ? d.size : void 0, n.width = o ? void 0 : d.size
            },
            _getStacks: function(t) {
                var e, i, n = this.chart,
                    a = this._getIndexScale().options.stacked,
                    r = void 0 === t ? n.data.datasets.length : t + 1,
                    o = [];
                for (e = 0; e < r; ++e)(i = n.getDatasetMeta(e)).bar && n.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === o.indexOf(i.stack) || void 0 === a && (void 0 === i.stack || -1 === o.indexOf(i.stack))) && o.push(i.stack);
                return o
            },
            getStackCount: function() {
                return this._getStacks().length
            },
            getStackIndex: function(t, e) {
                var i = this._getStacks(t),
                    n = void 0 !== e ? i.indexOf(e) : -1;
                return -1 === n ? i.length - 1 : n
            },
            getRuler: function() {
                var t, e, i = this._getIndexScale(),
                    n = this.getStackCount(),
                    a = this.index,
                    r = i.isHorizontal(),
                    o = r ? i.left : i.top,
                    s = o + (r ? i.width : i.height),
                    l = [];
                for (t = 0, e = this.getMeta().data.length; t < e; ++t) l.push(i.getPixelForValue(null, t, a));
                return {
                    min: dt.isNullOrUndef(i.options.barThickness) ? function(t, e) {
                        var i, n, a, r, o = t.isHorizontal() ? t.width : t.height,
                            s = t.getTicks();
                        for (a = 1, r = e.length; a < r; ++a) o = Math.min(o, Math.abs(e[a] - e[a - 1]));
                        for (a = 0, r = s.length; a < r; ++a) n = t.getPixelForTick(a), o = 0 < a ? Math.min(o, n - i) : o, i = n;
                        return o
                    }(i, l) : -1,
                    pixels: l,
                    start: o,
                    end: s,
                    stackCount: n,
                    scale: i
                }
            },
            calculateBarValuePixels: function(t, e) {
                var i, n, a, r, o, s, l = this.chart,
                    d = this.getMeta(),
                    u = this._getValueScale(),
                    h = u.isHorizontal(),
                    c = l.data.datasets,
                    f = +u.getRightValue(c[t].data[e]),
                    g = u.options.minBarLength,
                    p = u.options.stacked,
                    m = d.stack,
                    v = 0;
                if (p || void 0 === p && void 0 !== m)
                    for (i = 0; i < t; ++i)(n = l.getDatasetMeta(i)).bar && n.stack === m && n.controller._getValueScaleId() === u.id && l.isDatasetVisible(i) && (a = +u.getRightValue(c[i].data[e]), (f < 0 && a < 0 || 0 <= f && 0 < a) && (v += a));
                return r = u.getPixelForValue(v), s = (o = u.getPixelForValue(v + f)) - r, void 0 !== g && Math.abs(s) < g && (s = g, o = 0 <= f && !h || f < 0 && h ? r - g : r + g), {
                    size: s,
                    base: r,
                    head: o,
                    center: o + s / 2
                }
            },
            calculateBarIndexPixels: function(t, e, i) {
                var n, a, r, o, s, l, d, u, h, c, f, g, p, m, v, b, y, x = i.scale.options,
                    _ = "flex" === x.barThickness ? (h = e, f = x, p = (c = i).pixels, m = p[h], v = 0 < h ? p[h - 1] : null, b = h < p.length - 1 ? p[h + 1] : null, y = f.categoryPercentage, null === v && (v = m - (null === b ? c.end - c.start : b - m)), null === b && (b = m + m - v), g = m - (m - Math.min(v, b)) / 2 * y, {
                        chunk: Math.abs(b - v) / 2 * y / c.stackCount,
                        ratio: f.barPercentage,
                        start: g
                    }) : (n = e, a = i, l = (r = x).barThickness, d = a.stackCount, u = a.pixels[n], s = dt.isNullOrUndef(l) ? (o = a.min * r.categoryPercentage, r.barPercentage) : (o = l * d, 1), {
                        chunk: o / d,
                        ratio: s,
                        start: u - o / 2
                    }),
                    k = this.getStackIndex(t, this.getMeta().stack),
                    w = _.start + _.chunk * k + _.chunk / 2,
                    M = Math.min(dt.valueOrDefault(x.maxBarThickness, 1 / 0), _.chunk * _.ratio);
                return {
                    base: w - M / 2,
                    head: w + M / 2,
                    center: w,
                    size: M
                }
            },
            draw: function() {
                var t = this.chart,
                    e = this._getValueScale(),
                    i = this.getMeta().data,
                    n = this.getDataset(),
                    a = i.length,
                    r = 0;
                for (dt.canvas.clipArea(t.ctx, t.chartArea); r < a; ++r) isNaN(e.getRightValue(n.data[r])) || i[r].draw();
                dt.canvas.unclipArea(t.ctx)
            },
            _resolveElementOptions: function(t, e) {
                var i, n, a, r = this.chart,
                    o = r.data.datasets[this.index],
                    s = t.custom || {},
                    l = r.options.elements.rectangle,
                    d = {},
                    u = {
                        chart: r,
                        dataIndex: e,
                        dataset: o,
                        datasetIndex: this.index
                    },
                    h = ["backgroundColor", "borderColor", "borderSkipped", "borderWidth"];
                for (i = 0, n = h.length; i < n; ++i) d[a = h[i]] = Ht([s[a], o[a], l[a]], u, e);
                return d
            }
        }),
        jt = dt.valueOrDefault,
        Ut = dt.options.resolve;
    ot._set("bubble", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [{
                type: "linear",
                position: "bottom",
                id: "x-axis-0"
            }],
            yAxes: [{
                type: "linear",
                position: "left",
                id: "y-axis-0"
            }]
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    var i = e.datasets[t.datasetIndex].label || "",
                        n = e.datasets[t.datasetIndex].data[t.index];
                    return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")"
                }
            }
        }
    });
    var qt = kt.extend({
            dataElementType: Nt.Point,
            update: function(i) {
                var n = this,
                    t = n.getMeta().data;
                dt.each(t, function(t, e) {
                    n.updateElement(t, e, i)
                })
            },
            updateElement: function(t, e, i) {
                var n = this.getMeta(),
                    a = t.custom || {},
                    r = this.getScaleForId(n.xAxisID),
                    o = this.getScaleForId(n.yAxisID),
                    s = this._resolveElementOptions(t, e),
                    l = this.getDataset().data[e],
                    d = this.index,
                    u = i ? r.getPixelForDecimal(.5) : r.getPixelForValue("object" == typeof l ? l : NaN, e, d),
                    h = i ? o.getBasePixel() : o.getPixelForValue(l, e, d);
                t._xScale = r, t._yScale = o, t._options = s, t._datasetIndex = d, t._index = e, t._model = {
                    backgroundColor: s.backgroundColor,
                    borderColor: s.borderColor,
                    borderWidth: s.borderWidth,
                    hitRadius: s.hitRadius,
                    pointStyle: s.pointStyle,
                    rotation: s.rotation,
                    radius: i ? 0 : s.radius,
                    skip: a.skip || isNaN(u) || isNaN(h),
                    x: u,
                    y: h
                }, t.pivot()
            },
            setHoverStyle: function(t) {
                var e = t._model,
                    i = t._options,
                    n = dt.getHoverColor;
                t.$previousStyle = {
                    backgroundColor: e.backgroundColor,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth,
                    radius: e.radius
                }, e.backgroundColor = jt(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = jt(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = jt(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius
            },
            _resolveElementOptions: function(t, e) {
                var i, n, a, r = this.chart,
                    o = r.data.datasets[this.index],
                    s = t.custom || {},
                    l = r.options.elements.point,
                    d = o.data[e],
                    u = {},
                    h = {
                        chart: r,
                        dataIndex: e,
                        dataset: o,
                        datasetIndex: this.index
                    },
                    c = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];
                for (i = 0, n = c.length; i < n; ++i) u[a = c[i]] = Ut([s[a], o[a], l[a]], h, e);
                return u.radius = Ut([s.radius, d ? d.r : void 0, o.radius, l.radius], h, e), u
            }
        }),
        Gt = dt.options.resolve,
        Zt = dt.valueOrDefault;
    ot._set("doughnut", {
        animation: {
            animateRotate: !0,
            animateScale: !1
        },
        hover: {
            mode: "single"
        },
        legendCallback: function(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var i = t.data,
                n = i.datasets,
                a = i.labels;
            if (n.length)
                for (var r = 0; r < n[0].data.length; ++r) e.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), a[r] && e.push(a[r]), e.push("</li>");
            return e.push("</ul>"), e.join("")
        },
        legend: {
            labels: {
                generateLabels: function(s) {
                    var l = s.data;
                    return l.labels.length && l.datasets.length ? l.labels.map(function(t, e) {
                        var i = s.getDatasetMeta(0),
                            n = l.datasets[0],
                            a = i.data[e],
                            r = a && a.custom || {},
                            o = s.options.elements.arc;
                        return {
                            text: t,
                            fillStyle: Gt([r.backgroundColor, n.backgroundColor, o.backgroundColor], void 0, e),
                            strokeStyle: Gt([r.borderColor, n.borderColor, o.borderColor], void 0, e),
                            lineWidth: Gt([r.borderWidth, n.borderWidth, o.borderWidth], void 0, e),
                            hidden: isNaN(n.data[e]) || i.data[e].hidden,
                            index: e
                        }
                    }) : []
                }
            },
            onClick: function(t, e) {
                var i, n, a, r = e.index,
                    o = this.chart;
                for (i = 0, n = (o.data.datasets || []).length; i < n; ++i)(a = o.getDatasetMeta(i)).data[r] && (a.data[r].hidden = !a.data[r].hidden);
                o.update()
            }
        },
        cutoutPercentage: 50,
        rotation: -.5 * Math.PI,
        circumference: 2 * Math.PI,
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    var i = e.labels[t.index],
                        n = ": " + e.datasets[t.datasetIndex].data[t.index];
                    return dt.isArray(i) ? (i = i.slice())[0] += n : i += n, i
                }
            }
        }
    });
    var Xt = kt.extend({
        dataElementType: Nt.Arc,
        linkScales: dt.noop,
        getRingIndex: function(t) {
            for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;
            return e
        },
        update: function(t) {
            var e, i, n = this,
                a = n.chart,
                r = a.chartArea,
                o = a.options,
                s = r.right - r.left,
                l = r.bottom - r.top,
                d = Math.min(s, l),
                u = {
                    x: 0,
                    y: 0
                },
                h = n.getMeta(),
                c = h.data,
                f = o.cutoutPercentage,
                g = o.circumference,
                p = n._getRingWeight(n.index);
            if (g < 2 * Math.PI) {
                var m = o.rotation % (2 * Math.PI),
                    v = (m += 2 * Math.PI * (m >= Math.PI ? -1 : m < -Math.PI ? 1 : 0)) + g,
                    b = Math.cos(m),
                    y = Math.sin(m),
                    x = Math.cos(v),
                    _ = Math.sin(v),
                    k = m <= 0 && 0 <= v || m <= 2 * Math.PI && 2 * Math.PI <= v,
                    w = m <= .5 * Math.PI && .5 * Math.PI <= v || m <= 2.5 * Math.PI && 2.5 * Math.PI <= v,
                    M = m <= -Math.PI && -Math.PI <= v || m <= Math.PI && Math.PI <= v,
                    S = m <= .5 * -Math.PI && .5 * -Math.PI <= v || m <= 1.5 * Math.PI && 1.5 * Math.PI <= v,
                    C = f / 100,
                    D = M ? -1 : Math.min(b * (b < 0 ? 1 : C), x * (x < 0 ? 1 : C)),
                    P = S ? -1 : Math.min(y * (y < 0 ? 1 : C), _ * (_ < 0 ? 1 : C)),
                    T = k ? 1 : Math.max(b * (0 < b ? 1 : C), x * (0 < x ? 1 : C)),
                    I = w ? 1 : Math.max(y * (0 < y ? 1 : C), _ * (0 < _ ? 1 : C)),
                    A = .5 * (T - D),
                    F = .5 * (I - P);
                d = Math.min(s / A, l / F), u = {
                    x: -.5 * (T + D),
                    y: -.5 * (I + P)
                }
            }
            for (e = 0, i = c.length; e < i; ++e) c[e]._options = n._resolveElementOptions(c[e], e);
            for (a.borderWidth = n.getMaxBorderWidth(), a.outerRadius = Math.max((d - a.borderWidth) / 2, 0), a.innerRadius = Math.max(f ? a.outerRadius / 100 * f : 0, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / (n._getVisibleDatasetWeightTotal() || 1), a.offsetX = u.x * a.outerRadius, a.offsetY = u.y * a.outerRadius, h.total = n.calculateTotal(), n.outerRadius = a.outerRadius - a.radiusLength * n._getRingWeightOffset(n.index), n.innerRadius = Math.max(n.outerRadius - a.radiusLength * p, 0), e = 0, i = c.length; e < i; ++e) n.updateElement(c[e], e, t)
        },
        updateElement: function(t, e, i) {
            var n = this.chart,
                a = n.chartArea,
                r = n.options,
                o = r.animation,
                s = (a.left + a.right) / 2,
                l = (a.top + a.bottom) / 2,
                d = r.rotation,
                u = r.rotation,
                h = this.getDataset(),
                c = i && o.animateRotate ? 0 : t.hidden ? 0 : this.calculateCircumference(h.data[e]) * (r.circumference / (2 * Math.PI)),
                f = i && o.animateScale ? 0 : this.innerRadius,
                g = i && o.animateScale ? 0 : this.outerRadius,
                p = t._options || {};
            dt.extend(t, {
                _datasetIndex: this.index,
                _index: e,
                _model: {
                    backgroundColor: p.backgroundColor,
                    borderColor: p.borderColor,
                    borderWidth: p.borderWidth,
                    borderAlign: p.borderAlign,
                    x: s + n.offsetX,
                    y: l + n.offsetY,
                    startAngle: d,
                    endAngle: u,
                    circumference: c,
                    outerRadius: g,
                    innerRadius: f,
                    label: dt.valueAtIndexOrDefault(h.label, e, n.data.labels[e])
                }
            });
            var m = t._model;
            i && o.animateRotate || (m.startAngle = 0 === e ? r.rotation : this.getMeta().data[e - 1]._model.endAngle, m.endAngle = m.startAngle + m.circumference), t.pivot()
        },
        calculateTotal: function() {
            var i, n = this.getDataset(),
                t = this.getMeta(),
                a = 0;
            return dt.each(t.data, function(t, e) {
                i = n.data[e], isNaN(i) || t.hidden || (a += Math.abs(i))
            }), a
        },
        calculateCircumference: function(t) {
            var e = this.getMeta().total;
            return 0 < e && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0
        },
        getMaxBorderWidth: function(t) {
            var e, i, n, a, r, o, s, l, d = 0,
                u = this.chart;
            if (!t)
                for (e = 0, i = u.data.datasets.length; e < i; ++e)
                    if (u.isDatasetVisible(e)) {
                        t = (n = u.getDatasetMeta(e)).data, e !== this.index && (r = n.controller);
                        break
                    }
            if (!t) return 0;
            for (e = 0, i = t.length; e < i; ++e) a = t[e], "inner" !== (o = r ? r._resolveElementOptions(a, e) : a._options).borderAlign && (s = o.borderWidth, d = (l = o.hoverBorderWidth) > (d = d < s ? s : d) ? l : d);
            return d
        },
        setHoverStyle: function(t) {
            var e = t._model,
                i = t._options,
                n = dt.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth
            }, e.backgroundColor = Zt(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = Zt(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = Zt(i.hoverBorderWidth, i.borderWidth)
        },
        _resolveElementOptions: function(t, e) {
            var i, n, a, r = this.chart,
                o = this.getDataset(),
                s = t.custom || {},
                l = r.options.elements.arc,
                d = {},
                u = {
                    chart: r,
                    dataIndex: e,
                    dataset: o,
                    datasetIndex: this.index
                },
                h = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];
            for (i = 0, n = h.length; i < n; ++i) d[a = h[i]] = Gt([s[a], o[a], l[a]], u, e);
            return d
        },
        _getRingWeightOffset: function(t) {
            for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
            return e
        },
        _getRingWeight: function(t) {
            return Math.max(Zt(this.chart.data.datasets[t].weight, 1), 0)
        },
        _getVisibleDatasetWeightTotal: function() {
            return this._getRingWeightOffset(this.chart.data.datasets.length)
        }
    });
    ot._set("horizontalBar", {
        hover: {
            mode: "index",
            axis: "y"
        },
        scales: {
            xAxes: [{
                type: "linear",
                position: "bottom"
            }],
            yAxes: [{
                type: "category",
                position: "left",
                categoryPercentage: .8,
                barPercentage: .9,
                offset: !0,
                gridLines: {
                    offsetGridLines: !0
                }
            }]
        },
        elements: {
            rectangle: {
                borderSkipped: "left"
            }
        },
        tooltips: {
            mode: "index",
            axis: "y"
        }
    });
    var Kt = Yt.extend({
            _getValueScaleId: function() {
                return this.getMeta().xAxisID
            },
            _getIndexScaleId: function() {
                return this.getMeta().yAxisID
            }
        }),
        $t = dt.valueOrDefault,
        Jt = dt.options.resolve,
        Qt = dt.canvas._isPointInArea;

    function te(t, e) {
        return $t(t.showLine, e.showLines)
    }
    ot._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [{
                type: "category",
                id: "x-axis-0"
            }],
            yAxes: [{
                type: "linear",
                id: "y-axis-0"
            }]
        }
    });
    var ee = kt.extend({
            datasetElementType: Nt.Line,
            dataElementType: Nt.Point,
            update: function(t) {
                var e, i, n = this.getMeta(),
                    a = n.dataset,
                    r = n.data || [],
                    o = this.getScaleForId(n.yAxisID),
                    s = this.getDataset(),
                    l = te(s, this.chart.options);
                for (l && (void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), a._scale = o, a._datasetIndex = this.index, a._children = r, a._model = this._resolveLineOptions(a), a.pivot()), e = 0, i = r.length; e < i; ++e) this.updateElement(r[e], e, t);
                for (l && 0 !== a._model.tension && this.updateBezierControlPoints(), e = 0, i = r.length; e < i; ++e) r[e].pivot()
            },
            updateElement: function(t, e, i) {
                var n, a, r = this.getMeta(),
                    o = t.custom || {},
                    s = this.getDataset(),
                    l = this.index,
                    d = s.data[e],
                    u = this.getScaleForId(r.yAxisID),
                    h = this.getScaleForId(r.xAxisID),
                    c = r.dataset._model,
                    f = this._resolvePointOptions(t, e);
                n = h.getPixelForValue("object" == typeof d ? d : NaN, e, l), a = i ? u.getBasePixel() : this.calculatePointY(d, e, l), t._xScale = h, t._yScale = u, t._options = f, t._datasetIndex = l, t._index = e, t._model = {
                    x: n,
                    y: a,
                    skip: o.skip || isNaN(n) || isNaN(a),
                    radius: f.radius,
                    pointStyle: f.pointStyle,
                    rotation: f.rotation,
                    backgroundColor: f.backgroundColor,
                    borderColor: f.borderColor,
                    borderWidth: f.borderWidth,
                    tension: $t(o.tension, c ? c.tension : 0),
                    steppedLine: !!c && c.steppedLine,
                    hitRadius: f.hitRadius
                }
            },
            _resolvePointOptions: function(t, e) {
                var i, n, a, r = this.chart,
                    o = r.data.datasets[this.index],
                    s = t.custom || {},
                    l = r.options.elements.point,
                    d = {},
                    u = {
                        chart: r,
                        dataIndex: e,
                        dataset: o,
                        datasetIndex: this.index
                    },
                    h = {
                        backgroundColor: "pointBackgroundColor",
                        borderColor: "pointBorderColor",
                        borderWidth: "pointBorderWidth",
                        hitRadius: "pointHitRadius",
                        hoverBackgroundColor: "pointHoverBackgroundColor",
                        hoverBorderColor: "pointHoverBorderColor",
                        hoverBorderWidth: "pointHoverBorderWidth",
                        hoverRadius: "pointHoverRadius",
                        pointStyle: "pointStyle",
                        radius: "pointRadius",
                        rotation: "pointRotation"
                    },
                    c = Object.keys(h);
                for (i = 0, n = c.length; i < n; ++i) d[a = c[i]] = Jt([s[a], o[h[a]], o[a], l[a]], u, e);
                return d
            },
            _resolveLineOptions: function(t) {
                var e, i, n, a = this.chart,
                    r = a.data.datasets[this.index],
                    o = t.custom || {},
                    s = a.options,
                    l = s.elements.line,
                    d = {},
                    u = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill", "cubicInterpolationMode"];
                for (e = 0, i = u.length; e < i; ++e) d[n = u[e]] = Jt([o[n], r[n], l[n]]);
                return d.spanGaps = $t(r.spanGaps, s.spanGaps), d.tension = $t(r.lineTension, l.tension), d.steppedLine = Jt([o.steppedLine, r.steppedLine, l.stepped]), d
            },
            calculatePointY: function(t, e, i) {
                var n, a, r, o = this.chart,
                    s = this.getMeta(),
                    l = this.getScaleForId(s.yAxisID),
                    d = 0,
                    u = 0;
                if (l.options.stacked) {
                    for (n = 0; n < i; n++)
                        if (a = o.data.datasets[n], "line" === (r = o.getDatasetMeta(n)).type && r.yAxisID === l.id && o.isDatasetVisible(n)) {
                            var h = Number(l.getRightValue(a.data[e]));
                            h < 0 ? u += h || 0 : d += h || 0
                        }
                    var c = Number(l.getRightValue(t));
                    return c < 0 ? l.getPixelForValue(u + c) : l.getPixelForValue(d + c)
                }
                return l.getPixelForValue(t)
            },
            updateBezierControlPoints: function() {
                var t, e, i, n, a = this.chart,
                    r = this.getMeta(),
                    o = r.dataset._model,
                    s = a.chartArea,
                    l = r.data || [];

                function d(t, e, i) {
                    return Math.max(Math.min(t, i), e)
                }
                if (o.spanGaps && (l = l.filter(function(t) {
                        return !t._model.skip
                    })), "monotone" === o.cubicInterpolationMode) dt.splineCurveMonotone(l);
                else
                    for (t = 0, e = l.length; t < e; ++t) i = l[t]._model, n = dt.splineCurve(dt.previousItem(l, t)._model, i, dt.nextItem(l, t)._model, o.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
                if (a.options.elements.line.capBezierPoints)
                    for (t = 0, e = l.length; t < e; ++t) i = l[t]._model, Qt(i, s) && (0 < t && Qt(l[t - 1]._model, s) && (i.controlPointPreviousX = d(i.controlPointPreviousX, s.left, s.right), i.controlPointPreviousY = d(i.controlPointPreviousY, s.top, s.bottom)), t < l.length - 1 && Qt(l[t + 1]._model, s) && (i.controlPointNextX = d(i.controlPointNextX, s.left, s.right), i.controlPointNextY = d(i.controlPointNextY, s.top, s.bottom)))
            },
            draw: function() {
                var t, e = this.chart,
                    i = this.getMeta(),
                    n = i.data || [],
                    a = e.chartArea,
                    r = n.length,
                    o = 0;
                for (te(this.getDataset(), e.options) && (t = (i.dataset._model.borderWidth || 0) / 2, dt.canvas.clipArea(e.ctx, {
                        left: a.left,
                        right: a.right,
                        top: a.top - t,
                        bottom: a.bottom + t
                    }), i.dataset.draw(), dt.canvas.unclipArea(e.ctx)); o < r; ++o) n[o].draw(a)
            },
            setHoverStyle: function(t) {
                var e = t._model,
                    i = t._options,
                    n = dt.getHoverColor;
                t.$previousStyle = {
                    backgroundColor: e.backgroundColor,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth,
                    radius: e.radius
                }, e.backgroundColor = $t(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = $t(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = $t(i.hoverBorderWidth, i.borderWidth), e.radius = $t(i.hoverRadius, i.radius)
            }
        }),
        ie = dt.options.resolve;
    ot._set("polarArea", {
        scale: {
            type: "radialLinear",
            angleLines: {
                display: !1
            },
            gridLines: {
                circular: !0
            },
            pointLabels: {
                display: !1
            },
            ticks: {
                beginAtZero: !0
            }
        },
        animation: {
            animateRotate: !0,
            animateScale: !0
        },
        startAngle: -.5 * Math.PI,
        legendCallback: function(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var i = t.data,
                n = i.datasets,
                a = i.labels;
            if (n.length)
                for (var r = 0; r < n[0].data.length; ++r) e.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), a[r] && e.push(a[r]), e.push("</li>");
            return e.push("</ul>"), e.join("")
        },
        legend: {
            labels: {
                generateLabels: function(o) {
                    var s = o.data;
                    return s.labels.length && s.datasets.length ? s.labels.map(function(t, e) {
                        var i = o.getDatasetMeta(0),
                            n = s.datasets[0],
                            a = i.data[e].custom || {},
                            r = o.options.elements.arc;
                        return {
                            text: t,
                            fillStyle: ie([a.backgroundColor, n.backgroundColor, r.backgroundColor], void 0, e),
                            strokeStyle: ie([a.borderColor, n.borderColor, r.borderColor], void 0, e),
                            lineWidth: ie([a.borderWidth, n.borderWidth, r.borderWidth], void 0, e),
                            hidden: isNaN(n.data[e]) || i.data[e].hidden,
                            index: e
                        }
                    }) : []
                }
            },
            onClick: function(t, e) {
                var i, n, a, r = e.index,
                    o = this.chart;
                for (i = 0, n = (o.data.datasets || []).length; i < n; ++i)(a = o.getDatasetMeta(i)).data[r].hidden = !a.data[r].hidden;
                o.update()
            }
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    return e.labels[t.index] + ": " + t.yLabel
                }
            }
        }
    });
    var ne = kt.extend({
        dataElementType: Nt.Arc,
        linkScales: dt.noop,
        update: function(t) {
            var e, i, n, a = this,
                r = a.getDataset(),
                o = a.getMeta(),
                s = a.chart.options.startAngle || 0,
                l = a._starts = [],
                d = a._angles = [],
                u = o.data;
            for (a._updateRadius(), o.count = a.countVisibleElements(), e = 0, i = r.data.length; e < i; e++) l[e] = s, n = a._computeAngle(e), s += d[e] = n;
            for (e = 0, i = u.length; e < i; ++e) u[e]._options = a._resolveElementOptions(u[e], e), a.updateElement(u[e], e, t)
        },
        _updateRadius: function() {
            var t = this.chart,
                e = t.chartArea,
                i = t.options,
                n = Math.min(e.right - e.left, e.bottom - e.top);
            t.outerRadius = Math.max(n / 2, 0), t.innerRadius = Math.max(i.cutoutPercentage ? t.outerRadius / 100 * i.cutoutPercentage : 1, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), this.outerRadius = t.outerRadius - t.radiusLength * this.index, this.innerRadius = this.outerRadius - t.radiusLength
        },
        updateElement: function(t, e, i) {
            var n = this.chart,
                a = this.getDataset(),
                r = n.options,
                o = r.animation,
                s = n.scale,
                l = n.data.labels,
                d = s.xCenter,
                u = s.yCenter,
                h = r.startAngle,
                c = t.hidden ? 0 : s.getDistanceFromCenterForValue(a.data[e]),
                f = this._starts[e],
                g = f + (t.hidden ? 0 : this._angles[e]),
                p = o.animateScale ? 0 : s.getDistanceFromCenterForValue(a.data[e]),
                m = t._options || {};
            dt.extend(t, {
                _datasetIndex: this.index,
                _index: e,
                _scale: s,
                _model: {
                    backgroundColor: m.backgroundColor,
                    borderColor: m.borderColor,
                    borderWidth: m.borderWidth,
                    borderAlign: m.borderAlign,
                    x: d,
                    y: u,
                    innerRadius: 0,
                    outerRadius: i ? p : c,
                    startAngle: i && o.animateRotate ? h : f,
                    endAngle: i && o.animateRotate ? h : g,
                    label: dt.valueAtIndexOrDefault(l, e, l[e])
                }
            }), t.pivot()
        },
        countVisibleElements: function() {
            var i = this.getDataset(),
                t = this.getMeta(),
                n = 0;
            return dt.each(t.data, function(t, e) {
                isNaN(i.data[e]) || t.hidden || n++
            }), n
        },
        setHoverStyle: function(t) {
            var e = t._model,
                i = t._options,
                n = dt.getHoverColor,
                a = dt.valueOrDefault;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth
            }, e.backgroundColor = a(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = a(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = a(i.hoverBorderWidth, i.borderWidth)
        },
        _resolveElementOptions: function(t, e) {
            var i, n, a, r = this.chart,
                o = this.getDataset(),
                s = t.custom || {},
                l = r.options.elements.arc,
                d = {},
                u = {
                    chart: r,
                    dataIndex: e,
                    dataset: o,
                    datasetIndex: this.index
                },
                h = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];
            for (i = 0, n = h.length; i < n; ++i) d[a = h[i]] = ie([s[a], o[a], l[a]], u, e);
            return d
        },
        _computeAngle: function(t) {
            var e = this.getMeta().count,
                i = this.getDataset(),
                n = this.getMeta();
            if (isNaN(i.data[t]) || n.data[t].hidden) return 0;
            var a = {
                chart: this.chart,
                dataIndex: t,
                dataset: i,
                datasetIndex: this.index
            };
            return ie([this.chart.options.elements.arc.angle, 2 * Math.PI / e], a, t)
        }
    });
    ot._set("pie", dt.clone(ot.doughnut)), ot._set("pie", {
        cutoutPercentage: 0
    });
    var ae = Xt,
        re = dt.valueOrDefault,
        oe = dt.options.resolve;
    ot._set("radar", {
        scale: {
            type: "radialLinear"
        },
        elements: {
            line: {
                tension: 0
            }
        }
    });
    var se = kt.extend({
        datasetElementType: Nt.Line,
        dataElementType: Nt.Point,
        linkScales: dt.noop,
        update: function(t) {
            var e, i, n = this.getMeta(),
                a = n.dataset,
                r = n.data || [],
                o = this.chart.scale,
                s = this.getDataset();
            for (void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), a._scale = o, a._datasetIndex = this.index, a._children = r, a._loop = !0, a._model = this._resolveLineOptions(a), a.pivot(), e = 0, i = r.length; e < i; ++e) this.updateElement(r[e], e, t);
            for (this.updateBezierControlPoints(), e = 0, i = r.length; e < i; ++e) r[e].pivot()
        },
        updateElement: function(t, e, i) {
            var n = t.custom || {},
                a = this.getDataset(),
                r = this.chart.scale,
                o = r.getPointPositionForValue(e, a.data[e]),
                s = this._resolvePointOptions(t, e),
                l = this.getMeta().dataset._model,
                d = i ? r.xCenter : o.x,
                u = i ? r.yCenter : o.y;
            t._scale = r, t._options = s, t._datasetIndex = this.index, t._index = e, t._model = {
                x: d,
                y: u,
                skip: n.skip || isNaN(d) || isNaN(u),
                radius: s.radius,
                pointStyle: s.pointStyle,
                rotation: s.rotation,
                backgroundColor: s.backgroundColor,
                borderColor: s.borderColor,
                borderWidth: s.borderWidth,
                tension: re(n.tension, l ? l.tension : 0),
                hitRadius: s.hitRadius
            }
        },
        _resolvePointOptions: function(t, e) {
            var i, n, a, r = this.chart,
                o = r.data.datasets[this.index],
                s = t.custom || {},
                l = r.options.elements.point,
                d = {},
                u = {
                    chart: r,
                    dataIndex: e,
                    dataset: o,
                    datasetIndex: this.index
                },
                h = {
                    backgroundColor: "pointBackgroundColor",
                    borderColor: "pointBorderColor",
                    borderWidth: "pointBorderWidth",
                    hitRadius: "pointHitRadius",
                    hoverBackgroundColor: "pointHoverBackgroundColor",
                    hoverBorderColor: "pointHoverBorderColor",
                    hoverBorderWidth: "pointHoverBorderWidth",
                    hoverRadius: "pointHoverRadius",
                    pointStyle: "pointStyle",
                    radius: "pointRadius",
                    rotation: "pointRotation"
                },
                c = Object.keys(h);
            for (i = 0, n = c.length; i < n; ++i) d[a = c[i]] = oe([s[a], o[h[a]], o[a], l[a]], u, e);
            return d
        },
        _resolveLineOptions: function(t) {
            var e, i, n, a = this.chart,
                r = a.data.datasets[this.index],
                o = t.custom || {},
                s = a.options.elements.line,
                l = {},
                d = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"];
            for (e = 0, i = d.length; e < i; ++e) l[n = d[e]] = oe([o[n], r[n], s[n]]);
            return l.tension = re(r.lineTension, s.tension), l
        },
        updateBezierControlPoints: function() {
            var t, e, i, n, a = this.getMeta(),
                r = this.chart.chartArea,
                o = a.data || [];

            function s(t, e, i) {
                return Math.max(Math.min(t, i), e)
            }
            for (t = 0, e = o.length; t < e; ++t) i = o[t]._model, n = dt.splineCurve(dt.previousItem(o, t, !0)._model, i, dt.nextItem(o, t, !0)._model, i.tension), i.controlPointPreviousX = s(n.previous.x, r.left, r.right), i.controlPointPreviousY = s(n.previous.y, r.top, r.bottom), i.controlPointNextX = s(n.next.x, r.left, r.right), i.controlPointNextY = s(n.next.y, r.top, r.bottom)
        },
        setHoverStyle: function(t) {
            var e = t._model,
                i = t._options,
                n = dt.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
                radius: e.radius
            }, e.backgroundColor = re(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = re(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = re(i.hoverBorderWidth, i.borderWidth), e.radius = re(i.hoverRadius, i.radius)
        }
    });
    ot._set("scatter", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [{
                id: "x-axis-1",
                type: "linear",
                position: "bottom"
            }],
            yAxes: [{
                id: "y-axis-1",
                type: "linear",
                position: "left"
            }]
        },
        showLines: !1,
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t) {
                    return "(" + t.xLabel + ", " + t.yLabel + ")"
                }
            }
        }
    });
    var le = {
        bar: Yt,
        bubble: qt,
        doughnut: Xt,
        horizontalBar: Kt,
        line: ee,
        polarArea: ne,
        pie: ae,
        radar: se,
        scatter: ee
    };

    function de(t, e) {
        return t.native ? {
            x: t.x,
            y: t.y
        } : dt.getRelativePosition(t, e)
    }

    function ue(t, e) {
        var i, n, a, r, o;
        for (n = 0, r = t.data.datasets.length; n < r; ++n)
            if (t.isDatasetVisible(n))
                for (a = 0, o = (i = t.getDatasetMeta(n)).data.length; a < o; ++a) {
                    var s = i.data[a];
                    s._view.skip || e(s)
                }
    }

    function he(t, e) {
        var i = [];
        return ue(t, function(t) {
            t.inRange(e.x, e.y) && i.push(t)
        }), i
    }

    function ce(t, n, a, r) {
        var o = Number.POSITIVE_INFINITY,
            s = [];
        return ue(t, function(t) {
            if (!a || t.inRange(n.x, n.y)) {
                var e = t.getCenterPoint(),
                    i = r(n, e);
                i < o ? (s = [t], o = i) : i === o && s.push(t)
            }
        }), s
    }

    function fe(t) {
        var a = -1 !== t.indexOf("x"),
            r = -1 !== t.indexOf("y");
        return function(t, e) {
            var i = a ? Math.abs(t.x - e.x) : 0,
                n = r ? Math.abs(t.y - e.y) : 0;
            return Math.sqrt(Math.pow(i, 2) + Math.pow(n, 2))
        }
    }

    function ge(n, t, e) {
        var i = de(t, n);
        e.axis = e.axis || "x";
        var a = fe(e.axis),
            r = e.intersect ? he(n, i) : ce(n, i, !1, a),
            o = [];
        return r.length ? (n.data.datasets.forEach(function(t, e) {
            if (n.isDatasetVisible(e)) {
                var i = n.getDatasetMeta(e).data[r[0]._index];
                i && !i._view.skip && o.push(i)
            }
        }), o) : []
    }
    var pe = {
        modes: {
            single: function(t, e) {
                var i = de(e, t),
                    n = [];
                return ue(t, function(t) {
                    if (t.inRange(i.x, i.y)) return n.push(t), n
                }), n.slice(0, 1)
            },
            label: ge,
            index: ge,
            dataset: function(t, e, i) {
                var n = de(e, t);
                i.axis = i.axis || "xy";
                var a = fe(i.axis),
                    r = i.intersect ? he(t, n) : ce(t, n, !1, a);
                return 0 < r.length && (r = t.getDatasetMeta(r[0]._datasetIndex).data), r
            },
            "x-axis": function(t, e) {
                return ge(t, e, {
                    intersect: !1
                })
            },
            point: function(t, e) {
                return he(t, de(e, t))
            },
            nearest: function(t, e, i) {
                var n = de(e, t);
                i.axis = i.axis || "xy";
                var a = fe(i.axis);
                return ce(t, n, i.intersect, a)
            },
            x: function(t, e, i) {
                var n = de(e, t),
                    a = [],
                    r = !1;
                return ue(t, function(t) {
                    t.inXRange(n.x) && a.push(t), t.inRange(n.x, n.y) && (r = !0)
                }), i.intersect && !r && (a = []), a
            },
            y: function(t, e, i) {
                var n = de(e, t),
                    a = [],
                    r = !1;
                return ue(t, function(t) {
                    t.inYRange(n.y) && a.push(t), t.inRange(n.x, n.y) && (r = !0)
                }), i.intersect && !r && (a = []), a
            }
        }
    };

    function me(t, e) {
        return dt.where(t, function(t) {
            return t.position === e
        })
    }

    function ve(t, a) {
        t.forEach(function(t, e) {
            return t._tmpIndex_ = e, t
        }), t.sort(function(t, e) {
            var i = a ? e : t,
                n = a ? t : e;
            return i.weight === n.weight ? i._tmpIndex_ - n._tmpIndex_ : i.weight - n.weight
        }), t.forEach(function(t) {
            delete t._tmpIndex_
        })
    }

    function be(t, e) {
        dt.each(t, function(t) {
            e[t.position] += t.isHorizontal() ? t.height : t.width
        })
    }
    ot._set("global", {
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        }
    });
    var ye = {
        defaults: {},
        addBox: function(t, e) {
            t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
        },
        removeBox: function(t, e) {
            var i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
        },
        configure: function(t, e, i) {
            for (var n, a = ["fullWidth", "position", "weight"], r = a.length, o = 0; o < r; ++o) n = a[o], i.hasOwnProperty(n) && (e[n] = i[n])
        },
        update: function(e, i, t) {
            if (e) {
                var n = e.options.layout || {},
                    a = dt.options.toPadding(n.padding),
                    r = a.left,
                    o = a.right,
                    s = a.top,
                    l = a.bottom,
                    d = me(e.boxes, "left"),
                    u = me(e.boxes, "right"),
                    h = me(e.boxes, "top"),
                    c = me(e.boxes, "bottom"),
                    f = me(e.boxes, "chartArea");
                ve(d, !0), ve(u, !1), ve(h, !0), ve(c, !1);
                var g, p = d.concat(u),
                    m = h.concat(c),
                    v = p.concat(m),
                    b = i - r - o,
                    y = t - s - l,
                    x = (i - b / 2) / p.length,
                    _ = b,
                    k = y,
                    w = {
                        top: s,
                        left: r,
                        bottom: l,
                        right: o
                    },
                    M = [];
                dt.each(v, function(t) {
                    var e, i = t.isHorizontal();
                    i ? (e = t.update(t.fullWidth ? b : _, y / 2), k -= e.height) : (e = t.update(x, k), _ -= e.width), M.push({
                        horizontal: i,
                        width: e.width,
                        box: t
                    })
                }), A = v, R = L = O = F = 0, dt.each(A, function(t) {
                    if (t.getPadding) {
                        var e = t.getPadding();
                        F = Math.max(F, e.top), O = Math.max(O, e.left), L = Math.max(L, e.bottom), R = Math.max(R, e.right)
                    }
                }), g = {
                    top: F,
                    left: O,
                    bottom: L,
                    right: R
                }, dt.each(p, W), be(p, w), dt.each(m, W), be(m, w), dt.each(p, function(e) {
                    var t = dt.findNextWhere(M, function(t) {
                            return t.box === e
                        }),
                        i = {
                            left: 0,
                            right: 0,
                            top: w.top,
                            bottom: w.bottom
                        };
                    t && e.update(t.width, k, i)
                }), be(v, w = {
                    top: s,
                    left: r,
                    bottom: l,
                    right: o
                });
                var S = Math.max(g.left - w.left, 0);
                w.left += S, w.right += Math.max(g.right - w.right, 0);
                var C = Math.max(g.top - w.top, 0);
                w.top += C, w.bottom += Math.max(g.bottom - w.bottom, 0);
                var D = t - w.top - w.bottom,
                    P = i - w.left - w.right;
                P === _ && D === k || (dt.each(p, function(t) {
                    t.height = D
                }), dt.each(m, function(t) {
                    t.fullWidth || (t.width = P)
                }), k = D, _ = P);
                var T = r + S,
                    I = s + C;
                dt.each(d.concat(h), N), T += _, I += k, dt.each(u, N), dt.each(c, N), e.chartArea = {
                    left: w.left,
                    top: w.top,
                    right: w.left + _,
                    bottom: w.top + k
                }, dt.each(f, function(t) {
                    t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(_, k)
                })
            }
            var A, F, O, L, R;

            function W(e) {
                var t = dt.findNextWhere(M, function(t) {
                    return t.box === e
                });
                if (t)
                    if (t.horizontal) {
                        var i = {
                            left: Math.max(w.left, g.left),
                            right: Math.max(w.right, g.right),
                            top: 0,
                            bottom: 0
                        };
                        e.update(e.fullWidth ? b : _, y / 2, i)
                    } else e.update(t.width, k)
            }

            function N(t) {
                t.isHorizontal() ? (t.left = t.fullWidth ? r : w.left, t.right = t.fullWidth ? i - o : w.left + _, t.top = I, t.bottom = I + t.height, I = t.bottom) : (t.left = T, t.right = T + t.width, t.top = w.top, t.bottom = w.top + k, T = t.right)
            }
        }
    };

    function Ui() {
        throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")
    }
    "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var xe, _e = (xe = Object.freeze({
            default: "@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}"
        })) && xe.default || xe,
        ke = "$chartjs",
        we = "chartjs-size-monitor",
        Me = "chartjs-render-monitor",
        Se = ["animationstart", "webkitAnimationStart"],
        Ce = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout"
        };

    function De(t, e) {
        var i = dt.getStyle(t, e),
            n = i && i.match(/^(\d+)(\.\d+)?px$/);
        return n ? Number(n[1]) : void 0
    }
    var Pe = !! function() {
        var t = !1;
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function() {
                    t = !0
                }
            });
            window.addEventListener("e", null, e)
        } catch (t) {}
        return t
    }() && {
        passive: !0
    };

    function Te(t, e, i) {
        t.addEventListener(e, i, Pe)
    }

    function Ie(t, e, i) {
        t.removeEventListener(e, i, Pe)
    }

    function Ae(t, e, i, n, a) {
        return {
            type: t,
            chart: e,
            native: a || null,
            x: void 0 !== i ? i : null,
            y: void 0 !== n ? n : null
        }
    }

    function Fe(t) {
        var e = document.createElement("div");
        return e.className = t || "", e
    }

    function Oe(i, n, a) {
        var t, e, r, o, s, l, d, u = i[ke] || (i[ke] = {}),
            h = u.resizer = function(t) {
                var e = Fe(we),
                    i = Fe(we + "-expand"),
                    n = Fe(we + "-shrink");
                i.appendChild(Fe()), n.appendChild(Fe()), e.appendChild(i), e.appendChild(n), e._reset = function() {
                    i.scrollLeft = 1e6, i.scrollTop = 1e6, n.scrollLeft = 1e6, n.scrollTop = 1e6
                };

                function a() {
                    e._reset(), t()
                }
                return Te(i, "scroll", a.bind(i, "expand")), Te(n, "scroll", a.bind(n, "shrink")), e
            }((r = !(t = function() {
                if (u.resizer) {
                    var t = a.options.maintainAspectRatio && i.parentNode,
                        e = t ? t.clientWidth : 0;
                    n(Ae("resize", a)), t && t.clientWidth < e && a.canvas && n(Ae("resize", a))
                }
            }), o = [], function() {
                o = Array.prototype.slice.call(arguments), e = e || this, r || (r = !0, dt.requestAnimFrame.call(window, function() {
                    r = !1, t.apply(e, o)
                }))
            }));
        l = (s = i)[ke] || (s[ke] = {}), d = l.renderProxy = function(t) {
            "chartjs-render-animation" === t.animationName && function() {
                if (u.resizer) {
                    var t = i.parentNode;
                    t && t !== h.parentNode && t.insertBefore(h, t.firstChild), h._reset()
                }
            }()
        }, dt.each(Se, function(t) {
            Te(s, t, d)
        }), l.reflow = !!s.offsetParent, s.classList.add(Me)
    }
    var Le = {
        disableCSSInjection: !1,
        _enabled: "undefined" != typeof window && "undefined" != typeof document,
        _ensureLoaded: function() {
            var t, e;
            this._loaded || (this._loaded = !0, this.disableCSSInjection || (t = _e, e = this._style || document.createElement("style"), this._style || (t = "/* Chart.js */\n" + t, (this._style = e).setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(e)), e.appendChild(document.createTextNode(t))))
        },
        acquireContext: function(t, e) {
            "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
            var i = t && t.getContext && t.getContext("2d");
            return this._ensureLoaded(), i && i.canvas === t ? (function(t, e) {
                var i = t.style,
                    n = t.getAttribute("height"),
                    a = t.getAttribute("width");
                if (t[ke] = {
                        initial: {
                            height: n,
                            width: a,
                            style: {
                                display: i.display,
                                height: i.height,
                                width: i.width
                            }
                        }
                    }, i.display = i.display || "block", null === a || "" === a) {
                    var r = De(t, "width");
                    void 0 !== r && (t.width = r)
                }
                if (null === n || "" === n)
                    if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                    else {
                        var o = De(t, "height");
                        void 0 !== r && (t.height = o)
                    }
            }(t, e), i) : null
        },
        releaseContext: function(t) {
            var i = t.canvas;
            if (i[ke]) {
                var n = i[ke].initial;
                ["height", "width"].forEach(function(t) {
                    var e = n[t];
                    dt.isNullOrUndef(e) ? i.removeAttribute(t) : i.setAttribute(t, e)
                }), dt.each(n.style || {}, function(t, e) {
                    i.style[e] = t
                }), i.width = i.width, delete i[ke]
            }
        },
        addEventListener: function(r, t, o) {
            var e = r.canvas;
            if ("resize" !== t) {
                var i = o[ke] || (o[ke] = {});
                Te(e, t, (i.proxies || (i.proxies = {}))[r.id + "_" + t] = function(t) {
                    var e, i, n, a;
                    o((i = r, n = Ce[(e = t).type] || e.type, a = dt.getRelativePosition(e, i), Ae(n, i, a.x, a.y, e)))
                })
            } else Oe(e, o, r)
        },
        removeEventListener: function(t, e, i) {
            var n = t.canvas;
            if ("resize" !== e) {
                var a = ((i[ke] || {}).proxies || {})[t.id + "_" + e];
                a && Ie(n, e, a)
            } else ! function(t) {
                var e, i, n, a = t[ke] || {},
                    r = a.resizer;
                delete a.resizer, i = (e = t)[ke] || {}, (n = i.renderProxy) && (dt.each(Se, function(t) {
                    Ie(e, t, n)
                }), delete i.renderProxy), e.classList.remove(Me), r && r.parentNode && r.parentNode.removeChild(r)
            }(n)
        }
    };
    dt.addEvent = Te, dt.removeEvent = Ie;
    var Re = Le._enabled ? Le : {
            acquireContext: function(t) {
                return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
            }
        },
        We = dt.extend({
            initialize: function() {},
            acquireContext: function() {},
            releaseContext: function() {},
            addEventListener: function() {},
            removeEventListener: function() {}
        }, Re);
    ot._set("global", {
        plugins: {}
    });
    var Ne = {
            _plugins: [],
            _cacheId: 0,
            register: function(t) {
                var e = this._plugins;
                [].concat(t).forEach(function(t) {
                    -1 === e.indexOf(t) && e.push(t)
                }), this._cacheId++
            },
            unregister: function(t) {
                var i = this._plugins;
                [].concat(t).forEach(function(t) {
                    var e = i.indexOf(t); - 1 !== e && i.splice(e, 1)
                }), this._cacheId++
            },
            clear: function() {
                this._plugins = [], this._cacheId++
            },
            count: function() {
                return this._plugins.length
            },
            getAll: function() {
                return this._plugins
            },
            notify: function(t, e, i) {
                var n, a, r, o, s, l = this.descriptors(t),
                    d = l.length;
                for (n = 0; n < d; ++n)
                    if ("function" == typeof(s = (r = (a = l[n]).plugin)[e]) && ((o = [t].concat(i || [])).push(a.options), !1 === s.apply(r, o))) return !1;
                return !0
            },
            descriptors: function(t) {
                var e = t.$plugins || (t.$plugins = {});
                if (e.id === this._cacheId) return e.descriptors;
                var n = [],
                    a = [],
                    i = t && t.config || {},
                    r = i.options && i.options.plugins || {};
                return this._plugins.concat(i.plugins || []).forEach(function(t) {
                    if (-1 === n.indexOf(t)) {
                        var e = t.id,
                            i = r[e];
                        !1 !== i && (!0 === i && (i = dt.clone(ot.global.plugins[e])), n.push(t), a.push({
                            plugin: t,
                            options: i || {}
                        }))
                    }
                }), e.descriptors = a, e.id = this._cacheId, a
            },
            _invalidate: function(t) {
                delete t.$plugins
            }
        },
        ze = {
            constructors: {},
            defaults: {},
            registerScaleType: function(t, e, i) {
                this.constructors[t] = e, this.defaults[t] = dt.clone(i)
            },
            getScaleConstructor: function(t) {
                return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
            },
            getScaleDefaults: function(t) {
                return this.defaults.hasOwnProperty(t) ? dt.merge({}, [ot.scale, this.defaults[t]]) : {}
            },
            updateScaleDefaults: function(t, e) {
                this.defaults.hasOwnProperty(t) && (this.defaults[t] = dt.extend(this.defaults[t], e))
            },
            addScalesToLayout: function(e) {
                dt.each(e.scales, function(t) {
                    t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, ye.addBox(e, t)
                })
            }
        },
        Be = dt.valueOrDefault;
    ot._set("global", {
        tooltips: {
            enabled: !0,
            custom: null,
            mode: "nearest",
            position: "average",
            intersect: !0,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyFontColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: "#fff",
            displayColors: !0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            callbacks: {
                beforeTitle: dt.noop,
                title: function(t, e) {
                    var i = "",
                        n = e.labels,
                        a = n ? n.length : 0;
                    if (0 < t.length) {
                        var r = t[0];
                        r.label ? i = r.label : r.xLabel ? i = r.xLabel : 0 < a && r.index < a && (i = n[r.index])
                    }
                    return i
                },
                afterTitle: dt.noop,
                beforeBody: dt.noop,
                beforeLabel: dt.noop,
                label: function(t, e) {
                    var i = e.datasets[t.datasetIndex].label || "";
                    return i && (i += ": "), dt.isNullOrUndef(t.value) ? i += t.yLabel : i += t.value, i
                },
                labelColor: function(t, e) {
                    var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                    return {
                        borderColor: i.borderColor,
                        backgroundColor: i.backgroundColor
                    }
                },
                labelTextColor: function() {
                    return this._options.bodyFontColor
                },
                afterLabel: dt.noop,
                afterBody: dt.noop,
                beforeFooter: dt.noop,
                footer: dt.noop,
                afterFooter: dt.noop
            }
        }
    });
    var Ve = {
        average: function(t) {
            if (!t.length) return !1;
            var e, i, n = 0,
                a = 0,
                r = 0;
            for (e = 0, i = t.length; e < i; ++e) {
                var o = t[e];
                if (o && o.hasValue()) {
                    var s = o.tooltipPosition();
                    n += s.x, a += s.y, ++r
                }
            }
            return {
                x: n / r,
                y: a / r
            }
        },
        nearest: function(t, e) {
            var i, n, a, r = e.x,
                o = e.y,
                s = Number.POSITIVE_INFINITY;
            for (i = 0, n = t.length; i < n; ++i) {
                var l = t[i];
                if (l && l.hasValue()) {
                    var d = l.getCenterPoint(),
                        u = dt.distanceBetweenPoints(e, d);
                    u < s && (s = u, a = l)
                }
            }
            if (a) {
                var h = a.tooltipPosition();
                r = h.x, o = h.y
            }
            return {
                x: r,
                y: o
            }
        }
    };

    function Ee(t, e) {
        return e && (dt.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
    }

    function He(t) {
        return ("string" == typeof t || t instanceof String) && -1 < t.indexOf("\n") ? t.split("\n") : t
    }

    function Ye(t) {
        var e = ot.global;
        return {
            xPadding: t.xPadding,
            yPadding: t.yPadding,
            xAlign: t.xAlign,
            yAlign: t.yAlign,
            bodyFontColor: t.bodyFontColor,
            _bodyFontFamily: Be(t.bodyFontFamily, e.defaultFontFamily),
            _bodyFontStyle: Be(t.bodyFontStyle, e.defaultFontStyle),
            _bodyAlign: t.bodyAlign,
            bodyFontSize: Be(t.bodyFontSize, e.defaultFontSize),
            bodySpacing: t.bodySpacing,
            titleFontColor: t.titleFontColor,
            _titleFontFamily: Be(t.titleFontFamily, e.defaultFontFamily),
            _titleFontStyle: Be(t.titleFontStyle, e.defaultFontStyle),
            titleFontSize: Be(t.titleFontSize, e.defaultFontSize),
            _titleAlign: t.titleAlign,
            titleSpacing: t.titleSpacing,
            titleMarginBottom: t.titleMarginBottom,
            footerFontColor: t.footerFontColor,
            _footerFontFamily: Be(t.footerFontFamily, e.defaultFontFamily),
            _footerFontStyle: Be(t.footerFontStyle, e.defaultFontStyle),
            footerFontSize: Be(t.footerFontSize, e.defaultFontSize),
            _footerAlign: t.footerAlign,
            footerSpacing: t.footerSpacing,
            footerMarginTop: t.footerMarginTop,
            caretSize: t.caretSize,
            cornerRadius: t.cornerRadius,
            backgroundColor: t.backgroundColor,
            opacity: 0,
            legendColorBackground: t.multiKeyBackground,
            displayColors: t.displayColors,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth
        }
    }

    function je(t, e) {
        return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding
    }

    function Ue(t) {
        return Ee([], He(t))
    }
    var qe = gt.extend({
            initialize: function() {
                this._model = Ye(this._options), this._lastActive = []
            },
            getTitle: function() {
                var t = this._options.callbacks,
                    e = t.beforeTitle.apply(this, arguments),
                    i = t.title.apply(this, arguments),
                    n = t.afterTitle.apply(this, arguments),
                    a = [];
                return Ee(a = Ee(a = Ee(a, He(e)), He(i)), He(n))
            },
            getBeforeBody: function() {
                return Ue(this._options.callbacks.beforeBody.apply(this, arguments))
            },
            getBody: function(t, i) {
                var n = this,
                    a = n._options.callbacks,
                    r = [];
                return dt.each(t, function(t) {
                    var e = {
                        before: [],
                        lines: [],
                        after: []
                    };
                    Ee(e.before, He(a.beforeLabel.call(n, t, i))), Ee(e.lines, a.label.call(n, t, i)), Ee(e.after, He(a.afterLabel.call(n, t, i))), r.push(e)
                }), r
            },
            getAfterBody: function() {
                return Ue(this._options.callbacks.afterBody.apply(this, arguments))
            },
            getFooter: function() {
                var t = this._options.callbacks,
                    e = t.beforeFooter.apply(this, arguments),
                    i = t.footer.apply(this, arguments),
                    n = t.afterFooter.apply(this, arguments),
                    a = [];
                return Ee(a = Ee(a = Ee(a, He(e)), He(i)), He(n))
            },
            update: function(t) {
                var e, i, n, a, r, o, s, l, d, u, h, c, f, g, p, m, v, b, y, x, _, k, w, M = this,
                    S = M._options,
                    C = M._model,
                    D = M._model = Ye(S),
                    P = M._active,
                    T = M._data,
                    I = {
                        xAlign: C.xAlign,
                        yAlign: C.yAlign
                    },
                    A = {
                        x: C.x,
                        y: C.y
                    },
                    F = {
                        width: C.width,
                        height: C.height
                    },
                    O = {
                        x: C.caretX,
                        y: C.caretY
                    };
                if (P.length) {
                    D.opacity = 1;
                    var L = [],
                        R = [];
                    O = Ve[S.position].call(M, P, M._eventPosition);
                    var W = [];
                    for (e = 0, i = P.length; e < i; ++e) W.push((u = d = l = r = a = void 0, a = (n = P[e])._xScale, r = n._yScale || n._scale, o = n._index, s = n._datasetIndex, d = (l = n._chart.getDatasetMeta(s).controller)._getIndexScale(), u = l._getValueScale(), {
                        xLabel: a ? a.getLabelForIndex(o, s) : "",
                        yLabel: r ? r.getLabelForIndex(o, s) : "",
                        label: d ? "" + d.getLabelForIndex(o, s) : "",
                        value: u ? "" + u.getLabelForIndex(o, s) : "",
                        index: o,
                        datasetIndex: s,
                        x: n._model.x,
                        y: n._model.y
                    }));
                    S.filter && (W = W.filter(function(t) {
                        return S.filter(t, T)
                    })), S.itemSort && (W = W.sort(function(t, e) {
                        return S.itemSort(t, e, T)
                    })), dt.each(W, function(t) {
                        L.push(S.callbacks.labelColor.call(M, t, M._chart)), R.push(S.callbacks.labelTextColor.call(M, t, M._chart))
                    }), D.title = M.getTitle(W, T), D.beforeBody = M.getBeforeBody(W, T), D.body = M.getBody(W, T), D.afterBody = M.getAfterBody(W, T), D.footer = M.getFooter(W, T), D.x = O.x, D.y = O.y, D.caretPadding = S.caretPadding, D.labelColors = L, D.labelTextColors = R, D.dataPoints = W, F = function(t, e) {
                        var i = t._chart.ctx,
                            n = 2 * e.yPadding,
                            a = 0,
                            r = e.body,
                            o = r.reduce(function(t, e) {
                                return t + e.before.length + e.lines.length + e.after.length
                            }, 0);
                        o += e.beforeBody.length + e.afterBody.length;
                        var s = e.title.length,
                            l = e.footer.length,
                            d = e.titleFontSize,
                            u = e.bodyFontSize,
                            h = e.footerFontSize;
                        n += s * d, n += s ? (s - 1) * e.titleSpacing : 0, n += s ? e.titleMarginBottom : 0, n += o * u, n += o ? (o - 1) * e.bodySpacing : 0, n += l ? e.footerMarginTop : 0, n += l * h, n += l ? (l - 1) * e.footerSpacing : 0;

                        function c(t) {
                            a = Math.max(a, i.measureText(t).width + f)
                        }
                        var f = 0;
                        return i.font = dt.fontString(d, e._titleFontStyle, e._titleFontFamily), dt.each(e.title, c), i.font = dt.fontString(u, e._bodyFontStyle, e._bodyFontFamily), dt.each(e.beforeBody.concat(e.afterBody), c), f = e.displayColors ? u + 2 : 0, dt.each(r, function(t) {
                            dt.each(t.before, c), dt.each(t.lines, c), dt.each(t.after, c)
                        }), f = 0, i.font = dt.fontString(h, e._footerFontStyle, e._footerFontFamily), dt.each(e.footer, c), {
                            width: a += 2 * e.xPadding,
                            height: n
                        }
                    }(this, D), h = D, f = I = function(t, e) {
                        var i, n, a, r, o, s = t._model,
                            l = t._chart,
                            d = t._chart.chartArea,
                            u = "center",
                            h = "center";
                        s.y < e.height ? h = "top" : s.y > l.height - e.height && (h = "bottom");
                        var c = (d.left + d.right) / 2,
                            f = (d.top + d.bottom) / 2;
                        n = "center" === h ? (i = function(t) {
                            return t <= c
                        }, function(t) {
                            return c < t
                        }) : (i = function(t) {
                            return t <= e.width / 2
                        }, function(t) {
                            return t >= l.width - e.width / 2
                        }), a = function(t) {
                            return t + e.width + s.caretSize + s.caretPadding > l.width
                        }, r = function(t) {
                            return t - e.width - s.caretSize - s.caretPadding < 0
                        }, o = function(t) {
                            return t <= f ? "top" : "bottom"
                        }, i(s.x) ? (u = "left", a(s.x) && (u = "center", h = o(s.y))) : n(s.x) && (u = "right", r(s.x) && (u = "center", h = o(s.y)));
                        var g = t._options;
                        return {
                            xAlign: g.xAlign ? g.xAlign : u,
                            yAlign: g.yAlign ? g.yAlign : h
                        }
                    }(this, c = F), g = M._chart, p = h.x, m = h.y, v = h.caretSize, b = h.caretPadding, y = h.cornerRadius, x = f.xAlign, _ = f.yAlign, k = v + b, w = y + b, "right" === x ? p -= c.width : "center" === x && ((p -= c.width / 2) + c.width > g.width && (p = g.width - c.width), p < 0 && (p = 0)), "top" === _ ? m += k : m -= "bottom" === _ ? c.height + k : c.height / 2, "center" === _ ? "left" === x ? p += k : "right" === x && (p -= k) : "left" === x ? p -= w : "right" === x && (p += w), A = {
                        x: p,
                        y: m
                    }
                } else D.opacity = 0;
                return D.xAlign = I.xAlign, D.yAlign = I.yAlign, D.x = A.x, D.y = A.y, D.width = F.width, D.height = F.height, D.caretX = O.x, D.caretY = O.y, M._model = D, t && S.custom && S.custom.call(M, D), M
            },
            drawCaret: function(t, e) {
                var i = this._chart.ctx,
                    n = this._view,
                    a = this.getCaretPosition(t, e, n);
                i.lineTo(a.x1, a.y1), i.lineTo(a.x2, a.y2), i.lineTo(a.x3, a.y3)
            },
            getCaretPosition: function(t, e, i) {
                var n, a, r, o, s, l, d = i.caretSize,
                    u = i.cornerRadius,
                    h = i.xAlign,
                    c = i.yAlign,
                    f = t.x,
                    g = t.y,
                    p = e.width,
                    m = e.height;
                if ("center" === c) s = g + m / 2, l = "left" === h ? (a = (n = f) - d, r = n, o = s + d, s - d) : (a = (n = f + p) + d, r = n, o = s - d, s + d);
                else if (r = (n = "left" === h ? (a = f + u + d) - d : "right" === h ? (a = f + p - u - d) - d : (a = i.caretX) - d, a + d), "top" === c) s = (o = g) - d, l = o;
                else {
                    s = (o = g + m) + d, l = o;
                    var v = r;
                    r = n, n = v
                }
                return {
                    x1: n,
                    x2: a,
                    x3: r,
                    y1: o,
                    y2: s,
                    y3: l
                }
            },
            drawTitle: function(t, e, i) {
                var n = e.title;
                if (n.length) {
                    t.x = je(e, e._titleAlign), i.textAlign = e._titleAlign, i.textBaseline = "top";
                    var a, r, o = e.titleFontSize,
                        s = e.titleSpacing;
                    for (i.fillStyle = e.titleFontColor, i.font = dt.fontString(o, e._titleFontStyle, e._titleFontFamily), a = 0, r = n.length; a < r; ++a) i.fillText(n[a], t.x, t.y), t.y += o + s, a + 1 === n.length && (t.y += e.titleMarginBottom - s)
                }
            },
            drawBody: function(i, n, a) {
                var r, o = n.bodyFontSize,
                    e = n.bodySpacing,
                    t = n._bodyAlign,
                    s = n.body,
                    l = n.displayColors,
                    d = n.labelColors,
                    u = 0,
                    h = l ? je(n, "left") : 0;
                a.textAlign = t, a.textBaseline = "top", a.font = dt.fontString(o, n._bodyFontStyle, n._bodyFontFamily), i.x = je(n, t);

                function c(t) {
                    a.fillText(t, i.x + u, i.y), i.y += o + e
                }
                a.fillStyle = n.bodyFontColor, dt.each(n.beforeBody, c), u = l && "right" !== t ? "center" === t ? o / 2 + 1 : o + 2 : 0, dt.each(s, function(t, e) {
                    r = n.labelTextColors[e], a.fillStyle = r, dt.each(t.before, c), dt.each(t.lines, function(t) {
                        l && (a.fillStyle = n.legendColorBackground, a.fillRect(h, i.y, o, o), a.lineWidth = 1, a.strokeStyle = d[e].borderColor, a.strokeRect(h, i.y, o, o), a.fillStyle = d[e].backgroundColor, a.fillRect(h + 1, i.y + 1, o - 2, o - 2), a.fillStyle = r), c(t)
                    }), dt.each(t.after, c)
                }), u = 0, dt.each(n.afterBody, c), i.y -= e
            },
            drawFooter: function(e, i, n) {
                var t = i.footer;
                t.length && (e.x = je(i, i._footerAlign), e.y += i.footerMarginTop, n.textAlign = i._footerAlign, n.textBaseline = "top", n.fillStyle = i.footerFontColor, n.font = dt.fontString(i.footerFontSize, i._footerFontStyle, i._footerFontFamily), dt.each(t, function(t) {
                    n.fillText(t, e.x, e.y), e.y += i.footerFontSize + i.footerSpacing
                }))
            },
            drawBackground: function(t, e, i, n) {
                i.fillStyle = e.backgroundColor, i.strokeStyle = e.borderColor, i.lineWidth = e.borderWidth;
                var a = e.xAlign,
                    r = e.yAlign,
                    o = t.x,
                    s = t.y,
                    l = n.width,
                    d = n.height,
                    u = e.cornerRadius;
                i.beginPath(), i.moveTo(o + u, s), "top" === r && this.drawCaret(t, n), i.lineTo(o + l - u, s), i.quadraticCurveTo(o + l, s, o + l, s + u), "center" === r && "right" === a && this.drawCaret(t, n), i.lineTo(o + l, s + d - u), i.quadraticCurveTo(o + l, s + d, o + l - u, s + d), "bottom" === r && this.drawCaret(t, n), i.lineTo(o + u, s + d), i.quadraticCurveTo(o, s + d, o, s + d - u), "center" === r && "left" === a && this.drawCaret(t, n), i.lineTo(o, s + u), i.quadraticCurveTo(o, s, o + u, s), i.closePath(), i.fill(), 0 < e.borderWidth && i.stroke()
            },
            draw: function() {
                var t = this._chart.ctx,
                    e = this._view;
                if (0 !== e.opacity) {
                    var i = {
                            width: e.width,
                            height: e.height
                        },
                        n = {
                            x: e.x,
                            y: e.y
                        },
                        a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                        r = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                    this._options.enabled && r && (t.save(), t.globalAlpha = a, this.drawBackground(n, e, t, i), n.y += e.yPadding, this.drawTitle(n, e, t), this.drawBody(n, e, t), this.drawFooter(n, e, t), t.restore())
                }
            },
            handleEvent: function(t) {
                var e, i = this,
                    n = i._options;
                return i._lastActive = i._lastActive || [], "mouseout" === t.type ? i._active = [] : i._active = i._chart.getElementsAtEventForMode(t, n.mode, n), (e = !dt.arrayEquals(i._active, i._lastActive)) && (i._lastActive = i._active, (n.enabled || n.custom) && (i._eventPosition = {
                    x: t.x,
                    y: t.y
                }, i.update(!0), i.pivot())), e
            }
        }),
        Ge = Ve,
        Ze = qe;
    Ze.positioners = Ge;
    var Xe = dt.valueOrDefault;

    function Ke() {
        return dt.merge({}, [].slice.call(arguments), {
            merger: function(t, e, i, n) {
                if ("xAxes" === t || "yAxes" === t) {
                    var a, r, o, s = i[t].length;
                    for (e[t] || (e[t] = []), a = 0; a < s; ++a) o = i[t][a], r = Xe(o.type, "xAxes" === t ? "category" : "linear"), a >= e[t].length && e[t].push({}), !e[t][a].type || o.type && o.type !== e[t][a].type ? dt.merge(e[t][a], [ze.getScaleDefaults(r), o]) : dt.merge(e[t][a], o)
                } else dt._merger(t, e, i, n)
            }
        })
    }

    function $e() {
        return dt.merge({}, [].slice.call(arguments), {
            merger: function(t, e, i, n) {
                var a = e[t] || {},
                    r = i[t];
                "scales" === t ? e[t] = Ke(a, r) : "scale" === t ? e[t] = dt.merge(a, [ze.getScaleDefaults(r.type), r]) : dt._merger(t, e, i, n)
            }
        })
    }

    function Je(t) {
        return "top" === t || "bottom" === t
    }
    ot._set("global", {
        elements: {},
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {
            onHover: null,
            mode: "nearest",
            intersect: !0,
            animationDuration: 400
        },
        onClick: null,
        maintainAspectRatio: !0,
        responsive: !0,
        responsiveAnimationDuration: 0
    });

    function Qe(t, e) {
        return this.construct(t, e), this
    }
    dt.extend(Qe.prototype, {
        construct: function(t, e) {
            var i, n, a = this;
            (n = (i = (i = e) || {}).data = i.data || {}).datasets = n.datasets || [], n.labels = n.labels || [], i.options = $e(ot.global, ot[i.type], i.options || {}), e = i;
            var r = We.acquireContext(t, e),
                o = r && r.canvas,
                s = o && o.height,
                l = o && o.width;
            a.id = dt.uid(), a.ctx = r, a.canvas = o, a.config = e, a.width = l, a.height = s, a.aspectRatio = s ? l / s : null, a.options = e.options, a._bufferedRender = !1, (a.chart = a).controller = a, Qe.instances[a.id] = a, Object.defineProperty(a, "data", {
                get: function() {
                    return a.config.data
                },
                set: function(t) {
                    a.config.data = t
                }
            }), r && o ? (a.initialize(), a.update()) : console.error("Failed to create chart: can't acquire context from the given item")
        },
        initialize: function() {
            var t = this;
            return Ne.notify(t, "beforeInit"), dt.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), Ne.notify(t, "afterInit"), t
        },
        clear: function() {
            return dt.canvas.clear(this), this
        },
        stop: function() {
            return vt.cancelAnimation(this), this
        },
        resize: function(t) {
            var e = this,
                i = e.options,
                n = e.canvas,
                a = i.maintainAspectRatio && e.aspectRatio || null,
                r = Math.max(0, Math.floor(dt.getMaximumWidth(n))),
                o = Math.max(0, Math.floor(a ? r / a : dt.getMaximumHeight(n)));
            if ((e.width !== r || e.height !== o) && (n.width = e.width = r, n.height = e.height = o, n.style.width = r + "px", n.style.height = o + "px", dt.retinaScale(e, i.devicePixelRatio), !t)) {
                var s = {
                    width: r,
                    height: o
                };
                Ne.notify(e, "resize", [s]), i.onResize && i.onResize(e, s), e.stop(), e.update({
                    duration: i.responsiveAnimationDuration
                })
            }
        },
        ensureScalesHaveIDs: function() {
            var t = this.options,
                e = t.scales || {},
                i = t.scale;
            dt.each(e.xAxes, function(t, e) {
                t.id = t.id || "x-axis-" + e
            }), dt.each(e.yAxes, function(t, e) {
                t.id = t.id || "y-axis-" + e
            }), i && (i.id = i.id || "scale")
        },
        buildOrUpdateScales: function() {
            var o = this,
                t = o.options,
                s = o.scales || {},
                e = [],
                l = Object.keys(s).reduce(function(t, e) {
                    return t[e] = !1, t
                }, {});
            t.scales && (e = e.concat((t.scales.xAxes || []).map(function(t) {
                return {
                    options: t,
                    dtype: "category",
                    dposition: "bottom"
                }
            }), (t.scales.yAxes || []).map(function(t) {
                return {
                    options: t,
                    dtype: "linear",
                    dposition: "left"
                }
            }))), t.scale && e.push({
                options: t.scale,
                dtype: "radialLinear",
                isDefault: !0,
                dposition: "chartArea"
            }), dt.each(e, function(t) {
                var e = t.options,
                    i = e.id,
                    n = Xe(e.type, t.dtype);
                Je(e.position) !== Je(t.dposition) && (e.position = t.dposition), l[i] = !0;
                var a = null;
                if (i in s && s[i].type === n)(a = s[i]).options = e, a.ctx = o.ctx, a.chart = o;
                else {
                    var r = ze.getScaleConstructor(n);
                    if (!r) return;
                    a = new r({
                        id: i,
                        type: n,
                        options: e,
                        ctx: o.ctx,
                        chart: o
                    }), s[a.id] = a
                }
                a.mergeTicksOptions(), t.isDefault && (o.scale = a)
            }), dt.each(l, function(t, e) {
                t || delete s[e]
            }), o.scales = s, ze.addScalesToLayout(this)
        },
        buildOrUpdateControllers: function() {
            var r = this,
                o = [];
            return dt.each(r.data.datasets, function(t, e) {
                var i = r.getDatasetMeta(e),
                    n = t.type || r.config.type;
                if (i.type && i.type !== n && (r.destroyDatasetMeta(e), i = r.getDatasetMeta(e)), i.type = n, i.controller) i.controller.updateIndex(e), i.controller.linkScales();
                else {
                    var a = le[i.type];
                    if (void 0 === a) throw new Error('"' + i.type + '" is not a chart type.');
                    i.controller = new a(r, e), o.push(i.controller)
                }
            }, r), o
        },
        resetElements: function() {
            var i = this;
            dt.each(i.data.datasets, function(t, e) {
                i.getDatasetMeta(e).controller.reset()
            }, i)
        },
        reset: function() {
            this.resetElements(), this.tooltip.initialize()
        },
        update: function(t) {
            var e, i, n = this;
            if (t && "object" == typeof t || (t = {
                    duration: t,
                    lazy: arguments[1]
                }), i = (e = n).options, dt.each(e.scales, function(t) {
                    ye.removeBox(e, t)
                }), i = $e(ot.global, ot[e.config.type], i), e.options = e.config.options = i, e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.tooltip._options = i.tooltips, e.tooltip.initialize(), Ne._invalidate(n), !1 !== Ne.notify(n, "beforeUpdate")) {
                n.tooltip._data = n.data;
                var a = n.buildOrUpdateControllers();
                dt.each(n.data.datasets, function(t, e) {
                    n.getDatasetMeta(e).controller.buildOrUpdateElements()
                }, n), n.updateLayout(), n.options.animation && n.options.animation.duration && dt.each(a, function(t) {
                    t.reset()
                }), n.updateDatasets(), n.tooltip.initialize(), n.lastActive = [], Ne.notify(n, "afterUpdate"), n._bufferedRender ? n._bufferedRequest = {
                    duration: t.duration,
                    easing: t.easing,
                    lazy: t.lazy
                } : n.render(t)
            }
        },
        updateLayout: function() {
            !1 !== Ne.notify(this, "beforeLayout") && (ye.update(this, this.width, this.height), Ne.notify(this, "afterScaleUpdate"), Ne.notify(this, "afterLayout"))
        },
        updateDatasets: function() {
            if (!1 !== Ne.notify(this, "beforeDatasetsUpdate")) {
                for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                Ne.notify(this, "afterDatasetsUpdate")
            }
        },
        updateDataset: function(t) {
            var e = this.getDatasetMeta(t),
                i = {
                    meta: e,
                    index: t
                };
            !1 !== Ne.notify(this, "beforeDatasetUpdate", [i]) && (e.controller.update(), Ne.notify(this, "afterDatasetUpdate", [i]))
        },
        render: function(t) {
            var e = this;
            t && "object" == typeof t || (t = {
                duration: t,
                lazy: arguments[1]
            });
            var i = e.options.animation,
                n = Xe(t.duration, i && i.duration),
                a = t.lazy;
            if (!1 !== Ne.notify(e, "beforeRender")) {
                var r = function(t) {
                    Ne.notify(e, "afterRender"), dt.callback(i && i.onComplete, [t], e)
                };
                if (i && n) {
                    var o = new mt({
                        numSteps: n / 16.66,
                        easing: t.easing || i.easing,
                        render: function(t, e) {
                            var i = dt.easing.effects[e.easing],
                                n = e.currentStep,
                                a = n / e.numSteps;
                            t.draw(i(a), a, n)
                        },
                        onAnimationProgress: i.onProgress,
                        onAnimationComplete: r
                    });
                    vt.addAnimation(e, o, n, a)
                } else e.draw(), r(new mt({
                    numSteps: 0,
                    chart: e
                }));
                return e
            }
        },
        draw: function(t) {
            var e = this;
            e.clear(), dt.isNullOrUndef(t) && (t = 1), e.transition(t), e.width <= 0 || e.height <= 0 || !1 !== Ne.notify(e, "beforeDraw", [t]) && (dt.each(e.boxes, function(t) {
                t.draw(e.chartArea)
            }, e), e.drawDatasets(t), e._drawTooltip(t), Ne.notify(e, "afterDraw", [t]))
        },
        transition: function(t) {
            for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
            this.tooltip.transition(t)
        },
        drawDatasets: function(t) {
            if (!1 !== Ne.notify(this, "beforeDatasetsDraw", [t])) {
                for (var e = (this.data.datasets || []).length - 1; 0 <= e; --e) this.isDatasetVisible(e) && this.drawDataset(e, t);
                Ne.notify(this, "afterDatasetsDraw", [t])
            }
        },
        drawDataset: function(t, e) {
            var i = this.getDatasetMeta(t),
                n = {
                    meta: i,
                    index: t,
                    easingValue: e
                };
            !1 !== Ne.notify(this, "beforeDatasetDraw", [n]) && (i.controller.draw(e), Ne.notify(this, "afterDatasetDraw", [n]))
        },
        _drawTooltip: function(t) {
            var e = this.tooltip,
                i = {
                    tooltip: e,
                    easingValue: t
                };
            !1 !== Ne.notify(this, "beforeTooltipDraw", [i]) && (e.draw(), Ne.notify(this, "afterTooltipDraw", [i]))
        },
        getElementAtEvent: function(t) {
            return pe.modes.single(this, t)
        },
        getElementsAtEvent: function(t) {
            return pe.modes.label(this, t, {
                intersect: !0
            })
        },
        getElementsAtXAxis: function(t) {
            return pe.modes["x-axis"](this, t, {
                intersect: !0
            })
        },
        getElementsAtEventForMode: function(t, e, i) {
            var n = pe.modes[e];
            return "function" == typeof n ? n(this, t, i) : []
        },
        getDatasetAtEvent: function(t) {
            return pe.modes.dataset(this, t, {
                intersect: !0
            })
        },
        getDatasetMeta: function(t) {
            var e = this.data.datasets[t];
            e._meta || (e._meta = {});
            var i = e._meta[this.id];
            return i = i || (e._meta[this.id] = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null
            })
        },
        getVisibleDatasetCount: function() {
            for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;
            return t
        },
        isDatasetVisible: function(t) {
            var e = this.getDatasetMeta(t);
            return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
        },
        generateLegend: function() {
            return this.options.legendCallback(this)
        },
        destroyDatasetMeta: function(t) {
            var e = this.id,
                i = this.data.datasets[t],
                n = i._meta && i._meta[e];
            n && (n.controller.destroy(), delete i._meta[e])
        },
        destroy: function() {
            var t, e, i = this,
                n = i.canvas;
            for (i.stop(), t = 0, e = i.data.datasets.length; t < e; ++t) i.destroyDatasetMeta(t);
            n && (i.unbindEvents(), dt.canvas.clear(i), We.releaseContext(i.ctx), i.canvas = null, i.ctx = null), Ne.notify(i, "destroy"), delete Qe.instances[i.id]
        },
        toBase64Image: function() {
            return this.canvas.toDataURL.apply(this.canvas, arguments)
        },
        initToolTip: function() {
            this.tooltip = new Ze({
                _chart: this,
                _chartInstance: this,
                _data: this.data,
                _options: this.options.tooltips
            }, this)
        },
        bindEvents: function() {
            var e = this,
                i = e._listeners = {},
                n = function() {
                    e.eventHandler.apply(e, arguments)
                };
            dt.each(e.options.events, function(t) {
                We.addEventListener(e, t, n), i[t] = n
            }), e.options.responsive && (n = function() {
                e.resize()
            }, We.addEventListener(e, "resize", n), i.resize = n)
        },
        unbindEvents: function() {
            var i = this,
                t = i._listeners;
            t && (delete i._listeners, dt.each(t, function(t, e) {
                We.removeEventListener(i, e, t)
            }))
        },
        updateHoverStyle: function(t, e, i) {
            var n, a, r, o = i ? "setHoverStyle" : "removeHoverStyle";
            for (a = 0, r = t.length; a < r; ++a)(n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[o](n)
        },
        eventHandler: function(t) {
            var e = this,
                i = e.tooltip;
            if (!1 !== Ne.notify(e, "beforeEvent", [t])) {
                e._bufferedRender = !0, e._bufferedRequest = null;
                var n = e.handleEvent(t);
                i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), Ne.notify(e, "afterEvent", [t]);
                var a = e._bufferedRequest;
                return a ? e.render(a) : n && !e.animating && (e.stop(), e.render({
                    duration: e.options.hover.animationDuration,
                    lazy: !0
                })), e._bufferedRender = !1, e._bufferedRequest = null, e
            }
        },
        handleEvent: function(t) {
            var e, i = this,
                n = i.options || {},
                a = n.hover;
            return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, a.mode, a), dt.callback(n.onHover || n.hover.onHover, [t.native, i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t.native, i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, a.mode, !1), i.active.length && a.mode && i.updateHoverStyle(i.active, a.mode, !0), e = !dt.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e
        }
    }), Qe.instances = {};
    var ti = Qe;

    function ei() {
        throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
    }

    function ii(t) {
        this.options = t || {}
    }(Qe.Controller = Qe).types = {}, dt.configMerge = $e, dt.scaleMerge = Ke, dt.extend(ii.prototype, {
        formats: ei,
        parse: ei,
        format: ei,
        add: ei,
        diff: ei,
        startOf: ei,
        endOf: ei,
        _create: function(t) {
            return t
        }
    }), ii.override = function(t) {
        dt.extend(ii.prototype, t)
    };
    var ni = {
            _date: ii
        },
        ai = {
            formatters: {
                values: function(t) {
                    return dt.isArray(t) ? t : "" + t
                },
                linear: function(t, e, i) {
                    var n = 3 < i.length ? i[2] - i[1] : i[1] - i[0];
                    1 < Math.abs(n) && t !== Math.floor(t) && (n = t - Math.floor(t));
                    var a = dt.log10(Math.abs(n)),
                        r = "";
                    if (0 !== t)
                        if (Math.max(Math.abs(i[0]), Math.abs(i[i.length - 1])) < 1e-4) {
                            var o = dt.log10(Math.abs(t));
                            r = t.toExponential(Math.floor(o) - Math.floor(a))
                        } else {
                            var s = -1 * Math.floor(a);
                            s = Math.max(Math.min(s, 20), 0), r = t.toFixed(s)
                        }
                    else r = "0";
                    return r
                },
                logarithmic: function(t, e, i) {
                    var n = t / Math.pow(10, Math.floor(dt.log10(t)));
                    return 0 === t ? "0" : 1 == n || 2 == n || 5 == n || 0 === e || e === i.length - 1 ? t.toExponential() : ""
                }
            }
        },
        ri = dt.valueOrDefault,
        oi = dt.valueAtIndexOrDefault;

    function si(t) {
        var e, i, n = [];
        for (e = 0, i = t.length; e < i; ++e) n.push(t[e].label);
        return n
    }

    function li(t, e, i) {
        return dt.isArray(e) ? dt.longestText(t, i, e) : t.measureText(e).width
    }
    ot._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            zeroLineBorderDash: [],
            zeroLineBorderDashOffset: 0,
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0
        },
        scaleLabel: {
            display: !1,
            labelString: "",
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 0,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: ai.formatters.values,
            minor: {},
            major: {}
        }
    });
    var di = gt.extend({
            getPadding: function() {
                return {
                    left: this.paddingLeft || 0,
                    top: this.paddingTop || 0,
                    right: this.paddingRight || 0,
                    bottom: this.paddingBottom || 0
                }
            },
            getTicks: function() {
                return this._ticks
            },
            mergeTicksOptions: function() {
                var t = this.options.ticks;
                for (var e in !1 === t.minor && (t.minor = {
                        display: !1
                    }), !1 === t.major && (t.major = {
                        display: !1
                    }), t) "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]))
            },
            beforeUpdate: function() {
                dt.callback(this.options.beforeUpdate, [this])
            },
            update: function(t, e, i) {
                var n, a, r, o, s, l, d = this;
                for (d.beforeUpdate(), d.maxWidth = t, d.maxHeight = e, d.margins = dt.extend({
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, i), d._maxLabelLines = 0, d.longestLabelWidth = 0, d.longestTextCache = d.longestTextCache || {}, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), s = d.buildTicks() || [], s = d.afterBuildTicks(s) || s, d.beforeTickToLabelConversion(), r = d.convertTicksToLabels(s) || d.ticks, d.afterTickToLabelConversion(), n = 0, a = (d.ticks = r).length; n < a; ++n) o = r[n], (l = s[n]) ? l.label = o : s.push(l = {
                    label: o,
                    major: !1
                });
                return d._ticks = s, d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d.afterUpdate(), d.minSize
            },
            afterUpdate: function() {
                dt.callback(this.options.afterUpdate, [this])
            },
            beforeSetDimensions: function() {
                dt.callback(this.options.beforeSetDimensions, [this])
            },
            setDimensions: function() {
                var t = this;
                t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
            },
            afterSetDimensions: function() {
                dt.callback(this.options.afterSetDimensions, [this])
            },
            beforeDataLimits: function() {
                dt.callback(this.options.beforeDataLimits, [this])
            },
            determineDataLimits: dt.noop,
            afterDataLimits: function() {
                dt.callback(this.options.afterDataLimits, [this])
            },
            beforeBuildTicks: function() {
                dt.callback(this.options.beforeBuildTicks, [this])
            },
            buildTicks: dt.noop,
            afterBuildTicks: function(t) {
                return dt.isArray(t) && t.length ? dt.callback(this.options.afterBuildTicks, [this, t]) : (this.ticks = dt.callback(this.options.afterBuildTicks, [this, this.ticks]) || this.ticks, t)
            },
            beforeTickToLabelConversion: function() {
                dt.callback(this.options.beforeTickToLabelConversion, [this])
            },
            convertTicksToLabels: function() {
                var t = this.options.ticks;
                this.ticks = this.ticks.map(t.userCallback || t.callback, this)
            },
            afterTickToLabelConversion: function() {
                dt.callback(this.options.afterTickToLabelConversion, [this])
            },
            beforeCalculateTickRotation: function() {
                dt.callback(this.options.beforeCalculateTickRotation, [this])
            },
            calculateTickRotation: function() {
                var t = this,
                    e = t.ctx,
                    i = t.options.ticks,
                    n = si(t._ticks),
                    a = dt.options._parseFont(i);
                e.font = a.string;
                var r = i.minRotation || 0;
                if (n.length && t.options.display && t.isHorizontal())
                    for (var o, s = dt.longestText(e, a.string, n, t.longestTextCache), l = s, d = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; d < l && r < i.maxRotation;) {
                        var u = dt.toRadians(r);
                        if (o = Math.cos(u), Math.sin(u) * s > t.maxHeight) {
                            r--;
                            break
                        }
                        r++, l = o * s
                    }
                t.labelRotation = r
            },
            afterCalculateTickRotation: function() {
                dt.callback(this.options.afterCalculateTickRotation, [this])
            },
            beforeFit: function() {
                dt.callback(this.options.beforeFit, [this])
            },
            fit: function() {
                var t = this,
                    e = t.minSize = {
                        width: 0,
                        height: 0
                    },
                    i = si(t._ticks),
                    n = t.options,
                    a = n.ticks,
                    r = n.scaleLabel,
                    o = n.gridLines,
                    s = t._isVisible(),
                    l = n.position,
                    d = t.isHorizontal(),
                    u = dt.options._parseFont,
                    h = u(a),
                    c = n.gridLines.tickMarkLength;
                if (e.width = d ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : s && o.drawTicks ? c : 0, e.height = d ? s && o.drawTicks ? c : 0 : t.maxHeight, r.display && s) {
                    var f = u(r),
                        g = dt.options.toPadding(r.padding),
                        p = f.lineHeight + g.height;
                    d ? e.height += p : e.width += p
                }
                if (a.display && s) {
                    var m = dt.longestText(t.ctx, h.string, i, t.longestTextCache),
                        v = dt.numberOfLabelLines(i),
                        b = .5 * h.size,
                        y = t.options.ticks.padding;
                    if (t._maxLabelLines = v, t.longestLabelWidth = m, d) {
                        var x = dt.toRadians(t.labelRotation),
                            _ = Math.cos(x),
                            k = Math.sin(x) * m + h.lineHeight * v + b;
                        e.height = Math.min(t.maxHeight, e.height + k + y), t.ctx.font = h.string;
                        var w, M, S = li(t.ctx, i[0], h.string),
                            C = li(t.ctx, i[i.length - 1], h.string),
                            D = t.getPixelForTick(0) - t.left,
                            P = t.right - t.getPixelForTick(i.length - 1);
                        M = 0 !== t.labelRotation ? (w = "bottom" === l ? _ * S : _ * b, "bottom" === l ? _ * b : _ * C) : (w = S / 2, C / 2), t.paddingLeft = Math.max(w - D, 0) + 3, t.paddingRight = Math.max(M - P, 0) + 3
                    } else a.mirror ? m = 0 : m += y + b, e.width = Math.min(t.maxWidth, e.width + m), t.paddingTop = h.size / 2, t.paddingBottom = h.size / 2
                }
                t.handleMargins(), t.width = e.width, t.height = e.height
            },
            handleMargins: function() {
                var t = this;
                t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
            },
            afterFit: function() {
                dt.callback(this.options.afterFit, [this])
            },
            isHorizontal: function() {
                return "top" === this.options.position || "bottom" === this.options.position
            },
            isFullWidth: function() {
                return this.options.fullWidth
            },
            getRightValue: function(t) {
                if (dt.isNullOrUndef(t)) return NaN;
                if (("number" == typeof t || t instanceof Number) && !isFinite(t)) return NaN;
                if (t)
                    if (this.isHorizontal()) {
                        if (void 0 !== t.x) return this.getRightValue(t.x)
                    } else if (void 0 !== t.y) return this.getRightValue(t.y);
                return t
            },
            getLabelForIndex: dt.noop,
            getPixelForValue: dt.noop,
            getValueForPixel: dt.noop,
            getPixelForTick: function(t) {
                var e = this,
                    i = e.options.offset;
                if (e.isHorizontal()) {
                    var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
                        a = n * t + e.paddingLeft;
                    return i && (a += n / 2), e.left + a + (e.isFullWidth() ? e.margins.left : 0)
                }
                var r = e.height - (e.paddingTop + e.paddingBottom);
                return e.top + t * (r / (e._ticks.length - 1))
            },
            getPixelForDecimal: function(t) {
                var e = this;
                if (e.isHorizontal()) {
                    var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft;
                    return e.left + i + (e.isFullWidth() ? e.margins.left : 0)
                }
                return e.top + t * e.height
            },
            getBasePixel: function() {
                return this.getPixelForValue(this.getBaseValue())
            },
            getBaseValue: function() {
                var t = this.min,
                    e = this.max;
                return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0
            },
            _autoSkip: function(t) {
                var e, i, n = this.isHorizontal(),
                    a = this.options.ticks.minor,
                    r = t.length,
                    o = !1,
                    s = a.maxTicksLimit,
                    l = this._tickSize() * (r - 1),
                    d = n ? this.width - (this.paddingLeft + this.paddingRight) : this.height - (this.paddingTop + this.PaddingBottom),
                    u = [];
                for (d < l && (o = 1 + Math.floor(l / d)), s < r && (o = Math.max(o, 1 + Math.floor(r / s))), e = 0; e < r; e++) i = t[e], 1 < o && 0 < e % o && delete i.label, u.push(i);
                return u
            },
            _tickSize: function() {
                var t = this.isHorizontal(),
                    e = this.options.ticks.minor,
                    i = dt.toRadians(this.labelRotation),
                    n = Math.abs(Math.cos(i)),
                    a = Math.abs(Math.sin(i)),
                    r = e.autoSkipPadding || 0,
                    o = this.longestLabelWidth + r || 0,
                    s = dt.options._parseFont(e),
                    l = this._maxLabelLines * s.lineHeight + r || 0;
                return t ? o * a < l * n ? o / n : l / a : l * a < o * n ? l / n : o / a
            },
            _isVisible: function() {
                var t, e, i, n = this.chart,
                    a = this.options.display;
                if ("auto" !== a) return !!a;
                for (t = 0, e = n.data.datasets.length; t < e; ++t)
                    if (n.isDatasetVisible(t) && ((i = n.getDatasetMeta(t)).xAxisID === this.id || i.yAxisID === this.id)) return !0;
                return !1
            },
            draw: function(D) {
                var P = this,
                    T = P.options;
                if (P._isVisible()) {
                    var t, I, A, F = P.chart,
                        o = P.ctx,
                        e = ot.global.defaultFontColor,
                        s = T.ticks.minor,
                        i = T.ticks.major || s,
                        O = T.gridLines,
                        n = T.scaleLabel,
                        L = T.position,
                        R = 0 !== P.labelRotation,
                        W = s.mirror,
                        N = P.isHorizontal(),
                        a = dt.options._parseFont,
                        r = s.display && s.autoSkip ? P._autoSkip(P.getTicks()) : P.getTicks(),
                        l = ri(s.fontColor, e),
                        d = a(s),
                        z = d.lineHeight,
                        u = ri(i.fontColor, e),
                        h = a(i),
                        B = s.padding,
                        V = s.labelOffset,
                        E = O.drawTicks ? O.tickMarkLength : 0,
                        c = ri(n.fontColor, e),
                        f = a(n),
                        g = dt.options.toPadding(n.padding),
                        H = dt.toRadians(P.labelRotation),
                        Y = [],
                        j = O.drawBorder ? oi(O.lineWidth, 0, 0) : 0,
                        U = dt._alignPixel;
                    if (A = "top" === L ? (t = U(F, P.bottom, j), I = P.bottom - E, t - j / 2) : "bottom" === L ? (t = U(F, P.top, j), I = t + j / 2, P.top + E) : "left" === L ? (t = U(F, P.right, j), I = P.right - E, t - j / 2) : (t = U(F, P.left, j), I = t + j / 2, P.left + E), dt.each(r, function(t, e) {
                            if (!dt.isNullOrUndef(t.label)) {
                                var i, n, a, r, o, s, l, d, u, h, c, f, g, p, m, v, b = t.label;
                                r = e === P.zeroLineIndex && T.offset === O.offsetGridLines ? (i = O.zeroLineWidth, n = O.zeroLineColor, a = O.zeroLineBorderDash || [], O.zeroLineBorderDashOffset || 0) : (i = oi(O.lineWidth, e), n = oi(O.color, e), a = O.borderDash || [], O.borderDashOffset || 0);
                                var y = dt.isArray(b) ? b.length : 1,
                                    x = (w = P, M = e, S = O.offsetGridLines, C = w.getPixelForTick(M), S && (1 === w.getTicks().length ? C -= w.isHorizontal() ? Math.max(C - w.left, w.right - C) : Math.max(C - w.top, w.bottom - C) : C -= 0 === M ? (w.getPixelForTick(1) - C) / 2 : (C - w.getPixelForTick(M - 1)) / 2), C);
                                if (N) {
                                    var _ = E + B;
                                    x < P.left - 1e-7 && (n = "rgba(0,0,0,0)"), o = l = u = c = U(F, x, i), s = I, d = A, g = P.getPixelForTick(e) + V, p = "top" === L ? (h = U(F, D.top, j) + j / 2, f = D.bottom, m = ((R ? 1 : .5) - y) * z, v = R ? "left" : "center", P.bottom - _) : (h = D.top, f = U(F, D.bottom, j) - j / 2, m = (R ? 0 : .5) * z, v = R ? "right" : "center", P.top + _)
                                } else {
                                    var k = (W ? 0 : E) + B;
                                    x < P.top - 1e-7 && (n = "rgba(0,0,0,0)"), o = I, l = A, s = d = h = f = U(F, x, i), p = P.getPixelForTick(e) + V, m = (1 - y) * z / 2, g = "left" === L ? (u = U(F, D.left, j) + j / 2, c = D.right, v = W ? "left" : "right", P.right - k) : (u = D.left, c = U(F, D.right, j) - j / 2, v = W ? "right" : "left", P.left + k)
                                }
                                Y.push({
                                    tx1: o,
                                    ty1: s,
                                    tx2: l,
                                    ty2: d,
                                    x1: u,
                                    y1: h,
                                    x2: c,
                                    y2: f,
                                    labelX: g,
                                    labelY: p,
                                    glWidth: i,
                                    glColor: n,
                                    glBorderDash: a,
                                    glBorderDashOffset: r,
                                    rotation: -1 * H,
                                    label: b,
                                    major: t.major,
                                    textOffset: m,
                                    textAlign: v
                                })
                            }
                            var w, M, S, C
                        }), dt.each(Y, function(t) {
                            var e = t.glWidth,
                                i = t.glColor;
                            if (O.display && e && i && (o.save(), o.lineWidth = e, o.strokeStyle = i, o.setLineDash && (o.setLineDash(t.glBorderDash), o.lineDashOffset = t.glBorderDashOffset), o.beginPath(), O.drawTicks && (o.moveTo(t.tx1, t.ty1), o.lineTo(t.tx2, t.ty2)), O.drawOnChartArea && (o.moveTo(t.x1, t.y1), o.lineTo(t.x2, t.y2)), o.stroke(), o.restore()), s.display) {
                                o.save(), o.translate(t.labelX, t.labelY), o.rotate(t.rotation), o.font = t.major ? h.string : d.string, o.fillStyle = t.major ? u : l, o.textBaseline = "middle", o.textAlign = t.textAlign;
                                var n = t.label,
                                    a = t.textOffset;
                                if (dt.isArray(n))
                                    for (var r = 0; r < n.length; ++r) o.fillText("" + n[r], 0, a), a += z;
                                else o.fillText(n, 0, a);
                                o.restore()
                            }
                        }), n.display) {
                        var p, m, v = 0,
                            b = f.lineHeight / 2;
                        if (N) p = P.left + (P.right - P.left) / 2, m = "bottom" === L ? P.bottom - b - g.bottom : P.top + b + g.top;
                        else {
                            var y = "left" === L;
                            p = y ? P.left + b + g.top : P.right - b - g.top, m = P.top + (P.bottom - P.top) / 2, v = y ? -.5 * Math.PI : .5 * Math.PI
                        }
                        o.save(), o.translate(p, m), o.rotate(v), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = c, o.font = f.string, o.fillText(n.labelString, 0, 0), o.restore()
                    }
                    if (j) {
                        var x, _, k, w, M = j,
                            S = oi(O.lineWidth, r.length - 1, 0);
                        N ? (x = U(F, P.left, M) - M / 2, _ = U(F, P.right, S) + S / 2, k = w = t) : (k = U(F, P.top, M) - M / 2, w = U(F, P.bottom, S) + S / 2, x = _ = t), o.lineWidth = j, o.strokeStyle = oi(O.color, 0), o.beginPath(), o.moveTo(x, k), o.lineTo(_, w), o.stroke()
                    }
                }
            }
        }),
        ui = di.extend({
            getLabels: function() {
                var t = this.chart.data;
                return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
            },
            determineDataLimits: function() {
                var t, e = this,
                    i = e.getLabels();
                e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex]
            },
            buildTicks: function() {
                var t = this.getLabels();
                this.ticks = 0 === this.minIndex && this.maxIndex === t.length - 1 ? t : t.slice(this.minIndex, this.maxIndex + 1)
            },
            getLabelForIndex: function(t, e) {
                var i = this.chart;
                return i.getDatasetMeta(e).controller._getValueScaleId() === this.id ? this.getRightValue(i.data.datasets[e].data[t]) : this.ticks[t - this.minIndex]
            },
            getPixelForValue: function(t, e) {
                var i, n = this,
                    a = n.options.offset,
                    r = Math.max(n.maxIndex + 1 - n.minIndex - (a ? 0 : 1), 1);
                if (null != t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || void 0 !== t && isNaN(e)) {
                    t = i || t;
                    var o = n.getLabels().indexOf(t);
                    e = -1 !== o ? o : e
                }
                if (n.isHorizontal()) {
                    var s = n.width / r,
                        l = s * (e - n.minIndex);
                    return a && (l += s / 2), n.left + l
                }
                var d = n.height / r,
                    u = d * (e - n.minIndex);
                return a && (u += d / 2), n.top + u
            },
            getPixelForTick: function(t) {
                return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
            },
            getValueForPixel: function(t) {
                var e = this.options.offset,
                    i = Math.max(this._ticks.length - (e ? 0 : 1), 1),
                    n = this.isHorizontal(),
                    a = (n ? this.width : this.height) / i;
                return t -= n ? this.left : this.top, e && (t -= a / 2), (t <= 0 ? 0 : Math.round(t / a)) + this.minIndex
            },
            getBasePixel: function() {
                return this.bottom
            }
        });
    ui._defaults = {
        position: "bottom"
    };
    var hi = dt.noop,
        ci = dt.isNullOrUndef,
        fi = di.extend({
            getRightValue: function(t) {
                return "string" == typeof t ? +t : di.prototype.getRightValue.call(this, t)
            },
            handleTickRangeOptions: function() {
                var t = this,
                    e = t.options.ticks;
                if (e.beginAtZero) {
                    var i = dt.sign(t.min),
                        n = dt.sign(t.max);
                    i < 0 && n < 0 ? t.max = 0 : 0 < i && 0 < n && (t.min = 0)
                }
                var a = void 0 !== e.min || void 0 !== e.suggestedMin,
                    r = void 0 !== e.max || void 0 !== e.suggestedMax;
                void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), a != r && t.min >= t.max && (a ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
            },
            getTickLimit: function() {
                var t, e = this.options.ticks,
                    i = e.stepSize,
                    n = e.maxTicksLimit;
                return i ? t = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1 : (t = this._computeTickLimit(), n = n || 11), n && (t = Math.min(n, t)), t
            },
            _computeTickLimit: function() {
                return Number.POSITIVE_INFINITY
            },
            handleDirectionalChanges: hi,
            buildTicks: function() {
                var t = this,
                    e = t.options.ticks,
                    i = t.getTickLimit(),
                    v = {
                        maxTicks: i = Math.max(2, i),
                        min: e.min,
                        max: e.max,
                        precision: e.precision,
                        stepSize: dt.valueOrDefault(e.fixedStepSize, e.stepSize)
                    },
                    n = t.ticks = function(t, e) {
                        var i, n, a, r, o = [],
                            s = v.stepSize,
                            l = s || 1,
                            d = v.maxTicks - 1,
                            u = v.min,
                            h = v.max,
                            c = v.precision,
                            f = e.min,
                            g = e.max,
                            p = dt.niceNum((g - f) / d / l) * l;
                        if (p < 1e-14 && ci(u) && ci(h)) return [f, g];
                        (r = Math.ceil(g / p) - Math.floor(f / p)) > d && (p = dt.niceNum(r * p / d / l) * l), s || ci(c) ? i = Math.pow(10, dt._decimalPlaces(p)) : (i = Math.pow(10, c), p = Math.ceil(p * i) / i), n = Math.floor(f / p) * p, a = Math.ceil(g / p) * p, s && (!ci(u) && dt.almostWhole(u / p, p / 1e3) && (n = u), !ci(h) && dt.almostWhole(h / p, p / 1e3) && (a = h)), r = (a - n) / p, r = dt.almostEquals(r, Math.round(r), p / 1e3) ? Math.round(r) : Math.ceil(r), n = Math.round(n * i) / i, a = Math.round(a * i) / i, o.push(ci(u) ? n : u);
                        for (var m = 1; m < r; ++m) o.push(Math.round((n + m * p) * i) / i);
                        return o.push(ci(h) ? a : h), o
                    }(0, t);
                t.handleDirectionalChanges(), t.max = dt.max(n), t.min = dt.min(n), e.reverse ? (n.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
            },
            convertTicksToLabels: function() {
                this.ticksAsNumbers = this.ticks.slice(), this.zeroLineIndex = this.ticks.indexOf(0), di.prototype.convertTicksToLabels.call(this)
            }
        }),
        gi = {
            position: "left",
            ticks: {
                callback: ai.formatters.linear
            }
        },
        pi = fi.extend({
            determineDataLimits: function() {
                var o = this,
                    s = o.options,
                    l = o.chart,
                    t = l.data.datasets,
                    e = o.isHorizontal();

                function d(t) {
                    return e ? t.xAxisID === o.id : t.yAxisID === o.id
                }
                o.min = null, o.max = null;
                var n = s.stacked;
                if (void 0 === n && dt.each(t, function(t, e) {
                        if (!n) {
                            var i = l.getDatasetMeta(e);
                            l.isDatasetVisible(e) && d(i) && void 0 !== i.stack && (n = !0)
                        }
                    }), s.stacked || n) {
                    var u = {};
                    dt.each(t, function(t, e) {
                        var n = l.getDatasetMeta(e),
                            i = [n.type, void 0 === s.stacked && void 0 === n.stack ? e : "", n.stack].join(".");
                        void 0 === u[i] && (u[i] = {
                            positiveValues: [],
                            negativeValues: []
                        });
                        var a = u[i].positiveValues,
                            r = u[i].negativeValues;
                        l.isDatasetVisible(e) && d(n) && dt.each(t.data, function(t, e) {
                            var i = +o.getRightValue(t);
                            isNaN(i) || n.data[e].hidden || (a[e] = a[e] || 0, r[e] = r[e] || 0, s.relativePoints ? a[e] = 100 : i < 0 ? r[e] += i : a[e] += i)
                        })
                    }), dt.each(u, function(t) {
                        var e = t.positiveValues.concat(t.negativeValues),
                            i = dt.min(e),
                            n = dt.max(e);
                        o.min = null === o.min ? i : Math.min(o.min, i), o.max = null === o.max ? n : Math.max(o.max, n)
                    })
                } else dt.each(t, function(t, e) {
                    var n = l.getDatasetMeta(e);
                    l.isDatasetVisible(e) && d(n) && dt.each(t.data, function(t, e) {
                        var i = +o.getRightValue(t);
                        isNaN(i) || n.data[e].hidden || (null === o.min ? o.min = i : i < o.min && (o.min = i), null === o.max ? o.max = i : i > o.max && (o.max = i))
                    })
                });
                o.min = isFinite(o.min) && !isNaN(o.min) ? o.min : 0, o.max = isFinite(o.max) && !isNaN(o.max) ? o.max : 1, this.handleTickRangeOptions()
            },
            _computeTickLimit: function() {
                var t;
                return this.isHorizontal() ? Math.ceil(this.width / 40) : (t = dt.options._parseFont(this.options.ticks), Math.ceil(this.height / t.lineHeight))
            },
            handleDirectionalChanges: function() {
                this.isHorizontal() || this.ticks.reverse()
            },
            getLabelForIndex: function(t, e) {
                return +this.getRightValue(this.chart.data.datasets[e].data[t])
            },
            getPixelForValue: function(t) {
                var e = this.start,
                    i = +this.getRightValue(t),
                    n = this.end - e;
                return this.isHorizontal() ? this.left + this.width / n * (i - e) : this.bottom - this.height / n * (i - e)
            },
            getValueForPixel: function(t) {
                var e = this.isHorizontal(),
                    i = e ? this.width : this.height,
                    n = (e ? t - this.left : this.bottom - t) / i;
                return this.start + (this.end - this.start) * n
            },
            getPixelForTick: function(t) {
                return this.getPixelForValue(this.ticksAsNumbers[t])
            }
        }),
        mi = gi;
    pi._defaults = mi;
    var vi = dt.valueOrDefault,
        bi = {
            position: "left",
            ticks: {
                callback: ai.formatters.logarithmic
            }
        };

    function yi(t, e) {
        return dt.isFinite(t) && 0 <= t ? t : e
    }
    var xi = di.extend({
            determineDataLimits: function() {
                var o = this,
                    i = o.options,
                    s = o.chart,
                    t = s.data.datasets,
                    e = o.isHorizontal();

                function l(t) {
                    return e ? t.xAxisID === o.id : t.yAxisID === o.id
                }
                o.min = null, o.max = null, o.minNotZero = null;
                var n = i.stacked;
                if (void 0 === n && dt.each(t, function(t, e) {
                        if (!n) {
                            var i = s.getDatasetMeta(e);
                            s.isDatasetVisible(e) && l(i) && void 0 !== i.stack && (n = !0)
                        }
                    }), i.stacked || n) {
                    var d = {};
                    dt.each(t, function(t, e) {
                        var a = s.getDatasetMeta(e),
                            r = [a.type, void 0 === i.stacked && void 0 === a.stack ? e : "", a.stack].join(".");
                        s.isDatasetVisible(e) && l(a) && (void 0 === d[r] && (d[r] = []), dt.each(t.data, function(t, e) {
                            var i = d[r],
                                n = +o.getRightValue(t);
                            isNaN(n) || a.data[e].hidden || n < 0 || (i[e] = i[e] || 0, i[e] += n)
                        }))
                    }), dt.each(d, function(t) {
                        if (0 < t.length) {
                            var e = dt.min(t),
                                i = dt.max(t);
                            o.min = null === o.min ? e : Math.min(o.min, e), o.max = null === o.max ? i : Math.max(o.max, i)
                        }
                    })
                } else dt.each(t, function(t, e) {
                    var n = s.getDatasetMeta(e);
                    s.isDatasetVisible(e) && l(n) && dt.each(t.data, function(t, e) {
                        var i = +o.getRightValue(t);
                        isNaN(i) || n.data[e].hidden || i < 0 || (null === o.min ? o.min = i : i < o.min && (o.min = i), null === o.max ? o.max = i : i > o.max && (o.max = i), 0 != i && (null === o.minNotZero || i < o.minNotZero) && (o.minNotZero = i))
                    })
                });
                this.handleTickRangeOptions()
            },
            handleTickRangeOptions: function() {
                var t = this,
                    e = t.options.ticks;
                t.min = yi(e.min, t.min), t.max = yi(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(dt.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(dt.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(dt.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(dt.log10(t.min)) + 1) : 10), null === t.minNotZero && (0 < t.min ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(dt.log10(t.max))) : t.minNotZero = 1)
            },
            buildTicks: function() {
                var t = this,
                    e = t.options.ticks,
                    i = !t.isHorizontal(),
                    n = {
                        min: yi(e.min),
                        max: yi(e.max)
                    },
                    a = t.ticks = function(t, e) {
                        var i, n, a = [],
                            r = vi(t.min, Math.pow(10, Math.floor(dt.log10(e.min)))),
                            o = Math.floor(dt.log10(e.max)),
                            s = Math.ceil(e.max / Math.pow(10, o));
                        0 === r ? (i = Math.floor(dt.log10(e.minNotZero)), n = Math.floor(e.minNotZero / Math.pow(10, i)), a.push(r), r = n * Math.pow(10, i)) : (i = Math.floor(dt.log10(r)), n = Math.floor(r / Math.pow(10, i)));
                        for (var l = i < 0 ? Math.pow(10, Math.abs(i)) : 1; a.push(r), 10 == ++n && (n = 1, l = 0 <= ++i ? 1 : l), r = Math.round(n * Math.pow(10, i) * l) / l, i < o || i === o && n < s;);
                        var d = vi(t.max, r);
                        return a.push(d), a
                    }(n, t);
                t.max = dt.max(a), t.min = dt.min(a), e.reverse ? (i = !i, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i && a.reverse()
            },
            convertTicksToLabels: function() {
                this.tickValues = this.ticks.slice(), di.prototype.convertTicksToLabels.call(this)
            },
            getLabelForIndex: function(t, e) {
                return +this.getRightValue(this.chart.data.datasets[e].data[t])
            },
            getPixelForTick: function(t) {
                return this.getPixelForValue(this.tickValues[t])
            },
            _getFirstTickValue: function(t) {
                var e = Math.floor(dt.log10(t));
                return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
            },
            getPixelForValue: function(t) {
                var e, i, n, a, r, o = this,
                    s = o.options.ticks,
                    l = s.reverse,
                    d = dt.log10,
                    u = o._getFirstTickValue(o.minNotZero),
                    h = 0;
                return t = +o.getRightValue(t), r = l ? (n = o.end, a = o.start, -1) : (n = o.start, a = o.end, 1), i = o.isHorizontal() ? (e = o.width, l ? o.right : o.left) : (e = o.height, r *= -1, l ? o.top : o.bottom), t !== n && (0 === n && (e -= h = vi(s.fontSize, ot.global.defaultFontSize), n = u), 0 !== t && (h += e / (d(a) - d(n)) * (d(t) - d(n))), i += r * h), i
            },
            getValueForPixel: function(t) {
                var e, i, n, a, r = this,
                    o = r.options.ticks,
                    s = o.reverse,
                    l = dt.log10,
                    d = r._getFirstTickValue(r.minNotZero);
                if (n = s ? (i = r.end, r.start) : (i = r.start, r.end), (a = r.isHorizontal() ? (e = r.width, s ? r.right - t : t - r.left) : (e = r.height, s ? t - r.top : r.bottom - t)) !== i) {
                    if (0 === i) {
                        var u = vi(o.fontSize, ot.global.defaultFontSize);
                        a -= u, e -= u, i = d
                    }
                    a *= l(n) - l(i), a /= e, a = Math.pow(10, l(i) + a)
                }
                return a
            }
        }),
        _i = bi;
    xi._defaults = _i;
    var ki = dt.valueOrDefault,
        wi = dt.valueAtIndexOrDefault,
        Mi = dt.options.resolve,
        Si = {
            display: !0,
            animate: !0,
            position: "chartArea",
            angleLines: {
                display: !0,
                color: "rgba(0, 0, 0, 0.1)",
                lineWidth: 1,
                borderDash: [],
                borderDashOffset: 0
            },
            gridLines: {
                circular: !1
            },
            ticks: {
                showLabelBackdrop: !0,
                backdropColor: "rgba(255,255,255,0.75)",
                backdropPaddingY: 2,
                backdropPaddingX: 2,
                callback: ai.formatters.linear
            },
            pointLabels: {
                display: !0,
                fontSize: 10,
                callback: function(t) {
                    return t
                }
            }
        };

    function Ci(t) {
        var e = t.options;
        return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
    }

    function Di(t) {
        var e = t.ticks;
        return e.display && t.display ? ki(e.fontSize, ot.global.defaultFontSize) + 2 * e.backdropPaddingY : 0
    }

    function Pi(t, e, i, n, a) {
        return t === n || t === a ? {
            start: e - i / 2,
            end: e + i / 2
        } : t < n || a < t ? {
            start: e - i,
            end: e
        } : {
            start: e,
            end: e + i
        }
    }

    function Ti(t, e, i, n) {
        var a, r, o = i.y + n / 2;
        if (dt.isArray(e))
            for (a = 0, r = e.length; a < r; ++a) t.fillText(e[a], i.x, o), o += n;
        else t.fillText(e, i.x, o)
    }

    function Ii(t) {
        return dt.isNumber(t) ? t : 0
    }
    var Ai = fi.extend({
            setDimensions: function() {
                var t = this;
                t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = Di(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2
            },
            determineDataLimits: function() {
                var a = this,
                    i = a.chart,
                    r = Number.POSITIVE_INFINITY,
                    o = Number.NEGATIVE_INFINITY;
                dt.each(i.data.datasets, function(t, e) {
                    if (i.isDatasetVisible(e)) {
                        var n = i.getDatasetMeta(e);
                        dt.each(t.data, function(t, e) {
                            var i = +a.getRightValue(t);
                            isNaN(i) || n.data[e].hidden || (r = Math.min(i, r), o = Math.max(i, o))
                        })
                    }
                }), a.min = r === Number.POSITIVE_INFINITY ? 0 : r, a.max = o === Number.NEGATIVE_INFINITY ? 0 : o, a.handleTickRangeOptions()
            },
            _computeTickLimit: function() {
                return Math.ceil(this.drawingArea / Di(this.options))
            },
            convertTicksToLabels: function() {
                fi.prototype.convertTicksToLabels.call(this), this.pointLabels = this.chart.data.labels.map(this.options.pointLabels.callback, this)
            },
            getLabelForIndex: function(t, e) {
                return +this.getRightValue(this.chart.data.datasets[e].data[t])
            },
            fit: function() {
                var t = this.options;
                t.display && t.pointLabels.display ? function(t) {
                    var e, i, n, a = dt.options._parseFont(t.options.pointLabels),
                        r = {
                            l: 0,
                            r: t.width,
                            t: 0,
                            b: t.height - t.paddingTop
                        },
                        o = {};
                    t.ctx.font = a.string, t._pointLabelSizes = [];
                    var s, l, d, u = Ci(t);
                    for (e = 0; e < u; e++) {
                        n = t.getPointPosition(e, t.drawingArea + 5), s = t.ctx, l = a.lineHeight, d = t.pointLabels[e] || "", i = dt.isArray(d) ? {
                            w: dt.longestText(s, s.font, d),
                            h: d.length * l
                        } : {
                            w: s.measureText(d).width,
                            h: l
                        }, t._pointLabelSizes[e] = i;
                        var h = t.getIndexAngle(e),
                            c = dt.toDegrees(h) % 360,
                            f = Pi(c, n.x, i.w, 0, 180),
                            g = Pi(c, n.y, i.h, 90, 270);
                        f.start < r.l && (r.l = f.start, o.l = h), f.end > r.r && (r.r = f.end, o.r = h), g.start < r.t && (r.t = g.start, o.t = h), g.end > r.b && (r.b = g.end, o.b = h)
                    }
                    t.setReductions(t.drawingArea, r, o)
                }(this) : this.setCenterPoint(0, 0, 0, 0)
            },
            setReductions: function(t, e, i) {
                var n = e.l / Math.sin(i.l),
                    a = Math.max(e.r - this.width, 0) / Math.sin(i.r),
                    r = -e.t / Math.cos(i.t),
                    o = -Math.max(e.b - (this.height - this.paddingTop), 0) / Math.cos(i.b);
                n = Ii(n), a = Ii(a), r = Ii(r), o = Ii(o), this.drawingArea = Math.min(Math.floor(t - (n + a) / 2), Math.floor(t - (r + o) / 2)), this.setCenterPoint(n, a, r, o)
            },
            setCenterPoint: function(t, e, i, n) {
                var a = this,
                    r = a.width - e - a.drawingArea,
                    o = t + a.drawingArea,
                    s = i + a.drawingArea,
                    l = a.height - a.paddingTop - n - a.drawingArea;
                a.xCenter = Math.floor((o + r) / 2 + a.left), a.yCenter = Math.floor((s + l) / 2 + a.top + a.paddingTop)
            },
            getIndexAngle: function(t) {
                return t * (2 * Math.PI / Ci(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
            },
            getDistanceFromCenterForValue: function(t) {
                if (null === t) return 0;
                var e = this.drawingArea / (this.max - this.min);
                return this.options.ticks.reverse ? (this.max - t) * e : (t - this.min) * e
            },
            getPointPosition: function(t, e) {
                var i = this.getIndexAngle(t) - Math.PI / 2;
                return {
                    x: Math.cos(i) * e + this.xCenter,
                    y: Math.sin(i) * e + this.yCenter
                }
            },
            getPointPositionForValue: function(t, e) {
                return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
            },
            getBasePosition: function() {
                var t = this.min,
                    e = this.max;
                return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0)
            },
            draw: function() {
                var r = this,
                    t = r.options,
                    o = t.gridLines,
                    s = t.ticks;
                if (t.display) {
                    var l = r.ctx,
                        d = this.getIndexAngle(0),
                        u = dt.options._parseFont(s);
                    (t.angleLines.display || t.pointLabels.display) && function(t) {
                        var e = t.ctx,
                            i = t.options,
                            n = i.angleLines,
                            a = i.gridLines,
                            r = i.pointLabels,
                            o = ki(n.lineWidth, a.lineWidth),
                            s = ki(n.color, a.color),
                            l = Di(i);
                        e.save(), e.lineWidth = o, e.strokeStyle = s, e.setLineDash && (e.setLineDash(Mi([n.borderDash, a.borderDash, []])), e.lineDashOffset = Mi([n.borderDashOffset, a.borderDashOffset, 0]));
                        var d, u, h, c, f = t.getDistanceFromCenterForValue(i.ticks.reverse ? t.min : t.max),
                            g = dt.options._parseFont(r);
                        e.font = g.string, e.textBaseline = "middle";
                        for (var p = Ci(t) - 1; 0 <= p; p--) {
                            if (n.display && o && s) {
                                var m = t.getPointPosition(p, f);
                                e.beginPath(), e.moveTo(t.xCenter, t.yCenter), e.lineTo(m.x, m.y), e.stroke()
                            }
                            if (r.display) {
                                var v = 0 === p ? l / 2 : 0,
                                    b = t.getPointPosition(p, f + v + 5),
                                    y = wi(r.fontColor, p, ot.global.defaultFontColor);
                                e.fillStyle = y;
                                var x = t.getIndexAngle(p),
                                    _ = dt.toDegrees(x);
                                e.textAlign = 0 === (c = _) || 180 === c ? "center" : c < 180 ? "left" : "right", d = _, u = t._pointLabelSizes[p], h = b, 90 === d || 270 === d ? h.y -= u.h / 2 : (270 < d || d < 90) && (h.y -= u.h), Ti(e, t.pointLabels[p] || "", b, g.lineHeight)
                            }
                        }
                        e.restore()
                    }(r), dt.each(r.ticks, function(t, e) {
                        if (0 < e || s.reverse) {
                            var i = r.getDistanceFromCenterForValue(r.ticksAsNumbers[e]);
                            if (o.display && 0 !== e && function(t, e, i, n) {
                                    var a, r = t.ctx,
                                        o = e.circular,
                                        s = Ci(t),
                                        l = wi(e.color, n - 1),
                                        d = wi(e.lineWidth, n - 1);
                                    if ((o || s) && l && d) {
                                        if (r.save(), r.strokeStyle = l, r.lineWidth = d, r.setLineDash && (r.setLineDash(e.borderDash || []), r.lineDashOffset = e.borderDashOffset || 0), r.beginPath(), o) r.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI);
                                        else {
                                            a = t.getPointPosition(0, i), r.moveTo(a.x, a.y);
                                            for (var u = 1; u < s; u++) a = t.getPointPosition(u, i), r.lineTo(a.x, a.y)
                                        }
                                        r.closePath(), r.stroke(), r.restore()
                                    }
                                }(r, o, i, e), s.display) {
                                var n = ki(s.fontColor, ot.global.defaultFontColor);
                                if (l.font = u.string, l.save(), l.translate(r.xCenter, r.yCenter), l.rotate(d), s.showLabelBackdrop) {
                                    var a = l.measureText(t).width;
                                    l.fillStyle = s.backdropColor, l.fillRect(-a / 2 - s.backdropPaddingX, -i - u.size / 2 - s.backdropPaddingY, a + 2 * s.backdropPaddingX, u.size + 2 * s.backdropPaddingY)
                                }
                                l.textAlign = "center", l.textBaseline = "middle", l.fillStyle = n, l.fillText(t, 0, -i), l.restore()
                            }
                        }
                    })
                }
            }
        }),
        Fi = Si;
    Ai._defaults = Fi;
    var Oi = dt.valueOrDefault,
        Li = Number.MIN_SAFE_INTEGER || -9007199254740991,
        Ri = Number.MAX_SAFE_INTEGER || 9007199254740991,
        Wi = {
            millisecond: {
                common: !0,
                size: 1,
                steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
            },
            second: {
                common: !0,
                size: 1e3,
                steps: [1, 2, 5, 10, 15, 30]
            },
            minute: {
                common: !0,
                size: 6e4,
                steps: [1, 2, 5, 10, 15, 30]
            },
            hour: {
                common: !0,
                size: 36e5,
                steps: [1, 2, 3, 6, 12]
            },
            day: {
                common: !0,
                size: 864e5,
                steps: [1, 2, 5]
            },
            week: {
                common: !1,
                size: 6048e5,
                steps: [1, 2, 3, 4]
            },
            month: {
                common: !0,
                size: 2628e6,
                steps: [1, 2, 3]
            },
            quarter: {
                common: !1,
                size: 7884e6,
                steps: [1, 2, 3, 4]
            },
            year: {
                common: !0,
                size: 3154e7
            }
        },
        Ni = Object.keys(Wi);

    function zi(t, e) {
        return t - e
    }

    function Bi(t) {
        var e, i, n, a = {},
            r = [];
        for (e = 0, i = t.length; e < i; ++e) a[n = t[e]] || (a[n] = !0, r.push(n));
        return r
    }

    function Vi(t, e, i, n) {
        var a = function(t, e, i) {
                for (var n, a, r, o = 0, s = t.length - 1; 0 <= o && o <= s;) {
                    if (a = t[(n = o + s >> 1) - 1] || null, r = t[n], !a) return {
                        lo: null,
                        hi: r
                    };
                    if (r[e] < i) o = 1 + n;
                    else {
                        if (!(a[e] > i)) return {
                            lo: a,
                            hi: r
                        };
                        s = n - 1
                    }
                }
                return {
                    lo: r,
                    hi: null
                }
            }(t, e, i),
            r = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
            o = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
            s = o[e] - r[e],
            l = s ? (i - r[e]) / s : 0,
            d = (o[n] - r[n]) * l;
        return r[n] + d
    }

    function Ei(t, e) {
        var i = t._adapter,
            n = t.options.time,
            a = n.parser,
            r = a || n.format,
            o = e;
        return "function" == typeof a && (o = a(o)), dt.isFinite(o) || (o = "string" == typeof r ? i.parse(o, r) : i.parse(o)), null !== o ? +o : (a || "function" != typeof r || (o = r(e), dt.isFinite(o) || (o = i.parse(o))), o)
    }

    function Hi(t, e) {
        if (dt.isNullOrUndef(e)) return null;
        var i = t.options.time,
            n = Ei(t, t.getRightValue(e));
        return null === n || i.round && (n = +t._adapter.startOf(n, i.round)), n
    }

    function Yi(t) {
        for (var e = Ni.indexOf(t) + 1, i = Ni.length; e < i; ++e)
            if (Wi[Ni[e]].common) return Ni[e]
    }
    var ji = di.extend({
        initialize: function() {
            this.mergeTicksOptions(), di.prototype.initialize.call(this)
        },
        update: function() {
            var t = this.options,
                e = t.time || (t.time = {}),
                i = this._adapter = new ni._date(t.adapters.date);
            return e.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), dt.mergeIf(e.displayFormats, i.formats()), di.prototype.update.apply(this, arguments)
        },
        getRightValue: function(t) {
            return t && void 0 !== t.t && (t = t.t), di.prototype.getRightValue.call(this, t)
        },
        determineDataLimits: function() {
            var t, e, i, n, a, r, o = this,
                s = o.chart,
                l = o._adapter,
                d = o.options.time,
                u = d.unit || "day",
                h = Ri,
                c = Li,
                f = [],
                g = [],
                p = [],
                m = s.data.labels || [];
            for (t = 0, i = m.length; t < i; ++t) p.push(Hi(o, m[t]));
            for (t = 0, i = (s.data.datasets || []).length; t < i; ++t)
                if (s.isDatasetVisible(t))
                    if (a = s.data.datasets[t].data, dt.isObject(a[0]))
                        for (g[t] = [], e = 0, n = a.length; e < n; ++e) r = Hi(o, a[e]), f.push(r), g[t][e] = r;
                    else {
                        for (e = 0, n = p.length; e < n; ++e) f.push(p[e]);
                        g[t] = p.slice(0)
                    }
            else g[t] = [];
            p.length && (p = Bi(p).sort(zi), h = Math.min(h, p[0]), c = Math.max(c, p[p.length - 1])), f.length && (f = Bi(f).sort(zi), h = Math.min(h, f[0]), c = Math.max(c, f[f.length - 1])), h = Hi(o, d.min) || h, c = Hi(o, d.max) || c, h = h === Ri ? +l.startOf(Date.now(), u) : h, c = c === Li ? +l.endOf(Date.now(), u) + 1 : c, o.min = Math.min(h, c), o.max = Math.max(h + 1, c), o._horizontal = o.isHorizontal(), o._table = [], o._timestamps = {
                data: f,
                datasets: g,
                labels: p
            }
        },
        buildTicks: function() {
            var t, e, i, n, a, r, o, s, l, d, u = this,
                h = u.min,
                c = u.max,
                f = u.options,
                g = f.time,
                p = [],
                m = [];
            switch (f.ticks.source) {
                case "data":
                    p = u._timestamps.data;
                    break;
                case "labels":
                    p = u._timestamps.labels;
                    break;
                case "auto":
                default:
                    p = function(t, h, c, e) {
                        var i, n = t._adapter,
                            a = t.options,
                            r = a.time,
                            f = r.unit || function(t, e, i, n) {
                                var a, r, o, s = Ni.length;
                                for (a = Ni.indexOf(t); a < s - 1; ++a)
                                    if (o = (r = Wi[Ni[a]]).steps ? r.steps[r.steps.length - 1] : Ri, r.common && Math.ceil((i - e) / (o * r.size)) <= n) return Ni[a];
                                return Ni[s - 1]
                            }(r.minUnit, h, c, e),
                            o = Yi(f),
                            s = Oi(r.stepSize, r.unitStepSize),
                            l = "week" === f && r.isoWeekday,
                            d = a.ticks.major.enabled,
                            u = Wi[f],
                            g = h,
                            p = c,
                            m = [];
                        for (s = s || function(t, e, i, n) {
                                var a, r, o, s = c - h,
                                    l = Wi[f],
                                    d = l.size,
                                    u = l.steps;
                                if (!u) return Math.ceil(s / (n * d));
                                for (a = 0, r = u.length; a < r && (o = u[a], !(Math.ceil(s / (d * o)) <= n)); ++a);
                                return o
                            }(0, 0, 0, e), l && (g = +n.startOf(g, "isoWeek", l), p = +n.startOf(p, "isoWeek", l)), g = +n.startOf(g, l ? "day" : f), (p = +n.startOf(p, l ? "day" : f)) < c && (p = +n.add(p, 1, f)), i = g, d && o && !l && !r.round && (i = +n.startOf(i, o), i = +n.add(i, ~~((g - i) / (u.size * s)) * s, f)); i < p; i = +n.add(i, s, f)) m.push(+i);
                        return m.push(+i), m
                    }(u, h, c, u.getLabelCapacity(h))
            }
            for ("ticks" === f.bounds && p.length && (h = p[0], c = p[p.length - 1]), h = Hi(u, g.min) || h, c = Hi(u, g.max) || c, t = 0, e = p.length; t < e; ++t)(i = p[t]) >= h && i <= c && m.push(i);
            return u.min = h, u.max = c, u._unit = g.unit || function(t, e, i, n, a) {
                    var r, o;
                    for (r = Ni.length - 1; r >= Ni.indexOf(i); r--)
                        if (o = Ni[r], Wi[o].common && t._adapter.diff(a, n, o) >= e.length) return o;
                    return Ni[i ? Ni.indexOf(i) : 0]
                }(u, m, g.minUnit, u.min, u.max), u._majorUnit = Yi(u._unit), u._table = function(t, e, i) {
                    if ("linear" === f.distribution || !t.length) return [{
                        time: e,
                        pos: 0
                    }, {
                        time: i,
                        pos: 1
                    }];
                    var n, a, r, o, s, l = [],
                        d = [e];
                    for (n = 0, a = t.length; n < a; ++n)(o = t[n]) > e && o < i && d.push(o);
                    for (d.push(i), n = 0, a = d.length; n < a; ++n) s = d[n + 1], r = d[n - 1], o = d[n], void 0 !== r && void 0 !== s && Math.round((s + r) / 2) === o || l.push({
                        time: o,
                        pos: n / (a - 1)
                    });
                    return l
                }(u._timestamps.data, h, c), u._offsets = (n = u._table, a = m, d = l = 0, (r = f).offset && a.length && (r.time.min || (o = Vi(n, "time", a[0], "pos"), l = 1 === a.length ? 1 - o : (Vi(n, "time", a[1], "pos") - o) / 2), r.time.max || (s = Vi(n, "time", a[a.length - 1], "pos"), d = 1 === a.length ? s : (s - Vi(n, "time", a[a.length - 2], "pos")) / 2)), {
                    start: l,
                    end: d
                }), f.ticks.reverse && m.reverse(),
                function(t, e, i) {
                    var n, a, r, o, s = [];
                    for (n = 0, a = e.length; n < a; ++n) r = e[n], o = !!i && r === +t._adapter.startOf(r, i), s.push({
                        value: r,
                        major: o
                    });
                    return s
                }(u, m, u._majorUnit)
        },
        getLabelForIndex: function(t, e) {
            var i = this._adapter,
                n = this.chart.data,
                a = this.options.time,
                r = n.labels && t < n.labels.length ? n.labels[t] : "",
                o = n.datasets[e].data[t];
            return dt.isObject(o) && (r = this.getRightValue(o)), a.tooltipFormat ? i.format(Ei(this, r), a.tooltipFormat) : "string" == typeof r ? r : i.format(Ei(this, r), a.displayFormats.datetime)
        },
        tickFormatFunction: function(t, e, i, n) {
            var a = this._adapter,
                r = this.options,
                o = r.time.displayFormats,
                s = o[this._unit],
                l = this._majorUnit,
                d = o[l],
                u = +a.startOf(t, l),
                h = r.ticks.major,
                c = h.enabled && l && d && t === u,
                f = a.format(t, n || (c ? d : s)),
                g = c ? h : r.ticks.minor,
                p = Oi(g.callback, g.userCallback);
            return p ? p(f, e, i) : f
        },
        convertTicksToLabels: function(t) {
            var e, i, n = [];
            for (e = 0, i = t.length; e < i; ++e) n.push(this.tickFormatFunction(t[e].value, e, t));
            return n
        },
        getPixelForOffset: function(t) {
            var e = this,
                i = e.options.ticks.reverse,
                n = e._horizontal ? e.width : e.height,
                a = e._horizontal ? i ? e.right : e.left : i ? e.bottom : e.top,
                r = Vi(e._table, "time", t, "pos"),
                o = n * (e._offsets.start + r) / (e._offsets.start + 1 + e._offsets.end);
            return i ? a - o : a + o
        },
        getPixelForValue: function(t, e, i) {
            var n = null;
            if (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = Hi(this, t)), null !== n) return this.getPixelForOffset(n)
        },
        getPixelForTick: function(t) {
            var e = this.getTicks();
            return 0 <= t && t < e.length ? this.getPixelForOffset(e[t].value) : null
        },
        getValueForPixel: function(t) {
            var e = this,
                i = e._horizontal ? e.width : e.height,
                n = e._horizontal ? e.left : e.top,
                a = (i ? (t - n) / i : 0) * (e._offsets.start + 1 + e._offsets.start) - e._offsets.end,
                r = Vi(e._table, "pos", a, "time");
            return e._adapter._create(r)
        },
        getLabelWidth: function(t) {
            var e = this.options.ticks,
                i = this.ctx.measureText(t).width,
                n = dt.toRadians(e.maxRotation),
                a = Math.cos(n),
                r = Math.sin(n);
            return i * a + Oi(e.fontSize, ot.global.defaultFontSize) * r
        },
        getLabelCapacity: function(t) {
            var e = this.options.time.displayFormats.millisecond,
                i = this.tickFormatFunction(t, 0, [], e),
                n = this.getLabelWidth(i),
                a = this.isHorizontal() ? this.width : this.height,
                r = Math.floor(a / n);
            return 0 < r ? r : 1
        }
    });
    ji._defaults = {
        position: "bottom",
        distribution: "linear",
        bounds: "data",
        adapters: {},
        time: {
            parser: !1,
            format: !1,
            unit: !1,
            round: !1,
            displayFormat: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {}
        },
        ticks: {
            autoSkip: !1,
            source: "auto",
            major: {
                enabled: !1
            }
        }
    };
    var qi, Gi, Zi = {
            category: ui,
            linear: pi,
            logarithmic: xi,
            radialLinear: Ai,
            time: ji
        },
        Xi = ((Gi = qi = {
            exports: {}
        }).exports = function() {
            var t, a;

            function b() {
                return t.apply(null, arguments)
            }

            function s(t) {
                return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
            }

            function l(t) {
                return null != t && "[object Object]" === Object.prototype.toString.call(t)
            }

            function d(t) {
                return void 0 === t
            }

            function u(t) {
                return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
            }

            function h(t) {
                return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
            }

            function c(t, e) {
                var i, n = [];
                for (i = 0; i < t.length; ++i) n.push(e(t[i], i));
                return n
            }

            function y(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }

            function f(t, e) {
                for (var i in e) y(e, i) && (t[i] = e[i]);
                return y(e, "toString") && (t.toString = e.toString), y(e, "valueOf") && (t.valueOf = e.valueOf), t
            }

            function g(t, e, i, n) {
                return Se(t, e, i, n, !0).utc()
            }

            function x(t) {
                return null == t._pf && (t._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }), t._pf
            }

            function p(t) {
                if (null == t._isValid) {
                    var e = x(t),
                        i = a.call(e.parsedDateParts, function(t) {
                            return null != t
                        }),
                        n = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i);
                    if (t._strict && (n = n && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return n;
                    t._isValid = n
                }
                return t._isValid
            }

            function m(t) {
                var e = g(NaN);
                return null != t ? f(x(e), t) : x(e).userInvalidated = !0, e
            }
            a = Array.prototype.some ? Array.prototype.some : function(t) {
                for (var e = Object(this), i = e.length >>> 0, n = 0; n < i; n++)
                    if (n in e && t.call(this, e[n], n, e)) return !0;
                return !1
            };
            var r = b.momentProperties = [];

            function v(t, e) {
                var i, n, a;
                if (d(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), d(e._i) || (t._i = e._i), d(e._f) || (t._f = e._f), d(e._l) || (t._l = e._l), d(e._strict) || (t._strict = e._strict), d(e._tzm) || (t._tzm = e._tzm), d(e._isUTC) || (t._isUTC = e._isUTC), d(e._offset) || (t._offset = e._offset), d(e._pf) || (t._pf = x(e)), d(e._locale) || (t._locale = e._locale), 0 < r.length)
                    for (i = 0; i < r.length; i++) d(a = e[n = r[i]]) || (t[n] = a);
                return t
            }
            var e = !1;

            function _(t) {
                v(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === e && (e = !0, b.updateOffset(this), e = !1)
            }

            function k(t) {
                return t instanceof _ || null != t && null != t._isAMomentObject
            }

            function w(t) {
                return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
            }

            function M(t) {
                var e = +t,
                    i = 0;
                return 0 != e && isFinite(e) && (i = w(e)), i
            }

            function o(t, e, i) {
                var n, a = Math.min(t.length, e.length),
                    r = Math.abs(t.length - e.length),
                    o = 0;
                for (n = 0; n < a; n++)(i && t[n] !== e[n] || !i && M(t[n]) !== M(e[n])) && o++;
                return o + r
            }

            function S(t) {
                !1 === b.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
            }

            function i(a, r) {
                var o = !0;
                return f(function() {
                    if (null != b.deprecationHandler && b.deprecationHandler(null, a), o) {
                        for (var t, e = [], i = 0; i < arguments.length; i++) {
                            if (t = "", "object" == typeof arguments[i]) {
                                for (var n in t += "\n[" + i + "] ", arguments[0]) t += n + ": " + arguments[0][n] + ", ";
                                t = t.slice(0, -2)
                            } else t = arguments[i];
                            e.push(t)
                        }
                        S(a + "\nArguments: " + Array.prototype.slice.call(e).join("") + "\n" + (new Error).stack), o = !1
                    }
                    return r.apply(this, arguments)
                }, r)
            }
            var n, C = {};

            function D(t, e) {
                null != b.deprecationHandler && b.deprecationHandler(t, e), C[t] || (S(e), C[t] = !0)
            }

            function P(t) {
                return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
            }

            function T(t, e) {
                var i, n = f({}, t);
                for (i in e) y(e, i) && (l(t[i]) && l(e[i]) ? (n[i] = {}, f(n[i], t[i]), f(n[i], e[i])) : null != e[i] ? n[i] = e[i] : delete n[i]);
                for (i in t) y(t, i) && !y(e, i) && l(t[i]) && (n[i] = f({}, n[i]));
                return n
            }

            function I(t) {
                null != t && this.set(t)
            }
            b.suppressDeprecationWarnings = !1, b.deprecationHandler = null, n = Object.keys ? Object.keys : function(t) {
                var e, i = [];
                for (e in t) y(t, e) && i.push(e);
                return i
            };
            var A = {};

            function F(t, e) {
                var i = t.toLowerCase();
                A[i] = A[i + "s"] = A[e] = t
            }

            function O(t) {
                return "string" == typeof t ? A[t] || A[t.toLowerCase()] : void 0
            }

            function L(t) {
                var e, i, n = {};
                for (i in t) y(t, i) && (e = O(i)) && (n[e] = t[i]);
                return n
            }
            var R = {};

            function W(t, e) {
                R[t] = e
            }

            function N(t, e, i) {
                var n = "" + Math.abs(t),
                    a = e - n.length;
                return (0 <= t ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + n
            }
            var z = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                B = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                V = {},
                E = {};

            function H(t, e, i, n) {
                var a = n;
                "string" == typeof n && (a = function() {
                    return this[n]()
                }), t && (E[t] = a), e && (E[e[0]] = function() {
                    return N(a.apply(this, arguments), e[1], e[2])
                }), i && (E[i] = function() {
                    return this.localeData().ordinal(a.apply(this, arguments), t)
                })
            }

            function Y(t, e) {
                return t.isValid() ? (e = j(e, t.localeData()), V[e] = V[e] || function(n) {
                    var t, a, e, r = n.match(z);
                    for (t = 0, a = r.length; t < a; t++) E[r[t]] ? r[t] = E[r[t]] : r[t] = (e = r[t]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
                    return function(t) {
                        var e, i = "";
                        for (e = 0; e < a; e++) i += P(r[e]) ? r[e].call(t, n) : r[e];
                        return i
                    }
                }(e), V[e](t)) : t.localeData().invalidDate()
            }

            function j(t, e) {
                var i = 5;

                function n(t) {
                    return e.longDateFormat(t) || t
                }
                for (B.lastIndex = 0; 0 <= i && B.test(t);) t = t.replace(B, n), B.lastIndex = 0, i -= 1;
                return t
            }
            var U = /\d/,
                q = /\d\d/,
                G = /\d{3}/,
                Z = /\d{4}/,
                X = /[+-]?\d{6}/,
                K = /\d\d?/,
                $ = /\d\d\d\d?/,
                J = /\d\d\d\d\d\d?/,
                Q = /\d{1,3}/,
                tt = /\d{1,4}/,
                et = /[+-]?\d{1,6}/,
                it = /\d+/,
                nt = /[+-]?\d+/,
                at = /Z|[+-]\d\d:?\d\d/gi,
                rt = /Z|[+-]\d\d(?::?\d\d)?/gi,
                ot = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                st = {};

            function lt(t, i, n) {
                st[t] = P(i) ? i : function(t, e) {
                    return t && n ? n : i
                }
            }

            function dt(t) {
                return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            var ut = {};

            function ht(t, i) {
                var e, n = i;
                for ("string" == typeof t && (t = [t]), u(i) && (n = function(t, e) {
                        e[i] = M(t)
                    }), e = 0; e < t.length; e++) ut[t[e]] = n
            }

            function ct(t, a) {
                ht(t, function(t, e, i, n) {
                    i._w = i._w || {}, a(t, i._w, i, n)
                })
            }
            var ft = 0,
                gt = 1,
                pt = 2,
                mt = 3,
                vt = 4,
                bt = 5,
                yt = 6,
                xt = 7,
                _t = 8;

            function kt(t) {
                return wt(t) ? 366 : 365
            }

            function wt(t) {
                return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
            }
            H("Y", 0, 0, function() {
                var t = this.year();
                return t <= 9999 ? "" + t : "+" + t
            }), H(0, ["YY", 2], 0, function() {
                return this.year() % 100
            }), H(0, ["YYYY", 4], 0, "year"), H(0, ["YYYYY", 5], 0, "year"), H(0, ["YYYYYY", 6, !0], 0, "year"), F("year", "y"), W("year", 1), lt("Y", nt), lt("YY", K, q), lt("YYYY", tt, Z), lt("YYYYY", et, X), lt("YYYYYY", et, X), ht(["YYYYY", "YYYYYY"], ft), ht("YYYY", function(t, e) {
                e[ft] = 2 === t.length ? b.parseTwoDigitYear(t) : M(t)
            }), ht("YY", function(t, e) {
                e[ft] = b.parseTwoDigitYear(t)
            }), ht("Y", function(t, e) {
                e[ft] = parseInt(t, 10)
            }), b.parseTwoDigitYear = function(t) {
                return M(t) + (68 < M(t) ? 1900 : 2e3)
            };
            var Mt, St = Ct("FullYear", !0);

            function Ct(e, i) {
                return function(t) {
                    return null != t ? (Pt(this, e, t), b.updateOffset(this, i), this) : Dt(this, e)
                }
            }

            function Dt(t, e) {
                return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
            }

            function Pt(t, e, i) {
                t.isValid() && !isNaN(i) && ("FullYear" === e && wt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](i, t.month(), Tt(i, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](i))
            }

            function Tt(t, e) {
                if (isNaN(t) || isNaN(e)) return NaN;
                var i = (e % 12 + 12) % 12;
                return t += (e - i) / 12, 1 == i ? wt(t) ? 29 : 28 : 31 - i % 7 % 2
            }
            Mt = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
                var e;
                for (e = 0; e < this.length; ++e)
                    if (this[e] === t) return e;
                return -1
            }, H("M", ["MM", 2], "Mo", function() {
                return this.month() + 1
            }), H("MMM", 0, 0, function(t) {
                return this.localeData().monthsShort(this, t)
            }), H("MMMM", 0, 0, function(t) {
                return this.localeData().months(this, t)
            }), F("month", "M"), W("month", 8), lt("M", K), lt("MM", K, q), lt("MMM", function(t, e) {
                return e.monthsShortRegex(t)
            }), lt("MMMM", function(t, e) {
                return e.monthsRegex(t)
            }), ht(["M", "MM"], function(t, e) {
                e[gt] = M(t) - 1
            }), ht(["MMM", "MMMM"], function(t, e, i, n) {
                var a = i._locale.monthsParse(t, n, i._strict);
                null != a ? e[gt] = a : x(i).invalidMonth = t
            });
            var It = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                At = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                Ft = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

            function Ot(t, e) {
                var i;
                if (!t.isValid()) return t;
                if ("string" == typeof e)
                    if (/^\d+$/.test(e)) e = M(e);
                    else if (!u(e = t.localeData().monthsParse(e))) return t;
                return i = Math.min(t.date(), Tt(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t
            }

            function Lt(t) {
                return null != t ? (Ot(this, t), b.updateOffset(this, !0), this) : Dt(this, "Month")
            }
            var Rt = ot,
                Wt = ot;

            function Nt() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e, i, n = [],
                    a = [],
                    r = [];
                for (e = 0; e < 12; e++) i = g([2e3, e]), n.push(this.monthsShort(i, "")), a.push(this.months(i, "")), r.push(this.months(i, "")), r.push(this.monthsShort(i, ""));
                for (n.sort(t), a.sort(t), r.sort(t), e = 0; e < 12; e++) n[e] = dt(n[e]), a[e] = dt(a[e]);
                for (e = 0; e < 24; e++) r[e] = dt(r[e]);
                this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
            }

            function zt(t) {
                var e;
                if (t < 100 && 0 <= t) {
                    var i = Array.prototype.slice.call(arguments);
                    i[0] = t + 400, e = new Date(Date.UTC.apply(null, i)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t)
                } else e = new Date(Date.UTC.apply(null, arguments));
                return e
            }

            function Bt(t, e, i) {
                var n = 7 + e - i;
                return n - (7 + zt(t, 0, n).getUTCDay() - e) % 7 - 1
            }

            function Vt(t, e, i, n, a) {
                var r, o, s = 1 + 7 * (e - 1) + (7 + i - n) % 7 + Bt(t, n, a);
                return o = s <= 0 ? kt(r = t - 1) + s : s > kt(t) ? (r = t + 1, s - kt(t)) : (r = t, s), {
                    year: r,
                    dayOfYear: o
                }
            }

            function Et(t, e, i) {
                var n, a, r = Bt(t.year(), e, i),
                    o = Math.floor((t.dayOfYear() - r - 1) / 7) + 1;
                return o < 1 ? n = o + Ht(a = t.year() - 1, e, i) : o > Ht(t.year(), e, i) ? (n = o - Ht(t.year(), e, i), a = t.year() + 1) : (a = t.year(), n = o), {
                    week: n,
                    year: a
                }
            }

            function Ht(t, e, i) {
                var n = Bt(t, e, i),
                    a = Bt(t + 1, e, i);
                return (kt(t) - n + a) / 7
            }

            function Yt(t, e) {
                return t.slice(e, 7).concat(t.slice(0, e))
            }
            H("w", ["ww", 2], "wo", "week"), H("W", ["WW", 2], "Wo", "isoWeek"), F("week", "w"), F("isoWeek", "W"), W("week", 5), W("isoWeek", 5), lt("w", K), lt("ww", K, q), lt("W", K), lt("WW", K, q), ct(["w", "ww", "W", "WW"], function(t, e, i, n) {
                e[n.substr(0, 1)] = M(t)
            }), H("d", 0, "do", "day"), H("dd", 0, 0, function(t) {
                return this.localeData().weekdaysMin(this, t)
            }), H("ddd", 0, 0, function(t) {
                return this.localeData().weekdaysShort(this, t)
            }), H("dddd", 0, 0, function(t) {
                return this.localeData().weekdays(this, t)
            }), H("e", 0, 0, "weekday"), H("E", 0, 0, "isoWeekday"), F("day", "d"), F("weekday", "e"), F("isoWeekday", "E"), W("day", 11), W("weekday", 11), W("isoWeekday", 11), lt("d", K), lt("e", K), lt("E", K), lt("dd", function(t, e) {
                return e.weekdaysMinRegex(t)
            }), lt("ddd", function(t, e) {
                return e.weekdaysShortRegex(t)
            }), lt("dddd", function(t, e) {
                return e.weekdaysRegex(t)
            }), ct(["dd", "ddd", "dddd"], function(t, e, i, n) {
                var a = i._locale.weekdaysParse(t, n, i._strict);
                null != a ? e.d = a : x(i).invalidWeekday = t
            }), ct(["d", "e", "E"], function(t, e, i, n) {
                e[n] = M(t)
            });
            var jt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                Ut = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                qt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                Gt = ot,
                Zt = ot,
                Xt = ot;

            function Kt() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e, i, n, a, r, o = [],
                    s = [],
                    l = [],
                    d = [];
                for (e = 0; e < 7; e++) i = g([2e3, 1]).day(e), n = this.weekdaysMin(i, ""), a = this.weekdaysShort(i, ""), r = this.weekdays(i, ""), o.push(n), s.push(a), l.push(r), d.push(n), d.push(a), d.push(r);
                for (o.sort(t), s.sort(t), l.sort(t), d.sort(t), e = 0; e < 7; e++) s[e] = dt(s[e]), l[e] = dt(l[e]), d[e] = dt(d[e]);
                this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
            }

            function $t() {
                return this.hours() % 12 || 12
            }

            function Jt(t, e) {
                H(t, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), e)
                })
            }

            function Qt(t, e) {
                return e._meridiemParse
            }
            H("H", ["HH", 2], 0, "hour"), H("h", ["hh", 2], 0, $t), H("k", ["kk", 2], 0, function() {
                return this.hours() || 24
            }), H("hmm", 0, 0, function() {
                return "" + $t.apply(this) + N(this.minutes(), 2)
            }), H("hmmss", 0, 0, function() {
                return "" + $t.apply(this) + N(this.minutes(), 2) + N(this.seconds(), 2)
            }), H("Hmm", 0, 0, function() {
                return "" + this.hours() + N(this.minutes(), 2)
            }), H("Hmmss", 0, 0, function() {
                return "" + this.hours() + N(this.minutes(), 2) + N(this.seconds(), 2)
            }), Jt("a", !0), Jt("A", !1), F("hour", "h"), W("hour", 13), lt("a", Qt), lt("A", Qt), lt("H", K), lt("h", K), lt("k", K), lt("HH", K, q), lt("hh", K, q), lt("kk", K, q), lt("hmm", $), lt("hmmss", J), lt("Hmm", $), lt("Hmmss", J), ht(["H", "HH"], mt), ht(["k", "kk"], function(t, e, i) {
                var n = M(t);
                e[mt] = 24 === n ? 0 : n
            }), ht(["a", "A"], function(t, e, i) {
                i._isPm = i._locale.isPM(t), i._meridiem = t
            }), ht(["h", "hh"], function(t, e, i) {
                e[mt] = M(t), x(i).bigHour = !0
            }), ht("hmm", function(t, e, i) {
                var n = t.length - 2;
                e[mt] = M(t.substr(0, n)), e[vt] = M(t.substr(n)), x(i).bigHour = !0
            }), ht("hmmss", function(t, e, i) {
                var n = t.length - 4,
                    a = t.length - 2;
                e[mt] = M(t.substr(0, n)), e[vt] = M(t.substr(n, 2)), e[bt] = M(t.substr(a)), x(i).bigHour = !0
            }), ht("Hmm", function(t, e, i) {
                var n = t.length - 2;
                e[mt] = M(t.substr(0, n)), e[vt] = M(t.substr(n))
            }), ht("Hmmss", function(t, e, i) {
                var n = t.length - 4,
                    a = t.length - 2;
                e[mt] = M(t.substr(0, n)), e[vt] = M(t.substr(n, 2)), e[bt] = M(t.substr(a))
            });
            var te, ee = Ct("Hours", !0),
                ie = {
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    longDateFormat: {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    invalidDate: "Invalid date",
                    ordinal: "%d",
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    months: At,
                    monthsShort: Ft,
                    week: {
                        dow: 0,
                        doy: 6
                    },
                    weekdays: jt,
                    weekdaysMin: qt,
                    weekdaysShort: Ut,
                    meridiemParse: /[ap]\.?m?\.?/i
                },
                ne = {},
                ae = {};

            function re(t) {
                return t ? t.toLowerCase().replace("_", "-") : t
            }

            function oe(t) {
                var e = null;
                if (!ne[t] && Gi && Gi.exports) try {
                    e = te._abbr, Ui(), se(e)
                } catch (t) {}
                return ne[t]
            }

            function se(t, e) {
                var i;
                return t && ((i = d(e) ? de(t) : le(t, e)) ? te = i : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), te._abbr
            }

            function le(t, e) {
                if (null === e) return delete ne[t], null;
                var i, n = ie;
                if (e.abbr = t, null != ne[t]) D("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = ne[t]._config;
                else if (null != e.parentLocale)
                    if (null != ne[e.parentLocale]) n = ne[e.parentLocale]._config;
                    else {
                        if (null == (i = oe(e.parentLocale))) return ae[e.parentLocale] || (ae[e.parentLocale] = []), ae[e.parentLocale].push({
                            name: t,
                            config: e
                        }), null;
                        n = i._config
                    }
                return ne[t] = new I(T(n, e)), ae[t] && ae[t].forEach(function(t) {
                    le(t.name, t.config)
                }), se(t), ne[t]
            }

            function de(t) {
                var e;
                if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return te;
                if (!s(t)) {
                    if (e = oe(t)) return e;
                    t = [t]
                }
                return function(t) {
                    for (var e, i, n, a, r = 0; r < t.length;) {
                        for (e = (a = re(t[r]).split("-")).length, i = (i = re(t[r + 1])) ? i.split("-") : null; 0 < e;) {
                            if (n = oe(a.slice(0, e).join("-"))) return n;
                            if (i && i.length >= e && o(a, i, !0) >= e - 1) break;
                            e--
                        }
                        r++
                    }
                    return te
                }(t)
            }

            function ue(t) {
                var e, i = t._a;
                return i && -2 === x(t).overflow && (e = i[gt] < 0 || 11 < i[gt] ? gt : i[pt] < 1 || i[pt] > Tt(i[ft], i[gt]) ? pt : i[mt] < 0 || 24 < i[mt] || 24 === i[mt] && (0 !== i[vt] || 0 !== i[bt] || 0 !== i[yt]) ? mt : i[vt] < 0 || 59 < i[vt] ? vt : i[bt] < 0 || 59 < i[bt] ? bt : i[yt] < 0 || 999 < i[yt] ? yt : -1, x(t)._overflowDayOfYear && (e < ft || pt < e) && (e = pt), x(t)._overflowWeeks && -1 === e && (e = xt), x(t)._overflowWeekday && -1 === e && (e = _t), x(t).overflow = e), t
            }

            function he(t, e, i) {
                return null != t ? t : null != e ? e : i
            }

            function ce(t) {
                var e, i, n, a, r, o, s, l = [];
                if (!t._d) {
                    for (o = t, s = void 0, s = new Date(b.now()), n = o._useUTC ? [s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate()] : [s.getFullYear(), s.getMonth(), s.getDate()], t._w && null == t._a[pt] && null == t._a[gt] && function(t) {
                            var e, i, n, a, r, o, s, l;
                            if (null != (e = t._w).GG || null != e.W || null != e.E) r = 1, o = 4, i = he(e.GG, t._a[ft], Et(Ce(), 1, 4).year), n = he(e.W, 1), ((a = he(e.E, 1)) < 1 || 7 < a) && (l = !0);
                            else {
                                r = t._locale._week.dow, o = t._locale._week.doy;
                                var d = Et(Ce(), r, o);
                                i = he(e.gg, t._a[ft], d.year), n = he(e.w, d.week), null != e.d ? ((a = e.d) < 0 || 6 < a) && (l = !0) : null != e.e ? (a = e.e + r, (e.e < 0 || 6 < e.e) && (l = !0)) : a = r
                            }
                            n < 1 || n > Ht(i, r, o) ? x(t)._overflowWeeks = !0 : null != l ? x(t)._overflowWeekday = !0 : (s = Vt(i, n, a, r, o), t._a[ft] = s.year, t._dayOfYear = s.dayOfYear)
                        }(t), null != t._dayOfYear && (r = he(t._a[ft], n[ft]), (t._dayOfYear > kt(r) || 0 === t._dayOfYear) && (x(t)._overflowDayOfYear = !0), i = zt(r, 0, t._dayOfYear), t._a[gt] = i.getUTCMonth(), t._a[pt] = i.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = l[e] = n[e];
                    for (; e < 7; e++) t._a[e] = l[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                    24 === t._a[mt] && 0 === t._a[vt] && 0 === t._a[bt] && 0 === t._a[yt] && (t._nextDay = !0, t._a[mt] = 0), t._d = (t._useUTC ? zt : function(t, e, i, n, a, r, o) {
                        var s;
                        return t < 100 && 0 <= t ? (s = new Date(t + 400, e, i, n, a, r, o), isFinite(s.getFullYear()) && s.setFullYear(t)) : s = new Date(t, e, i, n, a, r, o), s
                    }).apply(null, l), a = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[mt] = 24), t._w && void 0 !== t._w.d && t._w.d !== a && (x(t).weekdayMismatch = !0)
                }
            }
            var fe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                ge = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                pe = /Z|[+-]\d\d(?::?\d\d)?/,
                me = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                ve = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                be = /^\/?Date\((\-?\d+)/i;

            function ye(t) {
                var e, i, n, a, r, o, s = t._i,
                    l = fe.exec(s) || ge.exec(s);
                if (l) {
                    for (x(t).iso = !0, e = 0, i = me.length; e < i; e++)
                        if (me[e][1].exec(l[1])) {
                            a = me[e][0], n = !1 !== me[e][2];
                            break
                        }
                    if (null == a) return void(t._isValid = !1);
                    if (l[3]) {
                        for (e = 0, i = ve.length; e < i; e++)
                            if (ve[e][1].exec(l[3])) {
                                r = (l[2] || " ") + ve[e][0];
                                break
                            }
                        if (null == r) return void(t._isValid = !1)
                    }
                    if (!n && null != r) return void(t._isValid = !1);
                    if (l[4]) {
                        if (!pe.exec(l[4])) return void(t._isValid = !1);
                        o = "Z"
                    }
                    t._f = a + (r || "") + (o || ""), we(t)
                } else t._isValid = !1
            }
            var xe = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                _e = {
                    UT: 0,
                    GMT: 0,
                    EDT: -240,
                    EST: -300,
                    CDT: -300,
                    CST: -360,
                    MDT: -360,
                    MST: -420,
                    PDT: -420,
                    PST: -480
                };

            function ke(t) {
                var e, i, n, a, r, o, s, l = xe.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                if (l) {
                    var d = (e = l[4], i = l[3], n = l[2], a = l[5], r = l[6], o = l[7], s = [function(t) {
                        var e = parseInt(t, 10);
                        return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e
                    }(e), Ft.indexOf(i), parseInt(n, 10), parseInt(a, 10), parseInt(r, 10)], o && s.push(parseInt(o, 10)), s);
                    if (! function(t, e, i) {
                            return !t || Ut.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() || (x(i).weekdayMismatch = !0, i._isValid = !1)
                        }(l[1], d, t)) return;
                    t._a = d, t._tzm = function(t, e, i) {
                        if (t) return _e[t];
                        if (e) return 0;
                        var n = parseInt(i, 10),
                            a = n % 100;
                        return (n - a) / 100 * 60 + a
                    }(l[8], l[9], l[10]), t._d = zt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), x(t).rfc2822 = !0
                } else t._isValid = !1
            }

            function we(t) {
                if (t._f !== b.ISO_8601)
                    if (t._f !== b.RFC_2822) {
                        t._a = [], x(t).empty = !0;
                        var e, i, n, a, r, o = "" + t._i,
                            s = o.length,
                            l = 0;
                        for (n = j(t._f, t._locale).match(z) || [], e = 0; e < n.length; e++) a = n[e], (i = (o.match((f = t, y(st, c = a) ? st[c](f._strict, f._locale) : new RegExp(dt(c.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, i, n, a) {
                            return e || i || n || a
                        }))))) || [])[0]) && (0 < (r = o.substr(0, o.indexOf(i))).length && x(t).unusedInput.push(r), o = o.slice(o.indexOf(i) + i.length), l += i.length), E[a] ? (i ? x(t).empty = !1 : x(t).unusedTokens.push(a), d = a, h = t, null != (u = i) && y(ut, d) && ut[d](u, h._a, h, d)) : t._strict && !i && x(t).unusedTokens.push(a);
                        x(t).charsLeftOver = s - l, 0 < o.length && x(t).unusedInput.push(o), t._a[mt] <= 12 && !0 === x(t).bigHour && 0 < t._a[mt] && (x(t).bigHour = void 0), x(t).parsedDateParts = t._a.slice(0), x(t).meridiem = t._meridiem, t._a[mt] = (g = t._locale, p = t._a[mt], null == (m = t._meridiem) ? p : null != g.meridiemHour ? g.meridiemHour(p, m) : (null != g.isPM && ((v = g.isPM(m)) && p < 12 && (p += 12), v || 12 !== p || (p = 0)), p)), ce(t), ue(t)
                    } else ke(t);
                else ye(t);
                var d, u, h, c, f, g, p, m, v
            }

            function Me(t) {
                var e, i, n, a, r = t._i,
                    o = t._f;
                return t._locale = t._locale || de(t._l), null === r || void 0 === o && "" === r ? m({
                    nullInput: !0
                }) : ("string" == typeof r && (t._i = r = t._locale.preparse(r)), k(r) ? new _(ue(r)) : (h(r) ? t._d = r : s(o) ? function(t) {
                    var e, i, n, a, r;
                    if (0 === t._f.length) return x(t).invalidFormat = !0, t._d = new Date(NaN);
                    for (a = 0; a < t._f.length; a++) r = 0, e = v({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[a], we(e), p(e) && (r += x(e).charsLeftOver, r += 10 * x(e).unusedTokens.length, x(e).score = r, (null == n || r < n) && (n = r, i = e));
                    f(t, i || e)
                }(t) : o ? we(t) : d(a = (e = t)._i) ? e._d = new Date(b.now()) : h(a) ? e._d = new Date(a.valueOf()) : "string" == typeof a ? (i = e, null === (n = be.exec(i._i)) ? (ye(i), !1 === i._isValid && (delete i._isValid, ke(i), !1 === i._isValid && (delete i._isValid, b.createFromInputFallback(i)))) : i._d = new Date(+n[1])) : s(a) ? (e._a = c(a.slice(0), function(t) {
                    return parseInt(t, 10)
                }), ce(e)) : l(a) ? function(t) {
                    if (!t._d) {
                        var e = L(t._i);
                        t._a = c([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                            return t && parseInt(t, 10)
                        }), ce(t)
                    }
                }(e) : u(a) ? e._d = new Date(a) : b.createFromInputFallback(e), p(t) || (t._d = null), t))
            }

            function Se(t, e, i, n, a) {
                var r, o = {};
                return !0 !== i && !1 !== i || (n = i, i = void 0), (l(t) && function(t) {
                    if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
                    var e;
                    for (e in t)
                        if (t.hasOwnProperty(e)) return !1;
                    return !0
                }(t) || s(t) && 0 === t.length) && (t = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = a, o._l = i, o._i = t, o._f = e, o._strict = n, (r = new _(ue(Me(o))))._nextDay && (r.add(1, "d"), r._nextDay = void 0), r
            }

            function Ce(t, e, i, n) {
                return Se(t, e, i, n, !1)
            }
            b.createFromInputFallback = i("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
                t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
            }), b.ISO_8601 = function() {}, b.RFC_2822 = function() {};
            var De = i("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var t = Ce.apply(null, arguments);
                    return this.isValid() && t.isValid() ? t < this ? this : t : m()
                }),
                Pe = i("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var t = Ce.apply(null, arguments);
                    return this.isValid() && t.isValid() ? this < t ? this : t : m()
                });

            function Te(t, e) {
                var i, n;
                if (1 === e.length && s(e[0]) && (e = e[0]), !e.length) return Ce();
                for (i = e[0], n = 1; n < e.length; ++n) e[n].isValid() && !e[n][t](i) || (i = e[n]);
                return i
            }
            var Ie = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

            function Ae(t) {
                var e = L(t),
                    i = e.year || 0,
                    n = e.quarter || 0,
                    a = e.month || 0,
                    r = e.week || e.isoWeek || 0,
                    o = e.day || 0,
                    s = e.hour || 0,
                    l = e.minute || 0,
                    d = e.second || 0,
                    u = e.millisecond || 0;
                this._isValid = function(t) {
                    for (var e in t)
                        if (-1 === Mt.call(Ie, e) || null != t[e] && isNaN(t[e])) return !1;
                    for (var i = !1, n = 0; n < Ie.length; ++n)
                        if (t[Ie[n]]) {
                            if (i) return !1;
                            parseFloat(t[Ie[n]]) !== M(t[Ie[n]]) && (i = !0)
                        }
                    return !0
                }(e), this._milliseconds = +u + 1e3 * d + 6e4 * l + 1e3 * s * 60 * 60, this._days = +o + 7 * r, this._months = +a + 3 * n + 12 * i, this._data = {}, this._locale = de(), this._bubble()
            }

            function Fe(t) {
                return t instanceof Ae
            }

            function Oe(t) {
                return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
            }

            function Le(t, i) {
                H(t, 0, 0, function() {
                    var t = this.utcOffset(),
                        e = "+";
                    return t < 0 && (t = -t, e = "-"), e + N(~~(t / 60), 2) + i + N(~~t % 60, 2)
                })
            }
            Le("Z", ":"), Le("ZZ", ""), lt("Z", rt), lt("ZZ", rt), ht(["Z", "ZZ"], function(t, e, i) {
                i._useUTC = !0, i._tzm = We(rt, t)
            });
            var Re = /([\+\-]|\d\d)/gi;

            function We(t, e) {
                var i = (e || "").match(t);
                if (null === i) return null;
                var n = ((i[i.length - 1] || []) + "").match(Re) || ["-", 0, 0],
                    a = 60 * n[1] + M(n[2]);
                return 0 === a ? 0 : "+" === n[0] ? a : -a
            }

            function Ne(t, e) {
                var i, n;
                return e._isUTC ? (i = e.clone(), n = (k(t) || h(t) ? t.valueOf() : Ce(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + n), b.updateOffset(i, !1), i) : Ce(t).local()
            }

            function ze(t) {
                return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
            }

            function Be() {
                return !!this.isValid() && this._isUTC && 0 === this._offset
            }
            b.updateOffset = function() {};
            var Ve = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                Ee = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

            function He(t, e) {
                var i, n, a, r, o, s, l = t,
                    d = null;
                return Fe(t) ? l = {
                    ms: t._milliseconds,
                    d: t._days,
                    M: t._months
                } : u(t) ? (l = {}, e ? l[e] = t : l.milliseconds = t) : (d = Ve.exec(t)) ? (i = "-" === d[1] ? -1 : 1, l = {
                    y: 0,
                    d: M(d[pt]) * i,
                    h: M(d[mt]) * i,
                    m: M(d[vt]) * i,
                    s: M(d[bt]) * i,
                    ms: M(Oe(1e3 * d[yt])) * i
                }) : (d = Ee.exec(t)) ? (i = "-" === d[1] ? -1 : 1, l = {
                    y: Ye(d[2], i),
                    M: Ye(d[3], i),
                    w: Ye(d[4], i),
                    d: Ye(d[5], i),
                    h: Ye(d[6], i),
                    m: Ye(d[7], i),
                    s: Ye(d[8], i)
                }) : null == l ? l = {} : "object" == typeof l && ("from" in l || "to" in l) && (r = Ce(l.from), o = Ce(l.to), a = r.isValid() && o.isValid() ? (o = Ne(o, r), r.isBefore(o) ? s = je(r, o) : ((s = je(o, r)).milliseconds = -s.milliseconds, s.months = -s.months), s) : {
                    milliseconds: 0,
                    months: 0
                }, (l = {}).ms = a.milliseconds, l.M = a.months), n = new Ae(l), Fe(t) && y(t, "_locale") && (n._locale = t._locale), n
            }

            function Ye(t, e) {
                var i = t && parseFloat(t.replace(",", "."));
                return (isNaN(i) ? 0 : i) * e
            }

            function je(t, e) {
                var i = {};
                return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i
            }

            function Ue(n, a) {
                return function(t, e) {
                    var i;
                    return null === e || isNaN(+e) || (D(a, "moment()." + a + "(period, number) is deprecated. Please use moment()." + a + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = t, t = e, e = i), qe(this, He(t = "string" == typeof t ? +t : t, e), n), this
                }
            }

            function qe(t, e, i, n) {
                var a = e._milliseconds,
                    r = Oe(e._days),
                    o = Oe(e._months);
                t.isValid() && (n = null == n || n, o && Ot(t, Dt(t, "Month") + o * i), r && Pt(t, "Date", Dt(t, "Date") + r * i), a && t._d.setTime(t._d.valueOf() + a * i), n && b.updateOffset(t, r || o))
            }
            He.fn = Ae.prototype, He.invalid = function() {
                return He(NaN)
            };
            var Ge = Ue(1, "add"),
                Ze = Ue(-1, "subtract");

            function Xe(t, e) {
                var i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                    n = t.clone().add(i, "months");
                return -(i + (e - n < 0 ? (e - n) / (n - t.clone().add(i - 1, "months")) : (e - n) / (t.clone().add(1 + i, "months") - n))) || 0
            }

            function Ke(t) {
                var e;
                return void 0 === t ? this._locale._abbr : (null != (e = de(t)) && (this._locale = e), this)
            }
            b.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", b.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var $e = i("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
                return void 0 === t ? this.localeData() : this.locale(t)
            });

            function Je() {
                return this._locale
            }

            function Qe(t, e) {
                return (t % e + e) % e
            }

            function ti(t, e, i) {
                return t < 100 && 0 <= t ? new Date(t + 400, e, i) - 126227808e5 : new Date(t, e, i).valueOf()
            }

            function ei(t, e, i) {
                return t < 100 && 0 <= t ? Date.UTC(t + 400, e, i) - 126227808e5 : Date.UTC(t, e, i)
            }

            function ii(t, e) {
                H(0, [t, t.length], 0, e)
            }

            function ni(t, e, i, n, a) {
                var r;
                return null == t ? Et(this, n, a).year : ((r = Ht(t, n, a)) < e && (e = r), function(t, e, i, n, a) {
                    var r = Vt(t, e, i, n, a),
                        o = zt(r.year, 0, r.dayOfYear);
                    return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
                }.call(this, t, e, i, n, a))
            }
            H(0, ["gg", 2], 0, function() {
                return this.weekYear() % 100
            }), H(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            }), ii("gggg", "weekYear"), ii("ggggg", "weekYear"), ii("GGGG", "isoWeekYear"), ii("GGGGG", "isoWeekYear"), F("weekYear", "gg"), F("isoWeekYear", "GG"), W("weekYear", 1), W("isoWeekYear", 1), lt("G", nt), lt("g", nt), lt("GG", K, q), lt("gg", K, q), lt("GGGG", tt, Z), lt("gggg", tt, Z), lt("GGGGG", et, X), lt("ggggg", et, X), ct(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, i, n) {
                e[n.substr(0, 2)] = M(t)
            }), ct(["gg", "GG"], function(t, e, i, n) {
                e[n] = b.parseTwoDigitYear(t)
            }), H("Q", 0, "Qo", "quarter"), F("quarter", "Q"), W("quarter", 7), lt("Q", U), ht("Q", function(t, e) {
                e[gt] = 3 * (M(t) - 1)
            }), H("D", ["DD", 2], "Do", "date"), F("date", "D"), W("date", 9), lt("D", K), lt("DD", K, q), lt("Do", function(t, e) {
                return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
            }), ht(["D", "DD"], pt), ht("Do", function(t, e) {
                e[pt] = M(t.match(K)[0])
            });
            var ai = Ct("Date", !0);
            H("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), F("dayOfYear", "DDD"), W("dayOfYear", 4), lt("DDD", Q), lt("DDDD", G), ht(["DDD", "DDDD"], function(t, e, i) {
                i._dayOfYear = M(t)
            }), H("m", ["mm", 2], 0, "minute"), F("minute", "m"), W("minute", 14), lt("m", K), lt("mm", K, q), ht(["m", "mm"], vt);
            var ri = Ct("Minutes", !1);
            H("s", ["ss", 2], 0, "second"), F("second", "s"), W("second", 15), lt("s", K), lt("ss", K, q), ht(["s", "ss"], bt);
            var oi, si = Ct("Seconds", !1);
            for (H("S", 0, 0, function() {
                    return ~~(this.millisecond() / 100)
                }), H(0, ["SS", 2], 0, function() {
                    return ~~(this.millisecond() / 10)
                }), H(0, ["SSS", 3], 0, "millisecond"), H(0, ["SSSS", 4], 0, function() {
                    return 10 * this.millisecond()
                }), H(0, ["SSSSS", 5], 0, function() {
                    return 100 * this.millisecond()
                }), H(0, ["SSSSSS", 6], 0, function() {
                    return 1e3 * this.millisecond()
                }), H(0, ["SSSSSSS", 7], 0, function() {
                    return 1e4 * this.millisecond()
                }), H(0, ["SSSSSSSS", 8], 0, function() {
                    return 1e5 * this.millisecond()
                }), H(0, ["SSSSSSSSS", 9], 0, function() {
                    return 1e6 * this.millisecond()
                }), F("millisecond", "ms"), W("millisecond", 16), lt("S", Q, U), lt("SS", Q, q), lt("SSS", Q, G), oi = "SSSS"; oi.length <= 9; oi += "S") lt(oi, it);

            function li(t, e) {
                e[yt] = M(1e3 * ("0." + t))
            }
            for (oi = "S"; oi.length <= 9; oi += "S") ht(oi, li);
            var di = Ct("Milliseconds", !1);
            H("z", 0, 0, "zoneAbbr"), H("zz", 0, 0, "zoneName");
            var ui = _.prototype;

            function hi(t) {
                return t
            }
            ui.add = Ge, ui.calendar = function(t, e) {
                var i = t || Ce(),
                    n = Ne(i, this).startOf("day"),
                    a = b.calendarFormat(this, n) || "sameElse",
                    r = e && (P(e[a]) ? e[a].call(this, i) : e[a]);
                return this.format(r || this.localeData().calendar(a, this, Ce(i)))
            }, ui.clone = function() {
                return new _(this)
            }, ui.diff = function(t, e, i) {
                var n, a, r;
                if (!this.isValid()) return NaN;
                if (!(n = Ne(t, this)).isValid()) return NaN;
                switch (a = 6e4 * (n.utcOffset() - this.utcOffset()), e = O(e)) {
                    case "year":
                        r = Xe(this, n) / 12;
                        break;
                    case "month":
                        r = Xe(this, n);
                        break;
                    case "quarter":
                        r = Xe(this, n) / 3;
                        break;
                    case "second":
                        r = (this - n) / 1e3;
                        break;
                    case "minute":
                        r = (this - n) / 6e4;
                        break;
                    case "hour":
                        r = (this - n) / 36e5;
                        break;
                    case "day":
                        r = (this - n - a) / 864e5;
                        break;
                    case "week":
                        r = (this - n - a) / 6048e5;
                        break;
                    default:
                        r = this - n
                }
                return i ? r : w(r)
            }, ui.endOf = function(t) {
                var e;
                if (void 0 === (t = O(t)) || "millisecond" === t || !this.isValid()) return this;
                var i = this._isUTC ? ei : ti;
                switch (t) {
                    case "year":
                        e = i(this.year() + 1, 0, 1) - 1;
                        break;
                    case "quarter":
                        e = i(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                        break;
                    case "month":
                        e = i(this.year(), this.month() + 1, 1) - 1;
                        break;
                    case "week":
                        e = i(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                        break;
                    case "isoWeek":
                        e = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                        break;
                    case "day":
                    case "date":
                        e = i(this.year(), this.month(), this.date() + 1) - 1;
                        break;
                    case "hour":
                        e = this._d.valueOf(), e += 36e5 - Qe(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
                        break;
                    case "minute":
                        e = this._d.valueOf(), e += 6e4 - Qe(e, 6e4) - 1;
                        break;
                    case "second":
                        e = this._d.valueOf(), e += 1e3 - Qe(e, 1e3) - 1
                }
                return this._d.setTime(e), b.updateOffset(this, !0), this
            }, ui.format = function(t) {
                t = t || (this.isUtc() ? b.defaultFormatUtc : b.defaultFormat);
                var e = Y(this, t);
                return this.localeData().postformat(e)
            }, ui.from = function(t, e) {
                return this.isValid() && (k(t) && t.isValid() || Ce(t).isValid()) ? He({
                    to: this,
                    from: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }, ui.fromNow = function(t) {
                return this.from(Ce(), t)
            }, ui.to = function(t, e) {
                return this.isValid() && (k(t) && t.isValid() || Ce(t).isValid()) ? He({
                    from: this,
                    to: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }, ui.toNow = function(t) {
                return this.to(Ce(), t)
            }, ui.get = function(t) {
                return P(this[t = O(t)]) ? this[t]() : this
            }, ui.invalidAt = function() {
                return x(this).overflow
            }, ui.isAfter = function(t, e) {
                var i = k(t) ? t : Ce(t);
                return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = O(e) || "millisecond") ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf())
            }, ui.isBefore = function(t, e) {
                var i = k(t) ? t : Ce(t);
                return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = O(e) || "millisecond") ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf())
            }, ui.isBetween = function(t, e, i, n) {
                var a = k(t) ? t : Ce(t),
                    r = k(e) ? e : Ce(e);
                return !!(this.isValid() && a.isValid() && r.isValid()) && ("(" === (n = n || "()")[0] ? this.isAfter(a, i) : !this.isBefore(a, i)) && (")" === n[1] ? this.isBefore(r, i) : !this.isAfter(r, i))
            }, ui.isSame = function(t, e) {
                var i, n = k(t) ? t : Ce(t);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = O(e) || "millisecond") ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf()))
            }, ui.isSameOrAfter = function(t, e) {
                return this.isSame(t, e) || this.isAfter(t, e)
            }, ui.isSameOrBefore = function(t, e) {
                return this.isSame(t, e) || this.isBefore(t, e)
            }, ui.isValid = function() {
                return p(this)
            }, ui.lang = $e, ui.locale = Ke, ui.localeData = Je, ui.max = Pe, ui.min = De, ui.parsingFlags = function() {
                return f({}, x(this))
            }, ui.set = function(t, e) {
                if ("object" == typeof t)
                    for (var i = function(t) {
                            var e = [];
                            for (var i in t) e.push({
                                unit: i,
                                priority: R[i]
                            });
                            return e.sort(function(t, e) {
                                return t.priority - e.priority
                            }), e
                        }(t = L(t)), n = 0; n < i.length; n++) this[i[n].unit](t[i[n].unit]);
                else if (P(this[t = O(t)])) return this[t](e);
                return this
            }, ui.startOf = function(t) {
                var e;
                if (void 0 === (t = O(t)) || "millisecond" === t || !this.isValid()) return this;
                var i = this._isUTC ? ei : ti;
                switch (t) {
                    case "year":
                        e = i(this.year(), 0, 1);
                        break;
                    case "quarter":
                        e = i(this.year(), this.month() - this.month() % 3, 1);
                        break;
                    case "month":
                        e = i(this.year(), this.month(), 1);
                        break;
                    case "week":
                        e = i(this.year(), this.month(), this.date() - this.weekday());
                        break;
                    case "isoWeek":
                        e = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                        break;
                    case "day":
                    case "date":
                        e = i(this.year(), this.month(), this.date());
                        break;
                    case "hour":
                        e = this._d.valueOf(), e -= Qe(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                        break;
                    case "minute":
                        e = this._d.valueOf(), e -= Qe(e, 6e4);
                        break;
                    case "second":
                        e = this._d.valueOf(), e -= Qe(e, 1e3)
                }
                return this._d.setTime(e), b.updateOffset(this, !0), this
            }, ui.subtract = Ze, ui.toArray = function() {
                return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
            }, ui.toObject = function() {
                return {
                    years: this.year(),
                    months: this.month(),
                    date: this.date(),
                    hours: this.hours(),
                    minutes: this.minutes(),
                    seconds: this.seconds(),
                    milliseconds: this.milliseconds()
                }
            }, ui.toDate = function() {
                return new Date(this.valueOf())
            }, ui.toISOString = function(t) {
                if (!this.isValid()) return null;
                var e = !0 !== t,
                    i = e ? this.clone().utc() : this;
                return i.year() < 0 || 9999 < i.year() ? Y(i, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : P(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", Y(i, "Z")) : Y(i, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }, ui.inspect = function() {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var t = "moment",
                    e = "";
                this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
                var i = "[" + t + '("]',
                    n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    a = e + '[")]';
                return this.format(i + n + "-MM-DD[T]HH:mm:ss.SSS" + a)
            }, ui.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }, ui.toString = function() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }, ui.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }, ui.valueOf = function() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }, ui.creationData = function() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }, ui.year = St, ui.isLeapYear = function() {
                return wt(this.year())
            }, ui.weekYear = function(t) {
                return ni.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }, ui.isoWeekYear = function(t) {
                return ni.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
            }, ui.quarter = ui.quarters = function(t) {
                return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
            }, ui.month = Lt, ui.daysInMonth = function() {
                return Tt(this.year(), this.month())
            }, ui.week = ui.weeks = function(t) {
                var e = this.localeData().week(this);
                return null == t ? e : this.add(7 * (t - e), "d")
            }, ui.isoWeek = ui.isoWeeks = function(t) {
                var e = Et(this, 1, 4).week;
                return null == t ? e : this.add(7 * (t - e), "d")
            }, ui.weeksInYear = function() {
                var t = this.localeData()._week;
                return Ht(this.year(), t.dow, t.doy)
            }, ui.isoWeeksInYear = function() {
                return Ht(this.year(), 1, 4)
            }, ui.date = ai, ui.day = ui.days = function(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                var e, i, n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != t ? (e = t, i = this.localeData(), t = "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = i.weekdaysParse(e)) ? e : null : parseInt(e, 10), this.add(t - n, "d")) : n
            }, ui.weekday = function(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == t ? e : this.add(t - e, "d")
            }, ui.isoWeekday = function(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                if (null == t) return this.day() || 7;
                var e, i, n = (e = t, i = this.localeData(), "string" == typeof e ? i.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e);
                return this.day(this.day() % 7 ? n : n - 7)
            }, ui.dayOfYear = function(t) {
                var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == t ? e : this.add(t - e, "d")
            }, ui.hour = ui.hours = ee, ui.minute = ui.minutes = ri, ui.second = ui.seconds = si, ui.millisecond = ui.milliseconds = di, ui.utcOffset = function(t, e, i) {
                var n, a = this._offset || 0;
                if (!this.isValid()) return null != t ? this : NaN;
                if (null == t) return this._isUTC ? a : ze(this);
                if ("string" == typeof t) {
                    if (null === (t = We(rt, t))) return this
                } else Math.abs(t) < 16 && !i && (t *= 60);
                return !this._isUTC && e && (n = ze(this)), this._offset = t, this._isUTC = !0, null != n && this.add(n, "m"), a !== t && (!e || this._changeInProgress ? qe(this, He(t - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, b.updateOffset(this, !0), this._changeInProgress = null)), this
            }, ui.utc = function(t) {
                return this.utcOffset(0, t)
            }, ui.local = function(t) {
                return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(ze(this), "m")), this
            }, ui.parseZone = function() {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                    var t = We(at, this._i);
                    null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
                }
                return this
            }, ui.hasAlignedHourOffset = function(t) {
                return !!this.isValid() && (t = t ? Ce(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
            }, ui.isDST = function() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }, ui.isLocal = function() {
                return !!this.isValid() && !this._isUTC
            }, ui.isUtcOffset = function() {
                return !!this.isValid() && this._isUTC
            }, ui.isUtc = Be, ui.isUTC = Be, ui.zoneAbbr = function() {
                return this._isUTC ? "UTC" : ""
            }, ui.zoneName = function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }, ui.dates = i("dates accessor is deprecated. Use date instead.", ai), ui.months = i("months accessor is deprecated. Use month instead", Lt), ui.years = i("years accessor is deprecated. Use year instead", St), ui.zone = i("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(t, e) {
                return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
            }), ui.isDSTShifted = i("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
                if (!d(this._isDSTShifted)) return this._isDSTShifted;
                var t = {};
                if (v(t, this), (t = Me(t))._a) {
                    var e = t._isUTC ? g(t._a) : Ce(t._a);
                    this._isDSTShifted = this.isValid() && 0 < o(t._a, e.toArray())
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            });
            var ci = I.prototype;

            function fi(t, e, i, n) {
                var a = de(),
                    r = g().set(n, e);
                return a[i](r, t)
            }

            function gi(t, e, i) {
                if (u(t) && (e = t, t = void 0), t = t || "", null != e) return fi(t, e, i, "month");
                var n, a = [];
                for (n = 0; n < 12; n++) a[n] = fi(t, n, i, "month");
                return a
            }

            function pi(t, e, i, n) {
                "boolean" == typeof t || (i = e = t, t = !1), u(e) && (i = e, e = void 0), e = e || "";
                var a, r = de(),
                    o = t ? r._week.dow : 0;
                if (null != i) return fi(e, (i + o) % 7, n, "day");
                var s = [];
                for (a = 0; a < 7; a++) s[a] = fi(e, (a + o) % 7, n, "day");
                return s
            }
            ci.calendar = function(t, e, i) {
                var n = this._calendar[t] || this._calendar.sameElse;
                return P(n) ? n.call(e, i) : n
            }, ci.longDateFormat = function(t) {
                var e = this._longDateFormat[t],
                    i = this._longDateFormat[t.toUpperCase()];
                return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function(t) {
                    return t.slice(1)
                }), this._longDateFormat[t])
            }, ci.invalidDate = function() {
                return this._invalidDate
            }, ci.ordinal = function(t) {
                return this._ordinal.replace("%d", t)
            }, ci.preparse = hi, ci.postformat = hi, ci.relativeTime = function(t, e, i, n) {
                var a = this._relativeTime[i];
                return P(a) ? a(t, e, i, n) : a.replace(/%d/i, t)
            }, ci.pastFuture = function(t, e) {
                var i = this._relativeTime[0 < t ? "future" : "past"];
                return P(i) ? i(e) : i.replace(/%s/i, e)
            }, ci.set = function(t) {
                var e, i;
                for (i in t) P(e = t[i]) ? this[i] = e : this["_" + i] = e;
                this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }, ci.months = function(t, e) {
                return t ? s(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || It).test(e) ? "format" : "standalone"][t.month()] : s(this._months) ? this._months : this._months.standalone
            }, ci.monthsShort = function(t, e) {
                return t ? s(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[It.test(e) ? "format" : "standalone"][t.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }, ci.monthsParse = function(t, e, i) {
                var n, a, r;
                if (this._monthsParseExact) return function(t, e, i) {
                    var n, a, r, o = t.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) r = g([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(r, "").toLocaleLowerCase();
                    return i ? "MMM" === e ? -1 !== (a = Mt.call(this._shortMonthsParse, o)) ? a : null : -1 !== (a = Mt.call(this._longMonthsParse, o)) ? a : null : "MMM" === e ? -1 !== (a = Mt.call(this._shortMonthsParse, o)) ? a : -1 !== (a = Mt.call(this._longMonthsParse, o)) ? a : null : -1 !== (a = Mt.call(this._longMonthsParse, o)) ? a : -1 !== (a = Mt.call(this._shortMonthsParse, o)) ? a : null
                }.call(this, t, e, i);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
                    if (a = g([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (r = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n;
                    if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n;
                    if (!i && this._monthsParse[n].test(t)) return n
                }
            }, ci.monthsRegex = function(t) {
                return this._monthsParseExact ? (y(this, "_monthsRegex") || Nt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (y(this, "_monthsRegex") || (this._monthsRegex = Wt), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
            }, ci.monthsShortRegex = function(t) {
                return this._monthsParseExact ? (y(this, "_monthsRegex") || Nt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (y(this, "_monthsShortRegex") || (this._monthsShortRegex = Rt), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }, ci.week = function(t) {
                return Et(t, this._week.dow, this._week.doy).week
            }, ci.firstDayOfYear = function() {
                return this._week.doy
            }, ci.firstDayOfWeek = function() {
                return this._week.dow
            }, ci.weekdays = function(t, e) {
                var i = s(this._weekdays) ? this._weekdays : this._weekdays[t && !0 !== t && this._weekdays.isFormat.test(e) ? "format" : "standalone"];
                return !0 === t ? Yt(i, this._week.dow) : t ? i[t.day()] : i
            }, ci.weekdaysMin = function(t) {
                return !0 === t ? Yt(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin
            }, ci.weekdaysShort = function(t) {
                return !0 === t ? Yt(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort
            }, ci.weekdaysParse = function(t, e, i) {
                var n, a, r;
                if (this._weekdaysParseExact) return function(t, e, i) {
                    var n, a, r, o = t.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) r = g([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(r, "").toLocaleLowerCase();
                    return i ? "dddd" === e ? -1 !== (a = Mt.call(this._weekdaysParse, o)) ? a : null : "ddd" === e ? -1 !== (a = Mt.call(this._shortWeekdaysParse, o)) ? a : null : -1 !== (a = Mt.call(this._minWeekdaysParse, o)) ? a : null : "dddd" === e ? -1 !== (a = Mt.call(this._weekdaysParse, o)) ? a : -1 !== (a = Mt.call(this._shortWeekdaysParse, o)) ? a : -1 !== (a = Mt.call(this._minWeekdaysParse, o)) ? a : null : "ddd" === e ? -1 !== (a = Mt.call(this._shortWeekdaysParse, o)) ? a : -1 !== (a = Mt.call(this._weekdaysParse, o)) ? a : -1 !== (a = Mt.call(this._minWeekdaysParse, o)) ? a : null : -1 !== (a = Mt.call(this._minWeekdaysParse, o)) ? a : -1 !== (a = Mt.call(this._weekdaysParse, o)) ? a : -1 !== (a = Mt.call(this._shortWeekdaysParse, o)) ? a : null
                }.call(this, t, e, i);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
                    if (a = g([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(a, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (r = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[n] = new RegExp(r.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[n].test(t)) return n;
                    if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n;
                    if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n;
                    if (!i && this._weekdaysParse[n].test(t)) return n
                }
            }, ci.weekdaysRegex = function(t) {
                return this._weekdaysParseExact ? (y(this, "_weekdaysRegex") || Kt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (y(this, "_weekdaysRegex") || (this._weekdaysRegex = Gt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }, ci.weekdaysShortRegex = function(t) {
                return this._weekdaysParseExact ? (y(this, "_weekdaysRegex") || Kt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (y(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Zt), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }, ci.weekdaysMinRegex = function(t) {
                return this._weekdaysParseExact ? (y(this, "_weekdaysRegex") || Kt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (y(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Xt), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }, ci.isPM = function(t) {
                return "p" === (t + "").toLowerCase().charAt(0)
            }, ci.meridiem = function(t, e, i) {
                return 11 < t ? i ? "pm" : "PM" : i ? "am" : "AM"
            }, se("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(t) {
                    var e = t % 10;
                    return t + (1 === M(t % 100 / 10) ? "th" : 1 == e ? "st" : 2 == e ? "nd" : 3 == e ? "rd" : "th")
                }
            }), b.lang = i("moment.lang is deprecated. Use moment.locale instead.", se), b.langData = i("moment.langData is deprecated. Use moment.localeData instead.", de);
            var mi = Math.abs;

            function vi(t, e, i, n) {
                var a = He(e, i);
                return t._milliseconds += n * a._milliseconds, t._days += n * a._days, t._months += n * a._months, t._bubble()
            }

            function bi(t) {
                return t < 0 ? Math.floor(t) : Math.ceil(t)
            }

            function yi(t) {
                return 4800 * t / 146097
            }

            function xi(t) {
                return 146097 * t / 4800
            }

            function _i(t) {
                return function() {
                    return this.as(t)
                }
            }
            var ki = _i("ms"),
                wi = _i("s"),
                Mi = _i("m"),
                Si = _i("h"),
                Ci = _i("d"),
                Di = _i("w"),
                Pi = _i("M"),
                Ti = _i("Q"),
                Ii = _i("y");

            function Ai(t) {
                return function() {
                    return this.isValid() ? this._data[t] : NaN
                }
            }
            var Fi = Ai("milliseconds"),
                Oi = Ai("seconds"),
                Li = Ai("minutes"),
                Ri = Ai("hours"),
                Wi = Ai("days"),
                Ni = Ai("months"),
                zi = Ai("years"),
                Bi = Math.round,
                Vi = {
                    ss: 44,
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                },
                Ei = Math.abs;

            function Hi(t) {
                return (0 < t) - (t < 0) || +t
            }

            function Yi() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var t, e, i = Ei(this._milliseconds) / 1e3,
                    n = Ei(this._days),
                    a = Ei(this._months);
                e = w((t = w(i / 60)) / 60), i %= 60, t %= 60;
                var r = w(a / 12),
                    o = a %= 12,
                    s = n,
                    l = e,
                    d = t,
                    u = i ? i.toFixed(3).replace(/\.?0+$/, "") : "",
                    h = this.asSeconds();
                if (!h) return "P0D";
                var c = h < 0 ? "-" : "",
                    f = Hi(this._months) !== Hi(h) ? "-" : "",
                    g = Hi(this._days) !== Hi(h) ? "-" : "",
                    p = Hi(this._milliseconds) !== Hi(h) ? "-" : "";
                return c + "P" + (r ? f + r + "Y" : "") + (o ? f + o + "M" : "") + (s ? g + s + "D" : "") + (l || d || u ? "T" : "") + (l ? p + l + "H" : "") + (d ? p + d + "M" : "") + (u ? p + u + "S" : "")
            }
            var ji = Ae.prototype;
            return ji.isValid = function() {
                return this._isValid
            }, ji.abs = function() {
                var t = this._data;
                return this._milliseconds = mi(this._milliseconds), this._days = mi(this._days), this._months = mi(this._months), t.milliseconds = mi(t.milliseconds), t.seconds = mi(t.seconds), t.minutes = mi(t.minutes), t.hours = mi(t.hours), t.months = mi(t.months), t.years = mi(t.years), this
            }, ji.add = function(t, e) {
                return vi(this, t, e, 1)
            }, ji.subtract = function(t, e) {
                return vi(this, t, e, -1)
            }, ji.as = function(t) {
                if (!this.isValid()) return NaN;
                var e, i, n = this._milliseconds;
                if ("month" === (t = O(t)) || "quarter" === t || "year" === t) switch (e = this._days + n / 864e5, i = this._months + yi(e), t) {
                    case "month":
                        return i;
                    case "quarter":
                        return i / 3;
                    case "year":
                        return i / 12
                } else switch (e = this._days + Math.round(xi(this._months)), t) {
                    case "week":
                        return e / 7 + n / 6048e5;
                    case "day":
                        return e + n / 864e5;
                    case "hour":
                        return 24 * e + n / 36e5;
                    case "minute":
                        return 1440 * e + n / 6e4;
                    case "second":
                        return 86400 * e + n / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * e) + n;
                    default:
                        throw new Error("Unknown unit " + t)
                }
            }, ji.asMilliseconds = ki, ji.asSeconds = wi, ji.asMinutes = Mi, ji.asHours = Si, ji.asDays = Ci, ji.asWeeks = Di, ji.asMonths = Pi, ji.asQuarters = Ti, ji.asYears = Ii, ji.valueOf = function() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * M(this._months / 12) : NaN
            }, ji._bubble = function() {
                var t, e, i, n, a, r = this._milliseconds,
                    o = this._days,
                    s = this._months,
                    l = this._data;
                return 0 <= r && 0 <= o && 0 <= s || r <= 0 && o <= 0 && s <= 0 || (r += 864e5 * bi(xi(s) + o), s = o = 0), l.milliseconds = r % 1e3, t = w(r / 1e3), l.seconds = t % 60, e = w(t / 60), l.minutes = e % 60, i = w(e / 60), l.hours = i % 24, s += a = w(yi(o += w(i / 24))), o -= bi(xi(a)), n = w(s / 12), s %= 12, l.days = o, l.months = s, l.years = n, this
            }, ji.clone = function() {
                return He(this)
            }, ji.get = function(t) {
                return t = O(t), this.isValid() ? this[t + "s"]() : NaN
            }, ji.milliseconds = Fi, ji.seconds = Oi, ji.minutes = Li, ji.hours = Ri, ji.days = Wi, ji.weeks = function() {
                return w(this.days() / 7)
            }, ji.months = Ni, ji.years = zi, ji.humanize = function(t) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e, i, n, a, r, o, s, l, d, u, h, c = this.localeData(),
                    f = (i = !t, n = c, a = He(e = this).abs(), r = Bi(a.as("s")), o = Bi(a.as("m")), s = Bi(a.as("h")), l = Bi(a.as("d")), d = Bi(a.as("M")), u = Bi(a.as("y")), (h = r <= Vi.ss && ["s", r] || r < Vi.s && ["ss", r] || o <= 1 && ["m"] || o < Vi.m && ["mm", o] || s <= 1 && ["h"] || s < Vi.h && ["hh", s] || l <= 1 && ["d"] || l < Vi.d && ["dd", l] || d <= 1 && ["M"] || d < Vi.M && ["MM", d] || u <= 1 && ["y"] || ["yy", u])[2] = i, h[3] = 0 < +e, h[4] = n, function(t, e, i, n, a) {
                        return a.relativeTime(e || 1, !!i, t, n)
                    }.apply(null, h));
                return t && (f = c.pastFuture(+this, f)), c.postformat(f)
            }, ji.toISOString = Yi, ji.toString = Yi, ji.toJSON = Yi, ji.locale = Ke, ji.localeData = Je, ji.toIsoString = i("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Yi), ji.lang = $e, H("X", 0, 0, "unix"), H("x", 0, 0, "valueOf"), lt("x", nt), lt("X", /[+-]?\d+(\.\d{1,3})?/), ht("X", function(t, e, i) {
                i._d = new Date(1e3 * parseFloat(t, 10))
            }), ht("x", function(t, e, i) {
                i._d = new Date(M(t))
            }), b.version = "2.24.0", t = Ce, b.fn = ui, b.min = function() {
                return Te("isBefore", [].slice.call(arguments, 0))
            }, b.max = function() {
                return Te("isAfter", [].slice.call(arguments, 0))
            }, b.now = function() {
                return Date.now ? Date.now() : +new Date
            }, b.utc = g, b.unix = function(t) {
                return Ce(1e3 * t)
            }, b.months = function(t, e) {
                return gi(t, e, "months")
            }, b.isDate = h, b.locale = se, b.invalid = m, b.duration = He, b.isMoment = k, b.weekdays = function(t, e, i) {
                return pi(t, e, i, "weekdays")
            }, b.parseZone = function() {
                return Ce.apply(null, arguments).parseZone()
            }, b.localeData = de, b.isDuration = Fe, b.monthsShort = function(t, e) {
                return gi(t, e, "monthsShort")
            }, b.weekdaysMin = function(t, e, i) {
                return pi(t, e, i, "weekdaysMin")
            }, b.defineLocale = le, b.updateLocale = function(t, e) {
                if (null != e) {
                    var i, n, a = ie;
                    null != (n = oe(t)) && (a = n._config), (i = new I(e = T(a, e))).parentLocale = ne[t], ne[t] = i, se(t)
                } else null != ne[t] && (null != ne[t].parentLocale ? ne[t] = ne[t].parentLocale : null != ne[t] && delete ne[t]);
                return ne[t]
            }, b.locales = function() {
                return n(ne)
            }, b.weekdaysShort = function(t, e, i) {
                return pi(t, e, i, "weekdaysShort")
            }, b.normalizeUnits = O, b.relativeTimeRounding = function(t) {
                return void 0 === t ? Bi : "function" == typeof t && (Bi = t, !0)
            }, b.relativeTimeThreshold = function(t, e) {
                return void 0 !== Vi[t] && (void 0 === e ? Vi[t] : (Vi[t] = e, "s" === t && (Vi.ss = e - 1), !0))
            }, b.calendarFormat = function(t, e) {
                var i = t.diff(e, "days", !0);
                return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse"
            }, b.prototype = ui, b.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "GGGG-[W]WW",
                MONTH: "YYYY-MM"
            }, b
        }(), qi.exports),
        Ki = {
            datetime: "MMM D, YYYY, h:mm:ss a",
            millisecond: "h:mm:ss.SSS a",
            second: "h:mm:ss a",
            minute: "h:mm a",
            hour: "hA",
            day: "MMM D",
            week: "ll",
            month: "MMM YYYY",
            quarter: "[Q]Q - YYYY",
            year: "YYYY"
        };
    ni._date.override("function" == typeof Xi ? {
        _id: "moment",
        formats: function() {
            return Ki
        },
        parse: function(t, e) {
            return "string" == typeof t && "string" == typeof e ? t = Xi(t, e) : t instanceof Xi || (t = Xi(t)), t.isValid() ? t.valueOf() : null
        },
        format: function(t, e) {
            return Xi(t).format(e)
        },
        add: function(t, e, i) {
            return Xi(t).add(e, i).valueOf()
        },
        diff: function(t, e, i) {
            return Xi.duration(Xi(t).diff(Xi(e))).as(i)
        },
        startOf: function(t, e, i) {
            return t = Xi(t), "isoWeek" === e ? t.isoWeekday(i).valueOf() : t.startOf(e).valueOf()
        },
        endOf: function(t, e) {
            return Xi(t).endOf(e).valueOf()
        },
        _create: function(t) {
            return Xi(t)
        }
    } : {}), ot._set("global", {
        plugins: {
            filler: {
                propagate: !0
            }
        }
    });
    var $i = {
        dataset: function(t) {
            var e = t.fill,
                i = t.chart,
                n = i.getDatasetMeta(e),
                a = n && i.isDatasetVisible(e) && n.dataset._children || [],
                r = a.length || 0;
            return r ? function(t, e) {
                return e < r && a[e]._view || null
            } : null
        },
        boundary: function(t) {
            var e = t.boundary,
                i = e ? e.x : null,
                n = e ? e.y : null;
            return function(t) {
                return {
                    x: null === i ? t.x : i,
                    y: null === n ? t.y : n
                }
            }
        }
    };

    function Ji(t, e, i) {
        var n, a = t._model || {},
            r = a.fill;
        if (void 0 === r && (r = !!a.backgroundColor), !1 === r || null === r) return !1;
        if (!0 === r) return "origin";
        if (n = parseFloat(r, 10), isFinite(n) && Math.floor(n) === n) return "-" !== r[0] && "+" !== r[0] || (n = e + n), !(n === e || n < 0 || i <= n) && n;
        switch (r) {
            case "bottom":
                return "start";
            case "top":
                return "end";
            case "zero":
                return "origin";
            case "origin":
            case "start":
            case "end":
                return r;
            default:
                return !1
        }
    }

    function Qi(t) {
        var e, i = t.el._model || {},
            n = t.el._scale || {},
            a = t.fill,
            r = null;
        if (isFinite(a)) return null;
        if ("start" === a ? r = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === a ? r = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? r = i.scaleZero : n.getBasePosition ? r = n.getBasePosition() : n.getBasePixel && (r = n.getBasePixel()), null != r) {
            if (void 0 !== r.x && void 0 !== r.y) return r;
            if (dt.isFinite(r)) return {
                x: (e = n.isHorizontal()) ? r : null,
                y: e ? null : r
            }
        }
        return null
    }

    function tn(t, e, i) {
        var n, a = t[e].fill,
            r = [e];
        if (!i) return a;
        for (; !1 !== a && -1 === r.indexOf(a);) {
            if (!isFinite(a)) return a;
            if (!(n = t[a])) return !1;
            if (n.visible) return a;
            r.push(a), a = n.fill
        }
        return !1
    }

    function en(t) {
        return t && !t.skip
    }

    function nn(t, e, i, n, a) {
        var r;
        if (n && a) {
            for (t.moveTo(e[0].x, e[0].y), r = 1; r < n; ++r) dt.canvas.lineTo(t, e[r - 1], e[r]);
            for (t.lineTo(i[a - 1].x, i[a - 1].y), r = a - 1; 0 < r; --r) dt.canvas.lineTo(t, i[r], i[r - 1], !0)
        }
    }
    var an = {
            id: "filler",
            afterDatasetsUpdate: function(t, e) {
                var i, n, a, r, o, s, l, d = (t.data.datasets || []).length,
                    u = e.propagate,
                    h = [];
                for (n = 0; n < d; ++n) r = null, (a = (i = t.getDatasetMeta(n)).dataset) && a._model && a instanceof Nt.Line && (r = {
                    visible: t.isDatasetVisible(n),
                    fill: Ji(a, n, d),
                    chart: t,
                    el: a
                }), i.$filler = r, h.push(r);
                for (n = 0; n < d; ++n)(r = h[n]) && (r.fill = tn(h, n, u), r.boundary = Qi(r), r.mapper = (l = void 0, s = (o = r).fill, !(l = "dataset") === s ? null : (isFinite(s) || (l = "boundary"), $i[l](o))))
            },
            beforeDatasetDraw: function(t, e) {
                var i = e.meta.$filler;
                if (i) {
                    var n = t.ctx,
                        a = i.el,
                        r = a._view,
                        o = a._children || [],
                        s = i.mapper,
                        l = r.backgroundColor || ot.global.defaultColor;
                    s && l && o.length && (dt.canvas.clipArea(n, t.chartArea), function(t, e, i, n, a, r) {
                        var o, s, l, d, u, h, c, f = e.length,
                            g = n.spanGaps,
                            p = [],
                            m = [],
                            v = 0,
                            b = 0;
                        for (t.beginPath(), o = 0, s = f + !!r; o < s; ++o) u = i(d = e[l = o % f]._view, l, n), h = en(d), c = en(u), h && c ? (v = p.push(d), b = m.push(u)) : v && b && (g ? (h && p.push(d), c && m.push(u)) : (nn(t, p, m, v, b), v = b = 0, p = [], m = []));
                        nn(t, p, m, v, b), t.closePath(), t.fillStyle = a, t.fill()
                    }(n, o, s, r, l, a._loop), dt.canvas.unclipArea(n))
                }
            }
        },
        rn = dt.noop,
        on = dt.valueOrDefault;

    function sn(t, e) {
        return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth
    }
    ot._set("global", {
        legend: {
            display: !0,
            position: "top",
            fullWidth: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function(t, e) {
                var i = e.datasetIndex,
                    n = this.chart,
                    a = n.getDatasetMeta(i);
                a.hidden = null === a.hidden ? !n.data.datasets[i].hidden : null, n.update()
            },
            onHover: null,
            onLeave: null,
            labels: {
                boxWidth: 40,
                padding: 10,
                generateLabels: function(i) {
                    var t = i.data;
                    return dt.isArray(t.datasets) ? t.datasets.map(function(t, e) {
                        return {
                            text: t.label,
                            fillStyle: dt.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor,
                            hidden: !i.isDatasetVisible(e),
                            lineCap: t.borderCapStyle,
                            lineDash: t.borderDash,
                            lineDashOffset: t.borderDashOffset,
                            lineJoin: t.borderJoinStyle,
                            lineWidth: t.borderWidth,
                            strokeStyle: t.borderColor,
                            pointStyle: t.pointStyle,
                            datasetIndex: e
                        }
                    }, this) : []
                }
            }
        },
        legendCallback: function(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
            return e.push("</ul>"), e.join("")
        }
    });
    var ln = gt.extend({
        initialize: function(t) {
            dt.extend(this, t), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1
        },
        beforeUpdate: rn,
        update: function(t, e, i) {
            var n = this;
            return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
        },
        afterUpdate: rn,
        beforeSetDimensions: rn,
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            }
        },
        afterSetDimensions: rn,
        beforeBuildLabels: rn,
        buildLabels: function() {
            var e = this,
                i = e.options.labels || {},
                t = dt.callback(i.generateLabels, [e.chart], e) || [];
            i.filter && (t = t.filter(function(t) {
                return i.filter(t, e.chart.data)
            })), e.options.reverse && t.reverse(), e.legendItems = t
        },
        afterBuildLabels: rn,
        beforeFit: rn,
        fit: function() {
            var t = this,
                e = t.options,
                n = e.labels,
                i = e.display,
                a = t.ctx,
                r = dt.options._parseFont(n),
                o = r.size,
                s = t.legendHitBoxes = [],
                l = t.minSize,
                d = t.isHorizontal();
            if (d ? (l.width = t.maxWidth, l.height = i ? 10 : 0) : (l.width = i ? 10 : 0, l.height = t.maxHeight), i)
                if (a.font = r.string, d) {
                    var u = t.lineWidths = [0],
                        h = 0;
                    a.textAlign = "left", a.textBaseline = "top", dt.each(t.legendItems, function(t, e) {
                        var i = sn(n, o) + o / 2 + a.measureText(t.text).width;
                        (0 === e || u[u.length - 1] + i + n.padding > l.width) && (h += o + n.padding, u[u.length - (0 < e ? 0 : 1)] = n.padding), s[e] = {
                            left: 0,
                            top: 0,
                            width: i,
                            height: o
                        }, u[u.length - 1] += i + n.padding
                    }), l.height += h
                } else {
                    var c = n.padding,
                        f = t.columnWidths = [],
                        g = n.padding,
                        p = 0,
                        m = 0,
                        v = o + c;
                    dt.each(t.legendItems, function(t, e) {
                        var i = sn(n, o) + o / 2 + a.measureText(t.text).width;
                        0 < e && m + v > l.height - c && (g += p + n.padding, f.push(p), m = p = 0), p = Math.max(p, i), m += v, s[e] = {
                            left: 0,
                            top: 0,
                            width: i,
                            height: o
                        }
                    }), g += p, f.push(p), l.width += g
                }
            t.width = l.width, t.height = l.height
        },
        afterFit: rn,
        isHorizontal: function() {
            return "top" === this.options.position || "bottom" === this.options.position
        },
        draw: function() {
            var h = this,
                c = h.options,
                f = c.labels,
                t = ot.global,
                g = t.defaultColor,
                p = t.elements.line,
                m = h.width,
                v = h.lineWidths;
            if (c.display) {
                var b, y = h.ctx,
                    e = on(f.fontColor, t.defaultFontColor),
                    i = dt.options._parseFont(f),
                    x = i.size;
                y.textAlign = "left", y.textBaseline = "middle", y.lineWidth = .5, y.strokeStyle = e, y.fillStyle = e, y.font = i.string;
                var _ = sn(f, x),
                    k = h.legendHitBoxes,
                    w = h.isHorizontal();
                b = w ? {
                    x: h.left + (m - v[0]) / 2 + f.padding,
                    y: h.top + f.padding,
                    line: 0
                } : {
                    x: h.left + f.padding,
                    y: h.top + f.padding,
                    line: 0
                };
                var M = x + f.padding;
                dt.each(h.legendItems, function(t, e) {
                    var i, n, a, r, o, s = y.measureText(t.text).width,
                        l = _ + x / 2 + s,
                        d = b.x,
                        u = b.y;
                    w ? 0 < e && d + l + f.padding > h.left + h.minSize.width && (u = b.y += M, b.line++, d = b.x = h.left + (m - v[b.line]) / 2 + f.padding) : 0 < e && u + M > h.top + h.minSize.height && (d = b.x = d + h.columnWidths[b.line] + f.padding, u = b.y = h.top + f.padding, b.line++),
                        function(t, e, i) {
                            if (!(isNaN(_) || _ <= 0)) {
                                y.save();
                                var n = on(i.lineWidth, p.borderWidth);
                                if (y.fillStyle = on(i.fillStyle, g), y.lineCap = on(i.lineCap, p.borderCapStyle), y.lineDashOffset = on(i.lineDashOffset, p.borderDashOffset), y.lineJoin = on(i.lineJoin, p.borderJoinStyle), y.lineWidth = n, y.strokeStyle = on(i.strokeStyle, g), y.setLineDash && y.setLineDash(on(i.lineDash, p.borderDash)), c.labels && c.labels.usePointStyle) {
                                    var a = _ * Math.SQRT2 / 2,
                                        r = t + _ / 2,
                                        o = e + x / 2;
                                    dt.canvas.drawPoint(y, i.pointStyle, a, r, o)
                                } else 0 !== n && y.strokeRect(t, e, _, x), y.fillRect(t, e, _, x);
                                y.restore()
                            }
                        }(d, u, t), k[e].left = d, k[e].top = u, i = t, n = s, r = _ + (a = x / 2) + d, o = u + a, y.fillText(i.text, r, o), i.hidden && (y.beginPath(), y.lineWidth = 2, y.moveTo(r, o), y.lineTo(r + n, o), y.stroke()), w ? b.x += l + f.padding : b.y += M
                })
            }
        },
        _getLegendItemAt: function(t, e) {
            var i, n, a;
            if (t >= this.left && t <= this.right && e >= this.top && e <= this.bottom)
                for (a = this.legendHitBoxes, i = 0; i < a.length; ++i)
                    if (t >= (n = a[i]).left && t <= n.left + n.width && e >= n.top && e <= n.top + n.height) return this.legendItems[i];
            return null
        },
        handleEvent: function(t) {
            var e, i = this.options,
                n = "mouseup" === t.type ? "click" : t.type;
            if ("mousemove" === n) {
                if (!i.onHover && !i.onLeave) return
            } else {
                if ("click" !== n) return;
                if (!i.onClick) return
            }
            e = this._getLegendItemAt(t.x, t.y), "click" === n ? e && i.onClick && i.onClick.call(this, t.native, e) : (i.onLeave && e !== this._hoveredItem && (this._hoveredItem && i.onLeave.call(this, t.native, this._hoveredItem), this._hoveredItem = e), i.onHover && e && i.onHover.call(this, t.native, e))
        }
    });

    function dn(t, e) {
        var i = new ln({
            ctx: t.ctx,
            options: e,
            chart: t
        });
        ye.configure(t, i, e), ye.addBox(t, i), t.legend = i
    }
    var un = {
            id: "legend",
            _element: ln,
            beforeInit: function(t) {
                var e = t.options.legend;
                e && dn(t, e)
            },
            beforeUpdate: function(t) {
                var e = t.options.legend,
                    i = t.legend;
                e ? (dt.mergeIf(e, ot.global.legend), i ? (ye.configure(t, i, e), i.options = e) : dn(t, e)) : i && (ye.removeBox(t, i), delete t.legend)
            },
            afterEvent: function(t, e) {
                var i = t.legend;
                i && i.handleEvent(e)
            }
        },
        hn = dt.noop;
    ot._set("global", {
        title: {
            display: !1,
            fontStyle: "bold",
            fullWidth: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3
        }
    });
    var cn = gt.extend({
        initialize: function(t) {
            dt.extend(this, t), this.legendHitBoxes = []
        },
        beforeUpdate: hn,
        update: function(t, e, i) {
            var n = this;
            return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
        },
        afterUpdate: hn,
        beforeSetDimensions: hn,
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            }
        },
        afterSetDimensions: hn,
        beforeBuildLabels: hn,
        buildLabels: hn,
        afterBuildLabels: hn,
        beforeFit: hn,
        fit: function() {
            var t = this.options,
                e = t.display,
                i = this.minSize,
                n = dt.isArray(t.text) ? t.text.length : 1,
                a = dt.options._parseFont(t),
                r = e ? n * a.lineHeight + 2 * t.padding : 0;
            this.isHorizontal() ? (i.width = this.maxWidth, i.height = r) : (i.width = r, i.height = this.maxHeight), this.width = i.width, this.height = i.height
        },
        afterFit: hn,
        isHorizontal: function() {
            var t = this.options.position;
            return "top" === t || "bottom" === t
        },
        draw: function() {
            var t = this.ctx,
                e = this.options;
            if (e.display) {
                var i, n, a, r = dt.options._parseFont(e),
                    o = r.lineHeight,
                    s = o / 2 + e.padding,
                    l = 0,
                    d = this.top,
                    u = this.left,
                    h = this.bottom,
                    c = this.right;
                t.fillStyle = dt.valueOrDefault(e.fontColor, ot.global.defaultFontColor), t.font = r.string, this.isHorizontal() ? (n = u + (c - u) / 2, a = d + s, i = c - u) : (n = "left" === e.position ? u + s : c - s, a = d + (h - d) / 2, i = h - d, l = Math.PI * ("left" === e.position ? -.5 : .5)), t.save(), t.translate(n, a), t.rotate(l), t.textAlign = "center", t.textBaseline = "middle";
                var f = e.text;
                if (dt.isArray(f))
                    for (var g = 0, p = 0; p < f.length; ++p) t.fillText(f[p], 0, g, i), g += o;
                else t.fillText(f, 0, 0, i);
                t.restore()
            }
        }
    });

    function fn(t, e) {
        var i = new cn({
            ctx: t.ctx,
            options: e,
            chart: t
        });
        ye.configure(t, i, e), ye.addBox(t, i), t.titleBlock = i
    }
    var gn = {},
        pn = an,
        mn = un,
        vn = {
            id: "title",
            _element: cn,
            beforeInit: function(t) {
                var e = t.options.title;
                e && fn(t, e)
            },
            beforeUpdate: function(t) {
                var e = t.options.title,
                    i = t.titleBlock;
                e ? (dt.mergeIf(e, ot.global.title), i ? (ye.configure(t, i, e), i.options = e) : fn(t, e)) : i && (ye.removeBox(t, i), delete t.titleBlock)
            }
        };
    for (var bn in gn.filler = pn, gn.legend = mn, gn.title = vn, (ti.helpers = dt).where = function(t, e) {
            if (dt.isArray(t) && Array.prototype.filter) return t.filter(e);
            var i = [];
            return dt.each(t, function(t) {
                e(t) && i.push(t)
            }), i
        }, dt.findIndex = Array.prototype.findIndex ? function(t, e, i) {
            return t.findIndex(e, i)
        } : function(t, e, i) {
            i = void 0 === i ? t : i;
            for (var n = 0, a = t.length; n < a; ++n)
                if (e.call(i, t[n], n, t)) return n;
            return -1
        }, dt.findNextWhere = function(t, e, i) {
            dt.isNullOrUndef(i) && (i = -1);
            for (var n = i + 1; n < t.length; n++) {
                var a = t[n];
                if (e(a)) return a
            }
        }, dt.findPreviousWhere = function(t, e, i) {
            dt.isNullOrUndef(i) && (i = t.length);
            for (var n = i - 1; 0 <= n; n--) {
                var a = t[n];
                if (e(a)) return a
            }
        }, dt.isNumber = function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }, dt.almostEquals = function(t, e, i) {
            return Math.abs(t - e) < i
        }, dt.almostWhole = function(t, e) {
            var i = Math.round(t);
            return i - e < t && t < i + e
        }, dt.max = function(t) {
            return t.reduce(function(t, e) {
                return isNaN(e) ? t : Math.max(t, e)
            }, Number.NEGATIVE_INFINITY)
        }, dt.min = function(t) {
            return t.reduce(function(t, e) {
                return isNaN(e) ? t : Math.min(t, e)
            }, Number.POSITIVE_INFINITY)
        }, dt.sign = Math.sign ? function(t) {
            return Math.sign(t)
        } : function(t) {
            return 0 == (t = +t) || isNaN(t) ? t : 0 < t ? 1 : -1
        }, dt.log10 = Math.log10 ? function(t) {
            return Math.log10(t)
        } : function(t) {
            var e = Math.log(t) * Math.LOG10E,
                i = Math.round(e);
            return t === Math.pow(10, i) ? i : e
        }, dt.toRadians = function(t) {
            return t * (Math.PI / 180)
        }, dt.toDegrees = function(t) {
            return t * (180 / Math.PI)
        }, dt._decimalPlaces = function(t) {
            if (dt.isFinite(t)) {
                for (var e = 1, i = 0; Math.round(t * e) / e !== t;) e *= 10, i++;
                return i
            }
        }, dt.getAngleFromPoint = function(t, e) {
            var i = e.x - t.x,
                n = e.y - t.y,
                a = Math.sqrt(i * i + n * n),
                r = Math.atan2(n, i);
            return r < -.5 * Math.PI && (r += 2 * Math.PI), {
                angle: r,
                distance: a
            }
        }, dt.distanceBetweenPoints = function(t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
        }, dt.aliasPixel = function(t) {
            return t % 2 == 0 ? 0 : .5
        }, dt._alignPixel = function(t, e, i) {
            var n = t.currentDevicePixelRatio,
                a = i / 2;
            return Math.round((e - a) * n) / n + a
        }, dt.splineCurve = function(t, e, i, n) {
            var a = t.skip ? e : t,
                r = e,
                o = i.skip ? e : i,
                s = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
                l = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
                d = s / (s + l),
                u = l / (s + l),
                h = n * (d = isNaN(d) ? 0 : d),
                c = n * (u = isNaN(u) ? 0 : u);
            return {
                previous: {
                    x: r.x - h * (o.x - a.x),
                    y: r.y - h * (o.y - a.y)
                },
                next: {
                    x: r.x + c * (o.x - a.x),
                    y: r.y + c * (o.y - a.y)
                }
            }
        }, dt.EPSILON = Number.EPSILON || 1e-14, dt.splineCurveMonotone = function(t) {
            var e, i, n, a, r, o, s, l, d, u = (t || []).map(function(t) {
                    return {
                        model: t._model,
                        deltaK: 0,
                        mK: 0
                    }
                }),
                h = u.length;
            for (e = 0; e < h; ++e)
                if (!(n = u[e]).model.skip) {
                    if (i = 0 < e ? u[e - 1] : null, (a = e < h - 1 ? u[e + 1] : null) && !a.model.skip) {
                        var c = a.model.x - n.model.x;
                        n.deltaK = 0 != c ? (a.model.y - n.model.y) / c : 0
                    }!i || i.model.skip ? n.mK = n.deltaK : !a || a.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2
                }
            for (e = 0; e < h - 1; ++e) n = u[e], a = u[e + 1], n.model.skip || a.model.skip || (dt.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = a.mK = 0 : (r = n.mK / n.deltaK, o = a.mK / n.deltaK, (l = Math.pow(r, 2) + Math.pow(o, 2)) <= 9 || (s = 3 / Math.sqrt(l), n.mK = r * s * n.deltaK, a.mK = o * s * n.deltaK)));
            for (e = 0; e < h; ++e)(n = u[e]).model.skip || (i = 0 < e ? u[e - 1] : null, a = e < h - 1 ? u[e + 1] : null, i && !i.model.skip && (d = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - d, n.model.controlPointPreviousY = n.model.y - d * n.mK), a && !a.model.skip && (d = (a.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + d, n.model.controlPointNextY = n.model.y + d * n.mK))
        }, dt.nextItem = function(t, e, i) {
            return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
        }, dt.previousItem = function(t, e, i) {
            return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
        }, dt.niceNum = function(t, e) {
            var i = Math.floor(dt.log10(t)),
                n = t / Math.pow(10, i);
            return (e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i)
        }, dt.requestAnimFrame = "undefined" == typeof window ? function(t) {
            t()
        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            return window.setTimeout(t, 1e3 / 60)
        }, dt.getRelativePosition = function(t, e) {
            var i, n, a = t.originalEvent || t,
                r = t.target || t.srcElement,
                o = r.getBoundingClientRect(),
                s = a.touches;
            n = s && 0 < s.length ? (i = s[0].clientX, s[0].clientY) : (i = a.clientX, a.clientY);
            var l = parseFloat(dt.getStyle(r, "padding-left")),
                d = parseFloat(dt.getStyle(r, "padding-top")),
                u = parseFloat(dt.getStyle(r, "padding-right")),
                h = parseFloat(dt.getStyle(r, "padding-bottom")),
                c = o.right - o.left - l - u,
                f = o.bottom - o.top - d - h;
            return {
                x: i = Math.round((i - o.left - l) / c * r.width / e.currentDevicePixelRatio),
                y: n = Math.round((n - o.top - d) / f * r.height / e.currentDevicePixelRatio)
            }
        }, dt.getConstraintWidth = function(t) {
            return _n(t, "max-width", "clientWidth")
        }, dt.getConstraintHeight = function(t) {
            return _n(t, "max-height", "clientHeight")
        }, dt._calculatePadding = function(t, e, i) {
            return -1 < (e = dt.getStyle(t, e)).indexOf("%") ? i * parseInt(e, 10) / 100 : parseInt(e, 10)
        }, dt._getParentNode = function(t) {
            var e = t.parentNode;
            return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
        }, dt.getMaximumWidth = function(t) {
            var e = dt._getParentNode(t);
            if (!e) return t.clientWidth;
            var i = e.clientWidth,
                n = i - dt._calculatePadding(e, "padding-left", i) - dt._calculatePadding(e, "padding-right", i),
                a = dt.getConstraintWidth(t);
            return isNaN(a) ? n : Math.min(n, a)
        }, dt.getMaximumHeight = function(t) {
            var e = dt._getParentNode(t);
            if (!e) return t.clientHeight;
            var i = e.clientHeight,
                n = i - dt._calculatePadding(e, "padding-top", i) - dt._calculatePadding(e, "padding-bottom", i),
                a = dt.getConstraintHeight(t);
            return isNaN(a) ? n : Math.min(n, a)
        }, dt.getStyle = function(t, e) {
            return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
        }, dt.retinaScale = function(t, e) {
            var i = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;
            if (1 !== i) {
                var n = t.canvas,
                    a = t.height,
                    r = t.width;
                n.height = a * i, n.width = r * i, t.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = a + "px", n.style.width = r + "px")
            }
        }, dt.fontString = function(t, e, i) {
            return e + " " + t + "px " + i
        }, dt.longestText = function(e, t, i, n) {
            var a = (n = n || {}).data = n.data || {},
                r = n.garbageCollect = n.garbageCollect || [];
            n.font !== t && (a = n.data = {}, r = n.garbageCollect = [], n.font = t), e.font = t;
            var o = 0;
            dt.each(i, function(t) {
                null != t && !0 !== dt.isArray(t) ? o = dt.measureText(e, a, r, o, t) : dt.isArray(t) && dt.each(t, function(t) {
                    null == t || dt.isArray(t) || (o = dt.measureText(e, a, r, o, t))
                })
            });
            var s = r.length / 2;
            if (s > i.length) {
                for (var l = 0; l < s; l++) delete a[r[l]];
                r.splice(0, s)
            }
            return o
        }, dt.measureText = function(t, e, i, n, a) {
            var r = e[a];
            return r || (r = e[a] = t.measureText(a).width, i.push(a)), n < r && (n = r), n
        }, dt.numberOfLabelLines = function(t) {
            var e = 1;
            return dt.each(t, function(t) {
                dt.isArray(t) && t.length > e && (e = t.length)
            }), e
        }, dt.color = q ? function(t) {
            return t instanceof CanvasGradient && (t = ot.global.defaultColor), q(t)
        } : function(t) {
            return console.error("Color.js not found!"), t
        }, dt.getHoverColor = function(t) {
            return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : dt.color(t).saturate(.5).darken(.1).rgbString()
        }, ti._adapters = ni, ti.Animation = mt, ti.animationService = vt, ti.controllers = le, ti.DatasetController = kt, ti.defaults = ot, ti.Element = gt, ti.elements = Nt, ti.Interaction = pe, ti.layouts = ye, ti.platform = We, ti.plugins = Ne, ti.Scale = di, ti.scaleService = ze, ti.Ticks = ai, ti.Tooltip = Ze, ti.helpers.each(Zi, function(t, e) {
            ti.scaleService.registerScaleType(e, t, t._defaults)
        }), gn) gn.hasOwnProperty(bn) && ti.plugins.register(gn[bn]);

    function yn(t, e, i) {
        var n;
        return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
    }

    function xn(t) {
        return null != t && "none" !== t
    }

    function _n(t, e, i) {
        var n = document.defaultView,
            a = dt._getParentNode(t),
            r = n.getComputedStyle(t)[e],
            o = n.getComputedStyle(a)[e],
            s = xn(r),
            l = xn(o),
            d = Number.POSITIVE_INFINITY;
        return s || l ? Math.min(s ? yn(r, t, i) : d, l ? yn(o, a, i) : d) : "none"
    }
    ti.platform.initialize();
    var kn = ti;
    return "undefined" != typeof window && (window.Chart = ti), (ti.Chart = ti).Legend = gn.legend._element, ti.Title = gn.title._element, ti.pluginService = ti.plugins, ti.PluginBase = ti.Element.extend({}), ti.canvasHelpers = ti.helpers.canvas, ti.layoutService = ti.layouts, ti.LinearScaleBase = fi, ti.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], function(i) {
        ti[i] = function(t, e) {
            return new ti(t, ti.helpers.merge(e || {}, {
                type: i.charAt(0).toLowerCase() + i.slice(1)
            }))
        }
    }), kn
});