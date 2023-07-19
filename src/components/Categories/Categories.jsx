import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import image5 from '../../assets/image 5.jpg';
import image6 from '../../assets/image 6.jpg';
import image7 from '../../assets/image 7.jpg';
import image8 from '../../assets/image 8.jpg';
import image9 from '../../assets/image 9.jpg';
import image10 from '../../assets/image 10.jpg';
import './categories.css';
import IndividualCategory from './IndividualCategory/IndividualCategory'; // Assuming this is the path to the IndividualCategory component

function Categories() {
    const [selectedCategory, setSelectedCategory] = useState(''); // Default to 'All'

    // Handler to update the selected category when a MenuItem is clicked
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };



    return (
        <div>
            <div className="categories-content">
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
                            {/* Map the category names to MenuItems */}
                            <MenuItem
                                className="menu"
                                active={selectedCategory === ''}
                                onClick={() => handleCategoryClick('')}
                            >
                                All
                            </MenuItem>
                            <MenuItem
                                className="menu"
                                active={selectedCategory === 'Shoes'}
                                onClick={() => handleCategoryClick('Shoes')}
                            >
                                Shoes
                            </MenuItem>
                            <MenuItem
                                className="menu"
                                active={selectedCategory === 'Clothes'}
                                onClick={() => handleCategoryClick('Clothes')}
                            >
                                Clothes
                            </MenuItem>
                            <MenuItem
                                className="menu"
                                active={selectedCategory === 'Accessories'}
                                onClick={() => handleCategoryClick('Accessories')}
                            >
                                Accessories
                            </MenuItem>
                            <MenuItem
                                className="menu"
                                active={selectedCategory === 'Beauty'}
                                onClick={() => handleCategoryClick('Beauty')}
                            >
                                Beauty
                            </MenuItem>
                            <MenuItem
                                className="menu"
                                active={selectedCategory === 'Bags'}
                                onClick={() => handleCategoryClick('Bags')}
                            >
                                Bags
                            </MenuItem>
                            <MenuItem
                                className="menu"
                                active={selectedCategory === 'Others'}
                                onClick={() => handleCategoryClick('Others')}
                            >
                                Others
                            </MenuItem>
                        </Menu>
                    </Sidebar>
                </div>
                <div className='section'>
                    <h2 style={{ marginLeft: '2rem' }}>Top Categories</h2>
                    <div className="card">
                        {/* Render the filtered products based on the selected category */}
                        <IndividualCategory category={selectedCategory} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;
