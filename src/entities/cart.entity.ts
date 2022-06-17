import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import { v4 as uuid } from "uuid";
import { Product } from "./product.entity";

@Entity()
export class Cart {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column("float")
  subTotal: number;

  @ManyToMany((type) => Product, {
    eager: true,
  })
  @JoinTable()
  products: Product[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
