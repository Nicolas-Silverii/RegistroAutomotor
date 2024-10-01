"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = exports.Moto = exports.Auto = void 0;
var vehiculo_1 = require("./vehiculo");
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(marca, modelo, anio, cantidadPuertas, patente) {
        var _this = _super.call(this, marca, modelo, anio, patente) || this;
        _this.cantidadPuertas = cantidadPuertas;
        return _this;
    }
    Auto.prototype.getCantidadPuertas = function () {
        return this.cantidadPuertas;
    };
    return Auto;
}(vehiculo_1.Vehiculo));
exports.Auto = Auto;
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, modelo, anio, cilindrada, patente) {
        var _this = _super.call(this, marca, modelo, anio, patente) || this;
        _this.cilindrada = cilindrada;
        return _this;
    }
    Moto.prototype.getCilindrada = function () {
        return this.cilindrada;
    };
    return Moto;
}(vehiculo_1.Vehiculo));
exports.Moto = Moto;
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(marca, modelo, anio, capacidadCarga, patente) {
        var _this = _super.call(this, marca, modelo, anio, patente) || this;
        _this.capacidadCarga = capacidadCarga;
        return _this;
    }
    Camion.prototype.getCapacidadCarga = function () {
        return this.capacidadCarga;
    };
    return Camion;
}(vehiculo_1.Vehiculo));
exports.Camion = Camion;
