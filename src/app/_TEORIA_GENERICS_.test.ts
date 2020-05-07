
//SPIEGAZIONE DI BASE DEI GENERICS + CLASSI & INTERFACCE

abstract class Automobile {
  constructor(private marca: string, private prezzo: number) { }
}

class Audi extends Automobile {

  constructor(marca: string, prezzo: number, private modello: string) {
    super(marca, prezzo);
  }

}

interface Frutto {
  nome: string;
}

class Mela implements Frutto {

  constructor(public nome: string, private prezzo: number) { }

}

class Lista<T> {

  private lista: T[];

  aggiungi(elemento: T): void {
    this.lista = [...this.lista, elemento]; //ES6
  }

  getLlista(): T[] {
    return this.lista;
  }

}

const listaFrutta: Lista<Frutto> = new Lista<Frutto>();

const listaMacchineAziendali: Lista<Automobile> = new Lista<Automobile>();

const mela: Frutto = new Mela('mela', 2.99);

//const cigliegia = new Frutto('cigliegia', 4.99);

const macchinaAziendale: Automobile = new Audi('Audi', 40000, 'A3');

//listaFrutta.aggiungi(macchinaAziendale);

listaFrutta.aggiungi(mela);

listaMacchineAziendali.aggiungi(macchinaAziendale);
