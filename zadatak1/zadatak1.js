"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Auto_1 = require("./Auto");
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(model, brzina, brTockova, snagaMotora, brVrata) {
        return _super.call(this, model, brzina, brTockova, snagaMotora, brVrata) || this;
    }
    BMW.prototype.kretanje = function () {
        console.log("BMW se krece " + this.brzina + " km/h");
    };
    return BMW;
}(Auto_1.Auto));
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes(model, brzina, brTockova, snagaMotora, brVrata) {
        return _super.call(this, model, brzina, brTockova, snagaMotora, brVrata) || this;
    }
    Mercedes.prototype.kretanje = function () {
        console.log("Mercedes se krece brzinom " + this.brzina + " km/h");
    };
    return Mercedes;
}(Auto_1.Auto));
var Seat = /** @class */ (function (_super) {
    __extends(Seat, _super);
    function Seat(model, brzina, brTockova, snagaMotora, brVrata) {
        return _super.call(this, model, brzina, brTockova, snagaMotora, brVrata) || this;
    }
    Seat.prototype.kretanje = function () {
        console.log("Seat se krece brzinom " + this.brzina + " km/h");
    };
    return Seat;
}(Auto_1.Auto));
var bmw = new BMW("M320", 150, 4, 100, 5);
var mercedes = new Mercedes("S class", 140, 4, 100, 5);
var seat = new Seat("Ateca", 100, 4, 100, 5);
bmw.kretanje();
mercedes.kretanje();
seat.kretanje();
