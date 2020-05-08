///////////////////////////////// OBJECT DESTRUCTURING /////////////////////////////////

const user = {
  _name: 'John',
  _surname: 'Smith',
  _age: 47
}

// per riassegnare delle varibili partendo da 'user' si può fare...
const nome = user._name;
const cognome = user._surname;
const età = user._age;

// ...Oppure....

const { _name, _surname, _age } = user;

// ...Oppure ancora assegnando un altro nome alle proprità come....

const { _name: altroNome, _surname: altroCognome, _age: altraEtà } = user;


// ...Oppure ancora assegnando un altro nome alle proprità + Valori di DEFAULT come....


const { _name: altroNome_1 = '', indirizzo = '', _surname: altroCognome_1 = '', _age: altraEtà_1 = 10 } = {
  _name: 'John',
  _surname: 'Snow'
};



///////////////////////////////// ARRAY DESTRUCTURING /////////////////////////////////

const numbersUpToFive = 'one,two,three,four,five';

const [uno, due, tre] = numbersUpToFive.split(',');

const [_uno, _due, _tre, ...numeriRimanenti] = numbersUpToFive.split(',');


///////////////////////////////// SPREAD OPERATOR /////////////////////////////////


const _primo = [1, 2];
const _secondo = ['valore', 4];

const mixed = [..._primo, 'VALORE', ..._secondo];


const __obj = {
  nome: 'Mario'
};

const __obj_ = { ...__obj, cognome: 'Bianchi' };


///////////////////////////////// REST OPERATOR CON GENERICS /////////////////////////////////

function rest<T>(xxx: T, ...tutto_il_resto: T[]): T[] {
  console.log(tutto_il_resto);
  return [];
}

rest<string>('due');
