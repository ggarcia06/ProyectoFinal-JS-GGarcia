export class Equipos{
    constructor(caracteristicas){
        const { numeroSerie , modelo , tipo , numeroChasis , proximoService , url } = caracteristicas;
        this.numeroSerie = numeroSerie;
        this.modelo = modelo;
        this.tipo = tipo;
        this.numeroChasis = numeroChasis;
        this.proximoService = proximoService;
        this.url = url;
    }
}