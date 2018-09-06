import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const peoples = [
      { dni: 11268547, name: 'Mr. Nice Rodriguez', bios: "Es una persona divertida,sociable..." },
      { dni: 12268547, name: 'Narciso Bustos', bios: "Es una persona aburrida,sociable..." },
      { dni: 13268547, name: 'Belen Puebla', bios: "Es una persona empatica,sociable..." },
      { dni: 14268547, name: 'Celeste Nieva', bios: "Es una persona sonriente,sociable..." },
      { dni: 15268547, name: 'Magui Rosales', bios: "Es una persona tranquila,sociable..." },
      { dni: 16268547, name: 'Ruben Flores', bios: "Es una persona kamikaze,sociable..." },
      { dni: 17268547, name: 'Dayana Gonzales', bios: "Es una persona brillante,sociable..." },
      { dni: 18268547, name: 'Misael Juares', bios: "Es una persona atenta,sociable..." },
      { dni: 33577991, name: 'Mariano González', bios:"Es una persona interesada en el desarrollo del software que..."},
      { dni: 20268547, name: 'Tornado', bios: "Es una persona amable,sociable..." }
    ];
    return {peoples};
  }
}