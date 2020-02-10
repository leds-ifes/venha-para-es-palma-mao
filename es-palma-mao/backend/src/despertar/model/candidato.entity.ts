import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class candidatos{
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable:true})
    nome: string

    @Column({nullable:true})
    data_nasc: string

    @Column({nullable:true})
    cpf: string

    @Column({nullable:true})
    profissoes: string


}