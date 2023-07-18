import { MdNotificationsNone } from 'react-icons/md'
import { AiOutlineHeart, AiOutlineInbox } from 'react-icons/ai'
import { BsCheck2Circle } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import img5 from '../../../assets/image 5.jpg'
import img6 from '../../../assets/image 6.jpg'
import img7 from '../../../assets/image 7.jpg'
import img8 from '../../../assets/image 8.jpg'
import avatar from '../../../assets/Ellipse 100.jpg'
import logo from '../../../assets/logo.jpg'
import './products.css'
import { useForm } from 'react-hook-form'
import Axios from 'axios'


function Products() {


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0]); // Append the file to the form data
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', data.price);
        formData.append('quantity', data.quantity);


        Axios.post("http://localhost:8081/products/", formData)
            .then(({ data }) => {
                // validate to check if the data.token is present
                console.log(data);
            })
            .catch(({ response }) => {
                alert(response.data.error);

            });
    };

    return (
        <div>
            <div className="products-nav">
                <div className="it-left">
                    <img src={logo} alt="" style={{ height: '60px', width: '60px' }} />
                    <h3>28 orders found</h3>
                </div>
                <div className='admin-info'>
                    <MdNotificationsNone style={{ height: "30px", width: '30px' }} />
                    <img src={avatar} alt="" style={{ borderRadius: '50px', border: 'none' }} />
                    <p>Freshia</p>
                </div>
            </div>

            <div className="product-content">
                <div className='mini-content'>

                    <div><span className='cards'>Men</span></div>
                    <span className='cards'>Female</span>
                    <span className='cards'>Fashion</span>

                    <div className="date" >
                        <BsSearch style={{ height: '30px', width: '30px' }} />
                        <AiOutlineHeart style={{ height: '30px', width: '30px' }} />
                        <AiOutlineInbox style={{ height: '30px', width: '30px' }} />
                    </div>


                </div>

                <div className='item'>
                    <div className="mini-items">

                        <div style={{ display: 'flex' }}>
                            <img src={img5} alt="" />
                            <span className='cards'>Bag</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <img src={img6} alt="" />
                            <span className='cards'>Bag</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <img src={img7} alt="" />
                            <span className='cards'>Beauty</span>
                        </div>

                    </div>
                    <div className='main-product--content'>
                        <div>
                            <img src={img8} alt="" style={{ height: '200px', width: '200px', borderRadius: '3px', marginRight: '1rem' }} />
                        </div>
                        <div >
                            <span className='spans'>
                                <p>Ref:No 24r5345g</p>
                                <div style={{ display: 'flex', flexDirection: 'row' }}><p>instock</p>
                                    <BsCheck2Circle style={{ height: '20px', width: '20px', margin: '3px' }} /></div>
                            </span>
                            <hr style={{ marginLeft: '1rem', color: 'grey' }} />

                            <span className='span1'>

                                <div>
                                    <p>Name</p>
                                    <p>Price</p>
                                </div>

                                <div>
                                    <p>beauty brush</p>
                                    <p>$11.50</p>
                                </div>


                            </span>

                            <span className='span1'>

                                <div>
                                    <p>Quantity</p>
                                    <p>Description</p>
                                </div>

                                <div>
                                    <p>17</p>
                                    <p>$11.50</p>
                                </div>

                            </span>
                            <hr style={{ marginLeft: '1rem' }} />

                            <span className='estimate'><h3>Estimate delivery : _____</h3></span>

                        </div>

                        <div>
                            <form method="post" enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>

                                <input type="file" id="image" {...register('image')} name='image' />
                                <label htmlFor="name">Enter the product name</label>
                                <input type="text" label="Name" id="name" {...register('name')} /><br />
                                <label htmlFor="Description">Product description</label>
                                <input type="text" label="Description" id="Description" {...register('description')} /><br />
                                <label htmlFor="Price">Price</label><br />
                                <input type="number" label="Price" id="Price"  {...register('price')} /> <br />
                                <label htmlFor="Quantity">Quantity</label><br />
                                <input type="number" label="Quantity" id="Quantity" {...register('quantity')} /><br />
                                <button type="submit">Upload</button>
                            </form>
                        </div>
                    </div>

                </div>



            </div>

        </div >
    )
}

export default Products