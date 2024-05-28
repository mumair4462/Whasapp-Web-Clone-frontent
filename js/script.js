
var chartPart = document.querySelector("#chart-container");

console.log(chartPart)

var irfan_html = `
<!-- data  -->
                    <div style="text-align: center;">
                        <div class="date">
                            <p>7/8/2022</p>
                        </div>
                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">A.O.A</p>
                            <p class="time">7:16 AM</p>
                        </div>

                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>
                    
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">ap sanao kya hall ha ap ka</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>

                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">allah ka suker ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- received  -->
                    <div>
                        <div class="received">
                            <p class="msg">aj clg gay tha?</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>

                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">G</p>
                            <p class="time">7:20 AM</p>
                        </div>
                    </div>
                    <!-- data  -->
                    <div style="text-align: center;">
                        <div class="date">
                            <p>8/8/2022</p>
                        </div>
                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">A.O.A</p>
                            <p class="time">7:16 AM</p>
                        </div>

                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>
                    
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">ap sanao kya hall ha ap ka</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>

                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">allah ka suker ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- received  -->
                    <div>
                        <div class="received">
                            <p class="msg">aj clg gay tha?</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>

                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">G</p>
                            <p class="time">7:20 AM</p>
                        </div>
                    </div>
`;

var abdulla_html = `
<!-- data  -->
    <div style="text-align: center;">
        <div class="date">
            <p>9/8/2022</p>
        </div>
    </div>
    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">hi</p>
            <p class="time">7:16 AM</p>
        </div>

    </div>
    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">kya hall ha</p>
            <p class="time">7:16 AM</p>
        </div>
    </div>
    
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">thak ap sanao</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">kasa yad kaya</p>
            <p class="time">7:16 AM</p>
        </div>
    </div>

    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">wasa hi</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- received  -->
    <div>
        <div class="received">
            <p class="msg">clg ja raha ho</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>

    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">nahi</p>
            <p class="time">7:20 AM</p>
        </div>
    </div>
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">ap?</p>
            <p class="time">7:20 AM</p>
        </div>
    </div>
    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">nahi</p>
            <p class="time">7:16 AM</p>
        </div>

    </div>
    
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">ok</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">ap sanao kya hall ha ap ka</p>
            <p class="time">7:16 AM</p>
        </div>
    </div>

    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">allah ka suker ha</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- received  -->
    <div>
        <div class="received">
            <p class="msg">aj clg gay tha?</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>

    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">a.o.a</p>
            <p class="time">7:20 AM</p>
        </div>
    </div>
`;

var mazhar_html = `
<!-- data  -->
<div style="text-align: center;">
    <div class="date">
        <p>9/8/2022</p>
    </div>
</div>
<!-- received -->
<div>
    <div class="received">
        <p class="msg">hi</p>
        <p class="time">7:16 AM</p>
    </div>

</div>
<!-- received -->
<div>
    <div class="received">
        <p class="msg">kya hall ha</p>
        <p class="time">7:16 AM</p>
    </div>
</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">thak ap sanao</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">kasa yad kaya</p>
        <p class="time">7:16 AM</p>
    </div>
</div>

<!-- received -->
<div>
    <div class="received">
        <p class="msg">wasa hi</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- received  -->
<div>
    <div class="received">
        <p class="msg">clg ja raha ho</p>
        <p class="time">7:17 AM</p>
    </div>
</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">nahi</p>
        <p class="time">7:20 AM</p>
    </div>
</div>
<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">ap?</p>
        <p class="time">7:20 AM</p>
    </div>
</div>
<!-- received -->
<div>
    <div class="received">
        <p class="msg">nahi</p>
        <p class="time">7:16 AM</p>
    </div>

</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">ok</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">ap sanao kya hall ha ap ka</p>
        <p class="time">7:16 AM</p>
    </div>
</div>

<!-- received -->
<div>
    <div class="received">
        <p class="msg">allah ka suker ha</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- received  -->
<div>
    <div class="received">
        <p class="msg">aj clg gay tha?</p>
        <p class="time">7:17 AM</p>
    </div>
</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">a.o.a</p>
        <p class="time">7:20 AM</p>
    </div>
</div>
`;

var webTech_html = `
<!-- data  -->
                    <div style="text-align: center;">
                        <div class="date">
                            <p>7/8/2022</p>
                        </div>
                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">A.O.A</p>
                            <p class="time">7:16 AM</p>
                        </div>

                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>
                    
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">ap sanao kya hall ha ap ka</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>

                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">allah ka suker ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- received  -->
                    <div>
                        <div class="received">
                            <p class="msg">aj clg gay tha?</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>

                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">G</p>
                            <p class="time">7:20 AM</p>
                        </div>
                    </div>
                    <!-- data  -->
                    <div style="text-align: center;">
                        <div class="date">
                            <p>8/8/2022</p>
                        </div>
                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">A.O.A</p>
                            <p class="time">7:16 AM</p>
                        </div>

                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>
                    
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">ap sanao kya hall ha ap ka</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>

                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">allah ka suker ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- received  -->
                    <div>
                        <div class="received">
                            <p class="msg">aj clg gay tha?</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>

                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">G</p>
                            <p class="time">7:20 AM</p>
                        </div>
                    </div>
`;

