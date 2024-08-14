import { Player as TPlayer } from '../../types'
import styles from './styles.module.css'

type Props = {
    tooltipId: string
    onHover: () => void
} & TPlayer

export const Player = ({
    nickname,
    kills,
    deaths,
    assists,
    isAlive,
    id,
    tooltipId,
    onHover,
}: Props) => {
    return (
        <div
            className={styles.container}
            data-tooltip-id={tooltipId}
            onMouseEnter={onHover}
        >
            <span className={styles.ceil_align_id}>#{id}</span>
            <span>{nickname}</span>
            <span className={styles.ceil_align}>
                {kills}|{deaths}|{assists}
            </span>
            <span className={isAlive ? styles.alive : styles.dead}>
                {isAlive ? 'Alive' : 'Dead'}
            </span>
        </div>
    )
}
