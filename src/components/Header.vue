<template>
        <div class="header">
            <div class="logo"><a href="/">SILKROAD</a> </div>
            <div class="nav">
                <div class="top-nav">
                    <div class="home">
                        <div><router-link to="/">Home</router-link> </div>
                        <div><router-link to="/property-list">Our Property</router-link> </div>
                    </div>
                    <div class="auth">
                        <div class="aut1"><router-link to="/login">Login</router-link></div>
                        <hr class="aut-m">
                        <div class="aut1"><router-link to="/register">Register</router-link></div>
                    </div>
                </div>
                <!-- <i class="fa-facebook-f" -->
                <hr class="divider">
                <div class="bottom-nav">
                    <div><router-link to="/home-widget"> Widget</router-link></div>

                    <div class="prty-btn"><button>Post a Property</button></div>
                </div>
            </div>
        </div>
</template>

<script lang="ts">
    export default {
        name: "Header",
        
    }
</script>

<style scoped>

</style>