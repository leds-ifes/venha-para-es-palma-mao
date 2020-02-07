import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Candidato {
    @PrimaryGeneratedColumn()
    id: number 

    @Column({nullable:true})
    nome: string

    @Column({nullable:true})
    data_de_nascimento: Date

    @Column({nullable:true})
    cpf: string

    @Column({nullable:true})
    profissoes: string

}