var waheed_html = `
<!-- data  -->
    <div style="text-align: center;">
        <div class="date">
            <p>9/8/2022</p>
        </div>
    </div>
    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">hi</p>
            <p class="time">7:16 AM</p>
        </div>

    </div>
    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">kya hall ha</p>
            <p class="time">7:16 AM</p>
        </div>
    </div>
    
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">thak ap sanao</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">kasa yad kaya</p>
            <p class="time">7:16 AM</p>
        </div>
    </div>

    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">wasa hi</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- received  -->
    <div>
        <div class="received">
            <p class="msg">clg ja raha ho</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>

    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">nahi</p>
            <p class="time">7:20 AM</p>
        </div>
    </div>
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">ap?</p>
            <p class="time">7:20 AM</p>
        </div>
    </div>
    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">nahi</p>
            <p class="time">7:16 AM</p>
        </div>

    </div>
    
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">ok</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">ap sanao kya hall ha ap ka</p>
            <p class="time">7:16 AM</p>
        </div>
    </div>

    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">allah ka suker ha</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- received  -->
    <div>
        <div class="received">
            <p class="msg">aj clg gay tha?</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>

    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">a.o.a</p>
            <p class="time">7:20 AM</p>
        </div>
    </div>
`;

var sunsan_html = `
<!-- data  -->
<div style="text-align: center;">
    <div class="date">
        <p>9/8/2022</p>
    </div>
</div>
<!-- received -->
<div>
    <div class="received">
        <p class="msg">hi</p>
        <p class="time">7:16 AM</p>
    </div>

</div>
<!-- received -->
<div>
    <div class="received">
        <p class="msg">kya hall ha</p>
        <p class="time">7:16 AM</p>
    </div>
</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">thak ap sanao</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">kasa yad kaya</p>
        <p class="time">7:16 AM</p>
    </div>
</div>

<!-- received -->
<div>
    <div class="received">
        <p class="msg">wasa hi</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- received  -->
<div>
    <div class="received">
        <p class="msg">clg ja raha ho</p>
        <p class="time">7:17 AM</p>
    </div>
</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">nahi</p>
        <p class="time">7:20 AM</p>
    </div>
</div>
<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">ap?</p>
        <p class="time">7:20 AM</p>
    </div>
</div>
<!-- received -->
<div>
    <div class="received">
        <p class="msg">nahi</p>
        <p class="time">7:16 AM</p>
    </div>

</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">ok</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">ap sanao kya hall ha ap ka</p>
        <p class="time">7:16 AM</p>
    </div>
</div>

<!-- received -->
<div>
    <div class="received">
        <p class="msg">allah ka suker ha</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- received  -->
<div>
    <div class="received">
        <p class="msg">aj clg gay tha?</p>
        <p class="time">7:17 AM</p>
    </div>
</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">a.o.a</p>
        <p class="time">7:20 AM</p>
    </div>
</div>
`;

var qudoos_html = `
<!-- data  -->
                    <div style="text-align: center;">
                        <div class="date">
                            <p>7/8/2022</p>
                        </div>
                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">A.O.A</p>
                            <p class="time">7:16 AM</p>
                        </div>

                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>
                    
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">ap sanao kya hall ha ap ka</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>

                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">allah ka suker ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- received  -->
                    <div>
                        <div class="received">
                            <p class="msg">aj clg gay tha?</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>

                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">G</p>
                            <p class="time">7:20 AM</p>
                        </div>
                    </div>
                    <!-- data  -->
                    <div style="text-align: center;">
                        <div class="date">
                            <p>8/8/2022</p>
                        </div>
                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">A.O.A</p>
                            <p class="time">7:16 AM</p>
                        </div>

                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>
                    
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">ap sanao kya hall ha ap ka</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>

                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">allah ka suker ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- received  -->
                    <div>
                        <div class="received">
                            <p class="msg">aj clg gay tha?</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>

                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">G</p>
                            <p class="time">7:20 AM</p>
                        </div>
                    </div>
`;

var hammad_html = `
<!-- data  -->
    <div style="text-align: center;">
        <div class="date">
            <p>9/8/2022</p>
        </div>
    </div>
    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">hi</p>
            <p class="time">7:16 AM</p>
        </div>

    </div>
    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">kya hall ha</p>
            <p class="time">7:16 AM</p>
        </div>
    </div>
    
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">thak ap sanao</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">kasa yad kaya</p>
            <p class="time">7:16 AM</p>
        </div>
    </div>

    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">wasa hi</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- received  -->
    <div>
        <div class="received">
            <p class="msg">clg ja raha ho</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>

    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">nahi</p>
            <p class="time">7:20 AM</p>
        </div>
    </div>
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">ap?</p>
            <p class="time">7:20 AM</p>
        </div>
    </div>
    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">nahi</p>
            <p class="time">7:16 AM</p>
        </div>

    </div>
    
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">ok</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">ap sanao kya hall ha ap ka</p>
            <p class="time">7:16 AM</p>
        </div>
    </div>

    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">allah ka suker ha</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- received  -->
    <div>
        <div class="received">
            <p class="msg">aj clg gay tha?</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>

    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">a.o.a</p>
            <p class="time">7:20 AM</p>
        </div>
    </div>
`;

