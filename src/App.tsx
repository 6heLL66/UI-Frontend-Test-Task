import styles from  './App.module.css'
import { PlayersView } from './components/PlayersView/PlayersView'
import { players } from './mock'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.team_header}>
          <div className={styles.team_name}>Team №1</div>
          <div className={styles.team_score}>50</div>
        </div>
        <div className={styles.separator} />
        <div className={styles.team_header}>
          <div className={styles.team_score}>35</div>
          <div className={styles.team_name}>Team №2</div>
        </div>
      </div>
      <div className={styles.views}>
        <PlayersView players={players} id='left' tooltipPlace='right' />
        <PlayersView players={players} id='right' tooltipPlace='left' />
      </div>
      <div className={styles.container_left_bg} />
      <div className={styles.container_right_bg} />
    </div>
  )
}

export default App
