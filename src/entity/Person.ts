import { Entity, Column, OneToOne } from 'typeorm'
import { BaseEntity } from '../typeorm/BaseEntity'
import { Wallet } from './Wallet'

@Entity({ name: 'people' })
export class Person extends BaseEntity {
    @Column()
    username: string

    @Column()
    email: string

    @Column()
    password: string

    @OneToOne(() => Wallet, wallet => wallet.person)
    wallet: Wallet
}