var irfan2_html = `
<!-- data  -->
<div style="text-align: center;">
    <div class="date">
        <p>9/8/2022</p>
    </div>
</div>
<!-- received -->
<div>
    <div class="received">
        <p class="msg">hi</p>
        <p class="time">7:16 AM</p>
    </div>

</div>
<!-- received -->
<div>
    <div class="received">
        <p class="msg">kya hall ha</p>
        <p class="time">7:16 AM</p>
    </div>
</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">thak ap sanao</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">kasa yad kaya</p>
        <p class="time">7:16 AM</p>
    </div>
</div>

<!-- received -->
<div>
    <div class="received">
        <p class="msg">wasa hi</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- received  -->
<div>
    <div class="received">
        <p class="msg">clg ja raha ho</p>
        <p class="time">7:17 AM</p>
    </div>
</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">nahi</p>
        <p class="time">7:20 AM</p>
    </div>
</div>
<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">ap?</p>
        <p class="time">7:20 AM</p>
    </div>
</div>
<!-- received -->
<div>
    <div class="received">
        <p class="msg">nahi</p>
        <p class="time">7:16 AM</p>
    </div>

</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">ok</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">ap sanao kya hall ha ap ka</p>
        <p class="time">7:16 AM</p>
    </div>
</div>

<!-- received -->
<div>
    <div class="received">
        <p class="msg">allah ka suker ha</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- received  -->
<div>
    <div class="received">
        <p class="msg">aj clg gay tha?</p>
        <p class="time">7:17 AM</p>
    </div>
</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">a.o.a</p>
        <p class="time">7:20 AM</p>
    </div>
</div>
`;

var nasar_html = `
<!-- data  -->
                    <div style="text-align: center;">
                        <div class="date">
                            <p>7/8/2022</p>
                        </div>
                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">A.O.A</p>
                            <p class="time">7:16 AM</p>
                        </div>

                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>
                    
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">ap sanao kya hall ha ap ka</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>

                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">allah ka suker ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- received  -->
                    <div>
                        <div class="received">
                            <p class="msg">aj clg gay tha?</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>

                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">G</p>
                            <p class="time">7:20 AM</p>
                        </div>
                    </div>
                    <!-- data  -->
                    <div style="text-align: center;">
                        <div class="date">
                            <p>8/8/2022</p>
                        </div>
                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">A.O.A</p>
                            <p class="time">7:16 AM</p>
                        </div>

                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>
                    
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">ap sanao kya hall ha ap ka</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>

                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">allah ka suker ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- received  -->
                    <div>
                        <div class="received">
                            <p class="msg">aj clg gay tha?</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>

                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">G</p>
                            <p class="time">7:20 AM</p>
                        </div>
                    </div>
`;

var enterprise_html = `
<!-- data  -->
    <div style="text-align: center;">
        <div class="date">
            <p>9/8/2022</p>
        </div>
    </div>
    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">hi</p>
            <p class="time">7:16 AM</p>
        </div>

    </div>
    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">kya hall ha</p>
            <p class="time">7:16 AM</p>
        </div>
    </div>
    
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">thak ap sanao</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">kasa yad kaya</p>
            <p class="time">7:16 AM</p>
        </div>
    </div>

    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">wasa hi</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- received  -->
    <div>
        <div class="received">
            <p class="msg">clg ja raha ho</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>

    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">nahi</p>
            <p class="time">7:20 AM</p>
        </div>
    </div>
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">ap?</p>
            <p class="time">7:20 AM</p>
        </div>
    </div>
    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">nahi</p>
            <p class="time">7:16 AM</p>
        </div>

    </div>
    
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">ok</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">ap sanao kya hall ha ap ka</p>
            <p class="time">7:16 AM</p>
        </div>
    </div>

    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">allah ka suker ha</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- received  -->
    <div>
        <div class="received">
            <p class="msg">aj clg gay tha?</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>

    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">a.o.a</p>
            <p class="time">7:20 AM</p>
        </div>
    </div>
`;

var moshin_html = `
<!-- data  -->
<div style="text-align: center;">
    <div class="date">
        <p>9/8/2022</p>
    </div>
</div>
<!-- received -->
<div>
    <div class="received">
        <p class="msg">hi</p>
        <p class="time">7:16 AM</p>
    </div>

</div>
<!-- received -->
<div>
    <div class="received">
        <p class="msg">kya hall ha</p>
        <p class="time">7:16 AM</p>
    </div>
</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">thak ap sanao</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">kasa yad kaya</p>
        <p class="time">7:16 AM</p>
    </div>
</div>

<!-- received -->
<div>
    <div class="received">
        <p class="msg">wasa hi</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- received  -->
<div>
    <div class="received">
        <p class="msg">clg ja raha ho</p>
        <p class="time">7:17 AM</p>
    </div>
</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">nahi</p>
        <p class="time">7:20 AM</p>
    </div>
</div>
<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">ap?</p>
        <p class="time">7:20 AM</p>
    </div>
</div>
<!-- received -->
<div>
    <div class="received">
        <p class="msg">nahi</p>
        <p class="time">7:16 AM</p>
    </div>

</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">ok</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">ap sanao kya hall ha ap ka</p>
        <p class="time">7:16 AM</p>
    </div>
</div>

<!-- received -->
<div>
    <div class="received">
        <p class="msg">allah ka suker ha</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- received  -->
<div>
    <div class="received">
        <p class="msg">aj clg gay tha?</p>
        <p class="time">7:17 AM</p>
    </div>
</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">a.o.a</p>
        <p class="time">7:20 AM</p>
    </div>
</div>
`;

