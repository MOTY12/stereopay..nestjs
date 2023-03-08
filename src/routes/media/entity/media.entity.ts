import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';


@Entity({ name: 'media'})
export class Media {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    type: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    url: string;

    @Column(
        {
            type: 'enum',
            enum: ['active', 'inactive'],
            default: 'active'
        }
    )
    status: string;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    created_at: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    updated_at: Date;

    @Column({
        type: 'timestamp',
        nullable: true,
    })
    deleted_at: Date;

}