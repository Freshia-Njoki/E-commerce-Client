import './report.css'

function Report() {
    return (
        <div>
            <div className="report-content">

                <div>
                    <div className="sales">graph</div>
                    <div> <h4>Comments:</h4>
                        <span className='card'>RevenueSummary:
                            TotalRevenue:$102.97
                            Total Savings: $2413
                            Total Orders: 28</span>
                    </div>
                </div>

                <div className='reviews'>
                    <h3>Reviews Highlights:</h3>
                    <div className="flex">

                        <span className='review'><p> Customer Satisfaction:<br /> By providing a delightful shopping experience. <br />

                            Impressive Savings made while shopping with us. <br />

                            Product Quality:curating a diverse selection of items.</p></span>



                    </div>
                    <div>
                        <h5>Monthly Revenue:</h5>
                        <span className='card'>ksh:____</span>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Report