var tanvir_html = `
<!-- data  -->
                    <div style="text-align: center;">
                        <div class="date">
                            <p>7/8/2022</p>
                        </div>
                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">A.O.A</p>
                            <p class="time">7:16 AM</p>
                        </div>

                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>
                    
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">ap sanao kya hall ha ap ka</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>

                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">allah ka suker ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- received  -->
                    <div>
                        <div class="received">
                            <p class="msg">aj clg gay tha?</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>

                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">G</p>
                            <p class="time">7:20 AM</p>
                        </div>
                    </div>
                    <!-- data  -->
                    <div style="text-align: center;">
                        <div class="date">
                            <p>8/8/2022</p>
                        </div>
                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">A.O.A</p>
                            <p class="time">7:16 AM</p>
                        </div>

                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>
                    
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">ap sanao kya hall ha ap ka</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>

                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">allah ka suker ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- received  -->
                    <div>
                        <div class="received">
                            <p class="msg">aj clg gay tha?</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>

                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">G</p>
                            <p class="time">7:20 AM</p>
                        </div>
                    </div>
`;

var abu_html = `
<!-- data  -->
    <div style="text-align: center;">
        <div class="date">
            <p>9/8/2022</p>
        </div>
    </div>
    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">hi</p>
            <p class="time">7:16 AM</p>
        </div>

    </div>
    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">kya hall ha</p>
            <p class="time">7:16 AM</p>
        </div>
    </div>
    
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">thak ap sanao</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">kasa yad kaya</p>
            <p class="time">7:16 AM</p>
        </div>
    </div>

    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">wasa hi</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- received  -->
    <div>
        <div class="received">
            <p class="msg">clg ja raha ho</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>

    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">nahi</p>
            <p class="time">7:20 AM</p>
        </div>
    </div>
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">ap?</p>
            <p class="time">7:20 AM</p>
        </div>
    </div>
    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">nahi</p>
            <p class="time">7:16 AM</p>
        </div>

    </div>
    
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">ok</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">ap sanao kya hall ha ap ka</p>
            <p class="time">7:16 AM</p>
        </div>
    </div>

    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">allah ka suker ha</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- received  -->
    <div>
        <div class="received">
            <p class="msg">aj clg gay tha?</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>

    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">a.o.a</p>
            <p class="time">7:20 AM</p>
        </div>
    </div>
`;

var afzal_html = `
<!-- data  -->
<div style="text-align: center;">
    <div class="date">
        <p>9/8/2022</p>
    </div>
</div>
<!-- received -->
<div>
    <div class="received">
        <p class="msg">hi</p>
        <p class="time">7:16 AM</p>
    </div>

</div>
<!-- received -->
<div>
    <div class="received">
        <p class="msg">kya hall ha</p>
        <p class="time">7:16 AM</p>
    </div>
</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">thak ap sanao</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">kasa yad kaya</p>
        <p class="time">7:16 AM</p>
    </div>
</div>

<!-- received -->
<div>
    <div class="received">
        <p class="msg">wasa hi</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- received  -->
<div>
    <div class="received">
        <p class="msg">clg ja raha ho</p>
        <p class="time">7:17 AM</p>
    </div>
</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">nahi</p>
        <p class="time">7:20 AM</p>
    </div>
</div>
<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">ap?</p>
        <p class="time">7:20 AM</p>
    </div>
</div>
<!-- received -->
<div>
    <div class="received">
        <p class="msg">nahi</p>
        <p class="time">7:16 AM</p>
    </div>

</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">ok</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">ap sanao kya hall ha ap ka</p>
        <p class="time">7:16 AM</p>
    </div>
</div>

<!-- received -->
<div>
    <div class="received">
        <p class="msg">allah ka suker ha</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- received  -->
<div>
    <div class="received">
        <p class="msg">aj clg gay tha?</p>
        <p class="time">7:17 AM</p>
    </div>
</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">a.o.a</p>
        <p class="time">7:20 AM</p>
    </div>
</div>
`;

var infastructure_html = `
<!-- data  -->
                    <div style="text-align: center;">
                        <div class="date">
                            <p>7/8/2022</p>
                        </div>
                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">A.O.A</p>
                            <p class="time">7:16 AM</p>
                        </div>

                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>
                    
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">ap sanao kya hall ha ap ka</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>

                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">allah ka suker ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- received  -->
                    <div>
                        <div class="received">
                            <p class="msg">aj clg gay tha?</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>

                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">G</p>
                            <p class="time">7:20 AM</p>
                        </div>
                    </div>
                    <!-- data  -->
                    <div style="text-align: center;">
                        <div class="date">
                            <p>8/8/2022</p>
                        </div>
                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">A.O.A</p>
                            <p class="time">7:16 AM</p>
                        </div>

                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>
                    
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">ap sanao kya hall ha ap ka</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>

                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">allah ka suker ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- received  -->
                    <div>
                        <div class="received">
                            <p class="msg">aj clg gay tha?</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>

                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">G</p>
                            <p class="time">7:20 AM</p>
                        </div>
                    </div>
`;

