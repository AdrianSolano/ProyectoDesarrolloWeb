/*
 * Todo esto esta completamente sujeto a cambios futuros y no se deberia tomar encuenta hasta tener el resultado final.
 * Aún no se utilizado npm en este proyecto.
 * Faltan clases y metodos.
 * En github no hay una explicacion en si de este proyecto.
 */

class carrosDeCombate{
    //array de carrosDeCombate
    constructor(nombre,nacion,entradaEnServicio,tipo){
        this.nombre=nombre;
        this.nacion=nacion;
        this.entradaEnServicio=entradaEnServicio;
        this.tipo=tipo;
        
    }
    get nombre() {
        return this._nombre;
    }
    get nacion() {
        return this._nacion;
    }
    get entradaEnServicio() {
        return this._entradaEnServicio;
    }
    get tipo(){
        return this._tipo;
    }
    set nombre(nombre) {
        this._nombre=nombre;
    }
    set nacion(nacion) {
        this._nacion=nacion;
    }
    set entradaEnServicio(entradaEnServicio) {
        this._entradaEnServicio=entradaEnServicio;
    }
    set tipo(tipo) {
        this._tipo=tipo;
    }

    MostrarCarrosDeCombateLog(){
        return " Nombre CarrosDeCombate: "+this.nombre+" nacion: "+this.nacion+ " Entrada en servicio: "+this.entradaEnServicio + " Tipo: "+this.tipo;
    }


}

class home{
    //arrays
    constructor(nombre,cuentas,carrosDeCombate){
        this.nombre=nombre;
        this.cuentas=cuentas;
        this.carrosDeCombate=carrosDeCombate;
    }
    get nombre() {
        return this._nombre;
    }
    get cuentas() {
        return this._cuentas;
    }
    get carrosDeCombate() {
        return this._carrosDeCombate;
    }
    set nombre(nombre) {
        this._nombre=nombre;
    }
    set cuentas(cuentas) {
        this._cuentas=cuentas;
    }
    set carrosDeCombate(carrosDeCombate) {
        this._carrosDeCombate=carrosDeCombate;
    }
   
    mostrarHomeLog(){
        return " Home: "+this.nombre+" cuentas: "+this.cuentas+ " CarrosDeCombate: "+ this.carrosDeCombate;
    }
    addCarrosDeCombate(carrosDeCombate){

    }
    add(){

    }
    borrarCarrosDeCombate(carrosDeCombate){

    }
    borrarCuentas(){

    }
    ordenarCarrosDeCombate(){

    }
    buscarCarrosDeCombate(){

    }


}

class usuario{
    constructor(nombre,telefono,gustos){
        this.nombre=nombre;
        this.telefono=telefono;
        this.gustos=gustos;
    }
    get nombre() {
        return this._nombre;
    }
    get telefono() {
        return this._telefono;
    }
    get gustos() {
        return this._gustos;
    }
    set nombre(nombre) {
        this._nombre=nombre;
    }
    set telefono(telefono) {
        this._telefono=telefono;
    }
    set gustos(gustos) {
        this._gustos=gustos;
    }

}




