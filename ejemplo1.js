class libros {
    constructor(autor,nombre,numerodepaginas ){
        this.autor=autor
        this.nombre=nombre
        this.numerodepaginas=numerodepaginas
    }
    set nombrelibro(nombre1){

    }
    get mostrarlibro(){
        

    } 
}
let libro1=new libros ("daniel","cirm","3650")
console.log(libro1)
let libro2=new libros ("teo","fan","341")
console.log(libro2)
let libro3=new libros ("dan ","secs","650")
console.log(libro3)