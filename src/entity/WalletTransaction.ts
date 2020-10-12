import { Column, Entity, ManyToOne } from 'typeorm'
import { BaseEntity } from '../typeorm/BaseEntity'
import { IsNotEmptyRelation } from '../typeorm/decorators/IsNotEmptyRelation'
import { TransactionType } from '../typeorm/EntityEnums'
import { Wallet } from './Wallet'

@Entity({ name: 'wallet_transactions' })
export class WalletTransaction extends BaseEntity {
  @Column()
  label: string

  @Column({ type: 'int' })
  value: number

  @Column({ type: 'enum', enum: TransactionType, nullable: false })
  transactionType: TransactionType

  @ManyToOne(() => Wallet, wallet => wallet.transactions)
  @IsNotEmptyRelation()
  wallet: Wallet
}
