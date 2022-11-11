<template>
    
<div class="main-widget">
    <div class="filter-line">
        <div class="filter-cup">\/ FILTER</div>
        <div class="filter-nav">
            <div>All</div>
            <div>Rent</div>
            <div>Sale</div>
        </div>
    </div>
    <div><input type="text" class="property" placeholder="KEYWORD"></div>
    <div class="select-detail">
        <div class="l-detail-select">
            <div>
                <select name="" id="">
                    <option value="">Category</option>
                    <option value="">Upstairs</option>
                    <option value="">Basement</option>
                </select>
            </div>
            <div>
                <select name="" id="">
                    <option value="">No. of Bedroom</option>
                    <option value="">1</option>
                    <option value="">2</option>
                </select>
            </div>
            <div>
                <label for="Price">Price: $<span id="val-less">00</span>.00 - $<span id="val">10,000</span>.00</label> <br>
                <input type="range" min="0" max="10000" value="5000" name="" id="">
            </div>
        </div>
        <div class="r-detail-select">
            <div>
                <select name="" id="">
                    <option value="">Location</option>
                    <option value="">Paynesville</option>
                    <option value="">Congo Town</option>
                    <option value="">Sinkor</option>
                </select>
            </div>
            <div>
                <select name="" id="">
                    <option value="">No. of Bathroom</option>
                    <option value="">1</option>
                    <option value="">2</option>
                </select>
            </div>
            <div><button>Find it</button></div>
        </div>
    </div>
</div>

<div class="bottom-content">
    <div>OUR LATEST POSTINGS</div>
    <div>\/</div>
</div>

</template>

<script>
    export default {name: "Homewidget"}
</script>

<style scoped>
.container{
    height: 100vh;
}
.main-widget{
  margin: 3.78% 20%;
}
.bottom-content{
    margin-top:0;
    padding-bottom: 1rem;
}
@media (max-width: 768px)
{.main-widget {
  margin: 10% 5%;
}}
</style>