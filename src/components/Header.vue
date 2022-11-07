<template>
        <div class="header">
            <div class="logo"><a href="/">SILKROAD</a> </div>
            <div class="nav">
                <div class="top-nav">
                    <div class="home">
                        <div><a href="/">Home</a> </div>
                        <div><a href="/property-list">Our Property</a> </div>
                    </div>
                    <div class="auth">
                        <div class="aut1"><a href="/login">Login</a></div>
                        <hr class="aut-m">
                        <div class="aut1"><a href="/register">Register</a></div>
                    </div>
                </div>
                <!-- <i class="fa-facebook-f" -->
                <hr class="divider">
                <div class="bottom-nav">
                    <div><a href="/home-widget"> Widget</a></div>

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