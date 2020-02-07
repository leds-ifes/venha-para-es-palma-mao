import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Concurso {
    @PrimaryGeneratedColumn()
    id: number 

    @Column({nullable:true})
    orgao: string

    @Column({nullable:true})
    edital: string

    @Column({nullable:true})
    codigo_do_concurso: string

    @Column({nullable:true})
    lista_de_vagas: string

}