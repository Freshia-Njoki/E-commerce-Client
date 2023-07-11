import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import image5 from '../../assets/image 5.jpg'
import image6 from '../../assets/image 6.jpg'
import image7 from '../../assets/image 7.jpg'
import image8 from '../../assets/image 8.jpg'
import image9 from '../../assets/image 9.jpg'
import image10 from '../../assets/image 10.jpg'
import './categories.css'
function Categories() {
    return (
        //dispatch to toggle the side nav
        <div>
            <div className="navbar">
                <h3>Categories</h3>
                <input type="text" placeholder='Search...' style={{ marginLeft: '20rem', padding: '5px 80px', borderRadius: '8px', border: '1px solid grey' }} />
            </div>

            <div className="main-content">
                <div>
                    <Sidebar className='sidebar'>
                        <Menu menuItemStyles={{
                            button: {
                                // the active class will be added automatically by react router
                                // so we can use it to style the active menu item
                                [`&.active`]: {
                                    backgroundColor: '#13395e',
                                    color: '#b6c8d9',
                                },
                            },
                        }}>

                            <MenuItem className="menu">Shoes </MenuItem>
                            <MenuItem className="menu" >Clothes </MenuItem>
                            <MenuItem className="menu" >Accessories </MenuItem>
                            <MenuItem className="menu" >Beauty</MenuItem>
                            <MenuItem className="menu" >Bags </MenuItem>
                            <MenuItem className="menu" >others </MenuItem>

                        </Menu>
                    </Sidebar>
                </div>
                <div className='section'>
                    <h2 style={{ marginLeft: '2rem' }}>Top Categories</h2>
                    <div className="card">
                        <div className="desciption">
                            <img className='img' src={image5} alt="" />
                            <p>bag</p>
                        </div>

                        <div className="desciption">
                            <img className='img' src={image6} alt="" />
                            <p>bag</p>
                        </div>
                        <div className="desciption">
                            <img className='img' src={image7} alt="" />
                            <p>beauty</p>
                        </div>
                        <div className="desciption">
                            <img className='img' src={image8} alt="" />
                            <p>beauty</p>
                        </div>
                        <div className="desciption">
                            <img className='img' src={image9} alt="" />
                            <p>Accessories</p>
                        </div>
                        <div className="desciption">
                            <img className='img' src={image10} alt="" />
                            <p>clothes</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Categories