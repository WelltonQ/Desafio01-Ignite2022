import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
// import { Form } from './components/Form'
import { Tasks } from './components/Tasks'

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        {/* <Form /> */}
        <Tasks />
      </div>
    </>
  )
}

export default App
