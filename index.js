const { clear } = require('console');
const { userInfo } = require('os');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './sqlite.db'
});

sequelize
    .authenticate()
    .then(function () {
        console.log ('conectado a sqlitesqlite');
    })
    .catch(function () {
    console.error('no se pudeo conectar a sqlitesqlite');
    })
console.log('estableciendo conexion...');

//aqui termina el llamado a sqlite 
// iniciamos tabla 

const User = sequelize.define("reservacion", {
    cogigo: DataTypes.STRING(5),
    programa: DataTypes.STRING(50),
    duracion: DataTypes.NUMBER(6),
    salida: DataTypes.DATEONLY,
    regreso: DataTypes.DATEONLY,
    visitas: DataTypes.STRING(200),
    habitacion2: DataTypes.NUMBER(6),
    habitacion3: DataTypes.NUMBER(6),
    habitacion4: DataTypes.NUMBER(6),
    habitacionMNR: DataTypes.NUMBER(6),
    impuestos: DataTypes.NUMBER(6),
    suplemento: DataTypes.NUMBER(6),
    moneda: DataTypes.STRING(3),
    espacio: DataTypes.STRING(10),
    numeroPasajeros: DataTypes.NUMBER(6),
    numeroReserva: DataTypes.NUMBER(6),
});

sequelize
    .sync()
    .then(function (){
        console.log('la base de datos esta sinclonizada')
    })
    .catch (function(){
        console.error('ups no se pudo sinconizar')
    });

// insertamos registro de un programa 

User.create({

    codigo: '10005',
    programa: 'cancun',
    duracion: 5,
    salida: new Date (2022, 11, 1 ),
    regreso: new Date (2022, 11, 5),
    visitas: 'xcaret y xelha',
    habitacion2: 6500,
    habitacion3: 7000,
    habitacion4: 7500,
    habitacionMNR: 1500,
    impuestos: 250,
    suplemento: 1000,
    moneda: 'MXN',
    espacio: 00000,
    numeroPasajeros:6,
    numeroReserva: 001,
})
.then(function(){
    console.log('registro exitoso');
})
.catch(function(){
    console.log('no se pudo crear el registro');
});

