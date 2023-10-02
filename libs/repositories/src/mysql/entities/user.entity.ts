import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "usuario" })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({ length: 200, default: '0' })
    nome: string;

    @Column({ length: 1, charset: 'utf8', default: '0' })
    sexo: string;

    @Column({ length: 12, charset: 'utf8', nullable: true })
    data_nascimento: string;

    @Column({ length: 200, collation: 'utf8_unicode_ci', unique: true, nullable: false, default: '0' })
    email: string;

    @Column({ length: 50, charset: 'utf8', default: '0' })
    usuario: string;

    @Column({ length: 100, collation: 'utf8_unicode_ci', nullable: false, default: '0' })
    password: string;

    @Column({ length: 5, collation: 'utf8_unicode_ci', nullable: true })
    token: string;

    @Column({ default: 0 })
    id_foto: number;

    @Column({ length: 20, charset: 'utf8', default: '0' })
    CPF: string;

    @Column({ length: 12, charset: 'utf8', default: '0' })
    RG: string;

    @Column({ length: 1, charset: 'utf8', default: '0' })
    isADM: string;

    @Column({ length: 1, charset: 'utf8', default: '0' })
    status: string;

    @Column({ type: 'datetime', nullable: true })
    created_date: Date;

    @Column({ length: 300, collation: 'utf8_unicode_ci', nullable: true })
    fcmToken: string;
}