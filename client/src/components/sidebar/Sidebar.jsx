import React, { useState } from 'react'
import './sidebar.css'

function Sidebar() {
    const [order, setOrder] = useState(false)
    const [product, setProduct] = useState(false)
    return (
        <div className='sidebar'>
            <div className='container'>
                <div className='brand'>
                    FoodOrder

                </div>

                <div className='menu'>


                    <div className='menu-group active'>
                        <span>
                            <svg class="sherah-svg-icon" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.966 6.025H1.318C0.968526 6.02474 0.633441 5.88579 0.386326 5.63867C0.13921 5.39156 0.000264854 5.05647 0 4.707L0 1.318C0.000264854 0.968526 0.13921 0.633441 0.386326 0.386326C0.633441 0.13921 0.968526 0.000264854 1.318 0L6.966 0C7.31547 0.000264854 7.65056 0.13921 7.89767 0.386326C8.14479 0.633441 8.28374 0.968526 8.284 1.318V4.707C8.28374 5.05647 8.14479 5.39156 7.89767 5.63867C7.65056 5.88579 7.31547 6.02474 6.966 6.025ZM1.318 1.13C1.26814 1.13 1.22032 1.14981 1.18506 1.18506C1.14981 1.22032 1.13 1.26814 1.13 1.318V4.707C1.13 4.75686 1.14981 4.80468 1.18506 4.83994C1.22032 4.87519 1.26814 4.895 1.318 4.895H6.966C7.01586 4.895 7.06368 4.87519 7.09894 4.83994C7.13419 4.80468 7.154 4.75686 7.154 4.707V1.318C7.154 1.26814 7.13419 1.22032 7.09894 1.18506C7.06368 1.14981 7.01586 1.13 6.966 1.13H1.318Z" fill="currentColor"></path>
                                <path d="M6.966 18.0753H1.318C0.968526 18.075 0.633441 17.936 0.386326 17.6889C0.13921 17.4418 0.000264854 17.1067 0 16.7572L0 8.84924C0.000264854 8.49977 0.13921 8.16469 0.386326 7.91757C0.633441 7.67046 0.968526 7.53151 1.318 7.53125H6.966C7.31547 7.53151 7.65056 7.67046 7.89767 7.91757C8.14479 8.16469 8.28374 8.49977 8.284 8.84924V16.7572C8.28374 17.1067 8.14479 17.4418 7.89767 17.6889C7.65056 17.936 7.31547 18.075 6.966 18.0753ZM1.318 8.66125C1.26814 8.66125 1.22032 8.68105 1.18506 8.71631C1.14981 8.75157 1.13 8.79938 1.13 8.84924V16.7572C1.13 16.8071 1.14981 16.8549 1.18506 16.8902C1.22032 16.9254 1.26814 16.9453 1.318 16.9453H6.966C7.01586 16.9453 7.06368 16.9254 7.09894 16.8902C7.13419 16.8549 7.154 16.8071 7.154 16.7572V8.84924C7.154 8.79938 7.13419 8.75157 7.09894 8.71631C7.06368 8.68105 7.01586 8.66125 6.966 8.66125H1.318Z" fill="currentColor"></path>
                                <path d="M16.757 18.0758H11.1071C10.7576 18.0755 10.4225 17.9366 10.1754 17.6895C9.92827 17.4423 9.78933 17.1073 9.78906 16.7578V13.3688C9.78933 13.0193 9.92827 12.6842 10.1754 12.4371C10.4225 12.19 10.7576 12.051 11.1071 12.0508H16.757C17.1065 12.051 17.4416 12.19 17.6888 12.4371C17.9359 12.6842 18.0748 13.0193 18.0751 13.3688V16.7578C18.0748 17.1073 17.9359 17.4423 17.6888 17.6895C17.4416 17.9366 17.1065 18.0755 16.757 18.0758ZM11.1091 13.1758C11.0592 13.1758 11.0114 13.1956 10.9761 13.2308C10.9409 13.2661 10.9211 13.3139 10.9211 13.3638V16.7528C10.9211 16.8026 10.9409 16.8505 10.9761 16.8857C11.0114 16.921 11.0592 16.9408 11.1091 16.9408H16.757C16.8069 16.9408 16.8547 16.921 16.89 16.8857C16.9252 16.8505 16.9451 16.8026 16.9451 16.7528V13.3688C16.9451 13.3189 16.9252 13.2711 16.89 13.2358C16.8547 13.2006 16.8069 13.1808 16.757 13.1808L11.1091 13.1758Z" fill="currentColor"></path>
                                <path d="M16.757 10.544H11.1071C10.7576 10.5437 10.4225 10.4048 10.1754 10.1577C9.92827 9.91056 9.78933 9.57547 9.78906 9.226V1.318C9.78933 0.968526 9.92827 0.633441 10.1754 0.386326C10.4225 0.13921 10.7576 0.000264854 11.1071 0L16.757 0C17.1065 0.000264854 17.4416 0.13921 17.6888 0.386326C17.9359 0.633441 18.0748 0.968526 18.0751 1.318V9.226C18.0748 9.57547 17.9359 9.91056 17.6888 10.1577C17.4416 10.4048 17.1065 10.5437 16.757 10.544ZM11.1071 1.13C11.0572 1.13 11.0094 1.14981 10.9741 1.18506C10.9389 1.22032 10.9191 1.26814 10.9191 1.318V9.226C10.9191 9.27586 10.9389 9.32368 10.9741 9.35894C11.0094 9.39419 11.0572 9.414 11.1071 9.414H16.757C16.8069 9.414 16.8547 9.39419 16.89 9.35894C16.9252 9.32368 16.9451 9.27586 16.9451 9.226V1.318C16.9451 1.26814 16.9252 1.22032 16.89 1.18506C16.8547 1.14981 16.8069 1.13 16.757 1.13H11.1071Z" fill="currentColor"></path>
                            </svg>
                        </span>
                        <span>Dashboard</span>
                    </div>

                    <div className='submenu-group'>
                        <div className={order ? 'menu-group active' : 'menu-group'} onClick={() => setOrder(!order)}>

                            <span>
                                <svg class="sherah-svg-icon" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.75 7.5H1.75C1.28603 7.49947 0.841222 7.31493 0.513148 6.98685C0.185074 6.65878 0.00052934 6.21397 0 5.75V1.75C0.00052934 1.28603 0.185074 0.841222 0.513148 0.513148C0.841222 0.185074 1.28603 0.00052934 1.75 0H5.75C6.21397 0.00052934 6.65878 0.185074 6.98685 0.513148C7.31493 0.841222 7.49947 1.28603 7.5 1.75V5.75C7.49947 6.21397 7.31493 6.65878 6.98685 6.98685C6.65878 7.31493 6.21397 7.49947 5.75 7.5ZM1.75 1.5C1.6837 1.5 1.62011 1.52634 1.57322 1.57322C1.52634 1.62011 1.5 1.6837 1.5 1.75V5.75C1.5 5.8163 1.52634 5.87989 1.57322 5.92678C1.62011 5.97366 1.6837 6 1.75 6H5.75C5.8163 6 5.87989 5.97366 5.92678 5.92678C5.97366 5.87989 6 5.8163 6 5.75V1.75C6 1.6837 5.97366 1.62011 5.92678 1.57322C5.87989 1.52634 5.8163 1.5 5.75 1.5H1.75Z" fill="currentColor"></path>
                                    <path d="M5.75 17.5H1.75C1.28603 17.4995 0.841222 17.3149 0.513148 16.9869C0.185074 16.6588 0.00052934 16.214 0 15.75V11.75C0.00052934 11.286 0.185074 10.8412 0.513148 10.5131C0.841222 10.1851 1.28603 10.0005 1.75 10H5.75C6.21397 10.0005 6.65878 10.1851 6.98685 10.5131C7.31493 10.8412 7.49947 11.286 7.5 11.75V15.75C7.49947 16.214 7.31493 16.6588 6.98685 16.9869C6.65878 17.3149 6.21397 17.4995 5.75 17.5ZM1.75 11.5C1.6837 11.5 1.62011 11.5263 1.57322 11.5732C1.52634 11.6201 1.5 11.6837 1.5 11.75V15.75C1.5 15.8163 1.52634 15.8799 1.57322 15.9268C1.62011 15.9737 1.6837 16 1.75 16H5.75C5.8163 16 5.87989 15.9737 5.92678 15.9268C5.97366 15.8799 6 15.8163 6 15.75V11.75C6 11.6837 5.97366 11.6201 5.92678 11.5732C5.87989 11.5263 5.8163 11.5 5.75 11.5H1.75Z" fill="currentColor"></path>
                                    <path d="M20.75 2.5H10.75C10.5511 2.5 10.3603 2.42098 10.2197 2.28033C10.079 2.13968 10 1.94891 10 1.75C10 1.55109 10.079 1.36032 10.2197 1.21967C10.3603 1.07902 10.5511 1 10.75 1H20.75C20.9489 1 21.1397 1.07902 21.2803 1.21967C21.421 1.36032 21.5 1.55109 21.5 1.75C21.5 1.94891 21.421 2.13968 21.2803 2.28033C21.1397 2.42098 20.9489 2.5 20.75 2.5Z" fill="currentColor"></path>
                                    <path d="M16.75 6.5H10.75C10.5511 6.5 10.3603 6.42098 10.2197 6.28033C10.079 6.13968 10 5.94891 10 5.75C10 5.55109 10.079 5.36032 10.2197 5.21967C10.3603 5.07902 10.5511 5 10.75 5H16.75C16.9489 5 17.1397 5.07902 17.2803 5.21967C17.421 5.36032 17.5 5.55109 17.5 5.75C17.5 5.94891 17.421 6.13968 17.2803 6.28033C17.1397 6.42098 16.9489 6.5 16.75 6.5Z" fill="currentColor"></path>
                                    <path d="M20.75 12.5H10.75C10.5511 12.5 10.3603 12.421 10.2197 12.2803C10.079 12.1397 10 11.9489 10 11.75C10 11.5511 10.079 11.3603 10.2197 11.2197C10.3603 11.079 10.5511 11 10.75 11H20.75C20.9489 11 21.1397 11.079 21.2803 11.2197C21.421 11.3603 21.5 11.5511 21.5 11.75C21.5 11.9489 21.421 12.1397 21.2803 12.2803C21.1397 12.421 20.9489 12.5 20.75 12.5Z" fill="currentColor"></path>
                                    <path d="M16.75 16.5H10.75C10.5511 16.5 10.3603 16.421 10.2197 16.2803C10.079 16.1397 10 15.9489 10 15.75C10 15.5511 10.079 15.3603 10.2197 15.2197C10.3603 15.079 10.5511 15 10.75 15H16.75C16.9489 15 17.1397 15.079 17.2803 15.2197C17.421 15.3603 17.5 15.5511 17.5 15.75C17.5 15.9489 17.421 16.1397 17.2803 16.2803C17.1397 16.421 16.9489 16.5 16.75 16.5Z" fill="currentColor"></path>
                                </svg>
                            </span>
                            <span>Orders</span>

                            <span className='icon'>
                                {order ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>

                                ) : (

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>

                                )}



                            </span>

                        </div>
                        {order && (

                            <div className='submenu-area'>
                                <span className='list'>All Order</span>
                                <span className='list'>Delivery Order</span>
                                <span className='list'>PickUp Order</span>
                                <span className='list'>InRestaurent Order</span>
                            </div>

                        )}


                    </div>

                    <div className='submenu-group'>
                        <div className={product ? 'menu-group active' : 'menu-group'} onClick={() => setProduct(!product)}>

                            <span>
                                <svg class="sherah-svg-icon" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.75 7.5H1.75C1.28603 7.49947 0.841222 7.31493 0.513148 6.98685C0.185074 6.65878 0.00052934 6.21397 0 5.75V1.75C0.00052934 1.28603 0.185074 0.841222 0.513148 0.513148C0.841222 0.185074 1.28603 0.00052934 1.75 0H5.75C6.21397 0.00052934 6.65878 0.185074 6.98685 0.513148C7.31493 0.841222 7.49947 1.28603 7.5 1.75V5.75C7.49947 6.21397 7.31493 6.65878 6.98685 6.98685C6.65878 7.31493 6.21397 7.49947 5.75 7.5ZM1.75 1.5C1.6837 1.5 1.62011 1.52634 1.57322 1.57322C1.52634 1.62011 1.5 1.6837 1.5 1.75V5.75C1.5 5.8163 1.52634 5.87989 1.57322 5.92678C1.62011 5.97366 1.6837 6 1.75 6H5.75C5.8163 6 5.87989 5.97366 5.92678 5.92678C5.97366 5.87989 6 5.8163 6 5.75V1.75C6 1.6837 5.97366 1.62011 5.92678 1.57322C5.87989 1.52634 5.8163 1.5 5.75 1.5H1.75Z" fill="currentColor"></path>
                                    <path d="M5.75 17.5H1.75C1.28603 17.4995 0.841222 17.3149 0.513148 16.9869C0.185074 16.6588 0.00052934 16.214 0 15.75V11.75C0.00052934 11.286 0.185074 10.8412 0.513148 10.5131C0.841222 10.1851 1.28603 10.0005 1.75 10H5.75C6.21397 10.0005 6.65878 10.1851 6.98685 10.5131C7.31493 10.8412 7.49947 11.286 7.5 11.75V15.75C7.49947 16.214 7.31493 16.6588 6.98685 16.9869C6.65878 17.3149 6.21397 17.4995 5.75 17.5ZM1.75 11.5C1.6837 11.5 1.62011 11.5263 1.57322 11.5732C1.52634 11.6201 1.5 11.6837 1.5 11.75V15.75C1.5 15.8163 1.52634 15.8799 1.57322 15.9268C1.62011 15.9737 1.6837 16 1.75 16H5.75C5.8163 16 5.87989 15.9737 5.92678 15.9268C5.97366 15.8799 6 15.8163 6 15.75V11.75C6 11.6837 5.97366 11.6201 5.92678 11.5732C5.87989 11.5263 5.8163 11.5 5.75 11.5H1.75Z" fill="currentColor"></path>
                                    <path d="M20.75 2.5H10.75C10.5511 2.5 10.3603 2.42098 10.2197 2.28033C10.079 2.13968 10 1.94891 10 1.75C10 1.55109 10.079 1.36032 10.2197 1.21967C10.3603 1.07902 10.5511 1 10.75 1H20.75C20.9489 1 21.1397 1.07902 21.2803 1.21967C21.421 1.36032 21.5 1.55109 21.5 1.75C21.5 1.94891 21.421 2.13968 21.2803 2.28033C21.1397 2.42098 20.9489 2.5 20.75 2.5Z" fill="currentColor"></path>
                                    <path d="M16.75 6.5H10.75C10.5511 6.5 10.3603 6.42098 10.2197 6.28033C10.079 6.13968 10 5.94891 10 5.75C10 5.55109 10.079 5.36032 10.2197 5.21967C10.3603 5.07902 10.5511 5 10.75 5H16.75C16.9489 5 17.1397 5.07902 17.2803 5.21967C17.421 5.36032 17.5 5.55109 17.5 5.75C17.5 5.94891 17.421 6.13968 17.2803 6.28033C17.1397 6.42098 16.9489 6.5 16.75 6.5Z" fill="currentColor"></path>
                                    <path d="M20.75 12.5H10.75C10.5511 12.5 10.3603 12.421 10.2197 12.2803C10.079 12.1397 10 11.9489 10 11.75C10 11.5511 10.079 11.3603 10.2197 11.2197C10.3603 11.079 10.5511 11 10.75 11H20.75C20.9489 11 21.1397 11.079 21.2803 11.2197C21.421 11.3603 21.5 11.5511 21.5 11.75C21.5 11.9489 21.421 12.1397 21.2803 12.2803C21.1397 12.421 20.9489 12.5 20.75 12.5Z" fill="currentColor"></path>
                                    <path d="M16.75 16.5H10.75C10.5511 16.5 10.3603 16.421 10.2197 16.2803C10.079 16.1397 10 15.9489 10 15.75C10 15.5511 10.079 15.3603 10.2197 15.2197C10.3603 15.079 10.5511 15 10.75 15H16.75C16.9489 15 17.1397 15.079 17.2803 15.2197C17.421 15.3603 17.5 15.5511 17.5 15.75C17.5 15.9489 17.421 16.1397 17.2803 16.2803C17.1397 16.421 16.9489 16.5 16.75 16.5Z" fill="currentColor"></path>
                                </svg>
                            </span>
                            <span>Product Manage</span>

                            <span className='icon'>
                                {product ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>

                                ) : (

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>

                                )}



                            </span>

                        </div>
                        {product && (

                            <div className='submenu-area'>
                                <span className='list'>Create Product</span>
                                <span className='list'>Product</span>
                                <span className='list'>Categories</span>
                                <span className='list'>Optional Items</span>
                                <span className='list'>Promotions</span>
                                <span className='list'>Coupon</span>
                                <span className='list'>Delivery Area</span>
                                <span className='list'>Time Slots</span>
                            </div>

                        )}


                    </div>

                   

                </div>

            </div>

        </div>
    )
}

export default Sidebar