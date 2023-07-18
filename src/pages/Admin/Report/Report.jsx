import './report.css'

function Report() {
    return (
        <div>
            <div className="report-content">

                <div>
                    <div className="sales">graph</div>
                    <div> <h4>Comments:</h4>
                        <span className='cards'></span>
                    </div>
                </div>

                <div className='reviews'>
                    <h3>Reviews</h3>
                    <div className="flex">

                        <span className='cards'>Comments</span>

                    </div>
                    <div>
                        <h5>Monthly Revenue:</h5>
                        <span className='cards'>ksh:____</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report