import Navbar from './Navbar'
import Layout from './Layout'
import Accordion from './Accordion'
import Alerts from './Alerts'

function App(){
  return (
    <div>
      <Navbar />
      <Layout><Accordion /></Layout>
      <Layout><Alerts /></Layout>
    </div>
  )
}


export default App;