var ggcp_html = `
<!-- data  -->
    <div style="text-align: center;">
        <div class="date">
            <p>9/8/2022</p>
        </div>
    </div>
    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">hi</p>
            <p class="time">7:16 AM</p>
        </div>

    </div>
    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">kya hall ha</p>
            <p class="time">7:16 AM</p>
        </div>
    </div>
    
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">thak ap sanao</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">kasa yad kaya</p>
            <p class="time">7:16 AM</p>
        </div>
    </div>

    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">wasa hi</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- received  -->
    <div>
        <div class="received">
            <p class="msg">clg ja raha ho</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>

    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">nahi</p>
            <p class="time">7:20 AM</p>
        </div>
    </div>
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">ap?</p>
            <p class="time">7:20 AM</p>
        </div>
    </div>
    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">nahi</p>
            <p class="time">7:16 AM</p>
        </div>

    </div>
    
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">ok</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">ap sanao kya hall ha ap ka</p>
            <p class="time">7:16 AM</p>
        </div>
    </div>

    <!-- received -->
    <div>
        <div class="received">
            <p class="msg">allah ka suker ha</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>
    <!-- received  -->
    <div>
        <div class="received">
            <p class="msg">aj clg gay tha?</p>
            <p class="time">7:17 AM</p>
        </div>
    </div>

    <!-- sender  -->
    <div class="sender-container">
        <div class="received sender">
            <p class="msg">a.o.a</p>
            <p class="time">7:20 AM</p>
        </div>
    </div>
`;

var bsit_html = `
<!-- data  -->
<div style="text-align: center;">
    <div class="date">
        <p>9/8/2022</p>
    </div>
</div>
<!-- received -->
<div>
    <div class="received">
        <p class="msg">hi</p>
        <p class="time">7:16 AM</p>
    </div>

</div>
<!-- received -->
<div>
    <div class="received">
        <p class="msg">kya hall ha</p>
        <p class="time">7:16 AM</p>
    </div>
</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">thak ap sanao</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">kasa yad kaya</p>
        <p class="time">7:16 AM</p>
    </div>
</div>

<!-- received -->
<div>
    <div class="received">
        <p class="msg">wasa hi</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- received  -->
<div>
    <div class="received">
        <p class="msg">clg ja raha ho</p>
        <p class="time">7:17 AM</p>
    </div>
</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">nahi</p>
        <p class="time">7:20 AM</p>
    </div>
</div>
<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">ap?</p>
        <p class="time">7:20 AM</p>
    </div>
</div>
<!-- received -->
<div>
    <div class="received">
        <p class="msg">nahi</p>
        <p class="time">7:16 AM</p>
    </div>

</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">ok</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">ap sanao kya hall ha ap ka</p>
        <p class="time">7:16 AM</p>
    </div>
</div>

<!-- received -->
<div>
    <div class="received">
        <p class="msg">allah ka suker ha</p>
        <p class="time">7:17 AM</p>
    </div>
</div>
<!-- received  -->
<div>
    <div class="received">
        <p class="msg">aj clg gay tha?</p>
        <p class="time">7:17 AM</p>
    </div>
</div>

<!-- sender  -->
<div class="sender-container">
    <div class="received sender">
        <p class="msg">a.o.a</p>
        <p class="time">7:20 AM</p>
    </div>
</div>
`;

var mining_html = `
<!-- data  -->
                    <div style="text-align: center;">
                        <div class="date">
                            <p>7/8/2022</p>
                        </div>
                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">A.O.A</p>
                            <p class="time">7:16 AM</p>
                        </div>

                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>
                    
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">ap sanao kya hall ha ap ka</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>

                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">allah ka suker ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- received  -->
                    <div>
                        <div class="received">
                            <p class="msg">aj clg gay tha?</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>

                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">G</p>
                            <p class="time">7:20 AM</p>
                        </div>
                    </div>
                    <!-- data  -->
                    <div style="text-align: center;">
                        <div class="date">
                            <p>8/8/2022</p>
                        </div>
                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">A.O.A</p>
                            <p class="time">7:16 AM</p>
                        </div>

                    </div>
                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>
                    
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">kya hall ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">ap sanao kya hall ha ap ka</p>
                            <p class="time">7:16 AM</p>
                        </div>
                    </div>

                    <!-- received -->
                    <div>
                        <div class="received">
                            <p class="msg">allah ka suker ha</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>
                    <!-- received  -->
                    <div>
                        <div class="received">
                            <p class="msg">aj clg gay tha?</p>
                            <p class="time">7:17 AM</p>
                        </div>
                    </div>

                    <!-- sender  -->
                    <div class="sender-container">
                        <div class="received sender">
                            <p class="msg">G</p>
                            <p class="time">7:20 AM</p>
                        </div>
                    </div>
`;

