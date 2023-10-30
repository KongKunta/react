import Navbar from './Navbar'
import Layout from './Layout'
import Accordion from './Accordion'
import Alerts from './Alerts'
import Badge from './Badge'
import Breadcrumb from './Breadcrumb'

function App(){
  return (
    <div>
      <Navbar />
      <Layout><Accordion /></Layout>
      <Layout><Alerts /></Layout>
      <Layout><Badge /></Layout>
      <Layout><Breadcrumb /></Layout>
    </div>
  )
}


export default App;
