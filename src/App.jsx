import Navbar from './Navbar'
import Layout from './Layout'
import Accordion from './Accordion'
import Alerts from './Alerts'
import Badge from './Badge'

function App(){
  return (
    <div>
      <Navbar />
      <Layout><Accordion /></Layout>
      <Layout><Alerts /></Layout>
      <Layout><Badge /></Layout>
    </div>
  )
}


export default App;
