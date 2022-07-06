<template>
    <nav class="navbar navbar-expand-lg container-section navbar-section">
        <div class="container-fluid">
            <div class="navbar-left d-flex align-items-center">
                <a class="navbar-brand">
                    <div id="logo"  class="position-relative">
                        <img :src=" asset + 'images/logo/subtract.png'" id="subtract" />
                        <img :src=" asset + 'images/logo/foodzero.png'" id="foodzero" />
                    </div>
                </a>

                <button class="navbar-menu-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menunavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="bi bi-list"></i>
                </button>
            </div>

            <div class="navbar-right d-flex align-items-center">
                <div class="contact-number">
                    <span>+86 852 346 000</span>
                </div>

                <a class="navbar-reservation-btn" href="#reservation">
                    Reservations
                </a>
            </div>
        </div>

        <div class="navbar-item-full collapse" id="menunavbar">
            <div class="bg-navbar">
                <img :src="asset + 'images/header/bk-header.png'" class="social-icon" />
            </div>

            <div class="row gx-5 navbar-item-content position-relative">
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                    <ul>
                        <li class="list-menu position-relative" :class="navigation.current == 'home' ? 'active' : ''">
                            <router-link to="/" class="menu-list-item">Home</router-link>
                        </li>
                        <li class="list-menu position-relative" :class="navigation.current == 'menus' ? 'active' : ''">
                            <router-link to="/menus" class="menu-list-item">Menu</router-link>
                        </li>
                        <li class="list-menu position-relative" :class="navigation.current == 'about-us' ? 'active' : ''">
                            <router-link to="/about-us" class="menu-list-item">About</router-link>
                        </li>
                        <li class="list-menu position-relative" :class="navigation.current == 'contact' ? 'active' : ''">
                            <router-link to="/contact" class="menu-list-item">Contact</router-link>
                        </li>
                    </ul>
                </div>

                <div class="col-md-6 d-flex position-relative">
                    <div class="navbar-contact contact-container d-flex flex-column justify-content-between">
                        <div class="little-title dashed" >
                            Contact
                        </div>

                        <div class="contact-info d-flex flex-column justify-content-between" >
                            <span>
                                +1+86 852 346 000<br/><a href="mailto:info@foodzero.com" target="_blank">info@foodzero.com</a>
                            </span>

                            <span class="address">
                                1959 Sepulveda Blvd.<br/>Culver City, CA, 90230
                            </span>
                        </div>

                        <div class="navbar-contact-social">
                            <img :src="asset + 'icons/icon-insta.png'" class="social-icon" />
                            <img :src="asset + 'icons/icon-twitter.png'" class="social-icon ml-2" />
                            <img :src="asset + 'icons/icon-fb.png'" class="social-icon ml-2" />
                            <img :src="asset + 'icons/icon-ytb.png'" class="social-icon ml-2" />
                        </div>
                    </div>
                </div>

                <button class="navbar-close" type="button" data-bs-toggle="collapse" data-bs-target="#menunavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="bi bi-x-lg color-black"></i>
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
    import { useNavigationStore } from '@/store/navigation'
    export default {
        name: 'navbar',

        setup(){
            const asset = window.baseurl + '/';
            const navigation = useNavigationStore();

            return {
                asset,
                navigation
            }
        }
    }
</script>

<style lang="sass">
    @import '@/assets/navbar.scss'
</style>