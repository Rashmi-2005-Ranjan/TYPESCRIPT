abstract class Shape {
  constructor(protected color: string) {}
  abstract calculateArea(): number;
  abstract displayArea: () => void;
}

class Circle extends Shape {
  constructor(protected color: string, protected raius: number) {
    super(color);
  }

  public calculateArea(): number  {
    return Math.PI * (this.raius * this.raius);
  }
  displayArea = (): void => {
    console.log(`The area of the circle is ${this.calculateArea()}`);
  };
}

