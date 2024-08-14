import { useState } from 'react'
import { PlacesType, Tooltip } from 'react-tooltip'

import { Player as TPlayer } from '../../types'
import { Player } from '../Player/Player'
import styles from './styles.module.css'

type Props = {
    players: TPlayer[]
    id: string
    tooltipPlace: PlacesType
}

export const PlayersView = ({ players, id, tooltipPlace }: Props) => {
    const [activePlayerId, setActivePlayerId] = useState<number | null>()

    const playerInfo = players.find(p => p.id === activePlayerId)

    return (
        <div className={styles.container}>
            {players.map((player: TPlayer) => {
                return (
                    <Player
                        key={player.id}
                        {...player}
                        tooltipId={id}
                        onHover={() => setActivePlayerId(player.id)}
                    />
                )
            })}

            <Tooltip
                id={id}
                clickable
                place={tooltipPlace}
                style={{ padding: 0 }}
            >
                <div className={styles.tooltip_container}>
                    <img src={playerInfo?.avatar} width={66} height={66} />
                    <div className={styles.invite}>
                        <div>{playerInfo?.nickname}</div>
                        <button>Invite friend</button>
                    </div>
                </div>
            </Tooltip>
        </div>
    )
}
