class Estudiante {
    #llave = 1330001; // Declarar la llave como una propiedad privada
  
    constructor(nombre, carrera) {
      this._nombre = nombre;
      this._carrera = carrera;
    }
  
    // Método para generar un ID aleatorio
    generaID() {
      return Math.floor(Math.random() * 10 * this.#llave);
    }
  
    // Getters y setters para el nombre
    get nombre() {
      return this._nombre;
    }
  
    set nombre(valor) {
      this._nombre = valor;
    }
  
    // Getters y setters para la carrera
    get carrera() {
      return this._carrera;
    }
  
    set carrera(valor) {
      this._carrera = valor;
    }
  }
  
  const estudiante1 = new Estudiante('Hayberth', 'Programacion');
  console.log(estudiante1.generaID());
  console.log(estudiante1.nombre);
  estudiante1.nombre = 'Miguel';
  console.log(estudiante1.nombre);
  console.log(estudiante1.carrera);
  
  const estudiante2 = new Estudiante('Camilo', 'Programacion');
  
  // Herencia
  
  class EstudianteParcial extends Estudiante {
    constructor(nombre, carrera, tiempo) {
      super(nombre, carrera);
      this._tiempo = tiempo;
    }
  
    // Getters y setters para el tiempo
    get tiempo() {
      return this._tiempo;
    }
  
    set tiempo(valor) {
      this._tiempo = valor;
    }
  }
  
  const estudiante03 = new EstudianteParcial('Andres', 'Contaduria', 'Diurno');
  console.table(estudiante03);
  console.log(estudiante03.generaID());