var welcomes_html = `
<div class="welcome-container">

                <div class="part1">
                
                    <svg width="360" viewBox="0 0 303 172" fill="none" preserveAspectRatio="xMidYMid meet" class="">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M229.565 160.229c32.647-10.984 57.366-41.988 53.825-86.81-5.381-68.1-71.025-84.993-111.918-64.932C115.998 35.7 108.972 40.16 69.239 40.16c-29.594 0-59.726 14.254-63.492 52.791-2.73 27.933 8.252 52.315 48.89 64.764 73.962 22.657 143.38 13.128 174.928 2.513Z"
                            fill="#364147"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M131.589 68.942h.01c6.261 0 11.336-5.263 11.336-11.756S137.86 45.43 131.599 45.43c-5.081 0-9.381 3.466-10.822 8.242a7.302 7.302 0 0 0-2.404-.405c-4.174 0-7.558 3.51-7.558 7.838s3.384 7.837 7.558 7.837h13.216ZM105.682 128.716c3.504 0 6.344-2.808 6.344-6.27 0-3.463-2.84-6.27-6.344-6.27-1.156 0-2.24.305-3.173.839v-.056c0-6.492-5.326-11.756-11.896-11.756-5.29 0-9.775 3.413-11.32 8.132a8.025 8.025 0 0 0-2.163-.294c-4.38 0-7.93 3.509-7.93 7.837 0 4.329 3.55 7.838 7.93 7.838h28.552Z"
                            fill="#F1F1F2" fill-opacity=".38"></path>
                        <rect x=".445" y=".55" width="50.58" height="100.068" rx="7.5"
                            transform="rotate(6 -391.775 121.507) skewX(.036)" fill="#42CBA5" stroke="#316474"></rect>
                        <rect x=".445" y=".55" width="50.403" height="99.722" rx="7.5"
                            transform="rotate(6 -356.664 123.217) skewX(.036)" fill="#EEFAF6" stroke="#316474"></rect>
                        <path
                            d="m57.16 51.735-8.568 82.024a5.495 5.495 0 0 1-6.042 4.895l-32.97-3.465a5.504 5.504 0 0 1-4.897-6.045l8.569-82.024a5.496 5.496 0 0 1 6.041-4.895l5.259.553 22.452 2.36 5.259.552a5.504 5.504 0 0 1 4.898 6.045Z"
                            fill="#DFF3ED" stroke="#316474"></path>
                        <path
                            d="M26.2 102.937c.863.082 1.732.182 2.602.273.238-2.178.469-4.366.69-6.546l-2.61-.274c-.238 2.178-.477 4.365-.681 6.547Zm-2.73-9.608 2.27-1.833 1.837 2.264 1.135-.917-1.838-2.266 2.27-1.833-.92-1.133-2.269 1.834-1.837-2.264-1.136.916 1.839 2.265-2.27 1.835.92 1.132Zm-.816 5.286c-.128 1.3-.265 2.6-.41 3.899.877.109 1.748.183 2.626.284.146-1.31.275-2.614.413-3.925-.878-.092-1.753-.218-2.629-.258Zm16.848-8.837c-.506 4.801-1.019 9.593-1.516 14.396.88.083 1.748.192 2.628.267.496-4.794 1-9.578 1.513-14.37-.864-.143-1.747-.192-2.625-.293Zm-4.264 2.668c-.389 3.772-.803 7.541-1.183 11.314.87.091 1.74.174 2.601.273.447-3.912.826-7.84 1.255-11.755-.855-.15-1.731-.181-2.589-.306-.04.156-.069.314-.084.474Zm-4.132 1.736c-.043.159-.06.329-.077.49-.297 2.896-.617 5.78-.905 8.676l2.61.274c.124-1.02.214-2.035.33-3.055.197-2.036.455-4.075.627-6.115-.863-.08-1.724-.17-2.585-.27Z"
                            fill="#316474"></path>
                        <path
                            d="M17.892 48.489a1.652 1.652 0 0 0 1.468 1.803 1.65 1.65 0 0 0 1.82-1.459 1.652 1.652 0 0 0-1.468-1.803 1.65 1.65 0 0 0-1.82 1.459ZM231.807 136.678l-33.863 2.362c-.294.02-.54-.02-.695-.08a.472.472 0 0 1-.089-.042l-.704-10.042a.61.61 0 0 1 .082-.054c.145-.081.383-.154.677-.175l33.863-2.362c.294-.02.54.02.695.08.041.016.069.03.088.042l.705 10.042a.61.61 0 0 1-.082.054 1.678 1.678 0 0 1-.677.175Z"
                            fill="#fff" stroke="#316474"></path>
                        <path
                            d="m283.734 125.679-138.87 9.684c-2.87.2-5.371-1.963-5.571-4.823l-6.234-88.905c-.201-2.86 1.972-5.35 4.844-5.55l138.87-9.684c2.874-.2 5.371 1.963 5.572 4.823l6.233 88.905c.201 2.86-1.971 5.349-4.844 5.55Z"
                            fill="#EEFAF6"></path>
                        <path
                            d="M144.864 135.363c-2.87.2-5.371-1.963-5.571-4.823l-6.234-88.905c-.201-2.86 1.972-5.35 4.844-5.55l138.87-9.684c2.874-.2 5.371 1.963 5.572 4.823l6.233 88.905c.201 2.86-1.971 5.349-4.844 5.55"
                            stroke="#316474"></path>
                        <path
                            d="m278.565 121.405-129.885 9.058c-2.424.169-4.506-1.602-4.668-3.913l-5.669-80.855c-.162-2.31 1.651-4.354 4.076-4.523l129.885-9.058c2.427-.169 4.506 1.603 4.668 3.913l5.669 80.855c.162 2.311-1.649 4.354-4.076 4.523Z"
                            fill="#DFF3ED" stroke="#316474"></path>
                        <path
                            d="m230.198 129.97 68.493-4.777.42 5.996c.055.781-.098 1.478-.363 1.972-.27.5-.611.726-.923.748l-165.031 11.509c-.312.022-.681-.155-1.017-.613-.332-.452-.581-1.121-.636-1.902l-.42-5.996 68.494-4.776c.261.79.652 1.483 1.142 1.998.572.6 1.308.986 2.125.929l24.889-1.736c.817-.057 1.491-.54 1.974-1.214.413-.577.705-1.318.853-2.138Z"
                            fill="#42CBA5" stroke="#316474"></path>
                        <path
                            d="m230.367 129.051 69.908-4.876.258 3.676a1.51 1.51 0 0 1-1.403 1.61l-168.272 11.735a1.51 1.51 0 0 1-1.613-1.399l-.258-3.676 69.909-4.876a3.323 3.323 0 0 0 3.188 1.806l25.378-1.77a3.32 3.32 0 0 0 2.905-2.23Z"
                            fill="#EEFAF6" stroke="#316474"></path>
                        <circle transform="rotate(-3.989 1304.861 -2982.552) skewX(.021)" fill="#42CBA5"
                            stroke="#316474" r="15.997"></circle>
                        <path
                            d="m208.184 87.11-3.407-2.75-.001-.002a1.952 1.952 0 0 0-2.715.25 1.89 1.89 0 0 0 .249 2.692l.002.001 5.077 4.11v.001a1.95 1.95 0 0 0 2.853-.433l8.041-12.209a1.892 1.892 0 0 0-.573-2.643 1.95 1.95 0 0 0-2.667.567l-6.859 10.415Z"
                            fill="#fff" stroke="#316474"></path>
                    </svg>
                
                
                </div>
                
                <div class="part2">
                    <h3>WhatsApp Web</h3>
                
                    <p style="border-bottom: 1px solid rgb(49,61,69);">Now send and receive messages without keeping your phone online.<br>Use WhatsApp on up to 4
                        linked devices and 1 phone at the same time.</p>
                
                
                    <div class="lower">
                        <svg viewBox="0 0 21 18" width="25" height="18" class="">
                            <path fill="currentColor"
                                d="M10.426 14.235a.767.767 0 0 1-.765-.765c0-.421.344-.765.765-.765s.765.344.765.765-.344.765-.765.765zM4.309 3.529h12.235v8.412H4.309V3.529zm12.235 9.942c.841 0 1.522-.688 1.522-1.529l.008-8.412c0-.842-.689-1.53-1.53-1.53H4.309c-.841 0-1.53.688-1.53 1.529v8.412c0 .841.688 1.529 1.529 1.529H1.25c0 .842.688 1.53 1.529 1.53h15.294c.841 0 1.529-.688 1.529-1.529h-3.058z">
                            </path>
                        </svg>
                
                        <p>Make calls from desktop with WhatsApp for Windows. <a
                                href="https://www.whatsapp.com/download" target="_blank">Get it here</a>.</p>
                
                        
                    </div>
                
                    <img src="img/end-to-end.PNG" alt="">
                
                    
                </div>
                
            </div>
`;


