import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class concursos{
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable:true})
    orgao: string

    @Column({nullable:true})
    edital: string

    @Column({nullable:true})
    codigo_do_curso: string

    @Column({nullable:true})
    vagas: string


}