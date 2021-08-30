import 'antd/dist/antd.css';
import Title from 'antd/lib/typography/Title';
import Table from './components/table';
import Navbar from './components/navbar';
const App = () => {
    return (
        <>
            <section>
                <div className='navbar'>
                    <Navbar />
                </div>
                <div className="container">
                    <div className='page-title'>
                        <Title level={2}>User table</Title>
                    </div>
                    <Table />
                </div>
            </section>
        </>
    )
}

export default App