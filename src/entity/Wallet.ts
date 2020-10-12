import { Entity, OneToOne, JoinColumn, OneToMany } from 'typeorm'
import { BaseEntity } from '../typeorm/BaseEntity'
import { IsNotEmptyRelation } from '../typeorm/decorators/IsNotEmptyRelation'
import { Person } from './Person'
import { WalletTransaction } from './WalletTransaction'

@Entity({ name: 'wallets' })
export class Wallet extends BaseEntity {
  @OneToOne(() => Person, person => person.wallet)
  @JoinColumn()
  @IsNotEmptyRelation()
  person: Person

  @OneToMany(() => WalletTransaction, walletTransaction => walletTransaction.wallet)
  transactions!: WalletTransaction[]
}