function chat_part_ftn(img, name, messages) {

    var html = `
    <div class="chart-container">
    <div class="chart-manue manue">

        <div class="part11">
            <i id="back" onclick="backFtn()" style="color: var(--main-icon-fg); padding: 0px 2rem 0 1rem; font-size: 2rem; cursor: pointer;" class="fa-solid fa-arrow-left"></i>
            <span>
                <img src=${img} width="50" alt="photo">
            </span>

            <span class="name">
                <h3> ${name}</h3>
            </span>
        </div>

        <div onclick="contactmanuftn()" class="contact-manu hided">
            <ul>
                <li>Contact info</li>
                <li>Select messages</li>
                <li>Close chat</li>
                <li>Mute notification</li>
                <li>Disappearing messages</li>
                <li>clear messages</li>
                <li>Delete chat</li>
            </ul>
        </div>


        <div class="search-containered hided" onclick="search_ftn()">
        <div class="search-cotainer">
           
            <div class="search-box">
                <div class="search-box-icon">
                    <i class="fa-solid fa-magnifying-glass" id="search-icon"></i>
                </div>
                <div class="search-box-input">
                    <input type="search" id="search1" placeholder="Search here..." autocomplete="off">
                </div>
            </div>

        </div>

        </div>

        <div class="part22">
             <label for="search1" id="search"><i class="fa-solid fa-magnifying-glass" ></i> </label>

            <i class="fa-solid fa-ellipsis-vertical" id="contact_manue"></i>
        </div>


    </div>
    
    <div class="chart-body style-1" onscroll="myscroll()">

       <div class="goto-end">
            <i class="fa-solid fa-angle-down" onclick="gotoEnd()"></i> 
        </div>

        <div class="shartmsg">
            <img src="img/shartmsg.PNG" alt="messages">
        </div>
         
        ${messages}
         
    </div>

    <div class="chart-footer manue">

        <svg viewBox="0 0 24 24" width="24" height="24" class="ekdr8vow dhq51u3o"><path fill="currentColor" d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path></svg>

        <svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"></path></svg>
         
        <form autocomplete="off"> <input id="input" oninput="msgFocus()" type="text" placeholder="Type a message"> </form>

        <svg viewBox="0 0 24 24" id="onfocus" width="24" height="24" class=""><path fill="currentColor" d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"></path></svg>
         
        <svg viewBox="0 0 24 24" id="offocus" width="24" height="24" class=""><path fill="currentColor" d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg>
    </div>

</div>
    `
    return html
}

