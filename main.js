parcelRequire = function (e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire,
            u = "function" == typeof require && require;

    function f(t, n) {
            if (!r[t]) {
                    if (!e[t]) {
                            var i = "function" == typeof parcelRequire && parcelRequire;
                            if (!n && i) return i(t, !0);
                            if (o) return o(t, !0);
                            if (u && "string" == typeof t) return u(t);
                            var c = new Error("Cannot find module '" + t + "'");
                            throw c.code = "MODULE_NOT_FOUND",
                            c
                    }
                    p.resolve = function (r) {
                            return e[t][1][r] || r
                    },
                    p.cache = {};
                    var l = r[t] = new f.Module(t);
                    e[t][0].call(l.exports, p, l, l.exports, this)
            }
            return r[t].exports;

            function p(e) {
                    return f(p.resolve(e))
            }
    }
    f.isParcelRequire = !0,
    f.Module = function (e) {
            this.id = e,
            this.bundle = f,
            this.exports = {}
    },
    f.modules = e,
    f.cache = r,
    f.parent = o,
    f.register = function (r, t) {
            e[r] = [function (e, r) {
                    r.exports = t
            },
            {}]
    };
    for (var c = 0; c < t.length; c++) try {
            f(t[c])
    } catch (e) {
            i || (i = e)
    }
    if (t.length) {
            var l = f(t[t.length - 1]);
            "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
                    return l
            }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i) throw i;
    return f
}({
    "mRRC": [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                    value: !0
            }),
            exports.
    default = void 0;
            var e = {
                    exchangeRate: 26.53,
                    byClick: !0,
                    withForm: !1
            };
            exports.
    default = e;
    },
    {}],
    "AxFd": [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                    value: !0
            }),
            exports.
    default = void 0;
            var e = {
                    updateItem: function (e, t) {
                            e.commit("updateItem", t)
                    },
                    updateTotalComplexPrice: function (e, t) {
                            e.commit("updateTotalComplexPrice", t)
                    }
            };
            exports.
    default = e;
    },
    {}],
    "WZ76": [function (require, module, exports) {
            "use strict";

            function e(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            function t(e, t) {
                    for (var r = 0; r < t.length; r++) {
                            var i = t[r];
                            i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
            }
            function r(e, r, i) {
                    return r && t(e.prototype, r),
                    i && t(e, i),
                    e
            }
            Object.defineProperty(exports, "__esModule", {
                    value: !0
            }),
            exports.RadioInputStyles = exports.getComplexPrice = exports.priceTariffByArea = exports.TARIFFS = void 0;
            var i = [{
                    id: "idea",
                    title: "Idea",
                    150: 550,
                    altId: "good_idea"
            },
            {
                    id: "good_idea",
                    title: "Good Idea",
                    150: 849,
                    altId: "good_idea_premium"
            },
            {
                    id: "good_idea_premium",
                    title: 'Good Idea <span style="color:orange">Premium</span>',
                    150: 1049,
                    altId: "good_idea"
            }];
            exports.TARIFFS = i;
            var n = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return i.map(function (r) {
                            for (var i = {
                                    id: r.id,
                                    title: r.title,
                                    total: 0,
                                    altId: r.altId
                            }, n = 0, o = Object.keys(r); n < o.length; n++) {
                                    var a = o[n],
                                            l = parseInt(a);
                                    if (!isNaN(l)) {
                                            var u = r[a];
                                            if ((e > 0 || t) && e <= l) {
                                                    i.total = u * parseInt(e);
                                                    break
                                            }
                                    }
                            }
                            return i
                    })
            };
            exports.priceTariffByArea = n;
            var o = function (e) {
                    var t, r = 0,
                            i = 0,
                            o = e.some(function (e) {
                                    return !!e.fieldValue.value
                            }),
                            a = e.find(function (e) {
                                    return "area-size" === e.fieldId
                            });
                    if (!o || !a) return {};
                    var l = parseInt(a.fieldValue.value || 0),
                            u = n(l, !0),
                            d = e.filter(function (e) {
                                    var t = e.fieldValue.value;
                                    return !!t && -1 === t.indexOf("__no")
                            }).map(function (e) {
                                    return e.fieldId
                            });
                    t = d.includes("design-control") && d.includes("threed") ? u.filter(function (e) {
                            return "good_idea_premium" === e.id
                    })[0] : d.includes("threed") ? u.filter(function (e) {
                            return "good_idea" === e.id
                    })[0] : u.filter(function (e) {
                            return "idea" === e.id
                    })[0];
                    var c = e.filter(function (e) {
                            var t = e.fieldId,
                                    r = e.fieldValue.value;
                            return "construction-type" === t && "construction-type__old" === r
                    }).length > 0;
                    return d.includes("repair") && (r += 500 * l, c && (i = .07 * r)),
                    {
                            totalTariffPrice: t,
                            priceForRepair: r,
                            priceForOldFund: i
                    }
            };
            exports.getComplexPrice = o;
            var a = function () {
                    function t() {
                            e(this, t)
                    }
                    return r(t, [{
                            key: "removePseudoStyles",
                            value: function (e) {
                                    e.forEach(function (e) {
                                            var t = e.nextElementSibling;
                                            t.className = t.className.replace(/ pseudoStyle\d+/, "")
                                    })
                            }
                    },
                    {
                            key: "setWidth",
                            value: function (e) {
                                    for (var t = 0, r = 0; r <= e.length - 1; r++) {
                                            var i = e[r].nextElementSibling,
                                                    n = i.offsetWidth;
                                            n > t && (t = n),
                                            i.style.minWidth = t + "px"
                                    }
                            }
                    },
                    {
                            key: "setAfterProp",
                            value: function (e, t) {
                                    this.removePseudoStyles(e);
                                    for (var r = 0; r <= e.length - 1; r++) {
                                            e[r].nextElementSibling.pseudoStyle("after", "left", (100 * (t - r)).toString() + "%")
                                    }
                            }
                    },
                    {
                            key: "initiateInputStyles",
                            value: function () {
                                    var e = this;
                                    document.querySelectorAll(".calcul-field").forEach(function (t) {
                                            var r = t.querySelectorAll('input[class^="toggle-calc"]');
                                            e.setWidth(r),
                                            r.forEach(function (t, i) {
                                                    t.checked && e.setAfterProp(r, i),
                                                    t.addEventListener("click", function (t) {
                                                            return e.setAfterProp(r, i),
                                                            !1
                                                    })
                                            })
                                    })
                            }
                    }]),
                    t
            }();
            exports.RadioInputStyles = a;
    },
    {}],
    "fZ3k": [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                    value: !0
            }),
            exports.
    default = void 0;
            var e = require("../lib/utils.js");

            function t(e) {
                    return n(e) || i(e) || r()
            }
            function r() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
            }
            function i(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }
            function n(e) {
                    if (Array.isArray(e)) {
                            for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                            return r
                    }
            }
            var o = {
                    updateItem: function (e, t) {
                            var r = t.id,
                                    i = t.value,
                                    n = t.label,
                                    o = e.items.findIndex(function (e) {
                                            return e.fieldId === r.substr(0, r.indexOf("__"))
                                    });
                            return e.items[o].fieldValue = {
                                    label: n.trim(),
                                    value: i
                            },
                            e.clicked = !1,
                            e
                    },
                    updateTotalComplexPrice: function (r) {
                            return r.complexPrice = (0, e.getComplexPrice)(t(r.items)),
                            r.clicked = !0,
                            r
                    }
            };
            exports.
    default = o;
    },
    {
            "../lib/utils.js": "WZ76"
    }],
    "vdU8": [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                    value: !0
            }),
            exports.
    default = exports.getState = exports.getAllInputsOfField = exports.getAllFields = void 0;
            var e = require("../lib/utils.js"),
                    t = {
                            field: {
                                    id: "calc-field__",
                                    tittleClass: "field-title"
                            }
                    },
                    l = function () {
                            return document.querySelectorAll("[id^='".concat(t.field.id, "']"))
                    };
            exports.getAllFields = l;
            var r = function (e) {
                    var l = e.id.substr(t.field.id.length);
                    return e.querySelectorAll("[id^='".concat(l, "']"))
            };
            exports.getAllInputsOfField = r;
            var i = function () {
                    var e = [];
                    return l().forEach(function (l) {
                            var i = {},
                                    o = l.id.substr(t.field.id.length),
                                    d = l.querySelector(".".concat(t.field.tittleClass));
                            r(l).forEach(function (e) {
                                    var t = "",
                                            r = "",
                                            o = l.querySelector("label[for^='".concat(e.id, "']"));
                                    "text" === e.getAttribute("type") ? (t = d ? d.textContent : "", r = e.value) : "radio" === e.getAttribute("type") && e.checked && (t = o ? o.textContent : "", r = e.value),
                                    i.fieldValue = {
                                            label: t,
                                            value: r
                                    }
                            }),
                            i.fieldId = o,
                            i.fieldTitle = d ? d.textContent : "",
                            e.push(i)
                    }),
                    e
            };
            exports.getState = i;
            var o = i(),
                    d = {
                            items: o,
                            complexPrice: (0, e.getComplexPrice)(o),
                            clicked: !1
                    };
            exports.
    default = d;
    },
    {
            "../lib/utils.js": "WZ76"
    }],
    "j9I7": [function (require, module, exports) {
            "use strict";

            function e(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            function t(e, t) {
                    for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                            "value" in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
            }
            function n(e, n, r) {
                    return n && t(e.prototype, n),
                    r && t(e, r),
                    e
            }
            Object.defineProperty(exports, "__esModule", {
                    value: !0
            }),
            exports.
    default = void 0;
            var r = function () {
                    function t() {
                            e(this, t),
                            this.events = {}
                    }
                    return n(t, [{
                            key: "subscribe",
                            value: function (e, t) {
                                    return this.events.hasOwnProperty(e) || (this.events[e] = []),
                                    this.events[e].push(t)
                            }
                    },
                    {
                            key: "publish",
                            value: function (e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return this.events.hasOwnProperty(e) ? this.events[e].map(function (e) {
                                            return e(t)
                                    }) : []
                            }
                    }]),
                    t
            }();
            exports.
    default = r;
    },
    {}],
    "YKXV": [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                    value: !0
            }),
            exports.
    default = void 0;
            var t = e(require("../lib/pubsub.js"));

            function e(t) {
                    return t && t.__esModule ? t : {
                    default:
                            t
                    }
            }
            function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            function s(t, e) {
                    for (var n = 0; n < e.length; n++) {
                            var s = e[n];
                            s.enumerable = s.enumerable || !1,
                            s.configurable = !0,
                            "value" in s && (s.writable = !0),
                            Object.defineProperty(t, s.key, s)
                    }
            }
            function a(t, e, n) {
                    return e && s(t.prototype, e),
                    n && s(t, n),
                    t
            }
            var i = function () {
                    function e(s) {
                            n(this, e);
                            var a = this;
                            a.actions = {},
                            a.mutations = {},
                            a.state = {},
                            a.status = "resting",
                            a.events = new t.
                    default,
                            s.hasOwnProperty("actions") && (a.actions = s.actions),
                            s.hasOwnProperty("mutations") && (a.mutations = s.mutations),
                            a.state = new Proxy(s.state || {}, {
                                    set: function (t, e, n) {
                                            return t[e] = n,
                                            a.events.publish("stateChange", a.state),
                                            a.status,
                                            a.status = "resting",
                                            !0
                                    }
                            })
                    }
                    return a(e, [{
                            key: "dispatch",
                            value: function (t, e) {
                                    return "function" != typeof this.actions[t] ? (console.error('Action "'.concat(t, " doesn't exist.")), !1) : (this.status = "action", this.actions[t](this, e), !0)
                            }
                    },
                    {
                            key: "commit",
                            value: function (t, e) {
                                    if ("function" != typeof this.mutations[t]) return !1;
                                    this.status = "mutation";
                                    var n = this.mutations[t](this.state, e);
                                    return this.state = Object.assign(this.state, n),
                                    !0
                            }
                    }]),
                    e
            }();
            exports.
    default = i;
    },
    {
            "../lib/pubsub.js": "j9I7"
    }],
    "wPyC": [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                    value: !0
            }),
            exports.
    default = void 0;
            var e = s(require("./actions.js")),
                    t = s(require("./mutations.js")),
                    r = s(require("./state.js")),
                    u = s(require("./store.js"));

            function s(e) {
                    return e && e.__esModule ? e : {
                    default:
                            e
                    }
            }
            var a = new u.
    default ({
                    actions: e.
            default,
                    mutations:
                    t.
            default,
                    state:
                    r.
            default
            });
            exports.
    default = a;
    },
    {
            "./actions.js": "AxFd",
            "./mutations.js": "fZ3k",
            "./state.js": "vdU8",
            "./store.js": "YKXV"
    }],
    "wgeq": [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                    value: !0
            }),
            exports.
    default = void 0;
            var e = t(require("../store/store.js"));

            function t(e) {
                    return e && e.__esModule ? e : {
                    default:
                            e
                    }
            }
            function r(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var n = function t() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    r(this, t);
                    var s = this;
                    this.render = this.render ||
                    function () {},
                    n.store instanceof e.
            default && n.store.events.subscribe("stateChange", function () {
                            return s.render()
                    }),
                    n.hasOwnProperty("element") && (this.element = n.element)
            };
            exports.
    default = n;
    },
    {
            "../store/store.js": "YKXV"
    }],
    "URKt": [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                    value: !0
            }),
            exports.CountUp = void 0;
            var t = function () {
                    return (t = Object.assign ||
                    function (t) {
                            for (var i, a = 1, s = arguments.length; a < s; a++) for (var n in i = arguments[a]) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
                            return t
                    }).apply(this, arguments)
            },
                    i = function () {
                            function i(i, a, s) {
                                    var n = this;
                                    this.target = i,
                                    this.endVal = a,
                                    this.options = s,
                                    this.version = "2.0.4",
                                    this.defaults = {
                                            startVal: 0,
                                            decimalPlaces: 0,
                                            duration: 2,
                                            useEasing: !0,
                                            useGrouping: !0,
                                            smartEasingThreshold: 999,
                                            smartEasingAmount: 333,
                                            separator: ",",
                                            decimal: ".",
                                            prefix: "",
                                            suffix: ""
                                    },
                                    this.finalEndVal = null,
                                    this.useEasing = !0,
                                    this.countDown = !1,
                                    this.error = "",
                                    this.startVal = 0,
                                    this.paused = !0,
                                    this.count = function (t) {
                                            n.startTime || (n.startTime = t);
                                            var i = t - n.startTime;
                                            n.remaining = n.duration - i,
                                            n.useEasing ? n.countDown ? n.frameVal = n.startVal - n.easingFn(i, 0, n.startVal - n.endVal, n.duration) : n.frameVal = n.easingFn(i, n.startVal, n.endVal - n.startVal, n.duration) : n.countDown ? n.frameVal = n.startVal - (n.startVal - n.endVal) * (i / n.duration) : n.frameVal = n.startVal + (n.endVal - n.startVal) * (i / n.duration),
                                            n.countDown ? n.frameVal = n.frameVal < n.endVal ? n.endVal : n.frameVal : n.frameVal = n.frameVal > n.endVal ? n.endVal : n.frameVal,
                                            n.frameVal = Math.round(n.frameVal * n.decimalMult) / n.decimalMult,
                                            n.printValue(n.frameVal),
                                            i < n.duration ? n.rAF = requestAnimationFrame(n.count) : null !== n.finalEndVal ? n.update(n.finalEndVal) : n.callback && n.callback()
                                    },
                                    this.formatNumber = function (t) {
                                            var i, a, s, e, r, o = t < 0 ? "-" : "";
                                            if (i = Math.abs(t).toFixed(n.options.decimalPlaces), s = (a = (i += "").split("."))[0], e = a.length > 1 ? n.options.decimal + a[1] : "", n.options.useGrouping) {
                                                    r = "";
                                                    for (var l = 0, h = s.length; l < h; ++l) 0 !== l && l % 3 == 0 && (r = n.options.separator + r),
                                                    r = s[h - l - 1] + r;
                                                    s = r
                                            }
                                            return n.options.numerals && n.options.numerals.length && (s = s.replace(/[0-9]/g, function (t) {
                                                    return n.options.numerals[+t]
                                            }), e = e.replace(/[0-9]/g, function (t) {
                                                    return n.options.numerals[+t]
                                            })),
                                            o + n.options.prefix + s + e + n.options.suffix
                                    },
                                    this.easeOutExpo = function (t, i, a, s) {
                                            return a * (1 - Math.pow(2, -10 * t / s)) * 1024 / 1023 + i
                                    },
                                    this.options = t({}, this.defaults, s),
                                    this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber,
                                    this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo,
                                    this.startVal = this.validateValue(this.options.startVal),
                                    this.frameVal = this.startVal,
                                    this.endVal = this.validateValue(a),
                                    this.options.decimalPlaces = Math.max(this.options.decimalPlaces),
                                    this.decimalMult = Math.pow(10, this.options.decimalPlaces),
                                    this.resetDuration(),
                                    this.options.separator = String(this.options.separator),
                                    this.useEasing = this.options.useEasing,
                                    "" === this.options.separator && (this.options.useGrouping = !1),
                                    this.el = "string" == typeof i ? document.getElementById(i) : i,
                                    this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined"
                            }
                            return i.prototype.determineDirectionAndSmartEasing = function () {
                                    var t = this.finalEndVal ? this.finalEndVal : this.endVal;
                                    this.countDown = this.startVal > t;
                                    var i = t - this.startVal;
                                    if (Math.abs(i) > this.options.smartEasingThreshold) {
                                            this.finalEndVal = t;
                                            var a = this.countDown ? 1 : -1;
                                            this.endVal = t + a * this.options.smartEasingAmount,
                                            this.duration = this.duration / 2
                                    } else this.endVal = t,
                                    this.finalEndVal = null;
                                    this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
                            },
                            i.prototype.start = function (t) {
                                    this.error || (this.callback = t, this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
                            },
                            i.prototype.pauseResume = function () {
                                    this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF),
                                    this.paused = !this.paused
                            },
                            i.prototype.reset = function () {
                                    cancelAnimationFrame(this.rAF),
                                    this.paused = !0,
                                    this.resetDuration(),
                                    this.startVal = this.validateValue(this.options.startVal),
                                    this.frameVal = this.startVal,
                                    this.printValue(this.startVal)
                            },
                            i.prototype.update = function (t) {
                                    cancelAnimationFrame(this.rAF),
                                    this.startTime = null,
                                    this.endVal = this.validateValue(t),
                                    this.endVal !== this.frameVal && (this.startVal = this.frameVal, this.finalEndVal || this.resetDuration(), this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count))
                            },
                            i.prototype.printValue = function (t) {
                                    var i = this.formattingFn(t);
                                    "INPUT" === this.el.tagName ? this.el.value = i : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = i : this.el.innerHTML = i
                            },
                            i.prototype.ensureNumber = function (t) {
                                    return "number" == typeof t && !isNaN(t)
                            },
                            i.prototype.validateValue = function (t) {
                                    var i = Number(t);
                                    return this.ensureNumber(i) ? i : (this.error = "[CountUp] invalid start or end value: " + t, null)
                            },
                            i.prototype.resetDuration = function () {
                                    this.startTime = null,
                                    this.duration = 1e3 * Number(this.options.duration),
                                    this.remaining = this.duration
                            },
                            i
                    }();
            exports.CountUp = i;
    },
    {}],
    "xMro": [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                    value: !0
            }),
            exports.
    default = void 0;
            var e = i(require("../lib/component.js")),
                    r = i(require("../store/index.js")),
                    t = require("../lib/countUp.min.js"),
                    o = i(require("../config.js")),
                    n = require("../lib/utils");

            function i(e) {
                    return e && e.__esModule ? e : {
                    default:
                            e
                    }
            }
            function a(e) {
                    return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                    function (e) {
                            return typeof e
                    } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
            }
            function l(e, r) {
                    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }
            function c(e, r) {
                    for (var t = 0; t < r.length; t++) {
                            var o = r[t];
                            o.enumerable = o.enumerable || !1,
                            o.configurable = !0,
                            "value" in o && (o.writable = !0),
                            Object.defineProperty(e, o.key, o)
                    }
            }
            function u(e, r, t) {
                    return r && c(e.prototype, r),
                    t && c(e, t),
                    e
            }
            function f(e, r) {
                    return !r || "object" !== a(r) && "function" != typeof r ? p(e) : r
            }
            function p(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
            }
            function d(e) {
                    return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
            }
            function s(e, r) {
                    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(r && r.prototype, {
                            constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                            }
                    }),
                    r && h(e, r)
            }
            function h(e, r) {
                    return (h = Object.setPrototypeOf ||
                    function (e, r) {
                            return e.__proto__ = r,
                            e
                    })(e, r)
            }
            var y = function (i) {
                    function a() {
                            return l(this, a),
                            f(this, d(a).call(this, {
                                    store: r.
                            default,
                                    element:
                                    document.querySelector("#calculator-result")
                            }))
                    }
                    return s(a, e.
            default),
                    u(a, [{
                            key: "render",
                            value: function () {
                                    var e, i = this,
                                            a = r.
                                    default.state,
                                            l = a.complexPrice,
                                            c = a.items,
                                            u = this.element.querySelector(".result-tariff-full"),
                                            f = this.element.querySelector(".result-tariff-empty"),
                                            p = this.element.querySelector("#tariff-price"),
                                            d = this.element.querySelector("#tariff-price-custom"),
                                            s = this.element.querySelectorAll(".tariff-offer-template"),
                                            h = this.element.querySelector(".tariff-offer-custom"),
                                            y = c.find(function (e) {
                                                    return "area-size" === e.fieldId
                                            });
                                    y && (e = parseInt(y.fieldValue.value || 0));
                                    var m = 0;
                                    if (l.hasOwnProperty("totalTariffPrice")) if (u.hidden = !1, f.hidden = !0, d.hidden = !0, [].forEach.call(s, function (e) {
                                            e.hidden = !0
                                    }), h.hidden = !0, this.element.querySelector("#tariff-name").innerHTML = l.totalTariffPrice.title, this.element.querySelector("#offer-".concat(l.totalTariffPrice.id, "-tmpl")).hidden = !1, n.TARIFFS.forEach(function (r) {
                                            var t = i.element.querySelectorAll("#".concat(r.id, "-tariff-price"));
                                            t && [].forEach.call(t, function (t) {
                                                    t.innerHTML = (0, n.priceTariffByArea)(e).filter(function (e) {
                                                            return e.id === r.id
                                                    })[0].total
                                            })
                                    }), e && e > 100) p.hidden = !0,
                                    d.hidden = !1,
                                    [].forEach.call(s, function (e) {
                                            e.hidden = !0
                                    }),
                                    h.hidden = !1;
                                    else {
                                            p.hidden = !1;
                                            var b = new t.CountUp("tariff-price", l.totalTariffPrice.total, {
                                                    duration: 1.5,
                                                    separator: " ",
                                                    suffix: " "
                                            });
                                            m += l.totalTariffPrice.total,
                                            b.error ? console.error(b.error) : b.start()
                                    } else u.hidden = !0,
                                    f.hidden = !1;
                                    if (l.hasOwnProperty("priceForRepair") && l.priceForRepair > 0) {
                                            this.element.querySelector(".result-repair").hidden = !1;
                                            var v = {
                                                    duration: 2,
                                                    separator: " ",
                                                    suffix: " "
                                            },
                                                    F = new t.CountUp("repair-price", l.priceForRepair, v);
                                            if (F.error ? console.error(F.error) : F.start(), l.hasOwnProperty("priceForOldFund") && l.priceForOldFund > 0) {
                                                    this.element.querySelectorAll(".repair-with-old-fund").forEach(function (e) {
                                                            return e.hidden = !1
                                                    });
                                                    var O = new t.CountUp("repair-old-fund-price", l.priceForOldFund, v);
                                                    O.error ? console.error(O.error) : O.start()
                                            } else this.element.querySelectorAll(".repair-with-old-fund").forEach(function (e) {
                                                    return e.hidden = !0
                                            });
                                            var w = l.priceForRepair + l.priceForOldFund,
                                                    S = w * o.
                                            default.exchangeRate;
                                            m += S;
                                            var q = new t.CountUp("result-repair-total-usd", w, v),
                                                    P = new t.CountUp("result-repair-total-grn", S, v);
                                            q.error ? console.error(q.error):
                                            q.start(),
                                            P.error ? console.error(P.error) : P.start()
                                    } else this.element.querySelector(".result-repair").hidden = !0;
                                    0 === m && (m = 500 * e);
                                    var T = new t.CountUp("total-price-grn", m, {
                                            duration: 2,
                                            separator: " ",
                                            suffix: " "
                                    });
                                    T.error ? console.error(T.error):
                                    T.start();
                                    var x = "<p>----------</p><h4>Данные калькулятора</h4>";
                                    c.forEach(function (e) {
                                            var r = e.fieldValue,
                                                    t = r.value,
                                                    o = r.label,
                                                    n = e.fieldTitle;
                                            x += "<p>".concat(n, ': "').concat(o && o !== n ? o : t, '"</p>')
                                    }),
                                    x += "<p>-----</p>",
                                    x += "<p>Выбранный тариф: ".concat(l.totalTariffPrice.title, " (").concat(l.totalTariffPrice.total, " грн)</p>"),
                                    x += "<p>Ремонт: ".concat(l.priceForRepair * o.
                            default.exchangeRate, " грн</p>"),
                                    l.hasOwnProperty("priceForOldFund") && l.priceForOldFund > 0 && (x += "<p>+ За старый фонд: ".concat(l.priceForOldFund * o.
                            default.exchangeRate, " грн</p>"), x += "<p>Итого за РЕМОНТ: ".concat((l.priceForOldFund + l.priceForRepair) * o.
                            default.exchangeRate, " грн</p>"));
                                    var g = (0, n.priceTariffByArea)(e).filter(function (e) {
                                            return e.id === l.totalTariffPrice.altId
                                    })[0];
                                    g && (x += "<p>-----</p>", x += "<p>Альтернатива этому тарифу: ".concat(g.title, " за ").concat(g.total, " грн</p>")),
                                    x += "<p>-----</p>",
                                    x += "<p>Итого за ВСЁ: ".concat(m, " грн</p>"),
                                    window.cust = x

                                    

                                    let myCustomText = x;
                                    let nameOfTarif = l.totalTariffPrice.title;
                                    let resTariff = l.totalTariffPrice.total;
                                    let tarifPrice = l.priceForRepair;
                                    let tarifOfferTermin = s;

                                    console.log('Result' + myCustomText);
                                    console.log('Имя тарифа' + nameOfTarif);
                                    console.log('Выбранный тариф: ' + resTariff );
                                    console.log('Ремонт: ' + tarifPrice );
                            }
                    }]),
                    a
                    
            }();
            exports.
    default = y;
    },
    {
            "../lib/component.js": "wgeq",
            "../store/index.js": "wPyC",
            "../lib/countUp.min.js": "URKt",
            "../config.js": "mRRC",
            "../lib/utils": "WZ76"
    }],
    "ecrM": [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                    value: !0
            }),
            exports.
    default = void 0;
            var e = r(require("../lib/component.js")),
                    t = r(require("../store/index.js")),
                    n = require("../lib/countUp.min.js"),
                    o = r(require("../config.js"));

            function r(e) {
                    return e && e.__esModule ? e : {
                    default:
                            e
                    }
            }
            function u(e) {
                    return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                    function (e) {
                            return typeof e
                    } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
            }
            function l(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            function i(e, t) {
                    for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1,
                            o.configurable = !0,
                            "value" in o && (o.writable = !0),
                            Object.defineProperty(e, o.key, o)
                    }
            }
            function c(e, t, n) {
                    return t && i(e.prototype, t),
                    n && i(e, n),
                    e
            }
            function a(e, t) {
                    return !t || "object" !== u(t) && "function" != typeof t ? s(e) : t
            }
            function s(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
            }
            function f(e) {
                    return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
            }
            function d(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                            }
                    }),
                    t && y(e, t)
            }
            function y(e, t) {
                    return (y = Object.setPrototypeOf ||
                    function (e, t) {
                            return e.__proto__ = t,
                            e
                    })(e, t)
            }
            var p = function (n) {
                    function o() {
                            return l(this, o),
                            a(this, f(o).call(this, {
                                    store: t.
                            default,
                                    element:
                                    document.querySelector("#calculate-button")
                            }))
                    }
                    return d(o, e.
            default),
                    c(o, [{
                            key: "render",
                            value: function () {
                                    var e, n = t.
                            default.state.items.find(function (e) {
                                            return "area-size" === e.fieldId
                                    });
                                    if (n && (e = parseInt(n.fieldValue.value || 0)), t.
                            default.state.clicked) {
                                            if (0 === e) return this.element.style.display = "block",
                                            document.querySelector("#calculator-result").hidden = !0,
                                            document.getElementById("calc-field__area-size").scrollIntoView({
                                                    behavior: "smooth"
                                            }),
                                            document.getElementById("area-size__input").focus(),
                                            null;
                                            this.element.style.display = "none",
                                            document.querySelector("#calculator-result").hidden = !1,
                                            document.getElementById("calculator-result").scrollIntoView({
                                                    behavior: "smooth"
                                            })
                                    } else this.element.style.display = "block",
                                    document.querySelector("#calculator-result").hidden = !0
                            }
                    },
                    {
                            key: "setEventHandler",
                            value: function () {
                                    this.element.addEventListener("click", function () {
                                            t.
                                    default.dispatch("updateTotalComplexPrice")
                                    })
                            }
                    }]),
                    o
            }();
            exports.
    default = p;
    },
    {
            "../lib/component.js": "wgeq",
            "../store/index.js": "wPyC",
            "../lib/countUp.min.js": "URKt",
            "../config.js": "mRRC"
    }],
    "d6sW": [function (require, module, exports) {
            "use strict";
            var e = i(require("./config.js")),
                    t = i(require("./store/index.js")),
                    n = i(require("./components/result.js")),
                    r = require("./store/state.js"),
                    o = i(require("./lib/component.js")),
                    u = require("./lib/utils.js"),
                    l = i(require("./components/calculateButton.js"));

            function i(e) {
                    return e && e.__esModule ? e : {
                    default:
                            e
                    }
            }
            function c(e) {
                    return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                    function (e) {
                            return typeof e
                    } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
            }
            function a(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            function f(e, t) {
                    for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                            "value" in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
            }
            function s(e, t, n) {
                    return t && f(e.prototype, t),
                    n && f(e, n),
                    e
            }
            function d(e, t) {
                    return !t || "object" !== c(t) && "function" != typeof t ? p(e) : t
            }
            function p(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
            }
            function y(e) {
                    return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
            }
            function m(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                            }
                    }),
                    t && b(e, t)
            }
            function b(e, t) {
                    return (b = Object.setPrototypeOf ||
                    function (e, t) {
                            return e.__proto__ = t,
                            e
                    })(e, t)
            }
            var h = {
                    _current: 0,
                    getNew: function () {
                            return this._current++,
                            this._current
                    }
            };
            HTMLElement.prototype.pseudoStyle = function (e, t, n) {
                    var r = document.head || document.getElementsByTagName("head")[0],
                            o = document.getElementById("pseudoStyles") || document.createElement("style");
                    o.id = "pseudoStyles";
                    var u = "pseudoStyle" + h.getNew();
                    return this.className += " " + u,
                    o.innerHTML += " ." + u + ":" + e + "{" + t + ":" + n + "}",
                    r.appendChild(o),
                    this
            };
            var v = [];
            (0, r.getAllFields)().forEach(function (n) {
                    (0, r.getAllInputsOfField)(n).forEach(function (n) {
                            var r = function (r) {
                                    function u() {
                                            return a(this, u),
                                            d(this, y(u).call(this, {
                                                    store: t.
                                            default,
                                                    element:
                                                    n
                                            }))
                                    }
                                    return m(u, o.
                            default),
                                    s(u, [{
                                            key: "render",
                                            value: function () {}
                                    },
                                    {
                                            key: "setEventHandler",
                                            value: function () {
                                                    var n = this,
                                                            r = t.
                                                    default.state.items,
                                                            o = r.findIndex(function (e) {
                                                                    return e.fieldId === n.element.id.substr(0, n.element.id.indexOf("__"))
                                                            });
                                                    if (!r[o].fieldValue.label && !r[o].fieldValue.value) {
                                                            var u = document.querySelector("label[for='".concat(n.element.id, "']"));
                                                            t.
                                                    default.dispatch("updateItem", {
                                                                    id: n.element.id,
                                                                    value: n.element.value,
                                                                    label: u && "text" !== n.element.type ? u.textContent : ""
                                                            })
                                                    }
                                                    n.element.addEventListener("change", function () {
                                                            var r = document.querySelector("#".concat(n.element.id)),
                                                                    o = document.querySelector("label[for='".concat(n.element.id, "']"));
                                                            t.
                                                    default.dispatch("updateItem", {
                                                                    id: n.element.id,
                                                                    value: r.value,
                                                                    label: o ? o.textContent : ""
                                                            }),
                                                            e.
                                                    default.byClick || t.
                                                    default.dispatch("updateTotalComplexPrice")
                                                    })
                                            }
                                    }]),
                                    u
                            }();
                            v.push(r)
                    })
            }),
            v.forEach(function (e) {
                    (new e).setEventHandler()
            });
            var g = new u.RadioInputStyles;
            if (g.initiateInputStyles(), (new n.
    default).render(), e.
    default.byClick) {
                    var S = new l.
            default;
                    S.render(),
                    S.setEventHandler()
            }
            var E = "abcdefg";
            document.querySelectorAll('[id^="toggle-button"]').forEach(function (e, t) {
                    e.addEventListener("click", function () {
                            document.querySelector(".section5.collapsible.".concat(E.charAt(t))).classList.toggle("collapsed")
                          
                    });

                   
            });
    },
    {
            "./config.js": "mRRC",
            "./store/index.js": "wPyC",
            "./components/result.js": "xMro",
            "./store/state.js": "vdU8",
            "./lib/component.js": "wgeq",
            "./lib/utils.js": "WZ76",
            "./components/calculateButton.js": "ecrM"
    }]
}, {}, ["d6sW"], null)
//# sourceMappingURL=/calc/main.js.map