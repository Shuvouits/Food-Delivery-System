import React from 'react'
import './home.css'

function Home() {
  return (
    <div className='home'>
      <div className='container'>
        <div className='section-1'>
          <div className='row'>

            <div className='card'>
              <span className='icon'>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.7207 5.5H19.5625C19.2641 5.5 18.978 5.61853 18.767 5.82951C18.556 6.04048 18.4375 6.32663 18.4375 6.625C18.4375 6.92337 18.556 7.20952 18.767 7.42049C18.978 7.63147 19.2641 7.75 19.5625 7.75H19.5957C19.8941 7.75 20.1802 7.86853 20.3912 8.07951C20.6022 8.29048 20.7207 8.57663 20.7207 8.875C20.7207 9.17337 20.6022 9.45952 20.3912 9.67049C20.1802 9.88147 19.8941 10 19.5957 10H18.4375" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M19.5625 5.5V4.375" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M19.5625 11.125V10" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M10.5625 13.375H7.75V1.5625H31.375V7.75" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M11.125 3.8125C11.125 4.11087 11.0065 4.39702 10.7955 4.608C10.5845 4.81897 10.2984 4.9375 10 4.9375" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M28 3.8125C28 4.11087 28.1185 4.39702 28.3295 4.608C28.5405 4.81897 28.8266 4.9375 29.125 4.9375" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M10 10C10.2984 10 10.5845 10.1185 10.7955 10.3295C11.0065 10.5405 11.125 10.8266 11.125 11.125" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M10 30.8125H12.8125" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M6.625 36.4375L8.52006 34.75H20.2937C20.8583 34.75 21.4022 34.5378 21.8176 34.1554L24.6301 31.5679C24.8123 31.3858 24.9556 31.1683 25.051 30.929C25.1465 30.6896 25.1922 30.4333 25.1853 30.1757C25.1784 29.918 25.119 29.6645 25.0109 29.4306C24.9028 29.1967 24.7481 28.9872 24.5564 28.8151C24.1737 28.4947 23.6837 28.3316 23.1854 28.3587C22.6871 28.3859 22.2177 28.6013 21.8721 28.9613L19.6024 30.8125H13.375C13.8226 30.8125 14.2518 30.6347 14.5682 30.3182C14.8847 30.0018 15.0625 29.5726 15.0625 29.125C15.0625 28.6774 14.8847 28.2482 14.5682 27.9318C14.2518 27.6153 13.8226 27.4375 13.375 27.4375H6.30944C5.71275 27.4376 5.14055 27.6748 4.71869 28.0968L1.5625 31.2524" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M19.5625 25.1875V24.625C19.5625 22.984 18.9106 21.4102 17.7502 20.2498C16.5898 19.0894 15.016 18.4375 13.375 18.4375C11.734 18.4375 10.1602 19.0894 8.99978 20.2498C7.8394 21.4102 7.1875 22.984 7.1875 24.625V25.1875" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M5.5 25.1875H21.25" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M13.375 18.4375V17.3125" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M28 13.375H25.1875" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M31.3754 19L29.4803 17.3125H17.7066C17.1421 17.3125 16.5982 17.1003 16.1828 16.7179L13.3703 14.1304C13.1881 13.9483 13.0448 13.7308 12.9494 13.4915C12.8539 13.2521 12.8082 12.9958 12.8151 12.7382C12.822 12.4805 12.8813 12.227 12.9895 11.9931C13.0976 11.7592 13.2523 11.5497 13.444 11.3776C13.8267 11.0572 14.3167 10.8941 14.815 10.9212C15.3133 10.9484 15.7827 11.1638 16.1283 11.5238L18.398 13.375H24.6254C24.1778 13.375 23.7486 13.1972 23.4321 12.8807C23.1157 12.5643 22.9379 12.1351 22.9379 11.6875C22.9379 11.2399 23.1157 10.8107 23.4321 10.4943C23.7486 10.1778 24.1778 10 24.6254 10H31.691C32.2876 10.0001 32.8598 10.2373 33.2817 10.6593L36.4379 13.8149" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
              <span>Total Sales</span>
              <span className='amount'>$2334</span>

            </div>

            <div className='card'>
              <span className='icon'>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.7207 5.5H19.5625C19.2641 5.5 18.978 5.61853 18.767 5.82951C18.556 6.04048 18.4375 6.32663 18.4375 6.625C18.4375 6.92337 18.556 7.20952 18.767 7.42049C18.978 7.63147 19.2641 7.75 19.5625 7.75H19.5957C19.8941 7.75 20.1802 7.86853 20.3912 8.07951C20.6022 8.29048 20.7207 8.57663 20.7207 8.875C20.7207 9.17337 20.6022 9.45952 20.3912 9.67049C20.1802 9.88147 19.8941 10 19.5957 10H18.4375" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M19.5625 5.5V4.375" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M19.5625 11.125V10" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M10.5625 13.375H7.75V1.5625H31.375V7.75" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M11.125 3.8125C11.125 4.11087 11.0065 4.39702 10.7955 4.608C10.5845 4.81897 10.2984 4.9375 10 4.9375" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M28 3.8125C28 4.11087 28.1185 4.39702 28.3295 4.608C28.5405 4.81897 28.8266 4.9375 29.125 4.9375" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M10 10C10.2984 10 10.5845 10.1185 10.7955 10.3295C11.0065 10.5405 11.125 10.8266 11.125 11.125" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M10 30.8125H12.8125" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M6.625 36.4375L8.52006 34.75H20.2937C20.8583 34.75 21.4022 34.5378 21.8176 34.1554L24.6301 31.5679C24.8123 31.3858 24.9556 31.1683 25.051 30.929C25.1465 30.6896 25.1922 30.4333 25.1853 30.1757C25.1784 29.918 25.119 29.6645 25.0109 29.4306C24.9028 29.1967 24.7481 28.9872 24.5564 28.8151C24.1737 28.4947 23.6837 28.3316 23.1854 28.3587C22.6871 28.3859 22.2177 28.6013 21.8721 28.9613L19.6024 30.8125H13.375C13.8226 30.8125 14.2518 30.6347 14.5682 30.3182C14.8847 30.0018 15.0625 29.5726 15.0625 29.125C15.0625 28.6774 14.8847 28.2482 14.5682 27.9318C14.2518 27.6153 13.8226 27.4375 13.375 27.4375H6.30944C5.71275 27.4376 5.14055 27.6748 4.71869 28.0968L1.5625 31.2524" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M19.5625 25.1875V24.625C19.5625 22.984 18.9106 21.4102 17.7502 20.2498C16.5898 19.0894 15.016 18.4375 13.375 18.4375C11.734 18.4375 10.1602 19.0894 8.99978 20.2498C7.8394 21.4102 7.1875 22.984 7.1875 24.625V25.1875" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M5.5 25.1875H21.25" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M13.375 18.4375V17.3125" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M28 13.375H25.1875" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M31.3754 19L29.4803 17.3125H17.7066C17.1421 17.3125 16.5982 17.1003 16.1828 16.7179L13.3703 14.1304C13.1881 13.9483 13.0448 13.7308 12.9494 13.4915C12.8539 13.2521 12.8082 12.9958 12.8151 12.7382C12.822 12.4805 12.8813 12.227 12.9895 11.9931C13.0976 11.7592 13.2523 11.5497 13.444 11.3776C13.8267 11.0572 14.3167 10.8941 14.815 10.9212C15.3133 10.9484 15.7827 11.1638 16.1283 11.5238L18.398 13.375H24.6254C24.1778 13.375 23.7486 13.1972 23.4321 12.8807C23.1157 12.5643 22.9379 12.1351 22.9379 11.6875C22.9379 11.2399 23.1157 10.8107 23.4321 10.4943C23.7486 10.1778 24.1778 10 24.6254 10H31.691C32.2876 10.0001 32.8598 10.2373 33.2817 10.6593L36.4379 13.8149" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
              <span>Total Sales</span>
              <span className='amount'>$2334</span>

            </div>

            <div className='card'>
              <span className='icon'>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.7207 5.5H19.5625C19.2641 5.5 18.978 5.61853 18.767 5.82951C18.556 6.04048 18.4375 6.32663 18.4375 6.625C18.4375 6.92337 18.556 7.20952 18.767 7.42049C18.978 7.63147 19.2641 7.75 19.5625 7.75H19.5957C19.8941 7.75 20.1802 7.86853 20.3912 8.07951C20.6022 8.29048 20.7207 8.57663 20.7207 8.875C20.7207 9.17337 20.6022 9.45952 20.3912 9.67049C20.1802 9.88147 19.8941 10 19.5957 10H18.4375" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M19.5625 5.5V4.375" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M19.5625 11.125V10" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M10.5625 13.375H7.75V1.5625H31.375V7.75" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M11.125 3.8125C11.125 4.11087 11.0065 4.39702 10.7955 4.608C10.5845 4.81897 10.2984 4.9375 10 4.9375" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M28 3.8125C28 4.11087 28.1185 4.39702 28.3295 4.608C28.5405 4.81897 28.8266 4.9375 29.125 4.9375" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M10 10C10.2984 10 10.5845 10.1185 10.7955 10.3295C11.0065 10.5405 11.125 10.8266 11.125 11.125" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M10 30.8125H12.8125" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M6.625 36.4375L8.52006 34.75H20.2937C20.8583 34.75 21.4022 34.5378 21.8176 34.1554L24.6301 31.5679C24.8123 31.3858 24.9556 31.1683 25.051 30.929C25.1465 30.6896 25.1922 30.4333 25.1853 30.1757C25.1784 29.918 25.119 29.6645 25.0109 29.4306C24.9028 29.1967 24.7481 28.9872 24.5564 28.8151C24.1737 28.4947 23.6837 28.3316 23.1854 28.3587C22.6871 28.3859 22.2177 28.6013 21.8721 28.9613L19.6024 30.8125H13.375C13.8226 30.8125 14.2518 30.6347 14.5682 30.3182C14.8847 30.0018 15.0625 29.5726 15.0625 29.125C15.0625 28.6774 14.8847 28.2482 14.5682 27.9318C14.2518 27.6153 13.8226 27.4375 13.375 27.4375H6.30944C5.71275 27.4376 5.14055 27.6748 4.71869 28.0968L1.5625 31.2524" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M19.5625 25.1875V24.625C19.5625 22.984 18.9106 21.4102 17.7502 20.2498C16.5898 19.0894 15.016 18.4375 13.375 18.4375C11.734 18.4375 10.1602 19.0894 8.99978 20.2498C7.8394 21.4102 7.1875 22.984 7.1875 24.625V25.1875" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M5.5 25.1875H21.25" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M13.375 18.4375V17.3125" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M28 13.375H25.1875" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M31.3754 19L29.4803 17.3125H17.7066C17.1421 17.3125 16.5982 17.1003 16.1828 16.7179L13.3703 14.1304C13.1881 13.9483 13.0448 13.7308 12.9494 13.4915C12.8539 13.2521 12.8082 12.9958 12.8151 12.7382C12.822 12.4805 12.8813 12.227 12.9895 11.9931C13.0976 11.7592 13.2523 11.5497 13.444 11.3776C13.8267 11.0572 14.3167 10.8941 14.815 10.9212C15.3133 10.9484 15.7827 11.1638 16.1283 11.5238L18.398 13.375H24.6254C24.1778 13.375 23.7486 13.1972 23.4321 12.8807C23.1157 12.5643 22.9379 12.1351 22.9379 11.6875C22.9379 11.2399 23.1157 10.8107 23.4321 10.4943C23.7486 10.1778 24.1778 10 24.6254 10H31.691C32.2876 10.0001 32.8598 10.2373 33.2817 10.6593L36.4379 13.8149" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
              <span>Total Sales</span>
              <span className='amount'>$2334</span>

            </div>

            <div className='card'>
              <span className='icon'>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.7207 5.5H19.5625C19.2641 5.5 18.978 5.61853 18.767 5.82951C18.556 6.04048 18.4375 6.32663 18.4375 6.625C18.4375 6.92337 18.556 7.20952 18.767 7.42049C18.978 7.63147 19.2641 7.75 19.5625 7.75H19.5957C19.8941 7.75 20.1802 7.86853 20.3912 8.07951C20.6022 8.29048 20.7207 8.57663 20.7207 8.875C20.7207 9.17337 20.6022 9.45952 20.3912 9.67049C20.1802 9.88147 19.8941 10 19.5957 10H18.4375" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M19.5625 5.5V4.375" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M19.5625 11.125V10" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M10.5625 13.375H7.75V1.5625H31.375V7.75" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M11.125 3.8125C11.125 4.11087 11.0065 4.39702 10.7955 4.608C10.5845 4.81897 10.2984 4.9375 10 4.9375" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M28 3.8125C28 4.11087 28.1185 4.39702 28.3295 4.608C28.5405 4.81897 28.8266 4.9375 29.125 4.9375" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M10 10C10.2984 10 10.5845 10.1185 10.7955 10.3295C11.0065 10.5405 11.125 10.8266 11.125 11.125" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M10 30.8125H12.8125" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M6.625 36.4375L8.52006 34.75H20.2937C20.8583 34.75 21.4022 34.5378 21.8176 34.1554L24.6301 31.5679C24.8123 31.3858 24.9556 31.1683 25.051 30.929C25.1465 30.6896 25.1922 30.4333 25.1853 30.1757C25.1784 29.918 25.119 29.6645 25.0109 29.4306C24.9028 29.1967 24.7481 28.9872 24.5564 28.8151C24.1737 28.4947 23.6837 28.3316 23.1854 28.3587C22.6871 28.3859 22.2177 28.6013 21.8721 28.9613L19.6024 30.8125H13.375C13.8226 30.8125 14.2518 30.6347 14.5682 30.3182C14.8847 30.0018 15.0625 29.5726 15.0625 29.125C15.0625 28.6774 14.8847 28.2482 14.5682 27.9318C14.2518 27.6153 13.8226 27.4375 13.375 27.4375H6.30944C5.71275 27.4376 5.14055 27.6748 4.71869 28.0968L1.5625 31.2524" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M19.5625 25.1875V24.625C19.5625 22.984 18.9106 21.4102 17.7502 20.2498C16.5898 19.0894 15.016 18.4375 13.375 18.4375C11.734 18.4375 10.1602 19.0894 8.99978 20.2498C7.8394 21.4102 7.1875 22.984 7.1875 24.625V25.1875" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M5.5 25.1875H21.25" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M13.375 18.4375V17.3125" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M28 13.375H25.1875" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M31.3754 19L29.4803 17.3125H17.7066C17.1421 17.3125 16.5982 17.1003 16.1828 16.7179L13.3703 14.1304C13.1881 13.9483 13.0448 13.7308 12.9494 13.4915C12.8539 13.2521 12.8082 12.9958 12.8151 12.7382C12.822 12.4805 12.8813 12.227 12.9895 11.9931C13.0976 11.7592 13.2523 11.5497 13.444 11.3776C13.8267 11.0572 14.3167 10.8941 14.815 10.9212C15.3133 10.9484 15.7827 11.1638 16.1283 11.5238L18.398 13.375H24.6254C24.1778 13.375 23.7486 13.1972 23.4321 12.8807C23.1157 12.5643 22.9379 12.1351 22.9379 11.6875C22.9379 11.2399 23.1157 10.8107 23.4321 10.4943C23.7486 10.1778 24.1778 10 24.6254 10H31.691C32.2876 10.0001 32.8598 10.2373 33.2817 10.6593L36.4379 13.8149" stroke="#F01543" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
              <span>Total Sales</span>
              <span className='amount'>$2334</span>

            </div>

          </div>

        </div>

        <div className='section-2'>
          <span className='title'>
            <h2>Recent Orders</h2>
          </span>
          <div>
            <table className='table'>

              <thead>
                <th>Order Id</th>
                <th>Type</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Payment Status</th>
                <th>Payment Method</th>
                <th>Total</th>
                <th>Order Status</th>
              </thead>

              <tbody>
                <tr>

                  <td>#22</td>
                  <td>delivery</td>
                  <td>John Doe</td>
                  <td>Jan 27, 2024 12:12 PM</td>
                  <td className='success'>Success</td>
                  <td>Bank Payment</td>
                  <td>$177.5</td>
                  <td className='pending'>Pending</td>

                </tr>

                <tr>

<td>#22</td>
<td>delivery</td>
<td>John Doe</td>
<td>Jan 27, 2024 12:12 PM</td>
<td className='success'>Success</td>
<td>Bank Payment</td>
<td>$177.5</td>
<td className='pending'>Pending</td>

</tr>



<tr>

<td>#22</td>
<td>delivery</td>
<td>John Doe</td>
<td>Jan 27, 2024 12:12 PM</td>
<td className='success'>Success</td>
<td>Bank Payment</td>
<td>$177.5</td>
<td className='pending'>Pending</td>

</tr>



<tr>

<td>#22</td>
<td>delivery</td>
<td>John Doe</td>
<td>Jan 27, 2024 12:12 PM</td>
<td className='success'>Success</td>
<td>Bank Payment</td>
<td>$177.5</td>
<td className='pending'>Pending</td>

</tr>


<tr>

<td>#22</td>
<td>delivery</td>
<td>John Doe</td>
<td>Jan 27, 2024 12:12 PM</td>
<td className='success'>Success</td>
<td>Bank Payment</td>
<td>$177.5</td>
<td className='pending'>Pending</td>

</tr>


              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home