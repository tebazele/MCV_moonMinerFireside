export class Upgrade {
  constructor(name, price, quantity, multiplier, img) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.multiplier = multiplier;
    this.img = img;
  }

  get UpgradeCard() {
    return `
     <div class="col-3">
            <div onclick="app.UpgradesController.buyUpgrade('${this.name}')" class="card p-3 hand">
              <img src=${this.img} class="img-fluid"/>
              <h6>Name: ${this.name}</h6>
              <p>Price: ${this.price}</p>
              <p>Quantity: ${this.quantity}</p>
              <p>Multiplier: ${this.multiplier}</p>
            </div>
          </div>
    `;
  }
}
