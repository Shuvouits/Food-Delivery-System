import React from 'react'

function AllOrder() {
    return (
        <>
            <div className="page-wrapper">
                <div className="page-content">


                    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                        <div class="breadcrumb-title pe-3">Order List</div>
                        <div class="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mb-0 p-0">
                                    <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">All Orders</li>
                                </ol>
                            </nav>
                        </div>

                    </div>



                    <div className="card radius-10">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div>
                                    <h5 className="mb-0">Orders Summary</h5>
                                </div>
                                <div className="font-22 ms-auto">
                                    <i className="bx bx-dots-horizontal-rounded"></i>
                                </div>
                            </div>
                            <hr />
                            <div className="table-responsive">
                                <table className="table align-middle mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Order id</th>
                                            <th>Product</th>
                                            <th>Customer</th>
                                            <th>Date</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#897656</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="recent-product-img">
                                                        <img src="assets/images/icons/chair.png" alt="" />
                                                    </div>
                                                    <div className="ms-2">
                                                        <h6 className="mb-1 font-14">Light Blue Chair</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Brooklyn Zeo</td>
                                            <td>12 Jul 2020</td>
                                            <td>$64.00</td>
                                            <td>
                                                <div className="badge rounded-pill bg-light-info text-info w-100">
                                                    In Progress
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex order-actions">
                                                    <a href="javascript:;" className="">
                                                        <i className="bx bx-cog"></i>
                                                    </a>
                                                    <a href="javascript:;" className="ms-4">
                                                        <i className="bx bx-down-arrow-alt"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#987549</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="recent-product-img">
                                                        <img src="assets/images/icons/shoes.png" alt="" />
                                                    </div>
                                                    <div className="ms-2">
                                                        <h6 className="mb-1 font-14">Green Sport Shoes</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Martin Hughes</td>
                                            <td>14 Jul 2020</td>
                                            <td>$45.00</td>
                                            <td>
                                                <div className="badge rounded-pill bg-light-success text-success w-100">
                                                    Completed
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex order-actions">
                                                    <a href="javascript:;" className="">
                                                        <i className="bx bx-cog"></i>
                                                    </a>
                                                    <a href="javascript:;" className="ms-4">
                                                        <i className="bx bx-down-arrow-alt"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#685749</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="recent-product-img">
                                                        <img src="assets/images/icons/headphones.png" alt="" />
                                                    </div>
                                                    <div className="ms-2">
                                                        <h6 className="mb-1 font-14">Red Headphone 07</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Shoan Stephen</td>
                                            <td>15 Jul 2020</td>
                                            <td>$67.00</td>
                                            <td>
                                                <div className="badge rounded-pill bg-light-danger text-danger w-100">
                                                    Cancelled
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex order-actions">
                                                    <a href="javascript:;" className="">
                                                        <i className="bx bx-cog"></i>
                                                    </a>
                                                    <a href="javascript:;" className="ms-4">
                                                        <i className="bx bx-down-arrow-alt"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#887459</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="recent-product-img">
                                                        <img src="assets/images/icons/idea.png" alt="" />
                                                    </div>
                                                    <div className="ms-2">
                                                        <h6 className="mb-1 font-14">Mini Laptop Device</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Alister Campel</td>
                                            <td>18 Jul 2020</td>
                                            <td>$87.00</td>
                                            <td>
                                                <div className="badge rounded-pill bg-light-success text-success w-100">
                                                    Completed
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex order-actions">
                                                    <a href="javascript:;" className="">
                                                        <i className="bx bx-cog"></i>
                                                    </a>
                                                    <a href="javascript:;" className="ms-4">
                                                        <i className="bx bx-down-arrow-alt"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#335428</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="recent-product-img">
                                                        <img
                                                            src="assets/images/icons/user-interface.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="ms-2">
                                                        <h6 className="mb-1 font-14">Purple Mobile Phone</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Keate Medona</td>
                                            <td>20 Jul 2020</td>
                                            <td>$75.00</td>
                                            <td>
                                                <div className="badge rounded-pill bg-light-info text-info w-100">
                                                    In Progress
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex order-actions">
                                                    <a href="javascript:;" className="">
                                                        <i className="bx bx-cog"></i>
                                                    </a>
                                                    <a href="javascript:;" className="ms-4">
                                                        <i className="bx bx-down-arrow-alt"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#224578</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="recent-product-img">
                                                        <img src="assets/images/icons/watch.png" alt="" />
                                                    </div>
                                                    <div className="ms-2">
                                                        <h6 className="mb-1 font-14">Smart Hand Watch</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Winslet Maya</td>
                                            <td>22 Jul 2020</td>
                                            <td>$80.00</td>
                                            <td>
                                                <div className="badge rounded-pill bg-light-danger text-danger w-100">
                                                    Cancelled
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex order-actions">
                                                    <a href="javascript:;" className="">
                                                        <i className="bx bx-cog"></i>
                                                    </a>
                                                    <a href="javascript:;" className="ms-4">
                                                        <i className="bx bx-down-arrow-alt"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#447896</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="recent-product-img">
                                                        <img src="assets/images/icons/tshirt.png" alt="" />
                                                    </div>
                                                    <div className="ms-2">
                                                        <h6 className="mb-1 font-14">T-Shirt Blue</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Emy Jackson</td>
                                            <td>28 Jul 2020</td>
                                            <td>$96.00</td>
                                            <td>
                                                <div className="badge rounded-pill bg-light-success text-success w-100">
                                                    Completed
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex order-actions">
                                                    <a href="javascript:;" className="">
                                                        <i className="bx bx-cog"></i>
                                                    </a>
                                                    <a href="javascript:;" className="ms-4">
                                                        <i className="bx bx-down-arrow-alt"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default AllOrder