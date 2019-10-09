interface Observer {
  //van a recibir actualización de la información
  update: (data: any) => void
}

interface Subject {
  //2 funciones
  subscribe: (observer: Observer) => void
  unsubscribe: (observer: Observer) => void
}

class BitcoinPrice implements Subject {
  //va a estar recibiendo los cambios de precios e informando a sus suscriptores
  observers: Observer[] = [];

  constructor() {
    const el: HTMLInputElement = document.querySelector("#value");
    el.addEventListener('input', () => {
      this.notify(el.value);
    })
  }

  subscribe (observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    //encontrar el índice del observer, dónde está
    const index = this.observers.findIndex(obs => {
      return obs === observer
    })

    this.observers.splice(index, 1);
  }

  // cuando el precio cambie se debe notificar a los suscriptores
  notify(data: any) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class PriceDisplay implements Observer {
  //una vez teniendo el precio, hay que mostrarlo
  private el: HTMLElement;

  constructor() {
    this.el = document.querySelector('#price')
  }

  update(data: any) {
    this.el.innerText = data;
  }
}

// crear instancias para poder suscribirlas
const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);

//crear un timeout después de 5 segundos deje de estar conectado

setTimeout(
  () => value.unsubscribe(display), 5000
)