function hide_show_fnt() {
    document.querySelector(".main-part").classList.toggle("hide_item")
    document.querySelector(".main-part").classList.toggle("show_item")
    document.querySelector(".chart-part").classList.toggle("show_item")
    document.querySelector(".chart-part").classList.toggle("hide_item")
}

chartPart.innerHTML = welcomes_html;

document.getElementById("irfan").addEventListener("click", () => {
    chartPart.innerHTML = chat_part_ftn("img/irfan.jpg", "Irfan Ali", irfan_html);
    hide_show_fnt()
});
document.getElementById("abdulla").addEventListener("click", () => {
    chartPart.innerHTML = chat_part_ftn("img/abdulla.jpg", "Abdulla", abdulla_html);
    hide_show_fnt()
});
document.getElementById("webTec").addEventListener("click", () => {
    chartPart.innerHTML = chat_part_ftn("img/group.png", "Web Technologies", webTech_html);
    hide_show_fnt()
});
document.getElementById("sunsan").addEventListener("click", () => {
    chartPart.innerHTML = chat_part_ftn("img/sunsan.jpg", "Sunsan Group", sunsan_html);
    hide_show_fnt()
});
document.getElementById("waheed").addEventListener("click", () => {
    chartPart.innerHTML = chat_part_ftn("img/waheed.jpg", "Waheed clg", waheed_html);
    hide_show_fnt()
});
document.getElementById("mazhar").addEventListener("click", () => {
    chartPart.innerHTML = chat_part_ftn("img/mazhar.jpg", "Mazhar", mazhar_html);
    hide_show_fnt()
});
document.getElementById("enterpirse").addEventListener("click", () => {
    chartPart.innerHTML = chat_part_ftn("img/erp.jpg", "Enterprise System", enterprise_html);
    hide_show_fnt()
});
document.getElementById("moshin").addEventListener("click", () => {
    chartPart.innerHTML = chat_part_ftn("img/hmoshin.jpg", "Hafiz Mohsin", moshin_html);
    hide_show_fnt()
});

document.getElementById("irfan2").addEventListener("click", () => {
    chartPart.innerHTML = chat_part_ftn("img/irfan2.jpg", "Irfan 2", irfan2_html);
    hide_show_fnt()
});
document.getElementById("infrasteucture").addEventListener("click", () => {
    chartPart.innerHTML = chat_part_ftn("img/group.png", "IT Infrasteucture", infastructure_html);
    hide_show_fnt()
});

document.getElementById("bsit").addEventListener("click", () => {
    chartPart.innerHTML = chat_part_ftn("img/bsit.jpg", "BS IT(2019-23)", bsit_html);
    hide_show_fnt()
});
document.getElementById("mining").addEventListener("click", () => {
    chartPart.innerHTML = chat_part_ftn("img/group.png", "Data Mining", mining_html);
    hide_show_fnt()
});
document.getElementById("masood").addEventListener("click", () => {
    chartPart.innerHTML = chat_part_ftn("img/masood.jpg", "Masood Clg", irfan2_html);
    hide_show_fnt()
});



function backFtn() {
    hide_show_fnt()
}



var doted_btn = document.getElementById("doted");
var manu_list = document.querySelector(".manu-list");
doted_btn.addEventListener("click", () => {
    manu_list.classList.toggle("hide")
});


function contactmanuftn() {
    document.querySelector(".contact-manu").classList.toggle("hided");

    console.log("sdf")

}


var all_single = document.querySelectorAll(".single");

var contact_list_btn = document.querySelector("#contact-list-btn")
contact_list_btn.addEventListener('click', () => {
    contact_list_btn.classList.toggle("rotated")

    for (const box of all_single) {
        box.classList.toggle('display');
    }
})


function myFocus() {
    document.getElementById("search-icon").classList.toggle("fa-magnifying-glass")
    document.getElementById("search-icon").classList.toggle("fa-arrow-left")
    document.getElementById("search-icon").style.color = "#0c7765";
}


// document.getElementById("search-icon").addEventListener('focusout',myFocusOut)

function myFocusOut() {
    document.getElementById("search-icon").classList.toggle("fa-arrow-left")
    document.getElementById("search-icon").classList.toggle("fa-magnifying-glass")
    document.getElementById("search-icon").style.color = "var(--main-icon-fg)";
}





//  =========================== chat part ====================


var chart_body = document.querySelector(".chart-body");
// var goto_end = document.querySelector(".goto-end")



function gotoEnd() {
    chart_body.scrollTop = chart_body.scrollHeight;
};

chart_body.scrollTop = chart_body.scrollHeight;



var search_cotainer = document.querySelector(".search-containered");
var search = document.getElementById("search")

function search_ftn() {
    search_cotainer.classList.toggle("hided")
};





function msgFocus() {

    var x = document.getElementById("input").value.length;

    if (x == 0) {
        document.getElementById("onfocus").style.display = "block"
        document.getElementById("offocus").style.display = "none"
    }
    else {

        document.getElementById("offocus").style.display = "block"
        document.getElementById("onfocus").style.display = "none";

    }
}
